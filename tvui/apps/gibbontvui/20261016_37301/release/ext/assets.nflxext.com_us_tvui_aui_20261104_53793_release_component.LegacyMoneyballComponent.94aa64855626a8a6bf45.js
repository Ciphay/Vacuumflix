(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[9343],{27906:function(e,n,o){var a=o(50113).default
n.LegacyMoneyballComponent=function(e){var n=e.clcsComponent.key,a=(0,(s||(s=o(5004))).useClcsData)(n).clcsData,l=(0,(t||(t=o(54639))).useDispatch)(),i=(0,(s||(s=o(5004))).useClcsScreenContext)().sessionId,p=(0,c.useRef)(!1),r=a.payloadJson?JSON.parse(a.payloadJson):null
return(0,c.useEffect)((function(){r&&!p.current&&(p.current=!0,l({payload:(0,u.default)({},r,{action:void 0,sessionId:i,wait:!1}),type:"UPDATE_FLOW"}))}),[l,r,i]),null}
var t,s,u=a(o(93090)),c=o(38159)}}])


