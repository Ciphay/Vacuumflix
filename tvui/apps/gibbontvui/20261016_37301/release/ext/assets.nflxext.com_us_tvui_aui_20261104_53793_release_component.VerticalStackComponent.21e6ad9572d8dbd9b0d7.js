(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[2437],{67138:function(t,o,n){var e=n(50113).default
o.__esModule=!0,o.StackComponent=function(t){var o,C,w,y,E,M,N,T,R,W,z,D,A=t.additionalProps,B=t.clcsComponent,I=t.direction,P=(B.__typename,B.key),L=(0,(u||(u=n(5004))).useClcsData)(P),j=L.clcsData,H=L.clcsMetaData,V=L.clcsNodeMap,K=j.children,x=j.contentJustification,F=j.contentSpacing,J=j.contentSpacingSize,Y=j.contentStretch,G=j.initialFocusableGroupKey,O=j.itemAlignment,q=j.style,Q=(0,(l||(l=n(60808))).useTheme)(),U=(H||{})._metaProps,X=q||EMPTY_OBJECT,Z=X.backgroundColor,$=X.backgroundImage,tt=X.borderColor,ot=X.borderRadius,nt=X.borderWidth,et=X.padding,lt=X.paddingSize,at=(0,(S||(S=n(40461))).useHawkinsColor)({defaultColor:void 0,tokenName:null==Z?void 0:Z.token})
"horizontal"===I&&G&&(0,(k||(k=n(24546))).setMetaProp)(B,"width",void 0,V)
var it="horizontal"===I&&x&&"CENTER"!==x&&null!=U&&U.width?null==U?void 0:U.width:void 0,dt=(0,_.default)({name:P},(0,(void 0===h?h=e(n(29619)):h).default)(x,I,O),{color:at,layoutSpacing:A.layoutSpacing,layoutStretch:Y||null!=U&&U.contentStretch?1:void 0,padding:lt?(0,(void 0===c?c=e(n(83435)):c).default)(lt):(0,(void 0===s?s=e(n(38021)):s).default)(et)}),rt="vertical"===I?(d||(d=n(38618))).VStack:(d||(d=n(38618))).HStack,ut=null!=(o=null==U?void 0:U.width)?o:void 0,ct=(0,(S||(S=n(40461))).useHawkinsColor)({defaultColor:void 0,tokenName:null==tt?void 0:tt.token}),vt=(0,(S||(S=n(40461))).useHawkinsNumber)({defaultValue:2,tokenName:null==nt||null==(C=nt.top)?void 0:C.token}),ht=(0,(S||(S=n(40461))).useHawkinsCornerRadius)({defaultValue:Q.BorderRadiusLarge,tokens:{bottomEnd:null==ot||null==(w=ot.bottomEnd)?void 0:w.token,bottomStart:null==ot||null==(y=ot.bottomStart)?void 0:y.token,topEnd:null==ot||null==(E=ot.topEnd)?void 0:E.token,topStart:null==ot||null==(M=ot.topStart)?void 0:M.token}}),st=((null==(N=dt.padding)?void 0:N.left)||0)+((null==(T=dt.padding)?void 0:T.right)||0)
if(G){var pt=ut?ut-st:void 0
return K&&K.length&&pt&&null!=U&&U.forceWidth&&(0,(f||(f=n(46279))).passWidthToChildren)({children:K,clcsNodeMap:V,contentStretch:Y,width:pt}),(0,b.j)((i||(i=n(6646))).HitArea,{children:function(t){var o=t.focused
return(0,b.j)(rt,{__proto__:dt,children:K&&(0,(m||(m=n(2310))).renderComponents)(K,(0,_.default)({},A,{contentStretch:Y,focused:o,focusKey:G,layoutSpacing:J?(0,(void 0===v?v=e(n(7065)):v).default)(J):(0,(void 0===p?p=e(n(3932)):p).default)(F),parentStackDirection:I,parentStackWidth:pt})),width:ut},P,null)},focusKey:G,layout:"vertical",layoutSpacing:dt.layoutSpacing,layoutStretch:dt.layoutStretch,width:ut},null,null)}var ft=null!=U&&U.forceWidth?U.width:it,gt=ft?ft-st:void 0
gt&&K&&K.length&&null!=U&&U.forceWidth&&(0,(f||(f=n(46279))).passWidthToChildren)({children:K,clcsNodeMap:V,contentStretch:Y,width:gt})
var kt=!!(null!=ot&&null!=(R=ot.bottomEnd)&&R.token||null!=ot&&null!=(W=ot.bottomStart)&&W.token||null!=ot&&null!=(z=ot.topEnd)&&z.token||null!=ot&&null!=(D=ot.topStart)&&D.token),mt=!(null==Z||!Z.token)&&kt
if(ct){var St,_t="number"==typeof ht?ht:Math.max(ht.topLeft,ht.bottomLeft),bt="number"==typeof ht?ht:Math.max(ht.topRight,ht.bottomRight),Ct=ft?ft-_t-bt-2*vt:ft
return(0,b.j)((a||(a=n(15194))).DynamicBorderImage,(0,_.default)({borderFill:ct,borderWidth:vt,cornerRadius:ht,fill:at},{__proto__:dt,children:(0,b.j)(rt,{__proto__:dt,backgroundImage:(0,(g||(g=n(5134))).resolveBackgroundImage)($),children:K&&(0,(m||(m=n(2310))).renderComponents)(K,(0,_.default)({},A,{contentStretch:Y,layoutSpacing:J?(0,(void 0===v?v=e(n(7065)):v).default)(J):(0,(void 0===p?p=e(n(3932)):p).default)(F),parentStackDirection:I,parentStackWidth:Ct})),color:void 0,cornerRadius:ht,name:P+"-dynamic-border-stack",width:ft||void 0},P+"-dynamic-border-stack",null),layout:{align:(0,(r||(r=n(44390))).convertAlign)(I,null!=(St=null==x?void 0:x.toLowerCase())?St:"center"),layout:I},padding:void 0,width:ft||void 0}),null,null)}return(0,b.j)(rt,{__proto__:dt,backgroundImage:(0,(g||(g=n(5134))).resolveBackgroundImage)($),children:K&&(0,(m||(m=n(2310))).renderComponents)(K,(0,_.default)({},A,{contentStretch:Y,layoutSpacing:J?(0,(void 0===v?v=e(n(7065)):v).default)(J):(0,(void 0===p?p=e(n(3932)):p).default)(F),parentStackDirection:I,parentStackWidth:gt||void 0})),clip:mt||void 0,cornerRadius:mt?ht:void 0,width:ft||void 0},null,null)}
var l,a,i,d,r,u,c,v,h,s,p,f,g,k,m,S,_=e(n(93090)),b=n(80569)
n(45872),n(41289)},29580:function(t,o,n){o.VerticalStackComponent=function(t){return(0,l.j)((e||(e=n(67138))).StackComponent,{__proto__:t,direction:"vertical"},null,null)}
var e,l=n(80569)},83435:function(t,o,n){var e,l=n(50113).default
o.__esModule=!0,o.default=function(t){var o,a,i,d
if(t)return{bottom:null!=(o=(0,(void 0===e?e=l(n(7065)):e).default)(t.bottom))?o:0,left:null!=(a=(0,(void 0===e?e=l(n(7065)):e).default)(t.start))?a:0,right:null!=(i=(0,(void 0===e?e=l(n(7065)):e).default)(t.end))?i:0,top:null!=(d=(0,(void 0===e?e=l(n(7065)):e).default)(t.top))?d:0}}},29619:function(t,o){o.__esModule=!0,o.default=function(t,o,n){void 0===o&&(o="horizontal")
var e={halign:void 0,valign:void 0}
switch(t){case"START":case"CENTER":case"END":var l=t.toLowerCase()
"horizontal"===o?e.halign=l:e.valign=l
break
case"SPACE_BETWEEN":e.spacing="space-between"
break
case"SPACE_EVENLY":e.spacing="space-evenly"
break
default:"horizontal"===o?e.halign=void 0:e.valign=void 0}switch(n){case"BASELINE":case"START":"horizontal"===o?e.valign="start":e.halign="start"
break
case"END":"horizontal"===o?e.valign="end":e.halign="end"
break
case"CENTER":"horizontal"===o?e.valign="center":e.halign="center"
break
default:"horizontal"===o?e.valign=void 0:e.halign=void 0}return e}},38021:function(t,o,n){var e,l=n(50113).default
o.__esModule=!0,o.default=function(t){var o,a,i,d
return t?{bottom:null!=(o=(0,(void 0===e?e=l(n(3932)):e).default)(t.bottom))?o:0,left:null!=(a=(0,(void 0===e?e=l(n(3932)):e).default)(t.start))?a:0,right:null!=(i=(0,(void 0===e?e=l(n(3932)):e).default)(t.end))?i:0,top:null!=(d=(0,(void 0===e?e=l(n(3932)):e).default)(t.top))?d:0}:{bottom:0,left:0,right:0,top:0}}},46279:function(t,o,n){var e
o.__esModule=!0,o.passWidthToChildren=function(t){for(var o=t.children,l=t.clcsNodeMap,a=t.contentStretch,i=t.width,d=0;d<o.length;d++){var r=o[d]
r&&((0,(e||(e=n(24546))).setMetaProp)(r,"width",i,l),a&&(0,(e||(e=n(24546))).setMetaProp)(r,"forceWidth",!0,l))}}},5134:function(t,o){o.__esModule=!0,o.resolveBackgroundImage=function(t){if(null!=t&&t.url)return{halign:"aspect",url:t.url}}}}])


