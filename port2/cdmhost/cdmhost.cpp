#include "include/content_decryption_module.h"
#include <dlfcn.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <vector>
#include <map>
#include <deque>
#include <mutex>
#include <condition_variable>
#include <thread>
#include <chrono>
#include <functional>
#include <algorithm>

typedef std::vector<uint8_t> Bytes;
#define LOG(...) do { fprintf(stderr, "[cdm] " __VA_ARGS__); fputc('\n', stderr); fflush(stderr); } while (0)

static const char* SOCK_PATH = "/tmp/gibbon-cdm.sock";
static const char* PROV_URL = "https://www.googleapis.com/certificateprovisioning/v1/devicecertificates/create?key=AIzaSyB-5OLKTx2iU5mko18DfdwK5611JIjbUhE";
static std::string g_store_dir;

static cdm::ContentDecryptionModule_10* g_cdm = nullptr;
static std::mutex g_cdm_mx;
static std::mutex g_st_mx;
static std::condition_variable g_cv;
struct Prom { bool done = false, ok = false; std::string sid, err; };
static std::map<uint32_t, Prom> g_proms;
static uint32_t g_next_prom = 1;
struct Msg { uint32_t type; Bytes data; };
static std::map<std::string, std::deque<Msg>> g_msgs;
static bool g_init_done = false, g_init_ok = false;
static std::map<std::string, std::string> g_keystatus;

struct Timer { std::chrono::steady_clock::time_point due; void* ctx; };
static std::mutex g_tm_mx;
static std::condition_variable g_tm_cv;
static std::vector<Timer> g_timers;
static std::deque<std::function<void()>> g_tasks;
static void post_task(std::function<void()> f) { { std::lock_guard<std::mutex> l(g_tm_mx); g_tasks.push_back(std::move(f)); } g_tm_cv.notify_all(); }
static void timer_thread() {
    for (;;) {
        std::function<void()> task; void* tctx = nullptr; bool have_t = false;
        {
            std::unique_lock<std::mutex> l(g_tm_mx);
            for (;;) {
                if (!g_tasks.empty()) { task = std::move(g_tasks.front()); g_tasks.pop_front(); break; }
                auto now = std::chrono::steady_clock::now();
                auto it = std::min_element(g_timers.begin(), g_timers.end(), [](const Timer& a, const Timer& b) { return a.due < b.due; });
                if (it != g_timers.end() && it->due <= now) { tctx = it->ctx; have_t = true; g_timers.erase(it); break; }
                if (it == g_timers.end()) g_tm_cv.wait(l); else g_tm_cv.wait_until(l, it->due);
            }
        }
        std::lock_guard<std::mutex> cl(g_cdm_mx);
        if (task) task();
        else if (have_t && g_cdm) g_cdm->TimerExpired(tctx);
    }
}

class HBuffer : public cdm::Buffer {
 public:
    explicit HBuffer(uint32_t cap) : d_(cap ? cap : 1), size_(0), cap_(cap) {}
    void Destroy() override { delete this; }
    uint32_t Capacity() const override { return cap_; }
    uint8_t* Data() override { return d_.data(); }
    void SetSize(uint32_t s) override { size_ = s; }
    uint32_t Size() const override { return size_; }
 private:
    ~HBuffer() override {}
    Bytes d_; uint32_t size_, cap_;
};
class HDecrypted : public cdm::DecryptedBlock {
 public:
    HDecrypted() : buf_(nullptr), ts_(0) {}
    ~HDecrypted() override { if (buf_) buf_->Destroy(); }
    void SetDecryptedBuffer(cdm::Buffer* b) override { buf_ = b; }
    cdm::Buffer* DecryptedBuffer() override { return buf_; }
    void SetTimestamp(int64_t t) override { ts_ = t; }
    int64_t Timestamp() const override { return ts_; }
 private:
    cdm::Buffer* buf_; int64_t ts_;
};
static std::string sanitize(const std::string& n) { std::string o; for (char c : n) o += (isalnum((unsigned char)c) || c == '.' || c == '_' || c == '-') ? c : '_'; return o; }
static Bytes read_file(const std::string& path);
class HFileIO : public cdm::FileIO {
 public:
    explicit HFileIO(cdm::FileIOClient* c) : client_(c) {}
    void Open(const char* name, uint32_t n) override {
        path_ = g_store_dir + "/" + sanitize(std::string(name, n)); LOG("FileIO open %s", path_.c_str());
        post_task([this]() { client_->OnOpenComplete(cdm::FileIOClient::Status::kSuccess); });
    }
    void Read() override {
        post_task([this]() {
            Bytes b; FILE* f = fopen(path_.c_str(), "rb"); LOG("FileIO read %s -> %s", path_.c_str(), f ? "existe" : "vazio");
            if (f) { uint8_t t[4096]; size_t k; while ((k = fread(t, 1, sizeof t, f)) > 0) b.insert(b.end(), t, t + k); fclose(f); }
            client_->OnReadComplete(cdm::FileIOClient::Status::kSuccess, b.data(), (uint32_t)b.size());
        });
    }
    void Write(const uint8_t* data, uint32_t n) override {
        Bytes copy(data, data + n); LOG("FileIO write %s %u bytes", path_.c_str(), n);
        post_task([this, copy]() {
            std::string tmp = path_ + ".tmp"; FILE* f = fopen(tmp.c_str(), "wb"); bool ok = false;
            if (f) { ok = fwrite(copy.data(), 1, copy.size(), f) == copy.size(); fclose(f); if (ok) ok = rename(tmp.c_str(), path_.c_str()) == 0; }
            client_->OnWriteComplete(ok ? cdm::FileIOClient::Status::kSuccess : cdm::FileIOClient::Status::kError);
        });
    }
    void Close() override { post_task([this]() { delete this; }); }
 private:
    ~HFileIO() override {}
    cdm::FileIOClient* client_; std::string path_;
};

