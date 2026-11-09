'use strict';
const __E = Object.assign(Object.create(null), process.env);
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');

process.on('unhandledRejection', e=>{ console.log('\n[UNHANDLED REJECTION]\n'+((e&&e.stack)||e)); });
process.on('uncaughtException', e=>{ console.log('\n[UNCAUGHT]\n'+((e&&e.stack)||e)); });

(function ensureCdmHost(){
  if (process.env.NOCDMHOST === '1') return;
  const SOCK = process.env.CDM_SOCK || '/tmp/gibbon-cdm.sock', PIDF = '/tmp/gibbon-cdmhost.pid';
  const bin = path.resolve(__dirname, '../cdmhost/cdmhost');
  const c = require('net').connect(SOCK);
  const done = (alive) => { try { c.destroy(); } catch {}
    if (alive) return;
    if (!fs.existsSync(bin)) { console.log('[cdmhost] binario nao encontrado em', bin, '(compile: g++ -std=c++17 -O2 -fPIC -Wno-attributes -o cdmhost cdmhost.cpp -ldl -lpthread)'); return; }
    try { const log = fs.openSync('/tmp/cdmhost.log', 'w'); const cdmLib = process.env.WVCDM_PATH || path.resolve(__dirname, '../cdmhost/libwidevinecdm.so'); const ch = cp.spawn(bin, fs.existsSync(cdmLib) ? [cdmLib] : [], { cwd: path.dirname(bin), detached: true, stdio: ['ignore', log, log] }); ch.unref(); fs.writeFileSync(PIDF, String(ch.pid)); console.log('[cdmhost] iniciado (pid', ch.pid + ')'); }
    catch (e) { console.log('[cdmhost] falha ao iniciar:', e.message); } };
  c.once('connect', () => done(true)); c.once('error', () => done(false));
  process.on('exit', () => { if (globalThis.__restarting) return; try { const pid = +fs.readFileSync(PIDF, 'utf8'); if (pid > 1 && (/cdmhost/.test(fs.readFileSync('/proc/' + pid + '/comm', 'utf8')) || /cdmhost/.test(fs.readFileSync('/proc/' + pid + '/cmdline', 'utf8')))) process.kill(pid, 'SIGTERM'); fs.unlinkSync(PIDF); } catch {} });
})();

if (process.env.OPENSTACK) Error.stackTraceLimit = 100;
process.env.PULSE_PROP = process.env.PULSE_PROP || 'application.name=Netflix application.icon_name=netflix application.id=netflix media.role=video';
process.env.NETFLIX_ICON_BMP = process.env.NETFLIX_ICON_BMP || path.resolve(__dirname, '../assets/icon/netflix-64.bmp');
(function installDesktopEntry(){ try {
  const home = process.env.HOME; if (!home || process.env.NODESKTOPENTRY) return;
  const data = process.env.XDG_DATA_HOME || path.join(home, '.local/share'), adir = path.resolve(__dirname, '../assets/icon');
  for (const sz of [16, 32, 48, 64, 128, 256, 512]) { const src = path.join(adir, 'netflix-' + sz + '.png'); if (!fs.existsSync(src)) continue;
    const dst = path.join(data, 'icons/hicolor', sz + 'x' + sz, 'apps/netflix.png');
    let same = false; try { same = fs.statSync(dst).size === fs.statSync(src).size; } catch {}
    if (!same) { fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); } }
  const launcher = process.env.PKG_LAUNCHER, runtime = __dirname;
  const exec = launcher ? '"' + launcher + '" %U' : 'env WINDOW=1 "' + process.execPath + '" "' + path.join(runtime, 'host.js') + '"';
  const entry = '[Desktop Entry]\nType=Application\nName=Netflix\nGenericName=Netflix\nComment=Netflix\nExec=' + exec + '\nPath=' + runtime + '\nIcon=netflix\nTerminal=false\nCategories=AudioVideo;Video;\nStartupWMClass=netflix\n';
  const f = path.join(data, 'applications/netflix.desktop'); let cur = ''; try { cur = fs.readFileSync(f, 'utf8'); } catch {}
  if (cur !== entry) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, entry); }
} catch (e) { console.log('[desktop] nao foi possivel registrar o icone/entrada de menu:', e.message); } })();
const REL = path.resolve(__dirname, '../../tvui/apps/gibbontvui/20261016_37301/release');
const UI = path.join(REL, 'darwinBootstrap.js');
const CDN = 'https://secure.netflix.com/us/tvui/ql/20261016/37301/release';

let context;

