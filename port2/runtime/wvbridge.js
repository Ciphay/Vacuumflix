const net = require('net');
const SOCK = process.env.WV_SOCK || '/tmp/gibbon-wv.sock';
const OP = { PING:1, OPEN:4, CLOSE:5, KEYREQ:6, PROVIDE:7 };
const log = (...a) => { if (process.env.MEDIALOG) console.log('[wv]', ...a); };

function call(op, args) {
  return new Promise((res, rej) => {
    const c = net.connect(SOCK);
    const bufs = [Buffer.alloc(8)];
    bufs[0].writeUInt32LE(op, 0); bufs[0].writeUInt32LE(args.length, 4);
    for (const a of args) { const b = Buffer.from(a); const h = Buffer.alloc(4); h.writeUInt32LE(b.length); bufs.push(h, b); }
    c.write(Buffer.concat(bufs));
    let buf = Buffer.alloc(0), done = false;
    const parse = () => {
      if (buf.length < 8) return;
      const status = buf.readInt32LE(0), n = buf.readUInt32LE(4); let o = 8; const rets = [];
      for (let i = 0; i < n; i++) { if (buf.length < o + 4) return; const l = buf.readUInt32LE(o); o += 4; if (buf.length < o + l) return; rets.push(buf.subarray(o, o + l)); o += l; }
      done = true; c.destroy(); res({ status, rets });
    };
    c.on('data', d => { buf = Buffer.concat([buf, d]); if (!done) parse(); });
    c.on('error', e => { if (!done) { done = true; rej(e); } });
    c.on('close', () => { if (!done) { done = true; rej(new Error('wvdaemon: conexao fechada')); } });
  });
}

const SESS_FILE = '/tmp/gibbon-wv-sessions.json';
const saveSess = (arr) => { try { fs.writeFileSync(SESS_FILE, JSON.stringify(arr)); } catch {} };
const loadSess = () => { try { return JSON.parse(fs.readFileSync(SESS_FILE, 'utf8')); } catch { return []; } };
const live = new Set();
const persist = () => saveSess([...live]);
async function closeStale() { const old = loadSess(); saveSess([]); for (const b of old) { try { await call(OP.CLOSE, [Buffer.from(b, 'base64')]); } catch {} } }
const syncCloseAll = () => { if (!live.size) return; try { require('child_process').spawnSync(process.execPath, ['-e', `const n=require('net');const ids=process.argv.slice(1);let i=0;const c=n.connect('${SOCK}');c.on('error',()=>process.exit(0));function nx(){if(i>=ids.length){process.exit(0)}const b=Buffer.from(ids[i++],'base64');const h=Buffer.alloc(8);h.writeUInt32LE(${OP.CLOSE},0);h.writeUInt32LE(1,4);const l=Buffer.alloc(4);l.writeUInt32LE(b.length);c.write(Buffer.concat([h,l,b]));}c.on('data',()=>nx());nx();setTimeout(()=>process.exit(0),3000)`, ...live], { timeout: 5000 }); } catch {} live.clear(); saveSess([]); };
process.on('exit', syncCloseAll);
let staleDone = null;

function make() {
  const sessions = new Map();
  let next = 1;
  const ok = (cb, o) => { try { cb(Object.assign({ success: true }, o)); } catch (e) { console.log('[wv] cb erro', e.message); } };
  const fail = (cb, msg) => { log('FALHA', msg); try { cb({ success: false, message: msg, stack: [{ errorcode: 'NFErr_DRMFailed' }], errormsg: msg }); } catch (e) {} };
  const newSession = async () => {
    const r = await call(OP.OPEN, [Buffer.from([1])]);
    if (r.status !== 0) throw new Error('openSession status ' + r.status);
    const id = next++; sessions.set(id, r.rets[0]); live.add(r.rets[0].toString('base64')); persist(); return id;
  };
  return {
    drmType: 'WidevineCEF',
    maximumSupportedConcurrentChallenges: 10,
    LIMITED_DURATION_LICENSE: 1, STANDARD_LICENSE: 0,
    addEventListener() {}, removeEventListener() {},
    openDrmSystem(_, cb) { (staleDone || (staleDone = closeStale().catch(() => {}))).then(() => call(OP.PING, [])).then(() => ok(cb), e => fail(cb, 'wvdaemon indisponivel: ' + e.message)); },
    closeDrmSystem(_, cb) { cb && ok(cb); },
    getDrmVersion(cb) { ok(cb, { version: '18.0.0' }); },
    getLdlSessionsLimit(cb) { ok(cb, { ldlSessionsLimit: 10 }); },
    getDrmSessionIds(cb) { ok(cb, { ids: [...sessions.keys()] }); },
    createDrmSession(cb) { newSession().then(id => ok(cb, { sessionId: id }), e => fail(cb, e.message)); },
    deleteDrmSession(id, cb) { const s = sessions.get(id); sessions.delete(id); if (s) { live.delete(s.toString('base64')); persist(); } (s ? call(OP.CLOSE, [s]) : Promise.resolve()).then(() => cb && ok(cb), () => cb && ok(cb)); },
    generateChallenge(p, a1, a2, a3, a4) {
      let o = p, cb;
      if (typeof p !== 'object') { o = { drmType: p, contentId: a1, licenseType: a2, drmHeader: a3 }; cb = a4; } else cb = a1;
      (async () => {
        let id = o.sessionId; if (typeof id !== 'number') id = await newSession();
        const s = sessions.get(id); if (!s) throw new Error('sessao inexistente ' + id);
        const init = Buffer.from(o.drmHeader || []);
        log('generateChallenge session', id, 'init', init.length + 'B', 'licType', o.licenseType, 'content', String(o.contentId).slice(0, 40));
        const r = await call(OP.KEYREQ, [s, init, Buffer.from('video/mp4'), Buffer.from([1])]);
        if (r.status !== 0) throw new Error('getKeyRequest status ' + r.status);
        log('challenge', r.rets[0].length + 'B');
        ok(cb, { challenge: r.rets[0].toString('base64'), sessionId: id });
      })().catch(e => fail(cb, e.message));
    },
    provideLicense(id, lic, cb) {
      (async () => {
        const s = sessions.get(id); if (!s) throw new Error('sessao inexistente ' + id);
        const r = await call(OP.PROVIDE, [s, Buffer.from(lic, 'base64')]);
        log('provideLicense status', r.status, 'keySetId', r.rets[0] && r.rets[0].length);
        if (r.status !== 0) throw new Error('provideKeyResponse status ' + r.status);
        ok(cb, { session: id });
      })().catch(e => fail(cb, e.message));
    },
  };
}
module.exports = { make, call };