class Host : public cdm::Host_10 {
 public:
    cdm::Buffer* Allocate(uint32_t cap) override { return new HBuffer(cap); }
    void SetTimer(int64_t delay_ms, void* ctx) override {
        { std::lock_guard<std::mutex> l(g_tm_mx); g_timers.push_back({ std::chrono::steady_clock::now() + std::chrono::milliseconds(delay_ms), ctx }); }
        g_tm_cv.notify_all();
    }
    cdm::Time GetCurrentWallTime() override { return (double)std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::system_clock::now().time_since_epoch()).count() / 1000.0; }
    void OnInitialized(bool ok) override { std::lock_guard<std::mutex> l(g_st_mx); g_init_done = true; g_init_ok = ok; g_cv.notify_all(); }
    void OnResolveKeyStatusPromise(uint32_t id, cdm::KeyStatus) override { resolve(id, ""); }
    void OnResolveNewSessionPromise(uint32_t id, const char* sid, uint32_t n) override { resolve(id, sid ? std::string(sid, n) : std::string()); }
    void OnResolvePromise(uint32_t id) override { resolve(id, ""); }
    void OnRejectPromise(uint32_t id, cdm::Exception ex, uint32_t sys, const char* msg, uint32_t n) override {
        std::lock_guard<std::mutex> l(g_st_mx); Prom& p = g_proms[id]; p.done = true; p.ok = false;
        p.err = "exception " + std::to_string((int)ex) + " sys " + std::to_string(sys) + ": " + std::string(msg ? msg : "", msg ? n : 0); g_cv.notify_all();
    }
    void OnSessionMessage(const char* sid, uint32_t sn, cdm::MessageType t, const char* m, uint32_t mn) override {
        LOG("OnSessionMessage tipo=%d %uB sid=%.*s", (int)t, mn, (int)sn, sid);
        std::lock_guard<std::mutex> l(g_st_mx); g_msgs[std::string(sid, sn)].push_back({ (uint32_t)t, Bytes((const uint8_t*)m, (const uint8_t*)m + mn) }); g_cv.notify_all();
    }
    void OnSessionKeysChange(const char* sid, uint32_t sn, bool, const cdm::KeyInformation* ki, uint32_t n) override {
        std::string s; for (uint32_t i = 0; i < n; i++) { char kh[80] = {0}; for (uint32_t q = 0; q < ki[i].key_id_size && q < 16; q++) snprintf(kh + q * 2, 3, "%02x", ki[i].key_id[q]); s += std::string(kh) + ":" + std::to_string((int)ki[i].status) + "/sys" + std::to_string(ki[i].system_code) + " "; }
        std::lock_guard<std::mutex> l(g_st_mx); g_keystatus[std::string(sid, sn)] = s; LOG("keys change sid=%.*s n=%u status=%s", (int)sn, sid, n, s.c_str()); g_cv.notify_all();
    }
    void OnExpirationChange(const char* sid, uint32_t sn, cdm::Time t) override { LOG("OnExpirationChange sid=%.*s t=%.0f", (int)sn, sid, t); }
    void OnSessionClosed(const char*, uint32_t) override {}
    void SendPlatformChallenge(const char*, uint32_t, const char*, uint32_t) override {}
    void EnableOutputProtection(uint32_t) override {}
    void QueryOutputProtectionStatus() override {

        const char* m = getenv("CDM_OPS"); std::string mode = m ? m : "none"; LOG("CDM consulta protecao de saida (modo %s)", mode.c_str());
        post_task([mode]() {
            if (!g_cdm) return;
            if (mode == "hdmi") g_cdm->OnQueryOutputProtectionStatus(cdm::kQuerySucceeded, cdm::kLinkTypeHDMI, cdm::kProtectionHDCP);
            else if (mode == "failed") g_cdm->OnQueryOutputProtectionStatus(cdm::kQueryFailed, 0, 0);
            else g_cdm->OnQueryOutputProtectionStatus(cdm::kQuerySucceeded, 0, 0);
        });
    }

    void OnDeferredInitializationDone(cdm::StreamType, cdm::Status) override {}
    cdm::FileIO* CreateFileIO(cdm::FileIOClient* c) override { return new HFileIO(c); }
    void RequestStorageId(uint32_t v) override {

        Bytes id = read_file(g_store_dir + "/.storage_id");
        if (id.size() != 32) { id.resize(32); FILE* r = fopen("/dev/urandom", "rb"); if (r) { if (fread(id.data(), 1, 32, r) != 32) {} fclose(r); } FILE* w = fopen((g_store_dir + "/.storage_id").c_str(), "wb"); if (w) { fwrite(id.data(), 1, 32, w); fclose(w); } }
        LOG("RequestStorageId v=%u -> 32B", v);
        post_task([v, id]() { if (g_cdm) g_cdm->OnStorageId(v, id.data(), (uint32_t)id.size()); });
    }
 private:
    void resolve(uint32_t id, const std::string& sid) { std::lock_guard<std::mutex> l(g_st_mx); Prom& p = g_proms[id]; p.done = true; p.ok = true; p.sid = sid; g_cv.notify_all(); }
};
static Host g_host;
static void* get_host(int ver, void*) { return ver == 10 ? (void*)static_cast<cdm::Host_10*>(&g_host) : nullptr; }