function loadChunk(fname, url) {
  const isQl = !url || /\/us\/tvui\/ql\//.test(url);
  const simple = !/[\/?]/.test(fname) && isQl;
  const ERRTXT = /error-text\/(config\.text\.lruderrorpage\.[A-Za-z0-9-]+\.js)/.exec(String(url||fname));
  const local = ERRTXT ? path.resolve(__dirname, '../splash/error-text', ERRTXT[1]) : simple ? path.join(REL, fname) : path.join(REL, 'ext', (url||fname).replace(/^https?:\/\//,'').replace(/[^A-Za-z0-9._-]/g, '_').slice(-150));
  const src = (url && /^https?:/.test(url) && !simple) ? url : CDN + '/' + fname;
  const _l = local;
  if (!fs.existsSync(local)) {
    console.log('[loadChunk] baixando:', src);
    try { fs.mkdirSync(path.dirname(local), { recursive: true });
      cp.execFileSync('curl', ['-sfk', '-o', local, src], { timeout: 60000 }); }
    catch (e) { console.log('  ERRO baixando', fname, e.message.split('\n')[0]); try{fs.unlinkSync(local);}catch{} return false; }
  }
  let code = fs.readFileSync(local, 'utf8');
  code = code.split('drawOrder:null!=f?f:o&&b?1:void 0,testAttributes:x}').join('drawOrder:null!=f?f:o&&b?1:void 0,layoutStretch:E,testAttributes:x}');
  code = code.split('drawOrder:null!=h?h:d&&J?1:void 0,entered:Y,').join('drawOrder:null!=h?h:d&&J?1:void 0,layoutStretch:A,entered:Y,');
  if (process.env.BTNLOG) code = code.split('function F(e){var t=e.accessibilityRole,a=void 0===t?"button":t,').join('function F(e){globalThis.__mark("[btnF]",e.name,String(e.layoutStretch),Object.keys(e).join(","));var t=e.accessibilityRole,a=void 0===t?"button":t,');
  code = code.split('Z=J.hasFullScreenDelay,ee=J.initialListItem').join('Z=J.hasFullScreenDelay!==false,ee=J.initialListItem');
  code = code.split('f=(0,(s||(s=n(65435))).useGetListConfig)().initialFullScreenDelayInSeconds,').join('f=((0,(s||(s=n(65435))).useGetListConfig)().initialFullScreenDelayInSeconds)||5,');
  code = code.split('d=e.gateStackRequest,s=e.interstitialDGSRequest,').join('d=e.gateStackRequest||[],s=e.interstitialDGSRequest,');
  if (process.env.BACKLOCAL !== '0') code = code.split('An=(0,(_||(_=t(18123))).useGetSubmitActionCallback)(ze,{loggingCommand:null,loggingViewName:Me,parentLoggingViewName:Be.loggingViewName,route:mn,serverState:bn,setState:Sn,trackingInfo:Ne,transitionState:wn}),').join('An=function(__o){return function(a1,a2){var __done=!1,__go=function(){if(__done)return;__done=!0;try{var __h=t(98221);xn(__h.historyInsert({clViewName:null,pathname:"/welcomeContentLanding"},0));setTimeout(function(){try{xn(__h.historyPop())}catch(e){}},40)}catch(e){globalThis.__mark("[backlocal-err]",String(e))}},__r;try{__r=__o(a1,a2)}catch(e){__go();return}Promise.resolve(__r).then(function(){setTimeout(__go,30)},function(){__go()});setTimeout(__go,6000);return __r}}((0,(_||(_=t(18123))).useGetSubmitActionCallback)(ze,{loggingCommand:null,loggingViewName:Me,parentLoggingViewName:Be.loggingViewName,route:mn,serverState:bn,setState:Sn,trackingInfo:Ne,transitionState:wn})),');
  if (process.env.LICDBG && /nrdjs/.test(fname)) { try{ require('fs').writeFileSync('/tmp/nrdjs_dump.js', code); }catch{} }
  if (/nrdjs/.test(fname)) {
    if (process.env.MARK) {
      code = code.replace('t.onLoad=function(e,t,i,n,r,s,a,o,u,l){', 't.onLoad=function(e,t,i,n,r,s,a,o,u,l){globalThis.__mark("[MARK] onLoad reason="+e.reason+" status="+e.statusCode+" json="+(e.json&&e.json.length)+" fmt="+t);');
      code = code.replace('S=b.response;b.error,t(b.error,S,S.body)', 'S=b.response;globalThis.__mark("[MARK] netjs cb error="+(b.error&&(b.error.error&&b.error.error.message||b.error.message))+" status="+S.statusCode);b.error,t(b.error,S,S.body)');
      code = code.replace('if("jsonstream"===t)h.json=e.json||null;', 'if("jsonstream"===t)(globalThis.__mark("[MARK] resp json n="+(e.json&&e.json.length)),h.json=e.json||null);');
      code = code.replace('var e=i._source.getJSON();if(e)return', 'var e=i._source.getJSON();globalThis.__mark("[MARK] getJSON", e&&e.length);if(e)return');
      code = code.replace('function(e){(0,z.A)(t,function(){if(i._source instanceof Q){', 'function(e){globalThis.__mark("[MARK] source.read result");(0,z.A)(t,function(){if(i._source instanceof Q){');
    }
    if (process.env.LICDBG) { const lr='e.success?(this.emit("receivedLicense",{response:e})'; if (code.includes(lr)) code = code.replace(lr,'globalThis.__mark("[LICRESP]",JSON.stringify(e).slice(0,500)),'+lr); else console.log('[host] AVISO: patch LICDBG nao aplicou'); }
    if (process.env.LICDBG) { const lf='var l={pboLinks:e.links};'; if (code.includes(lf)) code = code.replace(lf,'globalThis.__mark("[LICH]","success="+e.success,"cancelled="+u.cancelled,JSON.stringify(e).slice(0,700));'+lf); else console.log('[host] AVISO: patch LICH nao aplicou'); }
    if (process.env.LICDBG) { const ch='et.prototype._challengeHandler=function(e,t){var i=e.success;'; if (code.includes(ch)) code = code.replace(ch, ch+'globalThis.__mark("[CH]","succ="+i,"req="+this._challengeRequested,"renew="+t,"started="+this._started,"keys="+Object.keys(e||{}).join(","),"drmType="+e.drmType);'); else console.log('[host] AVISO: patch CH nao aplicou'); }
    if (process.env.LICDBG) for (const [fn,tag] of [['_trace','T'],['_warn','W'],['_error','E']]) { const k='et.prototype.'+fn+'=function(){'; if (code.includes(k)) code = code.replace(k, k+'try{globalThis.__mark("[ASE-'+tag+']",Array.prototype.slice.call(arguments).map(function(x){try{return typeof x==="object"?JSON.stringify(x).slice(0,300):String(x)}catch(q){return "?"}}).join(" "))}catch(q){};'); else console.log('[host] AVISO: patch ASE-'+tag+' nao aplicou'); }
    if (process.env.LICDBG) for (const [k,m] of [['i.createLicenseSession=function(e){return(0,r._)(function(){var t,i,n,r,s,a,o,l,c,d,h;','"[CLS] createLicenseSession"'],['et.prototype.start=function(){','"[ET] start started="+this._started+" saved="+!!this._savedDrmHeader'],['et.prototype.provideDrmHeader=function(e){','"[ET] provideDrmHeader type="+(e&&e.drmType)+" src="+(e&&e.source)+" exists="+y.K.exists+" chReq="+this._challengeRequested+" started="+this._started']]) { if (code.includes(k)) code = code.replace(k, k+'try{globalThis.__mark('+m+')}catch(q){};'); else console.log('[host] AVISO: patch '+m+' nao aplicou'); }
    if (process.env.LICDBG) { const lq='var q=l?l.getLdlResolutionLimit():void 0;'; if (code.includes(lq)) code = code.replace(lq,'try{globalThis.__mark("[MANI] movie="+h+" streams="+(e.video_tracks&&e.video_tracks[0]&&e.video_tracks[0].streams||[]).map(function(x){return x.res_h+"p/"+x.bitrate+"/"+x.content_profile+(x.isDrm?"/drm":"")}).join(" "))}catch(q){};'+lq); else console.log('[host] AVISO: patch MANI nao aplicou'); }
    if (process.env.LICDBG) { const lp='h.A.license(e,this._pboLinks,u).then(d,d)}'; if (code.includes(lp)) code = code.replace(lp,'(globalThis.__mark("[LICP] call"),h.A.license(e,this._pboLinks,u)).then(function(x){var s;try{s=JSON.stringify(x).slice(0,500)}catch(q){s="nojson "+q}globalThis.__mark("[LICP] ok",s);d(x)},function(x){var s;try{s=String(x&&x.stack||JSON.stringify(x)).slice(0,500)}catch(q){s="nojson"}globalThis.__mark("[LICP] rej",s);d(x)})}'); else console.log('[host] AVISO: patch LICP nao aplicou'); }
    if (process.env.LICDBG) { const pl='et.prototype._provideLicense=function(e,t,i,n,s){'; if (code.includes(pl)) code = code.replace(pl, pl+'globalThis.__mark("[PROVLIC]","sid="+t,"legacy="+i,"lic="+(e&&e.length),"multi="+(y.K.isMultiSession));'); else console.log('[host] AVISO: patch PROVLIC nao aplicou'); }
    if (process.env.LICDBG) { const dp='i.provideLicense=function(e,t){var i=this,n=this._assertNDSFunctionExists("provideLicense");'; if (code.includes(dp)) code = code.replace(dp, dp+'globalThis.__mark("[DRMPL]","assert="+JSON.stringify(n),"opened="+this._opened,"fn="+typeof(this._nds&&this._nds.provideLicense));'); else console.log('[host] AVISO: patch DRMPL nao aplicou'); }
    if (process.env.MANIFESTREQ) { const mr='i(e);var s=e.viewableIds;e.viewableIds=void 0;'; if (code.includes(mr)) code = code.replace(mr,'globalThis.__mark("[MANIFESTREQ]",JSON.stringify(e));'+mr); else console.log('[host] AVISO: patch MANIFESTREQ nao aplicou'); }
    if (process.env.ASEHIGH !== '0') {
      const dt='defaultThroughput:["defaultThroughput",1537]'; if (code.includes(dt)) code = code.replace(dt,'defaultThroughput:["defaultThroughput",30000]'); else console.log('[host] AVISO: patch defaultThroughput nao aplicou');
      const mv='minInitVideoBitrate:["minInitVideoBitrate",-1/0]'; if (code.includes(mv)) code = code.replace(mv,'minInitVideoBitrate:["minInitVideoBitrate",2500]'); else console.log('[host] AVISO: patch minInitVideoBitrate nao aplicou');
    }
    if (process.env.LICCACHE !== '1') { const n0 = (code.match(/\b[\w$]+(?:\.A)?\.useLicenseCache\b/g) || []).length; code = code.replace(/\b[\w$]+(?:\.A)?\.useLicenseCache\b/g, '(!1)'); code = code.replace('useLicenseCache:[["uselc","useLicenseCache"],!0]','useLicenseCache:[["uselc","useLicenseCache"],!1]'); console.log('[host] LICCACHE off:', n0, 'leituras'); }
    if (process.env.KODIID !== '0') {
      const KID = '{clientVersion:"6.0065.004.911",platform:"108.0.0.0",osVersion:"0.0.0",osName:"linux"}';
      const mk='e.viewableIds=void 0;'; if (code.includes(mk)) code = code.replace(mk, mk+'Object.assign(e,'+KID+',{uiVersion:"shakti-v1ae5d389",uiPlatform:"SHAKTI"});'); else console.log('[host] AVISO: patch KODIID manifest nao aplicou');
      const l1='videoTrackName:this._videoTrackId,xid:this._xid};'; if (code.includes(l1)) code = code.replace(l1, l1+'Object.assign(u,'+KID+');'); else console.log('[host] AVISO: patch KODIID license nao aplicou');
      const l2='videoTrackName:e.newTrackId},'; if (code.includes(l2)) code = code.replace(l2, 'videoTrackName:e.newTrackId,clientVersion:"6.0065.004.911",platform:"108.0.0.0",osVersion:"0.0.0",osName:"linux"},'); else console.log('[host] AVISO: patch KODIID ldl nao aplicou');
    }
    if (process.env.EXC) code = code.replace('try{var n,r=t.call(n,e);void 0!==r&&e.result(r)}catch(t){', 'try{var n,r=(globalThis.__cnt&&globalThis.__cnt(),t.call(n,e));void 0!==r&&e.result(r)}catch(t){');
    if (process.env.EXC) code = code.replace('catch(t){try{e.error(t)}catch(e){}}}})},67284', 'catch(t){globalThis.__exc&&globalThis.__exc(t);try{e.error(t)}catch(e){}}}})},67284');
    code = code.split('t.prototype.getCryptoContext=function(e,t){return new tL.Q}').join('t.prototype.getCryptoContext=function(e,t,i){i.result(new tL.Q)}');
    code = code.replace('function P(e){if(!k(e)&&S(e)){', 'function P(e){if(!k(e)&&S(e)){globalThis.__dbg2&&globalThis.__dbg2(e);');
    code = code.replace('i.console.warn("failed, will retry in",d,"ms :",r)', '(globalThis.__dbg&&globalThis.__dbg(r,s)),i.console.warn("failed, will retry in",d,"ms :",r)');
  }
  if (process.env.LICDBG && /nrdjs/.test(fname)) { try{ require('fs').writeFileSync('/tmp/nrdjs_final.js', code); console.log('[patchinfo] final', fname, code.length, '[CH]' , code.includes('[CH]'), 'ASE', code.includes('[ASE-W]'), 'LICP', code.includes('[LICP]')); }catch{} }
  if (process.env.MSLDBG && /nrdjs/.test(fname)) code = code.split('throw new ee.A($.A.MSL_PARSE_ERROR,"header/errormsg "+e,_t)').join('(globalThis.__mark("[MSLERRMSG]", String(_t&&_t.message), String(_t&&_t.cause&&_t.cause.message), String(_t&&_t.stack).split("\\n").slice(0,8).join(" | ")), (function(){throw new ee.A($.A.MSL_PARSE_ERROR,"header/errormsg "+e,_t)})())');
  if (process.env.MSLDBG && /nrdjs/.test(fname)) code = code.split('else throw TypeError("Value ["+typeof i+"] is an unsupported type.")').join('else { globalThis.__mark("[MSLPUT]", String(t), Object.prototype.toString.call(i), i&&i.constructor&&i.constructor.name, i&&Object.getPrototypeOf(i)===null, JSON.stringify(i)); throw TypeError("Value ["+typeof i+"] is an unsupported type.") }');
  try { runCached(code, fname); return true; }
  catch (e) { console.log('[loadChunk] erro rodando', fname, ':', e.message, '\n' + String(e.stack).split('\n').slice(0,6).join('\n')); return false; }
}
function fnameFromOpts(opts) {
  const hdr = opts && opts.headers && opts.headers['X-Gibbon-Cache-Control'];
  let m = hdr && /key=([^,\s]+)/.exec(hdr);
  if (m) return m[1];
  try { return path.basename(new URL(opts.url).pathname); } catch { return null; }
}

const FONT_DIR = path.resolve(__dirname, '../cache/fonts');
const __UILANGS = ['pt-BR','pt','en-US','en','ar','bg','bn','cs','da','de','el','en-AU','en-GB','en-NZ','es-ES','es','et','fa','fi','fr-CA','fr','gu','he','hi','hr','hu','hy','id','is','it','ja','ka','kk','kn','ko','ku','lt','lv','ml','mn','mr','ms','mt','nb','ne','nl','no','or','pa','pl','ps','pt-PT','ro','ru','sk','sl','sq','sr-Cyrl','sr','sr-Latn','sv','sw','ta','te','th','tl','tr','ug','uk','ur','vi','zh-Hans','zh-Hant'];
function __detectLang(){
  const env = process.env, cands = [];
  for (const k of ['NETFLIX_LANG', 'LC_ALL', 'LC_MESSAGES', 'LANG']) if (env[k]) cands.push(env[k]);
  if (env.LANGUAGE) cands.push(...String(env.LANGUAGE).split(':'));
  try { cands.push(Intl.DateTimeFormat().resolvedOptions().locale); } catch {}
  const sup = new Map(__UILANGS.map(l => [l.toLowerCase(), l]));
  const ALIAS = { iw:'he', in:'id', no:'nb', nn:'nb', fil:'tl', 'zh-cn':'zh-Hans', 'zh-sg':'zh-Hans', 'zh-hans':'zh-Hans', 'zh-tw':'zh-Hant', 'zh-hk':'zh-Hant', 'zh-mo':'zh-Hant', 'zh-hant':'zh-Hant', 'sr-latn':'sr-Latn', 'sr-cyrl':'sr-Cyrl', 'es-419':'es', 'es-mx':'es', 'es-ar':'es', 'es-co':'es', 'es-cl':'es', 'fr-fr':'fr', 'fr-be':'fr', 'fr-ch':'fr', 'de-at':'de', 'de-ch':'de', 'en-ca':'en-US', 'en-ie':'en-GB', 'en-za':'en-GB', 'en-in':'en-GB' };
  for (let c of cands) {
    c = String(c).split('.')[0].split('@')[0].replace(/_/g, '-').trim();
    if (!c || /^(c|posix)$/i.test(c)) continue;
    const low = c.toLowerCase(); if (sup.has(low)) return sup.get(low);
    if (ALIAS[low] && sup.has(ALIAS[low].toLowerCase())) return sup.get(ALIAS[low].toLowerCase());
    const base = low.split('-')[0];
    if (ALIAS[base] && sup.has(ALIAS[base].toLowerCase())) return sup.get(ALIAS[base].toLowerCase());
    if (sup.has(base)) return sup.get(base);
    const reg = [...sup.keys()].find(k => k.split('-')[0] === base); if (reg) return sup.get(reg);
  }
  return 'en-US';
}
const __DEVLANG = __detectLang();
const __DEVLANGS = [...new Set([__DEVLANG, __DEVLANG.split('-')[0], 'en-US', 'en'])];
console.log('[lang] idioma do dispositivo:', __DEVLANG, '(lista:', __DEVLANGS.join(','), ')');
const __FONT_SCRIPTS = { Latn:{languages:['en','es','pt','fr','de','it','nl','sv','da','nb','no','fi','pl','tr','ro','cs','hu','hr','sk','sl','et','lv','lt','is','id','ms','tl','vi','sq','mt','sw','sr','ku','*']}, Cyrl:{languages:['bg','ru','uk','sr','kk','mn']}, Grek:{languages:['el']}, Arab:{languages:['ar','fa','ur','ps','ku','ug']}, Hebr:{languages:['he']}, Deva:{languages:['hi','ne','mr']}, Beng:{languages:['bn']}, Gujr:{languages:['gu']}, Guru:{languages:['pa']}, Knda:{languages:['kn']}, Mlym:{languages:['ml']}, Orya:{languages:['or']}, Taml:{languages:['ta']}, Telu:{languages:['te']}, Thai:{languages:['th']}, Geor:{languages:['ka']}, Armn:{languages:['hy']}, Hans:{languages:['zh']}, Hant:{languages:['zh']}, Kore:{languages:['ko']}, Jpan:{languages:['ja']} };
const fontReg = [];
const FONT_ATTRS = new Proxy({}, { get(t, k){ if (typeof k !== 'string') return undefined; if (!(k in t)) t[k] = Math.pow(2, Object.keys(t).length); return t[k]; } });
let fontEpoch = 0;
function fontAdd(spec, cb){
  const done = (ok)=>{ if (cb) setImmediate(()=>cb({ success: ok })); };
  try {
    const req = spec && spec.request, url = req && req.url;
    const ent = { family: String(spec.family||''), style: +spec.style||0, weight: +spec.weight||0, priority: +spec.priority||0, blocks: spec.blocks||[], languages: spec.languages||[], file: null };
    if (process.env.FONTLOG) console.log('[addFont]', ent.family, 'style', ent.style, 'w', ent.weight, 'prio', ent.priority, url);
    if (!url || !/^https?:/.test(url)) { done(false); return; }
    fs.mkdirSync(FONT_DIR, { recursive:true });
    const local = path.join(FONT_DIR, path.basename(new URL(url).pathname));
    const finish = ()=>{ ent.file = local; fontReg.push(ent); fontEpoch++; done(true); };
    if (fs.existsSync(local) && fs.statSync(local).size > 1000) { finish(); return; }
    cp.execFile('curl', ['-sfk', '-o', local+'.part', url], { timeout: 90000 }, (err)=>{
      if (err) { try{fs.unlinkSync(local+'.part');}catch{} if (process.env.FONTLOG) console.log('[addFont] ERRO baixando', url); done(false); return; }
      fs.renameSync(local+'.part', local); finish(); });
  } catch(e){ if (process.env.FONTLOG) console.log('[addFont THROW]', e.message); done(false); }
}
const __ffCache = new Map();
function fontsFor(family, weight, style){
  if (!fontReg.length) return undefined;
  const ck = family+'|'+weight+'|'+style+'|'+fontEpoch+'|'+fontReg.length; const hit = __ffCache.get(ck); if (hit) return hit;
  const res = fontsForCalc(family, weight, style); __ffCache.set(ck, res); return res;
}
function fontsForCalc(family, weight, style){
  const w = (weight==='bold'||weight==='heavy'||weight==='black'||+weight===1) ? 1 : 0, st = (style==='italic'||+style===1) ? 1 : 0;
  const fam = String(family||'');
  const score = f => (f.family===fam ? 100 : 0) + (f.weight===w ? 10 : 0) + (f.style===st ? 5 : 0) - Math.abs(f.weight-w);
  const sorted = fontReg.slice().sort((a,b)=> score(b)-score(a) || b.priority-a.priority);
  const out = []; for (const f of sorted) if (!out.includes(f.file)) out.push(f.file);
  return out;
}
const JAR_FILE = process.env.JAR_FILE || path.resolve(__dirname, '../data/cookies.json');
const jar = new Map();
try { for (const [k,v] of Object.entries(JSON.parse(fs.readFileSync(JAR_FILE,'utf8')))) jar.set(k,v); } catch {}
function jarSave(){ try{ fs.writeFileSync(JAR_FILE, JSON.stringify(Object.fromEntries(jar)), { mode:0o600 }); }catch{} }
function jarSet(str){ const part=String(str).split(';')[0]; const i=part.indexOf('='); if(i<=0) return;
  const k=part.slice(0,i).trim(), v=part.slice(i+1).trim();
  const attrs=String(str).toLowerCase();
  if (v==='' || /max-age=0|expires=thu, 01 jan 1970/.test(attrs)) { if (/NetflixId/.test(k) && Date.now()-(globalThis.__lastNetErr||0) < 180000) { console.log('[cookie] mantendo', k, '(falha de rede recente: nao e logout)'); return; } jar.delete(k); } else jar.set(k,v); jarSave(); try{ jarCheckLogin(); }catch{} }
let __lastId = (jar.get('NetflixId')||'')+'|'+(jar.get('SecureNetflixId')||''), __reT = null, __loginT0 = 0;
function jarCheckLogin(){ const has = jar.has('NetflixId')||jar.has('SecureNetflixId'), cur = (jar.get('NetflixId')||'')+'|'+(jar.get('SecureNetflixId')||'');
  if (process.env.LOGINDBG) console.log('[logindbg] t='+process.uptime().toFixed(1)+' has='+has+' mudou='+(cur!==__lastId)+' memberBoot='+!!globalThis.__memberBoot+' netErrAgo='+Math.round((Date.now()-(globalThis.__lastNetErr||0))/1000)+'s');
  if (globalThis.__memberBoot) { __lastId = cur; return; }
  if (process.uptime() < 10) { __lastId = cur; return; }
  if (has && cur !== __lastId) { if (!__reT) __loginT0 = Date.now(); __lastId = cur; clearTimeout(__reT); __reT = setTimeout(()=>{ __reT = null; globalThis.__reloadAsMember && globalThis.__reloadAsMember(); }, 150); }
  if (!has) { __lastId = '|'; clearTimeout(__reT); __reT = null; } }
function jarHeader(){ return [...jar].map(([k,v])=>k+'='+v).join('; '); }
const https = require('https');
const http = require('http');
const NETLOG = process.env.NETLOG === '1';
let NREQ = 0;
function reqHeaders(h){
  const out = {};
  if (!h) return out;
  if (Array.isArray(h)) { for (const e of h) {
    if (typeof e === 'string') { const i=e.indexOf(':'); if(i>0) out[e.slice(0,i).trim()] = e.slice(i+1).trim(); }
    else if (Array.isArray(e) && e.length>=2) out[String(e[0])] = String(e[1]);
    else if (e && e.name!=null) out[String(e.name)] = String(e.value); } }
  else if (typeof h === 'object') { for (const k in h) out[k] = String(h[k]); }
  return out;
}
function parseJsonStream(str){
  const out=new globalThis.__CA(); let i=0, n=str.length; const CJ=vm.runInContext('JSON',context);
  while(i<n){
    while(i<n && /\s/.test(str[i])) i++;
    if(i>=n) break;
    const st=i; let depth=0, inStr=false, esc=false;
    for(; i<n; i++){ const c=str[i];
      if(inStr){ if(esc) esc=false; else if(c==='\\') esc=true; else if(c==='"') inStr=false; continue; }
      if(c==='"') inStr=true; else if(c==='{'||c==='[') depth++; else if(c==='}'||c===']'){ depth--; if(depth===0){ i++; break; } } }
    try{ out.push(CJ.parse(str.slice(st,i))); }catch(e){ break; }
  }
  return out;
}
function httpLoad(opts, cb){
  const id = ++NREQ;
  let url = opts && (opts.url || opts.uri);
  if (typeof url === 'string' && /uiboot\.netflix\.com\/apps\/[^/]+\/upgrade_policy/.test(url) && !process.env.REAL_UIBOOT) {
    const nonm = /gibbontvui_nonmember/.test(url);
    globalThis.__memberBoot = !nonm && (jar.has('NetflixId')||jar.has('SecureNetflixId')) && !process.env.NOMEMBER;
    console.log('[policy]', url.slice(0,120), 'nonmember='+nonm, 'identity='+(jar.has('NetflixId')||jar.has('SecureNetflixId')));
    const body = fs.readFileSync(path.resolve(__dirname, nonm ? '../data/nonmember_policy.txt' : '../data/upgrade_policy.json'), 'utf8');
    if (!nonm && (jar.has('NetflixId')||jar.has('SecureNetflixId')) && !process.env.NOMEMBER) { try{ const d=JSON.parse(body); const t=d.uibootdata.tvui; t.hasIdentity='true'; d.ui.url=String(nrdpReal.gibbon.__loc||'').split('?')[0] || d.ui.url; let ti={}; try{ ti=JSON.parse(t.truthInputs); }catch{} ti.abAllocations=ti.abAllocations||{}; ti.userSettings=ti.userSettings||{}; t.truthInputs=JSON.stringify(ti); if(NETLOG) console.log('[net] payload de MEMBRO sintetizado'); return setImmediate(()=>cb && cb({ statusCode:200, url, finalURL:url, headers:['Content-Type: application/json'], data: JSON.stringify(d), duration:1, errorcode:'SUCCESS', reason:'SUCCESS', socketReused:false, sslSessionResumed:false, connect:0 })), { id, cancel(){} }; }catch(e){ console.log('[member payload erro]', e.message); } }
    if (NETLOG) console.log(`[net #${id}] LOCAL upgrade_policy (${body.length}b)`);
    setImmediate(()=>cb && cb({ statusCode:200, url, finalURL:url, headers:['Content-Type: '+(nonm?'text/plain':'application/json')], data: body, duration:1, errorcode:'SUCCESS', reason:'SUCCESS', socketReused:false, sslSessionResumed:false, connect:0 }));
    return { id, cancel(){} };
  }
  if (process.env.OPTLOG && /router/.test(String(url))) console.log('[opts]', JSON.stringify(Object.assign({}, opts, {body: opts.body&&String(opts.body).slice(0,60)})).slice(0,500), typeof opts.body);
  if (process.env.DUMPREQ && /router/.test(String(url))) { try{ const b=opts.body; const t=typeof b==='string'?b:Buffer.from(b.buffer?Buffer.from(b.buffer,b.byteOffset,b.byteLength):b).toString('utf8'); fs.writeFileSync(process.env.DUMPREQ+'/req_'+id+'.txt', t); }catch(e){} }
  if (opts && opts.mslPayload && process.env.NETLOG) console.log(`[net #${id}] mslPayload request ->`, url, JSON.stringify(opts).slice(0,300));
  if (typeof url !== 'string') { if(cb) cb({ statusCode:999, url:String(url), errorcode:'DATAURIERROR', reason:'DATAURIERROR', headers:[], data:'' }); return; }
  let U; try { U = new URL(url); } catch { if(cb) cb({ statusCode:999, url, errorcode:'DATAURIERROR', reason:'DATAURIERROR', headers:[], data:'' }); return; }
  const body = opts.data!=null ? opts.data : (opts.body!=null ? opts.body : (opts.post!=null ? opts.post : undefined));
  const method = (opts.method || (body!=null ? 'POST' : 'GET')).toUpperCase();
  const headers = reqHeaders(opts.headers);
  if (/\.netflix\.com$/.test(U.hostname) && jar.size && !headers['Cookie'] && !headers['cookie']) headers['Cookie'] = jarHeader();
  if (body!=null && headers['Content-Length']==null)
    headers['Content-Length'] = Buffer.byteLength(typeof body==='string'?body:Buffer.from(body));
  const wantBytes = opts.format === 'uint8array';
  const lib = U.protocol === 'http:' ? http : https;
  if (NETLOG) console.log(`[net #${id}] ${method} ${url.slice(0,120)}`);
  if (process.env.NETFULL && new RegExp(process.env.NETFULL).test(url)) { try{ require('fs').appendFileSync('/tmp/netfull.log', `\n#${id} ${method} ${url}\n${body==null?'':(typeof body==='string'?body:Buffer.from(body).toString())}\n`); }catch{} }
  const t0 = Date.now();
  const req = lib.request({ method, hostname:U.hostname, port:U.port||(U.protocol==='http:'?80:443),
    path:U.pathname+U.search, headers, rejectUnauthorized:false, timeout: (opts.timeout&&opts.timeout.overall)||30000 }, (res)=>{
    const chunks = [];
    res.on('data', d=>chunks.push(d));
    res.on('end', ()=>{
      const buf = Buffer.concat(chunks);
      const hdrArr = []; for (let i=0;i<res.rawHeaders.length;i+=2) hdrArr.push(res.rawHeaders[i]+': '+res.rawHeaders[i+1]);
      for (let i=0;i<res.rawHeaders.length;i+=2) if (/^set-cookie$/i.test(res.rawHeaders[i])) jarSet(res.rawHeaders[i+1]);
      const resp = { statusCode: res.statusCode, url, finalURL: url, headers: hdrArr,
        data: wantBytes ? new Uint8Array(buf) : buf.toString('utf8'),
        json: opts.format==='jsonstream' ? parseJsonStream(buf.toString('utf8')) : undefined,
        duration: Date.now()-t0, errorcode:'SUCCESS', reason:'SUCCESS', socketReused:false, sslSessionResumed:false, connect: Date.now()-t0 };
      if (process.env.LANGDBG && /\/graphql|pathEvaluator/.test(url)) { try{ fs.appendFileSync('/tmp/langresp.txt', '\n#'+id+' '+method+' '+url+'\nREQ '+(body==null?'':(typeof body==='string'?body:Buffer.from(body).toString())).slice(0,1500)+'\nRESP '+res.statusCode+' '+buf.toString('utf8').slice(0,300000)+'\n'); }catch{} }
      if (false) { try{ fs.writeFileSync('/tmp/langresp.txt', method+' '+url+'\nREQ '+(body==null?'':(typeof body==='string'?body:Buffer.from(body).toString()))+'\nRESP '+buf.toString('utf8')); console.log('[langdbg] resposta com availablePreferredLocales salva em /tmp/langresp.txt'); }catch{} }
      if (NETLOG) console.log(`[net #${id}] <- ${res.statusCode} ${resp.data.length||buf.length}b`, res.statusCode>=300&&res.statusCode<400 ? "loc="+res.headers.location+" cookie="+!!headers["Cookie"] : "");
      if (process.env.DUMPNET) { try{ fs.writeFileSync(path.join(process.env.DUMPNET.startsWith('/')?process.env.DUMPNET:require('os').tmpdir(),'net_'+id+'.txt'),
        method+' '+url+'\nstatus '+res.statusCode+'\n'+hdrArr.join('\n')+'\n\n'+(typeof resp.data==='string'?resp.data:buf.toString('utf8'))); }catch(e){} }
      if (cb) { try{ cb(resp); }catch(e){ console.log('[httpLoad cb THROW] #'+id+'\n'+(e&&e.stack||e)); } }
    });
  });
  req.on('error', (e)=>{ globalThis.__lastNetErr = Date.now(); if(NETLOG) console.log(`[net #${id}] ERR ${e.message}`);
    if (cb) cb({ statusCode:999, url, finalURL:url, headers:[], data: wantBytes?new Uint8Array(0):'',
      errorcode:2, errorgroup:1, reason:'GENERICERROR', errorString:e.code||'', nativeErrorCode:e.code||'', duration:Date.now()-t0 }); });
  req.on('timeout', ()=>{ req.destroy(new Error('timeout')); });
  if (body!=null) req.write(typeof body==='string'?body:Buffer.from(body));
  req.end();
  return { id, cancel(){ try{req.destroy();}catch{} } };
}

const missing = new Map();
function miss(p){ missing.set(p,(missing.get(p)||0)+1); if (process.env.MISSLIVE && !globalThis.__missSeen) globalThis.__missSeen=new Set(); if (process.env.MISSLIVE && !globalThis.__missSeen.has(p)) { globalThis.__missSeen.add(p); console.log('[miss]', p); } }

const ESN_FILE = path.resolve(__dirname, '../data/esn.txt');
function loadEsn(){ try{ return fs.readFileSync(ESN_FILE,'utf8').trim(); }catch{}
  const e='NFCDCH-LX-'+require('crypto').randomBytes(24).toString('base64').replace(/[^A-Za-z0-9]/g,'').toUpperCase().padEnd(30,'0').slice(0,30);
  try{ fs.writeFileSync(ESN_FILE,e+'\n'); }catch{} return e; }
const ESN = process.env.ESN || loadEsn();
const store = new Map();
const UILOG = process.env.UILOG === '1';
function fmt(x, depth){
  depth = depth||0;
  if (x && typeof x==='object' && x.innerError && depth<4){
    const inner = fmt(x.innerError, depth+1);
    return (x.type||x.name||'err') + ' <- innerError: ' + inner;
  }
  if (x && (x instanceof Error || x.stack)) return (x.stack || x.message || String(x));
  if (x && x.message && typeof x.message==='string') return (x.type?x.type+': ':'') + x.message;
  if (typeof x === 'string') return x;
  try { const s = JSON.stringify(x); return (s==='{}' && x) ? (Object.getOwnPropertyNames(x).map(k=>{try{return k+':'+x[k];}catch{return k;}}).join(',')||String(x)) : s; }
  catch { return String(x); }
}
function deepfmt(x){ const seen=new Set(); try{ return JSON.stringify(x,(k,v)=>{ if(v && typeof v==='object' && typeof v.message==='string' && v.stack) return {error:v.message,stack:String(v.stack).split('\n').slice(0,6)}; if(typeof v==='object'&&v){ if(seen.has(v))return '[circ]'; seen.add(v);} return v; }).slice(0,1500);}catch{return String(x);} }
function uilog(level){ return (...a)=>{ if(process.env.DEEPLOG && a.some(x=>x&&typeof x==='object'&&x.constructor&&x.constructor.name!=='Object'?false:false)){}
    if(process.env.DEEPLOG && a.some(x=>typeof x==='string'&&/failed/.test(x))) console.log('[deep]', a.map(x=>typeof x==='object'?deepfmt(x):x).join(' '));
    if(UILOG||level==='error'){ try{ console.log('[ui:'+level+']', a.map(fmt).join(' ').slice(0,500)); }catch{}
  if(level==='error' && process.env.STOPERR==='1'){ const e=a.find(x=>x&&(x.stack||x instanceof Error)); console.log('\n[NATIVE STACK]\n'+(e?e.stack:new Error('marker').stack)); process.exit(3); } } }; }
const logNoop = new Proxy(function(){}, {
  get(_t,p){ if(p==='traceAreas')return process.env.TRACEAREAS||''; if(p==='createArea')return ()=>logNoop;
    if(typeof p==='string' && ['error','warn','info','debug','trace','log'].includes(p)) return uilog(p);
    return ()=>{}; },
  apply(_t,_th,a){ return uilog('log')(...a); },
});

function tolerant(name){
  const store={};
  return new Proxy(store,{ get(t,p){ if(p in t) return t[p]; if(typeof p==='symbol'||p==='then'||p==='toJSON') return undefined;
    if(process.env.TOLLOG) console.log('[tolerant]',name+'.'+String(p));
    return function(){ return undefined; }; }, set(t,p,v){ t[p]=v; return true; } });
}
function makeGibbon(){
    let WID=0;
    class Widget {
      get rect(){ const p=this.__p||{}; return { x:p.x, y:p.y, width:p.width, height:p.height }; }
      set rect(r){ for (const k of ['x','y','width','height']) if (r && r[k]!==undefined) this.__p[k]=r[k]; }
      constructor(data){ this.id=++WID; this.__p=Object.create(null); this.children=[]; this.__parent=null;
        const d=data||{}; for(const k in d) this[k]=d[k]; }
      appendChild(c){ if(process.env.APPLOG) console.log('[appendChild] parent#'+this.id+' <- child#'+c.id); if(c.parent && c.parent!==this) c.parent.removeChild(c); c.parent=this; if(!this.children.includes(c)) this.children.push(c); return c; }
      addChild(c, idx){ if(c.parent && c.parent!==this) c.parent.removeChild(c); c.parent=this; const i=this.children.indexOf(c); if(i>=0) this.children.splice(i,1);
        if(typeof idx==='number' && idx>=0 && idx<=this.children.length) this.children.splice(idx,0,c); else this.children.push(c); return c; }
      insertChild(c, idx){ return this.addChild(c, idx); }
      insertBefore(c, ref){ const i = ref ? this.children.indexOf(ref) : -1; return this.addChild(c, i>=0 ? i : undefined); }
      removeChild(c){ const i=this.children.indexOf(c); if(i>=0)this.children.splice(i,1); return c; }
      remove(){ if(this.parent) this.parent.removeChild(this); }
      addEventListener(name, fn){ (this.__ev||(this.__ev={}))[name]=((this.__ev||{})[name]||[]).concat(fn);
        if (process.env.SSLOG && /Loaded$/.test(String(name))) console.log('[ssl] addEventListener', name, (this.__p&&this.__p.name)||('#'+this.id), JSON.stringify(((this.__p.image||this.__p.backgroundImage)||{}).url||'').slice(-50));
        if (/Loaded$/.test(String(name)) && typeof fn==='function') setImmediate(()=>{ try{ fn({ type:name, data:{ state:'loaded', success:true, time:Date.now()*1000 } }); }catch(e){ console.log('[Widget listener THROW]', e&&e.stack||e); } }); }
      removeEventListener(name, fn){ const a=(this.__ev||{})[name]; if(a) this.__ev[name]=a.filter(f=>f!==fn); }
      startAnimation(prop, from, to, duration, ease, append, flags){
        const now = Date.now(); const dur = +duration||0; const nofrom = (from===undefined||from===null);
        if (globalThis.__animLive) { try{ fs.appendFileSync('/tmp/anim_live.log', JSON.stringify({ t:Date.now()%100000, w:(this.__p&&this.__p.name)||('#'+this.id), id:this.id, prop, from, to, dur:duration, ease, append:!!append, stk:(dur<=1&&nofrom)?String(new Error().stack).split('\n').slice(2,10).map(x=>x.trim().replace(/^at /,'')).join(' | ').slice(0,900):undefined })+'\n'); }catch{} }
        if (process.env.ANIMLOG) console.log('[anim]', (this.__p&&this.__p.name)||('#'+this.id), prop, 'from='+from, 'to='+to, 'dur='+duration, ease===undefined?'':ease, append?'append':'');
        const prev = this.__a && this.__a[prop]; let segs, t0=now, f;
        if (!append && nofrom && dur<=1 && prev && prev.segs && to!==undefined && to!==null && prev.to===to) { const last=prev.segs[prev.segs.length-1]; if (now < last.t0+last.dur) return; }
        if (append && prev && prev.segs && prev.segs.length) { const last=prev.segs[prev.segs.length-1]; t0=Math.max(now, last.t0+last.dur); f = nofrom ? last.to : from; segs=prev.segs.slice(); }
        else { f = nofrom ? curVal(this, prop) : from; segs=[]; }
        const seg = { t0, dur, from:f, to:((to===undefined||to===null) && typeof f==='number') ? f : to, ease }; segs.push(seg);
        const rec = { segs, from:segs[0].from, to, t0:segs[0].t0, dur:(t0+dur-segs[0].t0), ease };
        (this.__a || (this.__a = {}))[prop] = rec;
        if (to!==undefined && to!==null) this.__p[prop] = to;
        const self=this; globalThis.__animN=(globalThis.__animN||0)+1; setTimeout(()=>{ globalThis.__animN--; if (self.__a && self.__a[prop]===rec) delete self.__a[prop]; self._fireAnim(prop, rec, false); }, Math.max(0, t0+dur-now)+1).unref();
      }
      _fireAnim(prop, rec, aborted){ const a=(this.__ev||{}).animationFinished; if(!a) return; const ev={ type:'animationFinished', target:this, data:{ property:prop, value:(rec.to!==undefined&&rec.to!==null)?rec.to:this.__p[prop], aborted:!!aborted, time:Date.now()*1000 } }; for(const f of a.slice()){ try{ f(ev); }catch(e){ console.log('[animationFinished listener THROW]', e&&e.stack||e); } } }
      stopAnimation(prop){ if (this.__a) { if (prop) { const r=this.__a[prop]; delete this.__a[prop]; if(r) this._fireAnim(prop, r, true); } else this.__a = {}; } }
      _sendRenderProperty(prop, oldv, value){ const a=(this.__ev||{}).renderpropertychange; if(a) for(const f of a.slice()){ try{ f({ type:'renderpropertychange', target:this, property:prop, value }); }catch(e){ console.log('[renderprop THROW]', e&&e.stack||e); } } }
      addImage(isBg, props){ const img=Object.assign({ url:'', visible:true }, props||{}); (isBg? (this.backgroundImages||(this.backgroundImages=[])) : (this.images||(this.images=[]))).push(img); return img; }
      addBackgroundImage(props){ return this.addImage(true, props); }
      removeImage(img){ for(const k of ['images','backgroundImages']){ const a=this[k]; if(a){ const i=a.indexOf(img); if(i>=0) a.splice(i,1); } } }
      setAttribute(k,v){ this[k]=v; } getAttribute(k){ return this.__p[k]; }
    }
    const WIDGET_ATTRS = ['x','y','z','width','height','visible','opacity','scale','scaleX','scaleY',
      'rotation','rotationX','rotationY','rotationZ','anchorX','anchorY','translateX','translateY','translateZ',
      'color','backgroundColor','borderColor','borderWidth','cornerRadius','clip','clipToBounds',
      'image','backgroundImage','text','name','font','fontSize','fontColor','textAlign','lineHeight',
      'alpha','blur','brightness','contrast','saturation','zIndex','order','focusable','enabled',
      'measuredWidth','measuredHeight','intrinsicWidth','intrinsicHeight','repeat','tile','mipmap',
      'surface','surfaceCached','cache','shadow','gradient','mask','transform','matrix','pivotX','pivotY'];
    for (const a of WIDGET_ATTRS) {
      Object.defineProperty(Widget.prototype, a, {
        configurable:true, enumerable:true,
        get(){ const v=this.__p[a]; return (v===undefined && a==='visible') ? true : v; },
        set(v){ if (process.env.VISDBG && (a==='visible'||a==='opacity') && globalThis.__visdbgOn) console.log('[vis]', '#'+this.id, this.__p.name||'', a, '=', v); this.__p[a]=v; },
      });
    }
    Object.defineProperty(Widget.prototype, 'hidden', { configurable:true, enumerable:true, get(){ return /localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||'')) ? this.__p.visible===false : this.__p.hidden; }, set(v){ if (/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) this.__p.visible = !v; else this.__p.hidden = v; } });
    Object.defineProperty(Widget.prototype, 'parent', { configurable:true, enumerable:true,
      get(){ return this.__parent || undefined; },
      set(p){ const old=this.__parent; if(old && old!==p && old.children){ const i=old.children.indexOf(this); if(i>=0) old.children.splice(i,1); }
        this.__parent=p; if(p && p.children && !p.children.includes(this)) p.children.push(this); } });
    Object.defineProperty(Widget.prototype, 'text', { configurable:true, enumerable:true,
      get(){ const v=this.__p.text; if (v===undefined && /localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) return this.__tx || (this.__tx={});
        if (typeof v!=='string') return v; const w=this, st=this.textStyle||{};
        return { contents:v, richText:!!st.richText, wrap:st.wrap, maxLines:st.maxLines, truncation:st.truncation,
          info(cb){ setImmediate(()=>{ try{ ensureLayout(); const L=w.__L, pd=padOf(w), k=sceneScale(), width=(L?L.w:num(w.__p.width,0))-pd.l-pd.r;
                        const out=[{ runs:[{ clusters:[0, Math.max(0,v.length-1)], item:{ attribute:{ style:st } }, type:0 }] }];
            cb({ layout:{ lines:out } }); }catch(e){ console.log('[text.info THROW]', e&&e.stack||e); } }); } };
      },
      set(v){ if (v && typeof v==='object') { if (v.contents!==undefined) this.__p.text=v.contents; } else this.__p.text=v; } });
    const mkImg = (w, a)=>{ const o={ visible:true }; let u=''; const uo=x=>(x&&typeof x==='object')?x.url:x, ev=(a==='image'?'imageLoaded':'backgroundImageLoaded');
      Object.defineProperty(o, 'url', { enumerable:true, configurable:true, get(){ return u; }, set(v){ const ch = uo(v)!==uo(u); u=v;
        const ls = w.__ev && w.__ev[ev]; if (ch && uo(v) && ls && ls.length) { const mark=uo(v); setImmediate(()=>{ if (uo(u)!==mark) return; for (const f of ((w.__ev||{})[ev]||[]).slice()) { try{ f({ type:ev, data:{ state:'loaded', success:true, time:Date.now()*1000 } }); }catch(e){ console.log('[Widget listener THROW]', e&&e.stack||e); } } }); } } });
      return o; };
    for (const a of ['image','backgroundImage']) {
      Object.defineProperty(Widget.prototype, a, { configurable:true, enumerable:true,
        get(){ return this.__p[a] || (this.__p[a] = mkImg(this, a)); },
        set(v){ if (v && typeof v==='object') Object.assign(this[a], v); else if (typeof v==='string') (this[a]).url=v; } });
    }
    for (const [prop,key] of [['renderX','x'],['renderY','y'],['renderWidth','w'],['renderHeight','h']]) {
      Object.defineProperty(Widget.prototype, prop, { configurable:true, enumerable:true, get(){ return renderProp(this, key); } });
    }
    class Text extends Widget {}
    class Image extends Widget {}
    const missW = new Set();
    const missKind = new Map(), NOOP = function(){ return undefined; };
    Object.setPrototypeOf(Widget.prototype, new Proxy(Object.prototype, {
      get(t,p,recv){
        if (typeof p==='symbol') return undefined;
        let k = missKind.get(p);
        if (k === undefined) {
          if (p in t) { k = 2; }
          else if (p==='then' || p==='toJSON') k = 0;
          else {
            if (!missW.has(p)){ missW.add(p); if(missW.size<=40) console.log('[Widget.?]', String(p)); }
            if (/^(focusKey|focusType|focused|focusable|getFocusable)/.test(String(p))) k = 0;
            else k = /^(start|stop|set|add|remove|insert|measure|animate|focus|blur|get|update|invalidate|clear|_sendRenderProperty)/.test(String(p)) ? 1 : 0;
          }
          missKind.set(p, k);
        }
        return k === 2 ? Reflect.get(t,p,recv) : k === 1 ? NOOP : undefined;
      },
    }));
    function wrapWidget(w){ return w; }
    const scene = {
      _widget: null,
      update(){},
      get widget(){ if(process.env.SCENELOG) console.log('[scene.widget get]', this._widget&&this._widget.id); return this._widget || (this._widget = wrapWidget(new Widget({name:'root',width:1920,height:1080}))); },
      set widget(w){ if(process.env.SCENELOG) console.log('[scene.widget set]', w&&w.id); this._widget = w; },
      width:1920, height:1080, suspend:false, renderTargetsInvertedY:false,
      addEventListener(){}, removeEventListener(){},
    };
    const G = {
      get location(){ return G.__loc; },
      set location(v){ if(process.env.LOCRAW) require('fs').writeFileSync('/tmp/locraw.txt', typeof v+'\n'+(typeof v==='string'?v:JSON.stringify(v))); console.log('[gibbon.location =]', String(v).slice(0,200)); if(v===undefined||process.env.LOCSTACK) console.log(new Error('loc').stack.split('\n').slice(2,12).join('\n')); G.__loc=v; if(G.onLocationChange) G.onLocationChange(v); },
      __loc: 'http://127.0.0.1:8099/us/tvui/ql/20261016/37301/release/darwinBootstrap.js',
      SUCCESS:'SUCCESS', NOT_SECURE_ERROR:'NOT_SECURE_ERROR', NOTSECUREERROR:'NOT_SECURE_ERROR', FILE_ACCESS_ERROR:'FILE_ACCESS_ERROR', FILEACCESSERROR:'FILE_ACCESS_ERROR',
      DATA_URI_ERROR:'DATA_URI_ERROR', DATAURIERROR:'DATAURIERROR', DNS_ERROR:'DNS_ERROR', CONNECT_ERROR:'CONNECT_ERROR', TIMEOUT_ERROR:'TIMEOUT_ERROR', TIMEOUTERROR:'TIMEOUT_ERROR',
      SSL_HANDSHAKE_ERROR:'SSL_HANDSHAKE_ERROR', SSL_CA_CERT_ERROR:'SSL_CA_CERT_ERROR', SSL_CA_CERT_FILE_ERROR:'SSL_CA_CERT_FILE_ERROR', CERT_STATUS_ERROR:'CERT_STATUS_ERROR',
      SEND_ERROR:'SEND_ERROR', RECV_ERROR:'RECV_ERROR', NETWORK_ERROR:'NETWORK_ERROR', UNKNOWN_ERROR:'UNKNOWN_ERROR',
      hasGraphics: true, get cookie(){ return jarHeader(); }, setCookie(str, cb){ jarSet(str); cb && setImmediate(cb); }, clearCookies(cb){ if (Date.now()-(globalThis.__lastNetErr||0) < 180000) { console.log('[cookie] clearCookies ignorado (falha de rede recente)'); cb && setImmediate(cb); return; } jar.clear(); jarSave(); cb && setImmediate(cb); }, garbageCollectTimeout: 0,
      Widget, Text, Image, scene,
      makeWidget: (data)=>{ G.__nWidgets=(G.__nWidgets||0)+1;
        if(G.__nWidgets<=3) console.log('[gibbon.makeWidget] CHEGOU:', String(JSON.stringify(data)).slice(0,120));
        return wrapWidget(new Widget(data)); },
      measureText: (t,o)=>measureTextSync(t,o),
      findWidget: ()=>null,
      loaded(){ console.log('[gibbon.loaded] (primeiro frame da UI)'); }, 

      surfaceCache: Object.defineProperties(
        { get(){return null;}, put(){}, clear(){}, flush(){}, isCapacityReducible:true, used:0 },
        { capacity: { configurable:true, enumerable:true, get(){ return 64*1024*1024; }, set(v){} } }),
      _runConsole(){}, _syncData:{},
      fonts: { addFont(spec,cb){ G.__fonts.push(spec); fontAdd(spec,cb); }, reloadFonts(cb){ cb&&setImmediate(cb); }, list:[], attributes: FONT_ATTRS,
        get scripts(){ if (this.__mem === undefined) this.__mem = !process.env.NOMEMBER && (jar.has('NetflixId')||jar.has('SecureNetflixId')); return this.__mem ? __FONT_SCRIPTS : this.__scr; }, set scripts(v){ this.__scr = v; } },
      __fonts: [],
      addFont(spec,cb){ G.__fonts.push(spec); fontAdd(spec,cb); }, reloadFonts(cb){ cb&&setImmediate(cb); },
      effects: {},
      imageFormats: ['png','jpg','webp'],
      getFrameInfo: ()=>({ frame:0, time:Date.now()*1000 }),
      setTimeout:(fn,ms)=>setTimeout(fn,ms), clearTimeout:(id)=>clearTimeout(id),
      startTask:(fn)=>{ try{fn&&fn();}catch(e){} }, threads:{},
      garbageCollect(){}, collectGarbage(){},
      __evl: {},
      addEventListener(n,f){ (G.__evl[n]||(G.__evl[n]=[])).push(f); }, removeEventListener(n,f){ const a=G.__evl[n]; if(a){ const i=a.indexOf(f); if(i>=0) a.splice(i,1); } },
      load:(opts,cb)=>{ if(process.env.LOADDBG&&/router/.test(String(opts&&opts.url))) console.log('[LOADDBG] cb=', String(cb).slice(0,900)); return httpLoad(opts,cb); },
      stopLoad:(v)=>{ try{ v&&v.cancel&&v.cancel(); }catch{} },
      loadScript:(opts,cb)=>{
        const fn = fnameFromOpts(opts) || (/error-text\/config\.text\.lruderrorpage\./.test(String(opts&&opts.url)) ? path.basename(String(opts.url)) : null);
        if (process.env.SCRIPTLOG) console.log('[loadScript opts]', JSON.stringify(opts).slice(0,400));
        const ok = fn ? loadChunk(fn, opts && opts.url) : false;
        console.log('[loadScript]', fn, ok?'OK':'FALHOU');
        const SUCCESS = nrdpReal.network.ERRORCODE.SUCCESS;
        const resp = ok ? { errorcode:SUCCESS, reason:SUCCESS, statusCode:200, state:{} }
                        : { errorcode:'LOAD_FAILED', reason:'LOAD_FAILED', statusCode:500, state:{} };
        if (cb) setImmediate(()=>{ try{ cb(resp); }catch(e){ console.log('[loadScript cb THROW]\n'+(e&&e.stack||e)); } });
      },
      eval:(s)=>undefined,
      resourceManager:{ get(){return null;} },
      hasOwnProperty:(p)=>Object.prototype.hasOwnProperty.call(G,p),
    };
    return G;
}
const WCRY = require('./webcrypto.js');
const MEDIALOG = process.env.MEDIALOG ? '/tmp/media_calls.log' : null; if (MEDIALOG) { try{ fs.writeFileSync(MEDIALOG,''); }catch{} }
function mlog(...a){ if (!MEDIALOG) return; try{ fs.appendFileSync(MEDIALOG, (Date.now()%1000000)+' '+a.map(x=>typeof x==='string'?x:JSON.stringify(x)).join(' ').slice(0,600)+'\n'); }catch{} }
const EVN=new Set(['addListener','addEventListener','removeListener','removeEventListener','on','once','off']);
function logProxy(name, base){ const L={}; base.__listeners=L; base.emit=(n,ev)=>{ for (const f of (L[n]||[]).slice()) { try{ f(ev); }catch(e){ console.log('['+name+'] listener THROW', n, e&&e.message); } } };
  base.addListener=base.addEventListener=base.on=(n,f)=>{ (L[n]||(L[n]=[])).push(f); }; base.once=(n,f)=>{ const g=(ev)=>{ base.removeListener(n,g); f(ev); }; base.addListener(n,g); };
  base.removeListener=base.removeEventListener=base.off=(n,f)=>{ if (L[n]) L[n]=L[n].filter(x=>x!==f); };
  return new Proxy(base, { get(t,k){ if (k in t) return t[k]; if (typeof k!=='string' || k==='then' || k==='provideLicense') return undefined; return (...args)=>{ mlog(name+'.'+k, args.map(x=>typeof x==='function'?'<fn>':x)); const cb=args.find(x=>typeof x==='function'); if (cb) setImmediate(()=>cb({ success:true })); return { success:true }; }; }, set(t,k,v){ mlog(name+'.'+String(k)+' =', typeof v==='function'?'<fn>':v); t[k]=v; return true; } }); }
