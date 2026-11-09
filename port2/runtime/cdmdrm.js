const { call, OP } = require('./cdmbridge');
const SERVER_CERT = Buffer.from('Cr0CCAMSEOVEukALwQ8307Y2+LVP+0MYh/HPkwUijgIwggEKAoIBAQDm875btoWUbGqQD8eAGuBlGY+Pxo8YF1LQR+Ex0pDONMet8EHslcZRBKNQ/09RZFTP0vrYimyYiBmk9GG+S0wB3CRITgweNE15cD33MQYyS3zpBd4z+sCJam2+jj1ZA4uijE2dxGC+gRBRnw9WoPyw7D8RuhGSJ95OEtzg3Ho+mEsxuE5xg9LM4+Zuro/9msz2bFgJUjQUVHo5j+k4qLWu4ObugFmc9DLIAohL58UR5k0XnvizulOHbMMxdzna9lwTw/4SALadEV/CZXBmswUtBgATDKNqjXwokohncpdsWSauH6vfS6FXwizQoZJ9TdjSGC60rUB2t+aYDm74cIuxAgMBAAE6EHRlc3QubmV0ZmxpeC5jb20SgAOE0y8yWw2Win6M2/bw7+aqVuQPwzS/YG5ySYvwCGQd0Dltr3hpik98WijUODUr6PxMn1ZYXOLo3eED6xYGM7Riza8XskRdCfF8xjj7L7/THPbixyn4mULsttSmWFhexzXnSeKqQHuoKmerqu0nu39iW3pcxDV/K7E6aaSr5ID0SCi7KRcL9BCUCz1g9c43sNj46BhMCWJSm0mx1XFDcoKZWhpj5FAgU4Q4e6f+S8eX39nf6D6SJRb4ap7Znzn7preIvmS93xWjm75I6UBVQGo6pn4qWNCgLYlGGCQCUm5tg566j+/g5jvYZkTJvbiZFwtjMW5njbSRwB3W4CrKoyxw4qsJNSaZRTKAvSjTKdqVDXV/U5HK7SaBA6iJ981/aforXbd2vZlRXO/2S+Maa2mHULzsD+S5l4/YGpSt7PnkCe25F+nAovtl/ogZgjMeEdFyd/9YMYjOS4krYmwp3yJ7m9ZzYCQ6I8RQN4x/yLlHG5RH/+WNLNUs6JAZ0fFdCmw=', 'base64');
const log = (...a) => { if (process.env.MEDIALOG) console.log('[cdm]', ...a); };

