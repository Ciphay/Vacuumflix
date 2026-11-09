(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[5988],{16141:function(e,t,n){var o=n(50113).default
t.TextComponent=function(e){var t,p=e.additionalProps,h=e.clcsComponent,v=(h.__typename,h.key),C=h.testId,b=(0,(c||(c=n(5004))).useClcsData)(v),f=b.clcsData,m=b.clcsMetaData,T=(0,(r||(r=n(60808))).useTheme)(),_=f.accessibilityDescription,x=f.alignment,k=f.color,y=f.plainContent,g=f.richContent,w=f.typography,F=m._metaProps,E=p.contentStretch,D=p.layoutSpacing,O=(null==g?void 0:g.value)||(null==y?void 0:y.value)||"",A=!(null==g||!g.value),I=(null==_?void 0:_.value)||O;(0,(a||(a=n(10947))).useSpeech)({condition:!!I,id:v,speakOnChange:I,text:I})
var S=(E||null!=F&&F.forceWidth)&&null!=(t=null==F?void 0:F.width)?t:void 0
if(!O)return null
var W={layoutSpacing:D,maxHeight:(u||(u=n(50083))).VIEWPORT_HEIGHT,maxWidth:S||(u||(u=n(50083))).VIEWPORT_WIDTH,name:null!=C?C:v,richText:A,testAttributes:{test_id:C},textAlign:(0,(void 0===s?s=o(n(58459)):s).default)(x),textColor:(0,(i||(i=n(5720))).textColorFromKebabCase)(k)||T.Foreground,type:(0,(i||(i=n(5720))).textTypeFromKebabCase)(null==w?void 0:w.token),width:S,wrap:!0}
return(0,d.j)((l||(l=n(51051))).Text,{__proto__:W,children:O},null,null)}
var a,r,l,i,u,c,s,d=n(80569)
n(45872),n(41289)},58459:function(e,t){t.__esModule=!0,t.default=function(e){if(!e)return n
var t="center-horizontal"
switch(e){case"START":t="left"
break
case"CENTER":t="center-horizontal"
break
case"END":t="right"
break
default:throw new Error("Unsupported value of textAlignment in getGibbonTextAlignment: "+e)}return t}
var n="center-horizontal"},5720:function(e,t,n){t.__esModule=!0,t.textColorFromKebabCase=function(e){var t=(0,i.pascalCase)(null==e?void 0:e.token)
return c(t)&&(o||(o=n(24243))).Colors[t]?(o||(o=n(24243))).Colors[t]:c(t)&&(a||(a=n(47717))).FoundationalColors[t]?(a||(a=n(47717))).FoundationalColors[t]:void 0},t.textTypeFromKebabCase=function(e){if(e){var t=(0,i.pascalCase)(e)
return u(t)?t:void 0}}
var o,a,r,l=n(70413),i=n(25545)
function u(e){return!!e&&(0,l.h)(Object.keys((r||(r=n(50784))).TextType),e)}function c(e){return!!e&&((0,l.h)(Object.keys((o||(o=n(24243))).Colors),e)||(0,l.h)(Object.keys((a||(a=n(47717))).FoundationalColors),e))}}}])


//# sourceMappingURL=component.TextComponent.85468bb791353d9aed46.js.map