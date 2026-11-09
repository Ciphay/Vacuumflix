(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{"1pHh":function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=i("igsZ"),u=n(i("VbXa")),l=i("agVJ"),s=i("/P98"),d=n(i("lke8")),c=l.selectors.getActivePath,h=l.selectors.getHighlights,f=l.actions.moveFocus,v=function(e){return{focusedPath:c(e),highlights:h(e)}},g={setFocusPath:f}
t.default=function(e){return function(t){var n=function(i){function n(){return i.apply(this,arguments)||this}(0,u.default)(n,i)
var a=n.prototype
return a.getChildContext=function(){var t=this.context,i=this.props,n=i.focusedPath,a=i.highlights,o=void 0===a?{}:a,r=i.setFocusPath
return{focus:{highlightedPath:(0,d.default)(o,n,e),keyIndex:1,parentPath:t,parts:n?n.split("/"):[],path:n,setFocusPath:r}}},a.render=function(){return(0,r.j)(t,this.props,null,null)},n}(s.Component)
return n.displayName="LegacyFocusAdapter",n.contextType=l.ParentFocusPathContext,n.childContextTypes=i("cMGP").default,(void 0===o?o=(0,(a||(a=i("e9tE"))).connect)(v,g,null,{areStatesEqual:i("1V6g").areStatesEqual}):o)(n)}}},"2VMB":function(e,t,i){t.__esModule=!0,t.default=function(e,t){var i=t.buttonVisualState
return{animation:"highlighted"===i||"pressed"===i?o.key(i):r.key(i),key:i}}
var n=i("ClEx"),a=i("Hg/B"),o=a.Animation.fade({duration:275,easing:n.Easing.EasingLinear,from:0,to:1}),r=a.Animation.fade({duration:275,easing:n.Easing.EasingLinear,from:1,to:0})},"2hav":function(e,t,i){t.__esModule=!0,t.default=function(e){var t=(null==e?void 0:e.nrdjs)||globalThis.nrdjs
return function(e){var i=e=e||{},n=i.syncIfPossible,o=i.viewables,r=void 0===o?[]:o,u=e,l=u.onError,s=u.onSuccess,d=s||l
s=s||a.noop,l=l||a.noop,t.playbackMetadata.audioSubtitlesObjList(r,!!n,(function(e){d&&(function(e,t){var i=!!t
if(i&&Array.isArray(e))for(var n=e.length,a=0;a<n;++a){var o=e[a].viewableId
if(!(i=i&&t[o]&&!t[o].errorcode))break}return i}(r,e)?s(e):l(e))}))}},t.getSubtitleOffTrack=function(e){var t=(0,n.findIndex)(e,(function(e){return e.isNoneTrack}))
return t>=0?e[t]:e[(0,n.findIndex)(e,(function(e){return e.isForcedNarrative}))]}
var n=i("B2eo"),a=i("BHy0")},"8/gs":function(e,t,i){var n
t.__esModule=!0,t.getAudioTracks=function(e,t,o,r,u,l){void 0===u&&(u=!1),void 0===l&&(l=(0,(n||(n=i("9IR/"))).getFeatures)())
var s,d,c,h,f=0,v=0,g=[]
return e&&e.length&&(u||(g[v]={label:(null==t?void 0:t.audioLabel)||a,type:"label"},v++),e.forEach((function(e){(c=e.label)||(c=e.languageDescription),h="5.1"===e.channels&&(l.enableDolbyAtmos&&e.surroundFormatLabel?"("+e.surroundFormatLabel+")":"(5.1)"),g[v]={checked:e.id===o,descriptionLabel:h,isAudio:!0,label:c,track:e,type:"audioDynamic"},g[v].checked?(f=v,s=e):e.id===r&&(d=v),v++})),!s&&g[d]&&(f=d,s=g[d].track,g[d].checked=!0)),{items:g,length:v,selectedIndex:f,selectedTrack:s}}
var a="Audio"},"85i5":function(e,t,i){t.__esModule=!0,t.default=function(e,t){var i=t.buttonVisualState
return{animation:"highlighted"===i||"pressed"===i?o.key(i):r.key(i),key:i}}
var n=i("ClEx"),a=i("Hg/B"),o=a.Animation.fade({duration:275,easing:n.Easing.EasingLinear,from:.4,to:1}),r=a.Animation.fade({duration:275,easing:n.Easing.EasingLinear,to:1})},"93Qs":function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=i("igsZ"),u=i("eNcy"),l=i("/P98"),s=n(i("fY+Z"))
t.default=(0,l.memo)((0,s.default)((function(e){var t=e.buttonType,n=e.defaultFocus,u=e.disabled,s=e.effectParams,c=e.entered,h=void 0!==c&&c,f=e.entityType,v=e.focusKey,g=e.focused,m=e.item,p=m.disableTooltips,b=m.itemContext,y=m.onShowFirstRatingModal,k=m.onUserInteraction,S=m.videoId,T=e.name,_=e.onFocused,x=e.onRated,A=e.onThumbsAnimationComplete,w=e.opacity,I=e.prioritizeStoreForThumbs,C=e.rect,E=e.unstable_effect,M=(0,(a||(a=i("agVJ"))).useEntered)(v,h),D=(0,(a||(a=i("agVJ"))).useFocused)(v,g)
return(0,l.useEffect)((function(){null==_||_(M)}),[M,_]),(0,r.j)(d,{children:(0,r.j)((o||(o=i("O4e8"))).ThumbRating,{buttonType:t,defaultFocus:n,disabled:u,entityType:f,focused:D,isTooltipEnabled:!p,itemContext:b,maxWidth:400,onRated:x,onShowFirstRatingModal:y,onThumbsAnimationComplete:A,onUserInteraction:k,prioritizeStoreForThumbs:I,videoId:S},null,null),effectParams:s,focused:D,focusKey:v,height:null==C?void 0:C.height,name:T,opacity:w,unstable_effect:E,width:null==C?void 0:C.width,x:null==C?void 0:C.x,y:null==C?void 0:C.y},null,null)})),(function(e,t){return e.disabled===t.disabled&&e.entered===t.entered&&e.focused===t.focused&&e.focusKey===t.focusKey&&e.onFocused===t.onFocused&&e.onRated===t.onRated&&e.opacity===t.opacity&&e.unstable_effect===t.unstable_effect&&e.effectParams===t.effectParams}))
var d=(0,u.s)("Focusable","MenuButton",{clip:!1,height:function(e){return e.height},ignorePointer:!0,name:function(e){return e.name},opacity:function(e){return e.opacity},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!1)},"9Tj8":function(e,t,i){var n
t.__esModule=!0,t.default=void 0
var a={getTrackDescriptor:function(e){var t=(void 0===n?n=(0,i("lUUO").getPlayerPool)():n).getPlayerControl()
return t?t.createAudioTrackParam(e):e}}
t.default=a},Cc0U:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e,t,u){return(0,r.default)({pointerAffordance:function(){var r
return{base:{height:55,name:"pointerUp",width:e,x:u||(t-e)/2},pointerAffordanceState:(r={},r[(void 0===a?a=n(i("eCN6")):a).default.none]={backgroundImage:(0,o.i)("X9a+halign=center+valign=center","pointeraffordances")},r[(void 0===a?a=n(i("eCN6")):a).default.highlighted]={backgroundImage:(0,o.i)("F0E+halign=center+valign=center","pointeraffordances")},r)}}})}
var a,o=i("oM/y"),r=n(i("Hy99"))},"D+qg":function(e,t){t.__esModule=!0,t.getSelectedTextTrack=function(e,t,i){var n=e&&e.length,a=i.defaultTimedText,o={}
return n>0?(e.forEach((function(e){t&&t===e.id?o.trackMatch=e:a&&a===e.id?o.trackDefault=e:null===a&&e.isNoneTrack&&(o.none=e)})),0===Object.keys(o).length?e[0]:o.trackMatch||o.trackDefault||o.none):{id:"none"}}},E5xj:function(e,t,i){var n
t.__esModule=!0,t.default=void 0
var a=i("agVJ"),o=i("e9tE"),r=a.selectors.getEnteredChild,u=a.selectors.getHighlightEnteredChild,l=a.selectors.isEntered,s=a.selectors.isFocused,d=a.selectors.isHighlightEntered
t.default=(0,o.connect)((function(e,t){return{entered:l(e,t),enteredChild:r(e,t),focused:s(e,t),highlightEntered:d(e,t),highlightEnteredChild:u(e,t),mouseIsEnabled:(0,(n||(n=i("B1ka"))).isMouseEnabled)(e),mouseIsShowing:(0,(n||(n=i("B1ka"))).isMouseVisible)(e)}}))},FSMm:function(e,t,i){var n=i("284h").default,a=i("TqRt").default
t.__esModule=!0,t.AudioSubtitlesMenu=y,t.AudioSubtitlesMenuWithLegacyAutoFocus=t.AudioSubtitlesMenuWithDetailsTransitions=void 0
var o,r,u,l,s,d,c,h,f=i("igsZ"),v=a(i("3ovq")),g=i("/P98"),m=a(i("jLxr")),p=["onAnimationCompleted"],b="/details/audiosubs"
function y(e){var t=e.animation,v=e.animationKey,m=e.currentAudioTrack,y=e.currentSubtitleTrack,k=e.focusKey,S=e.focused,T=e.height,_=e.hideContainer,x=e.listenForPointerBack,A=e.onAnimationCompleted,w=e.onExit,I=e.onTracksChange,C=e.onTransitionCompleted,E=e.playbackAuth,M=e.playbackState,D=e.summary,L=e.uiLabel,j=e.videoState,F=e.viewableId,O=e.width,P=e.x,R=e.y,N=(0,(void 0===u?u=a(i("YjFv")):u).default)("audioSubtitles"),W=(0,(h||(h=i("esji"))).useAudioSubTracks)({currentAudioTrack:m,currentSubtitleTrack:y,playbackAuth:E,playbackState:M,strings:N,summary:D,uiLabel:L,videoState:j,viewableId:F});(0,g.useEffect)((function(){if(x)return(void 0===l?l=n(i("isk9")):l).addEventListener(b,(s||(s=i("BGhG"))).POINTER_BACK,w),function(){(void 0===l?l=n(i("isk9")):l).removeEventListener(b,(s||(s=i("BGhG"))).POINTER_BACK,w)}}),[x,w])
var K=(0,(o||(o=i("K0jP"))).useEvent)((function(e){var t,n,o,u,l,s,d,h
if("audio"===(null==e?void 0:e.uiTrackType)){var f=W.activeSubtitleTrack
t=(void 0===r?r=a(i("9Tj8")):r).default.getTrackDescriptor(e.track),n=(void 0===r?r=a(i("9Tj8")):r).default.getTrackDescriptor((o=e.track,u=f,h=o.defaultTimedText,o.subtitleTracks.forEach((function(e){var t=e.id,i=e.isNoneTrack
t===(null==u?void 0:u.id)&&(l=e),t===h&&(s=e),i&&(d=e)})),l||s||d))}else{var v=W.activeAudioTrack
t=(void 0===r?r=a(i("9Tj8")):r).default.getTrackDescriptor(v),n=(void 0===r?r=a(i("9Tj8")):r).default.getTrackDescriptor(e.track)}(c||(c=i("nJiZ"))).logger.onTrackSelected(e),I({audioTrack:t,timedTextTrack:n})}))
return(0,f.j)((d||(d=i("mdzX"))).AudioSubtitlesList,{__update_handlers__:p,animation:t,animationKey:v,focused:S,focusKey:k,height:T,hideContainer:_,onAnimationCompleted:null!=A?A:C,onExit:w,onSubmit:K,strings:N,tracks:W,width:O,x:P,y:R},v,null)}t.AudioSubtitlesMenuWithLegacyAutoFocus=(0,v.default)(y),t.AudioSubtitlesMenuWithDetailsTransitions=(0,m.default)(y)},GlEF:function(e,t,i){t.__esModule=!0,t.useAudioSubtitlesTestAttributes=void 0,i("/P98"),t.useAudioSubtitlesTestAttributes=function(){return{test_listItemNames:[],test_selectedAudioTrack:"",test_selectedSubtitleTrack:""}}},ICKM:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,h=e.displayName,f=void 0===h?"ThreePartButton":h,v=e.shouldComponentUpdate,g=e.stylesheet,m=c
return g&&(m=g.withDefaults(c)),(0,(void 0===o?o=n(i("z3Fz")):o).default)({displayName:f,render:function(){var e=this.context,t=this.props,o=this.state.visualState,c=t.children,h=t.disabled,f=t.flexLayout,v=t.focusKey,g=t.focused,p=t.margin,b=t.minWidth,y=t.mirror,k=t.name,S=t.opacity,T=t.rect,_=t.style,x=void 0===_?{}:_,A=t.text,w=t.visible,I=(0,(void 0===r?r=n(i("wNCT")):r).default)(m,e,{buttonVisualState:o}),C=I.background,E=I.end,M=I.middle,D=I.start,L=(0,l.default)({},x)
return void 0!==k&&(L.name=k),T&&(L.rect=T),!0!==w&&!1!==w||(L.visible=w),void 0!==p&&(L.margin=p),void 0!==S&&(L.opacity=S),void 0!==f&&(L.flexLayout=f),void 0!==y&&(L.mirror=y),(0,u.j)((a||(a=i("agVJ"))).Focusable,{__update_handlers__:d,children:[(0,u.j)("Widget",{staticStyle:D},"start",null),(0,u.j)("Widget",{__update_style__:s,children:c,staticStyle:M,style:{minWidth:b,text:A}},"middle",null),(0,u.j)("Widget",{staticStyle:E},"end",null)],disabled:h,focused:g,focusKey:v,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:C,style:L},"outer",null)},shouldComponentUpdate:v,UNSAFE_componentWillReceiveProps:t})}
var a,o,r,u=i("igsZ"),l=n(i("siCl")),s=["minWidth","text"],d=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],c={background:function(){return{base:{name:"button"}}},end:function(){return{base:{name:"end"}}},middle:function(){return{base:{name:"middle"}}},start:function(){return{base:{name:"start"}}}}},"J/Gg":function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=i("igsZ"),u=n(i("aSmh")),l=u.default.findSection,s=u.default.findTitleIndexForItem
function d(e,t){return void 0!==e.index&&s(e.items,e.index)!==s(t.items,t.index)}function c(e,t){var i=e.index,n=e.items,a=void 0===n?[]:n,o=t.index,r=t.items,u=void 0===r?[]:r
if(i===o){var l=a[i]||{},s=u[o]||{}
return l.checked!==s.checked}return!1}var h={contextSpeech:function(e){var t=e.index,n=e.items,o=void 0===n?[]:n,u=e.texttospeech,s=(u||{}).itemPosition,d=l(o,t)
return d&&u&&(0,r.j)("speak",{children:[(0,r.j)("s",{children:d.title},null,null),(0,r.j)("s",{children:d.size&&s&&(0,(a||(a=i("m5dK"))).nfformat)(s,{itemNumber:d.index+1,numberOfItems:d.size})},null,null)]},null,null)},hasChangedSection:d,hasChangedValue:c,itemSpeech:function(e){var t=e.index,n=e.items,o=void 0===n?[]:n,u=e.texttospeech||{},l=u.isSelected,s=u.selectInstruction,d=o[t]||{},c=d.checked,h=d.descriptionLabel,f=d.label,v=h?f+h:f,g=c?(0,r.j)("s",{children:l},null,null):(0,r.j)("speak",{children:[(0,r.j)("break",{time:1500},null,null),(0,r.j)("s",{children:s&&(0,(a||(a=i("m5dK"))).nfformat)(s,{menuItem:v})},null,null)]},null,null)
return(0,r.j)("speak",{children:[(0,r.j)("s",{children:v},null,null),g]},null,null)},sayContextSpeechWhen:function(e,t){return(0,(o||(o=i("vSZY"))).hasEntered)(e,t)||d(e,t)},sayItemSpeechWhen:function(e,t){return(0,(o||(o=i("vSZY"))).hasChangedFocus)(e,t)||c(e,t)}}
t.default=h},Kfpz:function(e,t,i){t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{showFocusedRing:!0}:t,r=a.filled,u=void 0!==r&&r,l=a.showFocusedRing,s=void 0===l||l,d=a.showUnfocusedRing,c=void 0!==d&&d,h={url:{url:void 0,visible:!1}},f=function(e){return e?{color:(n||(n=i("D+c2"))).FoundationalColors.Black}:(n||(n=i("D+c2"))).FoundationalColors.White}
return e.extend({end:function(e){var t=s||c?o():{},i={backgroundImage:s?t.focusedRight:void 0},n={backgroundImage:s?t.focusedLeft:void 0}
if(u){var a=f(!0),r=f(!1)
i.textStyle=a,i.color=r,n.textStyle=a,n.color=r}return{base:{backgroundImage:c?t.unfocusedRight:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:i,true:n}},pressed:{isRtl:{false:i,true:n}}}},isRtl:{true:{backgroundImage:c?t.unfocusedLeft:h}}}},middle:function(e){var t=s||c?o():{},i={backgroundImage:s?t.focusedCenter:void 0}
if(u){var n=f(!0),a=f(!1)
i.textStyle=n,i.color=a}return{base:{backgroundImage:c?t.unfocusedCenter:h,cache:c,rect:{height:42},textStyle:{size:20,weight:"normal"}},buttonVisualState:{highlighted:i,pressed:i}}},start:function(e){var t=s||c?o():{},i={backgroundImage:s?t.focusedLeft:void 0},n={backgroundImage:s?t.focusedRight:void 0}
if(u){var a=f(!0),r=f(!1)
i.textStyle=a,i.color=r,n.textStyle=a,n.color=r}return{base:{backgroundImage:c?t.unfocusedLeft:h,cache:c,rect:{height:42,width:11}},buttonVisualStateIsRtl:{buttonVisualState:{highlighted:{isRtl:{false:i,true:n}},pressed:{isRtl:{false:i,true:n}}}},isRtl:{true:{backgroundImage:c?t.unfocusedRight:h}}}}})}
var n,a=i("oM/y")
function o(){return{focusedCenter:(0,a.i)("JkR+halign=stretch","button"),focusedLeft:(0,a.i)("wxV","button"),focusedRight:(0,a.i)("A3M","button"),unfocusedCenter:(0,a.i)("F7C+halign=stretch","button"),unfocusedLeft:(0,a.i)("yag","button"),unfocusedRight:(0,a.i)("MFy","button")}}},NFSk:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({background:function(){return{base:{rect:{height:42}}}}})}},Sr9q:function(e,t){t.__esModule=!0,t.getTrackInfoForLogging=function(e){var t=e.new_track_id,i="A"===t[0]
return{descriptor:(i?"A":"S")+":"+e.language+":"+e.trackType+(i?":"+e.channels:(e.isNoneTrack?":Off":"")+(e.isForcedNarrative?":FN":"")),new_track_id:t}}},Y3bQ:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.ThumbRateButton,a=void 0===t?void 0===v?v=(0,n(i("j7sC")).default)():v:t,o=e.ThumbsMenuBar,p=void 0===o?(void 0===l?l=n(i("93Qs")):l).default:o
return function(e){var t,o,l,v=e.childFocusKey,b=e.dataId,y=void 0===b?"":b,_=e.effectParams,x=e.extraData,C=void 0===x?{}:x,j=e.focused,N=e.focusedIndex,K=e.handleClick,V=e.hasOpacityOnMouseIsShowing,q=void 0===V||V,z=e.isLiveEvent,H=e.isReminderSet,Z=e.key,G=e.labelStyleSheet,J=e.listContext,X=e.listItem,Y=e.liveState,Q=e.mouseIsShowing,$=e.onThumbsMenuFocused,ee=e.parentDisabled,te=e.styles,ie=e.unstable_effect,ne=X.data,ae=ne.checked,oe=ne.iconTypeOverride,re=ne.interactiveProgress,ue=ne.label,le=ne.onSubmit,se=ne.subLabel,de=ne.type,ce=null!=(t=null==ne||null==(o=ne.routeParams)?void 0:o.bookmarkOverride)?t:ne.bookmark,he=X.rect,fe=J.range,ve=J.scroll,ge=(fe||{}).index,me=(G?M(G):L).DarwinButtonLabel,pe=te
pe||(pe={dynamicLabel:{height:42,width:250}})
var be,ye,ke=0,Se=300
ce&&"play_branching"===de?(0,(void 0===s?s=n(i("YmLT")):s).default)(re)&&(ke=0,be=(0,m.j)(void 0===g?g=(0,n(i("ifK+")).default)({ProgressBar:void 0===h?h=(0,T.default)({stylesheet:k.progressBarStyles,transitions:n(i("2VMB")).default}):h}):g,{percentage:ke,rect:{height:4,width:70},videoId:ne.videoId},"progress",null),Se=252):ce&&"play"===de&&(0,(u||(u=i("lUUO"))).canResume)(ce.position,ce.runtime,ce.watchedToEndOffset)&&(ke=ce.position/ce.runtime*100,be=(0,m.j)(void 0===h?h=(0,T.default)({stylesheet:k.progressBarStyles,transitions:n(i("2VMB")).default}):h,{percentage:ke,rect:{height:4,width:70},visible:j||0===N},"progress",null),Se=252)
var Te=!1
if("audioDynamic"===de)ye=(0,(void 0===c?c=n(i("zOpD")):c).default)(ae?"checked":"unchecked",{}),ne&&ne.descriptionLabel&&(Te=!0)
else if("mylist"===de){var _e=ne.queue&&ne.queue.inQueue?"remove":"add"
ye=(0,(void 0===c?c=n(i("zOpD")):c).default)(_e,{})}else ye="cw_remove"===de?(0,(void 0===c?c=n(i("zOpD")):c).default)(ne.removed?"undo":"close",{}):"reminder"===de?(0,(void 0===c?c=n(i("zOpD")):c).default)("reminder",{isReminderSet:H}):oe?(0,(void 0===c?c=n(i("zOpD")):c).default)(oe,{}):(0,(void 0===c?c=n(i("zOpD")):c).default)(de,{})
var xe=!1
he.y+ve.translate!==0||ve.minTranslate||(xe=!0),he.y+he.height+ve.translate>=ve.rect.height&&!ve.maxTranslate&&(xe=!0)
var Ae,we=xe?.5:1
switch(q||(we=1),le?Ae=le:K&&(Ae=function(e){e.cancelBubble=!0,K(v,X)}),de){case"content_warning_back":case"content_warning":l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,(0,m.j)(me,{mouseIsShowing:Q,rect:{height:42,width:Se},text:ue},"label",null)],effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
case"play":case"play_branching":var Ie=(0,m.j)(me,{mouseIsShowing:Q,rect:{height:42,width:Se},text:ue},"label",null)
if(z&&Y===(d||(d=i("hoTQ"))).ViewableLiveState.live){var Ce=te.glowFocusRing.backgroundImage.sourceRect.width,Ee=(j||N===(null==ne?void 0:ne.index))&&!Q
l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:(0,m.j)(B,{children:[(0,m.j)(U,{height:42,visible:Ee,width:Ce},null,null),(0,m.j)((r||(r=i("djiD"))).HStack,{childLayoutSpacing:6,children:[ye,Ie],height:42,padding:{left:12},valign:"center",width:Ce},null,null)],width:Ce},null,null),data:{dataId:y,focused:j,percentage:ke},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)}else l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,Ie,be],data:{dataId:y,focused:j,percentage:ke},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
case"thumbrate":l=(0,m.j)(a,{__update_handlers__:I,effectParams:_,extraData:C,focused:j,focusKey:v,item:ne,name:Z,onClick:Ae,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie,videoId:ne.videoId},Z,null)
break
case"action_bar":l=(0,m.j)(p,{disabled:ee,effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onFocused:$,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
case"movies":case"season":case"similars":case"trailers":var Me=function(e,t,i,n,a){void 0===e&&(e={}),void 0===n&&(n={})
var o=!1,r=e,u=r.clickedSeasonIndex,l=r.entered,s=r.highlightedSeasonIndex,d=r.isMouseOver,c=n.absoluteIndex
return l||d?a&&!d?((void 0===u||u<0)&&t===c||u>=0&&u===c)&&(o=!0):(s===c&&a||!a&&(i||t===c))&&(o=!0):(u===c&&t!==u||t===c&&(u===t||void 0===u||u<0))&&(o=!0),o}(C,ge,j,X,Q)
l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{__update_handlers__:w,children:[(0,m.j)(F,{mouseIsShowing:Q,name:"season",text:ue},"season",null),(0,m.j)(void 0===D?D=(0,S.default)({defaultVisible:!1,isSeasonsLabel:!0,stylesheet:E,transitions:n(i("skUI")).default}):D,{mouseIsShowing:Q,name:"label",text:se,visible:!0},"label",null)],data:{dataId:y,labelVisible:Me},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onClick:Ae,onSubmit:Ae,opacity:we,rect:he,submitKey:"key.submit",unstable_effect:ie},Z,null)
break
case"series":case"shows":case"label":l=(0,m.j)("Widget",{__update_style__:A,focusKey:v,staticStyle:te.staticLabel,style:{name:v,opacity:we,rect:he,text:ue}},Z,null)
break
case"audioDynamic":W()
var De=ne.isAudio
l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,(0,m.j)("Widget",{children:[(0,m.j)(O,{mouseIsShowing:Q,text:ue},"audio",null),De?(0,m.j)(P,{mouseIsShowing:Q,text:ne.descriptionLabel,visible:Te},"description",null):(0,m.j)(R,{mouseIsShowing:Q,text:ne.descriptionLabel,visible:Te},"description",null)],rect:pe.dynamicLabelAudio.rect,style:pe.dynamicLabelAudio},"label",null)],data:ae,dataIndex:X.dataIndex,effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
case"mylist":var Le=X.absoluteIndex
l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,(0,m.j)(me,{mouseIsShowing:Q,rect:pe.dynamicLabel,text:ue},"label",null)],data:{dataId:y,isFocused:j||Le===ge,opacity:we},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
case"reminder":l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,(0,m.j)(me,{mouseIsShowing:Q,rect:pe.dynamicLabel,text:ue},"label",null)],data:{isReminderSet:H},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)
break
default:l=(0,m.j)(void 0===f?f=(0,n(i("uuge")).default)({createMenuButton:!0,showFocusedRing:!1,useLowPerformanceStack:!1}):f,{children:[ye,(0,m.j)(me,{mouseIsShowing:Q,rect:pe.dynamicLabel,text:ue},"label",null)],data:{dataId:y,opacity:we},effectParams:_,focused:j,focusKey:v,item:ne,name:Z,onSubmit:Ae,opacity:we,rect:he,unstable_effect:ie},Z,null)}return l}}
var a,o,r,u,l,s,d,c,h,f,v,g,m=i("igsZ"),p=i("eNcy"),b=i("ClEx"),y=i("Hg/B"),k=i("DtLd"),S=n(i("x84e")),T=n(i("qELT")),_=n(i("Hy99")),x=n(i("85i5")),A=["name","opacity","rect","text"],w=["onClick"],I=["onClick"],C=(0,_.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!0}},buttonVisualState:{highlighted:e,pressed:e}}})),E=(0,_.default)((function(){var e={opacity:0,textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{minWidth:10,name:"label",opacity:0,rect:{height:42,width:120},textStyle:{align:"right center-vertical",color:{a:255,b:105,g:105,r:105},size:16,weight:"normal"},width:120},buttonVisualState:{highlighted:e,pressed:e}}}))
function M(e){return{DarwinButtonLabel:(0,S.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:e?C.extend(e):C,transitions:x.default})}}var D,L=M(),j=(0,_.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{grow:1,name:"label",padding:{left:11},rect:{height:42,width:228},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},variant:"normal",weight:"normal",wrap:!1}},buttonVisualState:{highlighted:e,pressed:e}}})),F=(0,S.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:j,transitions:x.default}),O=null,P=null,R=null,N=!1
function W(){if(!N){var e=function(){var e=C.extend((function(){return{base:{grow:1,minWidth:50,name:"label",padding:{left:5},rect:{height:42},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},maxLines:1,size:20,truncation:{position:"end"},weight:"normal",wrap:!1}}}})),t=(0,_.default)((function(){var e={textStyle:{color:{a:255,b:255,g:255,r:255}}}
return{base:{name:"description",padding:{left:5},textStyle:{align:"left center-vertical",color:{a:255,b:153,g:153,r:153},size:20,truncation:{position:"end"},weight:"normal",wrap:!1},width:90},buttonVisualState:{highlighted:e,pressed:e},language:{ar:{width:85},th:{width:85}}}})),i=t.extend((function(){return{language:{ar:{width:130},th:{width:130},zh:{width:130}},locale:{"pt-PT":{width:185}}}}))
return{audioDescriptionComponentStylesheet:t,audioSubtitlesLabelStylesheet:e,ccComponentStylesheet:i}}(),t=e.audioDescriptionComponentStylesheet,i=e.audioSubtitlesLabelStylesheet,n=e.ccComponentStylesheet
O=(0,S.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:i,transitions:x.default}),P=(0,S.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:t,transitions:x.default}),R=(0,S.default)({defaultVisible:!0,isSeasonsLabel:!1,stylesheet:n,transitions:x.default}),N=!0}}var K=(0,y.fade)({duration:b.Duration.Duration250,to:1}),V=(0,y.fade)({duration:b.Duration.Duration250,to:0})
function U(e){var t=e.height,n=e.visible,r=e.width,u=n?K:V
return(0,m.j)((o||(o=i("6jZX"))).BorderBox,{animation:u,borderWidth:3,cornerRadius:4,fill:(a||(a=i("D+c2"))).FoundationalColors.Red500,height:t,opacity:0,width:r},null,null)}var B=(0,p.s)("Widget","BrandButtonContents",{height:42,width:function(e){return e.width}},!1)},YjFv:function(e,t,i){t.__esModule=!0,t.default=function(e){var t,i=(0,n.useFalcor)([["videosStringsCommon",e]]).data
return null==i||null==(t=i.videosStringsCommon)?void 0:t[e]}
var n=i("pbgz")},Ziy1:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e,t,u){return(0,r.default)({pointerAffordance:function(){var r
return{base:{height:55,name:"pointerDown",width:e,x:u||(t-e)/2},pointerAffordanceState:(r={},r[(void 0===a?a=n(i("eCN6")):a).default.none]={backgroundImage:(0,o.i)("Jhv+halign=center+valign=center","pointeraffordances")},r[(void 0===a?a=n(i("eCN6")):a).default.highlighted]={backgroundImage:(0,o.i)("9qP+halign=center+valign=center","pointeraffordances")},r)}}})}
var a,o=i("oM/y"),r=n(i("Hy99"))},aSmh:function(e,t){function i(e){return e&&"label"===e.type}function n(e,t){return void 0===e&&(e=[]),t<0||t>e.length?null:i(e[t]||{})?t:n(e,t-1)}function a(e,t,n){void 0===e&&(e=[]),void 0===n&&(n=0)
var o=e[t]
return!n&&i(o)?a(e,t+1,n):!o||i(o)?n:a(e,t+1,n+1)}t.__esModule=!0,t.default=void 0
var o={findMenuSizeForTitle:a,findSection:function(e,t){void 0===e&&(e=[])
var i=n(e,t)
return null===i?null:{index:t-(i+1),size:a(e,i),title:e[i]&&e[i].label}},findTitleIndexForItem:n}
t.default=o},acVY:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.HDivider=function(e){return(0,s.j)(c,(0,d.default)({direction:"horizontal",name:"HDivider"},e),null,null)},t.VDivider=function(e){return(0,s.j)(c,(0,d.default)({direction:"vertical",name:"VDivider"},e),null,null)}
var a,o,r,u,l,s=i("igsZ"),d=n(i("siCl"))
function c(e){var t=e.direction,n=e.emphasis,d=void 0===n?"high":n,c=e.height,f=e.name,v=void 0===f?"Divider":f,g=e.text,m=e.width,p=e.x,b=e.y,y=(0,(r||(r=i("GQsr"))).useTheme)(),k="horizontal"===t
return(0,(o||(o=i("8rh/"))).useSpeech)({condition:!!g,text:g}),g?(0,s.j)((u||(u=i("djiD"))).Stack,{children:[(0,s.j)(h,{emphasis:d,height:k?1:void 0,layoutStretch:1,width:k?void 0:1},null,null),(0,s.j)((l||(l=i("AHGZ"))).Text,{children:g,layoutSpacing:y.DividerSpaceBetween,textColor:y.DividerForeground,type:(a||(a=i("BKc6"))).TextType.DividerText},null,null),(0,s.j)(h,{emphasis:d,height:k?1:void 0,layoutSpacing:y.DividerSpaceBetween,layoutStretch:1,width:k?void 0:1},null,null)],direction:t,halign:"center",height:c,name:v,valign:"center",width:m,x:p,y:b},null,null):(0,s.j)(h,{emphasis:d,height:k?1:c,width:k?m:1,x:p,y:b},null,null)}var h=(0,i("eNcy").s)("Widget","DividerLine",{color:function(e){var t=e.emphasis,i=e.theme
return"high"===t?i.DividerBorderHigh:i.DividerBorderLow},height:function(e){return e.height},layoutSpacing:function(e){return e.layoutSpacing},layoutStretch:function(e){return e.layoutStretch},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!0)},bbNX:function(e,t,i){var n,a=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.UNSAFE_componentWillReceiveProps,r=e.shouldComponentUpdate,u=e.stylesheet
if(!u)throw new Error("EndCapButton: a stylesheet must be specified")
var l=u.withDefaults(o)
return(0,(void 0===n?n=a(i("ICKM")):n).default)({displayName:"EndCapButton",shouldComponentUpdate:r,stylesheet:l,UNSAFE_componentWillReceiveProps:t})}
var o={background:function(){return{base:{flexLayout:{alignItems:"stretch",direction:"row"}}}}}},c9Or:function(e,t,i){var n
if(t.__esModule=!0,t.default=void 0,(0,i("9IR/").getFeatures)().ttsEnabled){var a=i("Ki15").default.list,o=i("J/Gg").default
n=a({context:o.contextSpeech,flushWhen:o.hasChangedSection,item:o.itemSpeech,sayContextWhen:o.sayContextSpeechWhen,sayItemWhen:o.sayItemSpeechWhen})}else n=i("P1w9").identity
t.default=n},d16G:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t,f=e.ScrollDown,w=e.ScrollUp,C=e.hasUnfocusedStateElement,E=void 0!==C&&C,M=e.maxItems,D=void 0===M?5:M,L=e.minIndex,j=void 0===L?0:L,F=e.pageBy,O=void 0===F?5:F,P=e.spatialReversed,R=void 0!==P&&P,N=e.stylesheet,W=x(N,A),K=(0,(void 0===u?u=n(i("YPSL")):u).default)({stylesheet:W.collection})
function V(e,t){var i=this.props,n=i.notifyIndexChange,a=i.shouldDropKeyEvent;(0,i.trackCurrentInputSource)(t),!1===a(t)&&this.setState((function(){return{click:!0}}),(function(){n(e)})),t.stopPropagation()}function U(e){var t=I(this.props,O,j,"up")
this._changeIndex(t,e)}function B(e){var t=I(this.props,O,j,"down")
this._changeIndex(t,e)}function q(){var e=this.props
this.state.click&&this.setState({click:!1}),e.onMouseOver&&e.onMouseOver()}function z(e){var t=this.props,n=t.enteredChild,o=t.items,r=t.onExit,u=t.onKeyRight,l=(0,(a||(a=i("9IR/"))).getAppConfig)().isRtl,s=(n?parseInt(n,10):0)||this.props.index,d=(e||{}).direction,c=R&&l?"left":"right"
d===(R&&l?"right":"left")&&r&&r(),d===c&&u&&o&&u(o[s])}function H(e){var t=this.props
this.state.click&&this.setState({click:!1})
var n=t.handleListKeyDown,o=t.onExit,r=t.onKeyEnter,u=e.uiEvent
if("key.back"===u&&o){if(t.animatingAdvisories&&(0,(a||(a=i("9IR/"))).getFeature)("enableDepthTransition"))return void e.stopPropagation();(l||(l=i("DA2W"))).SingleAudio.play((l||(l=i("DA2W"))).UIAudioConfigs.onTransitionClose,(l||(l=i("DA2W"))).DEFAULT_VOLUME),e.stopPropagation(),o()}"key.enter"===u&&r?((l||(l=i("DA2W"))).SingleAudio.play((l||(l=i("DA2W"))).UIAudioConfigs.onSelect,(l||(l=i("DA2W"))).DEFAULT_VOLUME),r()):"key.audio"!==u&&"key.subtitle"!==u||n(e)}return(t=function(e){function t(t){var i=e.call(this,t)||this
return i.handleKeyDown=H.bind(i),i.onNoFocusableInDirection=z.bind(i),i.handleMouseOver=q.bind(i),i.handleArrowDown=B.bind(i),i.handleArrowUp=U.bind(i),i._changeIndex=V.bind(i),i.state={click:!1},i}(0,c.default)(t,e)
var n=t.prototype
return n.componentDidUpdate=function(e){var t=this.props.range,n=(void 0===t?{}:t).index,a=e.range;(void 0===a?{}:a).index!==n&&(l||(l=i("DA2W"))).AudioCycler.play((l||(l=i("DA2W"))).UIAudioConfigs.onLRUDMove,(l||(l=i("DA2W"))).DEFAULT_VOLUME)},n.shouldComponentUpdate=function(e){var t=e.entered,i=e.focused
if(t||i)return!0
var n=this.props,a=n.dataLength,o=n.entered,r=n.focused,u=n.highlightedIndex,l=n.index,s=n.isMouseOver,d=n.mouseIsEnabled,c=n.mouseIsShowing,h=n.selectedIndex,f=e.dataLength,v=e.highlightedIndex,g=e.index,m=e.isMouseOver,p=e.mouseIsEnabled,b=e.mouseIsShowing,y=e.selectedIndex
return l!==g||r!==i||o!==t||c!==b||d!==p||a!==f||s!==m||h!==y||u!==v},n.componentDidMount=function(){(l||(l=i("DA2W"))).SingleAudio.load((l||(l=i("DA2W"))).UIAudioConfigs.onPlay)},n.componentWillUnmount=function(){_.clear()},n.render=function(){var e,t,n=this.context,u=this.props,l=u.children,c=u.clip,h=u.dataLength,g=u.effectParams,x=u.enableDepthTransitionOnFocusRing,A=void 0!==x&&x,I=u.entered,C=u.focus,M=u.focusAnimation,L=u.focusKey,j=u.focusTransition,F=u.focused,O=u.focusedPath,P=u.handleFocusRequest,R=u.highlightedIndex,N=u.index,V=u.isMouseOver,U=u.items,B=u.layout,q=u.mouseIsEnabled,z=u.mouseIsShowing,H=u.name,Z=u.onIndexChange,G=u.onMouseOut,J=u.range,X=u.rect,Y=u.scroll,Q=u.selectedIndex,$=u.unstable_effect,ee=this.handleArrowDown,te=this.handleArrowUp,ie=this.handleKeyDown,ne=this.handleMouseOver,ae=c,oe=O&&-1!==(null==O?void 0:O.indexOf(S))||O&&-1!==(null==O?void 0:O.indexOf(T))&&0===(null==C?void 0:C.driveDownIndex)
c||z||!(0,(a||(a=i("9IR/"))).getFeature)("thumbsWayUpActionBarEnabled")||oe||(ae=!0)
var re,ue,le=W.resolve(n),se=le.glowFocusRing,de=le.listContainer,ce=le.mainContainer,he=le.pointerDown,fe=le.pointerUp,ve={clip:ae,name:H,rect:{height:ce.height,width:ce.width,x:null==X?void 0:X.x,y:null==X?void 0:X.y}},ge=(j||{}).allowAnimation,me=void 0===ge||ge,pe=h>D&&!!I&&!Y.minTranslate,be=h>D&&!!I&&!Y.maxTranslate,ye={height:(null==se?void 0:se.height)||(null==C||null==(e=C.rect)?void 0:e.height),width:(null==se?void 0:se.width)||(null==C||null==(t=C.rect)?void 0:t.width),x:null==se?void 0:se.x,y:null==se?void 0:se.y}
if(null!=C&&C.rect&&(ye.x=C.rect.x,ye.y=C.rect.y),h>0&&U[N]&&(re=(0,d.j)((r||(r=i("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:10,height:ye.height,ignorePointer:!0,isAnimated:!1,position:"inside",visible:!this.state.click&&!(null==C||!C.rect)&&!oe,width:ye.width,x:ye.x,y:ye.y},"sdpFocusRing",null)),E&&h>0){var ke=function(e){var t=e.focus,i=e.height,n=e.highlightedIndex,a=e.isMouseOver,o=e.layout,r=e.mouseIsShowing,u=e.scroll,l=e.selectedIndex,s=e.width,d=!e.entered,c=l>=0?l:e.index
!r||a&&null!=t&&t.rect||(d=!0),r&&a&&n>=0&&(c=n)
var h={height:i,opacity:.5+Math.floor(.01*Math.random()),visible:d,width:s,y:void 0}
if(c&&u&&o&&o[c]){var f=o[c].rect
f&&(h.y=f.y+u.translate)}return h}({entered:I,focus:C,height:null==se?void 0:se.height,highlightedIndex:R,index:N,isMouseOver:V,layout:B,mouseIsShowing:z,scroll:Y,selectedIndex:Q,width:null==se?void 0:se.width})
ue=(0,d.j)((r||(r=i("5A62"))).FocusRing,{cornerRadius:"BorderRadiusCompact",drawOrder:1,height:ye.height,ignorePointer:!0,isAnimated:!1,name:"unselected",opacity:ke.opacity,position:"inside",visible:ke.visible,width:ye.width,x:ye.x,y:ke.y||ye.y},"sdpDisabledRing",null)}return(0,d.j)((o||(o=i("agVJ"))).Focusable,{__update_handlers__:k,animation:M,animationKey:"seasons",children:[(0,d.j)("Widget",{__update_handlers__:y,__update_style__:b,children:[(0,d.j)(K,{children:l,factoryContext:{allowAnimation:me},focus:C,layout:B,onIndexChange:Z,range:J,scroll:Y,transition:u.transition},"items",null),ue,(0,d.j)(void 0===s?s=(0,i("eNcy").s)("Widget","FocusRingContainer",{ignorePointer:!0},!1):s,{children:re,effectParams:A?g:void 0,unstable_effect:A?$:void 0},null,null)],onMouseOut:G||v.noop,onMouseOver:ne,staticStyle:de,style:{clip:ae}},"menuContainer",null),q&&w&&(0,d.j)(w,{__update_handlers__:p,name:"listPointerUp",onClick:te,staticStyle:fe,visible:pe},null,null),q&&f&&(0,d.j)(f,{__update_handlers__:m,name:"listPointerDown",onClick:ee,staticStyle:he,visible:be},null,null)],effectParams:A?void 0:g,focused:F,focusKey:L,onFocusRequest:P,onKeyDown:ie,onNoFocusableInDirection:this.onNoFocusableInDirection,staticStyle:ce,style:ve,testAttributes:_(U),unstable_effect:A?void 0:$},"menuComponent",null)},t}(g.Component)).contextType=h.StylesheetContext,t.displayName="DarwinMenu",t}
var a,o,r,u,l,s,d=i("igsZ"),c=n(i("VbXa")),h=i("s6u8"),f=i("8fke"),v=i("BHy0"),g=i("/P98"),m=["onClick"],p=["onClick"],b=["clip"],y=["onMouseOut","onMouseOver"],k=["onFocusRequest","onKeyDown","onNoFocusableInDirection"],S="/postplay/leftMenu/0",T="/postplay/leftMenu",_=(0,f.memoize)((function(e){var t=[]
for(var i in e)t.push(e[i].type)
return{test_menuItems:t.join(",")}})),x=(0,h.getStylesheetDefaultsResolver)(),A={container:function(){return{base:{}}}}
function w(e){return void 0===e&&(e={}),"label"!==e.type&&"shows"!==e.type&&"series"!==e.type}function I(e,t,i,n){var a,o=e.dataLength,r=e.index,u=e.items
return"up"===n?w(u[a=r>=t?r-t:i])?a:a+1:((a=r+t)>o-1&&(a=o-1),w(u[a])?a:a-1)}},e3rh:function(e,t){t.__esModule=!0,t.default=function(e){return e.extend({middle:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"}}}}})}},esji:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.buildTracks=h,t.useAudioSubTracks=function(e){var t=e.currentAudioTrack,a=e.currentSubtitleTrack,f=e.playbackAuth,v=e.playbackState,g=e.strings,m=e.summary,p=e.uiLabel,b=e.videoState,y=e.viewableId,k=(0,c.useState)(),S=(0,d.default)(k,2),T=S[0],_=S[1],x=(null==f?void 0:f.isPreReleasePinProtected)&&(v===(r||(r=i("LpVm"))).PLAYBACK_STATES.stopped||(null==b?void 0:b.name)!==(r||(r=i("LpVm"))).VIDEO_STATES.displaying)
return(0,c.useEffect)((function(){y&&m&&y===(null==m?void 0:m.id)&&(x?_({error:null==g?void 0:g.previewContentError,isError:!0}):(0,(void 0===s?s=n(i("2hav")):s).default)()({onError:function(e){(o||(o=i("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:e||{},message:"mdpAudioSubtitlesError"}),_({error:null==g?void 0:g.genericError,isError:!0})},onSuccess:function(e){if(e&&e[y]&&!e[y].error){var n=h({currentAudioTrack:t,currentSubtitleTrack:a,rawTrackData:e[y],strings:g})
_(n)}else{var r;(o||(o=i("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:null==(r=e[y])?void 0:r.error,message:"mdpAudioSubtitlesError"}),_({error:null==g?void 0:g.genericError,isError:!0})}},viewables:[{branched:(0,(void 0===l?l=n(i("o+kE")):l).default)(m),uiLabel:(0,(u||(u=i("zpVr"))).getUiLabelForLiveEvent)({current:{summary:m},uiLabel:p}),viewableId:y}]}))}),[t,a,x,g,m,p,y]),T}
var a,o,r,u,l,s,d=n(i("J4zp")),c=i("/P98")
function h(e){var t,n,o,r,u=e.currentAudioTrack,l=e.currentSubtitleTrack,s=e.rawTrackData,d=e.strings,c=s.audioTracks,h=s.defaultTracks,f=s.maxRecommendedAudioRank,v=void 0===f?5:f,g=s.maxRecommendedTextRank,m=void 0===g?5:g,p=(0,(a||(a=i("9IR/"))).getFeatures)().enableDolbyAtmos,b=u?u.id:null==(t=h[0])?void 0:t.audioTrackId,y=l?l.id:null==(n=h[0])?void 0:n.subtitleTrackId,k=!1,S=!1,T=[],_=[],x=[],A=[]
return c.forEach((function(e){var t=e.id===b,i={isActive:t,label:e.label?e.label:e.languageDescription,track:e,uiTrackType:"audio"}
if("5.1"===e.channels&&(p&&e.surroundFormatLabel?i.label=i.label+" ("+e.surroundFormatLabel+")":i.label=i.label+" (5.1)"),e.rank<=v?x.push(i):(T.push(i),t&&(k=!0)),t){o=e
var n=!1,a={index:0,isDefaultSubtitleTrack:!1,isNoneSubtitleTrack:!1,isRecommendedSubtitleTrack:!1,isValidFallback:!1}
e.subtitleTracks.forEach((function(t){var i,o,u=t.id===y,l={isActive:u,label:t.languageDescription,track:t,uiTrackType:"text"}
"closedcaptions"===(null==t?void 0:t.rawTrackType)&&(l.label=l.label+" ("+(null!=(o=null==d?void 0:d.ccLabel)?o:"CC")+")")
var s=t.rank<=m
if(s?A.push(l):(_.push(l),u&&(S=!0)),u)r=t,n=!0
else if(!(n||null!=(i=a)&&i.isDefaultSubtitleTrack)){var c=t.id===e.defaultTimedText,h=t.isNoneTrack;(c||h)&&(a={index:s?A.length-1:_.length-1,isDefaultSubtitleTrack:c,isNoneSubtitleTrack:h,isRecommendedSubtitleTrack:s,isValidFallback:!0})}})),!n&&a.isValidFallback&&(a.isRecommendedSubtitleTrack?A[a.index].isActive=!0:(_[a.index].isActive=!0,S=!0))}})),{activeAudioTrack:o,activeSubtitleTrack:r,isError:!1,isOtherAudioTrackActive:k,isOtherSubtitleTrackActive:S,otherAudioTracks:T,otherSubtitleTracks:_,recommendedAudioTracks:x,recommendedSubtitleTracks:A}}},fWeL:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.animationFactory,d=e.stylesheet,v=c(d,f)
function g(e,i){var n=this.state,a=n.animation,o=n.animationKey,r=n.opacity,u=e.opacity,l={}
t&&(l=t(this.state,e,i))
var s=l,d=s.animation,c=s.animationKey,h=s.opacity,f=void 0!==u?u:h;(d!==a||c!==o||void 0!==f&&f!==r)&&this.setState({animation:d,animationKey:c,opacity:f})}var m=function(e){function t(t){var i=e.call(this,t)||this
return i.setStateFromProps=g.bind(i),i.state={animation:t.animation,animationKey:t.animationKey,opacity:t.opacity},i}(0,u.default)(t,e)
var o=t.prototype
return o.UNSAFE_componentWillMount=function(){this.setStateFromProps(this.props,this.context)},o.UNSAFE_componentWillReceiveProps=function(e,t){this.setStateFromProps(e,t)},o.render=function(){var e=this.context,t=this.props,o=this.state,u=t.children,l=t.image,s=t.margin,d=t.name,c=t.rect,h=t.text,f=t.visible,g=o.animation,m=o.animationKey,p=o.opacity,b=(0,(void 0===a?a=n(i("wNCT")):a).default)(v,e),y={image:l,name:d,rect:c,text:h,visible:f}
return void 0!==p&&(y.opacity=p),void 0!==s&&(y.margin=s),(0,r.j)("Widget",{animation:g,animationKey:m,children:u,staticStyle:b,style:y},m,null)},t}(s.Component)
return m.displayName="ButtonElement",m.contextTypes=(0,o.default)({},l.stylesheetContextTypes,h),m.defaultProps={visible:!0},m}
var a,o=n(i("siCl")),r=i("igsZ"),u=n(i("VbXa")),l=i("s6u8"),s=i("/P98"),d=n(i("N9Ua")),c=(0,l.getStylesheetDefaultsResolver)(),h=d.default.required
function f(){return{base:{name:"element"}}}},"fY+Z":function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r,u=i("igsZ"),l=i("9IR/"),s=n(i("UN2+")),d=(0,l.getFeatures)()
r=d.ratingPromptInPlayback&&d.ttsEnabled?(void 0===o?o=n(i("Ki15")).default.enhancer:o)((function(e){return(0,s.default)((function(t){var n=t.texttospeech,o=n.rateOnPauseRatedThumbsDown,r=n.rateOnPauseRatedThumbsUp,l=n.rateOnPauseRatedThumbsWayUp
return{onRated:function(t){var n=""
t===(a||(a=i("rvvp"))).ThumbsRating.THUMBS_UP?n=r:t===(a||(a=i("rvvp"))).ThumbsRating.THUMBS_DOWN?n=o:t===(a||(a=i("rvvp"))).ThumbsRating.THUMBS_WAY_UP&&(n=l),e&&(e.stopAndFlush(),e.say((0,u.j)("speak",{children:(0,u.j)("s",{children:n},null,null)},null,null)))}}}))})):i("P1w9").identity,t.default=r},gbck:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.displayName,d=void 0===t?"MenuButton":t,c=e.shouldComponentUpdate,h=e.stylesheet,f=s
return h&&(f=h.withDefaults(s)),(0,(void 0===o?o=n(i("z3Fz")):o).default)({displayName:d,render:function(){var e=this.context,t=this.props,o=this.state.visualState,s=t.children,c=t.disabled,h=t.effectParams,v=t.focusKey,g=t.focused,m=t.margin,p=t.minWidth,b=t.name,y=t.opacity,k=t.padding,S=t.rect,T=t.unstable_effect,_=t.visible,x=(0,(void 0===r?r=n(i("wNCT")):r).default)(f,e,{buttonVisualState:o}).background
if(!x)throw new Error(d+": styles for backgroundStyles must be specified")
var A={}
return void 0!==b&&(A.name=b),S&&(A.rect=S),!0!==_&&!1!==_||(A.visible=_),void 0!==m&&(A.margin=m),void 0!==p&&(A.minWidth=p),void 0!==y&&(A.opacity=y),void 0!==k&&(A.padding=k),(0,u.j)((a||(a=i("agVJ"))).Focusable,{__update_handlers__:l,children:s,disabled:c,effectParams:h,focused:g,focusKey:v,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onKeyPress:this.handleKeyPress,onKeyUp:this.handleKeyUp,onMouseDown:this.handleMouseDown,onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver,onMouseUp:this.handleMouseUp,staticStyle:x,style:A,unstable_effect:T},"outer",null)},shouldComponentUpdate:c})}
var a,o,r,u=i("igsZ"),l=["onClick","onFocus","onKeyDown","onKeyPress","onKeyUp","onMouseDown","onMouseOut","onMouseOver","onMouseUp"],s={background:function(){return{base:{flexLayout:{alignItems:"center",direction:"row",justifyContent:"start"},height:42,layout:"horizontal",layoutSpacing:0,minWidth:360,name:"background",rect:{height:42}}}}}},jLxr:function(e,t,i){t.__esModule=!0,t.transitionAnimationConfig=t.default=void 0
var n,a,o=i("NEM1"),r=t.transitionAnimationConfig={factory:function(e,t){var r=t.isToOrFromSearch,u=t.transitionState
if(!o.COMPLETED_STATES[u]&&!r)return o.IN_STATES[u]?void 0===a?a=(0,i("SqmF").enterFromRight)():a:(n||(n=i("Z0Z4"))).subrouteExitToRight}}
t.default=(0,o.transitionAnimation)(r)},kuKk:function(e,t,i){var n,a,o
t.__esModule=!0,t.getAudioSubtitlesItems=function(e,t,r,u,l){if(e&&e.error)return{dataLength:0,error:!0,items:[]}
var s,d=r.audioTextTracks,c=void 0===d?{}:d,h=r.index,f=r.listChange,v=c.isAudio,g=e.defaultTracks[0].audioTrackId,m=e.defaultTracks[0].subtitleTrackId
s=c.audioTrack?{audioTrackId:c.audioTrack.id,timedTextTrackId:c.timedTextTrack.id}:{audioTrackId:g,timedTextTrackId:m}
var p,b=(0,(n||(n=i("8/gs"))).getAudioTracks)(e.audioTracks,t,s.audioTrackId,g),y=(0,(a||(a=i("D+qg"))).getSelectedTextTrack)(b.selectedTrack.subtitleTracks,s.timedTextTrackId,{defaultTimedText:b.selectedTrack.defaultTimedText,isAudio:v,listChange:f}),k=(0,(o||(o=i("miRT"))).getTextTracks)(b.selectedTrack.subtitleTracks,t,y.id,{defaultTimedText:b.selectedTrack.defaultTimedText,isAudio:v,listChange:f}),S=[],T=0,_=0
for(_=0;_<k.length;_++)p=k.items[_],S[T]=p,"audioDynamic"===p.type&&(p.trackChangeData={audioTrack:b.selectedTrack,isText:!0,timedTextTrack:p.track}),T++
for(_=0,_=0;_<b.length;_++)p=b.items[_],S[T]=p,"audioDynamic"===p.type&&(p.trackChangeData={audioTrack:p.track,isAudio:!0,timedTextTrack:k.selectedTrack}),T++
var x=k.selectedIndex,A=k.length+b.selectedIndex,w=h
return void 0!==h&&l===s.audioTrackId||(w=("boolean"==typeof u?u:v)?A:x),{dataId:s.audioTrackId,dataLength:T,index:f?h:w,items:S}}},lke8:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e,t,i){if(void 0===i&&(i=!1),i&&e[t])return t
var n=Object.keys(e),a=i?1:2,o=n.length
return o>2?n[o-a]:n[0]}},mdzX:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.AudioSubtitlesList=function(e){var t,n=e.animation,s=e.animationKey,f=e.focusKey,v=e.focused,p=e.height,A=void 0===p?N.height:p,w=e.hideContainer,E=e.onAnimationCompleted,L=e.onExit,j=e.onSubmit,B=e.strings,q=e.tracks,z=e.width,H=void 0===z?N.width:z,J=e.x,X=void 0===J?N.x:J,Y=e.y,Q=void 0===Y?N.y:Y,$=(0,(d||(d=i("e9tE"))).useDispatch)(),ee=(0,(u||(u=i("agVJ"))).useFocusPath)(f),te=(0,(o||(o=i("JVY8"))).useAppConfig)().isRtl,ie=(0,C.useState)(""),ne=(0,_.default)(ie,2),ae=ne[0],oe=ne[1],re=(0,(h||(h=i("rtf0"))).useSpeechStrings)(),ue=(0,(l||(l=i("K0jP"))).useEvent)((function(e){var t=e.uiEvent
"key.back"!==t&&"key.left"!==t||(""!==ae?($((u||(u=i("agVJ"))).actions.moveFocus({path:ee+"/"+ae})),oe("")):L(),e.stopPropagation())})),le=(0,(l||(l=i("K0jP"))).useEvent)((function(e){var t=e.item
"header"!==t.type&&"divider"!==t.type&&("more"===t.type?oe(t.subType):(j(t),oe("")))})),se=(0,C.useMemo)((function(){return!q||q.isError?[]:function(e){var t=e.activeListFilter,i=e.strings,n=e.tracks,a=[],o=""===t&&n.otherSubtitleTracks.length>0,r=n.otherSubtitleTracks.length,u=""===t?n.recommendedSubtitleTracks:n.recommendedSubtitleTracks.concat(n.otherSubtitleTracks)
if((""===t||"subs"===t)&&u.length){a.push(W({name:"subs-header",title:"subs"===t?null==i?void 0:i.allSubsLabel:null==i?void 0:i.subsLabel}))
var l,s=(0,x.default)(n.recommendedSubtitleTracks)
try{var d=!1
for(s.s();!(l=s.n()).done;){var c=l.value
a.push(K({item:c,subType:"subs"}))}}catch(e){s.e(e)}finally{d||(d=!0,s.f())}if("subs"===t&&n.otherSubtitleTracks.length){a.push({isInteractable:!1,item:{type:"divider"}})
var h,f=(0,x.default)(n.otherSubtitleTracks)
try{var v=!1
for(f.s();!(h=f.n()).done;){var g=h.value
a.push(K({item:g,subType:"subs"}))}}catch(e){f.e(e)}finally{v||(v=!0,f.f())}}}if(o){var m=n.isOtherSubtitleTrackActive
a.push(V({count:r,isActive:m,name:"show-more-subs",showMoreText:null==i?void 0:i.showMoreLabel,subType:"subs"}))}var p=""===t&&n.otherAudioTracks.length>0,b=n.otherAudioTracks.length,y=""===t?n.recommendedAudioTracks:n.recommendedAudioTracks.concat(n.otherAudioTracks)
if((""===t||"audio"===t)&&y.length){a.push(W({name:"audio-header",title:"audio"===t?null==i?void 0:i.allAudioLabel:null==i?void 0:i.audioLabel}))
var k,S=(0,x.default)(n.recommendedAudioTracks)
try{var T=!1
for(S.s();!(k=S.n()).done;){var _=k.value
a.push(K({item:_,subType:"audio"}))}}catch(e){S.e(e)}finally{T||(T=!0,S.f())}if("audio"===t&&n.otherAudioTracks.length){a.push({isInteractable:!1,item:{type:"divider"}})
var A,w=(0,x.default)(n.otherAudioTracks)
try{var I=!1
for(w.s();!(A=w.n()).done;){var C=A.value
a.push(K({item:C,subType:"audio"}))}}catch(e){w.e(e)}finally{I||(I=!0,w.f())}}}if(p){var E=n.isOtherAudioTrackActive
a.push(V({count:b,isActive:E,name:"show-more-audio",showMoreText:null==i?void 0:i.showMoreLabel,subType:"audio"}))}return a}({activeListFilter:ae,strings:B,tracks:q})}),[ae,B,q]);(0,C.useEffect)((function(){if(q&&!q.isError){var e=[]
""===ae?e=q.recommendedSubtitleTracks.concat(q.recommendedAudioTracks):"audio"===ae?e=q.recommendedAudioTracks.concat(q.otherAudioTracks):"subs"===ae&&(e=q.recommendedSubtitleTracks.concat(q.otherSubtitleTracks)),(y||(y=i("nJiZ"))).logger.onAudioSubtitlesSubMenuOpened(e)}return function(){(y||(y=i("nJiZ"))).logger.onAudioSubtitlesSubMenuClosed()}}),[ae,q])
var de=0
q&&!q.isError&&""!==ae&&(de="audio"===ae?null!=q&&q.isOtherAudioTrackActive?(0,T.h)(se,(function(e){var t
return null==e||null==(t=e.item)?void 0:t.isActive})):q.recommendedAudioTracks.length+2:null!=q&&q.isOtherSubtitleTrackActive?(0,T.h)(se,(function(e){var t
return null==e||null==(t=e.item)?void 0:t.isActive})):(null==q?void 0:q.recommendedSubtitleTracks.length)+2)
var ce=(0,(k||(k=i("GlEF"))).useAudioSubtitlesTestAttributes)(se)
return(0,S.j)(G,{__update_handlers__:M,animation:n,animationKey:s,children:(0,S.j)(I.Crossfade,{children:[!!q&&q.isError&&(0,S.j)((b||(b=i("AHGZ"))).Text,{children:null!=(t=q.error)?t:"",height:A,textAlign:R,type:(c||(c=i("BKc6"))).TextType.Title,width:D.width,wrap:!0,x:F},null,null),!q&&(0,S.j)((m||(m=i("tlYw"))).Loader,{delay:800,height:A,name:"loading-spinner",width:H},null,null),(0,S.j)((g||(g=i("Vv2a"))).ListContainer,{children:[(0,S.j)((g||(g=i("Vv2a"))).List,{accessibilityLabel:null==re?void 0:re.inAudioAndSubtitles,children:U,clip:!1,focused:v,focusKey:f,height:A,initialIndex:de,items:se,itemSize:D,name:"audio-subs-list",onSubmit:le,testAttributes:ce,width:D.width,x:F},null,null),(0,S.j)((g||(g=i("Vv2a"))).ListPointerControl,{direction:"up",height:O,scrollBy:-5,width:H,y:P},null,null),(0,S.j)((g||(g=i("Vv2a"))).ListPointerControl,{direction:"down",height:O,scrollBy:5,width:H,y:A-O-P},null,null)],height:A,width:H},null,null)],ChildWrapper:Z,condition:ae,duration:467,easing:(a||(a=i("ClEx"))).Easing.EasingCubicOut,fadeInToStart:!0},null,null),height:A,hideContainer:w,mirror:te,onAnimationCompleted:E,onKeyDown:ue,radialBackground:(0,(r||(r=i("9IR/"))).getFeature)("ultraWideVideoScalingEnabled"),width:H,x:X,y:Q},s,null)}
var a,o,r,u,l,s,d,c,h,f,v,g,m,p,b,y,k,S=i("igsZ"),T=i("rcEX"),_=n(i("J4zp")),x=n(i("Y3SK")),A=n(i("siCl")),w=i("eNcy"),I=(i("D+c2"),i("HfU7")),C=i("/P98"),E={halign:"stretch",height:72,url:{cacheKey:"4cf62c8904972d15a111e3d6f0fc9731",url:"data:image/webp;base64,UklGRnwCAABXRUJQVlA4WAoAAAAQAAAANQAARwAAQUxQSCUCAAAFd0AmbdP6VzGhY980RESi3QmkCAAjSUpXp3a5eUvNpOSgqkpyVzskOCS4keCQoECyDrt3LGfqBzuvqSNNfhDRfweO5LbNyeCqUU4hqT88nNChD8HH1lLMMeV8eU3X96YZADEMyp1N6aJqNxnnevVMjfG86nE16AL66EXm06p9b7yPQWQ64Wv+Om0nHJVG5s9cMRmA5lmV48j0nviaoA1Clc9RYH5NxDcwAyJ26xLTck1Ex8ZB84xRZM7/mPlW2+K9zNauiOiOAcTgBQ7mDzPfNQ6q58jRXBCVezM0z1WmX0y0M655DuzMknP+yUyPZkT0I4V2SoVfGUDvB0rtpOrt1mHwHSWz5O9ceG+wqqNgaucLU/lkXPWU2W35WPVtbp4yu84HLvzDNCWBS9dZ3lXR1rVoHDl23lChYjDEOHAROkvhQlsMI4dBt6+ymBAac2yzWXgqDwY79j7Sw1wOW+y4MpvT8q8Z3zj4jE9KnQlR7Avz/0q52YQonTHON/FhE4RZef6q1EFcn+30txTa5LVz+6Um3kifY01UXqydK+uZRl4zQM0W1BzkNT81av4g1PytVhMMqAkhqwk80IQraoLcalIDNQllNWkImuS1mpQHTaFATXmxmqIEmlJmNQUQNGXTaootaEo0agq71VwH8P+XSDmymqsHNBcWaq45q7kcAdA1x+7/G3Faue9M2+ijiPOqx9XAIBEXVbvJTujQ9+pcGi6r7k0AVlA4IDAAAACwAwCdASo2AEgAPikUiUMhoSEQ1AAYAoS0gAAGOnDhw4cOHDhWAAD+/tAcAAAAAAA="},valign:"stretch",width:54},M=["onAnimationCompleted","onKeyDown"],D={height:42,width:364},L={height:95,width:364},j=48,F=84,O=55,P=12,R=["left","center-vertical"],N={height:720,width:554,x:726,y:0}
function W(e){var t=e.name,i=e.title
return{isInteractable:!1,item:{header:null!=i?i:"",type:"header"},itemSize:L,name:t}}function K(e){var t,i=e.item,n=e.subType
return{accessibilityLabel:null!=(t=i.label)?t:"",isInteractable:!0,item:(0,A.default)({subType:n,type:"item"},i)}}function V(e){var t=e.count,n=e.isActive,a=e.name,o=e.showMoreText,r=e.subType,u=o?(0,(s||(s=i("m5dK"))).nfformat)(o,{count:t}):""
return{accessibilityLabel:u,focusKey:r,isInteractable:!0,item:{isActive:n,label:u,subType:r,type:"more"},name:a}}function U(e){return"header"===e.item.type?(0,S.j)(B,e,null,null):"item"===e.item.type?(0,S.j)(q,e,null,null):"more"===e.item.type?(0,S.j)(z,e,null,null):"divider"===e.item.type?(0,S.j)(H,S.p,null,null):void 0}function B(e){var t=e.item
return(0,S.j)((b||(b=i("AHGZ"))).Text,{children:null==t?void 0:t.header,type:(c||(c=i("BKc6"))).TextType.TitleHeavy,width:L.width,y:j},null,null)}function q(e){var t=(0,C.useMemo)((function(){return(0,A.default)({},e.item,{alwaysReserveSpaceForIcon:!0,iconType:e.item.isActive?(v||(v=i("S2RX"))).IconType.Checkmark:void 0,marqueeOnFocus:"loop",name:e.item.label,width:D.width})}),[e])
return(0,S.j)((p||(p=i("x4cV"))).MenuItem,{__proto__:e,isNearViewportEdge:!1,item:t},null,null)}function z(e){var t=(0,C.useMemo)((function(){return(0,A.default)({},e.item,{alwaysReserveSpaceForIcon:!0,iconType:e.item.isActive?(v||(v=i("S2RX"))).IconType.Checkmark:void 0,marqueeOnFocus:"loop",name:e.item.label,width:D.width})}),[e])
return(0,S.j)((p||(p=i("x4cV"))).MenuItem,{__proto__:e,isNearViewportEdge:!1,item:t},null,null)}function H(){return(0,S.j)((f||(f=i("acVY"))).HDivider,{width:D.width,y:D.height/2},null,null)}var Z=(0,w.s)(I.CrossfadeChild,"ChildWrapper",{opacity:function(e){var t=e.state
return"fadingIn"===t?1:"fadingOut"===t?0:void 0},opacityTransition:function(e){var t=e.state
return{duration:(a||(a=i("ClEx"))).Duration.Duration150,easing:(a||(a=i("ClEx"))).Easing.EasingLinear,initialValue:"fadingIn"===t?0:void 0}},x:function(e){var t=e.condition
return"fadingOut"===e.state?""===t?70:-70:0},xTransition:function(e){var t=e.condition,n=e.duration,o=e.oldCondition,r=0
return""===t?""!==o&&(r=-70):r=70,{duration:n,easing:(a||(a=i("ClEx"))).Easing.EasingLinear,initialValue:r}}},!1),G=(0,w.s)("Widget","audio-subs-container",{backgroundImage:function(e){var t=e.hideContainer
return e.radialBackground&&!t?E:null},color:function(e){var t=e.hideContainer,i=e.radialBackground,n=e.theme
return t||i?n.MenuSurface:n.Surface},drawOrder:5,height:function(e){return e.height},mirror:function(e){return e.mirror},name:"audio-subs-container",width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!0)},mi1D:function(e,t){t.__esModule=!0,t.default=function(e,t,i){var n=(void 0===t?{}:t).layoutSpacing
return e.extend({background:function(){return{base:{layout:"horizontal",layoutSpacing:n,sendRenderProperties:!0}}},middle:function(){return{base:{layout:{align:["center-horizontal","center-vertical"],layout:"horizontal"},width:i}}}})}},miRT:function(e,t){t.__esModule=!0,t.getTextTracks=function(e,t,r,u){void 0===u&&(u={})
var l,s=0,d=[],c=-1
if((e&&e.length)>0){d[s]={label:(null==t?void 0:t.subsLabel)||n,type:"label"},s++
var h=r
if(!u.listChange&&u.isAudio){var f=u.defaultTimedText,v={}
e.forEach((function(e){r&&r===e.id?v.trackMatch=e.id:f&&f===e.id?v.trackDefault=e.id:null===f&&e.isNoneTrack&&(v.none=e.id)})),h=v.trackMatch||v.trackDefault||v.none}e.forEach((function(e){var n=e.rawTrackType
d[s]={checked:e.id===h,isTimedText:!0,label:e.languageDescription,track:e,type:"audioDynamic"},n&&n.toLowerCase()===o&&(null!=t&&t.ccLabel?d[s].descriptionLabel=" ("+t.ccLabel+")":d[s].descriptionLabel="("+i+")"),d[s].checked&&(c=s,l=e),s++})),c<0&&(d[s]={checked:!0,id:"none",label:(null==t?void 0:t.offTrackLabel)||a,type:"audioDynamic"},c=s,s++)}return{items:d,length:s,selectedIndex:c,selectedTrack:l}}
var i="CC",n="Subtitles",a="Off",o="closedcaptions"},nJiZ:function(e,t,i){var n
t.__esModule=!0,t.getTrackInfoForLogging=o,t.logger=void 0
var a=null
function o(e){var t=e.channels,i=e.isForcedNarrative,n=e.isNoneTrack,a=e.language,o=e.new_track_id,r=e.trackType,u="A"===o[0]
return{descriptor:(u?"A":"S")+":"+a+":"+r+(u?":"+t:(n?":Off":"")+(i?":FN":"")),new_track_id:o}}function r(e){var t={Audio:[],AudioDefault:{},Subtitles:[],SubtitlesDefault:{}}
return e.forEach((function(e){var i=e.isActive,n=e.track,a=e.uiTrackType,r=o(n),u="audio"===a?"Audio":"Subtitles"
t[u].push(r),i&&(t[u+"Default"]=r)})),t}function u(){a&&((n||(n=i("Mmf2"))).consolidatedLogger.endSession(a,{type:(n||(n=i("Mmf2"))).SESSION_ENDED.ended}),a=null)}t.logger={onAudioSubtitlesSubMenuClosed:u,onAudioSubtitlesSubMenuOpened:function(e){u(),a=(n||(n=i("Mmf2"))).consolidatedLogger.startSession((n||(n=i("Mmf2"))).SESSION.presentation,{trackingInfo:r(e),view:(n||(n=i("Mmf2"))).VIEW.audioSubtitlesSelector})},onTrackSelected:function(e){if(!e.isActive){var t,a=e.track,r=e.uiTrackType,u=o(a);(n||(n=i("Mmf2"))).consolidatedLogger.startAndEndSession((n||(n=i("Mmf2"))).SESSION.changeValueCommand,{desiredValue:(t={},t["audio"===r?"Audio":"Subtitle"]=u,t)})}}}},oIk0:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.audioSubtitlesFactory=function(e){var t=e.AudioSubtitlesList,n=e.buttonFactory,k=e.eventDispatcher,S=e.parentContainer,T=e.stylesheet,_=e.withFocusableRoot,x=void 0===_||_
function A(e){var t=(0,(u||(u=i("kCWc"))).useDepthTransitionProps)({id:"dp:audio-subtitle",templateKey:(r||(r=i("KBg7"))).TemplateKey.DP_Foreground})
return x?(0,m.j)((o||(o=i("agVJ"))).FocusableRoot,{__proto__:e,effectParams:t.effectParams,unstable_effect:t.unstable_effect},null,null):(0,m.j)((o||(o=i("agVJ"))).Focusable,e,null,null)}function w(e){var t=e.message
return(0,m.j)((c||(c=i("AHGZ"))).Text,{children:t,height:506,textAlign:["left","center-vertical"],type:(s||(s=i("BKc6"))).TextType.Title,width:400,wrap:!0,x:107,y:0},null,null)}function I(e,t){var n=e.items&&e.items.length,a=t.items&&t.items.length
!n&&a&&(v||(v=i("rOYb"))).logger.onAudioSubtitlesMenuOpened(t.items)}function C(e,t){var n=this.props.onTracksChange,a=t.data,o=void 0===a?{}:a,r=o.trackChangeData;(f||(f=i("DA2W"))).SingleAudio.play((f||(f=i("DA2W"))).UIAudioConfigs.onSelect,(f||(f=i("DA2W"))).DEFAULT_VOLUME),(v||(v=i("rOYb"))).logger.onTracksChanged(o),n(r)}var E=function(e){function o(t){var i=e.call(this,t)||this
return i.pointerBackHandler=null,i.handleClick=C.bind(i),i.logMenuShown=I.bind(i),i.state={paging:!1},i}(0,g.default)(o,e)
var r=o.prototype
return r.UNSAFE_componentWillMount=function(){this.updatePointerBackHandler(),this.logMenuShown({},this.props)},r.componentWillUnmount=function(){k&&(k.removeEventListener((h||(h=i("BGhG"))).POINTER_BACK,this.pointerBackHandler),this.pointerBackHandler=null),(v||(v=i("rOYb"))).logger.onAudioSubtitlesMenuClosed()},r.componentDidUpdate=function(e){var t=this.props,i=t.hasError,n=t.onError
i&&n&&n({source:"/details/audio",type:"MdpAudioSubtitleDataError"}),t.onExit!==e.onExit&&this.updatePointerBackHandler()},r.UNSAFE_componentWillReceiveProps=function(e){var t=e.index,i=this.props,n=i.index,a=t>=0&&n>=0&&Math.abs(t-n)>2
this.setState({paging:a}),this.logMenuShown(i,e)},r.updatePointerBackHandler=function(){if(k){this.pointerBackHandler&&k.removeEventListener((h||(h=i("BGhG"))).POINTER_BACK,this.pointerBackHandler)
var e=this.props.onExit
this.pointerBackHandler=e.bind(this),k.addEventListener((h||(h=i("BGhG"))).POINTER_BACK,this.pointerBackHandler)}},r.render=function(){var e=this,o=this.context,r=this.props,u=this.state,l=r.animation,s=r.dataId,c=r.dataLength,h=r.entered,f=r.focusKey,v=r.focused,g=r.hasError,p=r.index,k=r.itemContext,_=r.items,I=r.mode,C=r.mouseIsShowing,E=r.onExit,M=r.onIndexChange,D=r.onKeyDown,L=r.onTransitionCompleted,j=r.opacity,F=r.startSpinner,O=r.visible,P=void 0===O||O,R=u.paging,N=T.resolve(o),W=!g&&!c
return!W||c||F||(W=!1),(0,m.j)(A,{__update_handlers__:b,animation:l,children:[W&&(0,m.j)((d||(d=i("tlYw"))).Loader,{delay:800,x:600,y:180},"loading-spinner",null),!(!g||!r.errorMessage)&&(0,m.j)(w,{message:r.errorMessage},null,null),(0,m.j)(t,{children:function(t){var i=t.focusKey,a=t.focused,o=t.key,r=t.listContext,u=t.listItem
if(u.data)return n({childFocusKey:i,component:S,focused:a,handleClick:e.handleClick,hasOpacityOnMouseIsShowing:!C,key:o,listContext:r,listItem:u,mouseIsShowing:C,styles:N})},dataId:s,dataLength:c,focused:v,focusKey:"audioList",index:p,itemContext:k,items:_,layoutRect:N.audioSubtitlesLayout.rect,mode:R?"page":I,name:"audioList",onExit:E,onIndexChange:M,opacity:j,rect:N.audioSubtitles.rect,videoId:r.videoId},"audioList",null)],disabled:x&&!h,focused:v,focusKey:f,onAnimationCompleted:L,onKeyDown:D,staticStyle:(0,(a||(a=i("9IR/"))).getFeature)("ultraWideVideoScalingEnabled")?N.gradientContainer:N.container,testAttributes:y(_),visible:P},f,null)},o}(p.Component)
return E.contextTypes=(l||(l=i("s6u8"))).stylesheetContextTypes,E.displayName="AudioSubtitles",E.defaultProps={enteredChild:"audioList",opacity:1},E}
var a,o,r,u,l,s,d,c,h,f,v,g=n(i("VbXa")),m=i("igsZ"),p=i("/P98"),b=["onAnimationCompleted","onKeyDown"]
function y(e){var t=e.reduce((function(e,t){if("label"===t.type)return e
var i=t
return i.checked&&i.isAudio?e.test_selectedAudioTrack=i.label:i.checked&&i.isTimedText&&(e.test_selectedSubtitleTrack=i.label),e}),{})
return t.test_numTracks=e.length||0,t}},rOYb:function(e,t,i){var n,a
t.__esModule=!0,t.logger=void 0
var o=null
function r(e){var t={Audio:[],AudioDefault:{},Subtitles:[],SubtitlesDefault:{}}
return e.forEach((function(e){var n=e.isAudio,o=e.isTimedText
if(n||o){var r=e.track,u=(0,(a||(a=i("Sr9q"))).getTrackInfoForLogging)(r),l=n?"Audio":"Subtitles"
t[l].push(u),e.checked&&(t[l+"Default"]=u)}})),t}t.logger={onAudioSubtitlesMenuClosed:function(){o&&((n||(n=i("Mmf2"))).consolidatedLogger.endSession(o,{type:(n||(n=i("Mmf2"))).SESSION_ENDED.ended}),o=null)},onAudioSubtitlesMenuOpened:function(e){o=(n||(n=i("Mmf2"))).consolidatedLogger.startSession((n||(n=i("Mmf2"))).SESSION.presentation,{trackingInfo:r(e),view:(n||(n=i("Mmf2"))).VIEW.audioSubtitlesSelector})},onTracksChanged:function(e){if(!e.checked){var t,o=e.trackChangeData,r=o.isAudio,u=(0,(a||(a=i("Sr9q"))).getTrackInfoForLogging)(r?o.audioTrack:o.timedTextTrack);(n||(n=i("Mmf2"))).consolidatedLogger.startAndEndSession((n||(n=i("Mmf2"))).SESSION.changeValueCommand,{desiredValue:(t={},t[r?"Audio":"Subtitle"]=u,t)})}}}},skUI:function(e,t,i){t.__esModule=!0,t.default=function(e){var t=e.visible
return{animation:t?o.key("visible"):r.key("invisible"),key:t?"visible":"invisible"}}
var n=i("ClEx"),a=i("Hg/B"),o=(0,a.fade)({duration:275,easing:n.Easing.EasingQuadraticIn,forceFromOnInterrupt:!1,from:0,to:1}),r=(0,a.fade)({duration:275,easing:n.Easing.EasingQuadraticOut,forceFromOnInterrupt:!1,from:1,to:0})},szem:function(e,t,i){var n,a=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=(void 0===e?{textAlign:r}:e).textAlign,a=void 0===t?r:t
return(0,o.default)({background:function(){return{base:{name:"background"}}},end:function(){return{base:{name:"right-cap"},buttonVisualState:{disabled:{opacity:.5}}}},middle:function(){var e={textStyle:{color:(n||(n=i("D+c2"))).FoundationalColors.White}}
return{base:{grow:1,name:"center",textStyle:{align:a,color:(n||(n=i("D+c2"))).FoundationalColors.Gray500,variant:"normal",wrap:!1}},buttonVisualState:{disabled:{opacity:.5},highlighted:e,pressed:e}}},start:function(){return{base:{name:"left-cap"},buttonVisualState:{disabled:{opacity:.5}}}}})}
var o=a(i("Hy99")),r="left center-vertical"},uuge:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r,u,l,s,d,c,h,f,v=i("agVJ"),g=n(i("jGzq")),m=i("xNxB"),p=i("P1w9"),b=v.selectors.isFocused,y=v.selectors.isHighlighted,k=function(e,t){return{focused:b(e,t),highlighted:y(e,t)}}
t.default=function(e){var t=void 0===e?{}:e,b=t.UNSAFE_componentWillReceiveProps,y=t.autoFocus,S=void 0===y||y,T=t.createMenuButton,_=t.filled,x=void 0!==_&&_,A=t.hasKidsStyle,w=void 0!==A&&A,I=t.height,C=void 0===I?42:I,E=t.layoutSpacing,M=t.middleWidth,D=t.shouldComponentUpdate,L=t.showFocusedRing,j=t.showUnfocusedRing,F=t.speech,O=void 0===F||F,P=t.textAlign,R=t.useLowPerformanceStack,N=(void 0===f?f={42:n(i("Kfpz")).default}:f)[C];(0,g.default)(N,"darwinButtons: height "+C+" not supported!")
var W,K=(0,(void 0===d?d=n(i("szem")):d).default)({hasKidsStyle:w,textAlign:P})
if(T)W=(0,(void 0===o?o=n(i("gbck")):o).default)({displayName:"MenuButtonPart",shouldComponentUpdate:D,stylesheet:(0,(void 0===s?s=n(i("NFSk")):s).default)(K,{})})
else{var V=N(K,{filled:x,hasKidsStyle:w,showFocusedRing:L,showUnfocusedRing:j})
W=R?(0,(void 0===r?r=n(i("ICKM")):r).default)({shouldComponentUpdate:D,stylesheet:(0,(void 0===u?u=n(i("mi1D")):u).default)(V,{layoutSpacing:E},M),UNSAFE_componentWillReceiveProps:b}):(0,(void 0===a?a=n(i("bbNX")):a).default)({shouldComponentUpdate:D,stylesheet:(0,(void 0===l?l=n(i("e3rh")):l).default)(V,{}),UNSAFE_componentWillReceiveProps:b})}return(0,m.compose)(S?void 0===h?h=(0,m.compose)(v.withFocusPath,(0,i("e9tE").connect)(k)):h:p.identity,O?void 0===c?c=n(i("Ki15")).default.button:c:p.identity)(W)}},"w+ZH":function(e,t,i){var n=i("284h").default,a=i("TqRt").default
t.__esModule=!0,t.AudioSubtitlesDataFactory=function(e){void 0===e&&(e=!1)
var t=(0,(void 0===c?c=a(i("2hav")):c).default)({nrdjs:nrdjs})
return function(n){var c
function S(e){if(e){var t
if(e.isAudio){var n=e.timedTextTrack.id
t=(0,(f||(f=i("D+qg"))).getSelectedTextTrack)(e.audioTrack.subtitleTracks,n,{defaultTimedText:e.audioTrack.defaultTimedText,isAudio:!0,listChange:!1})}else t=e.timedTextTrack
var o=(void 0===l?l=a(i("9Tj8")):l).default.getTrackDescriptor(e.audioTrack),r=(void 0===l?l=a(i("9Tj8")):l).default.getTrackDescriptor(t)
this.props.onTracksChange({audioTrack:o,isAudio:e.isAudio,timedTextTrack:r})}}return(c=function(r){function l(e){var t=r.call(this,e)||this
return t.trackChange=S.bind(t),t.state={},t}(0,g.default)(l,r)
var c=l.prototype
return c.UNSAFE_componentWillMount=function(){var n=this,r=new m.default.Subject
this.tracks=r
var l=this.props
this.getTracks=this.tracks.subscribe((function(r){var c=r.current,h=r.currentSummary,f=h.id
if(!n.state[f]){var v=[{branched:(0,(void 0===d?d=a(i("o+kE")):d).default)(h),uiLabel:(0,(s||(s=i("zpVr"))).getUiLabelForLiveEvent)({current:c}),viewableId:f}],g=function(e){var t=e||{},i=t.playbackStateObject,n=(void 0===i?{}:i).viewableId
return t.viewableId||n}(n.props)
g&&g!==f&&v.push({viewableId:g})
var m,p=l.playbackStateObject,b=void 0===p?EMPTY_OBJECT:p,y=c||EMPTY_OBJECT,k=y.playbackAuth,S=y.summary,T=b.playbackState,_=b.videoState,x=b.viewableId
S&&k&&T&&_&&(!k.isPreReleasePinProtected||T!==(u||(u=i("LpVm"))).PLAYBACK_STATES.stopped&&_.name===(u||(u=i("LpVm"))).VIDEO_STATES.displaying&&x&&x===S.id?t({onError:function(e){(o||(o=i("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:e||{},message:"mdpAudioSubtitlesError"}),n.state[f]={error:!0}},onSuccess:function(e){var t,a={},r=e[f]
a[f]=r,n.state[f]||n.setState(a),r&&r.error&&((o||(o=i("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:r.error,message:"mdpAudioSubtitlesError"}),n.state[f]={error:!0,errorMessage:null==(t=l.strings)?void 0:t.genericError})},syncIfPossible:e,viewables:v}):n.state[f]={error:!0,errorMessage:null==(m=l.strings)?void 0:m.previewContentError})}}),b.noop)
var c=l.current,h=l.currentSummary
h&&h.id&&this.tracks.onNext({current:c,currentSummary:h})},c.componentWillUnmount=function(){var e=this.tracks
e&&(e.onCompleted(),e.dispose()),this.getTracks.dispose(),this.getTracks=null},c.UNSAFE_componentWillReceiveProps=function(e){var t=e.current,i=e.currentSummary
i&&i.id&&this.tracks.onNext({current:t,currentSummary:i})},c.render=function(){var e,t,a,o=this.props,r=this.state,u=o.audioTextTracks,l=o.currentSummary,s=o.sectionOverride,d=o.strings,c=l&&l.id,f=r&&r[c]||{},g=[],m=0,p=!1,b=0
if(f.audioTracks&&f.subtitleTracks){var y
u&&"string"==typeof s&&(y="audio"===s)
var k=(0,(h||(h=i("kuKk"))).getAudioSubtitlesItems)(f,d,u,y,this.prevDataId)
this.prevDataId=k.dataId,g=k.items,0===(m=k.dataLength)&&(p=!0),(b=k.index)>m-1&&(b=m-1),a=k.dataId}else f.error&&(g=[],p=!0,t=f.errorMessage)
var S=m>0
return"label"===(null==(e=g)||null==(e=e[b])?void 0:e.type)&&(b+=1),(0,v.j)(n,{__proto__:o,dataId:S?a:o.dataId,dataLength:S?m:o.dataLength,errorMessage:t,hasError:p,index:b,items:g,mode:u?u.mode:"page",onTracksChange:this.trackChange},null,null)},l}(y.Component)).contextTypes=(r||(r=i("s6u8"))).stylesheetContextTypes,c.displayName=(0,p.higherOrderName)("AudioSubtitlesData",n),c.propTypes={currentSummary:k.object},c}}
var o,r,u,l,s,d,c,h,f,v=i("igsZ"),g=a(i("VbXa")),m=a(i("gisa")),p=i("bGSL"),b=i("BHy0"),y=i("/P98"),k=n(i("17x9"))},x84e:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.defaultVisible,c=e.isSeasonsLabel,p=e.stylesheet,b=e.transitions,y=v(p,m),k=function(e){function t(t){var i=e.call(this,t)||this
return i.state={animation:{}},i}(0,l.default)(t,e)
var r=t.prototype
return r.UNSAFE_componentWillReceiveProps=function(e,t){var a=e.buttonVisualState,r=e.mouseIsShowing,u=this.props.buttonVisualState,l=t.buttonVisualState,s=this.context.buttonVisualState,d=e.animate,h=e.visible,f=this.props.visible
if(d&&(!c&&(void 0===o?o=n(i("KKEs")).default.PRESSED:o)!==l&&(void 0===o?o=n(i("KKEs")).default.PRESSED:o)!==s&&(l!==s||a!==u)||c&&h!==f)){var v=b(e,t)
!v||!c&&r||this.setState({animation:v})}},r.componentDidMount=function(){var e=this.props
if(e.visible&&c){var t=b(e)
t&&this.setState({animation:t})}},r.shouldComponentUpdate=function(e,t,i){var n=this.context,a=this.props,o=this.state,r=a.animate,u=a.name,l=a.rect,s=a.text,c=a.visible,h=o.animation,f=void 0===h?{}:h,v=n.buttonVisualState,g=e.animate,m=e.mouseIsShowing,p=e.name,b=e.rect,y=e.text,k=e.visible,S=t.animation,T=void 0===S?{}:S,_=i.buttonVisualState
return!!m||c!==k||s!==y||f!==T||v!==_||u!==p||r!==g||!(0,d.areRectsEqual)(l,b)},r.render=function(){var e=this.context,t=this.props,o=this.state,r=t.name,l=t.rect,s=t.text,d=t.visible,c=(0,(void 0===a?a=n(i("wNCT")):a).default)(y,e,t),h=o&&o.animation||{}
return(0,u.j)("Widget",{__update_style__:f,animation:h.animation,animationKey:h.key,staticStyle:c,style:{name:r,rect:l,text:s,visible:d}},"label",null)},t}(h.Component)
return k.displayName="AnimatedLabel",k.contextTypes=(0,r.default)({},s.stylesheetContextTypes,{buttonVisualState:g.buttonVisualState}),k.defaultProps={animate:!0,visible:t},k}
var a,o,r=n(i("siCl")),u=i("igsZ"),l=n(i("VbXa")),s=i("s6u8"),d=i("Eu0p"),c=n(i("N9Ua")),h=i("/P98"),f=["name","rect","text","visible"],v=(0,s.getStylesheetDefaultsResolver)(),g=c.default.required
function m(){return{base:{name:"label"}}}},zOpD:function(e,t,i){var n=i("TqRt").default
t.__esModule=!0,t.default=function(e,t){var i,n,a,o,u
switch(e){case"play":case"play_recap":case"play_trailer":case"play_branching":case"watch_live":u=s("play")
break
case"play_from_beginning":u=s("playFromBeginning")
break
case"ads_change_plan":u=s("lock")
break
case"reminder":u=null!=t&&t.isReminderSet?s("checkmark"):s("notification")
break
case"more_episodes":case"episodes_trailers":case"trailers_and_more":u=s("episodes")
break
case"more_like_this":u=s("moreLikeThis")
break
case"credits":u=s("castAndCrew")
break
case"undo":u=s("undo")
break
case"title_group":u=s("titleGroups")
break
case"remove":u=s("remove")
break
case"close":u=s("close")
break
case"add":case"playlist":u=s("add")
break
case"audio_subtitles":u=s("audioAndSubtitles")
break
case"checked":u=s("checkmark"),i=1,n=null==t?void 0:t.margin
break
case"unchecked":u=s("checkmark"),i=0
break
case"back":a=null==t?void 0:t.x,o=null==t?void 0:t.y,u=s("back")
break
case"backBright":u=s("back")
break
case"viewCredits":a=null==t?void 0:t.x,o=null==t?void 0:t.y,u=s("endCredits")
break
case"mdp":u=s("info")
break
case"content_warning":a=null==t?void 0:t.x,o=null==t?void 0:t.y,u=s("warning")
break
case"content_warning_back":a=null==t?void 0:t.x,o=null==t?void 0:t.y,u=s("backArrow")
break
case"menu":a=null==t?void 0:t.x,o=null==t?void 0:t.y,u=s("menu")}return u?(0,r.j)(u,{margin:n,name:e,opacity:i,rect:{height:26,width:26,x:a,y:o}},"icon",null):null}
var a,o,r=i("igsZ"),u=n(i("Hy99")),l=new Map
function s(e){var t,n,r=l.get(e)
if(r)return r
switch(e){case"add":t=(0,(a||(a=i("qjNO"))).getIcon)("Plus_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Plus_WhiteT70_Standard")
break
case"audioAndSubtitles":t=(0,(a||(a=i("qjNO"))).getIcon)("Subtitles_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Subtitles_WhiteT70_Standard")
break
case"back":t=(0,(a||(a=i("qjNO"))).getIcon)("Back_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Back_WhiteT70_Standard")
break
case"backArrow":t=(0,(a||(a=i("qjNO"))).getIcon)("ArrowLeft_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("ArrowLeft_WhiteT70_Standard")
break
case"notification":t=(0,(a||(a=i("qjNO"))).getIcon)("Bell_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Bell_WhiteT70_Standard")
break
case"castAndCrew":t=(0,(a||(a=i("qjNO"))).getIcon)("Users2_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Users2_WhiteT70_Standard")
break
case"close":t=(0,(a||(a=i("qjNO"))).getIcon)("X_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("X_WhiteT70_Standard")
break
case"checkmark":t=(0,(a||(a=i("qjNO"))).getIcon)("Checkmark_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Checkmark_WhiteT70_Standard")
break
case"endCredits":t=(0,(a||(a=i("qjNO"))).getIcon)("EndCredits_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("EndCredits_WhiteT70_Standard")
break
case"episodes":t=(0,(a||(a=i("qjNO"))).getIcon)("Episodes_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Episodes_WhiteT70_Standard")
break
case"info":t=(0,(a||(a=i("qjNO"))).getIcon)("CircleIFill_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("CircleIFill_WhiteT70_Standard")
break
case"lock":t=(0,(a||(a=i("qjNO"))).getIcon)("Lock_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Lock_WhiteT70_Standard")
break
case"menu":t=(0,(a||(a=i("qjNO"))).getIcon)("Menu_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Menu_WhiteT70_Standard")
break
case"moreLikeThis":t=(0,(a||(a=i("qjNO"))).getIcon)("Grid_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Grid_WhiteT70_Standard")
break
case"play":t=(0,(a||(a=i("qjNO"))).getIcon)("Play_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Play_WhiteT70_Standard")
break
case"playFromBeginning":t=(0,(a||(a=i("qjNO"))).getIcon)("PlayFromBeginning_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("PlayFromBeginning_WhiteT70_Standard")
break
case"remove":t=(0,(a||(a=i("qjNO"))).getIcon)("Minus_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Minus_WhiteT70_Standard")
break
case"titleGroups":t=(0,(a||(a=i("qjNO"))).getIcon)("Collection_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Collection_WhiteT70_Standard")
break
case"warning":t=(0,(a||(a=i("qjNO"))).getIcon)("WarningFill_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("WarningFill_WhiteT70_Standard")
break
case"undo":t=(0,(a||(a=i("qjNO"))).getIcon)("Undo_White_Standard"),n=(0,(a||(a=i("qjNO"))).getIcon)("Undo_WhiteT70_Standard")
break
default:return null}return r=function(e){var t=e.base,n=e.highlighted,a=e.pressed,r=void 0===a?n:a,l=(void 0===o?o=(0,i("9IR/").getFeatures)():o).thumbsWayUpActionBarEnabled,s=(0,u.default)((function(){return{base:{height:42,image:t,margin:{left:l?12:11,right:6}},buttonVisualState:{highlighted:{image:n},pressed:{image:r}}}}))
return i("fWeL").default({stylesheet:s})}({base:n,highlighted:t}),l.set(e,r),r}}}])


