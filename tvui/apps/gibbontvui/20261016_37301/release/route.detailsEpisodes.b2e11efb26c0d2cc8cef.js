(this.webpackJsonp=this.webpackJsonp||[]).push([[103],{"0A8G":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.TrailersAndMore=t.Episodes=void 0
var a,o,r,u,l,s,d=n("9IR/"),c=n("xNxB"),f=i(n("ctEV")),h=i(n("9wwM")),p=n("HYX5"),v=i(n("Y3bQ")),g=i(n("FPez")),E=i(n("/UET")),T=i(n("CR7/")),S=i(n("2nuK")),m=i(n("M9Yc")),R=(0,v.default)({}),_=(0,d.getFeatures)()
s=_.ttsEnabled?n("wvnG").default:n("P1w9").identity
var y=g.default,P=S.default
_.enableDepthTransition&&(y=(0,(o||(o=n("DS29"))).withDepthTransitionProps)(g.default),P=(0,(o||(o=n("DS29"))).withDepthTransitionProps)(P))
var w=(0,h.default)({animationFactory:E.default,Episode:T.default,EpisodeList:y,SeasonList:P,seasonsButtonFactory:R,stylesheet:m.default}),I=function(e){return(0,c.compose)(f.default,(a||(a=n("agVJ"))).withFocusPath,(void 0===r?r=i(n("l8hb")):r).default,(0,(void 0===l?l=i(n("S/ro")):l).default)(e),(void 0===u?u=i(n("5sI8")):u).default,s)}
t.Episodes=I(p.DETAILS_EPISODES)(w),t.TrailersAndMore=I(p.DETAILS_TRAILERS_AND_MORE)(w)},"0l45":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=i(n("Hy99"))
t.default=(0,a.default)({glowFocusRing:function(){return{base:{height:44,width:360}}},listContainer:function(){return{base:{height:396,ignorePointer:!0,name:"listcontainer",width:360,x:0,y:55}}},mainContainer:function(){return{base:{height:506,ignorePointer:!0,opacity:.5,width:360}}},pointerDown:function(){return{base:{drawOrder:10,height:55,name:"menuPointerDown",width:360,x:0,y:451}}},pointerUp:function(){return{base:{drawOrder:10,height:55,name:"menuPointerUp",width:360,x:0,y:0}}}}).clone()},"1pHh":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=n("igsZ"),u=i(n("VbXa")),l=n("agVJ"),s=n("/P98"),d=i(n("lke8")),c=l.selectors.getActivePath,f=l.selectors.getHighlights,h=l.actions.moveFocus,p=function(e){return{focusedPath:c(e),highlights:f(e)}},v={setFocusPath:h}
t.default=function(e){return function(t){var i=function(n){function i(){return n.apply(this,arguments)||this}(0,u.default)(i,n)
var a=i.prototype
return a.getChildContext=function(){var t=this.context,n=this.props,i=n.focusedPath,a=n.highlights,o=void 0===a?{}:a,r=n.setFocusPath
return{focus:{highlightedPath:(0,d.default)(o,i,e),keyIndex:1,parentPath:t,parts:i?i.split("/"):[],path:i,setFocusPath:r}}},a.render=function(){return(0,r.j)(t,this.props,null,null)},i}(s.Component)
return i.displayName="LegacyFocusAdapter",i.contextType=l.ParentFocusPathContext,i.childContextTypes=n("cMGP").default,(void 0===o?o=(0,(a||(a=n("e9tE"))).connect)(p,v,null,{areStatesEqual:n("1V6g").areStatesEqual}):o)(i)}}},"2nuK":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o=n("9IR/"),r=n("agVJ"),u=n("xNxB"),l=i(n("u6Ht")),s=i(n("oHT9")),d=i(n("d16G")),c=i(n("9TMU")),f=i(n("Ziy1")),h=i(n("Cc0U")),p=i(n("0l45")),v=i(n("g3cW")),g=p.default.glowFocusRing,E=(0,h.default)(90,360),T=(0,f.default)(90,360),S=(0,d.default)({hasUnfocusedStateElement:!0,maxItems:9,pageBy:8,ScrollDown:(0,s.default)({stylesheet:T}),ScrollUp:(0,s.default)({stylesheet:E}),stylesheet:p.default}),m={height:44,width:360},R=(0,l.default)({focusOffsetResolver:function(e){return g.resolve(e).rect},itemArea:m,layoutDirection:"y",layoutSpacing:{x:0,y:0},layoutWrap:!1,scrollAtPercentage:.5,scrollBounded:!0,scrollItemAlign:"center",scrollWrap:!1,velocityConfig:c.default.vertical720px({itemPixels:m.height+0})})
a=(0,o.getFeatures)().ttsEnabled?n("yRMK").default:n("P1w9").identity
var _=(0,u.compose)(r.withFocusPath,v.default,R,a)
t.default=_(S)},"2vGY":function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=i(n("6F2/")),u=n("0A8G"),l=i(n("Lk1/")),s=n("HYX5")
function d(e){var t=e.query,n=t.episodeIndex,i=t.seasonIndex
return n>=0&&i>=0}t.default=new l.default({initialFocusPath:s.DETAILS_EPISODES,payload:{Details:r.default,Episodes:u.Episodes},routeWillEnter:function(e){if(d(e)){var t=e.query,i=t.episodeIndex,o=t.seasonIndex
return[(a||(a=n("GEdN"))).actions.updateSeasonMenuSelection(o,{data:{epIndex:i}})]}},routeWillExit:function(e,t,i){var r=i.current.pathname,u=[]
return d(e)&&u.push((a||(a=n("GEdN"))).actions.resetSelection()),(0,(o||(o=n("i7Pr"))).isPlaymodeRoute)(r)&&u.push((a||(a=n("GEdN"))).actions.resetSelection()),u},routeWillRemove:function(e,t,i){var r=i.current.pathname,u=[]
return d(e)&&u.push((a||(a=n("GEdN"))).actions.resetSelection()),(0,(o||(o=n("i7Pr"))).isPlaymodeRoute)(r)||r===s.BROWSE?(a||(a=n("GEdN"))).actions.resetSelection():u}})},M9Yc:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r,u,l,s,d=n("oM/y"),c=i(n("Hy99"))
t.default=(0,c.default)({animations:function(){return{base:{edpEpisodes:{focusEpisodes:{duration:(l||(l=n("TlTJ"))).SHORT_DURATION,ease:(l||(l=n("TlTJ"))).EASE,to:1},focusSeasons:{duration:(l||(l=n("TlTJ"))).SHORT_DURATION,ease:(l||(l=n("TlTJ"))).EASE,to:.5}},edpSeasons:{focusEpisodes:{duration:(l||(l=n("TlTJ"))).SHORT_DURATION,ease:(l||(l=n("TlTJ"))).EASE,to:.5},focusSeasons:{duration:(l||(l=n("TlTJ"))).SHORT_DURATION,ease:(l||(l=n("TlTJ"))).EASE,to:1}}}}},container:function(){return{base:{height:(u||(u=n("8J/X"))).VIEWPORT_HEIGHT,name:"edpView",width:(u||(u=n("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}},dynamicLabel:function(){return{base:{height:42,width:300}}},loading:function(){var e=(a||(a=n("S4TX"))).supportsSng?(0,d.i)("WNI+sourceRectFor720p=true","sng"):(0,d.i)("lKK+sourceRectFor720p=true","mng"),t=e.sourceRectFor720p,i=t.height,o=t.width
return{base:{drawOrder:10,image:e,name:"edp-loading-spinner",rect:{height:i,width:o,x:((u||(u=n("8J/X"))).VIEWPORT_WIDTH-o)/2,y:((u||(u=n("8J/X"))).VIEWPORT_HEIGHT-i)/2}}}},seasons:function(){return{base:{rect:{height:396,ignorePointer:!0,width:360,x:(r||(r=n("GQsr"))).LEGACY_THEME.screenPaddingLeft,y:(s||(s=n("JU2v"))).DETAILS_SUB_ROUTE_MENU_COL_Y}}}},seasonsLayout:function(){return{base:{rect:{height:396,width:360,x:0,y:0}}}},staticLabel:function(){return{base:{height:42,rect:{height:42,width:300},textStyle:{align:"left",color:{a:255,b:105,g:105,r:105},size:20,truncation:{position:"end"},weight:(o||(o=n("pBAo"))).EMPHASIS_WEIGHT,wrap:!1},width:300}}},staticSublabel:function(){return{base:{name:"label",padding:{right:10},rect:{height:42,width:120},textStyle:{align:"right center-vertical",color:{a:255,b:105,g:105,r:105},size:16,weight:"normal"}}}}})},"S/ro":function(e,t,n){var i,a=n("TqRt").default
t.__esModule=!0,t.default=function(e){return(0,(i||(i=n("9IR/"))).getFeature)("enableDepthTransition")?(0,(void 0===o?o=a(n("WZmG")):o).default)(e):(0,(i||(i=n("9IR/"))).getFeature)("routeTransitionsEnabled")?(void 0===r?r=a(n("e8V/")):r).default:u.identity}
var o,r,u=n("P1w9")},WZmG:function(e,t,n){var i,a,o=n("TqRt").default
t.__esModule=!0,t.default=void 0,t.default=function(e){return(0,(void 0===i?i=o(n("N9EI")):i).default)((0,(a||(a=n("oVSV"))).createSubrouteWithDepthTransitionOptions)(e))}},ctEV:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a=i(n("1pHh"))
t.default=(0,a.default)()},g3cW:function(e,t,n){var i
t.__esModule=!0,t.default=void 0
var a=n("agVJ"),o=n("e9tE"),r=a.selectors.getEnteredChild,u=a.selectors.getHighlightEnteredChild,l=a.selectors.isEntered,s=a.selectors.isFocused,d=a.selectors.isHighlightEntered
t.default=(0,o.connect)((function(e,t){return{entered:l(e,t),enteredChild:r(e,t),focused:s(e,t),highlightEntered:d(e,t),highlightEnteredChild:u(e,t),mouseIsEnabled:(0,(i||(i=n("B1ka"))).isMouseEnabled)(e),mouseIsShowing:(0,(i||(i=n("B1ka"))).isMouseVisible)(e)}}))},lke8:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e,t,n){if(void 0===n&&(n=!1),n&&e[t])return t
var i=Object.keys(e),a=n?1:2,o=i.length
return o>2?i[o-a]:i[0]}},n9iY:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o,r=i(n("6F2/")),u=n("0A8G"),l=i(n("Lk1/")),s=n("HYX5")
t.default=new l.default({initialFocusPath:s.DETAILS_TRAILERS_AND_MORE,payload:{Details:r.default,TrailersAndMore:u.TrailersAndMore},routeWillExit:function(e,t,i){var r=i.current.pathname
return(0,(o||(o=n("i7Pr"))).isPlaymodeRoute)(r)?(a||(a=n("GEdN"))).actions.resetSelection():[]},routeWillRemove:function(e,t,i){var r=i.current.pathname
return(0,(o||(o=n("i7Pr"))).isPlaymodeRoute)(r)||r===s.BROWSE?(a||(a=n("GEdN"))).actions.resetSelection():[]}})},wvnG:function(e,t,n){var i,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var o=a(n("Ki15")).default.onEnter
t.default=o((function(e){var t=e.outline,a=void 0===t?{}:t,o=e.texttospeech,r=(void 0===o?{}:o).inEDP,u=a.title
return r&&u&&(0,(i||(i=n("m5dK"))).nfformat)(r,{title:u})}))},yRMK:function(e,t,n){var i=n("TqRt").default
t.__esModule=!0,t.default=void 0
var a,o=n("igsZ"),r=i(n("Ki15")).default.list
t.default=r({context:function(e){var t=e.index,i=void 0===t?0:t,r=e.items,u=void 0===r?[]:r,l=e.texttospeech,s=void 0===l?{}:l,d=s.inMenu,c=s.itemPosition
return d&&c&&(0,o.j)("speak",{children:[(0,o.j)("s",{children:d},null,null),(0,o.j)("s",{children:(0,(a||(a=n("m5dK"))).nfformat)(c,{itemNumber:i+1,numberOfItems:u.length})},null,null)]},null,null)},item:function(e){var t=e.index,n=void 0===t?0:t,i=e.items,a=(void 0===i?[]:i)[n]||{},r=a.label,u=a.subLabel
return r&&(0,o.j)("speak",{children:[(0,o.j)("s",{children:r},null,null),(0,o.j)("s",{children:u},null,null)]},null,null)}})}}])


//# sourceMappingURL=route.detailsEpisodes.b2e11efb26c0d2cc8cef.js.map