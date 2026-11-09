#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <SDL2/SDL.h>
#include <time.h>
#include <math.h>
#include <pthread.h>
#include <GLES3/gl3.h>

static int g_splash_ready; static int g_splash_reset_req=0;
typedef struct { int prop; float base, from, to; double t0, dur; int mode, fam; } Anim;
typedef struct Widget {
    Anim an[10]; int nan;
    float x,y,w,h; unsigned int color; float opacity, scale;
    char* items[6]; char kinds[6]; float ia[6]; float uv[6][4]; int nitems; int clip;
    float cr; float fxins; int hasfx; float fxr, fxsw; float fxstroke[4], fxfill[4]; int fxgrad; float fxg[4]; int fxn; float fxpos[4]; float fxcol[4][4];
    struct Widget **children; int nchildren, cap;
} Widget;

static Widget* wnew(void){ Widget*w=calloc(1,sizeof(Widget)); w->opacity=1; w->scale=1; return w; }
static void wadd(Widget*p,Widget*c){ if(p->nchildren>=p->cap){ p->cap=p->cap?p->cap*2:8; p->children=realloc(p->children,p->cap*sizeof(Widget*)); } p->children[p->nchildren++]=c; }
static void wfree(Widget*w){ if(!w)return; for(int i=0;i<w->nitems;i++) free(w->items[i]); for(int i=0;i<w->nchildren;i++) wfree(w->children[i]); free(w->children); free(w); }

static Widget* parse_scene(const char*path,int*vw,int*vh){
    FILE*f=fopen(path,"r"); if(!f) return NULL;
    char line[512];
    Widget*root=NULL; Widget*stack[64]; int sdepth[64]; int sp=0;
    *vw=1920; *vh=1080;
    while(fgets(line,sizeof line,f)){
        if(line[0]=='#'||line[0]=='\n') continue;
        if(line[0]=='V'){ sscanf(line,"VIEW %d %d",vw,vh); continue; }
        if(line[0]=='S' && !strncmp(line,"SPLASH ",7)){ int nv=0; long bid=0; sscanf(line+7,"%d %ld",&nv,&bid); static long g_boot_id=0; if((g_splash_ready==1 && nv==0) || (bid && g_boot_id && bid!=g_boot_id)) g_splash_reset_req=1; if(bid) g_boot_id=bid; g_splash_ready=nv; continue; }
        if((line[0]=='I'||line[0]=='T'||line[0]=='M') && line[1]==' ' && sp>0){
            Widget*cur=stack[sp-1]; if(cur->nitems<6){ char path[400]; int bg=0; float u[4]={0,0,1,1}; int n=sscanf(line+2,"%399s %d %f %f %f %f",path,&bg,&u[0],&u[1],&u[2],&u[3]); if(n>=1){ cur->items[cur->nitems]=strdup(path); cur->kinds[cur->nitems]=line[0]; cur->ia[cur->nitems]=(line[0]=='M' && n>=2)?bg/100.f:1.f; memcpy(cur->uv[cur->nitems],u,sizeof u); cur->nitems++; } } continue; }
        if(line[0]=='R' && line[1]==' ' && sp>0){ Widget*cur=stack[sp-1]; unsigned int sc=0,fc=0; float r=0,sw=0; int n2=0,off=0; int gr=0; float g[4]={0,0,0,0};
            if(sscanf(line+2,"%f %f %x %x %d %f %f %f %f %d%n",&r,&sw,&sc,&fc,&gr,&g[0],&g[1],&g[2],&g[3],&n2,&off)>=9){ cur->hasfx=1; cur->fxr=r; cur->fxsw=sw;
                for(int k=0;k<4;k++){ cur->fxstroke[k]=((sc>>(24-8*k))&255)/255.f; cur->fxfill[k]=((fc>>(24-8*k))&255)/255.f; }
                cur->fxgrad=gr; memcpy(cur->fxg,g,sizeof g); cur->fxn=0;
                if(gr){ const char*q=line+2+off; for(int i=0;i<n2&&i<4;i++){ float pos; unsigned int cc; int used=0; if(sscanf(q,"%f %x%n",&pos,&cc,&used)<2) break; q+=used; cur->fxpos[i]=pos; for(int k=0;k<4;k++) cur->fxcol[i][k]=((cc>>(24-8*k))&255)/255.f; cur->fxn++; } } }
            continue; }
        if(line[0]=='J' && line[1]==' ' && sp>0){ sscanf(line+2,"%f",&stack[sp-1]->fxins); continue; }
        if(line[0]=='K' && line[1]==' ' && sp>0){ sscanf(line+2,"%f",&stack[sp-1]->cr); continue; }
        if(line[0]=='C' && line[1]==' ' && sp>0){ stack[sp-1]->clip=1; continue; }
        if(line[0]=='N' && line[1]==' ' && sp>0){ Widget*cur=stack[sp-1]; Anim a; if(cur->nan<10 && sscanf(line+2,"%d %f %f %f %lf %lf %d %d",&a.prop,&a.base,&a.from,&a.to,&a.t0,&a.dur,&a.mode,&a.fam)==8 && a.dur>=0 && a.prop>=0 && a.prop<6) cur->an[cur->nan++]=a; continue; }
        if(line[0]=='W'){
            int depth; float x,y,w,h,op,sc; unsigned int col;
            if(sscanf(line,"W %d %f %f %f %f %x %f %f",&depth,&x,&y,&w,&h,&col,&op,&sc)!=8) continue;
            Widget*wd=wnew(); wd->x=x;wd->y=y;wd->w=w;wd->h=h;wd->color=col;wd->opacity=op;wd->scale=sc<=0?1:sc;
            if(depth==0){ root=wd; sp=0; stack[sp]=wd; sdepth[sp]=0; sp=1; }
            else { while(sp>0 && sdepth[sp-1]>=depth) sp--; if(sp>0) wadd(stack[sp-1],wd);
                   stack[sp]=wd; sdepth[sp]=depth; sp++; if(sp>=64)sp=63; }
        }
    }
    fclose(f); return root;
}

static const char* VS=
"#version 300 es\n"
"layout(location=0) in vec2 aPos;\n"
"uniform vec4 uRect; uniform vec2 uView; uniform vec4 uUV;\n"
"out vec2 vUV; out vec2 vPos;\nvoid main(){ vPos=aPos; vUV=uUV.xy+aPos*uUV.zw; vec2 p=uRect.xy+aPos*uRect.zw;\n"
" vec2 ndc=vec2(p.x/uView.x*2.0-1.0, 1.0-p.y/uView.y*2.0);\n"
" gl_Position=vec4(ndc,0.0,1.0); }\n";
static const char* FS=
"#version 300 es\n"
"precision mediump float; uniform vec4 uColor; in vec2 vUV; in vec2 vPos; out vec4 o;\n"
"void main(){ o=vec4(uColor.rgb*uColor.a, uColor.a); }\n";

