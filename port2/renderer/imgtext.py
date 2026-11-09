#!/usr/bin/env python3
import os
import sys, json, struct, subprocess, functools, re
from PIL import Image, ImageDraw, ImageFont

@functools.lru_cache(maxsize=64)
def font_path(family, weight):
    fam = {"Netflix_Sans": "Noto Sans", "NetflixSans": "Noto Sans"}.get(family, family or "Noto Sans")
    w = (weight or "normal")
    style = "bold" if w in ("bold", "heavy", "black", 700, 800, 900) else ("light" if w in ("light", "thin") else "regular")
    try:
        out = subprocess.run(["fc-match", "-f", "%{file}", f"{fam}:style={style}"], capture_output=True, text=True, timeout=5).stdout.strip()
        if out:
            return out
    except Exception:
        pass
    _b = os.path.join(_BUNDLED_FONTS, "NotoSans-Regular.ttf")
    return _b if os.path.exists(_b) else "/usr/share/fonts/noto/NotoSans-Regular.ttf"

@functools.lru_cache(maxsize=512)
def load_font(path, px):
    try:
        return ImageFont.truetype(path, max(1, int(round(px))))
    except Exception:
        return ImageFont.load_default()

_NOTDEF = {}
_SENT = ("\ufffe", "\uffff", "\U0010fffd", "\u0378", "\u0ffe", "\u2fe0")
def _render(font, ch):
    im = Image.new("L", (96, 96), 0)
    ImageDraw.Draw(im).text((8, 8), ch, font=font, fill=255)
    return im.getbbox(), im.tobytes()

def has_glyph(font, key, ch):
    key = (key, getattr(font, 'size', 0))
    k = (key, ch)
    r = _NOTDEF.get(k)
    if r is not None:
        return r
    try:
        nds = _NOTDEF.get((key, None))
        if nds is None:
            nds = [_render(font, c)[1] for c in _SENT]; _NOTDEF[(key, None)] = nds
        bb, by = _render(font, ch)
        r = (bb is not None) and (by not in nds)
    except Exception:
        r = True
    _NOTDEF[k] = r
    return r

_HERE = os.path.dirname(os.path.abspath(__file__))
_BUNDLED_FONTS = os.path.join(_HERE, "..", "fonts")
_NOTO = _BUNDLED_FONTS + "/" if os.path.isdir(_BUNDLED_FONTS) else "/usr/share/fonts/noto/"
SYS_FALLBACK = [x for x in (_NOTO + n for n in ("NotoSansArabic-Regular.ttf","NotoSansHebrew-Regular.ttf","NotoSansDevanagari-Regular.ttf","NotoSansBengali-Regular.ttf","NotoSansGujarati-Regular.ttf","NotoSansGurmukhi-Regular.ttf","NotoSansKannada-Regular.ttf","NotoSansMalayalam-Regular.ttf","NotoSansOriya-Regular.ttf","NotoSansTamil-Regular.ttf","NotoSansTelugu-Regular.ttf","NotoSansThai-Regular.ttf","NotoSansGeorgian-Regular.ttf","NotoSansArmenian-Regular.ttf")) if os.path.exists(x)] + [x for x in (os.path.join(_BUNDLED_FONTS, "NotoSansCJK-Regular.ttc") if os.path.isdir(_BUNDLED_FONTS) else "/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc",) if os.path.exists(x)]

class Face:
    def __init__(self, r):
        px = r.get("size", 16)
        paths = [p for p in (r.get("fonts") or []) if p]
        if not paths:
            paths = [font_path(r.get("family"), r.get("weight"))]
        self.fonts = [(p, load_font(p, px)) for p in paths]
        self.px = px
        self.ls = float(r.get('letterSpacing') or 0)
    def primary(self):
        return self.fonts[0][1]
    def pick(self, ch):
        if ch.isspace() or ord(ch) < 32:
            return self.fonts[0]
        for p, f in self.fonts:
            if has_glyph(f, p, ch):
                return (p, f)
        for fp in SYS_FALLBACK:
            f = load_font(fp, self.px)
            if has_glyph(f, fp, ch):
                self.fonts.append((fp, f))
                return (fp, f)
        return self.fonts[0]
    def runs(self, text):
        out = []
        for ch in text:
            p, f = self.pick(ch)
            if out and out[-1][0] is f:
                out[-1][1].append(ch)
            else:
                out.append([f, [ch]])
        return [(f, "".join(cs)) for f, cs in out]
    def length(self, d, text):
        c = self.__dict__.setdefault('_lc', {})
        v = c.get(text)
        if v is None:
            v = sum(d.textlength(t, font=f) for f, t in self.runs(text)) + self.ls * len(text)
            if len(c) < 20000: c[text] = v
        return v
    def metrics(self):
        asc, desc = self.primary().getmetrics()
        return asc, desc
    def draw(self, d, x, y, text, fill):
        for f, t in self.runs(text):
            if self.ls:
                for ch in t:
                    d.text((x, y), ch, font=f, fill=fill); x += d.textlength(ch, font=f) + self.ls
            else:
                d.text((x, y), t, font=f, fill=fill)
                x += d.textlength(t, font=f)

