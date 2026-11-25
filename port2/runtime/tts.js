'use strict';
// Text-to-speech bridge for Netflix's TV UI (nrdp.texttospeech).
//
// The TV UI has its own voice guidance for blind users: it calls
// nrdp.texttospeech.say(text, cb) for every focus change. On a TV the
// platform speaks it; here we hand it to the user's screen reader.
//
// Speech goes, in order of preference:
//   1. Orca (and Orca-compatible readers) over D-Bus, so the user's own
//      voice, rate and interruption settings apply.
//   2. Speech Dispatcher (spd-say), installed on SteamOS, Bazzite and most desktops.
//
// It is only switched on while a screen reader is running, so sighted users
// never hear it. VACUUMFLIX_TTS=1 forces it on, VACUUMFLIX_TTS=0 forces it off.

const cp = require('child_process');

// Orca 51+ uses the Orca1 names, Orca 49-50 the older ones. Cthulhu offers the same API.
const READERS = [
  { name: 'org.gnome.Orca1.Service', path: '/org/gnome/Orca1/Service',
    stop: ['/org/gnome/Orca1/Service/SpeechManager', 'org.gnome.Orca1.SpeechManager.InterruptSpeech', 'true'] },
  { name: 'org.gnome.Orca.Service', path: '/org/gnome/Orca/Service',
    stop: ['/org/gnome/Orca/Service/SpeechManager', 'org.gnome.Orca.Module.ExecuteCommand', 'InterruptSpeech', 'true'] },
  { name: 'org.stormux.Cthulhu1.Service', path: '/org/stormux/Cthulhu1/Service',
    stop: ['/org/stormux/Cthulhu1/Service/SpeechManager', 'org.stormux.Cthulhu1.SpeechManager.InterruptSpeech', 'true'] },
];
const POLL_MS = 3000;

// Rough speaking time at a normal screen reader rate (about 15 characters a second).
function estimate(text) { return Math.min(8000, 300 + text.length * 65); }

function run(cmd, args, timeout = 1500) {
  return new Promise((resolve) => {
    cp.execFile(cmd, args, { timeout }, (err, stdout) => resolve(err ? null : String(stdout).trim()));
  });
}

function runSync(cmd, args) {
  try { return String(cp.execFileSync(cmd, args, { timeout: 1500, stdio: ['ignore', 'pipe', 'ignore'] })).trim(); }
  catch { return null; }
}

function busArgs(name) {
  return ['call', '--session', '--dest', 'org.freedesktop.DBus', '--object-path', '/org/freedesktop/DBus',
    '--method', 'org.freedesktop.DBus.NameHasOwner', name];
}

// Startup check. It must be synchronous: the TV UI reads capabilities.enabled once while
// it boots, so the answer has to be known before the UI scripts run.
function detectSync(force) {
  let reader = null;
  for (const r of READERS) if (runSync('gdbus', busArgs(r.name)) === '(true,)') { reader = r; break; }
  const spd = runSync('sh', ['-c', 'command -v spd-say']) !== null;
  const backend = reader ? 'orca' : (spd ? 'spd' : null);
  let on;
  if (force === '1' || force === '0') on = force === '1';
  else on = !!reader || runSync('gsettings', ['get', 'org.gnome.desktop.a11y.applications', 'screen-reader-enabled']) === 'true';
  return { reader, backend, enabled: on && !!backend };
}

async function nameHasOwner(name) {
  const out = await run('gdbus', ['call', '--session', '--dest', 'org.freedesktop.DBus',
    '--object-path', '/org/freedesktop/DBus', '--method', 'org.freedesktop.DBus.NameHasOwner', name]);
  return out === '(true,)';
}

// GNOME's "screen reader" switch. Used to turn on the Speech Dispatcher fallback
// when a screen reader is on but does not offer the D-Bus API (for example Orca before 49).
async function screenReaderSetting() {
  const out = await run('gsettings', ['get', 'org.gnome.desktop.a11y.applications', 'screen-reader-enabled']);
  return out === 'true';
}

async function findReader() {
  for (const r of READERS) if (await nameHasOwner(r.name)) return r;
  return null;
}

async function haveSpdSay() {
  return (await run('sh', ['-c', 'command -v spd-say'])) !== null;
}