static double g_now_ms=0; static int g_anim_seen=0;
static double ease_in(int fam,double t){ switch(fam){ case 1: return 1.0-cos(t*M_PI/2); case 2: return t*t; case 3: return t*t*t; case 4: return t*t*t*t; case 5: return t*t*t*t*t; case 6: return t==0?0:pow(2,10*t-10); case 7: return 1.0-sqrt(1.0-t*t); case 8: { double c1=1.70158; return (c1+1)*t*t*t-c1*t*t; } default: return t; } }
static double ease_apply(int mode,int fam,double t){ if(mode==0) return ease_in(fam,t); if(mode==1) return 1.0-ease_in(fam,1.0-t); return t<0.5? ease_in(fam,2*t)/2 : 1.0-ease_in(fam,2-2*t)/2; }
static GLuint prog,vao,vbo,uRect,uView,uColor;
static GLuint tprog,uTRect,uTView,uTAlpha,uTSamp,uTUV,uCUV,uTSize,uTRad,uTFade,uTQuad,uTClip,uTClipRad;
typedef struct { char*path; GLuint tex; int w,h; time_t tried; int band; int bandb; } Tex;
#define MAXTEX 2048
static Tex texs[MAXTEX]; static int ntex=0;

static int g_splash_ready=0;
static int sp_n=0; static char sp_dir[512]; static GLuint sp_tex[2]={0,0}; static int sp_idx[2]={-1,-1};
static int sp_read(int idx,int slot){
    if(sp_idx[slot]==idx) return 1; char path[640]; snprintf(path,sizeof path,"%s/%03d.rgba",sp_dir,idx);
    FILE*f=fopen(path,"rb"); if(!f) return 0; unsigned int hdr[2]; if(fread(hdr,4,2,f)!=2){fclose(f);return 0;}
    size_t n=(size_t)hdr[0]*hdr[1]*4; unsigned char*px=malloc(n); if(fread(px,1,n,f)!=n){ free(px); fclose(f); return 0; } fclose(f);
    if(!sp_tex[slot]){ glGenTextures(1,&sp_tex[slot]); glBindTexture(GL_TEXTURE_2D,sp_tex[slot]); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR_MIPMAP_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_CLAMP_TO_EDGE); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_CLAMP_TO_EDGE); }
    glBindTexture(GL_TEXTURE_2D,sp_tex[slot]); glPixelStorei(GL_UNPACK_ALIGNMENT,1); glTexImage2D(GL_TEXTURE_2D,0,GL_RGBA,hdr[0],hdr[1],0,GL_RGBA,GL_UNSIGNED_BYTE,px); glGenerateMipmap(GL_TEXTURE_2D); free(px); sp_idx[slot]=idx; return 1; }

static void sp_prepare(int idx,int nxt){
    if(sp_idx[1]==idx && sp_idx[0]!=idx){ GLuint tt=sp_tex[0]; sp_tex[0]=sp_tex[1]; sp_tex[1]=tt; int ti=sp_idx[0]; sp_idx[0]=sp_idx[1]; sp_idx[1]=ti; }
    sp_read(idx,0); sp_read(nxt,1); }

static SDL_AudioDeviceID sp_audio=0; static int sp_audio_started=0;
static void sp_audio_start(void){
    if(sp_audio_started) return; sp_audio_started=1; char path[640]; snprintf(path,sizeof path,"%s/audio.pcm",sp_dir); FILE*f=fopen(path,"rb"); if(!f) return;
    fseek(f,0,SEEK_END); long n=ftell(f); fseek(f,0,SEEK_SET); unsigned char*buf=malloc(n); if(fread(buf,1,n,f)!=(size_t)n){ free(buf); fclose(f); return; } fclose(f);
    SDL_InitSubSystem(SDL_INIT_AUDIO); SDL_AudioSpec want,have; SDL_zero(want); want.freq=48000; want.format=AUDIO_S16LSB; want.channels=2; want.samples=1024;
    sp_audio=SDL_OpenAudioDevice(NULL,0,&want,&have,0); if(!sp_audio){ fprintf(stderr,"[splash] audio indisponivel: %s\n",SDL_GetError()); free(buf); return; } fprintf(stderr,"[splash] audio ok (%d Hz)\n",have.freq); SDL_QueueAudio(sp_audio,buf,n);     SDL_PauseAudioDevice(sp_audio,0); free(buf); }

enum { TS_LOADING=1, TS_READY=2, TS_GPU=3, TS_RETRY=4 };
static int tstate[MAXTEX], tnext[MAXTEX], thead[4096]; static unsigned char* tpx[MAXTEX]; static unsigned tlast[MAXTEX]; static int thash_init=0, tevict=0;
static unsigned g_frame=0; static Uint64 g_fstart=0; static int g_uploads=0;
static pthread_mutex_t tq_mu=PTHREAD_MUTEX_INITIALIZER; static pthread_cond_t tq_cv=PTHREAD_COND_INITIALIZER; static int tq[MAXTEX], tq_h=0, tq_t=0, tq_n=0;
static unsigned thash_of(const char*s){ unsigned h=5381; while(*s) h=h*33u+(unsigned char)*s++; return h&4095u; }
static void* tex_worker(void*arg){ (void)arg; for(;;){
    pthread_mutex_lock(&tq_mu); while(tq_n==0) pthread_cond_wait(&tq_cv,&tq_mu); int i=tq[tq_h]; tq_h=(tq_h+1)%MAXTEX; tq_n--; pthread_mutex_unlock(&tq_mu);
    unsigned char*px=NULL; unsigned hdr[2]={0,0}; FILE*f=fopen(texs[i].path,"rb");
    if(f){ if(fread(hdr,4,2,f)==2 && hdr[0]>0 && hdr[1]>0 && hdr[0]<16384 && hdr[1]<16384){ size_t n=(size_t)hdr[0]*hdr[1]*4; px=malloc(n); if(px && fread(px,1,n,f)!=n){ free(px); px=NULL; } } fclose(f); }
    pthread_mutex_lock(&tq_mu); if(px){ tpx[i]=px; texs[i].w=hdr[0]; texs[i].h=hdr[1]; tstate[i]=TS_READY; } else { texs[i].tried=time(NULL); tstate[i]=TS_RETRY; } pthread_mutex_unlock(&tq_mu); } return NULL; }
static void tex_queue(int i){ pthread_mutex_lock(&tq_mu); tstate[i]=TS_LOADING; tq[tq_t]=i; tq_t=(tq_t+1)%MAXTEX; tq_n++; pthread_cond_signal(&tq_cv); pthread_mutex_unlock(&tq_mu); }
static void tex_upload(Tex*t,unsigned char*px,const char*path){
    glGenTextures(1,&t->tex); glBindTexture(GL_TEXTURE_2D,t->tex);
    glPixelStorei(GL_UNPACK_ALIGNMENT,1);
    glTexImage2D(GL_TEXTURE_2D,0,GL_RGBA,t->w,t->h,0,GL_RGBA,GL_UNSIGNED_BYTE,px);
    if(!strstr(path,".txt.") && t->w>2 && t->h>2){ glGenerateMipmap(GL_TEXTURE_2D); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR_MIPMAP_LINEAR); glTexParameterf(GL_TEXTURE_2D,0x84FE,8.0f); }
    else glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_CLAMP_TO_EDGE); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_CLAMP_TO_EDGE); }
static int tex_slot(void){
    if(ntex<MAXTEX) return ntex++;
    for(int k=0;k<MAXTEX;k++){ int i=(tevict+k)%MAXTEX; if((tstate[i]==TS_GPU||tstate[i]==TS_RETRY) && g_frame-tlast[i]>120){
            unsigned h=thash_of(texs[i].path); int*pp=&thead[h]; while(*pp>=0 && *pp!=i) pp=&tnext[*pp]; if(*pp==i) *pp=tnext[i];
            if(texs[i].tex) glDeleteTextures(1,&texs[i].tex); free(texs[i].path); memset(&texs[i],0,sizeof texs[i]); tstate[i]=0; tevict=(i+1)%MAXTEX; return i; } }
    return -1; }