static uint32_t new_promise() { std::lock_guard<std::mutex> l(g_st_mx); uint32_t id = g_next_prom++; g_proms[id] = Prom(); return id; }
static bool wait_promise(uint32_t id, Prom& out, int ms = 30000) {
    std::unique_lock<std::mutex> l(g_st_mx);
    if (!g_cv.wait_for(l, std::chrono::milliseconds(ms), [&] { return g_proms[id].done; })) return false;
    out = g_proms[id]; g_proms.erase(id); return true;
}
static bool wait_msg(const std::string& sid, Msg& out, int ms = 30000) {
    std::unique_lock<std::mutex> l(g_st_mx);
    if (!g_cv.wait_for(l, std::chrono::milliseconds(ms), [&] { return !g_msgs[sid].empty(); })) return false;
    out = g_msgs[sid].front(); g_msgs[sid].pop_front(); return true;
}

static std::string urlencode(const Bytes& s) { static const char* h = "0123456789ABCDEF"; std::string o;
    for (uint8_t c : s) { if (isalnum(c) || c == '-' || c == '_' || c == '.' || c == '~') o += (char)c; else { o += '%'; o += h[c >> 4]; o += h[c & 15]; } } return o; }
static bool http_post(const std::string& url, const std::string& tmpfile) {
    pid_t p = fork(); if (p < 0) return false;
    if (p == 0) { const char* av[] = { "curl", "-s", "-m", "40", "-X", "POST", "-A", "Widevine CDM v1.0", url.c_str(), "-o", tmpfile.c_str(), nullptr }; execvp("curl", (char* const*)av); _exit(127); }
    int st = 0; waitpid(p, &st, 0); return WIFEXITED(st) && WEXITSTATUS(st) == 0;
}
static Bytes read_file(const std::string& path) { Bytes v; FILE* f = fopen(path.c_str(), "rb"); if (!f) return v; uint8_t t[8192]; size_t k; while ((k = fread(t, 1, sizeof t, f)) > 0) v.insert(v.end(), t, t + k); fclose(f); return v; }

static bool cdm_update(const std::string& sid, const Bytes& resp, std::string& err) {
    uint32_t id = new_promise();
    { std::lock_guard<std::mutex> l(g_cdm_mx); g_cdm->UpdateSession(id, sid.data(), (uint32_t)sid.size(), resp.data(), (uint32_t)resp.size()); }
    Prom p; if (!wait_promise(id, p)) { err = "timeout UpdateSession"; return false; } if (!p.ok) { err = p.err; return false; } return true;
}

static bool create_session(uint32_t init_type, const Bytes& init, std::string& sid, Msg& license_msg, std::string& err) {
    uint32_t id = new_promise();
    { std::lock_guard<std::mutex> l(g_cdm_mx); g_cdm->CreateSessionAndGenerateRequest(id, cdm::kTemporary, (cdm::InitDataType)init_type, init.data(), (uint32_t)init.size()); }
    Prom p; if (!wait_promise(id, p)) { err = "timeout CreateSession"; return false; } if (!p.ok) { err = p.err; return false; }
    sid = p.sid;
    for (int round = 0; round < 4; round++) {
        Msg m; if (!wait_msg(sid, m)) { err = "timeout aguardando mensagem da sessao"; return false; }
        LOG("mensagem tipo=%u %zuB", m.type, m.data.size());
        if (m.type == cdm::kIndividualizationRequest) {
            LOG("individualizacao (provisioning) -> Google");
            std::string tmp = g_store_dir + "/prov_resp.bin"; std::string url = std::string(PROV_URL) + "&signedRequest=" + urlencode(m.data);
            if (!http_post(url, tmp)) { err = "falha HTTP no provisioning"; return false; }
            Bytes resp = read_file(tmp); LOG("resposta de provisioning %zuB", resp.size());
            std::string e; if (!cdm_update(sid, resp, e)) { err = "provisioning rejeitado: " + e; return false; }
            continue;
        }
        license_msg = m; return true;
    }
    err = "sem mensagem de licenca"; return false;
}

static inline uint32_t rd32(const uint8_t* p) { return (p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]; }
static inline uint64_t rd64(const uint8_t* p) { return ((uint64_t)rd32(p) << 32) | rd32(p + 4); }
struct Box { size_t off, size, hdr; char type[5]; };
static bool next_box(const Bytes& b, size_t pos, size_t end, Box& x) {
    if (pos + 8 > end) return false; uint64_t sz = rd32(&b[pos]); size_t hdr = 8; memcpy(x.type, &b[pos + 4], 4); x.type[4] = 0;
    if (sz == 1) { if (pos + 16 > end) return false; sz = rd64(&b[pos + 8]); hdr = 16; } else if (sz == 0) sz = end - pos;
    if (sz < hdr || pos + sz > end) return false; x.off = pos; x.size = sz; x.hdr = hdr; return true;
}
static bool find_child(const Bytes& b, const Box& parent, const char* type, Box& out, size_t skip = 0) {
    size_t pos = parent.off + parent.hdr + skip, end = parent.off + parent.size; Box x;
    while (next_box(b, pos, end, x)) { if (!strcmp(x.type, type)) { out = x; return true; } pos = x.off + x.size; } return false;
}
struct Track {
    uint32_t scheme = 0;
    uint8_t kid[16] = {0}; uint8_t iv_size = 8; uint8_t crypt = 0, skip = 0; Bytes const_iv; bool protected_ = false;
    bool video = false; int w = 0, h = 0; Bytes avcc; uint8_t profile_idc = 100;
};
static std::map<std::string, Track> g_tracks;
static std::mutex g_trk_mx;

