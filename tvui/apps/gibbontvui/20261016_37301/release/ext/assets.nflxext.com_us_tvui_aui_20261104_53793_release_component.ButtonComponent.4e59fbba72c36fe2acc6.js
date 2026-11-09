(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[5411],{83882:function(e,n,t){var r=t(50113).default
n.ButtonComponent=function(e){var n,r,g=e.additionalProps,f=e.clcsComponent,C=e.clientOnlyProps,x=e.focused,w=e.styleProps,E=f.key,F=f.testId,P=(0,(c||(c=t(5004))).useClcsData)(E),T=P.clcsData,B=P.clcsMetaData,N=(null!=C?C:{}).preSubmitCallback,M=T.buttonSize,R=T.claimFocusWhenExecutable,K=T.disabledUntilExecutable,O=T.icon,D=T.label,A=T.loggingCommand,q=T.loggingViewName,U=T.onPress,z=T.trackingInfo,W=T.type,j=B._metaProps,G=(0,(i||(i=t(54639))).useDispatch)(),H=(0,(c||(c=t(5004))).useClcsScreenContext)(),J=H.renditionId,Q=H.sessionId,X=(0,(i||(i=t(54639))).useSelector)((function(e){return(0,(h||(h=t(54179))).getFields)(e,Q,J)})),Y=(0,(i||(i=t(54639))).useStore)(),Z=(0,(o||(o=t(76912))).useFocusPath)(E),$=(0,(v||(v=t(5729))).useFocusLogging)(null!=q?q:"undefinedClcsClientButtonCommand",z),ee=(0,y.default)($,2),ne=ee[0],te=ee[1],re=(0,(b||(b=t(3453))).useOnPressLogging)(q),ae=(0,(m||(m=t(51502))).useTrackable)({componentType:f.__typename,loggingViewName:q}).onPresentedChange,ue=g.contentStretch,oe=g.layoutSpacing,ie=g.loggingViewName,se=g.route,le=g.serverState,ce=g.setState,de=g.transitionState,ge=(w||{}).layoutStretch,fe=null==D?void 0:D.value,ve=U?(0,(d||(d=t(30285))).getRootEffectData)(U):void 0,pe=null==ve?void 0:ve.inputFieldRequirements,be=(0,(p||(p=t(18123))).useGetSubmitActionCallback)(U,{loggingCommand:null!=A?A:null,loggingViewName:q,parentLoggingViewName:ie,route:se,serverState:le,setState:ce,trackingInfo:z,transitionState:de}),me=(0,_.useState)(!1),Ce=(0,y.default)(me,2),he=Ce[0],ke=Ce[1];(0,_.useEffect)((function(){I({fields:X,inputFieldRequirements:pe,renditionId:J,sessionId:Q,store:Y}).then(ke)}),[X,pe,J,Q,Y]),(0,_.useEffect)((function(){R&&null!=pe&&pe.length&&he&&G((0,(u||(u=t(47136))).moveFocus)({path:Z}))}),[R,G,Z,pe,he])
var ye=(0,_.useRef)(!1),Se=(0,_.useCallback)((function(){return(0,S.default)().async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ye.current){e.next=2
break}return e.abrupt("return",void 0)
case 2:return ye.current=!0,e.prev=3,re(),e.next=7,(0,S.default)().awrap(null==N?void 0:N())
case 7:return e.next=9,(0,S.default)().awrap(I({fields:X,inputFieldRequirements:pe,renditionId:J,sessionId:Q,shouldUpdateValidationStatus:!0,store:Y}))
case 9:if(!e.sent||!be){e.next=13
break}return e.next=13,(0,S.default)().awrap(be())
case 13:return e.prev=13,ye.current=!1,e.finish(13)
case 16:case"end":return e.stop()}}),null,null,[[3,,13,16]],Promise)}),[X,pe,re,N,J,Q,Y,be]),xe=(0,_.useMemo)((function(){return{test_id:F}}),[F])
if(!fe||!be)return(a||(a=t(65361))).consolidatedLogger.logEvent("DebugEvent",{data:{label:fe,loggingCommand:A,loggingViewName:q,serverState:le,trackingInfo:z},message:"CLCSButtonComponentError"}),null
var _e=null!=(n=null==j?void 0:j.minWidth)?n:150,Ve=ue||(null==j?void 0:j.forceWidth)
return(0,k.j)((s||(s=t(9286))).Button,{__update_handlers__:V,accessibilityText:fe,align:"center-horizontal",disabled:!!K&&!he,focused:x,focusKey:E,icon:(0,(l||(l=t(42706))).iconTypeFromKebabCase)(null==O?void 0:O.token),layoutSpacing:oe,layoutStretch:ge||null!=j&&j.contentStretch?1:void 0,minWidth:Ve?void 0:_e,name:null!=F?F:E,onBlur:te,onFocus:ne,onPresentedChange:ae,onSubmit:Se,size:L(M),testAttributes:xe,text:fe,type:null==W?void 0:W.toLowerCase(),width:Ve&&null!=(r=null==j?void 0:j.width)?r:void 0},E,null)}
var a,u,o,i,s,l,c,d,g,f,v,p,b,m,C,h,k=t(80569),y=r(t(30780)),S=r(t(35972)),x=r(t(93920)),_=t(38159),V=["onBlur","onFocus","onPresentedChange"]
function I(e){var n,r,a,u,o,i,s,l,c,d,v,p,b,m,h,k,y,_,V
return(0,S.default)().async((function(I){for(;;)switch(I.prev=I.next){case 0:if(n=e.fields,r=e.inputFieldRequirements,a=e.renditionId,u=e.sessionId,o=e.shouldUpdateValidationStatus,i=void 0!==o&&o,s=e.store,null!=r&&r.length){I.next=3
break}return I.abrupt("return",!0)
case 3:l=!0,c=(0,x.default)(r.filter((function(e){return e.required}))),I.prev=5,c.s()
case 7:if((d=c.n()).done){I.next=31
break}v=d.value,p=v.field,b=p.__typename,m=n[p.id],I.t0=b,I.next="CLCSStringField"===I.t0?15:"CLCSBooleanField"===I.t0?21:"CLCSIntegerField"===I.t0?25:28
break
case 15:return h=m,I.next=18,(0,S.default)().awrap((0,(f||(f=t(56523))).validateStringField)(p,(null==h?void 0:h.value)||""))
case 18:return(k=I.sent).isValid||(i&&s.dispatch((0,(C||(C=t(62202))).updateFieldValue)(u,a,p,{validationError:k.errorMessage,value:null==h?void 0:h.value})),l=!1),I.abrupt("break",29)
case 21:return y=m,(_=(0,(g||(g=t(54785))).validateBooleanField)(p,null==y?void 0:y.value)).isValid||(i&&s.dispatch((0,(C||(C=t(62202))).updateFieldValue)(u,a,p,{mustBeTrue:null==y?void 0:y.mustBeTrue,validationError:_.errorMessage,value:null==y?void 0:y.value})),l=!1),I.abrupt("break",29)
case 25:return V=m,Number.isInteger(null==V?void 0:V.value)||(l=!1),I.abrupt("break",29)
case 28:l=!1
case 29:I.next=7
break
case 31:I.next=36
break
case 33:I.prev=33,I.t1=I.catch(5),c.e(I.t1)
case 36:return I.prev=36,c.f(),I.finish(36)
case 39:return I.abrupt("return",l)
case 40:case"end":return I.stop()}}),null,null,[[5,33,36,39]],Promise)}function L(e){switch(e){case null:case void 0:return"standard"
case"LARGE":return"large"
case"STANDARD":return"standard"
case"COMPACT":return"small"
default:return"standard"}}},54785:function(e,n){n.__esModule=!0,n.validateBooleanField=function(e,n){if(e.mustBeTrue){var t
if(null==(t=e.errorMessage)||!t.value)throw new Error("Boolean field marked as mustBeTrue but has no error message")
if(!n)return{errorMessage:e.errorMessage.value,isValid:!1}}return{isValid:!0}}},56523:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.validateStringField=function(e,n){var r,i,d,g,f,v,p,b,m,C,h,k,y
return(0,o.default)().async((function(S){for(;;)switch(S.prev=S.next){case 0:if(r=e.validations){S.next=3
break}return S.abrupt("return",{errorMessage:void 0,isValid:!0})
case 3:i=(0,u.default)(r),S.prev=4,i.s()
case 6:if((d=i.n()).done){S.next=40
break}if(f=d.value,v=!0,p=f.check,b=null!=(g=f.errorMessage.value)?g:"","CLCSStringValueCheckLength"!==p.__typename){S.next=16
break}m=p.maxLength,C=p.minLength,v=c(C,m,n),S.next=36
break
case 16:if("CLCSStringValueCheckPattern"!==p.__typename){S.next=21
break}(h=p.pattern)?v=l(h,n):(a||(a=t(65361))).consolidatedLogger.logEvent("DebugEvent",{data:{error:"ValidationIncomplete",type:p.__typename,validationName:"ClcsStringValidation"},message:"CLCSValidationError"}),S.next=36
break
case 21:if("CLCSStringValueCheckClientPhoneNumberValidation"!==p.__typename){S.next=35
break}return k=p.countryCode,y=n.toString(),S.prev=24,S.next=27,(0,o.default)().awrap(s(null!=y?y:"",k))
case 27:v=S.sent,S.next=33
break
case 30:S.prev=30,S.t0=S.catch(24),v=!1
case 33:S.next=36
break
case 35:(a||(a=t(65361))).consolidatedLogger.logEvent("DebugEvent",{data:{error:"ValidationUnrecognized",type:p.__typename,validationName:"ClcsStringValidation"},message:"CLCSValidationError"})
case 36:if(v){S.next=38
break}return S.abrupt("return",{errorMessage:b,isValid:!1})
case 38:S.next=6
break
case 40:S.next=45
break
case 42:S.prev=42,S.t1=S.catch(4),i.e(S.t1)
case 45:return S.prev=45,i.f(),S.finish(45)
case 48:return S.abrupt("return",{errorMessage:void 0,isValid:!0})
case 49:case"end":return S.stop()}}),null,null,[[4,42,45,48],[24,30]],Promise)}
var a,u=r(t(93920)),o=r(t(35972)),i=Promise.resolve().then(t.t.bind(t,79845,23))
function s(e,n){var t,r,a,u
return(0,o.default)().async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.default)().awrap(i)
case 2:return t=s.sent,r=t.default,a=r.PhoneNumberUtil.getInstance(),u=a.parseAndKeepRawInput(e,n),s.abrupt("return",a.isPossibleNumber(u))
case 7:case"end":return s.stop()}}),null,null,null,Promise)}function l(e,n){return!e||new RegExp(e).test(n)}function c(e,n,t){return!(null!=e&&t.length<e||null!=n&&t.length>n)}},5729:function(e,n,t){var r,a
n.__esModule=!0,n.useFocusLogging=function(e,n){var i=(0,o.useRef)()
return(0,o.useEffect)((function(){return function(){i.current&&((r||(r=t(32301))).focusLogger.endSession(i.current),i.current=void 0)}}),[]),[(0,(a||(a=t(71533))).useEvent)((function(){i.current=(r||(r=t(32301))).focusLogger.startSession({trackingInfo:(0,(u||(u=t(39568))).parseTrackingInfo)(null!=n?n:""),view:e})})),(0,o.useCallback)((function(){(r||(r=t(32301))).focusLogger.endSession(i.current),i.current=void 0}),[])]}
var u,o=t(38159)},63857:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.useOnComponentVisibleLogging=function(e){var n=(0,(u||(u=t(5004))).useClcsScreenContext)().currentTrackingInfo,r=(0,l.useRef)(!1),c=(0,(a||(a=t(71533))).useEvent)((function(){(i||(i=t(1490))).clcsNtlLogger.logOnComponentVisible((0,s.default)({},(0,(o||(o=t(87291))).baseFields)(n),{targetComponent:e})),r.current=!0})),d=(0,(a||(a=t(71533))).useEvent)((function(){r.current&&((i||(i=t(1490))).clcsNtlLogger.logOnComponentVisibleEnd((0,s.default)({},(0,(o||(o=t(87291))).baseFields)(n),{targetComponent:e})),r.current=!1)}))
return(0,l.useEffect)((function(){return d}),[d]),{onPresentedChange:(0,(a||(a=t(71533))).useEvent)((function(e){e.presented?c():d()}))}}
var a,u,o,i,s=r(t(93090)),l=t(38159)},3453:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.useOnPressLogging=function(e){var n=(0,(u||(u=t(5004))).useClcsScreenContext)().currentTrackingInfo
return(0,(a||(a=t(71533))).useEvent)((function(){(i||(i=t(1490))).clcsNtlLogger.logOnPress((0,s.default)({},(0,(o||(o=t(87291))).baseFields)(n),{targetComponent:null!=e?e:"unknown"}))}))}
var a,u,o,i,s=r(t(93090))},51502:function(e,n,t){var r
n.__esModule=!0,n.useTrackable=function(e){var n=e.componentType,a=e.loggingViewName
return(0,(r||(r=t(63857))).useOnComponentVisibleLogging)(null!=a?a:n)}},42706:function(e,n,t){n.__esModule=!0,n.iconColorFromKebabCase=function(e){var n=(0,r.pascalCase)(e)
return l(n)?n:void 0},n.iconTypeFromKebabCase=function(e){var n
if(e)return null!=(n=o[e])?n:i[(0,r.pascalCase)(e)]}
var r=t(25545),a=t(30966),u=Object.keys(a.IconType).reduce((function(e,n){var t=a.IconType[n]
return e.IconTypeByKebabName[t]=t,e.IconTypeByPascalCaseKey[n]=t,e}),{IconTypeByKebabName:{},IconTypeByPascalCaseKey:{}}),o=u.IconTypeByKebabName,i=u.IconTypeByPascalCaseKey,s=function(e){return Object.keys(e).reduce((function(e,n){return e[n]=!0,e}),{})}(a.IconColor)
function l(e){return!(!e||!s[e])}}}])