static Tex* tex_get(const char*path){
    if(!thash_init){ for(int i=0;i<4096;i++) thead[i]=-1; thash_init=1; }
    unsigned h=thash_of(path); int i=thead[h]; while(i>=0 && strcmp(texs[i].path,path)) i=tnext[i];
    if(i>=0){ tlast[i]=g_frame;
        pthread_mutex_lock(&tq_mu); int st=tstate[i]; pthread_mutex_unlock(&tq_mu);
        if(st==TS_GPU) return texs[i].tex?&texs[i]:NULL;
        if(st==TS_READY){ if(g_uploads>0 && (SDL_GetPerformanceCounter()-g_fstart)*1000.0/SDL_GetPerformanceFrequency()>5.0) return NULL;
            tex_upload(&texs[i],tpx[i],path); free(tpx[i]); tpx[i]=NULL; g_uploads++; pthread_mutex_lock(&tq_mu); tstate[i]=TS_GPU; pthread_mutex_unlock(&tq_mu); return &texs[i]; }
        if(st==TS_RETRY && time(NULL)>texs[i].tried) tex_queue(i);
        return NULL; }
    struct stat sb; if(stat(path,&sb)!=0) return NULL;
    int big = sb.st_size>65536 && !strstr(path,".txt.") && !strstr(path,"/spin/");
    int k=tex_slot(); if(k<0) return NULL;
    Tex*t=&texs[k]; memset(t,0,sizeof *t); t->path=strdup(path); tlast[k]=g_frame; tnext[k]=thead[h]; thead[h]=k; tpx[k]=NULL;
    if(big){ tex_queue(k); return NULL; }
    FILE*f=fopen(path,"rb"); unsigned hdr[2]; unsigned char*px=NULL;
    if(f){ if(fread(hdr,4,2,f)==2){ size_t n=(size_t)hdr[0]*hdr[1]*4; px=malloc(n); if(px && fread(px,1,n,f)!=n){ free(px); px=NULL; } } fclose(f); }
    if(!px){ t->tried=time(NULL); pthread_mutex_lock(&tq_mu); tstate[k]=TS_RETRY; pthread_mutex_unlock(&tq_mu); return NULL; }
    t->w=hdr[0]; t->h=hdr[1]; tex_upload(t,px,path); free(px); pthread_mutex_lock(&tq_mu); tstate[k]=TS_GPU; pthread_mutex_unlock(&tq_mu); return t; }

typedef struct { char path[400]; Tex t; unsigned seq; int nb, bandmin, keep, pos, zero; int tmin,bmin,tpos,bpos,tz,bz,keepb; int rt[48], rb[48], ri, rn; } Vid;

static int black_rows(const unsigned char*px,int w,int h,int fromTop){
    int lim=h*22/100, t=0;
    for(;t<lim;t++){ const unsigned char*r=fromTop?px+(size_t)t*w*4:px+(size_t)(h-1-t)*w*4; int br=0; for(int x=0;x<w*4;x+=64){ if(r[x]+r[x+1]+r[x+2]>60){br=1;break;} } if(br) break; }
    return t>=lim?-1:t; }
static Vid vids[4]; static int nvids=0;
static Tex* vid_get(const char*path){
    Vid*v=NULL; for(int i=0;i<nvids;i++) if(!strcmp(vids[i].path,path)) v=&vids[i];
    if(!v){ if(nvids>=4) return NULL; v=&vids[nvids++]; snprintf(v->path,sizeof v->path,"%s",path); }
    FILE*f=fopen(path,"rb"); if(!f){ v->seq=0; v->nb=0; v->pos=0; v->zero=0; v->bandmin=100000; v->t.band=0; v->t.bandb=0; v->tmin=v->bmin=100000; v->tpos=v->bpos=v->tz=v->bz=0; v->rn=0; v->ri=0; return NULL; } unsigned int hdr[3];
    { char*dot=strstr(v->path,".rgba.last"); if(dot){ char base[400]; snprintf(base,sizeof base,"%s",v->path); base[dot-v->path+5]=0; for(int i=0;i<nvids;i++) if(!strcmp(vids[i].path,base)) { v->t.band=vids[i].keep; v->t.bandb=vids[i].keepb; } } }
    if(fread(hdr,4,3,f)!=3){ fclose(f); return v->t.tex?&v->t:NULL; }
    if(hdr[2]!=v->seq && hdr[0]>0 && hdr[1]>0 && hdr[0]<8192 && hdr[1]<8192){
        size_t n=(size_t)hdr[0]*hdr[1]*4; unsigned char*px=malloc(n);
        if(hdr[2]<v->seq){ v->nb=0; v->pos=0; v->zero=0; v->bandmin=100000; v->t.band=0; v->t.bandb=0; v->tmin=v->bmin=100000; v->tpos=v->bpos=v->tz=v->bz=0; v->rn=0; v->ri=0; }
        if(px && fread(px,1,n,f)==n){
            if(!strstr(v->path,".last")){ int tb=black_rows(px,hdr[0],hdr[1],1), bb=black_rows(px,hdr[0],hdr[1],0);
              if(tb<0) tb=0; if(bb<0) bb=0;
              v->rt[v->ri]=tb; v->rb[v->ri]=bb; v->ri=(v->ri+1)%48; if(v->rn<48) v->rn++; if(v->nb<1000000) v->nb++;
              { int ct=0,zt=0,mt=0,cb=0,zb=0,mb=0; for(int q=0;q<v->rn;q++){ int a1=v->rt[q], b1=v->rb[q]; if(a1>=3){ ct++; if(!mt||a1<mt) mt=a1; } else zt++; if(b1>=3){ cb++; if(!mb||b1<mb) mb=b1; } else zb++; }

                v->t.band=(v->rn>=8 && ct>4*zt)?mt:0; v->t.bandb=(v->rn>=8 && cb>4*zb)?mb:0; if(getenv("VIEWDBG")){ static int dd=0; if((dd++%40)==0) fprintf(stderr,"[bands] rn=%d top: bar=%d sem=%d min=%d | base: bar=%d sem=%d min=%d -> band=%d bandb=%d\n",v->rn,ct,zt,mt,cb,zb,mb,v->t.band,v->t.bandb); } }
              if(v->t.band>0||v->t.bandb>0){ v->keep=v->t.band; v->keepb=v->t.bandb; } }
            if(!v->t.tex){ glGenTextures(1,&v->t.tex); glBindTexture(GL_TEXTURE_2D,v->t.tex); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_CLAMP_TO_EDGE); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_CLAMP_TO_EDGE); }
            glBindTexture(GL_TEXTURE_2D,v->t.tex); glPixelStorei(GL_UNPACK_ALIGNMENT,1); glTexImage2D(GL_TEXTURE_2D,0,GL_RGBA,hdr[0],hdr[1],0,GL_RGBA,GL_UNSIGNED_BYTE,px);
            v->t.w=hdr[0]; v->t.h=hdr[1]; v->seq=hdr[2]; }
        free(px); }
    fclose(f); return v->t.tex?&v->t:NULL; }