static bool process_init(Bytes& b, Track& t) {
    Box moov; size_t end = b.size(); size_t pos = 0; Box x; bool have = false;
    while (next_box(b, pos, end, x)) { if (!strcmp(x.type, "moov")) { moov = x; have = true; break; } pos = x.off + x.size; }
    if (!have) return false;
    size_t tpos = moov.off + moov.hdr, tend = moov.off + moov.size; Box trak;
    while (next_box(b, tpos, tend, trak)) {
        if (!strcmp(trak.type, "trak")) {
            Box mdia, minf, stbl, stsd;
            if (find_child(b, trak, "mdia", mdia) && find_child(b, mdia, "minf", minf) && find_child(b, minf, "stbl", stbl) && find_child(b, stbl, "stsd", stsd)) {
                size_t epos = stsd.off + stsd.hdr + 8, eend = stsd.off + stsd.size; Box ent;
                while (next_box(b, epos, eend, ent)) {
                    if (!strcmp(ent.type, "encv") || !strcmp(ent.type, "enca")) {

                        size_t fields = !strcmp(ent.type, "encv") ? 78 : 28; size_t cpos = ent.off + ent.hdr + fields, cend = ent.off + ent.size; Box sinf;
                        if (!strcmp(ent.type, "encv")) {
                            t.video = true; const uint8_t* vp = &b[ent.off + ent.hdr]; t.w = (vp[24] << 8) | vp[25]; t.h = (vp[26] << 8) | vp[27];
                            size_t q = cpos; Box cb; while (next_box(b, q, cend, cb)) { if (!strcmp(cb.type, "avcC")) { t.avcc.assign(b.begin() + cb.off + cb.hdr, b.begin() + cb.off + cb.size); if (t.avcc.size() > 1) t.profile_idc = t.avcc[1]; } q = cb.off + cb.size; }
                        }
                        while (next_box(b, cpos, cend, sinf)) {
                            if (!strcmp(sinf.type, "sinf")) {
                                Box frma, schm, schi, tenc;
                                if (find_child(b, sinf, "frma", frma)) memcpy(&b[ent.off + 4], &b[frma.off + frma.hdr], 4);
                                if (find_child(b, sinf, "schm", schm)) t.scheme = rd32(&b[schm.off + schm.hdr + 4]);
                                if (find_child(b, sinf, "schi", schi) && find_child(b, schi, "tenc", tenc)) {
                                    const uint8_t* p = &b[tenc.off + tenc.hdr]; uint8_t ver = p[0];
                                    if (ver >= 1) { t.crypt = p[5] >> 4; t.skip = p[5] & 15; }
                                    t.protected_ = p[6]; t.iv_size = p[7]; memcpy(t.kid, p + 8, 16);
                                    if (t.protected_ && t.iv_size == 0) { uint8_t n = p[24]; t.const_iv.assign(p + 25, p + 25 + n); }
                                }
                                memcpy(&b[sinf.off + 4], "free", 4);
                            }
                            cpos = sinf.off + sinf.size;
                        }
                    }
                    epos = ent.off + ent.size;
                }
            }
        }
        tpos = trak.off + trak.size;
    }
    return true;
}

class HVideoFrame : public cdm::VideoFrame {
 public:
    HVideoFrame() : fmt_(cdm::kUnknownVideoFormat), buf_(nullptr), ts_(0) { sz_.width = sz_.height = 0; for (int i = 0; i < 3; i++) off_[i] = stride_[i] = 0; }
    ~HVideoFrame() override { if (buf_) buf_->Destroy(); }
    void SetFormat(cdm::VideoFormat f) override { fmt_ = f; } cdm::VideoFormat Format() const override { return fmt_; }
    void SetSize(cdm::Size s) override { sz_ = s; } cdm::Size Size() const override { return sz_; }
    void SetFrameBuffer(cdm::Buffer* b) override { if (buf_ && buf_ != b) buf_->Destroy(); buf_ = b; } cdm::Buffer* FrameBuffer() override { return buf_; }
    void SetPlaneOffset(cdm::VideoPlane p, uint32_t o) override { off_[(int)p] = o; } uint32_t PlaneOffset(cdm::VideoPlane p) override { return off_[(int)p]; }
    void SetStride(cdm::VideoPlane p, uint32_t s) override { stride_[(int)p] = s; } uint32_t Stride(cdm::VideoPlane p) override { return stride_[(int)p]; }
    void SetTimestamp(int64_t t) override { ts_ = t; } int64_t Timestamp() const override { return ts_; }
    cdm::VideoFormat fmt_; cdm::Size sz_; cdm::Buffer* buf_; int64_t ts_; uint32_t off_[3], stride_[3];
};

