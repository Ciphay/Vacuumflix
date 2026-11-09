(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{"3fPU":function(e,t,a){t.__esModule=!0,t.default=void 0
var i=a("BHy0"),n={getPrePlayFalcorPath:i.noop,getPrePlayItem:i.noop}
t.default=n},"5ELj":function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.default=void 0
var n=i(a("SA+Z"))
t.default=function(e){void 0===e&&(e=[])
var t=function(){var e=Boolean,t=function(){e(),e=Boolean,a.chain=[],a.dispose=Boolean}
function a(i){var o=void 0===i?{}:i,r=o.error,d=o.result,s=a.chain,l=(0,n.default)(s),u=l[0],c=l.slice(1)
if(0!==s.length&&u){a.chain=c,e()
var p=!1
return e=(e=u({callback:function(e){return p=!0,a(e)},error:r,result:d}))||Boolean,p&&(e(),e=Boolean),t}}return a.dispose=t,a}()
return t.chain=e,t}},"9KnL":function(e,t,a){t.__esModule=!0,t.noopPlayPredictionConfig=void 0
var i=a("BHy0")
t.noopPlayPredictionConfig={excludedListContexts:[],falcorPath:[],getAvailable:i.noop,getBookmark:i.noop,getManifestProfile:i.noop,getPrefetchSupplementals:function(){return[]},getPrePlayFalcorPath:i.noop,getPrePlayItem:i.noop,getUiLabel:i.noop,getVideoId:i.noop,getViewableId:i.noop,isBranchingNarrativeTitle:i.noop,numColsLeft:0,numColsRight:0,numRowsDown:0,numRowsUp:0,settleTime:0}},BD1w:function(e,t){var a
t.__esModule=!0,t.createPlayPredictionModel=function(e,t){return!a&&void 0!==e&&e.createPlayPredictionModel&&(a=e.createPlayPredictionModel({prepare:t})),a}},EzVU:function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.default=void 0
var n,o=i(a("VZc8")),r=o.default.getCurrentExperience,d=o.default.isPrePlayPreFetchManifestEnabled,s=o.default.retreivePrePlayViewableId,l=o.default.retrievePrePlayUiLabel,u={getPrePlayFalcorPath:function(e,t){var o=void 0===t?{}:t,r=o.getPrePlayPaths,s=void 0===r?(void 0===n?n=i(a("QA7u")):n).default:r,l=o.isPrePlayPreFetchManifestEnabled,u=(void 0===l?d:l)(),c=(e||{}).videoIds
if(u)return s({videoIds:c})},getPrePlayItem:function(e,t){var a=void 0===t?{}:t,i=a.getCurrentExperience,n=void 0===i?r:i,o=a.isPrePlayPreFetchManifestEnabled,u=void 0===o?d:o,c=a.retreivePrePlayViewableId,p=void 0===c?s:c,h=a.retrievePrePlayUiLabel,v=void 0===h?l:h,f=e||{},m=f.getVideoId,g=f.prePlays,S=f.video,b=u(),y="function"==typeof m&&m(S),P=g&&g[y],T=P&&P.current,I=T&&T.summary,_=I&&I.experience
if(b){var C=n({prePlay:{summary:{experience:_}}})
if(C){var L=p(C)
return{params:{manifestProfile:"restrictAudioAndVideo"},pts:0,uiLabel:v(C),viewableId:L}}}}}
t.default=u},IZL0:function(e,t,a){t.__esModule=!0,t.default=void 0
var i,n,o,r=a("e9tE"),d=a("NEM1"),s=d.selectors.getLocation,l=d.selectors.isTransitioningFrom
t.default=(0,r.connect)((function(){var e=l([(i||(i=a("ve0B"))).patterns.DETAILS,(i||(i=a("ve0B"))).patterns.GAME_DETAILS])
return function(t){return{appConfig:(void 0===n?n=a("JVY8").selectors.getAppConfig:n)(t),currentLolomoId:(void 0===o?o=a("RzHp").selectors.getCurrentLolomoId:o)(t),isFromDetails:e(t),location:s(t)}}}))},"K/Tg":function(e,t,a){var i=a("284h").default,n=a("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e._appMenuHelperFactory,i=void 0===t?(void 0===S?S=n(a("lbsJ")):S).default:t,D=e.didEnterFromTriggerLocation,w=void 0===D?(m||(m=a("eCl4"))).didEnterFromTriggerLocation:D,M=e.getItemContext,x=void 0===M?(m||(m=a("eCl4"))).getItemContext:M,O=e.getPlaybackSessionData,R=e.getSelectedVideo,B=void 0===R?(m||(m=a("eCl4"))).getSelectedVideo:R,F=e.handleVideoSelect,j=e.hasNavigated,U=void 0===j?(m||(m=a("eCl4"))).hasNavigated:j,N=e.hasSelectedVideoChanged,K=void 0===N?(m||(m=a("eCl4"))).hasSelectedVideoChanged:N,Y=e.isAppMenuOpen,W=void 0===Y?(m||(m=a("eCl4"))).isAppMenuOpen:Y,q=e.isUnletterboxedEnabled,G=void 0===q?(m||(m=a("eCl4"))).isUnletterboxedEnabled:q,z=e.isVideoMerchEnabled,H=void 0===z?(m||(m=a("eCl4"))).isVideoMerchEnabled:z,Z=e.isVideoMerchList,J=void 0===Z?(m||(m=a("eCl4"))).isVideoMerchList:Z,X=e.resolveVideoMerchBehavior,Q=void 0===X?function(){return(g||(g=a("d6A8"))).DefaultVideoMerchBehavior}:X,$=e.shouldContinueMdpPlayback,ee=void 0===$?(m||(m=a("eCl4"))).shouldContinueMdpPlayback:$,te=function(e){return Q(e)||(g||(g=a("d6A8"))).DefaultVideoMerchBehavior}
O=void 0===O?function(e,t,i){var o=B(e),r=o.additionalFields,d=void 0===r?{}:r,s=o.id,l=o.videoMerch,c=void 0===l?{}:l,p=(0,(m||(m=a("eCl4"))).getVideoMerchId)(o),g=x(e)||{},S=o.trackingInfo,b=void 0===S?{}:S,y=b.imageKey,P=b.rank,T=b.trackId,I=b.unifiedEntityId,_=(0,(u||(u=a("lsGl"))).toUiPlayContext)(P,{boxart:{id:y},id:s,trackId:T,unifiedEntityId:I},g)
_.trackId=+_.trackId
var C=_.trackId,L=e.appConfig,A=e.currentLolomoId,E=(0,(void 0===v?v=n(a("j02D")):v).default)({itemContext:_,lolomoId:A,videoMerchComputeId:c.videoMerchComputeId},d),k=(0,(void 0===h?h=n(a("JKP/")):h).default)({appConfig:L}),V=(0,(void 0===f?f=n(a("gNAd")):f).default)({ancestorVideoId:s,itemContext:_,supplementalVideoId:p},d),D=i||(0,(m||(m=a("eCl4"))).getUiLabel)(o)
return{authParams:k,licenseParams:E,manifestProfile:(0,(m||(m=a("eCl4"))).getManifestProfile)(o),playRequestTime:t,trackingId:C,trackingInfo:V,uiLabel:D}}:O,F=void 0===F?function(e){void 0===e&&(e={})
var t=this.props,i=t.itemEvents,n=t.playbackStateObject
if(e){var o=(0,(p||(p=a("MLKV"))).getPlaybackInfo)(null!=n?n:EMPTY_OBJECT,this._currentTime,this._duration).detailsRouteParams(J(t),{id:(0,(m||(m=a("eCl4"))).getVideoMerchId)(B(t)),mdp:ee(e,t)})
i.onSelect((0,P.default)({},e,o))}}:F
var ae=i({getSelectedVideo:B,getVideoMerchId:(m||(m=a("eCl4"))).getVideoMerchId,isAppMenuOpen:W}),ie=function(e,t){var i,n,r=nrdp.audio&&nrdp.audio.EASE_IN_CUBIC||E,d=te(t),s=(0,(o||(o=a("9IR/"))).getFeature)("videoMerchAudioEase")&&!1!==d.easeAudio
return s&&(i=k,n={duration:A,easing:r}),{logVolumeTransition:(0,(o||(o=a("9IR/"))).getFeature)("videoMerchAudioEaseLogging")&&s,volume:i,volumeTransition:n}}
return function(e){var t
function i(e,t){this._currentTime=e,this._duration=t,this.props.onUpdateInstanceCurrentTime&&this.props.onUpdateInstanceCurrentTime(e),this.props.onActivePlayback&&this.props.onActivePlayback((0,(p||(p=a("MLKV"))).getPlaybackInfo)(this.props.playbackStateObject,e,t))}function n(e){var t,i,n,o=e.type,r=null==(t=this.props.playbackStateObject)?void 0:t.playbackState
switch(o){case"pause":i=!!(n=r===(l||(l=a("LpVm"))).PLAYBACK_STATES.playing?(l||(l=a("LpVm"))).PLAYBACK_STATES.paused:void 0)
break
case"resume":n=r===(l||(l=a("LpVm"))).PLAYBACK_STATES.paused?(l||(l=a("LpVm"))).PLAYBACK_STATES.playing:void 0,i=!1
break
case"stop":n=r!==(l||(l=a("LpVm"))).PLAYBACK_STATES.stopped?(l||(l=a("LpVm"))).PLAYBACK_STATES.stopped:void 0,i=!1}n&&(this.props.onUpdatePlaybackState({playbackState:n}),this.setState({hideWallpaper:i}))}function u(e){var t=e.entered,i=e.isPreMount,n=e.navigatingToDetails,o=e.onUpdatePlaybackState,r=e.playbackStateObject,d=(void 0===r?{}:r).playbackState===(l||(l=a("LpVm"))).PLAYBACK_STATES.playing
!t&&d&&i&&J(e)&&o&&!n&&o({playbackState:(l||(l=a("LpVm"))).PLAYBACK_STATES.stopped})}function h(){this.setState({hideWallpaper:!1})}function v(e,t){void 0===e&&(e={})
var i=e,n=i.entered,o=i.initialStateOfPlayback,r=t.entered,d=t.initialStateOfPlayback,s=t.isFromDetails,u=t.onUpdatePlaybackState,c=te(t),p=te(e),h=c.playBeforeFirstNavigation,v=void 0!==h&&h,f=!n&&r,m=n&&!r,g=w(e,t),S=K(e,t),b=f&&function(e,t){return e===t||V(t)!==V(e)}(e,t)
b&&(this._isBrowsing=!1,this._scheduleWhenDataLoads=!s,this.setState({hideWallpaper:!1})),S&&(this._playedVideoMerch=!1),U(e,t)&&(this._isBrowsing=!0)
var y=r||W(t),P=ae.shouldPausePlayback(e,t),T=ae.shouldResumeFromPause(e,t),I=!c.shouldPreventPlay&&p.shouldPreventPlay||!t.preventVideoWhileDepthTransition&&e.preventVideoWhileDepthTransition,_=f&&this.state.videoChangedWhileInactive
this.setState((function(e){!m&&e.videoChangedWhileInactive})),!_&&(s&&d&&o!==d||!y)?(this._clearTimers(),m&&this.onExit(t),S&&v&&!y&&this.setState((function(e){return 1!=!!e.videoChangedWhileInactive?{videoChangedWhileInactive:!0}:null}))):P?u&&(u({playbackState:(l||(l=a("LpVm"))).PLAYBACK_STATES.paused}),this.setState({hideWallpaper:!0})):T?u&&(u({playbackState:(l||(l=a("LpVm"))).PLAYBACK_STATES.playing}),this.setState({hideWallpaper:!1})):(I||_||S&&(this._isBrowsing||v)||g||ae.shouldScheduleUpdate(this._isBrowsing,this._playedVideoMerch,e,t))&&this.scheduleUpdateFromProps(t)}return(t=function(t){function r(e){var o=t.call(this,e)||this
return o.updateFromProps=v.bind(o),o.handleAppSuspend=h.bind(o),o.onExit=u.bind(o),o.handlePlaybackCommand=n.bind(o),o.handleCurrentTimeForVideoMerch=i.bind(o),F&&(o.handleVideoSelect=F.bind(o)),o.state={},o._currentTime=0,o.disposePlaybackCommandListener=(0,(c||(c=a("lG+M"))).listenForPlaybackCommands)(o.handlePlaybackCommand),o}(0,y.default)(r,t)
var f=r.prototype
return f.UNSAFE_componentWillMount=function(){var e
H(void 0,void 0,null==(e=this.props.selectedRow)?void 0:e.context)&&this.updateFromProps(void 0,this.props),this.setState(ie(0,this.props)),(0,(s||(s=a("O5/t"))).deleteSuspendTask)(L),(0,(s||(s=a("O5/t"))).setSuspendTask)(L,this.handleAppSuspend)},f.UNSAFE_componentWillReceiveProps=function(e){var t
H(void 0,void 0,null==(t=e.selectedRow)?void 0:t.context)&&(this.updateFromProps(this.props,e),this.setState(ie(this.props,e)))},f.componentDidUpdate=function(){this.props.onActivePlayback&&this.props.onActivePlayback((0,(p||(p=a("MLKV"))).getPlaybackInfo)(this.props.playbackStateObject,this._currentTime,this._duration))},f.componentWillUnmount=function(){this._clearTimers(),this._isBrowsing=void 0,(0,(s||(s=a("O5/t"))).deleteSuspendTask)(L),this.disposePlaybackCommandListener(),this.disposePlaybackCommandListener=Boolean},f._clearTimers=function(){this._videoMerchTimerId&&clearTimeout(this._videoMerchTimerId)},f.scheduleUpdateFromProps=function(e){var t=this,i=e.onUpdatePlaybackState,n=e.preventVideoWhileDepthTransition,r=e.selectedRow,s=e.videoMerchTimeout,u=B(e),c=(0,(m||(m=a("eCl4"))).getVideoMerchId)(u),p=(0,(m||(m=a("eCl4"))).getVideoMerchUseBookmark)(u),h=(0,(m||(m=a("eCl4"))).getVideoMerchPts)(u),v=te(e)
if(this._clearTimers(),!e.mouseIsShowing||!1!==v.allowPointerUpdates){var f=e.features,g=void 0===f?(0,(o||(o=a("9IR/"))).getFeatures)():f
if(-1!==s&&J(e,g)&&c&&i){var S
if((u||{}).isInteractive&&g.interactiveOriginalsVideoMerchDisabled)return
var b,y,P,T,I=v.displayRect,_=G(g)&&!0!==v.letterboxedVideo,C=null!=(S=null!=s?s:v.timeout)?S:(0,(o||(o=a("9IR/"))).getConfig)("videoMerchCooldown"),L=p?void 0:h
if(g.pvsEnabled||g.enableCategorySizzles){var A=(0,(m||(m=a("eCl4"))).getPvsStartMs)(u)
if("number"==typeof A)L=A/1e3,b=!0,y="pvs"
else{var E=(0,(m||(m=a("eCl4"))).getSizzlePlaygraph)(u),k=E.sizzlePlaygraph,V=E.sizzlePlaygraphId,D=E.sizzleStartTimeMs
k&&(L=D/1e3,b=!0,P=k,T=V,y="dynamicSizzle")}}var w={bookmarkOffset:h,branched:b,currentTime:L,isUIAutoPlay:!0,needsBookmark:p,overrideChoiceMapWithPlaylistId:T,overridePlaylist:P,playbackSessionData:O(e,nrdp.mono(),y),playbackState:(l||(l=a("LpVm"))).PLAYBACK_STATES.playing,reportedTime:L,unletterboxed:_,videoRect:I,viewableId:c}
if((n||v.shouldPreventPlay)&&(w.playbackState=(l||(l=a("LpVm"))).PLAYBACK_STATES.stopped),void 0!==v.getPlaylist){var M=e.playbackStateObject,x=v.getPlaylist(r,c),R=x.playlist,F=x.segmentId
R&&(w.playlist=R,w.playlistId=R.playlistId,w.currentSegmentId=F,w.playbackSessionData.segmentId=F,M.playlistId?M.viewableId===w.viewableId&&(w.reportedTime=this._currentTime):w.reportedSegmentId=F,C=700)}this._videoMerchTimerId=setTimeout((function(){ae.shouldAllowPlayback(t.props)&&(t._playedVideoMerch=!0,(0,(d||(d=a("pPds"))).batchedUpdates)(i,w)),t._currentTime=L,t._duration=0,t._scheduleWhenDataLoads=!1}),C)}}},f.render=function(){var t,i
if(!H(void 0,void 0,null==(t=this.props.selectedRow)?void 0:t.context))return(0,b.j)(e,this.props,null,null)
var n=this.props,r=this.state,d=(0,(o||(o=a("9IR/"))).getFeatures)(),s=n.itemEvents,l=void 0===s?null:s,u=n.onCurrentTimeChanged,c=J(n,d),p=te(n),h=r.hideWallpaper,v=r.logVolumeTransition,f=r.volume,m=r.volumeTransition,g=n.playbackStateObject
return void 0!==f&&void 0!==m&&(g=(0,I.unsafeObjectMerge)(n.playbackStateObject,{logVolumeTransition:v,volume:f,volumeTransition:m})),(0,b.j)(e,{__proto__:n,hideVignetteImmediate:!0===p.hideVignetteImmediately,hideWallpaper:h,itemEvents:(0,I.unsafeObjectMerge)(l,{onPlay:l&&l.onPlay,onSelect:this.handleVideoSelect||l&&l.onSelect}),onCurrentTimeChanged:c?this.handleCurrentTimeForVideoMerch:u,playbackStateObject:g,showVideoVignette:c&&p.showVideoVignette,useVideoVignette:H(void 0,void 0,null==(i=this.props.selectedRow)?void 0:i.context)},null,null)},r}(_.Component)).displayName=(0,T.higherOrderName)("VideoMerch",e),t.propTypes={appConfig:C.object,currentLolomoId:C.string,itemEvents:C.object,mouseIsShowing:C.bool,playbackStateObject:C.object,videoMerchTimeout:C.number},t.contextTypes=(r||(r=a("s6u8"))).stylesheetContextTypes,t}}
var o,r,d,s,l,u,c,p,h,v,f,m,g,S,b=a("igsZ"),y=n(a("VbXa")),P=n(a("siCl")),T=a("bGSL"),I=a("1dek"),_=a("/P98"),C=i(a("17x9")),L="clearVideoMerchWallpaperFlag",A=3e3,E=1,k=1
function V(e){var t=e.location,a=(void 0===t?{}:t).pathname
return void 0===a?"":a}},L1PP:function(e,t){},LHs1:function(e,t,a){t.__esModule=!0,t.default=void 0
var i,n,o=a("e9tE"),r=a("NEM1"),d=a("ve0B"),s=r.selectors.isTransitioningFrom,l=[d.patterns.PROFILES,d.patterns.PROFILE_PIN_PROMPT]
t.default=(0,o.connect)((function(){var e=s(l)
return function(t){return{appConfig:(void 0===i?i=a("JVY8").selectors.getAppConfig:i)(t),currentLolomoType:(void 0===n?n=a("RzHp").selectors.getCurrentLolomoType:n)(t),isFromProfilesGate:e(t),location:(0,r.getLocation)(t)}}}))},M3HD:function(e,t,a){var i=a("284h").default,n=a("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.Component,a=e.falcor
return(void 0===a?l:a).Falcor(t,v)}
var o,r,d,s=n(a("gisa")),l=i(a("pbgz")),u={details:{},evidence:{},hasBobData:!0,images:[],outline:{}}
function c(e,t,i,o){void 0===o&&(o=(r||(r=a("lsGl"))).selector)
var s=i.entityMetadata?i.entityMetadata.selector:o,l=i.itemContext,c=i.videoId
if(void 0!==c&&e.hasBobData){var p=s(c,l,e.json)
return p===(void 0===d?d=n(a("QQFM")):d).default?p=u:p.hasBobData=!0,p}if(l&&l.isEmptyRow&&e.hasBobData){var h=s(0,l,e.json)
return h.hasBobData=!0,h}return l&&"error"===l.context?u:{hasBobData:!1}}function p(e){return s.default.Observable.return({error:e})}function h(e,t){return t&&t.json&&(e.json.data=t.json),t&&t.error&&(e.json.error=t.error),e}var v={fetch:function(e,t,i){var d=t.entityMetadata,s=t.itemContext,l=t.videoId,u=i.rootModel
if(void 0===l)return e([])
var c=d?d.toMetadataPaths(s,[l]):(0,(r||(r=a("lsGl"))).toMetadataPaths)(s,[l])
return(0,(void 0===o?o=n(a("8VqT")):o).default)(u.get.apply(u,c)).catch(p).scan({json:{}},h).defaultIfEmpty({})},getBasePath:function(e){var t=e.itemContext,i=e.videoId,n=[]
return void 0!==i&&(n=[(0,(r||(r=a("lsGl"))).toEntityType)(t),i]),n},getPaths:function(){return[]},progressive:!1,selectData:c,selector:function(e,t,a){return c(e,0,a)},transformResponse:function(e){return{hasBobData:!0,json:e&&e.data||{}}}}},MGzm:function(e,t,a){t.__esModule=!0,t.default=function(e){var t=(void 0===e?{}:e).minDecodeDuration,a=void 0===t?n.minDecodeDuration:t
return(0,i.unsafeObjectMerge)(n,{minDecodeDuration:a})}
var i=a("1dek"),n={add:function(e){var t=void 0===e?{}:e,a=t.data,i=t.duration,n=void 0===i?0:i,o=t.url,r=void 0===o?"":o
if(a&&"memory"===a.state&&n>this.minDecodeDuration){var d=r.indexOf(".webp")>0?1:2,s=Math.min(d*n,this.maxDecodeDuration)
this.totalSum+=s,this.count+=1,this.average=this.totalSum/this.count,this.decodeDelay=.2*this.average}},average:0,count:0,DECODE_DELAY_MULTIPLIER:.2,decodeDelay:100,maxDecodeDuration:2e3,minDecodeDuration:30,toString:function(){return"average decode duration: "+this.average+"ms, decode delay: "+this.decodeDelay},totalSum:0}},MLKV:function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.getPlaybackInfo=function(e,t,a){return new c(e,t,a)}
var n,o,r,d,s=i(a("siCl")),l=i(a("W8MJ")),u=a("1dek"),c=function(){function e(e,t,a){this.playbackStateObject=void 0,this.viewableId=void 0
var i=null!=t?t:e.currentTime
this.playbackStateObject=(0,u.unsafeObjectMerge)(e,{currentTime:i,duration:null!=a?a:e.duration,reportedTime:i}),this.viewableId=e.viewableId}var t=e.prototype
return t.setCurrentTime=function(e,t){this.playbackStateObject.currentTime=e,this.playbackStateObject.reportedTime=e,this.playbackStateObject.duration=t||this.playbackStateObject.duration},t.setVideoState=function(e){switch(this.playbackStateObject.videoState=e,null==e?void 0:e.name){case(n||(n=a("LpVm"))).VIDEO_STATES.suspended:case(n||(n=a("LpVm"))).VIDEO_STATES.error:case(n||(n=a("LpVm"))).VIDEO_STATES.endOfStream:this.playbackStateObject.playbackState=(n||(n=a("LpVm"))).PLAYBACK_STATES.stopped}return this.playbackStateObject.playbackState},t.detailsRouteParams=function(e,t){var a=this.playbackStateObject
return e&&!0===t.mdp&&this.viewableId===t.id&&this.isPlaying?{initialStateOfPlayback:(0,s.default)({},a),videoId:this.viewableId}:EMPTY_OBJECT},(0,l.default)(e,[{get:function(){return(0,(void 0===d?d=i(a("cbME")):d).default)(this.playbackStateObject)},key:"isPlaying"},{get:function(){return(0,(void 0===o?o=i(a("U/Pv")):o).default)(this.playbackStateObject)},key:"isDisplaying"},{get:function(){return(0,(void 0===r?r=i(a("TEZ1")):r).default)(this.playbackStateObject)},key:"isFinished"},{get:function(){var e,t=this.playbackStateObject
return t.playbackState===(n||(n=a("LpVm"))).PLAYBACK_STATES.paused&&(null==(e=t.videoState)?void 0:e.name)===(n||(n=a("LpVm"))).VIDEO_STATES.displaying},key:"isPaused"},{get:function(){return this.playbackStateObject.playbackState===(n||(n=a("LpVm"))).PLAYBACK_STATES.stopped},key:"isStopped"},{get:function(){return this.playbackStateObject.currentTime},key:"timeInSec"}])}()},TVf2:function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.useSubtitleManager=f,t.withSubtitleManager=function(e){return function(t){var a=f(t),i=a.imageBasedSubtitles,n=a.onRemoveAllSubtitles,o=a.onRemoveSubtitle,r=a.onShowSubtitle,s=a.onSubtitleTrackChanged,l=a.subtitleLanguage,u=a.subtitles,c=a.subtitlesVisible
return(0,d.j)(e,{__proto__:t,imageBasedSubtitles:i,onRemoveAllSubtitles:n,onRemoveSubtitle:o,onShowSubtitle:r,onSubtitleTrackChanged:s,subtitleLanguage:l,subtitles:u,subtitlesVisible:c},null,null)}}
var n,o,r,d=a("igsZ"),s=i(a("J4zp")),l=i(a("siCl")),u=a("8fke"),c=a("/P98"),p=(0,u.memoize)((function(){return[]}))
function h(e,t){if("active changed"===t.type&&t.active!==e.prevActive){if(t.active){var o,d=(void 0===r?r=i(a("lZl8")):r).default.unstashSubtitleList(null==(o=t.initialStateOfPlayback)?void 0:o.subtitlesStashKey)
return(0,l.default)({},e,{imageBasedSubtitles:d.some((n||(n=a("LW3k"))).isImageSubtitle),prevActive:t.active,subtitles:d})}return(0,l.default)({},e,{prevActive:t.active,subtitles:p()})}if("remove all subtitles"===t.type)return(0,l.default)({},e,{subtitles:p()})
if("remove subtitle"===t.type)return(0,l.default)({},e,{subtitles:e.subtitles.filter((function(e){return e.id!==t.subtitle.id}))})
if("show subtitle"===t.type)return(0,l.default)({},e,{imageBasedSubtitles:(0,(n||(n=a("LW3k"))).isImageSubtitle)(t.subtitle),subtitles:e.subtitles.concat(t.subtitle)})
if("timed text changed"===t.type){var s=t.timedTextTrackInfo
return(0,l.default)({},e,{imageBasedSubtitles:Object.values((null==s?void 0:s.ttDownloadables)||{}).some((function(e){return e.isImage})),subtitleLanguage:null==s?void 0:s.language})}return e}function v(e){var t,o=(void 0===r?r=i(a("lZl8")):r).default.unstashSubtitleList(null==(t=e.initialStateOfPlayback)?void 0:t.subtitlesStashKey)
return{imageBasedSubtitles:o.some((n||(n=a("LW3k"))).isImageSubtitle),prevActive:e.active,subtitles:o}}function f(e){var t=e.active,i=e.initialStateOfPlayback,n=e.videoState,r=(0,c.useReducer)(h,{active:t,initialStateOfPlayback:i},v),d=(0,s.default)(r,2),l=d[0],u=d[1]
t!==l.prevActive&&u({active:t,initialStateOfPlayback:i,type:"active changed"})
var p=(0,c.useCallback)((function(){u({type:"remove all subtitles"})}),[u]),f=(0,c.useCallback)((function(e){return u({subtitle:e,type:"remove subtitle"})}),[u]),m=(0,c.useCallback)((function(e){return u({subtitle:e,type:"show subtitle"})}),[u]),g=(0,c.useCallback)((function(e){var t=e.timedTextTrackInfo
return u({timedTextTrackInfo:t,type:"timed text changed"})}),[u])
return{imageBasedSubtitles:l.imageBasedSubtitles,onRemoveAllSubtitles:p,onRemoveSubtitle:f,onShowSubtitle:m,onSubtitleTrackChanged:g,subtitleLanguage:l.subtitleLanguage,subtitles:l.subtitles,subtitlesVisible:(null==n?void 0:n.name)===(o||(o=a("LpVm"))).VIDEO_STATES.displaying}}},"U/Pv":function(e,t,a){var i
t.__esModule=!0,t.default=function(e){if(!e)return!1
var t=e.videoState,n=e.viewableId,o=t||EMPTY_OBJECT,r=o.data,d=o.name,s=o.subState,l=(r||EMPTY_OBJECT).viewableId,u=null==s?void 0:s.name
return l===n&&d===(i||(i=a("LpVm"))).VIDEO_STATES.displaying&&(u===(i||(i=a("LpVm"))).VIDEO_SUBSTATES.displaying.paused||u===(i||(i=a("LpVm"))).VIDEO_SUBSTATES.displaying.playing)}},bu88:function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.default=void 0
var n,o,r,d,s,l,u,c,p,h,v,f=a("igsZ"),m=i(a("VbXa")),g=i(a("w1pw")),S=i(a("gisa")),b=a("y2r0"),y=a("bGSL"),P=a("1dek"),T=a("/P98")
function I(){}function _(e,t,a,i){void 0===i&&(i=0)
var n=a.max,o=a.min,r=e>=t?o:n
return isFinite(i)&&"number"==typeof i||(i=1/0),Math.min(r,i)}function C(e){var t=e.decodeDelay,n=void 0===t?100:t,r=e.onAssetDecoded,d=void 0===r?Boolean:r,s=e.onAssetRequested,l=void 0===s?Boolean:s,u=e.url
return[(0,(o||(o=a("ClC+"))).getLoadImageData)(u),function(e){var t=e.callback,a=e.error,i=e.result
l(a||i),t({error:a,result:i})},(0,(void 0===p?p=i(a("jGt5")):p).default)(n),(0,(o||(o=a("ClC+"))).getDecodeImageData)(u),function(e){var t=e.callback,a=e.error,i=e.result
a||d(i),t({error:a,result:i})}]}function L(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var i=e,n=i.trackingInfo,o=i.videoId,r=t,d=r.trackingInfo
return o!==r.videoId||!(0,(u||(u=a("RPOD"))).isTrackingDataEqual)(n,d)}function A(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var i=e,n=i.dimBob,o=i.playbackStateObject,r=void 0===o?{}:o,s=t.playbackStateObject,l=void 0===s?{}:s,u=r.playbackState,c=l.playbackState,p=u!==c&&c===(d||(d=a("LpVm"))).PLAYBACK_STATES.stopped?(d||(d=a("LpVm"))).PLAYBACK_STATES.paused:u,h=n?(d||(d=a("LpVm"))).PLAYBACK_STATES.stopped:p
return(0,P.unsafeObjectMerge)(r,{playbackState:h})}function E(e){var t,i=e.delayTime,n=e.handleNextState,o=e.nextState,r=e.state,d=(0,P.unsafeObjectMerge)(r,{playbackStateObject:A(r,o)}),s={isCompleted:!0,state:o},l=r.dimBob,c=L(r,o),p=!l&&(!c||function(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var i=e,n=i.outline,o=(void 0===n?{}:n).titleImage,r=i.trackingInfo,d=t,s=d.outline,l=(void 0===s?{}:s).titleImage,c=d.trackingInfo,p=o&&o.url,h=l&&l.url
return(o||l)&&(o===l||p===h)&&(0,(u||(u=a("RPOD"))).isTrackingDataEqual)(r,c)}(r,o))
return 0===i||p?[function(e){var t=e.callback
n(s),t()}]:[function(e){var t=e.callback
n({isCompleted:!1,state:d}),t()}].concat(V({delayTime:i,hasBobData:o.hasBobData,image:null==o||null==(t=o.outline)?void 0:t.titleImage})).concat([function(e){var t=e.callback
n(s),t()}])}function k(e){var t,n,o=e.delayTime,r=e.handleNextState,d=e.moveCountTillDeactivation,s=e.nextState,c=e.onAssetDecoded,p=e.onAssetRequested,h=e.scheduler,v=e.state,f=e.wallpaperConfig,m=s.wallpaperState,g=v.wallpaper||{},S=L(v,s),y=S?1:0,P=(g.changeCount||0)+y,T=!1
m?(t=m,n=m):(T=P>d,s.hasBobData||(T=!0),t=function(e){var t,n=e.dimBob,o=e.state,r=e.wallpaperConfig,d=L(o,e.nextState),s=(0,(void 0===l?l=i(a("cbME")):l).default)(o.playbackStateObject)
return t=d&&!s?r.changeImageState:r.simpleHide,n?r.pauseAndDimState:t}({dimBob:T,nextState:s,state:v,wallpaperConfig:f}),n=f.newImageState)
var I,_=(0,b.assign)({},g,t,{changeCount:P}),C=s.images,A=s.trackingInfo,E=(0,b.assign)({changeCount:0,images:C,trackingInfo:A},n),k={isCompleted:!0,state:{dimBob:!1,wallpaper:E}},D=!v.dimBob&&(!S||function(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var i=e,n=i.images,o=i.trackingInfo,r=t,d=r.images,s=r.trackingInfo,l=n&&n[0],c=d&&d[0],p=l&&l.url,h=c&&c.url
return(n===d||l===c||p===h)&&(0,(u||(u=a("RPOD"))).isTrackingDataEqual)(o,s)}(g,E))
return 0===o||D?[function(e){var t=e.callback
r(k),t()}]:[function(e){var t=e.callback
r({isCompleted:!1,state:{dimBob:T,wallpaper:_}}),t()}].concat(V({delayTime:o,hasBobData:s.hasBobData,image:null==E||null==(I=E.images)?void 0:I[0],onAssetDecoded:c,onAssetRequested:p,scheduler:h})).concat((function(e){var t=e.callback
r(k),t()}))}function V(e){var t=e.delayTime,n=e.hasBobData,o=e.image,r=e.onAssetDecoded,d=void 0===r?Boolean:r,s=e.onAssetRequested,l=void 0===s?Boolean:s,u=o&&o.url
return n?u?[(0,(void 0===p?p=i(a("jGt5")):p).default)(.6666*t)].concat(C({decodeDelay:(void 0===v?v=(0,i(a("MGzm")).default)({minDecodeDuration:55}):v).decodeDelay,onAssetDecoded:d,onAssetRequested:l,url:u})):[(0,(void 0===p?p=i(a("jGt5")):p).default)(t)]:[I]}t.default=function(e){var t
return(t=function(t){function o(e){var a=t.call(this,e)||this
return a.handleAssetDecoded=a.handleAssetDecoded.bind(a),a.handleNextState=a.handleNextState.bind(a),a.handleAssetRequested=a.handleAssetRequested.bind(a),a.state={},a}(0,m.default)(o,t)
var d=o.prototype
return d.UNSAFE_componentWillMount=function(){this.updateStateFromProps(this.props,0)},d.UNSAFE_componentWillReceiveProps=function(e){this.updateStateFromProps(e)},d.shouldComponentUpdate=function(e,t){return this.state!==t},d.componentWillUnmount=function(){this._updateBobSubscription&&this._updateBobSubscription.dispose()},d.handleAssetRequested=function(e){(void 0===h?h=i(a("cahb")).default.logHeroImageRequest:h)((0,(n||(n=a("9IR/"))).getConfig)("heroAssetRequestModulo"),e)},d.handleNextState=function(e){e!==this.state&&this.setState(e)},d.handleAssetDecoded=function(e){(void 0===v?v=(0,i(a("MGzm")).default)({minDecodeDuration:55}):v).add(e)},d.handleNextStateError=function(e){new g.default({innerError:e,source:"browse",type:"tvq-browse-101"}).logAsHandledException()},d.updateStateFromProps=function(e,t,o){var d=this
void 0===t&&(t=1/0),void 0===o&&(o={}),this._updateBobSubscription&&this._updateBobSubscription.dispose()
var l=new S.default.CompositeDisposable
this._updateBobSubscription=l
var u=o,p=u._nrdp,h=void 0===p?nrdp:p,v=u._transitionToNextBobAndVideo,f=void 0===v?E:v,m=u._transitionToNextWallpaper,g=void 0===m?k:m,b=this.lastUpdateTime,y=void 0===b?0:b,P=this.state,T=(h.pmono||h.mono||Date.now)()
this.lastUpdateTime=T
var I=T-y,C=e.maxUpdateDelay,L=void 0===C?0:C
L=Math.min(L,t)
var A=(0,(n||(n=a("9IR/"))).getFeature)("supportsImmediateBobUpdate")?(void 0===s?s=i(a("d0qt")):s).default.fastDevice:(void 0===s?s=i(a("d0qt")):s).default.slowDevice,V=(P.wallpaper&&P.wallpaper.changeCount)>A.moveCountTillDeactivation,D=[],w=[],M=0,x=function(e,t){if(V){e&&(D[D.length]=e),t&&(w[w.length]=t)
var i=D[M],n=w[M],o=e&&e.isCompleted
if(i&&n)(0,(r||(r=a("pPds"))).batchedUpdates)((function(){d.handleNextState(i.state),d.handleNextState(n.state)})),M++,i.isCompleted&&n.isCompleted&&l.dispose()
else if(o){var s=setTimeout((function(){(0,(r||(r=a("pPds"))).batchedUpdates)((function(){d.handleNextState(e.state),d.handleNextState({dimBob:!1})}))}),A.deactivatedMaxWallpaperSyncDelay)
l.add({dispose:clearTimeout.bind(null,s)})}}else e&&(0,(r||(r=a("pPds"))).batchedUpdates)(d.handleNextState,e.state),t&&(0,(r||(r=a("pPds"))).batchedUpdates)(d.handleNextState,t.state)},O=f({delayTime:_(I,A.updateRate,A.bobUpdateDelay,L),handleNextState:function(e){return x(e,void 0)},nextState:e,state:P}),R=g({delayTime:_(I,A.updateRate,A.wallpaperUpdateDelay,L),handleNextState:function(e){return x(void 0,e)},moveCountTillDeactivation:A.moveCountTillDeactivation,nextState:e,onAssetDecoded:this.handleAssetDecoded,onAssetRequested:this.handleAssetRequested,state:P,wallpaperConfig:(void 0===s?s=i(a("d0qt")):s).default.wallpaper}),B=(0,(void 0===c?c=i(a("5ELj")):c).default)(O),F=(0,(void 0===c?c=i(a("5ELj")):c).default)(R)
l.add(B),l.add(F),B(),F()},d.render=function(){return(0,f.j)(e,{__proto__:this.state,isTransparentBob:this.props.isTransparentBob},null,null)},o}(T.Component)).displayName=(0,y.higherOrderName)("backgroundPropsThrottle",e),t.resolveUpdateDelay=_,t.loadImageWithDecodeDelay=C,t.delayedImageLoad=V,t.transitionToNextBobAndVideo=E,t.transitionToNextWallpaper=k,t.defaultProps={maxUpdateDelay:0},t}},"i+/2":function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.default=void 0
var n,o,r,d,s,l,u=a("igsZ"),c=i(a("VbXa")),p=i(a("siCl")),h=a("bGSL"),v=a("Eu0p"),f=a("1dek"),m=a("/P98"),g=Object.create(null)
t.default=function(e){var t=void 0===e?{}:e,S=t.getItemContext,b=void 0===S?(s||(s=a("eCl4"))).getItemContext:S,y=t.hasSelectedVideoChanged,P=void 0===y?(s||(s=a("eCl4"))).hasSelectedVideoChanged:y,T=t.isVideoMerchList,I=void 0===T?(s||(s=a("eCl4"))).isVideoMerchList:T,_=t.resolveVideoMerchBehavior,C=void 0===_?function(){return(l||(l=a("d6A8"))).DefaultVideoMerchBehavior}:_,L=t.shouldContinueGalleryPlayback,A=void 0===L?(s||(s=a("eCl4"))).shouldContinueGalleryPlayback:L,E=function(e){void 0===e&&(e={})
var t=e.playRequestTime,i=b(e).trackId,n=void 0===i?0:i
return{branched:void 0,contentPlaygraphId:void 0,currentSegmentId:void 0,currentTime:0,enhancedSubtitleSettings:e.enhancedSubtitleSettings,isVideoMerch:!0,nextSegmentId:void 0,overrideChoiceMapWithPlaylistId:void 0,overridePlaylist:void 0,playbackSessionData:{playRequestTime:t,trackingId:n},playbackState:(o||(o=a("LpVm"))).PLAYBACK_STATES.stopped,playlist:void 0,playlistId:void 0,reportedSegmentId:void 0,reportedTime:0,repositionType:(o||(o=a("LpVm"))).REPOSITION_TYPES.jumpToTime,retainLastFrame:!1,videoRect:C(e).displayRect,viewableId:0,volume:void 0,volumeTransition:void 0}}
return function(e){var t
function l(e){this._currentTime=e}function S(e){void 0===e&&(e={})
var t=function(e,t,a){void 0===e&&(e={}),void 0===t&&(t={})
var i=e,n=i.contentPlaygraphId,o=i.playlistId,r=i.viewableId,d=t,s=d.contentPlaygraphId,l=d.playlistId,u=d.viewableId,c=t
return(o&&l!==o||n&&s!==n||!o&&r&&u!==r)&&(c=E(a)),(0,p.default)({},c,e)}(e,this.state,this.props)
this.setState(t)}function b(e,t){this.handleUpdateInstanceCurrentTime(e)
var n=function(e,t,n){return(0,(void 0===r?r=i(a("cbME")):r).default)(n)?{currentTime:e,duration:t,reportedTime:e}:g}(e,t,this.state)
n!==g&&this.setState(n)}function y(e){var t=e.currentTime,i=e.segmentId,n=e.viewableId,r={currentSegmentId:i,nextSegmentId:void 0,reportedSegmentId:i,upcomingSegmentId:null}
if(i){var d=this.state,s=d.currentSegmentId,l=d.reportedSegmentId,u=d.viewableId
i===this.upcomingSegmentId&&s===l&&(r.playbackState=this.transitionPlaybackState),n&&u!==n&&(r.viewableId=n),"number"==typeof t&&(r.currentTime=t,r.reportedTime=t)}this.upcomingSegmentId=null,this.transitionPlaybackState=(o||(o=a("LpVm"))).PLAYBACK_STATES.playing,this.setState(r)}function T(e){var t=e.newSegmentId
if(t!==this.state.upcomingSegmentId){var i=this.state,n=i.currentSegmentId,r=i.reportedSegmentId
n&&n===r&&(this.upcomingSegmentId=t,this.transitionPlaybackState=(o||(o=a("LpVm"))).PLAYBACK_STATES.playing,this.setState({upcomingSegmentId:t}))}}function _(e){this.nonPausingSegment=e}function L(e){e===this.state.currentSegmentId?this.setState({playbackState:(o||(o=a("LpVm"))).PLAYBACK_STATES.playing}):e===this.upcomingSegmentId&&(this.transitionPlaybackState=(o||(o=a("LpVm"))).PLAYBACK_STATES.playing)}function k(e){void 0===e&&(e={})
var t=this.props.selectedRow,i=(void 0===t?{}:t).context,n=function(e,t,i){void 0===e&&(e={}),void 0===i&&(i=!1)
var n=t.stopOnSuspend,r=t.videoState,d=void 0===r?{}:r,s=d.data,l=void 0===s?{}:s,u=d.name,c=d.subState,p=void 0===c?{}:c,h=e,v=h.data,f=void 0===v?{}:v,m=h.name,S=h.subState,b=void 0===S?{}:S,y=function(e){switch(e){case(o||(o=a("LpVm"))).VIDEO_STATES.displaying:case(o||(o=a("LpVm"))).VIDEO_STATES.error:case(o||(o=a("LpVm"))).VIDEO_STATES.endOfStream:case(o||(o=a("LpVm"))).VIDEO_STATES.suspended:case(o||(o=a("LpVm"))).VIDEO_STATES.idle:return!0
default:return!1}}(m),P=m===(o||(o=a("LpVm"))).VIDEO_STATES.ending,T=u===(o||(o=a("LpVm"))).VIDEO_STATES.displaying,I=m!==u,_=b.name!==p.name
if(i&&(I=I||_),!I&&m===(o||(o=a("LpVm"))).VIDEO_STATES.displaying&&b.name===(o||(o=a("LpVm"))).VIDEO_SUBSTATES.displaying.playing){var C=f.viewableId,L=l.viewableId
I=C&&L&&C!==L}var A=I&&!P&&(y||T),E=m===(o||(o=a("LpVm"))).VIDEO_STATES.suspended,k=u===(o||(o=a("LpVm"))).VIDEO_STATES.suspended,V=m===(o||(o=a("LpVm"))).VIDEO_STATES.endOfStream,D=m===(o||(o=a("LpVm"))).VIDEO_STATES.error,w=n&&E&&!k||V||D
if(A||w){var M={videoState:e}
return w&&(M.playbackState=(o||(o=a("LpVm"))).PLAYBACK_STATES.stopped),M}return g}(e,this.state,(0,(d||(d=a("e8Gu"))).isBillboardSupportedList)(i))
n!==g&&this.setState(n)}return(t=function(t){function i(e){var i=t.call(this,e)||this
return i.handleVideoStateChanged=k.bind(i),i.handleReadyForSegmentResume=L.bind(i),i.handlePreventPauseForSegment=_.bind(i),i.handleSegmentTransitionStarted=T.bind(i),i.handleSegmentStarted=y.bind(i),i.handleCurrentTimeChanged=b.bind(i),i.handleUpdatePlaybackState=S.bind(i),i.handleUpdateInstanceCurrentTime=l.bind(i),i.state=E(e),i.transitionPlaybackState=(o||(o=a("LpVm"))).PLAYBACK_STATES.playing,i}(0,c.default)(i,t)
var r=i.prototype
return r.UNSAFE_componentWillMount=function(){this.updateStateFromProps(void 0,this.props)},r.UNSAFE_componentWillReceiveProps=function(e){this.updateStateFromProps(this.props,e)},r.updateStateOnVideoChange=function(e,t){void 0===e&&(e={})
var i=e.selectedRow,n=t.selectedRow,r=void 0===n?{}:n,d=P(e,t),l=(0,(s||(s=a("eCl4"))).hasSelectedRowChanged)(i,r)
if(d){var u=this.state.playbackState
if(u===(o||(o=a("LpVm"))).PLAYBACK_STATES.playing){var c=(o||(o=a("LpVm"))).PLAYBACK_STATES.paused,p=r.behavior
if(l||!(void 0===p?{}:p).supportsPlaylists){var h=I(e),v=I(t);(h||v)&&(c=(o||(o=a("LpVm"))).PLAYBACK_STATES.stopped)}else this.state.currentSegmentId===this.nonPausingSegment&&(c=u,this.nonPausingSegment=null)
c!==u&&(c===(o||(o=a("LpVm"))).PLAYBACK_STATES.stopped&&(this._currentTime=0),this.setState({currentTime:this._currentTime,playbackState:c,reportedTime:this._currentTime}))}}},r.updateStateFromProps=function(e,t){var i,o=this.state,r=o.playbackState,d=null==e?void 0:e.initialStateOfPlayback,s=t.initialStateOfPlayback
t.isFromDetails&&s&&d!==s?(i=A(t,e,o)?function(e){void 0===e&&(e={})
var t=e.initialStateOfPlayback,a=E(e)
return(0,p.default)({},a,t)}(t):E(t),this.setState(i)):(0,(n||(n=a("NEM1"))).isComponentBecomingInactive)(e,t)&&r?this.setState(E(t)):this.updateStateOnVideoChange(e,t)
var l=C(t)
I(t)||(0,v.areRectsEqual)(this.state.videoRect,l.displayRect)||this.setState({videoRect:l.displayRect})},r.render=function(){var t=C(this.props).subtitleOptions,i=t.measurementHeight,n=t.measurementWidth,r=t.rect,d=this.state
return this.props.preventVideoWhileDepthTransition&&d.playbackState===(o||(o=a("LpVm"))).PLAYBACK_STATES.playing&&(d=(0,f.unsafeObjectMerge)(d,{playbackState:(o||(o=a("LpVm"))).PLAYBACK_STATES.paused})),(0,u.j)(e,{__proto__:this.props,onCurrentTimeChanged:this.handleCurrentTimeChanged,onPreventPauseForSegment:this.handlePreventPauseForSegment,onReadyForSegmentResume:this.handleReadyForSegmentResume,onSegmentStarted:this.handleSegmentStarted,onSegmentTransitionStarted:this.handleSegmentTransitionStarted,onUpdateInstanceCurrentTime:this.handleUpdateInstanceCurrentTime,onUpdatePlaybackState:this.handleUpdatePlaybackState,onVideoStateChanged:this.handleVideoStateChanged,playbackStateObject:d,subtitlesMeasureHeight:i,subtitlesMeasureWidth:n,subtitlesRect:r},null,null)},i}(m.Component)).displayName=(0,h.higherOrderName)("GalleryPlaybackState",e),t}}},jGt5:function(e,t,a){var i
t.__esModule=!0,t.default=void 0,t.default=function(e){if(!isFinite(e)||"number"!=typeof e)throw new TypeError("duration not a number "+e)
return function(t){var n=t.callback,o=setTimeout((function(){(0,(i||(i=a("pPds"))).batchedUpdates)(n)}),e)
return clearTimeout.bind(void 0,o)}}},lSnr:function(e,t,a){t.__esModule=!0,t.default=void 0
var i=a("GQsr"),n=Object.freeze({height:190,width:136}),o=i.LEGACY_THEME.screenPaddingLeft,r={x:2+o,y:130},d={height:445,width:1150+o,x:0,y:275}
t.default={BOXART_PEEK:.5,BOXART_SIZE:n,COLUMNS:8,ERROR_BOX_HEIGHT:132,ERROR_BOX_THICKNESS:2,ERROR_BOX_WIDTH:600,GALLERY_CONTAINER_X_OFFSET:o,GALLERY_RECT:d,GALLERY_X_OFFSET:345,ITEM_AREA:n,LAYOUT_ORIGIN:r,LAYOUT_SPACING:{x:7,y:8},POINTER_AFFORDANCE_DOWN:{height:.5*n.height,width:d.width},POINTER_AFFORDANCE_UP:{height:r.y,width:d.width}}},lZl8:function(e,t){t.__esModule=!0,t.default=void 0
var a=[],i=null,n=0,o={stashSubtitleList:function(e){return a=e,i&&clearTimeout(i),i=setTimeout((function(){a=[],i=null}),5e3),++n},unstashSubtitleList:function(e){var t=a
return a=[],i&&(clearTimeout(i),i=null),e===n?t:[]}}
t.default=o},"s/P3":function(e,t,a){var i,n,o
t.__esModule=!0,t.default=void 0,i=(0,a("9IR/").getFeatures)().enableVideoMerch?function(e){var t=(void 0===n?n=a("K/Tg").default:n)(e)
return function(e){var i=t(e)
return(void 0===o?o=a("IZL0").default:o)(i)}}:function(){return a("P1w9").identity},t.default=i},uRDb:function(e,t,a){t.__esModule=!0
var i={createNoopPlayPrediction:!0,createPlayPrediction:!0,noopPlayPredictionConfig:!0}
t.noopPlayPredictionConfig=t.createPlayPrediction=void 0
var n=a("9IR/"),o=a("xbEh")
t.createNoopPlayPrediction=o.createNoopPlayPrediction
var r=a("wWpT"),d=a("9KnL")
t.noopPlayPredictionConfig=d.noopPlayPredictionConfig
var s=a("L1PP")
Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(i,e)||e in t&&t[e]===s[e]||(t[e]=s[e]))})),t.createPlayPrediction=(0,n.getFeatures)().playPredictionEnabled?r.createPlayPrediction:o.createNoopPlayPrediction},vxcV:function(e,t,a){var i
t.__esModule=!0,t.default=void 0,i=(0,a("9IR/").getFeatures)().prePlayEnabled?a("EzVU").default:a("3fPU").default,t.default=i},wWpT:function(e,t,a){var i=a("TqRt").default
t.__esModule=!0,t.createPlayPrediction=function(e,t){void 0===t&&(t=globalThis.nrdjs)
var i=(0,l.mergeDeep)({},h,e),u=i.numColsLeft,v=i.numColsRight,f=i.numRowsDown,m=i.numRowsUp,g=i.settleTime,S=i.excludedListContexts,b=i.getManifestProfile,y=i.getPrePlayFalcorPath,P=i.getPrePlayItem,T=i.getPrefetchSupplementals,I=i.isBranchingNarrativeTitle,_=e.falcorPath,C=e.getAvailable,L=e.getBookmark,A=e.getUiLabel,E=e.getVideoId,k=e.getViewableId
return{_calculateNavigationDirection:function(e,t,a,i){var n,o=this._lastFocusLocation
if(null!==o.rowIndex&&null!==o.colIndex){var r=t.colIndex-o.colIndex,d=t.rowIndex,s=d-o.rowIndex,l=a&&a[d]&&a[d].length,u=Math.round(i/2),c=Math.round(l/2)
n=s?s>0&&s<=u||s<0&&s<=-u?"down":"up":r>0&&r<c||r<0&&r<-c?"right":"left"}return n},_callPlayPrediction:function(e){var t=this._getPlayPrediction(p)
t&&t.update&&t.update(e)},_createInput:function(e,t,a){return{direction:t,focusLocation:{columnIndex:e.colIndex,rowIndex:e.rowIndex},lolomos:a}},_createList:function(e,t,a,i){var n,o=this._getListItems(e,t,a,i)
return o.length>0&&(n={context:a.context,list:o,requestId:a.requestId,rowIndex:a.index}),n},_createListObj:function(e,t){var a=e.context,i=e.focused,n=e.index,o=void 0===n?0:n,r=e.length,d=e.trackId,s=t[e.index]&&t[e.index].index||0
return{context:a,focused:i,focusedIndex:r?(0,c.wrapIndex)(r,s):s,index:o,length:r,list:e.items,trackId:d}},_createTimeout:function(e,t){return setTimeout(e,t)},_dataFocusLocation:null,_getConfigFromNrdjs:function(e){var t=this._getPlayPrediction(p)
if(t&&"function"==typeof t.getConfig){var a=t.getConfig(e)
this._isNrdjsPPConfigValid(a)&&(m=a.numRowsUp,f=a.numRowsDown,u=a.numColsLeft,v=a.numColsRight,g=a.settleTime)}},_getFormattedLists:function(e,t,a){var i=e&&e.json&&e.json.videos,n=e&&e.json&&e.json.prePlaysByVideoId,o=[]
if(i)for(var r in t)if(t.hasOwnProperty(r)&&"length"!==r){var d=a[t[r].index],s=d&&d.index||0,l=this._createList(i,n,t[r],s)
l&&o.push(l)}return o},_getIndexesOfIncludedLists:function(e,t){for(var a,i=[],n=0-m;n<f;n++)a=t?(0,c.wrapIndex)(t,e+n):e+n,i.push(a)
return i},_getItem:function(e,t,a,i,n,o,r){var d,s=t[E(e)],l=C(s),u=this._isItemFocused(n,o,r)
if(l){d={index:n,params:{branched:I(s)},pts:L(s),uiLabel:A(s),viewableId:k(s)}
var c=b(i)
c&&(d.params.manifestProfile=c)}var p=[],h=T(e)
h&&h.length&&h.forEach((function(e){e&&e.viewableId&&p.push(e)}))
var v=P({getVideoId:E,isItemFocused:u,listSummary:i,prePlays:a,video:e})
if(v&&v.viewableId&&p.push(v),p.length){if(!d){var f=p[0]
d={index:n,pts:f.pts,uiLabel:f.uiLabel,viewableId:f.viewableId}}d.preplay=p}return d&&u&&(d.property="playFocused"),d},_getListItems:function(e,t,a,i){for(var n,o=a.focused,r=a.items,d=a.length,s=[],l=0-u;l<v;l++){var p=d?(0,c.wrapIndex)(d,i+l):i+l
if((n=r[p])&&(s.length<d||void 0===d)){var h=this._getItem(n,e,t,a,p,i,o)
if(h){var f=void 0!==h.viewableId,m=h.preplay&&h.preplay.length>0;(f||m)&&s.push(h)}}}return s},_getListsWithData:function(e,t,a,i){var n=this,o={},r=this._getIndexesOfIncludedLists(a.rowIndex,i),d=0
return r.forEach((function(t){var i=e[t]
i&&i.items&&n._isListContextIncluded(i)&&(i.index===a.rowIndex&&(i.focused=!0),o[t]=i,d++)})),o.length=d,o},_getPath:function(e){var t=[],a=[]
if(e)for(var i=0;i<e.length;i++){var n=e[i]
n&&(t=t.concat(n.videoIds))
var o=y(n)
o&&(a=a.concat(o))}return[["videos",t].concat(_)].concat(a)},_getPlayPrediction:function(e){return this._ppm||(this._ppm=(0,(o||(o=a("BD1w"))).createPlayPredictionModel)(t,e)),this._ppm},_getVideoData:function(e,t){var a,i=[]
for(var n in e)if(e.hasOwnProperty(n)){var o=e[n]
a=this._createListObj(o,t)
var r=this._getVideoIdsPerList(a),d={trackId:a.trackId,videoIds:r}
i=i.concat([d])}return i},_getVideoIdsPerList:function(e){for(var t,a=e.focusedIndex,i=e.length,n=e.list,o=void 0===n?{}:n,r=[],d=0-u;d<v;d++){t=o[i?(0,c.wrapIndex)(i,a+d):a+d]
var s=E(t)
s&&r.push(s)}return r},_hasFocusChanged:function(e,t){var a=t.rowIndex,i=t.colIndex
return null!=a&&null!=i&&(a!==e.rowIndex||i!==e.colIndex)},_isInputValid:function(e,t,a,i){var n=!0
return e&&a&&t&&i?this._isPlayPredictionDisabled()?n=!1:this._hasFocusChanged(this._lastFocusLocation,t)?_&&"function"==typeof E&&"function"==typeof k&&"function"==typeof L&&"function"==typeof A||(this._loggedInvalidConfigError||(this._loggedInvalidConfigError=!0,new s.default({getVideoId:E,getViewableId:k,message:"invalid config passed to PlayPrediction",source:"PlayPrediction",type:"PlayPredictionConfigError"}).logAsHandledException()),n=!1):n=!1:n=!1,n},_isItemFocused:function(e,t,a){return a&&t===e},_isListContextIncluded:function(e){return e&&e.context&&-1===S.indexOf(e.context)},_isNrdjsPPConfigValid:function(e){return"object"===(0,r.default)(e)&&"number"==typeof e.numRowsUp&&"number"==typeof e.numRowsDown&&"number"==typeof e.numColsLeft&&"number"==typeof e.numColsRight&&"number"==typeof e.settleTime},_isPlayPredictionDisabled:function(){var e=this._checkedQueryParam
return void 0===e&&(this._checkedQueryParam=e=!!d.default.location.params.disablePlayPrediction),e},_lastFocusLocation:{colIndex:null,rowIndex:null},_loadDataAndSendUpdate:function(e,t,i,o,r){var d=this._getPath(e),s=this._onDataLoaded.bind(this,t,i,o,r),l=this._onDataError.bind(this),u=(0,(n||(n=a("HiI4"))).getRootModel)()
u.get.apply(u,d).subscribe(s,l)},_onDataError:function(e){new s.default({innerError:e,source:"PlayPrediction",type:"PlayPredictionDataError"}).logAsHandledException()},_onDataLoaded:function(e,t,a,i,n){if(this._hasFocusChanged(this._lastFocusLocation,t)&&!this._hasFocusChanged(this._dataFocusLocation,t)){var o=this._getFormattedLists(n,a,e),r=this._calculateNavigationDirection(e,t,a,i)
this._tryToSendUpdate(o,r,t)}},_retrieveVideoData:function(e,t,a,i){var n=this._getVideoData(e,a)
n.length>0&&this._loadDataAndSendUpdate(n,a,t,e,i)},_setLastFocus:function(e){this._lastFocusLocation.rowIndex=e.rowIndex,this._lastFocusLocation.colIndex=e.colIndex},_setTimeoutToLoadData:function(e,t,a,i){this._ppTimeout&&clearTimeout(this._ppTimeout),this._dataFocusLocation=t
var n=this._retrieveVideoData.bind(this,e,t,a,i)
this._ppTimeout=this._createTimeout(n,g)},_tryToSendUpdate:function(e,t,a){if(e.length>0){var i=this._createInput(a,t,e)
this._setLastFocus(a),this._callPlayPrediction(i)}},_update:function(e,t,a,i){if(this._isInputValid(e,t,a,i)){var n=this._getListsWithData(e,a,t,i)
n&&n.length>0&&this._setTimeoutToLoadData(n,t,a,i)}},_updateFromSearchOrEdp:function(e,t,a,i){var n=t&&t.colIndex,o=e&&e[n]||{},r=(o&&o.trackingInfo||{}).trackId,d=void 0===r?-1:r
this._update({0:{context:a,focused:!0,focusedIndex:n,index:0,items:e,requestId:i,trackId:d}},t,{0:{index:n}},1)},resetFocusLocation:function(){this._lastFocusLocation={colIndex:null,rowIndex:null}},updateFromCategories:function(e,t,a){this._getConfigFromNrdjs("Categories"),this._updateFromSearchOrEdp(e,t,"categories",a)},updateFromEdp:function(e,t,a){this._getConfigFromNrdjs("Edp"),this._updateFromSearchOrEdp(e,t,"episode",a)},updateFromGallery:function(e,t,a,i,n){void 0===n&&(n="Browse"),this._getConfigFromNrdjs(n),this._update(e,t,a,i)},updateFromList:function(e,t,a){(null==a?void 0:a.configName)&&this._getConfigFromNrdjs(a.configName),this._updateFromSearchOrEdp(e,t,null==a?void 0:a.context,null==a?void 0:a.requestId)},updateFromSearch:function(e,t,a){this._getConfigFromNrdjs("Search"),this._updateFromSearchOrEdp(e,t,"search",a)}}}
var n,o,r=i(a("cDf5")),d=i(a("oMp5")),s=i(a("w1pw")),l=a("MqVO"),u=a("BHy0"),c=a("KP1S"),p=function(){},h={excludedListContexts:[],getManifestProfile:u.noop,getPrefetchSupplementals:u.noop,getPrePlayFalcorPath:u.noop,getPrePlayItem:u.noop,isBranchingNarrativeTitle:u.noop,numColsLeft:0,numColsRight:5,numRowsDown:2,numRowsUp:0,settleTime:0}},xbEh:function(e,t,a){t.__esModule=!0,t.createNoopPlayPrediction=function(){return{resetFocusLocation:i.noop,updateFromCategories:i.noop,updateFromEdp:i.noop,updateFromGallery:i.noop,updateFromList:i.noop,updateFromSearch:i.noop}}
var i=a("BHy0")},yfDp:function(e,t,a){var i=a("TqRt").default,n=a("284h").default
t.__esModule=!0,t.default=void 0
var o,r,d,s,l,u=a("P1w9"),c=n(a("pbgz"))
t.default=function(e){var t=(void 0===e?{}:e).enhance,n=void 0===t?u.identity:t,p=(0,(void 0===l?l=i(a("LHs1")):l).default)((0,(void 0===s?s=i(a("bu88")):s).default)(n((void 0===d?d=i(a("If+r")):d).default))),h=(0,(void 0===o?o=i(a("M3HD")):o).default)({Component:p,falcor:c})
return(0,(r||(r=a("TVf2"))).withSubtitleManager)(h)}}}])


