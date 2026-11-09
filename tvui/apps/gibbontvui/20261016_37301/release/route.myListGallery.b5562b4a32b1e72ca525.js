(this.webpackJsonp=this.webpackJsonp||[]).push([[122],{"+iSk":function(e,t,o){var n,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a=o("e9tE"),l=o("NEM1"),d=r(o("aIcU")),u=l.selectors.isTransitioningFrom,s=l.selectors.isTransitioningTo,c={onBack:l.actions.historyPop,onEnterMdp:d.default.handleEnterMdp,onPlayVideo:d.default.handlePlayVideo}
t.default=(0,a.connect)((function(){var e=u([(i||(i=o("ve0B"))).patterns.DETAILS,(i||(i=o("ve0B"))).patterns.GAME_DETAILS]),t=s([(i||(i=o("ve0B"))).patterns.DETAILS,(i||(i=o("ve0B"))).patterns.GAME_DETAILS]),r=u([(i||(i=o("ve0B"))).patterns.BROWSE,(i||(i=o("ve0B"))).patterns.BROWSE_BY_LOLOMO_TYPE]),a=s([(i||(i=o("ve0B"))).patterns.BROWSE,(i||(i=o("ve0B"))).patterns.BROWSE_BY_LOLOMO_TYPE]),l=u([(i||(i=o("ve0B"))).patterns.BROWSE,(i||(i=o("ve0B"))).patterns.BROWSE_BY_LOLOMO_TYPE,(i||(i=o("ve0B"))).patterns.APP_MENU])
return function(i){return{isFromDetails:e(i),isFromTriggerLocation:l(i),isToOrFromBrowse:r(i)||a(i),isToOrFromDetails:e(i)||t(i),mouseIsShowing:(0,(n||(n=o("B1ka"))).isMouseVisible)(i)}}}),c)},"/BC3":function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.POINTER_AFFORDANCE_DOWN,d=e.POINTER_AFFORDANCE_UP,u=(0,l.default)({pointerAffordance:function(){var e
return{base:{backgroundImage:(0,a.i)("X9a+halign=center+valign=center","pointeraffordances"),height:d.height,name:"pointerUp",width:d.width,x:.5*(r||(r=o("GQsr"))).LEGACY_THEME.screenPaddingLeft-4,y:.5*d.height-55},pointerAffordanceState:(e={},e[(void 0===i?i=n(o("eCN6")):i).default.highlighted]={backgroundImage:(0,a.i)("F0E+halign=center+valign=center","pointeraffordances")},e)}}})
return{down:(0,l.default)({pointerAffordance:function(){var e
return{base:{backgroundImage:(0,a.i)("Jhv+halign=center+valign=center","pointeraffordances"),height:t.height,name:"pointerDown",width:t.width,x:.5*(r||(r=o("GQsr"))).LEGACY_THEME.screenPaddingLeft-4,y:-.5*t.height+55},pointerAffordanceState:(e={},e[(void 0===i?i=n(o("eCN6")):i).default.highlighted]={backgroundImage:(0,a.i)("9qP+halign=center+valign=center","pointeraffordances")},e)}}}),up:u}}
var r,i,a=o("oM/y"),l=n(o("Hy99"))},"4h9q":function(e,t){t.__esModule=!0,t.default=function(e){void 0===e&&(e={})
var t=e,o=t.id
return{boxart:{id:t.imageTypeIdentifier,top10:t.top10},id:o,unifiedEntityId:t.unifiedEntityId}}},"4zTp":function(e,t,o){t.__esModule=!0,t.default=function(e){var t=(void 0===e?{}:e).Boxshot
function i(e){var i
if(null!=(i=e.image)&&null!=(i=i.url)&&i.url&&void 0===e.hasFallbackArtwork)return(0,r.j)(t,e,null,null)
var a=e.image,l=e.rect,d=e.title,u={height:l.height,width:l.width,x:0,y:0},s=a.sourceRect||u,c=s.height,f=s.width,h=s.x,v=s.y
return(0,r.j)(t,{__proto__:e,children:(0,r.j)((n||(n=o("63Lm"))).BoxshotOverlay,{height:c,title:d,width:f,x:h,y:v},"overlay",null)},null,null)}return i.displayName="FallbackBoxshot",i}
var n,r=o("igsZ")},"6ilx":function(e,t,o){t.__esModule=!0,t.default=void 0
var n,r=(0,o("9IR/").getFeatures)()
n=r.enableDepthTransition?o("Jw+/").default:r.routeTransitionsEnabled?o("8/zu").default:o("P1w9").identity,t.default=n},"8/zu":function(e,t,o){t.__esModule=!0,t.transitionAnimationConfig=t.default=void 0
var n,r=o("9IR/"),i=o("NEM1"),a=o("8J/X"),l=o("d3CS"),d=o("SqmF"),u=(0,r.getFeatures)(),s=a.VIEWPORT_X,c=a.VIEWPORT_X+100,f=(0,d.enterFromRight)({slideFrom:c,slideTo:s}),h=(0,d.enterFromLeft)({slideFrom:c,slideTo:s}),v=(0,d.exitToRight)({slideFrom:s,slideTo:c}),g=(0,d.exitToLeft)({slideFrom:s,slideTo:c}),m=u.enableDepthTransition?h:void 0,p=u.enableDepthTransition?g:void 0,y=t.transitionAnimationConfig={states:(n={},n[l.ENTERING]=function(e,t){var o=t.isToOrFromBrowse,n=t.isToOrFromCategoryHub
return o||n?f:m},n[l.EXITING]=function(e,t){var o=t.isToOrFromBrowse,n=t.isToOrFromCategoryHub
return o||n?v:p},n)}
t.default=(0,i.transitionAnimation)(y)},"9Ad0":function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.createGalleryCollection=function(e){var t=e.layoutConfig,L=void 0===t?(void 0===E?E=n(o("lSnr")):E).default:t,O=e.overrideListConfig,A=void 0===O?x.identity:O,k=e.showBackArrow,F=e.withListData,B=void 0===F?x.identity:F,D=(0,(p||(p=o("p/LH"))).getStylesheet)(L),N=(0,(void 0===i?i=n(o("YPSL")):i).default)({stylesheet:D.collection}),V=(0,(void 0===l?l=n(o("Ryb/")):l).default)({stylesheet:D.focusIndicator,useFlex:!0}),G=(0,(s||(s=o("VU+z"))).createGalleryErrorMessageComponent)({stylesheet:D}),j=(0,(void 0===_?_=n(o("/BC3")):_).default)({POINTER_AFFORDANCE_DOWN:L.POINTER_AFFORDANCE_DOWN,POINTER_AFFORDANCE_UP:L.POINTER_AFFORDANCE_UP}),W={DownAffordance:(void 0===T?T=n(o("oHT9")).default:T)({stylesheet:j.down}),UpAffordance:(void 0===T?T=n(o("oHT9")).default:T)({stylesheet:j.up})},U={enablePresentationTracking:!0,enableRenderStatusTracking:!0,itemArea:L.ITEM_AREA,layoutBoundary:L.COLUMNS,layoutDirection:"x",layoutOrigin:L.LAYOUT_ORIGIN,layoutSpacing:L.LAYOUT_SPACING,rangePadding:0,scrollAt:0,trackingInfoSelector:function(e){var t
return e&&e.trackingInfo&&-1!==(null==e||null==(t=e.trackingInfo)?void 0:t.videoId)?{trackingInfo:e.trackingInfo,view:"boxArt"}:{}},trackingScrollViewportSelector:(0,(void 0===m?m=n(o("DXs2")):m).default)(L).trackingScrollViewportSelector,velocityConfig:(void 0===b?b=n(o("9TMU")):b).default.vertical720px({itemPixels:L.ITEM_AREA.height+L.LAYOUT_SPACING.y})},H=(0,(void 0===a?a=n(o("u6Ht")):a).default)((0,I.default)({},A(U),{resetStateOnDataLengthChange:!0})),q=(0,(u||(u=o("adhb"))).createGalleryCollectionComponent)({animationFactory:(void 0===v?v=n(o("lQr5")):v).default,BackArrow:(void 0===T?T=n(o("oHT9")).default:T)({shouldShowPointerAffordance:(0,R.just)(k),stylesheet:D}),Boxshot:void 0===C?C=(0,(void 0===f?f=n(o("4zTp")):f).default)({Boxshot:(0,w.default)((0,n(o("JYc4")).default)({cornerRadius:"BorderRadiusSmall",generateOpacityTransition:(void 0===g?g=n(o("yttP")):g).default}))}):C,Collection:N,ErrorMessage:G,FocusRing:V,numColumns:L.COLUMNS,playPrediction:(0,(h||(h=o("uRDb"))).createPlayPrediction)((0,M.assign)({},(void 0===d?d=n(o("jV6Z")):d).default,{numColsLeft:0,numColsRight:3,numRowsDown:1,numRowsUp:0,settleTime:1e3})),playPredictionStaticConfig:void 0,pointerAffordances:W,stylesheet:D}),K=(0,(r||(r=o("9IR/"))).getFeature)("enableDepthTransition")?x.identity:(0,(void 0===y?y=n(o("bTOU")):y).default)()
return(0,S.compose)(w.default,K,B,H,(0,P.default)((0,(c||(c=o("Nut0"))).propsSelector)(L.COLUMNS)))(q)}
var r,i,a,l,d,u,s,c,f,h,v,g,m,p,y,_,b,E,C,T,I=n(o("siCl")),M=o("y2r0"),S=o("xNxB"),x=o("P1w9"),R=o("759e"),w=n(o("T3qH")),P=n(o("UN2+"))},"A8S/":function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a,l,d=r(o("gisa")),u=o("759e"),s=o("1dek"),c=n(o("lsGl")),f=r(o("ertK")),h=function(e){return e.id},v=function(e){return this[e]},g={},m={from:0,to:0},p=c.toTrackingContext,y=(0,f.default)({getVideoMetaData:function(e,t,n,a){void 0===n&&(n=g)
var l=n.items,u=void 0===l?[]:l,s=a.map(v,u).filter(Boolean).map(h)
if(s.length){var f=c.toMetadataPaths(n,s).concat(c.toMenuMetadataPaths(n,s))
return(0,(void 0===i?i=r(o("8VqT")):i).default)(e.get.apply(e,f))}return d.default.Observable.empty()}}).getMetaDataPrefetchSequence,_=function(e,t,o){var n,r
void 0===e&&(e={})
var i=o.json,a=o.row,l=((null==i||null==(n=i.videos)?void 0:n[null==(r=e)?void 0:r.id])||g).categoryBoxart,d=void 0===l?g:l,u=p(t,e,a)
return u.imageKey=d.imageTypeIdentifier,(0,s.unsafeObjectMerge)(e,{categoryBoxart:d,summary:e,trackingInfo:u})}
function b(e,t,n){if(C(n))return{items:[]}
for(var i=n.itemContext||g,d=i.items,u=void 0===d?[]:d,s=(void 0===l?l=(0,r(o("gzTg")).default)({chunkSize:(void 0===a?a=r(o("GkSd")):a).default.BOXART_CHUNK_SIZE,threshold:.6}):l)(n)||m,c={json:e,row:i},f={},h=s.from,v=s.to+1-h,p=0;p<v;p++){var y=h+p
f[y]=_(u[y],y,c)}return{items:f}}var E={componentDidUpdate:function(){var e=this.context.falcorComponentContext.rootModel
this.propsSequence.isDisposed||this.propsSequence.onNext({galleryProps:this.props,rootModel:e})},componentWillUnmount:function(){this.propsSequence.dispose(),this.sequenceHandle.dispose(),delete this.propsSequence,delete this.sequenceHandle},deref:!1,getBasePath:(0,u.just)([]),getPaths:function(e){if(C(e))return[]
var t=e.itemContext||g,n=(void 0===l?l=(0,r(o("gzTg")).default)({chunkSize:(void 0===a?a=r(o("GkSd")):a).default.BOXART_CHUNK_SIZE,threshold:.6}):l)(e)||m,i=t.items
return[["videos",(void 0===i?[]:i).slice(n.from,n.to+1).map(h),"categoryBoxart"]]},selector:function(e,t,o){var n=o.itemContext||g
if(C(o)){var r=n.errorCode?"<i>"+n.errorCode+"</i>":""
return{dataLength:0,error:"so message shows",items:[],strings:{listLoadError:n.message+" "+r}}}return e},shouldFetchData:function(e,t){if(C(t))return!1
var n=((void 0===l?l=(0,r(o("gzTg")).default)({chunkSize:(void 0===a?a=r(o("GkSd")):a).default.BOXART_CHUNK_SIZE,threshold:.6}):l)(e)||m).to,i=((void 0===l?l=(0,r(o("gzTg")).default)({chunkSize:(void 0===a?a=r(o("GkSd")):a).default.BOXART_CHUNK_SIZE,threshold:.6}):l)(t)||m).to
return e===t||e.dataId!==t.dataId||n!==i},transformError:function(e,t,o){return b({videos:g},0,o)},transformResponse:b,UNSAFE_componentWillMount:function(){var e=new d.default.Subject
this.propsSequence=e,this.sequenceHandle=y(e,(void 0===a?a=r(o("GkSd")):a).default.BOB_PREFETCH_DEBOUNCE_INTERVAL).subscribe(Boolean,(function(){}))}}
function C(e){var t=e.itemContext||g
return t===g||t.isEmptyRow||t.isError}t.default=E},ACWi:function(e,t,o){t.__esModule=!0,t.default=void 0
var n,r=o("pbgz"),i=o("RzHp"),a=((n={})[i.LOLOMO_TYPE.tvLolomo]="series",n[i.LOLOMO_TYPE.movieLolomo]="movies",n)
function l(e,t,o){return e.id===a[t]||e.id===o}t.default=function(e){var t=(void 0===e?EMPTY_OBJECT:e).appMenuId
return function(e){return(0,r.Falcor)(e,{getBasePath:function(){return[]},getPaths:function(){return[["appMenu","summary"]]},selector:function(e,o,n){var r,i,a=null==(r=e.appMenu)||null==(r=r.summary)?void 0:r.items
if(!a)return EMPTY_OBJECT
for(var d=0;!i&&d<a.length;){var u=a[d]
l(u,n.lolomoType,t)&&(i=u),d++}return i?{textLegend:{text:i.title}}:EMPTY_OBJECT}})}}},DXs2:function(e,t,o){var n,r,i=o("TqRt").default
t.__esModule=!0,t.default=function(e){var t=e.LAYOUT_ORIGIN.y,a=e.ITEM_AREA.height+e.LAYOUT_SPACING.y,l=Math.floor((720-(e.GALLERY_RECT.y+t))/a),d=1280-e.GALLERY_X_OFFSET
return{trackingInfoSelector:function(e,t,a){var l=a.itemContext
if(!e||!e.categoryBoxart)return{}
var d=(0,(void 0===r?r=i(o("4h9q")):r).default)(e.categoryBoxart)
return{trackingInfo:(0,(n||(n=o("lsGl"))).toTrackingContext)(t,d,l),view:"boxArt"}},trackingScrollViewportSelector:function(e,o){return{height:l*a,width:o.entered?e.width:d,x:e.x,y:e.y+t}}}}},EwWu:function(e,t,o){t.__esModule=!0,t.withLeftMenuHandling=function(e){return function(t){var d=t.onBack,u=(0,(r||(r=o("e9tE"))).useDispatch)(),s=(0,(r||(r=o("e9tE"))).useSelector)((a||(a=o("f4oL"))).getIsAppMenuEnabled),c=(0,(n||(n=o("K0jP"))).useEvent)((function(){if(s)u((0,(i||(i=o("KI1k"))).pushAppMenu)())
else{for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n]
d.apply(null,t)}}))
return(0,l.j)(e,{__proto__:t,onBack:c,onNavigableEdge:c},null,null)}}
var n,r,i,a,l=o("igsZ")},GkSd:function(e,t){t.__esModule=!0,t.default=void 0,t.default={BOB_PREFETCH_DEBOUNCE_INTERVAL:350,BOXART_CHUNK_SIZE:45,CATEGORY_BOXART:"categoryBoxart",CATEGORY_BOXART_CONTEXTUAL:"categoryCArt",PATH_BOUND_VALUE_CHUNK_SIZE:180,SUMMARY:"summary",VIDEO_MERCH:"videoMerch"}},JYc4:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=t.SimpleBoxshotFactory=void 0
var r,i,a,l,d=o("+XfO"),u=o("igsZ"),s=o("8fke"),c=o("Hg/B"),f=o("/P98"),h=["onBackgroundImageLoaded","onClick","onKeyDown"],v=(0,s.memoize)((function(e){return{test_videoId:e}})),g=Object.freeze({url:{}}),m=function(e){var t=e.color,n=void 0===t?(i||(i=o("D+c2"))).FoundationalColors.Gray900:t,l=e.cornerRadius,d=e.ignorePointer,s=void 0!==d&&d,c=e.textColor,f=(0,(r||(r=o("eNcy"))).s)("Focusable","SimpleBoxshotComponent",{backgroundImage:function(e){var t=e.backgroundImage
return null!=t&&t.url?t:g},color:function(e){return e.color||n},cornerRadius:function(e){var t=e.theme
return"string"==typeof l?t[l]:l},drawOrder:function(e){return e.drawOrder},height:function(e){return e.height},ignorePointer:s,name:function(e){var t=e.name
return void 0===t?"simple-boxshot":t},opacity:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return e.opacity})),textStyle:function(e){var t=e.theme
return{color:c||t.Foreground}},width:function(e){return e.width},x:function(e){return e.x},y:function(e){return e.y}},!0)
return function(e){var t=e.actionKey,n=void 0===t?"key.enter":t,r=e.animation,i=e.children,l=e.color,d=e.data,s=e.drawOrder,c=e.focusKey,g=e.focused,m=e.image,p=e.index,y=e.itemContext,_=e.listItem,b=e.name,E=e.onItemRenderStatusChange,C=e.onPlay,T=e.onSelect,I=e.opacity,M=e.rect,S=e.videoId,x=(0,(a||(a=o("K0jP"))).useEvent)((function(e){var t,o=!!e,n=null==e?void 0:e.data,r=null!=(t=null==n?void 0:n.state)?t:"unknown",i=!(null==n||!n.success)
E&&E({absoluteIndex:p,dataIndex:null==_?void 0:_.dataIndex,loaded:o,resourceState:r,success:o&&i})})),R=(0,(a||(a=o("K0jP"))).useEvent)((function(e){e.uiEvent===n?T&&T(d,e,y):"key.play"!==e.uiEvent&&"key.start"!==e.uiEvent||C&&C(d,e,y)})),w=(0,(a||(a=o("K0jP"))).useEvent)((function(e){T&&T(d,e,y)}))
return(0,u.j)(f,{__update_handlers__:h,animation:r,backgroundImage:m,children:i,color:l,drawOrder:s,focused:g,focusKey:c,height:null==M?void 0:M.height,name:b,onBackgroundImageLoaded:x,onClick:w,onKeyDown:R,opacity:I,testAttributes:v(S),width:null==M?void 0:M.width,x:null==M?void 0:M.x,y:null==M?void 0:M.y},null,null)}}
t.SimpleBoxshotFactory=m,t.default=function(e){var t
return(t=e.generateOpacityTransition,function(e){return function(r){var i,a,s=r.animation,h=r.dimTo,v=r.dimmed,g=r.index,m=r.listContext,p=(0,f.useRef)(t?t(0,v,h).to:1),y=(null!=(i=(0,(void 0===l?l=n(o("/AdD")):l).default)(g))?i:g)!==g,_=null==m||null==(a=m.transition)?void 0:a.duration,b=(0,f.useMemo)((function(){if(t){var e=_||10
y&&(e=0)
var o=(0,c.fade)(t(e,v,h))
return s?(0,d.h)(s,o):o}}),[s,v,h,y,_])
return(0,u.j)(e,{__proto__:r,animation:b,opacity:p.current},null,null)}})(m(e))}},"Jw+/":function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.name=t.default=void 0
var r,i,a,l,d=n(o("siCl")),u=n(o("N9EI")),s=o("HYX5"),c=o("8/zu"),f=function(e){return e.templateKey!==(r||(r=o("KBg7"))).TemplateKey.BrowseBackground},h=t.name=s.MY_LIST_GALLERY
t.default=(0,u.default)({fallbackAnimationConfig:c.transitionAnimationConfig,name:h,onRootEntering:function(e){var t=e.metadata,n=(0,(a||(a=o("yf0s"))).isHorizontalTransition)()?[]:void 0===l?l=[o("1EjG").name]:l
return(0,(a||(a=o("yf0s"))).onActivationChange)((0,d.default)({},e,{metadata:(0,(a||(a=o("yf0s"))).isFromDetail)()?(0,(i||(i=o("kCWc"))).customFilterMetadata)(t,f):t,rootDependency:n}))},onRootExiting:function(e){var t=e.metadata,n=(0,(a||(a=o("yf0s"))).isHorizontalTransition)()?[]:void 0===l?l=[o("1EjG").name]:l
return(0,(a||(a=o("yf0s"))).onActivationChange)((0,d.default)({},e,{metadata:(0,(a||(a=o("yf0s"))).isToDetail)()?(0,(i||(i=o("kCWc"))).customFilterMetadata)(t,f):t,rootDependency:n}))}})},LyZa:function(e,t,o){t.__esModule=!0,t.default=void 0
var n=o("e9tE"),r=o("CMc0"),i=r.selectors.getPosition,a=r.selectors.getViewableId,l={onIndexChange:r.actions.movePositionTo,onViewableChange:r.actions.updateViewableId}
t.default=(0,n.connect)((function(e){return{index:i(e),lastViewableId:a(e),viewableId:a(e)}}),l)},NSkI:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i,a=n(o("RIqP")),l=n(o("vxcV")),d={excludedListContexts:["character","categories"],falcorPath:["current",["bookmark","summary"]],getAvailable:function(e){return e&&e.current&&e.current.summary&&e.current.summary.available},getBookmark:function(e){return 1e3*(e&&e.current&&e.current.bookmark&&e.current.bookmark.position||0)},getManifestProfile:function(e){return void 0===e&&(e={}),e.manifestProfile},getPrefetchSupplementals:function(e){var t=[],n=(0,(r||(r=o("eCl4"))).getVideoMerchId)(e)
if(n){var i=(0,(r||(r=o("eCl4"))).getUiLabel)(e),l=1e3*(0,(r||(r=o("eCl4"))).getVideoMerchPts)(e),d=(0,(r||(r=o("eCl4"))).getManifestProfile)(e),u=(0,(r||(r=o("eCl4"))).isUnletterboxedEnabled)()
t.push({params:{manifestProfile:d,unletterboxed:u},pts:l,uiLabel:i,viewableId:n})}var s=(e||{}).prefetchSupplementals,c=void 0===s?[]:s
return c&&c.length&&t.push.apply(t,(0,a.default)(c)),t},getPrePlayFalcorPath:l.default.getPrePlayFalcorPath,getPrePlayItem:l.default.getPrePlayItem,getUiLabel:function(){return"browse"},getVideoId:function(e){var t
return void 0===e&&(e={}),null==(t=e)?void 0:t.id},getViewableId:function(e){return e&&e.current&&e.current.summary&&e.current.summary.id},isBranchingNarrativeTitle:function(e){var t
return(0,(void 0===i?i=n(o("o+kE")):i).default)(null==e||null==(t=e.current)?void 0:t.summary)},numColsLeft:0,numColsRight:5,numRowsDown:2,numRowsUp:0,settleTime:0}
t.default=d},Nut0:function(e,t,o){t.__esModule=!0,t.propsSelector=function(e){return function(t){var o=t.categoriesError,r=t.dataLength,i=t.disabled,a=t.error,l=t.index,d=t.items,u=r%e
0===u&&(u=e)
var s=!!o||a&&(!d||(0,n.isEmpty)(d))
return{numElementsInLastRow:u,pointerDownVisible:l<r-u-1&&!i,pointerUpVisible:l>=e&&!i,shouldDisplayNoItemsError:s}}}
var n=o("CPIT")},QfL0:function(e,t,o){t.__esModule=!0,t.videoMerchNavigationFactory=void 0
var n=o("9IR/")
t.videoMerchNavigationFactory=(0,n.getFeatures)().enableVideoMerch?o("Z/p0").videoMerchNavigation:function(){return o("P1w9").identity}},Qu7C:function(e,t,o){var n,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a,l=r(o("y5Sb")),d=r(o("Lk1/"))
t.default=new d.default({payload:{MyListGallery:l.default},rememberFocusPath:!1,routeWillEnter:function(){return[(0,(i||(i=o("Xypa"))).winkAppMenu)(),(0,(n||(n=o("agVJ"))).initializeFocus)({path:(a||(a=o("HYX5"))).MY_LIST_GALLERY})]}})},"Ryb/":function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=function(e){var t,y=e.displayName,_=void 0===y?"FocusIndicator":y,b=e.hideOnBlur,E=void 0===b||b,C=e.stylesheet,T=e.useFlex,I=void 0!==T&&T,M=e.useFocusChildDimensions,S=void 0!==M&&M,x=v(C,m)
return(t=function(e){function t(t){var o=e.call(this,t)||this
return o.state={savedFocusChildRect:t.focus.rect||null},o}(0,d.default)(t,e),t.getDerivedStateFromProps=function(e){return e.focus.rect?{savedFocusChildRect:e.focus.rect}:null}
var u=t.prototype
return u.shouldComponentUpdate=function(e){var t=this.props
return e.focus!==t.focus||e.offset!==t.offset||e.transition!==t.transition||e.opacityAnimation!==t.opacityAnimation||e.opacity!==t.opacity||e.visible!==t.visible||e.listItem!==t.listItem||e.visualState!==t.visualState||!(0,(void 0===i?i=n(o("kqHg")):i).default)(e.children,t.children)},u.render=function(){var e=this.context,t=this.props,i=this.state.savedFocusChildRect,d=g(x,e,t),u=d.rect||p,s=t.children,v=t.focus.rect,m=t.offset,y=void 0===m?u:m,_=t.opacity,b=t.opacityAnimation,C=t.visible&&(!!v||!v&&!E),T=v||C?v:i,M=y&&y.x||0,R=(T?T.x:0)+M,w=y&&y.y||0,P=(T?T.y:0)+w,L=S&&T&&T.width||u.width,O=S&&T&&T.height||u.height,A=t.transition,k=A&&A.animation
if(I)return k?(0,l.j)((void 0===r?r=n(o("VeTH")):r).default,{__update_handlers__:h,children:s,effectParams:t.effectParams,focusRingAnimation:k,hide:!C,imageSlices:d.imageSlices,onAnimationCompleted:t.onAnimationCompleted,rect:{height:O,width:L},unstable_effect:t.unstable_effect},"flex-focus-ring",null):(0,l.j)((void 0===r?r=n(o("VeTH")):r).default,{children:s,effectParams:t.effectParams,hide:!C,imageSlices:d.imageSlices,opacity:_,rect:{height:O,width:L,x:R,y:P},unstable_effect:t.unstable_effect},"flex-focus-ring",null)
var F=!0
if(k)return(0,l.j)("Widget",{__update_handlers__:f,__update_style__:c,animation:k,children:s,effectParams:t.effectParams,onAnimationCompleted:t.onAnimationCompleted,staticStyle:d,style:{height:O,ignorePointer:F,visible:C,width:L},unstable_effect:t.unstable_effect},"background",null)
var B={clip:!1,ignorePointer:F},D=(0,a.default)({},B,{height:O,opacity:_,visible:C,width:L,x:R,y:P})
return(0,l.j)("Widget",{animation:b,children:(0,l.j)("Widget",{children:s,style:B},null,null),effectParams:t.effectParams,staticStyle:d,style:D,unstable_effect:t.unstable_effect},"background",null)},t}(s.Component)).displayName=_,t.contextType=u.StylesheetContext,t.defaultProps={visible:!0},t}
var r,i,a=n(o("siCl")),l=o("igsZ"),d=n(o("VbXa")),u=o("s6u8"),s=o("/P98"),c=(n(o("17x9")),["height","ignorePointer","visible","width"]),f=["onAnimationCompleted"],h=["onAnimationCompleted"],v=(0,u.getStylesheetDefaultsResolver)(),g=(0,u.createAdditionalStylesResolver)(["visualState"])
function m(){return{base:{name:"focus-indicator"}}}var p={x:0,y:0}},"VU+z":function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.createGalleryErrorMessageComponent=function(e){var t,n=e.stylesheet
return t=function(e){function t(){return e.apply(this,arguments)||this}(0,u.default)(t,e)
var a=t.prototype
return a.componentDidUpdate=function(e){var t=this.props,n=t.focused,i=t.message
"error"===n&&n!==e.focused&&(void 0===l?l=r(o("6pxA")):l).default.say((0,d.j)("speak",{children:(0,d.j)("s",{children:i},null,null)},null,null))},a.render=function(){var e=this.context,t=this.props,r=t.focusKey,a=t.focused,l=t.message,u=n.resolve(e)
return(0,d.j)((i||(i=o("agVJ"))).Focusable,{children:[(0,d.j)("Widget",{staticStyle:u.errorMessageBorderLeft},"errorMessageBorderLeft",null),(0,d.j)("Widget",{staticStyle:u.errorMessageBorderRight},"errorMessageBorderRight",null),(0,d.j)("Widget",{staticStyle:u.errorMessageBorderTop},"errorMessageBorderTop",null),(0,d.j)("Widget",{staticStyle:u.errorMessageBorderBottom},"errorMessageBorderBottom",null),(0,d.j)("Widget",{__update_style__:c,staticStyle:u.errorMessageText,style:{text:l}},"galleryErrorMessage",null)],focused:a,focusKey:r,staticStyle:u.errorMessageContainer},"galleryErrorMessageContainer",null)},t}(s.Component),t.contextTypes=(a||(a=o("s6u8"))).stylesheetContextTypes,t.displayName="categoryGalleryErrMsg",t}
var i,a,l,d=o("igsZ"),u=r(o("VbXa")),s=o("/P98"),c=(n(o("17x9")),["text"])},Ww3U:function(e,t,o){var n
t.__esModule=!0,t.default=void 0
var r={enterCategoriesList:function(){(n||(n=o("Mmf2"))).consolidatedLogger.startSession((n||(n=o("Mmf2"))).SESSION.presentation,{view:(n||(n=o("Mmf2"))).VIEW.categorySelector},{endWithId:"_categoriesView"})},enterGallery:function(){(n||(n=o("Mmf2"))).consolidatedLogger.startSession((n||(n=o("Mmf2"))).SESSION.presentation,{view:(n||(n=o("Mmf2"))).VIEW.browseTitlesGallery},{endWithId:"_categoriesView"})},exitGalleryOrList:function(){(n||(n=o("Mmf2"))).consolidatedLogger.endSession("Presentation_categoriesView")},playVideo:function(){(n||(n=o("Mmf2"))).consolidatedLogger.startAndEndSession((n||(n=o("Mmf2"))).SESSION.playCommand)},willEnterMdp:function(e){var t={trackingInfo:e,view:(n||(n=o("Mmf2"))).VIEW.boxArt};(n||(n=o("Mmf2"))).consolidatedLogger.startAndEndSession((n||(n=o("Mmf2"))).SESSION.focus,t)}}
t.default=r},YUuR:function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a=r(o("UN2+"))
t.default=(0,a.default)((function(e){var t=e.itemContext
if(t){var r=t.items||[],a=e.index,l=void 0===a?0:a,d=r[l]
return d?{itemContext:t,trackingInfo:(void 0===i?i=n(o("lsGl")):i).toTrackingContext(l,d,t),videoId:d.id,videoMerch:d.videoMerch}:{itemContext:t,videoId:void 0}}}))},YlFw:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i,a=n(o("jGzq")),l=n(o("gisa")),d=o("P1w9"),u=function(e){return e.id},s=function(e){return l.default.Observable.just({errors:e})}
function c(e,t){for(var o=0,n=t.length;o<n;o++){var r=t[o]
if(e===r.id)return r}}function f(e,t){var o=e.errorTransform,n=e.listPathConfig,r=e.listSummaries,i=t.errors,a=t.json
if(i){for(var l=0,d=i.length;l<d;l++){var u=i[l],s=u.path,f=u.value
e[s[1]]=o(f,c(s[1],r))}e.errors=[].concat(i)}else a&&n.selectListDataFromJson(r,a,e)
return e}t.default=function(e,t,c,h){void 0===c&&(c=d.identity),(0,a.default)(e,"a root model must be provided")
var v=(0,(void 0===i?i=n(o("XQcU")):i).default)(),g=l.default.Observable.empty
return t.length?(0,(void 0===r?r=n(o("8VqT")):r).default)(e.get(v.rowByIdPath(t.map(u))).progressively()).catch(s).scan({errorTransform:c,listPathConfig:v,listSummaries:t,requestContext:h},f):g()}},"Z/p0":function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.videoMerchNavigation=function(e){var t=(void 0===e?{}:e).shouldContinueMdpPlayback,n=void 0===t?void 0===a?a=r(o("fOFQ")).default.shouldContinueMdpPlayback:a:t
return function(e){var t
function r(e,t,o){var r,i=this.props,a=i.onEnterMdp,l=i.playbackStateObject
n(e,i)&&(r=l),a(e,t,o,r)}return t=function(t){function o(){for(var e,o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i]
return(e=t.call.apply(t,[this].concat(n))||this).handleEnterMdp=r.bind(e),e}(0,d.default)(o,t)
var n=o.prototype
return n.componentDidUpdate=function(e){var t,o
if(this.context.appConfig.allowAutomaticBehaviors){var n,r=null==e||null==(t=e.playbackStateObject)?void 0:t.viewableId,i=null==(o=this.props)||null==(o=o.playbackStateObject)?void 0:o.viewableId
i&&r!==i&&(null==(n=this.props)||null==n.onViewableChange||n.onViewableChange(i))}},n.render=function(){return this.context.appConfig.allowAutomaticBehaviors?(0,l.j)(e,{__proto__:this.props,onEnterMdp:this.handleEnterMdp},null,null):(0,l.j)(e,this.props,null,null)},o}(s.Component),t.displayName=(0,u.higherOrderName)("VideoMerchNavigation",e),t.propTypes={onEnterMdp:c.func,onViewableChange:c.func,playbackStateObject:c.object},t.contextTypes=(i||(i=o("s6u8"))).stylesheetContextTypes,t}}
var i,a,l=o("igsZ"),d=r(o("VbXa")),u=o("bGSL"),s=o("/P98"),c=n(o("17x9"))},Zp2C:function(e,t){t.__esModule=!0,t.default=void 0,t.default={isMapCacheMissError:function(e){return!!(e&&e.value&&e.value.expired)},isRefetchError:function(e){return!!(e&&e.value&&e.value.isFailedRefetch)}}},aIcU:function(e,t,o){var n,r,i,a,l=o("TqRt").default
t.__esModule=!0,t.default=void 0
var d={handleEnterMdp:function(e,t,i,d){var u=t.index,s=t.itemContext,c=(0,(n||(n=o("lsGl"))).toUiPlayContext)(u,e,s);(void 0===a?a=l(o("Ww3U")):a).default.willEnterMdp(e,c)
var f={initialStateOfPlayback:d,itemContext:c,playRequestTime:i&&i.timeStamp,premountBrowse:!1,videoId:e.id}
return(0,(r||(r=o("uVDR"))).pushDetails)(f)},handlePlayVideo:function(e,t,r){var d=t.index,u=t.itemContext,s=(0,(n||(n=o("lsGl"))).toUiPlayContext)(d,e,u),c=e.id,f=r&&r.timeStamp;(void 0===a?a=l(o("Ww3U")):a).default.playVideo(e,s,f)
var h=e.summary
return(0,(i||(i=o("i7Pr"))).pushPlayback)({ancestorId:c,itemContext:s,playRequestTime:f,videoSummary:h})}}
t.default=d},adhb:function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.createGalleryCollectionComponent=function(e){var t=e.BackArrow,n=e.Boxshot,r=e.Collection,i=e.ErrorMessage,a=e.FocusRing,l=e.animationFactory,v=e.numColumns,g=e.playPrediction,S=e.playPredictionStaticConfig,x=e.pointerAffordances,R=x.DownAffordance,w=x.UpAffordance,P=e.stylesheet
function L(e,t){var o=e.focusKey,r=e.focused,i=e.key,a=e.listContext,l=e.listItem
if(!this.props.active)return null
var d=l.absoluteIndex,u=l.data,s=(u||EMPTY_OBJECT).categoryBoxart,c=void 0===s?EMPTY_OBJECT:s,f=c.hasFallbackArtwork,v=c.id,g=c.image,m=void 0===g?I:g,p=c.title,y=t.onItemRenderStatusChange,_=this.props,b=_.disabled,E=_.mouseIsShowing,C=l.rect,T=C.y>a.scroll.rect.y+C.height+10,M=C.y<a.scroll.rect.y,S=E&&T,x=S?.4:0,R=b||T||M
return(0,h.j)(n,{data:u,dimmed:!b&&S||M,dimTo:x,disabled:R,focused:!R&&r,focusKey:o,hasFallbackArtwork:f,image:m,index:d,listContext:a,name:i,onItemRenderStatusChange:y,onPlay:this.handleBoxshotPlay,onSelect:this.handleBoxshotSelect,rect:C,title:p,videoId:v},i,null)}function O(e){var t=this.props,o=t.dataId,n=t.dataLength,r=t.handleListKeyDown,i=t.index,a=t.notifyIndexChange,l=t.numElementsInLastRow,d=t.onBack,u=t.onNavigableEdge,s=t.shouldDisplayNoItemsError,c=t.shouldDropKeyEvent,f=e.uiEvent,h={dataId:o,index:i}
if(s&&"key.back"!==f&&"key.left"!==f&&"key.up"!==f)e.stopPropagation()
else{var g=!c(e)
switch(f){case"key.back":d&&d({galleryState:h}),e.stopPropagation()
break
case"key.left":u&&(i%v==0||s)&&(u({galleryState:h}),e.stopPropagation())
break
case"key.right":i>=n-1&&e.stopPropagation()
break
case"key.up":i>=v&&g&&a(i-v),e.stopPropagation()
break
case"key.down":var m=n-v
g&&(i>=m&&i<=n-l-1?(a(n-1),e.stopPropagation()):i<m&&(a(i+v),e.stopPropagation()))}s?e.stopPropagation():r(e)}}function A(e,t){var o=this.props,n=o.index,r=o.notifyIndexChange,i=o.range,a=i.maxIndex,l=i.minIndex,d=n+t
d>a?d=a:d<l&&(d=l),r(d),e.stopPropagation()}function k(e){this.handlePaging(e,-v)}function F(e){this.handlePaging(e,v)}function B(){var e=this.props,t=e.itemContext.requestId,o=e.items,n=e.range
if(T.detailsAutoPlay&&this.context.appConfig.allowAutomaticBehaviors){var r=n&&n.index
g.updateFromCategories(o,{colIndex:r,rowIndex:0},t)}}function D(e,t){null!=e&&e.summary&&this.props.onBoxshotSelect(e,this.props,t)}function N(e,t){null!=e&&e.summary&&this.props.onBoxshotPlay(e,this.props,t)}var V=function(e){function n(t){var o=e.call(this,t)||this
return o.handleBoxshotPlay=N.bind(o),o.handleBoxshotSelect=D.bind(o),o.updatePlayPrediction=B.bind(o),o.handlePageDown=F.bind(o),o.handlePageUp=k.bind(o),o.handlePaging=A.bind(o),o.handleKeyDown=O.bind(o),o.childFactory=L.bind(o),o.state={},o}(0,f.default)(n,e)
var d=n.prototype
return d.UNSAFE_componentWillMount=function(){!g&&S&&(g=(0,(c||(c=o("uRDb"))).createPlayPrediction)(S))},d.shouldComponentUpdate=function(e){var t=e.animation,n=e.transitionState
return t||n!==(s||(s=o("d3CS"))).EXITING},d.render=function(){var e,n=P.resolve(this.context),d=this.props,s=d.active,c=d.animation,f=d.arrowOpacity,v=d.disabled,g=d.focus,m=d.focusKey,I=d.focusTransition,S=d.focused,x=d.handleFocusRequest,L=d.isCharacterCollection,O=d.layout,A=d.mouseIsShowing,k=d.noBackArrow,F=d.onItemRenderStatusChange,B=d.onNavigableEdge,D=d.onTransitionCompleted,N=d.opacity,V=d.pointerDownVisible,G=d.pointerUpVisible,j=d.range,W=d.rootAnimationName,U=d.scroll,H=d.shouldDisplayNoItemsError,q=d.strings,K=void 0===q?{}:q,Q=d.title,X=d.transition,Y=d.x,z={}
if(isNaN(N)||(z.opacity=N),isNaN(Y)||(z.x=Y),W){var J=n.animations
e=l(J,W)}var Z,$,ee,te=L&&(0,h.j)("Widget",{__update_style__:C,name:"gallery-label",staticStyle:n.label,style:{text:Q}},"gallery-label",null),oe=k?void 0:(0,h.j)(t,{__update_handlers__:E,animation:e,animationKey:"arrow",name:"gallery-back-arrow",onClick:B,staticStyle:n.backArrow,style:{opacity:f},visible:!0},"gallery-back-arrow",null)
if(H){var ne=this.props,re=ne.entered,ie=ne.enteredChild,ae=S||re&&ie
return(0,h.j)(M,{__update_handlers__:b,animation:c,children:[(0,h.j)(i,{focused:ae,focusKey:"error",message:K.listLoadError},"error",null),te,oe],focused:ae,focusKey:m,onAnimationCompleted:D,onFocusRequest:x,onKeyDown:this.handleKeyDown,staticStyle:n.collectionAnimationContainer,style:z},"galleryCollection",null)}return Z=T.enableRoundedCorners?(0,h.j)((u||(u=o("5A62"))).FocusRing,{cornerRadius:"small",height:n.focusIndicator.rect.height,isAnimated:!1,position:"inside",visible:!!g.offsetRect,width:n.focusIndicator.rect.width,x:((null==($=g.offsetRect)?void 0:$.x)||0)+n.focusIndicator.rect.x,y:((null==(ee=g.offsetRect)?void 0:ee.y)||0)+n.focusIndicator.rect.y},"categoryGalleryFocusRing",null):(0,h.j)(a,{focus:g,rect:n.focusIndicator.rect,transition:I},"categoryGalleryFocusRing",null),s?(0,h.j)(M,{__update_handlers__:_,animation:c,children:[oe,(0,h.j)(r,{children:this.childFactory,factoryContext:{onItemRenderStatusChange:F},focus:g,layout:O,range:j,scroll:U,transition:X},"items",null),te,Z,A&&(0,h.j)(w,{__update_handlers__:y,onClick:this.handlePageUp,staticStyle:n.pointerUp,visible:G},"pointerAffordanceUp",null),A&&(0,h.j)(R,{__update_handlers__:p,onClick:this.handlePageDown,staticStyle:n.pointerDown,visible:V},"pointerAffordanceDown",null)],disabled:v,focused:S,focusKey:m,onAnimationCompleted:D,onFocusRequest:x,onKeyDown:this.handleKeyDown,staticStyle:n.collectionAnimationContainer,style:z},"galleryCollection",null):null},d.componentDidMount=function(){this.updatePlayPrediction()},d.componentDidUpdate=function(){this.updatePlayPrediction()},n}(m.Component)
return V.contextTypes=(d||(d=o("s6u8"))).stylesheetContextTypes,V.displayName="categoryGalleryCollection",V}
var i,a,l,d,u,s,c,f=r(o("VbXa")),h=o("igsZ"),v=o("9IR/"),g=o("agVJ"),m=o("/P98"),p=(n(o("17x9")),["onClick"]),y=["onClick"],_=["onAnimationCompleted","onFocusRequest","onKeyDown"],b=["onAnimationCompleted","onFocusRequest","onKeyDown"],E=["onClick"],C=["text"],T=(0,v.getFeatures)(),I=Object.freeze({url:{}}),M=g.Focusable;(0,v.getFeatures)().enableDepthTransition&&(M=function(e){var t=(0,(l||(l=o("kCWc"))).useDepthTransitionProps)({id:"gallery-collection:"+e.focusKey,templateKey:(a||(a=o("KBg7"))).TemplateKey.BrowseForeground}),n=(0,(i||(i=o("lk4L"))).useDepthTransitionRootContext)().transitioning
return(0,h.j)(g.Focusable,{__proto__:e,animation:n?void 0:e.animation,effectParams:t.effectParams,unstable_effect:t.unstable_effect},null,null)})},b3qN:function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a=r(o("gisa")),l=o("1dek"),d=n(o("w0Cr")),u=d.default.dataSourceResultReducer,s=d.default.errorTransform,c=d.default.toErrorSummary,f={}
function h(e){void 0===e&&(e=f)
for(var t=e.items,o=void 0===t?[]:t,n=0;n<o.length;n++){var r=o[n]
if("queue"===r.context)return r}}var v={deref:!1,fetch:function(e,t,n){var l=n._fetchRows,d=void 0===l?(void 0===i?i=r(o("YlFw")):i).default:l,c=n.rootModel,v=t.lolomoStrings,g=t.summary
if(!g||!g.items)return a.default.Observable.empty()
var m=h(g)
if(!m)return a.default.Observable.just({json:{items:f}})
var p={json:{items:f,queueList:m},messageListLoadError:v.messageListLoadError}
return d(c,[m],s).defaultIfEmpty({listSummaries:[]}).scan(p,u)},getBasePath:function(){return[]},getPaths:function(){return[]},selector:function(e,t,o){var n=h(o.summary)||f,r=(0,l.unsafeObjectMerge)(n,{index:0,trackId:n.galleryTrackId}),i=e.dataId,a=e.summary,d=void 0===a?r:a,u=d.length,s=void 0===u?0:u
return{dataId:i,index:s>0?Math.min(o.index,s-1):0,summary:d}},shouldFetchData:function(e,t){var o=t.summary,n=o&&h(o)
return!!o&&(e===t||h(e.summary)!==n)},transformResponse:function(e,t,o){var n=e.items,r=void 0===n?f:n,i=e.queueList
if(r!==f){var a=r[i.index]
return{dataId:a.id,summary:(0,l.unsafeObjectMerge)(a,{index:0,longTitle:a.listName,supportsEvidence:a.supportsEvidence,trackId:i.galleryTrackId})}}var u=o.lolomoStrings,s=void 0===u?f:u
return{dataId:"no-queue",summary:(0,l.unsafeObjectMerge)(c({id:"no-queue",listName:""},s.messageListLoadError,d.rowErrorCodes.noList),{longTitle:""})}}}
t.default=v},bTOU:function(e,t,o){var n,r,i,a=o("TqRt").default
t.__esModule=!0,t.default=function(e){var t,l=(void 0===e?{}:e).layoutConfig,d=(void 0===l?(void 0===i?i=a(o("lSnr")):i).default:l).GALLERY_RECT,u=d.x-100,s=d.x,c=((t={})[(n||(n=o("NEM1"))).TransitionState.ENTERING]=(0,(r||(r=o("SqmF"))).enterFromLeft)({slideFrom:u,slideTo:s}),t[(n||(n=o("NEM1"))).TransitionState.EXITING]=(0,(r||(r=o("SqmF"))).exitToLeft)({slideFrom:s,slideTo:u}),t)
return(0,(n||(n=o("NEM1"))).transitionAnimation)({factory:function(e,t){var r=t.isToOrFromDetails,i=t.transitionState
if(!(n||(n=o("NEM1"))).COMPLETED_STATES[i]&&r)return c[i]}})}},ertK:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i,a=o("xC7v"),l=o("1Oe/")
t.default=function(e){var t=e.getVideoMetaData,d=e.rangeMaker,u=void 0===d?void 0===i?i=(0,n(o("wncI")).default)():i:d
function s(e){return function(t){return(0,(void 0===r?r=n(o("8VqT")):r).default)(e.get.apply(e,t))}}function c(e,t){return e.map((function(e){return{index:t(e.galleryProps),props:e}})).distinctUntilChanged((function(e){return e.index+"-"+e.props.galleryProps.dataId})).map((function(e){return e.props}))}return{getMetaDataPrefetchSequence:function(e,o){return(0,a.h)(function(e,t){return c(e,u.getColumnIndex).debounce(t).merge(c(e,u.getRowIndex)).map((function(e){return{indices:u.prefetchVertical(e.galleryProps),props:e}}))}(e,o).merge(function(e,t){return c(e,u.getRowIndex).debounce(t).map((function(e){return{indices:u.prefetchHorizontal(e.galleryProps),props:e}}))}(e,o)).distinctUntilChanged((function(e){return e}),(function(e,t){return e.props.galleryProps.dataId===t.props.galleryProps.dataId&&(0,l.deepEquals)(e.indices,t.indices)})),(function(e){var o=e.indices,n=e.props,r=n.galleryProps,i=n.rootModel,a=r.basePath,l=r.getVideoMetaData,d=r.itemContext
return(l||t)(i,a,d,o,s,r)})).ignoreElements()}}}},fOFQ:function(e,t,o){var n,r=o("284h").default,i=o("TqRt").default
t.__esModule=!0,t.default=void 0
var a,l=o("P9cf"),d=o("CPIT"),u=o("1dek"),s=r(o("eCl4"))
function c(e,t){void 0===e&&(e=(0,(n||(n=o("9IR/"))).getFeatures)()),void 0===t&&(t=(0,(n||(n=o("9IR/"))).getAppConfig)())
var r=t.allowAutomaticBehaviors,i=e.enableVideoMerch,a=e.enableCategoriesVideoMerch
return!!(r&&i&&a)}var f="categories"
function h(e){void 0===e&&(e={})
var t=e.id
return[f,void 0===t?"":t].join("*")}t.default=(0,u.unsafeObjectMerge)(s,{didEnterFromTriggerLocation:function(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var o=!(e.entered||!t.entered),n=!t.disabled
return o&&n&&t.isFromTriggerLocation},findVideoMerchLeafPath:function(e){return void 0===e&&(e={}),(0,l.find)((function(e){return e&&0===e.indexOf(f+"*")}),Object.keys(e))},getItemContext:function(e){void 0===e&&(e={})
var t=e.itemContext
return void 0===t?{}:t},getSelectedVideo:function(e){void 0===e&&(e={})
var t=e,o=t.itemContext,n=t.trackingInfo
return{id:t.videoId,itemContext:o,trackingInfo:n,videoMerch:t.videoMerch}},hasNavigated:function(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var o=e,n=o.categoryId,r=o.disabled,i=o.index,a=o.videoMerch,l=t,u=l.categoryId,s=l.disabled,c=l.index,f=l.videoMerch
return!((0,d.isEmpty)(e)||n===u&&i===c&&r===s&&(a||!f))},hasSelectedVideoChanged:function(e,t){void 0===e&&(e={}),void 0===t&&(t={})
var o=e,n=o.disabled,r=o.index,i=o.itemContext,a=void 0===i?{}:i,l=o.videoId,d=o.videoMerch,u=t,s=u.disabled,c=u.index,f=u.itemContext,h=void 0===f?{}:f,v=u.videoId,g=u.videoMerch,m=a.id!==h.id
return l!==v||m||r!==c||n!==s||!(d||!g)},isVideoMerchEnabled:c,isVideoMerchList:function(e,t,o){return c(t,o)},shouldContinueGalleryPlayback:function(e){void 0===e&&(e={})
var t=e,o=t.initialStateOfPlayback,n=(void 0===o?{}:o).viewableId,r=t.lastViewableId
return!(!n||r!==n)},shouldContinueMdpPlayback:function(e,t,n,r){void 0===e&&(e={}),void 0===t&&(t={})
var l=!1,d=e.videoMerch
if(d){var u=t,s=u.dataId,f=u.playbackStateObject,v=d[h({id:s})]||{}
l=(0,(void 0===a?a=i(o("cbME")):a).default)(f)&&c(n,r)&&(!!v.mdp||d.mdp)}return l},toVideoMerchLeafPath:h})},gzTg:function(e,t){t.__esModule=!0,t.default=function(e){var t=e.chunkSize,o=void 0===t?100:t,n=e.threshold,r=void 0===n?2/3:n
return function(e){var t,n=e.dataLength,i=e.index
if(n>0)if(n<o)t={from:0,to:n-1}
else{var a=Math.floor(i/o),l=((i%o/o>r?a+1:a)+1)*o-1
t={from:(a>0?a-1:a)*o,to:l<n?l:n-1}}return t}}},jV6Z:function(e,t,o){t.__esModule=!0,t.default=void 0
var n=(0,o("9IR/").getFeatures)(),r=n.playPredictionEnabled&&!n.playPredictionInBrowseDisabled?o("NSkI").default:o("uRDb").noopPlayPredictionConfig
t.default=r},jflt:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r=n(o("lSnr")),i=o("9Ad0")
t.default=(0,i.createGalleryCollection)({layoutConfig:r.default,showBackArrow:!1,withListData:function(e){return o("pbgz").Falcor(e,o("A8S/").default)}})},kqHg:function(e,t,o){t.__esModule=!0,t.default=function(e,t){if(e===t)return!0
if(void 0===e||void 0===t)return!1
var o=r.Children.count(e),i=r.Children.count(t)
return o===i&&(1===o&&1===i?a(e)===a(t):(0,n.shallowEquals)(e,t))}
var n=o("1Oe/"),r=o("/P98"),i=Array.isArray
function a(e){return i(e)?e[0]:e}},lQr5:function(e,t,o){t.__esModule=!0,t.default=void 0
var n=o("Hg/B")
t.default=function(e,t){return(0,n.fade)(e.arrow[t],n.SUPPRESS_EVENTS).key("arrow")}},"p/LH":function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.getStylesheetDefinition=t.getStylesheet=t.default=void 0
var r,i,a,l,d,u,s=o("oM/y"),c=n(o("Hy99")),f=function(e){var t=void 0===e?(void 0===u?u=n(o("lSnr")):u).default:e,c=t.BOXART_PEEK,f=t.BOXART_SIZE,h=t.ERROR_BOX_HEIGHT,v=t.ERROR_BOX_THICKNESS,g=t.ERROR_BOX_WIDTH,m=t.GALLERY_CONTAINER_X_OFFSET,p=t.GALLERY_RECT,y=t.ITEM_AREA,_=t.LAYOUT_ORIGIN,b=t.POINTER_AFFORDANCE_DOWN,E=t.POINTER_AFFORDANCE_UP
return{animations:function(){return{base:{arrow:{enterGallery:{duration:(d||(d=o("TlTJ"))).SHORT_DURATION,ease:(d||(d=o("TlTJ"))).EASE,to:1},enterList:{duration:(d||(d=o("TlTJ"))).SHORT_DURATION,ease:(d||(d=o("TlTJ"))).EASE,to:.01}}}}},backArrow:function(){return{base:{drawOrder:2,name:"gallery-back-arrow",opacity:.7,rect:{height:y.height*(.5+c),width:95,x:-76+m,y:_.y}}}},backgroundContainer:function(){return{base:{ignorePointer:!0,name:"gallery-background-container",opacity:.01,rect:{height:(a||(a=o("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=o("8J/X"))).VIEWPORT_WIDTH,x:0,y:-(a||(a=o("8J/X"))).VIEWPORT_Y}}}},collection:function(){return{base:{ignorePointer:!0,name:"gallery-collection",rect:{height:p.height,width:p.width,x:m,y:0}}}},collectionAnimationContainer:function(){return{base:{clip:!0,drawOrder:1,ignorePointer:!0,name:"gallery-collection-container",rect:p}}},collectionEmptyContainer:function(){return{base:{clip:!0,drawOrder:1,ignorePointer:!0,name:"gallery-collection-container",rect:{height:(a||(a=o("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=o("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},container:function(){return{base:{name:"gallery-container",rect:{height:(a||(a=o("8J/X"))).VIEWPORT_HEIGHT,width:(a||(a=o("8J/X"))).VIEWPORT_WIDTH,x:0,y:0}}}},errorMessageBorderBottom:function(){return{base:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,drawOrder:2,name:"gallery-error-bottom-border",rect:{height:v,width:g-2*v,x:v,y:130}}}},errorMessageBorderLeft:function(){return{base:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,drawOrder:2,name:"gallery-error-left-border",rect:{height:h,width:v,x:0,y:0}}}},errorMessageBorderRight:function(){return{base:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,drawOrder:2,name:"gallery-error-right-border",rect:{height:h,width:v,x:598,y:0}}}},errorMessageBorderTop:function(){return{base:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,drawOrder:2,name:"gallery-error-top-border",rect:{height:v,width:g-2*v,x:v,y:0}}}},errorMessageContainer:function(){return{base:{drawOrder:2,name:"gallery-error-container",rect:{height:h,width:g,x:m,y:135}}}},errorMessageText:function(){return{base:{drawOrder:2,name:"gallery-error-text",padding:{bottom:16,left:16,right:16,top:16},rect:{height:h,width:g,x:0,y:0},textStyle:{align:"left-horizontal center-vertical",color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,richText:!0,size:20,wrap:!0}}}},focusIndicator:function(){return{base:{drawOrder:2,ignorePointer:!0,imageSlices:(0,s.s)((0,s.i)("GDz+sourceRectFor720p=true","noglowFocusRingBrowse"),[10]),rect:{height:f.height+4,width:f.width+4,x:-2,y:-2}}}},item:function(){return{base:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray900,textStyle:{color:(r||(r=o("D+c2"))).FoundationalColors.White}}}},label:function(){return{base:{drawOrder:2,name:"gallery-label",rect:{height:50,width:600,x:m,y:96},textStyle:{color:(r||(r=o("D+c2"))).FoundationalColors.Gray200,size:21,truncation:{position:"end"},weight:(i||(i=o("pBAo"))).EMPHASIS_WEIGHT}},fontHeight:{tall:{rect:{y:92}}}}},pointerAffordance:function(){var e
return{base:{backgroundImage:(0,s.i)("gyY+halign=center+valign=center","pointeraffordances"),height:y.height*(.5+c),name:"pointerLeft",opacity:.7,width:95,x:0,y:0},isRtl:{true:{backgroundImage:(0,s.i)("kWv+halign=center+valign=center","pointeraffordances")}},pointerAffordanceStateIsRtl:{pointerAffordanceState:(e={},e[(void 0===l?l=n(o("eCN6")):l).default.highlighted]={isRtl:{false:{backgroundImage:(0,s.i)("AG6+halign=center+valign=center","pointeraffordances"),opacity:1},true:{backgroundImage:(0,s.i)("GP6+halign=center+valign=center","pointeraffordances"),opacity:1}}},e)}}},pointerDown:function(){return{base:{drawOrder:2,name:"pointer-down-container",rect:{height:b.height,width:b.width,x:0,y:_.y+y.height+10}}}},pointerUp:function(){return{base:{drawOrder:2,name:"pointer-up-container",rect:{height:E.height,width:E.width,x:0,y:0}}}}}}
t.getStylesheetDefinition=f,t.getStylesheet=function(e){return(0,c.default)(f(e))},t.default=(0,c.default)(f())},pXUh:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.createGalleryComponent=function(e){var t,n=e.Background,s=e.GalleryCollection,c=e.Legend,m=e.depthTransitionParams,p=void 0===m?{}:m,y=e.getItemContext,_=e.isStandAlone,b=e.layoutConfig,E=e.noBackArrow,C=e.prefetchCategoriesMask,T=e.stylesheet,I=e.wallpaperPausedState,M=void 0===I?{pauseRotation:!0}:I
return(t=function(e){function t(t){var o=e.call(this,t)||this,n=t.entered
return o.state={backgroundMaxUpdateDelay:0,dimWallpaper:!0,mountBob:n},o}(0,u.default)(t,e)
var i=t.prototype
return i.UNSAFE_componentWillMount=function(){C&&C(this.context)},i.UNSAFE_componentWillReceiveProps=function(e){var t=this.props,n=t.dataId,r=t.index,i=void 0!==r&&r!==e.index,l=void 0!==n&&n!==e.dataId,d=this.state.backgroundMaxUpdateDelay;(0,(a||(a=o("NEM1"))).isComponentBecomingActive)(t,e)||(0,(a||(a=o("NEM1"))).isComponentBecomingInactive)(t,e)?d=0:(i||l)&&(d=1/0),this.setState({backgroundMaxUpdateDelay:d,dimWallpaper:!e.entered&&r!==e.index}),e.entered&&this.setState({mountBob:!0})},i.render=function(){var e=this.context,t=this.props,i=this.state,a=T.resolve(e),u=t.active,f=t.animation,m=t.appMenu,C=t.bobOpacity,I=t.categoriesError,S=t.dataId,x=t.disabled,R=t.entered,w=t.focusKey,P=t.focused,L=t.index,O=t.isFromTriggerLocation,A=t.isPreMount,k=t.isToOrFromDetails,F=t.isWiaTitle,B=t.mouseIsShowing,D=t.onBack,N=t.onEnterMdp,V=t.onIndexChange,G=t.onNavigableEdge,j=t.onPlayVideo,W=t.onSelect,U=t.onTransitionCompleted,H=t.onUpdatePlaybackState,q=t.onVideoStateChanged,K=t.opacity,Q=t.playbackStateObject,X=t.rootAnimationName,Y=t.rootModel,z=t.strings,J=t.subtitlesMeasureHeight,Z=t.subtitlesRect,$=t.textLegend,ee=t.transitionState,te=t.videoId,oe=t.visible,ne=i.backgroundMaxUpdateDelay,re=i.dimWallpaper,ie=i.mountBob,ae=t.summary||{longTitle:""},le=ae.id,de=ae.categoryHubId,ue=ae.length,se=ae.longTitle,ce=y(t.summary,!1,te),fe=R||u,he=_?g:(r||(r=o("agVJ"))).Focusable,ve=null==m?void 0:m.model.open,ge=ae.title
return!F&&ae.mltTitle&&(ge=ae.mltTitle),(0,d.j)(he,{__update_handlers__:v,animation:f,children:[c&&(0,d.j)(c,{textLegend:null!=$?$:{text:ge},visible:!0},"legend",null),(0,d.j)(s,{active:u,arrowOpacity:C,categoriesError:I,categoryHubId:de,categoryId:le,dataId:S,dataLength:ue,disabled:x,focused:!x&&P,focusKey:"gallery-collection",groupLoc:ae.groupLoc,index:L,isCharacterCollection:ae.characterId,isToOrFromDetails:k,itemContext:ce,mouseIsShowing:B,noBackArrow:E,onBack:D,onBoxshotPlay:j,onBoxshotSelect:N,onFocusedItemChange:V,onIndexChange:V,onNavigableEdge:G,rect:b.GALLERY_RECT,rootAnimationName:X,rootModel:Y,strings:z,title:se,transitionState:ee},"gallery-collection",null),(0,d.j)("Widget",{__update_style__:h,children:(0,d.j)(n,{active:u,activeVideo:!(!fe&&!ve),activeWallpaper:fe||!A,backgroundPortalKey:"CategoryGallery-background",backgroundVideoPortalKey:"CategoryGallery-backgroundVideo",categoryHubId:de,categoryId:le,dimWallpaper:!R&&re,disabled:x,entered:R,groupLoc:ae.groupLoc,hideBob:!(void 0===l?l=(0,o("9IR/").getFeatures)():l).enableDepthTransition&&!ie,index:L,isFromTriggerLocation:O,isStandAloneGallery:_,itemContext:ce,maxUpdateDelay:ne,mouseIsShowing:B,onUpdatePlaybackState:H,onVideoStateChanged:q,playbackStateObject:Q,subtitlesMeasureHeight:J,subtitlesRect:Z,transitionState:ee,wallpaperState:R?void 0:M},"background",null),staticStyle:a.backgroundContainer,style:{opacity:C}},"background-container",null)],effectParams:p.effectParams,focused:P,focusKey:w,ignorePointer:!1,onAnimationCompleted:U,onClick:W,opacity:K,unstable_effect:p.unstable_effect,visible:oe},"gallery",null)},t}(f.Component)).contextTypes=(i||(i=o("s6u8"))).stylesheetContextTypes,t.displayName="categoryGallery",t}
var r,i,a,l,d=o("igsZ"),u=n(o("VbXa")),s=o("eNcy"),c=o("8J/X"),f=o("/P98"),h=["opacity"],v=["onAnimationCompleted","onClick"],g=(0,s.s)("FocusableRoot","gallery-container",{height:c.VIEWPORT_HEIGHT,name:"gallery-container",visible:function(e){return e.visible},width:c.VIEWPORT_WIDTH,x:c.VIEWPORT_X,y:c.VIEWPORT_Y},!0)},qxSM:function(e,t,o){t.__esModule=!0,t.TextLegend=function(e){var t=e.color,n=e.text,l=e.visible
return(0,a.j)(m,{animation:f,children:[(0,a.j)(y,a.p,null,null),(0,a.j)(p,{children:[(0,a.j)(_,{color:t},null,null),(0,a.j)((i||(i=o("AHGZ"))).Text,{children:n,height:h,padding:v,textAlign:"center",type:(r||(r=o("BKc6"))).TextType.StaticListTextLargeHeadlineHeavy},null,null)]},null,null)],visible:l},null,null)}
var n,r,i,a=o("igsZ"),l=o("eNcy"),d=o("oM/y"),u=o("ClEx"),s=o("8J/X"),c=o("Hg/B"),f=(0,c.fade)({duration:0,to:0},c.SUPPRESS_EVENTS).then((0,c.fade)({delay:300,duration:u.Duration.Duration300,easing:u.Easing.EasingQuadraticIn,from:0,to:1},c.SUPPRESS_EVENTS)),h=150,v={left:10,right:80,top:20},g=h/2-12+v.top/2,m=(0,l.s)("Widget","TextLegendContainer",{drawOrder:2,height:h,ignorePointer:!0,layout:{align:["right"],layout:"horizontal"},visible:function(e){return e.visible},width:s.VIEWPORT_WIDTH,x:s.VIEWPORT_X,y:s.VIEWPORT_HEIGHT-h},!0),p=(0,l.s)("Widget","TextLegendContent",{image:function(){return(0,d.i)("LzH+halign=stretch","textLegend")},layout:{align:["right"],layout:"horizontal"}},!1),y=(0,l.s)("Widget","EndCap",{image:function(){return(0,d.i)("AzO","textLegend")}},!1),_=(0,l.s)("Widget","ColorBar",{color:function(e){var t=e.color
return null!=t?t:(n||(n=o("D+c2"))).FoundationalColors.Red500},height:24,width:6,y:g},!0)},rmAz:function(e,t,o){t.__esModule=!0,t.KIDS_WORDMARK_LOGO_SIZE_LEGEND=void 0,t.Logo=function(e){var t=e.animation,b=e.textLegend,E=e.visible,C=void 0===E||E,T=(0,(n||(n=o("JVY8"))).useIsKids)(),I=(0,(l||(l=o("kCWc"))).useDepthTransitionProps)({id:"browse:logo-legend",opacity:{value:t?(0,m.getDefaultFinalAnimationState)(t).opacity:1},templateKey:(a||(a=o("KBg7"))).TemplateKey.BrowseFade})
return b?(0,g.j)((h||(h=o("qxSM"))).TextLegend,{color:b.color,text:b.text,visible:C},null,null):C?(0,g.j)(void 0===v?v=(0,o("eNcy").s)("Widget","Container",{ignorePointer:!0,x:(u||(u=o("8J/X"))).VIEWPORT_X+(u||(u=o("8J/X"))).VIEWPORT_WIDTH-(f||(f=o("I43y"))).LEGEND_WIDTH,y:(u||(u=o("8J/X"))).VIEWPORT_Y-(f||(f=o("I43y"))).LEGEND_HEIGHT+(u||(u=o("8J/X"))).VIEWPORT_HEIGHT},!0):v,{animation:t,children:[(0,g.j)((c||(c=o("f7pd"))).Vignette,g.p,null,null),(0,g.j)((d||(d=o("djiD"))).HStack,{children:(0,(i||(i=o("9IR/"))).getFeature)("enableKidsExperienceConsistencyLogo")&&T?(0,g.j)((s||(s=o("2wI+"))).KidsWordmark,{height:_.height,width:_.width},null,null):(0,g.j)((r||(r=o("E7VA"))).NetflixWordmark,{height:y,name:"NetflixWordmark",width:p},null,null),halign:"end",height:y,name:"wordmarkContainer",width:p,x:(f||(f=o("I43y"))).LEGEND_WIDTH-(p+59),y:(f||(f=o("I43y"))).LEGEND_HEIGHT-(y+40)},null,null)],effectParams:I.effectParams,unstable_effect:I.unstable_effect},"logo-legend",null):null}
var n,r,i,a,l,d,u,s,c,f,h,v,g=o("igsZ"),m=o("Hg/B"),p=147,y=40,_=t.KIDS_WORDMARK_LOGO_SIZE_LEGEND={height:y,width:p}},sKMc:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r=o("xNxB"),i=o("ohW6"),a=n(o("s/P3")),l=n(o("yfDp")),d=n(o("YUuR")),u=n(o("sKYC"))
t.default=(0,r.compose)(d.default,i.provider,(0,a.default)(u.default),l.default)()},sKYC:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i=o("9IR/"),a=o("759e"),l=o("1dek"),d=n(o("fOFQ"))
r=(0,i.getFeatures)().enableVideoMerch?(0,l.unsafeObjectMerge)(d.default,{isVanillaVideoMerch:(0,a.just)(!0),isVideoMerchEnabled:function(){return(0,i.getAppConfig)().allowAutomaticBehaviors},isVideoMerchList:function(){return(0,i.getAppConfig)().allowAutomaticBehaviors}}):(0,l.unsafeObjectMerge)(d.default,{isVanillaVideoMerch:(0,a.just)(!1),isVideoMerchEnabled:(0,a.just)(!1),isVideoMerchList:(0,a.just)(!1)}),t.default=r},tLfK:function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a=o("igsZ"),l=r(o("Ki15")),d=n(o("vSZY")),u=l.default.list,s=d.hasEntered
t.default=u({context:function(e){var t=e.texttospeech||{},n=t.galleryTitleCount,r=t.inCategoryGallery,l=e.summary||{},d=l.length,u=l.longTitle,s=l.title,c=u||s
return r&&c&&(0,a.j)("speak",{children:[(0,a.j)("s",{children:(0,(i||(i=o("m5dK"))).nfformat)(r,{categoryName:c})},null,null),(0,a.j)("s",{children:(0,(i||(i=o("m5dK"))).nfformat)(n,{numberOfTitles:d})},null,null),(0,a.j)("break",{time:1e3},null,null)]},null,null)},flushWhen:s})},uM5e:function(e,t,o){var n=o("284h").default,r=o("TqRt").default
t.__esModule=!0,t.default=void 0
var i,a,l,d,u,s,c,f,h=r(o("siCl")),v=o("igsZ"),g=r(o("VbXa")),m=r(o("W8MJ")),p=r(o("w1pw")),y=r(o("gisa")),_=o("bGSL"),b=o("BHy0"),E=o("pbgz"),C=o("/P98"),T=r(o("17x9")),I=(o("zBhU"),{id:void 0,items:[],type:"nolomo"}),M=function(){function e(e,t,n){var i=this
this.lolomoType=e,this.rootModel=t,this.appConfig=n,this._lolomo={dataId:I.id,defaults:(void 0===l?l=r(o("QQFM")):l).default,expiration:(void 0===l?l=r(o("QQFM")):l).default,lolomoStrings:(void 0===l?l=r(o("QQFM")):l).default,summary:I,version:void 0},this.onLolomoSummary=function(e){var t=function(e,t){void 0===t&&(t=(void 0===l?l=r(o("QQFM")):l).default)
var n=t.json||(void 0===l?l=r(o("QQFM")):l).default,i=n.lolomoStrings,a=void 0===i?(void 0===l?l=r(o("QQFM")):l).default:i,d=n[e],u=void 0===d?(void 0===l?l=r(o("QQFM")):l).default:d,s=u.defaults,c=void 0===s?(void 0===l?l=r(o("QQFM")):l).default:s,f=u.expiration,h=void 0===f?(void 0===l?l=r(o("QQFM")):l).default:f,v=u.summary,g=S(void 0===v?(void 0===l?l=r(o("QQFM")):l).default:v)
return{dataId:x(g),defaults:S(c),expiration:S(h),lolomoStrings:S(a),summary:g}}(i.lolomoType,e)
t.summary&&(i._lolomo={dataId:x(t.summary),defaults:t.defaults,expiration:t.expiration,lolomoStrings:t.lolomoStrings,summary:t.summary,version:i.rootModel.getVersion(i.lolomoType)})},this.onLolomoError=function(e){return new p.default({innerError:e,type:"LolomoSummary.Error"}).logAsHandledException()},this.cacheReaderModel=t.withoutDataSource().boxValues().treatErrorsAsValues()}return e.prototype.checkForVolatileListUpdates=function(e){var t=this,i=e.appSource,a=e.listFilter,l=e.pollInterval
return(void 0===d?d=r(o("Pe2c")):d).default.toPushAndPollingObservable({context:i,pollInterval:l,rootModel:this.rootModel}).map((function(){var e=t.lolomo.summary.items,r=void 0===e?[]:e
return r="function"==typeof a?r.filter(a):r,(void 0===f?f=n(o("Fk0g")):f).refreshBrowseLists(t.rootModel,t.appConfig,r,t.lolomoType,i)})).merge(1).filter((function(){return!1===t.isSynchronized}))},(0,m.default)(e,[{get:function(){return this.isSynchronized||this.cacheReaderModel.get([this.lolomoType,["summary","expiration","defaults"]],["lolomoStrings"]).subscribe(this.onLolomoSummary,this.onLolomoError),this._lolomo},key:"lolomo"},{get:function(){return this._lolomo.version},key:"version"},{get:function(){return this.rootModel.getVersion(this.lolomoType)===this._lolomo.version},key:"isSynchronized"}])}()
function S(e){return"atom"!==e.$type?(void 0===l?l=r(o("QQFM")):l).default:e.value}function x(e){void 0===e&&(e=(void 0===l?l=r(o("QQFM")):l).default)
for(var t=e,n=t.id,i=t.items,a=void 0===i?(void 0===l?l=r(o("QQFM")):l).default:i,d=[],c=0;c<a.length;c++){var f=a[c];((0,(u||(u=o("e8Gu"))).isBillboardSupportedList)(f.context)&&(0,(s||(s=o("MopB"))).isEmptyBillboardList)(f)||f.isEmptyRow)&&(d[d.length]=c)}return 0===d.length?n:n+"-"+d.join("-")}t.default=function(e){var t=void 0===e?(void 0===l?l=r(o("QQFM")):l).default:e,d=t.appSource,u=void 0===d?"browse":d,s=t.checkForListUpdatesIntervalMs,m=void 0===s?1e3:s,p=t.enableVolatileListRefreshes,S=void 0===p||p
return function(e){function t(e,t){var n=this
if(void 0===t&&(t=(void 0===l?l=r(o("QQFM")):l).default),!0!==e||this.props.isPreMount)return this.subscriptions.dispose(),void(this.subscriptions=y.default.Disposable.empty)
var i=t,d=i.activeRows,u=i.selectedRowIndex
this.reconcileListRefreshes(u),this.subscriptions.dispose()
var s=S?this.refreshVolatileLists(u,d):y.default.Observable.empty()
this.subscriptions=new y.default.CompositeDisposable([y.default.Observable.interval(m).do((function(){(0,(a||(a=o("e4o4"))).isSuspended)()||n.reconcileListRefreshes(u)})).subscribe(b.noop,b.noop),s.subscribe(b.noop,b.noop)])}function d(e){this.resolveLolomoSummary()
var t=this.state,r=t.current,i=t.update,a=t.version
if(i){var l=r.summary,d=i.summary,u=l&&l.items&&l.items[e]||{},s=d.items[e]||{},c=s&&s.id!==u.id,v=!0!==this.props.isPreMount,g=(void 0===f?f=n(o("Fk0g")):f).listIsVolatile(u)&&!1===u.userGeneratedContent
if(v&&c&&g){var m
if(l.__proto__===d)return
var p={items:d.items.slice(0)}
p.items[u.index]=l.items[u.index],p.__proto__=d,this.setState({current:(0,h.default)({},r,{dataId:x(p),hasPendingRowUpdateById:(m={},m[u.id]=!0,m),summary:p}),update:i,version:a})}else this.setState({current:i,update:void 0,version:a})}}var s=function(i){function a(e,n){var a=i.call(this,e)||this
return a.reconcileListRefreshes=d.bind(a),a.handleToggleListRefreshes=t.bind(a),a.state={current:{},update:void 0,version:void 0},a.lolomoData=new M(e.lolomoType||(void 0===c?c=r(o("vVcS")):c).default.default,e.falcorComponentContext.rootModel,n),a}(0,g.default)(a,i)
var s=a.prototype
return s.UNSAFE_componentWillMount=function(){this.resolveLolomoSummary(),this.subscriptions=y.default.Disposable.empty},s.UNSAFE_componentWillReceiveProps=function(e){e.lolomoType!==this.props.lolomoType&&(this.lolomoData=new M(e.lolomoType||(void 0===c?c=r(o("vVcS")):c).default.default,this.props.falcorComponentContext.rootModel,this.context)),this.resolveLolomoSummary()},s.componentWillUnmount=function(){this.subscriptions.dispose(),this.subscriptions=y.default.Disposable.empty,this.lolomoData=null},s.resolveLolomoSummary=function(){var e,t=this.lolomoData
if(!t.isSynchronized){var n=t.lolomo,i=this.state.current,a=void 0===i?(void 0===l?l=r(o("QQFM")):l).default:i,d=(null==n||null==(e=n.summary)?void 0:e.id)!==(a.summary&&a.summary.id),u=!1===S||this.props.isPreMount
d||u?this.setState({current:n,update:void 0,version:n.version}):n.summary!==(void 0===l?l=r(o("QQFM")):l).default&&a.summary!==n.summary&&this.setState({current:a,update:n,version:n.version})}},s.refreshVolatileLists=function(e,t){var i=this,a=(void 0===f?f=n(o("Fk0g")):f).toMinimumListPollInterval(t)
return this.lolomoData?this.lolomoData.checkForVolatileListUpdates({appSource:u,listFilter:function(t,n){var a,d=i.state.current,u=void 0===d?(void 0===l?l=r(o("QQFM")):l).default:d,s=u.hasPendingRowUpdateById,c=void 0===s?(void 0===l?l=r(o("QQFM")):l).default:s,f=u.summary
return!c[((null==f||null==(a=f.items)?void 0:a[e])||(void 0===l?l=r(o("QQFM")):l).default).id]||n!==e},pollInterval:a}).do((function(){return i.reconcileListRefreshes(e)})):y.default.Observable.empty()},s.render=function(){var t=this.state,n=t.current,i=void 0===n?(void 0===l?l=r(o("QQFM")):l).default:n,a=t.version,d=i.dataId,u=i.defaults,s=void 0===u?(void 0===l?l=r(o("QQFM")):l).default:u,c=i.expiration,f=void 0===c?(void 0===l?l=r(o("QQFM")):l).default:c,h=i.lolomoStrings,g=void 0===h?(void 0===l?l=r(o("QQFM")):l).default:h,m=i.summary,p=void 0===m?(void 0===l?l=r(o("QQFM")):l).default:m,y=p!==(void 0===l?l=r(o("QQFM")):l).default?p:I
return(0,v.j)(e,{__proto__:this.props,dataId:d,dataLength:y.length,defaults:s,expiration:f,items:y.items,lolomoStrings:g,onToggleListRefreshes:this.handleToggleListRefreshes,summary:y,version:a},null,null)},a}(C.Component)
return s.displayName=(0,_.higherOrderName)("LolomoSummary",e),s.contextType=(i||(i=o("JVY8"))).AppConfigContext,s.propTypes={lolomoType:T.default.oneOf(Object.keys((void 0===c?c=r(o("vVcS")):c).default).map((function(e){return(void 0===c?c=r(o("vVcS")):c).default[e]}))).isRequired},(0,E.withFalcorComponentContext)(s)}}},vJK3:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i=o("igsZ"),a=n(o("VbXa")),l=o("bGSL"),d=o("/P98")
t.default=function(e){var t
return(t=function(t){function n(e){var n=t.call(this,e)||this
return n.idleTimer=(0,(r||(r=o("BzAf"))).createIdleTimeout)({interval:1e3,name:"myListGalleryIdleTimer",now:nrdp.pmono||nrdp.mono,onIdleChange:function(e){var t=n.props,o=t.onToggleListRefreshes,r=void 0===o?Boolean:o,i=t.summary
e?r(!0,{activeRows:[i],selectedRowIndex:-1}):r(!1)}}),n.idleTimer.schedule(),n}(0,a.default)(n,t)
var l=n.prototype
return l.UNSAFE_componentWillReceiveProps=function(){this.idleTimer.schedule()},l.componentWillUnmount=function(){this.idleTimer.dispose()},l.render=function(){return(0,i.j)(e,this.props,null,null)},n}(d.Component)).displayName=(0,l.higherOrderName)("listRefresh",e),t}},w0Cr:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0,t.isRowError=u,t.rowErrorCodes=void 0
var r=n(o("w1pw")),i=n(o("Zp2C")),a=i.default.isMapCacheMissError,l=i.default.isRefetchError,d=t.rowErrorCodes={http:function(e){return"HTP-"+e},map:"MAP",mapCacheMissRetry:"MAP-RTRY",noList:"err-0-1157",unknown:"UKNWN"}
function u(e){return e instanceof Error}var s,c,f=(c={},function(e,t,o,n){void 0===n&&(n=r.default),s!==e&&(s=e,c={}),!0!==c[t.id]&&o.loggedDetailedErrorConfig&&(c[t.id]=!0,new n(o.loggedDetailedErrorConfig).logAsHandledException())})
function h(e,t,o){return void 0===e&&(e={}),{context:"error",errorCode:o,id:"error-"+e.id,isError:!0,length:1,listName:e.listName,message:t,originalListSummary:e}}var v={dataSourceResultReducer:function(e,t){for(var o=e.json,n=e.lolomoId,r=e.messageListLoadError,i=t.listSummaries,a={},l=0,d=i.length;l<d;l++){var s=i[l],c=t[s.id]||s
u(c)&&(f(n,s,c),c=h(s,r,c.errorCode)),a[s.index]=c}return o.items=a,o.errors=o.errors||t.errors,e},errorTransform:function(e,t){void 0===t&&(t={})
var o,n=new Error("fetchError")
return n.originalListSummary=t,n.innerError=e,a({value:e})?o=d.map:l({value:e})?o=d.mapCacheMissRetry:e&&"GibbonDataSource"===e.source?o=d.http(e.statusCode):(o=d.unknown,n.loggedDetailedErrorConfig={innerError:e,message:"Failed to retrieve row "+t.id+" "+t.context,source:"lolomo.rows",type:"ListRowRequestFailed"}),n.errorCode=o,n},isInNeedOfLolomoRefresh:function(e){var t=e.fetchErrors,o=void 0===t?[]:t,n=e.isExpired,r=o.some(l),i=n&&o.some(a)
return!(!r&&!i)},logRowError:f,rowErrorCodes:d,toErrorSummary:h}
t.default=v},wncI:function(e,t){t.__esModule=!0,t.default=function(e){var t=void 0===e?{}:e,o=t.numColumns,n=void 0===o?5:o,r=t.numRowsToFetch,i=void 0===r?2:r,a=t.threshold,l=void 0===a?.5:a,d=t.verticalChunkSize,u=void 0===d?8:d
return{getColumnIndex:function(e){return e.index%n},getRowIndex:function(e){var t=e.index
return Math.floor(t/n)},prefetchHorizontal:function(e){for(var t=e.dataLength,o=e.index,r=o%n,a=[],l=Math.max(o-r,0),d=Math.min(o-r+n*i,t),u=l;u<d;u++)u!==o&&a.push(u)
return a},prefetchVertical:function(e){var t=e.dataLength,o=e.index,r=o%n,i=[],a=Math.floor(o/n)
function d(e){for(var o=e*u*n+r;o<(e+1)*u*n+r;o+=n)o<t&&i.push(o)}var s=Math.floor(a/u)
d(s)
var c=(a%u+1)/u>=l?s+1:s-1
return c>=0&&d(c),i}}}},y5Sb:function(e,t,o){var n=o("TqRt").default
t.__esModule=!0,t.default=void 0
var r,i,a,l,d=n(o("siCl")),u=o("9IR/"),s=o("xNxB"),c=n(o("T3qH")),f=o("pbgz"),h=o("ohW6"),v=n(o("uM5e")),g=n(o("z9zi")),m=n(o("ACWi")),p=o("QfL0"),y=n(o("i+/2")),_=o("EwWu"),b=n(o("+iSk")),E=n(o("LyZa")),C=n(o("vJK3")),T=n(o("YUuR")),I=n(o("sKYC")),M=n(o("6ilx"))
l=(0,u.getFeatures)().ttsEnabled?o("tLfK").default:o("P1w9").identity
var S=(0,s.compose)(b.default,h.provider,(0,m.default)({appMenuId:"mylist"}),_.withLeftMenuHandling,c.default,l,E.default,(0,v.default)({appSource:"myListGallery",enableVolatileListRefreshes:!0}),(function(e){return(0,f.Falcor)(e,o("b3qN").default)}),C.default,T.default,M.default,(0,y.default)((0,d.default)({},I.default,{stylesheet:g.default})),(0,p.videoMerchNavigationFactory)(),(function(e){return o("pXUh").createGalleryComponent({Background:o("sKMc").default,GalleryCollection:e,getItemContext:function(e){return e||{}},isStandAlone:!0,layoutConfig:(void 0===i?i=n(o("lSnr")):i).default,Legend:(r||(r=o("rmAz"))).Logo,noBackArrow:void 0,prefetchCategoriesMask:void 0,stylesheet:(void 0===a?a=n(o("p/LH")):a).default,wallpaperPausedState:o("d0qt").default.wallpaper.pausedState})}),(function(){return o("jflt").default}))()
t.default=S},yttP:function(e,t){t.__esModule=!0,t.default=function(e,t,o){return void 0===e&&(e=10),void 0===t&&(t=!1),void 0===o&&(o=0),{duration:e,ease:t?"ease-out-quad":"ease-in-quad",to:t?o:1}}},z9zi:function(e,t,o){var n,r,i=o("TqRt").default
t.__esModule=!0,t.default=void 0
var a,l=(0,i(o("Hy99")).default)({animationContainer:function(){return{base:{name:"animation-container"}}},bobAnimationContainer:function(){return{base:{clip:!(void 0===a?a=(0,o("9IR/").getFeatures)():a).kidsProjectMysteryEnabled,height:450,ignorePointer:!0,name:"bg-animation-container",width:(r||(r=o("8J/X"))).VIEWPORT_X+800+(n||(n=o("GQsr"))).LEGACY_THEME.screenPaddingLeft,x:0,y:0}}},browse:function(){return{base:{name:"browse"}}}})
t.default=l},zBhU:function(e,t){t.__esModule=!0,t.categoryIdToLolomoType=function(e){var t=isNaN(e)?e:"genre-"+e
return o+"*"+t},t.isCategoryLolomoType=function(e){var t
return void 0===e&&(e=""),-1!==(null==(t=e)?void 0:t.indexOf(o))}
var o="custom-genre-lolomo"}}])