static void append_i420(HVideoFrame& f, Bytes& out) {
    cdm::Buffer* b = f.FrameBuffer(); if (!b) return; int w = f.Size().width, h = f.Size().height; if (w <= 0 || h <= 0) return;
    int cw = (w + 1) / 2, ch = (h + 1) / 2; size_t base = out.size();
    uint8_t hd[8] = { (uint8_t)(w >> 24), (uint8_t)(w >> 16), (uint8_t)(w >> 8), (uint8_t)w, (uint8_t)(h >> 24), (uint8_t)(h >> 16), (uint8_t)(h >> 8), (uint8_t)h };
    out.insert(out.end(), hd, hd + 8);
    auto plane = [&](cdm::VideoPlane p, int pw, int ph) { for (int y = 0; y < ph; y++) { const uint8_t* src = b->Data() + f.PlaneOffset(p) + (size_t)y * f.Stride(p); out.insert(out.end(), src, src + pw); } };
    bool yv12 = f.Format() == cdm::kYv12;
    plane(cdm::kYPlane, w, h); plane(yv12 ? cdm::kVPlane : cdm::kUPlane, cw, ch); plane(yv12 ? cdm::kUPlane : cdm::kVPlane, cw, ch); (void)base;
}
static Bytes g_annexb_extra;
static bool vdec_init(const Track& t, std::string& err) {
    if (!t.video || t.avcc.empty()) { err = "sem avcC"; return false; }
    cdm::VideoDecoderConfig_2 c; memset(&c, 0, sizeof c);
    c.codec = cdm::kCodecH264;

    c.profile = cdm::kUnknownVideoCodecProfile;
    c.format = cdm::kYv12; c.coded_size.width = t.w; c.coded_size.height = t.h;

    Bytes& ann = g_annexb_extra; ann.clear();
    { const Bytes& a = t.avcc; size_t p = 5; if (a.size() > 6) { int ns = a[p++] & 31; for (int i = 0; i < ns && p + 2 <= a.size(); i++) { size_t l = (a[p] << 8) | a[p + 1]; p += 2; if (p + l > a.size()) break; ann.insert(ann.end(), { 0, 0, 0, 1 }); ann.insert(ann.end(), a.begin() + p, a.begin() + p + l); p += l; }
        if (p < a.size()) { int np = a[p++]; for (int i = 0; i < np && p + 2 <= a.size(); i++) { size_t l = (a[p] << 8) | a[p + 1]; p += 2; if (p + l > a.size()) break; ann.insert(ann.end(), { 0, 0, 0, 1 }); ann.insert(ann.end(), a.begin() + p, a.begin() + p + l); p += l; } } } }
    c.extra_data = ann.data(); c.extra_data_size = (uint32_t)ann.size();
    c.encryption_scheme = (t.scheme == 0x63626373) ? cdm::EncryptionScheme::kCbcs : cdm::EncryptionScheme::kCenc;
    std::lock_guard<std::mutex> l(g_cdm_mx);
    g_cdm->DeinitializeDecoder(cdm::kStreamTypeVideo);
    cdm::Status st = g_cdm->InitializeVideoDecoder(c);
    LOG("InitializeVideoDecoder %dx%d profile=%u status=%d", t.w, t.h, (unsigned)t.profile_idc, (int)st);
    if (st != cdm::kSuccess) { err = "InitializeVideoDecoder status " + std::to_string((int)st); return false; }
    return true;
}
struct SampleEnc { Bytes iv; std::vector<cdm::SubsampleEntry> subs; };
struct VRange { size_t from = 0, maxn = (size_t)-1, next = 0; bool partial = false; };
static bool decrypt_segment(const Track& t, Bytes& seg, std::string& err, Bytes* frames = nullptr, VRange* vr = nullptr) {
    size_t gi = 0;
    size_t pos = 0; Box mf; int done = 0;
    while (next_box(seg, pos, seg.size(), mf)) {
        if (strcmp(mf.type, "moof")) { pos = mf.off + mf.size; continue; }
        size_t moof_off = mf.off; Box traf; size_t tpos = mf.off + mf.hdr, tend = mf.off + mf.size;
        while (next_box(seg, tpos, tend, traf)) {
            if (!strcmp(traf.type, "traf")) {
                Box tfhd, trun, senc, saiz, saio;
                if (!find_child(seg, traf, "tfhd", tfhd) || !find_child(seg, traf, "trun", trun)) { tpos = traf.off + traf.size; continue; }

                const uint8_t* th = &seg[tfhd.off + tfhd.hdr]; uint32_t tf = rd32(th) & 0xffffff; size_t o = 8; uint64_t base_off = moof_off; uint32_t def_size = 0;
                if (tf & 1) { base_off = rd64(th + o); o += 8; } if (tf & 2) o += 4; if (tf & 8) o += 4; if (tf & 0x10) { def_size = rd32(th + o); o += 4; } if (tf & 0x20) o += 4;

                const uint8_t* tr = &seg[trun.off + trun.hdr]; uint32_t rf = rd32(tr) & 0xffffff; uint32_t cnt = rd32(tr + 4); size_t ro = 8; int32_t data_off = 0;
                if (rf & 1) { data_off = (int32_t)rd32(tr + ro); ro += 4; } if (rf & 4) ro += 4;
                std::vector<uint32_t> sizes(cnt);
                for (uint32_t i = 0; i < cnt; i++) { if (rf & 0x100) ro += 4; if (rf & 0x200) { sizes[i] = rd32(tr + ro); ro += 4; } else sizes[i] = def_size; if (rf & 0x400) ro += 4; if (rf & 0x800) ro += 4; }

                std::vector<SampleEnc> encs(cnt);
                bool have_senc = find_child(seg, traf, "senc", senc);
                if (have_senc) {
                    const uint8_t* s = &seg[senc.off + senc.hdr]; uint32_t sf = rd32(s) & 0xffffff; uint32_t n = rd32(s + 4); size_t so = 8; bool use_sub = sf & 2;
                    for (uint32_t i = 0; i < n && i < cnt; i++) {
                        if (t.iv_size) { encs[i].iv.assign(s + so, s + so + t.iv_size); so += t.iv_size; }
                        if (use_sub) { uint16_t sc = (s[so] << 8) | s[so + 1]; so += 2; for (uint16_t k = 0; k < sc; k++) { cdm::SubsampleEntry e; e.clear_bytes = (s[so] << 8) | s[so + 1]; e.cipher_bytes = rd32(s + so + 2); so += 6; encs[i].subs.push_back(e); } }
                    }
                    memcpy(&seg[senc.off + 4], "free", 4);
                } else if (find_child(seg, traf, "saiz", saiz) && find_child(seg, traf, "saio", saio)) {
                    const uint8_t* zi = &seg[saiz.off + saiz.hdr]; uint32_t zf = rd32(zi) & 0xffffff; size_t zo = 4; if (zf & 1) zo += 8; uint8_t def = zi[zo]; uint32_t zc = rd32(zi + zo + 1); const uint8_t* per = zi + zo + 5;
                    const uint8_t* oi = &seg[saio.off + saio.hdr]; uint8_t ov = oi[0]; uint32_t of = rd32(oi) & 0xffffff; size_t oo = 4; if (of & 1) oo += 8; uint32_t oc = rd32(oi + oo); oo += 4;
                    uint64_t aux = ov ? rd64(oi + oo) : rd32(oi + oo); size_t so = moof_off + aux; (void)oc;
                    for (uint32_t i = 0; i < zc && i < cnt; i++) {
                        uint32_t isz = def ? def : per[i]; size_t start = so;
                        if (t.iv_size) { encs[i].iv.assign(&seg[so], &seg[so] + t.iv_size); so += t.iv_size; }
                        if (isz > (uint32_t)t.iv_size) { uint16_t sc = (seg[so] << 8) | seg[so + 1]; so += 2; for (uint16_t k = 0; k < sc; k++) { cdm::SubsampleEntry e; e.clear_bytes = (seg[so] << 8) | seg[so + 1]; e.cipher_bytes = rd32(&seg[so + 2]); so += 6; encs[i].subs.push_back(e); } }
                        so = start + isz;
                    }
                    memcpy(&seg[saiz.off + 4], "free", 4); memcpy(&seg[saio.off + 4], "free", 4);
                } else { tpos = traf.off + traf.size; continue; }

                size_t sp = base_off + data_off;
                for (uint32_t i = 0; i < cnt; i++) {
                    uint32_t ssz = sizes[i]; if (sp + ssz > seg.size()) { err = "amostra fora do segmento"; return false; }
                    if (frames && vr) {
                        if (gi < vr->from) { sp += ssz; gi++; continue; }
                        if (gi >= vr->from + vr->maxn) { vr->next = gi; vr->partial = true; return true; }
                        gi++;
                    }
                    SampleEnc& e = encs[i];
                    Bytes iv16 = e.iv.empty() ? t.const_iv : e.iv; iv16.resize(16, 0);
                    if (!e.iv.empty() || !t.const_iv.empty()) {
                        cdm::InputBuffer_2 in; memset(&in, 0, sizeof in);
                        in.data = &seg[sp]; in.data_size = ssz; in.encryption_scheme = (t.scheme == 0x63626373) ? cdm::EncryptionScheme::kCbcs : cdm::EncryptionScheme::kCenc;
                        in.key_id = t.kid; in.key_id_size = 16; in.iv = iv16.data(); in.iv_size = 16;
                        in.subsamples = e.subs.empty() ? nullptr : e.subs.data(); in.num_subsamples = (uint32_t)e.subs.size();
                        in.pattern.crypt_byte_block = t.crypt; in.pattern.skip_byte_block = t.skip;
                        if (frames) {

                            { size_t q = sp, qe = sp + ssz; while (q + 4 <= qe) { uint32_t nl = rd32(&seg[q]); seg[q] = 0; seg[q + 1] = 0; seg[q + 2] = 0; seg[q + 3] = 1; q += 4 + (size_t)nl; } }

                            Bytes pre; std::vector<cdm::SubsampleEntry> subs2;
                            { bool idr = false; size_t q = sp, qe = sp + ssz; while (q + 5 <= qe) { if ((seg[q + 4] & 31) == 5) idr = true;   size_t r = q + 4; while (r + 4 <= qe && !(seg[r] == 0 && seg[r + 1] == 0 && seg[r + 2] == 0 && seg[r + 3] == 1)) r++; q = r; if (r + 4 > qe) break; }
                              if (idr && !g_annexb_extra.empty()) { pre = g_annexb_extra; pre.insert(pre.end(), seg.begin() + sp, seg.begin() + sp + ssz); cdm::SubsampleEntry ps; ps.clear_bytes = (uint32_t)g_annexb_extra.size(); ps.cipher_bytes = 0; subs2.push_back(ps); for (auto& se : e.subs) subs2.push_back(se);
                                in.data = pre.data(); in.data_size = (uint32_t)pre.size(); in.subsamples = subs2.data(); in.num_subsamples = (uint32_t)subs2.size(); } }
                            HVideoFrame vf; cdm::Status vs; static int64_t vts = 0; in.timestamp = vts; vts += 40000;
                            { std::lock_guard<std::mutex> l(g_cdm_mx); vs = g_cdm->DecryptAndDecodeFrame(in, &vf); }
                            if (vs != cdm::kSuccess && vs != cdm::kNeedMoreData) { char hx[64]; for (int q = 0; q < 16 && q < (int)ssz; q++) snprintf(hx + q * 2, 3, "%02x", seg[sp + q]); LOG("vdec amostra %u/%u status=%d size=%u subs=%u scheme=%d iv=%02x%02x.. head=%s", i, cnt, (int)vs, ssz, (unsigned)e.subs.size(), (int)in.encryption_scheme, iv16[0], iv16[1], hx); }
                            if (vs == cdm::kSuccess) { append_i420(vf, *frames); done++; }
                            else if (vs != cdm::kNeedMoreData) { err = "DecryptAndDecodeFrame status " + std::to_string((int)vs); return false; }
                            sp += ssz; continue;
                        }
                        HDecrypted blk; cdm::Status st;
                        { std::lock_guard<std::mutex> l(g_cdm_mx); st = g_cdm->Decrypt(in, &blk); }
                        if (st != cdm::kSuccess) { char ih[40]; for (int q = 0; q < 16; q++) snprintf(ih + q * 2, 3, "%02x", iv16[q]); std::string ss; for (size_t q = 0; q < e.subs.size() && q < 4; q++) ss += std::to_string(e.subs[q].clear_bytes) + "/" + std::to_string(e.subs[q].cipher_bytes) + " "; LOG("decrypt amostra %u/%u status=%d size=%u iv=%s ivsz=%u subs=%u[%s] scheme=%d pat=%u:%u", i, cnt, (int)st, ssz, ih, (unsigned)t.iv_size, (unsigned)e.subs.size(), ss.c_str(), (int)in.encryption_scheme, (unsigned)t.crypt, (unsigned)t.skip); err = "Decrypt status " + std::to_string((int)st); return false; }
                        cdm::Buffer* ob = blk.DecryptedBuffer(); if (!ob || ob->Size() != ssz) { err = "tamanho decriptado inesperado"; return false; }
                        memcpy(&seg[sp], ob->Data(), ssz); done++;
                    }
                    sp += ssz;
                }
            }
            tpos = traf.off + traf.size;
        }
        pos = mf.off + mf.size;
    }
    if (vr && !vr->partial) vr->next = gi;
    (void)done; return true;
}

