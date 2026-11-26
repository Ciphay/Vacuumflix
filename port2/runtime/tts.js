'use strict';

const cp = require('child_process');
const fs = require('fs');
const net = require('net');
const path = require('path');

const READERS = [
  { name: 'org.gnome.Orca1.Service', path: '/org/gnome/Orca1/Service',
    stop: ['/org/gnome/Orca1/Service/SpeechManager', 'org.gnome.Orca1.SpeechManager.InterruptSpeech', 'true'] },
  { name: 'org.gnome.Orca.Service', path: '/org/gnome/Orca/Service',
    stop: ['/org/gnome/Orca/Service/SpeechManager', 'org.gnome.Orca.Module.ExecuteCommand', 'InterruptSpeech', 'true'] },
  { name: 'org.stormux.Cthulhu1.Service', path: '/org/stormux/Cthulhu1/Service',
    stop: ['/org/stormux/Cthulhu1/Service/SpeechManager', 'org.stormux.Cthulhu1.SpeechManager.InterruptSpeech', 'true'] },
];
const POLL_MS = 5000;

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

function detectSync(force) {
  let reader = null;
  for (const r of READERS) if (runSync('gdbus', busArgs(r.name)) === '(true,)') { reader = r; break; }
  const spd = !!spdSocket();
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

async function screenReaderSetting() {
  const out = await run('gsettings', ['get', 'org.gnome.desktop.a11y.applications', 'screen-reader-enabled']);
  return out === 'true';
}

async function findReader() {
  const out = await run('gdbus', ['call', '--session', '--dest', 'org.freedesktop.DBus',
    '--object-path', '/org/freedesktop/DBus', '--method', 'org.freedesktop.DBus.ListNames']);
  if (out === null) return null;
  for (const r of READERS) if (out.includes("'" + r.name + "'")) return r;
  return null;
}

function spdSocket() {
  const m = /unix_socket:path=(.+)/.exec(process.env.SPEECHD_ADDRESS || '');
  const p = m ? m[1] : path.join(process.env.XDG_RUNTIME_DIR || '/run/user/' + (process.getuid ? process.getuid() : 1000), 'speech-dispatcher', 'speechd.sock');
  try { return fs.statSync(p).isSocket() ? p : null; } catch { return null; }
}

function ssipClient(sock, onEvent, log) {
  let c = null, buf = '', waiters = [], ready = null;
  function reset() { try { c && c.destroy(); } catch {} c = null; ready = null; waiters.splice(0).forEach(w => w(null)); }
  function onLine(l) {
    if (/^70\d /.test(l)) { if (/^70[24] /.test(l)) onEvent('end'); return; }
    if (/^\d{3}-/.test(l)) return;
    const w = waiters.shift(); if (w) w(l);
  }
  function connect() {
    if (ready) return ready;
    ready = new Promise((resolve) => {
      c = net.createConnection(sock);
      c.setEncoding('utf8');
      c.on('data', d => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i).replace(/\r$/, ''); buf = buf.slice(i + 1); onLine(l); } });
      c.on('error', e => { log('[tts] speechd: ' + e.message); reset(); resolve(false); });
      c.on('close', () => { reset(); });
      c.on('connect', async () => {
        const ok = (await cmd('SET SELF CLIENT_NAME vacuumflix:ui:main')) && (await cmd('SET SELF PRIORITY MESSAGE')) && (await cmd('SET SELF NOTIFICATION all on'));
        resolve(!!ok);
      });
    });
    return ready;
  }
  function cmd(line) {
    return new Promise((resolve) => {
      if (!c) return resolve(null);
      const t = setTimeout(() => resolve(null), 2000);
      waiters.push(l => { clearTimeout(t); resolve(l); });
      c.write(line + '\r\n');
    });
  }
  return {
    async speak(text) {
      if (!(await connect())) { reset(); return null; }
      const r = await cmd('SPEAK');
      if (!r || !/^230/.test(r)) return null;
      const body = text.split('\n').map(l => (l.startsWith('.') ? '.' + l : l)).join('\r\n');
      const q = await new Promise((resolve) => {
        const t = setTimeout(() => resolve(null), 2000);
        waiters.push(l => { clearTimeout(t); resolve(l); });
        c.write(body + '\r\n.\r\n');
      });
      return q && /^225/.test(q) ? 'ok' : null;
    },
    async cancel() { if (await connect()) await cmd('CANCEL SELF'); },
  };
}

module.exports = function createTextToSpeech({ log = () => {} } = {}) {
  const listeners = new Map();
  const uiLang = ((process.env.LC_ALL || process.env.LANG || 'en').split(/[._@]/)[0] || 'en').replace('_', '-');
  const force = process.env.VACUUMFLIX_TTS;
  const first = force === '0' ? { reader: null, backend: null, enabled: false } : detectSync(force);
  let enabled = first.enabled;
  let backend = first.backend;
  let reader = first.reader;
  let pending = null;
  log('[tts] start: enabled=' + enabled + ' backend=' + backend + (reader ? ' reader=' + reader.name : ''));
  let sc = null;
  const spd = () => sc || (sc = ssipClient(spdSocket() || '', (kind) => { if (kind === 'end' && current && backend === 'spd') finish(current, 'said'); }, log));
  let queue = [];
  let current = null;
  let nextId = 1;

  function emit(type, ev) {
    for (const fn of (listeners.get(type) || []).slice()) {
      try { fn(ev); } catch (e) { log('[tts listener THROW]', (e && e.stack) || e); }
    }
  }

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
    const nextBackend = found ? 'orca' : (spdSocket() ? 'spd' : null);
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
      item.timer = setTimeout(() => finish(item, 'said'), estimate(item.text));
    } else if (backend === 'spd') {
      item.timer = setTimeout(() => finish(item, 'said'), estimate(item.text) * 2);
      spd().speak(item.text).then((ok) => { if (!ok) finish(item, 'said'); });
    } else {
      setImmediate(() => finish(item, 'said'));
    }
  }

  function stop() {
    const dropped = queue; queue = [];
    if (current) {
      const item = current;
      if (backend === 'spd') spd().cancel();
      if (backend === 'orca' && reader) cp.execFile('gdbus', ['call', '--session', '--dest', reader.name,
        '--object-path', reader.stop[0], '--method', ...reader.stop.slice(1)], { timeout: 2000 }, () => {});
      finish(item, 'said');
    }
    for (const item of dropped) if (item.cb) { try { item.cb('said', {}); } catch {} }
  }

  const api = {
    VERBOSITY_LOW: 0,
    VERBOSITY_HIGH: 1,
    get capabilities() { return { enabled, supported: true }; },
    get enabled() { return enabled; },
    languages: [uiLang],
    language: uiLang,
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
    open(_arg, cb) { if (typeof cb === 'function') setImmediate(() => cb(true)); },
    close(_arg, cb) { if (typeof cb === 'function') setImmediate(() => cb(true)); },
    stopAndFlush(cb) { stop(); if (typeof cb === 'function') setImmediate(() => cb('said', {})); },
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