const __media = require('./media')({ mlog, mono: ()=>Date.now(), logProxy });
const nrdpReal = {
  resourcemanager: Object.assign(tolerant('resourcemanager'), { currentMilo:'base' }),
  mediasourceplayerfactory: {
    createPlayer(index, cb){ const p = tolerant('mediasourceplayer#'+index); p.path='/mediasourceplayer/'+index; p.index=index; p.state=0; p.CLOSED=0; p.OPENING=1; p.PLAYING=2;
      p.addEventListener=()=>{}; p.removeEventListener=()=>{}; p.close=()=>{};
      setImmediate(()=>cb({ success:true, player:p })); },
    destroyPlayer(index, cb){ cb&&setImmediate(cb); },
  },
  random(a){ require('crypto').randomFillSync(a); return a; },
  crashReport: { setTag(){}, removeTag(){}, setProperty(){}, getProperty(){} }, crashReportData: {},
  mdx: tolerant('mdx'), nova: Object.assign(tolerant('nova'), { x360:{ addEventListener(){}, removeEventListener(){} } }), tile: tolerant('tile'), poby: tolerant('poby'),
  capabilities: Object.assign(tolerant('capabilities'), { supportFX2:false }),
  webcrypto: WCRY.webcrypto, atob: WCRY.atob, btoa: WCRY.btoa, atoutf8: WCRY.atoutf8, utf8toa: WCRY.utf8toa,
  compress(data, type){ const z=require('zlib'); const b=WCRY.buf(data); const t=String(type).toLowerCase(); return WCRY.u8(t.includes('gz')||type==null?z.gzipSync(b):z.deflateSync(b)); },
  uncompress(data, type){ const z=require('zlib'); const b=WCRY.buf(data); let o; try{o=z.gunzipSync(b);}catch{ o=z.inflateSync(b);} return WCRY.u8(o); },
  registration: { registered:true, UILanguages:__DEVLANGS.slice(), deactivateAll(){}, addEventListener(){}, removeEventListener(){} },
  media: { cache:{}, authparams:{}, hasJSASE:true, legacy:false, newSession(cb){ mlog('media.newSession'); setImmediate(()=>cb && cb(nrdpReal.media)); }, handleShutdown(){ mlog('media.handleShutdown'); }, addEventListener(){}, removeEventListener(){} },
  mediasourceplayerfactory: __media.factory,
  signup: { areCredentialsRequired:()=>false, addEventListener(){}, removeEventListener(){} },
  qa: {},
  resourceAcquired(){}, resourceReleased(){}, requestSuspend(){}, suspendComplete(){},
  assert(c,m){ if(!c) console.log('[nrdp.assert]', m); }, addListener(){}, removeListener(){},
  debug: { assert(){}, setLevel(){}, enable(){} },
  cert: {}, drmsystem: (process.env.DRM_BACKEND==='wv' ? require('./wvbridge') : require('./cdmdrm')).make(),
  mono: () => Date.now(),
  pmono: () => Date.now(),
  now: () => Date.now(),
  started: true,
  suspended: false,
  isReady: true,
  queueMicrotask: (fn)=>queueMicrotask(fn),
  setTimeout: (fn,ms)=>setTimeout(fn,ms),
  clearTimeout: (id)=>clearTimeout(id),
  log: logNoop,
  script: { engine: 'v8' },
  version: {
    components: {
      platform: { platformVersion:'2024.3', platformSystem:'Linux', platformType:'gibbon', platformName:'Darwin' },
      gibbon: { string:'2024.3', scriptEngine:'v8' },
    },
  },
  device: {
    ESN, ESNPrefix: ESN.split('-').slice(0,2).join('-'), friendlyName:'GibbonLinux', deviceModel: process.env.DEVICE_MODEL||'GibbonLinux',
    SDKVersion: Object.assign(Object.create({ valueOf:()=>34, toString:()=>'34' }), {
      components:{ platform:{ platformType:'gibbon', platformVersion:'2024.3', platformBuildNum:'37301', platformSystem:'Linux', platformName:'Darwin' }, gibbon:{ string:'2024.3' }, nrdapp:'2024.3', nrdlib:'2024.3', mdxlib:'2024.3' },
      uiLibraries: [],
    }),
    isScreensaverOn(){ return false; },
    get UILanguages(){ return globalThis.__CA.from(__DEVLANGS); }, language: __DEVLANG, UIVersion: '', softwareVersion: '2024.3',
    registered:true, buildIDPrefix:'ninja', buildID:'2024.3',
    drmType:'WidevineCEF', PLAY_READY:'PlayReady', WIDEVINE_CEF:'WidevineCEF', ANYCAST:'Anycast',
    activeVideoOutput: [{ videoOutput:1, hdcpVersion:22 }],
    iflist: [{ ifname:'wlan0', linkConnected:1, internetConnected:1, isDefault:true, ipv4Address:'192.168.1.23', ipAddress:'192.168.1.23', ipv6Addresses:[], mobileCarrier:' ', countryCode:' ', networkType:'wifi' }],
    __ev: {},
    addEventListener(ev,fn){ (this.__ev[ev]||(this.__ev[ev]=[])).push(fn);
      if(ev==='networkchange' && !/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) setTimeout(()=>fn&&fn({}),0); },
    removeEventListener(ev,fn){ const a=this.__ev[ev]; if(a){const i=a.indexOf(fn); if(i>=0)a.splice(i,1);} },
    __uiVersion:'', setUIVersion(v){ this.__uiVersion=v; }, getUIVersion(){ return this.__uiVersion; },
    version:{ gibbon:{ scriptEngine:'v8', string:'2024.3' },
      components:{ platform:{ platformVersion:'2024.3', platformSystem:'Linux', platformType:'gibbon', platformName:'Darwin' }, gibbon:{ string:'2024.3', major:2024, minor:3, patch:0, rev:0, scriptEngine:'v8' } } },
    capability: new Proxy({},{ get(_t,k){ if(typeof k!=='string') return undefined; if(k==='videoProfiles') return globalThis.__CA.from(['playready-h264bpl30-dash','playready-h264mpl30-dash','playready-h264mpl31-dash','playready-h264hpl30-dash','playready-h264hpl31-dash','playready-h264mpl40-dash','playready-h264hpl40-dash']); if(k==='audioProfiles') return globalThis.__CA.from(['heaac-2-dash','heaac-2hq-dash']); if(/(Profiles|Capabilities)$/.test(k)) return globalThis.__CA.from([]); if(/PoolSize$/.test(k)) return 8*1048576; if(k==='screensaverTimeoutDuration' && process.env.SSTIMEOUT) return +process.env.SSTIMEOUT; if(k==='voiceRoutingTokenType') return ''; if(/^(isPanel|hasMicrophone|hasNetflixButton|lowLatencyPlayer|vaatPlayer)$/.test(k)) return false; return true; } }),
  },
  storage: {
    NO_DEVICE_ACCOUNT: 'NO_DEVICE_ACCOUNT',
  diskStoreContexts: {},
  createDiskStoreContext(opts, cb){ const m=new Map(); const ctx={ read(ns,key,off,len,cb2){ const k=ns+'\0'+key; if(m.has(k)) cb2&&setImmediate(()=>cb2({ value: m.get(k) })); else cb2&&setImmediate(()=>cb2({ errorString:'not found' })); },
      write(ns,key,val){ const cbf=[].slice.call(arguments).reverse().find(x=>typeof x==='function'); m.set(ns+'\0'+key, val); cbf&&setImmediate(()=>cbf({})); },
      remove(){}, destroy(){}, size:0 }; this.diskStoreContexts[opts.context]=ctx; return ctx; },
  destroyDiskStoreContext(name){ delete this.diskStoreContexts[name]; },
  MILO_STABLE_SOURCE:'MILO_STABLE_SOURCE', MILO_STABLE_URL:'MILO_STABLE_URL', MILO_CURRENT:'MILO_CURRENT', MILO_CURRENT_INDEX:'MILO_CURRENT_INDEX',

    getItem: (ns,k)=>{ const v=store.get(ns+'\0'+k); return v===undefined?null:v; },
    setItem: (ns,k,v)=>{ store.set(ns+'\0'+k, v); },
    removeItem: (ns,k)=>{ store.delete(ns+'\0'+k); },
    _keys: (ns)=>[...store.keys()].filter(k=>k.startsWith(ns+'\0')).map(k=>k.slice(ns.length+1)),
    length(ns){ return this._keys(ns).length; },
    key(ns,i){ const a=this._keys(ns); return i<a.length ? a[i] : null; },
    clear(ns){ for(const k of this._keys(ns)) store.delete(ns+'\0'+k); },
    transientData: new Map(),
  },
  network: {
    isValidIpAvailable: ()=>true,
    __nl: {},
    addEventListener(n,f){ (nrdpReal.network.__nl[n]||(nrdpReal.network.__nl[n]=[])).push(f); },
    removeEventListener(n,f){ const a=nrdpReal.network.__nl[n]; if(a){ const i=a.indexOf(f); if(i>=0) a.splice(i,1); } },
    __emit(n,ev){ for(const f of (nrdpReal.network.__nl[n]||[]).slice()) { try{ f(ev); }catch(e){ console.log('[network listener THROW]', e&&e.stack||e); } } },
    diagnose(urls){
      const N=nrdpReal.network; const token=(N.__diag=(N.__diag||0)+1); const results=[]; let left=(urls||[]).length;
      (urls||[]).forEach(u=>{ const done=(ok,code)=>{ if(N.__diag!==token) return; const r={ URL:u, url:u, success:ok, errorgroup:ok?0:1, errorcode:ok?0:(code||1) }; results.push(r); N.__emit('diagnosisStatus', r); if(--left===0) setImmediate(()=>N.__emit('diagnosisResult', { success:results.every(x=>x.success), resultArray:results })); };
        try { const mod=/^https:/.test(u)?require('https'):require('http'); const rq=mod.request(u,{ method:'HEAD', timeout:6000, rejectUnauthorized:false },res=>{ res.resume(); done(true); }); rq.on('timeout',()=>{ rq.destroy(); done(false,2); }); rq.on('error',()=>done(false,3)); rq.end(); } catch(e){ done(false,4); } });
      if(!left) setImmediate(()=>N.__emit('diagnosisResult',{ success:true, resultArray:[] }));
    },
    abortDiagnosis(cb){ nrdpReal.network.__diag=(nrdpReal.network.__diag||0)+1; if(typeof cb==='function') setImmediate(cb); },
    ERRORCODE: new Proxy({},{ get(_t,p){ return String(p); } }),
    ERRORGROUP: new Proxy({},{ get(_t,p){ return String(p); } }),
  },
  texttospeech: { speak(){}, cancel(){}, isSpeaking:()=>false, addEventListener(){}, removeEventListener(){}, enabled:false },
  instrumentation: new Proxy({ SWITCHED:'SWITCHED' }, { get(t,p){ if(p in t) return t[p]; if(typeof p==='string' && /^[A-Z_]+$/.test(p)) return p; return ()=>{}; } }),
  addEventListener: (ev,fn)=>{ (nrdpReal.__ev[ev]||(nrdpReal.__ev[ev]=[])).push(fn); },
  removeEventListener: (ev,fn)=>{ const a=nrdpReal.__ev[ev]; if(a){ const i=a.indexOf(fn); if(i>=0)a.splice(i,1);} },
  _callEventListeners: (obj,ev)=>{ const a=(nrdpReal.__ev[ev&&ev.type]||[]).slice(); for(const f of a){ try{ f(ev); }catch(e){ console.log('[nrdp listener THROW]', e&&e.stack||e); } } },
  get config(){ return nrdpReal.__config || (nrdpReal.__config={}); },
  setConfigData(name,data){ nrdpReal.__config = nrdpReal.__config||{}; nrdpReal.__config[name]=data; setImmediate(()=>nrdpReal._callEventListeners(nrdpReal, { type:'configChanged', name, data })); },
  __ev: {},
  optionSource(name){ return 'unset'; },
  mediarequest: __media.mediarequest,
  __uiVersion: '',
  setUIVersion(v){ nrdpReal.__uiVersion = v; },
  getUIVersion(){ return nrdpReal.__uiVersion; },
  js_options: { disableHaltiAnimationRunner: true },
  options: new Proxy({ ui_width:1280, ui_height:720, appboot_url:'https://uiboot.netflix.com/appboot', js_opts: process.env.JS_OPTS||'noverify=true,useNetJS=false' },
    { get(t,p){ return p in t ? t[p] : undefined; } }),
  gibbon: makeGibbon(),
};

const nrdp = new Proxy(nrdpReal, {
  get(t, prop){
    if (prop in t) return t[prop];
    if (typeof prop === 'symbol') return undefined;
    miss('nrdp.'+String(prop));
    return undefined;
  },
  set(t, prop, val){ t[prop]=val; return true; },
  defineProperty(t, prop, desc){ return Reflect.defineProperty(t, prop, Object.assign({}, desc, { configurable:true })); },
});

function startUI(scriptFile, label){
const T0 = Date.now();
globalThis.__memberUI = (label==='darwinBootstrap.js');
if (label==='darwinBootstrap.js') { Object.defineProperty(nrdpReal.gibbon.Widget.prototype, 'textStyle', { configurable:true, enumerable:true,
    get(){ return this.__ts; }, set(v){ if (v && typeof v==='object') this.__ts = Object.assign({}, this.__ts||{}, v); else this.__ts = v; } }); }
if (label==='darwinBootstrap.js') { const WP=nrdpReal.gibbon.Widget.prototype; for (const a of ['minWidth','minHeight','maxWidth','maxHeight','layoutSpacing','padding']) Object.defineProperty(WP, a, { configurable:true, enumerable:true, get(){ return this.__p[a]; }, set(v){ this.__p[a]=v; } }); }
const sandbox = {};
sandbox.globalThis = sandbox; sandbox.self = sandbox; sandbox.window = sandbox; sandbox.global = sandbox;
sandbox.nrdp = nrdp;
if (!process.env.NOBOOTURL) nrdpReal.bootURL = 'http://localcontrol.netflix.com/js/boot.js';
Object.defineProperty(nrdpReal, 'boot', { configurable:true, enumerable:false, get(){ return /localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||'')) ? { addEventListener(){}, removeEventListener(){}, makeAppbootRequest(){ setImmediate(()=>globalThis.__reloadAsMember('retry')); } } : undefined; } });
if (/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) Object.defineProperty(nrdp.device.SDKVersion, 'ui', { configurable:true, enumerable:true, get(){ return { width:1920, height:1080 }; } });
if (/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) sandbox.readyState = 'complete', (()=>{ const mk=()=>{ const m=new Map(); return { getItem:k=>m.has(String(k))?m.get(String(k)):null, setItem:(k,v)=>{m.set(String(k),String(v));}, removeItem:k=>{m.delete(String(k));}, clear:()=>m.clear(), key:i=>[...m.keys()][i]===undefined?null:[...m.keys()][i], get length(){return m.size;} }; }; sandbox.localStorage=mk(); sandbox.sessionStorage=mk(); })(), sandbox.navigator = sandbox.navigator || { appName:'Gibbon', userAgent:'Gibbon', appVersion:'1.0', platform:'Linux', language:'en-US' }, sandbox.nrdpPartner = { Keys:Object.assign({13:"key.enter",19:"key.pause",27:"key.back",33:"key.netflix",35:"key.options",36:"key.start",37:"key.left",38:"key.up",39:"key.right",40:"key.down",45:"key.back",46:"key.info",48:"key.0",49:"key.1",50:"key.2",51:"key.3",52:"key.4",53:"key.5",54:"key.6",55:"key.7",56:"key.8",57:"key.9",97:"key.step_prev",98:"key.subtitle",99:"key.step_next",100:"key.display",101:"key.top_menu",102:"key.search",103:"key.track_prev",104:"key.popup_menu",105:"key.track_next",106:"key.clear",109:"key.time",111:"key.angle",114:"key.skip_back",115:"key.skip_forward",116:"key.dotcom",117:"key.pause",118:"key.rewind",119:"key.play",120:"key.fastfwd",121:"key.stop",122:"key.audio",123:"key.exit",124:"key.multi_digit",125:"key.l1",126:"key.r1",127:"key.l2",128:"key.r2",129:"key.l3",130:"key.r3",131:"key.up2",132:"key.down2",133:"key.left2",134:"key.right2",187:"key.power",219:"key.red",220:"key.green",221:"key.blue",222:"key.yellow",223:"key.ttspause",241:"key.return"}, { 8:'key.back' }), CustomKeys:{} };
sandbox.console = console;
sandbox.queueMicrotask = queueMicrotask;
sandbox.setTimeout = process.env.TMTHROW ? ((fn,ms,...a)=> setTimeout(typeof fn==='function' ? (...x)=>{ try{ return fn(...x); }catch(e){ console.log('[timer THROW]', e&&e.stack||e); throw e; } } : fn, ms, ...a)) : process.env.TMLOG ? ((fn,ms,...a)=>{ if(Date.now()-T0>12000) console.log('[setTimeout]', ms, String(fn).slice(0,90).replace(/\s+/g,' ')); return setTimeout(fn,ms,...a); }) : setTimeout; sandbox.clearTimeout = clearTimeout;
sandbox.setInterval = setInterval; sandbox.clearInterval = clearInterval;
sandbox.performance = performance; if (process.env.HALTI !== '0') {
  const hl = { version:'0.0-port2', isInitialized:()=>true, isHaltiWidget:()=>false, uiEvent(){},
    createAnimation(){ return { start(){}, stop(){}, cancel(){}, finish(){}, addEventListener(){}, removeEventListener(){} }; },
    legacy: {
      addEffect(w,name,params){ w.__effect={ name, params }; if(process.env.EFXLOG) console.log('[effect add]', name, JSON.stringify(params).slice(0,300)); },
      updateEffect(w,name,params){ w.__effect={ name, params }; },
      removeEffect(w){ delete w.__effect; },
      from(w,json){ w.__effect={ name:'json', params:json }; } } };
  sandbox.Halti = hl;
}
sandbox.AbortController = AbortController; sandbox.AbortSignal = AbortSignal;
sandbox.TextEncoder = TextEncoder; sandbox.TextDecoder = TextDecoder; sandbox.URL = URL; sandbox.URLSearchParams = URLSearchParams;

