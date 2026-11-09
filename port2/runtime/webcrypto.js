'use strict';
const crypto = require('crypto');

const C = { RAW: 1, PKCS8: 2, SPKI: 3, JWK: 4,
  ENCRYPT: 1, DECRYPT: 2, SIGN: 3, VERIFY: 4, DERIVE: 5, WRAP: 6, UNWRAP: 7,
  SECRET: 1, PUBLIC: 2, PRIVATE: 3, A128GCM: 1 };

const keys = new Map();
let NEXT = 1000;

let REALM = { ArrayBuffer, Uint8Array };
function setRealm(r) { REALM = r; }
const isAB = (b) => Object.prototype.toString.call(b) === '[object ArrayBuffer]';
function buf(b) {
  if (b == null) return Buffer.alloc(0);
  if (typeof b === 'string') return Buffer.from(b, 'utf8');
  if (isAB(b)) return Buffer.from(b);
  if (ArrayBuffer.isView(b)) return Buffer.from(b.buffer, b.byteOffset, b.byteLength);
  if (b.buffer && isAB(b.buffer)) return Buffer.from(b.buffer);
  return Buffer.from(b);
}
function ab(b) { const x = Buffer.from(b); const out = new REALM.ArrayBuffer(x.length); new REALM.Uint8Array(out).set(x); return out; }
function hashName(a) {
  const h = (a && a.params && a.params.hash) || (a && a.hash) || 'SHA-256';
  const n = (typeof h === 'string' ? h : h.name).toUpperCase().replace('-', '');
  return n.toLowerCase();
}
function algNameOf(a) { return (a && a.name) ? a.name : String(a); }
function b64u(b) { return Buffer.from(b).toString('base64url'); }

function reg(meta, store) {
  const handle = NEXT++;
  const m = Object.assign({ handle, extractable: true, name: '', usage: [] }, meta);
  keys.set(handle, Object.assign({ meta: m }, store));
  return m;
}
function get(k) {
  const e = keys.get(typeof k === 'number' ? k : (k && k.handle));
  if (!e) throw new Error('chave invalida');
  return e;
}
const ok = (cb, o) => setImmediate(() => cb(Object.assign({ success: true }, o)));
const fail = (cb, e) => { if (process.env.WCLOG) console.log('[webcrypto FAIL]', e && e.message || e);
  setImmediate(() => cb({ success: false, error: String(e && e.message || e) })); };
const wrap = (fn) => (...a) => { const cb = a[a.length - 1];
  try { fn(...a.slice(0, -1), cb); } catch (e) { fail(cb, e); } };

function keyMeta(algorithm, type, extractable, usages) {
  return { algorithm: { name: algNameOf(algorithm), params: algorithm && algorithm.params },
    type, extractable: extractable !== false, usage: usages || [] };
}
function importJwk(j, algorithm, extractable, usages) {
  if (j.kty === 'oct') return reg(keyMeta(algorithm, C.SECRET, extractable, usages), { secret: Buffer.from(j.k, 'base64url') });
  const isPriv = !!j.d;
  const ko = isPriv ? crypto.createPrivateKey({ key: j, format: 'jwk' }) : crypto.createPublicKey({ key: j, format: 'jwk' });
  return reg(keyMeta(algorithm, isPriv ? C.PRIVATE : C.PUBLIC, extractable, usages), { ko });
}