static GLuint rprog,uRRect,uRView,uRUV,uRSize,uRRad,uRSW,uRSC,uRFill,uRGrad,uRGOn,uRN,uRPos,uRCol,uRAlpha;
static const char* RFS=
"#version 300 es\n"
"precision highp float; in vec2 vUV; in vec2 vPos; out vec4 o;\n"
"uniform vec2 uSize; uniform float uRad,uSW,uAlpha; uniform vec4 uSC,uFill,uGrad; uniform int uGOn,uN; uniform float uPos[4]; uniform vec4 uCol[4];\n"
"void main(){ vec2 p=(vUV-0.5)*uSize; vec2 b=uSize*0.5; float r=min(uRad,min(b.x,b.y));\n"
" vec2 q=abs(p)-b+r; float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-r;\n"
" float cov=clamp(0.5-d,0.0,1.0);\n"
" vec4 f=uFill;\n"
" if(uGOn>=1){ float t; if(uGOn==2){ t=clamp(length((vUV-uGrad.xy)/max(uGrad.zw,vec2(1e-6))),0.0,1.0); } else { vec2 be=uGrad.xy, en=uGrad.zw; vec2 dd=en-be; t=clamp(dot(vUV-be,dd)/max(dot(dd,dd),1e-6),0.0,1.0); } f=uCol[0];\n"
"   for(int i=1;i<4;i++){ if(i<uN && t>=uPos[i-1]){ float w=clamp((t-uPos[i-1])/max(uPos[i]-uPos[i-1],1e-6),0.0,1.0); f=mix(uCol[i-1],uCol[i],w);} }\n"
"   if(t>=uPos[uN-1]) f=uCol[uN-1]; }\n"
" vec4 c=vec4(f.rgb*f.a,f.a);\n"
" if(uSW>0.0){ float ring=clamp(0.5-(abs(d+uSW*0.5)-uSW*0.5),0.0,1.0); vec4 sc=vec4(uSC.rgb*uSC.a,uSC.a); c=c*(1.0-ring)+sc*ring; }\n"
" o=c*cov*uAlpha; }\n";
static const char* TFS=
"#version 300 es\n"
"precision highp float; uniform sampler2D uTex; uniform float uAlpha; uniform vec2 uSize; uniform float uRad,uFade,uClipRad; uniform vec4 uQuad,uClip; in vec2 vUV; in vec2 vPos; out vec4 o;\n"
"void main(){ vec4 c=texture(uTex,vUV); float a=c.a*uAlpha;\n"
" if(uFade>0.0){ float f=clamp((1.0-vPos.y)/uFade,0.0,1.0); a*=f*f*(3.0-2.0*f); }\n"
" if(uRad>0.0){ vec2 p=(vPos-0.5)*uSize; vec2 b=uSize*0.5; float r=min(uRad,min(b.x,b.y)); vec2 q=abs(p)-b+r; float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-r; a*=clamp(0.5-d,0.0,1.0); }\n"
" if(uClipRad>0.0){ vec2 pp=uQuad.xy+vPos*uQuad.zw; vec2 b=uClip.zw*0.5; float r=min(uClipRad,min(b.x,b.y)); vec2 q=abs(pp-(uClip.xy+b))-b+r; float d=length(max(q,0.0))+min(max(q.x,q.y),0.0)-r; a*=clamp(0.5-d,0.0,1.0); }\n"
" o=vec4(c.rgb*a,a); }\n";

static GLuint compile(GLenum t,const char*s){ GLuint sh=glCreateShader(t); glShaderSource(sh,1,&s,0); glCompileShader(sh);
    GLint ok; glGetShaderiv(sh,GL_COMPILE_STATUS,&ok); if(!ok){char l[1024]; glGetShaderInfoLog(sh,1024,0,l); fprintf(stderr,"shader: %s\n",l);} return sh; }
static void gl_init(void){ GLuint vs=compile(GL_VERTEX_SHADER,VS),fs=compile(GL_FRAGMENT_SHADER,FS);
    prog=glCreateProgram(); glAttachShader(prog,vs); glAttachShader(prog,fs); glLinkProgram(prog);
    { GLuint tf=compile(GL_FRAGMENT_SHADER,TFS); tprog=glCreateProgram(); glAttachShader(tprog,vs); glAttachShader(tprog,tf); glLinkProgram(tprog);
      uTRect=glGetUniformLocation(tprog,"uRect"); uTView=glGetUniformLocation(tprog,"uView"); uTAlpha=glGetUniformLocation(tprog,"uAlpha"); uTSamp=glGetUniformLocation(tprog,"uTex"); uTUV=glGetUniformLocation(tprog,"uUV"); uTSize=glGetUniformLocation(tprog,"uSize"); uTRad=glGetUniformLocation(tprog,"uRad"); uTFade=glGetUniformLocation(tprog,"uFade"); uTQuad=glGetUniformLocation(tprog,"uQuad"); uTClip=glGetUniformLocation(tprog,"uClip"); uTClipRad=glGetUniformLocation(tprog,"uClipRad"); if(getenv("VIEWDBG")) fprintf(stderr,"[vdbg] uniform locs rect=%d view=%d alpha=%d samp=%d uv=%d size=%d rad=%d fade=%d\n",(int)uTRect,(int)uTView,(int)uTAlpha,(int)uTSamp,(int)uTUV,(int)uTSize,(int)uTRad,(int)uTFade); }
    { GLuint rf=compile(GL_FRAGMENT_SHADER,RFS); rprog=glCreateProgram(); glAttachShader(rprog,vs); glAttachShader(rprog,rf); glLinkProgram(rprog);
      uRRect=glGetUniformLocation(rprog,"uRect"); uRView=glGetUniformLocation(rprog,"uView"); uRUV=glGetUniformLocation(rprog,"uUV"); uRSize=glGetUniformLocation(rprog,"uSize");
      uRRad=glGetUniformLocation(rprog,"uRad"); uRSW=glGetUniformLocation(rprog,"uSW"); uRSC=glGetUniformLocation(rprog,"uSC"); uRFill=glGetUniformLocation(rprog,"uFill");
      uRGrad=glGetUniformLocation(rprog,"uGrad"); uRGOn=glGetUniformLocation(rprog,"uGOn"); uRN=glGetUniformLocation(rprog,"uN"); uRPos=glGetUniformLocation(rprog,"uPos"); uRCol=glGetUniformLocation(rprog,"uCol"); uRAlpha=glGetUniformLocation(rprog,"uAlpha"); }
    uCUV=glGetUniformLocation(prog,"uUV");
    uRect=glGetUniformLocation(prog,"uRect"); uView=glGetUniformLocation(prog,"uView"); uColor=glGetUniformLocation(prog,"uColor");
    float quad[]={0,0,1,0,0,1,1,1}; glGenVertexArrays(1,&vao); glBindVertexArray(vao);
    glGenBuffers(1,&vbo); glBindBuffer(GL_ARRAY_BUFFER,vbo); glBufferData(GL_ARRAY_BUFFER,sizeof quad,quad,GL_STATIC_DRAW);
    glEnableVertexAttribArray(0); glVertexAttribPointer(0,2,GL_FLOAT,GL_FALSE,0,0);
    glEnable(GL_BLEND); glBlendFunc(GL_ONE,GL_ONE_MINUS_SRC_ALPHA); }