enum { OP_PING = 1, OP_CREATE_SESSION = 2, OP_UPDATE_SESSION = 3, OP_CLOSE_SESSION = 4, OP_SET_INIT = 5, OP_DECRYPT_SEG = 6, OP_SET_CERT = 7, OP_VDEC_SEG = 8 };
static bool read_full(int fd, void* b, size_t n) { uint8_t* p = (uint8_t*)b; while (n) { ssize_t k = read(fd, p, n); if (k <= 0) return false; p += k; n -= k; } return true; }
static bool write_full(int fd, const void* b, size_t n) { const uint8_t* p = (const uint8_t*)b; while (n) { ssize_t k = write(fd, p, n); if (k <= 0) return false; p += k; n -= k; } return true; }
static std::string S(const Bytes& b) { return std::string(b.begin(), b.end()); }

static int handle(uint32_t op, const std::vector<Bytes>& a, std::vector<Bytes>& out) {
    std::string err;
    switch (op) {
    case OP_PING: out.push_back(Bytes{ 'p', 'o', 'n', 'g' }); return 0;
    case OP_CREATE_SESSION: {
        if (a.size() < 2) return 1; uint32_t t = a[0].empty() ? 0 : a[0][0]; std::string sid; Msg m;
        if (!create_session(t, a[1], sid, m, err)) { LOG("create_session falhou: %s", err.c_str()); out.push_back(Bytes(err.begin(), err.end())); return 1; }
        out.push_back(Bytes(sid.begin(), sid.end())); out.push_back(m.data); return 0; }
    case OP_UPDATE_SESSION: {
        if (a.size() < 2) return 1; LOG("UpdateSession sid=%s resposta=%zuB", S(a[0]).c_str(), a[1].size()); if (!cdm_update(S(a[0]), a[1], err)) { LOG("update_session falhou: %s", err.c_str()); out.push_back(Bytes(err.begin(), err.end())); return 1; }
        std::lock_guard<std::mutex> l(g_st_mx); auto it = g_keystatus.find(S(a[0])); std::string ks = it == g_keystatus.end() ? "" : it->second; out.push_back(Bytes(ks.begin(), ks.end())); return 0; }
    case OP_CLOSE_SESSION: {
        if (a.size() < 1) return 1; std::string sid = S(a[0]); uint32_t id = new_promise(); LOG("CloseSession sid=%.6s", sid.c_str());
        { std::lock_guard<std::mutex> l(g_cdm_mx); g_cdm->CloseSession(id, sid.data(), (uint32_t)sid.size()); }
        Prom p; wait_promise(id, p, 5000); { std::lock_guard<std::mutex> l(g_st_mx); g_msgs.erase(sid); g_keystatus.erase(sid); } return 0; }
    case OP_SET_CERT: {
        if (a.size() < 1) return 1; uint32_t id = new_promise();
        { std::lock_guard<std::mutex> l(g_cdm_mx); g_cdm->SetServerCertificate(id, a[0].data(), (uint32_t)a[0].size()); }
        Prom p; if (!wait_promise(id, p) || !p.ok) { LOG("set_cert rejeitado %s", p.err.c_str()); return 1; } return 0; }
    case OP_SET_INIT: {
        if (a.size() < 2) return 1; Bytes init = a[1]; Track t; if (!process_init(init, t)) { out.push_back(Bytes{ 'b', 'a', 'd' }); return 1; }
        { std::lock_guard<std::mutex> l(g_trk_mx); g_tracks[S(a[0])] = t; }
        { char kh[40]; for (int q = 0; q < 16; q++) snprintf(kh + q * 2, 3, "%02x", t.kid[q]); LOG("init track=%s scheme=%08x protegido=%d iv=%u kid=%s", S(a[0]).c_str(), t.scheme, t.protected_, t.iv_size, kh); }
        std::string verr; bool vd = t.protected_ && t.video && !getenv("CDM_NOVDEC") && vdec_init(t, verr); if (t.protected_ && t.video && !vd) LOG("vdec init falhou: %s", verr.c_str());
        out.push_back(init); out.push_back(Bytes(t.kid, t.kid + 16));
        { std::string dim = vd ? std::to_string(t.w) + "x" + std::to_string(t.h) : std::string(); out.push_back(Bytes(dim.begin(), dim.end())); } return 0; }
    case OP_VDEC_SEG: {

        if (a.size() < 4) return 1; Track t; { std::lock_guard<std::mutex> l(g_trk_mx); auto it = g_tracks.find(S(a[0])); if (it == g_tracks.end()) { out.push_back(Bytes{ 'n', 'o', 'i', 'n', 'i', 't' }); return 1; } t = it->second; }
        static std::map<std::string, Bytes> segcache; static std::mutex segmx; Bytes seg;
        { std::lock_guard<std::mutex> l(segmx); if (!a[1].empty()) segcache[S(a[0])] = a[1]; auto it = segcache.find(S(a[0])); if (it == segcache.end()) { out.push_back(Bytes{ 'n', 'o', 's', 'e', 'g' }); return 1; } seg = it->second; }
        VRange vr; vr.from = (size_t)atol(S(a[2]).c_str()); vr.maxn = (size_t)atol(S(a[3]).c_str()); Bytes frames;
        auto t0 = std::chrono::steady_clock::now();
        if (!decrypt_segment(t, seg, err, &frames, &vr)) { LOG("vdec falhou: %s", err.c_str()); out.push_back(Bytes(err.begin(), err.end())); return 1; }
        long ms = (long)std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now() - t0).count();
        if (getenv("CDM_VLOG")) LOG("vdec lote from=%zu next=%zu %zuB em %ldms", vr.from, vr.next, frames.size(), ms);
        std::string nt = std::to_string(vr.next) + "," + (vr.partial ? std::string("-1") : std::to_string(vr.next));
        out.push_back(frames); out.push_back(Bytes(nt.begin(), nt.end())); return 0; }
    case OP_DECRYPT_SEG: {
        if (a.size() < 2) return 1; Track t; { std::lock_guard<std::mutex> l(g_trk_mx); auto it = g_tracks.find(S(a[0])); if (it == g_tracks.end()) { out.push_back(Bytes{ 'n', 'o', 'i', 'n', 'i', 't' }); return 1; } t = it->second; }
        Bytes seg = a[1]; if (t.protected_ && !decrypt_segment(t, seg, err)) { LOG("decrypt falhou: %s", err.c_str()); out.push_back(Bytes(err.begin(), err.end())); return 1; }
        out.push_back(seg); return 0; }
    default: return 1;
    }
}