module.exports = function createTextToSpeech({ log = () => {} } = {}) {
  const listeners = new Map();
  const force = process.env.VACUUMFLIX_TTS;
  const first = force === '0' ? { reader: null, backend: null, enabled: false } : detectSync(force);
  let enabled = first.enabled;
  let backend = first.backend; // 'orca' | 'spd' | null
  let reader = first.reader;   // the READERS entry in use
  let pending = null;          // a changed reading waiting for confirmation
  log('[tts] start: enabled=' + enabled + ' backend=' + backend + (reader ? ' reader=' + reader.name : ''));
  let queue = [];
  let current = null; // { id, cb, child, timer }
  let nextId = 1;

  function emit(type, ev) {
    for (const fn of (listeners.get(type) || []).slice()) {
      try { fn(ev); } catch (e) { log('[tts listener THROW]', (e && e.stack) || e); }
    }
  }

  // The TV UI reloads itself when capabilities.enabled changes, so only report a change
  // after two readings in a row agree. A single slow D-Bus reply must not reload the app.
  function setEnabled(on, why) {
    if (on === enabled) { pending = null; return; }
    if (pending !== on) { pending = on; return; }
    pending = null;
    const old = { enabled };
    enabled = on;
    log('[tts] enabled=' + on + ' backend=' + backend + ' (' + why + ')');
    emit('capabilities', { type: 'capabilities', old, data: api.capabilities });
  }

  async function detect() {
    const found = await findReader();
    const nextBackend = found ? 'orca' : ((await haveSpdSay()) ? 'spd' : null);
    if (nextBackend) { reader = found; backend = nextBackend; }
    if (force === '1' || force === '0') return setEnabled(force === '1' && !!backend, 'forced');
    const on = !!found || (await screenReaderSetting());
    setEnabled(on && !!backend, 'detected');
  }

  function finish(item, name) {
    if (current !== item) return;
    clearTimeout(item.timer);
    current = null;
    if (item.cb) { try { item.cb(name, {}); } catch (e) { log('[tts cb THROW]', e); } }
    pump();
  }

  function pump() {
    if (current || !queue.length) return;
    const item = current = queue.shift();
    if (item.cb) { try { item.cb('saying', {}); } catch (e) { log('[tts cb THROW]', e); } }
    if (item.silence != null) { item.timer = setTimeout(() => finish(item, 'said'), item.silence); return; }
    if (backend === 'orca') {
      cp.execFile('gdbus', ['call', '--session', '--dest', reader.name, '--object-path', reader.path,
        '--method', reader.name + '.PresentMessage', item.text], { timeout: 2000 }, (err) => {
        if (err) log('[tts] orca PresentMessage failed: ' + err.message);
      });
      // Orca does not report when it has finished, so estimate it.
      item.timer = setTimeout(() => finish(item, 'said'), estimate(item.text));
    } else if (backend === 'spd') {
      // spd-say -w returns when speech ends. The estimate is a safety net in case it never does,
      // so one stuck message cannot hold up the rest of the UI's speech.
      item.child = cp.execFile('spd-say', ['-w', '-P', 'message', '--', item.text], { timeout: 30000 }, () => finish(item, 'said'));
      item.timer = setTimeout(() => finish(item, 'said'), estimate(item.text) * 2);
    } else {
      setImmediate(() => finish(item, 'said'));
    }
  }

  function stop() {
    const dropped = queue; queue = [];
    if (current) {
      const item = current;
      if (item.child) { try { item.child.kill(); } catch {} }
      if (backend === 'spd') cp.execFile('spd-say', ['-S'], () => {});
      if (backend === 'orca' && reader) cp.execFile('gdbus', ['call', '--session', '--dest', reader.name,
        '--object-path', reader.stop[0], '--method', ...reader.stop.slice(1)], { timeout: 2000 }, () => {});
      finish(item, 'said');
    }
    // The UI only listens for "saying" and "said", so cut-off speech also ends with "said".
    for (const item of dropped) if (item.cb) { try { item.cb('said', {}); } catch {} }
  }

  const api = {
    VERBOSITY_LOW: 0,
    VERBOSITY_HIGH: 1,
    get capabilities() { return { enabled, supported: true }; },
    get enabled() { return enabled; },
    languages: ['en'],
    language: 'en',
    voices: [],
    voice: null,
    rate: 1,
    pitch: 1,
    verbosity: 1,
    allowed: true,
    addEventListener(type, fn) { (listeners.get(type) || listeners.set(type, []).get(type)).push(fn); },
    removeEventListener(type, fn) { const a = listeners.get(type); if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } },
    say(text, cb) {
      if (typeof text !== 'string' || !text.trim() || !enabled) { if (cb) setImmediate(() => cb('said', {})); return; }
      const item = { id: nextId++, text: text.replace(/\s+/g, ' ').trim(), cb };
      queue.push(item); pump();
      return item.id;
    },
    silence(ms, cb) {
      if (!(ms >= 0)) { if (cb) setImmediate(() => cb('said', {})); return; }
      queue.push({ id: nextId++, silence: ms, cb }); pump();
    },
    // Called when the UI takes or gives back the speech resource. It only needs the callback.
    open(_arg, cb) { if (typeof cb === 'function') setImmediate(() => cb(true)); },
    close(_arg, cb) { if (typeof cb === 'function') setImmediate(() => cb(true)); },
    stopAndFlush(cb) { stop(); if (typeof cb === 'function') setImmediate(() => cb('said', {})); },
    // Compatibility with the old stub's names.
    speak(text, cb) { return api.say(text, cb); },
    cancel() { stop(); },
    isSpeaking: () => !!current,
  };

  if (force !== '0' && force !== '1') {
    const t = setInterval(detect, POLL_MS);
    if (t.unref) t.unref();
  }
  return api;
};