static int g_dw=0,g_dh=0;
static void draw(Widget*wd,float ox,float oy,float ps,float po,int vw,int vh){
    if(!wd)return; float wx=wd->x, wy=wd->y, wop=wd->opacity, ww_=wd->w, hh_=wd->h, wsc=wd->scale;
    { int done[6]={0,0,0,0,0,0}; for(int k=0;k<wd->nan;k++){ const Anim*an=&wd->an[k]; if(done[an->prop]) continue; if(g_now_ms>=an->t0+an->dur) continue;
        done[an->prop]=1; float v; if(g_now_ms<an->t0) v=an->from; else v=an->from+(an->to-an->from)*(float)ease_apply(an->mode,an->fam,(g_now_ms-an->t0)/an->dur);
        g_anim_seen=1; switch(an->prop){ case 0: wx+=v-an->base; break; case 1: wy+=v-an->base; break; case 2: wop=v; break; case 3: ww_+=v-an->base; break; case 4: hh_+=v-an->base; break; default: wsc=v<=0?1:v; } } }
    float sc=ps*wsc, op=po*wop;
    float cx=ox+wx+ww_*0.5f, cy=oy+wy+hh_*0.5f, w=ww_*sc, h=hh_*sc, px=cx-w*0.5f, py=cy-h*0.5f;
    unsigned int c=wd->color; float r=((c>>24)&255)/255.f,g=((c>>16)&255)/255.f,b=((c>>8)&255)/255.f,a=(c&255)/255.f; a*=op;
    if(wd->hasfx && op>0.001f){ float ins=wd->fxins*sc, fpy=py+ins, fh=h-2*ins, frad=wd->fxr*sc; if(ins>0 && frad>fh*0.5f) frad=fh*0.5f; glUseProgram(rprog); glBindVertexArray(vao); glUniform4f(uRRect,px,fpy,w,fh); glUniform4f(uRUV,0,0,1,1); glUniform2f(uRView,vw,vh); glUniform2f(uRSize,w,fh);
        glUniform1f(uRRad,frad); glUniform1f(uRSW,wd->fxsw*sc); glUniform4fv(uRSC,1,wd->fxstroke); glUniform4fv(uRFill,1,wd->fxfill); glUniform1i(uRGOn,wd->fxn>0?wd->fxgrad:0); glUniform4fv(uRGrad,1,wd->fxg);
        glUniform1i(uRN,wd->fxn>0?wd->fxn:1); glUniform1fv(uRPos,4,wd->fxpos); glUniform4fv(uRCol,4,&wd->fxcol[0][0]); glUniform1f(uRAlpha,op); glDrawArrays(GL_TRIANGLE_STRIP,0,4); }
    else if(a>0.001f && wd->cr>0){ glUseProgram(rprog); glBindVertexArray(vao); glUniform4f(uRRect,px,py,w,h); glUniform4f(uRUV,0,0,1,1); glUniform2f(uRView,vw,vh); glUniform2f(uRSize,w,h);
        glUniform1f(uRRad,wd->cr*sc); glUniform1f(uRSW,0); float z4[4]={0,0,0,0}; float f4[4]={r,g,b,a/(op>0?op:1)}; glUniform4fv(uRSC,1,z4); glUniform4fv(uRFill,1,f4); glUniform1i(uRGOn,0); glUniform4fv(uRGrad,1,z4); glUniform1i(uRN,1); glUniform1f(uRAlpha,op); glDrawArrays(GL_TRIANGLE_STRIP,0,4); }
    else if(a>0.001f){ glUseProgram(prog); glBindVertexArray(vao); glUniform4f(uRect,px,py,w,h); glUniform4f(uCUV,0,0,1,1); glUniform2f(uView,vw,vh); glUniform4f(uColor,r,g,b,a); glDrawArrays(GL_TRIANGLE_STRIP,0,4); }
    for(int i=0;i<wd->nitems;i++){ Tex*t=wd->kinds[i]=='M'?vid_get(wd->items[i]):tex_get(wd->items[i]); if(!t) continue;
        glUseProgram(tprog); glUniform1f(uTClipRad,0.f); glBindVertexArray(vao); glActiveTexture(GL_TEXTURE0); glBindTexture(GL_TEXTURE_2D,t->tex); glUniform1i(uTSamp,0);
        float iw=wd->kinds[i]=='T'?t->w:w, ih=wd->kinds[i]=='T'?t->h:h; if(wd->kinds[i]=='T'){ iw*=sc; ih*=sc; }
        int vflag2=(wd->kinds[i]=='M'&&wd->uv[i][0]<-1.5f);     int nocrop=(wd->kinds[i]=='M'&&wd->uv[i][0]<0.f&&!vflag2);     float bf=(wd->kinds[i]=='M'&&!nocrop&&t->h>0)?(float)t->band/t->h:0.f, bbf=(wd->kinds[i]=='M'&&!nocrop&&t->h>0)?(float)t->bandb/t->h:0.f; int hasb=(bf>0.f||bbf>0.f); int vscis=0; float rx=px, ry=py; if(wd->kinds[i]=='M'&&!nocrop&&t->w>0&&t->h>0){   float cw=(float)t->w, ch=(float)t->h*(1.f-bf-bbf); int fullw=(w>=0.9f*vw); float RX=fullw?0.f:px, RY=fullw?0.f:py, RW=fullw?(float)vw:w, RH=fullw?(float)vh:h; int fitw=fullw&&!vflag2; float s=fitw?(RW/cw):fmaxf(RW/cw,RH/ch); iw=cw*s; ih=ch*s; rx=RX+(RW-iw)*0.5f; ry=fitw?RY:(RY+(RH-ih)*0.5f);

          if(!fullw && g_dh>0){ float sx=(float)g_dw/vw, sy=(float)g_dh/vh; glEnable(GL_SCISSOR_TEST); glScissor((int)(px*sx),(int)(g_dh-(py+h)*sy),(int)(w*sx),(int)(h*sy)); vscis=1; } } glUniform4f(uTRect,rx,ry,iw,ih); if(wd->kinds[i]=='M') glUniform4f(uTUV,0.f,bf,1.f,1.f-bf-bbf);     else if(nocrop) glUniform4f(uTUV,0.f,0.f,1.f,1.f); else glUniform4f(uTUV,wd->uv[i][0],wd->uv[i][1],wd->uv[i][2],wd->uv[i][3]); glUniform2f(uTView,vw,vh); glUniform1f(uTAlpha,op*(wd->kinds[i]=='M'?wd->ia[i]:1.f)); glUniform2f(uTSize,iw,ih); glUniform1f(uTRad,wd->kinds[i]=='T'?0.f:wd->cr*sc); glUniform4f(uTQuad,rx,ry,iw,ih); glUniform4f(uTClip,px,py,w,h); glUniform1f(uTClipRad,(wd->kinds[i]=='M'&&wd->cr>0.f)?wd->cr*sc:0.f);     { float ff=0.f; if(wd->kinds[i]=='M'&&!nocrop&&ih>0.f){ int covers=(rx<=1.f && ry<=1.f && rx+iw>=(float)vw-1.f && ry+ih>=(float)vh-1.f); ff=(vscis||vflag2||covers)?0.f:(hasb?1.0f:0.6f);                 } if(wd->kinds[i]=='M'&&getenv("VIEWFADE")) ff=(float)atof(getenv("VIEWFADE")); glUniform1f(uTFade,ff); if(getenv("VIEWDBG")&&wd->kinds[i]=='M'){ static int dn=0; if((dn++%30)==0) fprintf(stderr,"[vdbg] %s py=%.1f ih=%.1f h=%.1f vh=%d band=%d bandb=%d nocrop=%d ff=%.3f op=%.2f\n",wd->items[i],(double)py,(double)ih,(double)h,vh,t->band,t->bandb,nocrop,(double)ff,(double)op); } } glDrawArrays(GL_TRIANGLE_STRIP,0,4); glUniform1f(uTFade,0.f); if(vscis) glDisable(GL_SCISSOR_TEST); }
    if(wd->clip && g_dh>0){ float sx=(float)g_dw/vw, sy=(float)g_dh/vh; glEnable(GL_SCISSOR_TEST); glScissor((int)(px*sx),(int)(g_dh-(py+h)*sy),(int)(w*sx),(int)(h*sy)); }
    for(int i=0;i<wd->nchildren;i++) draw(wd->children[i], ox+wx, oy+wy, sc, op, vw, vh);
    if(wd->clip) glDisable(GL_SCISSOR_TEST);
}

