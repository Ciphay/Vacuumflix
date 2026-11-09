(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[7395],{62506:function(e,t,n){var o=n(50113).default
t.PinTextComponent=function(e){var t,v=e.additionalProps,C=e.clcsComponent,b=(C.__typename,C.key),m=C.testId,g=(0,(c||(c=n(5004))).useClcsData)(b),y=g.clcsData,_=g.clcsMetaData._metaProps,x=(0,(a||(a=n(60808))).useTheme)(),T=y.accessibilityDescription,k=y.alignment,w=y.code,E=y.color,F=y.hyphenate,D=y.typography,O=w||"",S=(null==T?void 0:T.value)||O;(0,(r||(r=n(10947))).useSpeech)({condition:!!S,id:b,speakOnChange:S,text:S})
var j=v.contentStretch,A=v.layoutSpacing,I=(j||null!=_&&_.forceWidth)&&null!=(t=null==_?void 0:_.width)?t:void 0,P=(0,p.useMemo)((function(){if(!O)return""
if(!0!==F)return O
if("string"==typeof O&&O.length>f){var e=new RegExp(/\w{3,4}(?=\w{3,8})|\w+/g),t=O.match(e)
return null!==t?t.join("-"):O}return O}),[O,F])
if(!P)return null
var R={layoutSpacing:A,letterSpacing:h,maxHeight:(u||(u=n(50083))).VIEWPORT_HEIGHT,maxWidth:I||(u||(u=n(50083))).VIEWPORT_WIDTH,name:null!=m?m:b,testAttributes:{test_id:m},textAlign:(0,(void 0===s?s=o(n(58459)):s).default)(k),textColor:(0,(l||(l=n(5720))).textColorFromKebabCase)(E)||x.Foreground,type:(0,(l||(l=n(5720))).textTypeFromKebabCase)(null==D?void 0:D.token),width:I,wrap:!0}
return(0,d.j)((i||(i=n(51051))).Text,{__proto__:R,children:P},null,null)}
var r,a,i,l,u,c,s,d=n(80569),p=(n(45872),n(38159)),h=(n(41289),10),f=6},58459:function(e,t){t.__esModule=!0,t.default=function(e){if(!e)return n
var t="center-horizontal"
switch(e){case"START":t="left"
break
case"CENTER":t="center-horizontal"
break
case"END":t="right"
break
default:throw new Error("Unsupported value of textAlignment in getGibbonTextAlignment: "+e)}return t}
var n="center-horizontal"},5720:function(e,t,n){t.__esModule=!0,t.textColorFromKebabCase=function(e){var t=(0,l.pascalCase)(null==e?void 0:e.token)
return c(t)&&(o||(o=n(24243))).Colors[t]?(o||(o=n(24243))).Colors[t]:c(t)&&(r||(r=n(47717))).FoundationalColors[t]?(r||(r=n(47717))).FoundationalColors[t]:void 0},t.textTypeFromKebabCase=function(e){if(e){var t=(0,l.pascalCase)(e)
return u(t)?t:void 0}}
var o,r,a,i=n(70413),l=n(25545)
function u(e){return!!e&&(0,i.h)(Object.keys((a||(a=n(50784))).TextType),e)}function c(e){return!!e&&((0,i.h)(Object.keys((o||(o=n(24243))).Colors),e)||(0,i.h)(Object.keys((r||(r=n(47717))).FoundationalColors),e))}}}])


