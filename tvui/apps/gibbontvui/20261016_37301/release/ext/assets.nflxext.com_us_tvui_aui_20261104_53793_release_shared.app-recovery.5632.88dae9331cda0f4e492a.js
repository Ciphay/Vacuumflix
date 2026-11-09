(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[5632],{53251:function(e,o,a){var c=a(50113).default
o.__esModule=!0,o.initAppRecovery=function(e){e&&e.on("refreshApp",l)},o.registerCacheEvictionHandlers=function(e){u=e}
var r,n,i=c(a(20244)),t=(a(18755),a(12160)),u={}
function l(e){e.uiDataCacheRefresh&&h(),e.uiBookmarksCacheRefresh&&p(),e.uiRefresh&&f()}function h(){d("GraphQL cache",s),d("Gibbon disk cache",(function(){var e
return null==(e=nrdp.gibbon.diskCache)?void 0:e.clear()})),d("Surface cache",(function(){return null==nrdp.gibbon.garbageCollect?void 0:nrdp.gibbon.garbageCollect(void 0,"graphics")})),d("Sprite caches",(function(){(0,t.clearSpriteCache)(),(0,t.clearUrlCache)()})),d("UIBoot fallback",(n||(n=a(32485))).clearFallbackUibootData)}function s(){(0,a(91818).invalidateQueryResults)()}function p(){u.onEvictBookmarkCaches&&d("Bookmark caches",u.onEvictBookmarkCaches)}function f(){(0,(void 0===r?r=c(a(79633)):r).default)({origin:"appRecovery"})}function d(e,o){try{o()}catch(o){try{new i.default({data:{label:e},innerError:o instanceof Error?o:{message:o+""},persistToPrototype:!1,source:"appRecovery",type:"AppRecoveryCacheEvictionError"}).logAsHandledException()}catch(e){}}}}}])


