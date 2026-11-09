(this.webpackJsonp=this.webpackJsonp||[]).push([[99],{"+Yom":function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.DelaySpinner=function(t,e){var a
return void 0===e&&(e=250),(a=function(a){function i(t){var e=a.call(this,t)||this
return e.state={startSpinner:!1},e}(0,u.default)(i,a)
var s=i.prototype
return s.componentDidMount=function(){var t=this,n=this.props,a=n.dataLength,i=n.hasError
if(!this.delaySpinnerTimeout&&!a&&!i){var o=setTimeout((function(){t.setState({startSpinner:!0})}),e)
this.delaySpinnerTimeout=o}},s.componentWillUnmount=function(){var t=this.delaySpinnerTimeout
t&&clearTimeout&&(clearTimeout(t),this.delaySpinnerTimeout=void 0)},s.UNSAFE_componentWillReceiveProps=function(t){var e=t.dataLength,a=t.hasError,i=this.delaySpinnerTimeout;(e||a||(0,(o||(o=n("NEM1"))).isComponentBecomingInactive)(this.props,t)&&i&&clearTimeout)&&(clearTimeout(i),this.delaySpinnerTimeout=void 0)},s.render=function(){return(0,r.j)(t,{__proto__:this.props,startSpinner:this.state.startSpinner},null,null)},i}(l.Component)).contextTypes=(i||(i=n("s6u8"))).stylesheetContextTypes,a.displayName=(0,s.higherOrderName)("ASDelaySpinner",t),a}
var i,o,r=n("igsZ"),u=a(n("VbXa")),s=n("bGSL"),l=n("/P98")},"/Toa":function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i,o,r,u=n("oM/y"),s=a(n("Hy99"))
e.default=(0,s.default)({audioSubtitles:function(){return{base:{rect:{height:396,width:400,x:(o||(o=n("GQsr"))).LEGACY_THEME.screenPaddingLeft,y:0}}}},audioSubtitlesLayout:function(){return{base:{rect:{height:396,width:400,x:0,y:0}}}},container:function(){return{base:{height:(r||(r=n("8J/X"))).VIEWPORT_HEIGHT,name:"audio-timedtext-menu",width:(r||(r=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:175}}},dynamicLabel:function(){return{base:{height:42,name:"audiosubs-dynamic-label",width:330}}},dynamicLabelAudio:function(){return{base:{height:42,layout:{align:["left","center-vertical"],layout:"horizontal"},name:"audiosubs-dynamic-label-audio",padding:{left:5},rect:{height:42,width:360},width:340}}},loading:function(){var t=(i||(i=n("S4TX"))).supportsSng?(0,u.i)("WNI+sourceRectFor720p=true","sng"):(0,u.i)("lKK+sourceRectFor720p=true","mng"),e=t.sourceRectFor720p,a=e.height,s=e.width
return{base:{drawOrder:10,image:t,name:"audio-loading-spinner",rect:{height:a,width:s,x:((r||(r=n("8J/X"))).VIEWPORT_WIDTH-s)/2-(o||(o=n("GQsr"))).LEGACY_THEME.screenPaddingLeft,y:((r||(r=n("8J/X"))).VIEWPORT_HEIGHT-a)/2-175}}}},staticLabel:function(){return{base:{height:42,name:"audiosubs-static-label",rect:{height:42,width:335},textStyle:{align:"left center-vertical",color:{a:255,b:105,g:105,r:105},size:20,truncation:{position:"end"},weight:"bold"},width:335}}}})},"6F2/":function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i=n("xNxB"),o=a(n("5r0+")),r=a(n("HLA4")),u=n("mBPq"),s=a(n("Ym6w")),l=a(n("67BT")),d=(0,i.compose)(u.withConnectedProps,l.default,s.default,(0,o.default)({tag:"details"}))
e.default=d(r.default)},"6SFa":function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i,o=n("9IR/"),r=a(n("6F2/")),u=a(n("xEyj")),s=n("FSMm"),l=a(n("Lk1/"))
e.default=new l.default({initialFocusPath:"/details/audio",payload:{AudioSubtitles:(0,o.getFeatures)().enableSalsaAudioSubsRefactor?s.AudioSubtitlesMenuWithDetailsTransitions:u.default,Details:r.default},rememberFocusPath:!1,routeWillRemove:function(){return(i||(i=n("2EGl"))).actions.resetState()}})},M3HD:function(t,e,n){var a=n("284h").default,i=n("TqRt").default
e.__esModule=!0,e.default=function(t){var e=t.Component,n=t.falcor
return(void 0===n?l:n).Falcor(e,v)}
var o,r,u,s=i(n("gisa")),l=a(n("pbgz")),d={details:{},evidence:{},hasBobData:!0,images:[],outline:{}}
function c(t,e,a,o){void 0===o&&(o=(r||(r=n("lsGl"))).selector)
var s=a.entityMetadata?a.entityMetadata.selector:o,l=a.itemContext,c=a.videoId
if(void 0!==c&&t.hasBobData){var f=s(c,l,t.json)
return f===(void 0===u?u=i(n("QQFM")):u).default?f=d:f.hasBobData=!0,f}if(l&&l.isEmptyRow&&t.hasBobData){var h=s(0,l,t.json)
return h.hasBobData=!0,h}return l&&"error"===l.context?d:{hasBobData:!1}}function f(t){return s.default.Observable.return({error:t})}function h(t,e){return e&&e.json&&(t.json.data=e.json),e&&e.error&&(t.json.error=e.error),t}var v={fetch:function(t,e,a){var u=e.entityMetadata,s=e.itemContext,l=e.videoId,d=a.rootModel
if(void 0===l)return t([])
var c=u?u.toMetadataPaths(s,[l]):(0,(r||(r=n("lsGl"))).toMetadataPaths)(s,[l])
return(0,(void 0===o?o=i(n("8VqT")):o).default)(d.get.apply(d,c)).catch(f).scan({json:{}},h).defaultIfEmpty({})},getBasePath:function(t){var e=t.itemContext,a=t.videoId,i=[]
return void 0!==a&&(i=[(0,(r||(r=n("lsGl"))).toEntityType)(e),a]),i},getPaths:function(){return[]},progressive:!1,selectData:c,selector:function(t,e,n){return c(t,0,n)},transformResponse:function(t){return{hasBobData:!0,json:t&&t.data||{}}}}},RfAq:function(t,e,n){var a
e.__esModule=!0,e.useAudioSubtitlesQuery=function(){var t=(0,(a||(a=n("RmPE"))).useStrings)((i||(i=n("VJao"))).AUDIO_SUBTITLES_KEYS).strings
return(0,o.useMemo)((function(){return t?{isLoading:!1,strings:(0,(i||(i=n("VJao"))).transformAudioSubtitlesStrings)(t)}:{isLoading:!0}}),[t])}
var i,o=n("/P98")},Tvav:function(t,e,n){e.__esModule=!0,e.withFalcor=function(t){return function(e){var n,r=e.current,u=void 0===e.videoId?[]:[["videosStringsCommon","audioSubtitles"]],s=(0,i.useFalcor)(u),l=s.data,d=s.error
if(s.isLoading)return(0,a.j)(t,e,null,null)
if(d)return(0,a.j)(t,{__proto__:e,hasError:!0,strings:o},null,null)
var c=(null==l||null==(n=l.videosStringsCommon)?void 0:n.audioSubtitles)||o
return(0,a.j)(t,{__proto__:e,currentSummary:null==r?void 0:r.summary,strings:c},null,null)}}
var a=n("igsZ"),i=n("pbgz"),o={}},Ym6w:function(t,e,n){var a=n("TqRt").default,i=n("284h").default
e.__esModule=!0,e.default=function(t){return(0,(void 0===o?o=a(n("M3HD")):o).default)({Component:t,falcor:r})}
var o,r=i(n("pbgz"))},ZvG6:function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.name=e.default=void 0
var i=a(n("N9EI")),o=n("HYX5"),r=n("oVSV"),u=e.name=o.DETAILS_AUDIO_SUBS
e.default=(0,i.default)((0,r.createSubrouteWithDepthTransitionOptions)(u))},aJ5X:function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i=a(n("Hy99"))
e.default=(0,i.default)({collection:function(){return{base:{cache:!0,name:"list"}}},glowFocusRing:function(){return{base:{height:44,width:400}}},listContainer:function(){return{base:{height:396,ignorePointer:!0,name:"listcontainer",width:400,x:0,y:55}}},mainContainer:function(){return{base:{height:506,ignorePointer:!0,width:400}}},pointerDown:function(){return{base:{drawOrder:10,height:55,name:"menuPointerDown",width:400,x:0,y:451}}},pointerUp:function(){return{base:{drawOrder:10,height:55,name:"menuPointerUp",width:400,x:0,y:0}}}})},cbz6:function(t,e,n){e.__esModule=!0,e.withGraphQL=function(t){return function(e){var o,r=(0,(a||(a=n("RfAq"))).useAudioSubtitlesQuery)(),u=r.isLoading,s=r.strings
return u?(0,i.j)(t,e,null,null):(0,i.j)(t,{__proto__:e,currentSummary:null==(o=e.current)?void 0:o.summary,strings:s},null,null)}}
var a,i=n("igsZ")},ctEV:function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i=a(n("1pHh"))
e.default=(0,i.default)()},eYGd:function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i=n("agVJ"),o=a(n("c9Or")),r=n("xNxB"),u=a(n("u6Ht")),s=a(n("oHT9")),l=a(n("d16G")),d=a(n("9TMU")),c=a(n("Ziy1")),f=a(n("Cc0U")),h=a(n("aJ5X")),v=a(n("E5xj")),g=h.default.glowFocusRing,m={height:44,width:400},p=(0,u.default)({focusOffsetResolver:function(t){return g.resolve(t).rect},itemArea:m,layoutDirection:"y",layoutSpacing:{x:0,y:0},layoutWrap:!1,scrollAtPercentage:.5,scrollBounded:!0,scrollItemAlign:"center",scrollWrap:!1,velocityConfig:d.default.vertical720px({itemPixels:m.height+0})}),b=(0,f.default)(90,400),y=(0,c.default)(90,400),T=(0,l.default)({maxItems:9,minIndex:1,pageBy:8,ScrollDown:(0,s.default)({stylesheet:y}),ScrollUp:(0,s.default)({stylesheet:b}),stylesheet:h.default}),S=(0,r.compose)(i.withFocusPath,v.default,p,o.default)
e.default=S(T)},pZfW:function(t,e,n){var a,i,o,r=n("TqRt").default
e.__esModule=!0,e.default=function(t){return(0,(a||(a=n("9IR/"))).getFeature)("enableDepthTransition")?(0,(void 0===i?i=r(n("ZvG6")):i).default)(t):(0,(a||(a=n("9IR/"))).getFeature)("routeTransitionsEnabled")?(0,(void 0===o?o=r(n("jLxr")):o).default)(t):t}},sesx:function(t,e,n){var a
e.__esModule=!0,e.default=void 0
var i,o=n("agVJ"),r=n("e9tE"),u=n("NEM1"),s=n("2EGl"),l=o.selectors.getEnteredChild,d=o.selectors.getHighlightEnteredChild,c=o.selectors.isEntered,f=o.selectors.isFocused,h=o.selectors.isHighlightEntered,v=o.actions.moveFocus,g=s.selectors.createGetAudioTextTracksWithMetadata,m=s.selectors.createGetOnExit,p=s.actions.moveMenuTo,b=s.actions.resetState,y=s.actions.updateSelection,T=u.selectors.isTransitioningFrom,S=u.selectors.isTransitioningTo,_={moveFocus:v,onExitMenu:b,onIndexChange:p,onTracksChange:y}
e.default=(0,r.connect)((function(){var t=g(),e=m(),o=T(void 0===i?i=n("ve0B").patterns.SEARCH:i),r=S(void 0===i?i=n("ve0B").patterns.SEARCH:i)
return function(i,u){var s=e(i,u)
return{audioTextTracks:t(i,u),entered:c(i,u),enteredChild:l(i,u),focused:f(i,u),highlightEntered:h(i,u),highlightEnteredChild:d(i,u),isToOrFromSearch:o(i)||r(i),mouseIsShowing:(0,(a||(a=n("B1ka"))).isMouseVisible)(i),onExit:s,onPointerBack:s}}}),_)},xEyj:function(t,e,n){var a=n("TqRt").default
e.__esModule=!0,e.default=void 0
var i=n("9IR/"),o=n("agVJ"),r=a(n("Ki15")),u=n("xNxB"),s=a(n("ctEV")),l=n("oIk0"),d=n("w+ZH"),c=n("+Yom"),f=a(n("YoKQ")),h=a(n("Y3bQ")),v=a(n("sesx")),g=a(n("eYGd")),m=a(n("/Toa")),p=n("Tvav"),b=n("cbz6"),y=a(n("pZfW")),T=r.default.onEnter,S=(0,f.default)("/details/audiosubs"),_=(0,l.audioSubtitlesFactory)({AudioSubtitlesList:g.default,buttonFactory:(0,h.default)({}),eventDispatcher:S,parentContainer:"mdpAudio",stylesheet:m.default,withFocusableRoot:!0}),E=(0,d.AudioSubtitlesDataFactory)(),w=(0,u.compose)(s.default,o.withFocusPath,v.default,y.default,(0,i.getFeatures)().graphqlDetails?b.withGraphQL:p.withFalcor,E,c.DelaySpinner,T((function(t){var e=t.texttospeech
return e&&e.inAudioAndSubtitles})))
e.default=w(_)}}])


//# sourceMappingURL=route.detailsAudioSubs.a6f9ae5dff72ba28c764.js.map