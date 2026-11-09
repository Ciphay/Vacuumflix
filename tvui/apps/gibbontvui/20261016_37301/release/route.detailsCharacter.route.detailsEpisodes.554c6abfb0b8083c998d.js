(this.webpackJsonp=this.webpackJsonp||[]).push([[17],{"+Voc":function(e,t,n){var i,o,a,r,s=n("TqRt").default
t.__esModule=!0,t.default=void 0
var d={errorSelector:function(e,t){var i=t.falcorContext,o=t.onError
return{dataLength:0,hasError:i===(void 0===r?r=n("ve0B").patterns.DETAILS_CHARACTER:r)?"CdpGenericError":"EdpGenericError",index:0,onError:o}},getBasePath:function(e){var t=e.falcorContext,o=e.videoId
return void 0===o?((i||(i=n("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{message:"EDP/CDP route has no videoId"}),[]):[t===(void 0===r?r=n("ve0B").patterns.DETAILS_CHARACTER:r)?"characters":"videos",o,"episodes"]},getPaths:function(e){var t=e.ancestorSummary,i=e.falcorContext
return e.videoId?(i===(void 0===r?r=n("ve0B").patterns.DETAILS_CHARACTER:r)?(0,(void 0===o?o=s(n("iP+b")):o).default)({child:function(){return[["groupSummary"],["edpBoxArt"],["item","summary"],["item","bookmark"],["item","ancestor","summary"]]},list:function(){return[["summary"]]}}):(0,(void 0===o?o=s(n("iP+b")):o).default)({child:function(){var e=[["edpBoxArt"],["item","groupSummary"],["item","summary"],["item","bookmark"]]
return(null==t?void 0:t.hasLiveEvent)&&(e.push(["item","taglines","edp"]),e.push(["item","reminder"])),e},list:function(){return[["summary"]]}}))(e,(void 0===a?a=(0,s(n("gzTg")).default)({chunkSize:12,threshold:.5}):a)(e)):[]},name:"EpisodesListFalcor",selector:function(e,t,n){return{advisories:n.advisories,dataLength:e.dataLength?e.dataLength:void 0,items:e.items,shouldSayAdvisories:n.shouldSayAdvisories}},shouldFetchData:function(e,t){var i=(void 0===a?a=(0,s(n("gzTg")).default)({chunkSize:12,threshold:.5}):a)(e),o=(void 0===a?a=(0,s(n("gzTg")).default)({chunkSize:12,threshold:.5}):a)(t),r=i||{},d=r.from,l=r.to,u=o||{},c=u.from
return l!==u.to||d!==c},transformResponse:function(e,t,i){var o=(e&&e.summary||{length:0}).length,r={}
if(e){var d=(void 0===a?a=(0,s(n("gzTg")).default)({chunkSize:12,threshold:.5}):a)(i)
if(d)for(var l=d.from,u=d.to,c=l;c<=u;c++)e[c]&&(r[c]=e[c])}return{dataLength:o,items:r}}}
t.default=d},"+YIq":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("Hy99"))
t.default=(0,o.default)({collection:function(){return{base:{name:"episodeList",x:520,y:0}}},container:function(){return{base:{ignorePointer:!0,maxHeight:720,name:"episodeListCollection"}}},items:function(){return{base:{x:10}}},itemSize:function(){return{base:{height:42,width:356}}}}).clone()},"/UET":function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("Hg/B")
t.default=function(e,t){return(0,i.fade)(e.edpSeasons[t],i.SUPPRESS_EVENTS).key("seasons")}},"19bw":function(e,t,n){var i,o,a
t.__esModule=!0,t.useEpisodeToggleReminder=function(e,t,r){return((0,(i||(i=n("9IR/"))).getFeature)("browseRewrite")?(a||(a=n("pFyk"))).useEpisodeToggleReminderMutation:(o||(o=n("jvDj"))).useToggleReminderFalcor)(e,t,r)}},"2VMB":function(e,t,n){t.__esModule=!0,t.default=function(e,t){var n=t.buttonVisualState
return{animation:"highlighted"===n||"pressed"===n?a.key(n):r.key(n),key:n}}
var i=n("ClEx"),o=n("Hg/B"),a=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:0,to:1}),r=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:1,to:0})},"3REf":function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,c=e.pageBy,E=void 0===c?3:c,w=e.stylesheet,k=_(w,x),C=(0,(void 0===l?l=o(n("YPSL")):l).default)({stylesheet:k.collection})
function R(e,t){var n="click"===t.type,i=this.props,o=i.notifyIndexChange,a=i.shouldDropKeyEvent;(0,i.trackCurrentInputSource)(t),!1===a(t)&&(this.setState({click:n}),o(e)),n&&t.stopPropagation()}function M(e){var t=this.props.index,n=t>=E?t-E:0
this._changeIndex(n,e)}function P(e){var t=this.props,n=t.dataLength,i=t.index+E
this._changeIndex(i>n-1?n-1:i,e)}function D(e,t){if(e&&null!=t){var i=e[t],a=e[t+1],r=[]
if(i){var s=T(i.item,1)
s&&r.push(s)}if(a){var l=T(a.item,2)
l&&r.push(l)}r.length>0&&(this._currentHasBeenScheduled=!0,(void 0===d?d=o(n("EobH")):d).default.prepare(r))}}function A(){var e=this.state
e&&e.click&&this.setState({click:!1})}function L(e){var t,o=this.props,a=this.state,r=o.handleListKeyDown,s=o.onExit,d=null==(t=this.props.ancestorSummary)?void 0:t.hasLiveEvent,l=e.uiEvent
if(a&&a.click&&this.setState({click:!1}),"key.back"===l&&s)return(h||(h=n("DA2W"))).SingleAudio.play((h||(h=n("DA2W"))).UIAudioConfigs.onTransitionClose,(h||(h=n("DA2W"))).DEFAULT_VOLUME),s(),void e.stopPropagation()
if("key.down"===l){var c=this.props,f=c.index
if(c.range.maxIndex===f)return void e.stopPropagation()
d&&this.handleKeyDownForLive(this.props.index+1,e)}else if("key.up"===l){if(0===this.props.index)return void e.stopPropagation()
d&&this.handleKeyDownForLive(this.props.index-1,e)}else if("key.left"===l)(h||(h=n("DA2W"))).SingleAudio.play((h||(h=n("DA2W"))).UIAudioConfigs.onLRUDMove,(h||(h=n("DA2W"))).DEFAULT_VOLUME)
else if("key.right"===l){var v,g=null==(v=this.props.items[this.props.index])||null==(v=v.item)?void 0:v.summary
g&&(0,(void 0===u?u=i(n("hoTQ")):u).default)(g)===(void 0===u?u=i(n("hoTQ")):u).ViewableLiveState.preLive||e.stopPropagation()}r(e)}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n._turnOffVideoPrepare=void 0,n._currentHasBeenScheduled=void 0,n.handleKeyDown=L.bind(n),n.handleMouseOver=A.bind(n),n._callVideoPreparer=D.bind(n),n.handleArrowDown=P.bind(n),n.handleArrowUp=M.bind(n),n._changeIndex=R.bind(n),n.state={click:!1},n}(0,v.default)(t,e)
var o=t.prototype
return o.handleKeyDownForLive=function(e,t){var o,r,s=this.props,d=s.dispatch,l=s.index,c=s.items,h=null==(o=c[l])||null==(o=o.item)?void 0:o.summary,f=null==(r=c[e])||null==(r=r.item)?void 0:r.summary
h&&f&&(0,(void 0===u?u=i(n("hoTQ")):u).default)(h)===(void 0===u?u=i(n("hoTQ")):u).ViewableLiveState.preLive&&(this._changeIndex(e,t),(0,(void 0===u?u=i(n("hoTQ")):u).default)(f)!==(void 0===u?u=i(n("hoTQ")):u).ViewableLiveState.preLive&&d&&(d((0,(a||(a=n("agVJ"))).moveFocus)({path:this.props.focusPath+"/"+e})),t.stopPropagation()))},o.UNSAFE_componentWillMount=function(){var e=g.default.location.params
e&&"true"===e.turnOffVideoPrepare&&(this._turnOffVideoPrepare=!0),this._currentHasBeenScheduled=!1},o.componentDidUpdate=function(e){var t=this._currentHasBeenScheduled,i=this._turnOffVideoPrepare,o=this.props,a=o.hasError,r=o.onError
if(a&&r)r({source:"/details/edp",type:"EdpEpisodesGenericError"})
else{var s=o.isCharacter,d=o.isExitingCharacter,l=o.highlightEntered,u=o.items,c=o.range,f=(void 0===c?{}:c).index,v=e.range
if((void 0===v?{}:v).index!==f&&l&&(h||(h=n("DA2W"))).AudioCycler.play((h||(h=n("DA2W"))).UIAudioConfigs.onGalleryUpDown,(h||(h=n("DA2W"))).DEFAULT_VOLUME),!(s||d||i||t)){var g=o.playbackAuth
g&&!g.isPreReleasePinProtected&&this._callVideoPreparer(u,f)}}},o.shouldComponentUpdate=function(e){var t=this.props,n=t.animation,i=t.focus,o=t.focused,a=t.hasError,r=t.highlightEntered,s=t.index,d=t.layout,l=t.mode,u=t.mouseIsShowing,c=t.range,h=t.scroll,f=e.animation,v=e.focus,g=e.focused,m=e.hasError,y=e.highlightEntered,I=e.index,S=e.layout,b=e.mode,_=e.mouseIsShowing,x=e.range,T=e.scroll
return g||c!==x||s!==I||d!==S||h!==T||i!==v||o!==g||a!==m||!(0,p.deepEquals)(n,f)||l!==b||r!==y||u!==_},o.render=function(){var e,t,i,o=this.context,d=this.props,l=d.children,u=d.dataLength,c=d.effectParams,h=d.entered,v=d.focus,g=d.focusAnimation,m=d.focusKey,p=d.focused,y=d.handleFocusRequest,_=d.layout,x=d.mouseIsEnabled,T=d.mouseIsShowing,E=d.onIndexChange,w=d.range,R=d.rect,M=d.scroll,P=d.transition,D=d.unstable_effect,A=k.resolve(o),L=w.index,F=this.handleArrowDown,O=this.handleArrowUp,B=this.handleKeyDown,j=this.handleMouseOver,W=!M.minTranslate&&!!h,N=!M.maxTranslate&&!!h
if(L>=u-3&&(N=!1),u>0){var K={height:168,width:300,x:0,y:0}
v&&v.rect&&(K.x=v.rect.x,K.y=v.rect.y),e=(0,f.j)((r||(r=n("5A62"))).FocusRing,{height:K.height,isAnimated:!1,visible:!this.state.click&&!(!v||!v.rect),width:K.width,x:K.x,y:K.y},"edpFocusRing",null)}x&&T&&(t=(0,f.j)((s||(s=n("7mXp"))).PointerControl,{__update_handlers__:b,direction:"up",height:75,name:"episodesPointerUp",onClick:O,visible:W,width:300,x:18,y:0},null,null),i=(0,f.j)((s||(s=n("7mXp"))).PointerControl,{__update_handlers__:S,direction:"down",height:75,name:"episodesPointerDown",onClick:F,visible:N,width:300,x:18,y:650},null,null))
var H=!!(d&&d.items&&d.items[0])
return(0,f.j)((a||(a=n("agVJ"))).Focusable,{__update_handlers__:I,animation:g,animationKey:"episodes",children:[(0,f.j)(C,{children:l,focus:v,layout:_,onIndexChange:E,range:w,scroll:M,transition:P},"items",null),e,t,i],effectParams:c,focused:p,focusKey:m,onFocusRequest:y,onKeyDown:B,onMouseOver:j,onTreeLoaded:H?d.onTreeLoaded:void 0,staticStyle:A.container,style:{rect:R},unstable_effect:D},m,null)},t}(y.Component)).contextType=m.StylesheetContext,t.displayName="episodesList",t}
var a,r,s,d,l,u,c,h,f=n("igsZ"),v=o(n("VbXa")),g=o(n("oMp5")),m=n("s6u8"),p=n("1Oe/"),y=n("/P98"),I=["onFocusRequest","onKeyDown","onMouseOver","onTreeLoaded"],S=["onClick"],b=["onClick"],_=(0,m.getStylesheetDefaultsResolver)(),x={container:function(){return{base:{}}}}
function T(e,t){var i,a,r
return void 0===t&&(t=1),null!=e&&null!=(i=e.summary)&&i.available&&e.summary.viewable&&(a={movieId:e.summary.id,params:{branched:(0,(void 0===c?c=o(n("o+kE")):c).default)(e.summary)},priority:t,pts:1e3*((null==(r=e.bookmark)?void 0:r.position)||0)}),a}},"5sI8":function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=function(e){return(0,l.Falcor)(e,{_updateCurrent:function(e,t){void 0===t&&(t={})
var i=this.props,r=i.location,l=i.videoId,u=t,c=u.epIndex,h=u.grIndex
if(r.pathname===(void 0===s?s=n("ve0B").patterns.DETAILS_CHARACTER:s)&&void 0!==h&&void 0!==c){var f=this.context.falcorComponentContext.rootModel.withoutDataSource()
if(f){var v=-12e4;(0,(void 0===o?o=a(n("8VqT")):o).default)(f.setValue(["characters",l,"current","currentIndex"],{$expires:v,$type:"atom",value:{$size:9,index:c}})).take(1).subscribe(d.noop,d.noop,d.noop),(0,(void 0===o?o=a(n("8VqT")):o).default)(f.setValue(["characters",l,"current","groupSummary"],{$expires:v,$type:"atom",value:{$size:9,idx:h}})).take(1).subscribe(d.noop,d.noop,d.noop)}}},deref:!1,errorSelector:function(e,t){var n=t.location,i=t.onError,o=t.onExit
return{episodesData:{index:0},hasError:u(n),onError:i,onExit:o,outline:{},seasonsData:{index:0}}},getBasePath:function(){return[]},getPaths:function(e){var t=e.location,o=e.videoId,a=t.pathname===(void 0===s?s=n("ve0B").patterns.DETAILS_CHARACTER:s)?"characters":"videos",r=void 0===o?[]:[a,o],d=[["summary"],["outline"],["groups","summary"],["episodes","summary"]].map((function(e){return r.concat(e)}))
return d.push([a,o,"current",["groupSummary","currentIndex"]]),(0,(i||(i=n("9IR/"))).getFeature)("ttsEnabled")&&(0,(i||(i=n("9IR/"))).getFeature)("seasonAdvisoriesInEdp")&&d.push(["texttospeech","strings"]),d},invalidateCurrentIndex:function(){var e=this.props,t=this.state,i=e.location,o=e.videoId
if(i.pathname===(void 0===s?s=n("ve0B").patterns.DETAILS_CHARACTER:s)){var a=t.falcorComponentContext,r=(void 0===a?{}:a).rootModel
r&&r.invalidate(["characters",o,"current"])}},name:"EdpFalcor",overridePlayHandle:function(e){var t=e.ancestorId,o=e.data,a=e.episodeSummary,s=e.event,d=e.isSupplemental,l=e.unifiedEntityId,u=e.videoId,c=this.props.onPlayEpisode
this._updateCurrent(u,o),(0,(i||(i=n("9IR/"))).getFeature)("graphqlPlaymode")&&(0,(r||(r=n("fSe6"))).addVideoIdToNodeIdMapping)(null==a?void 0:a.id,null==a?void 0:a.videoNodeId),c({ancestorId:t,episodeSummary:a,event:s,isSupplemental:d,unifiedEntityId:l,videoId:u})},progressive:!1,selector:function(e,t,i){var o,a=i.epIndex,r=i.epMode,d=i.location,l=i.onError,c=i.onExit,h=i.sIndex,f=i.sMode,v=i.videoId,g=d.pathname===(void 0===s?s=n("ve0B").patterns.DETAILS_CHARACTER:s)?"characters":"videos",m=(e&&e[g]&&e[g][v]||{}).current||{},p=e&&e[g]&&e[g][v]||{},y={ancestorSummary:p.summary,episodesData:{index:0},onError:l,onExit:c,onPlayEpisode:this.overridePlayHandle,outline:{},seasonsData:{index:0,items:{}},ttsAdvisories:void 0}
if(p.groups){var I=0
m&&m.groupSummary&&(I=m.groupSummary.idx)
var S=(p.groups||{}).summary,b=void 0===S?EMPTY_OBJECT:S,_=h>=-1?h:I,x="page"===f||void 0===f?"page":"",T=b.items,E=b.length
E?(y.seasonsData.index=_,y.seasonsData.items=T,y.seasonsData.dataLength=E,y.seasonsData.mode=x):(y.hasError=u(d),y.seasonsData.dataLength=0)}if(p.episodes){var w=0
m&&m.currentIndex&&(w=m.currentIndex.index)
var k=(p.episodes||{}).summary,C=a>=-1?a:w,R="page"===r||void 0===r?"page":"",M=(void 0===k?{}:k).length
M?(y.episodesData.index=C,y.episodesData.dataLength=M,y.episodesData.mode=R):(y.episodesData.dataLength=0,y.hasError=u(d))}return p.outline&&(y.outline=p.outline),y.ttsAdvisories=null==e||null==(o=e.texttospeech)||null==(o=o.strings)?void 0:o.maturityRating,y},transformResponse:function(e){return e}})}
var r,s,d=n("BHy0"),l=n("pbgz")
function u(e){return e.pathname===(void 0===s?s=n("ve0B").patterns.DETAILS_CHARACTER:s)?"CdpGenericError":"EdpGenericError"}},"6F2/":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("xNxB"),a=i(n("5r0+")),r=i(n("HLA4")),s=n("mBPq"),d=i(n("Ym6w")),l=i(n("67BT")),u=(0,o.compose)(s.withConnectedProps,l.default,d.default,(0,a.default)({tag:"details"}))
t.default=u(r.default)},"78kM":function(e,t,n){t.__esModule=!0,t.Container=void 0
var i=n("eNcy"),o=n("ClEx"),a=n("Mo5I"),r=a.STILL_HEIGHT,s=a.STILL_WIDTH+15+9+400
t.Container=(0,i.s)("Widget","Container",{height:r,name:function(e){return e.name},opacity:function(e){return e.opacity},opacityTransition:{duration:o.Duration.Duration250,easing:o.Easing.EasingQuadraticInOut},width:s,x:function(e){return e.rect.x},y:function(e){return e.rect.y}},!0)},"85i5":function(e,t,n){t.__esModule=!0,t.default=function(e,t){var n=t.buttonVisualState
return{animation:"highlighted"===n||"pressed"===n?a.key(n):r.key(n),key:n}}
var i=n("ClEx"),o=n("Hg/B"),a=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:.4,to:1}),r=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,to:1})},"93Qs":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),s=n("eNcy"),d=n("/P98"),l=i(n("fY+Z"))
t.default=(0,d.memo)((0,l.default)((function(e){var t=e.buttonType,i=e.defaultFocus,s=e.disabled,l=e.effectParams,c=e.entered,h=void 0!==c&&c,f=e.entityType,v=e.focusKey,g=e.focused,m=e.item,p=m.disableTooltips,y=m.itemContext,I=m.onShowFirstRatingModal,S=m.onUserInteraction,b=m.videoId,_=e.name,x=e.onFocused,T=e.onRated,E=e.onThumbsAnimationComplete,w=e.opacity,k=e.prioritizeStoreForThumbs,C=e.rect,R=e.unstable_effect,M=(0,(o||(o=n("agVJ"))).useEntered)(v,h),P=(0,(o||(o=n("agVJ"))).useFocused)(v,g)
return(0,d.useEffect)((function(){null==x||x(M)}),[M,x]),(0,r.j)(u,{children:(0,r.j)((a||(a=n("O4e8"))).ThumbRating,{buttonType:t,defaultFocus:i,disabled:s,entityType:f,focused:P,isTooltipEnabled:!p,itemContext:y,maxWidth:400,onRated:T,onShowFirstRatingModal:I,onThumbsAnimationComplete:E,onUserInteraction:S,prioritizeStoreForThumbs:k,videoId:b},null,null),effectParams:l,focused:P,focusKey:v,height:null==C?void 0:C.height,name:_,opacity:w,unstable_effect:R,width:null==C?void 0:C.width,x:null==C?void 0:C.x,y:null==C?void 0:C.y},null,null)})),(function(e,t){return e.disabled===t.disabled&&e.entered===t.entered&&e.focused===t.focused&&e.focusKey===t.focusKey&&e.onFocused===t.onFocused&&e.onRated===t.onRated&&e.opacity===t.opacity&&e.unstable_effect===t.unstable_effect&&e.effectParams===t.effectParams}))
var u=(0,s.s)("Focusable","MenuButton",{clip:!1,height:function(e){return e.height},ignorePointer:!0,name:function(e){return e.name},opacity:function(e){return e.opacity},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!1)},"9wwM":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,c=e.Episode,w=e.EpisodeList,k=e.SeasonList,C=e.animationFactory,R=e.seasonsButtonFactory,M=e.stylesheet
function P(e,t){var n=this.animations[t]
return n||(n=this.animations[t]=C(e,t)),n}function D(e){var t=e.clickedSeasonIndex,n=e.epIndex,i=e.items,o=e.mouseIsShowing,a=e.sIndex,r={epIndex:n,sIndex:a}
if(o||void 0===t||(r.sIndex=t),-1===n||-1===a){var s,d=0
for(var l in i)s=i[l],n>=0&&-1===a&&s.epIndex>=0&&s.epIndex<=n&&(r.sIndex=d),-1===n&&a>=0&&d===a&&(r.epIndex=s.epIndex),d++}return r}function A(e){return!(!e||"shows"!==e.type&&"series"!==e.type)}function L(e,t){var n=this.props.onSeasonsClickChange
n&&n(e,t)}function F(e,t){var n=this.props.onSeasonsIndexChange
n&&n(e,t)}function O(){var e=this.state
e&&!e.seasonsMouseOver&&this.setState({enteredChildChanged:e.enteredChildChanged,seasonsMouseOver:!0})}function B(){var e=this.state
e&&e.seasonsMouseOver&&this.setState({enteredChildChanged:e.enteredChildChanged,seasonsMouseOver:!1})}function j(){this.props.handleSeasonsKeyEnter(this.props.focusKey)}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.handleSeasonsKeyEnter=j.bind(n),n.handleMouseOut=B.bind(n),n.handleMouseOver=O.bind(n),n.handleSeasonSubmit=F.bind(n),n.handleSeasonClick=L.bind(n),n.allowKeyUpForItem=A.bind(n),n._checkIndexes=D.bind(n),n._getFocusAnimation=P.bind(n),n.state={enteredChildChanged:!1,seasonsMouseOver:!1},n}(0,m.default)(t,e)
var s=t.prototype
return s.UNSAFE_componentWillMount=function(){this.sessionId=(a||(a=n("Mmf2"))).consolidatedLogger.startSession("Presentation",{trackingInfo:E(this.props),view:"episodesSelector"}),this.eMode="page",this.animations={}},s.componentWillUnmount=function(){var e=this.sessionId
e&&(a||(a=n("Mmf2"))).consolidatedLogger.endSession(e),this.animations=void 0},s.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,i=t.clickedSeasonIndex,a=t.enteredChild,r=t.episodesData,s=t.mouseIsShowing,d=t.seasonsData,l=e.clickedSeasonIndex,u=e.enteredChild,c=e.episodesData,h=e.mouseIsShowing,f=e.seasonsData,v=e.showSeasonAdvisoryHeader,g=!1
f&&f.index>=0&&d&&d.index>=0&&(g=Math.abs(f.index-d.index)>2)
var m=!1
if((0,(o||(o=n("9IR/"))).getFeature)("ttsEnabled")&&(0,(o||(o=n("9IR/"))).getFeature)("seasonAdvisoriesInEdp")&&v){var p=this._checkIndexes({clickedSeasonIndex:i,epIndex:null==r?void 0:r.index,items:null==d?void 0:d.items,mouseIsShowing:s,sIndex:null==d?void 0:d.index}),y=this._checkIndexes({clickedSeasonIndex:l,epIndex:c.index,items:f.items,mouseIsShowing:h,sIndex:f.index})
m=!0,p.epIndex!==y.epIndex&&p.sIndex===y.sIndex&&(m=!1)}this.setState({enteredChildChanged:a!==u,paging:g,shouldSayAdvisories:m})},s.componentDidUpdate=function(e){var t=this.props,o=t.hasError,r=t.onError,s=t.seasonsData
if(e.enteredChild!==t.enteredChild){var d=this.sessionId
d&&((a||(a=n("Mmf2"))).consolidatedLogger.endSession(d),this.sessionId=null)
var l="episodeList"===t.enteredChild?"episodesSelector":"seasonsSelector"
if(this.sessionId=(a||(a=n("Mmf2"))).consolidatedLogger.startSession("Presentation",{trackingInfo:E(t),view:l}),"seasonList"===e.enteredChild&&"episodeList"===t.enteredChild&&t.active){var u=s||{},c=u.index,f=void 0===c?0:c,v=u.items,g=null==v?void 0:v[f]
"trailers"===(null==g?void 0:g.type)&&(a||(a=n("Mmf2"))).consolidatedLogger.startAndEndSession((void 0===h?h=i(n("YMD/")):h).default.SESSION.viewPreviewsCommand,{view:"ViewPreviewsAndMore"})}}o&&r&&r({source:"/details/edp",type:o})},s.render=function(){var e,t,o=this,a=this.context,s=this.props,h=this.state,m=s.active,y=s.animation,E=s.clickedSeasonIndex,C=s.entered,P=s.enteredChild,D=s.episodesData,A=s.falcorContext,L=s.focusKey,F=s.focused,O=s.hasError,B=s.highlightedSeasonIndex,j=s.itemContext,W=void 0===j?{}:j,N=s.mouseIsShowing,K=s.onEpisodesIndexChange,H=s.onError,V=s.onExit,U=s.onPlayEpisode,q=s.onSeasonsFocusedItemChange,G=s.onSeasonsIndexChange,z=s.onTransitionCompleted,Z=s.seasonsData,X=s.showSeasonAdvisoryHeader,J=void 0!==X&&X,Q=s.transitionState,Y=s.ttsAdvisories,$=s.visible,ee=void 0===$||$,te=Z||{},ne=te.dataLength,ie=te.index,oe=te.items,ae=te.mode,re=D||{},se=re.dataLength,de=re.index,le=re.mode,ue=M.resolve(a),ce="seasonList"===P,he=this._checkIndexes({clickedSeasonIndex:E,epIndex:de,items:oe,mouseIsShowing:N,sIndex:ie}),fe=B,ve=E||he.sIndex,ge=le
"page"===this.eMode&&se>0&&(ge="page",this.eMode=null)
var me=this.handleMouseOut,pe=this.handleMouseOver,ye=h.enteredChildChanged,Ie=h.paging,Se=h.seasonsMouseOver,be=h.shouldSayAdvisories,_e=void 0===be||be
if(ne&&ne>0&&se&&se>0){var xe,Te=ue.animations
if(ye&&m&&(0,(d||(d=n("NEM1"))).isComponentTransitionComplete)(s)){var Ee=ce?"focusSeasons":"focusEpisodes"
xe=this._getFocusAnimation(Te,Ee)}var we=Ie?"page":ae,ke={id:"dp:season-list:"+s.videoId,templateKey:p.TemplateKey.DP_MidgroundA}
t=(0,g.j)(k,{__update_handlers__:b,children:function(e){var t=e.focusKey,n=e.focused,i=e.highlighted,a=e.key,r=e.listContext,s=e.listItem
if(s.data)return R({childFocusKey:t,extraData:{clickedSeasonIndex:ve,entered:ce,highlighted:i,highlightedSeasonIndex:fe,isMouseOver:Se},focused:n,handleClick:o.handleSeasonClick,hasOpacityOnMouseIsShowing:!N,key:a,listContext:r,listItem:s,mouseIsShowing:N,styles:ue})},dataLength:ne,depthTransitionParams:ke,focusAnimation:xe,focusKey:"seasonList",highlightedIndex:fe,index:he.sIndex,isMouseOver:Se,itemContext:W,items:oe,layoutRect:ue.seasonsLayout.rect,mode:we,name:"seasonList",onAllowKeyUpForItem:this.allowKeyUpForItem,onError:H,onExit:V,onFocusedItemChange:q,onIndexChange:G,onKeyEnter:this.handleSeasonsKeyEnter,onMouseOut:me,onMouseOver:pe,rect:ue.seasons.rect,selectedIndex:ve,videoId:s.videoId},"seasonList",null)
var Ce={id:"dp:episode-list:"+s.videoId,templateKey:p.TemplateKey.DP_Foreground}
e=(0,g.j)(w,{__update_handlers__:S,ancestorSummary:s.ancestorSummary,children:function(e){var t,n,i,o=e.focusKey,a=e.focused,r=e.key,d=e.listContext,l=e.listItem
if(l){var u=J&&l.absoluteIndex<d.range.index&&(n=(t=(null==Z?void 0:Z.items[ve])||{}).advisories,i=t.boardId,!!(t.maturityRating||null!=n&&n.length||i))
return(0,g.j)(c,{ancestorId:s.videoId,enteredSeasons:ce,focused:a,focusKey:o,itemContext:W,listItem:l,name:"episode-"+l.dataIndex,onPlayEpisode:U,opacity:u?.1:1,rect:l.rect},r,null)}},dataLength:se,depthTransitionParams:Ce,falcorContext:A,focused:F,focusKey:"episodeList",headerAdvisories:J?{season:null==Z?void 0:Z.items[ve],shouldSayAdvisories:_e,ttsAdvisories:Y}:void 0,index:he.epIndex,itemContext:W,mode:ge,name:"episodeList",onError:H,onExit:V,onIndexChange:K,onTreeLoaded:s.onTreeLoaded,playbackAuth:s.playbackAuth,rect:x,transitionState:Q,videoId:s.videoId},"episodeList",null)}var Re=oe&&oe[ve]
return(0,g.j)((r||(r=n("agVJ"))).FocusableRoot,{__update_style__:I,animation:y,children:[(0,g.j)((l||(l=n("tlYw"))).Loader,{delay:250,height:(u||(u=n("8J/X"))).VIEWPORT_HEIGHT,visible:!(O||se&&ne),width:(u||(u=n("8J/X"))).VIEWPORT_WIDTH},"loading-spinner",null),t,e,J&&Re&&(0,g.j)((void 0===f?f=i(n("ods6")):f).default,(0,v.default)({depthTransitionParams:T,width:x.width-16,x:_+16,y:40},Re),null,null)],disabled:!C,focused:F,focusKey:L,onAnimationCompleted:z,staticStyle:ue.container,style:{visible:ee}},"edp",null)},t}(y.Component)).contextType=(s||(s=n("s6u8"))).StylesheetContext,t.displayName="EpisodesDetails",t.defaultProps={enteredChild:"episodeList"},t}
var o,a,r,s,d,l,u,c,h,f,v=i(n("siCl")),g=n("igsZ"),m=i(n("VbXa")),p=n("KBg7"),y=n("/P98"),I=["visible"],S=["onTreeLoaded"],b=["onMouseOut","onMouseOver"],_=505,x={height:1296,width:750,x:_,y:0},T={id:"dp:episode-list:advisories",templateKey:p.TemplateKey.DP_Foreground}
function E(e){if(!e||!e.itemContext)return{}
var t=e.itemContext,i=e.location,o=e.videoId,a={imageKey:t.imageKey,listId:t.listId,rank:t.rank,requestId:t.requestId,row:t.row,trackId:t.trackId,unifiedEntityId:t.unifiedEntityId}
return(0,(d||(d=n("NEM1"))).matchesPath)(i.pathname||"",(c||(c=n("ve0B"))).patterns.DETAILS_CHARACTER)?a.kidsCharacterId=o:a.videoId=o,a}},"CR7/":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("agVJ"),a=n("xNxB"),r=i(n("bXzJ")),s=i(n("Xmah")),d=(0,a.compose)(o.withFocusPath,s.default)
t.default=d(r.default)},Cc0U:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e,t,s){return(0,r.default)({pointerAffordance:function(){var r
return{base:{height:55,name:"pointerUp",width:e,x:s||(t-e)/2},pointerAffordanceState:(r={},r[(void 0===o?o=i(n("eCN6")):o).default.none]={backgroundImage:(0,a.i)("X9a+halign=center+valign=center","pointeraffordances")},r[(void 0===o?o=i(n("eCN6")):o).default.highlighted]={backgroundImage:(0,a.i)("F0E+halign=center+valign=center","pointeraffordances")},r)}}})}
var o,a=n("oM/y"),r=i(n("Hy99"))},DS29:function(e,t,n){t.__esModule=!0,t.withCustomDepthTransitionProps=function(e,t){return function(i){var o=(0,(a||(a=n("kCWc"))).useDepthTransitionProps)(t)
return(0,r.j)(e,{__proto__:i,effectParams:o.effectParams,unstable_effect:o.unstable_effect},null,null)}},t.withDepthTransitionAsWrapper=function(e,t){var d=(0,(o||(o=n("9IR/"))).getFeature)("enableDepthTransition")?(0,(i||(i=n("eNcy"))).s)("Widget",void 0,{},!1):s.Fragment
return function(i){var o=(0,(a||(a=n("kCWc"))).useDepthTransitionProps)(t)
return(0,r.j)(d,{children:(0,r.j)(e,i,null,null),effectParams:o.effectParams,unstable_effect:o.unstable_effect},null,null)}},t.withDepthTransitionProps=function(e){return function(t){var i=(0,(a||(a=n("kCWc"))).useDepthTransitionProps)(t.depthTransitionParams)
return(0,r.j)(e,{__proto__:t,effectParams:i.effectParams,unstable_effect:i.unstable_effect},null,null)}}
var i,o,a,r=n("igsZ"),s=n("/P98")},DeLv:function(e,t,n){t.__esModule=!0,t.EpisodeStill=void 0
var i=n("agVJ"),o=n("xNxB"),a=n("UdvY"),r=n("rISM"),s=n("RFz0"),d=(0,o.compose)(i.withFocusPath,s.withConnectedProps,r.withAnimation)
t.EpisodeStill=d(a.HorizontalTitleStill)},FPez:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("9IR/"),s=n("agVJ"),d=n("xNxB"),l=i(n("u6Ht")),u=i(n("3REf")),c=i(n("9TMU")),h=i(n("+Voc")),f=i(n("Q4uI")),v=i(n("+YIq")),g=i(n("y0oT")),m=f.default.trackingInfoSelector,p=f.default.trackingScrollViewportSelector,y=(0,l.default)({enablePresentationTracking:!0,falcor:h.default,itemArea:{height:168,width:730},layoutDirection:"y",layoutOrigin:{x:18,y:94},layoutSpacing:{x:10,y:20},scrollAt:0,scrollItemAlign:"negative-edge",trackingInfoSelector:m,trackingScrollViewportSelector:p,velocityConfig:c.default.vertical720px({itemPixels:150,pagingVelocityMultiplier:3})})
function I(e){return!!e.entered}a=(0,r.getFeatures)().ttsEnabled?n("P7Dj").default:n("P1w9").identity
var S=(0,d.compose)(s.withFocusPath,g.default,(function(e){return(0,(o||(o=n("TEe5"))).withDebouncer)(e,"index",200,I)}),y,a),b=(0,u.default)({stylesheet:v.default})
t.default=S(b)},ICKM:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,h=e.displayName,f=void 0===h?"ThreePartButton":h,v=e.shouldComponentUpdate,g=e.stylesheet,m=c
return g&&(m=g.withDefaults(c)),(0,(void 0===a?a=i(n("z3Fz")):a).default)({displayName:f,render:function(){var e=this.context,t=this.props,a=this.state.visualState,c=t.children,h=t.disabled,f=t.flexLayout,v=t.focusKey,g=t.focused,p=t.margin,y=t.minWidth,I=t.mirror,S=t.name,b=t.opacity,_=t.rect,x=t.style,T=void 0===x?{}:x,E=t.text,w=t.visible,k=(0,(void 0===r?r=i(n("wNCT")):r).default)(m,e,{buttonVisualState:a}),C=k.background,R=k.end,M=k.middle,P=k.start,D=(0,d.default)({},T)
return void 0!==S&&(D.name=S),_&&(D.rect=_),!0!==w&&!1!==w||(D.visible=w),void 0!==p&&(D.margin=p),void 0!==b&&(D.opacity=b),void 0!==f&&(D.flexLayout=f),void 0!==I&&(D.mirror=I),(0,s.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:u,children:[(0,s.j)("Widget",{staticStyle:P},"start",null),(0,s.j)("Widget",{__update_style__:l,children:c,staticStyle:M,style:{minWidth:y,text:E}},"middle",null),(0,s.j)("Widget",{staticStyle:R},"end",null)],disabled:h,focused:g,focusKey:v,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:C,style:D},"outer",null)},shouldComponentUpdate:v,UNSAFE_componentWillReceiveProps:t})}
var o,a,r,s=n("igsZ"),d=i(n("siCl")),l=["minWidth","text"],u=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],c={background:function(){return{base:{name:"button"}}},end:function(){return{base:{name:"end"}}},middle:function(){return{base:{name:"middle"}}},start:function(){return{base:{name:"start"}}}}},IIC3:function(e,t,n){t.__esModule=!0,t.ICON_COLOR=void 0
var i=n("M0QK")
t.ICON_COLOR={default:i.IconColor.Foreground,disabled:i.IconColor.ForegroundSubtle,focused:i.IconColor.ForegroundHighlight,highlighted:i.IconColor.ForegroundHighlight}},JU2v:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=t.DETAILS_SUB_ROUTE_MENU_COL_Y=void 0
var o,a,r=n("oM/y"),s=n("9IR/"),d=i(n("Hy99")),l=(0,s.getFeatures)(),u=l.advisoriesInDetails||l.relevanceScore?4:5
t.DETAILS_SUB_ROUTE_MENU_COL_Y=175,t.default=(0,d.default)({container:function(){return{base:{name:"details",rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:(a||(a=n("8J/X"))).VIEWPORT_X,y:(a||(a=n("8J/X"))).VIEWPORT_Y}}}},loading:function(){var e=(o||(o=n("S4TX"))).supportsSng?(0,r.i)("WNI+sourceRectFor720p=true","sng"):(0,r.i)("lKK+sourceRectFor720p=true","mng"),t=e.sourceRectFor720p,i=t.height,s=t.width
return{base:{drawOrder:10,image:e,name:"details-loading-spinner",rect:{height:i,width:s,x:((a||(a=n("8J/X"))).VIEWPORT_WIDTH-s)/2,y:((a||(a=n("8J/X"))).VIEWPORT_HEIGHT-i)/2}}}},mdpList:function(){return{base:{height:46*u,width:360}}},mdpListLayout:function(){return{base:{rect:{height:46*u,width:360,x:0,y:0}}}},subtitles:function(){return{base:{opacity:.4,rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:(a||(a=n("8J/X"))).VIEWPORT_X,y:(a||(a=n("8J/X"))).VIEWPORT_Y}}}},transitionGroup:function(){return{base:{clip:!1,drawOrder:1,name:"subtransitionGroup",x:0,y:0}}},video:function(){return{base:{rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:(a||(a=n("8J/X"))).VIEWPORT_X,y:(a||(a=n("8J/X"))).VIEWPORT_Y}}}}})},"K4/S":function(e,t,n){t.__esModule=!0,t.HEIGHT=void 0,t.default=function(e){var t=e.highlighted,c=e.isReminderSet,m=e.maxWidth,p=e.opacity,y=e.strings,I=e.x,S=(0,(o||(o=n("GQsr"))).useTheme)(),b=c?y.reminderSet:y.remindMe
t||(b="")
var _=(0,h.useButtonIconConfig)("primary",t?"focused":"default"),x=_.borderFill,T=_.borderWidth,E=_.fill
return(0,u.j)(g,{children:[(0,u.j)((s||(s=n("6jZX"))).BorderBox,{borderFill:x,borderWidth:T,children:(0,u.j)((r||(r=n("NyG9"))).RemindMe,{icon:c?(d||(d=n("S2RX"))).IconType.Checkmark:(d||(d=n("S2RX"))).IconType.Bell,inverted:t,x:(f-(a||(a=n("dzda"))).SIZE)/2,y:(f-(a||(a=n("dzda"))).SIZE)/2},null,null),cornerRadius:S.ButtonIconBorderRadius,fill:E,height:f,width:v,x:I},null,null),(0,u.j)((l||(l=n("AHGZ"))).Text,{children:b,height:f,layoutSpacing:16,textAlign:"center-vertical",type:(i||(i=n("BKc6"))).TextType.CaptionHeavy,wrap:!0,x:v+8},null,null)],opacity:p,testAttributes:{test_isReminderSet:c},width:m},""+t,null)}
var i,o,a,r,s,d,l,u=n("igsZ"),c=n("eNcy"),h=n("n1w0"),f=t.HEIGHT=h.STANDARD_BUTTON_ICON_SIZE,v=h.STANDARD_BUTTON_ICON_SIZE,g=(0,c.s)("Widget","Container",{height:f,opacity:function(e){return e.opacity},width:function(e){return e.width}},!0)},Kfpz:function(e,t,n){t.__esModule=!0,t.default=function(e,t){var o=void 0===t?{showFocusedRing:!0}:t,r=o.filled,s=void 0!==r&&r,d=o.showFocusedRing,l=void 0===d||d,u=o.showUnfocusedRing,c=void 0!==u&&u,h={url:{url:void 0,visible:!1}},f=function(e){return e?{color:(i||(i=n("D+c2"))).FoundationalColors.Black}:(i||(i=n("D+c2"))).FoundationalColors.White}
return e.extend({end:function(e){var t=l||c?a():{},n={backgroundImage:l?t.focusedRight:void 0},i={backgroundImage:l?t.focusedLeft:void 0}
if(s){var o=f(!0),r=f(!1)
n.textStyle=o,n.color=r,i.textStyle=o,i.color=r}return{base:{backgroundImage:c?t.unfocusedRight:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:n,true:i}},pressed:{isRtl:{false:n,true:i}}}},isRtl:{true:{backgroundImage:c?t.unfocusedLeft:h}}}},middle:function(e){var t=l||c?a():{},n={backgroundImage:l?t.focusedCenter:void 0}
if(s){var i=f(!0),o=f(!1)
n.textStyle=i,n.color=o}return{base:{backgroundImage:c?t.unfocusedCenter:h,cache:c,rect:{height:42},textStyle:{size:20,weight:"normal"}},buttonVisualState:{highlighted:n,pressed:n}}},start:function(e){var t=l||c?a():{},n={backgroundImage:l?t.focusedLeft:void 0},i={backgroundImage:l?t.focusedRight:void 0}
if(s){var o=f(!0),r=f(!1)
n.textStyle=o,n.color=r,i.textStyle=o,i.color=r}return{base:{backgroundImage:c?t.unfocusedLeft:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:n,true:i}},pressed:{isRtl:{false:n,true:i}}}},isRtl:{true:{backgroundImage:c?t.unfocusedRight:h}}}}})}
var i,o=n("oM/y")
function a(){return{focusedCenter:(0,o.i)("JkR+halign=stretch","button"),focusedLeft:(0,o.i)("wxV","button"),focusedRight:(0,o.i)("A3M","button"),unfocusedCenter:(0,o.i)("F7C+halign=stretch","button"),unfocusedLeft:(0,o.i)("yag","button"),unfocusedRight:(0,o.i)("MFy","button")}}},M3HD:function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.Component,n=e.falcor
return(void 0===n?l:n).Falcor(t,v)}
var a,r,s,d=o(n("gisa")),l=i(n("pbgz")),u={details:{},evidence:{},hasBobData:!0,images:[],outline:{}}
function c(e,t,i,a){void 0===a&&(a=(r||(r=n("lsGl"))).selector)
var d=i.entityMetadata?i.entityMetadata.selector:a,l=i.itemContext,c=i.videoId
if(void 0!==c&&e.hasBobData){var h=d(c,l,e.json)
return h===(void 0===s?s=o(n("QQFM")):s).default?h=u:h.hasBobData=!0,h}if(l&&l.isEmptyRow&&e.hasBobData){var f=d(0,l,e.json)
return f.hasBobData=!0,f}return l&&"error"===l.context?u:{hasBobData:!1}}function h(e){return d.default.Observable.return({error:e})}function f(e,t){return t&&t.json&&(e.json.data=t.json),t&&t.error&&(e.json.error=t.error),e}var v={fetch:function(e,t,i){var s=t.entityMetadata,d=t.itemContext,l=t.videoId,u=i.rootModel
if(void 0===l)return e([])
var c=s?s.toMetadataPaths(d,[l]):(0,(r||(r=n("lsGl"))).toMetadataPaths)(d,[l])
return(0,(void 0===a?a=o(n("8VqT")):a).default)(u.get.apply(u,c)).catch(h).scan({json:{}},f).defaultIfEmpty({})},getBasePath:function(e){var t=e.itemContext,i=e.videoId,o=[]
return void 0!==i&&(o=[(0,(r||(r=n("lsGl"))).toEntityType)(t),i]),o},getPaths:function(){return[]},progressive:!1,selectData:c,selector:function(e,t,n){return c(e,0,n)},transformResponse:function(e){return{hasBobData:!0,json:e&&e.data||{}}}}},MATm:function(e,t,n){t.__esModule=!0,t.useEpisodeReminderFalcor=function(e){var t,n=(0,o.useMemo)((function(){return e?[["videos",e,"reminder"],["videosStringsCommon","summary"]]:[["videosStringsCommon","summary"]]}),[e]),a=(0,i.useFalcor)(n).data||{},r=a.videos,s=a.videosStringsCommon,d=null==s?void 0:s.summary,l=null==d?void 0:d.mylist
return{isReminderSet:(null==r||null==(t=r[""+e])||null==(t=t.reminder)?void 0:t.isReminderSet)||!1,strings:{adding:null==l?void 0:l.adding,reminderSet:null==d?void 0:d.reminderSet,remindMe:null==d?void 0:d.remindMe,removing:null==l?void 0:l.removing}}}
var i=n("pbgz"),o=n("/P98")},Mo5I:function(e,t){t.__esModule=!0,t.VIGNETTE_Y=t.VIGNETTE_LEFT_PADDING=t.VIGNETTE_HEIGHT=t.TEXT_COLOR=t.STILL_WIDTH=t.STILL_HEIGHT=t.PROGRESS_BAR_WIDTH=t.PROGRESS_BAR_HEIGHT=t.DEFAULT_SUBMIT_KEYS=void 0,t.STILL_WIDTH=300,t.STILL_HEIGHT=168,t.VIGNETTE_LEFT_PADDING=12,t.VIGNETTE_Y=42,t.VIGNETTE_HEIGHT=126,t.PROGRESS_BAR_WIDTH=275,t.PROGRESS_BAR_HEIGHT=4,t.TEXT_COLOR={a:255,b:153,g:150,r:146},t.DEFAULT_SUBMIT_KEYS=["key.enter","key.play","key.start"]},NFSk:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({background:function(){return{base:{rect:{height:42}}}}})}},OiNa:function(e,t,n){var i,o
t.__esModule=!0,t.useEpisodeReminderQuery=function(e){var t,a=(0,(i||(i=n("RmPE"))).useQuery)(void 0!==o?o:o=n("pEK0"),{videoId:e||0},{skip:!e}).data,r=(null==a||null==(t=a.videos)||null==(t=t[0])?void 0:t.isInRemindMeList)||!1,s=(0,(i||(i=n("RmPE"))).useStrings)(["comingSoon_remindme","comingSoon_reminderSet_short","mdp_queue_adding","mdp_queue_removing"]).strings
return{isReminderSet:r,strings:{adding:null==s?void 0:s.mdp_queue_adding,reminderSet:null==s?void 0:s.comingSoon_reminderSet_short,remindMe:null==s?void 0:s.comingSoon_remindme,removing:null==s?void 0:s.mdp_queue_removing}}}},P7Dj:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a=n("igsZ"),r=i(n("J4zp")),s=(i(n("2mBW")),i(n("Ki15")).default.list)
t.default=s({item:function(e){var t,i=e.headerAdvisories,s=e.index,d=void 0===s?0:s,l=e.items,u=(void 0===l?[]:l)[d]||{},c=u.edpBoxArt,h=void 0===c?{}:c,f=u.item,v=void 0===f?{}:f,g=v.bookmark,m=void 0===g?{}:g,p=v.summary,y=void 0===p?{}:p,I=y.labels,S=void 0===I?{}:I,b=y.title,_=m.position,x=0===(void 0===_?0:_)?S.play:S.resumePlay,T=S.edpDurationForTTS,E=i||{},w=E.season,k=E.shouldSayAdvisories,C=E.ttsAdvisories,R=w||{},M=R.advisories,P=void 0===M?[]:M,D=R.label,A=R.maturityRating
if(k&&C&&b&&"text"===(null==A?void 0:A.type)){var L,F,O=(0,(o||(o=n("m5dK"))).nfformat)(C,{maturity:A.value}),B=P.map((function(e){return"text"===(null==e?void 0:e.type)&&e.value})).filter(Boolean),j=(0,r.default)(B,1)[0]
return j?(0,a.j)("speak",{children:[(0,a.j)("p",{children:D},null,null),(0,a.j)("s",{children:O},null,null),(0,a.j)("s",{children:j},null,null),(0,a.j)("p",{children:x},null,null),(0,a.j)("s",{children:b},null,null),(0,a.j)("s",{children:null==(L=h.synopsis)?void 0:L.text},null,null),(0,a.j)("s",{children:T},null,null)]},null,null):(0,a.j)("speak",{children:[(0,a.j)("p",{children:D},null,null),(0,a.j)("s",{children:O},null,null),(0,a.j)("p",{children:x},null,null),(0,a.j)("s",{children:b},null,null),(0,a.j)("s",{children:null==(F=h.synopsis)?void 0:F.text},null,null),(0,a.j)("s",{children:T},null,null)]},null,null)}return b&&(0,a.j)("speak",{children:[(0,a.j)("s",{children:x},null,null),(0,a.j)("s",{children:b},null,null),(0,a.j)("break",{time:1500},null,null),(0,a.j)("s",{children:null==(t=h.synopsis)?void 0:t.text},null,null),(0,a.j)("break",{time:800},null,null),(0,a.j)("s",{children:T},null,null)]},null,null)}})},PFlX:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.Vignette=function(e){return(0,a.j)(r.default.Fragment,{children:[(0,a.j)(h,a.p,null,null),(0,a.j)(c,{children:e.children},null,null)]},null,null)},t.VignetteImage=t.VignetteContents=void 0,t.getVignetteSprite=u
var o,a=n("igsZ"),r=i(n("/P98")),s=n("eNcy"),d=n("oM/y"),l=n("Mo5I")
function u(){return(0,d.i)("ISHY","edp")}var c=t.VignetteContents=(0,s.s)("Widget","vignette",{height:l.VIGNETTE_HEIGHT,ignorePointer:!0,layout:{align:["bottom"],layout:"vertical"},name:"vignette",padding:{bottom:10,left:l.VIGNETTE_LEFT_PADDING},width:l.STILL_WIDTH,y:l.VIGNETTE_Y},!0),h=t.VignetteImage=(0,s.s)("Widget","vignette-image",{backgroundImage:function(){return u()},cornerRadius:function(e){return e.theme.BorderRadiusSmall},height:function(){return(0,(o||(o=n("9IR/"))).getFeature)("enableRoundedCorners")?l.VIGNETTE_HEIGHT+1:l.VIGNETTE_HEIGHT},ignorePointer:!0,name:"vignette-image",width:l.STILL_WIDTH,y:l.VIGNETTE_Y},!0)},Q4uI:function(e,t){t.__esModule=!0,t.default=void 0,t.default={trackingInfoSelector:function(e,t,n){void 0===e&&(e={})
var i=e,o=i.edpBoxArt,a=i.item,r=(void 0===a?{}:a).summary,s=void 0===r?{}:r
if(s.id&&o){var d=(o||{}).still,l=void 0===d?{}:d,u=o.synopsis,c=(void 0===u?{}:u).evidenceKey,h=n.itemContext,f=void 0===h?{}:h,v=f.listId,g=f.rank,m=f.requestId,p=f.row,y=f.trackId,I={trackingInfo:{edpRank:t,imageKey:l.imageKey,listId:v,rank:g,requestId:m,row:p,trackId:y,unifiedEntityId:s.unifiedEntityId,videoId:s.id},view:"boxArt"}
return c?[I,{trackingInfo:{edpRank:t,evidenceKey:c,imageKey:l.imageKey,listId:v,rank:g,requestId:m,row:p,trackId:y,unifiedEntityId:s.unifiedEntityId,videoId:s.id},view:"synopsisEvidence"}]:I}},trackingScrollViewportSelector:function(e){return{height:564,width:e.width,x:e.x,y:e.y+87}}}},RFz0:function(e,t,n){t.__esModule=!0,t.withConnectedProps=void 0
var i=n("agVJ"),o=n("e9tE"),a=(i.selectors.SLICE_NAME,i.selectors.isFocused)
t.withConnectedProps=(0,o.connect)((function(e,t){return{focused:a(e,t)}}))},SZxQ:function(e,t,n){var i,o,a
t.__esModule=!0,t.useEpisodeReminderData=function(e){return((0,(i||(i=n("9IR/"))).getFeature)("browseRewrite")?(a||(a=n("OiNa"))).useEpisodeReminderQuery:(o||(o=n("MATm"))).useEpisodeReminderFalcor)(e)}},TEe5:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.withDebouncer=function(e,t,n,i){var l=function(d){function l(){return d.apply(this,arguments)||this}(0,a.default)(l,d)
var u=l.prototype
return u.UNSAFE_componentWillMount=function(){this.allowRender=!0,this.update=(0,r.debounce)(this.forceUpdate,n)},u.UNSAFE_componentWillReceiveProps=function(e){this.update.cancel(),this.allowRender=(0,s.deepEquals)(e[t],this.props[t])||i&&i(e),this.allowRender||this.update()},u.shouldComponentUpdate=function(){return this.allowRender||!1},u.componentWillUnmount=function(){this.update.cancel()},u.render=function(){return(0,o.j)(e,this.props,null,null)},l}(d.Component)
return l.displayName="DebounceAllProps",l}
var o=n("igsZ"),a=i(n("VbXa")),r=n("3+WF"),s=n("1Oe/"),d=n("/P98")},UdvY:function(e,t,n){t.__esModule=!0,t.HorizontalTitleStill=function(e){var t=e.animation,l=e.animationKey,v=e.bookmarkPosition,g=void 0===v?0:v,m=e.data,p=e.disabled,y=e.focusKey,I=e.focused,S=e.hideOverlay,b=e.image,_=e.isBranchingNarrative,x=e.label,T=e.onSubmit,E=e.runtime,w=void 0===E?0:E,k=e.submitKeys,C=void 0===k?c.DEFAULT_SUBMIT_KEYS:k,R=e.trackingInfo,M=e.viewableId,P=e.x,D=e.y,A=(0,(o||(o=n("agVJ"))).useFocused)(y,I),L=(0,u.useRef)(null);(0,u.useEffect)((function(){return A&&!L.current?M&&R&&(L.current=(i||(i=n("Mmf2"))).consolidatedLogger.startSession("Focus",{trackingInfo:R,view:"boxArt"})):!A&&L.current&&((i||(i=n("Mmf2"))).consolidatedLogger.endSession(L.current),L.current=null),function(){L.current&&((i||(i=n("Mmf2"))).consolidatedLogger.endSession(L.current),L.current=null)}}),[A,R,M])
var F=(0,(a||(a=n("K0jP"))).useEvent)((function(e){T&&M&&M>0&&(T({data:m,event:e,trackingInfo:R,viewableId:M}),e.stopPropagation())})),O=(0,(a||(a=n("K0jP"))).useEvent)((function(e){var t=e.uiEvent
T&&(0,d.h)(C,t)&&M&&M>0&&(T({data:m,event:e,trackingInfo:R,viewableId:M}),e.stopPropagation())}))
return(0,s.j)(f,{__update_handlers__:h,children:(0,s.j)((r||(r=n("ouPa"))).OverlayedImageStill,{animation:t,animationKey:l,bookmarkPosition:g,hideOverlay:S,image:b,isBranchingNarrative:_,label:x,runtime:w,viewableId:M},l,null),disabled:p,focused:!p&&A,focusKey:y,onClick:F,onKeyDown:O,x:P,y:D},null,null)}
var i,o,a,r,s=n("igsZ"),d=n("KzMI"),l=n("eNcy"),u=n("/P98"),c=n("Mo5I"),h=["onClick","onKeyDown"],f=(0,l.s)("Focusable","HorizontalStill",{height:c.STILL_HEIGHT,name:"HorizontalStill",opacity:function(e){return e.opacity},width:c.STILL_WIDTH,x:function(e){return e.x},y:function(e){return e.y}},!0)},WPFV:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,s,d,l,u,c=i(n("siCl")),h={createOnPlayEpisode:function(e,t){return function(l){var h,f=l.ancestorId,v=l.episodeSummary,g=t.ancestorId,m=t.itemContext,p=void 0===m?{}:m,y=(0,(void 0===d?d=i(n("lRmd")):d).default)(t,l),I=(0,c.default)({},y,{ancestorId:f||g,itemContext:p,videoSummary:v}),S=(o||(o=n("Mmf2"))).consolidatedLogger.startSession((o||(o=n("Mmf2"))).SESSION.playCommand),b=I.itemContext.useSavedPostPlayExperience
if((0,(void 0===a?a=i(n("onmh")):a).default)(I.videoSummary)&&0===(null==I||null==(h=I.initialStateOfPlayback)?void 0:h.currentTime)&&(I.initialStateOfPlayback.currentTime=void 0),b){var _=(0,c.default)({},I,{itemContext:(0,c.default)({},p,{sourceOfDiscoveryIsPostPlay:!0,useSavedPostPlayExperience:!1})})
e([(void 0===u?u=n("NEM1").actions.historyClear:u)(),(0,(r||(r=n("GpT4"))).pushBrowse)(),(0,(s||(s=n("i7Pr"))).pushDetailsPlayback)(_)])}else e((0,(s||(s=n("i7Pr"))).replaceWithPlayback)(I));(o||(o=n("Mmf2"))).consolidatedLogger.endSession(S)}},handleSeasonsKeyEnter:function(e){return void 0===e&&(e="episodes"),(void 0===l?l=n("agVJ").actions.moveFocus:l)({path:"/details/"+e+"/episodeList"})}}
t.default=h},Xmah:function(e,t,n){var i
t.__esModule=!0,t.default=void 0
var o,a=n("e9tE")
t.default=(0,a.connect)((function(e,t){return{focused:(void 0===o?o=n("agVJ").selectors.isFocused:o)(e,t),mouseIsShowing:(0,(i||(i=n("B1ka"))).isMouseVisible)(e)}}))},Y3bQ:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.ThumbRateButton,o=void 0===t?void 0===v?v=(0,i(n("j7sC")).default)():v:t,a=e.ThumbsMenuBar,p=void 0===a?(void 0===d?d=i(n("93Qs")):d).default:a
return function(e){var t,a,d,v=e.childFocusKey,y=e.dataId,I=void 0===y?"":y,x=e.effectParams,T=e.extraData,C=void 0===T?{}:T,A=e.focused,j=e.focusedIndex,N=e.handleClick,K=e.hasOpacityOnMouseIsShowing,U=void 0===K||K,q=e.isLiveEvent,G=e.isReminderSet,z=e.key,Z=e.labelStyleSheet,X=e.listContext,J=e.listItem,Q=e.liveState,Y=e.mouseIsShowing,$=e.onThumbsMenuFocused,ee=e.parentDisabled,te=e.styles,ne=e.unstable_effect,ie=J.data,oe=ie.checked,ae=ie.iconTypeOverride,re=ie.interactiveProgress,se=ie.label,de=ie.onSubmit,le=ie.subLabel,ue=ie.type,ce=null!=(t=null==ie||null==(a=ie.routeParams)?void 0:a.bookmarkOverride)?t:ie.bookmark,he=J.rect,fe=X.range,ve=X.scroll,ge=(fe||{}).index,me=(Z?M(Z):D).DarwinButtonLabel,pe=te
pe||(pe={dynamicLabel:{height:42,width:250}})
var ye,Ie,Se=0,be=300
ce&&"play_branching"===ue?(0,(void 0===l?l=i(n("YmLT")):l).default)(re)&&(Se=0,ye=(0,m.j)(void 0===g?g=(0,i(n("ifK+")).default)({ProgressBar:void 0===h?h=(0,_.default)({stylesheet:S.progressBarStyles,transitions:i(n("2VMB")).default}):h}):g,{percentage:Se,rect:{height:4,width:70},videoId:ie.videoId},"progress",null),be=252):ce&&"play"===ue&&(0,(s||(s=n("lUUO"))).canResume)(ce.position,ce.runtime,ce.watchedToEndOffset)&&(Se=ce.position/ce.runtime*100,ye=(0,m.j)(void 0===h?h=(0,_.default)({stylesheet:S.progressBarStyles,transitions:i(n("2VMB")).default}):h,{percentage:Se,rect:{height:4,width:70},visible:A||0===j},"progress",null),be=252)
var _e=!1
if("audioDynamic"===ue)Ie=(0,(void 0===c?c=i(n("zOpD")):c).default)(oe?"checked":"unchecked",{}),ie&&ie.descriptionLabel&&(_e=!0)
else if("mylist"===ue){var xe=ie.queue&&ie.queue.inQueue?"remove":"add"
Ie=(0,(void 0===c?c=i(n("zOpD")):c).default)(xe,{})}else Ie="cw_remove"===ue?(0,(void 0===c?c=i(n("zOpD")):c).default)(ie.removed?"undo":"close",{}):"reminder"===ue?(0,(void 0===c?c=i(n("zOpD")):c).default)("reminder",{isReminderSet:G}):ae?(0,(void 0===c?c=i(n("zOpD")):c).default)(ae,{}):(0,(void 0===c?c=i(n("zOpD")):c).default)(ue,{})
var Te=!1
he.y+ve.translate!==0||ve.minTranslate||(Te=!0),he.y+he.height+ve.translate>=ve.rect.height&&!ve.maxTranslate&&(Te=!0)
var Ee,we=Te?.5:1
switch(U||(we=1),de?Ee=de:N&&(Ee=function(e){e.cancelBubble=!0,N(v,J)}),ue){case"content_warning_back":case"content_warning":d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,(0,m.j)(me,{mouseIsShowing:Y,rect:{height:42,width:be},text:se},"label",null)],effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)
break
case"play":case"play_branching":var ke=(0,m.j)(me,{mouseIsShowing:Y,rect:{height:42,width:be},text:se},"label",null)
if(q&&Q===(u||(u=n("hoTQ"))).ViewableLiveState.live){var Ce=te.glowFocusRing.backgroundImage.sourceRect.width,Re=(A||j===(null==ie?void 0:ie.index))&&!Y
d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:(0,m.j)(V,{children:[(0,m.j)(H,{height:42,visible:Re,width:Ce},null,null),(0,m.j)((r||(r=n("djiD"))).HStack,{childLayoutSpacing:6,children:[Ie,ke],height:42,padding:{left:12},valign:"center",width:Ce},null,null)],width:Ce},null,null),data:{dataId:I,focused:A,percentage:Se},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)}else d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,ke,ye],data:{dataId:I,focused:A,percentage:Se},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)
break
case"thumbrate":d=(0,m.j)(o,{__update_handlers__:k,effectParams:x,extraData:C,focused:A,focusKey:v,item:ie,name:z,onClick:Ee,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne,videoId:ie.videoId},z,null)
break
case"action_bar":d=(0,m.j)(p,{disabled:ee,effectParams:x,focused:A,focusKey:v,item:ie,name:z,onFocused:$,opacity:we,rect:he,unstable_effect:ne},z,null)
break
case"movies":case"season":case"similars":case"trailers":var Me=function(e,t,n,i,o){void 0===e&&(e={}),void 0===i&&(i={})
var a=!1,r=e,s=r.clickedSeasonIndex,d=r.entered,l=r.highlightedSeasonIndex,u=r.isMouseOver,c=i.absoluteIndex
return d||u?o&&!u?((void 0===s||s<0)&&t===c||s>=0&&s===c)&&(a=!0):(l===c&&o||!o&&(n||t===c))&&(a=!0):(s===c&&t!==s||t===c&&(s===t||void 0===s||s<0))&&(a=!0),a}(C,ge,A,J,Y)
d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{__update_handlers__:w,children:[(0,m.j)(L,{mouseIsShowing:Y,name:"season",text:se},"season",null),(0,m.j)(void 0===P?P=(0,b.default)({defaultVisible:!1,isSeasonsLabel:!0,stylesheet:R,transitions:i(n("skUI")).default}):P,{mouseIsShowing:Y,name:"label",text:le,visible:!0},"label",null)],data:{dataId:I,labelVisible:Me},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onClick:Ee,onSubmit:Ee,opacity:we,rect:he,submitKey:"key.submit",unstable_effect:ne},z,null)
break
case"series":case"shows":case"label":d=(0,m.j)("Widget",{__update_style__:E,focusKey:v,staticStyle:te.staticLabel,style:{name:v,opacity:we,rect:he,text:se}},z,null)
break
case"audioDynamic":W()
var Pe=ie.isAudio
d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,(0,m.j)("Widget",{children:[(0,m.j)(F,{mouseIsShowing:Y,text:se},"audio",null),Pe?(0,m.j)(O,{mouseIsShowing:Y,text:ie.descriptionLabel,visible:_e},"description",null):(0,m.j)(B,{mouseIsShowing:Y,text:ie.descriptionLabel,visible:_e},"description",null)],rect:pe.dynamicLabelAudio.rect,style:pe.dynamicLabelAudio},"label",null)],data:oe,dataIndex:J.dataIndex,effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)
break
case"mylist":var De=J.absoluteIndex
d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,(0,m.j)(me,{mouseIsShowing:Y,rect:pe.dynamicLabel,text:se},"label",null)],data:{dataId:I,isFocused:A||De===ge,opacity:we},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)
break
case"reminder":d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,(0,m.j)(me,{mouseIsShowing:Y,rect:pe.dynamicLabel,text:se},"label",null)],data:{isReminderSet:G},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)
break
default:d=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[Ie,(0,m.j)(me,{mouseIsShowing:Y,rect:pe.dynamicLabel,text:se},"label",null)],data:{dataId:I,opacity:we},effectParams:x,focused:A,focusKey:v,item:ie,name:z,onSubmit:Ee,opacity:we,rect:he,unstable_effect:ne},z,null)}return d}}
var o,a,r,s,d,l,u,c,h,f,v,g,m=n("igsZ"),p=n("eNcy"),y=n("ClEx"),I=n("Hg/B"),S=n("DtLd"),b=i(n("x84e")),_=i(n("qELT")),x=i(n("Hy99")),T=i(n("85i5")),E=["name","opacity","rect","text"],w=["onClick"],k=["onClick"],C=(0,x.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!0}},buttonVisualState:{highlighted:e,pressed:e}}})),R=(0,x.default)((function(){var e={opacity:0,textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{minWidth:10,name:"label",opacity:0,rect:{height:42,width:120},textStyle:{align:"right center-vertical",color:{a:255,b:105,g:105,r:105},size:16,weight:"normal"},width:120},buttonVisualState:{highlighted:e,pressed:e}}}))
function M(e){return{DarwinButtonLabel:(0,b.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:e?C.extend(e):C,transitions:T.default})}}var P,D=M(),A=(0,x.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,name:"label",padding:{left:11},rect:{height:42,width:228},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},variant:"normal",weight:"normal",wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}})),L=(0,b.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:A,transitions:T.default}),F=null,O=null,B=null,j=!1
function W(){if(!j){var e=function(){var e=C.extend((function(){return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!1}}}})),t=(0,x.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{name:"description",padding:{left:5},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},weight:"normal",wrap:!1},width:90},buttonVisualState:{highlighted:e,pressed:e},language:{ar:{width:85},th:{width:85}}}})),n=t.extend((function(){return{language:{ar:{width:130},th:{width:130},zh:{width:130}},locale:{"pt-PT":{width:185}}}}))
return{audioDescriptionComponentStylesheet:t,audioSubtitlesLabelStylesheet:e,ccComponentStylesheet:n}}(),t=e.audioDescriptionComponentStylesheet,n=e.audioSubtitlesLabelStylesheet,i=e.ccComponentStylesheet
F=(0,b.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:n,transitions:T.default}),O=(0,b.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:t,transitions:T.default}),B=(0,b.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:i,transitions:T.default}),j=!0}}var N=(0,I.fade)({duration:y.Duration.Duration250,to:1}),K=(0,I.fade)({duration:y.Duration.Duration250,to:0})
function H(e){var t=e.height,i=e.visible,r=e.width,s=i?N:K
return(0,m.j)((a||(a=n("6jZX"))).BorderBox,{animation:s,borderWidth:3,cornerRadius:4,fill:(o||(o=n("D+c2"))).FoundationalColors.Red500,height:t,opacity:0,width:r},null,null)}var V=(0,p.s)("Widget","BrandButtonContents",{height:42,width:function(e){return e.width}},!1)},Ym6w:function(e,t,n){var i=n("TqRt").default,o=n("284h").default
t.__esModule=!0,t.default=function(e){return(0,(void 0===a?a=i(n("M3HD")):a).default)({Component:e,falcor:r})}
var a,r=o(n("pbgz"))},Ziy1:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e,t,s){return(0,r.default)({pointerAffordance:function(){var r
return{base:{height:55,name:"pointerDown",width:e,x:s||(t-e)/2},pointerAffordanceState:(r={},r[(void 0===o?o=i(n("eCN6")):o).default.none]={backgroundImage:(0,a.i)("Jhv+halign=center+valign=center","pointeraffordances")},r[(void 0===o?o=i(n("eCN6")):o).default.highlighted]={backgroundImage:(0,a.i)("9qP+halign=center+valign=center","pointeraffordances")},r)}}})}
var o,a=n("oM/y"),r=i(n("Hy99"))},bXzJ:function(e,t,n){var i=n("TqRt").default,o=n("284h").default
t.__esModule=!0,t.default=void 0
var a,r,s,d,l,u,c,h,f,v,g,m,p=n("igsZ"),y=n("ZpGL"),I=n("/P98"),S=n("Mo5I"),b=n("1zeB"),_=o(n("K4/S")),x=["onKeyDown"],T=b.Width.Compact,E=b.Width.Narrow,w=S.STILL_HEIGHT-_.HEIGHT-24-S.VIGNETTE_Y,k=S.STILL_WIDTH-48
function C(e){var t
return null==e||null==(t=e.data)||null==(t=t.item)||null==(t=t.summary)?void 0:t.id}function R(e){var t
return(null==e||null==(t=e.data)||null==(t=t.item)?void 0:t.bookmark)||{position:0,runtime:0,watchedToEndOffset:0}}function M(e){var t
return(null==e||null==(t=e.data)||null==(t=t.groupSummary)?void 0:t.idx)||0}t.default=(0,I.memo)((function(e){var t,S,b=e.enteredSeasons,C=e.focusKey,P=e.focused,D=e.itemContext,A=e.listItem,L=e.name,F=e.onPlayEpisode,O=e.opacity,B=e.rect,j=null==A?void 0:A.data,W=null==j?void 0:j.item,N=null==W?void 0:W.summary,K=N||{},H=K.available,V=K.hasLiveEvent,U=K.id,q=K.labels,G=K.type,z=K.unifiedEntityId,Z=(null==j?void 0:j.edpBoxArt)||{},X=Z.still,J=void 0===X?{}:X,Q=Z.synopsis,Y="supplemental"===G,$=!1,ee=!1
if(U&&V){var te,ne=null==W||null==(te=W.taglines)?void 0:te.edp,ie=ne&&(0,y.h)(ne,(function(e){return"LIVE"===e.taglineType}))
S=ie&&ie.tagline,$=(0,(void 0===s?s=o(n("hoTQ")):s).default)(N)===(void 0===s?s=o(n("hoTQ")):s).ViewableLiveState.preLive,ee=(0,(void 0===s?s=o(n("hoTQ")):s).default)(N)===(void 0===s?s=o(n("hoTQ")):s).ViewableLiveState.live}var oe=R(A),ae=function(e){if(!e)return{}
var t={};(0,(c||(c=n("B+Gi"))).hasHiddenEpisodeNumbers)(e)&&(t.stillLabel=""),t.episodeBadge=(0,(c||(c=n("B+Gi"))).pluckNewBadge)(e)
var i,o=(0,(c||(c=n("B+Gi"))).getDateMessage)(e)
return o&&(t.availabilityDateMessaging=o,t.duration=null==(i=e.labels)?void 0:i.edpDurationWithoutParens),t}(N),re=ae.duration||(null==q?void 0:q.edpDuration),se=void 0!==ae.stillLabel?ae.stillLabel:null==q?void 0:q.edpShortTitle,de=ae.availabilityDateMessaging,le=ae.episodeBadge,ue=(0,(void 0===u?u=i(n("o+kE")):u).default)(N),ce=M(A),he=b?.3:1,fe=(0,(g||(g=n("SZxQ"))).useEpisodeReminderData)(U),ve=fe.isReminderSet,ge=fe.strings,me=(0,(m||(m=n("19bw"))).useEpisodeToggleReminder)(U||0,ve,{parentView:(a||(a=n("Mmf2"))).VIEW.movieDetails,trackingInfo:{trackId:D.trackId,unifiedEntityId:z,videoId:U},view:(a||(a=n("Mmf2"))).VIEW.episodeSelector}).toggleReminder,pe=(0,(r||(r=n("K0jP"))).useEvent)((function(e){if($&&U)me()
else if(A&&j&&U&&H){var t=j.groupSummary;(h||(h=n("DA2W"))).SingleAudio.play((h||(h=n("DA2W"))).UIAudioConfigs.onPlay,(h||(h=n("DA2W"))).DEFAULT_VOLUME),F({ancestorId:null==t?void 0:t.ancestorId,data:{epIndex:A.dataIndex,grIndex:M(A)},episodeSummary:N||{},event:e,isSupplemental:Y,unifiedEntityId:z,videoId:U})}})),ye=(0,(r||(r=n("K0jP"))).useEvent)((function(e){var t=e.uiEvent
"key.enter"!==t&&"key.play"!==t&&"key.start"!==t||void 0===U||pe(e)})),Ie=(0,(r||(r=n("K0jP"))).useEvent)((function(e){pe(e.event)})),Se=(0,I.useMemo)((function(){return{test_videoId:U}}),[U]),be=null!=(t=null==A?void 0:A.dataIndex)?t:-1
return(0,p.j)((v||(v=n("78kM"))).Container,{__update_handlers__:x,children:[(0,p.j)((d||(d=n("DeLv"))).EpisodeStill,{bookmarkPosition:oe.position,data:{epIndex:be,grIndex:ce,isSupplemental:Y,summary:N},focused:P,focusKey:C,hideOverlay:$,image:J,isBranchingNarrative:ue,label:se||"",onSubmit:Ie,opacity:he,runtime:oe.runtime,viewableId:U},null,null),(0,p.j)((void 0===f?f=i(n("iigm")):f).default,{availabilityDateMessaging:de,duration:ee?"":re||"",episodeBadge:le||void 0,opacity:he,synopsis:Q,synopsisWidth:$?E:T,tagline:S,title:(null==N?void 0:N.title)||"",videoId:U||0,x:324},null,null),$&&(0,p.j)((l||(l=n("PFlX"))).Vignette,{children:(0,p.j)(_.default,{highlighted:P,isReminderSet:ve,maxWidth:k,opacity:he,strings:ge,viewableId:U,y:w},null,null)},null,null)],name:L,onKeyDown:ye,opacity:O,rect:B,testAttributes:Se},null,null)}),(function(e,t){return!function(e,t){var n,i,o,a,r=e.listItem,s=r||{},d=s.absoluteIndex,l=s.dataIndex,u=C(r),c=R(r).position,h=null==r||null==(n=r.data)||null==(n=n.edpBoxArt)?void 0:n.synopsis,f=null==r||null==(i=r.data)||null==(i=i.item)||null==(i=i.taglines)?void 0:i.edp,v=t.listItem,g=v||{},m=g.absoluteIndex,p=g.dataIndex,y=C(v),I=R(v).position,S=null==v||null==(o=v.data)||null==(o=o.edpBoxArt)?void 0:o.synopsis,b=null==v||null==(a=v.data)||null==(a=a.item)||null==(a=a.taglines)?void 0:a.edp
return t.focused||u!==y||c!==I||e.focused!==t.focused||l!==p||d!==m||e.enteredSeasons!==t.enteredSeasons||(null==h?void 0:h.text)!==(null==S?void 0:S.text)||e.mouseIsShowing!==t.mouseIsShowing||e.opacity!==t.opacity||f!==b}(e,t)}))},bbNX:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,r=e.shouldComponentUpdate,s=e.stylesheet
if(!s)throw new Error("EndCapButton: a stylesheet must be specified")
var d=s.withDefaults(a)
return(0,(void 0===i?i=o(n("ICKM")):i).default)({displayName:"EndCapButton",shouldComponentUpdate:r,stylesheet:d,UNSAFE_componentWillReceiveProps:t})}
var a={background:function(){return{base:{flexLayout:{alignItems:"stretch",direction:"row"}}}}}},d16G:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,f=e.ScrollDown,w=e.ScrollUp,C=e.hasUnfocusedStateElement,R=void 0!==C&&C,M=e.maxItems,P=void 0===M?5:M,D=e.minIndex,A=void 0===D?0:D,L=e.pageBy,F=void 0===L?5:L,O=e.spatialReversed,B=void 0!==O&&O,j=e.stylesheet,W=T(j,E),N=(0,(void 0===s?s=i(n("YPSL")):s).default)({stylesheet:W.collection})
function K(e,t){var n=this.props,i=n.notifyIndexChange,o=n.shouldDropKeyEvent;(0,n.trackCurrentInputSource)(t),!1===o(t)&&this.setState((function(){return{click:!0}}),(function(){i(e)})),t.stopPropagation()}function H(e){var t=k(this.props,F,A,"up")
this._changeIndex(t,e)}function V(e){var t=k(this.props,F,A,"down")
this._changeIndex(t,e)}function U(){var e=this.props
this.state.click&&this.setState({click:!1}),e.onMouseOver&&e.onMouseOver()}function q(e){var t=this.props,i=t.enteredChild,a=t.items,r=t.onExit,s=t.onKeyRight,d=(0,(o||(o=n("9IR/"))).getAppConfig)().isRtl,l=(i?parseInt(i,10):0)||this.props.index,u=(e||{}).direction,c=B&&d?"left":"right"
u===(B&&d?"right":"left")&&r&&r(),u===c&&s&&a&&s(a[l])}function G(e){var t=this.props
this.state.click&&this.setState({click:!1})
var i=t.handleListKeyDown,a=t.onExit,r=t.onKeyEnter,s=e.uiEvent
if("key.back"===s&&a){if(t.animatingAdvisories&&(0,(o||(o=n("9IR/"))).getFeature)("enableDepthTransition"))return void e.stopPropagation();(d||(d=n("DA2W"))).SingleAudio.play((d||(d=n("DA2W"))).UIAudioConfigs.onTransitionClose,(d||(d=n("DA2W"))).DEFAULT_VOLUME),e.stopPropagation(),a()}"key.enter"===s&&r?((d||(d=n("DA2W"))).SingleAudio.play((d||(d=n("DA2W"))).UIAudioConfigs.onSelect,(d||(d=n("DA2W"))).DEFAULT_VOLUME),r()):"key.audio"!==s&&"key.subtitle"!==s||i(e)}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.handleKeyDown=G.bind(n),n.onNoFocusableInDirection=q.bind(n),n.handleMouseOver=U.bind(n),n.handleArrowDown=V.bind(n),n.handleArrowUp=H.bind(n),n._changeIndex=K.bind(n),n.state={click:!1},n}(0,c.default)(t,e)
var i=t.prototype
return i.componentDidUpdate=function(e){var t=this.props.range,i=(void 0===t?{}:t).index,o=e.range;(void 0===o?{}:o).index!==i&&(d||(d=n("DA2W"))).AudioCycler.play((d||(d=n("DA2W"))).UIAudioConfigs.onLRUDMove,(d||(d=n("DA2W"))).DEFAULT_VOLUME)},i.shouldComponentUpdate=function(e){var t=e.entered,n=e.focused
if(t||n)return!0
var i=this.props,o=i.dataLength,a=i.entered,r=i.focused,s=i.highlightedIndex,d=i.index,l=i.isMouseOver,u=i.mouseIsEnabled,c=i.mouseIsShowing,h=i.selectedIndex,f=e.dataLength,v=e.highlightedIndex,g=e.index,m=e.isMouseOver,p=e.mouseIsEnabled,y=e.mouseIsShowing,I=e.selectedIndex
return d!==g||r!==n||a!==t||c!==y||u!==p||o!==f||l!==m||h!==I||s!==v},i.componentDidMount=function(){(d||(d=n("DA2W"))).SingleAudio.load((d||(d=n("DA2W"))).UIAudioConfigs.onPlay)},i.componentWillUnmount=function(){x.clear()},i.render=function(){var e,t,i=this.context,s=this.props,d=s.children,c=s.clip,h=s.dataLength,g=s.effectParams,T=s.enableDepthTransitionOnFocusRing,E=void 0!==T&&T,k=s.entered,C=s.focus,M=s.focusAnimation,D=s.focusKey,A=s.focusTransition,L=s.focused,F=s.focusedPath,O=s.handleFocusRequest,B=s.highlightedIndex,j=s.index,K=s.isMouseOver,H=s.items,V=s.layout,U=s.mouseIsEnabled,q=s.mouseIsShowing,G=s.name,z=s.onIndexChange,Z=s.onMouseOut,X=s.range,J=s.rect,Q=s.scroll,Y=s.selectedIndex,$=s.unstable_effect,ee=this.handleArrowDown,te=this.handleArrowUp,ne=this.handleKeyDown,ie=this.handleMouseOver,oe=c,ae=F&&-1!==(null==F?void 0:F.indexOf(b))||F&&-1!==(null==F?void 0:F.indexOf(_))&&0===(null==C?void 0:C.driveDownIndex)
c||q||!(0,(o||(o=n("9IR/"))).getFeature)("thumbsWayUpActionBarEnabled")||ae||(oe=!0)
var re,se,de=W.resolve(i),le=de.glowFocusRing,ue=de.listContainer,ce=de.mainContainer,he=de.pointerDown,fe=de.pointerUp,ve={clip:oe,name:G,rect:{height:ce.height,width:ce.width,x:null==J?void 0:J.x,y:null==J?void 0:J.y}},ge=(A||{}).allowAnimation,me=void 0===ge||ge,pe=h>P&&!!k&&!Q.minTranslate,ye=h>P&&!!k&&!Q.maxTranslate,Ie={height:(null==le?void 0:le.height)||(null==C||null==(e=C.rect)?void 0:e.height),width:(null==le?void 0:le.width)||(null==C||null==(t=C.rect)?void 0:t.width),x:null==le?void 0:le.x,y:null==le?void 0:le.y}
if(null!=C&&C.rect&&(Ie.x=C.rect.x,Ie.y=C.rect.y),h>0&&H[j]&&(re=(0,u.j)((r||(r=n("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:10,height:Ie.height,ignorePointer:!0,isAnimated:!1,position:"inside",visible:!this.state.click&&!(null==C||!C.rect)&&!ae,width:Ie.width,x:Ie.x,y:Ie.y},"sdpFocusRing",null)),R&&h>0){var Se=function(e){var t=e.focus,n=e.height,i=e.highlightedIndex,o=e.isMouseOver,a=e.layout,r=e.mouseIsShowing,s=e.scroll,d=e.selectedIndex,l=e.width,u=!e.entered,c=d>=0?d:e.index
!r||o&&null!=t&&t.rect||(u=!0),r&&o&&i>=0&&(c=i)
var h={height:n,opacity:.5+Math.floor(.01*Math.random()),visible:u,width:l,y:void 0}
if(c&&s&&a&&a[c]){var f=a[c].rect
f&&(h.y=f.y+s.translate)}return h}({entered:k,focus:C,height:null==le?void 0:le.height,highlightedIndex:B,index:j,isMouseOver:K,layout:V,mouseIsShowing:q,scroll:Q,selectedIndex:Y,width:null==le?void 0:le.width})
se=(0,u.j)((r||(r=n("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:1,height:Ie.height,ignorePointer:!0,isAnimated:!1,name:"unselected",opacity:Se.opacity,position:"inside",visible:Se.visible,width:Ie.width,x:Ie.x,y:Se.y||Ie.y},"sdpDisabledRing",null)}return(0,u.j)((a||(a=n("agVJ"))).Focusable,{__update_handlers__:S,animation:M,animationKey:"seasons",children:[(0,u.j)("Widget",{__update_handlers__:I,__update_style__:y,children:[(0,u.j)(N,{children:d,factoryContext:{allowAnimation:me},focus:C,layout:V,onIndexChange:z,range:X,scroll:Q,transition:s.transition},"items",null),se,(0,u.j)(void 0===l?l=(0,n("eNcy").s)("Widget","FocusRingContainer",{ignorePointer:!0},!1):l,{children:re,effectParams:E?g:void 0,unstable_effect:E?$:void 0},null,null)],onMouseOut:Z||v.noop,onMouseOver:ie,staticStyle:ue,style:{clip:oe}},"menuContainer",null),U&&w&&(0,u.j)(w,{__update_handlers__:p,name:"listPointerUp",onClick:te,staticStyle:fe,visible:pe},null,null),U&&f&&(0,u.j)(f,{__update_handlers__:m,name:"listPointerDown",onClick:ee,staticStyle:he,visible:ye},null,null)],effectParams:E?void 0:g,focused:L,focusKey:D,onFocusRequest:O,onKeyDown:ne,onNoFocusableInDirection:this.onNoFocusableInDirection,staticStyle:ce,style:ve,testAttributes:x(H),unstable_effect:E?void 0:$},"menuComponent",null)},t}(g.Component)).contextType=h.StylesheetContext,t.displayName="DarwinMenu",t}
var o,a,r,s,d,l,u=n("igsZ"),c=i(n("VbXa")),h=n("s6u8"),f=n("8fke"),v=n("BHy0"),g=n("/P98"),m=["onClick"],p=["onClick"],y=["clip"],I=["onMouseOut","onMouseOver"],S=["onFocusRequest","onKeyDown","onNoFocusableInDirection"],b="/postplay/leftMenu/0",_="/postplay/leftMenu",x=(0,f.memoize)((function(e){var t=[]
for(var n in e)t.push(e[n].type)
return{test_menuItems:t.join(",")}})),T=(0,h.getStylesheetDefaultsResolver)(),E={container:function(){return{base:{}}}}
function w(e){return void 0===e&&(e={}),"label"!==e.type&&"shows"!==e.type&&"series"!==e.type}function k(e,t,n,i){var o,a=e.dataLength,r=e.index,s=e.items
return"up"===i?w(s[o=r>=t?r-t:n])?o:o+1:((o=r+t)>a-1&&(o=a-1),w(s[o])?o:o-1)}},e3rh:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({middle:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"}}}}})}},"e8V/":function(e,t,n){t.__esModule=!0,t.transitionAnimationConfig=t.default=void 0
var i,o,a=n("NEM1"),r=t.transitionAnimationConfig={factory:function(e,t){var r=t.isToOrFromPlaymode,s=t.isToOrFromProfiles,d=t.isToOrFromScreensaver,l=t.transitionState,u=a.IN_STATES[l]
if(!a.COMPLETED_STATES[l])return r||s||d?u?(i||(i=n("Z0Z4"))).fadeInFromPlaymode:(i||(i=n("Z0Z4"))).fadeOutToPlaymode:u?void 0===o?o=(0,n("SqmF").enterFromRight)():o:(i||(i=n("Z0Z4"))).subrouteExitToRight}}
t.default=(0,a.transitionAnimation)(r)},fWeL:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.animationFactory,u=e.stylesheet,v=c(u,f)
function g(e,n){var i=this.state,o=i.animation,a=i.animationKey,r=i.opacity,s=e.opacity,d={}
t&&(d=t(this.state,e,n))
var l=d,u=l.animation,c=l.animationKey,h=l.opacity,f=void 0!==s?s:h;(u!==o||c!==a||void 0!==f&&f!==r)&&this.setState({animation:u,animationKey:c,opacity:f})}var m=function(e){function t(t){var n=e.call(this,t)||this
return n.setStateFromProps=g.bind(n),n.state={animation:t.animation,animationKey:t.animationKey,opacity:t.opacity},n}(0,s.default)(t,e)
var a=t.prototype
return a.UNSAFE_componentWillMount=function(){this.setStateFromProps(this.props,this.context)},a.UNSAFE_componentWillReceiveProps=function(e,t){this.setStateFromProps(e,t)},a.render=function(){var e=this.context,t=this.props,a=this.state,s=t.children,d=t.image,l=t.margin,u=t.name,c=t.rect,h=t.text,f=t.visible,g=a.animation,m=a.animationKey,p=a.opacity,y=(0,(void 0===o?o=i(n("wNCT")):o).default)(v,e),I={image:d,name:u,rect:c,text:h,visible:f}
return void 0!==p&&(I.opacity=p),void 0!==l&&(I.margin=l),(0,r.j)("Widget",{animation:g,animationKey:m,children:s,staticStyle:y,style:I},m,null)},t}(l.Component)
return m.displayName="ButtonElement",m.contextTypes=(0,a.default)({},d.stylesheetContextTypes,h),m.defaultProps={visible:!0},m}
var o,a=i(n("siCl")),r=n("igsZ"),s=i(n("VbXa")),d=n("s6u8"),l=n("/P98"),u=i(n("N9Ua")),c=(0,d.getStylesheetDefaultsResolver)(),h=u.default.required
function f(){return{base:{name:"element"}}}},"fY+Z":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,s=n("igsZ"),d=n("9IR/"),l=i(n("UN2+")),u=(0,d.getFeatures)()
r=u.ratingPromptInPlayback&&u.ttsEnabled?(void 0===a?a=i(n("Ki15")).default.enhancer:a)((function(e){return(0,l.default)((function(t){var i=t.texttospeech,a=i.rateOnPauseRatedThumbsDown,r=i.rateOnPauseRatedThumbsUp,d=i.rateOnPauseRatedThumbsWayUp
return{onRated:function(t){var i=""
t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_UP?i=r:t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_DOWN?i=a:t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_WAY_UP&&(i=d),e&&(e.stopAndFlush(),e.say((0,s.j)("speak",{children:(0,s.j)("s",{children:i},null,null)},null,null)))}}}))})):n("P1w9").identity,t.default=r},gbck:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.displayName,u=void 0===t?"MenuButton":t,c=e.shouldComponentUpdate,h=e.stylesheet,f=l
return h&&(f=h.withDefaults(l)),(0,(void 0===a?a=i(n("z3Fz")):a).default)({displayName:u,render:function(){var e=this.context,t=this.props,a=this.state.visualState,l=t.children,c=t.disabled,h=t.effectParams,v=t.focusKey,g=t.focused,m=t.margin,p=t.minWidth,y=t.name,I=t.opacity,S=t.padding,b=t.rect,_=t.unstable_effect,x=t.visible,T=(0,(void 0===r?r=i(n("wNCT")):r).default)(f,e,{buttonVisualState:a}).background
if(!T)throw new Error(u+": styles for backgroundStyles must be specified")
var E={}
return void 0!==y&&(E.name=y),b&&(E.rect=b),!0!==x&&!1!==x||(E.visible=x),void 0!==m&&(E.margin=m),void 0!==p&&(E.minWidth=p),void 0!==I&&(E.opacity=I),void 0!==S&&(E.padding=S),(0,s.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:d,children:l,disabled:c,effectParams:h,focused:g,focusKey:v,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:T,style:E,unstable_effect:_},"outer",null)},shouldComponentUpdate:c})}
var o,a,r,s=n("igsZ"),d=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],l={background:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"},height:42,layout:"horizontal",layoutSpacing:0,minWidth:360,name:"background",rect:{height:42}}}}}},gzTg:function(e,t){t.__esModule=!0,t.default=function(e){var t=e.chunkSize,n=void 0===t?100:t,i=e.threshold,o=void 0===i?2/3:i
return function(e){var t,i=e.dataLength,a=e.index
if(i>0)if(i<n)t={from:0,to:i-1}
else{var r=Math.floor(a/n),s=((a%n/n>o?r+1:r)+1)*n-1
t={from:(r>0?r-1:r)*n,to:s<i?s:i-1}}return t}}},"iP+b":function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e){var t=e.child,n=e.expand,i=e.list
return function(e,o){var a=e.dataLength,r=o.from,s=o.to,d=[]
d[0]=1===a?{from:0,to:0}:{from:r,to:s}
for(var l=d.length,u=i&&i.call(this,o,a)||[],c=0;c<l;c++)for(var h=d[c],f=n?h.from:0,v=n?h.to+1:1;f<v;f++){var g=h.from===h.to?[h.from]:[h]
n&&(g=[f])
for(var m=t.call(this,f,o,a),p=m.length,y=0;y<p;y++){var I=m[y]
u[u.length]=g.concat(I)}}return u}}},iigm:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=t.LAYOUT_SPACING_CONDENSED=t.LAYOUT_SPACING=t.EpisodeInfo=t.EDP_INFO_HEIGHT=void 0
var o,a,r,s,d=n("igsZ"),l=i(n("VbXa")),u=n("eNcy"),c=n("D+c2"),h=n("s6u8"),f=n("pBAo"),v=n("759e"),g=n("/P98"),m=t.LAYOUT_SPACING=6,p=t.LAYOUT_SPACING_CONDENSED=3,y=t.EDP_INFO_HEIGHT=172,I=(0,u.s)("Widget","availabilityDateMessaging",{name:"availabilityDateMessaging",padding:{right:8},text:function(e){return e.text},textStyle:{color:"#656565ff",size:18,weight:f.NORMAL_WEIGHT}},!1),S=(0,u.s)("Widget","episodeBadge",{color:"#ce1319ff",maxHeight:32,name:"episodeBadge",padding:{bottom:4,left:8,right:8,top:4},text:function(e){return e.text},textStyle:{color:c.FoundationalColors.Gray400,size:14,weight:f.EMPHASIS_WEIGHT}},!1),b=(0,u.s)("Widget","title",{height:function(e){return"tall"===e.fontHeight?32:30},layoutSpacing:m,maxHeight:function(e){var t=e.fontHeight
return e.isKids?50:"tall"===t?32:30},name:"title",text:function(e){return e.text},textStyle:function(e){var t=e.fontHeight
return{color:e.theme.Foreground,size:"tall"===t?18:20,truncation:{position:"end"},weight:f.EMPHASIS_WEIGHT,wrap:!0}}},!0),_=(0,u.s)("Widget","duration",{name:"duration",text:function(e){return e.text},textStyle:{color:"#656565ff",size:18,weight:f.NORMAL_WEIGHT}},!1),x=t.EpisodeInfo=function(e){function t(){return e.apply(this,arguments)||this}(0,l.default)(t,e)
var i=t.prototype
return i.shouldComponentUpdate=function(e){var t=this.props,n=t.opacity,i=t.synopsis,o=t.synopsisWidth,a=t.tagline,r=t.title,s=t.videoId,d=e.opacity,l=e.synopsis,u=e.synopsisWidth,c=e.tagline,h=e.title
return s!==e.videoId||n!==d||o!==u||(null==i?void 0:i.text)!==(null==l?void 0:l.text)||r!==h||a!==c},i.render=function(){var e=this.context,t=this.props,i=t.availabilityDateMessaging,l=t.duration,u=t.episodeBadge,c=t.opacity,h=t.synopsis,f=t.synopsisWidth,v=void 0===f?(s||(s=n("1zeB"))).Width.Compact:f,g=t.tagline,x=t.title,T=t.x,E=null
i&&(E=(0,d.j)(I,{text:i},null,null))
var w=null
u&&(w=(0,d.j)(S,{text:u},null,null))
var k=!(!l&&!E),C=!!g&&!!h,R=g&&g.length>35&&C||C&&l?p:m
return(0,d.j)((a||(a=n("djiD"))).VStack,{children:[(0,d.j)((a||(a=n("djiD"))).HStack,{children:[w,(0,d.j)(b,{fontHeight:e.fontHeight,isKids:e.kids,text:x},null,null)],name:"titleContainer"},null,null),!!g&&(0,d.j)((r||(r=n("AHGZ"))).Text,{children:g,layoutSpacing:R,type:(o||(o=n("BKc6"))).TextType.BodySmallHeavy,width:(s||(s=n("1zeB"))).Width.Narrow,wrap:!0},null,null),(0,d.j)((s||(s=n("1zeB"))).Synopsis,{fontSize:(s||(s=n("1zeB"))).FontSize.Small,layoutSpacing:R,maxHeight:108,name:"synopsis",synopsis:h,width:v},null,null),(0,d.j)((a||(a=n("djiD"))).HStack,{children:[E,(0,d.j)(_,{text:l},null,null)],layoutSpacing:R,maxHeight:32,name:"durationContainer",visible:k},null,null)],height:y,name:"edpInfo",opacity:c,valign:"center",width:v,x:T},null,null)},t}(g.Component)
x.displayName="EpisodeInfo",x.contextType=h.StylesheetContext,x.defaultProps=(0,v.just)({duration:"",synopsis:{text:""},title:"",videoId:-1}),t.default=x},jvDj:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.useToggleReminderFalcor=function(e,t,i,l){void 0===l&&(l="localFirst")
var u=(0,s.useFalcorRootModel)(),c=(0,d.useState)(null),h=(0,r.default)(c,2),f=h[0],v=h[1]
return{toggleReminder:(0,(o||(o=n("K0jP"))).useEvent)((function(){"remoteFirst"===l&&f||(v(t?"removing":"adding"),t?(0,(a||(a=n("rtBh"))).removeReminder)(u,e,i,l,(function(){return v(null)})):(0,(a||(a=n("rtBh"))).addReminder)(u,e,i,l,(function(){return v(null)})))})),toggleReminderInProgress:f}}
var o,a,r=i(n("J4zp")),s=n("pbgz"),d=n("/P98")},l8hb:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=i(n("siCl")),s=n("agVJ"),d=n("e9tE"),l=n("NEM1"),u=n("ve0B"),c=n("GEdN"),h=i(n("WPFV")),f=h.default.createOnPlayEpisode,v=h.default.handleSeasonsKeyEnter,g=l.selectors.isTransitioningFrom,m=l.selectors.isTransitioningTo,p=s.selectors.getEnteredChild,y=s.selectors.isEntered,I=s.selectors.isFocused,S=u.patterns.PLAYMODE_ROUTE_PATHS,b=u.patterns.PROFILES,_=u.patterns.SCREENSAVER,x=c.selectors.getEpisodeMenuMode,T=c.selectors.getEpisodeMenuPosition,E=c.selectors.getSeasonMenuHighlightedPosition,w=c.selectors.getSeasonMenuMode,k=c.selectors.getSeasonMenuPosition,C=c.selectors.getSeasonMenuSelectedPosition,R=c.selectors.isSeasonFromEpisode,M=c.actions.moveEpisodeMenu,P=c.actions.moveSeasonMenu,D=c.actions.moveSeasonMenuHighlight,A={handleSeasonsKeyEnter:v,onEpisodesIndexChange:M,onResetSelection:c.actions.resetSelection,onSeasonsClickChange:c.actions.updateSeasonMenuSelection,onSeasonsFocusedItemChange:D,onSeasonsIndexChange:P}
t.default=(0,d.connect)((function(){var e=g(S),t=m(S),i=g(b),a=m(b),r=g(_),s=m(_)
return function(d,l){var u=l.location||{},c=u.pathname,h=u.query,f=void 0===h?{}:h,v=l.useAncestorId,g=void 0!==v&&v,m=k(d),S=T(d),b=void 0!==S&&S>=0||void 0!==m&&m>=0,_=b?w(d):void 0,M=b?x(d):"page",P=b?R(d):void 0,D=C(d),A=E(d),L=g?f.ancestorId:f.videoId
return{clickedSeasonIndex:D,entered:y(d,l),enteredChild:p(d,l),epIndex:S,epMode:M,falcorContext:c,focused:I(d,l),focusKey:l.focusKey||"episodes",highlightedSeasonIndex:A,isToOrFromPlaymode:e(d)||t(d),isToOrFromProfiles:i(d)||a(d),isToOrFromScreensaver:r(d)||s(d),itemContext:f.itemContext,mouseIsShowing:(0,(o||(o=n("B1ka"))).isMouseVisible)(d),onPointerBack:l.onExit,seasonFromEp:P,sIndex:m,sMode:_,videoId:L}}}),(function(e,t){return(0,r.default)({onPlayEpisode:f(e,t)},(0,(a||(a=n("NEBH"))).bindActionCreators)(A,e))}))},lRmd:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("siCl"))
t.default=function(e,t){var n=t.ancestorId,i=t.event,a=t.isSupplemental,r=t.unifiedEntityId,s=t.videoId,d=e.playbackStateObject,l=void 0===d?{}:d,u=i&&i.timeStamp,c={ancestorId:n,audioTextTracks:l.audioTextTracks,isSupplemental:a,playRequestTime:u,unifiedEntityId:r,videoId:s,viewableId:s}
return l.viewableId===s&&(c.initialStateOfPlayback=(0,o.default)({},l,{isUIAutoPlay:!1})),c}},mi1D:function(e,t){t.__esModule=!0,t.default=function(e,t,n){var i=(void 0===t?{}:t).layoutSpacing
return e.extend({background:function(){return{base:{layout:"horizontal",layoutSpacing:i,sendRenderProperties:!0}}},middle:function(){return{base:{layout:{align:["center-horizontal","center-vertical"],layout:"horizontal"},width:n}}}})}},n1w0:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.ButtonIcon=I,t.STANDARD_BUTTON_ICON_SIZE=t.SMALL_BUTTON_ICON_SIZE=t.LARGE_BUTTON_ICON_SIZE=t.ButtonIconWithLegacyAutoFocus=void 0,t.useButtonIconConfig=S
var o,a,r,s,d,l,u,c=n("igsZ"),h=n("eNcy"),f=i(n("3ovq")),v=n("/P98"),g=["onClick","onKeyDown"],m=t.LARGE_BUTTON_ICON_SIZE=64,p=t.STANDARD_BUTTON_ICON_SIZE=42,y=t.SMALL_BUTTON_ICON_SIZE=34
function I(e){var t=e.accessibilityLabel,i=e.accessibilityRole,h=void 0===i?"button":i,f=e.data,v=e.disabled,I=e.focusKey,_=e.focused,x=void 0!==_&&_,T=e.highlighted,E=e.icon,w=e.iconColorOverride,k=e.isLegacyFocus,C=e.layoutSpacing,R=e.name,M=e.onClick,P=e.onKeyDown,D=e.onSubmit,A=e.sendRenderProperties,L=e.size,F=void 0===L?"standard":L,O=e.type,B=e.x,j=e.y,W=(0,(l||(l=n("+qED"))).useInteractable)({focused:x,focusKey:I,onClick:M,onKeyDown:P,onSubmit:D}),N=W.focused,K=W.highlighted,H=W.onClick,V=W.onKeyDown,U=k?x:N,q=t+" "+h;(0,(o||(o=n("8rh/"))).useSpeech)({condition:!(!t||!U&&!K),interrupt:!0,speakOnChange:q,text:q})
var G=(0,(a||(a=n("GQsr"))).useTheme)(),z=function(e){return"large"===e?{cornerRadius:G.ButtonIconBorderRadiusLarge,dimension:m,iconSize:(d||(d=n("M0QK"))).IconSize.Large}:"small"===e?{cornerRadius:G.ButtonIconBorderRadiusSmall,dimension:y,iconSize:(d||(d=n("M0QK"))).IconSize.Small}:{cornerRadius:G.ButtonIconBorderRadius,dimension:p,iconSize:(d||(d=n("M0QK"))).IconSize.Standard}}(F),Z=z.cornerRadius,X=z.dimension,J=z.iconSize,Q=function(e,t,n){return e?"disabled":t?"focused":n?"highlighted":"default"}(v,U,T),Y="string"==typeof E,$=Y?void 0:E,ee=function(e,t,i){return i||("focused"!==e&&"highlighted"!==e||"brand"!==t?(u||(u=n("IIC3"))).ICON_COLOR[e]:(d||(d=n("M0QK"))).IconColor.Foreground)}(Q,O,w),te=S(O,Q),ne=te.borderFill,ie=te.borderWidth,oe=te.fill
return(0,c.j)(b,{__update_handlers__:g,children:[(0,c.j)((r||(r=n("6jZX"))).BorderBox,{borderFill:ne,borderWidth:ie,cornerRadius:Z,fill:oe,height:X,width:X},null,null),$&&(0,c.j)($,{data:f,focused:U},null,null),Y&&(0,c.j)((s||(s=n("S2RX"))).Icon,{color:ee,height:X,size:J,type:E,width:X},E,null)],disabled:v,focused:U,focusKey:I,height:X,layoutSpacing:C,name:R,onClick:H,onKeyDown:V,sendRenderProperties:A,width:X,x:B,y:j},null,null)}function S(e,t){var i=(0,(a||(a=n("GQsr"))).useTheme)()
return(0,v.useMemo)((function(){return"brand"===e?"disabled"===t?{fill:i.ButtonIconSurfaceBrandDisabled}:"focused"===t||"highlighted"===t?{fill:i.ButtonIconSurfaceBrandFocused}:{fill:i.ButtonIconSurfaceBrand}:"secondary"===e?"disabled"===t?{fill:i.ButtonIconSurfaceSecondaryDisabled}:"focused"===t||"highlighted"===t?{fill:i.ButtonIconSurfaceSecondaryFocused}:{fill:i.ButtonIconSurfaceSecondary}:"supplemental"===e?"disabled"===t?{borderFill:i.ButtonIconBorderSupplementalDisabled,borderWidth:i.ButtonIconBorderWidth,fill:i.ButtonIconSurfaceSupplementalDisabled}:"focused"===t||"highlighted"===t?{fill:i.ButtonIconSurfaceSupplementalFocused}:{borderFill:i.ButtonIconBorderSupplemental,borderWidth:i.ButtonIconBorderWidth,fill:i.ButtonIconSurfaceSupplemental}:"tertiary"===e?"disabled"===t?{fill:i.ButtonIconSurfaceTertiaryDisabled}:"focused"===t||"highlighted"===t?{fill:i.ButtonIconSurfaceTertiaryFocused}:{fill:i.ButtonIconSurfaceTertiary}:("primary"!==e&&nrdp.log.error("Unknown ButtonIcon type of "+e+" was provided; falling back to default of 'primary'."),"disabled"===t?{fill:i.ButtonIconSurfacePrimaryDisabled}:"focused"===t||"highlighted"===t?{fill:i.ButtonIconSurfacePrimaryFocused}:{fill:i.ButtonIconSurfacePrimary})}),[i,e,t])}t.ButtonIconWithLegacyAutoFocus=(0,f.default)(I)
var b=(0,h.s)("Focusable","ButtonIconContainer",{height:function(e){return e.height},layoutSpacing:function(e){return e.layoutSpacing},name:function(e){var t=e.name
return void 0===t?"ButtonIcon":t},sendRenderProperties:function(e){return e.sendRenderProperties},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!1)},ods6:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,s,d,l,u,c,h,f,v,g,m=n("igsZ"),p=n("/P98"),y={he:{direction:"ltr"}},I={right:4}
function S(e){var t=e.board,o=e.layoutSpacing,a=e.rating
return a?"icon"===a.type?(0,m.j)((void 0===f?f=i(n("yQBa")):f).default,{board:t,layoutSpacing:o,name:"MaturityRatingIcon",rating:a.value,size:"xsmall"},null,null):(0,m.j)((u||(u=n("wMCW"))).Tag,{disableTts:!0,label:a.value,languageTextStyleOverrides:y,layoutSpacing:o,name:"MaturityRatingText",size:"small",truncate:!1,variant:"outlined"},null,null):null}function b(e){var t=e.advisory,o=e.board,a=e.layoutSpacing
return"icon"===t.type?(0,m.j)((void 0===f?f=i(n("yQBa")):f).default,{board:o,layoutSpacing:a,name:"AdvisoryIcon",rating:t.value,size:"xsmall"},null,null):(0,m.j)((c||(c=n("AHGZ"))).Text,{children:t.value,layoutSpacing:a,name:"AdvisoryText",textColorOverride:"#FFFFFF99",type:(r||(r=n("BKc6"))).TextType.Caption},null,null)}function _(e){var t=e.layoutSpacing,i=e.show,o=void 0===i||i,a=(0,(s||(s=n("GQsr"))).useTheme)()
return o?(0,m.j)((c||(c=n("AHGZ"))).Text,{children:"\xb7",layoutSpacing:t,padding:I,textColor:a.ForegroundDim,type:(r||(r=n("BKc6"))).TextType.CaptionHeavy},null,null):null}t.default=(0,p.memo)((function(e){var t=e.advisories,i=e.boardId,s=e.label,u=e.maturityRating,f=e.width,p=e.x,y=e.y,I=!!(u||null!=t&&t.length),x=(0,(a||(a=n("kCWc"))).useDepthTransitionProps)(void 0===g?g={id:"dp:episode-list:advisories",templateKey:n("KBg7").TemplateKey.DP_Foreground}:g),T=x.effectParams,E=x.unstable_effect,w=i===(h||(h=n("/N3x"))).Board.NICAM?0:8
return(0,m.j)(void 0===v?v=(0,n("eNcy").s)("Widget","SeasonAdvisoryContainer",{drawOrder:-1,name:"SeasonAdvisoryContainer"},!0):v,{children:I&&(0,m.j)((d||(d=n("HfU7"))).Crossfade,{children:(0,m.j)((l||(l=n("djiD"))).HStack,{children:[(0,m.j)((c||(c=n("AHGZ"))).Text,{children:s,layoutSpacing:w,type:(r||(r=n("BKc6"))).TextType.TitleHeavy},null,null),(0,m.j)(_,{layoutSpacing:w,show:I},null,null),(0,m.j)(S,{board:i,layoutSpacing:w,rating:u},null,null),null==t?void 0:t.map((function(e,t){return(0,m.j)(b,{advisory:e,board:i,layoutSpacing:w},"advisory-"+t,null)}))],drawOrder:-1,ignorePointer:!0,name:"SeasonAdvisoryHeader",valign:"center",width:f,x:p,y:y},null,null),condition:s,duration:238,easing:(o||(o=n("ClEx"))).Easing.EasingQuarticOut},null,null),effectParams:T,unstable_effect:E},null,null)}))},onmh:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a=(0,n("8fke").memoize)((function(e){return!(!e||!(0,(void 0===o?o=i(n("0Zd3")):o).default)({viewableSummary:e}))}))
t.default=a},ouPa:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.OverlayedImageStill=function(e){var t,h=e.animation,f=e.animationKey,v=e.bookmarkPosition,p=void 0===v?0:v,y=e.hideOverlay,I=e.image,S=e.isBranchingNarrative,b=e.label,_=e.runtime,x=void 0===_?0:_,T=e.viewableId
if(!y){var E,w=p/x*100
S&&T?E=(0,c.j)((void 0===d?d=i(n("vbSu")):d).default,{height:g.PROGRESS_BAR_HEIGHT,mirror:!1,percentage:w,videoId:T,width:g.PROGRESS_BAR_WIDTH},null,null):(0,(s||(s=n("lUUO"))).isValidBookmark)(p)&&(E=(0,c.j)((a||(a=n("b3le"))).Progress,{disableTts:!0,height:g.PROGRESS_BAR_HEIGHT,mirror:!1,percent:w,width:g.PROGRESS_BAR_WIDTH},null,null)),t=(0,c.j)((l||(l=n("PFlX"))).Vignette,{children:[(0,c.j)((r||(r=n("AHGZ"))).Text,{children:b,name:"info",textColorOverride:g.TEXT_COLOR,type:(o||(o=n("BKc6"))).TextType.SubtitleHeavy},null,null),E]},null,null)}return(0,c.j)(u.default.Fragment,{children:[(0,c.j)(m,{animation:h,animationKey:f,image:I},f,null),t]},null,null)}
var o,a,r,s,d,l,u=i(n("/P98")),c=n("igsZ"),h=i(n("siCl")),f=n("eNcy"),v=n("oM/y"),g=n("Mo5I"),m=(0,f.s)("Widget","image",{backgroundImage:function(e){var t=e.image,n=null!=t&&t.url?{halign:"aspect",url:t.url}:(0,v.i)("PIn+halign=aspect","edp-placeholder")
return(0,h.default)({},n,{height:g.STILL_HEIGHT,lazy:!0,width:g.STILL_WIDTH})},cache:!0,cornerRadius:function(e){return e.theme.BorderRadiusSmall},height:g.STILL_HEIGHT,layout:{align:["bottom"],layout:"vertical"},name:"image",width:g.STILL_WIDTH},!0)},pEK0:function(e,t){t.__esModule=!0,t.default=void 0
var n,i,o,a={fragment:{abstractKey:null,argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"videoId"}],kind:"Fragment",metadata:null,name:"useEpisodeReminderQueryQuery",selections:[{alias:null,args:i=[{items:[{kind:"Variable",name:"videoIds.0",variableName:"videoId"}],kind:"ListValue",name:"videoIds"}],concreteType:null,kind:"LinkedField",name:"videos",plural:!0,selections:[o={alias:null,args:null,kind:"ScalarField",name:"isInRemindMeList",storageKey:null}],storageKey:null}],type:"Query"},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"useEpisodeReminderQueryQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"videos",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},o,{abstractKey:"__isNode",kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"_id",storageKey:null}],type:"Node"}],storageKey:null}]},params:{id:"61f96b1e-1bc0-4224-94fe-dd69a5fed8cb",metadata:{},name:"useEpisodeReminderQueryQuery",operationKind:"query",text:null},hash:"b1e1eec3442e972ed39162b8b39318db"}
t.default=a},pFyk:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.useEpisodeToggleReminderMutation=function(e,t,i,l){void 0===l&&(l="localFirst")
var u=(0,(a||(a=n("9K7h"))).useToggleReminder)(),c=(0,d.useState)(null),h=(0,s.default)(c,2),f=h[0],v=h[1],g=i.parentView,m=i.trackingInfo,p=i.view
return{toggleReminder:(0,(o||(o=n("K0jP"))).useEvent)((function(){return(0,r.default)().async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!f){n.next=2
break}return n.abrupt("return",void 0)
case 2:return v(t?"removing":"adding"),n.next=5,(0,r.default)().awrap(u({isInRemindMeList:t,parentView:g,trackingInfo:m,videoId:e,view:p}))
case 5:v(null)
case 6:case"end":return n.stop()}}),null,null,null,Promise)})),toggleReminderInProgress:f}}
var o,a,r=i(n("fsL8")),s=i(n("J4zp")),d=n("/P98")},rISM:function(e,t,n){var i
t.__esModule=!0,t.withAnimation=void 0
var o,a=n("NEM1")
t.withAnimation=(0,a.transitionAnimation)({factory:function(e,t){var a=t.opacity
return(0,(i||(i=n("ClEx"))).scalar)({duration:(o||(o=n("TlTJ"))).SHORT_DURATION,easing:(o||(o=n("TlTJ"))).EASING,property:"opacity",suppressEvents:!0,to:a})},shouldGenerateNewAnimation:function(e,t){return e.opacity!==t.opacity}})},rtBh:function(e,t,n){var i,o
t.__esModule=!0,t.addReminder=function(e,t,n,i,o){r(e,t,"addReminder",n,i,o)},t.removeReminder=function(e,t,n,i,o){r(e,t,"removeReminder",n,i,o)}
var a=n("BHy0")
function r(e,t,r,s,d,l){var u="addReminder"===r,c=s.parentView,h=s.trackingInfo,f=s.view,v=(i||(i=n("Mmf2"))).consolidatedLogger.startSession(u?"AddToPlaylist":"RemoveFromPlaylist",{command:u?"AddToPlaylistCommand":"RemoveFromPlaylistCommand",parentView:c,trackingInfo:h,view:f}),g=["videos",t,"reminder"],m=["videos",t,r],p=e.withoutDataSource(),y=(0,(o||(o=n("R2rB"))).atom)({isReminderSet:"addReminder"===r})
"remoteFirst"===d?e.call(m).subscribe((function(){(i||(i=n("Mmf2"))).consolidatedLogger.endSession(v),p.setValue(g,y).subscribe(l,l)}),(function(){(i||(i=n("Mmf2"))).consolidatedLogger.endSession(v,{debug:{mode:d,videoId:t},type:"ActionFailed"}),p.invalidate(g),e.get(g).subscribe(l,l)})):p.setValue(g,y).subscribe((function(){e.call(m).subscribe((function(){(i||(i=n("Mmf2"))).consolidatedLogger.endSession(v),l()}),(function(){(i||(i=n("Mmf2"))).consolidatedLogger.endSession(v,{debug:{mode:d,videoId:t},type:"ActionFailed"}),p.invalidate(g),e.get(g).subscribe(a.noop,a.noop),l()}))}),(function(){(i||(i=n("Mmf2"))).consolidatedLogger.endSession(v,{debug:{mode:d,msg:"failed to update local model",videoId:t},type:"ActionFailed"}),p.invalidate(g),l()}))}},skUI:function(e,t,n){t.__esModule=!0,t.default=function(e){var t=e.visible
return{animation:t?a.key("visible"):r.key("invisible"),key:t?"visible":"invisible"}}
var i=n("ClEx"),o=n("Hg/B"),a=(0,o.fade)({duration:275,easing:i.Easing.EasingQuadraticIn,forceFromOnInterrupt:!1,from:0,to:1}),r=(0,o.fade)({duration:275,easing:i.Easing.EasingQuadraticOut,forceFromOnInterrupt:!1,from:1,to:0})},szem:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=(void 0===e?{textAlign:r}:e).textAlign,o=void 0===t?r:t
return(0,a.default)({background:function(){return{base:{name:"background"}}},end:function(){return{base:{name:"right-cap"},buttonVisualState:{disabled:{opacity:.5}}}},middle:function(){var e={textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.White}}
return{base:{grow:1,name:"center",textStyle:{align:o,color:(i||(i=n("D+c2"))).FoundationalColors.Gray500,variant:"normal",wrap:!1}},buttonVisualState:{disabled:{opacity:.5},highlighted:e,pressed:e}}},start:function(){return{base:{name:"left-cap"},buttonVisualState:{disabled:{opacity:.5}}}}})}
var a=o(n("Hy99")),r="left center-vertical"},uuge:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,s,d,l,u,c,h,f,v=n("agVJ"),g=i(n("jGzq")),m=n("xNxB"),p=n("P1w9"),y=v.selectors.isFocused,I=v.selectors.isHighlighted,S=function(e,t){return{focused:y(e,t),highlighted:I(e,t)}}
t.default=function(e){var t=void 0===e?{}:e,y=t.UNSAFE_componentWillReceiveProps,I=t.autoFocus,b=void 0===I||I,_=t.createMenuButton,x=t.filled,T=void 0!==x&&x,E=t.hasKidsStyle,w=void 0!==E&&E,k=t.height,C=void 0===k?42:k,R=t.layoutSpacing,M=t.middleWidth,P=t.shouldComponentUpdate,D=t.showFocusedRing,A=t.showUnfocusedRing,L=t.speech,F=void 0===L||L,O=t.textAlign,B=t.useLowPerformanceStack,j=(void 0===f?f={42:i(n("Kfpz")).default}:f)[C];(0,g.default)(j,"darwinButtons: height "+C+" not supported!")
var W,N=(0,(void 0===u?u=i(n("szem")):u).default)({hasKidsStyle:w,textAlign:O})
if(_)W=(0,(void 0===a?a=i(n("gbck")):a).default)({displayName:"MenuButtonPart",shouldComponentUpdate:P,stylesheet:(0,(void 0===l?l=i(n("NFSk")):l).default)(N,{})})
else{var K=j(N,{filled:T,hasKidsStyle:w,showFocusedRing:D,showUnfocusedRing:A})
W=B?(0,(void 0===r?r=i(n("ICKM")):r).default)({shouldComponentUpdate:P,stylesheet:(0,(void 0===s?s=i(n("mi1D")):s).default)(K,{layoutSpacing:R},M),UNSAFE_componentWillReceiveProps:y}):(0,(void 0===o?o=i(n("bbNX")):o).default)({shouldComponentUpdate:P,stylesheet:(0,(void 0===d?d=i(n("e3rh")):d).default)(K,{}),UNSAFE_componentWillReceiveProps:y})}return(0,m.compose)(b?void 0===h?h=(0,m.compose)(v.withFocusPath,(0,n("e9tE").connect)(S)):h:p.identity,F?void 0===c?c=i(n("Ki15")).default.button:c:p.identity)(W)}},vbSu:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.height,i=e.mirror,l=e.percentage,u=e.videoId,c=e.width,h=(0,s.useFalcor)([["videos",u,"interactiveProgress"]]),f=h.data,v=h.error,g=0
if(!h.isLoading&&f){var m,p=null==(m=f.videos)||null==(m=m[u])?void 0:m.interactiveProgress
g="number"==typeof p&&p>=0?p:l}return(0,d.useEffect)((function(){v&&new r.default({innerError:v.errors,message:"Failed to retrieve interactive progress summary from Falcor",source:"io",type:"InteractiveProgressFalcorError"}).logAsHandledException()}),[v]),(0,a.j)((o||(o=n("b3le"))).Progress,{disableTts:!0,height:t,mirror:i,percent:g,visible:g>0,width:c},null,null)}
var o,a=n("igsZ"),r=i(n("w1pw")),s=n("pbgz"),d=n("/P98")},x84e:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.defaultVisible,c=e.isSeasonsLabel,p=e.stylesheet,y=e.transitions,I=v(p,m),S=function(e){function t(t){var n=e.call(this,t)||this
return n.state={animation:{}},n}(0,d.default)(t,e)
var r=t.prototype
return r.UNSAFE_componentWillReceiveProps=function(e,t){var o=e.buttonVisualState,r=e.mouseIsShowing,s=this.props.buttonVisualState,d=t.buttonVisualState,l=this.context.buttonVisualState,u=e.animate,h=e.visible,f=this.props.visible
if(u&&(!c&&(void 0===a?a=i(n("KKEs")).default.PRESSED:a)!==d&&(void 0===a?a=i(n("KKEs")).default.PRESSED:a)!==l&&(d!==l||o!==s)||c&&h!==f)){var v=y(e,t)
!v||!c&&r||this.setState({animation:v})}},r.componentDidMount=function(){var e=this.props
if(e.visible&&c){var t=y(e)
t&&this.setState({animation:t})}},r.shouldComponentUpdate=function(e,t,n){var i=this.context,o=this.props,a=this.state,r=o.animate,s=o.name,d=o.rect,l=o.text,c=o.visible,h=a.animation,f=void 0===h?{}:h,v=i.buttonVisualState,g=e.animate,m=e.mouseIsShowing,p=e.name,y=e.rect,I=e.text,S=e.visible,b=t.animation,_=void 0===b?{}:b,x=n.buttonVisualState
return!!m||c!==S||l!==I||f!==_||v!==x||s!==p||r!==g||!(0,u.areRectsEqual)(d,y)},r.render=function(){var e=this.context,t=this.props,a=this.state,r=t.name,d=t.rect,l=t.text,u=t.visible,c=(0,(void 0===o?o=i(n("wNCT")):o).default)(I,e,t),h=a&&a.animation||{}
return(0,s.j)("Widget",{__update_style__:f,animation:h.animation,animationKey:h.key,staticStyle:c,style:{name:r,rect:d,text:l,visible:u}},"label",null)},t}(h.Component)
return S.displayName="AnimatedLabel",S.contextTypes=(0,r.default)({},l.stylesheetContextTypes,{buttonVisualState:g.buttonVisualState}),S.defaultProps={animate:!0,visible:t},S}
var o,a,r=i(n("siCl")),s=n("igsZ"),d=i(n("VbXa")),l=n("s6u8"),u=n("Eu0p"),c=i(n("N9Ua")),h=n("/P98"),f=["name","rect","text","visible"],v=(0,l.getStylesheetDefaultsResolver)(),g=c.default.required
function m(){return{base:{name:"label"}}}},y0oT:function(e,t,n){var i
t.__esModule=!0,t.default=void 0
var o,a=n("agVJ"),r=n("e9tE"),s=n("NEM1"),d=a.selectors.getHighlightEnteredChild,l=a.selectors.isEntered,u=a.selectors.isFocused,c=a.selectors.isHighlightEntered,h=s.selectors.isTransitioningFrom,f=s.selectors.matchCurrentUrl
t.default=(0,r.connect)((function(){var e=h((o||(o=n("ve0B"))).patterns.DETAILS_CHARACTER)
return function(t,a){return{entered:l(t,a),focused:u(t,a),highlightEntered:c(t,a),highlightEnteredChild:d(t,a),isCharacter:f(t,(o||(o=n("ve0B"))).patterns.DETAILS_CHARACTER),isExitingCharacter:e(t),mouseIsEnabled:(0,(i||(i=n("B1ka"))).isMouseEnabled)(t),mouseIsShowing:(0,(i||(i=n("B1ka"))).isMouseVisible)(t)}}}))},zOpD:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e,t){var n,i,o,a,s
switch(e){case"play":case"play_recap":case"play_trailer":case"play_branching":case"watch_live":s=l("play")
break
case"play_from_beginning":s=l("playFromBeginning")
break
case"ads_change_plan":s=l("lock")
break
case"reminder":s=null!=t&&t.isReminderSet?l("checkmark"):l("notification")
break
case"more_episodes":case"episodes_trailers":case"trailers_and_more":s=l("episodes")
break
case"more_like_this":s=l("moreLikeThis")
break
case"credits":s=l("castAndCrew")
break
case"undo":s=l("undo")
break
case"title_group":s=l("titleGroups")
break
case"remove":s=l("remove")
break
case"close":s=l("close")
break
case"add":case"playlist":s=l("add")
break
case"audio_subtitles":s=l("audioAndSubtitles")
break
case"checked":s=l("checkmark"),n=1,i=null==t?void 0:t.margin
break
case"unchecked":s=l("checkmark"),n=0
break
case"back":o=null==t?void 0:t.x,a=null==t?void 0:t.y,s=l("back")
break
case"backBright":s=l("back")
break
case"viewCredits":o=null==t?void 0:t.x,a=null==t?void 0:t.y,s=l("endCredits")
break
case"mdp":s=l("info")
break
case"content_warning":o=null==t?void 0:t.x,a=null==t?void 0:t.y,s=l("warning")
break
case"content_warning_back":o=null==t?void 0:t.x,a=null==t?void 0:t.y,s=l("backArrow")
break
case"menu":o=null==t?void 0:t.x,a=null==t?void 0:t.y,s=l("menu")}return s?(0,r.j)(s,{margin:i,name:e,opacity:n,rect:{height:26,width:26,x:o,y:a}},"icon",null):null}
var o,a,r=n("igsZ"),s=i(n("Hy99")),d=new Map
function l(e){var t,i,r=d.get(e)
if(r)return r
switch(e){case"add":t=(0,(o||(o=n("qjNO"))).getIcon)("Plus_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Plus_WhiteT70_Standard")
break
case"audioAndSubtitles":t=(0,(o||(o=n("qjNO"))).getIcon)("Subtitles_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Subtitles_WhiteT70_Standard")
break
case"back":t=(0,(o||(o=n("qjNO"))).getIcon)("Back_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Back_WhiteT70_Standard")
break
case"backArrow":t=(0,(o||(o=n("qjNO"))).getIcon)("ArrowLeft_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("ArrowLeft_WhiteT70_Standard")
break
case"notification":t=(0,(o||(o=n("qjNO"))).getIcon)("Bell_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Bell_WhiteT70_Standard")
break
case"castAndCrew":t=(0,(o||(o=n("qjNO"))).getIcon)("Users2_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Users2_WhiteT70_Standard")
break
case"close":t=(0,(o||(o=n("qjNO"))).getIcon)("X_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("X_WhiteT70_Standard")
break
case"checkmark":t=(0,(o||(o=n("qjNO"))).getIcon)("Checkmark_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Checkmark_WhiteT70_Standard")
break
case"endCredits":t=(0,(o||(o=n("qjNO"))).getIcon)("EndCredits_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("EndCredits_WhiteT70_Standard")
break
case"episodes":t=(0,(o||(o=n("qjNO"))).getIcon)("Episodes_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Episodes_WhiteT70_Standard")
break
case"info":t=(0,(o||(o=n("qjNO"))).getIcon)("CircleIFill_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("CircleIFill_WhiteT70_Standard")
break
case"lock":t=(0,(o||(o=n("qjNO"))).getIcon)("Lock_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Lock_WhiteT70_Standard")
break
case"menu":t=(0,(o||(o=n("qjNO"))).getIcon)("Menu_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Menu_WhiteT70_Standard")
break
case"moreLikeThis":t=(0,(o||(o=n("qjNO"))).getIcon)("Grid_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Grid_WhiteT70_Standard")
break
case"play":t=(0,(o||(o=n("qjNO"))).getIcon)("Play_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Play_WhiteT70_Standard")
break
case"playFromBeginning":t=(0,(o||(o=n("qjNO"))).getIcon)("PlayFromBeginning_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("PlayFromBeginning_WhiteT70_Standard")
break
case"remove":t=(0,(o||(o=n("qjNO"))).getIcon)("Minus_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Minus_WhiteT70_Standard")
break
case"titleGroups":t=(0,(o||(o=n("qjNO"))).getIcon)("Collection_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Collection_WhiteT70_Standard")
break
case"warning":t=(0,(o||(o=n("qjNO"))).getIcon)("WarningFill_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("WarningFill_WhiteT70_Standard")
break
case"undo":t=(0,(o||(o=n("qjNO"))).getIcon)("Undo_White_Standard"),i=(0,(o||(o=n("qjNO"))).getIcon)("Undo_WhiteT70_Standard")
break
default:return null}return r=function(e){var t=e.base,i=e.highlighted,o=e.pressed,r=void 0===o?i:o,d=(void 0===a?a=(0,n("9IR/").getFeatures)():a).thumbsWayUpActionBarEnabled,l=(0,s.default)((function(){return{base:{height:42,image:t,margin:{left:d?12:11,right:6}},buttonVisualState:{highlighted:{image:i},pressed:{image:r}}}}))
return n("fWeL").default({stylesheet:l})}({base:i,highlighted:t}),d.set(e,r),r}}}])