function make() {
  const sessions = new Map();
  let next = 1;
  let certP = null;
  const ensureCert = () => certP || (certP = call(OP.SET_CERT, [SERVER_CERT]).then(r => { log('SetServerCertificate status', r.status, r.rets[0] ? String(r.rets[0]).slice(0, 60) : ''); }, e => { log('SetServerCertificate erro', e.message); }));
  const ok = (cb, o) => { try { cb(Object.assign({ success: true }, o)); } catch (e) { console.log('[cdm] cb erro', e.message); } };
  const fail = (cb, msg) => { log('FALHA', msg); try { cb({ success: false, message: msg, stack: [{ errorcode: 'NFErr_DRMFailed' }], errormsg: msg }); } catch (e) {} };
  const b64 = (s) => Buffer.from(String(s), 'base64');
  return {
    drmType: 'WidevineCEF',
    maximumSupportedConcurrentChallenges: 10,
    LIMITED_DURATION_LICENSE: 1, STANDARD_LICENSE: 0,
    addEventListener() {}, removeEventListener() {},
    openDrmSystem(_, cb) { log('openDrmSystem'); call(OP.PING, []).then(() => ok(cb), e => fail(cb, 'cdmhost indisponivel: ' + e.message)); },
    closeDrmSystem(_, cb) { log('closeDrmSystem'); cb && ok(cb); },
    getDrmVersion(cb) { ok(cb, { version: '18.0.0' }); },
    getLdlSessionsLimit(cb) { ok(cb, { ldlSessionsLimit: 10 }); },
    getDrmSessionIds(cb) { ok(cb, { ids: [...sessions.keys()] }); },
    createDrmSession(cb) { const id = next++; sessions.set(id, { sid: null }); ok(cb, { sessionId: id }); },
    deleteDrmSession(id, cb) {
      const s = sessions.get(id); sessions.delete(id);
      (s && s.sid ? call(OP.CLOSE, [Buffer.from(s.sid)]) : Promise.resolve()).then(() => cb && ok(cb), () => cb && ok(cb));
    },
    generateChallenge(p, a1, a2, a3, a4) {
      let o = p, cb;
      if (typeof p !== 'object') { o = { drmType: p, contentId: a1, licenseType: a2, drmHeader: a3 }; cb = a4; } else cb = a1;
      (async () => {
        let id = o.sessionId; if (typeof id !== 'number') { id = next++; sessions.set(id, { sid: null }); }
        const s = sessions.get(id); if (!s) throw new Error('sessao inexistente ' + id);
        let init = Buffer.from(o.drmHeader || []);
        if (process.env.KIDHACK && init.length === 52 && init.slice(4, 8).toString() === 'pssh') {
          const kid = Buffer.from(init.slice(36, 52)); const k2 = Buffer.from(kid); k2.writeUInt32BE((k2.readUInt32BE(4) + 3) >>> 0, 4);
          const data = Buffer.concat([init.slice(32, 52), Buffer.from([0x12, 0x10]), k2]);
          const hdr = Buffer.from(init.slice(0, 28)); hdr.writeUInt32BE(28 + 4 + data.length, 0);
          const dl = Buffer.alloc(4); dl.writeUInt32BE(data.length, 0); init = Buffer.concat([hdr, dl, data]);
        }
        log('generateChallenge session', id, 'init', init.length + 'B', 'licType', o.licenseType, 'initHex', init.toString('hex'));
        await ensureCert();
        const r = await call(OP.CREATE, [Buffer.from([0]), init]);
        if (r.status !== 0) throw new Error('create session: ' + r.rets[0]);
        s.sid = r.rets[0].toString(); log('challenge', r.rets[1].length + 'B');
        if (process.env.WVDUMP) { try { require('fs').writeFileSync('/tmp/wv_ch_' + id + '.bin', r.rets[1]); } catch {} }
        ok(cb, { challenge: r.rets[1].toString('base64'), sessionId: id });
      })().catch(e => fail(cb, e.message));
    },
    provideLicense(id, lic, cb) {
      log('provideLicense chamado session', id, 'licenca', String(lic).length + ' chars');
      if (process.env.WVDUMP) { try { require('fs').writeFileSync('/tmp/wv_lic_' + id + '.bin', b64(lic)); } catch {} }
      (async () => {
        const s = sessions.get(id); if (!s || !s.sid) throw new Error('sessao inexistente ' + id);
        const r = await call(OP.UPDATE, [Buffer.from(s.sid), b64(lic)]);
        log('provideLicense status', r.status, 'keys', r.rets[0] && r.rets[0].toString());
        if (r.status !== 0) {
          for (const [oid, os] of [...sessions].reverse()) {
            if (oid === id || !os.sid) continue;
            const r2 = await call(OP.UPDATE, [Buffer.from(os.sid), b64(lic)]);
            log('provideLicense tentativa na sessao', oid, 'status', r2.status, String(r2.rets[0]||'').slice(0,60));
            if (r2.status === 0) { ok(cb, { session: oid }); return; }
          }
          throw new Error('update session: ' + r.rets[0]);
        }
        ok(cb, { session: id });
      })().catch(e => fail(cb, e.message));
    },
    _sessions: sessions,
  };
}
module.exports = { make };