const wc = Object.assign({}, C, {
  authenticationType: process.env.MSL_AUTH || 'UNAUTHENTICATED',
  setBinary() {},

  importKey: wrap((data, format, algorithm, extractable, usages, cb) => {
    const d = buf(data);
    let m;
    if (format === C.RAW) m = reg(keyMeta(algorithm, C.SECRET, extractable, usages), { secret: d });
    else if (format === C.JWK) m = importJwk(JSON.parse(d.toString('utf8')), algorithm, extractable, usages);
    else if (format === C.SPKI) m = reg(keyMeta(algorithm, C.PUBLIC, extractable, usages), { ko: crypto.createPublicKey({ key: d, format: 'der', type: 'spki' }) });
    else if (format === C.PKCS8) m = reg(keyMeta(algorithm, C.PRIVATE, extractable, usages), { ko: crypto.createPrivateKey({ key: d, format: 'der', type: 'pkcs8' }) });
    else throw new Error('formato ' + format);
    ok(cb, { key: m });
  }),

  exportKey: wrap((key, format, cb) => {
    const e = get(key);
    if (!e.meta.extractable) throw new Error('nao extraivel');
    let out;
    if (e.secret) {
      out = format === C.JWK ? Buffer.from(JSON.stringify({ kty: 'oct', k: b64u(e.secret), ext: true })) : e.secret;
    } else if (format === C.JWK) out = Buffer.from(JSON.stringify(e.ko.export({ format: 'jwk' })));
    else out = e.ko.export({ format: 'der', type: format === C.PKCS8 ? 'pkcs8' : 'spki' });
    ok(cb, { data: ab(out) });
  }),

  digest: wrap((data, algorithm, cb) => ok(cb, { data: ab(crypto.createHash(hashName(algorithm)).update(buf(data)).digest()) })),

  symKeyGen: wrap((algorithm, extractable, usages, cb) => {
    const p = algorithm.params || {};
    const bits = p.length || 128;
    ok(cb, { key: reg(keyMeta(algorithm, C.SECRET, extractable, usages), { secret: crypto.randomBytes(bits / 8) }) });
  }),

  aesEncrypt: wrap((key, iv, data, cb) => {
    const k = get(key).secret;
    const c = crypto.createCipheriv('aes-' + k.length * 8 + '-cbc', k, buf(iv));
    ok(cb, { data: ab(Buffer.concat([c.update(buf(data)), c.final()])) });
  }),
  aesDecrypt: wrap((key, iv, data, cb) => {
    const k = get(key).secret;
    const c = crypto.createDecipheriv('aes-' + k.length * 8 + '-cbc', k, buf(iv));
    const out = Buffer.concat([c.update(buf(data)), c.final()]);
    if (process.env.WCDATA) { let t = out; try { t = require('zlib').gunzipSync(out); } catch {} console.log('[wc aesDecrypt]', out.length, JSON.stringify(t.toString('utf8').slice(0, +process.env.WCDATA || 400))); }
    ok(cb, { data: ab(out) });
  }),

  hmac: wrap((key, data, algorithm, cb) => ok(cb, { data: ab(crypto.createHmac(hashName(algorithm), get(key).secret).update(buf(data)).digest()) })),
  hmacVerify: wrap((key, data, algorithm, sig, cb) => {
    const mac = crypto.createHmac(hashName(algorithm), get(key).secret).update(buf(data)).digest();
    const s = buf(sig);
    ok(cb, { verified: s.length === mac.length && crypto.timingSafeEqual(s, mac) });
  }),

  rsaKeyGen: wrap((algorithm, extractable, usages, cb) => {
    const p = algorithm.params || {};
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: p.modulusLength || 2048 });
    ok(cb, { publickey: reg(keyMeta(algorithm, C.PUBLIC, true, usages), { ko: publicKey }),
             privatekey: reg(keyMeta(algorithm, C.PRIVATE, extractable, usages), { ko: privateKey }) });
  }),
  rsaSign: wrap((key, data, algorithm, cb) => ok(cb, { data: ab(crypto.sign(hashName(algorithm), buf(data), get(key).ko)) })),
  rsaVerify: wrap((key, data, algorithm, sig, cb) => ok(cb, { verified: crypto.verify(hashName(algorithm), buf(data), get(key).ko, buf(sig)) })),
  rsaEncrypt: wrap((key, data, cb) => {
    const e = get(key); const oaep = /OAEP/i.test(e.meta.algorithm.name);
    ok(cb, { data: ab(crypto.publicEncrypt({ key: e.ko, padding: oaep ? crypto.constants.RSA_PKCS1_OAEP_PADDING : crypto.constants.RSA_PKCS1_PADDING }, buf(data))) });
  }),
  rsaDecrypt: wrap((key, data, cb) => {
    const e = get(key); const oaep = /OAEP/i.test(e.meta.algorithm.name);
    ok(cb, { data: ab(crypto.privateDecrypt({ key: e.ko, padding: oaep ? crypto.constants.RSA_PKCS1_OAEP_PADDING : crypto.constants.RSA_PKCS1_PADDING }, buf(data))) });
  }),

  aesUnwrap: wrap((data, algorithm, key, usages, cb) => {
    const k = get(key).secret;
    const d = crypto.createDecipheriv('id-aes' + k.length * 8 + '-wrap', k, Buffer.from('A6A6A6A6A6A6A6A6', 'hex'));
    const raw = Buffer.concat([d.update(buf(data)), d.final()]);
    ok(cb, { key: reg(keyMeta(algorithm, C.SECRET, true, usages), { secret: raw }) });
  }),
  rsaUnwrap: wrap((data, algorithm, key, usages, cb) => {
    const e = get(key);
    const jwk = crypto.privateDecrypt({ key: e.ko, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING }, buf(data));
    ok(cb, { key: importJwk(JSON.parse(jwk.toString('utf8')), algorithm, true, usages) });
  }),

  getKeyInfo: wrap((handle, cb) => { const e = keys.get(handle); if (!e) throw new Error('sem chave'); ok(cb, { key: e.meta }); }),
  getKeyByName: wrap((name, cb) => { throw new Error('getKeyByName(' + name + '): sem chave de dispositivo'); }),
  restorePersistedKey: wrap((data, cb) => { throw new Error('restorePersistedKey nao suportado'); }),
  unwrapJwe: wrap((data, key, algorithm, extractable, usages, cb) => {
    const e = get(key);
    const parts = buf(data).toString('utf8').trim().split('.');
    if (parts.length !== 5) throw new Error('JWE invalido (' + parts.length + ' partes)');
    const hdr = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8'));
    if (process.env.WCLOG) console.log('[jwe]', JSON.stringify(hdr), parts.map(p => Buffer.from(p, 'base64url').length));
    const cek = crypto.privateDecrypt({ key: e.ko, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING }, Buffer.from(parts[1], 'base64url'));
    let pt, lastErr;
    for (const aad of [Buffer.from(parts[0], 'ascii'), null, Buffer.from(parts.slice(0, 1).join('.'), 'ascii').subarray(0, 0)]) {
      try {
        const d = crypto.createDecipheriv('aes-' + cek.length * 8 + '-gcm', cek, Buffer.from(parts[2], 'base64url'));
        if (aad) d.setAAD(aad); d.setAuthTag(Buffer.from(parts[4], 'base64url'));
        pt = Buffer.concat([d.update(Buffer.from(parts[3], 'base64url')), d.final()]); break;
      } catch (e) { lastErr = e; }
    }
    if (!pt) {
      const ctr = crypto.createDecipheriv('aes-' + cek.length * 8 + '-ctr', cek, Buffer.concat([Buffer.from(parts[2], 'base64url'), Buffer.from([0, 0, 0, 2])]));
      pt = Buffer.concat([ctr.update(Buffer.from(parts[3], 'base64url')), ctr.final()]);
      JSON.parse(pt.toString('utf8'));
    }
    if (!pt && process.env.JWEDUMP) require('fs').writeFileSync(process.env.JWEDUMP, JSON.stringify({ jwe: parts, cek: cek.toString('hex'), priv: e.ko.export({ format: 'pem', type: 'pkcs8' }) }));
    if (!pt) throw lastErr;
    let m;
    try { m = importJwk(JSON.parse(pt.toString('utf8')), algorithm, extractable, usages); }
    catch { m = reg(keyMeta(algorithm, C.SECRET, extractable, usages), { secret: pt }); }
    ok(cb, { key: m });
  }),
  wrapJwe: wrap((wkey, key, algorithm, enc, cb) => {
    const w = get(wkey), k = get(key);
    const cek = crypto.randomBytes(16), iv = crypto.randomBytes(12);
    const hdr = Buffer.from(JSON.stringify({ alg: 'RSA-OAEP', enc: 'A128GCM' })).toString('base64url');
    const ek = crypto.publicEncrypt({ key: w.ko, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING }, cek);
    const c = crypto.createCipheriv('aes-128-gcm', cek, iv); c.setAAD(Buffer.from(hdr, 'ascii'));
    const pt = Buffer.from(JSON.stringify(k.secret ? { kty: 'oct', k: b64u(k.secret) } : k.ko.export({ format: 'jwk' })));
    const ct = Buffer.concat([c.update(pt), c.final()]);
    const jwe = [hdr, b64u(ek), b64u(iv), b64u(ct), b64u(c.getAuthTag())].join('.');
    ok(cb, { data: ab(Buffer.from(jwe)) });
  }),
  persistKeys: wrap((keysArr, cb) => ok(cb, {})),
  dhKeyGen: wrap(() => { throw new Error('dhKeyGen nao suportado'); }),
  dhDerive: wrap(() => { throw new Error('dhDerive nao suportado'); }),
  cdmDerive: wrap(() => { throw new Error('cdmDerive nao suportado'); }),
  cdmKeyGen: wrap(() => { throw new Error('cdmKeyGen nao suportado'); }),
  cdmSign: wrap(() => { throw new Error('cdmSign nao suportado'); }),
});

if (process.env.WCOP) for (const k of Object.keys(wc)) if (typeof wc[k] === 'function') { const f = wc[k]; wc[k] = function () { console.log('[wc op]', k); return f.apply(this, arguments); }; }

function atob(s, binary) {
  const b = Buffer.from(String(s), 'base64');
  if (!binary) return b.toString('latin1');
  const u = new REALM.Uint8Array(b.length); u.set(b); return u;
}
function btoa(x, url) {
  const b = Buffer.from(typeof x === 'string' ? Buffer.from(x, 'latin1') : buf(x));
  return url ? b.toString('base64url') : b.toString('base64');
}
function u8(b) { const u = new REALM.Uint8Array(b.length); u.set(b); return u; }
function atoutf8(s) { return u8(Buffer.from(String(s), 'utf8')); }
function utf8toa(x) { return buf(x).toString('utf8'); }

module.exports = { webcrypto: wc, atob, btoa, atoutf8, utf8toa, setRealm, u8, buf };