let code = fs.readFileSync(scriptFile,'utf8');
if (/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))) { let q; try { q = new URL(nrdpReal.gibbon.__loc).searchParams; } catch { q = new URLSearchParams(''); }
  code = code.replace(/%(ERROR_[A-Z_]+|MSL_[A-Z_]+|NRDP_ERROR_CODE)%/g, (_m, k) => q.has(k) ? q.get(k) : ''); 
  if (process.env.HIDEDBG) code = code.split('hide:function(){var e=this.canHide()').join('hide:function(){var e=this.canHide();globalThis.__mark("[hide]",this.id,this.visible,e)').split('show:function(){var e=this.canShow()').join('show:function(){var e=this.canShow();globalThis.__mark("[show]",this.id,this.visible,e)'); }
if (process.env.CALLERSTAT) code = code.split('get:n?function e(){var t=n.call(this),s=e.caller\nreturn t&&s!==a&&s!==i.set&&s!==r&&s.caller!==r&&(t=o(t/this._scaleMultiplier)),t}:void 0').join('get:n?function e(){var t=n.call(this),s=e.caller\nvar __sk=!(t&&s!==a&&s!==i.set&&s!==r&&s.caller!==r);globalThis.__cn=(globalThis.__cn||0)+1;if(t&&__sk){globalThis.__csk=(globalThis.__csk||0)+1;globalThis.__csn=globalThis.__csn||{};var __k=String(s&&s.name)+"/"+String(e.name);globalThis.__csn[__k]=(globalThis.__csn[__k]||0)+1}return t&&!__sk&&(t=o(t/this._scaleMultiplier)),t}:void 0');
if (!process.env.SLOWCALLER && !process.env.CALLERSTAT) code = code.split('get:n?function e(){var t=n.call(this),s=e.caller\nreturn t&&s!==a&&s!==i.set&&s!==r&&s.caller!==r&&(t=o(t/this._scaleMultiplier)),t}:void 0').join('get:n?function e(){var t=n.call(this)\nreturn t&&(t=o(t/this._scaleMultiplier)),t}:void 0');
code = code.split('d.initialize((function(e){var g=!0===').join('d.initialize((function(e){globalThis.__mark&&globalThis.__mark("[PROFILES init result]", JSON.stringify(e));var g=!0===');
code = code.split('case 0:if(d.isRedirecting=!0,d.toURL=o,t.log.flush()').join('case 0:if(globalThis.__mark&&globalThis.__mark("[REDIRECT]", String(o), (Error.stackTraceLimit=60,new Error().stack.split("\\n").slice(1,60).filter(function(l){return !/aui.js:244[0-2]\\d/.test(l)}).slice(0,10).join(" | "))),d.isRedirecting=!0,d.toURL=o,t.log.flush()');
if (label==='darwinBootstrap.js' && process.env.GATESMETA !== '0') { const g1='e.call(["gates","createStack"],[{metadata:t}])'; if (!code.includes(g1)) console.log('[gatesmeta] patch AUSENTE'); code = code.split(g1).join('e.call(["gates","createStack"],[{metadata:null===t?void 0:t}])'); }
code = code.split('t.getConfig=f.getConfig,t.getFeature=f.getFeature,t.getFeatures=f.default,').join('t.getConfig=f.getConfig,t.getFeature=f.getFeature,t.getFeatures=f.default,globalThis.__getFeatures=f.default,');
sandbox.__featForce = { enableRoundedCorners:true, enableEditProfile:true, enableVerticalProfileGateSlideShow:true, enableNetflixSans:true, enableCustomScreensaver:true, personalizedScreensaverImagesPreloadEnabled:true, isBillboardWithMotionEnabled:true };
code = code.split('return e?t[e]:t}t.default=function(){return l()}').join('if(t&&globalThis.__featForce)for(var __k in globalThis.__featForce)t[__k]=globalThis.__featForce[__k];return e?t[e]:t}t.default=function(){return l()}');
code = code.split('a.CornerRadiusZeroed,i.ComponentDimensions)').join('(globalThis.__featForce&&globalThis.__featForce.enableRoundedCorners?a.CornerRadiusSizes:a.CornerRadiusZeroed),i.ComponentDimensions)');
if (process.env.CRLOG) code = code.split('case"cornerRadius":return(0,(r||(r=n("A104"))).isCornerRadiusSupported)()').join('case"cornerRadius":return (function(v){globalThis.__mark("[styleCR]",String(v));return v})((0,(r||(r=n("A104"))).isCornerRadiusSupported)())');
code = code.split('var v=(0,l.default)({},e,(0,(i||(i=n("jQZR"))).getCacheConfiguredFeatures)()),m=').join('var v=(0,l.default)({},e,(0,(i||(i=n("jQZR"))).getCacheConfiguredFeatures)(),globalThis.__featForce),m=');
code = code.split('t.setAnimationRunnerOverride=function(e){p("added",e)}').join('t.setAnimationRunnerOverride=function(e){globalThis.__animOv&&globalThis.__animOv("added",e,new Error().stack);p("added",e)}');
code = code.split('t.removeAnimationRunnerOverride=function(e){l&&p("removed",e)}').join('t.removeAnimationRunnerOverride=function(e){globalThis.__animOv&&globalThis.__animOv("removed",e,new Error().stack);l&&p("removed",e)}');
if (label==='aui.js' && process.env.POLLDBG) { const R=(a,b)=>{ const ok=code.includes(a); console.log('[polldbg] patch', ok?'ok':'AUSENTE', a.slice(0,50)); if (ok) code=code.split(a).join(b); };
  R('t===P&&c){ne.next=7\nbreak}', 'globalThis.__mark("[poll] estado ultimo==atual, na historia",t===P,c),t===P&&c){ne.next=7\nbreak}');
  R('return setTimeout(U,T),ne.abrupt("return",void 0)\ncase 12:', 'return globalThis.__mark("[poll] fora da rota", d&&d.pathname),setTimeout(U,T),ne.abrupt("return",void 0)\ncase 12:');
  R('f.logResponse(I&&"status"in I?I.status:void 0),N===_){ne.next=21\nbreak}', 'f.logResponse(I&&"status"in I?I.status:void 0),globalThis.__mark("[poll] resposta", I&&I.outcomeType, N, _),N===_){ne.next=21\nbreak}');
  R('if(null!=r&&r.setClcsState){ne.next=33\nbreak}', 'if(globalThis.__mark("[poll] setClcsState?",!!(null!=r&&r.setClcsState)),null!=r&&r.setClcsState){ne.next=33\nbreak}'); }
