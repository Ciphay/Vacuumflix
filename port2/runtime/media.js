const https = require('https'), http = require('http'), fs = require('fs'), path = require('path');
const DUMP = process.env.MEDIADUMP || null;
if (DUMP) fs.mkdirSync(DUMP, { recursive: true });
const agent = { 'https:': new https.Agent({ keepAlive: true, maxSockets: 8 }), 'http:': new http.Agent({ keepAlive: true, maxSockets: 8 }) };

const CHILDREN = new Set();
const killAll = () => { for (const c of CHILDREN) { try { c.kill('SIGKILL'); } catch {} } CHILDREN.clear(); };
process.on('exit', killAll);
for (const sg of ['SIGTERM', 'SIGINT', 'SIGHUP']) process.on(sg, () => { killAll(); process.exit(0); });

function mdhdTimescale(buf) { const i = buf.indexOf('mdhd'); if (i < 0) return 0; const v = buf[i + 4]; return buf.readUInt32BE(i + 4 + (v === 1 ? 20 : 12)); }
function tfdtSec(buf, ts) { const i = buf.indexOf('tfdt'); if (i < 0 || !ts) return undefined; const v = buf[i + 4]; const t = v === 1 ? Number(buf.readBigUInt64BE(i + 8)) : buf.readUInt32BE(i + 8); return t / ts; }

function segFps(buf, ts) { if (!ts) return 0; let dur = 0;
  const i = buf.indexOf('tfhd'); if (i > 0) { const fl = buf.readUInt32BE(i + 4) & 0xffffff; let o = i + 12; if (fl & 1) o += 8; if (fl & 2) o += 4; if (fl & 8) { dur = buf.readUInt32BE(o); } }
  const j = buf.indexOf('trun'); if (j > 0) { const fl = buf.readUInt32BE(j + 4) & 0xffffff; let o = j + 12; if (fl & 1) o += 4; if (fl & 4) o += 4; if ((fl & 0x100) && o + 4 <= buf.length) { const d = buf.readUInt32BE(o); if (d > 0) dur = d; } }
  return dur > 0 ? ts / dur : 0; }

function fixSdi(buf) {
  let b = null;
  for (let i = buf.indexOf('tfhd'); i > 0; i = buf.indexOf('tfhd', i + 4)) {
    const fl = buf.readUInt32BE(i + 4) & 0xffffff; if (!(fl & 2)) continue;
    const o = i + 12 + ((fl & 1) ? 8 : 0);
    if (o + 4 <= buf.length && buf.readUInt32BE(o) !== 1) { if (!b) b = Buffer.from(buf); b.writeUInt32BE(1, o); }
  }
  return b || buf;
}