static SDL_GameController* g_pads[8]; static int g_npads=0;
static const char* g_held=NULL; static Uint32 g_held_t=0, g_held_next=0; static int g_axis_dir[2]={0,0};
static void pad_emit(const char*nm,int down,int rep){ printf("KEY %s %d %d\n",nm,down,rep); fflush(stdout); }
static void pad_hold(const char*nm){ if(!nm){ if(g_held){ pad_emit(g_held,0,0); g_held=NULL; } return; } if(g_held && !strcmp(g_held,nm)) return; if(g_held) pad_emit(g_held,0,0); g_held=nm; if(nm){ pad_emit(nm,1,0); g_held_t=SDL_GetTicks(); g_held_next=g_held_t+400; } }
static void pad_open_all(void){ for(int i=0;i<SDL_NumJoysticks() && g_npads<8;i++) if(SDL_IsGameController(i)){ SDL_GameController*c=SDL_GameControllerOpen(i); if(c){ int dup=0; for(int k=0;k<g_npads;k++) if(g_pads[k]==c) dup=1; if(!dup){ g_pads[g_npads++]=c; fprintf(stderr,"[gamepad] %s conectado\n",SDL_GameControllerName(c)); } } } }
static void pad_event(SDL_Event*e){
    if(e->type==SDL_CONTROLLERDEVICEADDED){ pad_open_all(); return; }
    if(e->type==SDL_CONTROLLERDEVICEREMOVED){ g_npads=0; for(int i=0;i<8;i++) g_pads[i]=NULL; pad_hold(NULL); pad_open_all(); return; }
    if(e->type==SDL_CONTROLLERBUTTONDOWN||e->type==SDL_CONTROLLERBUTTONUP){ int dn=e->type==SDL_CONTROLLERBUTTONDOWN; const char*nm=NULL;
        switch(e->cbutton.button){ case SDL_CONTROLLER_BUTTON_DPAD_UP:nm="up";break; case SDL_CONTROLLER_BUTTON_DPAD_DOWN:nm="down";break; case SDL_CONTROLLER_BUTTON_DPAD_LEFT:nm="left";break; case SDL_CONTROLLER_BUTTON_DPAD_RIGHT:nm="right";break;
            case SDL_CONTROLLER_BUTTON_A:nm="enter";break; case SDL_CONTROLLER_BUTTON_B:nm="back";break; case SDL_CONTROLLER_BUTTON_X:nm="pause";break; case SDL_CONTROLLER_BUTTON_Y:nm="search";break;
            case SDL_CONTROLLER_BUTTON_LEFTSHOULDER:nm="l1";break; case SDL_CONTROLLER_BUTTON_RIGHTSHOULDER:nm="r1";break; case SDL_CONTROLLER_BUTTON_START:nm="start";break; case SDL_CONTROLLER_BUTTON_BACK:nm="back";break; default:break; }
        if(!nm) return; int dir=(!strcmp(nm,"up")||!strcmp(nm,"down")||!strcmp(nm,"left")||!strcmp(nm,"right"));
        if(dir){ if(dn) pad_hold(nm); else if(g_held && !strcmp(g_held,nm)) pad_hold(NULL); } else pad_emit(nm,dn,0); return; }
    if(e->type==SDL_CONTROLLERAXISMOTION && (e->caxis.axis==SDL_CONTROLLER_AXIS_LEFTX||e->caxis.axis==SDL_CONTROLLER_AXIS_LEFTY)){
        int ax=e->caxis.axis==SDL_CONTROLLER_AXIS_LEFTX?0:1; int v=e->caxis.value; int d=v>16000?1:(v<-16000?-1:0);
        if(d!=g_axis_dir[ax]){ g_axis_dir[ax]=d; int X=g_axis_dir[0],Y=g_axis_dir[1]; const char*nm=NULL;
            if(abs(Y)>=abs(X) && Y) nm=Y<0?"up":"down"; else if(X) nm=X<0?"left":"right"; pad_hold(nm); } }
}
static void pad_tick(void){ if(g_held){ Uint32 n=SDL_GetTicks(); if(n>=g_held_next){ pad_emit(g_held,1,1); g_held_next=n+100; } } }

#define SPF 160
static GLuint spf_tex[SPF]; static char spf_loaded[SPF]; static int wm_n=0, wm_b[SPF][4];
static int spf_load(int i){ if(i<0||i>=wm_n) return 0; if(spf_loaded[i]) return 1; char p[700]; snprintf(p,sizeof p,"%s/wm/%03d.rgba",sp_dir,i); FILE*f=fopen(p,"rb"); if(!f) return 0;
    unsigned int h[2]; if(fread(h,4,2,f)!=2){ fclose(f); return 0; } size_t n=(size_t)h[0]*h[1]*4; unsigned char*px=malloc(n); if(fread(px,1,n,f)!=n){ free(px); fclose(f); return 0; } fclose(f);
    glGenTextures(1,&spf_tex[i]); glBindTexture(GL_TEXTURE_2D,spf_tex[i]); glPixelStorei(GL_UNPACK_ALIGNMENT,1); glTexImage2D(GL_TEXTURE_2D,0,GL_RGBA,h[0],h[1],0,GL_RGBA,GL_UNSIGNED_BYTE,px); free(px);
    glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_S,GL_CLAMP_TO_EDGE); glTexParameteri(GL_TEXTURE_2D,GL_TEXTURE_WRAP_T,GL_CLAMP_TO_EDGE); spf_loaded[i]=1; return 1; }
static void spf_drop(int i){ if(i>=0 && i<wm_n && spf_loaded[i]){ glDeleteTextures(1,&spf_tex[i]); spf_loaded[i]=0; } }
static double sp_readyT=-1, sp_fadeT0=-1; static int sp_total=0; static Uint32 sp_t0=0;
static double sp_introT=-1;
static void splash_reset(void){ sp_introT=0;
    sp_t0=SDL_GetTicks(); sp_readyT=-1; sp_fadeT0=-1; sp_n=sp_total; sp_audio_started=0; for(int i=0;i<SPF;i++) if(spf_loaded[i]){ glDeleteTextures(1,&spf_tex[i]); spf_loaded[i]=0; } }
