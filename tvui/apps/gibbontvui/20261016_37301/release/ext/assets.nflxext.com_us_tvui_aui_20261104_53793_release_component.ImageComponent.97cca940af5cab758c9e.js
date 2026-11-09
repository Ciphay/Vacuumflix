(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[5022],{23412:function(e,n,t){var o=t(50113).default
n.ImageComponent=function(e){var n,o,d=e.additionalProps,g=e.clcsComponent,v=g.__typename,h=g.key,p=g.testId,m=(0,(u||(u=t(5004))).useClcsData)(h),f=m.clcsData,_=m.clcsMetaData,C=f.image,w=_._metaProps,I=d.layoutSpacing,P=d.parentStackWidth,b=(0,(r||(r=t(37303))).convertClcsImageToImageProps)(C).source,T=(0,(a||(a=t(51502))).useTrackable)({componentType:v}).onPresentedChange,k=(0,c.useMemo)((function(){return{test_id:p}}),[p])
if(null===(null==C?void 0:C.width)||null===(null==C?void 0:C.height))return(0,s.j)((l||(l=t(92093))).Image,{__proto__:{layoutSpacing:I,name:h,source:b},onPresentedChange:T},null,null)
var V={halign:"aspect",layoutSpacing:I,name:null!=p?p:h,source:b,valign:"aspect",width:Math.min(null!=(n=null==w?void 0:w.width)?n:1/0,null!=P?P:1/0,null!=(o=null==C?void 0:C.width)?o:0)||void 0}
return(0,s.j)((l||(l=t(92093))).Image,(0,i.default)({testAttributes:k},{__proto__:V,onPresentedChange:T,valign:"center"}),null,null)}
var l,u,r,a,i=o(t(93090)),s=t(80569),c=(t(45872),t(38159))
t(41289)},37303:function(e,n,t){var o
n.__esModule=!0,n.convertClcsImageToImageProps=function(e){var n,l,u=(0,(o||(o=t(1820))).resolveImageUrlData)(e),r=null!=(n=null==e?void 0:e.height)?n:void 0,a=null!=(l=null==e?void 0:e.width)?l:void 0
return{height:r,source:u?{height:r,url:u,width:a}:void 0,width:a}}},1820:function(e,n,t){var o
n.__esModule=!0,n.resolveImageSource=function(e){var n,t
if(null!=e&&e.url){var o=a(e)
return{height:null!=(n=e.height)?n:void 0,url:null!=o?o:"",width:null!=(t=e.width)?t:void 0}}},n.resolveImageUrlData=a
var l="TV_720P",u=720,r={TV_1080P:1080,TV_2160P:2160,TV_720P:720}
function a(e){var n,a=(null==e?void 0:e.url)||void 0
if(a){var i=(0,(o||(o=t(96279))).getResolutionMode)()
n={url:a}
var s=r[i||l]||u,c=r[i]||u
n.scale=c/s}return n}},63857:function(e,n,t){var o=t(50113).default
n.__esModule=!0,n.useOnComponentVisibleLogging=function(e){var n=(0,(u||(u=t(5004))).useClcsScreenContext)().currentTrackingInfo,o=(0,s.useRef)(!1),c=(0,(l||(l=t(71533))).useEvent)((function(){(a||(a=t(1490))).clcsNtlLogger.logOnComponentVisible((0,i.default)({},(0,(r||(r=t(87291))).baseFields)(n),{targetComponent:e})),o.current=!0})),d=(0,(l||(l=t(71533))).useEvent)((function(){o.current&&((a||(a=t(1490))).clcsNtlLogger.logOnComponentVisibleEnd((0,i.default)({},(0,(r||(r=t(87291))).baseFields)(n),{targetComponent:e})),o.current=!1)}))
return(0,s.useEffect)((function(){return d}),[d]),{onPresentedChange:(0,(l||(l=t(71533))).useEvent)((function(e){e.presented?c():d()}))}}
var l,u,r,a,i=o(t(93090)),s=t(38159)},51502:function(e,n,t){var o
n.__esModule=!0,n.useTrackable=function(e){var n=e.componentType,l=e.loggingViewName
return(0,(o||(o=t(63857))).useOnComponentVisibleLogging)(null!=l?l:n)}}}])


//# sourceMappingURL=component.ImageComponent.97cca940af5cab758c9e.js.map