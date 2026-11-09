(this.webpackJsonp=this.webpackJsonp||[]).push([[85],{"0Pw/":function(e,t,n){var s,i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var r="LolomoTtr",d=0,u={speculativeEnd:function(e,t,u){if(0!==d){var l=nrdp.mono(),c=(0,(void 0===s?s=a(n("6vuC")):s).default)()
c.startTrace("ttr",{args:{status:(void 0===o?o=a(n("jVEl")):o).default.convertSessionEndType(t),switchedProfile:this.switchedProfile()},cat:"combo",eventType:"timing",ts:1e3*d}),c.endTrace("ttr",{ts:1e3*l})
var p=c.finish(),h=(0,(i||(i=n("/a/C"))).flushImageTraces)(u)
null!=h&&h.traceEvents&&Array.prototype.push.apply(p.traceEvents,h.traceEvents),(void 0===o?o=a(n("jVEl")):o).default.end(r,p),d=0}},start:function(e){d=e.eventStartTime||nrdp.mono(),(void 0===o?o=a(n("jVEl")):o).default.startContext(r,e),(0,(i||(i=n("/a/C"))).resetImageTraces)()},switchedProfile:function(){var e=(void 0===o?o=a(n("jVEl")):o).default.getStartData(r)
return!(null!=e&&e.sameProfile)}}
t.default=u},"3SIe":function(e,t,n){var s=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i=s(n("Ki15")),o=n("xNxB"),a=s(n("ctEV")),r=s(n("3ovq")),d=s(n("5r0+")),u=n("qusM"),l=n("ohW6"),c=s(n("uRqt")),p=s(n("E9LI")),h=s(n("ACWi")),v=i.default.onEnter,f=(0,o.compose)(a.default,p.default,u.withTransitionAnimation,r.default,v((function(e){var t=e.texttospeech
return t&&t.inBrowse})),(0,d.default)({shouldSkipSessionOnResume:function(e){return!e.active},shouldStartSessionAtMount:function(e){return!e.active&&e.recordAppTTR},tag:"browse"}),l.provider,(0,h.default)())
t.default=f(c.default)},"4fqt":function(e,t,n){var s=n("TqRt").default
t.__esModule=!0,t.withDepthTransitionRoot=t.name=void 0
var i,o,a=s(n("siCl")),r=n("KBg7"),d=n("kCWc"),u=s(n("N9EI")),l=n("HYX5"),c=n("yf0s"),p=n("ViK9"),h=[r.TemplateKey.BrowseBackground],v=function(e){return e.templateKey!==r.TemplateKey.BrowseBackground},f=(0,c.isEvery)(c.isFromPlaymode,c.isToDetail),S=t.name=l.BROWSE
t.withDepthTransitionRoot=(0,u.default)({fallbackAnimationConfig:p.transitionAnimationConfig,getAdditionalMetadata:(0,d.filterMetadata)(h),name:S,onRootEntering:function(e){var t=e.metadata,s=(0,c.isHorizontalTransition)()||f()?[]:void 0===o?o=[n("1EjG").name]:o,r=(0,(i||(i=n("9IR/"))).getFeature)("browseRewrite")&&(0,c.isHorizontalTransition)()?100:0
return(0,c.onActivationChange)((0,a.default)({},e,{metadata:(0,c.isFromDetail)()?(0,d.customFilterMetadata)(t,v):t,preDelay:r,rootDependency:s}))},onRootExiting:function(e){var t=e.metadata,s=(0,c.isHorizontalTransition)()?[]:void 0===o?o=[n("1EjG").name]:o
return(0,c.onActivationChange)((0,a.default)({},e,{metadata:(0,c.isToDetail)()?(0,d.customFilterMetadata)(t,v):t,rootDependency:s}))}})},"5r0+":function(e,t,n){var s=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i=s(n("PzA4"))
t.default=(0,i.default)()},ACWi:function(e,t,n){t.__esModule=!0,t.default=void 0
var s,i=n("pbgz"),o=n("RzHp"),a=((s={})[o.LOLOMO_TYPE.tvLolomo]="series",s[o.LOLOMO_TYPE.movieLolomo]="movies",s)
function r(e,t,n){return e.id===a[t]||e.id===n}t.default=function(e){var t=(void 0===e?EMPTY_OBJECT:e).appMenuId
return function(e){return(0,i.Falcor)(e,{getBasePath:function(){return[]},getPaths:function(){return[["appMenu","summary"]]},selector:function(e,n,s){var i,o,a=null==(i=e.appMenu)||null==(i=i.summary)?void 0:i.items
if(!a)return EMPTY_OBJECT
for(var d=0;!o&&d<a.length;){var u=a[d]
r(u,s.lolomoType,t)&&(o=u),d++}return o?{textLegend:{text:o.title}}:EMPTY_OBJECT}})}}},MnxG:function(e,t,n){var s=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i=s(n("3SIe")),o=s(n("Lk1/")),a=n("HYX5")
t.default=new o.default({initialFocusPath:a.BROWSE,payload:{Browse:i.default}})},PzA4:function(e,t,n){var s=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i,o,a,r,d,u,l,c,p=n("igsZ"),h=s(n("VbXa")),v=n("nq1N"),f=n("bGSL"),S=n("VAQf"),T=n("/P98"),m="SessionCanceled",_="MeasureTTRSuspend",R="MeasureTTRResume",g=0
t.default=function(e){return void 0===e&&(e=(i||(i=n("Mmf2"))).consolidatedLogger),function(t){var i=t.getSessionType,C=t.readyToMeasure,y=t.setActiveOnMount,E=void 0!==y&&y,M=t.shouldSkipSessionOnResume,A=t.shouldStartSession,L=t.shouldStartSessionAtMount,w=t.tag
return function(t){function y(){this._endSessionType=m,this.concludeSession()}function I(){(E||this.props.active)&&(this._active=!0),(0,(r||(r=n("zS29"))).handleResume)(),this._suspended=!1
var e=null==M?void 0:M(this.props)
this._active&&!e&&this.startSession(this.props,this.props),this.update(this.props,this.props),this.forceUpdate()}function O(){this._suspended=!0,this.cancelSession(),this.resetInternalState(),(0,(r||(r=n("zS29"))).resetTtrStateOnSuspend)(),this._active=!1,this._loadedUrls=[]}function P(e){this._treeHasLoaded,this._treeHasLoaded=!0
var t=Array.isArray(e)?e.reduce((function(e,t){var n
return e.numberOfImagesLoaded+=(null==t?void 0:t.numberOfImagesLoaded)||0,e.successCount+=(null==t?void 0:t.successCount)||0,e.errorCount+=(null==t?void 0:t.errorCount)||0,e.abandonedCount+=(null==t?void 0:t.abandonedCount)||0,v.SHOULD_TRACK_URLS&&(e.urls=null==(n=e.urls)?void 0:n.concat((null==t?void 0:t.urls)||[])),e}),{abandonedCount:0,bubbles:!1,captures:!1,errorCount:0,numberOfImagesLoaded:0,successCount:0,target:null,urls:[]}):e
v.SHOULD_TRACK_URLS&&(this._loadedUrls=this._loadedUrls.concat((null==t?void 0:t.urls)||[])),this._endSessionType=0===(null==t?void 0:t.errorCount)?"SessionEnded":"ActionFailed",this.concludeSession()}function b(t,d){if(!this._clSessionId&&!this._suspended){var u,l=(0,(r||(r=n("zS29"))).hasAppTtrSessionStarted)(),p=i?i(t,d,l):"RenderNavigationLevel"
l?((0,(o||(o=n("T+VI"))).startLocalTimingsMeasurement)("pageTTR",(0,S.now)()),(0,(r||(r=n("zS29"))).getProfileSelectTime)()&&(u={actualTime:(0,(r||(r=n("zS29"))).getProfileSelectTime)(),switchedProfile:(void 0===a?a=s(n("0Pw/")):a).default.switchedProfile()},(0,(r||(r=n("zS29"))).clearProfileSelectTime)())):(u=(0,(r||(r=n("zS29"))).isWarmStart)()?{actualTime:(0,(c||(c=n("u30j"))).lastResumeEpochTime)(),appStartType:"warm"}:{actualTime:(0,(c||(c=n("u30j"))).lastStartEpochTime)(),appStartType:"cold"},(0,(r||(r=n("zS29"))).setHasStartedAppTtrSession)(E)),this._clSessionId=e.startSession(p,u)}}var z=function(i){function o(e){var t=i.call(this,e)||this
t._active=!1,t._clSessionId=null,t._endSessionType=null,t._haveConcludedSession=!1,t._loadedUrls=[],t._suspendResumeId=g++,t._suspended=void 0,t._treeHasLoaded=!1,t.startSession=b.bind(t),t.handleTreeLoaded=P.bind(t),t.handleAppSuspend=O.bind(t),t.handleAppResume=I.bind(t),t.cancelSession=y.bind(t),t._suspended=(0,(u||(u=n("e4o4"))).getSuspended)()
var s=t._suspendResumeId=g++
return(E||t.props.active)&&(t._active=!0),(0,(l||(l=n("O5/t"))).setSuspendTask)(_+s,t.handleAppSuspend),(0,(l||(l=n("O5/t"))).setResumeTask)(R+s,t.handleAppResume),t.update({},t.props),L&&L(t.props)&&t.startSession(t.props,t.props),t}(0,h.default)(o,i)
var c=o.prototype
return c.UNSAFE_componentWillReceiveProps=function(e){this.update(this.props,e)},c.componentWillUnmount=function(){var e=this._suspendResumeId;(0,(l||(l=n("O5/t"))).deleteSuspendTask)(_+e),(0,(l||(l=n("O5/t"))).deleteResumeTask)(R+e),this.cancelSession()},c.resetInternalState=function(){this._haveConcludedSession=!1,this._treeHasLoaded=!1,this._endSessionType=null,this._clSessionId=null},c.concludeSession=function(){var t=this._endSessionType===m
!this._haveConcludedSession&&this._clSessionId&&(t||this._active)&&this._endSessionType&&(e.endSession(this._clSessionId,{type:this._endSessionType}),v.SHOULD_TRACK_URLS,(0,(r||(r=n("zS29"))).measureTTRCompleted)(this._endSessionType,this._loadedUrls),(void 0===a?a=s(n("0Pw/")):a).default.speculativeEnd(w,this._endSessionType,this._loadedUrls),this._haveConcludedSession=!0,this._clSessionId=null)},c.update=function(e,t){A&&A(e,t)?(this.cancelSession(),this.resetInternalState(),this.startSession(e,t)):(0,(d||(d=n("NEM1"))).isComponentBecomingActive)(e,t)?this.startSession(e,t):(0,(d||(d=n("NEM1"))).isComponentBecomingInactive)(e,t)&&(this.cancelSession(),this.resetInternalState(),this._active=!1),!this._active&&t.active&&(this._active=!0,this.concludeSession())},c.render=function(){return this._treeHasLoaded?(0,p.j)(t,this.props,null,null):!C||C(this.props)?(0,p.j)(t,{__proto__:this.props,onTreeLoaded:this._suspended?void 0:this.handleTreeLoaded,onViewportChanged:this.cancelSession},null,null):(0,p.j)(t,{__proto__:this.props,onViewportChanged:this.cancelSession},null,null)},o}(T.Component)
return z.displayName=(0,f.higherOrderName)("MeasureTTR",t),z}}}},qusM:function(e,t,n){t.__esModule=!0,t.withTransitionAnimation=void 0
var s,i=(0,n("9IR/").getFeatures)(),o=i.enableDepthTransition,a=i.routeTransitionsEnabled
s=o?n("4fqt").withDepthTransitionRoot:a?n("ViK9").withTransitionAnimation:n("P1w9").identity,t.withTransitionAnimation=s}}])