static void splash_draw(int vw,int vh,double t){

    const double TICK=0.032; const int NHOLD=84; static int inited=0; double alpha=1.0;
    if(!inited){ inited=1; char p[700]; snprintf(p,sizeof p,"%s/wm/frames.txt",sp_dir); FILE*ff=fopen(p,"r"); if(ff){ char ln[128]; while(fgets(ln,sizeof ln,ff)){ int a_,b_,c_,d_; if(ln[0]=='F' && sscanf(ln+1,"%d %d %d %d",&a_,&b_,&c_,&d_)==4 && wm_n<SPF){ wm_b[wm_n][0]=a_; wm_b[wm_n][1]=b_; wm_b[wm_n][2]=c_; wm_b[wm_n][3]=d_; wm_n++; } } fclose(ff); } }
    if(wm_n<=NHOLD+1){ sp_n=0; return; }
    if(sp_introT<0) sp_introT=NHOLD*TICK;
    if(g_splash_ready && sp_readyT<0 && t>=sp_introT) sp_readyT=t;
    int idx = t<sp_introT ? (int)(t/TICK) : (sp_readyT<0 ? NHOLD : NHOLD+1+(int)((t-sp_readyT)/TICK));
    if(idx>NHOLD && sp_readyT<0) idx=NHOLD;
    if(idx>=wm_n-1){ idx=wm_n-1; if(sp_fadeT0<0) sp_fadeT0=t; }
    if(sp_fadeT0>=0){ alpha=1.0-(t-sp_fadeT0)/0.6; if(alpha<=0){ sp_n=0; return; } }
    if(sp_readyT>=0) sp_audio_start();
    spf_load(idx); if(t<sp_introT){ spf_load(idx+1); spf_load(idx+2); spf_drop(idx-4); } if(sp_readyT<0){ static int pre=NHOLD+1; if(pre<NHOLD+30 && spf_load(pre)) pre++; } else spf_load(idx+1);
    if(sp_readyT>=0){ spf_drop(idx-3); }
    glEnable(GL_BLEND);
    glUseProgram(prog); glBindVertexArray(vao); glUniform4f(uRect,0,0,vw,vh); glUniform4f(uCUV,0,0,1,1); glUniform2f(uView,vw,vh); glUniform4f(uColor,0,0,0,alpha); glDrawArrays(GL_TRIANGLE_STRIP,0,4);
    if(spf_loaded[idx]){ float sx=vw/1920.f, sy=vh/1080.f; glUseProgram(tprog); glUniform1f(uTClipRad,0.f); glBindVertexArray(vao); glActiveTexture(GL_TEXTURE0); glBindTexture(GL_TEXTURE_2D,spf_tex[idx]); glUniform1i(uTSamp,0);
        glUniform4f(uTRect,wm_b[idx][0]*sx,wm_b[idx][1]*sy,wm_b[idx][2]*sx,wm_b[idx][3]*sy); glUniform4f(uTUV,0,0,1,1); glUniform2f(uTView,vw,vh); glUniform1f(uTAlpha,(float)alpha); glUniform2f(uTSize,wm_b[idx][2]*sx,wm_b[idx][3]*sy); glUniform1f(uTRad,0); glDrawArrays(GL_TRIANGLE_STRIP,0,4); }

    { static int spn_n=-1; static int spn_b[64][4]; char sp3[700];
      if(spn_n<0){ spn_n=0; snprintf(sp3,sizeof sp3,"%s/spin/frames.txt",sp_dir); FILE*ff=fopen(sp3,"r"); if(ff){ char ln[128]; while(fgets(ln,sizeof ln,ff)){ int a_,b_,c_,d_; if(ln[0]=='F' && sscanf(ln+1,"%d %d %d %d",&a_,&b_,&c_,&d_)==4 && spn_n<64){ spn_b[spn_n][0]=a_; spn_b[spn_n][1]=b_; spn_b[spn_n][2]=c_; spn_b[spn_n][3]=d_; spn_n++; } } fclose(ff); } }
      double hold=t-sp_introT;
      if(sp_readyT<0 && hold>0 && spn_n>0){ double sa=hold/0.86; if(sa>1) sa=1; int fi=(int)(t*1000.0/32.0)%spn_n; snprintf(sp3,sizeof sp3,"%s/spin/%03d.rgba",sp_dir,fi); Tex*st=tex_get(sp3);
        if(st){ float s1=vw/1920.f, x0=616*vw/1280.f, y0=552*vw/1280.f; glUseProgram(tprog); glUniform1f(uTClipRad,0.f); glBindVertexArray(vao); glActiveTexture(GL_TEXTURE0); glBindTexture(GL_TEXTURE_2D,st->tex); glUniform1i(uTSamp,0);
            glUniform4f(uTRect,x0+spn_b[fi][0]*s1,y0+spn_b[fi][1]*s1,spn_b[fi][2]*s1,spn_b[fi][3]*s1); glUniform4f(uTUV,0,0,1,1); glUniform2f(uTView,vw,vh); glUniform1f(uTAlpha,(float)sa*alpha); glUniform2f(uTSize,spn_b[fi][2]*s1,spn_b[fi][3]*s1); glUniform1f(uTRad,0); glDrawArrays(GL_TRIANGLE_STRIP,0,4); } } }
    if(getenv("SPLASHSHOT")){ static int shots=0; static double nt=3.0; if(t>nt && shots<3){ nt+=0.2; shots++; unsigned char*pb=malloc((size_t)vw*vh*4); glReadPixels(0,0,vw,vh,GL_RGBA,GL_UNSIGNED_BYTE,pb); char fn[64]; snprintf(fn,sizeof fn,"/tmp/splash_shot%d.ppm",shots); FILE*fo=fopen(fn,"wb"); if(fo){ fprintf(fo,"P6\n%d %d\n255\n",vw,vh); for(int y=vh-1;y>=0;y--) for(int x=0;x<vw;x++){ fwrite(pb+((size_t)y*vw+x)*4,1,3,fo);} fclose(fo);} free(pb);} }
}

