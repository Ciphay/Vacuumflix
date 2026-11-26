(this.webpackJsonp=this.webpackJsonp||[]).push([[130],{"+59q":function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,r,l=n("igsZ"),s=(o(n("2mBW")),o(n("Ki15"))),u=i(n("vSZY")),d=s.default.list,c=u.hasEntered
t.default=d({context:function(e){return e.texttospeech&&e.texttospeech.inMenu},flushWhen:c,item:function(e){var t=e.index,i=void 0===t?0:t,o=e.items,s=void 0===o?[]:o,u=e.texttospeech,d=void 0===u?{}:u,c=e.thumbsRating,h=d.itemPosition,f=s[i],p=f||{},g=p.label,m=p.type
return d&&f&&(0,l.j)("speak",{children:[(0,l.j)("s",{children:"thumbrate"===m?(0,(r||(r=n("J3Pr"))).getThumbRateButtonSpeech)(f,c,d):g},null,null),(0,l.j)("s",{children:(0,(a||(a=n("m5dK"))).nfformat)(h,{itemNumber:i+1,numberOfItems:s.length})},null,null)]},null,null)}})},"+e9Q":function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=o(n("Hy99"))
t.default=(0,a.default)({wallpaper:function(){return{base:{name:"wallpaper",rect:{height:612,width:1088}}}},wallpaperFull:function(){return{base:{name:"wallpaper",rect:{height:(i||(i=n("8J/X"))).VIEWPORT_HEIGHT,width:(i||(i=n("8J/X"))).VIEWPORT_WIDTH}}}}})},"/C/D":function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,r,l,s,u,d=o(n("siCl")),c=o(n("siCl")),h=n("igsZ"),f=o(n("VbXa")),p=n("/P98"),g=i(n("17x9")),m=o(n("gVfH")),y=["visible"],v=m.default.getSeasonRenewalProps,b=m.default.seasonRenewalEnabled
t.default=function(e){var t,i=void 0===e?{}:e,m=i.SeasonRenewal,S=i.TitleLogo,x=i.VideoReturn,_=i.nrdp,w=void 0===_?globalThis.nrdp:_,P=i.postPlayRows,I=i.stylesheet
function T(e,t,n){(!e||!t.entered&&n.entered)&&this.setState({itemIndex:0})}function C(){var e=this.context.mdxPostPlay,t=(void 0===e?{}:e).registerActions
t&&t({nextEpisode:this.mdxPlay,stopPostPlay:this.mdxStopPostPlay})}function R(){var e=this.context.mdxPostPlay,t=(void 0===e?{}:e).unregisterActions
t&&t()}function E(e){this.props.onExecuteAction({action:e,playRequestTime:w.mono()})}function k(){var e=this.props,t=e.handleBackToBrowse,n=e.initialStateOfPlayback,i=void 0===n?{}:n,o=e.onViewCredits,a=i.videoState
"endOfStream"===(void 0===a?{}:a).name?t():o(i)}function A(e){this.state.itemIndex!==e&&this.setState({itemIndex:e})}function M(){this.setState({seasonRenewalComplete:!0})}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.onSeasonRenewalComplete=M.bind(n),n.handleChangeItemIndex=A.bind(n),n.mdxStopPostPlay=k.bind(n),n.mdxPlay=E.bind(n),n.unregisterMdxActions=R.bind(n),n.registerMdxActions=C.bind(n),n.considerReset=T.bind(n),n.state={itemIndex:0},n}(0,f.default)(t,e)
var i=t.prototype
return i.UNSAFE_componentWillMount=function(){var e=this.props,t=this.state
this.considerReset(t,{},e),this.registerMdxActions()},i.componentWillUnmount=function(){this.unregisterMdxActions()},i.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,n=this.state
this.considerReset(n,t,e)},i.render=function(){var e=this.context,t=this.props,i=this.state,r=I.resolve(e),d=i.itemIndex,f=i.seasonRenewalComplete,p=t.ancestorVideoId,g=t.enableAutoplay,_=t.entered,w=t.focusKey,T=t.focused,C=t.initialStateOfPlayback,R=t.isAncestorInQueue,E=t.itemContext,k=t.mouseIsShowing,A=t.onExecuteAction,M=t.onKeyDown,O=t.onViewCredits,W=t.postPlayExperience,B=t.processingQueue,D=t.showLeftMenu,F=t.visible,j=void 0===F||F,V=T,L=W.items,N=W.mostInterestingMoment,H=W.showVideoReturn,U=L&&L.length||0,q=P[U]||P.default,K=(0,(void 0===s?s=o(n("LhTm")):s).default)(W,d),G=H?r.logoWithVideoReturn:r.logoWithoutVideoReturn,z=W&&W.defaultToMenu&&D,X=b(W)&&!f,Z=!z&&X?V:!V
Z&&void 0!==this.props.focusedChild&&"countdownButton"!==this.props.focusedChild&&(Z=!1)
var Y,J,Q,$,ee=!z&&!Z&&V,te=!!z&&V,ne=z?0:void 0
f&&"countdownButton"===this.props.focusedChild&&(ee=!0),K&&(Y=(0,h.j)((void 0===l?l=o(n("TABy")):l).default,{experienceType:W.type,image:K},"background",null)),H&&(J=(0,h.j)(x,{active:_,handleViewCredits:O,image:N,initialStateOfPlayback:C||{},name:r.videoReturn.name,portalRect:r.videoReturnPortal.rect,rect:r.videoReturn.rect},"videoReturn",null)),D&&(Q=(0,h.j)((void 0===u?u=o(n("X9PG")):u).default,{ancestorVideoId:p,disableActionBarTooltips:H,executeAction:A,focused:te,focusKey:"leftMenu",index:ne,isAncestorInQueue:R,itemContext:E,mouseIsShowing:k,postPlayExperience:W,postPlayItemIndex:d,processingQueue:B},"leftMenu",null)),X&&($=(0,h.j)(m,(0,c.default)({focused:Z,focusKey:"seasonRenewal",onComplete:this.onSeasonRenewalComplete},v(W)),"seasonRenewal",null))
var ie,oe=r.leftVignette
return"episodicTeaser"===W.type&&(oe=r.leftVignetteFull),!f&&X||(ie=(0,h.j)(q,{active:_,enableAutoplay:g,executeAction:A,focused:ee,itemIndex:d,name:r.postPlayRow.name,onChangeItemIndex:this.handleChangeItemIndex,postPlayExperience:W,rect:r.postPlayRow.rect},"postPlayRow",null)),(0,h.j)((a||(a=n("agVJ"))).FocusableRoot,{__update_style__:y,children:[Y,(0,h.j)("Widget",{staticStyle:oe},"leftVignette",null),(0,h.j)(S,{altText:W.promotedTitle,image:W.assets&&W.assets.LOGO,name:G.name,rect:G.rect,supplementalText:W.promotedSupplementalMessage},"titleLogo",null),$,J,Q,ie],focused:T,focusKey:w,onKeyDown:M,staticStyle:r.container,style:{visible:j}},"postPlay",null)},t}(p.Component)).displayName="PostPlayStandardLayout",t.contextTypes=(0,d.default)({},(r||(r=n("s6u8"))).stylesheetContextTypes,{mdxPostPlay:g.shape({registerActions:g.func,unregisterActions:g.func})}),t}},"0aDR":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("oM/y"),a=i(n("Hy99"))
t.default=(0,a.default)((function(){return{base:{backgroundImage:(0,o.i)("gzI+halign=center+valign=center","noGlowMenuFocusRing254"),cache:!0,ignorePointer:!0,rect:{height:46,width:254,x:0,y:0}}}}))},"11/r":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("igsZ"),a=i(n("siCl")),r=Object.freeze({}),l={position:"end"},s={position:"none"}
function u(e){var t=e.staticStyle||r,n=function(e,t){var n=e.align,i=e.bold,o=e.children,r=e.color,u=e.contents,d=e.maxLines,c=e.padding,h=e.richText,f=e.size,p=e.style,g=e.truncate,m=e.wrap,y=e.name||t.name||"Text",v=(u||!!o)&&(void 0===e.visible||e.visible),b=p&&p.textStyle||{},S={name:y,text:u||o+"",textStyle:b,visible:v},x=p?(0,a.default)({},p,S):S
return void 0!==n&&(b.align=n),void 0!==i&&(b.weight=i?"bold":"normal"),void 0!==r&&(b.color=r),void 0!==d&&(b.maxLines=d),void 0!==c&&(b.padding=c),void 0!==h&&(b.richText=h),void 0!==f&&(b.size=f),void 0!==g&&(b.truncation=g?l:s),void 0!==m&&(b.wrap=m),x}(e,t)
return(0,o.j)("Widget",{staticStyle:t,style:n},null,null)}u.displayName="Text",t.default=u},"1pHh":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),l=i(n("VbXa")),s=n("agVJ"),u=n("/P98"),d=i(n("lke8")),c=s.selectors.getActivePath,h=s.selectors.getHighlights,f=s.actions.moveFocus,p=function(e){return{focusedPath:c(e),highlights:h(e)}},g={setFocusPath:f}
t.default=function(e){return function(t){var i=function(n){function i(){return n.apply(this,arguments)||this}(0,l.default)(i,n)
var o=i.prototype
return o.getChildContext=function(){var t=this.context,n=this.props,i=n.focusedPath,o=n.highlights,a=void 0===o?{}:o,r=n.setFocusPath
return{focus:{highlightedPath:(0,d.default)(a,i,e),keyIndex:1,parentPath:t,parts:i?i.split("/"):[],path:i,setFocusPath:r}}},o.render=function(){return(0,r.j)(t,this.props,null,null)},i}(u.Component)
return i.displayName="LegacyFocusAdapter",i.contextType=s.ParentFocusPathContext,i.childContextTypes=n("cMGP").default,(void 0===a?a=(0,(o||(o=n("e9tE"))).connect)(p,g,null,{areStatesEqual:n("1V6g").areStatesEqual}):a)(i)}}},"1v4W":function(e,t,n){var i
t.__esModule=!0,t.default=void 0,t.default=function(){var e=n("aovB").default(),t=n("IcoN").default({}),o=n("dKCW").default(),a={1:n("cVh3").default(),2:void 0,3:n("B5Yv").default(),default:n("LchZ").default()},r=n("L1Nw").default
return(0,(i||(i=n("9IR/"))).getFeature)("postPlayTwoUpChoicepointEnabled")&&(a[2]=n("vY/u").default()),(0,n("aDPN").default)({postPlayRows:a,SeasonRenewal:r,stylesheet:o,TitleLogo:t,VideoReturn:e})}},"22Ls":function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var r=a(n("Hy99"))
t.default=(0,r.default)({title:function(){return{base:{name:"bob-title",rect:{height:30,x:0},textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:22,truncation:{ellipsis:"...",position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{height:36},textStyle:{size:20}}}}},titleBarContainer:function(){return{base:{layout:{align:["center-vertical"],layout:"vertical"},name:"titleBarContainer",rect:{height:90}}}}})},"23ow":function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var r=a(n("fsNi"))
t.default=r.default.extend({supplementalText:function(){return{base:{name:"logoText",rect:{height:80,width:600,x:0,y:160},textStyle:{align:"right center-vertical",color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:24,weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0}}}}})},"2VMB":function(e,t,n){t.__esModule=!0,t.default=function(e,t){var n=t.buttonVisualState
return{animation:"highlighted"===n||"pressed"===n?a.key(n):r.key(n),key:n}}
var i=n("ClEx"),o=n("Hg/B"),a=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:0,to:1}),r=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:1,to:0})},"337X":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t
return t=function(t){function n(){return t.apply(this,arguments)||this}return(0,s.default)(n,t),n.prototype.render=function(){var t=this.props,n=t.location.query,i=t.onRemovePostPlayExperience,o=t.savedPostPlayExperience,s=void 0===o?{}:o,u=n.postPlayExperiences,c=n.useSavedPostPlayExperience,h=void 0!==c&&c,f=u,p=f&&f.length||0,g=n.postPlayExperience,m=n.remainingPostPlayExperiences,y=void 0===m?[]:m
p>0&&(g=f[0],y=f.slice(1,p))
var v=s.ancestorVideoId,b=s.itemContext,S=s.postPlayExperiences,x=s.sourceOfPlay,_=s.videoId,w=(0,l.default)(s,d),P=!!(f&&f.length>0),I=w
!P&&h&&S&&S.length>0?g=(f=S)[0]:P&&S&&S.length>0&&g.requestId!==S[0].requestId&&(I={},i())
var T=(0,r.default)({},t,{ancestorVideoId:!P&&v||n.ancestorVideoId,fetchPostPlayOnLoad:n.fetchPostPlayOnLoad,focusKey:"postplay",initialStateOfPlayback:n.initialStateOfPlayback,itemContext:!P&&b||n.itemContext,mdxContext:n.mdxContext,postPlayExperience:g,remainingPostPlayExperiences:y,savedPostPlayExperienceState:I,sourceOfPlay:!P&&x||n.sourceOfPlay,startedBeforeLogicalEnd:n.startedBeforeLogicalEnd,useSavedPostPlayExperience:h,videoId:!P&&_||n.videoId})
return(0,a.j)(e,T,null,null)},n}(u.Component),t.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,t}
var o,a=n("igsZ"),r=i(n("siCl")),l=i(n("6gFf")),s=i(n("VbXa")),u=n("/P98"),d=["ancestorVideoId","itemContext","postPlayExperiences","sourceOfPlay","videoId"]},"3gRI":function(e,t,n){t.__esModule=!0,t.default=function(e){return function(t){var s=(0,(i||(i=n("HiI4"))).getRootModel)(),u=t.postPlayExperience
if(function(e){return e&&"preview3"===e.type}(u)&&s){var d=u.items,c=u.requestId
if(c&&a!==c){a=c
var h=d.map((function(e){return e.ancestorId})),f=(0,(o||(o=n("lsGl"))).toMetadataPaths)({},h),p=(0,(o||(o=n("lsGl"))).toMenuMetadataPaths)({},h)
s.get.apply(s,f.concat(p)).then(l.noop,l.noop)}}return(0,r.j)(e,t,null,null)}}
var i,o,a,r=n("igsZ"),l=n("BHy0")},"4+XB":function(e,t,n){t.__esModule=!0,t.default=void 0,t.default=function(e){var t=n("ePR1").default,i=n("XV8Z").default,o=n("ZV/i").default,a=n("UN2+").default,r=n("Yowe").default,l=n("Mmf2").consolidatedLogger,s=n("xNxB").compose,u=e.logger,d=void 0===u?l:u,c=e.nrdp,h=void 0===c?globalThis.nrdp:c,f=e.queryParams
return s(a(i(void 0===f?r:f,h)),o(d))(t(e))}},"43dx":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a=n("igsZ")
function r(e){var t=e.children,r=e.newEpisodeBadge,l=e.staticStyle,s=e.styles||{},u=s.episodeBadge,d=s.titleLine1,c=r?{width:d.width-80}:void 0
return(0,a.j)("Widget",{children:[(0,a.j)((void 0===o?o=i(n("11/r")):o).default,{children:r,staticStyle:u},"new-episode-badge",null),(0,a.j)((void 0===o?o=i(n("11/r")):o).default,{children:t,staticStyle:d,style:c},"title",null)],staticStyle:l},"titleContainer",null)}r.displayName="Title",t.default=r},"4TvI":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.consolidatedLogger,m=void 0===t?(a||(a=n("Mmf2"))).consolidatedLogger:t,y=e.nrdp,v=void 0===y?globalThis.nrdp:y,b=e.viewFactory
function S(){this._userInteracted=!0,(0,(o||(o=n("BzAf"))).removeUserInteractionListener)(this)}function x(){var e=this.state.View,t=this.props.postPlayExperience
e&&t||this.handleReturnToSourceOfPlay()}function _(){(0,(s||(s=n("O5/t"))).deleteSuspendTask)("postPlay"),this._resumeHandlerRegistered=!1,this.handleReturnToSourceOfPlay()}function w(e){var t,n,i=this.props,o=i.ancestorVideoId,a=i.itemContext,r=i.postPlayExperience,l=i.remainingPostPlayExperiences,s=i.videoId
a?t=a.trackId:e&&e.playbackSessionData&&(t=e.playbackSessionData.trackingId),n=a||{trackId:t}
var u=[r].concat(l),d=e.branched,c=e.currentTime,h=e.reportedTime,f={ancestorId:o,initialStateOfPlayback:e,itemContext:n,playRequestTime:v.mono(),postPlayExperiences:u,returnedFromPostPlay:!0,trackingId:t,triggerBranchingNarrativeResetStateWithoutDialog:d&&0===c&&0===h,videoId:s}
this.props.handleViewCredits(f)}function P(){var e=this.props,t=e.ancestorVideoId,o=e.handleReturnToSourceOfPlay,a=e.itemContext
o({initialStateOfPlayback:{playbackState:(void 0===u?u=i(n("LpVm")).default.PLAYBACK_STATES:u).stopped},itemContext:a,videoId:t})}function I(e,t){var n=e.postPlayExperience,i=n.listId,o=n.requestId
return{listId:i,rank:t.rank,requestId:o,row:t.row}}function T(e,t){var o=e.action,r=e.hideLoadingBackground,l=e.ignoreBookmarkOverride,s=e.initialStateOfPlayback,d=e.isPostPlayAutoPlay,c=e.playRequestTime,f=o.additionalTrackIds,p=o.ancestorId,g=o.bookmarkPosition,y=o.doNotIncrementInterrupter,b=o.ignoreBookmark,S=o.isInteractive,x=o.name,_=o.showEpisodes,w=o.trackId,P=o.type,I=o.unifiedEntityId,T=o.videoId,C=this.props,R=C.ancestorVideoId,E=C.currentLolomoType,k=C.handleBackToBrowse,A=C.handlePlayVideo,M=C.handleQueueError,O=C.handleSwitchToMdp,W=C.itemContext,B=void 0===W?{}:W,D=C.logPostPlayImpression,F=C.mdxContext,j=C.onIncrementAutoPlayCount,V=C.onIncrementTimeSinceUserInteraction,L=C.onResetInterruptionThreshold,N=C.onSubmitQueue,H=C.onUpdateQueue,U=C.postPlayExperience,q=C.remainingPostPlayExperiences,K=this.getUiPlayContextData(this.props,o)
if("mdp"===P){var G={initialStateOfPlayback:s||{playbackState:(void 0===u?u=i(n("LpVm")).default.PLAYBACK_STATES:u).stopped},isInteractive:S,itemContext:(0,h.assign)({trackId:w},K),playRequestTime:c,showEpisodes:_,videoId:T}
L(),O(G)}else if("play"===P){var z,X=f&&f.userPlay,Z=f&&f.autoPlay,Y=(d?Z:X)||w,J=U.items,Q={ancestorId:p,hideLoadingBackground:r,initialStateOfPlayback:s,isExemptFromAutoPlayLimit:y,isPostPlayAutoPlay:d,itemContext:(0,h.assign)({trackId:Y,unifiedEntityId:I,videoId:T},K),playRequestTime:c,postPlayExperiences:q,trackingId:Y,uiLabel:"postplay",userInteractedInPostPlay:this._userInteracted,videoId:T}
if(d&&!y&&(j&&j(),V&&V()),"boolean"!=typeof r&&(Q.hideLoadingBackground=p===R),F){var $=F.controllerParams,ee=F.isMdxPlay,te=F.mdxPostplayEnabled,ne=F.mdxesn,ie=F.origin
Q.deepLinkContext={controllerParams:$,isMdxPlay:ee,mdxesn:ne,mdxPostplayEnabled:te,origin:ie}}l||(b||"number"==typeof g)&&(Q.bookmarkOverride=g>=0?g:0),S&&(Q.isInteractive=S),t&&(Q.playRequestTime=t.timeStamp,z=m.startSession((a||(a=n("Mmf2"))).SESSION.playCommand)),"playTrailer"===x&&(D({impressionToken:U.impressionToken,promotedVideoId:U.promotedVideoId,trailerDescriptor:J.length>0&&J[0]&&J[0].impressionData||"NOT_SUPPLIED",type:"trailer"}),Q.isSupplemental=!0,Q.initialStateOfPlayback=s||{}),o.actionMeta&&(Q.postPlayActionMeta=o.actionMeta),A(Q),z&&m.endSession(z)}else"back"===P?(m.startAndEndSession((a||(a=n("Mmf2"))).SESSION.backCommand,{time:t&&t.timeStamp||v.mono()}),this.handleReturnToSourceOfPlay()):"backToBrowse"===P?k({eventName:"BackCommand",payload:{fromView:"postPlay",trackingInfo:{trackId:w}}}):"playlist"===P?N({appSource:"postPlay",itemContext:B,lolomoType:E,onQueueError:M,onUpdateQueue:H,videoId:T}):"viewCredits"===P&&this.handleViewCredits(s)}function C(e){"key.back"===e.uiEvent&&(this.handleReturnToSourceOfPlay(),e.stopPropagation())}function R(){var e=this.props.postPlayExperience.items[0].actions
this.executeAction({action:e[0],isPostPlayAutoPlay:!1})}var E=function(e){function t(t){var n=e.call(this,t)||this
n.handlePlayFirstItem=R.bind(n),n.handleKeyDown=C.bind(n),n.executeAction=T.bind(n),n.getUiPlayContextData=I.bind(n),n.handleReturnToSourceOfPlay=P.bind(n),n.handleViewCredits=w.bind(n),n.handleAppSuspend=_.bind(n),n.checkForPostPlayDataFailure=x.bind(n),n.onUserInteraction=S.bind(n)
var i=t.postPlayExperience,o=b(i)
return n.state={View:o},n}(0,c.default)(t,e)
var i=t.prototype
return i.UNSAFE_componentWillMount=function(){(0,(s||(s=n("O5/t"))).setSuspendTask)("postPlay",this.handleAppSuspend),this._resumeHandlerRegistered=!0,(0,(o||(o=n("BzAf"))).addUserInteractionListener)(this)},i.componentDidMount=function(){this.checkForPostPlayDataFailure()},i.UNSAFE_componentWillReceiveProps=function(e){var t=e.postPlayExperience
if(t!==this.props.postPlayExperience){var n=b(t)
n!==this.state.View&&this.setState({View:n},this.checkForPostPlayDataFailure)}},i.componentWillUnmount=function(){this._resumeHandlerRegistered&&((0,(s||(s=n("O5/t"))).deleteSuspendTask)("postPlay"),this._resumeHandlerRegistered=!1),(0,(o||(o=n("BzAf"))).removeUserInteractionListener)(this)},i.render=function(){var e=this.props,t=e.focusKey,i=e.focused,o=e.postPlayExperience,a=e.visible,l=this.state.View
return l&&o?(0,d.j)(l,{__proto__:this.props,handleViewCredits:void 0,onExecuteAction:this.executeAction,onKeyDown:this.handleKeyDown,onViewCredits:this.handleViewCredits},null,null):(0,d.j)((r||(r=n("agVJ"))).FocusableRoot,{__update_style__:p,focused:i,focusKey:t,style:{visible:a}},"dummy",null)},t}(f.Component)
return E.contextTypes=(l||(l=n("s6u8"))).stylesheetContextTypes,E.displayName=g,E}
var o,a,r,l,s,u,d=n("igsZ"),c=i(n("VbXa")),h=n("y2r0"),f=n("/P98"),p=["visible"],g="PostPlayView"},"62oB":function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("oM/y"),o={buttonGap:25,buttonWidth:115,getCustomStyles:function(){return{focusedRing:(0,i.i)("2wE+halign=left+valign=center","mdp"),thumbsDown:(0,i.i)("bbQ","mdp"),thumbsDownFocused:(0,i.i)("PQP","mdp"),thumbsDownOutline:(0,i.i)("Eoa","mdp"),thumbsUp:(0,i.i)("GsX","mdp"),thumbsUpFocused:(0,i.i)("XeN","mdp"),thumbsUpOutline:(0,i.i)("bIv","mdp"),unfocusedRing:(0,i.i)("fDt+halign=left+valign=center","mdp")}},skipFocusAnimation:!0}
t.default=o},"6FRo":function(e,t,n){t.__esModule=!0,t.default=void 0
var i,o=n("e9tE")
t.default=(0,o.connect)((function(e){return{currentLolomoType:(void 0===i?i=n("RzHp").selectors.getCurrentLolomoType:i)(e)}}))},"85i5":function(e,t,n){t.__esModule=!0,t.default=function(e,t){var n=t.buttonVisualState
return{animation:"highlighted"===n||"pressed"===n?a.key(n):r.key(n),key:n}}
var i=n("ClEx"),o=n("Hg/B"),a=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,from:.4,to:1}),r=o.Animation.fade({duration:275,easing:i.Easing.EasingLinear,to:1})},"8UDz":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("oM/y"),l=i(n("Hy99")),s=350
t.default=(0,l.default)({backgroundImage:function(){return{base:{drawOrder:1,height:197,name:"backgroundImage",width:s}}},bottomContainer:function(){return{base:{drawOrder:3,height:23,layout:{align:"right",layout:"horizontal"},name:"bottomContainer",padding:{left:5},width:343,y:170}}},bottomGradient:function(){return{base:{backgroundImage:(0,r.i)("84p+halign=stretch","postPlay"),drawOrder:2,height:102,name:"bottomGradient",width:s,y:98}}},durationContainer:function(){return{base:{layout:{align:["right"],layout:"horizontal"},name:"durationContainer",width:85}}},durationText:function(){return{base:{maxWidth:93,name:"durationText",textStyle:{align:"center-vertical",color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:16,truncateEnd:!0,weight:(a||(a=n("pBAo"))).NORMAL_WEIGHT}}}},focusRing:function(){return{base:{backgroundImage:(0,r.i)("Evr+halign=center+valign=center","postPlay"),drawOrder:4,height:212,name:"focusRing",width:365,y:56}}},greyBox:function(){return{base:{color:{a:230,b:51,g:51,r:51},height:23,layout:{layout:"horizontal"},maxWidth:89,name:"greyBox",padding:{left:5,right:6}}}},iconContainer:function(){return{base:{height:23,layout:{align:["center-vertical"],layout:"vertical"},name:"iconContainer"}}},imageTextContainer:function(){return{base:{height:197,name:"imageTextContainer",width:s,y:62}}},playIcon:function(){return{base:{backgroundImage:(0,r.i)("5Ti+halign=center+valign=center","postPlay"),height:12,name:"playIcon",width:10},isRtl:{true:{y:7}}}},titleText:function(){return{base:{name:"titleText",textStyle:{align:"left",color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:18,truncation:{position:"end"},weight:(a||(a=n("pBAo"))).NORMAL_WEIGHT},width:250}}},topText:function(){return{base:{height:60,padding:{bottom:5},textStyle:{align:"bottom left",color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,lineHeight:27,maxLines:2,name:"topTitle",size:20,truncateEnd:!0,weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0},width:s}}},verticalContainer:function(){return{base:{height:260,name:"verticalContainer",width:s,x:8}}}})},"8icE":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.Wallpaper=void 0
var o,a=n("igsZ"),r=n("eNcy"),l=n("oM/y"),s=n("rV+t"),u=(0,r.s)("Widget","imageAndVignetteContainer",{name:"imageAndVignetteContainer"},!1),d=(0,r.s)(s.Image,"postPlay-image",{name:"postPlay-image",smoothScale:!0},!1),c=(0,l.i)("3FM+halign=stretch","postPlay")
function h(e){return(0,a.j)(u,{children:[(0,a.j)(d,e,null,null),(0,a.j)(s.Frame,{__proto__:e,align:"bottom",frameImage:c},null,null)]},null,null)}t.Wallpaper=(0,s.makeWallpaper)((function(){return(0,s.viewFactory)({config:{defaultImage:{height:513,url:"",width:912},numberOfImages:2},Image:h,stylesheet:(void 0===o?o=i(n("+e9Q")):o).default})}))},"93Qs":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),l=n("eNcy"),s=n("/P98"),u=i(n("fY+Z"))
t.default=(0,s.memo)((0,u.default)((function(e){var t=e.buttonType,i=e.defaultFocus,l=e.disabled,u=e.effectParams,c=e.entered,h=void 0!==c&&c,f=e.entityType,p=e.focusKey,g=e.focused,m=e.item,y=m.disableTooltips,v=m.itemContext,b=m.onShowFirstRatingModal,S=m.onUserInteraction,x=m.videoId,_=e.name,w=e.onFocused,P=e.onRated,I=e.onThumbsAnimationComplete,T=e.opacity,C=e.prioritizeStoreForThumbs,R=e.rect,E=e.unstable_effect,k=(0,(o||(o=n("agVJ"))).useEntered)(p,h),A=(0,(o||(o=n("agVJ"))).useFocused)(p,g)
return(0,s.useEffect)((function(){null==w||w(k)}),[k,w]),(0,r.j)(d,{children:(0,r.j)((a||(a=n("O4e8"))).ThumbRating,{buttonType:t,defaultFocus:i,disabled:l,entityType:f,focused:A,isTooltipEnabled:!y,itemContext:v,maxWidth:400,onRated:P,onShowFirstRatingModal:b,onThumbsAnimationComplete:I,onUserInteraction:S,prioritizeStoreForThumbs:C,videoId:x},null,null),effectParams:u,focused:A,focusKey:p,height:null==R?void 0:R.height,name:_,opacity:T,unstable_effect:E,width:null==R?void 0:R.width,x:null==R?void 0:R.x,y:null==R?void 0:R.y},null,null)})),(function(e,t){return e.disabled===t.disabled&&e.entered===t.entered&&e.focused===t.focused&&e.focusKey===t.focusKey&&e.onFocused===t.onFocused&&e.onRated===t.onRated&&e.opacity===t.opacity&&e.unstable_effect===t.unstable_effect&&e.effectParams===t.effectParams}))
var d=(0,l.s)("Focusable","MenuButton",{clip:!1,height:function(e){return e.height},ignorePointer:!0,name:function(e){return e.name},opacity:function(e){return e.opacity},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!1)},"9qpt":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a=n("oM/y"),r=i(n("Hy99"))
t.default=(0,r.default)({background:function(){return{base:{layout:"horizontal",layoutSpacing:10,name:"background",sendRenderProperties:!0}}},end:function(){var e={backgroundImage:(0,a.i)("t67","chrome")},t={backgroundImage:(0,a.i)("PPF","chrome")}
return{base:{backgroundImage:(0,a.i)("6GL","chrome"),name:"right-cap",rect:{height:65,width:20}},buttonVisualState:{disabled:{opacity:.5}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:e,true:t}},pressed:{isRtl:{false:e,true:t}}}},isRtl:{true:{backgroundImage:(0,a.i)("R99","chrome")}}}},middle:function(){var e=(0,a.i)("XoU+halign=stretch","chrome"),t=(0,a.i)("0Ef+halign=stretch","chrome"),i={backgroundImage:e,textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray800}}
return{base:{backgroundImage:t,layout:{align:["center-horizontal","center-vertical"],layout:"horizontal"},layoutStretch:!0,name:"center",rect:{height:65},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200}},buttonVisualState:{disabled:{opacity:.5},highlighted:i,pressed:i}}},start:function(){var e={backgroundImage:(0,a.i)("PPF","chrome")},t={backgroundImage:(0,a.i)("t67","chrome")}
return{base:{backgroundImage:(0,a.i)("R99","chrome"),name:"left-cap",rect:{height:65,width:20}},buttonVisualState:{disabled:{opacity:.5}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:e,true:t}},pressed:{isRtl:{false:e,true:t}}}},isRtl:{true:{backgroundImage:(0,a.i)("6GL","chrome")}}}}})},A1ul:function(e,t,n){t.__esModule=!0,t.default=void 0,t.default=function(){var e=n("aovB").default(),t=(0,n("IcoN").default)({stylesheet:n("23ow").default}),i=n("H3EM").default(),o=n("Zu1v").default(),a=n("L1Nw").default
return(0,n("aDPN").default)({postPlayRows:{1:i,3:i,default:i},SeasonRenewal:a,stylesheet:o,TitleLogo:t,VideoReturn:e})}},B5Yv:function(e,t,n){t.__esModule=!0,t.default=function(){var e=n("fgiA").default(),t=n("VgeG").default({}),i=n("vIYF").default({enableMetaInfoBar:!0})
return n("KOf1").default({AutoPlayCountdownText:t,Bob:i,itemArea:{height:131,width:233},rowSpacing:10,stylesheet:e})}},BDKE:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,b=e.ActionButton,S=e.ActionLabel,x=e.AutoPlayCountdownText,_=e.Button,w=e.FocusRing,P=e.stylesheet
function I(e,t){this.props.executeAction({action:e},t)}function T(e){var t=this
return void 0===e&&(e=[]),e.map((function(e,n){var i=e.displayText,o=e.name,a="actionButton-"+(n+1)
return(0,f.j)(b,{accessibilityText:i,children:(0,f.j)(S,{name:o+"-label",rect:{},text:i},"label",null),focusKey:a,name:o,onSubmit:function(n){t.executeAction(e,n),n.stopPropagation()},rect:{},submitKey:y},a,null)}))}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.buildActionButtons=T.bind(n),n.executeAction=I.bind(n),n}(0,p.default)(t,e)
var o=t.prototype
return o.componentDidUpdate=function(e){0!==e.itemIndex&&this.props.onChangeItemIndex(0)},o.render=function(){var e=this,t=this.props,o=t.actions,p=t.availabilityDateMessaging,g=t.boxartAction,b=void 0===g?{}:g,S=t.boxshot,I=t.countdown,T=t.focused,C=t.name,R=t.newEpisodeBadge,E=t.postPlayExperience,k=void 0===E?{}:E,A=t.rect,M=t.synopsis,O=t.synopsisMaxLines,W=t.title,B=P.resolve(this.context),D=function(e){void 0===e&&(e={})
var t=(e.boxshot||{}).rect,n=void 0===t?{}:t,i=(e.focusRing||{}).rect,o=void 0===i?{}:i,a={height:o.height,width:o.width,x:n.x+o.x,y:n.y+o.y},r={height:n.height,width:n.width,x:-o.x,y:-o.y}
return{focusRing:{height:o.height,width:o.width,x:0,y:0},inner:r,outer:a}}(B),F=this.buildActionButtons(o),j={availabilityDateMessaging:p,newEpisodeBadge:R,synopsis:M,texttospeech:this.props.texttospeech,title:W},V=k.items,L=(void 0===V?[]:V)[0]||{},N=L.delivery,H=L.maturityIcon,U=L.maturityRating,q=L.year
return(0,f.j)("Widget",{children:[(0,f.j)(_,{__proto__:j,children:[(0,f.j)((void 0===d?d=i(n("c55V")):d).default,{image:S,name:"boxshot",rect:D.inner,text:b.displayText},"boxshot",null),(0,f.j)(w,{name:"focusRing",rect:D.focusRing},"focusRing",null)],focused:T,focusKey:C,name:"boxshot-button",onSubmit:function(t){e.executeAction(b,t),t.stopPropagation()},rect:D.outer,submitKey:y},"boxshot-button",null),(0,f.j)("Widget",{children:[!!W&&(0,f.j)((void 0===c?c=i(n("43dx")):c).default,{children:W,newEpisodeBadge:R,staticStyle:B.horizontalContainer,styles:B},null,null),I&&(0,f.j)(x,(0,h.default)({staticStyle:B.titleLine2},I),"auto-play-countdown",null),(0,f.j)((s||(s=n("1zeB"))).Synopsis,{fontSize:(s||(s=n("1zeB"))).FontSize.Small,maxLines:O,padding:{top:2},synopsis:M,width:(s||(s=n("1zeB"))).Width.Compact},null,null),(0,f.j)((void 0===r?r=i(n("11/r")):r).default,{children:p,staticStyle:B.availabilityDateMessaging},"availability-date-messaging",null),(0,f.j)((a||(a=n("djiD"))).HStack,{children:[(0,f.j)("Widget",{__update_style__:m,staticStyle:B.releaseYear,style:{layoutSpacing:12,text:q}},"year",null),(0,f.j)((l||(l=n("Htb5"))).ContentRating,{layoutSpacing:12,maturity:U,maturityIcon:H},"rating",null),N&&(0,f.j)((void 0===u?u=i(n("0bPy")):u).default,{formats:N,height:24,layoutSpacing:12},"formats",null)],halign:"start",height:40,name:"metaInfoBarContainer",padding:v,valign:"center",width:A.width},null,null),(0,f.j)("Widget",{children:F,staticStyle:B.buttonWrapper},"button-wrapper",null)],staticStyle:B.detailsContainer},"details",null)],name:C,staticStyle:{name:C,rect:A}},"container",null)},t}(g.Component)).contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,t.displayName="OneUpRow",t}
var o,a,r,l,s,u,d,c,h=i(n("siCl")),f=n("igsZ"),p=i(n("VbXa")),g=n("/P98"),m=["layoutSpacing","text"],y=["key.enter","key.play","key.start"],v={bottom:10,top:10}},CT4n:function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=t.BUTTONS_CONTAINER=void 0
var r=a(n("dKCW")),l=t.BUTTONS_CONTAINER={buttonHeight:42,height:400,offset:{horizontal:74,vertical:82},width:706}
t.default=(0,r.default)().extend({boxshot:function(){return{base:{height:280,name:"boxshot",width:366,x:73,y:375}}},buttonsContainer:function(){var e=l.width
return{base:{layout:{align:["right"],layout:"horizontal"},rect:{height:l.height,width:e,x:(o||(o=n("8J/X"))).VIEWPORT_WIDTH-(e+l.offset.horizontal),y:(o||(o=n("8J/X"))).VIEWPORT_HEIGHT-(l.buttonHeight+l.offset.vertical)}}}},buttonsContainerKidsRewatch:function(){return{base:{layout:{align:["left"],layout:"horizontal"},name:"kidsRewatchContainer",rect:{height:l.height,width:(o||(o=n("8J/X"))).VIEWPORT_WIDTH-180,x:90,y:(o||(o=n("8J/X"))).VIEWPORT_HEIGHT-(l.buttonHeight+l.offset.vertical)}}}},container:function(){return{base:{color:(i||(i=n("D+c2"))).FoundationalColors.Transparent,rect:{height:(o||(o=n("8J/X"))).VIEWPORT_HEIGHT,width:(o||(o=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},logo:function(){return{base:{name:"logo",x:706,y:380}}},video:function(){return{base:{height:(o||(o=n("8J/X"))).VIEWPORT_HEIGHT,width:(o||(o=n("8J/X"))).VIEWPORT_WIDTH,x:(o||(o=n("8J/X"))).VIEWPORT_X,y:(o||(o=n("8J/X"))).VIEWPORT_Y}}}})},D3YZ:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("oM/y"),l=i(n("Hy99"))
t.default=(0,l.default)({autoplay:function(){return{base:{name:"autplay",rect:{height:34,width:701},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,typography:{fontFeatures:"-kern"},weight:"normal"}},fontHeight:{tall:{rect:{height:36},textStyle:{size:20}}}}},autoplayTitle:function(){return{base:{name:"autoplayTitle",rect:{height:34,width:701},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,truncation:{position:"end"},weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{height:36},textStyle:{size:20}}}}},bob:function(){return{base:{name:"twoUpBob",rect:{height:135,width:640,x:19,y:312}}}},button:function(){return{base:{name:"button"}}},focusRing:function(){var e=(0,r.i)("zs5","postPlay")
return{base:{backgroundImage:e,name:"focus-ring",rect:{height:e.sourceRect.height,width:e.sourceRect.width,x:-2,y:-2}}}},rowContainer:function(){return{base:{name:"listRow",rect:{height:230,width:737,x:0,y:89}}}},rowHeader:function(){return{base:{flexLayout:{direction:"column",justifyContent:"end",padding:2},name:"rowHeader",rect:{height:90,width:825,x:18,y:12}}}},title:function(){return{base:{name:"title",rect:{height:34,width:701},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,truncation:{position:"end"},weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{height:36},textStyle:{size:20}}}}}})},DKQB:function(e,t){t.__esModule=!0,t.parseBoolean=function(e,t){switch(e+""){case"true":return!0
case"false":return!1
default:return t||!1}}},DedX:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.animationFactory,d=e.escapeForRichText,c=e.resolveButtonStyles,g=void 0===c?(void 0===o?o=i(n("wNCT")):o).default:c,m=e.stylesheet,y=h(m,p)
function v(e,n){var i=this.state,o=i.animation,a=i.animationKey,r=i.opacity,l=e.opacity,s={}
t&&(s=t(this.state,e,n))
var u=s,d=u.animation,c=u.animationKey,h=u.opacity,f=void 0!==l?l:h;(d!==o||c!==a||void 0!==f&&f!==r)&&this.setState({animation:d,animationKey:c,opacity:f})}var b=function(e){function t(t){var n=e.call(this,t)||this
return n.setStateFromProps=v.bind(n),n.state={animation:t.animation,animationKey:t.animationKey,opacity:t.opacity},n}(0,l.default)(t,e)
var n=t.prototype
return n.UNSAFE_componentWillMount=function(){this.setStateFromProps(this.props,this.context)},n.UNSAFE_componentWillReceiveProps=function(e,t){this.setStateFromProps(e,t)},n.render=function(){var e=this.context,t=this.props,n=this.state,i=t.name,o=t.rect,a=t.text,l=t.visible,s=n.animation,u=n.animationKey,c=n.opacity,h=g(y,e,t),f={name:i,rect:o,text:d?d(a):a,visible:l}
return void 0!==c&&(f.opacity=c),(0,r.j)("Widget",{animation:s,animationKey:u,staticStyle:h,style:f},"label",null)},t}(u.Component)
return b.displayName="ButtonLabel",b.contextTypes=(0,a.default)({},s.stylesheetContextTypes,f),b.defaultProps={visible:!0},b}
var o,a=i(n("siCl")),r=n("igsZ"),l=i(n("VbXa")),s=n("s6u8"),u=n("/P98"),d=i(n("17x9")),c=i(n("N9Ua")),h=(0,s.getStylesheetDefaultsResolver)(),f=c.default.required
function p(){return{base:{name:"label"}}}d.default.bool,d.default.number,d.default.object,d.default.string},Dykz:function(e,t){t.__esModule=!0,t.default=function(e){var t=e.ancestorVideoId
return{disableTooltips:e.disableTooltips,itemContext:e.itemContext,onShowFirstRatingModal:e.onShowFirstRatingModal,videoId:t}}},EPny:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("oM/y"),a=i(n("Hy99"))
t.default=(0,a.default)({preloads:function(){var e=(0,o.i)("3FM+halign=stretch","postPlay"),t=(0,o.i)("OJW","postPlay"),n=(0,o.i)("gMo","postPlay")
return{base:{urls:[e.url.url,t.url.url,n.url.url]}}}})},"F4T+":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("DedX")),a=i(n("lO6x"))
t.default=(0,o.default)({stylesheet:a.default})},G9dF:function(e,t,n){var i,o
t.__esModule=!0,t.default=void 0,t.default=function(){return(0,n("Hy99").default)({button:function(){return{base:{name:"button"}}},buttonWrapper:function(){return{base:{layout:{align:["right"],layout:"horizontal"},name:"button-wrapper",padding:{top:10},rect:{height:52}}}},detailsContainer:function(){return{base:{layout:{align:["top","right"],layout:"vertical"},name:"details-container",rect:{height:254,width:500,x:0,y:0}}}},titleLine2:function(){return{base:{name:"title-line-2",padding:{bottom:0,left:0,right:0,top:2,wrap:0},textStyle:{align:"right",color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:24,weight:(o||(o=n("pBAo"))).NORMAL_WEIGHT,wrap:!0},width:500}}}})}},GO3H:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=o(n("Q2Em")),r=o(n("Lk1/"))
t.default=new r.default({historyState:function(){return{initialStateOfPlayback:void 0}},payload:{PostPlay:a.default},rememberFocusPath:!1,routeWillEnter:function(e){return(i||(i=n("agVJ"))).actions.initializeFocus({path:e.pathname})}})},H3EM:function(e,t,n){t.__esModule=!0,t.default=function(){var e=n("QvWg").default,t=n("VgeG").default({}),i=n("uuge").default,o=n("4+XB").default,a=n("G9dF").default()
return o({ActionButton:i({autoFocus:!0,hasFocusRing:!1,layoutSpacing:8,showUnfocusedRing:!0,textAlign:"center-horizontal center-vertical",useLowPerformanceStack:!0}),ActionLabel:e,AutoPlayCountdownText:t,stylesheet:a})}},ICKM:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,h=e.displayName,f=void 0===h?"ThreePartButton":h,p=e.shouldComponentUpdate,g=e.stylesheet,m=c
return g&&(m=g.withDefaults(c)),(0,(void 0===a?a=i(n("z3Fz")):a).default)({displayName:f,render:function(){var e=this.context,t=this.props,a=this.state.visualState,c=t.children,h=t.disabled,f=t.flexLayout,p=t.focusKey,g=t.focused,y=t.margin,v=t.minWidth,b=t.mirror,S=t.name,x=t.opacity,_=t.rect,w=t.style,P=void 0===w?{}:w,I=t.text,T=t.visible,C=(0,(void 0===r?r=i(n("wNCT")):r).default)(m,e,{buttonVisualState:a}),R=C.background,E=C.end,k=C.middle,A=C.start,M=(0,s.default)({},P)
return void 0!==S&&(M.name=S),_&&(M.rect=_),!0!==T&&!1!==T||(M.visible=T),void 0!==y&&(M.margin=y),void 0!==x&&(M.opacity=x),void 0!==f&&(M.flexLayout=f),void 0!==b&&(M.mirror=b),(0,l.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:d,children:[(0,l.j)("Widget",{staticStyle:A},"start",null),(0,l.j)("Widget",{__update_style__:u,children:c,staticStyle:k,style:{minWidth:v,text:I}},"middle",null),(0,l.j)("Widget",{staticStyle:E},"end",null)],disabled:h,focused:g,focusKey:p,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:R,style:M},"outer",null)},shouldComponentUpdate:p,UNSAFE_componentWillReceiveProps:t})}
var o,a,r,l=n("igsZ"),s=i(n("siCl")),u=["minWidth","text"],d=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],c={background:function(){return{base:{name:"button"}}},end:function(){return{base:{name:"end"}}},middle:function(){return{base:{name:"middle"}}},start:function(){return{base:{name:"start"}}}}},IcoN:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),l=i(n("VbXa")),s=n("/P98"),u=["name","rect"],d=["text"],c=["text"],h=["image"]
t.default=function(e){var t,f=e.stylesheet,p=void 0===f?(void 0===a?a=i(n("EPny")):a).default:f
return t=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.context,t=this.props,n=t.altText,i=t.image,o=t.name,a=t.rect,l=t.supplementalText,s=p.resolve(e),f=[]
return i?f.push((0,r.j)("Widget",{__update_style__:h,staticStyle:s.image,style:{image:i}},"image",null)):n&&f.push((0,r.j)("Widget",{__update_style__:c,staticStyle:s.altText,style:{text:n}},"altText",null)),l&&f.push((0,r.j)("Widget",{__update_style__:d,staticStyle:s.supplementalText,style:{text:l}},"supplementalText",null)),(0,r.j)("Widget",{__update_style__:u,children:f,staticStyle:s.container,style:{name:o,rect:a}},"container",null)},t}(s.Component),t.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,t.displayName="PostPlayLogo",t}},J3Pr:function(e,t,n){t.__esModule=!0,t.HAS_THUMB_RATED_KEY=void 0,t.getThumbRateButtonSpeech=function(e,t,i){var r=e.label
void 0===i&&(i={})
var l=i,s=l.ratedThumbsDown,u=l.ratedThumbsUp,d=t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_UP||t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_DOWN
return(0,a.j)("speak",{children:[(0,a.j)("s",{children:d&&(t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_UP?u:s)},null,null),(0,a.j)("s",{children:r[t]},null,null)]},null,null)},t.hasThumbRatedBefore=function(){return(i||(i=n("L0Ih"))).profileStorage.getItem(r)},t.setHasThumbRatedBefore=function(e){void 0===e&&(e=!0),(i||(i=n("L0Ih"))).profileStorage.setItem(r,e)}
var i,o,a=n("igsZ"),r=t.HAS_THUMB_RATED_KEY="USER_HAS_THUMB_RATED"},"K/XY":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("agVJ"),a=n("e9tE"),r=n("NEBH"),l=i(n("rX0/"))
t.default=(0,r.compose)(o.withFocusPath,(0,a.connect)((function(e,t){return{interactive:o.selectors.isInteractive(e,t)}})),l.default)},KOf1:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,y=e.AutoPlayCountdownText,v=e.Bob,b=e.itemArea,S=e.nrdp,x=void 0===S?globalThis.nrdp:S,_=e.queryParams,w=void 0===_?(void 0===l?l=i(n("Yowe")):l).default:_,P=e.rowSpacing,I=e.stylesheet,T=(0,c.default)((0,(void 0===a?a=i(n("Wn1D")):a).default)({stylesheet:I.button}))
function C(){var e,t,n=this.props,i=n.executeAction,o=n.itemIndex,a=n.postPlayExperience,r=x.mono(),l=null!=(e=null==a||null==(t=a.items)||null==(t=t[o])||null==(t=t.actions)?void 0:t[0])?e:d.noop,s={}
"playTrailer"===l.name&&"play"===l.type&&(s.isUIAutoPlay=!0),i({action:l,initialStateOfPlayback:s,isPostPlayAutoPlay:!0,playRequestTime:r})}function R(e,t){this.props.executeAction({action:e},t)}function E(e){var t=e.focusKey,o=e.focused,a=e.key,l=e.listItem,u=l.data,d=l.rect,c=u.assets.DISPLAY_ART,h={height:d.height,width:d.width,x:0,y:0},f=u.actions[0],p=this.executeAction.bind(this,f)
return(0,s.j)(T,{children:(0,s.j)((void 0===r?r=i(n("c55V")):r).default,{image:c,name:"boxshot-"+a,rect:h,text:f.displayText},"boxshot",null),focused:o,focusKey:t,name:"button-"+a,onSubmit:function(e){p(e),e.stopPropagation()},rect:d,submitKey:m},a,null)}var k=function(e){function i(t){var n=e.call(this,t)||this
return n._childFactory=E.bind(n),n.executeAction=R.bind(n),n.autoPlayHighlightedItem=C.bind(n),n}return(0,u.default)(i,e),i.prototype.render=function(){var e,i=this.context,o=this.props,a=o.active,r=o.enableAutoplay,l=o.focused,u=o.itemIndex,d=o.name,c=o.onChangeItemIndex,h=o.postPlayExperience,m=o.rect,S=I.resolve(i),x=h.items[u]||{},_=h.items,T=h.mainTitle,C=h.requestId,R=T||{},E=R.text,k=R.type,A=[],M=x.ancestorTitle,O=x.title,W=w.forcePostPlayAutoplay,B=w.postPlayCountdown
if(e="text"===k?{text:E,visible:!0}:"highlighted"===k?{text:M||O,visible:!0}:{text:"",visible:!1},"false"!==W&&r){A.push((0,s.j)("Widget",{staticStyle:S.autoplayTitle,style:e},"autoplayTitle",null))
var D="number"==typeof B?B:h.autoplaySeconds
A.push((0,s.j)(y,{active:a,countdownFrom:D,countdownId:C,format:h.autoplayFormat,onCountdownCompleted:this.autoPlayHighlightedItem,staticStyle:S.autoplay},"auto-play-countdown",null))}else if("true"===W){A.push((0,s.j)("Widget",{staticStyle:S.autoplayTitle,style:e},"autoplayTitle",null))
var F="number"==typeof B?B:p
A.push((0,s.j)(y,{active:a,countdownFrom:F,countdownId:C,format:g,onCountdownCompleted:this.autoPlayHighlightedItem,staticStyle:S.autoplay},"auto-play-countdown",null))}else"text"!==k&&"highlighted"!==k||A.push((0,s.j)("Widget",{staticStyle:S.title,style:e},"title",null))
var j=S.rowContainer.rect,V={height:j.height-38,width:j.width-38,x:19,y:19}
return void 0===t&&(t=n("vbeY").default({itemArea:b,rowSpacing:P,stylesheet:I})),(0,s.j)("Widget",{__update_style__:f,children:[(0,s.j)("Widget",{children:A,staticStyle:S.rowHeader},"rowHeader",null),(0,s.j)(t,{children:this._childFactory,dataLength:_.length,focused:l,focusKey:"row",index:u,items:_,layoutRect:V,name:"row",onFocusedItemChange:c,onIndexChange:c,rect:j,selectIndexOnFocus:0},"row",null),(0,s.j)(v,{item:x,name:S.bob.name,rect:S.bob.rect},"bob",null)],style:{name:d,rect:m}},"container",null)},i}(h.Component)
return k.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,k.displayName="PostPlayRowWithOrnaments",k}
var o,a,r,l,s=n("igsZ"),u=i(n("VbXa")),d=n("BHy0"),c=i(n("T3qH")),h=n("/P98"),f=["name","rect"],p=15,g="{seconds, plural, =0 {DEBUG AUTOPLAY: 0} =1 {DEBUG AUTOPLAY: 1} other {DEBUG AUTOPLAY: #}}",m=["key.enter","key.play","key.start"]},Kfpz:function(e,t,n){t.__esModule=!0,t.default=function(e,t){var o=void 0===t?{showFocusedRing:!0}:t,r=o.filled,l=void 0!==r&&r,s=o.showFocusedRing,u=void 0===s||s,d=o.showUnfocusedRing,c=void 0!==d&&d,h={url:{url:void 0,visible:!1}},f=function(e){return e?{color:(i||(i=n("D+c2"))).FoundationalColors.Black}:(i||(i=n("D+c2"))).FoundationalColors.White}
return e.extend({end:function(e){var t=u||c?a():{},n={backgroundImage:u?t.focusedRight:void 0},i={backgroundImage:u?t.focusedLeft:void 0}
if(l){var o=f(!0),r=f(!1)
n.textStyle=o,n.color=r,i.textStyle=o,i.color=r}return{base:{backgroundImage:c?t.unfocusedRight:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:n,true:i}},pressed:{isRtl:{false:n,true:i}}}},isRtl:{true:{backgroundImage:c?t.unfocusedLeft:h}}}},middle:function(e){var t=u||c?a():{},n={backgroundImage:u?t.focusedCenter:void 0}
if(l){var i=f(!0),o=f(!1)
n.textStyle=i,n.color=o}return{base:{backgroundImage:c?t.unfocusedCenter:h,cache:c,rect:{height:42},textStyle:{size:20,weight:"normal"}},buttonVisualState:{highlighted:n,pressed:n}}},start:function(e){var t=u||c?a():{},n={backgroundImage:u?t.focusedLeft:void 0},i={backgroundImage:u?t.focusedRight:void 0}
if(l){var o=f(!0),r=f(!1)
n.textStyle=o,n.color=r,i.textStyle=o,i.color=r}return{base:{backgroundImage:c?t.unfocusedLeft:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:n,true:i}},pressed:{isRtl:{false:n,true:i}}}},isRtl:{true:{backgroundImage:c?t.unfocusedRight:h}}}}})}
var i,o=n("oM/y")
function a(){return{focusedCenter:(0,o.i)("JkR+halign=stretch","button"),focusedLeft:(0,o.i)("wxV","button"),focusedRight:(0,o.i)("A3M","button"),unfocusedCenter:(0,o.i)("F7C+halign=stretch","button"),unfocusedLeft:(0,o.i)("yag","button"),unfocusedRight:(0,o.i)("MFy","button")}}},L1Nw:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("igsZ"),a=i(n("VgeG")),r=i(n("mxvP")),l=i(n("drFt")),s=i(n("rbN4")),u=i(n("F4T+")),d=i(n("fVs5")),c=(0,a.default)({}),h=(0,r.default)({AutoPlayCountdownText:c,Button:s.default,Label:u.default,PlayIcon:function(e){return(0,o.j)("Widget",e,null,null)},stylesheet:d.default})
t.default=(0,l.default)({CountdownButton:h,stylesheet:d.default})},LchZ:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=(0,(void 0===a?a=i(n("B5Yv")):a).default)(e),u=function(e){function n(){return e.apply(this,arguments)||this}return(0,l.default)(n,e),n.prototype.render=function(){var e=this.props
return(0,r.j)(t,e,null,null)},n}(s.Component)
return u.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,u.displayName="DefaultThreeUpRow",u}
var o,a,r=n("igsZ"),l=i(n("VbXa")),s=n("/P98")},LhTm:function(e,t){t.__esModule=!0,t.default=function(e,t,n,i){void 0===n&&(n=!1)
var o=e.groups,a=e.items,r="number"==typeof i,l=r?o&&!!o[i]&&!!o[i].items[t]:a&&!!a[t],s=e&&e.assets&&!!e.assets.BACKGROUND,u=e&&e.useStaticBackground
if(l&&!u){var d=r&&o?o[i].items[t]:a[t],c=d.assets&&!!d.assets.BACKGROUND,h=e.itemsInitialIndex,f=e.promotedVideoId
return s&&f&&t===h&&!n?e.assets.BACKGROUND:c?d.assets.BACKGROUND:{}}return s?e.assets.BACKGROUND:{}}},M8Hl:function(e,t,n){t.__esModule=!0,t.default=void 0
var i,o,a=n("oM/y")
t.default=function(){var e=n("Hy99").default,t=400
return e({availabilityDateMessaging:function(){return{base:{height:25,layoutSpacing:0,name:"availabilityDateMessaging",textStyle:{color:{a:255,b:101,g:101,r:101},size:18,weight:(o||(o=n("pBAo"))).NORMAL_WEIGHT}}}},boxshot:function(){return{base:{rect:{height:192,width:342,x:20,y:200}}}},button:function(){return{base:{name:"button"}}},buttonWrapper:function(){return{base:{layout:{align:["left"],layout:"horizontal"},layoutSpacing:0,name:"button-wrapper",rect:{height:42,width:432}}}},detailsContainer:function(){return{base:{layout:{align:["top"],layout:"vertical"},name:"details-container",rect:{height:264,width:t,x:382,y:200}}}},episodeBadge:function(){return{base:{color:{b:25,g:19,r:206},maxHeight:27,name:"episodeBadge",padding:{bottom:4,left:8,right:8,top:4},textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:14,weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT},valign:"center"}}},focusRing:function(){var e=(0,a.i)("6tP","postPlay")
return{base:{ignorePointer:!0,name:"focus-ring",rect:{height:e.sourceRect.height,width:e.sourceRect.width,x:-2,y:-2}},buttonVisualState:{highlighted:{backgroundImage:e},pressed:{backgroundImage:e}}}},horizontalContainer:function(){return{base:{layout:{layout:"horizontal"},name:"horizontalContainer",width:t}}},metaInfoBarContainer:function(){return{base:{layout:{align:["left","center-vertical"],layout:"horizontal"},name:"metaInfoBarContainer",padding:{top:10},rect:{height:40}}}},releaseYear:function(){return{base:{height:30,layoutSpacing:12,name:"release-year",opaque:!0,textStyle:{align:["left","center-vertical"],color:(i||(i=n("D+c2"))).FoundationalColors.Gray400,size:16,weight:(o||(o=n("pBAo"))).NORMAL_WEIGHT}},kids:{default:{name:"release-year",padding:{bottom:3},textStyle:{size:18}}}}},titleLine1:function(){return{base:{layoutSpacing:8,name:"title-line-1",textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:20,truncateEnd:!0,truncation:{ellipsis:"...",position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!1},width:t}}},titleLine2:function(){return{base:{name:"title-line-2",padding:{bottom:0,left:0,right:0,top:2,wrap:0},textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:20,weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0},width:t}}},videoFormats:function(){return{base:{layoutSpacing:12,rect:{height:24}}}}})}},Mb8e:function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("BHy0"),o=n("DKQB")
function a(e,t,n){void 0===e&&(e={}),void 0===t&&(t={})
var a=t,r=a.executeAction,l=void 0===r?i.noop:r,s=a.itemIndex,u=void 0===s?0:s,d=a.postPlayExperience,c=void 0===d?{}:d,h=e,f=h.forcePostPlayAutoplay,p=h.postPlayCountdown,g=t.enableAutoplay&&c.autoplay
if((0,o.parseBoolean)(f,g)){var m=c.items,y=((void 0===m?[]:m)[u]||{}).actions,v=(void 0===y?[]:y)[0]||i.noop,b=function(){var e={}
v&&"playTrailer"===v.name&&"play"===v.type&&(e.isUIAutoPlay=!0),l({action:v,initialStateOfPlayback:e,isPostPlayAutoPlay:!0,playRequestTime:n.mono()})}
return g?{active:t.active,countdownFrom:p||c.autoplaySeconds,countdownId:c.requestId,format:c.autoplayFormat,onCountdownCompleted:b}:{countdownFrom:p||15,format:"{seconds, plural, =0 {DEBUG AUTOPLAY: 0} =1 {DEBUG AUTOPLAY: 1} other {DEBUG AUTOPLAY: #}}",onCountdownCompleted:b}}}t.default=function(e,t){return function(n){var i=n.postPlayExperience,o=void 0===i?{}:i,r=o.items,l=void 0===r?[]:r,s=o.mainTitle,u=void 0===s?{}:s,d=u.text,c=u.type,h=l[0]||{},f=h.actions,p=void 0===f?[]:f,g=h.assets,m=void 0===g?{}:g,y=h.availabilityDateMessaging,v=h.newEpisodeBadge,b=h.rating,S=void 0===b?{}:b,x=h.synopsis,_=h.thumbRating,w=void 0===_?{}:_,P=h.title,I="text"===c||"highlighted"===c,T="highlighted"===c?P:d,C=y
return{actions:p.slice(1),availabilityDateMessaging:C,boxartAction:p[0],boxshot:m.DISPLAY_ART,countdown:a(e,n,t),newEpisodeBadge:I?v:void 0,rating:S,synopsis:x,synopsisMaxLines:C?3:void 0,thumbRating:w,title:I?T:void 0}}}},MgfB:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("Hy99"))
t.default=(0,o.default)({listContainer:function(){return{base:{height:200,ignorePointer:!0,name:"listcontainer",width:302,x:0,y:0}}},mainContainer:function(){return{base:{height:200,ignorePointer:!0,width:302}}}})},"NA+s":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("oM/y"),a=i(n("Hy99"))
t.default=(0,a.default)({button:function(){return{base:{backgroundImage:(0,o.i)("OJW","postPlay"),name:"button"}}},focusRing:function(){return{base:{ignorePointer:!0,name:"focusRing"},buttonVisualState:{highlighted:{backgroundImage:(0,o.i)("DHQ","postPlay")}}}}})},NFSk:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({background:function(){return{base:{rect:{height:42}}}}})}},Ni4z:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=o(n("Hy99"))
t.default=(0,a.default)((function(){var e={textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.White}}
return{base:{grow:1,margin:{left:10},minWidth:70,name:"label",rect:{height:42},textStyle:{align:"left center-vertical",color:(i||(i=n("D+c2"))).FoundationalColors.Gray500,size:20,variant:"normal",weight:"normal",wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}}))},Q2Em:function(e,t,n){t.__esModule=!0,t.default=void 0
var i,o,a,r,l,s,u,d,c,h,f,p,g,m=(i=n("Zqpp").default,o=n("eJkE").default,a=n("nSaE").default,r=n("3gRI").default,l=n("VNvN").default,s=n("FJEu").default,u=n("tMLV").withGibbonFocusAndPlaybackCommandHandling,d=n("Ki15").default.onEnter,c=n("T3qH").default,h=n("ctEV").default,f=n("337X").default,p=(0,n("xNxB").compose)(f,i,r,o,h,c,l,s,u,a,d((function(e){var t=e.texttospeech
return t&&t.inPostPlay}))),g=n("j9Nx").default(),p(n("vii4").default({viewFactory:g})))
t.default=m},QvWg:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("DedX")),a=i(n("Ni4z"))
t.default=(0,o.default)({stylesheet:a.default})},"Ryb/":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,v=e.displayName,b=void 0===v?"FocusIndicator":v,S=e.hideOnBlur,x=void 0===S||S,_=e.stylesheet,w=e.useFlex,P=void 0!==w&&w,I=e.useFocusChildDimensions,T=void 0!==I&&I,C=p(_,m)
return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.state={savedFocusChildRect:t.focus.rect||null},n}(0,s.default)(t,e),t.getDerivedStateFromProps=function(e){return e.focus.rect?{savedFocusChildRect:e.focus.rect}:null}
var u=t.prototype
return u.shouldComponentUpdate=function(e){var t=this.props
return e.focus!==t.focus||e.offset!==t.offset||e.transition!==t.transition||e.opacityAnimation!==t.opacityAnimation||e.opacity!==t.opacity||e.visible!==t.visible||e.listItem!==t.listItem||e.visualState!==t.visualState||!(0,(void 0===a?a=i(n("kqHg")):a).default)(e.children,t.children)},u.render=function(){var e=this.context,t=this.props,a=this.state.savedFocusChildRect,s=g(C,e,t),u=s.rect||y,d=t.children,p=t.focus.rect,m=t.offset,v=void 0===m?u:m,b=t.opacity,S=t.opacityAnimation,_=t.visible&&(!!p||!p&&!x),w=p||_?p:a,I=v&&v.x||0,R=(w?w.x:0)+I,E=v&&v.y||0,k=(w?w.y:0)+E,A=T&&w&&w.width||u.width,M=T&&w&&w.height||u.height,O=t.transition,W=O&&O.animation
if(P)return W?(0,l.j)((void 0===o?o=i(n("VeTH")):o).default,{__update_handlers__:f,children:d,effectParams:t.effectParams,focusRingAnimation:W,hide:!_,imageSlices:s.imageSlices,onAnimationCompleted:t.onAnimationCompleted,rect:{height:M,width:A},unstable_effect:t.unstable_effect},"flex-focus-ring",null):(0,l.j)((void 0===o?o=i(n("VeTH")):o).default,{children:d,effectParams:t.effectParams,hide:!_,imageSlices:s.imageSlices,opacity:b,rect:{height:M,width:A,x:R,y:k},unstable_effect:t.unstable_effect},"flex-focus-ring",null)
var B=!0
if(W)return(0,l.j)("Widget",{__update_handlers__:h,__update_style__:c,animation:W,children:d,effectParams:t.effectParams,onAnimationCompleted:t.onAnimationCompleted,staticStyle:s,style:{height:M,ignorePointer:B,visible:_,width:A},unstable_effect:t.unstable_effect},"background",null)
var D={clip:!1,ignorePointer:B},F=(0,r.default)({},D,{height:M,opacity:b,visible:_,width:A,x:R,y:k})
return(0,l.j)("Widget",{animation:S,children:(0,l.j)("Widget",{children:d,style:D},null,null),effectParams:t.effectParams,staticStyle:s,style:F,unstable_effect:t.unstable_effect},"background",null)},t}(d.Component)).displayName=b,t.contextType=u.StylesheetContext,t.defaultProps={visible:!0},t}
var o,a,r=i(n("siCl")),l=n("igsZ"),s=i(n("VbXa")),u=n("s6u8"),d=n("/P98"),c=(i(n("17x9")),["height","ignorePointer","visible","width"]),h=["onAnimationCompleted"],f=["onAnimationCompleted"],p=(0,u.getStylesheetDefaultsResolver)(),g=(0,u.createAdditionalStylesResolver)(["visualState"])
function m(){return{base:{name:"focus-indicator"}}}var y={x:0,y:0}},SAhE:function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,r,l,s,u,d,c,h,f,p,g,m,y,v,b,S,x,_=o(n("siCl")),w=o(n("J4zp")),P=n("igsZ"),I=o(n("VbXa")),T=n("eNcy"),C=n("oM/y"),R=n("D+c2"),E=n("s6u8"),k=n("pBAo"),A=n("8J/X"),M=n("y2r0"),O=o(n("LpVm")),W=n("/P98"),B=i(n("17x9")),D=o(n("rkIG")),F=o(n("nMw6")),j=i(n("CT4n")),V=["visible"],L=["visible"],N=O.default.PLAYBACK_STATES,H=O.default.REPOSITION_TYPES,U=O.default.VIDEO_STATES,q="PostPlaySeamlessLayout",K=(0,T.s)("Widget","BackgroundCurtain",{color:function(e){return e.theme.Surface},drawOrder:-10,height:A.VIEWPORT_HEIGHT,width:A.VIEWPORT_WIDTH,y:A.VIEWPORT_Y},!0),G=(0,T.s)("Widget","BottomVignette",{backgroundImage:function(){return(0,C.i)("DK2+halign=stretch","postPlay")},drawOrder:-9,height:240,width:A.VIEWPORT_WIDTH,y:A.VIEWPORT_HEIGHT-240},!0),z=j.BUTTONS_CONTAINER.width,X=(0,T.s)("Widget","EpisodeCounterContainer",{height:45,layout:{align:["right","bottom"],layout:"horizontal"},width:z,x:A.VIEWPORT_WIDTH-(z+j.BUTTONS_CONTAINER.offset.horizontal),y:A.VIEWPORT_HEIGHT-(j.BUTTONS_CONTAINER.buttonHeight+j.BUTTONS_CONTAINER.offset.vertical)-45},!0),Z=(0,T.s)("Widget","episodeCounterLabel",{name:"episodeCounterLabel",padding:{bottom:10},text:function(e){return e.text},textStyle:{color:R.FoundationalColors.Gray200,size:20,variant:k.NORMAL_WEIGHT,weight:k.NORMAL_WEIGHT,wrap:!1}},!1),Y=F.default.getExperienceAutoPlay,J=F.default.getNextSeamlessSegmentId,Q=F.default.getPossibleSeamlessNextSegments,$=F.default.isInSeamlessCountdownWindow,ee=D.default.getSegmentById,te=D.default.withinDeltaOfSegmentEnd,ne=(0,T.s)("Widget","ButtonWrapper",{layoutSpacing:9,sendRenderProperties:!0},!1)
function ie(){var e=this.context.mdxPostPlay,t=(void 0===e?{}:e).registerActions
t&&t({nextEpisode:this.handleNextEpisodeSubmit,stopPostPlay:this.mdxStopPostPlay})}function oe(){var e=this.props,t=e.handleBackToBrowse,n=e.startedBeforeLogicalEnd,i=this.state.shouldDisplayLowerSkipCreditsButton
n&&i?this.handleViewCredits({}):t()}function ae(){var e=this.context.mdxPostPlay,t=(void 0===e?{}:e).unregisterActions
t&&t()}function re(){var e=this.state,t=(e.currentCreditsId,e.currentMainId),n=e.currentSegmentId,i=e.currentTime,o=e.nextMainId,a=e.playlist,r=e.runtime
if(a)switch(n){case t:var l=ee(a,t)
te({currentTime:i,delta:1.5,runtime:r,segment:l})?(this.routeOnSegmentStarted=o,this.routeOnSegmentStartedHandler=this.enterNextEpisode,this.routeOnSegmentStartedPlayRequestTime=nrdp.mono(),this.setState({nextSegmentId:o})):this.enterNextEpisode({isopOverrides:this.getNextMainIsopOverrides(),isPostPlayAutoPlay:!0})
break
case o:this.enterNextEpisode({isPostPlayAutoPlay:!0})
break
default:this.enterNextEpisode({isopOverrides:this.getNextMainIsopOverrides(),isPostPlayAutoPlay:!0})}else this.enterNextEpisode({isPostPlayAutoPlay:!0,withPlaylist:!1})}function le(){var e=(r||(r=n("Mmf2"))).consolidatedLogger.startSession("PlayNextCommand"),t=this.state,i=t.currentSegmentId,o=t.nextMainId
if(t.playlist)if(i!==o){var a=this.getNextMainIsopOverrides()
this.enterNextEpisode({isopOverrides:a})}else this.enterNextEpisode()
else this.enterNextEpisode({withPlaylist:!1});(r||(r=n("Mmf2"))).consolidatedLogger.endSession(e)}function se(){var e=this.state,t=e.nextMainId,n=e.playlist,i=ee(n,t),o=i.startTimeMs
return{currentSegmentId:t,currentTime:o>=0?o/1e3:0,nextSegmentId:null,viewableId:i.viewableId}}function ue(){var e=this.state
return{currentSegmentId:e.currentSegmentId,currentTime:e.currentTime,nextSegmentId:e.nextSegmentId,playbackSessionData:e.playbackSessionData,playbackState:N.playing,playlist:e.playlist,playlistId:e.playlistId,reportedSegmentId:e.reportedSegmentId,reportedTime:e.reportedTime,repositionType:H.jumpToTime,viewableId:e.viewableId}}function de(e){var t=void 0===e?{}:e,n=t.isPostPlayAutoPlay,i=void 0!==n&&n,o=t.isopOverrides,a=void 0===o?{}:o,r=t.playRequestTime,l=void 0===r?nrdp.mono():r,s=t.withPlaylist,u=void 0===s||s,d=this.props
if(d.entered){var c=d.onExecuteAction,h=d.postPlayExperience,f=(void 0===h?{}:h).items,p=void 0===f?[]:f,g=(0,w.default)(p,1)[0],m=(void 0===g?{}:g).actions,y=void 0===m?[]:m,v=(0,w.default)(y,1)[0],b=void 0===v?{}:v,S=this.state.showVideo
a.isUIAutoPlay=i
var x=u?this.getBaseIsopFromState():{}
c({action:b,ignoreBookmarkOverride:u&&S,initialStateOfPlayback:S?(0,M.assign)(x,a):{},isPostPlayAutoPlay:i,playRequestTime:l})}}function ce(e){(r||(r=n("Mmf2"))).consolidatedLogger.startSession("WatchCreditsCommand",void 0,{endWithId:q})
var t=this.state,i=t.currentCreditsId,o=t.currentMainId,a=t.currentSegmentId,l=t.currentTime,s=(t.nextMainId,t.playlist),u=t.runtime,d={}
if(s)switch(a){case i:break
case o:var c=ee(s,o)
if(te({currentTime:l,delta:1.5,runtime:u,segment:c}))return this.routeOnSegmentStarted=i,this.routeOnSegmentStartedHandler=this.enterCredits,e&&e.timeStamp&&(this.routeOnSegmentStartedPlayRequestTime=e.timeStamp),e.stopPropagation&&e.stopPropagation(),void this.setState({nextSegmentId:i})
d={nextSegmentId:i}
break
default:var h=ee(s,i),f=h.startTimeMs
d={currentSegmentId:i,currentTime:f>=0?f/1e3:0,nextSegmentId:null,viewableId:h.viewableId}}this.enterCredits({isopOverrides:d}),e.stopPropagation&&e.stopPropagation()}function he(e){var t=void 0===e?{}:e,i=t.isopOverrides,o=void 0===i?{}:i,a=t.playRequestTime,l=void 0===a?nrdp.mono():a,s=this.state,u=s.playbackSessionData,d=void 0===u?{}:u
s.showVideo||(d.playRequestTime=l,o={currentSegmentId:null,currentTime:0,nextSegmentId:null,playbackSessionData:d,playlist:null,playlistId:null,reportedSegmentId:null,reportedTime:0}),o.isUIAutoPlay=!1
var c=(0,M.assign)(this.getBaseIsopFromState(),o)
this.props.onViewCredits(c),(r||(r=n("Mmf2"))).consolidatedLogger.endSession("WatchCreditsCommand"+q)}function fe(e){var t=e.currentTime,n=e.segmentId,i=e.viewableId,o={currentSegmentId:n,nextSegmentId:null,reportedSegmentId:n}
if(i&&(o.viewableId=i),"number"==typeof t&&(o.currentTime=t,o.reportedTime=t),this.routeOnSegmentStarted===n)this.routeOnSegmentStartedHandler({isopOverrides:o,isPostPlayAutoPlay:!0,playRequestTime:this.routeOnSegmentStartedPlayRequestTime||void 0})
else{var a=this.props.enableAutoplay,r=this.state.playlist,l=ee(r,n)
o.nextSegmentId=J(l,a),this.setState(o)}}function pe(e){this.setState({currentTime:e,reportedTime:e})}function ge(e){var t=(e||{}).name
t!==U.endOfStream&&t!==U.error||this.setState({playbackState:N.stopped,showVideo:!1})}function me(e){switch(e.uiEvent){case"key.play":case"key.start":this.handleNextEpisodeSubmit()
break
default:(0,this.props.onKeyDown)(e)}}function ye(e){e.action&&"viewCredits"===e.action.type?this.handleViewCredits({timeStamp:nrdp.mono()}):this.props.onExecuteAction(e)}function ve(){var e=this.props;(0,e.onExecuteAction)({action:e.postPlayExperience.items[1].actions[0]||{},playRequestTime:nrdp.mono()})}var be=function(e){function t(t){var n=e.call(this,t)||this
n.routeOnSegmentStarted=null,n.routeOnSegmentStartedHandler=null,n.routeOnSegmentStartedPlayRequestTime=null,n.handleBoxshotClicked=ve.bind(n),n.handleLeftMenuExecuteAction=ye.bind(n),n.handleKeyDown=me.bind(n),n.handleVideoStateChanged=ge.bind(n),n.handleCurrentTimeChanged=pe.bind(n),n.handleSegmentStarted=fe.bind(n),n.enterCredits=he.bind(n),n.handleViewCredits=ce.bind(n),n.enterNextEpisode=de.bind(n),n.getBaseIsopFromState=ue.bind(n),n.getNextMainIsopOverrides=se.bind(n),n.handleNextEpisodeSubmit=le.bind(n),n.handleCountdownCompleted=re.bind(n),n.unregisterMdxActions=ae.bind(n),n.mdxStopPostPlay=oe.bind(n),n.registerMdxActions=ie.bind(n)
var i=t.enableAutoplay,o=t.initialStateOfPlayback,a=t.postPlayExperience,r={isNextEpisodeAnimationComplete:!1,playbackSessionData:{},showVideo:!1}
if(o){var l=o.playbackState,s=o.playlist,u={}
if(s){var d=o.currentSegmentId,c=o.currentTime,h=o.runtime,f=(o.nextSegmentId,Q(s,d)),p=f.currentCreditsId,g=f.currentMainId,m=f.nextMainId,y=ee(s,d),v=$({currentSegment:y,currentTime:c,delta:.5,postPlayExperience:a,runtime:h})
u={currentCreditsId:p,currentMainId:g,nextMainId:m,nextSegmentId:J(y,i&&!v)}}var b=l===N.playing||l===N.paused,S=t.postPlayExperience&&t.postPlayExperience.actions.filter((function(e){return"viewCredits"===e.type})).length>0
r=(0,M.assign)({},o,u,{playbackSessionData:o.playbackSessionData||{},shouldDisplayLowerSkipCreditsButton:!S,showVideo:b})}return n.state=r,n}(0,I.default)(t,e)
var i=t.prototype
return i.UNSAFE_componentWillMount=function(){this.routeOnSegmentStarted=null,this.routeOnSegmentStartedHandler=null,this.routeOnSegmentStartedPlayRequestTime=null,this.registerMdxActions()},i.componentWillUnmount=function(){this.unregisterMdxActions()},i.UNSAFE_componentWillReceiveProps=function(e){var t=this,n=this.state.shouldDisplayLowerSkipCreditsButton
this.props.startedBeforeLogicalEnd&&n||this.setState({nextSegmentId:""}),this.state.disableTimer||e.focused||-1===e.focusedPath.indexOf("nextEpisode")&&t.state.currentSegmentId===t.state.currentMainId&&t.setState({nextSegmentId:t.state.currentCreditsId})},i.render=function(){var e=this.context,t=this.props,i=this.state,r=j.default.resolve(e),_=r.buttonsContainer,w=r.video,I=t.active,T=t.ancestorVideoId,C=t.enableAutoplay,R=t.entered,E=t.focusKey,k=t.focused,A=t.isAncestorInQueue,M=t.itemContext,O=t.leftMenuLogs,W=t.mouseIsShowing,B=t.postPlayExperience,D=t.processingQueue,F=t.showLeftMenu,H=t.startedBeforeLogicalEnd,U=t.trackId,q=t.visible,z=void 0===q||q,J=i.showVideo,Q=this.handleKeyDown,$=i.playbackState,ee=B.items,te=void 0===ee?[]:ee,ie=B.strings,oe=void 0===ie?{}:ie,ae=(te[0]||{}).trackingInfo,re=void 0===ae?{}:ae
H&&(re.imageKey="NextEpisode_Seamless")
var le,se,ue,de,ce,he,fe,pe,ge=(te[1]||{}).trackingInfo,me=void 0===ge?{}:ge,ye=Y(t),ve=oe.nextEpisode,be=oe.watchCredits,Se=(0,(void 0===m?m=o(n("LhTm")):m).default)(B,0),xe=I&&J
Se&&!xe&&(se=(0,P.j)(K,P.p,null,null),le=(0,P.j)((void 0===p?p=o(n("TABy")):p).default,{image:Se},"background",null))
var _e,we=te[0]||{},Pe=te[1]||{},Ie=we.ancestorTitle,Te=we.assets,Ce=void 0===Te?{}:Te,Re=Pe.assets,Ee=void 0===Re?{}:Re,ke=Ce.LOGO,Ae=void 0===ke?null:ke,Me=Ee.DISPLAY_ART,Oe=void 0===Me?null:Me
if(B.type===(f||(f=n("9hVI"))).PostPlayExperienceType.TwoUpChoicepoint&&te.length>0&&(Oe&&(he=(0,P.j)((void 0===v?v=o(n("db0f")):v).default,{backgroundImage:Oe,durationText:Pe.runtimeText,executeAction:this.handleBoxshotClicked,focusKey:"postplayBoxshot",logEventsOnShown:[{trackingInfo:me,type:"Presented",view:"boxArt"}],staticStyle:r.boxshot,topText:Pe.supplementalMessage},"seamlessBoxshot",null)),Ae&&(fe=(0,P.j)((void 0===b?b=o(n("WjqK")):b).default,{fallbackLogoText:Ie,logoImage:Ae,staticStyle:r.logo},"seamlessLogo",null))),!this.routeOnSegmentStarted){var We
F&&($===N.stopped&&(B.actions=B.actions.filter((function(e){return"viewCredits"!==e.type}))),ue=(0,P.j)((void 0===y?y=o(n("X9PG")):y).default,{ancestorVideoId:T,executeAction:this.handleLeftMenuExecuteAction,focusKey:"leftMenu",isAncestorInQueue:A,isSeamless:!0,itemContext:M,logSessionsWhileShown:O,mouseIsShowing:W,postPlayExperience:B,postPlayItemIndex:0,processingQueue:D},"leftMenu",null))
var Be=this.state.playbackState===N.stopped&&this.props.focusedPath&&"watchCredits"===this.props.focusedPath.split("/").pop()
H&&this.state.shouldDisplayLowerSkipCreditsButton&&this.state.playbackState!==N.stopped&&(de=(0,P.j)(ne,{children:(0,P.j)(void 0===S?S=(0,(void 0===c?c=o(n("K/XY")):c).default)(n("4+IH").Button):S,{focusKey:"watchCredits",logSessionsWhileShown:[{trackingInfo:{trackId:U},type:"Presentation",view:"watchCreditsButton"}],onSubmit:this.handleViewCredits,padding:20,sendRenderProperties:!0,text:be,type:"primary"},"watchCredits",null)},null,null))
var De,Fe=(0,P.j)(ne,{children:(0,P.j)(void 0===x?x=(0,(void 0===d?d=o(n("UWxn")):d).default)((0,(void 0===c?c=o(n("K/XY")):c).default)(n("Vc2Q").ButtonCountdown)):x,{active:!(!I||!C),duration:1e3*ye,focused:Be||k,focusKey:"nextEpisode",icon:(s||(s=n("S2RX"))).IconType.Play,logEventsOnShown:[{trackingInfo:re,type:"Presented",view:"nextEpisodeButton"}],logSessionsWhileShown:[{trackingInfo:{trackId:U},type:"Presentation",view:"nextButton"}],minWidth:100,name:"nextEpisode",onCountdownCompleted:this.handleCountdownCompleted,onSubmit:this.handleNextEpisodeSubmit,sendRenderProperties:!0,text:ve},"nextEpisode",null)},null,null)
ce=(0,P.j)((void 0===g?g=o(n("isU2")):g).default,{children:[de,Fe],focusKey:"buttonsContainer",staticStyle:_},"buttonContainer",null),(0,(a||(a=n("9IR/"))).getFeature)("postplayEpisodesCountdown")&&null!=we&&null!=(We=we.watchContext)&&We.countdownLabel&&(pe=(0,P.j)(X,{children:(0,P.j)(Z,{text:null==we||null==(De=we.watchContext)?void 0:De.countdownLabel},"EpisodeCounter",null)},"EpisodeCounterContainer",null))}if(xe){var je=i.currentSegmentId,Ve=i.currentTime,Le=i.isUIAutoPlay,Ne=i.nextSegmentId,He=i.playbackSessionData,Ue=i.playlist,qe=i.playlistId,Ke=i.reportedSegmentId,Ge=i.reportedTime,ze=i.repositionType,Xe=i.viewableId
_e=(0,P.j)((u||(u=n("zLfl"))).VideoPlayerDeprecated,{currentSegmentId:je,currentTime:Ve,fullscreen:!0,hasNoUIOverlay:!1,isUIAutoPlay:Le,nextSegmentId:Ne,onCurrentTimeChanged:this.handleCurrentTimeChanged,onVideoStateChanged:this.handleVideoStateChanged,performanceMode:!0,playbackSessionData:He,playbackState:$,playerControlEventHandlers:{segmentStarted:this.handleSegmentStarted},playlist:Ue,playlistId:qe,rect:w,reportedSegmentId:Ke,reportedTime:Ge,repositionType:ze,viewableId:Xe},"video",null)}return(0,P.j)((l||(l=n("agVJ"))).FocusableRoot,{__update_style__:L,children:[(0,P.j)((h||(h=n("hGCN"))).PortalDeprecated,{active:xe,children:_e,outletName:"backgroundVideo"},"PostPlay-backgroundVideo",null),se,le,(0,P.j)("Widget",{__update_style__:V,staticStyle:r.leftVignette,style:{visible:!xe}},"leftVignette",null),fe,he,ue,pe,ce,(0,P.j)(G,P.p,null,null)],focused:R,focusKey:E,onKeyDown:Q,staticStyle:r.container,style:{visible:z}},"postPlay",null)},t}(W.Component)
be.displayName=q,be.contextTypes=(0,_.default)({},E.stylesheetContextTypes,{mdxPostPlay:B.shape({registerActions:B.func,unregisterActions:B.func})}),t.default=be},SbLe:function(e,t,n){var i,o
t.__esModule=!0,t.useFocusResourceChangedEvent=function(e,t){void 0===t&&(t=!0)
var r=(0,a.useRef)(!1),l=(0,(o||(o=n("K0jP"))).useEvent)((function(t){var n=t.data,i=(void 0===n?{}:n).focus
i?i&&r.current&&(r.current=!1,e(!0)):(r.current=!0,e(!1))}));(0,a.useEffect)((function(){if(t){(0,(i||(i=n("9IR/"))).getFeature)("pausesOnUnfocused")&&nrdp.gibbon.addEventListener("focus",l)
var e=function(){return l({data:{focus:!0}})},o=function(){nrdjs.resources("visibility").isAllowed&&l({data:{focus:!1}})}
return(0,(i||(i=n("9IR/"))).getFeature)("pausesOnFocusResourceReleased")&&(nrdjs.resources("focus").on("releasing",o),nrdjs.resources("focus").on("acquiring",e)),function(){(0,(i||(i=n("9IR/"))).getFeature)("pausesOnUnfocused")&&nrdp.gibbon.removeEventListener("focus",l),(0,(i||(i=n("9IR/"))).getFeature)("pausesOnFocusResourceReleased")&&(nrdjs.resources("focus").off("releasing",o),nrdjs.resources("focus").off("acquiring",e))}}}),[l,t])}
var a=n("/P98")},T5et:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.FocusRing;(0,c.default)(t,"LeftMenuFocusRing: FocusRing must be specified")
var y="ease-out-quad",v=(0,p.fade)({delay:150,duration:200,ease:y,to:1}),b=(0,p.fade)({delay:150,duration:200,ease:y,to:0}),S=(0,p.fade)({duration:(o||(o=n("ClEx"))).Duration.Duration50,from:1,to:1}),x=(0,p.fade)({duration:(o||(o=n("ClEx"))).Duration.Duration50,from:0,to:0}),_=function(e){function i(t){var n=e.call(this,t)||this
return n.state={changingRating:!1},n}(0,d.default)(i,e)
var o=i.prototype
return o.UNSAFE_componentWillReceiveProps=function(e){var t=e.thumbsRating,n=this.props.thumbsRating
this.setState({changingRating:void 0!==n&&void 0!==t&&n!==t})},o.render=function(){var e=this.props,i=function(e,t){var i=e.focusedPath,o=e.item,r=e.thumbsRating,s=e.transition,u=(o||{}).type
if("action_bar"===u)return{opacityAnimation:x,transition:(0,h.assign)({},s,{animation:b})}
var d,c=(t||{}).changingRating,f=r===(l||(l=n("rvvp"))).ThumbsRating.THUMBS_UP||r===(l||(l=n("rvvp"))).ThumbsRating.THUMBS_DOWN,p=s
if(!c||"thumbrate"!==u&&"action_bar"!==u)d="thumbrate"!==u||f?S:x
else{var g=f&&"thumbrate"===u?v:b
p=(0,h.assign)({},s,{animation:g})}return(0,(a||(a=n("9IR/"))).getFeature)("thumbsWayUpActionBarEnabled")&&i&&-1!==(null==i?void 0:i.indexOf(m))&&(d=x),{opacityAnimation:d,transition:p}}(e,this.state),o=i.opacityAnimation,r=i.transition,s=(0,f.unsafeObjectMerge)(e,{opacityAnimation:o,transition:r})
return(0,u.j)(t,s,"leftMenuFocusRing",null)},i}(g.Component)
return _.contextTypes=(r||(r=n("s6u8"))).stylesheetContextTypes,_.displayName="LeftMenuFocusRing",_.defaultProps={visible:!0},(0,(void 0===s?s=i(n("OElj")):s).default)(_)}
var o,a,r,l,s,u=n("igsZ"),d=i(n("VbXa")),c=i(n("jGzq")),h=n("y2r0"),f=n("1dek"),p=n("Hg/B"),g=n("/P98"),m="/postplay/leftMenu/0"},TABy:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s=n("igsZ"),u=n("eNcy"),d=n("ClEx"),c=[["opacity",void 0,.7,d.Duration.Duration650,"ease-in-out-quad"]],h=[["opacity",void 0,0,d.Duration.Duration650,"ease-in-quad"]],f=(0,u.s)("Widget","background",{name:"background",rect:function(e){var t=e.isFullWidth
return{height:t?(a||(a=n("8J/X"))).VIEWPORT_HEIGHT:612,width:t?(a||(a=n("8J/X"))).VIEWPORT_WIDTH:1088,x:t?0:192,y:0}}},!1)
t.default=function(e){var t,a=e.experienceType,u=e.image,d=(0,(o||(o=n("s6u8"))).useStylesheetContext)()
"episodicTeaser"===a&&(t="wallpaperFull")
var p=(void 0===r?r=i(n("+e9Q")):r).default.resolve(d)
return(0,s.j)(f,{children:u?(0,s.j)((l||(l=n("8icE"))).Wallpaper,{defaultHAlign:"aspect",images:[u],name:"wallpaper",staticStyle:p,staticStyleKey:t,transitionActive:c,transitionInactive:h},"wallpaper",null):(0,s.j)("Widget",s.p,null,null),isFullWidth:"episodicTeaser"===a},null,null)}},U6qG:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("Ki15")).default.list
t.default=o({context:function(e){var t=e.texttospeech
return t&&t.returnToVideo}})},UWxn:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=n("agVJ"),a=n("e9tE"),r=n("NEBH"),l=i(n("Y0cR"))
t.default=(0,r.compose)(o.withFocusPath,(0,a.connect)((function(e,t){return{interactive:o.selectors.isInteractive(e,t)}})),l.default)},Vc2Q:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.ButtonCountdown=function(e){var t=e.accessibilityHint,f=e.accessibilityLabel,y=e.accessibilityRole,I=e.active,T=void 0===I||I,C=e.animation,R=e.animationKey,E=e.animationRole,k=e.duration,A=e.interruptSpeechWhenFocused,M=e.layoutSpacing,O=e.onAnimationCompleted,W=e.onCountdownCompleted,B=e.resetOnFocusLost,D=e.speechOnCountdownComplete,F=(e.x,e.y,(0,m.default)(e,S)),j=(0,(l||(l=n("agVJ"))).useFocused)(F.focusKey,F.focused),V=(0,(void 0===u?u=i(n("/AdD")):u).default)(j),L=(0,b.useRef)(!0)
!V||j||B||(L.current=!1)
var N=(0,(void 0===s?s=i(n("RnAo")):s).default)({ignoreZero:!0}),H=N.ref,U=N.width,q=(0,(d||(d=n("tF9u"))).useSuspended)(),K=!L.current||!T||q||!j,G=!L.current||!T||q||!j||null==U,z=(0,b.useMemo)((function(){return G?null:(0,(a||(a=n("lngZ"))).createLegacyGibbonScalarExpression)("width",{duration:k,easing:(o||(o=n("ClEx"))).Easing.EasingLinear,from:0,to:U})}),[G,k,U]),X=function(e,t,i){var o=(0,b.useRef)(null),a=(0,b.useCallback)((function(e){"stopped"!==e.reason&&(null==i||i(),(r||(r=n("Mmf2"))).consolidatedLogger.endSession(o.current,{type:"SessionEnded"}),o.current=null)}),[i])
return(0,b.useEffect)((function(){return o.current&&!t?((r||(r=n("Mmf2"))).consolidatedLogger.endSession(o.current,{type:"SessionCanceled"}),o.current=null):!o.current&&t&&(o.current=(r||(r=n("Mmf2"))).consolidatedLogger.startSession("Countdown",{maxDuration:e})),function(){o.current&&((r||(r=n("Mmf2"))).consolidatedLogger.endSession(o.current,{type:"SessionCanceled"}),o.current=null)}}),[e,t]),{handleOnCountdownCompleted:a}}(k,!!z,W).handleOnCountdownCompleted,Z=f||F.text,Y=y||"button",J=t||Z+" in "+Math.round((0,v.convertMsToSeconds)(k))+" seconds",Q=G?Z+" "+Y:Z+" "+Y+". "+J;(0,(h||(h=n("7GcT"))).useSpeechWhenFocused)({condition:!!U&&j,focused:j,interruptSpeechWhenFocused:A,text:Q})
var $=(0,b.useCallback)((function(e){"success"===e.reason&&(void 0===c?c=i(n("6pxA")):c).default.say(D||Z),X(e)}),[Z,X,D])
return(0,g.j)(P,{__update_handlers__:_,animation:C,animationKey:R,animationRole:E,children:(0,g.j)(w,{children:[!K&&(0,g.j)((p||(p=n("4+IH"))).Button,{__proto__:F,disabledTTS:!0,focused:!1,focusKey:"button-countdown-background"},null,null),(0,g.j)("Widget",{__update_handlers__:x,animation:z,children:(0,g.j)((p||(p=n("4+IH"))).Button,{__proto__:F,disabledTTS:!0,opacity:U?1:.04},null,null),onAnimationCompleted:$},null,null)]},null,null),layoutSpacing:M,onAnimationCompleted:O,width:U},R,H)}
var o,a,r,l,s,u,d,c,h,f,p,g=n("igsZ"),m=i(n("6gFf")),y=n("eNcy"),v=n("VUAb"),b=n("/P98"),S=["accessibilityHint","accessibilityLabel","accessibilityRole","active","animation","animationKey","animationRole","duration","interruptSpeechWhenFocused","layoutSpacing","onAnimationCompleted","onCountdownCompleted","resetOnFocusLost","speechOnCountdownComplete","x","y"],x=["onAnimationCompleted"],_=["onAnimationCompleted"]
function w(e){var t=e.children,i=(0,(f||(f=n("GQsr"))).useTheme)(),o=(0,b.useMemo)((function(){return{ButtonForegroundPrimary:i.ButtonCountdownForegroundTrack,ButtonSurfacePrimary:i.ButtonCountdownSurfaceTrack,ButtonSurfacePrimaryFocused:i.ButtonCountdownSurfaceFocused}}),[i])
return(0,g.j)((f||(f=n("GQsr"))).ThemeOverrideProvider,{children:t,name:"button-countdown",themeOverride:o},null,null)}var P=(0,y.s)("Widget","ButtonCountdownContainer",{layoutSpacing:function(e){return e.layoutSpacing},sendRenderProperties:!0,width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!1)},VgeG:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,i=e.clearInterval,m=void 0===i?p:i,y=e.consolidatedLogger,v=void 0===y?(o||(o=n("Mmf2"))).consolidatedLogger:y,b=e.setInterval,S=void 0===b?f:b
function x(){var e=this.props.onCountdownCompleted
v.endSession("Countdown"+g),m(this.countdownTimerId),this.countdownTimerId=null,this.setState({countdownValue:0}),e()}function _(e){v.endSession("Countdown"+g,{type:"SessionCanceled"}),m(e)}function w(){v.startSession("Countdown",{maxDuration:this.props.countdownFrom},{endWithId:g})
var e=this
return S((function(){var t=e.state.countdownValue
t>1?e.setState({countdownValue:t-1}):e._completeCountdownTimer()}),1e3)}function P(e,t,i){var o=t.countdownId,a=i.active,r=i.countdownFrom,s=i.countdownId,u=(e||{}).countdownValue
return e&&o===s&&!(0,(l||(l=n("NEM1"))).isComponentBecomingActive)(t,i)&&a||(this.countdownTimerId&&this._cancelCountdownTimer(this.countdownTimerId),u=r>0?r:h.countdownFrom,this.countdownTimerId=null),a&&!this.countdownTimerId&&u>0&&(this.countdownTimerId=this._startCountdownTimer()),{countdownValue:u}}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n._getNextState=P.bind(n),n._startCountdownTimer=w.bind(n),n._cancelCountdownTimer=_.bind(n),n._completeCountdownTimer=x.bind(n),n.state=n._getNextState(null,{},{}),n}(0,u.default)(t,e)
var i=t.prototype
return i.componentWillUnmount=function(){this.countdownTimerId&&this._cancelCountdownTimer(this.countdownTimerId)},i.UNSAFE_componentWillMount=function(){var e=this.props,t=this.state,n=this._getNextState(t,{},e)
this.setState(n)},i.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,n=this.state,i=this._getNextState(n,t,e)
this.setState(i)},i.render=function(){var e=this.props,t=this.state.countdownValue,i=e.format,o=(0,(r||(r=n("m5dK"))).nfformat)(i,{seconds:t})
return(0,s.j)("Widget",{__update_style__:c,staticStyle:e.staticStyle,style:{name:"auto-play-countdown-text",text:o}},null,null)},t}(d.Component)).contextTypes=(a||(a=n("s6u8"))).stylesheetContextTypes,t.displayName="AutoPlayCountDownText",t}
var o,a,r,l,s=n("igsZ"),u=i(n("VbXa")),d=n("/P98"),c=["name","text"],h={countdownFrom:30},f=setInterval,p=clearInterval,g="autoPlayCountdown"},WjqK:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),l=i(n("VbXa")),s=n("s6u8"),u=n("MqVO"),d=n("/P98"),c=["onImageLoaded"]
function h(e){var t=e.data;((void 0===t?{}:t)||{}).success||this.setState({isTextVisible:!0})}var f=function(e){function t(t){var n=e.call(this,t)||this
return n.handleImageLoaded=h.bind(n),n.state={isTextVisible:!t.logoImage||!1},n}return(0,l.default)(t,e),t.prototype.render=function(){var e=this.context,t=this.state,l=(void 0===a?a=i(n("lwpN")):a).default.resolve(e),s=l.backgroundImage,d=l.fallbackLogoText,h=this.props,f=h.fallbackLogoText,p=h.logoImage,g=h.staticStyle,m=t.isTextVisible,y=(0,u.mergeDeep)(s,{image:p})
return(0,r.j)("Widget",{children:[(0,r.j)("Widget",{__update_handlers__:c,onImageLoaded:this.handleImageLoaded,style:y},null,null),(0,r.j)((void 0===o?o=i(n("11/r")):o).default,{children:f,staticStyle:d,visible:m},null,null)],staticStyle:g},null,null)},t}(d.Component)
f.contextTypes=s.stylesheetContextTypes,f.displayName="PostPlayLogo",t.default=f},X9PG:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s=n("igsZ"),u=i(n("siCl")),d=i(n("VbXa")),c=n("9IR/"),h=n("s6u8"),f=n("P1w9"),p=i(n("ctEV")),g=n("pbgz"),m=n("/P98"),y=(0,c.getFeatures)(),v=f.identity
y.thumbsWayUpActionBarEnabled&&(v=n("Dykz").default)
var b={height:200,width:y.thumbsWayUpActionBarEnabled?260:400,x:21,y:12},S={height:200,width:y.thumbsWayUpActionBarEnabled?302:400,x:54,y:184},x={height:200,width:y.thumbsWayUpActionBarEnabled?302:400,x:54,y:y.thumbsWayUpActionBarEnabled?53:23}
function _(e,t){var n=e||{},i=n.actions,o=n.postPlayExperience,a=t.actions,r=t.postPlayExperience
if(a!==i||o!==r){var l=t.index,s=r.actions,u=a||s,d=void 0!==l?l:u.length-1
this.setState({actions:u,index:d})}}function w(e){this.state.index!==e&&this.setState({index:e})}function P(e){e!==this.state.focusedIndex&&this.setState({focusedIndex:e})}function I(e){var t=e.focusKey,o=e.focused,s=e.key,u=e.listContext,d=e.listItem
if(d.data)return(void 0===l?l=(0,i(n("Y3bQ")).default)(void 0===r?r=(0,i(n("j7sC")).default)((void 0===a?a=i(n("62oB")):a).default):r):l)({childFocusKey:t,focused:o,key:s,listContext:u,listItem:d,mouseIsShowing:this.props.mouseIsShowing})}var T=function(e){function t(t){var n=e.call(this,t)||this
return n.childFactory=I.bind(n),n.handleHighlightItemChange=P.bind(n),n.handleChangeMenuIndex=w.bind(n),n.setStateFromProps=_.bind(n),n.state={index:0},n}(0,d.default)(t,e)
var a=t.prototype
return a.UNSAFE_componentWillReceiveProps=function(e){this.setStateFromProps(this.props,e)},a.UNSAFE_componentWillMount=function(){this.setStateFromProps(null,this.props)},a.render=function(){var e=this.props,t=this.state,a=e.ancestorVideoId,r=e.disableActionBarTooltips,l=e.executeAction,d=e.focused,c=e.focusedPath,h=e.isAncestorInQueue,f=e.isSeamless,p=e.itemContext,g=e.onExit,m=e.postPlayExperience,y=e.postPlayItemIndex,_=void 0===y?0:y,w=e.processingQueue,P=t.actions,I=t.focusedIndex,T=t.index,C=P.map((function(e){var t={label:e.displayText,onSubmit:function(t){l({action:e}),t&&t.stopPropagation()},type:e.type}
if(e.iconTypeOverride&&(t.iconTypeOverride=e.iconTypeOverride),"more_episodes"===e.name)t.type="more_episodes"
else if("play_from_beginning"===e.name)t.type="play_from_beginning"
else if("thumbrate"===e.type)t.itemContext=p,t.videoId=a,t.postPlayExperienceItem=m.items[_],t.label={THUMBS_DOWN:e.unrateText,THUMBS_UP:e.unrateText,UNRATED:e.displayText}
else if("action_bar"===e.type){var n=v({ancestorVideoId:a,disableTooltips:r,itemContext:p})
t=(0,u.default)({},t,n)}else if("playlist"===e.type){var i=m.myListLabels
t.type=h?"remove":"add",w&&(t.label=h?i.removing:i.saving)}else"countdown"===e.type&&(t.duration=e.duration,t.onCountdownCompleted=function(){e.countdownExpired=!0,l({action:e})})
return t}))
return(0,s.j)((void 0===o?o=i(n("tBZ7")):o).default,{children:this.childFactory,clip:!1,dataLength:C.length,focused:d,focusedIndex:I,focusedPath:c,focusKey:"leftMenu",index:T,items:C,layoutRect:b,name:"leftMenu",onExit:g,onHighlightedItemChange:this.handleHighlightItemChange,onIndexChange:this.handleChangeMenuIndex,rect:f?x:S,videoId:a},"leftMenu",null)},t}(m.Component)
T.displayName="LeftMenu",T.contextTypes=h.stylesheetContextTypes,t.default=(0,g.withFalcorComponentContext)((0,p.default)(T))},XSsA:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ")
t.default=function(){return(void 0===a?a=i(n("Ki15")).default.list:a)({context:function(e){var t=e.availabilityDateMessaging,i=e.newEpisodeBadge,a=e.synopsis,l=e.title,s=(e.texttospeech||{}).itemPosition
return l&&(0,r.j)("speak",{children:[(0,r.j)("s",{children:i},null,null),(0,r.j)("s",{children:l},null,null),(0,r.j)("s",{children:t},null,null),(0,r.j)("s",{children:(0,(o||(o=n("m5dK"))).nfformat)(s,{itemNumber:1,numberOfItems:1})},null,null),(0,r.j)("break",{time:1e3},null,null),(0,r.j)("s",{children:null==a?void 0:a.text},null,null)]},null,null)}})}},XV8Z:function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("BHy0"),o=n("DKQB")
function a(e,t,n){void 0===e&&(e={}),void 0===t&&(t={})
var a=t,r=a.executeAction,l=void 0===r?i.noop:r,s=a.itemIndex,u=void 0===s?0:s,d=a.postPlayExperience,c=void 0===d?{}:d,h=e,f=h.forcePostPlayAutoplay,p=h.postPlayCountdown,g=t.enableAutoplay&&c.autoplay
if((0,o.parseBoolean)(f,g)){var m=c.items,y=((void 0===m?[]:m)[u]||{}).actions,v=void 0===y?[]:y,b=(null==v?void 0:v[0])||i.noop,S=function(){var e={}
b&&"playTrailer"===b.name&&"play"===b.type&&(e.isUIAutoPlay=!0),l({action:b,initialStateOfPlayback:e,isPostPlayAutoPlay:!0,playRequestTime:n.mono()})}
return g?{active:t.active,countdownFrom:p||c.autoplaySeconds,countdownId:c.requestId,format:c.autoplayFormat,onCountdownCompleted:S}:{countdownFrom:p||15,format:"{seconds, plural, =0 {DEBUG AUTOPLAY: 0} =1 {DEBUG AUTOPLAY: 1} other {DEBUG AUTOPLAY: #}}",onCountdownCompleted:S}}}t.default=function(e,t){return function(n){var i=n.postPlayExperience,o=void 0===i?{}:i,r=o.items,l=void 0===r?[]:r,s=o.mainTitle,u=void 0===s?{}:s,d=u.text,c=u.type,h=l[0]||{},f=h.actions,p=void 0===f?[]:f,g=h.title,m="highlighted"===c?g:d
return{actions:p,countdown:a(e,n,t),title:"text"===c||"highlighted"===c?m:void 0}}}},XdH1:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("UN2+")),a=i(n("SAhE")),r=i(n("mZJ5")),l=(0,o.default)(r.default)
t.default=l(a.default)},Y0cR:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t
function i(){if(this.props.interactive){var e=this.props.logEventsOnShown;(void 0===e?[]:e).forEach((function(e){var t=e.trackingInfo,i=e.type,a=e.view
if(t){var r={trackingInfo:t}
a&&(r.view=a),(o||(o=n("Mmf2"))).consolidatedLogger.logEvent(i,r)}})),this.hasLogged=!0}}return t=function(t){function n(){for(var e,n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a]
return(e=t.call.apply(t,[this].concat(o))||this)._attemptLogging=i.bind(e),e}(0,r.default)(n,t)
var o=n.prototype
return o.componentDidMount=function(){this.hasLogged=!1,this._attemptLogging()},o.componentDidUpdate=function(){this.hasLogged||this._attemptLogging()},o.render=function(){var t=this.props
return(0,a.j)(e,t,null,null)},n}(s.Component),t.displayName=(0,l.higherOrderName)("LogEventsOnShown",e),t.propTypes={interactive:u.default.bool,logEventsOnShown:u.default.arrayOf(u.default.shape({trackingInfo:u.default.object.isRequired,type:u.default.string.isRequired,view:u.default.string}))},t}
var o,a=n("igsZ"),r=i(n("VbXa")),l=n("bGSL"),s=n("/P98"),u=i(n("17x9"))},Y3bQ:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.ThumbRateButton,o=void 0===t?void 0===p?p=(0,i(n("j7sC")).default)():p:t,a=e.ThumbsMenuBar,y=void 0===a?(void 0===s?s=i(n("93Qs")):s).default:a
return function(e){var t,a,s,p=e.childFocusKey,v=e.dataId,b=void 0===v?"":v,w=e.effectParams,P=e.extraData,R=void 0===P?{}:P,O=e.focused,j=e.focusedIndex,L=e.handleClick,N=e.hasOpacityOnMouseIsShowing,q=void 0===N||N,K=e.isLiveEvent,G=e.isReminderSet,z=e.key,X=e.labelStyleSheet,Z=e.listContext,Y=e.listItem,J=e.liveState,Q=e.mouseIsShowing,$=e.onThumbsMenuFocused,ee=e.parentDisabled,te=e.styles,ne=e.unstable_effect,ie=Y.data,oe=ie.checked,ae=ie.iconTypeOverride,re=ie.interactiveProgress,le=ie.label,se=ie.onSubmit,ue=ie.subLabel,de=ie.type,ce=null!=(t=null==ie||null==(a=ie.routeParams)?void 0:a.bookmarkOverride)?t:ie.bookmark,he=Y.rect,fe=Z.range,pe=Z.scroll,ge=(fe||{}).index,me=(X?k(X):M).DarwinButtonLabel,ye=te
ye||(ye={dynamicLabel:{height:42,width:250}})
var ve,be,Se=0,xe=300
ce&&"play_branching"===de?(0,(void 0===u?u=i(n("YmLT")):u).default)(re)&&(Se=0,ve=(0,m.j)(void 0===g?g=(0,i(n("ifK+")).default)({ProgressBar:void 0===h?h=(0,_.default)({stylesheet:S.progressBarStyles,transitions:i(n("2VMB")).default}):h}):g,{percentage:Se,rect:{height:4,width:70},videoId:ie.videoId},"progress",null),xe=252):ce&&"play"===de&&(0,(l||(l=n("lUUO"))).canResume)(ce.position,ce.runtime,ce.watchedToEndOffset)&&(Se=ce.position/ce.runtime*100,ve=(0,m.j)(void 0===h?h=(0,_.default)({stylesheet:S.progressBarStyles,transitions:i(n("2VMB")).default}):h,{percentage:Se,rect:{height:4,width:70},visible:O||0===j},"progress",null),xe=252)
var _e=!1
if("audioDynamic"===de)be=(0,(void 0===c?c=i(n("zOpD")):c).default)(oe?"checked":"unchecked",{}),ie&&ie.descriptionLabel&&(_e=!0)
else if("mylist"===de){var we=ie.queue&&ie.queue.inQueue?"remove":"add"
be=(0,(void 0===c?c=i(n("zOpD")):c).default)(we,{})}else be="cw_remove"===de?(0,(void 0===c?c=i(n("zOpD")):c).default)(ie.removed?"undo":"close",{}):"reminder"===de?(0,(void 0===c?c=i(n("zOpD")):c).default)("reminder",{isReminderSet:G}):ae?(0,(void 0===c?c=i(n("zOpD")):c).default)(ae,{}):(0,(void 0===c?c=i(n("zOpD")):c).default)(de,{})
var Pe=!1
he.y+pe.translate!==0||pe.minTranslate||(Pe=!0),he.y+he.height+pe.translate>=pe.rect.height&&!pe.maxTranslate&&(Pe=!0)
var Ie,Te=Pe?.5:1
switch(q||(Te=1),se?Ie=se:L&&(Ie=function(e){e.cancelBubble=!0,L(p,Y)}),de){case"content_warning_back":case"content_warning":s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,(0,m.j)(me,{mouseIsShowing:Q,rect:{height:42,width:xe},text:le},"label",null)],effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
case"play":case"play_branching":var Ce=(0,m.j)(me,{mouseIsShowing:Q,rect:{height:42,width:xe},text:le},"label",null)
if(K&&J===(d||(d=n("hoTQ"))).ViewableLiveState.live){var Re=te.glowFocusRing.backgroundImage.sourceRect.width,Ee=(O||j===(null==ie?void 0:ie.index))&&!Q
s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:(0,m.j)(U,{children:[(0,m.j)(H,{height:42,visible:Ee,width:Re},null,null),(0,m.j)((r||(r=n("djiD"))).HStack,{childLayoutSpacing:6,children:[be,Ce],height:42,padding:{left:12},valign:"center",width:Re},null,null)],width:Re},null,null),data:{dataId:b,focused:O,percentage:Se},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)}else s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,Ce,ve],data:{dataId:b,focused:O,percentage:Se},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
case"thumbrate":s=(0,m.j)(o,{__update_handlers__:C,effectParams:w,extraData:R,focused:O,focusKey:p,item:ie,name:z,onClick:Ie,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne,videoId:ie.videoId},z,null)
break
case"action_bar":s=(0,m.j)(y,{disabled:ee,effectParams:w,focused:O,focusKey:p,item:ie,name:z,onFocused:$,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
case"movies":case"season":case"similars":case"trailers":var ke=function(e,t,n,i,o){void 0===e&&(e={}),void 0===i&&(i={})
var a=!1,r=e,l=r.clickedSeasonIndex,s=r.entered,u=r.highlightedSeasonIndex,d=r.isMouseOver,c=i.absoluteIndex
return s||d?o&&!d?((void 0===l||l<0)&&t===c||l>=0&&l===c)&&(a=!0):(u===c&&o||!o&&(n||t===c))&&(a=!0):(l===c&&t!==l||t===c&&(l===t||void 0===l||l<0))&&(a=!0),a}(R,ge,O,Y,Q)
s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{__update_handlers__:T,children:[(0,m.j)(W,{mouseIsShowing:Q,name:"season",text:le},"season",null),(0,m.j)(void 0===A?A=(0,x.default)({defaultVisible:!1,isSeasonsLabel:!0,stylesheet:E,transitions:i(n("skUI")).default}):A,{mouseIsShowing:Q,name:"label",text:ue,visible:!0},"label",null)],data:{dataId:b,labelVisible:ke},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onClick:Ie,onSubmit:Ie,opacity:Te,rect:he,submitKey:"key.submit",unstable_effect:ne},z,null)
break
case"series":case"shows":case"label":s=(0,m.j)("Widget",{__update_style__:I,focusKey:p,staticStyle:te.staticLabel,style:{name:p,opacity:Te,rect:he,text:le}},z,null)
break
case"audioDynamic":V()
var Ae=ie.isAudio
s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,(0,m.j)("Widget",{children:[(0,m.j)(B,{mouseIsShowing:Q,text:le},"audio",null),Ae?(0,m.j)(D,{mouseIsShowing:Q,text:ie.descriptionLabel,visible:_e},"description",null):(0,m.j)(F,{mouseIsShowing:Q,text:ie.descriptionLabel,visible:_e},"description",null)],rect:ye.dynamicLabelAudio.rect,style:ye.dynamicLabelAudio},"label",null)],data:oe,dataIndex:Y.dataIndex,effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
case"mylist":var Me=Y.absoluteIndex
s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,(0,m.j)(me,{mouseIsShowing:Q,rect:ye.dynamicLabel,text:le},"label",null)],data:{dataId:b,isFocused:O||Me===ge,opacity:Te},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
case"reminder":s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,(0,m.j)(me,{mouseIsShowing:Q,rect:ye.dynamicLabel,text:le},"label",null)],data:{isReminderSet:G},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)
break
default:s=(0,m.j)(void 0===f?f=(0,i(n("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[be,(0,m.j)(me,{mouseIsShowing:Q,rect:ye.dynamicLabel,text:le},"label",null)],data:{dataId:b,opacity:Te},effectParams:w,focused:O,focusKey:p,item:ie,name:z,onSubmit:Ie,opacity:Te,rect:he,unstable_effect:ne},z,null)}return s}}
var o,a,r,l,s,u,d,c,h,f,p,g,m=n("igsZ"),y=n("eNcy"),v=n("ClEx"),b=n("Hg/B"),S=n("DtLd"),x=i(n("x84e")),_=i(n("qELT")),w=i(n("Hy99")),P=i(n("85i5")),I=["name","opacity","rect","text"],T=["onClick"],C=["onClick"],R=(0,w.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!0}},buttonVisualState:{highlighted:e,pressed:e}}})),E=(0,w.default)((function(){var e={opacity:0,textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{minWidth:10,name:"label",opacity:0,rect:{height:42,width:120},textStyle:{align:"right center-vertical",color:{a:255,b:105,g:105,r:105},size:16,weight:"normal"},width:120},buttonVisualState:{highlighted:e,pressed:e}}}))
function k(e){return{DarwinButtonLabel:(0,x.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:e?R.extend(e):R,transitions:P.default})}}var A,M=k(),O=(0,w.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,name:"label",padding:{left:11},rect:{height:42,width:228},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},variant:"normal",weight:"normal",wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}})),W=(0,x.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:O,transitions:P.default}),B=null,D=null,F=null,j=!1
function V(){if(!j){var e=function(){var e=R.extend((function(){return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!1}}}})),t=(0,w.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{name:"description",padding:{left:5},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},weight:"normal",wrap:!1},width:90},buttonVisualState:{highlighted:e,pressed:e},language:{ar:{width:85},th:{width:85}}}})),n=t.extend((function(){return{language:{ar:{width:130},th:{width:130},zh:{width:130}},locale:{"pt-PT":{width:185}}}}))
return{audioDescriptionComponentStylesheet:t,audioSubtitlesLabelStylesheet:e,ccComponentStylesheet:n}}(),t=e.audioDescriptionComponentStylesheet,n=e.audioSubtitlesLabelStylesheet,i=e.ccComponentStylesheet
B=(0,x.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:n,transitions:P.default}),D=(0,x.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:t,transitions:P.default}),F=(0,x.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:i,transitions:P.default}),j=!0}}var L=(0,b.fade)({duration:v.Duration.Duration250,to:1}),N=(0,b.fade)({duration:v.Duration.Duration250,to:0})
function H(e){var t=e.height,i=e.visible,r=e.width,l=i?L:N
return(0,m.j)((a||(a=n("6jZX"))).BorderBox,{animation:l,borderWidth:3,cornerRadius:4,fill:(o||(o=n("D+c2"))).FoundationalColors.Red500,height:t,opacity:0,width:r},null,null)}var U=(0,y.s)("Widget","BrandButtonContents",{height:42,width:function(e){return e.width}},!1)},Yowe:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("oMp5"))
n("EyKV"),t.default={forcePostPlayAutoplay:o.default.location.params.forcePostPlayAutoplay,postPlayCountdown:void 0,preview3TrailerStartTimeOffset:void 0}},"ZV/i":function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=o(n("siCl")),r=n("igsZ"),l=o(n("VbXa")),s=n("bGSL"),u=n("/P98"),d=i(n("17x9"))
t.default=function(e){return function(t){var n
function i(){var t=this.props,n=t.active,i=t.postPlayExperience,o=void 0===i?{}:i,r=t.synopsis,l=void 0===r?{}:r,s=o.items,u=((void 0===s?[]:s)[0]||{}).trackingInfo
u&&!this.state.hasLogged&&n&&(e.logEvent("Presented",{trackingInfo:u,view:"boxArt"}),l.evidenceKey&&e.logEvent("Presented",{trackingInfo:(0,a.default)({},u,{evidenceKey:l.evidenceKey}),view:"synopsisEvidence"}),this.setState({hasLogged:!0}))}return(n=function(e){function n(t){var n=e.call(this,t)||this
return n._sendPresentationTracking=i.bind(n),n.state={hasLogged:!1},n}(0,l.default)(n,e)
var o=n.prototype
return o.componentDidMount=function(){this._sendPresentationTracking()},o.componentDidUpdate=function(){this._sendPresentationTracking()},o.render=function(){return(0,r.j)(t,this.props,null,null)},n}(u.Component)).displayName=(0,s.higherOrderName)("PresentationTracking",t),n.propTypes={postPlayExperience:d.shape({items:d.arrayOf(d.object)})},n}}},Zqpp:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s=i(n("siCl")),u=n("e9tE"),d=n("oacT"),c=d.actions.incrementAutoPlayCount,h=d.actions.incrementTimeSinceUserInteraction,f=d.actions.resetInterruptionThreshold
t.default=(0,u.connect)(void 0,(function(e,t){return(0,s.default)({handleSwitchToMdp:(void 0===r?r=i(n("ll1s")):r).default.createHandleSwitchToMdp(e,t)},(0,(o||(o=n("NEBH"))).bindActionCreators)(void 0===l?l={handleBackToBrowse:(void 0===r?r=i(n("ll1s")):r).default.handleBackToBrowse,handlePlayVideo:(void 0===r?r=i(n("ll1s")):r).default.handlePlayVideo,handleQueueError:(void 0===r?r=i(n("ll1s")):r).default.handleQueueError,handleReturnToSourceOfPlay:(void 0===r?r=i(n("ll1s")):r).default.handleReturnToSourceOfPlay,handleViewCredits:(a||(a=n("i7Pr"))).replaceWithPlayback,onBack:(void 0===r?r=i(n("ll1s")):r).default.handleBack,onIncrementAutoPlayCount:c,onIncrementTimeSinceUserInteraction:h,onResetInterruptionThreshold:f,pushFirstThumbRating:n("ZYAJ").pushFirstThumbRating}:l,e))}))},Zu1v:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("oM/y"),l=i(n("Hy99"))
t.default=function(){return(0,l.default)({container:function(){return{base:{color:(o||(o=n("D+c2"))).FoundationalColors.Black,name:"postPlay",rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},leftVignette:function(){var e=(0,r.i)("w8x+valign=stretch","postPlay")
return{base:{backgroundImage:e,name:"leftVignette",rect:{height:612,width:e.sourceRect.width,x:192,y:0}}}},leftVignetteFull:function(){var e=(0,r.i)("w8x+valign=stretch","postPlay")
return{base:{backgroundImage:e,name:"leftVignette",rect:{height:612,width:e.sourceRect.width,x:0,y:0}}}},logoWithoutVideoReturn:function(){return{base:{name:"postPlayLogo",rect:{height:190,width:430,x:880,y:375}}}},logoWithVideoReturn:function(){return{base:{layout:{align:["right","bottom"],layout:"vertical"},name:"postPlayLogo",rect:{height:250,width:600,x:630,y:315}}}},postPlayRow:function(){return{base:{name:"postPlayRow",rect:{height:214,width:500,x:730,y:555}}}},videoReturn:function(){return{base:{name:"videoReturn",rect:{height:188,width:302,x:54,y:23}}}},videoReturnPortal:function(){return{base:{rect:{height:188,width:302,x:54+(a||(a=n("8J/X"))).VIEWPORT_X,y:23+(a||(a=n("8J/X"))).VIEWPORT_Y}}}}})}},aDPN:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=i(n("UN2+"))
t.default=function(e){return(void 0===a?a=(0,r.default)(i(n("uU8G")).default):a)((0,(void 0===o?o=i(n("/C/D")):o).default)(e))}},aovB:function(e,t,n){var i
t.__esModule=!0,t.default=void 0,t.default=function(){var e=n("oEwh").getVideo,t=n("T3qH").default,o=n("Wn1D").default,a=n("xNxB").compose,r=n("fWeL").default,l=n("NA+s").default,s=n("t8OT").default,u=o({stylesheet:l.button}),d=r({stylesheet:l.focusRing})
return s({Button:a(t,(0,(i||(i=n("9IR/"))).getFeature)("ttsEnabled")?n("U6qG").default:n("P1w9").identity)(u),FOCUS_SHADOW_SIZE:2,FocusRing:d,getVideo:e,SHADOW_SIZE:21})}},bbNX:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,r=e.shouldComponentUpdate,l=e.stylesheet
if(!l)throw new Error("EndCapButton: a stylesheet must be specified")
var s=l.withDefaults(a)
return(0,(void 0===i?i=o(n("ICKM")):i).default)({displayName:"EndCapButton",shouldComponentUpdate:r,stylesheet:s,UNSAFE_componentWillReceiveProps:t})}
var a={background:function(){return{base:{flexLayout:{alignItems:"stretch",direction:"row"}}}}}},c55V:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("igsZ"),l=i(n("siCl")),s=n("eNcy"),u=n("oM/y"),d=(0,s.s)("Widget","BackgroundContainer",{ignorePointer:function(e){return!!e.ignorePointer},image:function(e){var t=e.image
return(0,l.default)({},t,{halign:"stretch",valign:"stretch"})},name:function(e){return e.name},rect:function(e){return e.rect},visible:function(e){return!!e.image}},!1),c=(0,s.s)("Widget","vignette",{backgroundImage:function(){return(0,u.i)("gMo+halign=stretch","postPlay")},ignorePointer:!0,name:"vignette",rect:function(e){var t=e.rect
return{height:112,width:t.width,x:0,y:t.height-112}},visible:function(e){return e.visible}},!1),h=(0,s.s)("Widget","text",{ignorePointer:!0,name:"text",rect:function(e){var t=e.rect,n=e.textMargin
return{height:25,width:t.width-n.left,x:n.left,y:t.height-25-n.bottom}},text:function(e){return e.text},textStyle:function(){return{color:(o||(o=n("D+c2"))).FoundationalColors.Gray400,size:18,truncateEnd:!0,weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT}},visible:function(e){return!!e.text}},!1)
t.default=function(e){var t=e.ignorePointer,n=e.image,i=e.name,o=e.rect,a=e.text,l=void 0===a?"":a,s={bottom:Math.floor(.05*o.height),left:Math.floor(.06*o.width)}
return(0,r.j)(d,{children:[(0,r.j)(c,{rect:o,visible:!!l},"vignette",null),(0,r.j)(h,{rect:o,text:l,textMargin:s},null,null)],ignorePointer:t,image:n,name:i,rect:o,text:l},"background",null)}},cVh3:function(e,t,n){var i
t.__esModule=!0,t.default=function(){var e,t=n("QvWg").default,o=n("T3qH").default,a=n("VgeG").default({}),r=n("Wn1D").default,l=n("fWeL").default,s=n("uuge").default,u=n("pihu").default,d=n("M8Hl").default(),c=n("xNxB").compose
e=(0,(i||(i=n("9IR/"))).getFeature)("ttsEnabled")?n("XSsA").default():n("P1w9").identity
var h=s({autoFocus:!0,hasFocusRing:!1,layoutSpacing:8,showUnfocusedRing:!0,textAlign:"center-horizontal center-vertical",useLowPerformanceStack:!0}),f=l({flexLayout:{alignItems:"stretch",direction:"row"},stylesheet:d.focusRing})
return u({ActionButton:h,ActionLabel:t,AutoPlayCountdownText:a,Button:c(o,e)(r({stylesheet:d.button})),FocusRing:f,stylesheet:d})}},ctEV:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("1pHh"))
t.default=(0,o.default)()},d16G:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,f=e.ScrollDown,T=e.ScrollUp,R=e.hasUnfocusedStateElement,E=void 0!==R&&R,k=e.maxItems,A=void 0===k?5:k,M=e.minIndex,O=void 0===M?0:M,W=e.pageBy,B=void 0===W?5:W,D=e.spatialReversed,F=void 0!==D&&D,j=e.stylesheet,V=P(j,I),L=(0,(void 0===l?l=i(n("YPSL")):l).default)({stylesheet:V.collection})
function N(e,t){var n=this.props,i=n.notifyIndexChange,o=n.shouldDropKeyEvent;(0,n.trackCurrentInputSource)(t),!1===o(t)&&this.setState((function(){return{click:!0}}),(function(){i(e)})),t.stopPropagation()}function H(e){var t=C(this.props,B,O,"up")
this._changeIndex(t,e)}function U(e){var t=C(this.props,B,O,"down")
this._changeIndex(t,e)}function q(){var e=this.props
this.state.click&&this.setState({click:!1}),e.onMouseOver&&e.onMouseOver()}function K(e){var t=this.props,i=t.enteredChild,a=t.items,r=t.onExit,l=t.onKeyRight,s=(0,(o||(o=n("9IR/"))).getAppConfig)().isRtl,u=(i?parseInt(i,10):0)||this.props.index,d=(e||{}).direction,c=F&&s?"left":"right"
d===(F&&s?"right":"left")&&r&&r(),d===c&&l&&a&&l(a[u])}function G(e){var t=this.props
this.state.click&&this.setState({click:!1})
var i=t.handleListKeyDown,a=t.onExit,r=t.onKeyEnter,l=e.uiEvent
if("key.back"===l&&a){if(t.animatingAdvisories&&(0,(o||(o=n("9IR/"))).getFeature)("enableDepthTransition"))return void e.stopPropagation();(s||(s=n("DA2W"))).SingleAudio.play((s||(s=n("DA2W"))).UIAudioConfigs.onTransitionClose,(s||(s=n("DA2W"))).DEFAULT_VOLUME),e.stopPropagation(),a()}"key.enter"===l&&r?((s||(s=n("DA2W"))).SingleAudio.play((s||(s=n("DA2W"))).UIAudioConfigs.onSelect,(s||(s=n("DA2W"))).DEFAULT_VOLUME),r()):"key.audio"!==l&&"key.subtitle"!==l||i(e)}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.handleKeyDown=G.bind(n),n.onNoFocusableInDirection=K.bind(n),n.handleMouseOver=q.bind(n),n.handleArrowDown=U.bind(n),n.handleArrowUp=H.bind(n),n._changeIndex=N.bind(n),n.state={click:!1},n}(0,c.default)(t,e)
var i=t.prototype
return i.componentDidUpdate=function(e){var t=this.props.range,i=(void 0===t?{}:t).index,o=e.range;(void 0===o?{}:o).index!==i&&(s||(s=n("DA2W"))).AudioCycler.play((s||(s=n("DA2W"))).UIAudioConfigs.onLRUDMove,(s||(s=n("DA2W"))).DEFAULT_VOLUME)},i.shouldComponentUpdate=function(e){var t=e.entered,n=e.focused
if(t||n)return!0
var i=this.props,o=i.dataLength,a=i.entered,r=i.focused,l=i.highlightedIndex,s=i.index,u=i.isMouseOver,d=i.mouseIsEnabled,c=i.mouseIsShowing,h=i.selectedIndex,f=e.dataLength,p=e.highlightedIndex,g=e.index,m=e.isMouseOver,y=e.mouseIsEnabled,v=e.mouseIsShowing,b=e.selectedIndex
return s!==g||r!==n||a!==t||c!==v||d!==y||o!==f||u!==m||h!==b||l!==p},i.componentDidMount=function(){(s||(s=n("DA2W"))).SingleAudio.load((s||(s=n("DA2W"))).UIAudioConfigs.onPlay)},i.componentWillUnmount=function(){w.clear()},i.render=function(){var e,t,i=this.context,l=this.props,s=l.children,c=l.clip,h=l.dataLength,g=l.effectParams,P=l.enableDepthTransitionOnFocusRing,I=void 0!==P&&P,C=l.entered,R=l.focus,k=l.focusAnimation,M=l.focusKey,O=l.focusTransition,W=l.focused,B=l.focusedPath,D=l.handleFocusRequest,F=l.highlightedIndex,j=l.index,N=l.isMouseOver,H=l.items,U=l.layout,q=l.mouseIsEnabled,K=l.mouseIsShowing,G=l.name,z=l.onIndexChange,X=l.onMouseOut,Z=l.range,Y=l.rect,J=l.scroll,Q=l.selectedIndex,$=l.unstable_effect,ee=this.handleArrowDown,te=this.handleArrowUp,ne=this.handleKeyDown,ie=this.handleMouseOver,oe=c,ae=B&&-1!==(null==B?void 0:B.indexOf(x))||B&&-1!==(null==B?void 0:B.indexOf(_))&&0===(null==R?void 0:R.driveDownIndex)
c||K||!(0,(o||(o=n("9IR/"))).getFeature)("thumbsWayUpActionBarEnabled")||ae||(oe=!0)
var re,le,se=V.resolve(i),ue=se.glowFocusRing,de=se.listContainer,ce=se.mainContainer,he=se.pointerDown,fe=se.pointerUp,pe={clip:oe,name:G,rect:{height:ce.height,width:ce.width,x:null==Y?void 0:Y.x,y:null==Y?void 0:Y.y}},ge=(O||{}).allowAnimation,me=void 0===ge||ge,ye=h>A&&!!C&&!J.minTranslate,ve=h>A&&!!C&&!J.maxTranslate,be={height:(null==ue?void 0:ue.height)||(null==R||null==(e=R.rect)?void 0:e.height),width:(null==ue?void 0:ue.width)||(null==R||null==(t=R.rect)?void 0:t.width),x:null==ue?void 0:ue.x,y:null==ue?void 0:ue.y}
if(null!=R&&R.rect&&(be.x=R.rect.x,be.y=R.rect.y),h>0&&H[j]&&(re=(0,d.j)((r||(r=n("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:10,height:be.height,ignorePointer:!0,isAnimated:!1,position:"inside",visible:!this.state.click&&!(null==R||!R.rect)&&!ae,width:be.width,x:be.x,y:be.y},"sdpFocusRing",null)),E&&h>0){var Se=function(e){var t=e.focus,n=e.height,i=e.highlightedIndex,o=e.isMouseOver,a=e.layout,r=e.mouseIsShowing,l=e.scroll,s=e.selectedIndex,u=e.width,d=!e.entered,c=s>=0?s:e.index
!r||o&&null!=t&&t.rect||(d=!0),r&&o&&i>=0&&(c=i)
var h={height:n,opacity:.5+Math.floor(.01*Math.random()),visible:d,width:u,y:void 0}
if(c&&l&&a&&a[c]){var f=a[c].rect
f&&(h.y=f.y+l.translate)}return h}({entered:C,focus:R,height:null==ue?void 0:ue.height,highlightedIndex:F,index:j,isMouseOver:N,layout:U,mouseIsShowing:K,scroll:J,selectedIndex:Q,width:null==ue?void 0:ue.width})
le=(0,d.j)((r||(r=n("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:1,height:be.height,ignorePointer:!0,isAnimated:!1,name:"unselected",opacity:Se.opacity,position:"inside",visible:Se.visible,width:be.width,x:be.x,y:Se.y||be.y},"sdpDisabledRing",null)}return(0,d.j)((a||(a=n("agVJ"))).Focusable,{__update_handlers__:S,animation:k,animationKey:"seasons",children:[(0,d.j)("Widget",{__update_handlers__:b,__update_style__:v,children:[(0,d.j)(L,{children:s,factoryContext:{allowAnimation:me},focus:R,layout:U,onIndexChange:z,range:Z,scroll:J,transition:l.transition},"items",null),le,(0,d.j)(void 0===u?u=(0,n("eNcy").s)("Widget","FocusRingContainer",{ignorePointer:!0},!1):u,{children:re,effectParams:I?g:void 0,unstable_effect:I?$:void 0},null,null)],onMouseOut:X||p.noop,onMouseOver:ie,staticStyle:de,style:{clip:oe}},"menuContainer",null),q&&T&&(0,d.j)(T,{__update_handlers__:y,name:"listPointerUp",onClick:te,staticStyle:fe,visible:ye},null,null),q&&f&&(0,d.j)(f,{__update_handlers__:m,name:"listPointerDown",onClick:ee,staticStyle:he,visible:ve},null,null)],effectParams:I?void 0:g,focused:W,focusKey:M,onFocusRequest:D,onKeyDown:ne,onNoFocusableInDirection:this.onNoFocusableInDirection,staticStyle:ce,style:pe,testAttributes:w(H),unstable_effect:I?void 0:$},"menuComponent",null)},t}(g.Component)).contextType=h.StylesheetContext,t.displayName="DarwinMenu",t}
var o,a,r,l,s,u,d=n("igsZ"),c=i(n("VbXa")),h=n("s6u8"),f=n("8fke"),p=n("BHy0"),g=n("/P98"),m=["onClick"],y=["onClick"],v=["clip"],b=["onMouseOut","onMouseOver"],S=["onFocusRequest","onKeyDown","onNoFocusableInDirection"],x="/postplay/leftMenu/0",_="/postplay/leftMenu",w=(0,f.memoize)((function(e){var t=[]
for(var n in e)t.push(e[n].type)
return{test_menuItems:t.join(",")}})),P=(0,h.getStylesheetDefaultsResolver)(),I={container:function(){return{base:{}}}}
function T(e){return void 0===e&&(e={}),"label"!==e.type&&"shows"!==e.type&&"series"!==e.type}function C(e,t,n,i){var o,a=e.dataLength,r=e.index,l=e.items
return"up"===i?T(l[o=r>=t?r-t:n])?o:o+1:((o=r+t)>a-1&&(o=a-1),T(l[o])?o:o-1)}},dKCW:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("oM/y"),l=i(n("Hy99"))
t.default=function(){return(0,l.default)({container:function(){return{base:{color:(o||(o=n("D+c2"))).FoundationalColors.Black,name:"postPlay",rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},leftVignette:function(){var e=(0,r.i)("w8x+valign=stretch","postPlay")
return{base:{backgroundImage:e,name:"leftVignette",rect:{height:612,width:e.sourceRect.width,x:192,y:0}}}},logoWithoutVideoReturn:function(){return{base:{name:"postPlayLogo",rect:{height:160,width:600,x:89,y:46}}}},logoWithVideoReturn:function(){return{base:{name:"postPlayLogo",rect:{height:160,width:600,x:353,y:46}}}},postPlayRow:function(){return{base:{name:"postPlayRow",rect:{height:475,width:815,x:465,y:235}}}},videoReturn:function(){return{base:{name:"videoReturn",rect:{height:188,width:302,x:54,y:23}}}},videoReturnPortal:function(){return{base:{rect:{height:188,width:302,x:54+(a||(a=n("8J/X"))).VIEWPORT_X,y:23+(a||(a=n("8J/X"))).VIEWPORT_Y}}}}})}},db0f:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s,u=n("igsZ"),d=i(n("siCl")),c=i(n("VbXa")),h=n("s6u8"),f=i(n("T3qH")),p=i(n("UWxn")),g=n("/P98"),m=["visible"],y=["onClick","onKeyDown"]
function v(e){switch(e.uiEvent){case"key.play":case"key.enter":this.props.executeAction()}}var b=function(e){function t(t){var n=e.call(this,t)||this
return n.handleKeydown=v.bind(n),n}return(0,c.default)(t,e),t.prototype.render=function(){var e=this.context,t=(void 0===s?s=i(n("8UDz")):s).default.resolve(e),c=t.backgroundImage,h=t.bottomContainer,f=t.bottomGradient,p=t.durationContainer,g=t.durationText,v=t.greyBox,b=t.iconContainer,S=t.imageTextContainer,x=t.playIcon,_=t.titleText,w=t.topText,P=t.verticalContainer,I=this.props,T=I.backgroundImage,C=I.durationText,R=I.focusKey,E=I.focused,k=I.staticStyle,A=I.titleText,M=I.topText,O=(0,d.default)({},c,{backgroundImage:T}),W=T?{cornerRadius:(a||(a=n("GQsr"))).CornerRadiusSizes.BorderRadiusSmall}:void 0
return(0,u.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:y,children:(0,u.j)("Widget",{children:[(0,u.j)((void 0===l?l=i(n("11/r")):l).default,{children:M,staticStyle:w},null,null),(0,u.j)("Widget",{children:[(0,u.j)("Widget",{staticStyle:f},null,null),(0,u.j)("Widget",{staticStyle:O,style:W},null,null),(0,u.j)("Widget",{children:[(0,u.j)((void 0===l?l=i(n("11/r")):l).default,{children:A,staticStyle:_,style:{visible:!!A}},null,null),(0,u.j)("Widget",{children:(0,u.j)("Widget",{__update_style__:m,children:[(0,u.j)("Widget",{children:(0,u.j)("Widget",{staticStyle:x},null,null),staticStyle:b},null,null),(0,u.j)((void 0===l?l=i(n("11/r")):l).default,{children:C,staticStyle:g},null,null)],staticStyle:v,style:{visible:!!C}},null,null),staticStyle:p},null,null)],staticStyle:h},null,null)],staticStyle:S},null,null),(0,u.j)((r||(r=n("5A62"))).FocusRing,{height:S.height,position:"inside",visible:E,width:S.width,y:S.y},null,null)],staticStyle:P},null,null),focused:E,focusKey:R,onClick:this.props.executeAction,onKeyDown:this.handleKeydown,staticStyle:k},null,null)},t}(g.Component)
b.contextTypes=h.stylesheetContextTypes,b.displayName="PostPlayBoxshot",t.default=(0,p.default)((0,f.default)(b))},drFt:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.CountdownButton,i=e.stylesheet
function l(){var e=this
this.setState({transitionOut:(0,u.translateX)({duration:1200,easing:s.Easing.EasingQuinticOut,to:-1280})}),this._onCompleteTimeoutId=setTimeout((function(){e.props.onComplete&&e.props.onComplete()}),450)}var b=function(e){function n(t){var n=e.call(this,t)||this
return n.completed=l.bind(n),n}(0,r.default)(n,e)
var o=n.prototype
return o.UNSAFE_componentWillMount=function(){this.setState({transitionOut:null}),this._onCompleteTimeoutId&&clearTimeout(this._onCompleteTimeoutId)},o.render=function(){var e,n,o=this.context,r=this.props,l=r.autoPlay,s=r.background,u=r.continueLabel,d=r.focused,b=r.logo,S=r.message,x=r.upNext,_=i.resolve(o)
return x&&(e=(0,a.j)("Widget",{children:[(0,a.j)("Widget",{__update_style__:g,name:"text",staticStyle:_.upNextText,style:{text:x.text}},"text",null),(0,a.j)("Widget",{__update_style__:p,name:"title",staticStyle:_.upNextTitle,style:{text:x.title}},"title",null)],name:"up-next",staticStyle:_.upNext},"up-next",null)),null!=l&&void 0!==l.seconds&&null!==l.seconds&&l.seconds>0?n=(0,a.j)(t,{active:!0,countdownFrom:l.seconds,focused:d,focusKey:"countdownButton",format:"{seconds}",label:l.text,name:"countdownButton",onCountdownCompleted:this.completed,onSubmit:this.completed},"countdownButton",null):null!=u&&(n=(0,a.j)(t,{active:!1,focused:d,focusKey:"countdownButton",label:u,name:"countdownButton",onSubmit:this.completed},"countdownButton",null)),(0,a.j)("Widget",{animation:this.state.transitionOut,children:[(0,a.j)("Widget",{__update_style__:f,animation:m,staticStyle:_.background,style:{image:s}},"background",null),(0,a.j)("Widget",{__update_style__:h,animation:y,staticStyle:_.logo,style:{image:b}},"logo",null),(0,a.j)("Widget",{__update_style__:c,animation:v,staticStyle:_.message,style:{text:S}},"message",null),e,(0,a.j)("Widget",{children:n,name:"continueToPostPlay",staticStyle:_.continueToPostPlay},"continueToPostPlay",null)],name:"container",staticStyle:_.container},"container",null)},n}(d.Component)
return b.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,b.displayName="PostPlaySeasonRenewal",b}
var o,a=n("igsZ"),r=i(n("VbXa")),l=n("+XfO"),s=n("ClEx"),u=n("Hg/B"),d=n("/P98"),c=["text"],h=["image"],f=["image"],p=["text"],g=["text"],m=(0,u.fade)({duration:9e3,from:0,to:.4}),y=(0,l.h)((0,l.h)((0,u.fade)({duration:0,from:0,to:0}),(0,u.translateY)({duration:0,from:0,to:255})).then((0,u.fade)({duration:s.Duration.Duration1500,from:0,to:1})),(0,u.scale)({duration:s.Duration.Duration1500,from:.75,origin:"center",to:1})).then((0,u.translateY)({duration:s.Duration.Duration1000,easing:s.Easing.EasingQuinticOut,origin:"top-left",to:175})),v=(0,l.h)((0,l.h)((0,u.fade)({duration:0,from:0,to:0}),(0,u.translateY)({duration:0,to:370})).then((0,u.fade)({delay:1500,duration:s.Duration.Duration1000,easing:s.Easing.EasingLinear,from:0,to:1})),(0,u.translateY)({delay:1500,duration:s.Duration.Duration1000,easing:s.Easing.EasingQuinticOut,to:350}))},e3rh:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({middle:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"}}}}})}},ePR1:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,i=e.ActionButton,d=e.ActionLabel,c=e.AutoPlayCountdownText,h=e.stylesheet
function f(e,t){this.props.executeAction({action:e},t)}function p(e,t){var n=this
return void 0===e&&(e=[]),e.map((function(e,o){var a=e.displayText,l=e.name,s="actionButton-"+o
return(0,r.j)(i,{accessibilityText:a,children:(0,r.j)(d,{name:l+"-label",rect:{},text:a},"label",null),focused:t&&0===o,focusKey:s,minWidth:80,name:l,onSubmit:function(t){n.executeAction(e,t),t.stopPropagation()},rect:{},submitKey:u},s,null)}))}return(t=function(e){function t(t){var n=e.call(this,t)||this
return n.buildActionButtons=p.bind(n),n.executeAction=f.bind(n),n}(0,l.default)(t,e)
var n=t.prototype
return n.componentDidUpdate=function(e){0!==e.itemIndex&&this.props.onChangeItemIndex(0)},n.render=function(){var e=this.props,t=e.actions,n=e.countdown,i=e.focused,o=e.name,l=e.rect,s=h.resolve(this.context),u=this.buildActionButtons(t,i)
return(0,r.j)("Widget",{children:(0,r.j)("Widget",{children:[n&&(0,r.j)(c,(0,a.default)({staticStyle:s.titleLine2},n),"auto-play-countdown",null),(0,r.j)("Widget",{children:u,staticStyle:s.buttonWrapper},"button-wrapper",null)],staticStyle:s.detailsContainer},"details",null),name:o,staticStyle:{name:o,rect:l}},"container",null)},t}(s.Component)).contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,t.displayName="hardwire",t}
var o,a=i(n("siCl")),r=n("igsZ"),l=i(n("VbXa")),s=n("/P98"),u=["key.enter","key.play","key.start"]},fVs5:function(e,t,n){var i,o,a,r=n("TqRt").default
t.__esModule=!0,t.default=void 0
var l=r(n("Hy99"))
t.default=(0,l.default)({background:function(){return{base:{image:{halign:"aspect",valign:"aspect"},name:"seasonRenewalBackground",opacity:0,rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},container:function(){return{base:{color:(i||(i=n("D+c2"))).FoundationalColors.Black,name:"seasonRenewalContainer",rect:{height:(a||(a=n("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},continueToPostPlay:function(){return{base:{name:"continueToPostPlay",padding:{right:50},rect:{x:1e3,y:590}}}},countdown:function(){var e={textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray800}}
return{base:{name:"countdown",rect:{height:46,minWidth:30},textStyle:{align:"center-horizontal center-vertical",size:20,variant:"normal",weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}},logo:function(){return{base:{name:"seasonRenewalLogo",opacity:0,rect:{height:140,width:350,x:465,y:255}}}},message:function(){return{base:{name:"seasonRenewalMessage",opacity:0,rect:{height:200,width:600,x:340,y:370},textStyle:{align:"center-horizontal top",color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,richText:!0,size:40,weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0}}}},upNext:function(){return{base:{layout:{align:["right","bottom"],layout:"vertical"},layoutSpacing:10,name:"upNextContainer",rect:{height:100,width:250,x:1e3,y:475}}}},upNextText:function(){return{base:{name:"upNextText",textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray400,lineHeight:24,maxLines:1,richText:!0,size:16,wrap:!1}}}},upNextTitle:function(){return{base:{name:"upNextTitle",textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,lineHeight:24,maxLines:3,padding:{right:50},size:16,spacing:10,truncation:{position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0}}}}})},fWeL:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.animationFactory,d=e.stylesheet,p=c(d,f)
function g(e,n){var i=this.state,o=i.animation,a=i.animationKey,r=i.opacity,l=e.opacity,s={}
t&&(s=t(this.state,e,n))
var u=s,d=u.animation,c=u.animationKey,h=u.opacity,f=void 0!==l?l:h;(d!==o||c!==a||void 0!==f&&f!==r)&&this.setState({animation:d,animationKey:c,opacity:f})}var m=function(e){function t(t){var n=e.call(this,t)||this
return n.setStateFromProps=g.bind(n),n.state={animation:t.animation,animationKey:t.animationKey,opacity:t.opacity},n}(0,l.default)(t,e)
var a=t.prototype
return a.UNSAFE_componentWillMount=function(){this.setStateFromProps(this.props,this.context)},a.UNSAFE_componentWillReceiveProps=function(e,t){this.setStateFromProps(e,t)},a.render=function(){var e=this.context,t=this.props,a=this.state,l=t.children,s=t.image,u=t.margin,d=t.name,c=t.rect,h=t.text,f=t.visible,g=a.animation,m=a.animationKey,y=a.opacity,v=(0,(void 0===o?o=i(n("wNCT")):o).default)(p,e),b={image:s,name:d,rect:c,text:h,visible:f}
return void 0!==y&&(b.opacity=y),void 0!==u&&(b.margin=u),(0,r.j)("Widget",{animation:g,animationKey:m,children:l,staticStyle:v,style:b},m,null)},t}(u.Component)
return m.displayName="ButtonElement",m.contextTypes=(0,a.default)({},s.stylesheetContextTypes,h),m.defaultProps={visible:!0},m}
var o,a=i(n("siCl")),r=n("igsZ"),l=i(n("VbXa")),s=n("s6u8"),u=n("/P98"),d=i(n("N9Ua")),c=(0,s.getStylesheetDefaultsResolver)(),h=d.default.required
function f(){return{base:{name:"element"}}}},"fY+Z":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l=n("igsZ"),s=n("9IR/"),u=i(n("UN2+")),d=(0,s.getFeatures)()
r=d.ratingPromptInPlayback&&d.ttsEnabled?(void 0===a?a=i(n("Ki15")).default.enhancer:a)((function(e){return(0,u.default)((function(t){var i=t.texttospeech,a=i.rateOnPauseRatedThumbsDown,r=i.rateOnPauseRatedThumbsUp,s=i.rateOnPauseRatedThumbsWayUp
return{onRated:function(t){var i=""
t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_UP?i=r:t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_DOWN?i=a:t===(o||(o=n("rvvp"))).ThumbsRating.THUMBS_WAY_UP&&(i=s),e&&(e.stopAndFlush(),e.say((0,l.j)("speak",{children:(0,l.j)("s",{children:i},null,null)},null,null)))}}}))})):n("P1w9").identity,t.default=r},fgiA:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=n("oM/y"),l=i(n("Hy99"))
t.default=function(){return(0,l.default)({autoplay:function(){return{base:{name:"autplay",rect:{height:30,width:719},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,weight:"normal"}},fontHeight:{tall:{rect:{height:40},textStyle:{size:22}}}}},autoplayTitle:function(){return{base:{name:"autoplayTitle",rect:{height:30,width:719},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,truncation:{position:"end"},weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{height:40},textStyle:{size:22}}}}},bob:function(){return{base:{name:"threeUpBob",rect:{height:135,width:719,x:19,y:315}}}},button:function(){return{base:{name:"button"}}},focusRing:function(){var e=(0,r.i)("KO5","postPlay")
return{base:{backgroundImage:e,name:"focus-ring",rect:{height:e.sourceRect.height,width:e.sourceRect.width,x:-2,y:-2}}}},rowContainer:function(){return{base:{name:"listRow",rect:{height:175,width:757,x:0,y:151}}}},rowHeader:function(){return{base:{flexLayout:{direction:"column",justifyContent:"end",padding:2},name:"rowHeader",rect:{height:90,width:825,x:19,y:75}}}},title:function(){return{base:{name:"title",rect:{height:30,width:719},textStyle:{color:(o||(o=n("D+c2"))).FoundationalColors.Gray200,size:26,truncation:{position:"end"},weight:(a||(a=n("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{height:40},textStyle:{size:22}}}}}})}},fsNi:function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var r=a(n("Hy99"))
t.default=(0,r.default)({altText:function(){return{base:{name:"logoAltText",rect:{height:120,width:353,x:250,y:36},textStyle:{align:"bottom right",color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,maxLines:2,size:35,truncateEnd:!0,truncation:{ellipsis:"...",position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0}}}},container:function(){return{base:{}}},image:function(){return{base:{name:"logo",rect:{height:160,width:430,x:250,y:0}}}},supplementalText:function(){return{base:{name:"logoText",rect:{height:26,width:500,x:0,y:105},textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,size:18,truncation:{position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT}}}}})},gVfH:function(e,t){function n(e){return null!=e&&void 0!==e.url&&null!==e.url&&e.url.length>0}t.__esModule=!0,t.default=void 0
var i={getSeasonRenewalProps:function(e){var t=e||{},n=t.assets,i=t.seasonRenewal,o={background:n.SEASON_RENEWAL_BACKGROUND,logo:n.SEASON_RENEWAL_LOGO,message:i.message},a=i||{},r=a.autoPlaySeconds
return a.nextTitle&&(o.upNext={text:"string"==typeof i.upNextText?i.upNextText:"",title:i.nextTitle}),r>0?o.autoPlay={seconds:i.autoPlaySeconds,text:"string"==typeof i.continueInText?i.continueInText:""}:o.continueLabel="string"==typeof i.continue?i.continue:"",o},seasonRenewalEnabled:function(e){var t=!1
if(null!=e){var i=e.assets,o=e.seasonRenewal,a=!1
null!=i&&(a=n(i.SEASON_RENEWAL_BACKGROUND)&&n(i.SEASON_RENEWAL_LOGO))
var r=!1
null!=o&&(r=void 0!==o.message&&null!==o.message&&o.message.length>0),t=a&&r}return t}}
t.default=i},gbck:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.displayName,d=void 0===t?"MenuButton":t,c=e.shouldComponentUpdate,h=e.stylesheet,f=u
return h&&(f=h.withDefaults(u)),(0,(void 0===a?a=i(n("z3Fz")):a).default)({displayName:d,render:function(){var e=this.context,t=this.props,a=this.state.visualState,u=t.children,c=t.disabled,h=t.effectParams,p=t.focusKey,g=t.focused,m=t.margin,y=t.minWidth,v=t.name,b=t.opacity,S=t.padding,x=t.rect,_=t.unstable_effect,w=t.visible,P=(0,(void 0===r?r=i(n("wNCT")):r).default)(f,e,{buttonVisualState:a}).background
if(!P)throw new Error(d+": styles for backgroundStyles must be specified")
var I={}
return void 0!==v&&(I.name=v),x&&(I.rect=x),!0!==w&&!1!==w||(I.visible=w),void 0!==m&&(I.margin=m),void 0!==y&&(I.minWidth=y),void 0!==b&&(I.opacity=b),void 0!==S&&(I.padding=S),(0,l.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:s,children:u,disabled:c,effectParams:h,focused:g,focusKey:p,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:P,style:I,unstable_effect:_},"outer",null)},shouldComponentUpdate:c})}
var o,a,r,l=n("igsZ"),s=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],u={background:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"},height:42,layout:"horizontal",layoutSpacing:0,minWidth:360,name:"background",rect:{height:42}}}}}},isU2:function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("igsZ")
t.default=function(e){var t=e.children,n=e.staticStyle
return(0,i.j)("Widget",{children:t,staticStyle:n},"buttonsContainer",null)}},j9Nx:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,r,l=o(n("w1pw"))
t.default=function(){return n("Ugbe").steadyState((function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),e.uiLayout!==t.uiLayout}),(function(e){var t,s
switch((void 0===e?{}:e).uiLayout){case"seamless":(0,(i||(i=n("9IR/"))).getFeature)("enableNextEpisodeSeamless")?s=n("XdH1").default:(new l.default({message:"Seamless was returned by the backend but is not available client-side. Check for mis-matching features.",source:"packages/darwin/src/bundles/postPlay/factory.js",type:"PostPlayMissingLayout"}).logAsHandledException(),t=null)
break
case"hardwire":t=(void 0===a?a=o(n("A1ul")):a).default
break
default:t=(void 0===r?r=o(n("1v4W")):r).default}return s||t&&t()}))}},jBXm:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a=n("igsZ"),r=i(n("Ki15")).default.list
t.default=r({item:function(e){var t=e.index,i=void 0===t?0:t,r=e.items,l=void 0===r?[]:r,s=(e.texttospeech||{}).itemPosition,u=l[i]||{},d=u.ancestorSynopsis,c=u.ancestorTitle,h=u.synopsis,f=u.title
return(0,a.j)("speak",{children:[(0,a.j)("s",{children:c},null,null),(0,a.j)("s",{children:f},null,null),(0,a.j)("s",{children:(0,(o||(o=n("m5dK"))).nfformat)(s,{itemNumber:i+1,numberOfItems:l.length})},null,null),(0,a.j)("break",{time:1e3},null,null),(0,a.j)("s",{children:(null==h?void 0:h.text)||(null==d?void 0:d.text)},null,null)]},null,null)}})},kqHg:function(e,t,n){t.__esModule=!0,t.default=function(e,t){if(e===t)return!0
if(void 0===e||void 0===t)return!1
var n=o.Children.count(e),a=o.Children.count(t)
return n===a&&(1===n&&1===a?r(e)===r(t):(0,i.shallowEquals)(e,t))}
var i=n("1Oe/"),o=n("/P98"),a=Array.isArray
function r(e){return a(e)?e[0]:e}},lO6x:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=o(n("Hy99"))
t.default=(0,a.default)((function(){var e={textStyle:{color:{a:255,b:51,g:51,r:51}}}
return{base:{layoutSpacing:10,minWidth:20,name:"label",rect:{height:46},textStyle:{align:"center-horizontal center-vertical",color:{a:255,b:230,g:230,r:230},size:20,variant:"normal",weight:(i||(i=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}}))},lke8:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e,t,n){if(void 0===n&&(n=!1),n&&e[t])return t
var i=Object.keys(e),o=n?1:2,a=i.length
return a>2?i[a-o]:i[0]}},ll1s:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s,u,d,c,h,f,p=i(n("siCl")),g=i(n("w1pw")),m=n("NEM1"),y=m.selectors.isInHistory,v=m.actions.historyPop,b=m.actions.historyUpdateQuery
function S(e){void 0===e&&(e={})
var t=e,n=t.itemContext,i=t.videoId,o={disableAutoPlay:!0,itemContext:n,videoId:null!=n&&n.kidsCharacterId?n.kidsCharacterId:i}
return[v(e),b(o)]}var x={createHandleSwitchToMdp:function(e){return function(t){t.showEpisodes?e([(0,(l||(l=n("uVDR"))).popDetails)(),(0,(l||(l=n("uVDR"))).pushDetails)(t),(0,(s||(s=n("nik4"))).pushEpisodes)(t)]):e([(0,(l||(l=n("uVDR"))).popDetails)(),(0,(l||(l=n("uVDR"))).pushDetails)(t)])}},handleBack:function(){return S({cl:[{args:[(o||(o=n("Mmf2"))).SESSION.backCommand],methodName:"startAndImmediatelyEndSession"}]})},handleBackToBrowse:function(e){var t=void 0===e?{eventName:"BackCommand"}:e,i=t.eventName,a=t.payload
return(o||(o=n("Mmf2"))).consolidatedLogger.startAndEndSession(i,a),(0,(r||(r=n("GpT4"))).popToBrowse)()},handlePlayVideo:function(e){return function(t,i){var o,a=(0,p.default)({},e,{sourceOfPlay:"postPlay"}),r=i()
return(void 0===f?f=n("oacT").selectors.getIsSourceOfPlayDetailsCharacter:f)(r)?(a.exitAction=v(),o=[(0,m.historyPopMarker)((d||(d=n("jhs9"))).DETAILS),(0,(h||(h=n("i7Pr"))).pushDetailsPlayback)(a)]):o=y(r,(c||(c=n("HYX5"))).DETAILS)?[(0,(l||(l=n("uVDR"))).popDetails)(),(0,(h||(h=n("i7Pr"))).pushDetailsPlayback)(a)]:[(0,(h||(h=n("i7Pr"))).replaceWithPlayback)(a)],t(o)}},handleQueueError:function(e){var t=new g.default({source:"/postplay",type:(null==e?void 0:e.message)===(a||(a=n("ELY7"))).QUEUE_ERRORS.QueueTooLarge?"PostPlayFullQueueError":"PostPlayQueueError"})
return t.logAsHandledException(),(0,(u||(u=n("4XTo"))).pushErrorPrompt)({detailedError:t,userMessage:e.message})},handleReturnToSourceOfPlay:S}
t.default=x},lwpN:function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var r=a(n("Hy99"))
t.default=(0,r.default)({backgroundImage:function(){return{base:{height:200,image:{halign:"right",valign:"bottom"},width:500}}},fallbackLogoText:function(){return{base:{height:200,textStyle:{align:"bottom right",color:(i||(i=n("D+c2"))).FoundationalColors.Gray200,maxLines:4,name:"fallbackLogoText",size:30,truncateEnd:!0,truncation:{ellipsis:"...",position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!0},width:500}}}})},mZJ5:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e,t){var n=e.postPlayExperience,i=void 0===n?{}:n,o=(t&&t.appConfig||{}).allowAutomaticBehaviors,a=void 0===o||o,r=i.actions,l=void 0===r?[]:r,s=i.items,u=((void 0===s?[]:s)[0]||{}).actions,d=((void 0===u?[]:u)[0]||{}).trackId,c=a&&!0===i.autoplay,h=[]
return l.length&&d&&l.forEach((function(e){switch(e.type){case"thumbrate":h.push({trackingInfo:{trackId:d},type:"Presentation",view:"rateTitleButton"})
break
case"back":h.push({trackingInfo:{trackId:d},type:"Presentation",view:"backButton"})}})),{enableAutoplay:c,leftMenuLogs:h,showLeftMenu:!!l.length,trackId:d}}},mi1D:function(e,t){t.__esModule=!0,t.default=function(e,t,n){var i=(void 0===t?{}:t).layoutSpacing
return e.extend({background:function(){return{base:{layout:"horizontal",layoutSpacing:i,sendRenderProperties:!0}}},middle:function(){return{base:{layout:{align:["center-horizontal","center-vertical"],layout:"horizontal"},width:n}}}})}},mxvP:function(e,t,n){var i=n("284h").default
t.__esModule=!0,t.default=void 0
var o=n("igsZ"),a=n("1dek"),r=i(n("17x9"))
t.default=function(e){var t=void 0===e?{}:e,n=t.AutoPlayCountdownText,i=t.Button,l=t.Label,s=t.PlayIcon,u=t.stylesheet,d=function(e,t){void 0===e&&(e={})
var r,d=e,c=d.active,h=d.countdownFrom,f=d.format,p=d.highlighted,g=d.label,m=d.name,y=d.onCountdownCompleted,v=p?"highlighted":"",b=(0,a.unsafeObjectMerge)(t,{buttonVisualState:v}),S=u.resolve(b,["buttonVisualState"])
c&&(r=(0,o.j)(n,{active:c,countdownFrom:h,format:f,name:"countdown",onCountdownCompleted:y,showValueOnComplete:!0,staticStyle:S.countdown},"countdown",null))
var x=(0,a.unsafeObjectMerge)(e,{focusKey:m,minWidth:100})
return(0,o.j)(i,{__proto__:x,children:[(0,o.j)(s,o.p,null,null),(0,o.j)(l,{name:"label",text:g},"label",null),r]},m,null)}
return d.contextTypes={theme:r.object},d}},nMw6:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r=i(n("J4zp")),l=i(n("rkIG")),s=l.default.getSegmentById,u=l.default.withinDeltaOfSegmentEnd
function d(e){void 0===e&&(e={})
var t=(e||{}).postPlayExperience,n=((void 0===t?{}:t)||{}).autoplay
return void 0!==n&&n}function c(e){if(void 0===e&&(e={}),d(e))return e.postPlayExperience.autoplaySeconds}function h(e){void 0===e&&(e={})
var t=(e||{}).postPlayExperience,n=((void 0===t?{}:t)||{}).isSeamless
return void 0!==n&&n}function f(e){if(void 0===e&&(e={}),h(e)){var t=e.postPlayExperience.currentEpisodeSeamlessData,n=((void 0===t?{}:t)||{}).seamlessEnd
if("number"==typeof n)return n}}var p={credits:"credits-",end:"",intro:"intro-",main:"main-"},g={autoplayOff:(o={},o[p.intro]=p.main,o[p.main]=p.credits,o[p.credits]=p.end,o),autoplayOn:(a={},a[p.intro]=p.main,a[p.main]=p.main,a[p.credits]=p.main,a)}
function m(e,t){return"string"==typeof e&&"string"==typeof t&&(t===p.end?e===p.end:0===e.lastIndexOf(t,0))}function y(e,t){if(void 0===e&&(e={}),t===p.end)return t
var n=e.next,i={};(void 0===n?[]:n).some((function(e){return!!m(e.id,t)&&(i=e,!0)}))
var o=i.id
return void 0===o?null:o}function v(e){var t
return Object.keys(p).some((function(n){return m(e,p[n])&&(t=p[n]),!1})),t}var b={getActivationTimeOverride:function(e){var t=e||{},n=t.postPlayExperience,i=t.useExplicitTime,o=f({postPlayExperience:n})
if(!o||o<0){var a=(n||{}).activationTimesOverride||{},r=a.activationTime,l=a.explicitActivationTime
i&&l>0?o=l:r>0&&(o=r)}return o},getExperienceAutoPlay:c,getNextSeamlessSegmentId:function(e,t){void 0===e&&(e={})
var n=v(e.id)
return y(e,(t?g.autoplayOn:g.autoplayOff)[n])},getNextSeamlessSegmentIdOfType:y,getPossibleSeamlessNextSegments:function(e,t){var n={}
if(e){var i=e.segments,o=void 0===i?{}:i,a=s(e,t).viewableId
if(a){var r=p.main+a
n={currentCreditsId:p.credits+a,currentMainId:r,nextMainId:y(o[r],p.main)}}}return n},getPostPlayNextExperience:function(e){void 0===e&&(e={})
var t=(e||{}).postPlayExperiences
if(t&&t.length>0)return(0,r.default)(t,1)[0]},getPostPlaySeamlessActivationTime:f,getPostPlaySeamlessPlaylist:function(e){if(void 0===e&&(e={}),h(e))return e.postPlayExperience.playlist},getSeamlessCreditsReactivationTime:function(e){if(void 0===e&&(e={}),h(e)){var t=e,n=t.postPlayExperience,i=t.runtime,o=n.currentEpisodeSeamlessData,a=((void 0===o?{}:o)||{}).seamlessCountdownSeconds
if("number"==typeof a&&"number"==typeof i)return i-a-1}},getSeamlessSegmentType:v,isActive:function(e){return e.entered},isExperienceAutoPlay:d,isExperienceSeamless:h,isInSeamlessCountdownWindow:function(e){var t=e.currentSegment,n=e.currentTime,i=e.delta,o=void 0===i?0:i,a=e.postPlayExperience,r=e.runtime
if(t){var l=c({postPlayExperience:a})
return u({currentTime:n,delta:("number"==typeof l?l:5)-o,runtime:r,segment:t})}},isSeamlessPlaylist:function(e){return!(!e||"playlist"!==e.type)},isSeamlessSegmentOfType:m,mdxPostPlayLayoutSupported:function(e){var t=!1
return e&&e.length>0&&e[0]&&e.forEach((function(e){var n=e.uiLayout
"seamless"!==n&&"standard"!==n||(t=!0)})),t}}
t.default=b},nSaE:function(e,t,n){t.__esModule=!0,t.default=void 0
var i=n("9IR/"),o=n("P1w9"),a=(0,i.getFeatures)(),r=o.identity
a.mdxEnabled&&a.mdxPostplayEnabled&&(r=n("CVth").default),t.default=r},pihu:function(e,t,n){t.__esModule=!0,t.default=void 0,t.default=function(e){var t=n("BDKE").default,i=n("Mb8e").default,o=n("ZV/i").default,a=n("UN2+").default,r=n("Yowe").default,l=n("Mmf2").consolidatedLogger,s=n("xNxB").compose,u=e.logger,d=void 0===u?l:u,c=e.nrdp,h=void 0===c?globalThis.nrdp:c,f=e.queryParams
return s(a(i(void 0===f?r:f,h)),o(d))(t(e))}},"rX0/":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t
return t=function(t){function i(){for(var e,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o]
return(e=t.call.apply(t,[this].concat(i))||this).hasOpened=!1,e.sessions=[],e}(0,r.default)(i,t)
var l=i.prototype
return l.componentDidMount=function(){this.hasOpened=!1,this.sessions=[],this.attemptOpen()},l.componentDidUpdate=function(){this.hasOpened||this.attemptOpen()},l.componentWillUnmount=function(){this.close()},l.attemptOpen=function(){var e=this
if(this.props.interactive){var t=this.props.logSessionsWhileShown;(void 0===t?[]:t).forEach((function(t){var i=t.trackingInfo,a=t.type,r=t.view
if(i){var l={trackingInfo:i}
r&&(l.view=r),e.sessions.push((o||(o=n("Mmf2"))).consolidatedLogger.startSession(a,l))}})),this.hasOpened=!0}},l.close=function(){this.sessions.forEach((function(e){(o||(o=n("Mmf2"))).consolidatedLogger.endSession(e)}))},l.render=function(){var t=this.props
return(0,a.j)(e,t,null,null)},i}(s.Component),t.displayName=(0,l.higherOrderName)("LogSessionsWhileShown",e),t}
var o,a=n("igsZ"),r=i(n("VbXa")),l=n("bGSL"),s=n("/P98")},rbN4:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("Ki15")),a=n("xNxB"),r=i(n("T3qH")),l=i(n("ICKM")),s=i(n("9qpt")),u=o.default.button,d=(0,a.compose)(r.default,u)
t.default=d((0,l.default)({stylesheet:s.default}))},"rk+h":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=i(n("Ryb/")),a=i(n("T5et")),r=i(n("0aDR"))
t.default=(0,a.default)({FocusRing:(0,o.default)({stylesheet:r.default})})},rkIG:function(e,t){t.__esModule=!0,t.default=void 0
var n={getCurrentSegmentIdFromViewableTime:function(e){var t=e.currentTime,n=e.playlist,i=e.viewableId,o=(n||{}).segments,a=void 0===o?{}:o,r=null
return Object.keys(a).some((function(e){var n=a[e],o=n.endTimeMs,l=n.startTimeMs,s=void 0===l?0:l,u=n.viewableId
if(i===u){var d=1e3*t
if(d>=s&&(!(o>=0)||d<o))return r=e,!0}return!1})),r},getSegmentById:function(e,t){var n=(e||{}).segments
return(void 0===n?{}:n)[t]||{}},withinDeltaOfSegmentEnd:function(e){var t,n=e.currentTime,i=e.delta,o=e.runtime,a=e.segment,r=(void 0===a?{}:a).endTimeMs
return"number"==typeof r?t=r/1e3:"number"==typeof o&&(t=o),!!(t&&n+i>t)}}
t.default=n},skUI:function(e,t,n){t.__esModule=!0,t.default=function(e){var t=e.visible
return{animation:t?a.key("visible"):r.key("invisible"),key:t?"visible":"invisible"}}
var i=n("ClEx"),o=n("Hg/B"),a=(0,o.fade)({duration:275,easing:i.Easing.EasingQuadraticIn,forceFromOnInterrupt:!1,from:0,to:1}),r=(0,o.fade)({duration:275,easing:i.Easing.EasingQuadraticOut,forceFromOnInterrupt:!1,from:1,to:0})},szem:function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=(void 0===e?{textAlign:r}:e).textAlign,o=void 0===t?r:t
return(0,a.default)({background:function(){return{base:{name:"background"}}},end:function(){return{base:{name:"right-cap"},buttonVisualState:{disabled:{opacity:.5}}}},middle:function(){var e={textStyle:{color:(i||(i=n("D+c2"))).FoundationalColors.White}}
return{base:{grow:1,name:"center",textStyle:{align:o,color:(i||(i=n("D+c2"))).FoundationalColors.Gray500,variant:"normal",wrap:!1}},buttonVisualState:{disabled:{opacity:.5},highlighted:e,pressed:e}}},start:function(){return{base:{name:"left-cap"},buttonVisualState:{disabled:{opacity:.5}}}}})}
var a=o(n("Hy99")),r="left center-vertical"},t8OT:function(e,t,n){var i=n("284h").default,o=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t,i=void 0===e?{}:e,v=i.Button,b=i.FOCUS_SHADOW_SIZE,x=i.FocusRing,P=i.SHADOW_SIZE,I=i.getVideo,T=i.isVideoScalingSupported,C=void 0===T?(a||(a=n("S4TX"))).isVideoScalingSupported:T,R=i.nrdp,E=void 0===R?globalThis.nrdp:R
function k(e){var t=this.state,n=t.audio,i=t.playbackSessionData,o=t.playbackState,a=t.timedText,r=t.viewableId,l=t.currentSegmentId,s=t.currentTime,u=t.reportedSegmentId,d=t.reportedTime,c=t.branched
o!==m.playing&&(s=0,d=0,l=null,u=null,e&&e.timeStamp?i.playRequestTime=e&&e.timeStamp:i.playRequestTime=E.mono()),this.props.handleViewCredits({audio:n,branched:c,currentSegmentId:l,currentTime:s,isUIAutoPlay:!1,playbackSessionData:i,playbackState:m.playing,reportedSegmentId:u,reportedTime:d,repositionType:y.jumpToTime,timedText:a,videoPipelineNumber:0,videoState:this.state.videoState,viewableId:r}),e.stopPropagation()}function A(e){this.setState({currentTime:e,reportedTime:e})}function M(e){var t=this.state.branched,n=e||{},i=n.name,o=n.subState,a=(void 0===o?{}:o).name
t?i!==S&&i!==_&&a!==w&&this.setState({playbackState:m.stopped,showVideo:!1}):i!==S&&this.setState({playbackState:m.stopped,showVideo:!1}),this.setState({videoState:e})}var O=function(e){function i(t){var n=e.call(this,t)||this
n.handleVideoStateChanged=M.bind(n),n.handleCurrentTimeChanged=A.bind(n),n.handleViewCredits=k.bind(n)
var i,o=t.initialStateOfPlayback
if(o){var a=o.playbackState,r=(a===h.default.PLAYBACK_STATES.playing||a===h.default.PLAYBACK_STATES.paused)&&C()
i={audio:o.audio,branched:o.branched,currentSegmentId:o.currentSegmentId,currentTime:o.currentTime,isUIAutoPlay:o.isUIAutoPlay,playbackSessionData:o.playbackSessionData||{},playbackState:a,reportedSegmentId:o.reportedSegmentId,reportedTime:o.reportedTime,repositionType:o.repositionType||y.jumpToTime,showVideo:r,timedText:o.timedText,videoState:o.videoState,viewableId:o.viewableId}}else i={playbackSessionData:{},showVideo:!1}
return n.state=i,n}(0,c.default)(i,e)
var a=i.prototype
return a.UNSAFE_componentWillMount=function(){t=I()},a.render=function(){var e,i=this.context,a=this.props,r=this.state,u=a.active,c=a.animation,h=a.animationKey,f=a.image,p=a.name,m=a.onAnimationCompleted,y=a.portalRect,S=a.rect,_=a.text,w=r.playbackState,I=r.showVideo,T=i.screensaverTimerIsIdle,C=T?void 0:f,R=I&&!0!==T,E={height:y.height-2*P,width:y.width-2*P,x:P+y.x,y:P+y.y},k={height:E.height+2*b,width:E.width+2*b,x:E.x-b,y:E.y-b},A=[]
if(R){var M=r.branched,O=r.currentSegmentId,W=r.currentTime,B=r.isUIAutoPlay,D=r.playbackSessionData,F=r.reportedSegmentId,j=r.reportedTime,V=r.repositionType,L=r.viewableId
A=(0,d.j)(t,{branched:M,currentSegmentId:O,currentTime:W,isUIAutoPlay:B,onCurrentTimeChanged:this.handleCurrentTimeChanged,onVideoStateChanged:this.handleVideoStateChanged,performanceMode:!1,playbackSessionData:D,playbackState:w,rect:E,reportedSegmentId:F,reportedTime:j,repositionType:V,videoOwner:"PostPlayVideoReturn",videoPipelineNumber:0,viewableId:L},"video",null)}if(void 0!==c){var N={height:S.height-2*P,width:S.width-2*P,x:P+S.x,y:P+S.y}
e=(0,d.j)("Widget",{__update_handlers__:g,animation:c,animationKey:h,children:(0,d.j)((void 0===s?s=o(n("c55V")):s).default,{ignorePointer:!0,image:C,name:"videoReturnBoxshot",rect:N,text:_},"boxshot",null),ignorePointer:!0,name:p,onAnimationCompleted:m},"videoReturn",null)}else e=(0,d.j)(v,{children:(0,d.j)((l||(l=n("hGCN"))).PortalDeprecated,{active:u,children:[(0,d.j)((void 0===s?s=o(n("c55V")):s).default,{ignorePointer:!0,image:C,name:"videoReturnBoxshot",rect:E,text:_},"boxshot",null),A,(0,d.j)(x,{name:"focusRing",rect:k,visible:!T},"focusRing",null)],outletName:"backgroundVideo",outletStyle:{drawOrder:1}},"VideoReturn-backgroundVideo",null),data:"video:"+R+"|active:"+u+"|screensaver:"+T,focusKey:p,name:p,onSubmit:this.handleViewCredits,rect:S},"button",null)
return e},i}(f.Component)
return O.displayName="VideoReturn",O.contextTypes=(0,u.default)({},(r||(r=n("s6u8"))).stylesheetContextTypes,{screensaverTimerIsIdle:p.bool}),O.defaultProps={text:""},O}
var a,r,l,s,u=o(n("siCl")),d=n("igsZ"),c=o(n("VbXa")),h=o(n("LpVm")),f=n("/P98"),p=i(n("17x9")),g=["onAnimationCompleted"],m=h.default.PLAYBACK_STATES,y=h.default.REPOSITION_TYPES,v=h.default.VIDEO_STATES,b=h.default.VIDEO_SUBSTATES,S=v.displaying,x=v.loading,_=v.reloading,w=b[x].buffering},tBZ7:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l=n("9IR/"),s=n("xNxB"),u=n("P1w9"),d=i(n("T3qH")),c=i(n("u6Ht")),h=i(n("d16G")),f=i(n("rk+h")),p=i(n("MgfB")),g=(0,l.getFeatures)()
g.ttsEnabled?(a=n("+59q").default,r=n("OElj").default):(r=u.identity,a=u.identity)
var m={height:46,width:g.thumbsWayUpActionBarEnabled?260:400},y=(0,c.default)({focusOffsetResolver:function(e){return(void 0===o?o=i(n("0aDR")):o).default.resolve(e).rect},itemArea:m,layoutDirection:"y",layoutSpacing:{x:0,y:0},layoutWrap:!1,scrollAtPercentage:1,scrollBounded:!0,scrollItemAlign:"center",scrollWrap:!1}),v=(0,h.default)({FocusRing:f.default,pageBy:1,stylesheet:p.default}),b=(0,s.compose)(d.default,y,r,a)
t.default=b(v)},tMLV:function(e,t,n){t.__esModule=!0,t.withGibbonFocusAndPlaybackCommandHandling=function(e){return function(t){return function(e){var t=(0,(i||(i=n("K0jP"))).useEvent)((function(){var t=e.ancestorVideoId,i=e.handleReturnToSourceOfPlay,a=e.itemContext
i({initialStateOfPlayback:{playbackState:(o||(o=n("LpVm"))).PLAYBACK_STATES.stopped},itemContext:a,videoId:t})}));(0,(a||(a=n("SbLe"))).useFocusResourceChangedEvent)((function(e){e||t()})),(0,s.useEffect)((function(){return(0,(r||(r=n("lG+M"))).listenForPlaybackCommands)((function(e){"pause"!==e.type&&"stop"!==e.type||t()}))}),[t])}(t),(0,l.j)(e,t,null,null)}}
var i,o,a,r,l=n("igsZ"),s=n("/P98")},uU8G:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e,t){var n=e.postPlayExperience,i=void 0===n?{}:n,o=(t&&t.appConfig||{}).allowAutomaticBehaviors,a=void 0===o||o,r=i.actions||[]
return{enableAutoplay:a&&!0===i.autoplay&&!!i.autoplayFormat,showLeftMenu:!!r.length}}},uuge:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o,a,r,l,s,u,d,c,h,f,p=n("agVJ"),g=i(n("jGzq")),m=n("xNxB"),y=n("P1w9"),v=p.selectors.isFocused,b=p.selectors.isHighlighted,S=function(e,t){return{focused:v(e,t),highlighted:b(e,t)}}
t.default=function(e){var t=void 0===e?{}:e,v=t.UNSAFE_componentWillReceiveProps,b=t.autoFocus,x=void 0===b||b,_=t.createMenuButton,w=t.filled,P=void 0!==w&&w,I=t.hasKidsStyle,T=void 0!==I&&I,C=t.height,R=void 0===C?42:C,E=t.layoutSpacing,k=t.middleWidth,A=t.shouldComponentUpdate,M=t.showFocusedRing,O=t.showUnfocusedRing,W=t.speech,B=void 0===W||W,D=t.textAlign,F=t.useLowPerformanceStack,j=(void 0===f?f={42:i(n("Kfpz")).default}:f)[R];(0,g.default)(j,"darwinButtons: height "+R+" not supported!")
var V,L=(0,(void 0===d?d=i(n("szem")):d).default)({hasKidsStyle:T,textAlign:D})
if(_)V=(0,(void 0===a?a=i(n("gbck")):a).default)({displayName:"MenuButtonPart",shouldComponentUpdate:A,stylesheet:(0,(void 0===u?u=i(n("NFSk")):u).default)(L,{})})
else{var N=j(L,{filled:P,hasKidsStyle:T,showFocusedRing:M,showUnfocusedRing:O})
V=F?(0,(void 0===r?r=i(n("ICKM")):r).default)({shouldComponentUpdate:A,stylesheet:(0,(void 0===l?l=i(n("mi1D")):l).default)(N,{layoutSpacing:E},k),UNSAFE_componentWillReceiveProps:v}):(0,(void 0===o?o=i(n("bbNX")):o).default)({shouldComponentUpdate:A,stylesheet:(0,(void 0===s?s=i(n("e3rh")):s).default)(N,{}),UNSAFE_componentWillReceiveProps:v})}return(0,m.compose)(x?void 0===h?h=(0,m.compose)(p.withFocusPath,(0,n("e9tE").connect)(S)):h:y.identity,B?void 0===c?c=i(n("Ki15")).default.button:c:y.identity)(V)}},vIYF:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.enableMetaInfoBar,f=function(e){function o(){return e.apply(this,arguments)||this}return(0,u.default)(o,e),o.prototype.render=function(){var e=this.context,o=this.props,u=o.item,d=o.name,f=o.rect
if(!u)return(0,s.j)("Widget",s.p,"postPlayBob",null)
var p=(void 0===l?l=i(n("22Ls")):l).default.resolve(e),g=u.synopsis,m=u.title,y={maxWidth:f.width,text:m}
return(0,s.j)("Widget",{__update_style__:h,children:[(0,s.j)("Widget",{children:[(0,s.j)("Widget",{__update_style__:c,staticStyle:p.title,style:y},"title",null),t&&(null==u?void 0:u.id)&&(0,s.j)((a||(a=n("4boS"))).MetaInfoBar,{videoId:null==u?void 0:u.id},null,null)],staticStyle:p.titleBarContainer},"titleBarContainer",null),(0,s.j)((r||(r=n("1zeB"))).Synopsis,{fontSize:(r||(r=n("1zeB"))).FontSize.Small,synopsis:g,trackingInfo:null==u?void 0:u.trackingInfo,width:(r||(r=n("1zeB"))).Width.Wide},null,null)],style:{name:d,rect:f}},"postPlayBob",null)},o}(d.Component)
return f.contextTypes=(o||(o=n("s6u8"))).stylesheetContextTypes,f.displayName="PostPlayBob",f}
var o,a,r,l,s=n("igsZ"),u=i(n("VbXa")),d=n("/P98"),c=["maxWidth","text"],h=["name","rect"]},"vY/u":function(e,t,n){var i,o=n("TqRt").default
t.__esModule=!0,t.default=function(){var e=n("VgeG").default({}),t=n("vIYF").default({enableMetaInfoBar:!0})
return n("KOf1").default({AutoPlayCountdownText:e,Bob:t,itemArea:{height:192,width:342},rowSpacing:15,stylesheet:(void 0===i?i=o(n("D3YZ")):i).default})}},vbeY:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.itemArea,d=e.rowSpacing,f=e.stylesheet,p=(0,(void 0===a?a=i(n("u6Ht")):a).default)({disableScroll:!0,enablePresentationTracking:!0,itemArea:t,layoutDirection:"x",layoutSpacing:{x:d,y:0},layoutWrap:!1,scrollWrap:!1}),g=(0,(void 0===r?r=i(n("Ryb/")):r).default)({stylesheet:f.focusRing})
function m(e){var t=e.children,a=e.entered,r=e.focus,s=e.focusKey,d=e.focused,c=e.handleFocusRequest,f=e.layout,p=e.name,m=e.range,y=e.rect,v=e.scroll
return(0,u.j)((o||(o=n("agVJ"))).Focusable,{__update_handlers__:h,children:[(0,u.j)(void 0===l?l=(0,i(n("YPSL")).default)():l,{children:t,focus:r,layout:f,range:m,scroll:v},"items",null),(0,u.j)(g,{focus:r,visible:d||a},"focusRing",null)],focused:d,focusKey:s,onFocusRequest:c,style:{ignorePointer:!0,name:p,rect:y}},"row",null)}return m.displayName="PostPlay Row List",(0,c.default)(s(p(m)))}
var o,a,r,l,s,u=n("igsZ"),d=n("9IR/"),c=i(n("T3qH")),h=["onFocusRequest"]
s=(0,d.getFeatures)().ttsEnabled?n("jBXm").default:n("P1w9").identity},vii4:function(e,t,n){var i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0,t.default=function(e){var t=(0,(void 0===o?o=a(n("4TvI")):o).default)(e)
return(0,(void 0===i?i=a(n("6FRo")):i).default)(t)}},x84e:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.defaultVisible,c=e.isSeasonsLabel,y=e.stylesheet,v=e.transitions,b=p(y,m),S=function(e){function t(t){var n=e.call(this,t)||this
return n.state={animation:{}},n}(0,s.default)(t,e)
var r=t.prototype
return r.UNSAFE_componentWillReceiveProps=function(e,t){var o=e.buttonVisualState,r=e.mouseIsShowing,l=this.props.buttonVisualState,s=t.buttonVisualState,u=this.context.buttonVisualState,d=e.animate,h=e.visible,f=this.props.visible
if(d&&(!c&&(void 0===a?a=i(n("KKEs")).default.PRESSED:a)!==s&&(void 0===a?a=i(n("KKEs")).default.PRESSED:a)!==u&&(s!==u||o!==l)||c&&h!==f)){var p=v(e,t)
!p||!c&&r||this.setState({animation:p})}},r.componentDidMount=function(){var e=this.props
if(e.visible&&c){var t=v(e)
t&&this.setState({animation:t})}},r.shouldComponentUpdate=function(e,t,n){var i=this.context,o=this.props,a=this.state,r=o.animate,l=o.name,s=o.rect,u=o.text,c=o.visible,h=a.animation,f=void 0===h?{}:h,p=i.buttonVisualState,g=e.animate,m=e.mouseIsShowing,y=e.name,v=e.rect,b=e.text,S=e.visible,x=t.animation,_=void 0===x?{}:x,w=n.buttonVisualState
return!!m||c!==S||u!==b||f!==_||p!==w||l!==y||r!==g||!(0,d.areRectsEqual)(s,v)},r.render=function(){var e=this.context,t=this.props,a=this.state,r=t.name,s=t.rect,u=t.text,d=t.visible,c=(0,(void 0===o?o=i(n("wNCT")):o).default)(b,e,t),h=a&&a.animation||{}
return(0,l.j)("Widget",{__update_style__:f,animation:h.animation,animationKey:h.key,staticStyle:c,style:{name:r,rect:s,text:u,visible:d}},"label",null)},t}(h.Component)
return S.displayName="AnimatedLabel",S.contextTypes=(0,r.default)({},u.stylesheetContextTypes,{buttonVisualState:g.buttonVisualState}),S.defaultProps={animate:!0,visible:t},S}
var o,a,r=i(n("siCl")),l=n("igsZ"),s=i(n("VbXa")),u=n("s6u8"),d=n("Eu0p"),c=i(n("N9Ua")),h=n("/P98"),f=["name","rect","text","visible"],p=(0,u.getStylesheetDefaultsResolver)(),g=c.default.required
function m(){return{base:{name:"label"}}}},zOpD:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=function(e,t){var n,i,o,a,l
switch(e){case"play":case"play_recap":case"play_trailer":case"play_branching":case"watch_live":l=u("play")
break
case"play_from_beginning":l=u("playFromBeginning")
break
case"ads_change_plan":l=u("lock")
break
case"reminder":l=null!=t&&t.isReminderSet?u("checkmark"):u("notification")
break
case"more_episodes":case"episodes_trailers":case"trailers_and_more":l=u("episodes")
break
case"more_like_this":l=u("moreLikeThis")
break
case"credits":l=u("castAndCrew")
break
case"undo":l=u("undo")
break
case"title_group":l=u("titleGroups")
break
case"remove":l=u("remove")
break
case"close":l=u("close")
break
case"add":case"playlist":l=u("add")
break
case"audio_subtitles":l=u("audioAndSubtitles")
break
case"checked":l=u("checkmark"),n=1,i=null==t?void 0:t.margin
break
case"unchecked":l=u("checkmark"),n=0
break
case"back":o=null==t?void 0:t.x,a=null==t?void 0:t.y,l=u("back")
break
case"backBright":l=u("back")
break
case"viewCredits":o=null==t?void 0:t.x,a=null==t?void 0:t.y,l=u("endCredits")
break
case"mdp":l=u("info")
break
case"content_warning":o=null==t?void 0:t.x,a=null==t?void 0:t.y,l=u("warning")
break
case"content_warning_back":o=null==t?void 0:t.x,a=null==t?void 0:t.y,l=u("backArrow")
break
case"menu":o=null==t?void 0:t.x,a=null==t?void 0:t.y,l=u("menu")}return l?(0,r.j)(l,{margin:i,name:e,opacity:n,rect:{height:26,width:26,x:o,y:a}},"icon",null):null}
var o,a,r=n("igsZ"),l=i(n("Hy99")),s=new Map
function u(e){var t,i,r=s.get(e)
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
default:return null}return r=function(e){var t=e.base,i=e.highlighted,o=e.pressed,r=void 0===o?i:o,s=(void 0===a?a=(0,n("9IR/").getFeatures)():a).thumbsWayUpActionBarEnabled,u=(0,l.default)((function(){return{base:{height:42,image:t,margin:{left:s?12:11,right:6}},buttonVisualState:{highlighted:{image:i},pressed:{image:r}}}}))
return n("fWeL").default({stylesheet:u})}({base:i,highlighted:t}),s.set(e,r),r}}}])