static void client_thread(int fd) {
    for (;;) {
        uint32_t hdr[2]; if (!read_full(fd, hdr, 8)) break;
        std::vector<Bytes> args(hdr[1]); bool ok = true;
        for (uint32_t i = 0; i < hdr[1]; i++) { uint32_t n; if (!read_full(fd, &n, 4)) { ok = false; break; } args[i].resize(n); if (n && !read_full(fd, args[i].data(), n)) { ok = false; break; } }
        if (!ok) break;
        std::vector<Bytes> out; int st = handle(hdr[0], args, out);
        std::vector<uint8_t> resp; auto put32 = [&](uint32_t v) { resp.insert(resp.end(), (uint8_t*)&v, (uint8_t*)&v + 4); };
        put32((uint32_t)st); put32((uint32_t)out.size()); for (auto& b : out) { put32((uint32_t)b.size()); resp.insert(resp.end(), b.begin(), b.end()); }
        if (!write_full(fd, resp.data(), resp.size())) break;
    }
    close(fd);
}

int main(int argc, char** argv) {
    std::string cdm_path = argc > 1 ? argv[1] : (std::string(getenv("HOME") ? getenv("HOME") : "") + "/.var/app/tv.kodi.Kodi/data/cdm/libwidevinecdm.so");
    g_store_dir = std::string(getenv("HOME") ? getenv("HOME") : "/tmp") + "/.local/share/gibbon-cdm"; system(("mkdir -p '" + g_store_dir + "'").c_str());
    void* h = dlopen(cdm_path.c_str(), RTLD_NOW | RTLD_LOCAL);
    if (!h) { LOG("dlopen falhou: %s", dlerror()); return 1; }
    auto initm = (void (*)())dlsym(h, "InitializeCdmModule_4");
    auto create = (void* (*)(int, const char*, uint32_t, GetCdmHostFunc, void*))dlsym(h, "CreateCdmInstance");
    auto getver = (const char* (*)())dlsym(h, "GetCdmVersion");
    if (!initm || !create) { LOG("simbolos do CDM ausentes"); return 1; }
    initm(); LOG("CDM versao %s", getver ? getver() : "?");
    std::thread(timer_thread).detach();
    const char* ks = "com.widevine.alpha";
    g_cdm = (cdm::ContentDecryptionModule_10*)create(10, ks, (uint32_t)strlen(ks), get_host, nullptr);
    if (!g_cdm) { LOG("CreateCdmInstance falhou"); return 1; }
    { std::lock_guard<std::mutex> l(g_cdm_mx); { const char* ci = getenv("CDM_INIT"); bool dist = (ci && ci[0] == '1'), pers = !(ci && ci[0] && ci[1] == '0'); LOG("Initialize(distinctive=%d, persistent=%d)", dist, pers); g_cdm->Initialize(dist, pers, false); } }
    { std::unique_lock<std::mutex> l(g_st_mx); g_cv.wait_for(l, std::chrono::seconds(20), [] { return g_init_done; }); }
    if (!g_init_ok) { LOG("CDM nao inicializou"); return 1; }
    LOG("CDM inicializado");
    unlink(SOCK_PATH);
    int s = socket(AF_UNIX, SOCK_STREAM, 0); sockaddr_un ad; memset(&ad, 0, sizeof ad); ad.sun_family = AF_UNIX; strncpy(ad.sun_path, SOCK_PATH, sizeof ad.sun_path - 1);
    if (bind(s, (sockaddr*)&ad, sizeof ad) < 0 || listen(s, 16) < 0) { LOG("bind/listen falhou"); return 1; }
    chmod(SOCK_PATH, 0666); LOG("escutando em %s", SOCK_PATH);
    for (;;) { int c = accept(s, nullptr, nullptr); if (c < 0) continue; std::thread(client_thread, c).detach(); }
}
