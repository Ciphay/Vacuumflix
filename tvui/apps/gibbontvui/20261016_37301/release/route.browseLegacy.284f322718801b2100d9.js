(this.webpackJsonp=this.webpackJsonp||[]).push([[86],{"/Yz2":function(e,t){t.__esModule=!0,t.RELEVANCE_SCORE_STRINGS=void 0,t.RELEVANCE_SCORE_STRINGS=["relevance_score_feedback_thumbs_down","relevance_score_feedback_keep_rating","relevance_score_feedback_thumbs_up","relevance_score_feedback_thumbs_way_up"]},"0Pw/":function(e,t,n){var a,o,s,r=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i="LolomoTtr",u=0,d={speculativeEnd:function(e,t,d){if(0!==u){var l=nrdp.mono(),_=(0,(void 0===a?a=r(n("6vuC")):a).default)()
_.startTrace("ttr",{args:{status:(void 0===s?s=r(n("jVEl")):s).default.convertSessionEndType(t),switchedProfile:this.switchedProfile()},cat:"combo",eventType:"timing",ts:1e3*u}),_.endTrace("ttr",{ts:1e3*l})
var c=_.finish(),p=(0,(o||(o=n("/a/C"))).flushImageTraces)(d)
null!=p&&p.traceEvents&&Array.prototype.push.apply(c.traceEvents,p.traceEvents),(void 0===s?s=r(n("jVEl")):s).default.end(i,c),u=0}},start:function(e){u=e.eventStartTime||nrdp.mono(),(void 0===s?s=r(n("jVEl")):s).default.startContext(i,e),(0,(o||(o=n("/a/C"))).resetImageTraces)()},switchedProfile:function(){var e=(void 0===s?s=r(n("jVEl")):s).default.getStartData(i)
return!(null!=e&&e.sameProfile)}}
t.default=d},"3SIe":function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=a(n("Ki15")),s=n("xNxB"),r=a(n("ctEV")),i=a(n("3ovq")),u=a(n("5r0+")),d=n("qusM"),l=n("ohW6"),_=a(n("uRqt")),c=a(n("E9LI")),p=a(n("ACWi")),f=o.default.onEnter,m=(0,s.compose)(r.default,c.default,d.withTransitionAnimation,i.default,f((function(e){var t=e.texttospeech
return t&&t.inBrowse})),(0,u.default)({shouldSkipSessionOnResume:function(e){return!e.active},shouldStartSessionAtMount:function(e){return!e.active&&e.recordAppTTR},tag:"browse"}),l.provider,(0,p.default)())
t.default=m(_.default)},"4fqt":function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.withDepthTransitionRoot=t.name=void 0
var o,s,r=a(n("siCl")),i=n("KBg7"),u=n("kCWc"),d=a(n("N9EI")),l=n("HYX5"),_=n("yf0s"),c=n("ViK9"),p=[i.TemplateKey.BrowseBackground],f=function(e){return e.templateKey!==i.TemplateKey.BrowseBackground},m=(0,_.isEvery)(_.isFromPlaymode,_.isToDetail),S=t.name=l.BROWSE
t.withDepthTransitionRoot=(0,d.default)({fallbackAnimationConfig:c.transitionAnimationConfig,getAdditionalMetadata:(0,u.filterMetadata)(p),name:S,onRootEntering:function(e){var t=e.metadata,a=(0,_.isHorizontalTransition)()||m()?[]:void 0===s?s=[n("1EjG").name]:s,i=(0,(o||(o=n("9IR/"))).getFeature)("browseRewrite")&&(0,_.isHorizontalTransition)()?100:0
return(0,_.onActivationChange)((0,r.default)({},e,{metadata:(0,_.isFromDetail)()?(0,u.customFilterMetadata)(t,f):t,preDelay:i,rootDependency:a}))},onRootExiting:function(e){var t=e.metadata,a=(0,_.isHorizontalTransition)()?[]:void 0===s?s=[n("1EjG").name]:s
return(0,_.onActivationChange)((0,r.default)({},e,{metadata:(0,_.isToDetail)()?(0,u.customFilterMetadata)(t,f):t,rootDependency:a}))}})},"5r0+":function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=a(n("PzA4"))
t.default=(0,o.default)()},"8uHS":function(e,t){t.__esModule=!0,t.DISPLAY_PAGE_MENU_STRINGS=void 0,t.DISPLAY_PAGE_MENU_STRINGS=["ads_mdp_buttons_change_plan","ads_mdp_buttons_unavailable","mdp_buttons_audioSubtitles","mdp_buttons_contentWarning","mdp_buttons_credits","ab34682_mdp_buttons_cw_remove","mdp_buttons_undo_remove","mdp_buttons_episodesAndMore","mdp_buttons_moreEpisodes","mdp_buttons_moreLikeThis","mdp_buttons_addToList","mdp_queue_adding","billboard_ctas_addToPlaylist","mdp_buttons_removeFromList","mdp_queue_removing","mdp_buttons_saveToList","mdp_queue_saving","mdp_buttons_playMovie","mdp_buttons_playFromBeginning","mdp_buttons_playTrailer","mdp_buttons_unrate","mdp_buttons_rate","sdp_trailers_label"]},ACWi:function(e,t,n){t.__esModule=!0,t.default=void 0
var a,o=n("pbgz"),s=n("RzHp"),r=((a={})[s.LOLOMO_TYPE.tvLolomo]="series",a[s.LOLOMO_TYPE.movieLolomo]="movies",a)
function i(e,t,n){return e.id===r[t]||e.id===n}t.default=function(e){var t=(void 0===e?EMPTY_OBJECT:e).appMenuId
return function(e){return(0,o.Falcor)(e,{getBasePath:function(){return[]},getPaths:function(){return[["appMenu","summary"]]},selector:function(e,n,a){var o,s,r=null==(o=e.appMenu)||null==(o=o.summary)?void 0:o.items
if(!r)return EMPTY_OBJECT
for(var u=0;!s&&u<r.length;){var d=r[u]
i(d,a.lolomoType,t)&&(s=d),u++}return s?{textLegend:{text:s.title}}:EMPTY_OBJECT}})}}},Aaua:function(e,t,n){var a,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=[]
return 0===e.length?u.default.Observable.just(t):(0,(void 0===s?s=o(n("8VqT")):s).default)((0,(a||(a=n("HiI4"))).getRootModel)().get(["videos",e,"current",["bookmark","summary"]])).catch(u.default.Observable.just(null)).filter(Boolean).map((function(t){var a=t.json
return e.map((function(e){var t
return function(e){var t
if(null!=e&&e.summary){var a=e.summary.liveEventExpiry,s=!!(a&&Date.now()<a)
return{movieId:e.summary.id,params:{branched:(0,(void 0===r?r=o(n("o+kE")):r).default)(e.summary)},priority:1,pts:1e3*((null==(t=e.bookmark)?void 0:t.position)||0),uiLabel:s?(i||(i=n("NBal"))).UILabel.Live:void 0}}}(null==(t=a.videos)||null==(t=t[e])?void 0:t.current)})).filter(Boolean)})).catch(u.default.Observable.just(t)).takeLast(1).defaultIfEmpty(t)}
var s,r,i,u=o(n("gisa"))},FxHh:function(e,t,n){var a,o,s,r=n("TqRt").default
t.__esModule=!0,t.getCachedLolomoByType=function(e){void 0===e&&(e=(s||(s=n("RzHp"))).LOLOMO_TYPE.default)
var t=(0,(a||(a=n("HiI4"))).getRootModel)()
return(0,(void 0===o?o=r(n("8VqT")):o).default)(t.withoutDataSource().getValue([e,"summary"])).take(1)}},PzA4:function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,s,r,i,u,d,l,_,c=n("igsZ"),p=a(n("VbXa")),f=n("nq1N"),m=n("bGSL"),S=n("VAQf"),v=n("/P98"),h="SessionCanceled",T="MeasureTTRSuspend",R="MeasureTTRResume",E=0
t.default=function(e){return void 0===e&&(e=(o||(o=n("Mmf2"))).consolidatedLogger),function(t){var o=t.getSessionType,b=t.readyToMeasure,I=t.setActiveOnMount,L=void 0!==I&&I,M=t.shouldSkipSessionOnResume,g=t.shouldStartSession,O=t.shouldStartSessionAtMount,P=t.tag
return function(t){function I(){this._endSessionType=h,this.concludeSession()}function y(){(L||this.props.active)&&(this._active=!0),(0,(i||(i=n("zS29"))).handleResume)(),this._suspended=!1
var e=null==M?void 0:M(this.props)
this._active&&!e&&this.startSession(this.props,this.props),this.update(this.props,this.props),this.forceUpdate()}function N(){this._suspended=!0,this.cancelSession(),this.resetInternalState(),(0,(i||(i=n("zS29"))).resetTtrStateOnSuspend)(),this._active=!1,this._loadedUrls=[]}function A(e){this._treeHasLoaded,this._treeHasLoaded=!0
var t=Array.isArray(e)?e.reduce((function(e,t){var n
return e.numberOfImagesLoaded+=(null==t?void 0:t.numberOfImagesLoaded)||0,e.successCount+=(null==t?void 0:t.successCount)||0,e.errorCount+=(null==t?void 0:t.errorCount)||0,e.abandonedCount+=(null==t?void 0:t.abandonedCount)||0,f.SHOULD_TRACK_URLS&&(e.urls=null==(n=e.urls)?void 0:n.concat((null==t?void 0:t.urls)||[])),e}),{abandonedCount:0,bubbles:!1,captures:!1,errorCount:0,numberOfImagesLoaded:0,successCount:0,target:null,urls:[]}):e
f.SHOULD_TRACK_URLS&&(this._loadedUrls=this._loadedUrls.concat((null==t?void 0:t.urls)||[])),this._endSessionType=0===(null==t?void 0:t.errorCount)?"SessionEnded":"ActionFailed",this.concludeSession()}function w(t,u){if(!this._clSessionId&&!this._suspended){var d,l=(0,(i||(i=n("zS29"))).hasAppTtrSessionStarted)(),c=o?o(t,u,l):"RenderNavigationLevel"
l?((0,(s||(s=n("T+VI"))).startLocalTimingsMeasurement)("pageTTR",(0,S.now)()),(0,(i||(i=n("zS29"))).getProfileSelectTime)()&&(d={actualTime:(0,(i||(i=n("zS29"))).getProfileSelectTime)(),switchedProfile:(void 0===r?r=a(n("0Pw/")):r).default.switchedProfile()},(0,(i||(i=n("zS29"))).clearProfileSelectTime)())):(d=(0,(i||(i=n("zS29"))).isWarmStart)()?{actualTime:(0,(_||(_=n("u30j"))).lastResumeEpochTime)(),appStartType:"warm"}:{actualTime:(0,(_||(_=n("u30j"))).lastStartEpochTime)(),appStartType:"cold"},(0,(i||(i=n("zS29"))).setHasStartedAppTtrSession)(L)),this._clSessionId=e.startSession(c,d)}}var C=function(o){function s(e){var t=o.call(this,e)||this
t._active=!1,t._clSessionId=null,t._endSessionType=null,t._haveConcludedSession=!1,t._loadedUrls=[],t._suspendResumeId=E++,t._suspended=void 0,t._treeHasLoaded=!1,t.startSession=w.bind(t),t.handleTreeLoaded=A.bind(t),t.handleAppSuspend=N.bind(t),t.handleAppResume=y.bind(t),t.cancelSession=I.bind(t),t._suspended=(0,(d||(d=n("e4o4"))).getSuspended)()
var a=t._suspendResumeId=E++
return(L||t.props.active)&&(t._active=!0),(0,(l||(l=n("O5/t"))).setSuspendTask)(T+a,t.handleAppSuspend),(0,(l||(l=n("O5/t"))).setResumeTask)(R+a,t.handleAppResume),t.update({},t.props),O&&O(t.props)&&t.startSession(t.props,t.props),t}(0,p.default)(s,o)
var _=s.prototype
return _.UNSAFE_componentWillReceiveProps=function(e){this.update(this.props,e)},_.componentWillUnmount=function(){var e=this._suspendResumeId;(0,(l||(l=n("O5/t"))).deleteSuspendTask)(T+e),(0,(l||(l=n("O5/t"))).deleteResumeTask)(R+e),this.cancelSession()},_.resetInternalState=function(){this._haveConcludedSession=!1,this._treeHasLoaded=!1,this._endSessionType=null,this._clSessionId=null},_.concludeSession=function(){var t=this._endSessionType===h
!this._haveConcludedSession&&this._clSessionId&&(t||this._active)&&this._endSessionType&&(e.endSession(this._clSessionId,{type:this._endSessionType}),f.SHOULD_TRACK_URLS,(0,(i||(i=n("zS29"))).measureTTRCompleted)(this._endSessionType,this._loadedUrls),(void 0===r?r=a(n("0Pw/")):r).default.speculativeEnd(P,this._endSessionType,this._loadedUrls),this._haveConcludedSession=!0,this._clSessionId=null)},_.update=function(e,t){g&&g(e,t)?(this.cancelSession(),this.resetInternalState(),this.startSession(e,t)):(0,(u||(u=n("NEM1"))).isComponentBecomingActive)(e,t)?this.startSession(e,t):(0,(u||(u=n("NEM1"))).isComponentBecomingInactive)(e,t)&&(this.cancelSession(),this.resetInternalState(),this._active=!1),!this._active&&t.active&&(this._active=!0,this.concludeSession())},_.render=function(){return this._treeHasLoaded?(0,c.j)(t,this.props,null,null):!b||b(this.props)?(0,c.j)(t,{__proto__:this.props,onTreeLoaded:this._suspended?void 0:this.handleTreeLoaded,onViewportChanged:this.cancelSession},null,null):(0,c.j)(t,{__proto__:this.props,onViewportChanged:this.cancelSession},null,null)},s}(v.Component)
return C.displayName=(0,m.higherOrderName)("MeasureTTR",t),C}}}},YHyp:function(e,t){t.__esModule=!0,t.VIDEO_THUMB_RATING_STRINGS=t.GAME_THUMB_RATING_STRINGS=void 0
var n=["thumbs_way_up_action_bar_thumbs_down","thumbs_way_up_action_bar_thumbs_up","thumbs_way_up_action_bar_thumbs_way_up"]
t.GAME_THUMB_RATING_STRINGS=["gdp_thumbrate_rated"].concat(n),t.VIDEO_THUMB_RATING_STRINGS=["mdp_thumbrate_rated"].concat(n)},gKX9:function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.fallbackLolomoDataFetcher=f
var o,s,r,i,u,d,l=a(n("fsL8")),_=(n("TraY"),(0,l.default)().mark(f))
function c(){return(0,(u||(u=n("FxHh"))).getCachedLolomoByType)((d||(d=n("RzHp"))).LOLOMO_TYPE.default).toPromise()}function p(){var e=(0,(r||(r=n("HiI4"))).getRootModel)()
return(void 0===i?i=a(n("a8PS")):i).default.forceGetNewLolomo({appSource:"liveFastPathDataFetcher",rootModel:e,skipPreApp:!0}).toPromise()}function f(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,(o||(o=n("jNLS"))).call)(c)
case 2:if(!e.sent){e.next=5
break}return e.abrupt("return",void 0)
case 5:return(s||(s=n("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{message:"FallbackLolomoData"}),e.next=8,(0,(o||(o=n("jNLS"))).call)(p)
case 8:case"end":return e.stop()}}),_)}},mMxo:function(e,t){t.__esModule=!0,t.MDP_INFO_BOX_STRINGS=void 0,t.MDP_INFO_BOX_STRINGS=["mdp_casts_label","mdp_cast_label","mdp_creators_label","mdp_creator_label","mdp_directors_label","mdp_director_label"]},qusM:function(e,t,n){t.__esModule=!0,t.withTransitionAnimation=void 0
var a,o=(0,n("9IR/").getFeatures)(),s=o.enableDepthTransition,r=o.routeTransitionsEnabled
a=s?n("4fqt").withDepthTransitionRoot:r?n("ViK9").withTransitionAnimation:n("P1w9").identity,t.withTransitionAnimation=a},rNFE:function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.default=function(e,t){return void 0===e&&(e=(i||(i=n("RzHp"))).LOLOMO_TYPE.default),(0,l.h)((0,(u||(u=n("FxHh"))).getCachedLolomoByType)(e),(function(e){var i=null==e?void 0:(0,d.h)(e.items,t),u=_.default.Observable.just(void 0)
return i?(0,(void 0===s?s=a(n("8VqT")):s).default)((0,(o||(o=n("HiI4"))).getRootModel)().getValue((0,(void 0===r?r=a(n("XQcU")):r).default)().rowByIdPath(i.id))).catch(u):u})).take(1).defaultIfEmpty(void 0)}
var o,s,r,i,u,d=n("ZpGL"),l=n("xC7v"),_=a(n("gisa"))},tVmM:function(e,t,n){var a,o,s,r=n("TqRt").default
t.__esModule=!0,t.default=void 0
var i,u,d,l,_=r(n("vVcS")),c=r(n("3SIe")),p=r(n("Lk1/"))
t.default=new p.default({payload:{Browse:c.default,LolomoType:_.default},routeWillEnter:function(e,t){var _=(0,(a||(a=n("9IR/"))).getFeature)("graphqlBob")?(i||(i=n("v3XO"))).prefetchBrowseStrings:null
return[(0,(s||(s=n("EZID"))).maintainFocusOnNav)((u||(u=n("HYX5"))).BROWSE,e,t),_,(d||(d=n("gKX9"))).fallbackLolomoDataFetcher,(0,(a||(a=n("9IR/"))).getFeature)("videoPrepareContinueWatchingRow")||(0,(a||(a=n("9IR/"))).getFeature)("videoPrepareContinueWatchingRow2Titles")?(void 0===l?l=r(n("ybHO")):l).default:null,(o||(o=n("NEM1"))).actions.saveHistoryState(e,{routeSupportsVideoOpenAndPause:!1})]}})},v3XO:function(e,t,n){var a=n("TqRt").default,o=n("fsL8").default
t.__esModule=!0,t.prefetchBrowseStrings=f
var s,r,i,u,d,l,_=a(n("fsL8")),c=a(n("RIqP")),p=o().mark(f)
function f(){return(0,_.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,(s||(s=n("fbA9"))).prefetchStrings)((0,c.default)(new Set(["billboard_ctas_moreInfo","comingSoon_reminderSet_short","comingSoon_remindme","new_episode_badge"].concat((0,c.default)((i||(i=n("8uHS"))).DISPLAY_PAGE_MENU_STRINGS),(0,c.default)((u||(u=n("xPco"))).MORE_LIKE_THIS_STRINGS),(0,c.default)((u||(u=n("xPco"))).PLAY_FROM_BEGINNING_STRINGS),(0,c.default)((u||(u=n("xPco"))).PLAY_PROGRESS_STRINGS),(0,c.default)((l||(l=n("/Yz2"))).RELEVANCE_SCORE_STRINGS),(0,c.default)((u||(u=n("xPco"))).REMINDER_STRINGS),(0,c.default)((d||(d=n("YHyp"))).VIDEO_THUMB_RATING_STRINGS),(0,c.default)((r||(r=n("mMxo"))).MDP_INFO_BOX_STRINGS)))))
case 2:case"end":return e.stop()}}),p)}},xPco:function(e,t){t.__esModule=!0,t.SPECIAL_COLLECTION_STRING_KEYS=t.REMINDER_STRINGS=t.PLAY_PROGRESS_STRINGS=t.PLAY_PROGRESS_LABEL_KEYS=t.PLAY_FROM_BEGINNING_STRINGS=t.MORE_LIKE_THIS_STRINGS=void 0,t.REMINDER_STRINGS=["remind_me_titlecase","reminder_set_titlecase","ads_in_live_stream_affordance"]
var n=t.PLAY_PROGRESS_LABEL_KEYS={ADS_IN_LIVE_TAG:"ads_in_live_stream_affordance",HIDDEN_EPISODES_PLAY:"play_without_sequence",HIDDEN_EPISODES_RESUME:"resume_without_sequence",LIVE:"billboard_ctas_watchLive",PLAY_EPISODE:"mdp_buttons_playEpisode_api",PLAY_MOVIE:"mdp_buttons_playMovie",PLAY_SHOW:"mdp_buttons_playShow_api",RESUME_EPISODE:"mdp_buttons_resumeEpisode_api",RESUME_MOVIE:"mdp_buttons_resumeMovie",RESUME_SHOW:"mdp_buttons_resumeShow_api"},a=(t.PLAY_PROGRESS_STRINGS=Object.values(n),t.PLAY_FROM_BEGINNING_STRINGS=["mdp_buttons_playFromBeginning","mdp_buttons_branchingNarrative_resetState"],t.SPECIAL_COLLECTION_STRING_KEYS={81173845:"mdp_buttons_moreLikeRyanCollection",81349039:"mdp_buttons_moreFromShondaland"})
t.MORE_LIKE_THIS_STRINGS=Object.values(a)},ybHO:function(e,t,n){var a=n("TqRt").default
t.__esModule=!0,t.default=m
var o,s,r,i,u,d,l,_=a(n("siCl")),c=a(n("fsL8")),p=(0,c.default)().mark(m),f=(0,c.default)().mark(S)
function m(){return(0,c.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,(o||(o=n("jNLS"))).doWhileRouteCurrent)(S)
case 2:case"end":return e.stop()}}),p)}function S(){var e
return(0,c.default)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,(r||(r=n("5rFJ"))).select)((l||(l=n("DCmX"))).selectors.getIsCWRowPrepared,{lolomoType:(d||(d=n("RzHp"))).LOLOMO_TYPE.default})
case 2:if(!t.sent){t.next=5
break}return t.abrupt("return",void 0)
case 5:return t.next=7,(0,(r||(r=n("5rFJ"))).put)((l||(l=n("DCmX"))).actions.setCWRowIsPrepared((d||(d=n("RzHp"))).LOLOMO_TYPE.default))
case 7:return t.next=10,(0,(r||(r=n("5rFJ"))).call)(v,2)
case 10:(e=t.sent).length&&(void 0===s?s=a(n("EobH")):s).default.prepare(e)
case 12:case"end":return t.stop()}}),f)}function v(e){var t,o,s,r
return(0,c.default)().async((function(l){for(;;)switch(l.prev=l.next){case 0:return void 0===e&&(e=5),l.prev=1,l.next=4,(0,c.default)().awrap((0,(void 0===i?i=a(n("rNFE")):i).default)((d||(d=n("RzHp"))).LOLOMO_TYPE.default,(function(e){return"continueWatching"===e.context})).toPromise())
case 4:if(null!=(o=l.sent)&&null!=(t=o.items)&&t.length){l.next=7
break}return l.abrupt("return",[])
case 7:return s=o.items.slice(0,e),l.next=10,(0,c.default)().awrap((0,(void 0===u?u=a(n("Aaua")):u).default)(s.map((function(e){return e.id}))).toPromise())
case 10:return r=l.sent,l.abrupt("return",r.map((function(e,t){return(0,_.default)({},e,{params:(0,_.default)({},e.params,{rowContext:o.context}),priority:t+1,trackId:o.trackId})})))
case 14:return l.prev=14,l.t0=l.catch(1),l.abrupt("return",[])
case 17:case"end":return l.stop()}}),null,null,[[1,14]],Promise)}}}])