module.exports = function make(ctx) {
  const { mlog, mono, logProxy } = ctx;
  let tid = 0, srcId = 0, bufId = 0;
  const tracks = new Map(), requests = new Map(), sources = new Map(), buffers = new Map(), players = new Map();
  let mr;

  function startRequest(r) {
    const u = new URL(r.url); const lib = u.protocol === 'https:' ? https : http;
    const headers = {}; if (r.end >= 0) headers.Range = `bytes=${r.start}-${r.end}`; else if (r.start > 0) headers.Range = `bytes=${r.start}-`;
    const t0 = mono();
    mr.emit('onloadstart', { requestId: r.id, timestamp: t0 });
    const req = lib.get(r.url, { headers, agent: agent[u.protocol] }, res => {
      if (r.aborted) { res.destroy(); return; }
      if (res.statusCode >= 400) { res.resume(); mr.emit('onerror', { requestId: r.id, timestamp: mono(), errorcode: 'HTTP', httpcode: res.statusCode }); return; }
      const hdrs = Object.entries(res.headers).map(([k, v]) => k + ': ' + v);
      mr.emit('onfirstbyte', { requestId: r.id, timestamp: mono(), start: t0, headers: hdrs, connect: 0 });
      const chunks = []; let n = 0;
      res.on('data', d => { chunks.push(d); n += d.length; });
      res.on('end', () => {
        if (r.aborted) return;
        const body = Buffer.concat(chunks); r.body = body;
        const ts = mono();
        mr.emit('onprogress', { progress: [{ requestId: r.id, timestamp: ts, bytes: body.length, rt: [] }] });
        mr.emit('onchunkfirstbyte', { requestId: r.id, timestamp: ts, chunkId: 0 });
        const ab = r.responseType === 0 ? require('./webcrypto').u8(body).buffer : undefined;
        mr.emit('onchunkcomplete', { requestId: r.id, timestamp: ts, chunkId: 0, chunkSize: body.length, data: ab });
        mr.emit('oncomplete', { requestId: r.id, timestamp: ts, data: ab });
        mlog('req.done', r.id, 'track', r.track, 'bytes', body.length);
      });
      res.on('error', e => mr.emit('onerror', { requestId: r.id, timestamp: mono(), errorcode: 'SOCKET', httpcode: 0 }));
    });
    req.on('error', e => { if (!r.aborted) { mlog('req.error', r.id, e.message); mr.emit('onerror', { requestId: r.id, timestamp: mono(), errorcode: 'SOCKET', httpcode: 0 }); } });
    r.http = req;
  }

  function dump(bufferId, kind, data) {
    if (!DUMP) return;
    const b = buffers.get(bufferId); const f = path.join(DUMP, `buf${bufferId}_${b ? b.type : 'x'}.bin`);
    fs.appendFileSync(f, Buffer.from(data)); fs.appendFileSync(path.join(DUMP, 'index.txt'), `${bufferId} ${kind} ${data.byteLength || data.length}\n`);
  }

  const base = {
    synchronousTrackCreate: true,
    addDownloadTracks(c) { return { success: true, trackids: (c || []).map(cfg => { const id = ++tid; tracks.set(id, cfg); return id; }) }; },
    removeDownloadTracks(ids) { (ids || []).forEach(i => tracks.delete(i)); return { success: true }; },
    reconfigureDownloadTrack(id, cfg, cb) { cb && setImmediate(() => cb({ success: true })); },
    createRequest(id, track, url, start, end, responseType) {
      const r = { id, track, url, start: start || 0, end: end === undefined ? -1 : end, responseType, appended: false }; requests.set(id, r);
      setImmediate(() => startRequest(r)); return { success: true };
    },
    swapRequestURL(id, url) { const r = requests.get(id); if (r) r.url = url; return { success: true }; },
    abortRequest(id) { const r = requests.get(id); if (r) { r.aborted = true; try { r.http && r.http.destroy(); } catch {} } return { success: true }; },
    createMediaSource(_, x) { const id = ++srcId; sources.set(id, { id, buffers: [], player: x }); mlog('createMediaSource', id, x); return { success: true, sourceid: id }; },
    destroyMediaSource(id) { sources.delete(id); return { success: true }; },
    createSourceBuffers(sid, types) {
      const ids = (types || []).map(t => { const id = ++bufId; buffers.set(id, { id, source: sid, type: t === 0 ? 'audio' : 'video', parts: [], eos: false }); const s = sources.get(sid); s && s.buffers.push(id); return id; });
      mlog('createSourceBuffers', sid, types, ids); return { success: true, bufferids: ids };
    },
    attachDataToSourceBuffer(data, sid, bid, flag) { const b = buffers.get(bid); if (b) { b.parts.push({ kind: 'data', data: Buffer.from(data) }); dump(bid, 'data', data); }
      mlog('attachData', bid, data && data.byteLength, 'flag', flag); ctx.onAppend && ctx.onAppend(bid); return { success: true }; },
    attachRequestToSourceBuffer(rid, bid, flag, sid) { const r = requests.get(rid), b = buffers.get(bid);
      mlog('attachRequest', rid, '->buf', bid, 'flag', flag, 'have', r && r.body && r.body.length);
      if (r && b) { r.appended = true; b.parts.push({ kind: 'req', req: r }); const go = () => { if (r.body) { dump(bid, 'req' + rid, r.body); ctx.onAppend && ctx.onAppend(bid); } else setTimeout(go, 20); }; go(); }
      return { success: true }; },
    endOfStream(bid) { const b = buffers.get(bid); if (b) b.eos = true; mlog('endOfStream', bid); return { success: true }; },
    sourceBufferSetTimestampOffset(sid, bid, off, ts) { const b = buffers.get(bid); if (b) b.tsOffset = [off, ts]; mlog('tsOffset', bid, off, ts); return { success: true }; },
    getMediaSourceBufferTimeRange(sid, cb) { setImmediate(() => cb({ success: true, startPts: 0, endPts: 0 })); },
    mediaBufferPoolStatus() { const f = () => ({ usedSize: 0, limitSize: 64 << 20, reservable: 64 << 20, size: 64 << 20 }); return { success: true, video: f(), audio: f() }; },
    mediaBufferPoolSizeLimit() { return 128 << 20; },
    stats: { update() {}, audioSkipback: 0, audioForward: 0, videoSkipback: 0, videoForward: 0 },
    attachMediaSource(path_, sid, cb) { cb && setImmediate(cb); return { success: true }; },
    _tracks: tracks, _requests: requests, _sources: sources, _buffers: buffers,
  };
  mr = logProxy('mediarequest', base);

  const cp = require('child_process');
  const ST = { CLOSED: 0, OPENING: 1, STOPPED: 2, PLAYING: 3, PAUSED: 4, BACKGROUNDED: 5 };
  const FRAME_DIR = '/dev/shm';
  function mp4Size(buf) {
    const find = (b, type, from, to) => { let o = from; while (o + 8 <= to) { const sz = b.readUInt32BE(o); const t = b.toString('latin1', o + 4, o + 8); if (sz < 8) return null; if (t === type) return { start: o + 8, end: Math.min(o + sz, to) }; o += sz; } return null; };
    const moov = find(buf, 'moov', 0, buf.length); if (!moov) return null;
    let o = moov.start; while (o + 8 <= moov.end) { const sz = buf.readUInt32BE(o); const t = buf.toString('latin1', o + 4, o + 8); if (sz < 8) break;
      if (t === 'trak') { const tk = find(buf, 'tkhd', o + 8, o + sz); if (tk) { const w = buf.readUInt32BE(tk.end - 8) / 65536, h = buf.readUInt32BE(tk.end - 4) / 65536; if (w > 0 && h > 0) return { w: Math.round(w), h: Math.round(h) }; } }
      o += sz; }
    return null;
  }
  function makePlayer(index) {
    const base = Object.assign({ index, path: '/mediasourceplayer/' + index, state: ST.CLOSED }, ST);
    const p = logProxy('player' + index, base);
    let pauseKeep = null; let startPts = 0, openArgs = null, pipe = null, paused = false, ticker = null, openTimer = null;
    const setState = (s) => { base.state = s; base.emit('statechanged', { type: 'statechanged', state: s, time: mono() }); };
    const mySource = () => { let best = null; for (const sc of sources.values()) if (sc.player === base.path && (!best || sc.id > best.id)) best = sc; return best; };
    const frameFile = FRAME_DIR + '/gibbon_video_' + index + '.rgba';
    const clearFrame = () => { try { fs.renameSync(frameFile, frameFile + '.last'); } catch {} };
    const killPipe = () => { clearInterval(pauseKeep); try { prReset(); } catch {} clearFrame(); if (pipe) { pipe.dead = true; for (const c of pipe.chains) c.kill(); pipe = null; } };
    const isInit = (d) => d.length > 8 && d.toString('latin1', 4, 8) === 'ftyp' && d.indexOf('moov') > 0;
    const fps = () => (openArgs && openArgs.videoAttributes && openArgs.videoAttributes.frameRateValue) ? openArgs.videoAttributes.frameRateValue / (openArgs.videoAttributes.frameRateScale || 1) : 24;

    const pr = { q: [], clock0: null, first: 0, timer: null, src: null, srcs: new Set(), pausedAt: 0, nextPts: undefined, st: { in: 0, shown: 0, drop: 0, reanchor: 0, lagMax: 0, t0: Date.now() } };
    if (process.env.MEDIALOG) setInterval(() => { const q = pr.st; if (q.in) { const sec = (Date.now() - q.t0) / 1000; mlog('vid-stats', 'dec_fps=' + (q.in / sec).toFixed(1), 'show_fps=' + (q.shown / sec).toFixed(1), 'drop=' + q.drop, 'reanc=' + q.reanchor, 'lagMax=' + Math.round(q.lagMax) + 'ms', 'fila=' + pr.q.length); pr.st = { in: 0, shown: 0, drop: 0, reanchor: 0, lagMax: 0, t0: Date.now() }; } }, 2000).unref();
    const prReset = () => { clearTimeout(pr.timer); pr.timer = null; pr.q.length = 0; pr.clock0 = null; pr.src = null; pr.srcs.clear(); pr.nextPts = undefined; };
    function prRun() {
      if (pr.timer || paused) return;
      while (pr.q.length) {
        const f = pr.q[0], now = Date.now();
        if (pr.clock0 === null) { pr.clock0 = now + 60; pr.first = f.pts; }
        const due = pr.clock0 + (f.pts - pr.first) * 1000;
        if (now - due > pr.st.lagMax) pr.st.lagMax = now - due;
        if (now > due + 1500) { pr.st.reanchor++; pr.clock0 = now + 60 - (f.pts - pr.first) * 1000; continue; }
        if (now > due + 90 && pr.q.length > 1) { pr.st.drop++; pr.q.shift(); f.rel && f.rel(f.frame); continue; }
        if (now >= due - 4) { pr.st.shown++; pr.q.shift(); f.st.onFrame(f.sz, f.frame, Math.round((f.pts - pr.first) * 1000)); f.rel && f.rel(f.frame); continue; }
        pr.timer = setTimeout(() => { pr.timer = null; prRun(); }, Math.max(1, due - now)); break;
      }
      if (pr.q.length < 3) for (const sr of pr.srcs) { try { sr.stdout.resume(); } catch {} }
    }
    function prEnqueue(st, sz, frame, pts, src) { pr.st.in++; pr.src = src; pr.srcs.add(src); pr.q.push({ st, sz, frame, pts }); if (pr.q.length >= 6) { try { src.stdout.pause(); } catch {} } prRun(); }

    function makeChain(b, kind, st) {
      const segs = []; let cursor = 0, cur = null, si = 0, proc = null, fed = 0, dead = false, done = false;
      const c = { kind, kill() { dead = true; if (proc) { try { proc.kill('SIGKILL'); } catch {} } }, signal(sg) { if (proc) try { proc.kill(sg); } catch {} }, get done() { return done; } };
      function spawnSeg() {
        const sg = segs[si];
        const RE = kind === 'video' ? [] : ['-re'];
        const args = sg.raw ? ['-hide_banner', '-loglevel', 'error', ...RE, '-f', 'rawvideo', '-pix_fmt', 'yuv420p', '-video_size', sg.raw.w + 'x' + sg.raw.h, '-framerate', String(fps()), '-i', 'pipe:0']
                            : ['-hide_banner', '-loglevel', 'error', ...RE, '-f', 'mp4', '-i', 'pipe:0'];
        let sz = null;
        if (kind === 'video') { sz = sg.raw || mp4Size(sg.chunks[0]); if (!sz) { sg.skip = true; return false; } if (!sg.raw) args.push('-map', '0:v:0'); args.push('-pix_fmt', 'rgba', '-f', 'rawvideo', 'pipe:1'); }
        else args.push('-vn', '-ac', '2', '-ar', '48000', '-f', 'pulse', '-name', 'Netflix', '-stream_name', 'Netflix', '-buffer_duration', '100', 'Netflix');
        mlog('ffmpeg', kind, 'seg', si, sz);
        proc = cp.spawn('ffmpeg', args, { stdio: ['pipe', 'pipe', 'pipe'] }); fed = sg.resumeFed || 0; sg.resumeFed = 0;
        const me = proc; CHILDREN.add(me); me.on('exit', () => CHILDREN.delete(me));
        me.stderr.on('data', d => { if (process.env.MEDIALOG && process.env.FFLOG) console.log('[ffmpeg ' + kind + ']', String(d).trim().slice(0, 200)); });
        me.stdin.on('error', () => {});
        if (kind === 'video') {
          const fsz = sz.w * sz.h * 4; let off = 0; const pool = []; let cur = Buffer.allocUnsafe(fsz);
          const rel = (b) => { if (b.length === fsz && pool.length < 4) pool.push(b); };
          me.stdout.on('data', d => { let o = 0;
            while (o < d.length) { const n = Math.min(fsz - off, d.length - o); d.copy(cur, off, o, o + n); off += n; o += n;
              if (off === fsz) { if (sg.t0 === undefined) sg.t0 = (pr.nextPts !== undefined ? pr.nextPts : 0); const fp = sg.fps || fps(), pts = sg.t0 + (sg.fn = (sg.fn || 0) + 1, sg.fn - 1) / fp; pr.nextPts = pts + 1 / fp; prEnqueue(st, sz, cur, pts, me, rel); cur = pool.pop() || Buffer.allocUnsafe(fsz); off = 0; } } });
        }
        me.on('exit', (code, sig) => { mlog('ffmpeg exit', kind, si, code, sig || '', 'closed=' + !!sg.closed, 'fed=' + fed + '/' + sg.chunks.length); if (proc !== me) return; proc = null;
          if (kind === 'video' && sg.raw && !sg.closed && !dead && (sg.respawns = (sg.respawns || 0) + 1) <= 20) { sg.resumeFed = fed; mlog('ffmpeg video: saida precoce, retomando o segmento', si, 'respawn', sg.respawns); advance(); return; }
          si++; if (!dead) advance(); });
        return true;
      }
      function advance() {
        if (dead) return;
        if (!proc) {
          while (si < segs.length && !proc) { if (segs[si].skip || !spawnSeg()) { if (segs[si] && segs[si].skip) si++; else break; } }
        }
        if (proc) { const sg = segs[si]; while (fed < sg.chunks.length) { try { proc.stdin.write(sg.chunks[fed]); } catch {} if (sg.raw) sg.chunks[fed] = null; fed++; } if (sg.closed && fed >= sg.chunks.length) { try { proc.stdin.end(); } catch {} } }
        else if (si >= segs.length && segs.length && segs[segs.length - 1].closed) { if (!done) { done = true; st.onDone(kind); } }
      }
      const trackKey = 'p' + index + '-b' + b.id; let busy = false, again = false;
      const cdmb = () => require('./cdmbridge');
      c.pump = async () => {
        if (dead) return; if (busy) { again = true; return; } busy = true;
        try {
          do {
            again = false;
            while (cursor < b.parts.length && !dead) {
              const part = b.parts[cursor]; const data = part.kind === 'data' ? part.data : part.req.body; if (!data) break; cursor++;
              if (isInit(data)) {
                if (cur && data.equals(cur)) continue; cur = data; if (segs.length) segs[segs.length - 1].closed = true;
                const enc = data.indexOf('encv') > 0 || data.indexOf('enca') > 0; let d = data;
                { const ti = data.indexOf('tenc'); if (ti > 0) mlog('track kid', b.id, data.slice(ti + 12, ti + 28).toString('hex')); }
                mlog('init buf', b.id, b.type, 'bytes', data.length, 'enc', enc, ['encv','enca','avc1','avc3','hvc1','mp4a','ec-3','sinf','pssh','tenc','senc'].filter(x => data.indexOf(x) > 0).join(','));
                let raw = null;
                if (enc) { const r = await cdmb().call(cdmb().OP.SET_INIT, [trackKey, data]); if (r.status === 0) { d = r.rets[0]; const dim = r.rets[2] ? String(r.rets[2]) : ''; if (kind === 'video' && dim) { const m = dim.split('x'); raw = { w: +m[0], h: +m[1] }; } } else mlog('SET_INIT falhou', String(r.rets[0])); }
                if (kind === 'video') { (globalThis.__vidProt = globalThis.__vidProt || {})[index] = !!raw; }
                segs.push({ chunks: raw ? [] : [d], closed: false, enc, raw, ts: kind === 'video' ? mdhdTimescale(data) : 0 });
              } else if (segs.length) {
                const sg = segs[segs.length - 1]; let d = data; if (kind === 'video' && sg.t0 === undefined) { const t = tfdtSec(data, sg.ts); if (t !== undefined) { sg.t0 = t; const ff = segFps(data, sg.ts); if (ff > 5 && ff < 125) sg.fps = ff; mlog('stream-fps', 'real=' + ff.toFixed(3), 'declarado=' + fps().toFixed(3), 'ts=' + sg.ts, 't0=' + sg.t0.toFixed(2)); } }
                if (sg.raw) {
                  const seg0 = fixSdi(data); let from = 0, first = true;
                  for (;;) {
                    if (dead) break;
                    while (!dead && (sg === segs[si] ? sg.chunks.length - fed : sg.chunks.length) > 12) await new Promise(r => setTimeout(r, 40));
                    const r = await cdmb().call(cdmb().OP.VDEC_SEG, [trackKey, first ? seg0 : Buffer.alloc(0), String(from), '12']); first = false;
                    if (r.status !== 0) { mlog('VDEC_SEG falhou', String(r.rets[0])); break; }
                    const fr = r.rets[0]; let o = 0;
                    while (o + 8 <= fr.length) { const w = fr.readUInt32BE(o), h = fr.readUInt32BE(o + 4), n = w * h + 2 * (((w + 1) >> 1) * ((h + 1) >> 1)); if (o + 8 + n > fr.length) break; sg.chunks.push(fr.subarray(o + 8, o + 8 + n)); o += 8 + n; }
                    advance();
                    const nt = String(r.rets[1]).split(','); from = +nt[0];
                    if (nt[1] !== '-1') break;
                  }
                } else {
                  if (sg.enc) { const r = await cdmb().call(cdmb().OP.DECRYPT, [trackKey, data]); if (r.status === 0) d = r.rets[0]; else mlog('DECRYPT falhou', String(r.rets[0])); }
                  sg.chunks.push(fixSdi(d));
                }
              }
              advance();
            }
            if (b.eos && cursor >= b.parts.length && segs.length) segs[segs.length - 1].closed = true;
            advance();
          } while (again && !dead);
        } finally { busy = false; }
      };
      return c;
    }
    const feed = () => { if (pipe) for (const c of pipe.chains) c.pump().catch(e => mlog('pump erro', e && e.message)); };
    function startPipe() {
      const src = mySource(); if (!src) return false;
      const bs = src.buffers.map(i => buffers.get(i)); const vb = bs.find(b => b.type === 'video'), ab = bs.find(b => b.type === 'audio');
      if (!vb || !vb.parts.length) return false;
      let seq = 0, lastEmit = 0, frames = 0; const fpsv = fps();
      const st = {
        onFrame(sz, frame, relMs) {
          if (!pipe || pipe.st !== st) return;
          const hdr = Buffer.alloc(12); hdr.writeUInt32LE(sz.w, 0); hdr.writeUInt32LE(sz.h, 4); hdr.writeUInt32LE(++seq, 8);
          try { const fd = fs.openSync(frameFile + '.tmp', 'w'); fs.writeSync(fd, hdr); fs.writeSync(fd, frame, 0, frame.length); fs.closeSync(fd); fs.renameSync(frameFile + '.tmp', frameFile); } catch {}
          frames++; const now = Date.now();
          if (now - lastEmit >= 200) { lastEmit = now; base.emit('updatepts', { type: 'updatepts', pts: startPts + (relMs !== undefined ? relMs : Math.round(frames * 1000 / fpsv)), time: mono() }); }
        },
        onDone() { if (pipe && pipe.chains.every(c => c.done) && base.state === ST.PLAYING) { base.emit('endofstream', { type: 'endofstream', media: 0, time: mono() }); base.emit('endofstream', { type: 'endofstream', media: 1, time: mono() }); } },
      };
      pipe = { st, chains: [makeChain(vb, 'video', st)].concat(ab ? [makeChain(ab, 'audio', st)] : []) };
      feed(); return true;
    }
    ctx.onAppend = ((prev) => (bid) => { prev && prev(bid); players.forEach(pl => pl.__feed && pl.__feed()); })(ctx.onAppend);
    base.__feed = feed;

    base.open = (args) => { if (process.env.OPENSTACK) console.log('[open-stack]', JSON.stringify(args).slice(0,200), '\n'+String(new Error().stack).split('\n').slice(1,60).join('\n')); openArgs = args; startPts = (args && args.pts) || 0; killPipe(); mlog('player.open', args); setState(ST.OPENING);
      clearTimeout(openTimer); openTimer = setTimeout(() => { if (base.state === ST.OPENING) { setState(ST.STOPPED); base.emit('opencomplete', { type: 'opencomplete', time: mono() }); } }, 300); };
    base.close = () => { clearTimeout(openTimer); if (globalThis.__vidProt) globalThis.__vidProt[index] = false; killPipe(); if (base.state !== ST.CLOSED) setState(ST.CLOSED); };
    const swimTo = (pts) => { mlog('player.swim ->', pts); clearTimeout(openTimer); if (typeof pts === 'number') startPts = pts; killPipe(); { const sc = mySource(); if (sc) for (const bid of sc.buffers) { const b = buffers.get(bid); if (b) { b.parts.length = 0; b.eos = false; } } }    
      if (base.state !== ST.CLOSED) { base.state = ST.PLAYING; setState(ST.STOPPED); } };
    base.disableAudio = () => {
      mlog('player.disableAudio');
      if (pipe) { for (const c of pipe.chains) if (c.kind === 'audio') c.kill(); pipe.chains = pipe.chains.filter(c => c.kind !== 'audio'); }
      const sc = mySource(); if (sc) for (const bid of sc.buffers) { const b = buffers.get(bid); if (b && b.type === 'audio') { b.parts.length = 0; b.eos = false; } }
      setImmediate(() => base.emit('audiotrackchangestarted', { type: 'audiotrackchangestarted', time: mono() }));
      return { success: true };
    };
    base.enableAudio = () => {
      mlog('player.enableAudio');
      const go = (n) => {
        if (!pipe) return;
        const sc = mySource(); const ab = sc && sc.buffers.map(i => buffers.get(i)).filter(b => b && b.type === 'audio' && b.parts.length).pop();
        if (!ab) { if (n < 100) setTimeout(() => go(n + 1), 100); return; }
        if (pipe.chains.some(c => c.kind === 'audio')) return;
        pipe.chains.push(makeChain(ab, 'audio', pipe.st)); feed();
      };
      go(0); return { success: true };
    };
    base.swim2 = (a) => { swimTo(a && a.pts); };
    base.swim = (pts) => { swimTo(pts); };
    base.stop = () => { killPipe(); if (base.state !== ST.CLOSED && base.state !== ST.STOPPED) setState(ST.STOPPED); };
    base.play = (ptsArg) => {
      if (process.env.OPENSTACK) console.log('[play-stack]', ptsArg, '\n'+String(new Error().stack).split('\n').slice(1,60).filter(l=>!/nrdjs.min/.test(l)).join('\n'));
      if (typeof ptsArg === 'number') startPts = ptsArg; paused = false;
      const go = (n) => { if (base.state === ST.CLOSED) return; if (Date.now() - (globalThis.__gateTick || 0) < 1200) { setTimeout(() => go(n), 250); return; }     if (!pipe && !startPipe()) { if (n < 100) setTimeout(() => go(n + 1), 100); return; } };
      setState(ST.PLAYING); go(0);
    };
    base.play2 = () => base.play();
    base.pause = () => { if (pipe) pipe.chains.forEach(c => c.signal('SIGSTOP')); paused = true; clearInterval(pauseKeep); pauseKeep = setInterval(() => { try { const t = new Date(); fs.utimesSync(frameFile, t, t); } catch {} }, 500);     pr.pausedAt = Date.now(); clearTimeout(pr.timer); pr.timer = null; setState(ST.PAUSED); };
    base.unpause = () => { clearInterval(pauseKeep); if (pipe) pipe.chains.forEach(c => c.signal('SIGCONT')); if (pr.clock0 !== null && pr.pausedAt) pr.clock0 += Date.now() - pr.pausedAt; paused = false; setState(ST.PLAYING); prRun(); };
    base.swim = (a) => { mlog('player.swim', a); };
    base.addEventListener = base.addListener;
    players.set(index, base);
    return p;
  }
  const factory = {
    createPlayer(index, cb) { const player = makePlayer(index); setImmediate(() => cb && cb({ success: true, path: player.path, player })); },
    destroyPlayer(i, cb) { players.delete(i); cb && setImmediate(cb); },
  };
  return { mediarequest: mr, base, factory, closeAll() { players.forEach(p => { try { p.close(); } catch {} }); } };
};
