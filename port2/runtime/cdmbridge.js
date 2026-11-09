const net = require('net');
const SOCK = process.env.CDM_SOCK || '/tmp/gibbon-cdm.sock';
const OP = { PING: 1, CREATE: 2, UPDATE: 3, CLOSE: 4, SET_INIT: 5, DECRYPT: 6, SET_CERT: 7, VDEC_SEG: 8 };
function call(op, args) {
  return new Promise((res, rej) => {
    const c = net.connect(SOCK); const parts = [Buffer.alloc(8)];
    parts[0].writeUInt32LE(op, 0); parts[0].writeUInt32LE(args.length, 4);
    for (const a of args) { const b = Buffer.from(a); const h = Buffer.alloc(4); h.writeUInt32LE(b.length); parts.push(h, b); }
    c.write(Buffer.concat(parts));
    let chunks = [], total = 0, need = 8, done = false;
    const parse = () => {
      const buf = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks); chunks = [buf];
      const status = buf.readInt32LE(0), n = buf.readUInt32LE(4); let o = 8; const rets = [];
      for (let i = 0; i < n; i++) {
        if (buf.length < o + 4) { need = o + 4; return; } const l = buf.readUInt32LE(o); o += 4;
        if (buf.length < o + l) { need = o + l; return; } rets.push(buf.subarray(o, o + l)); o += l;
      }
      done = true; c.destroy(); res({ status, rets });
    };
    c.on('data', d => { chunks.push(d); total += d.length; if (!done && total >= need) parse(); });
    c.on('error', e => { if (!done) { done = true; rej(e); } });
    c.on('close', () => { if (!done) { done = true; rej(new Error('cdmhost: conexao fechada')); } });
  });
}
module.exports = { call, OP };