def parse_rich(t):
    t = re.sub(r'<br\s*/?>', '\n', t)
    segs, bold, pos = [], False, 0
    for m in re.finditer(r'</?(b|strong|i|em)>', t):
        if m.start() > pos: segs.append((t[pos:m.start()], bold))
        if m.group(1) in ('b', 'strong'): bold = not m.group(0).startswith('</')
        pos = m.end()
    if pos < len(t): segs.append((t[pos:], bold))
    return segs

class RichLine:
    def __init__(self, r, face):
        self.face = face
        bf = r.get("fontsBold")
        self.bface = Face(dict(r, fonts=bf)) if bf else face
    def segs(self, text): return parse_rich(text)
    def length(self, d, text): return sum((self.bface if b else self.face).length(d, t) for t, b in parse_rich(text))
    def draw(self, d, x, y, text, fill):
        for t, b in parse_rich(text):
            f = self.bface if b else self.face
            f.draw(d, x, y, t, fill); x += f.length(d, t)

def parse_color(c, default=(255, 255, 255, 255)):
    if isinstance(c, str) and c.startswith("#"):
        h = c[1:]
        if len(h) == 6: h += "ff"
        if len(h) == 8:
            return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4, 6))
    if isinstance(c, dict):
        return (int(c.get("r", 255)), int(c.get("g", 255)), int(c.get("b", 255)), int(c.get("a", 255)))
    return default

def wrap_lines(draw, text, face, width):
    if not width:
        return text.split("\n")
    lines = []
    for para in text.split("\n"):
        cur = ""
        for word in para.split(" "):
            t = (cur + " " + word).strip()
            if face.length(draw, t) <= width + 1.0 or not cur:
                cur = t
            else:
                lines.append(cur); cur = word
        lines.append(cur)
    return lines

_WRAP = {}
def wrap_cached(draw, text, face, width):
    key = (text, tuple(p for p, _ in face.fonts), face.px, width)
    r = _WRAP.get(key)
    if r is None:
        r = wrap_lines(draw, text, face, width)
        if len(_WRAP) > 64: _WRAP.clear()
        _WRAP[key] = r
    return r

def clamp_lines(draw, face, lines, width, max_lines):
    if not max_lines or len(lines) <= max_lines:
        return lines
    keep = lines[:max_lines]
    last = keep[-1] + (" " + " ".join(lines[max_lines:]) if lines[max_lines:] else "")
    ell = "…"
    while last and face.length(draw, last + ell) > (width or 1e9):
        last = last[:-1]
    keep[-1] = last.rstrip() + ell
    return keep

def write_rgba(path, im):
    im = im.convert("RGBA")
    with open(path, "wb") as f:
        f.write(struct.pack("<II", im.width, im.height)); f.write(im.tobytes())

def do_mng(r, data):
    import io
    pos = 8; ticks = 100; delay_ticks = 4; frames = []; cur = None
    while pos < len(data):
        ln, = struct.unpack(">I", data[pos:pos + 4]); typ = data[pos + 4:pos + 8]; body = data[pos + 8:pos + 8 + ln]
        if typ == b"MHDR": ticks = struct.unpack(">I", body[8:12])[0] or 100
        elif typ == b"FRAM" and ln >= 10 and body[0] == 1: delay_ticks = struct.unpack(">I", body[ln - 4:ln])[0] or delay_ticks
        elif typ == b"IHDR": cur = [data[pos:pos + 12 + ln]]
        elif typ in (b"IDAT", b"PLTE", b"tRNS", b"gAMA", b"sRGB") and cur is not None: cur.append(data[pos:pos + 12 + ln])
        elif typ == b"IEND" and cur is not None:
            cur.append(data[pos:pos + 12 + ln]); frames.append(b"\x89PNG\r\n\x1a\n" + b"".join(cur))
        pos += 12 + ln
    base = r["out"][:-5]
    for i, f in enumerate(frames):
        im = Image.open(io.BytesIO(f)); im.load(); write_rgba(base + ".f%d.rgba" % i, im)
    delay = max(10, int(1000 * delay_ticks / ticks)); open(base + ".delay", "w").write(str(delay))
    im = Image.open(io.BytesIO(frames[0])); im.load(); write_rgba(r["out"], im)
    return {"ok": True, "w": im.width, "h": im.height, "frames": len(frames), "delay": delay}

def do_img(r):
    raw = open(r["src"], "rb").read()
    if raw[:8] == b"\x8aMNG\r\n\x1a\n": return do_mng(r, raw)
    im = Image.open(r["src"]); im.load()
    write_rgba(r["out"], im)
    return {"ok": True, "w": im.width, "h": im.height}