int main(int argc,char**argv){
    const char*scenefile = argc>1?argv[1]:"scene.txt";
    int W=1280,H=720;
    setenv("SDL_VIDEO_X11_WMCLASS","netflix",0); setenv("SDL_VIDEO_WAYLAND_WMCLASS","netflix",0);
    SDL_SetHint("SDL_AUDIO_DEVICE_APP_NAME","Netflix"); SDL_SetHint("SDL_APP_NAME","Netflix"); SDL_SetHint("SDL_AUDIO_DEVICE_APP_ICON_NAME","netflix"); SDL_SetHint("SDL_APP_ICON_NAME","netflix"); SDL_SetHint("SDL_AUDIO_DEVICE_STREAM_NAME","Netflix"); SDL_SetHint("SDL_AUDIO_DEVICE_STREAM_ROLE","video");
    if(SDL_Init(SDL_INIT_VIDEO|SDL_INIT_AUDIO|SDL_INIT_GAMECONTROLLER)!=0 && SDL_Init(SDL_INIT_VIDEO|SDL_INIT_GAMECONTROLLER)!=0 && SDL_Init(SDL_INIT_VIDEO)!=0){ fprintf(stderr,"SDL: %s\n",SDL_GetError()); return 1; }
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_PROFILE_MASK,SDL_GL_CONTEXT_PROFILE_ES);
    SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION,3); SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION,0);
    SDL_Window*win=SDL_CreateWindow("Netflix",
        SDL_WINDOWPOS_CENTERED,SDL_WINDOWPOS_CENTERED,W,H,SDL_WINDOW_OPENGL|SDL_WINDOW_RESIZABLE);
    { const char*ib=getenv("NETFLIX_ICON_BMP"); if(ib){ SDL_Surface*is=SDL_LoadBMP(ib); if(is){ SDL_SetWindowIcon(win,is); SDL_FreeSurface(is); } } }
    SDL_GLContext ctx=SDL_GL_CreateContext(win); SDL_GL_SetSwapInterval(1); gl_init();
    printf("[viewer] lendo cena de: %s (hot-reload). ESC/fechar p/ sair.\n", scenefile);
    Widget*scene=NULL; int vw=1920,vh=1080; long long lastm=0;
    { const char*sd=getenv("SPLASH_DIR"); if(sd && !getenv("NOSPLASH")){ snprintf(sp_dir,sizeof sp_dir,"%s",sd); char cp[640]; snprintf(cp,sizeof cp,"%s/count.txt",sd); FILE*cf=fopen(cp,"r"); if(cf){ if(fscanf(cf,"%d",&sp_n)!=1) sp_n=0; sp_total=sp_n; fclose(cf);} } }
    pad_open_all();
    Uint32 t0=SDL_GetTicks();
    int running=1; int frames=0;
    { pthread_t th; for(int w=0;w<2;w++){ if(pthread_create(&th,NULL,tex_worker,NULL)==0) pthread_detach(th); } }
    static double vs_t0=0, vs_last=0, vs_parse=0, vs_draw=0, vs_max=0; static int vs_n=0, vs_slow=0, vs_np=0, vs_na=0; const int vstat=getenv("VIEWSTAT")!=NULL;
    while(running){
        double vf0=vstat?SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency():0;
        g_frame++; g_uploads=0; g_anim_seen=0; g_fstart=SDL_GetPerformanceCounter();
        { struct timespec ts; clock_gettime(CLOCK_REALTIME,&ts); g_now_ms=ts.tv_sec*1000.0+ts.tv_nsec/1e6; }
        pad_tick();
        SDL_Event e; while(SDL_PollEvent(&e)){ if(e.type==SDL_QUIT)running=0; pad_event(&e);
            if(e.type==SDL_KEYDOWN||e.type==SDL_KEYUP){ const char*nm=NULL; switch(e.key.keysym.sym){ case SDLK_UP:nm="up";break; case SDLK_DOWN:nm="down";break; case SDLK_LEFT:nm="left";break; case SDLK_RIGHT:nm="right";break;
                    case SDLK_RETURN:case SDLK_KP_ENTER:case SDLK_SPACE:nm="enter";break; case SDLK_BACKSPACE:case SDLK_ESCAPE:nm="back";break;  case SDLK_PAGEUP:nm="pageup";break; case SDLK_PAGEDOWN:nm="pagedown";break; default:break; }
                if(nm){ printf("KEY %s %d %d\n",nm,e.type==SDL_KEYDOWN,e.key.repeat); fflush(stdout); } } }
        struct stat st; if(stat(scenefile,&st)==0 && (st.st_mtim.tv_sec*1000000000LL+st.st_mtim.tv_nsec)!=lastm){ lastm=st.st_mtim.tv_sec*1000000000LL+st.st_mtim.tv_nsec;
            double pp0=vstat?SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency():0; Widget*ns=parse_scene(scenefile,&vw,&vh); if(ns){ wfree(scene); scene=ns; } if(vstat){ vs_parse+=SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency()-pp0; vs_np++; } }
        int dw,dh; SDL_GL_GetDrawableSize(win,&dw,&dh); glViewport(0,0,dw,dh); g_dw=dw; g_dh=dh; glUseProgram(prog);
        glClearColor(0.02f,0.02f,0.02f,1); glClear(GL_COLOR_BUFFER_BIT);
        double vf1=vstat?SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency():0;
        if(scene) draw(scene,0,0,1,1,vw,vh);
        double vf2=vstat?SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency():0;
        if(g_splash_reset_req){ g_splash_reset_req=0; splash_reset(); }
        if(sp_n>0) splash_draw(vw,vh,(SDL_GetTicks()-sp_t0)/1000.0);
        if(sp_audio && sp_audio_started && SDL_GetQueuedAudioSize(sp_audio)==0){ SDL_CloseAudioDevice(sp_audio); sp_audio=0; }
        if(getenv("SNAP") && ++frames==(getenv("SNAPFRAMES")?atoi(getenv("SNAPFRAMES")):90)){ int pw=dw,ph=dh; unsigned char*px=malloc(pw*ph*4); glReadPixels(0,0,pw,ph,GL_RGBA,GL_UNSIGNED_BYTE,px);
            FILE*o=fopen(getenv("SNAP"),"wb"); fprintf(o,"P6\n%d %d\n255\n",pw,ph); for(int y=ph-1;y>=0;y--) for(int x=0;x<pw;x++){ fwrite(px+(y*pw+x)*4,1,3,o);} fclose(o); free(px); running=0; }
        if(access("/tmp/gibbon_shot_req",F_OK)==0){ unlink("/tmp/gibbon_shot_req"); int sw=g_dw,sh=g_dh; unsigned char*pp=malloc((size_t)sw*sh*4); if(pp){ glPixelStorei(GL_PACK_ALIGNMENT,1); glReadPixels(0,0,sw,sh,GL_RGBA,GL_UNSIGNED_BYTE,pp); FILE*fo=fopen("/tmp/gibbon_shot.ppm","wb"); if(fo){ fprintf(fo,"P6\n%d %d\n255\n",sw,sh); for(int y=sh-1;y>=0;y--) for(int x=0;x<sw;x++) fwrite(pp+((size_t)y*sw+x)*4,1,3,fo); fclose(fo); } free(pp); } }
        SDL_GL_SwapWindow(win);
        if(vstat){ double nw=SDL_GetPerformanceCounter()*1000.0/SDL_GetPerformanceFrequency(); double ft=nw-vf0; vs_n++; if(g_anim_seen) vs_na++; if(ft>vs_max) vs_max=ft; if(ft>25){ vs_slow++; fprintf(stderr,"[viewstat-lento] total=%.0fms pre-draw(poll+parse)=%.0f draw=%.0f swap+resto=%.0f uploads=%d\n",ft,vf1-vf0,vf2-vf1,nw-vf2,g_uploads); } if(vs_t0==0) vs_t0=nw; if(nw-vs_t0>2000){ fprintf(stderr,"[viewstat] fps=%.1f frame_max=%.0fms lentos(>25ms)=%d cenas/s=%.1f anim_quadros/s=%.1f parse_ms_medio=%.2f\n", vs_n*1000.0/(nw-vs_t0), vs_max, vs_slow, vs_np*1000.0/(nw-vs_t0), vs_na*1000.0/(nw-vs_t0), vs_np?vs_parse/vs_np:0); vs_t0=nw; vs_n=0; vs_na=0; vs_max=0; vs_slow=0; vs_np=0; vs_parse=0; } }
    }
    SDL_GL_DeleteContext(ctx); SDL_DestroyWindow(win); SDL_Quit(); return 0;
}
