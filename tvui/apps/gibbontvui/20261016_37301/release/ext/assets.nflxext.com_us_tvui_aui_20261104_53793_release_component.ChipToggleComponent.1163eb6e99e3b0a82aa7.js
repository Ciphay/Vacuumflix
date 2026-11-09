(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[3761],{80574:function(e,n,t){var o=t(50113).default
n.ChipToggleComponent=function(e){var n=e.additionalProps,o=e.clcsComponent.key,v=n.route,p=n.serverState,h=n.setState,S=n.transitionState,k=(0,(i||(i=t(5004))).useClcsData)(o).clcsData,m=(0,(i||(i=t(5004))).useClcsScreenContext)(),F=(0,(l||(l=t(54639))).useStore)(),I=(0,(a||(a=t(10947))).useTextToSpeech)(),L=(0,(c||(c=t(17594))).useLoading)({route:v,transitionState:S}).setClcsIsLoading,b=k.chipToggleField,w=k.loggingViewName,x=k.options,T=k.trackingInfo,y=(0,(r||(r=t(28657))).useClcsField)(b),V=(0,C.default)(y,1)[0],_=n.layoutSpacing,P=(0,(g||(g=t(3453))).useOnPressLogging)(w),E=x.map((function(e){var n,o,u,l=(0,(s||(s=t(94642))).createEffectCallback)(e.onPress,{clcsContext:m,loggingCommand:null,loggingViewName:w,route:v,serverState:p,setClcsIsLoading:L,setState:h,store:F,textToSpeech:I,trackingInfo:T})
return{icon:null==(n=e.icon)?void 0:n.token,id:e.chipValue,label:null!=(o=null==(u=e.label)?void 0:u.value)?o:e.chipValue,onFocus:(0,(s||(s=t(94642))).createEffectCallback)(e.onFocus,{clcsContext:m,loggingCommand:null,loggingViewName:w,route:v,serverState:p,setClcsIsLoading:L,setState:h,store:F,textToSpeech:I,trackingInfo:T}),onPress:l?function(){return P(),l()}:void 0}})),O=(0,f.h)(E,(function(e){return e.id===V.value}))
return(0,d.j)((u||(u=t(64928))).ChipToggle,{focusKey:o,items:E,layoutSpacing:_,selectedItem:O},null,null)}
var u,l,a,i,s,r,c,g,d=t(80569),f=t(7067),C=o(t(30780))},28657:function(e,n,t){var o=t(50113).default
n.__esModule=!0,n.useClcsField=function(e){var n=(0,(u||(u=t(54639))).useDispatch)(),g=(0,(l||(l=t(5004))).useClcsScreenContext)(),d=g.renditionId,f=g.sessionId
if(!e)throw new Error("useClcsField: invalid field, received null")
var C=(0,(r||(r=t(40148))).useOnChangeLogging)(e.id),v=(0,c.useCallback)((function(o){n((0,(i||(i=t(62202))).updateFieldValue)(f,d,e,{value:o})),C()}),[n,e,C,d,f]),p=(0,(u||(u=t(54639))).useSelector)((function(n){return e.persistedCacheKey?(0,(s||(s=t(54179))).getPersistedCacheValue)(n,f,e.persistedCacheKey):null})),h=(0,c.useMemo)((function(){var n=(0,(void 0===a?a=o(t(74721)):a).default)(e)
return p||{value:n}}),[p,e]),S=(0,(u||(u=t(54639))).useSelector)((function(n){return(0,(s||(s=t(54179))).getFieldById)(n,f,d,e.id)||h})),k=!!(0,(u||(u=t(54639))).useSelector)((function(n){return(0,(s||(s=t(54179))).getFieldById)(n,f,d,e.id)}))
return(0,c.useEffect)((function(){!k&&h.value&&e.id&&n((0,(i||(i=t(62202))).updateFieldValue)(f,d,e,h))}),[n,e,k,h,d,f]),[S,v]}
var u,l,a,i,s,r,c=t(38159)},40148:function(e,n,t){var o=t(50113).default
n.__esModule=!0,n.useOnChangeLogging=function(e){var n=(0,(l||(l=t(5004))).useClcsScreenContext)().currentTrackingInfo
return(0,(u||(u=t(71533))).useEvent)((function(){(i||(i=t(1490))).clcsNtlLogger.logOnChange((0,s.default)({},(0,(a||(a=t(87291))).baseFields)(n),{targetField:null!=e?e:"unknown"}))}))}
var u,l,a,i,s=o(t(93090))},3453:function(e,n,t){var o=t(50113).default
n.__esModule=!0,n.useOnPressLogging=function(e){var n=(0,(l||(l=t(5004))).useClcsScreenContext)().currentTrackingInfo
return(0,(u||(u=t(71533))).useEvent)((function(){(i||(i=t(1490))).clcsNtlLogger.logOnPress((0,s.default)({},(0,(a||(a=t(87291))).baseFields)(n),{targetComponent:null!=e?e:"unknown"}))}))}
var u,l,a,i,s=o(t(93090))}}])


//# sourceMappingURL=component.ChipToggleComponent.1163eb6e99e3b0a82aa7.js.map