def do_measure(r):
    face = Face(r)
    d = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    text = r.get("text", ""); rich = bool(r.get("rich")) and not r.get("wrap") and re.search(r'<[^>]+>', text)
    if r.get("rich") and not rich: text = re.sub(r'<[^>]+>', '', re.sub(r'<br\s*/?>', '\n', text))
    lines = wrap_cached(d, text, face, r.get("width") if r.get("wrap") else None) if not rich else re.sub(r'<br\s*/?>', '\n', text).split("\n")
    if not rich: lines = clamp_lines(d, face, lines, r.get("width"), r.get("maxLines"))
    asc, desc = face.metrics()
    lh = r.get("lineHeight") or (asc + desc)
    rl = RichLine(r, face) if rich else None
    w = max([(rl.length(d, l) if rl else face.length(d, l)) for l in lines] or [0])
    import math
    return {"ok": True, "width": int(math.ceil(w - 1e-6)), "height": int(math.ceil(lh * len(lines) - 1e-6)), "lines": len(lines)}

def do_txt(r):
    W, H = max(1, int(r["w"])), max(1, int(r["h"]))
    face = Face(r)
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    text = r.get("text", "")
    pl, pr, pt, pb = (r.get("padL") or 0), (r.get("padR") or 0), (r.get("padT") or 0), (r.get("padB") or 0)
    inner = max(1, W - pl - pr)
    rich = bool(r.get("rich")) and not r.get("wrap") and re.search(r'<[^>]+>', text)
    if r.get("rich") and not rich: text = re.sub(r'<[^>]+>', '', re.sub(r'<br\s*/?>', '\n', text))
    lines = wrap_cached(d, text, face, inner if r.get("wrap") else None) if not rich else re.sub(r'<br\s*/?>', '\n', text).split("\n")
    fl = int(r.get("firstLine") or 0)
    if fl > 0: lines = lines[fl:]
    if not rich and not fl: lines = clamp_lines(d, face, lines, inner, r.get("maxLines"))
    rl = RichLine(r, face) if rich else None
    asc, desc = face.metrics(); lh = r.get("lineHeight") or (asc + desc)
    total = lh * len(lines)
    align = (r.get("align") or "left")
    color = parse_color(r.get("color"))
    a_ = align.replace(",", " ").split()
    vcenter = "center-vertical" in a_ or align == "center"; hcenter = "center-horizontal" in a_ or align == "center"
    if a_.count("center") >= 2: vcenter = hcenter = True
    elif a_.count("center") == 1:
        if "top" in a_ or "bottom" in a_: hcenter = True
        elif "left" in a_ or "right" in a_: vcenter = True
    if vcenter:
        y0 = pt + int((H - pt - pb - total) * 0.5)
    elif "bottom" in align:
        y0 = H - pb - total
    else:
        y0 = pt
    sh = r.get("shadow")
    for i, line in enumerate(lines):
        tw = rl.length(d, line) if rl else face.length(d, line)
        if "right" in align: x = W - pr - tw
        elif hcenter: x = pl + int((inner - tw) * 0.5)
        else: x = pl
        y = y0 + i * lh
        if y > H: break
        if y + lh < 0: continue
        dr = (lambda xx, yy, ll, ff: rl.draw(d, xx, yy, ll, ff)) if rl else (lambda xx, yy, ll, ff: face.draw(d, xx, yy, ll, ff))
        if sh:
            dr(x + sh.get("offsetX", 0), y + sh.get("offsetY", 0), line, parse_color(sh.get("color"), (0, 0, 0, 102)))
        dr(x, y, line, color)
    write_rgba(r["out"], im)
    return {"ok": True, "w": W, "h": H}

OPS = {"img": do_img, "txt": do_txt, "measure": do_measure}

def main():
    for line in sys.stdin:
        line = line.strip()
        if not line: continue
        try:
            import time as _t; _t0 = _t.time(); r = json.loads(line)
            if os.environ.get('IMGDBG') and re.search(r'[\u0590-\u1fff\u3000-\u9fff\uac00-\ud7af]', str(r.get('text',''))): open('/tmp/imgdbg.log','a').write(json.dumps(r, ensure_ascii=False)+'\n')
            res = OPS[r["op"]](r)
            _dt = (_t.time() - _t0) * 1000
            if _dt > 250: sys.stderr.write('[imgtext slow] op=%s %.0fms textlen=%d firstLine=%s w=%s\n' % (r.get('op'), _dt, len(r.get('text') or ''), r.get('firstLine'), r.get('w'))); sys.stderr.flush()
        except Exception as e:
            res = {"ok": False, "error": str(e)[:200]}
        sys.stdout.write(json.dumps(res) + "\n"); sys.stdout.flush()

def main_fifo(req, resp):
    fin = open(req, "r"); fout = open(resp, "w")
    for line in fin:
        line = line.strip()
        if not line: continue
        try:
            r = json.loads(line)
            if os.environ.get('IMGDBG') and re.search(r'[\u0590-\u1fff\u3000-\u9fff\uac00-\ud7af]', str(r.get('text',''))): open('/tmp/imgdbg.log','a').write(json.dumps(r, ensure_ascii=False)+'\n')
            res = OPS[r["op"]](r)
        except Exception as e:
            res = {"ok": False, "error": str(e)[:200]}
        fout.write(json.dumps(res) + "\n"); fout.flush()

if __name__ == "__main__":
    if len(sys.argv) >= 4 and sys.argv[1] == "--fifo": main_fifo(sys.argv[2], sys.argv[3])
    else: main()