if (label==='aui.js' && process.env.FORCEREPL) code = code.split('l&&Oe((0,(B||(B=n(17963))).getNavigateForwardAction)({replaceCurrentScreen:!!o,screenData:a}))').join('l&&Oe((0,(B||(B=n(17963))).getNavigateForwardAction)({replaceCurrentScreen:true,screenData:a}))');
if (label==='aui.js' && process.env.BACKLOCAL !== '0') code = code.split('o.next=3,(0,y.default)().awrap(N((void 0===a?a=r(n(98221)):a).default.historyPop()))').join('o.next=3,(0,y.default)().awrap(N([(void 0===a?a=r(n(98221)):a).default.historyInsert({clViewName:null,pathname:"/welcomeContentLanding"},0),(void 0===a?a=r(n(98221)):a).default.historyPop()]))');
code = code.split('null!=(e=globalThis.Halti)&&e.isInitialized()?o.AnimationSupport.Halti:').join('false?o.AnimationSupport.Halti:');
if (process.env.SPATLOG) code = code.split('var n=e.target,r=m(n,t)\nif(!r)return void(e.altKey').join('var n=e.target,r=m(n,t);globalThis.__mark("[spatial]",e.uiEvent,n&&n.name,n&&n.focusKey,"->",r&&r.widget&&r.widget.name,r&&r.widget&&r.widget.focusKey);\nif(!r)return void(e.altKey');
if (process.env.SPATLOG) { code = code.split('t.noFocusableInDirection=function(e,t,r,i){').join('t.noFocusableInDirection=function(e,t,r,i){globalThis.__mark("[nofocus]",t,r&&r.name,r&&r.focusKey);'); code = code.split('t.focusRequest=function(e,t,r,i){').join('t.focusRequest=function(e,t,r,i){globalThis.__mark("[focusReq]",t&&t.focusKey,i);'); }
if (process.env.SPATLOG) code = code.split('function y(e,n,r){null==a||a(n.data,r)\nvar o=p[e],i=o.length').join('function y(e,n,r){globalThis.__mark("[kd]",e,n.data.uiEvent,"rep="+r);null==a||a(n.data,r)\nvar o=p[e],i=o.length');
if (process.env.SPATLOG) { code = code.split('function N(){var e=(0,f.getActiveElement)()\nreturn x=!1,e}').join('function N(){var e=(0,f.getActiveElement)();globalThis.__mark("[active]",e&&e.name,e&&e.focusKey);\nreturn x=!1,e}'); code = code.split('function b(e,t){e!==t&&(u.push([a.dispatchFocus,e,t]),').join('function b(e,t){globalThis.__mark("[setActive]",e&&e.focusKey,"prev",t&&t.focusKey);e!==t&&(u.push([a.dispatchFocus,e,t]),'); }
if (process.env.SPATLOG) code = code.split('var o=p[e],i=o.length\nif(i){var l=t(e,n,r)').join('var o=p[e],i=o.length;globalThis.__mark("[kd-n]",e,i);\nif(i){var l=t(e,n,r);globalThis.__mark("[kd-ev]",!!l)');
if (process.env.SPATLOG) code = code.split('onRootEvent:g.triggerSpatialFocus,queueEvent:a,').join('onRootEvent:g.triggerSpatialFocus,queueEvent:function(l,c,t){globalThis.__mark("[queue?]",l&&l.type,typeof (l&&l.target),l&&l.target&&(l.target.id+":"+l.target.focusKey),Object.keys(l||{}).join(","));return a?a(l,c,t):!1},');
if (process.env.SPATLOG) code = code.split('try{(0,l.flushQueue)()}catch(e){i=new a.default({innerError:e').join('try{(0,l.flushQueue)()}catch(e){globalThis.__mark("[focus-tx-error]",e&&(e.stack||e.message));i=new a.default({innerError:e');
if (process.env.SPATLOG) code = code.split('t.updateFocusable=function(e,t,n){var r=t.focusKey,o=t.focused,i=t.spatialTiebreaker,a=e.id,l=v[a]').join('t.updateFocusable=function(e,t,n){var r=t.focusKey,o=t.focused,i=t.spatialTiebreaker,a=e.id,l=v[a];if(o||n.focused)globalThis.__mark("[updFocusable]",r,"focused="+o,"prev="+n.focused);');
if (process.env.BACKLOCAL !== '0') code = code.split('loggingCommand:"BackCommand",parentLoggingViewName:Xe,route:Se,serverState:ze,setState:rt,trackingInfo:ft,transitionState:Ce}),gt=').join('loggingCommand:"BackCommand",parentLoggingViewName:Xe,route:Se,serverState:ze,setState:rt,trackingInfo:ft,transitionState:Ce}),pt=function(__o){return function(a1,a2){var __done=!1,__go=function(){if(__done)return;__done=!0;try{var __h=n(98221);Oe(__h.historyInsert({clViewName:null,pathname:"/welcomeContentLanding"},0));setTimeout(function(){try{Oe(__h.historyPop())}catch(e){}},40)}catch(e){globalThis.__mark("[backlocal-err]",String(e))}},__r;try{__r=__o(a1,a2)}catch(e){__go();return}Promise.resolve(__r).then(function(){setTimeout(__go,30)},function(){__go()});setTimeout(__go,6000);return __r}}(pt),gt=');
if (label==='aui.js' && process.env.FORCEREPL2) { const a1='Z!==a&&N((0,(f||(f=n(17963))).getNavigateForwardAction)({replaceCurrentScreen:!1,screenData:Q}))'; console.log('[repl2] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('Z!==a&&N((0,(f||(f=n(17963))).getNavigateForwardAction)({replaceCurrentScreen:!0,screenData:Q}))'); }
if (label==='aui.js' && process.env.ERRB) { const a1='n.componentDidCatch=function(e,t){var n,r\nif(null==(n=(r=this.props).onCaughtError)'; console.log('[errb] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('n.componentDidCatch=function(e,t){globalThis.__mark("[errb] CAUGHT",String(e&&(e.stack||e)).slice(0,900),"| comp:",String(t&&t.componentStack).slice(0,500));var n,r\nif(null==(n=(r=this.props).onCaughtError)'); }
if (label==='aui.js' && process.env.CTRLOG) { const a1='an=Ae||nn,ln={'; console.log('[ctrlog] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('an=Ae||nn,_cl=globalThis.__mark("[ctr]","Ce="+Ce,"on="+on,"nn="+nn,"Ae="+Ae,"owner="+Ee,"typ="+Mt,"rend="+ut),ln={'); }
if (label==='aui.js' && process.env.ANIMEND) { const a1='function b(e,t,r,i,s){var c=e.targets[t]\nif(c){'; console.log('[animend] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('function b(e,t,r,i,s){var c=e.targets[t]\nif(c){globalThis.__mark("[animend]",(c.name||"#"+c.id),"key="+t,"reason="+r,"dispatch="+i,"sup="+e.suppressEvents,"hasSceneCb="+!!e.onSceneAnimationStateChanged);'); }
if (label==='aui.js' && process.env.ANIMQ) { const a1='function E(e,t,r,i,a,l){var s\n'; console.log('[animq] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('function E(e,t,r,i,a,l){var s;globalThis.__mark("[animq] queue",e&&(e.name||"#"+e.id),"groups="+(t&&t.groups&&t.groups.length),"fast="+a);\n'); const a2='function P(e,t){for(var r=e.collectFrames,'; console.log('[animq] patch2', code.includes(a2)?'ok':'AUSENTE'); code = code.split(a2).join('function P(e,t){globalThis.__mark("[animq] RUN", Object.keys(e.targets).map(function(k){var w=e.targets[k];return w&&(w.name||"#"+w.id)}).join(","), "ff="+e.fastForwarded, "dur="+(e.expression&&e.expression.duration));for(var r=e.collectFrames,'); }
if (label==='aui.js' && process.env.SETANIM) { const a1='t.setAnimation=function(e,t,r,o,i){'; console.log('[setanim] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('t.setAnimation=function(e,t,r,o,i){globalThis.__mark("[setanim]",e&&e.displayName,"mode="+i,"hasAnimProp="+!!o.animation,"transOpt="+JSON.stringify(Object.keys(e.transitionOptions||{})));'); }
if (label==='aui.js' && process.env.SETANIM) { const a1='function d(e,t,o,i){return o!==(r||(r=n(34435))).AnimationSupport.Gibbon?t.default:'; console.log('[setanim-d] patch', code.includes(a1)?'ok':'AUSENTE'); code = code.split(a1).join('function d(e,t,o,i){globalThis.__mark("[d]",e&&e.displayName,"mode="+o,"support="+t.support,"fb="+i);return o!==(r||(r=n(34435))).AnimationSupport.Gibbon?t.default:'); }
if (label==='aui.js' && process.env.CLCSNOEXITFIX !== '0') { const a1='function fe(e){var t,r,o=(0,(C||(C=n(5004))).useClcsScreenContext)(),i=(0,(p||(p=n(55582))).useAdvancedGraphicsSupported)(),'; const ok=code.includes(a1); if(!ok) console.log('[clcsexitfix] patch AUSENTE'); code = code.split(a1).join('function fe(e){var t,r,o=(0,(C||(C=n(5004))).useClcsScreenContext)(),i=!1,'); }
if (process.env.GATELOG) { code = code.split('case 44:if(!Y){ee.next=55').join('case 44:globalThis.__mark("[gate] c44 Y="+!!Y,"tree="+!!(Q&&Q.componentTree),"Z!==a",(Q&&Q.serverState)!==a,"V="+V,"z="+z);if(!Y){ee.next=55'); code = code.split('case 50:O.currentNavigateView=E,').join('case 50:globalThis.__mark("[gate] c50 navegar"),O.currentNavigateView=E,'); code = code.split('InterstitialUnresolvedComponentTreeOnSubmitError",resolvedResponse:Y})').join('InterstitialUnresolvedComponentTreeOnSubmitError",resolvedResponse:Y}),globalThis.__mark("[gate] SEM componentTree")'); }
if (process.env.GATELOG) { code = code.split('case 17:S=ee.sent,ee.next=30').join('case 17:S=ee.sent,globalThis.__mark("[gate] runEffect ok",V,S&&Object.keys(S)),ee.next=30'); code = code.split('ee.t0=ee.catch(14),(o||(o=n(65361))).consolidatedLogger.logEvent("DebugEvent",{data:{error:ee.t0,isNavigateBackEffect').join('ee.t0=ee.catch(14),globalThis.__mark("[gate] runEffect ERR",String(ee.t0&&(ee.t0.stack||ee.t0))),(o||(o=n(65361))).consolidatedLogger.logEvent("DebugEvent",{data:{error:ee.t0,isNavigateBackEffect'); code = code.split('J=C.shouldDismissNow,').join('J=C.shouldDismissNow,globalThis.__mark("[gate] flags dismiss="+J,"resp="+!!Y,"screen="+!!Q,"poll="+q,"upd="+$,"restored="+z,"last="+a,"next="+l,"newState="+(Q&&Q.serverState)),'); }
if (process.env.SPATIAL !== '0') code = code.split('f=l||a&&t.renderX||0,p=c||a&&t.renderY||0,v=s||a&&t.renderWidth||0,m=i||a&&t.renderHeight||0,g=t.parent').join('f=l||a&&t.renderX||0,p=c||a&&t.renderY||0,v=s||a&&t.renderWidth||0,m=i||a&&t.renderHeight||0;var __lr=globalThis.__layoutRect&&globalThis.__layoutRect(t);if(__lr){f=__lr.x;p=__lr.y;v=__lr.w;m=__lr.h}var g=t.parent');
if (process.env.NOVIDEO_TIMER !== '0') code = code.split('we=(0,U.useState)(!(null!=(t=oe[0])&&t.hasVideo))').join('we=(0,U.useState)(!0)');
code = code.split('t.TallPanelBoxshot=function(e){var t=(0,(l||(l=n(44755))).useLandingScreenIsFullScreenMode)(),').join('t.TallPanelBoxshot=function(e){var t=(0,(l||(l=n(44755))).useLandingScreenIsFullScreenMode)(),_d=globalThis.__mark("[tallpanel]",e.name,"fullscreen="+t,"behind="+e.isBehindLens,Date.now()%100000),');
if (process.env.ROUND !== '0') code = code.split('t.WelcomeContentLanding=function(e){var t=(0,(r||(r=n(93549))).useFX2Supported)()').join('t.WelcomeContentLanding=function(e){var t=!0');
code = code.split('function k(e){var t=e.focused,r=(0,(p||(p=n(60808))).useTheme)()').join('function k(e){var t=e.focused,r=(0,(p||(p=n(60808))).useTheme)(),_dbg=globalThis.__mark("[theme ring]",r.BorderRadiusLarge,r.name,r.mode)');
if (process.env.ROUND !== '0') code = code.split('t.CornerRadiusZeroed={BorderRadiusCompact:0,BorderRadiusExtraLarge:0,BorderRadiusExtraSmall:0,BorderRadiusJumbo:0,BorderRadiusLarge:0,BorderRadiusMedium:0,BorderRadiusNone:0,BorderRadiusSmall:0,').join('t.CornerRadiusZeroed={BorderRadiusCompact:4,BorderRadiusExtraLarge:20,BorderRadiusExtraSmall:6,BorderRadiusJumbo:24,BorderRadiusLarge:16,BorderRadiusMedium:12,BorderRadiusNone:0,BorderRadiusSmall:8,');
if (process.env.TASKLOG) { code = code.split('n.logger.start(r),(0,s.h)(n.simulatedFailures').join('(globalThis.__mark&&globalThis.__mark("[task start]",r.name)),n.logger.start(r),(0,s.h)(n.simulatedFailures'); code = code.split('n.logger.error(a),n.sendDevEvent').join(';(globalThis.__mark&&globalThis.__mark("[task ERROR]",r.name,a&&a.innerError&&(a.innerError.stack||a.innerError.message||JSON.stringify(a.innerError)))),n.logger.error(a),n.sendDevEvent');
 code = code.split('try{if(r.execute.length>1)r.execute(t,i)').join('try{globalThis.__mark("[exec]",r.name,r.execute.length);if(r.execute.length>1)r.execute(t,i)');
 code = code.split('var n=r.execute(t)').join('var n=r.execute(t);globalThis.__mark("[exec ret]",r.name,typeof n,n&&typeof n.then,n&&typeof n.subscribe);');
 code = code.split('t.performWork=function(){if(!this.performingWork){').join('t.performWork=function(){globalThis.__mark("[pw]",this.state,JSON.stringify(Object.keys(this.taskQueues).map(function(k){return k+":"+this.taskQueues[k].length},this)),"exec="+this.numberOfTasksExecuting,"tasks="+Object.keys(this.tasks).length);if(!this.performingWork){');
 code = code.split('var i=function(t,i){if(o)nrdp.log.warn(').join('var i=function(t,i){globalThis.__mark("[cb]",r.name,"o="+o,"err="+!!t);if(o)nrdp.log.warn(');
 code = code.split('t.finishTask=function(e,t){void 0===t&&(t={}),').join('t.finishTask=function(e,t){globalThis.__mark("[partner finish]",e,JSON.stringify(this.taskStatusMap));void 0===t&&(t={}),');
 code = code.split('t.finishTaskWithoutExecution=function(e){').join('t.finishTaskWithoutExecution=function(e){globalThis.__mark("[partner skip]",e,JSON.stringify(this.taskStatusMap));');
 code = code.split('this.accumulatedResults=null,this.tasks=t,').join('this.accumulatedResults=null,globalThis.__mark("[partner tracker init]",t.map(function(x){return x.name}).join(",")),this.tasks=t,');
 code = code.split('t.dispatchInitialMoneyballRequest=function(e){').join('t.dispatchInitialMoneyballRequest=function(e){globalThis.__mark("[DISPATCH initial moneyball]");');
 code = code.split('onCompleted:function(){try{h&&nrdp.gibbon.loaded(),').join('onCompleted:function(){globalThis.__mark("[renderIntoScene onCompleted]");try{h&&nrdp.gibbon.loaded(),');
 code = code.split('t=e.payload,w=(0,G.omit)(["withFields"],t)||{},O=(R=w).cached,H=R.flow,q=R.mode,U.next=8,ie()').join('t=e.payload,w=(0,G.omit)(["withFields"],t)||{},O=(R=w).cached,H=R.flow,q=R.mode,U.next=8,(globalThis.__mark("[saga se start]",H,q),ie())');
 code = code.split('case 8:if(!O){U.next=12 break}f=O,').join('case 8:globalThis.__mark("[saga se after ie]");if(!O){U.next=12 break}f=O,');
 code = code.split('return U.next=64,(0,(P||(P=n(75493))).select)((function(e){return e.flwssn}))').join('return globalThis.__mark("[saga partner payload done]"),U.next=64,(0,(P||(P=n(75493))).select)((function(e){return e.flwssn}))');
 code = code.split('case 22:return K.prev=22,K.t0=K.catch(16),').join('case 22:return K.prev=22,K.t0=K.catch(16),globalThis.__mark("[moneyball REQ ERR]",K.t0&&(K.t0.stack||K.t0.message||JSON.stringify(K.t0))),');
 code = code.split('O=(0,(c||(c=n(90213))).createTransformReqOpts)(y,N),K.next=14,').join('O=(0,(c||(c=n(90213))).createTransformReqOpts)(y,N),globalThis.__mark("[moneyball REQ start]",_.join("/")),K.next=14,');
 code = code.split('case 0:if(h=e.args,y=e.authURL,').join('case 0:globalThis.__mark("[makeMoneyballRequest enter] clcs="+(0,(a||(a=n(80192))).getFeature)("shouldInitiateCLCSFlow"));if(h=e.args,y=e.authURL,');
 code = code.split('return D.prev=28,D.t0=D.catch(1),null==p&&').join('return D.prev=28,D.t0=D.catch(1),globalThis.__mark("[CLCS REQ ERR]",D.t0&&(D.t0.stack||D.t0.message||JSON.stringify(D.t0))),null==p&&');
 code = code.split('Y.next=3,(0,v.default)().awrap((0,(m||(m=n(18270))).prepareClcsAleRequest)(x,k))').join('globalThis.__mark("[DGS enter]",L),Y.next=3,(0,v.default)().awrap((0,(m||(m=n(18270))).prepareClcsAleRequest)(x,k))');
 code = code.split('case 3:return D=Y.sent,F=D.aleRequest,').join('case 3:globalThis.__mark("[DGS after ALE]",L);return D=Y.sent,F=D.aleRequest,');
 code = code.split('V.open(),V.on(E,').join('globalThis.__mark("[DGS sending]",L,U.url),V.open(),V.on(E,');
 code = code.split('function T(e){var t,a,s=(0,i.buildFlexTree)(e),').join('function T(e){globalThis.__mark("[flex T]",e.id,e.name);var t,a,s=(0,i.buildFlexTree)(e),');
 code = code.split('t.writeGeometry=function(e,t,n){var i=new Map').join('t.writeGeometry=function(e,t,n){globalThis.__mark("[flex writeGeometry]",e.id,t.size);var i=new Map');
 code = code.split('Jt=(0,(u||(u=n(71533))).useEvent)((function(e){if(Vt({type:"item size changed",update:e}),Fe)').join('Jt=(0,(u||(u=n(71533))).useEvent)((function(e){globalThis.__mark("[list size changed]",JSON.stringify(e));if(Vt({type:"item size changed",update:e}),Fe)');
 code = code.split('h=e.positions[i]\nif(!h||i<0||i>=e.positions.length').join('h=e.positions[i]\n;globalThis.__mark("[list reducer size]",i,JSON.stringify(h),JSON.stringify(e.pendingSizeUpdates),JSON.stringify(r));\nif(!h||i<0||i>=e.positions.length');
 code = code.split('var i=e.position.isEstimatedSize,a=q&&e.disableScrollBackAfterWrap,').join('var i=(globalThis.__mark("[list item render]",e.index,e.position.isEstimatedSize,e.position.x,"before="+e.isBeforeScrolledItem,"after="+e.isAfterScrolledItem,"scrolled="+e.isScrolledItem,"inVP="+e.isInViewport,"scrollIdx="+qt),e.position.isEstimatedSize),a=q&&e.disableScrollBackAfterWrap,');
 code = code.split('(h.isEstimatedSize||u)&&(e=g(e)),v(e,e.focusedIndex)').join('(h.isEstimatedSize||u)&&(e=g(e)),(function(x){globalThis.__mark("[list reducer done]",JSON.stringify(x.positions.map(function(p){return [p.isEstimatedSize,p.x]})),x.scrollerSize);return x})(v(e,e.focusedIndex))');
 code = code.split('Ht=(0,(h||(h=n(4548))).useListState)(').join('Ht=(globalThis.__mark("[List render]"),(0,(h||(h=n(4548))).useListState))(');
 code = code.split('n.logger.end(r),n.sendDevEvent').join(';(globalThis.__mark&&globalThis.__mark("[task end]",r.name)),n.logger.end(r),n.sendDevEvent'); }
code = code.split('try{t?(f({innerError:t,source:"@tvui/webpack-runtime",type:"EnvironmentInitError"})').join('try{t?(globalThis.__mark&&globalThis.__mark("[ENVINIT ERR]", t&&t.stack||t),f({innerError:t,source:"@tvui/webpack-runtime",type:"EnvironmentInitError"})');
code = code.split('}catch(t){f({innerError:t,source:"@tvui/webpack-runtime",type:"EnvironmentInitError"}),e(t,null)}').join('}catch(t){globalThis.__mark&&globalThis.__mark("[ENVINIT THROW]", t&&t.stack||t);f({innerError:t,source:"@tvui/webpack-runtime",type:"EnvironmentInitError"}),e(t,null)}');
{
  const m1 = 'new l.default({innerError:o,source:n.name,type:"DependencyGraphCaughtError"})';
  if (code.includes(m1))
    code = code.replace(m1, 'new l.default((globalThis.__taskErr&&globalThis.__taskErr(n.name,o),{innerError:o,source:n.name,type:"DependencyGraphCaughtError"}))');
  const marker = 'case 40:throw h=';
  if (code.includes(marker))
    code = code.replace(marker, 'case 40:globalThis.__taskErr&&globalThis.__taskErr(e&&e.name,_.t1);throw h=');
}
{
  const m2='f.on(v,(function(t){var r=(0,(l||(l=n("u9dp"))).getFallbackUibootPayload)()';
  if (code.includes(m2)) code = code.replace(m2, 'f.on(v,(function(t){globalThis.__reqErr&&globalThis.__reqErr(t);var r=(0,(l||(l=n("u9dp"))).getFallbackUibootPayload)()');
  const m3='f.on(p,(function(r){var o=';
  if (code.includes(m3)) code = code.replace(m3, 'f.on(p,(function(r){globalThis.__reqOk&&globalThis.__reqOk(r);var o=');
}
{
  const so='message:"SignOut"}),';
  if (code.includes(so)) code = code.replace(so, 'message:"SignOut"}),(globalThis.__signedOut&&globalThis.__signedOut(P)),'); else console.log('[host] AVISO: patch signout nao aplicou');
}
sandbox.__signedOut = (isUser)=>{ if (globalThis.__signoutPending) return; console.log('[logout] sign-out da UI (usuario=' + isUser + ')'); globalThis.__signoutPending = true;
  const t = setTimeout(()=>{ if (globalThis.__signoutPending) globalThis.__reloadAsMember('logout'); }, 600); t.unref && t.unref(); };
sandbox.__reqErr = (t)=>{ try{ const e=t&&t.error; console.log('[REQ ERR MSG]', e&&e.error&&e.error.message, JSON.stringify(e&&e.details), 'status', t.response&&t.response.statusCode, 'reason', t.response&&t.response.nativeResponse&&t.response.nativeResponse.reason); }catch(x){console.log('dbg fail',x)} const seen=new Set(); console.log('[REQ ERR]', JSON.stringify(t,(k,v)=>{ if(typeof v==='object'&&v){ if(seen.has(v))return '[circ]'; seen.add(v);} return v;},1).slice(0,1500), '\n', Object.getOwnPropertyNames(t||{}), t&&t.stack); };
sandbox.__reqOk = (r)=>{ console.log('[REQ OK] keys', Object.keys(r||{}), 'bodylen', r&&r.body&&r.body.length, String(r&&r.body).slice(0,200)); };
{
  const m4='throw o.prev=8,o.t0=o.catch(1),(t=new s.default({innerError:o.t0,source:"init/tasks/nrdjs"';
  if (code.includes(m4)) code = code.replace(m4, 'throw o.prev=8,o.t0=o.catch(1),(globalThis.__nrdjsErr&&globalThis.__nrdjsErr(o.t0)),(t=new s.default({innerError:o.t0,source:"init/tasks/nrdjs"');
  else console.log("[host] AVISO: patch nrdjs-err nao aplicou");
}
sandbox.__nrdjsErr=(e)=>console.log('[NRDJS INIT ERR]', (e&&e.stack)||JSON.stringify(e)||e);

globalThis.__mslBad = [];
sandbox.__dbg=(r,s)=>{ console.log('[MSL FAIL]', deepfmt(r), '| aux:', deepfmt(s));
  try { if (r && (r.mslCode===200067 || /byte parsing/.test(String(r.message||'')))) { const now=Date.now(); __mslBad.push(now); while (__mslBad.length && now-__mslBad[0]>15000) __mslBad.shift();
    if (__mslBad.length>=3 && (+process.env.MSLRETRY||0)<2 && !process.env.NOMSLRETRY && !globalThis.__restarting) { console.log('[msl] falha de parsing repetida: reiniciando o boot (tentativa '+((+process.env.MSLRETRY||0)+1)+')'); setImmediate(()=>globalThis.__reloadAsMember('msl')); } } } catch {} };
sandbox.__dbg2=(e)=>{ if(!global.__d2n) global.__d2n=0; if(global.__d2n++<(process.env.MSLSTACK?8:4)) console.log('[MSL RAW]', deepfmt(e), e&&e.stack&&String(e.stack).split('\\n').slice(0,process.env.MSLSTACK?14:4).join(' | ')); };
sandbox.__exc=(t)=>{ if(!global.__en) global.__en=0; if(global.__en++<25) console.log('[EXC]', (t&&(t.stack||t.message))||deepfmt(t)); };
sandbox.__cnt=()=>{ global.__c=(global.__c||0)+1; if(process.env.EXC){ const o=Error.stackTraceLimit; Error.stackTraceLimit=14; (global.__stacks=global.__stacks||[]).push(new Error().stack); Error.stackTraceLimit=o; } };
if(process.env.EXC) setTimeout(()=>{ const st=global.__stacks||[]; for(const x of st.slice(-4)) console.log('[EXC] stack:\n'+x.split('\n').slice(2).map(l=>l.replace(/\(.*nrdjs.min.js[^:]*:/,'(nrdjs:')).join('\n')); },12000).unref();
sandbox.__mark=(...a)=>console.log(...a);
sandbox.__animOv=(k,e,st)=>{ try{ if(globalThis.__animLive) fs.appendFileSync('/tmp/anim_live.log', JSON.stringify({ t:Date.now()%100000, override:k, ctx:e&&e.context, type:e&&e.type, stack:String(st).split('\n').slice(2,9).join(' | ').slice(0,700) })+'\n'); }catch{} };
sandbox.__layoutRect=(n)=>{ try{ if(!n||!n.__p) return null; ensureLayout(); const L=n.__L, p=n.__p; return { x:L?L.x:num(p.x,0), y:L?L.y:num(p.y,0), w:L?L.w:num(p.width,0), h:L?L.h:num(p.height,0) }; }catch(e){ return null; } };
sandbox.__taskErr = (name, err)=>{ console.log('[REAL TASK ERR]', name, '\n'+((err&&err.stack)||err)); };
console.log(`[host] rodando UI (${(code.length/1048576).toFixed(2)}MB) em V8/Node...\n`);
let err=null;
context = vm.createContext(sandbox);
globalThis.__CA = vm.runInContext('Array', context); globalThis.__CO = vm.runInContext('Object', context);
WCRY.setRealm({ ArrayBuffer: vm.runInContext('ArrayBuffer', context), Uint8Array: vm.runInContext('Uint8Array', context) });
try { runCached(code, label||'darwinBootstrap.js', 10000); }
catch(e){ err=e; console.log('[startUI ERRO]', label, e&&e.message, String(e&&e.stack).split('\n').slice(0,process.env.ERRTEST?12:4).join(' | ')); }

if (sandbox.webpackJsonp && typeof sandbox.webpackJsonp.push === 'function') {
  const origPush = sandbox.webpackJsonp.push.bind(sandbox.webpackJsonp);
  sandbox.webpackJsonp.push = (arg) => {
    try {
      const modMap = arg && arg[1];
      if (modMap) for (const id in modMap) {
        const fn = modMap[id];
        if (typeof fn === 'function') modMap[id] = function(mod, exp, req){
          try { return fn.call(this, mod, exp, req); }
          catch(e){ console.log('\n[MODULE THROW] id='+id+' :', e.message);
            console.log(String(e.stack).split('\n').slice(0,10).join('\n')); throw e; }
        };
      }
    } catch(_){}
    return origPush(arg);
  };
}
return { sandbox, err };
}

const PRISTINE = new Set(Object.keys(nrdpReal));
let BOOT = startUI(UI, 'darwinBootstrap.js');
let sandbox = BOOT.sandbox, err = BOOT.err;

function runCached(code, filename, timeout){
  if (process.env.NOV8CACHE || code.length < 150000) return vm.runInContext(code, context, timeout ? { filename, timeout } : { filename });
  const h = require('crypto').createHash('sha1').update(code).digest('hex'), dir = path.resolve(__dirname, '../cache/v8'), file = path.join(dir, h + '.bin');
  let cached; try { cached = fs.readFileSync(file); } catch {}
  const script = new vm.Script(code, { filename, cachedData: cached });
  const r = script.runInContext(context, timeout ? { timeout } : {});
  if (!cached || script.cachedDataRejected) setTimeout(()=>{ try { fs.mkdirSync(dir, { recursive:true }); fs.writeFileSync(file, script.createCachedData()); } catch {} }, 8000).unref();
  return r;
}
function fetchScript(url){
  if (/^https?:\/\/localcontrol\.netflix\.com\/js\/error\.js(\?|$)/.test(url)) return path.resolve(__dirname, '../splash/error.js');
  const local = path.join(REL, 'ext', 'ui_' + require('crypto').createHash('sha1').update(String(url).replace(/\?.*$/, '')).digest('hex').slice(0,12) + '.js');
  if (!fs.existsSync(local)) { fs.mkdirSync(path.dirname(local), { recursive:true });
    try { cp.execFileSync('curl', ['-sfkL','-o',local,url], { timeout:60000 }); } catch(e){ console.log('[reload] ERRO baixando', url); try{fs.unlinkSync(local);}catch{} return null; } }
  return local;
}
function setupReload(){ nrdpReal.gibbon.onLocationChange = (url)=>{
  if (globalThis.__signoutPending) { setImmediate(()=>globalThis.__reloadAsMember('logout')); return; }
  if (process.env.LOGINREDIR !== '0' && (/^\s*\{/.test(String(url)) || /[?&]fromNM=true/.test(String(url)))) { console.log('[login] UI convidada pediu a UI de membro (redirect fromNM) -> reiniciando como membro'); setImmediate(()=>globalThis.__reloadAsMember()); return; }
  if (!url || /localcontrol\.netflix\.com\/js\/boot\.js/.test(String(url)) || /uiboot\.netflix\.com\/apps\/gibbontvui\/upgrade_policy/.test(String(url))) { setImmediate(()=>globalThis.__reloadAsMember('retry')); return; }
  setImmediate(()=>{
    const f = fetchScript(String(url).replace(/\s+$/,'').replace(/%0A/g,''));
    if (!f) return;
    console.log('[reload] recarregando UI ->', f);
    nrdpReal.gibbon = makeGibbon(); nrdpReal.gibbon.__loc = String(url).replace(/\s+$/,'').replace(/%0A/g,''); setupReload();
    if (/localcontrol\.netflix\.com\/js\/error\.js/.test(nrdpReal.gibbon.__loc)) { nrdpReal.gibbon.fonts.initialized = true; nrdpReal.gibbon.localeInfo = (n)=>({ name:String(n), direction: /^(ar|he|fa|ur)(-|$)/.test(String(n)) ? 'rtl' : 'ltr' }); }
    for (const k of Object.keys(nrdpReal)) if (!PRISTINE.has(k)) { try{ delete nrdpReal[k]; }catch{} }
    delete nrdpReal.js; delete nrdpReal.bridgeAdapter; delete nrdpReal.BRIDGE_ADAPTER_HAS_RUN; delete nrdpReal.nrdjs; nrdpReal.__ev = {}; nrdpReal.device.__ev = {}; nrdpReal.gibbon.scene._widget = null;
    BOOT = startUI(f, 'aui.js'); sandbox = BOOT.sandbox; err = BOOT.err;
  });
};
}
globalThis.__signoutPending = false;
setupReload();
if (process.env.VISDBG) setTimeout(()=>{ globalThis.__visdbgOn=true; }, +process.env.VISDBG);
if (process.env.ERRTEST && process.env.ERRDUMP) setTimeout(()=>process.emit('SIGUSR1'), +process.env.ERRDUMP);
if (process.env.ERRTEST) setTimeout(()=>nrdpReal.gibbon.onLocationChange('http://localcontrol.netflix.com/js/error.js?ERROR_CATEGORY=ui&ERROR_CODE='+process.env.ERRTEST+'&ERROR_DESCRIPTION=Teste'+(process.env.ERRURLX||'')), 6000);
globalThis.__reloadAsMember = (why)=>{
  if (globalThis.__restarting) return;
  globalThis.__restarting = true;
  if (why==='logout') { for (const k of ['NetflixId','SecureNetflixId']) jar.delete(k); jarSave(); }
  console.log(why==='logout' ? '[logout] saiu da conta -> reiniciando o host como visitante' : why==='retry' ? '[retry] tela de erro: reiniciando o boot' : why==='msl' ? '[msl] reiniciando o boot' : '[login] cookies de membro detectados -> reiniciando o host como membro');
  try{ __media.closeAll && __media.closeAll(); }catch{}
  try{ cp.spawn('sh', ['-c', 'sleep 0.5; exec "$0" "$@"', process.env.PKG_NODE || process.execPath, ...process.argv.slice(1)], { detached:true, stdio:'inherit', env:Object.assign({}, process.env, { FAKELOGIN:'', VIEWER_PID: String(viewerProc && viewerProc.pid || ''), MSLRETRY: why==='msl' ? String((+process.env.MSLRETRY||0)+1) : '' }), cwd:process.cwd() }).unref(); }catch(e){ console.log('[login] falha ao reiniciar', e.message); globalThis.__restarting = false; return; }
  globalThis.__restarting = true;
  setTimeout(()=>process.exit(0), 100);
};

function packColor(c){
  if (c==null) return 0;
  if (typeof c==='string'){ const m=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(c.trim()); return m ? (parseInt(m[1]+(m[2]||'ff'),16)>>>0) : 0; }
  if (typeof c==='number') return c>>>0;
  if (typeof c==='object'){ const r=(c.r||0),g=(c.g||0),b=(c.b||0),a=(c.a==null?1:c.a);
    const n=x=> x<=1? Math.round(x*255): Math.round(x);
    return ((n(r)<<24)|(n(g)<<16)|(n(b)<<8)|n(a))>>>0; }
  return 0;
}
function num(v,d){ v=+v; return isFinite(v)?v:d; }
const MEDIA_DIR = path.resolve(__dirname, '../cache'); try { fs.mkdirSync(MEDIA_DIR, { recursive:true }); } catch {}
let helper = null; const helperQ = [];
function helperCall(req){
  if (!helper) {
    helper = cp.spawn('python3', [path.resolve(__dirname, '../renderer/imgtext.py')], { stdio:['pipe','pipe','inherit'] });
    let buf = ''; helper.stdout.on('data', d=>{ buf += d; let i; while((i=buf.indexOf('\n'))>=0){ const l=buf.slice(0,i); buf=buf.slice(i+1); const r=helperQ.shift(); if(r){ try{ r(JSON.parse(l)); }catch{ r({ok:false}); } } } });
    helper.on('exit', ()=>{ helper=null; while(helperQ.length) helperQ.shift()({ok:false}); });
    helper.unref && helper.unref();
  }
  return new Promise(res=>{ helperQ.push(res); helper.stdin.write(JSON.stringify(req)+'\n'); });
}
const sha1 = (x)=>require('crypto').createHash('sha1').update(x).digest('hex');
const imgCache = new Map(), txtCache = new Map();
function download(url, dest, redirects){
  return new Promise((resolve, reject)=>{
    let U; try { U = new URL(url); } catch(e){ return reject(e); }
    const lib = U.protocol==='http:' ? http : https;
    lib.get({ hostname:U.hostname, port:U.port||undefined, path:U.pathname+U.search, rejectUnauthorized:false, headers:{ 'User-Agent':'Mozilla/5.0' } }, res=>{
      if (res.statusCode>=300 && res.statusCode<400 && res.headers.location && (redirects||0)<5) { res.resume(); return download(new URL(res.headers.location, url).toString(), dest, (redirects||0)+1).then(resolve, reject); }
      if (res.statusCode!==200) { res.resume(); return reject(new Error('HTTP '+res.statusCode)); }
      const ws = fs.createWriteStream(dest); res.pipe(ws); ws.on('finish', ()=>resolve()); ws.on('error', reject);
    }).on('error', reject);
  });
}
function imgScale(o){ const u=o&&o.url; const v=(u&&typeof u==='object'&&u.scale>0)?u.scale:((o&&o.scale>0)?o.scale:(/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||''))?1.5:1)); return v; }
function fileOf(im){ if (im.frames && im.frames.length>1) return im.frames[Math.floor(Date.now()/(im.delay||40))%im.frames.length]; return im.file; }
function getImage(url){
  if (typeof url !== 'string' || !/^(https?:|data:)/.test(url)) return null;
  let e = imgCache.get(url); if (e) return e.state==='ready' ? e : null;
  e = { state:'loading' }; imgCache.set(url, e);
  const base = path.join(MEDIA_DIR, sha1(url)), src = base+'.src', out = base+'.rgba';
  (async()=>{
    try {
      let r0=null; if (!fs.existsSync(out)) { if (!fs.existsSync(src)) { if (/^data:/.test(url)) { const m=/^data:[^,]*?(;base64)?,(.*)$/s.exec(url); fs.writeFileSync(src, m && m[1] ? Buffer.from(m[2],'base64') : Buffer.from(decodeURIComponent(m?m[2]:''),'binary')); } else await download(url, src); } const r = await helperCall({ op:'img', src, out }); if(!r.ok) throw new Error(r.error); e.w=r.w; e.h=r.h; r0=r; } else if (fs.existsSync(base+'.f1.rgba')) { r0={ frames:fs.readdirSync(MEDIA_DIR).filter(n=>n.startsWith(path.basename(base)+'.f')).length, delay:+(fs.existsSync(base+'.delay')?fs.readFileSync(base+'.delay','utf8'):40) }; }
      if (!e.w) { const fd=fs.openSync(out,'r'); const hb=Buffer.alloc(8); fs.readSync(fd,hb,0,8,0); fs.closeSync(fd); e.w=hb.readUInt32LE(0); e.h=hb.readUInt32LE(4); }
      e.file = out; e.state='ready'; if (r0 && r0.frames>1) { e.frames=[]; for(let i=0;i<r0.frames;i++) e.frames.push(base+'.f'+i+'.rgba'); e.delay=r0.delay||40; }
    } catch(err){ e.state='fail'; if(__E.MEDIALOG) console.log('[img FAIL]', url.slice(0,100), err.message); }
  })();
  return null;
}
const __shaMemo = new Map();
function getText(p){
  const __j = JSON.stringify(p); let key = __shaMemo.get(__j); if (key === undefined) { key = sha1(__j); if (__shaMemo.size > 20000) __shaMemo.clear(); __shaMemo.set(__j, key); } let e = txtCache.get(key); if (e) return e.state==='ready' ? e : null;
  e = { state:'loading' }; txtCache.set(key, e); const out = path.join(MEDIA_DIR, key+'.txt.rgba');
  if (__E.TXTSYNC!=='0') { try { const r = syncCall(Object.assign({ op:'txt', out }, p)); if (r && r.ok) { e.file=out; e.state='ready'; return e; } } catch(_){} }
  helperCall(Object.assign({ op:'txt', out }, p)).then(r=>{ if(r.ok){ e.file=out; e.state='ready'; } else { e.state='fail'; if(__E.MEDIALOG) console.log('[txt FAIL]', r.error); } });
  return null;
}
function sceneScale(){ const sc=nrdpReal.gibbon.scene; return (sc.width||1920)/1280; }
function textParams(n){
  const p = n.__p||{}; const txt = typeof p.text==='string' ? p.text : null; if (!txt) return null;
  const st = n.textStyle || {}; const L=n.__L; const w = L?L.w:num(p.width,0), h = L?L.h:num(p.height,0); if (w<=0 || h<=0) return null;
  const k = sceneScale(); if (__E.TXTNONASCII && /[^\x00-\x7f]/.test(txt)) console.log('[txtna]', JSON.stringify(txt), [...txt].filter(c=>c.charCodeAt(0)>127).map(c=>'U+'+c.codePointAt(0).toString(16)).join(' '), JSON.stringify(n.textStyle&&{f:n.textStyle.family,s:n.textStyle.size,w:n.textStyle.weight})); if (__E.TXTDBG && txt.startsWith(__E.TXTDBG)) console.log('[txtdbg]', JSON.stringify({txt,st:n.textStyle,L:n.__L,self:{maxW:n.maxWidth,maxH:n.maxHeight,pw:(n.__p||{}).width,ph:(n.__p||{}).height,pad:n.padding,lay:n.layout,ls:n.layoutStretch,minW:n.minWidth,minH:n.minHeight,sp:n.layoutSpacing},par:n.__parent?{pad:n.__parent.padding,lay:n.__parent.layout,ls:n.__parent.layoutStretch,minW:n.__parent.minWidth,p:n.__parent.__p&&{w:n.__parent.__p.width,h:n.__parent.__p.height}}:null}));
  if (__E.TXTDBG && txt.startsWith(__E.TXTDBG)) { const ch=[]; let a=n.__parent; for(let i=0;i<5&&a;i++,a=a.__parent) ch.push({nm:(a.__p||{}).name,L:a.__L,lay:a.layout&&a.layout.layout+':'+a.layout.align,pw:(a.__p||{}).width,pad:a.padding,minW:a.minWidth,maxW:a.maxWidth,kids:(a.children||[]).map(k=>({nm:(k.__p||{}).name,L:k.__L}))}); console.log('[txtchain]', JSON.stringify({L:n.__L,ch})); }
  const pdd=padOf(n); return { letterSpacing:LSP(n), firstLine:num(n.textFirstLine!==undefined?n.textFirstLine:p.textFirstLine,0)||undefined, rich:!!st.richText, fontsBold:st.richText?fontsFor(st.family,'bold',st.style):undefined, fonts:fontsFor(st.family, st.weight, st.style), maxLines:st.maxLines, padL:pdd.l, padR:pdd.r, padT:pdd.t+((n.__p&&n.__p.name)==='prompt'?9:0), padB:pdd.b, w:Math.ceil(w), h:Math.ceil(h), text:txt, rich:st.richText, family:st.family, size:(st.size||16)*k, weight:st.weight, color:st.color, align:(Array.isArray(st.align)?st.align.join(' '):st.align), wrap:!!st.wrap, maxLines:st.maxLines,
    lineHeight: st.lineHeight ? st.lineHeight*k : undefined, shadow: st.shadow ? { color:st.shadow.color, offsetX:(st.shadow.offsetX||0)*k, offsetY:(st.shadow.offsetY||0)*k } : undefined };
}
let syncH = null;
function syncHelper(){
  if (syncH!==null) return syncH||null;
  try {
    const dir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'p2sync-')); const rq=path.join(dir,'rq'), rs=path.join(dir,'rs');
    cp.execFileSync('mkfifo',[rq,rs]);
    const ch = cp.spawn('python3',[path.resolve(__dirname,'../renderer/imgtext.py'),'--fifo',rq,rs],{ stdio:['ignore','ignore','inherit'], detached:false }); ch.unref();
    const fw=fs.openSync(rq,'w'), fr=fs.openSync(rs,'r');
    process.on('exit',()=>{ try{ ch.kill(); }catch{} try{ fs.rmSync(dir,{recursive:true,force:true}); }catch{} });
    syncH = { fw, fr, buf:'' };
  } catch(e){ console.log('[syncHelper] falhou, usando spawn por medida:', e&&e.message); syncH=false; }
  return syncH||null;
}
function syncCall(o){
  const h = syncHelper(); if (!h) return null;
  fs.writeSync(h.fw, JSON.stringify(o)+'\n');
  const b = Buffer.alloc(65536);
  for(;;){ const i=h.buf.indexOf('\n'); if (i>=0){ const l=h.buf.slice(0,i); h.buf=h.buf.slice(i+1); return JSON.parse(l); } const n=fs.readSync(h.fr,b,0,b.length,null); if(n<=0) return null; h.buf+=b.slice(0,n).toString(); }
}
const measCache = new Map();
const measFast = new Map();
const MEAS_FILE = path.resolve(__dirname, '../cache/meas.json'); let __measDirty = false, __measT = null;
try { if (!__E.NOMEASCACHE) for (const [k,v] of Object.entries(JSON.parse(fs.readFileSync(MEAS_FILE,'utf8')))) measCache.set(k, v); } catch {}
function measSaveSoon(){ __measDirty = true; if (__measT) return; __measT = setTimeout(()=>{ __measT = null; if (!__measDirty) return; __measDirty = false; try { if (measCache.size > 200000) return; fs.writeFileSync(MEAS_FILE + '.tmp', JSON.stringify(Object.fromEntries([...measCache].filter(([,v])=>v && (v.width>0||v.height>0))))); fs.renameSync(MEAS_FILE + '.tmp', MEAS_FILE); } catch {} }, 10000); __measT.unref(); }
function measureTextSync(text, opts){
  if(__E.MEASLOG) console.log('[measureText]', JSON.stringify(text).slice(0,300), JSON.stringify(opts));
  const fk = ((typeof text==='object' && text) ? JSON.stringify(text) : String(text)) + '|' + fontEpoch + '|' + fontReg.length;
  const fh = measFast.get(fk); if (fh) return fh;
  const r0 = measureTextSync0(text, opts); if (r0 && (r0.width>0 || r0.height>0)) measFast.set(fk, r0); return r0;
}
function measureTextSync0(text, opts){
  const st = (typeof text==='object' && text) ? text : { text:String(text) };
  const o = Object.assign({ op:'measure', text:'', size:16 }, st); o.fonts = fontsFor(o.family, o.weight, o.style); if (o.rich) o.fontsBold = fontsFor(o.family, 'bold', o.style);
  const key = JSON.stringify(o); if (measCache.has(key)) return measCache.get(key);
  let r = { width:0, height:0 };
  try { const j0 = syncCall(o); if (j0 && j0.ok) { r={ width:j0.width, height:j0.height, lines:j0.lines }; measCache.set(key, r); if (r.width>0||r.height>0) measSaveSoon(); return r; } } catch(e){ syncH=false; }
  try { const out = cp.execFileSync('python3', [path.resolve(__dirname,'../renderer/imgtext.py')], { input: JSON.stringify(o)+'\n', timeout:8000 }).toString().trim().split('\n')[0]; const j=JSON.parse(out); if(j.ok) r={ width:j.width, height:j.height }; } catch{}
  measCache.set(key, r); return r;
}

function lp(w){ return w.__p || {}; }
function rp(w,k){ const q=w.__p; return (q && q[k]!==undefined) ? q[k] : w[k]; }
function padOf(w){ let p=rp(w,'padding')||{}; if (typeof p==='number') p={ left:p, right:p, top:p, bottom:p }; return { l:num(p.left,0), r:num(p.right,0), t:num(p.top,0), b:num(p.bottom,0) }; }
function LO(w){ const l=w.layout; if(!l) return null; if(typeof l==='string') return { layout:l, align:'' }; let al=Array.isArray(l.align)?l.align.join(','):(l.align||''); const ca=l.crossAxisAlign;
  if (ca) { const v=l.layout==='vertical'; const tok = ca==='center' ? (v?'center-horizontal':'center-vertical') : ca==='end' ? (v?'right':'bottom') : ca==='start' ? (v?'left':'top') : ''; if (tok && !al.split(',').includes(tok)) al = al ? al+','+tok : tok; }
  { const tk=al.split(','); if (tk.includes('center') && tk.length>1) { const hz=tk.some(t=>/^(left|right)$/.test(t)), vt=tk.some(t=>/^(top|bottom)$/.test(t)); const add=hz?',center-vertical':vt?',center-horizontal':',center-horizontal,center-vertical'; al+=add; } }
  return { layout:l.layout, align:al }; }
function frc(w){ const l=w&&w.layout; return !!(l && typeof l==='object' && l.forceRelativeChildPositioning); }
function isAbs(k){ if (LAYOUT_LEGACY) return false; const kp=lp(k); return kp.x!==undefined || kp.y!==undefined; }
function hasLayout(w){ const l=LO(w); return !!(l && (l.layout==='horizontal' || l.layout==='vertical')); }
const LAYOUT_LEGACY = __E.LAYOUT_LEGACY==='1';
const NOR = (__E.NORULE||'').split(',');
const rnd = v => (LAYOUT_LEGACY || NOR.includes('align')) ? v : (v>0 ? Math.floor(v+0.5) : v);
const lgap=(w)=>{ const l=w&&w.layout; return (l&&typeof l==='object'&&+l.gap>0) ? l.gap*sceneScale() : 0; };
const gapAt=(kids,i,sp,w)=> i>0 ? (LAYOUT_LEGACY ? sp : num(rp(kids[i],'layoutSpacing'),0)+lgap(w)) : 0;
function isWrapText(k){ const kp=lp(k); return typeof kp.text==='string' && kp.width===undefined && !!(k.textStyle && k.textStyle.wrap); }
function hasWrapDesc(k,d){ d=d||0; if (d>6||!k) return false; if (isWrapText(k)) return true; for (const c of (k.children||[])) { if (c && lp(c).visible!==false && lp(c).width===undefined && hasWrapDesc(c,d+1)) return true; } return false; }
function isFlexW(k){ return lp(k).width===undefined && !LAYOUT_LEGACY && hasWrapDesc(k); }
function LSP(w){ const n=w&&w.__p&&w.__p.name; if (n!=='login-qr-pin') return undefined; const st=w.textStyle||{}; return (st.size||16)*sceneScale()*0.14; }
function horizSizes(kids, avail, sp, w){
  const sz=kids.map(k=>(isWrapText(k)||isFlexW(k))?null:sizeOf(k)); const nw=sz.filter(x=>!x).length;
  if (!nw || !(avail>0) || LAYOUT_LEGACY) return kids.map((k,i)=>sz[i]||sizeOf(k));
  const fixed=sz.reduce((a,x)=>a+(x?x.w:0),0)+kids.reduce((a,k,i)=>a+gapAt(kids,i,sp,w),0); const each=Math.max(1,(avail-fixed)/nw);
  return kids.map((k,i)=>sz[i]||sizeOf(k,each));
}
function intrinsic(w, availW){
  const p=lp(w), pd=padOf(w); let iw=0, ih=0;
  const txt = typeof p.text==='string' ? p.text : null;
  if (txt) { const st=w.textStyle||{}; const k=sceneScale();
    const mxw = 0;
    const aw = (p.width!==undefined) ? num(p.width,0) : (mxw>0 ? (availW>0 ? Math.min(availW,mxw) : mxw) : availW);
    if (st.wrap && aw>0) { const m=measureTextSync({ text:txt, rich:st.richText, letterSpacing:LSP(w), family:st.family, size:(st.size||16)*k, weight:st.weight, wrap:true, width:Math.max(1,aw-pd.l-pd.r), maxLines:st.maxLines, lineHeight:st.lineHeight?st.lineHeight*k:undefined }); const m1=measureTextSync({ text:txt, rich:st.richText, letterSpacing:LSP(w), family:st.family, size:(st.size||16)*k, weight:st.weight, wrap:false }); iw=(m1.width>aw-pd.l-pd.r)?(aw-pd.l-pd.r):m1.width; ih=m.height; }
    else { const m=measureTextSync({ text:txt, rich:st.richText, letterSpacing:LSP(w), family:st.family, size:(st.size||16)*k, weight:st.weight, wrap:false }); iw=m.width; ih=m.height; } }
  const img = (p.backgroundImage&&p.backgroundImage.url) || (p.image&&p.image.url);
  if (img && !txt) { const e=imgCache.get(typeof img==='object'?img.url:img); if (e && e.state==='ready') { iw=e.w; ih=e.h; const io=(p.backgroundImage&&p.backgroundImage.url)?p.backgroundImage:p.image; const sr=io&&io.sourceRect; if (__E.IMGDBG && e.w>400) console.log('[imgdbg]', String(typeof img==='object'?img.url:img).slice(-60), 'e', e.w, e.h, 'sr', JSON.stringify(sr), 'pw', p.width, 'ph', p.height); if (sr && sr.width>0 && sr.height>0) { iw=sr.width; ih=sr.height; } const isc=imgScale(io); iw*=isc; ih*=isc; } }
  let kids=(w.children||[]).filter(k=>k && lp(k).visible!==false);
  if (kids.length && hasLayout(w)) {
    const fr=frc(w); const absK=kids.filter(k=>!fr&&isAbs(k)); const kidsAll=kids; kids=kids.filter(k=>fr||!isAbs(k)); absK.forEach(k=>{ const s=sizeOf(k), kp=lp(k); iw=Math.max(iw,num(kp.x,0)+s.w); ih=Math.max(ih,num(kp.y,0)+s.h); });
    const horiz=LO(w).layout==='horizontal', sp=num(rp(w,'layoutSpacing'),0); let main=0, cross=0;
    const hs = horiz ? horizSizes(kids, availW>0?availW-pd.l-pd.r:0, sp, w) : null;
    kids.forEach((k,i)=>{ const s=horiz?hs[i]:sizeOf(k, (availW>0?availW-pd.l-pd.r:undefined)); const m=horiz?s.w:s.h, c=horiz?s.h:s.w; main+=m+gapAt(kids,i,sp,w); cross=Math.max(cross,c); });
    iw=Math.max(iw, (horiz?main:cross)+pd.l+pd.r); ih=Math.max(ih, (horiz?cross:main)+pd.t+pd.b);
  } else if (kids.length) {
    let x0=0, y0=0; kids.forEach(k=>{ const s=sizeOf(k), kp=lp(k); const kx=num(kp.x,0), ky=num(kp.y,0); iw=Math.max(iw,kx+s.w); ih=Math.max(ih,ky+s.h); x0=Math.min(x0,kx); y0=Math.min(y0,ky); });
    if (!NOR.includes('bbox')) { iw-=x0; ih-=y0; }
  }
  if (LAYOUT_LEGACY) { iw=Math.max(iw+ (txt?pd.l+pd.r:0), num(rp(w,'minWidth'),0)); ih=Math.max(ih, num(rp(w,'minHeight'),0)); return { w:iw, h:ih }; }
  if (!NOR.includes('pad') && !(kids.length && hasLayout(w))) { iw+=pd.l+pd.r; ih+=pd.t+pd.b; } else if (NOR.includes('pad') && txt) iw+=pd.l+pd.r;
  const clampMM=(v,mn,mx)=>{ if (mn!==undefined && v<num(mn,0)) return num(mn,0); if (mx!==undefined && v>num(mx,0)) return num(mx,0); return v; };
  iw=clampMM(iw,rp(w,'minWidth'),undefined); ih=clampMM(ih,rp(w,'minHeight'),undefined);
  return { w:iw, h:ih };
}
const ANIM_LAYOUT=/^synopsis-wrapper$/;
function synopsisHold(w,L){ if (!L || !w.__parent || (w.__p||{}).name!=='synopsis') return 0; const par=w.__parent; if (String((par.__p||{}).name||'')!=='synopsis-wrapper' || !par.__L) return 0; return Math.max(0, L.h - par.__L.h); }

function sizeOf(w, aw){
  const p=lp(w); const it=(p.width===undefined||p.height===undefined) ? intrinsic(w, p.width!==undefined?num(p.width,0):aw) : null;
  const aw2 = (v,k)=> (w.__a && w.__a[k] && ANIM_LAYOUT.test(String(p.name||''))) ? animVal(w,k,num(v,0)) : num(v,0);
  return { w: p.width!==undefined ? aw2(p.width,'width') : it.w, h: p.height!==undefined ? aw2(p.height,'height') : it.h };
}
function naturalImg(k){
  const p=lp(k); const o=(p.image&&p.image.url)?p.image:((p.backgroundImage&&p.backgroundImage.url)?p.backgroundImage:null); if(!o) return null;
  const e=imgCache.get(typeof o.url==='object'?o.url.url:o.url); if(!e||e.state!=='ready') return null;
  const sr=o.sourceRect; return { nw:(sr&&sr.width>0)?sr.width:e.w, nh:(sr&&sr.height>0)?sr.height:e.h, o };
}
function arrange(w, W, H){
  const pd=padOf(w), allKids=(w.children||[]).filter(k=>k && lp(k).visible!==false);
  const horiz = hasLayout(w) ? LO(w).layout==='horizontal' : null;
  const fr = frc(w);
  const kids = horiz===null ? allKids : allKids.filter(k=>fr||!isAbs(k));
  if (horiz!==null && !fr) allKids.filter(isAbs).forEach(k=>{ const sz=sizeOf(k), kp=lp(k); k.__L={ x:num(kp.x,0), y:num(kp.y,0), w:sz.w, h:sz.h }; arrange(k,sz.w,sz.h); });
  if (horiz===null) { kids.forEach(k=>{ const s=sizeOf(k), kp=lp(k); if (kp.name==='mngImage' && W>0 && H>0) { s.w=W; s.h=H; }     k.__L={ x:pd.l+num(kp.x,0), y:num(kp.y,0), w:s.w, h:s.h }; arrange(k,s.w,s.h); }); return; }
  const sp=num(rp(w,'layoutSpacing'),0), al=String(LO(w).align||''), innerW=W-pd.l-pd.r, innerH=H-pd.t-pd.b;
  const sizes=horiz?horizSizes(kids, innerW, sp, w):kids.map(k=>sizeOf(k, innerW)), stretch=kids.map(k=>num(k.layoutStretch,0));
  const crossAligned = horiz ? /center-vertical|^center$|bottom/.test(al) : /center-horizontal|^center$|right/.test(al);
  kids.forEach((k,i)=>{ const kp=lp(k); if (crossAligned || kp.x!==undefined || kp.y!==undefined) return; const hasImg=!!((kp.image&&kp.image.url)||(kp.backgroundImage&&kp.backgroundImage.url)); if (hasImg && !(typeof kp.text==='string') && (horiz ? kp.height===undefined : kp.width===undefined) && !(k.children||[]).length) return; if (horiz) { if (kp.height===undefined) sizes[i].h=Math.max(sizes[i].h, innerH); } else { if (kp.width===undefined) sizes[i].w=Math.max(sizes[i].w, innerW); } });
  kids.forEach((k,i)=>{ const st=k.textStyle, kp=lp(k); if (st && st.wrap && typeof kp.text==='string' && kp.height===undefined) { const pk=padOf(k); const m=measureTextSync({ text:kp.text, rich:st.richText, family:st.family, size:(st.size||16)*sceneScale(), weight:st.weight, wrap:true, width:Math.max(1,sizes[i].w-pk.l-pk.r), maxLines:st.maxLines, lineHeight:st.lineHeight?st.lineHeight*sceneScale():undefined }); sizes[i].h=Math.max(sizes[i].h, m.height+pk.t+pk.b); } });
  if (!horiz) kids.forEach((k,i)=>{ k.__logoScale=undefined; const ni=naturalImg(k), nx=kids[i+1]; if (!ni||!nx||ni.o.dynamicScale||ni.o.halign||ni.o.valign||typeof lp(k).text==='string') return;
    const sw=sizes[i].w, sh=sizes[i].h; if (!(ni.nw<sw-2 && Math.abs(ni.nh-sh)<=2)) return;
    const tw=sizeOf(nx, innerW).w; if (tw>ni.nw+2) { const sc=Math.min(tw/ni.nw, 3); k.__logoScale=sc; sizes[i].h=ni.nh*sc; } });
  const total=stretch.reduce((a,b)=>a+b,0);
  let fixed=0; kids.forEach((k,i)=>{ fixed+= (stretch[i]>0 ? 0 : (horiz?sizes[i].w:sizes[i].h)) + gapAt(kids,i,sp,w); });
  const mainAvail = (horiz?innerW:innerH) - fixed;
  kids.forEach((k,i)=>{ if (stretch[i]>0 && total>0) { const ms=Math.max(0, LAYOUT_LEGACY ? mainAvail*stretch[i]/total : Math.floor(mainAvail*stretch[i]/total)); if (horiz) sizes[i].w=Math.max(ms,num(rp(k,'minWidth'),0)); else sizes[i].h=Math.max(ms,num(rp(k,'minHeight'),0)); } });
  const used = sizes.reduce((a,s,i)=>a+(horiz?s.w:s.h)+gapAt(kids,i,sp,w),0);
  const mainBox = horiz?innerW:innerH, crossBox = horiz?innerH:innerW;
  let pos = 0;
  if (horiz) { if (/right/.test(al)) pos=mainBox-used; else if (/center-horizontal|^center$/.test(al)) pos=rnd((mainBox-used)/2); }
  else       { if (/bottom/.test(al)) pos=mainBox-used; else if (/center-vertical|^center$/.test(al)) pos=rnd((mainBox-used)/2); }
  pos=Math.max(0,pos);
  let spaceGap=0;
  if (/space-between/.test(al)) { if (kids.length>1) spaceGap=Math.max(0,(mainBox-used)/(kids.length-1)); else pos=Math.max(0,rnd((mainBox-used)/2)); }
  kids.forEach((k,i)=>{
    const s=sizes[i]; const kp=lp(k); let cpos=0, cs=horiz?s.h:s.w;
    if (horiz) { if (/bottom/.test(al)) cpos=crossBox-cs; else if (/center-vertical|^center$/.test(al)) cpos=rnd((crossBox-cs)/2); }
    else       { if (/right/.test(al)) cpos=crossBox-cs; else if (/center-horizontal|^center$/.test(al)) cpos=rnd((crossBox-cs)/2); }
    const x = pd.l + (horiz?pos:Math.max(0,cpos)) + num(kp.x,0), y = pd.t + (horiz?Math.max(0,cpos):pos) + num(kp.y,0);
    k.__L={ x, y, w:s.w, h:s.h }; pos += (horiz?s.w:s.h) + (LAYOUT_LEGACY?sp:num(kids[i+1]&&rp(kids[i+1],'layoutSpacing'),0)+(kids[i+1]?lgap(w):0)) + spaceGap; arrange(k,s.w,s.h);
  });
}
function layoutScene(root){
  (function clear(n){ n.__L=undefined; for(const k of n.children||[]) clear(k); })(root);
  const p=lp(root); const W=num(p.width,1920), H=num(p.height,1080); arrange(root,W,H);
  (function(){ let mem=null, contact=null, rc=null;
    (function f(n){ const q=n.__p||{}, nm=q.name;
      if (nm==='Text-InputTextLarge' && n.__L && n.__parent && n.__parent.__L && (function(){ for (let a=n.__parent; a; a=a.__parent) { const an=(a.__p||{}).name; if (an==='user-login'||an==='right-column') return true; } return false; })()) { n.__L.x=0; n.__L.w=n.__parent.__L.w; }
      else if (nm==='Text-LabelLarge' && /Memorizar/.test(String(q.text||''))) mem=n; else if (nm==='contact-info-text') contact=n; else if (nm==='right-column') rc=n;
      for (const k of n.children||[]) f(k); })(root);
    if (mem && contact && rc && mem.__L && contact.__L) { const dy=(absXY(mem).y+mem.__L.h)-(absXY(contact).y+contact.__L.h);
      if (dy>0) for (const k of rc.children||[]) if (/^(sign-up-stack|login-disclaimers)$/.test(String((k.__p||{}).name||'')) && k.__L) k.__L.y+=dy; } })();
  (function fix(n){ const q=n.__p||{}; if (/^toggle-item-/.test(String(q.name||'')) && n.__L) for (const k of n.children||[]) if (k.__L && k.__L.h < n.__L.h) k.__L.y += (n.__L.h-k.__L.h)/2; for (const k of n.children||[]) fix(k); })(root);
}

const ANC=[];
function inputNameShift(w,L){ const st=w.textStyle; if (!st || st.cursorPosition===undefined || !L) return 0; const par=w.__parent&&w.__parent.__L; if (!par) return 0; return (par.w-L.w)/2 - L.x; }
const EASE_NUM=['linear','ease-in-out-quad','ease-in-quad','ease-out-quad','ease-in-back','ease-out-back','ease-in-sine','ease-out-sine','ease-in-out-sine','ease-in-cubic','ease-out-cubic','ease-in-out-cubic','ease-in-quart','ease-out-quart','ease-in-out-quart','ease-in-quint','ease-out-quint','ease-in-out-quint','linear','ease-in-out-back','ease-in-expo','ease-out-expo','ease-in-out-expo','ease-in-circ','ease-out-circ','ease-in-out-circ'];
const EASE_IN={ sine:t=>1-Math.cos(t*Math.PI/2), quad:t=>t*t, cubic:t=>t*t*t, quart:t=>t*t*t*t, quint:t=>t*t*t*t*t, expo:t=>t===0?0:Math.pow(2,10*t-10), circ:t=>1-Math.sqrt(1-t*t), back:t=>{ const c1=1.70158; return (c1+1)*t*t*t-c1*t*t; } };
function easeFn(name){
  if (typeof name==='number') name=EASE_NUM[name]||'linear';
  const m=/^(?:ease-)?(in-out|in|out)-(sine|quad|cubic|quart|quint|expo|circ|back)$/.exec(String(name||'linear'));
  if (!m) return t=>t;
  const f=EASE_IN[m[2]];
  if (m[1]==='in') return f;
  if (m[1]==='out') return t=>1-f(1-t);
  return t=> t<0.5 ? f(2*t)/2 : 1-f(2-2*t)/2;
}
function animVal(w, prop, base){
  const a = w.__a && w.__a[prop]; if (!a) return base; const now=Date.now();
  if (a.segs) { for (const sg of a.segs) { if (typeof sg.from!=='number' || typeof sg.to!=='number') return base; if (now<sg.t0) return sg.from; if (now<sg.t0+sg.dur) return sg.from+(sg.to-sg.from)*easeFn(sg.ease)(sg.dur>0?(now-sg.t0)/sg.dur:1); } return base; }
  if (typeof a.to!=='number' || typeof a.from!=='number') return base;
  const t = a.dur>0 ? Math.min(1,(now-a.t0)/a.dur) : 1; if (t>=1) return base;
  return a.from + (a.to-a.from)*easeFn(a.ease)(t);
}
const EASE_PARSED=new Map();
const EASE_FAM=['linear','sine','quad','cubic','quart','quint','expo','circ','back'];
function viewerAnim(w, prop){
  if (__E.NOVIEWANIM) return null;
  const a = w.__a && w.__a[prop]; if (!a) return null; const now=Date.now(); const out=[];
  const segs = a.segs || [a];
  for (const sg of segs) {
    if (!(now < sg.t0 + sg.dur) && !(now < sg.t0)) continue;
    if (typeof sg.from!=='number' || typeof sg.to!=='number' || !isFinite(sg.t0) || !(sg.dur>=0)) return null;
    let ef = EASE_PARSED.get(sg.ease);
    if (!ef) { let name=sg.ease; if (typeof name==='number') name=EASE_NUM[name]||'linear'; const m=/^(?:ease-)?(in-out|in|out)-(sine|quad|cubic|quart|quint|expo|circ|back)$/.exec(String(name||'linear')); ef=[m?(m[1]==='in'?0:m[1]==='out'?1:2):0, m?EASE_FAM.indexOf(m[2]):0]; EASE_PARSED.set(sg.ease, ef); }
    out.push({ from:sg.from, to:sg.to, t0:sg.t0, dur:sg.dur, mode:ef[0], fam:ef[1] });
  }
  return out.length ? out : null;
}
function curVal(w, prop){ const p=w.__p||{}, L=w.__L; let base;
  if (prop==='x') base=L?L.x:num(p.x,0); else if (prop==='y') base=L?L.y:num(p.y,0); else if (prop==='width') base=L?L.w:num(p.width,0); else if (prop==='height') base=L?L.h:num(p.height,0);
  else if (prop==='opacity') base=num(p.opacity,1); else if (prop==='scale') base=num(p.scale,1); else base=p[prop];
  return animVal(w, prop, base); }
let lastLayoutAt = 0;
function ensureLayout(){ const root = nrdpReal.gibbon.scene && nrdpReal.gibbon.scene._widget; if (!root) return; const now=Date.now(); if (now-lastLayoutAt>20) { lastLayoutAt=now; try{ layoutScene(root); }catch(e){} } }
function renderProp(w, key){
  ensureLayout(); const L=w.__L, p=w.__p||{};
  if (L) return L[key];
  return num({x:p.x,y:p.y,w:p.width,h:p.height}[key],0);
}
function emitRenderProps(){
  const root = nrdpReal.gibbon.scene && nrdpReal.gibbon.scene._widget; if (!root) return;
  ensureLayout();
  (function w(n){
    if ((n.sendRenderProperties || (typeof (n.__p||{}).text==='string' && n.textStyle) || __E.RPALL!=='0') && n.__ev && n.__ev.renderpropertychange && n.__ev.renderpropertychange.length) {
      const L=n.__L, p=n.__p||{}; const cur={ renderX: L?L.x:num(p.x,0), renderY: L?L.y:num(p.y,0), renderWidth: L?L.w:num(p.width,0), renderHeight: L?L.h:num(p.height,0) };
      if (typeof p.text==='string' && n.textStyle) { const st=n.textStyle, pd=padOf(n), k=sceneScale(), w=(L?L.w:num(p.width,0))-pd.l-pd.r; if (w>0) { const m=measureTextSync({ text:p.text, rich:!!st.richText, family:st.family, size:(st.size||16)*k, weight:st.weight, wrap:!!st.wrap, width:w, lineHeight:st.lineHeight?st.lineHeight*k:undefined }); if (m && m.lines) cur.renderTextLines=m.lines; } }
      const last=n.__lastRP||{};
      for (const k of Object.keys(cur)) if (last[k]!==cur[k]) { const ov=last[k]; last[k]=cur[k]; if(__E.RPLOG) console.log('[renderprop]', n.id, (n.__p||{}).name, k, cur[k]); n._sendRenderProperty(k, ov, cur[k]); }
      n.__lastRP=last;
    }
    for (const k of n.children||[]) w(k);
  })(root);
}
setInterval(()=>{ try{ emitRenderProps(); }catch(e){} }, 50).unref();
const ABS=[{x:0,y:0}]; const __snap=new Map();
let __vidRect=null, __carrierNow=false, __carrierPrev=false, __bestNow=null, __bestPrev=null, __bestArea=0;
function absXY(w){ let x=0,y=0; for(let n=w; n; n=n.__parent){ const L=n.__L, p=n.__p||{}; x+=L?L.x:num(p.x,0); y+=L?L.y:num(p.y,0); } return {x,y}; }
let __vf0=0, __vfChk=0, __vfOn=false, __vfOff=0;
function videoFade(){ const now=Date.now(); if(now-__vfChk>30){ __vfChk=now; let on=false; const live=new Set(); try{ for(const f of fs.readdirSync('/dev/shm')) if(f.startsWith('gibbon_video_')&&f.endsWith('.rgba')){ live.add(f); if(!on && now-fs.statSync('/dev/shm/'+f).mtimeMs<1500) on=true; } }catch{} globalThis.__vidLive=live; if(on&&!__vfOn) __vf0=now; if(!on&&__vfOn) __vfOff=now; __vfOn=on; } return __vfOn ? 0 : 1; }
function videoAlpha(){ videoFade(); return __vfOn ? Math.max(0,Math.min(1,(Date.now()-__vf0)/800)) : 0; }
function videoFading(){ return !__vfOn && __vfOff>0 && Date.now()-__vfOff<700; }
function hasVideoDesc(n,d){ if(!n||d>4) return false; if(n.player&&typeof n.player.name==='string'&&(videoFading()||(globalThis.__vidLive&&globalThis.__vidLive.has('gibbon_video_'+(/(\d+)$/.exec(n.player.name)||[])[1]+'.rgba')))) return true; for(const k of (n.children||[])) if(hasVideoDesc(k,d+1)) return true; return false; }
function hasVideoKid(par){ for(const k of (par.children||[])) if(hasVideoDesc(k,0)) return true; return false; }
function smoothPlanPrice(w, y){ let a=w.__parent, ok=false; for (; a; a=a.__parent) if (/^plan-card-\d+$/.test(String((a.__p||{}).name||''))) { ok=true; break; } if (!ok) return y;
  const now=Date.now(), DUR=350, ease=k=>1-Math.pow(1-k,3); let s=w.__sy; if (!s) { w.__sy={ from:y, to:y, t0:now }; return y; }
  if (s.to!==y) { const k=Math.min(1,(now-s.t0)/DUR); s.from=s.from+(s.to-s.from)*ease(k); s.to=y; s.t0=now; }
  return s.from+(s.to-s.from)*ease(Math.min(1,(now-s.t0)/DUR)); }
const LENS_FADE_MS = +__E.LENS_FADE_MS || 615;
function isPlanScroller(w){ if (w.__isPS) return true; for (const k of w.children||[]) if (/^(plan-card-\d+|PlansCardContainer)$/.test(String((k.__p||{}).name||''))) return (w.__isPS=true); return false; }
function smoothScrollX(w, x){ if (!isPlanScroller(w)) return x;
  const now=Date.now(), DUR=300, ease=k=>1-Math.pow(1-k,4); let s=w.__sx; if (!s) { w.__sx={ from:x, to:x, t0:now }; return x; }
  if (s.to!==x) { if (__E.SCRLOG) console.log('[scrollx]', w.id, 'de', Math.round(s.to), 'para', Math.round(x)); const k=Math.min(1,(now-s.t0)/DUR); s.from=s.from+(s.to-s.from)*ease(k); s.to=x; s.t0=now; }
  return s.from+(s.to-s.from)*ease(Math.min(1,(now-s.t0)/DUR)); }
let __serStamp=0;
function titlePlaymode(){ try { const root = nrdpReal.gibbon.scene && nrdpReal.gibbon.scene._widget; if (!root) return false;
  const vis = (n)=> (n.__p||{}).visible !== false;
  const f = (n,d)=>{ if (!vis(n)) return false; if ((n.__p||{}).name==='playmode') return true; if (d>=5) return false; for (const c of n.children||[]) if (f(c,d+1)) return true; return false; };
  return f(root,0); } catch { return false; } }
function serializeScene(){
  __serStamp++; const __pm = titlePlaymode();
  if (__E.ROUTEDBG) { try { const root=nrdpReal.gibbon.scene&&nrdpReal.gibbon.scene._widget; const app=(function f(n,d){ if (!n) return null; if ((n.__p||{}).name==='app') return n; for (const k of n.children||[]) { const r=f(k,d+1); if (r) return r; } return null; })(root,0);
      if (app) { const sig=(app.children||[]).map(k=>'#'+k.id+':'+((k.__p||{}).name||'')+':'+((k.__p||{}).visible===false?'H':'V')+':'+(((k.__L&&k.__L.x)||(k.__p||{}).x||0)|0)).join(' | '); if (sig!==globalThis.__rsig) { globalThis.__rsig=sig; console.log('[route] t='+process.uptime().toFixed(1)+' '+sig.slice(0,400)); } } } catch(e){} }
  if (globalThis.__lensLast && Date.now()-(globalThis.__lensSeen||0) > 400) { globalThis.__lensLast=null; globalThis.__lensRec=null; }
  const root = nrdpReal.gibbon.scene && nrdpReal.gibbon.scene._widget;
  videoFade(); ABS.length=1; __vidRect=null; __carrierPrev=__carrierNow; __carrierNow=false; __bestPrev=__bestNow; __bestNow=null; __bestArea=0; const sc0 = nrdpReal.gibbon.scene; const lines = ['VIEW '+(sc0.width||1920)+' '+(sc0.height||1080)];
  if (root) layoutScene(root);
  function hasCtaButton(n, d){
  d=d||0; if (!n||typeof n!=='object'||d>6) return false;
  if (/^video-footer/.test((n.__p&&n.__p.name)||'')) return true;
  const e=n.__effect; if (e && e.name==='styled-rectangle') { const f=(e.params||{}).fill; if (typeof f==='string' && f.toLowerCase()==='#e50914ff') return true; }
  for (const k of (n.children||[])) if (hasCtaButton(k,d+1)) return true;
  return false;
}
function priceTextLift(w){
  if (typeof (w.__p&&w.__p.text)!=='string' || !w.__parent) return 0;
  const sib=w.__parent.children||[], i=sib.indexOf(w);
  return (i>=0 && i+1<sib.length && hasCtaButton(sib[i+1])) ? 10 : 0;
}
function findCardRadius(w, ww, hh, d){
  d=d||0; if (d>3) return 0;
  for (const k of (w.children||[])) { if (!k||typeof k!=='object') continue;
    const e=k.__effect, L=k.__L;
    if (e && e.name==='styled-rectangle' && L && Math.abs(L.w-ww)<2 && Math.abs(L.h-hh)<2) { const r=num((e.params||{}).radius,0); if (r>0) return r; }
    const r2=findCardRadius(k, ww, hh, d+1); if (r2) return r2; }
  return 0;
}
if (root) (function walk(w,depth,card,btn){
    try {
      const p = w.__p || {};
      if (p.visible === false) return;
      const L=w.__L; const __bx=L?L.x:num(p.x,0), __by=L?L.y:num(p.y,0), __axv=animVal(w,'x',__bx), __ayv=animVal(w,'y',__by); const __bw=L?L.w:num(p.width,0), __bh=L?L.h:num(p.height,0), __awv=animVal(w,'width',__bw), __ahv=animVal(w,'height',__bh); let x=__axv + inputNameShift(w,L), y=__ayv - priceTextLift(w) - synopsisHold(w,L), ww=__awv, hh=__ahv;
      const __x0=x, __y0=y, __w0=ww, __h0=hh;
      if (p.name==='Text-SubheaderStandard') y = smoothPlanPrice(w, y);
      x = smoothScrollX(w, x);
      if (p.name==='WelcomeContentLandingHorizontalCardsViewContainer') { if (w.__ent===undefined) { w.__ent = globalThis.__homeSeen ? Date.now() : 0; globalThis.__homeSeen = true; } }
      if (p.name==='ListContainer') { for (let a=w.__parent; a; a=a.__parent) if (a.__ent!==undefined) { if (a.__ent) { const k=Math.min(1,(Date.now()-a.__ent)/450); if (k<1) x += 1920*Math.pow(1-k,5); } break; } }
      let col=packColor(p.color); if (p.name==='BlackBackground' && w.__parent && hasVideoKid(w.__parent)) col=0;
      let op=animVal(w,'opacity',num(p.opacity,1)); const __op0=op; if (__vfOn && __vidRect && /TallPanelBoxshot/.test(String(p.name||''))) { const PA0=ABS[ABS.length-1], axx=PA0.x+x, vr=__vidRect; if (axx < vr.x+vr.w-8 && axx+ww > vr.x+8) op=0; }
      let lensImgOp=null, lensPrev=null, lensBlackBg=false;
      if (p.name==='HorizontalCardLensImage' && !(w.__a && w.__a.opacity)) { const tgt=num(p.opacity,1), now=Date.now();
        const urlOf=(n)=>{ const q=n.__p||{}, io=q.backgroundImage||q.image, u=io&&io.url; return u ? (typeof u==='object'?u.url:u) : null; };
        const myUrl=urlOf(w), ready=!!(myUrl && getImage(myUrl));
        if (globalThis.__lensStamp!==__serStamp) { globalThis.__lensStamp=__serStamp; const arr=[]; (function wk(n){ if ((n.__p||{}).name==='HorizontalCardLensImage') arr.push(n); for (const k of n.children||[]) wk(k); })(nrdpReal.gibbon.scene._widget); globalThis.__lensAll=arr; }
        const sibs=(globalThis.__lensAll||[]).filter(o=>o!==w);
        const sameArt=sibs.some(o=>myUrl && urlOf(o)===myUrl);
        let f=w.__lf; if (!f) { const dup=sameArt && sibs.some(o=>o.__lf && o.__lf.to===1);
          const lu=globalThis.__lensLast && (typeof globalThis.__lensLast.url==='object'?globalThis.__lensLast.url.url:globalThis.__lensLast.url);
          const rec=globalThis.__lensRec, recent=!!(rec && now-rec.seen<500);
          if (recent && rec.url===myUrl) f=w.__lf=rec.f;
          else { const sameAsShown = !!(myUrl && lu===myUrl);
            const base = (recent && rec.f.fv>=0.5) ? rec.obj : globalThis.__lensLast;
            f=w.__lf={ to:tgt, t0:now, from:(dup||sameAsShown)?tgt:0, hold:false, fv:0, prev: base ? Object.assign({}, base, { sourceOffsetX: 0 }) : null }; } }
        if (f.to!==tgt) { const k=Math.min(1,(now-f.t0)/LENS_FADE_MS); f.from=f.from+(f.to-f.from)*k; f.to=tgt; f.t0=now;
          f.hold = tgt===0 && !sameArt && sibs.some(o=>o.__lf && o.__lf.to===1 && now-o.__lf.t0<900);
          if (tgt===0 && sameArt) f.from=0; }
        if (tgt>0 && !ready) f.t0=now;
        const k=Math.min(1,(now-f.t0)/LENS_FADE_MS); const fv=(ready||tgt===0) ? (f.hold ? (now-f.t0<LENS_FADE_MS ? f.from : 0) : f.from+(f.to-f.from)*k) : 0;
        const bgOp = tgt>0 ? 1 : fv; op = bgOp; lensImgOp = bgOp>0.001 ? Math.min(1, fv/bgOp) : 0;
        if (tgt>0 && fv<0.999) lensBlackBg = true;
        f.fv=fv; if (tgt>0) { globalThis.__lensRec={ url:myUrl, f, obj:p.backgroundImage, seen:now }; globalThis.__lensSeen=now; }
        if (tgt>0 && ready && fv>=0.999 && p.backgroundImage) globalThis.__lensLast = Object.assign({}, p.backgroundImage, { sourceOffsetX: 0 });
        const pu = f.prev && (typeof f.prev.url==='object'?f.prev.url.url:f.prev.url);
        if (tgt>0 && fv<0.999 && f.prev && pu && pu!==myUrl && getImage(pu)) lensPrev = f.prev; }
      if (__E.LENSDBG && p.name==='HorizontalCardLensImage' && Date.now()-(globalThis.__ldT||0)>90) { globalThis.__ldT=Date.now(); const io=p.backgroundImage||p.image; const u=io&&io.url; console.log('[lens2] bgurl='+String(p.backgroundImage&&(typeof p.backgroundImage.url==='object'?p.backgroundImage.url.url:p.backgroundImage.url)).slice(-30), 'imgurl='+String(p.image&&(typeof p.image.url==='object'?p.image.url.url:p.image.url)).slice(-30), 'bgSox='+(p.backgroundImage&&p.backgroundImage.sourceOffsetX), 'imgSox='+(p.image&&p.image.sourceOffsetX), 'bgKeys='+Object.keys(p.backgroundImage||{}).join(','));
        console.log('[lens] id='+w.id, 'op='+op.toFixed(2), 'tgt='+p.opacity, 'bg='+!!p.backgroundImage, 'img='+!!p.image, 'sox='+(io&&io.sourceOffsetX), 'url='+String(typeof u==='object'?u.url:u).slice(-40), 'n='+(globalThis.__lensAll||[]).length, 'x='+x, 'anim='+JSON.stringify(Object.keys(w.__a||{}))); }
      if (lensBlackBg) col = 0x000000ff;
      const sc=animVal(w,'scale',num(p.scale,1));
      if (__E.RBDBG && ww===55 && hh===63) console.log('[rb]', p.name, w.__pname, col);
      if (p.name==='browse' && p.visible!==false) globalThis.__browseTick=Date.now();
      if (p.name==='ProfileGate' && p.visible!==false && num(p.opacity,1)>0.01) globalThis.__gateTick=Date.now();
      const roundBtn = !w.__effect && (col>>>0)&0xff && /^(DynamicBorderImage\w*|MenuItem|profileName|profileIcon|profileLanguage)$/.test(p.name||'') && hh>0 && hh<=90;
      const roundPin = !roundBtn && !w.__effect && (col>>>0)&0xff && (p.name==='BorderBox' || /^latin-(digit|control)-.*-key$/.test(p.name||'')) ;
      const roundTag = !roundBtn && !w.__effect && (col>>>0)&0xff && p.name==='content-rating';
      if (/^Lock_/.test(p.name||'') && sc>0 && sc<1) { x -= ww*(1-sc)/2; y -= hh*(1-sc)/2; }
      let __xe=x, __ye=y, __ope=op, __N=null, __we=ww, __he=hh, __sce=sc;
      if (!__E.NOVIEWANIM) {
        const ax=(x===__x0)?viewerAnim(w,'x'):null, ay=(y===__y0)?viewerAnim(w,'y'):null, ao=(op===__op0)?viewerAnim(w,'opacity'):null, f=(k,b,an)=>`N ${k} ${b} ${an.from} ${an.to} ${an.t0} ${an.dur} ${an.mode} ${an.fam}`;
        if (ax) { __xe = x - (__axv-__bx); for (const an of ax) (__N=__N||[]).push(f(0,__bx,an)); }
        if (ay) { __ye = y - (__ayv-__by); for (const an of ay) (__N=__N||[]).push(f(1,__by,an)); }
        if (ao) { __ope = num(p.opacity,1); for (const an of ao) (__N=__N||[]).push(f(2,__ope,an)); }
        const aw=(ww===__w0)?viewerAnim(w,'width'):null, ah=(hh===__h0)?viewerAnim(w,'height'):null, as=(!/^Lock_/.test(p.name||''))?viewerAnim(w,'scale'):null;
        if (aw) { __we = ww - (__awv-__bw); for (const an of aw) (__N=__N||[]).push(f(3,__bw,an)); }
        if (ah) { __he = hh - (__ahv-__bh); for (const an of ah) (__N=__N||[]).push(f(4,__bh,an)); }
        if (as) { __sce = num(p.scale,1); for (const an of as) (__N=__N||[]).push(f(5,__sce,an)); }
      }
      lines.push(`W ${depth} ${__xe} ${__ye} ${__we} ${__he} ${((roundBtn||roundTag||roundPin)?0:col).toString(16).padStart(8,'0')} ${__ope} ${__sce}`);
      if (__N) for (const l of __N) lines.push(l);
      if (w.player && typeof w.player.name==='string') { const PA1=ABS[ABS.length-1]; __vidRect={x:PA1.x+x,y:PA1.y+y,w:ww,h:hh}; const mm=/(\d+)$/.exec(w.player.name); if (mm) { __vidRect.file='/dev/shm/gibbon_video_'+mm[1]+'.rgba'; { videoFade(); const al=__vfOn?Math.round(100*videoAlpha()):(videoFading()?Math.round(100*(1-(Date.now()-__vfOff)/700)):0); if (al>0) { if (__E.VIDLOG && Date.now()-(globalThis.__vl||0)>700) { globalThis.__vl=Date.now(); console.log('[vidrect]', JSON.stringify({x:Math.round(__vidRect.x),y:Math.round(__vidRect.y),w:Math.round(__vidRect.w),h:Math.round(__vidRect.h)}), 'ANC='+ANC.join('>').slice(-90), 'name='+(p.name||''), 'card='+JSON.stringify(card||null), 'ww,hh='+Math.round(ww)+','+Math.round(hh), 'ABS='+JSON.stringify(PA1)); } lines.push('M '+(__vfOn?__vidRect.file:__vidRect.file+'.last')+' '+((__pm&&__vfOn)?100:al)+((__pm||(globalThis.__vidProt&&globalThis.__vidProt[+mm[1]]))?' -1':'')); lines.push('K '+((!__pm && !(globalThis.__vidProt&&globalThis.__vidProt[+mm[1]]) && ((card && ww>=0.9*card.w && hh>=0.9*card.h) ? card.r*sceneScale() : (ANC.includes('WelcomeContentLandingHorizontalCardsViewContainer') && ww<0.9*1920) ? 16*sceneScale() : 0)) || 0)); } } } }
      if (roundBtn) lines.push(`R ${Math.min(ww,hh)/2} 0 00000000 ${col.toString(16).padStart(8,'0')} 0 0 0 0 1`);
      if (roundPin) lines.push(`R ${(p.name==='BorderBox'?8:4)*sceneScale()} 0 00000000 ${col.toString(16).padStart(8,'0')} 0 0 0 0 1`);
      if (roundTag) lines.push(`R ${4*sceneScale()} 0 00000000 ${col.toString(16).padStart(8,'0')} 0 0 0 0 1`);
      if (/^video-footer/.test(p.name||'')) btn=true;
      const inCards = ANC.includes('collection') || ANC.includes('collection-wrapper') || ANC.includes('listcontainer') || ANC.includes('seasonList');
      const ringBrowse = (ANC.includes('browse')||ANC.includes('gallery')||ANC.includes('browseAnimation')||ANC.includes('details')||ANC.includes('edpView')) && (p.name==='FocusRing'||ANC.includes('FocusRing')||/FocusRing/.test(p.name||''));
      if (!inCards && hh>150 && ww>150) { const cr0=findCardRadius(w, ww, hh); if (cr0) card={ r:cr0, w:ww, h:hh }; }
      if (/TallPanelBoxshot|PeekPanelBoxshot/.test(String(p.name||''))) card={ r:16, w:ww, h:hh };
      if (!inCards && card && !(num(p.cornerRadius,0)>0) && !w.__effect && (p.image||p.backgroundImage) && ww>=0.9*card.w && hh>=0.9*card.h) lines.push(`K ${card.r*sceneScale()}`);
      { let cr = p.cornerRadius; if (cr && typeof cr==='object') cr = Math.max(num(cr.topLeft,0),num(cr.topRight,0),num(cr.bottomLeft,0),num(cr.bottomRight,0)); if (typeof cr==='number' && cr>0 && !inCards) lines.push(`K ${cr*sceneScale()}`); }
      let kPush=0;
      if (p.clip === true) lines.push('C 1');
      const roundBtn2 = /^DynamicBorderImage/.test(p.name||'') && w.__pname==='editButton';
      const avRing = !roundBtn2 && ((ANC.some(n=>/profile/i.test(n)) && ww>=100 && Math.abs(ww-hh)<=40) || (ANC.some(n=>/focus-ring/i.test(n)) && ww>=30 && ww<=70 && Math.abs(ww-hh)<=4));
      if (w.__effect && w.__effect.name==='styled-rectangle') { const ep=w.__effect.params||{}; const hex=c=>packColor(c).toString(16).padStart(8,'0');
        const fill=ep.fill; let g=0, gl=''; let fc='00000000';
        if (fill && typeof fill==='object' && (fill.type==='linear'||fill.type==='radial')) { g=fill.type==='radial'?2:1; const st=fill.stops||[]; gl=` ${st.length} ` + st.map(s=>`${s[0]} ${hex(s[1])}`).join(' '); fc=hex(st[0]&&st[0][1]); } else fc=hex(fill);
        const rad=fill&&fill.type==='radial'; const b=rad?(fill.center||[0.5,0.5]):(fill&&fill.beginPosition||[0,0]), e2=rad?(fill.radius||[1,1]):(fill&&fill.endPosition||[0,1]);
        if (__E.RINGDBG) console.log('[ring ep]', p.name, 'anc='+ANC.slice(-4).join('>'), Math.round(ww)+'x'+Math.round(hh), 'rad='+ep.radius, 'sw='+ep.strokeWidth, 'browse='+ringBrowse, 'av='+avRing);
        const stdRing = !roundBtn2 && num(ep.strokeWidth,0)>=3 && !ANC.some(n=>/landing/i.test(n));
        lines.push(`R ${stdRing ? 0 : ringBrowse ? 0 : roundBtn2 ? Math.min(ww,hh)/2 : (avRing?0:num(ep.radius,0)*sceneScale())} ${stdRing ? 3.5 : ringBrowse ? 5 : Math.max(0,num(ep.strokeWidth,0)*sceneScale()-((!roundBtn2&&ANC.includes('profiles-list'))?2.5:0))} ${hex(ep.strokeColor)} ${fc} ${g} ${b[0]} ${b[1]} ${e2[0]} ${e2[1]}${gl}`);
        { const isRed = hex(ep.fill)==='e50914ff' || fc==='e50914ff'; const pill = num(ep.radius,0)*sceneScale()*2 >= hh-1; if (pill && hh>=80) lines.push(`J ${(hh-(+__E.BTN_H||64))/2}`); } }
      if (__E.LOGODBG) { const io=p.image||p.backgroundImage; const u=io&&io.url; const e=u&&imgCache.get(typeof u==='object'?u.url:u); if (e&&e.state==='ready'&&e.w>=150&&e.w<=700&&e.h<=400) { const par=w.__parent; console.log('[logodbg]', JSON.stringify({io:Object.assign({},io,{url:String(io.url).slice(-30)}),wk:Object.keys(w).filter(k=>!/^(__|children|id|_)/.test(k)).slice(0,30),name:p.name,img:[e.w,e.h],L:w.__L,pw:p.width,ph:p.height,x:p.x,y:p.y,sr:io.sourceRect,par:par&&{lay:par.layout,pw:par.__p&&par.__p.width,ph:par.__p&&par.__p.height,pad:par.padding,L:par.__L},ls:w.layoutStretch,minW:w.minWidth,minH:w.minHeight,maxW:w.maxWidth,maxH:w.maxHeight})); } }
      let dynRing=null; { const u0=p.image&&p.image.url; const us=typeof u0==='object'?(u0&&u0.url):u0; if (typeof us==='string' && /dynimoImage/.test(us) && /recipeType=StyledRectangle/.test(us)) { try{ const dp=JSON.parse(decodeURIComponent((/dynimoParams=([^&]+)/.exec(us)||[])[1]||'{}')); dynRing=JSON.parse(dp.effectParams||'{}'); }catch{} } }
      if (dynRing && __E.RINGDBG) console.log('[ring dyn]', p.name, 'anc='+ANC.slice(-4).join('>'), Math.round(ww)+'x'+Math.round(hh), 'rad='+dynRing.radius, 'sw='+dynRing.strokeWidth, 'browse='+ringBrowse, 'av='+avRing);
      if (dynRing) { const hx=c=>packColor(c).toString(16).padStart(8,'0'); const stdD = num(dynRing.strokeWidth,0)>=3 && !ANC.some(n=>/landing/i.test(n)); const rd=(stdD||ringBrowse)?0:(avRing?0:Math.max(num(dynRing.radius,0), 8)*sceneScale()); lines.push(`R ${rd} ${stdD?3.5:ringBrowse?5:Math.max(0,num(dynRing.strokeWidth,0)*sceneScale()-(ANC.includes('profiles-list')?2.5:0))} ${hx(dynRing.strokeColor)} ${hx(dynRing.fill)} 0 0 0 0 1`); }
      const lensOnlyBg = p.name==='HorizontalCardLensImage' && p.backgroundImage && p.image && (()=>{ const a=p.backgroundImage.url, b=p.image.url; return (typeof a==='object'?a&&a.url:a)===(typeof b==='object'?b&&b.url:b); })();
      for (const [obj, bg, wrapFade] of dynRing ? [] : (lensOnlyBg ? (lensPrev ? [[lensPrev,1],[p.backgroundImage,1,true]] : [[p.backgroundImage,1,lensImgOp!==null&&lensImgOp<0.999]]) : [[p.backgroundImage,1],[p.image,0]])) {
        if (wrapFade) { let kline=null; for (let q=lines.length-1;q>=0;q--) { if (lines[q].startsWith('W ')) break; if (lines[q].startsWith('K ')) { kline=lines[q]; break; } }
          lines.push(`W ${depth+1} 0 0 ${ww} ${hh} 00000000 ${lensImgOp} 1`); if (kline) lines.push(kline); else { const cr0=(typeof p.cornerRadius==='number')?p.cornerRadius:0; if (cr0>0) lines.push(`K ${cr0*sceneScale()}`); } } const url = obj && obj.url; if (typeof(url&&url.url||url)==='string' && /icon-placeholder/.test(url.url||url)) continue; const im = url && getImage(typeof url==='object' ? url.url : url); if (im) { if (__E.IMGDBG && im.w && im.h && ww>0 && hh>0 && Math.abs((ww/hh)/(im.w/im.h)-1)>(+__E.IMGTH||0.15) && !(globalThis.__imgdbg=globalThis.__imgdbg||new Set()).has(im.file)) { globalThis.__imgdbg.add(im.file); console.log('[imgdbg]', ww+'x'+hh, 'img', im.w+'x'+im.h, JSON.stringify(Object.assign({},obj,{url:undefined})), String(w.__p&&w.__p.name), String(typeof obj.url==='object'?obj.url.url:obj.url).slice(0,200)); } if (__E.VIGDBG && /Vignette/.test(String(p.name))) console.log('[vig]', p.name, 'ww,hh='+Math.round(ww)+','+Math.round(hh), 'img='+im.w+'x'+im.h, 'scale='+imgScale(obj), 'halign='+obj.halign, 'valign='+obj.valign, 'x='+Math.round(num(p.x,0)), String(typeof obj.url==='object'?obj.url.url:obj.url).slice(0,110)); const sr = obj.sourceRect; const uv = (sr && sr.width>0 && sr.height>0 && im.w && im.h) ? ` ${(sr.x||0)/im.w} ${(sr.y||0)/im.h} ${sr.width/im.w} ${sr.height/im.h}` : ''; const lsc=(w.__logoScale||1)*imgScale(obj); const nw=((sr&&sr.width>0)?sr.width:im.w)*lsc, nh=((sr&&sr.height>0)?sr.height:im.h)*lsc;
          if (nw>0 && nh>0 && obj.dynamicScale && ww>0 && hh>0) {
            const asp=ww/hh; let cw=nw, ch=nh; if (nw/nh>asp) cw=nh*asp; else ch=nw/asp;
            const ha=String(obj.halign||'center'), va=String(obj.valign||'center');
            const sx0=((sr&&sr.x)||0)+(nw-cw)*(ha==='left'?0:ha==='right'?1:0.5), sy0=((sr&&sr.y)||0)+(nh-ch)*(va==='top'?0:va==='bottom'?1:0.5);
            lines.push(`I ${fileOf(im)} ${bg} ${sx0/im.w} ${sy0/im.h} ${cw/im.w} ${ch/im.h}`);
          } else if (nw>0 && nh>0 && !(p.image&&p.image.dynamicScale&&obj!==p.image) && !(!obj.halign && !obj.valign && nw>ww+2 && Math.abs(nh-hh)<=2 && /Vignette/.test(String(p.name))) && ((obj.halign||obj.valign) || ((lsc>1) || (nw<ww-2 && Math.abs(nh-hh)<=2) || (nh<hh-2 && Math.abs(nw-ww)<=2)))) {
            const ha=String(obj.halign||'left'), va=String(obj.valign||'top');
            const sxh=/stretch/.test(ha)||(!obj.halign && /stretch/.test(va)), syv=/stretch/.test(va)||(!obj.valign && /stretch/.test(ha)), dw0=sxh?ww:nw, dh0=syv?hh:nh; const pdI=globalThis.__memberUI ? padOf(w) : { l:0, r:0, t:0, b:0 }, iw=ww-pdI.l-pdI.r, ih=hh-pdI.t-pdI.b; const fit=(globalThis.__memberUI && !sxh && !syv && iw>0 && ih>0 && (dw0>iw+1||dh0>ih+1)) ? Math.min(iw/dw0, ih/dh0) : 1, dw=dw0*fit, dh=dh0*fit;
            const ox=sxh?0:((ha==='center'||(p.name==='NetflixWordmark'&&dw>ww))?pdI.l+(iw-dw)/2:(ha==='right'?ww-pdI.r-dw:pdI.l)), oy=syv?0:(va==='center'?pdI.t+(ih-dh)/2:(va==='bottom'?hh-pdI.b-dh:pdI.t));
            lines.push(`W ${depth+1} ${ox} ${oy} ${dw} ${dh} 00000000 1 1`); if (kPush && Math.abs(dw-ww)<2 && Math.abs(dh-hh)<2) lines.push(`K ${kPush}`); lines.push(`I ${fileOf(im)} ${bg}${uv}`);
          } else lines.push(`I ${fileOf(im)} ${bg}${uv}`); } }
      for (const obj of [].concat(w.backgroundImages||[], w.images||[])) { const u0=obj && obj.url; const im = u0 && getImage(typeof u0==='object' ? u0.url : u0); if (im) {
        const sr=obj.sourceRect, uv2=(sr && sr.width>0 && sr.height>0 && im.w && im.h) ? ` ${(sr.x||0)/im.w} ${(sr.y||0)/im.h} ${sr.width/im.w} ${sr.height/im.h}` : '';
        if (obj.halign==='center' || obj.valign==='center') {
          const l2=imgScale(obj), nw2=((sr&&sr.width>0)?sr.width:im.w)*l2, nh2=((sr&&sr.height>0)?sr.height:im.h)*l2, ox2=obj.halign==='center'?(ww-nw2)/2:0, oy2=obj.valign==='center'?(hh-nh2)/2:0;
          lines.push(`W ${depth+1} ${ox2} ${oy2} ${nw2} ${nh2} 00000000 1 1`); lines.push(`I ${fileOf(im)} 0${uv2}`);
        } else lines.push(`I ${fileOf(im)} 0${uv2}`); } }
      const tp = textParams(w); if (tp) { const t = getText(tp); if (t) lines.push(`T ${t.file} 0`); }
      let kids=w.children||[]; if (kids.some(k=>k&&k.drawOrder)) kids=kids.map((k,i)=>[k,i]).sort((a,b)=>(num(a[0]&&a[0].drawOrder,0)-num(b[0]&&b[0].drawOrder,0))||(a[1]-b[1])).map(x=>x[0]);
      ANC.push(p.name||''); { const PA2=ABS[ABS.length-1]; ABS.push({x:PA2.x+x,y:PA2.y+y}); } for(const k of kids) if (k && typeof k==='object') { k.__pname=p.name; walk(k, depth+1, card, btn); } ABS.pop(); ANC.pop();
    } catch(e){ const m=String(e&&e.message); if(__E.SCENELOG) console.log('[serialize THROW]', m); else { globalThis.__serErr=globalThis.__serErr||new Set(); if(!globalThis.__serErr.has(m)){ globalThis.__serErr.add(m); console.log('[serialize THROW] (1a vez)', m); } } }
  })(root,0);
  if (!splashReadyLatch) { let n=0; for (const l of lines) if (l.charCodeAt(0)===73 || l.charCodeAt(0)===84) n++; if (n>=(/localcontrol\.netflix\.com\/js\/error\.js/.test(String(nrdpReal.gibbon.__loc||'')) ? 3 : 10)) splashReadyLatch=true; }
  lines.splice(1,0,'SPLASH '+((splashReadyLatch||__E.NOSPLASH)?1:0)+' '+process.pid);
  return lines.join('\n')+'\n';
}
let splashReadyLatch=false;
let __sk=0, __lastSc=''; function writeSceneAtomic(){ const tmp=SCENE_FILE+'.tmp'; const sc=serializeScene(); if (sc===__lastSc) { globalThis.__staticN=(globalThis.__staticN||0)+1; return; }     globalThis.__staticN=0; __lastSc=sc; fs.writeFileSync(tmp, sc); fs.renameSync(tmp, SCENE_FILE); if (__E.SCENEKEEP && (++__sk%150)===0) { try{ fs.writeFileSync(path.join(__E.SCENEKEEP,'scene_'+String(__sk/150).padStart(3,'0')+'.txt'), sc); }catch(e){} } }
const SCENE_FILE = __E.SCENE_FILE || path.join(require('os').tmpdir(), 'gibbon_scene.txt');
const KEYMAP = { up:{code:38,ui:'key.up'}, down:{code:40,ui:'key.down'}, left:{code:37,ui:'key.left'}, right:{code:39,ui:'key.right'},
  enter:{code:13,ui:'key.enter'}, back:{code:8,ui:'key.back'}, pageup:{code:33,ui:'key.page_up'}, pagedown:{code:34,ui:'key.page_down'},
  pause:{code:19,ui:'key.pause'}, search:{code:84,ui:'key.search'}, l1:{code:102,ui:'key.l1'}, r1:{code:103,ui:'key.r1'}, start:{code:108,ui:'key.start'} };
function dispatchKey(name, down, repeat){
  globalThis.__staticN = 0;
  const k = KEYMAP[name]; if (!k) return;
  const ev = { type:'key', time: Date.now(), data:{ code:k.code, type: down ? 'press' : 'release', uiEvent:k.ui, repeat: !!repeat, modifiers:[], text:'' } };
  if (__E.KEYLOG) console.log('[key]', name, down?'down':'up');
  for (const f of ((nrdpReal.gibbon.__evl||{}).key||[]).slice()) { try { f(ev); } catch(e){ console.log('[key listener THROW]', e&&e.stack||e); } }
}
let viewerProc = null;
process.on('exit', ()=>{ if (!globalThis.__restarting && viewerProc) { try{ process.kill(viewerProc.pid, 'SIGTERM'); }catch{} } });
function startViewer(){
  try { fs.writeFileSync(SCENE_FILE, serializeScene()); } catch(e){}
  const bin = path.resolve(__dirname, '../renderer/scene_viewer');
  if (!fs.existsSync(bin)) { console.log('[viewer] binario nao encontrado, compile port2/renderer/scene_viewer.c'); return; }
  const KEYFIFO = '/tmp/gibbon_keys_' + String(SCENE_FILE).replace(/[^A-Za-z0-9]/g,'_');
  try { if (!fs.existsSync(KEYFIFO)) cp.execFileSync('mkfifo', [KEYFIFO]); } catch(e){ console.log('[viewer] mkfifo falhou', e.message); }
  try {
    const LK = KEYFIFO + '.host'; let other = 0;
    try { other = +fs.readFileSync(LK, 'utf8'); } catch {}
    if (other && other !== process.pid) {
      let alive = false;
      try { alive = fs.readFileSync('/proc/' + other + '/comm', 'utf8').trim() === fs.readFileSync('/proc/self/comm', 'utf8').trim(); } catch {}
      if (alive) { console.log('[host] outra instancia ja controla a janela (pid ' + other + '); saindo'); globalThis.__restarting = true; process.exit(0); }
    }
    fs.writeFileSync(LK, String(process.pid));
  } catch {}
  const attachPid = +__E.VIEWER_PID || 0; let attached = false;
  if (attachPid) { try { process.kill(attachPid, 0); attached = true; } catch {} }
  if (attached) {
    viewerProc = { pid: attachPid, kill(sg){ try{ process.kill(attachPid, sg||'SIGTERM'); }catch{} } };
    console.log('[viewer] reaproveitando a janela existente (pid', attachPid + ')');
    const iv = setInterval(()=>{ try{ process.kill(attachPid, 0); }catch{ console.log('[viewer] janela fechada; encerrando runtime.'); process.exit(0); } }, 1000); iv.unref && 0;
  } else {
    viewerProc = cp.spawn('sh', ['-c', 'exec 3<>"$1"; shift; exec "$@" >&3', 'sh', KEYFIFO, bin, SCENE_FILE], { stdio:['ignore','ignore','inherit'], detached:true, env:Object.assign({}, process.env, { SPLASH_DIR: path.resolve(__dirname,'../cache/splash2') }) });
    viewerProc.on('exit', ()=>{ console.log('[viewer] janela fechada; encerrando runtime.'); process.exit(0); });
  }
  { let ib=''; const rs = fs.createReadStream(KEYFIFO, { flags:'r' }); rs.on('error', ()=>{}); rs.on('data', d=>{ ib+=d; let i; while((i=ib.indexOf('\n'))>=0){ const l=ib.slice(0,i); ib=ib.slice(i+1); const m=/^KEY (\S+) (\d) (\d)/.exec(l); if(m) dispatchKey(m[1], m[2]==='1', m[3]==='1'); else if(l) console.log('[viewer]', l); } }); }
  console.log('[viewer] janela aberta ->', SCENE_FILE);
  { let n=0, tot=0, last=Date.now(); let __tk=0; let __tk3=0; setInterval(()=>{ if (__vfOn && !(globalThis.__animN>0) && (__tk++ & 1)) return;
    if (!__vfOn && (globalThis.__staticN||0)>=10 && !(globalThis.__animN>0) && !__E.NOADAPTTICK && ((__tk3++%3)!==0)) return;         const t0=process.hrtime.bigint(); try{ writeSceneAtomic(); }catch(e){} if(__E.SERTIME){ tot+=Number(process.hrtime.bigint()-t0)/1e6; if(++n===120){ console.log('[sertime] media ms/tick', (tot/n).toFixed(2), 'tick/s', (n*1000/(Date.now()-last)).toFixed(1)); n=0; tot=0; last=Date.now(); } } }, Math.round(1000/(+__E.FPS||60))); }
}
if (__E.WINDOW==='1') setTimeout(startViewer, 2500);
if (__E.PROFEXIT) setTimeout(()=>{ if (__E.CALLERSTAT) console.log('[callerstat]', vm.runInContext('JSON.stringify({n:globalThis.__cn,skip:globalThis.__csk,by:globalThis.__csn})', context)); process.exit(0); }, +__E.PROFEXIT);
if (__E.KEYFILE) { let __kpos=0; setInterval(()=>{ try{ const t=fs.readFileSync(__E.KEYFILE,'utf8'); if (t.length>__kpos){ const ks=t.slice(__kpos).split('\n').filter(Boolean); __kpos=t.length; ks.forEach((k,i)=>setTimeout(()=>{ dispatchKey(k,true,false); setTimeout(()=>dispatchKey(k,false,false),80); }, i*400)); } }catch{} }, 300).unref(); }
if (__E.INJECT) for (const it of __E.INJECT.split(',')) { const [ms,name]=it.split(':'); setTimeout(()=>{ dispatchKey(name,true,false); setTimeout(()=>dispatchKey(name,false,false),+(__E.INJHOLD||80)); }, +ms); }
process.on('SIGUSR2', ()=>{ globalThis.__animLive = !globalThis.__animLive; if (globalThis.__animLive) { try{ fs.writeFileSync('/tmp/anim_live.log',''); }catch{} } console.log('[anim_live]', globalThis.__animLive?'ligado':'desligado'); });
process.on('SIGUSR1', ()=>{ try{ ensureLayout(); const out=[]; (function w(n,d,ax,ay){ const p=n.__p||{}; const L=n.__L; const x=L?L.x:num(p.x,0), y=L?L.y:num(p.y,0), ww=L?L.w:num(p.width,0), hh=L?L.h:num(p.height,0);
  const extra=Object.assign({}, p, {image:undefined, backgroundImage:undefined}, n.textStyle?{TS:n.textStyle}:{}, n.layout?{LAY:n.layout}:{}, n.flexLayout?{FLEX:n.flexLayout}:{}, rp(n,'padding')!==undefined?{PAD:rp(n,'padding')}:{}, rp(n,'layoutSpacing')!==undefined?{SP:rp(n,'layoutSpacing')}:{}, n.layoutStretch!==undefined?{ST:n.layoutStretch}:{});
  out.push(' '.repeat(d*2)+'#'+n.id+' '+(p.name||'')+' ['+Math.round(x)+','+Math.round(y)+' '+Math.round(ww)+'x'+Math.round(hh)+'] abs=('+Math.round(ax+x)+','+Math.round(ay+y)+')'+(p.visible===false?' HIDDEN':'')+' '+JSON.stringify(extra).slice(0,420));
  for(const k of n.children||[]) w(k,d+1,ax+x,ay+y); })(nrdpReal.gibbon.scene._widget,0,0,0); fs.writeFileSync('/tmp/live_tree.txt', out.join('\n')); console.log('[live_tree] gravado', out.length); }catch(e){ console.log('[live_tree] erro', e.message); } });
if (__E.EVALCTX) setTimeout(()=>{ try{ console.log('[evalctx]', String(vm.runInContext(__E.EVALCTX, context)).slice(0,2000)); }catch(e){ console.log('[evalctx] erro', e.message); } }, +(__E.EVALMS||60000));
if (__E.FEATLOG) setTimeout(()=>{ try{ const f=sandbox.__getFeatures&&sandbox.__getFeatures(); console.log('[features]', JSON.stringify(f)); }catch(e){ console.log('[features] erro', e.message); } }, +__E.FEATLOG);
if (__E.DUMPSCENE) setTimeout(()=>{ const t=serializeScene().split('\n'); console.log('[scene] nos='+(t.length-2), 'root?', !!nrdpReal.gibbon.scene._widget, 'nWidgets', nrdpReal.gibbon.__nWidgets); console.log(t.slice(0,40).join('\n')); if(__E.DUMPPROPS){ (function w(n,d){ console.log(' '.repeat(d*2)+'#'+n.id+' '+JSON.stringify(Object.assign({},n.__p,{image:undefined,backgroundImage:undefined},n.textStyle?{TS:n.textStyle}:{},n.layout?{LAY:n.layout}:{},n.padding?{PAD:n.padding}:{})).slice(0,500)); for(const k of n.children||[]) w(k,d+1); })(nrdpReal.gibbon.scene._widget,0); }
  if(__E.DUMPTREE){ (function w(n,d,ax,ay){ const p=n.__p||{}; const L=n.__L; const x=L?L.x:num(p.x,0), y=L?L.y:num(p.y,0), ww=L?L.w:num(p.width,0), hh=L?L.h:num(p.height,0); const a={}; for(const k in (n.__a||{})) a[k]=n.__a[k].to; console.log(' '.repeat(d*2)+'#'+n.id+' '+(p.name||'')+' ['+x+','+y+' '+ww+'x'+hh+'] abs=('+(ax+x)+','+(ay+y)+')'+(p.visible===false?' HIDDEN':'')+(p.opacity!==undefined?' op='+p.opacity:'')+(p.clip?' clip':'')+(p.cornerRadius?' cr='+JSON.stringify(p.cornerRadius):'')+(n.layout?' lay='+n.layout.layout+'/'+n.layout.align:'')+(n.layoutStretch!==undefined?' st='+n.layoutStretch:'')+(Object.keys(a).length?' anim='+JSON.stringify(a):'')+(p.color?' col='+JSON.stringify(p.color):'')+(p.backgroundImage&&p.backgroundImage.url?' bg='+String(typeof p.backgroundImage.url==='object'?p.backgroundImage.url.url:p.backgroundImage.url).slice(-40):'')+(n.__effect?' fx='+n.__effect.name:'')); for(const k of n.children||[]) w(k,d+1,ax+x,ay+y); })(nrdpReal.gibbon.scene._widget,0,0,0); }
  if(process.env.DUMPJSON){ const [f0,mss]=process.env.DUMPJSON.split('@'); for (const ms of String(mss||'60000').split(',')) setTimeout(()=>{ try{ layoutScene(nrdpReal.gibbon.scene._widget); const DT=(n)=>{ const p=n.__p||{}, L=n.__L; return {n:p.name,x:p.x,y:p.y,w:p.width,h:p.height,rx:L&&L.x,ry:L&&L.y,rw:L&&L.w,rh:L&&L.h,v:p.visible,op:p.opacity,sc:p.scale,ev:Object.keys(n.__ev||{}),lay:n.layout,pad:n.padding,mxw:n.maxWidth,mnw:n.minWidth,ls:n.layoutStretch,sp:n.layoutSpacing,wr:n.textStyle&&n.textStyle.wrap,ml:n.textStyle&&n.textStyle.maxLines,fk:n.focusKey,anim:n.__a?Object.keys(n.__a):undefined,t:(typeof p.text==='string'?p.text.slice(0,40):undefined),c:(n.children||[]).map(DT)}; }; const f=f0.replace(/\.json$/,'_'+ms+'.json'); fs.writeFileSync(f, JSON.stringify(DT(nrdpReal.gibbon.scene._widget))); console.log('[dumpjson] ok', f); }catch(e){ console.log('[dumpjson] erro', e&&e.message); } }, +ms); }
  if(process.env.DUMPEV){ const cnt={}; (function w(n){ for(const k of Object.keys(n.__ev||{})) { const c=(n.__ev[k]||[]).length; if(c) cnt[k]=(cnt[k]||[]).concat([((n.__p||{}).name||'#'+n.id)+'x'+c]); } for(const c of n.children||[]) w(c); })(nrdpReal.gibbon.scene._widget); for(const k in cnt) console.log('[ev]',k,cnt[k].length,cnt[k].slice(0,12).join(',')); console.log('[ev] global', Object.keys(nrdpReal.gibbon.__evl||{}).map(k=>k+':'+nrdpReal.gibbon.__evl[k].length).join(' ')); }
  if(process.env.DUMPOWN){ const ks=process.env.DUMPOWN.split(','); (function w(n,d){ for(const k of ks) if(n[k]!==undefined) console.log('[own]',k,JSON.stringify(n[k]),'name='+((n.__p||{}).name||''),'d='+d,'size='+((n.__L&&n.__L.w)||''),'x'+((n.__L&&n.__L.h)||''), 'kids='+(n.children||[]).length); for(const c of n.children||[]) w(c,d+1); })(nrdpReal.gibbon.scene._widget,0); }
  if(process.env.DUMPKEYS){ const cnt={}; (function w(n){ for(const k of Object.keys(n.__p||{})) cnt[k]=(cnt[k]||0)+1; for(const k of Object.keys(n)) if(!['id','__p','children','__parent','__ev','images','backgroundImages'].includes(k)) cnt['own:'+k]=(cnt['own:'+k]||0)+1; for(const k of n.children||[]) w(k); })(nrdpReal.gibbon.scene._widget); console.log('[keys]', JSON.stringify(cnt)); (function w(n,d){ const p=n.__p||{}; if(n.layout||n.padding||n.layoutStretch!==undefined) console.log('[lay] #'+n.id+' '+(p.name||'')+' '+JSON.stringify({layout:n.layout,sp:n.layoutSpacing,st:n.layoutStretch,pad:n.padding,w:p.width,h:p.height,minW:n.minWidth,minH:n.minHeight,x:p.x,y:p.y})); for(const k of n.children||[]) w(k,d+1); })(nrdpReal.gibbon.scene._widget,0); }
  if(process.env.DUMPLOGO){ (function w(n){ if((n.__p||{}).name==='Logo'){ const o={}; for(const k of Object.keys(n)) if(!['children','__p','__parent','__ev','__tvuiInternalsCache'].includes(k)) { try{o[k]=n[k];}catch{} } console.log('[logo own]', JSON.stringify(o).slice(0,800)); console.log('[logo p]', JSON.stringify(n.__p).slice(0,900)); } for(const k of n.children||[]) w(k); })(nrdpReal.gibbon.scene._widget); }
  if(process.env.DUMPTEXT){ (function w(n,ax,ay,vis){ const p=n.__p||{}; ax+=num(p.x,0); ay+=num(p.y,0); vis=vis&&p.visible!==false; if(typeof p.text==='string') console.log('[text] #'+n.id+' "'+p.text+'" abs=('+ax+','+ay+') size='+p.width+'x'+p.height+' vis='+vis+' op='+p.opacity); for(const k of n.children||[]) w(k,ax,ay,vis); })(nrdpReal.gibbon.scene._widget,0,0,true); }
  if(process.env.DUMPMEDIA){ (function w(n){ const p=n.__p||{}; const im=p.image&&p.image.url, bg=p.backgroundImage&&p.backgroundImage.url; if(im||bg||p.text) console.log('[media] #'+n.id+' '+(p.name||'')+' img='+JSON.stringify(im)+' bg='+JSON.stringify(bg)+' imgs='+JSON.stringify((n.images||[]).map(i=>i.url))+' bgimgs='+JSON.stringify((n.backgroundImages||[]).map(i=>i.url))+' text='+JSON.stringify(p.text)+' style='+JSON.stringify({font:p.font,fontSize:p.fontSize,textStyle:n.textStyle,color:p.color,fontColor:p.fontColor,textColor:p.textColor,ww:p.width,hh:p.height})); for(const k of n.children||[]) w(k); })(nrdpReal.gibbon.scene._widget); } }, +process.env.DUMPSCENE);

const REPORT_MS = parseInt(process.env.REPORT_MS||'3000',10);
setTimeout(()=>{
  console.log('\n[host] makeWidget chamado: '+(nrdpReal.gibbon.__nWidgets||0)+' vez(es)');
  const miss2=[...missing.entries()].sort((a,b)=>b[1]-a[1]);
  console.log('\n===== nrdp NAO implementado que a UI tocou (= fila de trabalho) =====');
  for(const [p,c] of miss2.slice(0,50)) console.log(`  ${String(c).padStart(4)}  ${p}`);
  console.log(`\n[host] total faltando: ${miss2.length}`);
  if(err){
    console.log('\n[host] erro na fase sincrona:');
    console.log('  '+(err.stack||err.message).split('\n').slice(0,5).join('\n  '));
  } else console.log('\n[host] fase sincrona OK; boot assincrono rodou '+'(ver faltas acima).');
}, REPORT_MS);
