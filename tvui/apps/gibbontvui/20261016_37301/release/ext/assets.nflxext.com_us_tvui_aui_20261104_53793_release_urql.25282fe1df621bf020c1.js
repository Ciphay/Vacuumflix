(this.webpackChunktvui_monorepo=this.webpackChunktvui_monorepo||[]).push([[3297],{5925:function(e,n,t){var r=t(50113).default,i=r(t(93090)),a=r(t(80875)),o=r(t(81904)),u=r(t(66698)),l=r(t(50222))
Object.defineProperty(n,"__esModule",{value:!0})
var s,c,d=function(e){function n(n,t,r,i,o,u,l){var s=e.call(this,n)||this
s.name="GraphQLError",s.message=n,o&&(s.path=o),t&&(s.nodes=Array.isArray(t)?t:[t]),r&&(s.source=r),i&&(s.positions=i),u&&(s.originalError=u)
var c=l
if(!c&&u){var d=u.extensions
d&&"object"==(0,a.default)(d)&&(c=d)}return s.extensions=c||{},s}(0,u.default)(n,e)
var t=n.prototype
return t.toJSON=function(){return(0,i.default)({},this,{message:this.message})},t.toString=function(){return this.message},(0,o.default)(n,[{get:function(){return"GraphQLError"},key:Symbol.toStringTag}])}((0,l.default)(Error))
function f(e){return new d("Syntax Error: Unexpected token at "+c+" in "+e)}function v(e){if(e.lastIndex=c,e.test(s))return s.slice(c,c=e.lastIndex)}var p=/ +(?=[^\s])/
function h(e){for(var n=e.split("\n"),t="",r=0,i=0,a=n.length-1,o=0;o<n.length;o++)p.lastIndex=0,p.test(n[o])&&(o&&(!r||p.lastIndex<r)&&(r=p.lastIndex),i=i||o,a=o)
for(var u=i;u<=a;u++)u!==i&&(t+="\n"),t+=n[u].slice(r).replace(/\\"""/g,'"""')
return t}function m(){for(var e=0|s.charCodeAt(c++);9===e||10===e||13===e||32===e||35===e||44===e||65279===e;e=0|s.charCodeAt(c++))if(35===e)for(;10!==(e=s.charCodeAt(c++))&&13!==e;);c--}var y=/[_A-Za-z]\w*/,g=new RegExp("(?:(null|true|false)|\\$("+y.source+')|(-?\\d+)((?:\\.\\d+)?[eE][+-]?\\d+|\\.\\d+)?|("""(?:"""|(?:[\\s\\S]*?[^\\\\])"""))|("(?:"|[^\\r\\n]*?[^\\\\]"))|('+y.source+"))"),k=function(e){return e[e.Const=1]="Const",e[e.Var=2]="Var",e[e.Int=3]="Int",e[e.Float=4]="Float",e[e.BlockString=5]="BlockString",e[e.String=6]="String",e[e.Enum=7]="Enum",e}(k||{}),b=/\\/
function E(e){var n,t
if(g.lastIndex=c,91===s.charCodeAt(c)){c++,m()
for(var r=[];93!==s.charCodeAt(c);)r.push(E(e))
return c++,m(),{kind:"ListValue",values:r}}if(123===s.charCodeAt(c)){c++,m()
for(var i=[];125!==s.charCodeAt(c);){if(null==(n=v(y)))throw f("ObjectField")
if(m(),58!==s.charCodeAt(c++))throw f("ObjectField")
m(),i.push({kind:"ObjectField",name:{kind:"Name",value:n},value:E(e)})}return c++,m(),{fields:i,kind:"ObjectValue"}}if(null!=(t=g.exec(s))){if(c=g.lastIndex,m(),null!=(n=t[k.Const]))return"null"===n?{kind:"NullValue"}:{kind:"BooleanValue",value:"true"===n}
if(null!=(n=t[k.Var])){if(e)throw f("Variable")
return{kind:"Variable",name:{kind:"Name",value:n}}}var a
if(null!=(n=t[k.Int]))return null!=(a=t[k.Float])?{kind:"FloatValue",value:n+a}:{kind:"IntValue",value:n}
if(null!=(n=t[k.BlockString]))return{block:!0,kind:"StringValue",value:h(n.slice(3,-3))}
if(null!=(n=t[k.String]))return{block:!1,kind:"StringValue",value:b.test(n)?JSON.parse(n):n.slice(1,-1)}
if(null!=(n=t[k.Enum]))return{kind:"EnumValue",value:n}}throw f("Value")}function _(e){if(40===s.charCodeAt(c)){var n,t=[]
c++,m()
do{if(null==(n=v(y)))throw f("Argument")
if(m(),58!==s.charCodeAt(c++))throw f("Argument")
m(),t.push({kind:"Argument",name:{kind:"Name",value:n},value:E(e)})}while(41!==s.charCodeAt(c))
return c++,m(),t}}function S(e){if(64===s.charCodeAt(c)){var n,t=[]
do{if(c++,null==(n=v(y)))throw f("Directive")
m(),t.push({arguments:_(e),kind:"Directive",name:{kind:"Name",value:n}})}while(64===s.charCodeAt(c))
return t}}function x(){for(var e,n=0;91===s.charCodeAt(c);)n++,c++,m()
if(null==(e=v(y)))throw f("NamedType")
m()
var t={kind:"NamedType",name:{kind:"Name",value:e}}
do{if(33===s.charCodeAt(c)&&(c++,m(),t={kind:"NonNullType",type:t}),n){if(93!==s.charCodeAt(c++))throw f("NamedType")
m(),t={kind:"ListType",type:t}}}while(n--)
return t}var N=new RegExp("(?:(\\.{3})|("+y.source+"))"),A=function(e){return e[e.Spread=1]="Spread",e[e.Name=2]="Name",e}(A||{})
function O(){var e,n,t=[]
do{if(N.lastIndex=c,null==(n=N.exec(s)))throw f("SelectionSet")
if(c=N.lastIndex,null!=n[A.Spread]){m()
var r=v(y)
if(null!=r&&"on"!==r)m(),t.push({directives:S(!1),kind:"FragmentSpread",name:{kind:"Name",value:r}})
else{if(m(),"on"===r){if(null==(r=v(y)))throw f("NamedType")
m()}var i=S(!1)
if(123!==s.charCodeAt(c++))throw f("InlineFragment")
m(),t.push({directives:i,kind:"InlineFragment",selectionSet:O(),typeCondition:r?{kind:"NamedType",name:{kind:"Name",value:r}}:void 0})}}else if(null!=(e=n[A.Name])){var a=void 0
if(m(),58===s.charCodeAt(c)){if(c++,m(),a=e,null==(e=v(y)))throw f("Field")
m()}var o=_(!1)
m()
var u=S(!1),l=void 0
123===s.charCodeAt(c)&&(c++,m(),l=O()),t.push({alias:a?{kind:"Name",value:a}:void 0,arguments:o,directives:u,kind:"Field",name:{kind:"Name",value:e},selectionSet:l})}}while(125!==s.charCodeAt(c))
return c++,m(),{kind:"SelectionSet",selections:t}}function C(){var e,n
if(null==(e=v(y)))throw f("FragmentDefinition")
if(m(),"on"!==v(y))throw f("FragmentDefinition")
if(m(),null==(n=v(y)))throw f("FragmentDefinition")
m()
var t=S(!1)
if(123!==s.charCodeAt(c++))throw f("FragmentDefinition")
return m(),{directives:t,kind:"FragmentDefinition",name:{kind:"Name",value:e},selectionSet:O(),typeCondition:{kind:"NamedType",name:{kind:"Name",value:n}}}}var w=/(?:query|mutation|subscription|fragment)/
function T(e){var n,t,r
if(e&&(m(),n=v(y),t=function(){if(m(),40===s.charCodeAt(c)){var e,n=[]
c++,m()
do{if(36!==s.charCodeAt(c++))throw f("Variable")
if(null==(e=v(y)))throw f("Variable")
if(m(),58!==s.charCodeAt(c++))throw f("VariableDefinition")
m()
var t=x(),r=void 0
61===s.charCodeAt(c)&&(c++,m(),r=E(!0)),m(),n.push({defaultValue:r,directives:S(!0),kind:"VariableDefinition",type:t,variable:{kind:"Variable",name:{kind:"Name",value:e}}})}while(41!==s.charCodeAt(c))
return c++,m(),n}}(),r=S(!1)),123===s.charCodeAt(c))return c++,m(),{directives:r,kind:"OperationDefinition",name:n?{kind:"Name",value:n}:void 0,operation:e||"query",selectionSet:O(),variableDefinitions:t}}var I={}
function R(e,n,t){for(var r="",i=0;i<e.length;i++)i&&(r+=n),r+=t(e[i])
return r}function P(e){return JSON.stringify(e)}function L(e){return'"""\n'+e.replace(/"""/g,'\\"""')+'\n"""'}var D="\n",F={Argument:function(e){return e.name.value+": "+q(e.value)},BooleanValue:function(e){return""+e.value},Directive:function(e){var n="@"+e.name.value
return e.arguments&&e.arguments.length&&(n+="("+R(e.arguments,", ",F.Argument)+")"),n},Document:function(e){return e.definitions&&e.definitions.length?R(e.definitions,"\n\n",q):""},EnumValue:function(e){return e.value},Field:function(e){var n=e.alias?e.alias.value+": "+e.name.value:e.name.value
if(e.arguments&&e.arguments.length){var t=R(e.arguments,", ",F.Argument)
n.length+t.length+2>80?n+="("+(D+="  ")+R(e.arguments,D,F.Argument)+(D=D.slice(0,-2))+")":n+="("+t+")"}return e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),e.selectionSet&&e.selectionSet.selections.length&&(n+=" "+F.SelectionSet(e.selectionSet)),n},FloatValue:function(e){return e.value},FragmentDefinition:function(e){var n="fragment "+e.name.value
return n+=" on "+e.typeCondition.name.value,e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),n+" "+F.SelectionSet(e.selectionSet)},FragmentSpread:function(e){var n="..."+e.name.value
return e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),n},InlineFragment:function(e){var n="..."
return e.typeCondition&&(n+=" on "+e.typeCondition.name.value),e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),n+" "+F.SelectionSet(e.selectionSet)},IntValue:function(e){return e.value},ListType:function(e){return"["+q(e.type)+"]"},ListValue:function(e){return"["+R(e.values,", ",q)+"]"},Name:function(e){return e.value},NamedType:function(e){return e.name.value},NonNullType:function(e){return q(e.type)+"!"},NullValue:function(){return"null"},ObjectField:function(e){return e.name.value+": "+q(e.value)},ObjectValue:function(e){return"{"+R(e.fields,", ",F.ObjectField)+"}"},OperationDefinition:function(e){var n=e.operation
return e.name&&(n+=" "+e.name.value),e.variableDefinitions&&e.variableDefinitions.length&&(e.name||(n+=" "),n+="("+R(e.variableDefinitions,", ",F.VariableDefinition)+")"),e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),"query"!==n?n+" "+F.SelectionSet(e.selectionSet):F.SelectionSet(e.selectionSet)},SelectionSet:function(e){return"{"+(D+="  ")+R(e.selections,D,q)+(D=D.slice(0,-2))+"}"},StringValue:function(e){return e.block?L(e.value).replace(/\n/g,D):P(e.value)},Variable:function(e){return"$"+e.name.value},VariableDefinition:function(e){var n=F.Variable(e.variable)+": "+q(e.type)
return e.defaultValue&&(n+=" = "+q(e.defaultValue)),e.directives&&e.directives.length&&(n+=" "+R(e.directives," ",F.Directive)),n}},q=function(e){return F[e.kind](e)}
function M(e,n){switch(e.kind){case"NullValue":return null
case"IntValue":return parseInt(e.value,10)
case"FloatValue":return parseFloat(e.value)
case"StringValue":case"EnumValue":case"BooleanValue":return e.value
case"ListValue":for(var t=[],r=0,i=e.values.length;r<i;r++)t.push(M(e.values[r],n))
return t
case"ObjectValue":for(var a=Object.create(null),o=0,u=e.fields.length;o<u;o++){var l=e.fields[o]
a[l.name.value]=M(l.value,n)}return a
case"Variable":return n&&n[e.name.value]}}n.BREAK=I,n.GraphQLError=d,n.Kind={ARGUMENT:"Argument",BOOLEAN:"BooleanValue",DIRECTIVE:"Directive",DOCUMENT:"Document",ENUM:"EnumValue",FIELD:"Field",FLOAT:"FloatValue",FRAGMENT_DEFINITION:"FragmentDefinition",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",INT:"IntValue",LIST:"ListValue",LIST_TYPE:"ListType",NAME:"Name",NAMED_TYPE:"NamedType",NON_NULL_TYPE:"NonNullType",NULL:"NullValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",OPERATION_DEFINITION:"OperationDefinition",SELECTION_SET:"SelectionSet",STRING:"StringValue",VARIABLE:"Variable",VARIABLE_DEFINITION:"VariableDefinition"},n.OperationTypeNode={MUTATION:"mutation",QUERY:"query",SUBSCRIPTION:"subscription"},n.Source=function(e,n,t){return{body:e,locationOffset:t||{column:1,line:1},name:n}},n.isSelectionNode=function(e){return"Field"===e.kind||"FragmentSpread"===e.kind||"InlineFragment"===e.kind},n.parse=function(e,n){return c=0,function(e,n){var t,r
m()
var i,a=[]
do{if("fragment"===(t=v(w)))m(),a.push(C())
else{if(null==(r=T(t)))throw f("Document")
a.push(r)}}while(c<e.length)
return n?{definitions:a,kind:"Document"}:{definitions:a,kind:"Document",set loc(e){i=e},get loc(){return i||(i={end:e.length,endToken:void 0,source:{body:e,locationOffset:{column:1,line:1},name:"graphql.web"},start:0,startToken:void 0}),i}}}(s="string"==typeof e.body?e.body:e,n&&n.noLocation)},n.parseType=function(e){return s="string"==typeof e.body?e.body:e,c=0,x()},n.parseValue=function(e){return s="string"==typeof e.body?e.body:e,c=0,m(),E(!1)},n.print=function(e){return D="\n",F[e.kind]?F[e.kind](e):""},n.printBlockString=L,n.printString=P,n.valueFromASTUntyped=M,n.valueFromTypeNode=function e(n,t,r){if("Variable"===n.kind)return r?e(r[n.name.value],t,r):void 0
if("NonNullType"===t.kind)return"NullValue"!==n.kind?e(n,t,r):void 0
if("NullValue"===n.kind)return null
if("ListType"===t.kind){if("ListValue"===n.kind){for(var i=[],a=0,o=n.values.length;a<o;a++){var u=e(n.values[a],t.type,r)
if(void 0===u)return
i.push(u)}return i}}else if("NamedType"===t.kind)switch(t.name.value){case"Int":case"Float":case"String":case"Bool":return t.name.value+"Value"===n.kind?M(n,r):void 0
default:return M(n,r)}},n.visit=function(e,n){var t=[],r=[]
try{var a=function e(a,o,u){var l,s=!1,c=n[a.kind]&&n[a.kind].enter||n[a.kind]||n.enter,d=c&&c.call(n,a,o,u,r,t)
if(!1===d)return a
if(null===d)return null
if(d===I)throw I
d&&"string"==typeof d.kind&&(s=d!==a,a=d),u&&t.push(u)
var f=(0,i.default)({},a)
for(var v in a){r.push(v)
var p=a[v]
if(Array.isArray(p)){for(var h=[],m=0;m<p.length;m++)null!=p[m]&&"string"==typeof p[m].kind&&(t.push(a),r.push(m),l=e(p[m],m,p),r.pop(),t.pop(),null==l?s=!0:(s=s||l!==p[m],h.push(l)))
p=h}else null!=p&&"string"==typeof p.kind&&void 0!==(l=e(p,v,a))&&(s=s||p!==l,p=l)
r.pop(),s&&(f[v]=p)}u&&t.pop()
var y=n[a.kind]&&n[a.kind].leave||n.leave,g=y&&y.call(n,a,o,u,r,t)
if(g===I)throw I
return void 0!==g?g:void 0!==d?s?f:d:s?f:a}(e)
return void 0!==a&&!1!==a?a:e}catch(n){if(n!==I)throw n
return e}}},52946:function(e,n,t){var r,i,a=t(50113).default,o=a(t(35972)),u=t(32714),l=a(t(93920)),s=t(51804),c=t(7067),d=a(t(63191)),f=a(t(93090)),v=a(t(66698)),p=a(t(50222)),h=a(t(80875)),m=a(t(21639)),y=a(t(49631)),g=a(t(45938)),k=function(e,n){var t=""
if(e)return"[Network] "+e.message
if(n)for(var r=0,i=n.length;r<i;r++)t&&(t+="\n"),t+="[GraphQL] "+n[r].message
return t},b=function(e){return e&&"string"==typeof e.message&&(e.extensions||"GraphQLError"===e.name)?e:"object"===(0,h.default)(e)&&"string"==typeof e.message?new((r||(r=t(5925))).GraphQLError)(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):new((r||(r=t(5925))).GraphQLError)(e)},E=function(e){function n(n){var t,r=(n.graphQLErrors||[]).map(b),i=k(n.networkError,r)
return(t=e.call(this,i)||this).name="CombinedError",t.message=i,t.graphQLErrors=r,t.networkError=n.networkError,t.response=n.response,t}return(0,v.default)(n,e),n.prototype.toString=function(){return this.message},n}((0,p.default)(Error)),_=function(e,n){for(var t=0|(n||5381),r=0,i=0|e.length;r<i;r++)t=(t<<5)+t+e.charCodeAt(r)
return t},S=new Set,x=(new WeakMap,function(e){return null===e?"null":JSON.stringify(N(e))})
function N(e){if(!e||"object"!==(0,h.default)(e))return e
if(Array.isArray(e))return e.map(N)
for(var n=Object.keys(e).sort(),t={},r=0;r<n.length;r++){var i=N(e[n[r]])
t[n[r]]=i}return t}var A=function(e,n,t){if(null==t||"object"!==(0,h.default)(t)||t.toJSON||S.has(t));else if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)A(e,n+"."+r,t[r])
else if(t instanceof w||t instanceof T)e.set(n,t)
else for(var a in S.add(t),t)A(e,n+"."+a,t[a])},O=function(e,n){return S.clear(),x(e)},C=function(){},w="undefined"!=typeof File?File:C,T="undefined"!=typeof Blob?Blob:C,I=function(e){var n=new Map
return w===C&&T===C||(S.clear(),A(n,"variables",e)),n},R=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,P=/(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,L=function(e,n){return n%2==0?e.replace(P,"\n"):e},D=function(e){return e.split(R).map(L).join("").trim()},F=new Map,q=new Map,M=function(e){var n
return"string"==typeof e?n=D(e):e.loc&&q.get(e.__key)===e?n=e.loc.source.body:(n=F.get(e)||D((r||(r=t(5925))).print(e)),F.set(e,n)),"string"==typeof e||e.loc||(e.loc={end:n.length,source:{body:n,locationOffset:{column:1,line:1},name:"gql"},start:0}),n},K=function(e){var n
if(e.documentId)n=_(e.documentId)
else if(n=_(M(e)),e.definitions){var t=G(e)
t&&(n=_("\n# "+t,n))}return n},V=function(e){var n,i
return e.__key?e:("string"==typeof e?(n=K(e),i=q.get(n)||(r||(r=t(5925))).parse(e,{noLocation:!0})):(n=e.__key||K(e),i=q.get(n)||e),i.loc||M(i),i.__key=n,q.set(n,i),i)},G=function(e){for(var n=0,i=e.definitions.length;n<i;n++){var a=e.definitions[n]
if(a.kind===(r||(r=t(5925))).Kind.OPERATION_DEFINITION)return a.name?a.name.value:void 0}},j=function(e,n,t){if(!("data"in n||"errors"in n&&Array.isArray(n.errors)))throw new Error("No Content")
var r="subscription"===e.kind
return{data:n.data,error:Array.isArray(n.errors)?new E({graphQLErrors:n.errors,response:t}):void 0,extensions:n.extensions?(0,f.default)({},n.extensions):void 0,hasNext:null==n.hasNext?r:n.hasNext,operation:e,stale:!1}},U=function(e,n){if("object"===(0,h.default)(e)&&null!=e){if(Array.isArray(e)){e=(0,d.default)(e)
for(var t=0,r=n.length;t<r;t++)e[t]=U(e[t],n[t])
return e}if(!e.constructor||e.constructor===Object){for(var i in e=(0,f.default)({},e),n)e[i]=U(e[i],n[i])
return e}}return n},B=function(e,n,t,r){var i=e.error?e.error.graphQLErrors:[],a=!!e.extensions||!!(n.payload||n).extensions,o=(0,f.default)({},e.extensions,(n.payload||n).extensions),u=n.incremental
"path"in n&&(u=[n])
var l={data:e.data}
if(u)for(var s=function(){var e,n=u[v]
Array.isArray(n.errors)&&(e=i).push.apply(e,(0,d.default)(n.errors)),n.extensions&&(Object.assign(o,n.extensions),a=!0)
var t="data",s=l,p=[]
if(n.path)p=n.path
else if(r){var h=(0,c.h)(r,(function(e){return e.id===n.id}))
p=n.subPath?[].concat((0,d.default)(h.path),(0,d.default)(n.subPath)):h.path}for(var m=0,y=p.length;m<y;t=p[m++])s=s[t]=Array.isArray(s[t])?(0,d.default)(s[t]):(0,f.default)({},s[t])
if(n.items)for(var g=+t>=0?t:0,k=0,b=n.items.length;k<b;k++)s[g+k]=U(s[g+k],n.items[k])
else void 0!==n.data&&(s[t]=U(s[t],n.data))},v=0,p=u.length;v<p;v++)s()
else l.data=(n.payload||n).data||e.data,i=n.errors||n.payload&&n.payload.errors||i
return{data:l.data,error:i.length?new E({graphQLErrors:i,response:t}):void 0,extensions:a?o:void 0,hasNext:null!=n.hasNext?n.hasNext:e.hasNext,operation:e.operation,stale:!1}},Q=function(e,n,t){return{data:void 0,error:new E({networkError:n,response:t}),extensions:void 0,hasNext:!1,operation:e,stale:!1}},H=function(e){var n=e.indexOf("?")
return n>-1?[e.slice(0,n),new URLSearchParams(e.slice(n+1))]:[e,new URLSearchParams]},X=function(e,n){var t="query"===e.kind&&!!e.context.preferGetMethod
if(n&&!t){var r=O(n),i=I(n.variables)
if(i.size){var a=new FormData
a.append("operations",r),a.append("map",O((0,f.default)({},(0,d.default)((0,s.h)(i)).map((function(e){return[e]})))))
var o,c=0,v=(0,l.default)((0,u.h)(i))
try{var p=!1
for(v.s();!(o=v.n()).done;){var h=o.value
a.append(""+c++,h)}}catch(e){v.e(e)}finally{p||(p=!0,v.f())}return a}return r}},J=function(e){return"has"in e&&!Object.keys(e).length},z="undefined"!=typeof TextDecoder?new TextDecoder:null,W=/boundary="?([^=";]+)"?/i,Y=/data: ?([^\n]+)/,$=function(e){return"Buffer"===e.constructor.name?e.toString():z.decode(e)}
function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=(0,y.default)((0,o.default)().mark((function e(n){var t,r,i,a,u,l,s,c
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.body[Symbol.asyncIterator]){e.next=32
break}t=!1,r=!1,e.prev=3,a=(0,g.default)(n.body)
case 5:return e.next=7,(0,m.default)(a.next())
case 7:if(!(t=!(u=e.sent).done)){e.next=14
break}return l=u.value,e.next=11,$(l)
case 11:t=!1,e.next=5
break
case 14:e.next=20
break
case 16:e.prev=16,e.t0=e.catch(3),r=!0,i=e.t0
case 20:if(e.prev=20,e.prev=21,!t||null==a.return){e.next=25
break}return e.next=25,(0,m.default)(a.return())
case 25:if(e.prev=25,!r){e.next=28
break}throw i
case 28:return e.finish(25)
case 29:return e.finish(20)
case 30:e.next=44
break
case 32:s=n.body.getReader(),e.prev=33
case 34:return e.next=36,(0,m.default)(s.read())
case 36:if((c=e.sent).done){e.next=41
break}return e.next=39,$(c.value)
case 39:e.next=34
break
case 41:return e.prev=41,s.cancel(),e.finish(41)
case 44:case"end":return e.stop()}}),e,null,[[3,16,20,30],[21,,25,29],[33,,41,44]])})))).apply(this,arguments)}function ne(e,n){return te.apply(this,arguments)}function te(){return(te=(0,y.default)((0,o.default)().mark((function e(n,t){var r,i,a,u,l,s,c,d
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="",a=!1,u=!1,e.prev=3,s=(0,g.default)(n)
case 5:return e.next=7,(0,m.default)(s.next())
case 7:if(!(a=!(c=e.sent).done)){e.next=19
break}d=c.value,r+=d
case 10:if(!((i=r.indexOf(t))>-1)){e.next=16
break}return e.next=13,r.slice(0,i)
case 13:r=r.slice(i+t.length),e.next=10
break
case 16:a=!1,e.next=5
break
case 19:e.next=25
break
case 21:e.prev=21,e.t0=e.catch(3),u=!0,l=e.t0
case 25:if(e.prev=25,e.prev=26,!a||null==s.return){e.next=30
break}return e.next=30,(0,m.default)(s.return())
case 30:if(e.prev=30,!u){e.next=33
break}throw l
case 33:return e.finish(30)
case 34:return e.finish(25)
case 35:case"end":return e.stop()}}),e,null,[[3,21,25,35],[26,,30,34]])})))).apply(this,arguments)}function re(e){return ie.apply(this,arguments)}function ie(){return(ie=(0,y.default)((0,o.default)().mark((function e(n){return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,(0,m.default)(n.text())
case 3:return e.t1=e.sent,e.next=6,e.t0.parse.call(e.t0,e.t1)
case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){return oe.apply(this,arguments)}function oe(){return(oe=(0,y.default)((0,o.default)().mark((function e(n){var t,r,i,a,u,l,s,c,d
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!1,i=!1,e.prev=2,u=(0,g.default)(ne(Z(n),"\n\n"))
case 4:return e.next=6,(0,m.default)(u.next())
case 6:if(!(r=!(l=e.sent).done)){e.next=25
break}if(s=l.value,!(c=s.match(Y))){e.next=22
break}return d=c[1],e.prev=11,e.next=14,t=JSON.parse(d)
case 14:e.next=20
break
case 16:if(e.prev=16,e.t0=e.catch(11),t){e.next=20
break}throw e.t0
case 20:if(!t||!1!==t.hasNext){e.next=22
break}return e.abrupt("break",25)
case 22:r=!1,e.next=4
break
case 25:e.next=31
break
case 27:e.prev=27,e.t1=e.catch(2),i=!0,a=e.t1
case 31:if(e.prev=31,e.prev=32,!r||null==u.return){e.next=36
break}return e.next=36,(0,m.default)(u.return())
case 36:if(e.prev=36,!i){e.next=39
break}throw a
case 39:return e.finish(36)
case 40:return e.finish(31)
case 41:if(!t||!1===t.hasNext){e.next=44
break}return e.next=44,{hasNext:!1}
case 44:case"end":return e.stop()}}),e,null,[[2,27,31,41],[11,16],[32,,36,40]])})))).apply(this,arguments)}function ue(e,n){return le.apply(this,arguments)}function le(){return(le=(0,y.default)((0,o.default)().mark((function e(n,t){var r,i,a,u,l,s,c,d,f,v,p
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.match(W),i="--"+(r?r[1]:"-"),a=!0,l=!1,s=!1,e.prev=5,d=(0,g.default)(ne(Z(t),"\r\n"+i))
case 7:return e.next=9,(0,m.default)(d.next())
case 9:if(!(l=!(f=e.sent).done)){e.next=33
break}if(v=f.value,!a){e.next=19
break}if(a=!1,!((p=v.indexOf(i))>-1)){e.next=18
break}v=v.slice(p+i.length),e.next=19
break
case 18:return e.abrupt("continue",30)
case 19:return e.prev=19,e.next=22,u=JSON.parse(v.slice(v.indexOf("\r\n\r\n")+4))
case 22:e.next=28
break
case 24:if(e.prev=24,e.t0=e.catch(19),u){e.next=28
break}throw e.t0
case 28:if(!u||!1!==u.hasNext){e.next=30
break}return e.abrupt("break",33)
case 30:l=!1,e.next=7
break
case 33:e.next=39
break
case 35:e.prev=35,e.t1=e.catch(5),s=!0,c=e.t1
case 39:if(e.prev=39,e.prev=40,!l||null==d.return){e.next=44
break}return e.next=44,(0,m.default)(d.return())
case 44:if(e.prev=44,!s){e.next=47
break}throw c
case 47:return e.finish(44)
case 48:return e.finish(39)
case 49:if(!u||!1===u.hasNext){e.next=52
break}return e.next=52,{hasNext:!1}
case 52:case"end":return e.stop()}}),e,null,[[5,35,39,49],[19,24],[40,,44,48]])})))).apply(this,arguments)}function se(e){return ce.apply(this,arguments)}function ce(){return(ce=(0,y.default)((0,o.default)().mark((function e(n){var t,r
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.default)(n.text())
case 2:return t=e.sent,e.prev=3,r=JSON.parse(t),e.next=7,r
case 7:e.next=12
break
case 9:throw e.prev=9,e.t0=e.catch(3),new Error(t)
case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function de(e,n,t){return fe.apply(this,arguments)}function fe(){return(fe=(0,y.default)((0,o.default)().mark((function e(n,t,r){var i,a,u,l,s,c,f,v,p,h,y,k
return(0,o.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=!0,a=null,e.prev=2,e.next=5,(0,m.default)(Promise.resolve())
case 5:return e.next=7,e.sent
case 7:return e.next=9,(0,m.default)((n.context.fetch||fetch)(t,r))
case 9:u=e.sent,l=u.headers.get("Content-Type")||"",s=/multipart\/mixed/i.test(l)?ue(l,u):/text\/event-stream/i.test(l)?ae(u):/text\//i.test(l)?se(u):re(u),f=!1,v=!1,e.prev=14,h=(0,g.default)(s)
case 16:return e.next=18,(0,m.default)(h.next())
case 18:if(!(f=!(y=e.sent).done)){e.next=29
break}return(k=y.value).pending&&!a?c=k.pending:k.pending&&(c=[].concat((0,d.default)(c),(0,d.default)(k.pending))),a=a?B(a,k,u,c):j(n,k,u),i=!1,e.next=25,a
case 25:i=!0
case 26:f=!1,e.next=16
break
case 29:e.next=35
break
case 31:e.prev=31,e.t0=e.catch(14),v=!0,p=e.t0
case 35:if(e.prev=35,e.prev=36,!f||null==h.return){e.next=40
break}return e.next=40,(0,m.default)(h.return())
case 40:if(e.prev=40,!v){e.next=43
break}throw p
case 43:return e.finish(40)
case 44:return e.finish(35)
case 45:if(a){e.next=48
break}return e.next=48,a=j(n,{},u)
case 48:e.next=56
break
case 50:if(e.prev=50,e.t1=e.catch(2),i){e.next=54
break}throw e.t1
case 54:return e.next=56,Q(n,u&&(u.status<200||u.status>=300)&&u.statusText?new Error(u.statusText):e.t1,u)
case 56:case"end":return e.stop()}}),e,null,[[2,50],[14,31,35,45],[36,,40,44]])})))).apply(this,arguments)}n.CombinedError=E,n.createRequest=function(e,n,t){var r=n||{},i=V(e),a=O(r),o=i.__key
return"{}"!==a&&(o=_(a)+"-"+o),{extensions:t,key:o,query:i,variables:r}},n.getOperationType=function(e){for(var n=0,i=e.definitions.length;n<i;n++){var a=e.definitions[n]
if(a.kind===(r||(r=t(5925))).Kind.OPERATION_DEFINITION)return a.operation}},n.keyDocument=V,n.makeErrorResult=Q,n.makeFetchBody=function(e){var n={documentId:void 0,extensions:e.extensions,operationName:G(e.query),query:void 0,variables:e.variables||void 0}
return!("documentId"in e.query)||!e.query.documentId||e.query.definitions&&e.query.definitions.length?e.extensions&&e.extensions.persistedQuery&&!e.extensions.persistedQuery.miss||(n.query=M(e.query)):n.documentId=e.query.documentId,n},n.makeFetchOptions=function(e,n){var t={accept:"subscription"===e.kind?"text/event-stream, multipart/mixed":"application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"},r=("function"==typeof e.context.fetchOptions?e.context.fetchOptions():e.context.fetchOptions)||{}
if(r.headers)if(J(r.headers))r.headers.forEach((function(e,n){t[n]=e}))
else if(Array.isArray(r.headers))r.headers.forEach((function(e,n){Array.isArray(e)?t[e[0]]?t[e[0]]=t[e[0]]+","+e[1]:t[e[0]]=e[1]:t[n]=e}))
else for(var i in r.headers)t[i.toLowerCase()]=r.headers[i]
var a=X(e,n)
return"string"!=typeof a||t["content-type"]||(t["content-type"]="application/json"),(0,f.default)({},r,{body:a,headers:t,method:a?"POST":"GET"})},n.makeFetchSource=function(e,n,r){var a
return"undefined"!=typeof AbortController&&(r.signal=(a=new AbortController).signal),(i||(i=t(50206))).onEnd((function(){a&&a.abort()}))((i||(i=t(50206))).filter((function(e){return!!e}))((i||(i=t(50206))).fromAsyncIterable(de(e,n,r))))},n.makeFetchURL=function(e,n){var t="query"===e.kind&&e.context.preferGetMethod
if(!t||!n)return e.context.url
var r=H(e.context.url)
for(var i in n){var a=n[i]
a&&r[1].set(i,"object"===(0,h.default)(a)?O(a):a)}var o=r.join("?")
return o.length>2047&&"force"!==t?(e.context.preferGetMethod=!1,e.context.url):o},n.makeResult=j,n.mergeResultPatch=B,n.stringifyDocument=M,n.stringifyVariables=O},47618:function(e,n,t){var r,i=t(50113).default,a=t(32714),o=i(t(93920)),u=i(t(93090)),l=i(t(63191)),s=i(t(80875))
Object.defineProperty(n,"__esModule",{value:!0})
var c,d=t(52946),f=function(e,n){if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++)f(e[t],n)
else if("object"===(0,s.default)(e)&&null!==e)for(var i in e)"__typename"===i&&"string"==typeof e[i]?n.add(e[i]):f(e[i],n)
return n},v=function(e){return(0,l.default)(f(e,new Set))},p=(new Map,function(e){return e})
function h(e){var n=function(n){return e(n)}
return n.toPromise=function(){return(c||(c=t(50206))).toPromise((c||(c=t(50206))).take(1)((c||(c=t(50206))).filter((function(e){return!e.stale&&!e.hasNext}))(n)))},n.then=function(e,t){return n.toPromise().then(e,t)},n.subscribe=function(e){return(c||(c=t(50206))).subscribe(e)(n)},n}function m(e,n,t){return(0,u.default)({},n,{context:n.context?(0,u.default)({},n.context,t):t||n.context,kind:e})}var y=function(e,n){return m(e.kind,e,{meta:(0,u.default)({},e.context.meta,n)})},g=function(){},k=function(e){var n=e.kind
return"mutation"!==n&&"query"!==n},b=function(e){var n=p(e.query)
if(n!==e.query){var t=m(e.kind,e)
return t.query=n,t}return e},E=function(e,n){return e.reexecuteOperation(m(n.kind,n,{requestPolicy:"network-only"}))},_=function(e,n){var t={hasNext:e.hasNext}
return void 0!==e.data&&(t.data=JSON.stringify(e.data)),n&&void 0!==e.extensions&&(t.extensions=JSON.stringify(e.extensions)),e.error&&(t.error={graphQLErrors:e.error.graphQLErrors.map((function(e){return e.path||e.extensions?{extensions:e.extensions,message:e.message,path:e.path}:e.message}))},e.error.networkError&&(t.error.networkError=""+e.error.networkError)),t},S=function(e,n,t){return{data:n.data?JSON.parse(n.data):void 0,error:n.error?new d.CombinedError({graphQLErrors:n.error.graphQLErrors,networkError:n.error.networkError?new Error(n.error.networkError):void 0}):void 0,extensions:t&&n.extensions?JSON.parse(n.extensions):void 0,hasNext:!!n.hasNext,operation:e,stale:!1}},x=new Set,N=function(e){return function(n){var r=n.client,i=n.forward
return n.dispatchDebug,e.reduceRight((function(e,n){return n({client:r,dispatchDebug:function(e){},forward:function(n){return(c||(c=t(50206))).share(e((c||(c=t(50206))).share(n)))}})}),i)}},A=function(e){var n=e.onOperation,r=e.onResult,i=e.onError
return function(e){var a=e.forward
return function(e){return(c||(c=t(50206))).mergeMap((function(e){i&&e.error&&i(e.error,e.operation)
var n=r&&r(e)||e
return"then"in n?(c||(c=t(50206))).fromPromise(n):(c||(c=t(50206))).fromValue(n)}))(a((c||(c=t(50206))).mergeMap((function(e){var r=n&&n(e)||e
return"then"in r?(c||(c=t(50206))).fromPromise(r):(c||(c=t(50206))).fromValue(r)}))(e)))}}},O=function(e){return e.dispatchDebug,function(e){return(c||(c=t(50206))).filter((function(e){return!1}))(e)}},C=function e(n){var r=0,i=new Map,a=new Set,o=[],l={fetch:n.fetch,fetchOptions:n.fetchOptions,fetchSubscriptions:n.fetchSubscriptions,preferGetMethod:n.preferGetMethod,requestPolicy:n.requestPolicy||"cache-first",url:n.url},s=(c||(c=t(50206))).makeSubject()
function f(e){"mutation"!==e.kind&&"teardown"!==e.kind&&a.has(e.key)||("teardown"===e.kind?a.delete(e.key):"mutation"!==e.kind&&a.add(e.key),s.next(e))}var v=!1
function p(e){if(e&&f(e),!v){for(v=!0;v&&(e=o.shift());)f(e)
v=!1}}var y=function(e){var n=(c||(c=t(50206))).takeUntil((c||(c=t(50206))).filter((function(n){return"teardown"===n.kind&&n.key===e.key}))(s.source))((c||(c=t(50206))).filter((function(n){return n.operation.kind===e.kind&&n.operation.key===e.key&&(!n.operation.context._instance||n.operation.context._instance===e.context._instance)}))(S))
return n="query"!==e.kind?(c||(c=t(50206))).takeWhile((function(e){return!!e.hasNext}),!0)(n):(c||(c=t(50206))).switchMap((function(n){var r=(c||(c=t(50206))).fromValue(n)
return n.stale||n.hasNext?r:(c||(c=t(50206))).merge([r,(c||(c=t(50206))).map((function(){return n.stale=!0,n}))((c||(c=t(50206))).take(1)((c||(c=t(50206))).filter((function(n){return n.key===e.key}))(s.source)))])}))(n),n="mutation"!==e.kind?(c||(c=t(50206))).onEnd((function(){a.delete(e.key),i.delete(e.key),v=!1
for(var n=o.length-1;n>=0;n--)o[n].key===e.key&&o.splice(n,1)
f(m("teardown",e,e.context))}))((c||(c=t(50206))).onPush((function(n){if(n.stale)if(n.hasNext)for(var t=0;t<o.length;t++){var r=o[t]
if(r.key===n.operation.key){a.delete(r.key)
break}}else a.delete(e.key)
else n.hasNext||a.delete(e.key)}))(n)):(c||(c=t(50206))).onStart((function(){f(e)}))(n),(c||(c=t(50206))).share(n)},k=this instanceof e?this:Object.create(e.prototype),b=Object.assign(k,{createRequestOperation:function(e,n,t){return t||(t={}),m(e,n,(0,u.default)({_instance:"mutation"===e?r=r+1|0:void 0},l,t,{requestPolicy:t.requestPolicy||l.requestPolicy,suspense:t.suspense||!1!==t.suspense&&b.suspense}))},executeMutation:function(e,n){var t=b.createRequestOperation("mutation",e,n)
return b.executeRequestOperation(t)},executeQuery:function(e,n){var t=b.createRequestOperation("query",e,n)
return b.executeRequestOperation(t)},executeRequestOperation:function(e){return"mutation"===e.kind?h(y(e)):h((c||(c=t(50206))).lazy((function(){var n=i.get(e.key)
return n||i.set(e.key,n=y(e)),(c||(c=t(50206))).onStart((function(){p(e)}))(n)})))},executeSubscription:function(e,n){var t=b.createRequestOperation("subscription",e,n)
return b.executeRequestOperation(t)},mutation:function(e,n,t){return b.executeMutation(d.createRequest(e,n),t)},operations$:s.source,query:function(e,n,t){return b.executeQuery(d.createRequest(e,n),t)},readQuery:function(e,n,r){var i=null
return(c||(c=t(50206))).subscribe((function(e){i=e}))(b.query(e,n,r)).unsubscribe(),i},reexecuteOperation:function(e){if("teardown"===e.kind)p(e)
else if("mutation"===e.kind)o.push(e),Promise.resolve().then(p)
else if(i.has(e.key)){for(var n=!1,t=0;t<o.length;t++)o[t].key===e.key&&(o[t]=e,n=!0)
n||a.has(e.key)&&"network-only"!==e.context.requestPolicy?(a.delete(e.key),Promise.resolve().then(p)):(o.push(e),Promise.resolve().then(p))}},subscription:function(e,n,t){return b.executeSubscription(d.createRequest(e,n),t)},suspense:!!n.suspense}),E=g,_=N(n.exchanges),S=(c||(c=t(50206))).share(_({client:b,dispatchDebug:E,forward:O({dispatchDebug:E})})(s.source))
return(c||(c=t(50206))).publish(S),b},w=C
n.CombinedError=d.CombinedError,n.createRequest=d.createRequest,n.makeErrorResult=d.makeErrorResult,n.makeResult=d.makeResult,n.mergeResultPatch=d.mergeResultPatch,n.stringifyDocument=d.stringifyDocument,n.stringifyVariables=d.stringifyVariables,n.Client=C,n.cacheExchange=function(e){var n=e.forward,r=e.client,i=(e.dispatchDebug,new Map),l=new Map,s=function(e){return"query"===e.kind&&"network-only"!==e.context.requestPolicy&&("cache-only"===e.context.requestPolicy||i.has(e.key))}
return function(e){var f=(c||(c=t(50206))).map((function(e){var n=i.get(e.key),t=n||d.makeResult(e,{data:null})
return t=(0,u.default)({},t,{operation:y(e,{cacheOutcome:n?"hit":"miss"})}),"cache-and-network"===e.context.requestPolicy&&(t.stale=!0,E(r,e)),t}))((c||(c=t(50206))).filter((function(e){return!k(e)&&s(e)}))(e)),p=(c||(c=t(50206))).tap((function(e){var n=e.operation
if(n){var t=n.context.additionalTypenames||[]
if("subscription"!==e.operation.kind&&(t=v(e.data).concat(t)),"mutation"===e.operation.kind||"subscription"===e.operation.kind){for(var u=new Set,s=0;s<t.length;s++){var c=t[s],d=l.get(c)
d||l.set(c,d=new Set)
var f,p=(0,o.default)((0,a.h)(d))
try{var h=!1
for(p.s();!(f=p.n()).done;){var m=f.value
u.add(m)}}catch(e){p.e(e)}finally{h||(h=!0,p.f())}d.clear()}var y,g=(0,o.default)((0,a.h)(u))
try{var k=!1
for(g.s();!(y=g.n()).done;){var b=y.value
i.has(b)&&(n=i.get(b).operation,i.delete(b),E(r,n))}}catch(e){g.e(e)}finally{k||(k=!0,g.f())}}else if("query"===n.kind&&e.data){i.set(n.key,e)
for(var _=0;_<t.length;_++){var S=t[_],x=l.get(S)
x||l.set(S,x=new Set),x.add(n.key)}}}}))(n((c||(c=t(50206))).filter((function(e){return"query"!==e.kind||"cache-only"!==e.context.requestPolicy}))((c||(c=t(50206))).map((function(e){return y(e,{cacheOutcome:"miss"})}))((c||(c=t(50206))).merge([(c||(c=t(50206))).map(b)((c||(c=t(50206))).filter((function(e){return!k(e)&&!s(e)}))(e)),(c||(c=t(50206))).filter((function(e){return k(e)}))(e)])))))
return(c||(c=t(50206))).merge([f,p])}},n.composeExchanges=N,n.createClient=w,n.debugExchange=function(e){var n=e.forward
return function(e){return n(e)}},n.errorExchange=A,n.fetchExchange=function(e){var n=(void 0===e?{}:e).makeFetchBody
return function(e){var r=e.forward
return e.dispatchDebug,function(e){var i=(c||(c=t(50206))).mergeMap((function(r){var i=n?n(r):d.makeFetchBody(r),a=d.makeFetchURL(r,i),o=d.makeFetchOptions(r,i)
return(c||(c=t(50206))).takeUntil((c||(c=t(50206))).filter((function(e){return"teardown"===e.kind&&e.key===r.key}))(e))(d.makeFetchSource(r,a,o))}))((c||(c=t(50206))).filter((function(e){return"teardown"!==e.kind&&("subscription"!==e.kind||!!e.context.fetchSubscriptions)}))(e)),a=r((c||(c=t(50206))).filter((function(e){return"teardown"===e.kind||"subscription"===e.kind&&!e.context.fetchSubscriptions}))(e))
return(c||(c=t(50206))).merge([i,a])}}},n.formatDocument=p,n.gql=function(e){for(var n=new Map,i=[],a=[],o=Array.isArray(e)?e[0]:e||"",u=1;u<arguments.length;u++){var l=arguments[u]
l&&l.definitions?a.push(l):o+=l,o+=arguments[0][u]}a.unshift(d.keyDocument(o))
for(var s=0;s<a.length;s++)for(var c=0;c<a[s].definitions.length;c++){var f=a[s].definitions[c]
if(f.kind===(r||(r=t(5925))).Kind.FRAGMENT_DEFINITION){var v=f.name.value,p=d.stringifyDocument(f)
n.has(v)||(n.set(v,p),i.push(f))}else i.push(f)}return d.keyDocument({definitions:i,kind:(r||(r=t(5925))).Kind.DOCUMENT})},n.makeOperation=m,n.mapExchange=A,n.ssrExchange=function(e){void 0===e&&(e={})
var n=!!e.staleWhileRevalidate,r=!!e.includeExtensions,i={},a=[],o=function(e){a.push(e.operation.key),1===a.length&&Promise.resolve().then((function(){for(var e;e=a.shift();)i[e]=null}))},l=function(a){var l=a.client,s=a.forward
return function(a){var d=e&&"boolean"==typeof e.isClient?!!e.isClient:!l.suspense,f=s((c||(c=t(50206))).map(b)((c||(c=t(50206))).filter((function(e){return"teardown"===e.kind||!i[e.key]||!!i[e.key].hasNext||"network-only"===e.context.requestPolicy}))(a))),v=(c||(c=t(50206))).map((function(e){var t=i[e.key],a=S(e,t,r)
return n&&!x.has(e.key)&&(a.stale=!0,x.add(e.key),E(l,e)),(0,u.default)({},a,{operation:y(e,{cacheOutcome:"hit"})})}))((c||(c=t(50206))).filter((function(e){return"teardown"!==e.kind&&!!i[e.key]&&"network-only"!==e.context.requestPolicy}))(a))
return d?v=(c||(c=t(50206))).tap(o)(v):f=(c||(c=t(50206))).tap((function(e){var n=e.operation
if("mutation"!==n.kind){var t=_(e,r)
i[n.key]=t}}))(f),(c||(c=t(50206))).merge([f,v])}}
return l.restoreData=function(e){for(var n in e)null!==i[n]&&(i[n]=e[n])},l.extractData=function(){var e={}
for(var n in i)null!=i[n]&&(e[n]=i[n])
return e},e&&e.initialState&&l.restoreData(e.initialState),l},n.subscriptionExchange=function(e){var n=e.forwardSubscription,r=e.enableAllOperations,i=e.isSubscriptionOperation
return function(e){var a=e.client,o=e.forward,u=function(e){var r=n(d.makeFetchBody(e),e)
return(c||(c=t(50206))).make((function(n){var t,i,o=!1
function u(t){n.next(i=i?d.mergeResultPatch(i,t):d.makeResult(e,t))}return Promise.resolve().then((function(){o||(t=r.subscribe({complete:function(){o||(o=!0,"subscription"===e.kind&&a.reexecuteOperation(m("teardown",e,e.context)),i&&i.hasNext&&u({hasNext:!1}),n.complete())},error:function(t){Array.isArray(t)?u({errors:t}):n.next(d.makeErrorResult(e,t)),n.complete()},next:u}))})),function(){o=!0,t&&t.unsubscribe()}}))},l=i||function(e){return"subscription"===e.kind||!!r&&("query"===e.kind||"mutation"===e.kind)}
return function(e){var n=(c||(c=t(50206))).mergeMap((function(n){var r=n.key,i=(c||(c=t(50206))).filter((function(e){return"teardown"===e.kind&&e.key===r}))(e)
return(c||(c=t(50206))).takeUntil(i)(u(n))}))((c||(c=t(50206))).filter((function(e){return"teardown"!==e.kind&&l(e)}))(e)),r=o((c||(c=t(50206))).filter((function(e){return"teardown"===e.kind||!l(e)}))(e))
return(c||(c=t(50206))).merge([n,r])}}}},10550:function(e,n,t){var r,i,a,o=t(50113).default,u=o(t(35972)),l=t(32714),s=t(51804),c=o(t(93090)),d=t(34674),f=o(t(80875)),v=o(t(93920)),p=t(34278)
Object.defineProperty(n,"__esModule",{value:!0})
var h=!1,m=function(e){if(!h&&"function"==typeof Set)return e&&Array.isArray(e)?new Set(e):new Set
var n=Object.create(null),t=0,r={add:function(e){var r=e+""
return Object.prototype.hasOwnProperty.call(n,r)||t++,n[r]=e,this},clear:function(){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&delete n[e]
t=0},delete:function(e){var r=e+""
return!!Object.prototype.hasOwnProperty.call(n,r)&&(delete n[r],t--,!0)},entries:function(){return Object.keys(n).map((function(e){return[n[e],n[e]]}))},has:function(e){return Object.prototype.hasOwnProperty.call(n,e+"")},keys:function(){return Object.keys(n).map((function(e){return n[e]}))},get size(){return t},values:function(){return Object.keys(n).map((function(e){return n[e]}))}}
if(e&&Array.isArray(e))for(var i=0,a=e.length;i<a;i++)r.add(e[i])
return r},y=function(e){if(!h&&"function"==typeof Map)return e&&Array.isArray(e)?new Map(e):new Map
var n=Object.create(null),t=0,r={clear:function(){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&delete n[e]
t=0},delete:function(e){var r=e+""
return!!Object.prototype.hasOwnProperty.call(n,r)&&(delete n[r],t--,!0)},entries:function(){return Object.keys(n).map((function(e){return[e,n[e]]}))},get:function(e){return n[e+""]},has:function(e){return Object.prototype.hasOwnProperty.call(n,e+"")},keys:function(){return Object.keys(n)},set:function(e,r){var i=e+""
return Object.prototype.hasOwnProperty.call(n,i)||t++,n[i]=r,this},get size(){return t},values:function(){return Object.keys(n).map((function(e){return n[e]}))}}
if(e&&Array.isArray(e))for(var i=0,a=e.length;i<a;i++){var o=e[i]
o&&o.length>=2&&r.set(o[0],o[1])}return r}
function g(e,n){if(!(e&&n&&e.indexOf("__is")>-1))return!1
if(!$)return!0
var t=Se("client:__type:"+n,e)
return null==t||t}function k(e,n,t){Ne("client:__type:"+n,e,t)}function b(e,n,t){if(!e){var r=new Error((n||"Minfied Error #"+t+"\n")+"\nhttps://bit.ly/2XbVrpR#"+t)
throw r.name="Graphcache Error",r}}m()
var E={},_=function(e){return e._directives||E},S=function(e){return e.name.value},x=function(e){return e.typeCondition.name.value},N=function(e){return e.alias?e.alias.value:e.name.value},A=[],O=function(e){return e.selectionSet?e.selectionSet.selections:A},C=function(e){return e.typeCondition?e.typeCondition.name.value:null},w=function(e,n){var r=null
if(e.arguments)for(var a=0,o=e.arguments.length;a<o;a++){var u=e.arguments[a],l=(i||(i=t(5925))).valueFromASTUntyped(u.value,n)
null!=l&&(r||(r={}),r[S(u)]=l)}return r},T=function(e,n){if(n&&e.variableDefinitions){for(var t={},r=0,i=e.variableDefinitions.length;r<i;r++){var a=S(e.variableDefinitions[r].variable)
t[a]=n[a]}return t}},I=function(e,n){var r={}
if(!n)return r
if(e.variableDefinitions)for(var a=0,o=e.variableDefinitions.length;a<o;a++){var u=e.variableDefinitions[a],l=S(u.variable)
r[l]=void 0===n[l]&&u.defaultValue?(i||(i=t(5925))).valueFromASTUntyped(u.defaultValue,n):n[l]}for(var s in n)s in r||(r[s]=n[s])
return r}
function R(e){for(var n=0;n<e.definitions.length;n++)if(e.definitions[n].kind===(i||(i=t(5925))).Kind.OPERATION_DEFINITION)return e.definitions[n]
b(!1,"",1)}var P=function(e){for(var n={},r=0;r<e.definitions.length;r++){var a=e.definitions[r]
a.kind===(i||(i=t(5925))).Kind.FRAGMENT_DEFINITION&&(n[S(a)]=a)}return n},L=function(e,n){var r=_(e)
if(r.include||r.skip)for(var a in r){var o=r[a]
if(o&&("include"===a||"skip"===a)&&o.arguments&&o.arguments[0]&&"if"===S(o.arguments[0])){var u=(i||(i=t(5925))).valueFromASTUntyped(o.arguments[0].value,n)
return"include"===a?!!u:!u}}return!0},D=function(e){var n=_(e),t=n.optional
return!n.required&&(!!t||void 0)},F=function(e){var n=e.__schema,t=y(),r=function(e){var n
return function(){if(!n){n={}
for(var t=0;t<e.length;t++)n[e[t].name]=e[t]}return n}},i=function(e){switch(e.kind){case"OBJECT":case"INTERFACE":return{fields:r(e.fields.map((function(e){return{args:r(e.args),name:e.name,type:e.type}}))),interfaces:r(e.interfaces||[]),kind:e.kind,name:e.name}
case"UNION":return{kind:e.kind,name:e.name,types:r(e.possibleTypes||[])}}},a={isSubType:function(e,n){var r=t.get(e),i=t.get(n)
return!!(r&&i&&("UNION"===r.kind?r.types()[n]:"OBJECT"!==r.kind&&"OBJECT"===i.kind?i.interfaces()[e]:e===n))},mutation:n.mutationType?n.mutationType.name:null,query:n.queryType?n.queryType.name:null,subscription:n.subscriptionType?n.subscriptionType.name:null,types:void 0}
if(n.types){a.types=t
for(var o=0;o<n.types.length;o++){var u=n.types[o]
if(u&&u.name){var l=i(u)
l&&t.set(u.name,l)}}}return a},q=function(e,n,t,r){var i=V(e,n,t,r)
return!!i&&"NON_NULL"!==i.type.kind},M=function(e,n,t,r){var i=V(e,n,t,r)
if(!i)return!1
var a="NON_NULL"===i.type.kind?i.type.ofType:i.type
return"LIST"===a.kind&&"NON_NULL"!==a.ofType.kind},K=function(e,n,t){if(!t)return!1
var r=C(n)
return!r||t===r||(e.types.has(r)&&"OBJECT"===e.types.get(r).kind?r===t:(j(e,r),G(e,t),e.isSubType(r,t)))},V=function(e,n,t,r){if(0!==t.indexOf("__")&&0!==n.indexOf("__"))return G(e,n),e.types.get(n).fields()[t]}
function G(e,n){b(e.types.has(n)&&"OBJECT"===e.types.get(n).kind,"",3)}function j(e,n){b(e.types.has(n)&&("INTERFACE"===e.types.get(n).kind||"UNION"===e.types.get(n).kind),"",5)}var U=y(),B=0,Q=function(e,n){if(!n)return e
var i=e+"("+(r||(r=t(47618))).stringifyVariables(n)+")",a=U.get(i)
if(a)return a
if((0,p.h)(e,"connection")||n&&("first"in n||"last"in n||"after"in n||"before"in n))return U.set(i,i),i
var o="_k"+B++
return U.set(i,o),o}
function H(e,n){return e+"."+n}var X=function(e){var n=e.indexOf("(")
return n>-1?{arguments:JSON.parse(e.slice(n+1,-1)),fieldKey:e,fieldName:e.slice(0,n)}:{arguments:null,fieldKey:e,fieldName:e}},J=function(e,n){return e.replace(/\./g,"%2e")+"."+n},z=function(e){var n=e.indexOf(".")
return{entityKey:e.slice(0,n).replace(/%2e/g,"."),fieldKey:e.slice(n+1)}},W=null,Y=null,$=null,Z=null,ee=null,ne=null,te=!1,re=!1,ie=!1,ae=!1
function oe(e,n){var t
if(e){if(W.has(e))return e
t=Y.get(e)}return null==t&&(t=n?[]:{}),e&&Y.set(e,t),W.add(t),t}var ue=function(e){return!!e&&W.has(e)},le=function(e,n,t,r,i,a){var o,u
W=new WeakSet,Y=new WeakMap,ee=e,$=n
var l="write"===e&&!r&&!1===(null==a||null==(o=a.context)?void 0:o.notifyOnWrite)||"read"===e&&!1===(null==a||null==(u=a.context)?void 0:u.subscribe)
ne=l?null:m(),re=!!r,te=!!i,ie=!(!a||!a.context||!0!==a.context.isPaginationRequest),ae=!(!a||!a.context||!0!==a.context.treatNullDataAsError),n.disableLayers?Z=null:t?"read"===ee?Z=t:r||n.hydrating||n.optimisticOrder.length>1?(r||n.commutativeKeys.has(t)?r&&(-1===n.optimisticOrder.indexOf(t)||n.commutativeKeys.has(t)||n.optimisticOrder.splice(n.optimisticOrder.indexOf(t),1),n.commutativeKeys.delete(t)):we(n,t),Z=t,Ie(n,t)):(Z=null,Pe(n,t)):Z=null},se=function(){var e=$,n=Z
if(re=!1,Z=null,!e.hydrating&&n&&e.optimisticOrder.indexOf(n)>-1)for(var t=e.optimisticOrder.length;--t>=0&&e.dirtyKeys.has(e.optimisticOrder[t])&&e.commutativeKeys.has(e.optimisticOrder[t]);)Le(e.optimisticOrder[t])
W=null,Y=null,ee=null,$=null,ne=null,ie=!1,ae=!1},ce=function(e,n,t){n&&!t&&e.deferredKeys.delete(n),le("write",e,n,t),se()}
function de(e){e.gcScheduler((function(n){le("read",e,null),n($),qe(),se(),e.defer=!1}))}m()
var fe=function(){var e=Object.create(null),n=0
return{clear:function(){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&delete e[t]
n=0},delete:function(t){return!!Object.prototype.hasOwnProperty.call(e,t)&&(delete e[t],n--,!0)},entries:function(){return Object.keys(e).map((function(n){return[n,e[n]]}))},get:function(n){return e[n]},has:function(n){return Object.prototype.hasOwnProperty.call(e,n)},keys:function(){return Object.keys(e)},set:function(t,r){return Object.prototype.hasOwnProperty.call(e,t)||n++,e[t]=r,this},get size(){return n},values:function(){return Object.keys(e).map((function(n){return e[n]}))}}},ve=function(e,n){return{abstractToConcreteMap:y(),commutativeKeys:m(),defer:!1,deferredKeys:m(),dirtyKeys:m(),disableLayers:!!n,gc:m(),hydrating:!1,links:{base:fe(),optimistic:y()},optimisticOrder:[],persist:m(),queryRootKey:e,records:{base:fe(),optimistic:y()},refCount:y(),storage:null,types:y()}},pe=function(e,n,t,r){var i=Z?e.optimistic.get(Z):e.base,a=i.get(n)
void 0===a&&i.set(n,a=Object.create(null)),void 0!==r||Z?a[t]=r:delete a[t]},he=function(e,n,t){for(var r,i=!re&&"read"===ee&&Z&&$.commutativeKeys.has(Z),a=0,o=$.optimisticOrder.length;a<o;a++){var u=$.optimisticOrder[a],l=e.optimistic.get(u)
if(i=i&&u!==Z,l&&(!i||!$.commutativeKeys.has(u))&&(!re||"write"===ee||$.commutativeKeys.has(u))&&void 0!==(r=l.get(n))&&t in r)return r[t]}return void 0!==(r=e.base.get(n))?r[t]:void 0}
function me(e){return $.refCount.get(e)||0}var ye=function(e,n){var t=me(e),r=t+n>0?t+n:0
$.refCount.set(e,r),r?!t&&r&&$.gc.delete(e):$.gc.add(e)},ge=function(e,n){if(Array.isArray(e))for(var t=0,r=e.length;t<r;t++)ge(e[t],n)
else"string"==typeof e&&ye(e,n)},ke=function(e,n,t){if(void 0!==t)for(var r in t)n.has(r)||(e.push(X(r)),n.add(r))},be=function(e,n,t,r){ke(e,n,r.base.get(t))
for(var i=0,a=$.optimisticOrder.length;i<a;i++){var o=r.optimistic.get($.optimisticOrder[i])
void 0!==o&&ke(e,n,o.get(t))}}
function Ee(e){return-1!==e.indexOf(".__connection:")}var _e=function(e,n){if(ne&&e!==$.queryRootKey)if(-1===e.indexOf("."))ne.add(e)
else if("read"===ee&&Ee(e)){ne.add(e)
var t=e.slice(0,e.indexOf("."))
t&&t!==$.queryRootKey&&ne.add(t)}else if("write"===ee){var r=e.indexOf("."),i=e.slice(0,r)
i&&i!==$.queryRootKey&&ne.add(i)}}
function Se(e,n){return"read"===ee&&_e(e,n),he($.records,e,n)}function xe(e,n){return"read"===ee&&_e(e,n),he($.links,e,n)}function Ne(e,n,t){Ae(he($.records,e,n),t)||(_e(e,n),Oe(e,n)),pe($.records,e,n,t)}function Ae(e,n){return(0,f.default)(e)===(0,f.default)(n)&&e===n&&(!Array.isArray(e)||!Array.isArray(n)||e.length===n.length&&!e.some((function(e,t){return e!==n[t]})))}var Oe=function(e,n){!re&&$.storage&&$.persist.add(J(e,n))}
function Ce(e,n,t){var r,i=Z?$.links.optimistic.get(Z):$.links.base
if(!(Z||null!=(r=$)&&r.disableRefCounting)){var a=i&&i.get(e)
ge(a&&a[n],-1),ge(t,1)}Ae(he($.links,e,n),t)||(_e(e,n),Oe(e,n)),pe($.links,e,n,t)}function we(e,n,t){if(!e.disableLayers){var r=e.optimisticOrder.indexOf(n)
if(r>-1&&e.optimisticOrder.splice(r,1),t)for(e.deferredKeys.add(n),r=r>-1?r:0;r<e.optimisticOrder.length&&!e.deferredKeys.has(e.optimisticOrder[r])&&(!e.dirtyKeys.has(e.optimisticOrder[r])||!e.commutativeKeys.has(e.optimisticOrder[r]));r++);else e.deferredKeys.delete(n),r>-1&&!e.commutativeKeys.has(n)&&Re(e,n),r=0
e.optimisticOrder.splice(r,0,n),e.commutativeKeys.add(n)}}var Te=function(e,n){return e.commutativeKeys.has(n)||e.optimisticOrder.indexOf(n)>-1}
function Ie(e,n){e.disableLayers||(-1===e.optimisticOrder.indexOf(n)&&e.optimisticOrder.unshift(n),e.dirtyKeys.has(n)||(e.dirtyKeys.add(n),e.links.optimistic.set(n,fe()),e.records.optimistic.set(n,fe())))}function Re(e,n){e.disableLayers||e.dirtyKeys.has(n)&&(e.dirtyKeys.delete(n),e.records.optimistic.delete(n),e.links.optimistic.delete(n),e.deferredKeys.delete(n))}function Pe(e,n){if(!e.disableLayers){var t=e.optimisticOrder.indexOf(n)
t>-1&&(e.optimisticOrder.splice(t,1),e.commutativeKeys.delete(n)),Re(e,n)}}function Le(e){var n=ne
ne=m(),ee="write"
var t=$.links.optimistic.get(e)
if(t){var r,i=(0,v.default)((0,d.h)(t))
try{var a=!1
for(i.s();!(r=i.n()).done;){var o=r.value,u=o[0],l=o[1]
for(var s in l)Ce(u,s,l[s])}}catch(e){i.e(e)}finally{a||(a=!0,i.f())}}var c=$.records.optimistic.get(e)
if(c){var f,p=(0,v.default)((0,d.h)(c))
try{var h=!1
for(p.s();!(f=p.n()).done;){var y=f.value,g=y[0],k=y[1]
for(var b in k)Ne(g,b,k[b])}}catch(e){p.e(e)}finally{h||(h=!0,p.f())}}ne=n,Pe($,e)}function De(e){var n=$,t=n.links,r=n.records,i=[],a=m()
return _e(e),be(i,a,e,t),be(i,a,e,r),i}var Fe,qe=function(){if($.storage){re=!0,ee="read"
var e,n={},i=(0,v.default)((0,s.h)($.persist))
try{var a=!1
for(i.s();!(e=i.n()).done;){var o=e.value,u=z(o),l=u.entityKey,c=u.fieldKey,d=void 0
if(void 0!==(d=xe(l,c)))n[o]=":"+(r||(r=t(47618))).stringifyVariables(d)
else if(void 0!==(d=Se(l,c))){var f=(r||(r=t(47618))).stringifyVariables(d)
n[o]=f}else n[o]=void 0}}catch(e){i.e(e)}finally{a||(a=!0,i.f())}re=!1,$.storage.writeData(n),$.persist.clear()}},Me=function(e,n,t){for(var r in le("write",e,null),t){var i=t[r]
if(void 0!==i){var a=z(r),o=a.entityKey,u=a.fieldKey
if(":"===i[0]){if(void 0===xe(o,u)){var l=i.slice(1)
Ce(o,u,JSON.parse(l)),l.indexOf("null")>-1&&Ne(o,u,JSON.parse(l))}}else void 0===Se(o,u)&&Ne(o,u,JSON.parse(i))}}e.storage=n,e.hydrating=!1,se()},Ke=null,Ve=!1,Ge=function(e){return e.__internal.path.length>0&&e.__internal.errorMap?e.__internal.errorMap[e.__internal.path.join(".")]:void 0}
function je(e,n,t,r,i,a){var o={__internal:{errorMap:void 0,path:[]},error:void 0,fieldName:"",fragments:t,hasNext:!1,optimistic:re,parent:{__typename:r},parentFieldKey:"",parentKey:i,parentTypeName:r,partial:!1,store:e,variables:n}
if(a&&a.graphQLErrors)for(var u=0;u<a.graphQLErrors.length;u++){var l=a.graphQLErrors[u]
l.path&&l.path.length&&(o.__internal.errorMap||(o.__internal.errorMap=Object.create(null)),o.__internal.errorMap[l.path.join(".")]=l)}return o}var Ue=function(e,n,t,r,i,a){Ke=e,e.parent=n,e.parentTypeName=t,e.parentKey=r,e.parentFieldKey=i,e.fieldName=a,e.error=Ge(e)},Be=function(){function e(e,n,t,r,i,a){this.typename=e,this.entityKey=n,this.ctx=a,this.stack=[{defer:t,index:0,optional:r,selectionSet:i}]}return e.prototype.next=function(e){for(;this.stack.length>0;){for(var n=this.stack[this.stack.length-1];n.index<n.selectionSet.length;){var r=n.selectionSet[n.index++]
if(L(r,this.ctx.variables))if(r.kind!==(i||(i=t(5925))).Kind.FIELD){var a=r.kind!==(i||(i=t(5925))).Kind.INLINE_FRAGMENT?this.ctx.fragments[S(r)]:r
if(a){var o=!a.typeCondition||(this.ctx.store.schema?K(this.ctx.store.schema,a,this.typename):"read"===ee&&Qe(a.typeCondition.name.value,this.typename)),u="write"===ee&&!this.ctx.store.schema&&a.typeCondition&&0===a.typeCondition.name.value.indexOf("__is"),l=!1
if(u&&e){var s=a.typeCondition.name.value;(l=e.hasOwnProperty(s))?k(s,this.typename,!0):!0===Se("client:__type:"+this.typename,s)?l=!0:k(s,this.typename,!1)}var c=!u&&a.typeCondition?a.typeCondition.name.value:null,d=!c||c===this.typename
if(o||"write"===ee&&!this.ctx.store.schema&&d&&(!u||l)){var f=D(r)
this.stack.push(n={defer:n.defer,index:0,optional:void 0!==f?f:n.optional,selectionSet:O(a)})}}}else if("write"===ee||!r._generated)return Ve=n.defer,Fe=n.optional,r}this.stack.pop()}},e}(),Qe=function(e,n){return!!n&&(e===n||!!g(e,n)||void 0)},He=function(e){return null==e?null:e},Xe=function(e,n){if(!n)return n||null
if(Array.isArray(n)){for(var t=Array(n.length),r=0,i=t.length;r<i;r++)t[r]=Xe(e,n[r])
return t}return e.keyOfEntity(n)},Je=function(e,n,i,a,o){var u=(r||(r=t(47618))).formatDocument(n.query),l=R(u),s=e.rootFields[l.operation],c=O(l),d=je(e,I(l,n.variables),P(u),s,s,a)
d.partialPolicy=null==o?void 0:o.partialPolicy
var f=s!==d.store.rootFields.query?ze(d,s,c,i||oe()):Ze(d,s,c,i||oe())
return{data:f||null,dependencies:ne,hasNext:d.hasNext,partial:d.partial||!f}},ze=function(e,n,t,r){if("string"!=typeof(e.store.rootNames[n]?n:r.__typename))return r
for(var i,a=new Be(n,n,!1,void 0,t,e),o=te,u=oe(r);i=a.next();){var l,s=N(i),c=r[s]
e.__internal.path.push(s),l=i.selectionSet&&null!==c?We(e,O(i),He(c)):c,o=o||l!==c,void 0!==l&&(u[s]=l),e.__internal.path.pop()}return o?u:r},We=function(e,n,t){if(Array.isArray(t)){for(var r=Array(t.length),i=te,a=0,o=t.length;a<o;a++)e.__internal.path.push(a),r[a]=We(e,n,t[a]),i=i||r[a]!==t[a],e.__internal.path.pop()
return i?r:t}if(null===t)return null
var u=e.store.keyOfEntity(t)
return null!==u?Ze(e,u,n,t)||null:ze(e,t.__typename,n,t)},Ye=function(e,n,t,r,i){var a,o=P(n)
if(i){if(!(a=o[i]))return null}else if(!(a=o[Object.keys(o)[0]]))return null
var u=x(a)
"string"==typeof t||t.__typename||(t.__typename=u)
var l=e.keyOfEntity(t)
if(!l)return null
var s=je(e,r||{},o,u,l,void 0)
return Ze(s,l,O(a),oe())||null}
function $e(e,n,t,r){var i=r.store.resolvers[n],a=i&&i[t]
for(var o in e){var u=e[o]
if(u&&"include"!==o&&"skip"!==o&&r.store.directives[o])return r.store.directives[o](w(u,r.variables))}return a}var Ze=function(e,n,t,r,i){var a=e.store,o=n===a.rootFields.query,u=i&&a.keyOfEntity(i)||n,l=o?n:Se(u,"__typename")||i&&i.__typename
if("string"==typeof l&&(!i||l===i.__typename)){for(var s,d=new Be(l,u,!1,void 0,t,e),v=!1,p=!1,h=te,m=e.partial,y=oe(r);void 0!==(s=d.next());){var g,k=S(s),b=w(s,e.variables),E=N(s),x=_(s),A=$e(x,l,k,e),C=Q(k,b),T=H(u,C),I=Se(u,C)
i&&(g=void 0!==i[C]?i[C]:i[k]),e.__internal.path.push(E)
var R=void 0
if("__typename"===k)R=l
else if(void 0!==g&&void 0===s.selectionSet)R=g
else if("read"===ee&&A){var P,L=y
if(void 0===s.selectionSet&&void 0!==I&&(L=(0,c.default)({},y,((P={})[E]=I,P[k]=I,P))),Ue(e,L,l,u,C,k),R=A(L,b||{},a,e),s.selectionSet&&(R=en(e,l,k,T,O(s),void 0!==y[E]?y[E]:r[E],R,ue(r))),a.schema&&null===R&&!q(a.schema,l,k,e.store.logger))return}else if(s.selectionSet)if(void 0!==g)R=en(e,l,k,T,O(s),void 0!==y[E]?y[E]:r[E],g,ue(r))
else{var D
void 0!==(D=xe(u,C))?R=nn(e,D,l,k,O(s),void 0!==y[E]?y[E]:r[E],ue(r)):"object"===(0,f.default)(I)&&null!==I&&(R=I)}else R=I
if(!Ve&&void 0===R&&(e.partialPolicy||x.optional||Fe&&!x.required||Ge(e)||!x.required&&a.schema&&q(a.schema,l,k,e.store.logger))?(e.partial=!0,e.store.logger("debug",'Got value "undefined" for optional field "'+k+'"'+(b?" with args "+JSON.stringify(b):"")+' on entity "'+u+'"'+(e.__internal.path.length>0?" at path "+e.__internal.path.join("."):"")),R=null):null!==R||!x.required&&!1!==Fe?v=v||"__typename"!==k:(e.store.logger,R=void 0),e.__internal.path.pop(),h=h||R!==r[E],void 0!==R)y[E]=R
else{if(!Ve)return e.store.logger,void(e.partial=m)
p=!0}}return e.partial=e.partial||m,e.hasNext=e.hasNext||p,o&&e.partial&&!v?void 0:h?y:r}},en=function(e,n,t,r,i,a,o,u){if(Array.isArray(o)){for(var l=e.store,s=!!l.schema&&M(l.schema,n,t,e.store.logger),c=e.partial,d=oe(a,!0),f=te||!Array.isArray(a)||o.length!==a.length,v=0,p=o.length;v<p;v++){e.__internal.path.push(v)
var h=en(e,n,t,H(r,""+v),i,null!=a?a[v]:void 0,o[v],u)
if(e.__internal.path.pop(),void 0===h&&!s)return void(e.partial=c)
e.partial=e.partial||void 0===h&&s,d[v]=null!=h?h:null,f=f||d[v]!==a[v]}return f?d:a}if(null==o)return o
if(u&&null===a)return null
if(tn(o)){var m=a||oe(a)
return"string"==typeof o?Ze(e,o,i,m):Ze(e,r,i,m,o)}},nn=function(e,n,t,r,i,a,o){if(Array.isArray(n)){for(var u=e.store,l=!!u.schema&&M(u.schema,t,r,e.store.logger),s=oe(a,!0),c=e.partial,d=te||!Array.isArray(a)||n.length!==a.length,f=0,v=n.length;f<v;f++){e.__internal.path.push(f)
var p=nn(e,n[f],t,r,i,null!=a?a[f]:void 0,o)
if(e.__internal.path.pop(),void 0===p&&!l)return void(e.partial=c)
e.partial=e.partial||void 0===p&&l,s[f]=p||null,d=d||s[f]!==a[f]}return d?s:a}return null===n||null===a&&o?null:Ze(e,n,i,a||oe(a))},tn=function(e){return"string"==typeof e||"object"===(0,f.default)(e)&&"string"==typeof e.__typename},rn=function(e,n,t){for(var r=n?[{fieldKey:Q(n,t)}]:De(e),i=0,a=r.length;i<a;i++){var o=r[i].fieldKey
void 0!==xe(e,o)?Ce(e,o,void 0):Ne(e,o,void 0)}},an=function(e,n,i,a){var o=(r||(r=t(47618))).formatDocument(n.query),u=R(o),l={data:i||oe(),dependencies:ne},s=e.rootFields[u.operation],c=je(e,I(u,n.variables),P(o),s,s,a)
return un(c,s,O(u),l.data),l},on=function(e,n,t,r,i){var a,o=P(n)
if(i){if(!(a=o[i]))return null}else if(!(a=o[Object.keys(o)[0]]))return null
var u=x(a),l=(0,c.default)({__typename:u},t),s=e.keyOfEntity(l)
if(s){var d=je(e,r||{},o,u,s,void 0)
un(d,s,O(a),l)}},un=function(e,n,t,r,i){var a=e.store.rootNames[n]||"query",o=!!e.store.rootNames[n],u=o?n:r.__typename||i
if(!u&&n&&e.optimistic&&(u=Se(n,"__typename")),u){!o&&n&&Ne(n,"__typename",u)
for(var l,s=e.store.updates[u],c=new Be(u,n||u,!1,void 0,t,e);l=c.next(r);){var d=S(l),f=w(l,e.variables),v=Q(d,f),p=N(l),h=r[e.optimistic?d:p]
if(!("__typename"===d||void 0===h&&(Ve||e.optimistic&&"query"===a))){e.__internal.path.push(p)
var m=void 0
if(e.optimistic&&"mutation"===a){if(!(m=e.store.optimisticMutations[d]))continue}else e.optimistic&&"function"==typeof h&&(m=h)
if(m&&(Ue(e,r,u,n||u,v,d),h=He(m(f||{},e.store,e))),void 0!==h){if(l.selectionSet)if(n&&"query"===a){var y=H(n,v),g=pn(e,O(l),He(h),y,e.optimistic?xe(n||u,v):void 0,l)
e.store.skipConnectionPageLinks&&ie&&ln(l)||Ce(n||u,v,g)}else pn(e,O(l),He(h),void 0,void 0,l)
else n&&"query"===a&&Ne(n||u,v,null===h&&Ge(e)?void 0:h)
var k=s&&s[d]
k&&(Ue(e,r,u,n||u,v,d),r[d]=h,k(r,f||{},e.store,e)),e.__internal.path.pop()}}}}}
function ln(e){var n=e&&_(e),t=n&&n.connection
if(!t)return!1
for(var r=t._all||[t],i=0;i<r.length;i++){var a=r[i].arguments
if(a)for(var o=0;o<a.length;o++)if(a[o]&&a[o].name&&"key"===a[o].name.value&&a[o].value&&a[o].value.value)return!0}return!1}var sn={after:!0,afterCursor:!0,before:!0,count:!0,cursor:!0,first:!0,last:!0}
function cn(e){if(!e)return null
var n=null
for(var t in e)sn[t]||(n||(n={}),n[t]=e[t])
return n}function dn(e,n,t){var r=e+".__connection:"+n
if(t){var i=Object.keys(t).sort()
if(i.length>0)return r+":"+i.map((function(e){return e+":"+JSON.stringify(t[e])})).join(",")}return r}function fn(e,n,t,r){if(!n||0===n.length)return t
if(!t||0===t.length)return n
for(var i,a=m(),o=0;o<n.length;o++){var u=n[o]
if(u){var l=xe(u,"node")
l&&a.add(l)}}if(r&&null!=r.after){i=n.slice()
for(var s=0;s<t.length;s++){var c=t[s]
if(c){var d=xe(c,"node")
d&&!a.has(d)&&(a.add(d),i.push(c))}}}else if(r&&null!=r.before){i=[]
for(var f=0;f<t.length;f++){var v=t[f]
if(v){var p=xe(v,"node")
p&&!a.has(p)&&(a.add(p),i.push(v))}}for(var h=0;h<n.length;h++)i.push(n[h])}else i=t
return i}function vn(e,n,t){if(!e||0===e.length)return n
if(!n||0===n.length)return e
for(var r,i=m(),a=0;a<e.length;a++){var o=e[a]
o&&i.add(o)}if(t&&null!=t.after){r=e.slice()
for(var u=0;u<n.length;u++){var l=n[u]
l&&!i.has(l)&&(i.add(l),r.push(l))}}else if(t&&null!=t.before){r=[]
for(var s=0;s<n.length;s++){var c=n[s]
c&&!i.has(c)&&(i.add(c),r.push(c))}for(var d=0;d<e.length;d++)r.push(e[d])}else r=n
return r}function pn(e,n,t,r,i,a){if(Array.isArray(t)){for(var o=Array(t.length),u=0,l=t.length;u<l;u++){e.__internal.path.push(u)
var s=r?H(r,""+u):void 0,c=null!=i?i[u]:void 0,d=pn(e,n,t[u],s,c,a)
o[u]=d,e.__internal.path.pop()}return o}if(null===t){if(ae&&ie&&a&&r){var f=r.split(".")[0],v=cn(w(a,e.variables)),p=Q(S(a),v)
f&&p&&Ce(f,p,null)
var h=a&&_(a),m=h&&h.connection
if(m&&f)for(var y=$&&$.records&&$.records.base,g=$&&$.links&&$.links.base,k=m._all||[m],b=0;b<k.length;b++){var E=k[b]
if(E.arguments)for(var x=0;x<E.arguments.length;x++){var N=E.arguments[x]
if(N&&N.name&&"key"===N.name.value&&N.value&&N.value.value){var A=dn(f,N.value.value,v)
y&&y.delete(A),g&&g.delete(A)}}}return null}return Ge(e)?void 0:null}var O=e.store.keyOfEntity(t,a&&a.typeCondition&&a.typeCondition.name.value)||("string"==typeof i?i:null),C=(t.__typename,a&&_(a)),T=C&&C.connection,I=[]
if(T)for(var R=T._all||[T],P=0;P<R.length;P++){var L=R[P]
if(L.arguments)for(var D=0;D<L.arguments.length;D++){var F=L.arguments[D]
if(F&&F.name&&"key"===F.name.value&&F.value&&F.value.value){var q=F.value.value;-1===I.indexOf(q)&&I.push(q)}}}var M=O||r
if(un(e,M,n,t,a&&a.typeCondition&&a.typeCondition.name.value),f=r?r.split(".")[0]:null,I.length>0&&f)for(var K=w(a,e.variables),V=(v=cn(K),ie),G=Se(M,"__typename"),j=xe(M,"edges"),U=xe(M,"nodes"),B=xe(M,"pageInfo"),X=Se(M,"totalCount"),J=0;J<I.length;J++){var z,W,Y=I[J],Z=dn(f,Y,v),ee=xe(Z,"edges"),ne=xe(Z,"nodes")
if(Se(Z,"__typename")&&V?(z=ee?fn(0,ee,j,K):j,W=ne?vn(ne,U,K):U):(z=j,W=U),G&&Ne(Z,"__typename",G),z&&Ce(Z,"edges",z),W&&Ce(Z,"nodes",W),B){var te=xe(Z,"pageInfo")
if(te&&V){if(K.after){var re=Se(B,"endCursor"),oe=Se(B,"hasNextPage")
void 0!==re&&Ne(te,"endCursor",re),void 0!==oe&&Ne(te,"hasNextPage",oe)}else if(K.before){var ue=Se(B,"startCursor"),le=Se(B,"hasPreviousPage")
void 0!==ue&&Ne(te,"startCursor",ue),void 0!==le&&Ne(te,"hasPreviousPage",le)}}else Ce(Z,"pageInfo",B)}void 0!==X&&Ne(Z,"totalCount",X),Ne(Z,"__connectionKey",Y)}return M||null}var hn=function(){function e(e,n,t){var r
e||(e={}),this.logger=e.logger,this.resolvers=e.resolvers||{},this.directives=e.directives||{},this.optimisticMutations=e.optimistic||{},this.keys=e.keys||{},this.globalIDs=Array.isArray(e.globalIDs)?m(e.globalIDs):!!e.globalIDs,this.gcScheduler=e.gcScheduler,this.disableRefCounting=e.disableRefCounting,this.skipConnectionPageLinks=!!e.skipConnectionPageLinks
var i="Query",a="Mutation",o="Subscription"
if(e.schema){var u=F(e.schema)
i=u.query||i,a=u.mutation||a,o=u.subscription||o,u.types&&(this.schema=u)}this.updates=e.updates||{},this.rootFields={mutation:a,query:i,subscription:o},this.rootNames=((r={})[i]="query",r[a]="mutation",r[o]="subscription",r),this.data=ve(i,e.disableLayers),this.data.deps=n,this.data.operations=t,this.data.gcScheduler=this.gcScheduler,this.data.disableRefCounting=this.disableRefCounting,this.schema}var n=e.prototype
return n.keyOfField=function(e,n){return Q(e,n)},n.keyOfEntity=function(e,n){var t=e&&e.__typename||n
if(Ke&&e===Ke.parent)return Ke.parentKey
if(null==e||"string"==typeof e)return e||null
if(!t)return null
if(this.rootNames[t])return t
var r=null,i=this.keys[t]
return"function"==typeof this.keys&&(i=(0,s.s)(this)),i?r=i(e,t)||null:null!=e._id?r=""+e._id:null!=e.id&&(r=""+e.id),!0===this.globalIDs||this.globalIDs&&this.globalIDs.has(t)||!r?r:t+":"+r},n.resolve=function(e,n,t){var r=this.keyOfEntity(e)
if(r){var i=Q(n,t),a=Se(r,i)
if(void 0!==a)return a
var o=xe(r,i)
return void 0!==o&&(o=Xe(this,o)),o}},n.invalidate=function(e,n,t){var r=this.keyOfEntity(e)
b(r,"",19),rn(r,n,t)},n.inspectFields=function(e){var n=this.keyOfEntity(e)
return n?De(n):[]},n.updateQuery=function(e,n){var i=(r||(r=t(47618))).createRequest(e.query,e.variables),a=n(this.readQuery(i))
null!==a&&an(this,i,a,void 0)},n.readQuery=function(e){var n=(r||(r=t(47618))).createRequest(e.query,e.variables)
return Je(this,n,void 0,void 0).data},n.readFragment=function(e,n,i,a){return Ye(this,(r||(r=t(47618))).formatDocument(e),n,i,a)},n.writeFragment=function(e,n,i,a){on(this,(r||(r=t(47618))).formatDocument(e),n,i,a)},n.link=function(e,n){var t=2==(arguments.length<=2?0:arguments.length-2)?arguments.length<=2?void 0:arguments[2]:null,r=2==(arguments.length<=2?0:arguments.length-2)?arguments.length<=3?void 0:arguments[3]:arguments.length<=2?void 0:arguments[2],i=this.keyOfEntity(e)
i&&Ce(i,Q(n,t),Xe(this,r))},e}(),mn=function(e,n){return(r||(r=t(47618))).makeOperation(e.kind,e,(0,c.default)({},e.context,{meta:(0,c.default)({},e.context.meta,n)}))},yn=function(e,n){return(r||(r=t(47618))).makeOperation(e.kind,e,(0,c.default)({},e.context,{requestPolicy:n}))},gn=function(e){return function(n){var i=n.forward,o=n.client
n.dispatchDebug,e&&Object.prototype.hasOwnProperty.call(e,"optimizeForJSC")&&(h=!0===e.optimizeForJSC,U=y())
var u=y(),s=[],d=y(),f=m(),p=m(),g=y(),k=y(),b=m(),E=m(),_=new hn(e,g,d)
function S(e){var n=k.get(e)
if(n){var t,r=(0,v.default)((0,l.h)(n))
try{var i=!1
for(r.s();!(t=r.n()).done;){var a=t.value,o=g.get(a)
o&&(o.delete(e),0===o.size&&g.delete(a))}}catch(e){r.e(e)}finally{i||(i=!0,r.f())}n.clear()}}function x(e){S(e),k.delete(e)}e&&e.storage&&(_.data.hydrating=!0,e.syncHydrate?(Me(_.data,e.storage,e.storage.readData()),e.storage.onCacheHydrated&&e.storage.onCacheHydrated()):e.storage.readData().then((function(n){Me(_.data,e.storage,n),e.storage.onCacheHydrated&&e.storage.onCacheHydrated()})))
var N=function(e){if(!e)return!1
var n,t=(0,v.default)((0,l.h)(e))
try{var r=!1
for(t.s();!(n=t.n()).done;){var i=n.value
if(f.has(i))return!0}}catch(e){t.e(e)}finally{r||(r=!0,t.f())}return!1},A=function(e,n){if(n){var t,r=(0,v.default)((0,l.h)(n))
try{var i=!1
for(r.s();!(t=r.n()).done;){var a=t.value,o=g.get(a)
if(o){var u,s=(0,v.default)((0,l.h)(o))
try{var c=!1
for(s.s();!(u=s.n()).done;){var d=u.value
e.add(d)}}catch(e){s.e(e)}finally{c||(c=!0,s.f())}}}}catch(e){r.e(e)}finally{i||(i=!0,r.f())}}},O=function(e,n,t){null==(r=e.query)||null==(r=r.definitions)||null==(r=r[0])||null==(r=r.name)||r.value
var r,i,a=(0,v.default)((0,l.h)(n))
try{var u=!1
for(a.s();!(i=a.n()).done;){var s=i.value
if(s!==e.key){var c=d.get(s)
if(c){"query"===e.kind&&E.add(s)
var f="cache-first"
p.has(s)&&(p.delete(s),f="cache-and-network"),o.reexecuteOperation(yn(c,f))}}}}catch(e){a.e(e)}finally{u||(u=!0,a.f())}if(!t){var h=b
b=E,"query"===e.kind&&b.add(e.key),(E=h).clear()}},C=function(e){var n=!1
if("query"===e.kind)we(_.data,e.key),d.set(e.key,e)
else{var i
if("teardown"===e.kind)return d.delete(e.key),x(e.key),b.delete(e.key),_.data.disableLayers||ce(_.data,e.key),null!=_&&null!=(i=_.data)&&i.gcScheduler&&de(_.data),e
if("mutation"===e.kind&&"network-only"!==e.context.requestPolicy){d.set(e.key,e),le("write",_.data,e.key,!0,!1,e)
var a=an(_,e,void 0,void 0).dependencies
if(se(),a&&a.size){var o,s=(0,v.default)((0,l.h)(a))
try{var p=!1
for(s.s();!(o=s.n()).done;){var h=o.value
f.add(h)}}catch(e){s.e(e)}finally{p||(p=!0,s.f())}u.set(e.key,a)
var y=m()
A(y,a),O(e,y,!0),n=!0}}}return(r||(r=t(47618))).makeOperation(e.kind,{key:e.key,query:(r||(r=t(47618))).formatDocument(e.query),variables:e.variables?T(R(e.query),e.variables):e.variables},(0,c.default)({},e.context,{optimistic:n}))},w=function(e,n){if(n){S(e.key)
var t=k.get(e.key)
t||k.set(e.key,t=m())
var r,i=(0,v.default)((0,l.h)(n))
try{var a=!1
for(i.s();!(r=i.n()).done;){var o=r.value
t.add(o)
var u=g.get(o)
u||g.set(o,u=m()),u.add(e.key)}}catch(e){i.e(e)}finally{a||(a=!0,i.f())}}},I=function(e){le("read",_.data,void 0,!1,!1,e)
var n=Je(_,e,null,void 0,e.context)
se()
var t=n.data?n.partial||n.hasNext?"partial":"hit":"miss"
return d.set(e.key,e),w(e,n.dependencies),{data:n.data,dependencies:n.dependencies,hasNext:n.hasNext,operation:e,outcome:t}},P=function(e,n){var t,r=d.get(e.operation.key)||e.operation
if("mutation"===r.kind){var i=u.get(r.key)
n&&A(n,i),u.delete(r.key)}("subscription"===r.kind||e.hasNext)&&we(_.data,r.key,!0)
var a=e.data
if(a){le("write",_.data,r.key,!1,!1,r)
var o=an(_,r,a,e.error).dependencies
se(),n&&o&&A(n,o),le("read",_.data,r.key,!1,null!==a,r)
var l=Je(_,r,a,e.error)
se(),a=l.data,"query"===r.kind&&(t=l.dependencies,n&&t&&A(n,t))}else ce(_.data,r.key)
return t&&w(e.operation,t),{data:a,error:e.error,extensions:e.extensions,hasNext:e.hasNext,operation:r,stale:e.stale}}
return function(e){var n=(a||(a=t(50206))).share((a||(a=t(50206))).map(I)((a||(a=t(50206))).filter((function(e){return"query"===e.kind&&"network-only"!==e.context.requestPolicy}))(e))),r=(a||(a=t(50206))).filter((function(e){return"query"!==e.kind||"network-only"===e.context.requestPolicy}))(e),l=(a||(a=t(50206))).map((function(e){return mn(e.operation,{cacheOutcome:"miss"})}))((a||(a=t(50206))).filter((function(e){return"miss"===e.outcome&&"cache-only"!==e.operation.context.requestPolicy&&!N(e.dependencies)&&!b.has(e.operation.key)}))(n)),c=(a||(a=t(50206))).map((function(e){var n=e.operation.context.requestPolicy,t="cache-only"!==n&&(e.hasNext||"cache-and-network"===n||"cache-first"===n&&"partial"===e.outcome&&!b.has(e.operation.key)),r="cache-only"!==n&&(t||"partial"===e.outcome&&b.has(e.operation.key)&&Te(_.data,e.operation.key)),i={data:e.data,error:e.error,extensions:e.extensions,hasNext:t&&e.hasNext,operation:mn(e.operation,{cacheOutcome:e.outcome}),stale:r&&!e.hasNext}
return t&&(N(e.dependencies)?"cache-and-network"===n&&p.add(e.operation.key):o.reexecuteOperation(yn(d.get(e.operation.key)||e.operation,"network-only"))),i}))((a||(a=t(50206))).filter((function(e){return"miss"!==e.outcome||"cache-only"===e.operation.context.requestPolicy}))(n)),v=(a||(a=t(50206))).map(C)((a||(a=t(50206))).merge([r,l])),h=i(v),y=(a||(a=t(50206))).map((function(e){var n=e.operation.context.notifyOnWrite,t=(void 0!==n?n:"mutation"===e.operation.kind||"query"===e.operation.kind||"subscription"===e.operation.kind)?m():null,r=P(e,t)
return t&&O(e.operation,t,!1),r}))((a||(a=t(50206))).filter((function(e){return!u.has(e.operation.key)}))(h)),g=(a||(a=t(50206))).mergeMap((function(e){if(s.push(e)<u.size)return(a||(a=t(50206))).empty
for(var n=0;n<s.length;n++)we(_.data,s[n].operation.key)
f.clear()
for(var r,i=[],o=m();r=s.shift();)i.push(P(r,o))
return O(e.operation,o,!1),(a||(a=t(50206))).fromArray(i)}))((a||(a=t(50206))).filter((function(e){return u.has(e.operation.key)}))(h))
return(a||(a=t(50206))).merge([y,g,c])}}},kn={"cache-and-network":3,"cache-first":1,"cache-only":0,"network-only":2}
n.Store=hn,n.cacheExchange=gn,n.offlineExchange=function(e){return function(n){var i=e.storage,o=e.isOfflineError||function(e){return e&&e.networkError&&!e.response&&("undefined"!=typeof navigator&&!1===navigator.onLine||/request failed|failed to fetch|network\s?error/i.test(e.networkError.message))}
if(i&&i.onOnline&&i.readMetadata&&i.writeMetadata){var l=n.forward,s=n.client,d=n.dispatchDebug,f=(a||(a=t(50206))).makeSubject(),v=f.source,p=f.next,h=[],y=!1,g=!1,k=function(){if(y){for(var e=[],n=0;n<h.length;n++){var a=h[n]
"mutation"===a.kind&&e.push({extensions:a.extensions,query:(r||(r=t(47618))).stringifyDocument(a.query),variables:a.variables})}i.writeMetadata(e)}},b=function(e){for(var n=h.length-1;n>=0;n--)h[n].key===e&&h.splice(n,1)},E=function(){if(!g){var e=m()
g=!0
for(var n=0;n<h.length;n++){var i=h[n]
if("mutation"===i.kind||!e.has(i.key))if(e.add(i.key),"subscription"!==i.kind){p((r||(r=t(47618))).makeOperation("teardown",i))
for(var a="cache-first",o=0;o<h.length;o++){var u=h[o].context.requestPolicy
kn[u]>kn[a]&&(a=u)}p(yn(i,a))}else p(yn(i,"cache-first"))}g=!1,h.length=0,k()}},_=gn((0,c.default)({},e,{storage:(0,c.default)({},i,{readData:function(){var e=i.readData()
return{then:function(n){var a,o
return(0,u.default)().async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,u.default)().awrap(i.readMetadata())
case 2:for(a=l.sent,o=0;a&&o<a.length;o++)h.push(s.createRequestOperation("mutation",(r||(r=t(47618))).createRequest(a[o].query,a[o].variables),a[o].extensions))
return l.t0=n,l.next=7,(0,u.default)().awrap(e)
case 7:l.t1=l.sent,(0,l.t0)(l.t1),i.onOnline(E),y=!0,E()
case 12:case"end":return l.stop()}}),null,null,null,Promise)}}}})}))({client:s,dispatchDebug:d,forward:function(e){return(a||(a=t(50206))).share((a||(a=t(50206))).filter((function(e){return!(y&&"mutation"===e.operation.kind&&e.operation.context.optimistic&&o(e.error,e)&&(h.push(e.operation),k(),1))}))(l(e)))}})
return function(e){var n=(a||(a=t(50206))).merge([v,(a||(a=t(50206))).onPush((function(e){"query"!==e.kind||y?"teardown"===e.kind&&b(e.key):h.push(e)}))(e)])
return(a||(a=t(50206))).filter((function(e){if("query"===e.operation.kind){if(o(e.error,e))return p(yn(e.operation,"cache-only")),h.push(e.operation),!1
y||b(e.operation.key)}return!0}))(_(n))}}return gn(e)(n)}},n.getConnectionStorageKey=dn,n.gc=function(){if(!$.optimisticOrder.length){var e,n=(0,v.default)((0,s.h)($.gc))
try{var t=!1
for(n.s();!(e=n.n()).done;){var r=e.value
if($.gc.delete(r),!(me(r)>0)){$.refCount.delete(r),$.records.base.delete(r)
var i=$.links.base.get(r)
if(i)for(var a in $.links.base.delete(r),i)ge(i[a],-1)}}}catch(e){n.e(e)}finally{t||(t=!0,n.f())}}}},26950:function(e,n,t){var r=t(50113).default,i=r(t(30780)),a=r(t(93090))
Object.defineProperty(n,"__esModule",{value:!0})
var o,u=t(47618),l=t(85233),s=l.createContext({}),c=s.Provider,d=s.Consumer
s.displayName="UrqlContext"
var f=function(){return l.useContext(s)},v={data:void 0,error:void 0,extensions:void 0,fetching:!1,hasNext:!1,operation:void 0,stale:!1},p=function(e,n){return e===n||!(!e||!n||e.key!==n.key)},h=function(e,n){for(var t in e)if(!(t in n))return!0
for(var r in n)if("operation"===r?!p(e[r],n[r]):e[r]!==n[r])return!0
return!1},m=function(e,n){var t=(0,a.default)({},e,n,{data:void 0!==n.data||n.error?n.data:e.data,fetching:!!n.fetching,stale:!!n.stale})
return h(e,t)?t:e},y=function(e,n){for(var t=0,r=n.length;t<r;t++)if(e[t]!==n[t])return!0
return!1}
function g(e,n){e(n)}function k(e){var n=l.useRef(!0),r=f(),s=l.useState(v),c=(0,i.default)(s,2),d=c[0],p=c[1],h=l.useCallback((function(i,l){return g(p,(0,a.default)({},v,{fetching:!0})),(o||(o=t(50206))).toPromise((o||(o=t(50206))).take(1)((o||(o=t(50206))).filter((function(e){return!e.hasNext}))((o||(o=t(50206))).onPush((function(e){n.current&&g(p,{data:e.data,error:e.error,extensions:e.extensions,fetching:!1,hasNext:e.hasNext,operation:e.operation,stale:e.stale})}))(r.executeMutation(u.createRequest(e,i),l||{})))))}),[r,e,p])
return l.useEffect((function(){return n.current=!0,function(){n.current=!1}}),[]),[d,h]}function b(e,n){var t=l.useRef(void 0)
return l.useMemo((function(){var r=u.createRequest(e,n)
return void 0!==t.current&&t.current.key===r.key?t.current:(t.current=r,r)}),[e,n])}l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
var E=function(e){if(!e._react){var n=new Set,r=new Map
e.operations$&&(o||(o=t(50206))).subscribe((function(e){"teardown"===e.kind&&n.has(e.key)&&(n.delete(e.key),r.delete(e.key))}))(e.operations$),e._react={dispose:function(e){n.add(e)},get:function(e){return r.get(e)},set:function(e,t){n.delete(e),r.set(e,t)}}}return e._react},_=function(e,n){return n&&void 0!==n.suspense?!!n.suspense:e.suspense}
function S(e){var n=f(),r=E(n),u=_(n,e.context),s=b(e.query,e.variables),c=l.useMemo((function(){if(e.pause)return null
var i=n.executeQuery(s,(0,a.default)({requestPolicy:e.requestPolicy},e.context))
return u?(o||(o=t(50206))).onPush((function(e){r.set(s.key,e)}))(i):i}),[r,n,s,u,e.pause,e.requestPolicy,e.context]),d=l.useCallback((function(e,n){if(!e)return{fetching:!1}
var i=r.get(s.key)
if(i){if(n&&null!=i&&"then"in i)throw i}else{var a,u=(o||(o=t(50206))).subscribe((function(e){i=e,a&&a(i)}))((o||(o=t(50206))).takeWhile((function(){return n&&!a||!i||"hasNext"in i&&i.hasNext}))(e))
if(null==i&&n){var l=new Promise((function(e){a=e}))
throw r.set(s.key,l),l}u.unsubscribe()}return i||{fetching:!0}}),[r,s]),p=[n,s,e.requestPolicy,e.context,e.pause],h=l.useState((function(){return[c,m(v,d(c,u)),p]})),k=(0,i.default)(h,2),S=k[0],x=k[1],N=S[1]
c!==S[0]&&y(S[2],p)&&x([c,N=m(S[1],d(c,u)),p]),l.useEffect((function(){var e=S[0],n=S[2][1],i=!1,a=function(e){i=!0,g(x,(function(n){var t=m(n[1],e)
return n[1]!==t?[n[0],t,n[2]]:n}))}
if(e){var u=(o||(o=t(50206))).subscribe(a)((o||(o=t(50206))).onEnd((function(){a({fetching:!1})}))(e))
return i||a({fetching:!0}),function(){r.dispose(n.key),u.unsubscribe()}}a({fetching:!1})}),[r,S[0],S[2][1]])
var A=l.useCallback((function(i){var l=(0,a.default)({requestPolicy:e.requestPolicy},e.context,i)
g(x,(function(e){return[u?(o||(o=t(50206))).onPush((function(e){r.set(s.key,e)}))(n.executeQuery(s,l)):n.executeQuery(s,l),e[1],p]}))}),[n,r,s,u,e.requestPolicy,e.context,e.pause])
return[N,A]}function x(e,n){var r=f(),u=b(e.query,e.variables),s=l.useRef(n)
s.current=n
var c=l.useMemo((function(){return e.pause?null:r.executeSubscription(u,e.context)}),[r,u,e.pause,e.context]),d=[r,u,e.context,e.pause],p=l.useState((function(){return[c,(0,a.default)({},v,{fetching:!!c}),d]})),h=(0,i.default)(p,2),k=h[0],E=h[1],_=k[1]
c!==k[0]&&y(k[2],d)&&E([c,_=m(k[1],{fetching:!!c}),d]),l.useEffect((function(){var e=function(e){g(E,(function(n){var t=m(n[1],e)
return n[1]===t?n:(s.current&&null!=t.data&&n[1].data!==t.data&&(t.data=s.current(n[1].data,t.data)),[n[0],t,n[2]])}))}
if(k[0])return(o||(o=t(50206))).subscribe(e)((o||(o=t(50206))).onEnd((function(){e({fetching:!!c})}))(k[0])).unsubscribe
e({fetching:!1})}),[k[0]])
var S=l.useCallback((function(n){var t=r.executeSubscription(u,(0,a.default)({},e.context,n))
g(E,(function(e){return[t,e[1],d]}))}),[r,u,e.context,e.pause])
return[_,S]}n.Consumer=d,n.Context=s,n.Mutation=function(e){var n=k(e.query)
return e.children((0,a.default)({},n[0],{executeMutation:n[1]}))},n.Provider=c,n.Query=function(e){var n=S(e)
return e.children((0,a.default)({},n[0],{executeQuery:n[1]}))},n.Subscription=function(e){var n=x(e,e.handler)
return e.children((0,a.default)({},n[0],{executeSubscription:n[1]}))},n.useClient=f,n.useMutation=k,n.useQuery=S,n.useSubscription=x,Object.keys(u).forEach((function(e){"default"===e||Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return u[e]}})}))},50206:function(e,n,t){var r=t(50113).default,i=r(t(80875)),a=r(t(93090)),o=t(20977),u=r(t(43496)),l=r(t(35972))
Object.defineProperty(n,"__esModule",{value:!0})
var s=function(){},c=s
function d(e){return{0:e,tag:0}}function f(e){return{0:e,tag:1}}var v=function(){return"function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"},p=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"},h=function(e){return e}
function m(e){var n=0
e[Symbol.iterator]=function(){return{next:function(){return n>=e.length?{done:!0,value:void 0}:{done:!1,value:e[n++]}},return:function(){return{done:!0,value:e[n++]}}}}}function y(e){return function(n){return function(t){var r=[],i=c,a=c,o=!1,u=!1,l=!1,s=!1
function f(n){l=!0,n((function(n){0===n?l&&(l=!1,r.length?f(e(r.shift())):s?t(0):o||(o=!0,i(0))):0===n.tag?(u=!1,(a=n[0])(0)):l&&(t(n),u?u=!1:a(0))}))}n((function(n){s||(0===n?(s=!0,l||r.length||t(0)):0===n.tag?i=n[0]:(o=!1,l?r.push(n[0]):f(e(n[0]))))})),t(d((function(e){1===e?(s||(s=!0,i(1)),l&&(l=!1,a(1))):(s||o||(o=!0,i(0)),l&&!u&&(u=!0,a(0)))})))}}}function g(e){return y(h)(e)}function k(e){return function(n){return function(t){var r=[],i=c,a=!1,o=!1
n((function(n){o||(0===n?(o=!0,r.length||t(0)):0===n.tag?i=n[0]:(a=!1,function(e){var n=c
e((function(e){if(0===e){if(r.length){var u=r.indexOf(n)
u>-1&&(r=r.slice()).splice(u,1),r.length||(o?t(0):a||(a=!0,i(0)))}}else 0===e.tag?(r.push(n=e[0]),n(0)):r.length&&(t(e),n(0))}))}(e(n[0])),a||(a=!0,i(0))))})),t(d((function(e){if(1===e){o||(o=!0,i(1))
for(var n=0,t=r,u=r.length;n<u;n++)t[n](1)
r.length=0}else{o||a?a=!1:(a=!0,i(0))
for(var l=0,s=r,c=r.length;l<c;l++)s[l](0)}})))}}}function b(e){return k(h)(e)}function E(e){return function(n){return function(t){var r=!1
n((function(n){if(r);else if(0===n)r=!0,t(0)
else if(0===n.tag){var i=n[0]
t(d((function(e){1===e&&(r=!0),i(e)})))}else e(n[0]),t(n)}))}}}function _(e){var n=[],t=c,r=!1
return function(i){n.push(i),1===n.length&&e((function(e){if(0===e){for(var i=0,a=n,o=n.length;i<o;i++)a[i](0)
n.length=0}else if(0===e.tag)t=e[0]
else{r=!1
for(var u=0,l=n,s=n.length;u<s;u++)l[u](e)}})),i(d((function(e){if(1===e){var a=n.indexOf(i)
a>-1&&(n=n.slice()).splice(a,1),n.length||t(1)}else r||(r=!0,t(0))})))}}function S(e){return function(n){return function(t){var r=c,i=c,a=!1,o=!1,u=!1,l=!1
n((function(n){l||(0===n?(l=!0,u||t(0)):0===n.tag?r=n[0]:(u&&(i(1),i=c),a?a=!1:(a=!0,r(0)),function(e){u=!0,e((function(e){u&&(0===e?(u=!1,l?t(0):a||(a=!0,r(0))):0===e.tag?(o=!1,(i=e[0])(0)):(t(e),o?o=!1:i(0)))}))}(e(n[0]))))})),t(d((function(e){1===e?(l||(l=!0,r(1)),u&&(u=!1,i(1))):(l||a||(a=!0,r(0)),u&&!o&&(o=!0,i(0)))})))}}}function x(e){return function(n){var t,r=e[v()]&&e[v()]()||e,i=!1,a=!1,o=!1
n(d((function(e){return(0,l.default)().async((function(u){for(;;)switch(u.prev=u.next){case 0:if(1!==e){u.next=5
break}i=!0,r.return&&r.return(),u.next=39
break
case 5:if(!a){u.next=9
break}o=!0,u.next=39
break
case 9:o=a=!0
case 10:if(!o||i){u.next=38
break}return u.next=13,(0,l.default)().awrap(r.next())
case 13:if(!(t=u.sent).done){u.next=21
break}if(i=!0,!r.return){u.next=18
break}return u.next=18,(0,l.default)().awrap(r.return())
case 18:n(0),u.next=36
break
case 21:u.prev=21,o=!1,n(f(t.value)),u.next=36
break
case 26:if(u.prev=26,u.t0=u.catch(21),!r.throw){u.next=35
break}return u.next=31,(0,l.default)().awrap(r.throw(u.t0))
case 31:if(!(i=!!u.sent.done)){u.next=33
break}n(0)
case 33:u.next=36
break
case 35:throw u.t0
case 36:u.next=10
break
case 38:a=!1
case 39:case"end":return u.stop()}}),null,null,[[21,26]],Promise)})))}}function N(e){return e[Symbol.asyncIterator]?x(e):function(n){e[Symbol.iterator]&&"function"==typeof e[Symbol.iterator]||m(e)
var t,r=(0,u.default)(e),i=!1,a=!1,o=!1
n(d((function(e){if(1===e)i=!0,r.return&&r.return()
else if(a)o=!0
else{for(o=a=!0;o&&!i;)if((t=r.next()).done)i=!0,r.return&&r.return(),n(0)
else try{o=!1,n(f(t.value))}catch(e){if(!r.throw)throw e;(i=!!r.throw(e).done)&&n(0)}a=!1}})))}}var A=N
function O(e){return function(n){var t=!1,r=e({complete:function(){t||(t=!0,n(0))},next:function(e){t||n(f(e))}})
n(d((function(e){1!==e||t||(t=!0,r())})))}}function C(e){return function(n){var t=c,r=!1
return n((function(n){0===n?r=!0:0===n.tag?(t=n[0])(0):r||(e(n[0]),t(0))})),{unsubscribe:function(){r||(r=!0,t(1))}}}}var w={done:!0}
function T(e){var n=Object.keys(e).length
return function(t){var r=new Set,i=Array.isArray(e)?(0,o.h)(Array(n),c):{},u=Array.isArray(e)?Array(n):{},l=!1,s=!1,v=!1,p=0,h=function(o){e[o]((function(d){if(0===d)p>=n-1?(v=!0,t(0)):p++
else if(0===d.tag)i[o]=d[0]
else if(!v)if(u[o]=d[0],r.add(o),!l&&r.size<n)if(s)s=!1
else for(var h in e)r.has(h)||(i[h]||c)(0)
else l=!0,s=!1,t(f(Array.isArray(u)?u.slice():(0,a.default)({},u)))}))}
for(var m in e)h(m)
t(d((function(e){if(v);else if(1===e)for(var n in v=!0,i)i[n](1)
else if(!s)for(var t in s=!0,i)i[t](0)})))}}n.buffer=function(e){return function(n){return function(t){var r=[],i=c,a=c,o=!1,u=!1
n((function(n){u||(0===n?(u=!0,a(1),r.length&&t(f(r)),t(0)):0===n.tag?(i=n[0],e((function(e){if(u);else if(0===e)u=!0,i(1),r.length&&t(f(r)),t(0)
else if(0===e.tag)a=e[0]
else if(r.length){var n=f(r)
r=[],t(n)}}))):(r.push(n[0]),o?o=!1:(o=!0,i(0),a(0))))})),t(d((function(e){1!==e||u?u||o||(o=!0,i(0),a(0)):(u=!0,i(1),a(1))})))}}},n.combine=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]
return T(n)},n.concat=function(e){return g(A(e))},n.concatAll=g,n.concatMap=y,n.debounce=function(e){return function(n){return function(t){var r,i=!1,a=!1
n((function(n){if(a);else if(0===n)a=!0,r?i=!0:t(0)
else if(0===n.tag){var o=n[0]
t(d((function(e){1!==e||a?a||o(0):(a=!0,i=!1,r&&clearTimeout(r),o(1))})))}else r&&clearTimeout(r),r=setTimeout((function(){r=void 0,t(n),i&&t(0)}),e(n[0]))}))}}},n.delay=function(e){return function(n){return function(t){var r=0
n((function(n){0!==n&&0===n.tag?t(n):(r++,setTimeout((function(){r&&(r--,t(n))}),e))}))}}},n.empty=function(e){var n=!1
e(d((function(t){1===t?n=!0:n||(n=!0,e(0))})))},n.filter=function(e){return function(n){return function(t){var r=c
n((function(n){0===n?t(0):0===n.tag?(r=n[0],t(n)):e(n[0])?t(n):r(0)}))}}},n.flatten=b,n.forEach=function(e){return function(n){C(e)(n)}},n.fromArray=function(e){return function(){A(m(e))}},n.fromAsyncIterable=x,n.fromCallbag=function(e){return function(n){e(0,(function(e,t){n(0===e?d((function(e){t(e+1)})):1===e?f(t):0)}))}},n.fromDomEvent=function(e,n){return O((function(t){return e.addEventListener(n,t.next),function(){return e.removeEventListener(n,t.next)}}))},n.fromIterable=N,n.fromObservable=function(e){return function(n){var t=(e[p()]?e[p()]():e).subscribe({complete:function(){n(0)},error:function(e){throw e},next:function(e){n(f(e))}})
n(d((function(e){1===e&&t.unsubscribe()})))}},n.fromPromise=function(e){return O((function(n){return e.then((function(e){n.next(e),n.complete()})),s}))},n.fromValue=function(e){return function(n){var t=!1
n(d((function(r){1===r?t=!0:t||(t=!0,n(f(e)),n(0))})))}},n.interval=function(e){return O((function(n){var t=0,r=setInterval((function(){return n.next(t++)}),e)
return function(){return clearInterval(r)}}))},n.lazy=function(e){return function(n){return e()(n)}},n.make=O,n.makeSubject=function(){var e,n
return{complete:function(){n&&n()},next:function(n){e&&e(n)},source:_(O((function(t){return e=t.next,n=t.complete,s})))}},n.map=function(e){return function(n){return function(t){return n((function(n){0===n||0===n.tag?t(n):t(f(e(n[0])))}))}}},n.merge=function(e){return b(A(e))},n.mergeAll=b,n.mergeMap=k,n.never=function(e){e(d(c))},n.onEnd=function(e){return function(n){return function(t){var r=!1
n((function(n){if(r);else if(0===n)r=!0,t(0),e()
else if(0===n.tag){var i=n[0]
t(d((function(n){1===n?(r=!0,i(1),e()):i(n)})))}else t(n)}))}}},n.onPush=E,n.onStart=function(e){return function(n){return function(t){return n((function(n){0===n?t(0):0===n.tag?(t(n),e()):t(n)}))}}},n.pipe=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]
for(var r=n[0],i=1,a=n.length;i<a;i++)r=n[i](r)
return r},n.publish=function(e){C((function(e){}))(e)},n.sample=function(e){return function(n){return function(t){var r,i=c,a=c,o=!1,u=!1
n((function(e){u||(0===e?(u=!0,a(1),t(0)):0===e.tag?i=e[0]:(r=e[0],o?o=!1:(o=!0,a(0),i(0))))})),e((function(e){if(u);else if(0===e)u=!0,i(1),t(0)
else if(0===e.tag)a=e[0]
else if(void 0!==r){var n=f(r)
r=void 0,t(n)}})),t(d((function(e){1!==e||u?u||o||(o=!0,i(0),a(0)):(u=!0,i(1),a(1))})))}}},n.scan=function(e,n){return function(t){return function(r){var i=n
t((function(n){0===n?r(0):0===n.tag?r(n):r(f(i=e(i,n[0])))}))}}},n.share=_,n.skip=function(e){return function(n){return function(t){var r=c,i=e
n((function(e){0===e?t(0):0===e.tag?(r=e[0],t(e)):i-- >0?r(0):t(e)}))}}},n.skipUntil=function(e){return function(n){return function(t){var r=c,i=c,a=!0,o=!1,u=!1
n((function(n){u||(0===n?(u=!0,a&&i(1),t(0)):0===n.tag?(r=n[0],e((function(e){0===e?a&&(u=!0,r(1)):0===e.tag?(i=e[0])(0):(a=!1,i(1))}))):a?o?o=!1:(o=!0,r(0),i(0)):(o=!1,t(n)))})),t(d((function(e){1!==e||u?u||o||(o=!0,a&&i(0),r(0)):(u=!0,r(1),a&&i(1))})))}}},n.skipWhile=function(e){return function(n){return function(t){var r=c,i=!0
n((function(n){0===n?t(0):0===n.tag?(r=n[0],t(n)):i?e(n[0])?r(0):(i=!1,t(n)):t(n)}))}}},n.subscribe=C,n.switchAll=function(e){return S(h)(e)},n.switchMap=S,n.take=function(e){return function(n){return function(t){var r=c,i=!1,a=0
n((function(n){i||(0===n?(i=!0,t(0)):0===n.tag?e<=0?(i=!0,t(0),n[0](1)):r=n[0]:a++<e?(t(n),!i&&a>=e&&(i=!0,t(0),r(1))):t(n))})),t(d((function(n){1!==n||i?0===n&&!i&&a<e&&r(0):(i=!0,r(1))})))}}},n.takeLast=function(e){return function(n){return function(t){var r=[],i=c
n((function(n){0===n?A(r)(t):0===n.tag?e<=0?(n[0](1),A(r)(t)):(i=n[0])(0):(r.length>=e&&e&&r.shift(),r.push(n[0]),i(0))}))}}},n.takeUntil=function(e){return function(n){return function(t){var r=c,i=c,a=!1
n((function(n){a||(0===n?(a=!0,i(1),t(0)):0===n.tag?(r=n[0],e((function(e){0===e||(0===e.tag?(i=e[0])(0):(a=!0,i(1),r(1),t(0)))}))):t(n))})),t(d((function(e){1!==e||a?a||r(0):(a=!0,r(1),i(1))})))}}},n.takeWhile=function(e,n){return function(t){return function(r){var i=c,a=!1
t((function(t){a||(0===t?(a=!0,r(0)):0===t.tag?(i=t[0],r(t)):e(t[0])?r(t):(a=!0,n&&r(t),r(0),i(1)))}))}}},n.tap=E,n.throttle=function(e){return function(n){return function(t){var r,i=!1
n((function(n){if(0===n)r&&clearTimeout(r),t(0)
else if(0===n.tag){var a=n[0]
t(d((function(e){1===e?(r&&clearTimeout(r),a(1)):a(0)})))}else i||(i=!0,r&&clearTimeout(r),r=setTimeout((function(){r=void 0,i=!1}),e(n[0])),t(n))}))}}},n.toArray=function(e){var n=[],t=c,r=!1
return e((function(e){0===e?r=!0:0===e.tag?(t=e[0])(0):(n.push(e[0]),t(0))})),r||t(1),n},n.toAsyncIterable=function(e){var n,t,r=[],i=!1,a=!1,o=!1,u=c
return n={next:function(){return(0,l.default)().async((function(n){for(;;)switch(n.prev=n.next){case 0:if(a||(a=!0,e((function(e){i||(0===e?(t&&(t=t(w)),i=!0):0===e.tag?(o=!0,(u=e[0])(0)):(o=!1,t?t=t({done:!1,value:e[0]}):r.push(e[0])))}))),!i||r.length){n.next=5
break}return n.abrupt("return",w)
case 5:!i&&!o&&r.length<=1&&(o=!0,u(0))
case 6:return n.abrupt("return",r.length?{done:!1,value:r.shift()}:new Promise((function(e){return t=e})))
case 7:case"end":return n.stop()}}),null,null,null,Promise)},return:function(){return(0,l.default)().async((function(e){for(;;)switch(e.prev=e.next){case 0:return i||(t=u(1)),i=!0,e.abrupt("return",w)
case 3:case"end":return e.stop()}}),null,null,null,Promise)}},n[v()]=function(){return this},n},n.toCallbag=function(e){return function(n,t){0===n&&e((function(e){0===e?t(2):0===e.tag?t(0,(function(n){n<3&&e[0](n-1)})):t(1,e[0])}))}},n.toObservable=function(e){var n
return n={subscribe:function(n,t,r){var a="object"==(0,i.default)(n)?n:{complete:r,error:t,next:n},o=c,u=!1
e((function(e){u||(0===e?(u=!0,a.complete&&a.complete()):0===e.tag?(o=e[0])(0):(a.next(e[0]),o(0)))}))
var l={closed:!1,unsubscribe:function(){l.closed=!0,u=!0,o(1)}}
return l}},n[p()]=function(){return this},n},n.toPromise=function(e){return new Promise((function(n){var t,r=c
e((function(e){0===e?n(t):0===e.tag?(r=e[0])(0):(t=e[0],r(0))}))}))},n.zip=T},91744:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.collectEdgeLinkKeys=h,n.getConnectionStorageKeyForEntity=function(e,n,r){void 0===r&&(r={})
var a=d(e)
return a?(0,(i||(i=t(10550))).getConnectionStorageKey)(a,n,r):null},n.getEdgeSpliceMergeArgs=g,n.getEntityCacheKey=d,n.getMutationVariables=f,n.getNewEdgeKeys=k,n.getRecordCacheKey=p,n.makeConnectionEdgeSpliceUpdater=E,n.mutationUpdates=void 0,n.readConnectionEdgeLinks=m,n.registerAppendEdgeUpdates=function(e){for(var n=new Map,t=0;t<e.length;t++){var r=e[t],i=n.get(r.mutationFieldName)
i?i.push(r):n.set(r.mutationFieldName,[r])}var a,o=(0,l.default)(n)
try{var s=!1
for(o.s();!(a=o.n()).done;){var d=(0,u.default)(a.value,2),f=d[0],v=d[1]
c[f]=E(v)}}catch(e){o.e(e)}finally{s||(s=!0,o.f())}},n.resolveConnectionFieldArgs=v,n.resolveMutationPayload=y,n.spliceEdgesIntoStableConnections=b
var i,a,o,u=r(t(30780)),l=r(t(93920)),s=r(t(80875)),c=n.mutationUpdates={}
function d(e){var n,r=null!=(n=e._id)?n:e.id
return null==r?null:(0,(o||(o=t(30202))).internEntityCacheId)(r+"")}function f(e){var n
return null!=(n=e.variables)?n:{}}function v(e,n){for(var t={},r=0;r<e.connectionFieldArgs.length;r++){var i=e.connectionFieldArgs[r],a=n[i.variableName]
void 0!==a&&(t[i.name]=a)}return t}function p(e,n){if(null!=n.__typename){var t={__typename:n.__typename,_id:n._id,id:n.id},r=e.keyOfEntity(t)
if(r)return r}return d(n)}function h(e,n){if(!Array.isArray(n)||0===n.length)return[]
for(var t=[],r=0;r<n.length;r++){var i=n[r]
if("string"!=typeof i){if(i&&"object"===(0,s.default)(i)){var a=p(e,i)
a&&t.push(a)}}else t.push(i)}return t}function m(e,n){return n?"string"==typeof n?h(e,e.resolve(n,"edges")):"object"===(0,s.default)(n)?h(e,n.edges):[]:[]}function y(e,n){var t=e[n]
return t&&"object"===(0,s.default)(t)?t:"sections"in e||"_id"in e||"id"in e?e:null}function g(e,n){var t=n.input,r=t&&"object"===(0,s.default)(t)&&!Array.isArray(t)?t:null
return"prepend"===e.direction?r&&null!=r.before?{before:r.before}:{before:""}:r&&null!=r.after?{after:r.after}:{after:""}}function k(e,n,t,r){var i=v(n,r),a=m(e,t[n.connectionFieldName])
if(a.length>0)return a
var o=p(e,t)
if(!o)return[]
var u=e.resolve(o,n.connectionFieldName,i)
return"string"!=typeof u?[]:m(e,u)}function b(e,n,r,i){var o=i[n.connectionsVariable]
if(Array.isArray(o)&&0!==o.length){var u=k(e,n,r,i)
if(0!==u.length)for(var l=g(n,i),s=0;s<o.length;s++){var c=o[s]
if("string"==typeof c){var d=e.resolve(c,"edges"),f=(0,(a||(a=t(99617))).mergeConnectionEdges)(e,d,u,l)
f.length>0&&e.link(c,"edges",f)}}}}function E(e){return function(n,t,r,i){for(var a=f(i),o=0;o<e.length;o++){var u=e[o],l=y(n,u.mutationFieldName)
l&&b(r,u,l,a)}}}},73049:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.extractAppendEdgeSpecs=j,n.extractArgumentValue=F,n.formatDocument=function(e){if(A(e))return(0,(l||(l=t(48110))).formatDocumentOptimized)(e)
if(!e)return{definitions:[],kind:(i||(i=t(5925))).Kind.DOCUMENT,name:""}
var n=(0,(s||(s=t(94404))).getRelayArtifactNode)(e)
if(null!=n&&(0,(s||(s=t(94404))).isUrqlDocumentNode)(n)){var r,a=n,o=null!=(r=a.appendEdgeSpecs)?r:j(a)
return o.length>0&&(a.appendEdgeSpecs||(a.appendEdgeSpecs=o),(0,(u||(u=t(91744))).registerAppendEdgeUpdates)(o)),a}h=new Map,m=new Map,y=new Map
try{var c,d=!1,f=x((0,(s||(s=t(94404))).isFragment)(e)?O(e):C(e))
return e&&"object"===(0,v.default)(e)&&"__key"in e&&Object.defineProperty(f,"__key",{enumerable:!1,value:e.__key}),null!=n?((0,(s||(s=t(94404))).replaceRelayDocumentWithUrqlDocument)(e,f),null!=(c=f.appendEdgeSpecs)&&c.length&&(n.appendEdgeSpecs=f.appendEdgeSpecs),n):f}finally{d||(d=!0,h=null,m=null,y=null)}}
var i,a,o,u,l,s,c=r(t(30780)),d=r(t(93920)),f=r(t(93090)),v=r(t(80875)),p=new WeakMap,h=null,m=null,y=null
function g(e){if(!h)return{kind:(i||(i=t(5925))).Kind.NAME,value:e}
var n=h.get(e)
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.NAME,value:e}
return h.set(e,r),r}function k(e){if(!m)return{kind:(i||(i=t(5925))).Kind.VARIABLE,name:g(e)}
var n=m.get(e)
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.VARIABLE,name:g(e)}
return m.set(e,r),r}function b(e){if(!y)return{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:g(e)}
var n=y.get(e)
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:g(e)}
return y.set(e,r),r}function E(e,n){void 0===n&&(n=new WeakSet)
for(var t=0;t<e.length;t++){var r=e[t]
if(!n.has(r)){if(n.add(r),"LinkedHandle"===r.kind&&"connection"===r.handle)return!0
if(("LinkedField"===r.kind||"InlineFragment"===r.kind||"Condition"===r.kind)&&E(r.selections,n))return!0}}return!1}function _(e){var n,t,r,i=e
return null!=(null==(n=i.fragment)||null==(n=n.metadata)?void 0:n.refetch)||null!=(null==(t=i.params)||null==(t=t.metadata)?void 0:t.refetch)||null!=(null==(r=i.operation)||null==(r=r.metadata)?void 0:r.refetch)}function S(e){var n,t=null==e||null==(n=e.operation)?void 0:n.selections
return!(null==t||!E(t))||_(e)}function x(e,n){if(void 0===n&&(n=new WeakMap),null==e||"object"!==(0,v.default)(e))return e
if(n.has(e))return n.get(e)
var r=e
if("definitions"in e){for(var a=[],o=0,u=e.definitions.length;o<u;o++){var l=x(e.definitions[o],n)
l&&a.push(l)}var s=(0,f.default)({},e,{definitions:a})
return n.set(r,s),s}if("directives"in e&&e.directives&&e.directives.length){for(var c=[],d={},p={},h=0,m=e.directives.length;h<m;h++){var y=e.directives[h],g=y.name.value
"_"!==g[0]?c.push(y):g=g.slice(1),p[g]||(p[g]=[]),p[g].push(y),d[g]||(d[g]=y)}for(var k=0,b=Object.keys(p);k<b.length;k++){var E=b[k]
p[E].length>1&&(d[E]=(0,f.default)({},d[E],{_all:p[E]}))}e=(0,f.default)({},e,{_directives:d,directives:c})}if("selectionSet"in e){var _=[],S=e.kind===(i||(i=t(5925))).Kind.OPERATION_DEFINITION
if(e.selectionSet&&e.selectionSet.selections){for(var N=0,A=e.selectionSet.selections.length;N<A;N++){var O=e.selectionSet.selections[N]
S=S||O.kind===(i||(i=t(5925))).Kind.FIELD&&"__typename"===O.name.value&&!O.alias
var C=x(O,n)
C&&_.push(C)}S||_.push({_generated:!0,kind:(i||(i=t(5925))).Kind.FIELD,name:{kind:(i||(i=t(5925))).Kind.NAME,value:"__typename"}})
var w=e
return w.selectionSet={kind:e.selectionSet.kind,selections:_},n.set(r,w),w}}return n.set(r,e),e}function N(e){if(!(0,(a||(a=t(80192))).getFeature)("pauseAdsDEPP"))return!1
if(!e||(0,(s||(s=t(94404))).isFragment)(e))return!1
var n=(0,(s||(s=t(94404))).getRelayArtifactNode)(e)
return null!=n&&!(0,(s||(s=t(94404))).isUrqlDocumentNode)(n)&&"usePauseAdDEPPDataQuery"===(0,(s||(s=t(94404))).getRequest)(e).params.name}function A(e){return!!(0,(a||(a=t(80192))).getFeature)("optimizedUrqlFormatDocumentEnabled")||N(e)}function O(e){var n=(0,(s||(s=t(94404))).getFragment)(e),r=n.selections.map((function(e){return T(e)})).filter((function(e){return void 0!==e})),a=[]
if(n.argumentDefinitions){var o,u=(0,d.default)(n.argumentDefinitions)
try{var l=!1
for(u.s();!(o=u.n()).done;){var c=o.value,f=c.name,v="defaultValue"in c?c.defaultValue:void 0
a.push({defaultValue:w(v),kind:(i||(i=t(5925))).Kind.VARIABLE_DEFINITION,type:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:f}},variable:{kind:(i||(i=t(5925))).Kind.VARIABLE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:f}}})}}catch(e){u.e(e)}finally{l||(l=!0,u.f())}}return{definitions:[{kind:(i||(i=t(5925))).Kind.FRAGMENT_DEFINITION,name:{kind:(i||(i=t(5925))).Kind.NAME,value:n.name},selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:r},typeCondition:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:n.type}},variableDefinitions:a}],kind:(i||(i=t(5925))).Kind.DOCUMENT,name:n.name}}function C(e){var n,r,a,l=(0,(s||(s=t(94404))).getRequest)(e),v=[]
if(l.fragment.argumentDefinitions){var p,h=l.fragment.argumentDefinitions,m=(0,d.default)(h)
try{var y=!1
for(m.s();!(p=m.n()).done;){var g=p.value,k=g.name,b="defaultValue"in g?g.defaultValue:void 0
v.push({defaultValue:w(b),kind:(i||(i=t(5925))).Kind.VARIABLE_DEFINITION,type:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:k}},variable:{kind:(i||(i=t(5925))).Kind.VARIABLE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:k}}})}}catch(e){m.e(e)}finally{y||(y=!0,m.f())}}if(l.params.providedVariables)for(var E=l.params.providedVariables,_=0,x=Object.entries(E);_<x.length;_++){var N=(0,c.default)(x[_],2),A=N[0],O=N[1]
v.push({defaultValue:w(O.get()),kind:(i||(i=t(5925))).Kind.VARIABLE_DEFINITION,type:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:A}},variable:{kind:(i||(i=t(5925))).Kind.VARIABLE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:A}}})}var C=P(l.operation.selections).map((function(e){return T(e)})).filter((function(e){return void 0!==e})),I=S(l),R={__key:null!=(n=null!=(r=(0,(o||(o=t(62273))).hashAndEncode)(l.params.cacheID))?r:l.params.id)?n:void 0,definitions:[{kind:(i||(i=t(5925))).Kind.OPERATION_DEFINITION,name:{kind:(i||(i=t(5925))).Kind.NAME,value:l.operation.name},operation:l.params.operationKind,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:C},variableDefinitions:v}],documentId:null!=(a=l.params.id)?a:void 0,kind:(i||(i=t(5925))).Kind.DOCUMENT,name:l.operation.name,needsParentVarsAttachment:I,params:(0,f.default)({},l.params)},L=j(R)
return L.length>0&&(R.appendEdgeSpecs=L,(0,(u||(u=t(91744))).registerAppendEdgeUpdates)(L)),R}function w(e){return"string"==typeof e?{kind:(i||(i=t(5925))).Kind.STRING,value:e}:"number"==typeof e?{kind:(i||(i=t(5925))).Kind.INT,value:e.toString()}:"boolean"==typeof e?{kind:(i||(i=t(5925))).Kind.BOOLEAN,value:e}:Array.isArray(e)?{kind:(i||(i=t(5925))).Kind.LIST,values:e.map((function(e){return w(e)})).filter((function(e){return void 0!==e}))}:null===e?{kind:(i||(i=t(5925))).Kind.NULL}:"object"===(0,v.default)(e)?{fields:Object.entries(e).map((function(e){var n=(0,c.default)(e,2),r=n[0],a=n[1]
return{kind:(i||(i=t(5925))).Kind.OBJECT_FIELD,name:{kind:(i||(i=t(5925))).Kind.NAME,value:r},value:{kind:(i||(i=t(5925))).Kind.STRING,value:a}}})),kind:(i||(i=t(5925))).Kind.OBJECT}:void 0}function T(e){var n,r=p.get(e)
if(r)return r
switch(e.kind){case"ScalarField":var a,o,u=e
n={alias:u.alias?g(u.alias):void 0,arguments:null!=(a=null==(o=u.args)?void 0:o.map((function(e){var n=F(e)
if(!n||!n.kind)throw new Error(" ScalarField Invalid argument value: "+JSON.stringify(e))
return{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g(e.name),value:n}})))?a:[],kind:(i||(i=t(5925))).Kind.FIELD,name:g(u.name)}
break
case"Condition":var l=e
n=(0,f.default)({directives:[{arguments:[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g("if"),value:k(l.condition)}],kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:g(l.passingValue?"include":"skip")}]},D(l))
break
case"TypeDiscriminator":n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:[]}}
break
case"InlineFragment":var s=e,c=P(s.selections)
n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:c.map((function(e){return T(e)})).filter((function(e){return void 0!==e}))},typeCondition:b(s.abstractKey||s.type)}
break
case"LinkedField":var d,v,h,m,y=e,E=P(y.selections)
n={alias:y.alias?g(y.alias):void 0,arguments:null!=(d=null==(v=y.args)?void 0:v.map((function(e){var n=F(e)
if(!n||!n.kind)throw new Error("LinkedField Invalid argument value: "+JSON.stringify(e))
return{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g(e.name),value:n}})))?d:[],directives:y.directives||[],kind:"Field",name:g(y.name),selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:E.map((function(e){return T(e)})).filter((function(e){return void 0!==e})),typeCondition:b(null!=(h=y.concreteType)?h:"")},typeCondition:b(null!=(m=y.concreteType)?m:"")}
break
case"LinkedHandle":default:n=void 0
break
case"ClientExtension":case"InlineDataFragmentSpread":n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:e.selections.map(T).filter((function(e){return void 0!==e}))}}
break
case"AliasedInlineFragmentSpread":var _,S=e,x=S.name
n={alias:g(x),directives:[{arguments:[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g("as"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:x}}],kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:g("alias")}],kind:(i||(i=t(5925))).Kind.FIELD,name:g("__relayAliasedFragment"),selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:(null==(_=S.fragment)||null==(_=_.selections)?void 0:_.map((function(e){return T(e)})).filter((function(e){return void 0!==e})))||[]}}}return void 0!==n&&p.set(e,n),n}function I(e){var n
return"connection"===e.handle?[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g("key"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:e.key}}]:null!=(n=e.handleArgs)&&n.length?e.handleArgs.map((function(e){var n=F(e)
return{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g(e.name),value:n}})):[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:g("key"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:e.key}}]}function R(e,n){if(n){var r=n.directives||[]
r.push({arguments:I(e),kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:g(e.handle)}),n.directives=r}}function P(e){var n=e.filter((function(e){return"LinkedHandle"===e.kind}))
return n.length?(n.forEach((function(n){e.filter((function(e){var t,r
return"LinkedField"===e.kind&&e.name===n.name&&e.alias===n.alias&&L(null!=(t=n.args)?t:[],null!=(r=e.args)?r:[])})).forEach((function(e){R(n,e)}))})),e.filter((function(e){return"LinkedHandle"!==e.kind}))):e}function L(e,n){if(!e.length)return!0
if(!n.length)return!1
var t,r=new Map,i=(0,d.default)(n)
try{var a=!1
for(i.s();!(t=i.n()).done;){var o=t.value
r.set(o.name,o)}}catch(e){i.e(e)}finally{a||(a=!0,i.f())}var u,l=(0,d.default)(e)
try{var s=!1
for(l.s();!(u=l.n()).done;){var c=u.value,f=r.get(c.name)
if(!f)return!1
if(JSON.stringify(f)!==JSON.stringify(c))return!1}}catch(e){l.e(e)}finally{s||(s=!0,l.f())}return!0}function D(e){return{kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:P(e.selections).map((function(e){var n=T(e)
if(n&&n.kind)return n})).filter((function(e){return void 0!==e}))}}}function F(e){if(!e)throw new Error("NormalizationArgument is undefined or null")
if("Literal"===e.kind)return{kind:(i||(i=t(5925))).Kind.STRING,value:e.value}
if("ListValue"===e.kind)return{kind:(i||(i=t(5925))).Kind.LIST,values:e.items.map((function(e){var n=F(e)
if(!n||!n.kind)throw new Error("Invalid list item: "+JSON.stringify(e))
return n}))}
if("ObjectValue"===e.kind)return{fields:e.fields.map((function(e){var n=F(e)
if(!n||!n.kind)throw new Error("Invalid object field value: "+JSON.stringify(e))
return{kind:(i||(i=t(5925))).Kind.OBJECT_FIELD,name:g(e.name),value:n}})),kind:(i||(i=t(5925))).Kind.OBJECT}
if("Variable"===e.kind)return k(e.variableName)
throw new Error("Unsupported argument value type: "+e.kind)}function q(e){var n=e.directives
if(null!=n&&n.length)for(var t=0;t<n.length;t++){var r=n[t]
if("appendEdge"===r.name.value||"prependEdge"===r.name.value)return r}}function M(e){return"prependEdge"===e.name.value?"prepend":"append"}function K(e){var n=e.arguments
if(null==n||!n.length)return null
for(var r=0;r<n.length;r++){var a=n[r]
if("connections"===a.name.value&&a.value.kind===(i||(i=t(5925))).Kind.VARIABLE)return a.value.name.value}return null}function V(e){var n=e.arguments
if(null==n||!n.length)return[]
for(var r=[],a=0;a<n.length;a++){var o=n[a]
o.value.kind===(i||(i=t(5925))).Kind.VARIABLE&&r.push({name:o.name.value,variableName:o.value.name.value})}return r}function G(e,n,r,a){for(var o=0;o<e.length;o++){var u,l=e[o]
if(l.kind===(i||(i=t(5925))).Kind.FIELD){var s=q(l)
if(s){var c,d,f=K(s)
f&&r.push({connectionFieldArgs:null!=(c=null==a?void 0:a.args)?c:"sections"===l.name.value?V(l):[],connectionFieldName:null!=(d=null==a?void 0:a.name)?d:l.name.value,connectionsVariable:f,direction:M(s),mutationFieldName:n})}null!=(u=l.selectionSet)&&u.selections.length&&G(l.selectionSet.selections,n,r,{args:V(l),name:l.name.value})}}}function j(e){for(var n=[],r=0;r<e.definitions.length;r++){var a=e.definitions[r]
if(a.kind===(i||(i=t(5925))).Kind.OPERATION_DEFINITION&&a.operation===(i||(i=t(5925))).OperationTypeNode.MUTATION)for(var o=a.selectionSet.selections,u=0;u<o.length;u++){var l,s=o[u]
if(s.kind===(i||(i=t(5925))).Kind.FIELD){var c=s.name.value
null!=(l=s.selectionSet)&&l.selections.length&&G(s.selectionSet.selections,c,n)}}}return n}},57690:function(e,n,t){var r
function i(e){return!0===e.context.skipCache}n.__esModule=!0,n.cacheBypassExchange=function(e){return function(n){var a=e(n)
return function(e){var o=(0,(r||(r=t(50206))).pipe)(e,(r||(r=t(50206))).share)
return(0,(r||(r=t(50206))).merge)([a((0,(r||(r=t(50206))).pipe)(o,(0,(r||(r=t(50206))).filter)(i))),n.forward((0,(r||(r=t(50206))).pipe)(o,(0,(r||(r=t(50206))).filter)((function(e){return!i(e)}))))])}}}},55682:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.createUnauthErrorExchange=P,n.initClient=function(e){e.enableMocking,e.mergeGraphqlResponse,e.mockData
var n=e.mockFetch,r=e.onNetworkError,w=e.onUnauthError,T=e.options,R=(e.overrideGraphqlResponse,e.preventDataRequests),L=e.wrapSubscriptionForwarder;(0,(p||(p=t(21269))).disposeUrqlClient)()
var D=T.appConfig,F=T.requestOptions,q=void 0===F?{}:F,M=D.appVersion,K=D.env,V=void 0===K?(s||(s=t(73963))).ServerEnvironment.prod:K,G=D.locales,j=D.logRequestPerfTrace,U=void 0!==j&&j,B=D.uiFlavor,Q=(0,(k||(k=t(61878))).getGcStrategyConfig)(),H=(0,(a||(a=t(80192))).getFeature)("eddOnDepp")||(0,(a||(a=t(80192))).getFeature)("rapidFtab"),X=(0,(S||(S=t(38778))).simpleFetchExchange)({fetch:n,logRequestPerfTrace:U,onNetworkError:r,preventDataRequests:R})
return{client:new O.Client({exchanges:[].concat([],(0,x.default)(w?[P(w)]:[]),[(0,(f||(f=t(57690))).cacheBypassExchange)(X),(0,(l||(l=t(10550))).cacheExchange)((0,N.default)({directives:{connection:function(e){return(0,(_||(_=t(87352))).relayPagination)({connectionKey:e&&"object"===(0,A.default)(e)&&"key"in e?e.key:void 0})}},disableLayers:!0,disableRefCounting:Q.disableRefCounting,gcScheduler:(0,(g||(g=t(91818))).createGcScheduler)(Q.scheduler,{isPaused:(0,(a||(a=t(80192))).getFeature)("relayGcInDetails")||(0,(a||(a=t(80192))).getFeature)("relayGcOnAppGateIdle"),settings:{activeOperationsStrategy:void 0!==Q.maxEntities,maxEntities:Q.maxEntities,minEntities:Q.minEntities}}),globalIDs:!0,keys:function(e,n){var r
switch(n){case"NrtsBillboardHiddenItemState":(0,(b||(b=t(84439))).nrtsSubscribe)(e,"NrtsBillboardHiddenItemState"),r=e._id||e.id
break
case"NrtsEventWindowState":(0,(b||(b=t(84439))).nrtsSubscribe)(e,"NrtsEventWindowState"),r=e._id||e.id
break
case"ObelixString":r=e.key?e.key+"."+(e.bundle||""):e._id||e.id
break
case"GamesDiscoveryDomainData":case"UIConfigurationDomainData":var i=(nrdjs.profiles.current()||{}).guid
r=n+"-"+(void 0===i?"":i)
break
case"PinotDelta":H&&(0,(y||(y=t(67280))).gateWriteByVersion)({data:e}),r=e._id||e.id
break
case"NGPInbox_NrtsNotificationUpdatedState":r=void 0
break
default:if(I(n)){r=void 0
break}r=(null==e?void 0:e._id)||(null==e?void 0:e.id)||null}return r?(0,(h||(h=t(30202))).internEntityCacheId)(r):null},logger:function(){},optimizeForJSC:!0,resolvers:(0,N.default)({},H?(v||(v=t(47784))).deppResolvers:{},{Query:{l10nObelixString:function(e,n,r,i){var a=r.resolve("Query",i.fieldName,n)
if(a)return a
var o=null==n?void 0:n.bundle,u=(null==n?void 0:n.key)+"."+(o===(c||(c=t(37547))).DEFAULT_BUNDLE_NAME?"":o)
return(0,(h||(h=t(30202))).internEntityCacheId)(u)},l10nObelixStrings:function(e,n,r,i){var a,o,u,l=r.resolve("Query",i.fieldName,n)
if(l)return l
var s=null!=(a=null==n||null==(o=n.request)?void 0:o.keys)?a:[],d=null==n||null==(u=n.request)?void 0:u.bundle,f=d===(c||(c=t(37547))).DEFAULT_BUNDLE_NAME?"":d
return s.map((function(e){return(0,(h||(h=t(30202))).internEntityCacheId)(e+"."+f)}))},node:function(e,n,r){var i
if(n._id&&(i=(0,(h||(h=t(30202))).internEntityCacheId)(n._id),r.resolve(i,"__typename")))return i},nodes:function(e,n){if(n._ids){var r=n._ids
return Array.isArray(r)?r.map((function(e){return(0,(h||(h=t(30202))).internEntityCacheId)(e)})):void 0}},tvuiCachedPinotComponent:function(e,n,r,i){if(n.componentId){var a=r.resolve("Query",i.fieldName,n)
if(a)return a
var o=(0,(h||(h=t(30202))).internEntityCacheId)(n.componentId)
try{if("string"==typeof r.resolve(o,"__typename"))return o}catch(e){}}}}}),skipConnectionPageLinks:Q.skipConnectionPageLinks,updates:{Mutation:(d||(d=t(91744))).mutationUpdates,Subscription:(0,N.default)({},(E||(E=t(3865))).nrtsUpdates)}},{},{syncHydrate:!1}))],(0,x.default)([]),[(0,(m||(m=t(68309))).dynamicSubscriptionExchange)(T,L),X]),fetchOptions:{headers:(0,N.default)({},(u||(u=t(55118))).DEFAULT_HEADERS,{"x-Netflix.context.app-version":M,"x-Netflix.context.cloud-games-enabled":(0,(a||(a=t(80192))).getFeature)("cloudGamesEnabled")+"","x-Netflix.context.dt":(0,(i||(i=t(59127))).getDeviceTierHeaderValue)()||"","x-Netflix.context.locales":null==G?void 0:G.join(","),"X-Netflix.context.ui-flavor":B,"X-Netflix.FastPlanner-All":(0,(a||(a=t(80192))).getFeature)("bfgFastPlannerAllEnabled")+"","X-Netflix.FastPlanner-Subset":(0,(a||(a=t(80192))).getFeature)("bfgFastPlannerSubsetEnabled")+""},(0,(o||(o=t(76079))).getDeviceRequestEnrichmentHeaders)(),q.headers)},url:C(q.url)||C((0,(s||(s=t(73963))).createGraphQLServerUrl)(V))})}},n.isUnauthOperationResult=R
var i,a,o,u,l,s,c,d,f,v,p,h,m,y,g,k,b,E,_,S,x=r(t(63191)),N=r(t(93090)),A=r(t(80875)),O=(t(11072),t(47618),t(26950))
function C(e){return e?"string"==typeof e?e:e.scheme+"://"+e.host+e.path:""}n.Client=O.Client,t(50206)
var w="EntityTreatment",T=w.length
function I(e){if("PinotChannelScheduleEntryEvidence"===e)return!0
var n=e.length
if(n<T)return!1
for(var t=0;t<T;t++)if(e[n-T+t]!==w[t])return!1
return!0}function R(e){var n,t,r=function(e){var n,t
return"object"===(0,A.default)(e)&&null!=e&&("UNAUTHENTICATED"===e.message||"UNAUTHENTICATED"===(null==(n=e.extensions)?void 0:n.code)||"UNAUTHENTICATED"===(null==(t=e.extensions)?void 0:t.errorType))},i=function(e){return Array.isArray(e)&&e.some(r)}
return i(null==(n=e.error)?void 0:n.graphQLErrors)||i(null==(t=e.extensions)||null==(t=t.suppressedErrors)?void 0:t.graphQLErrors)}function P(e){var n=!1
return(0,O.mapExchange)({onResult:function(t){!n&&R(t)&&(n=!0,e())}})}},99617:function(e,n){function t(e){if(!Array.isArray(e))return[]
for(var n=[],t=0;t<e.length;t++){var r=e[t]
"string"==typeof r&&n.push(r)}return n}n.__esModule=!0,n.mergeConnectionEdges=function(e,n,r,i){var a=t(n),o=t(r)
if(0===a.length)return o
if(0===o.length)return a
for(var u=new Set,l=0;l<a.length;l++){var s=a[l]
if(s){var c=e.resolve(s,"node")
c&&u.add(c)}}if(i&&null!=i.after){for(var d=a.slice(),f=0;f<o.length;f++){var v=o[f]
if(v){var p=e.resolve(v,"node")
p&&!u.has(p)&&(u.add(p),d.push(v))}}return d}if(i&&null!=i.before){for(var h=[],m=0;m<o.length;m++){var y=o[m]
if(y){var g=e.resolve(y,"node")
g&&!u.has(g)&&(u.add(g),h.push(y))}}return[].concat(h,a)}return o}},64700:function(e,n){n.__esModule=!0,n.queryDataOverrideContext=function(e){return{dataOverride:e}}},47784:function(e,n,t){n.__esModule=!0,n.deppResolvers=void 0
var r=t(79719)
n.deppResolvers={PinotEntityEdge:{node:r.entityTreatmentResolver},PinotSingleItemSection:{entity:r.entityTreatmentResolver,hiddenEntities:r.entityTreatmentResolver}}},55416:function(e,n){n.__esModule=!0,n.default=void 0
var t=function(){var e={kind:"ScalarField",name:"__typename"}
return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"eventDrivenEntityTreatment_nrtsEventListener",selections:[{concreteType:"PinotEventStateActionMap",kind:"LinkedField",name:"eventStateActions",plural:!0,selections:[{kind:"LinkedField",name:"actions",plural:!0,selections:[e,{kind:"InlineFragment",selections:[{kind:"ScalarField",name:"delta"}],type:"PinotApplyDeltaAction"}]},{kind:"ScalarField",name:"stateValue"}]},{kind:"LinkedField",name:"nrtsSubscriptionParams",plural:!1,selections:[e,{kind:"ScalarField",name:"name"},{kind:"ScalarField",name:"parameters"},{kind:"ScalarField",name:"shouldSubscribe"},{kind:"InlineFragment",selections:[{concreteType:"NrtsEventWindowStateValue",kind:"LinkedField",name:"value",plural:!1,selections:[e,{kind:"ScalarField",name:"currentState"},{kind:"ScalarField",name:"updatedAt"}]}],type:"NrtsEventWindowState"}]}],type:"PinotNrtsEventListener"}}()
t.hash="2a2a2b3adee87c69af250085c16803ab",n.default=t},56639:function(e,n){n.__esModule=!0,n.default=void 0
var t=function(){var e={kind:"ScalarField",name:"__typename"},n={kind:"ScalarField",name:"id"},t={kind:"ScalarField",name:"nameText"}
return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"eventDrivenEntityTreatment_pinotDelta",selections:[e,{kind:"FragmentSpread",name:"getDeltaTrackingInfo_pinotDelta"},n,{kind:"ScalarField",name:"recordVersion"},{kind:"LinkedField",name:"value",plural:!1,selections:[e,{argumentDefinitions:[],kind:"InlineDataFragmentSpread",name:"useEclipseChannelRow_scheduleContainer",selections:[{abstractKey:"__isPinotScheduleContainer",kind:"InlineFragment",selections:[{concreteType:"PinotChannelScheduleEntryEvidence",kind:"LinkedField",name:"currentScheduleEntry",plural:!1,selections:[e,n,t,{kind:"ScalarField",name:"scheduleText"}]},{concreteType:"PinotChannelScheduleEntryEvidence",kind:"LinkedField",name:"nextScheduleEntry",plural:!1,selections:[e,n,t]}],type:"PinotScheduleContainer"}]}]}],type:"PinotDelta"}}()
t.hash="2e43ad117bbd71a4597553ad2063e031",n.default=t},29231:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.getAllDeltasForEntityTreatment=function(e,n){return[].concat((0,a.default)(function(e){var t=n.resolve(e,"delta")
if(!t||!Array.isArray(t)||0===t.length)return[]
for(var r=[],i=0;i<t.length;i++){var a=t[i]
if(a&&"string"==typeof a){var o=n.resolve(a,"__typename"),u=n.resolve(a,"id")
o&&"string"==typeof o&&u&&"string"==typeof u&&"PinotEntityDelta"===o&&r.push({__typename:o,cacheKey:a,id:u})}}return r}(e)),(0,a.default)(function(e){var t=n.resolve(e,"deltas")
if(!t||!Array.isArray(t)||0===t.length)return[]
for(var r=[],i=0;i<t.length;i++){var a=t[i]
if(a&&"string"==typeof a){var o=n.resolve(a,"__typename"),u=n.resolve(a,"id")
o&&"string"==typeof o&&u&&"string"==typeof u&&"PinotDelta"===o&&r.push({__typename:o,cacheKey:a,id:u})}}return r}(e)))},n.getEventListeners=function(e,n){var t=n.resolve(e,"eventListeners")
if(!t||!Array.isArray(t)||0===t.length)return[]
for(var r=[],i=0;i<t.length;i++){var a=t[i],u=n.resolve(a,"__typename")
u&&"string"==typeof u&&o[u]&&r.push({__typename:u,cacheKey:a})}return r},n.getFullRecord=function(e,n){for(var t=e.inspectFields(n),r={},i=0;i<t.length;i++){var a=t[i]
null!=a&&a.fieldKey&&(r[a.fieldKey]=e.resolve(n,a.fieldKey))}return r},n.getNrtsEventListener=function(e){for(var n=e.cache,r=e.eventListeners,a=0;a<r.length;a++){var o,u=r[a]
if(u&&"PinotNrtsEventListener"===u.__typename){var l=n.readFragment((i||(i=t(58170))).nrtsEventListenerReader,u.cacheKey)
if(null!=l&&null!=(o=l.nrtsSubscriptionParams)&&o.value&&l.eventStateActions)return{currentState:l.nrtsSubscriptionParams.value.currentState,eventListener:l}}}return{currentState:void 0,eventListener:void 0}}
var i,a=r(t(63191)),o={PinotEntitySubscriptionEventListener:!0,PinotNrtsEventListener:!0}},82926:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.deltaHandlersByTypeName=void 0
var i,a,o=r(t(93090)),u=["__typename","id","eventListeners"]
function l(e){for(var n=0,t=u;n<t.length;n++)delete e[t[n]]
return e}n.deltaHandlersByTypeName={PinotDelta:function(e){var n=e.cache,r=e.deltaCacheKey,u=n.readFragment((a||(a=t(58170))).pinotDeltaReader,r)
if(u){var s=n.resolve(r,"value")
if("string"==typeof s)return l((0,(i||(i=t(29231))).getFullRecord)(n,s))
if(u.value)return l((0,o.default)({},u.value))}},PinotEntityDelta:function(e){var n=e.cache,r=e.deltaCacheKey,a=n.resolve(r,"entityTreatment")
if(a&&"string"==typeof a){var o=(0,(i||(i=t(29231))).getFullRecord)(n,a)
return o.delta=null,l(o)}}}},79719:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.entityTreatmentResolver=function(e,n,t,r){var i=t.resolve(r.parentKey,r.fieldName)
if(!i)return i
try{if(Array.isArray(i)){for(var a=[],o=0;o<i.length;o++){var u=i[o]
"string"==typeof u?a.push(d({cache:t,entityCacheKey:u,info:r})):a.push(u)}return a}if("string"==typeof i)return d({cache:t,entityCacheKey:i,info:r})}catch(e){return i}return i}
var i,a,o=r(t(63191)),u=t(52355)
function l(e){for(var n=e.currentState,t=e.eventStateActions,r={},i=0;i<t.length;i++){var a=t[i]
if(a&&a.stateValue===n)for(var o=a.actions,u=0;u<o.length;u++){var l=o[u]
l&&"PinotApplyDeltaAction"===l.__typename&&l.delta&&(r[l.delta]=!0)}}return r}function s(e,n,r){var a=(0,(i||(i=t(29231))).getNrtsEventListener)({cache:r,eventListeners:e}),u=a.currentState,s=a.eventListener,c=[]
if(u&&s)for(var d,f=l({currentState:u,eventStateActions:null!=(d=s.eventStateActions)?d:[]}),v=0;v<n.length;v++){var p=n[v]
p&&f[p.id]&&c.push(p)}var h=n.filter((function(e){return"PinotDelta"===e.__typename}))
return[].concat((0,o.default)(h),c)}function c(e){return!!(a||(a=t(82926))).deltaHandlersByTypeName[e]}function d(e){var n=e.cache,r=e.entityCacheKey,o=(e.info,(0,(i||(i=t(29231))).getEventListeners)(r,n)),l=(0,(i||(i=t(29231))).getAllDeltasForEntityTreatment)(r,n)
if(0===o.length&&0===l.length)return r
n.resolve(r,"__typename")
var d,f=s(o,l,n)
if(!f.length)return r
for(var v=0;v<f.length;v++){var p=f[v]
if(p){if(!c(p.__typename))return r
var h=(0,(a||(a=t(82926))).deltaHandlersByTypeName[p.__typename])({cache:n,deltaCacheKey:p.cacheKey})
h&&(d?(0,u.mergeDeep)(d,h):d=h)}}return d?(d.__typename||(d.__typename=n.resolve(r,"__typename")),d):r}},58170:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.pinotDeltaReader=n.nrtsEventListenerReader=void 0,t(24139)
var i=t(73049),a=r(t(55416)),o=r(t(56639))
n.pinotDeltaReader=(0,i.formatDocument)(o.default),n.nrtsEventListenerReader=(0,i.formatDocument)(a.default)},21269:function(e,n,t){var r,i,a,o
n.__esModule=!0,n.disposeUrqlClient=function(){(0,(r||(r=t(18755))).getGlobalUrqlClient)()&&((0,t(44643).clearAllSubscriptions)(),(0,(o||(o=t(3865))).clearAllSubscriptions)(),(0,(a||(a=t(67280))).clearRecordVersions)(),(0,(i||(i=t(30202))).clearEntityInternTable)(),(0,t(11324).clearAllSubscriptions)(),(0,(r||(r=t(18755))).clearGlobalUrqlClient)())}},30202:function(e,n){n.__esModule=!0,n.clearEntityInternTable=function(){t={idByShortId:{},shortIdById:{}}},n.internEntityCacheId=function(e){var n=t.shortIdById[e]
if(n)return n
var i=r.toString()
return r++,t.shortIdById[e]=i,t.idByShortId[i]=e,i},n.releaseEntityCacheIds=function(e){var n=t,r=n.idByShortId,i=n.shortIdById
e.forEach((function(e){var n=r[e]
void 0!==n&&(delete r[e],i[n]===e&&delete i[n])}))}
var t={idByShortId:{},shortIdById:{}},r=0},80814:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.makeFetchBody=function(e){var n,r,o,u,l=e.query,s={documentId:void 0,extensions:e.extensions,operationName:(0,(i||(i=t(14055))).getOperationName)(l),query:void 0,variables:e.variables||{}}
if(s.query=null!=(n=null==(r=l.params)?void 0:r.text)?n:"",null!=(o=l.params)&&o.providedVariables)for(var c=0,d=Object.entries(l.params.providedVariables);c<d.length;c++){var f=(0,a.default)(d[c],2),v=f[0],p=f[1]
s.variables&&(s.variables[v]=p.get())}return null!=(u=l.params)&&u.id&&(s.extensions={persistedQuery:{id:l.params.id,version:102}},s.query=void 0),s}
var i,a=r(t(30780))},93463:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.createGraphqlSubscriptionForwarder=function(e){var n,r,u,l=(null==(n=e.appConfig)?void 0:n.env)||(a||(a=t(73963))).ServerEnvironment.prod,s=(null==(r=e.requestOptions)?void 0:r.url)||(0,(a||(a=t(73963))).createGraphQLServerUrl)(l),c=function(){return u||(u=(0,(i||(i=t(59469))).createPushySubscriptionClient)({clientOptions:e,url:s})),u}
return function(e,n){return{subscribe:function(t){var r,i,a,u,l,s=n.query,d=null!=(r=null!=(i=null==s||null==(a=s.params)?void 0:a.id)?i:e.documentId)?r:null,f=null!=(u=null==s||null==(l=s.params)?void 0:l.text)?u:null
if(!d&&!f)return t.error(new o.default({data:{operationName:e.operationName,persistedId:d,queryText:f},message:"Subscription has neither params.id nor params.text.",type:"GraphqlSubscriptionMissingQueryError"})),{unsubscribe:function(){}}
var v=c().subscribe({id:d,operationName:e.operationName||"",query:d?null:f,variables:e.variables},t)
return{unsubscribe:function(){v()}}}}}}
var i,a,o=r(t(20244))},68309:function(e,n,t){var r,i,a
n.__esModule=!0,n.dynamicSubscriptionExchange=function(e,n){var o=(0,(i||(i=t(93463))).createGraphqlSubscriptionForwarder)(e),u=(0,(a||(a=t(72915))).createNrtsSubscriptionForwarder)(),l=function(e,n){return n.context.isNrtsSubscription?u(e,n):o(e,n)}
return(0,(r||(r=t(26950))).subscriptionExchange)({forwardSubscription:n?n(l):l})}},72915:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.createNrtsSubscriptionForwarder=void 0
var i,a,o,u=r(t(2509)),l=t(70413),s=r(t(35972)),c=r(t(93090)),d=r(t(20244)),f=["__typename"]
function v(e){var n=e._id,t=e.query,r=e.result,i=e.typename
if(r&&t&&(0,l.h)(t,"nrtsState")){r.__typename
var a=(0,u.default)(r,f)
return{data:{nrtsState:{__typename:i,_id:n,updatedAt:r.updatedAt,value:(0,c.default)({},a)}}}}}n.createNrtsSubscriptionForwarder=function(){return function(e){var n=(0,c.default)({},e,{query:e.query||"",variables:e.variables||{}})
return{subscribe:function(e){var r,u=!1
return function(){var l,c,f,p,h,m,y,g,k;(0,s.default)().async((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,l=n.variables,c=l.id,f=l.initialUpdatedAt,p=l.key,h=l.name,m=l.parameters,b.next=4,(0,s.default)().awrap((0,(i||(i=t(7569))).waitForNrdjs)())
case 4:return y=b.sent,b.next=7,(0,s.default)().awrap(y.getNrtsClient())
case 7:if(g=b.sent,!u){b.next=10
break}return b.abrupt("return",void 0)
case 10:return k=null!=f?f:0,b.next=13,(0,s.default)().awrap(g.subscribe({name:h,parameters:m,updatedAt:f},(function(r){if(r.updatedAt<k)new d.default({innerError:{id:c,lastUpdatedAt:k,name:h,parameters:m,value:r},message:"Value received from "+p+" NRTS subscription had update time of "+r.updatedAt+" but previous data had "+k+".",type:"NrtsValidationStaleError"}).logAsHandledException()
else{k=r.updatedAt
var i=(0,(o||(o=t(11324))).getSubscribedNodes)(p,c)
i.forEach((function(t){var i=v({_id:t,query:n.query,result:r,typename:p})
i&&e.next(i)})),r.isTerminating&&i.forEach((function(e){(0,(o||(o=t(11324))).unsubscribeNode)(p,c,e)}))}})))
case 13:r=b.sent,(a||(a=t(44643))).subscriptionsCache[c]={handle:void 0,key:p,name:h,parameters:m,pending:!0},b.next=21
break
case 17:b.prev=17,b.t0=b.catch(0),new d.default({innerError:{error:b.t0},message:"Subscribing to the NRTS Client failed.",type:"NrtsFailedToSubscribeError"}).logAsHandledException(),null==e.error||e.error(b.t0)
case 21:case"end":return b.stop()}}),null,null,[[0,17]],Promise)}(),{unsubscribe:function(){u=!0,r&&"function"==typeof r.cancel&&r.cancel()}}}}}}},14055:function(e,n){n.__esModule=!0,n.getOperationName=function(e){return e.name}},48110:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.formatDocumentOptimized=function(e){if(!e)return{definitions:[],kind:(i||(i=t(5925))).Kind.DOCUMENT,name:""}
var n=(0,(u||(u=t(94404))).getRelayArtifactNode)(e)
if(null!=n&&(0,(u||(u=t(94404))).isUrqlDocumentNode)(n)){var r,a=n,s=void 0!==a.appendEdgeSpecs,d=null!=(r=a.appendEdgeSpecs)?r:Q(a)
return a.appendEdgeSpecs=d,!s&&d.length>0&&(0,(o||(o=t(74914))).registerAppendEdgeUpdatesOptimized)(d),a}p=v(),h=v(),m=v()
try{var f,y=!1,g=(0,(u||(u=t(94404))).isFragment)(e)?A(e):O(e)
return e&&"object"===(0,c.default)(e)&&"__key"in e&&Object.defineProperty(g,"__key",{enumerable:!1,value:e.__key}),null!=n?((0,(l||(l=t(21631))).replaceRelayDocumentWithUrqlDocumentOptimized)(e,g),null!=(f=g.appendEdgeSpecs)&&f.length&&(n.appendEdgeSpecs=g.appendEdgeSpecs),n):g}finally{y||(y=!0,p=null,h=null,m=null)}}
var i,a,o,u,l,s=r(t(93090)),c=r(t(80875)),d=new WeakMap
function f(e){if(void 0===e)return!1
var n=(0,c.default)(e)
return null===e||"string"===n||"number"===n||"boolean"===n||"object"===n}function v(){return Object.create(null)}var p=null,h=null,m=null
function y(e){if(!p)return{kind:(i||(i=t(5925))).Kind.NAME,value:e}
var n=p[e]
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.NAME,value:e}
return p[e]=r,r}function g(e){if(!h)return{kind:(i||(i=t(5925))).Kind.VARIABLE,name:y(e)}
var n=h[e]
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.VARIABLE,name:y(e)}
return h[e]=r,r}function k(e){if(!m)return{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:y(e)}
var n=m[e]
if(n)return n
var r={kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:y(e)}
return m[e]=r,r}function b(e){for(var n=0;n<e.length;n++){var r=e[n]
if(r.kind===(i||(i=t(5925))).Kind.FIELD&&"__typename"===r.name.value&&!r.alias)return}e.push({_generated:!0,kind:(i||(i=t(5925))).Kind.FIELD,name:{kind:(i||(i=t(5925))).Kind.NAME,value:"__typename"}})}function E(e,n){for(var t=[],r=0;r<e.length;r++){var i=I(e[r])
void 0!==i&&t.push(i)}return n&&b(t),t}function _(e,n){if(!e||!e.length)return[]
for(var r=[],a=0;a<e.length;a++){var o=e[a],u=M(o)
if(!u||!u.kind)throw new Error(""+n+JSON.stringify(o))
r.push({kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y(o.name),value:u})}return r}function S(e){if(e&&e.length){for(var n=[],t=v(),r=v(),i=0;i<e.length;i++){var a=e[i],o=a.name.value
"_"!==o[0]?n.push(a):o=o.slice(1),r[o]||(r[o]=[]),r[o].push(a),t[o]||(t[o]=a)}for(var u in r)if(Object.prototype.hasOwnProperty.call(r,u)&&r[u].length>1){var l=t[u]
t[u]=(0,s.default)({},l,{_all:r[u]})}return{_directives:t,directives:n}}}function x(e,n){void 0===n&&(n=new WeakSet)
for(var t=0;t<e.length;t++){var r=e[t]
if(!n.has(r)){if(n.add(r),"LinkedHandle"===r.kind&&"connection"===r.handle)return!0
if(("LinkedField"===r.kind||"InlineFragment"===r.kind||"Condition"===r.kind)&&x(r.selections,n))return!0}}return!1}function N(e){var n,t,r
return null!=(null==(n=e.fragment.metadata)?void 0:n.refetch)||null!=(null==(t=e.params.metadata)?void 0:t.refetch)||null!=(null==(r=e.operation.metadata)?void 0:r.refetch)}function A(e){var n=(0,(u||(u=t(94404))).getFragment)(e),r=E(n.selections,!0),a=[]
if(n.argumentDefinitions)for(var o=0;o<n.argumentDefinitions.length;o++){var l=n.argumentDefinitions[o],s=l.name,c="defaultValue"in l?l.defaultValue:void 0
a.push(C(s,c))}return{definitions:[{kind:(i||(i=t(5925))).Kind.FRAGMENT_DEFINITION,name:{kind:(i||(i=t(5925))).Kind.NAME,value:n.name},selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:r},typeCondition:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:n.type}},variableDefinitions:a}],kind:(i||(i=t(5925))).Kind.DOCUMENT,name:n.name}}function O(e){var n,r,l,c=(0,(u||(u=t(94404))).getRequest)(e),d=[]
if(c.fragment.argumentDefinitions)for(var v=c.fragment.argumentDefinitions,p=0;p<v.length;p++){var h=v[p],m=h.name,y="defaultValue"in h?h.defaultValue:void 0
d.push(C(m,y))}if(c.params.providedVariables){var g=c.params.providedVariables
for(var k in g)if(Object.prototype.hasOwnProperty.call(g,k)){var b=g[k]
if(void 0!==b){for(var _=b.get(),S=f(_)?_:void 0,A=w(S),O=-1,T=0;T<d.length;T++)if(d[T].variable.name.value===k){O=T
break}if(-1===O)d.push(C(k,S))
else{if(void 0===A)continue
var I=d[O]
d[O]={defaultValue:A,kind:I.kind,type:I.type,variable:I.variable}}}}}var R=E(L(c.operation.selections),!1),P=N(c)||x(c.operation.selections),D={__key:null!=(n=null!=(r=(0,(a||(a=t(62273))).hashAndEncode)(c.params.cacheID))?r:c.params.id)?n:void 0,definitions:[{kind:(i||(i=t(5925))).Kind.OPERATION_DEFINITION,name:{kind:(i||(i=t(5925))).Kind.NAME,value:c.operation.name},operation:c.params.operationKind,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:R},variableDefinitions:d}],documentId:null!=(l=c.params.id)?l:void 0,kind:(i||(i=t(5925))).Kind.DOCUMENT,name:c.operation.name,needsParentVarsAttachment:P,params:(0,s.default)({},c.params)}
if("mutation"===c.params.operationKind){var F=Q(D)
D.appendEdgeSpecs=F,F.length>0&&(0,(o||(o=t(74914))).registerAppendEdgeUpdatesOptimized)(F)}return D}function C(e,n){var r=w(n),a={kind:(i||(i=t(5925))).Kind.VARIABLE_DEFINITION,type:{kind:(i||(i=t(5925))).Kind.NAMED_TYPE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:e}},variable:{kind:(i||(i=t(5925))).Kind.VARIABLE,name:{kind:(i||(i=t(5925))).Kind.NAME,value:e}}}
return void 0!==r?{defaultValue:r,kind:a.kind,type:a.type,variable:a.variable}:a}function w(e){if(null!=e)return T(e)}function T(e){if("string"==typeof e)return{kind:(i||(i=t(5925))).Kind.STRING,value:e}
if("number"==typeof e)return{kind:Number.isInteger(e)?(i||(i=t(5925))).Kind.INT:(i||(i=t(5925))).Kind.FLOAT,value:e.toString()}
if("boolean"==typeof e)return{kind:(i||(i=t(5925))).Kind.BOOLEAN,value:e}
if(null===e)return{kind:(i||(i=t(5925))).Kind.NULL}
if(Array.isArray(e)){for(var n=[],r=0;r<e.length;r++)n.push(T(e[r]))
return{kind:(i||(i=t(5925))).Kind.LIST,values:n}}var a=[]
for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=e[o]
if(void 0!==u){var l={kind:(i||(i=t(5925))).Kind.OBJECT_FIELD,name:{kind:(i||(i=t(5925))).Kind.NAME,value:o},value:T(u)}
a.push(l)}}return{fields:a,kind:(i||(i=t(5925))).Kind.OBJECT}}function I(e){var n,r=d.get(e)
if(r)return r
switch(e.kind){case"ScalarField":var a=e
n={alias:a.alias?y(a.alias):void 0,arguments:_(a.args," ScalarField Invalid argument value: "),kind:(i||(i=t(5925))).Kind.FIELD,name:y(a.name)}
break
case"Condition":var o=e,u=[{arguments:[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y("if"),value:g(o.condition)}],kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:y(o.passingValue?"include":"skip")}],l=F(o),s=S(u)
n=s?{_directives:s._directives,directives:s.directives,kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:l.selectionSet}:{directives:u,kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:l.selectionSet}
break
case"TypeDiscriminator":var c=[]
b(c),n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:c}}
break
case"InlineFragment":var f=e,v=L(f.selections)
n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:E(v,!0)},typeCondition:k(f.abstractKey||f.type)}
break
case"LinkedField":var p,h=e,m=E(L(h.selections),!0),x=S(h.directives),N=h.alias?y(h.alias):void 0,A=_(h.args,"LinkedField Invalid argument value: "),O=y(h.name),C=k(null!=(p=h.concreteType)?p:""),w={kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:m}
n=x?{_directives:x._directives,alias:N,arguments:A,directives:x.directives,kind:"Field",name:O,selectionSet:w,typeCondition:C}:{alias:N,arguments:A,directives:[],kind:"Field",name:O,selectionSet:w,typeCondition:C}
break
case"LinkedHandle":default:n=void 0
break
case"ClientExtension":case"InlineDataFragmentSpread":n={kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:E(e.selections,!0)}}
break
case"AliasedInlineFragmentSpread":var T,I=e,R=I.name,P=null!=(T=I.fragment)&&T.selections?E(I.fragment.selections,!0):E([],!0),D=[{arguments:[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y("as"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:R}}],kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:y("alias")}],q=S(D)
n=q?{_directives:q._directives,alias:y(R),directives:q.directives,kind:(i||(i=t(5925))).Kind.FIELD,name:y("__relayAliasedFragment"),selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:P}}:{alias:y(R),directives:D,kind:(i||(i=t(5925))).Kind.FIELD,name:y("__relayAliasedFragment"),selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:P}}}return void 0!==n&&d.set(e,n),n}function R(e){var n
if("connection"===e.handle)return[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y("key"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:e.key}}]
if(null!=(n=e.handleArgs)&&n.length){for(var r=[],a=0;a<e.handleArgs.length;a++){var o=e.handleArgs[a],u=M(o)
r.push({kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y(o.name),value:u})}return r}return[{kind:(i||(i=t(5925))).Kind.ARGUMENT,name:y("key"),value:{kind:(i||(i=t(5925))).Kind.STRING,value:e.key}}]}function P(e,n){if(n){var r=n.directives||[]
r.push({arguments:R(e),kind:(i||(i=t(5925))).Kind.DIRECTIVE,name:y(e.handle)}),n.directives=r}}function L(e){for(var n=!1,t=0;t<e.length;t++)if("LinkedHandle"===e[t].kind){n=!0
break}if(!n)return e
for(var r=0;r<e.length;r++){var i=e[r]
if("LinkedHandle"===i.kind)for(var a=i,o=0;o<e.length;o++){var u,l,s=e[o]
"LinkedField"===s.kind&&s.name===a.name&&s.alias===a.alias&&D(null!=(u=a.args)?u:[],null!=(l=s.args)?l:[])&&P(a,s)}}for(var c=[],d=0;d<e.length;d++){var f=e[d]
"LinkedHandle"!==f.kind&&c.push(f)}return c}function D(e,n){if(!e.length)return!0
if(!n.length)return!1
for(var t=v(),r=0;r<n.length;r++){var i=n[r]
t[i.name]=i}for(var a=0;a<e.length;a++){var o=e[a],u=t[o.name]
if(!u)return!1
if(JSON.stringify(u)!==JSON.stringify(o))return!1}return!0}function F(e){var n=L(e.selections)
return{kind:(i||(i=t(5925))).Kind.INLINE_FRAGMENT,selectionSet:{kind:(i||(i=t(5925))).Kind.SELECTION_SET,selections:E(n,!0)}}}function q(e){if("string"==typeof e)return{kind:(i||(i=t(5925))).Kind.STRING,value:e}
if("number"==typeof e)return{kind:Number.isInteger(e)?(i||(i=t(5925))).Kind.INT:(i||(i=t(5925))).Kind.FLOAT,value:e.toString()}
if("boolean"==typeof e)return{kind:(i||(i=t(5925))).Kind.BOOLEAN,value:e}
if(null===e)return{kind:(i||(i=t(5925))).Kind.NULL}
if(Array.isArray(e)){for(var n=[],r=0;r<e.length;r++)n.push(q(e[r]))
return{kind:(i||(i=t(5925))).Kind.LIST,values:n}}var a=[]
for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=e[o]
void 0!==u&&a.push({kind:(i||(i=t(5925))).Kind.OBJECT_FIELD,name:y(o),value:q(u)})}return{fields:a,kind:(i||(i=t(5925))).Kind.OBJECT}}function M(e){if(!e)throw new Error("NormalizationArgument is undefined or null")
if("Literal"===e.kind){var n=e.value
if(!f(n))throw new Error("Unsupported literal argument value: "+JSON.stringify(n))
return q(n)}if("ListValue"===e.kind){for(var r=e.items,a=[],o=0;o<r.length;o++){var u=r[o],l=M(u)
if(!l||!l.kind)throw new Error("Invalid list item: "+JSON.stringify(u))
a.push(l)}return{kind:(i||(i=t(5925))).Kind.LIST,values:a}}if("ObjectValue"===e.kind){for(var s=e.fields,c=[],d=0;d<s.length;d++){var v=s[d],p=M(v)
if(!p||!p.kind)throw new Error("Invalid object field value: "+JSON.stringify(v))
c.push({kind:(i||(i=t(5925))).Kind.OBJECT_FIELD,name:y(v.name),value:p})}return{fields:c,kind:(i||(i=t(5925))).Kind.OBJECT}}if("Variable"===e.kind)return g(e.variableName)
throw new Error("Unsupported argument value type: "+e.kind)}function K(e){var n=e.directives
if(null!=n&&n.length)for(var t=0;t<n.length;t++){var r=n[t]
if("appendEdge"===r.name.value||"prependEdge"===r.name.value)return r}}function V(e){return"prependEdge"===e.name.value?"prepend":"append"}function G(e){var n=e.arguments
if(null==n||!n.length)return null
for(var r=0;r<n.length;r++){var a=n[r]
if("connections"===a.name.value&&a.value.kind===(i||(i=t(5925))).Kind.VARIABLE)return a.value.name.value}return null}function j(e){var n=e.arguments
if(null==n||!n.length)return[]
for(var r=[],a=0;a<n.length;a++){var o=n[a]
o.value.kind===(i||(i=t(5925))).Kind.VARIABLE&&r.push({name:o.name.value,variableName:o.value.name.value})}return r}function U(e,n){if(!n)return e
for(var t=e+":"+n.name,r=0;r<n.args.length;r++){var i=n.args[r]
t+=":"+i.name+"="+i.variableName}return t}function B(e,n,r,a,o){void 0===o&&(o=new WeakMap)
for(var u=0;u<e.length;u++){var l,s=e[u],c=U(n,a),d=o.get(s)
if((null==d||!d.has(c))&&(d?d.add(c):o.set(s,new Set([c])),s.kind===(i||(i=t(5925))).Kind.FIELD)){var f=K(s)
if(f){var v,p,h=G(f)
h&&r.push({connectionFieldArgs:null!=(v=null==a?void 0:a.args)?v:"sections"===s.name.value?j(s):[],connectionFieldName:null!=(p=null==a?void 0:a.name)?p:s.name.value,connectionsVariable:h,direction:V(f),mutationFieldName:n})}null!=(l=s.selectionSet)&&l.selections.length&&B(s.selectionSet.selections,n,r,{args:j(s),name:s.name.value},o)}}}function Q(e){for(var n=[],r=new WeakMap,a=0;a<e.definitions.length;a++){var o=e.definitions[a]
if(o.kind===(i||(i=t(5925))).Kind.OPERATION_DEFINITION&&o.operation===(i||(i=t(5925))).OperationTypeNode.MUTATION)for(var u=o.selectionSet.selections,l=0;l<u.length;l++){var s,c=u[l]
if(c.kind===(i||(i=t(5925))).Kind.FIELD){var d=c.name.value
null!=(s=c.selectionSet)&&s.selections.length&&B(c.selectionSet.selections,d,n,void 0,r)}}}return n}},67280:function(e,n){n.__esModule=!0,n.clearRecordVersions=function(){for(var e in t)delete t[e]},n.gateWriteByVersion=function(e){var n=e.data,i=e.getIsWriteRejected,a=void 0===i?function(e,n){return n<e}:i,o=e.versionFieldName,u=void 0===o?"recordVersion":o,l=r(n)
if(l){var s=n[l],c=n[u],d=n.__typename+":"+s,f=t[d]
if(void 0!==c)if(void 0!==f&&a(f,c))for(var v in n)v!==l&&"_id"!==v&&"id"!==v&&"__typename"!==v&&delete n[v]
else t[d]=c}}
var t={}
function r(e){return e._id?"_id":e.id?"id":null}},91818:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.__resetGcSchedulerInstance=function(){a=void 0},n.createGcScheduler=function(e,n){var t=n.isPaused,r=void 0!==t&&t,i=n.settings
if(e.enabled&&e.executeGc)return a||(a=d({executeGc:e.executeGc})),i&&a.setGcSettings(i),r&&a.pauseGc(),a.createScheduler()},n.evictAllCacheData=function(){if(f())try{var e
null==(e=a)||e.evictAllCacheData()}catch(e){}},n.getUrqlCacheStats=v,n.invalidateQueryResults=function(){if(f())try{var e
null==(e=a)||e.invalidateQueryResults()}catch(e){}},n.pauseGc=function(){var e
f()&&(null==(e=a)||e.pauseGc())},n.resumeGc=function(){var e
f()&&(null==(e=a)||e.resumeGc())},n.runGc=function(){if(f())try{var e
null==(e=a)||e.runGc()}catch(e){}}
var i,a,o=t(58449),u=t(51804),l=r(t(93920)),s=r(t(93090)),c=t(5396)
function d(e){var n,r,a,d=e.executeGc,f=!1,v=0,p=function(e){e((function(e){e.records.base.size,e.links.base.size,d(e),v++,e.records.base.size,e.links.base.size}))},h=function(e){try{e()}catch(e){}}
return{createScheduler:function(){return function(e){a=e,f?r=e:(0,c.idleCallback)((function(){try{p(e)}catch(e){}}))}},evictAllCacheData:function(){a&&a((function(e){e.records.base.size,e.links.base.size,e.records.base.clear(),e.links.base.clear(),e.deps&&e.deps.clear(),(0,(i||(i=t(30202))).clearEntityInternTable)()}))},getCacheStats:function(){var e
if(a)return a((function(t){var r,i,a,o,u=t.records.base.size,l=t.links.base.size
e=(0,s.default)({activeOperations:null!=(r=null==(i=t.operations)?void 0:i.size)?r:0,linkEntries:l,recordEntries:u,totalEntries:u+l},n&&{gcActiveOperationsStrategy:n.activeOperationsStrategy?1:0,gcMaxEntities:null!=(a=n.maxEntities)?a:0,gcMinEntities:null!=(o=n.minEntities)?o:0,gcRuns:v})})),e},invalidateQueryResults:function(){a&&a((function(e){var n,t=(0,l.default)((0,u.h)(e.records.base))
try{var r=!1
for(t.s();!(n=t.n()).done;){var i=n.value;("Query"===i||(0,o.h)(i,"Query."))&&e.records.base.delete(i)}}catch(e){t.e(e)}finally{r||(r=!0,t.f())}var a,s=(0,l.default)((0,u.h)(e.links.base))
try{var c=!1
for(s.s();!(a=s.n()).done;){var d=a.value;("Query"===d||(0,o.h)(d,"Query."))&&e.links.base.delete(d)}}catch(e){s.e(e)}finally{c||(c=!0,s.f())}if(e.deps){var f,v=(0,l.default)((0,u.h)(e.deps))
try{var p=!1
for(v.s();!(f=v.n()).done;){var h=f.value;("Query"===h||(0,o.h)(h,"Query."))&&e.deps.delete(h)}}catch(e){v.e(e)}finally{p||(p=!0,v.f())}}}))},pauseGc:function(){f=!0},resumeGc:function(){f=!1,r=void 0},runGc:function(){if(r){var e=r
r=void 0,(0,c.idleCallback)((function(){return h((function(){return p(e)}))}))}},setGcSettings:function(e){n=e}}}function f(){return!!a}function v(){var e
return null==(e=a)?void 0:e.getCacheStats()}globalThis.getCurrentGraphqlCacheStats=v},61878:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.GcStrategyType=n.ACTIVE_OPERATIONS_STRATEGY_XXXSMALL_CACHE_MIN_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_XXXSMALL_CACHE_MAX_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_XXSMALL_CACHE_MIN_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_XXSMALL_CACHE_MAX_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_XSMALL_CACHE_MIN_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_XSMALL_CACHE_MAX_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_SMALL_CACHE_MIN_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_SMALL_CACHE_MAX_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_DEFAULT_MIN_RECORDS=n.ACTIVE_OPERATIONS_STRATEGY_DEFAULT_MAX_RECORDS=void 0,n.createActiveOperationsStrategy=I,n.getGcStrategyConfig=function(){var e={disableUrqlGc:(0,(i||(i=t(80192))).getFeature)("disableUrqlGc"),inactiveOperationsEvictionSkipConnectionPages:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionSkipConnectionPages"),inactiveOperationsEvictionStrategy:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionStrategy"),inactiveOperationsEvictionStrategySmallCache:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionStrategySmallCache"),inactiveOperationsEvictionStrategyXSmallCache:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionStrategyXSmallCache"),inactiveOperationsEvictionStrategyXXSmallCache:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionStrategyXXSmallCache"),inactiveOperationsEvictionStrategyXXXSmallCache:(0,(i||(i=t(80192))).getFeature)("inactiveOperationsEvictionStrategyXXXSmallCache")}
return e.inactiveOperationsEvictionStrategyXXXSmallCache?I((0,f.default)({},C({maxEntities:S,minEntities:x}),{skipConnectionPageLinks:e.inactiveOperationsEvictionSkipConnectionPages,type:A.XXXSmallCacheActiveOperations})):e.inactiveOperationsEvictionStrategyXXSmallCache?I((0,f.default)({},C({maxEntities:E,minEntities:_}),{skipConnectionPageLinks:e.inactiveOperationsEvictionSkipConnectionPages,type:A.XXSmallCacheActiveOperations})):e.inactiveOperationsEvictionStrategyXSmallCache?I((0,f.default)({},C({maxEntities:k,minEntities:b}),{skipConnectionPageLinks:e.inactiveOperationsEvictionSkipConnectionPages,type:A.XSmallCacheActiveOperations})):e.inactiveOperationsEvictionStrategySmallCache?I((0,f.default)({},C({maxEntities:h,minEntities:m}),{skipConnectionPageLinks:e.inactiveOperationsEvictionSkipConnectionPages,type:A.SmallCacheActiveOperations})):e.inactiveOperationsEvictionStrategy?I((0,f.default)({},C({maxEntities:y,minEntities:g}),{skipConnectionPageLinks:e.inactiveOperationsEvictionSkipConnectionPages,type:A.ActiveOperations})):e.disableUrqlGc?w():T()}
var i,a,o,u=r(t(30780)),l=t(34674),s=t(51804),c=t(32714),d=r(t(93920)),f=r(t(93090)),v=r(t(72411)),p=t(92718),h=n.ACTIVE_OPERATIONS_STRATEGY_SMALL_CACHE_MAX_RECORDS=3e4,m=n.ACTIVE_OPERATIONS_STRATEGY_SMALL_CACHE_MIN_RECORDS=1e4,y=n.ACTIVE_OPERATIONS_STRATEGY_DEFAULT_MAX_RECORDS=3e4,g=n.ACTIVE_OPERATIONS_STRATEGY_DEFAULT_MIN_RECORDS=25e3,k=n.ACTIVE_OPERATIONS_STRATEGY_XSMALL_CACHE_MAX_RECORDS=2e4,b=n.ACTIVE_OPERATIONS_STRATEGY_XSMALL_CACHE_MIN_RECORDS=1e4,E=n.ACTIVE_OPERATIONS_STRATEGY_XXSMALL_CACHE_MAX_RECORDS=1e4,_=n.ACTIVE_OPERATIONS_STRATEGY_XXSMALL_CACHE_MIN_RECORDS=5e3,S=n.ACTIVE_OPERATIONS_STRATEGY_XXXSMALL_CACHE_MAX_RECORDS=5e3,x=n.ACTIVE_OPERATIONS_STRATEGY_XXXSMALL_CACHE_MIN_RECORDS=2500,N=5e3,A=n.GcStrategyType={ActiveOperations:"activeOperations",Default:"default",Off:"off",SmallCacheActiveOperations:"smallCacheActiveOperations",XSmallCacheActiveOperations:"xSmallCacheActiveOperations",XXSmallCacheActiveOperations:"xxSmallCacheActiveOperations",XXXSmallCacheActiveOperations:"xxxSmallCacheActiveOperations"}
function O(e){return void 0!==e&&e>0?e:void 0}function C(e){var n,t,r=v.default.location.params,i=null!=(n=O((0,p.parseInteger)(r.urqlGcMaxEntities)))?n:e.maxEntities,a=null!=(t=O((0,p.parseInteger)(r.urqlGcMinEntities)))?t:e.minEntities
return a>=i?e:(i!==e.maxEntities||e.minEntities,{maxEntities:i,minEntities:a})}function w(){return{disableRefCounting:!0,maxEntities:void 0,minEntities:void 0,scheduler:{enabled:!1,executeGc:void 0,maxPendingExecutions:0},skipConnectionPageLinks:!1,type:A.Off}}function T(){return{disableRefCounting:!1,maxEntities:void 0,minEntities:void 0,scheduler:{enabled:!0,executeGc:(a||(a=t(10550))).gc,maxPendingExecutions:1},skipConnectionPageLinks:!1,type:A.Default}}function I(e){var n=e.maxEntities,t=e.minEntities,r=e.skipConnectionPageLinks,i=void 0!==r&&r,a=e.type
return{disableRefCounting:!0,maxEntities:n,minEntities:t,scheduler:{enabled:!0,executeGc:P(n,t),maxPendingExecutions:1},skipConnectionPageLinks:i,type:a}}function R(e){var n,t=new Set,r=(0,d.default)((0,c.h)(e))
try{var i=!1
for(r.s();!(n=r.n()).done;){var a=n.value
t.add(a.key)}}catch(e){r.e(e)}finally{i||(i=!0,r.f())}return t}function P(e,n){return function(r){if(!r.optimisticOrder.length&&r.deps&&r.operations){var i=r.records.base,a=r.links.base,u=i.size+a.size
if(u>e){var l=Math.max(0,u-n),c=Math.min(N,l)
if(0!==c){var f,v=R(r.operations),p=L(r.deps,v,a),h=new Set,m=0,y=(0,d.default)((0,s.h)(i))
try{var g=!1
for(y.s();!(f=y.n()).done;){var k=f.value
if(m>=c)break
p.has(k)||(h.add(k),m+=a.has(k)?2:1)}}catch(e){y.e(e)}finally{g||(g=!0,y.f())}if(m<c){var b,E=(0,d.default)((0,s.h)(a))
try{var _=!1
for(E.s();!(b=E.n()).done;){var S=b.value
if(m>=c)break
h.has(S)||p.has(S)||(h.add(S),m+=1)}}catch(e){E.e(e)}finally{_||(_=!0,E.f())}}var x,A=(0,d.default)(h)
try{var O=!1
for(A.s();!(x=A.n()).done;){var C=x.value
i.has(C)&&i.delete(C),a.has(C)&&a.delete(C),r.deps.delete(C)}}catch(e){A.e(e)}finally{O||(O=!0,A.f())}(0,(o||(o=t(30202))).releaseEntityCacheIds)(h)}}}}}function L(e,n,t){var r,i=new Set,a=[],o=(0,d.default)((0,l.h)(e))
try{var s=!1
for(o.s();!(r=o.n()).done;){var c=(0,u.default)(r.value,2),f=c[0]
F(c[1],n)&&(i.add(f),a.push(f))}}catch(e){o.e(e)}finally{s||(s=!0,o.f())}for(;a.length>0;){var v=a.pop()
if(v){var p=t.get(v)
if(p)for(var h in p)D(p[h],i,a)}}return i}function D(e,n,t){if("string"!=typeof e){if(Array.isArray(e)){var r,i=(0,d.default)(e)
try{var a=!1
for(i.s();!(r=i.n()).done;)D(r.value,n,t)}catch(e){i.e(e)}finally{a||(a=!0,i.f())}}}else n.has(e)||(n.add(e),t.push(e))}function F(e,n){if(!e||0===e.size)return!1
var t,r=(0,d.default)((0,c.h)(e))
try{var i=!1
for(r.s();!(t=r.n()).done;){var a=t.value
if(n.has(a))return!0}}catch(e){r.e(e)}finally{i||(i=!0,r.f())}return!1}},16532:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.commitLocalMutation=function(e,n){var r=null
r=(0,(i||(i=t(27327))).commitMutation)(e,{context:(0,a.default)({},n.context,{dataOverride:n.dataOverride}),mutation:n.mutation,onCompleted:function(e,t){try{var i=!1
null==n.onCompleted||n.onCompleted(e,t)}finally{var a
i||(i=!0,null==(a=r)||a.dispose())}},onError:function(e){try{var t=!1
null==n.onError||n.onError(e)}finally{var i
t||(t=!0,null==(i=r)||i.dispose())}},variables:n.variables})}
var i,a=r(t(93090))},61206:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.makeResult=function(e,n,r){var u
if(!("data"in n||"errors"in n&&Array.isArray(n.errors)))throw new Error("No Content")
if(null!=n&&n.errors){var l,s,c=null==e||null==(l=e.query)||null==(l=l.definitions)?void 0:l[0],d=c&&"name"in c?null==(s=c.name)?void 0:s.value:void 0
new o.default({data:{errors:n.errors,operationName:d},innerError:n.errors,source:null!=d?d:"unknown",type:null==n.data?(i||(i=t(95669))).GraphqlErrorType.GraphqlDataError:(i||(i=t(95669))).GraphqlErrorType.GraphqlPartialDataError}).logAsHandledException()}var f=Array.isArray(n.errors)&&n.errors.length>0,v=null!=n.data,p=f&&v?{graphQLErrors:n.errors}:void 0,h=(0,a.default)({},null!=(u=n.extensions)?u:{},p?{suppressedErrors:p}:{})
return{data:n.data,error:f&&!v?{graphQLErrors:n.errors}:void 0,extensions:h,hasNext:null!=n.hasNext&&n.hasNext,operation:e,stale:!1}}
var i,a=r(t(93090)),o=r(t(20244))},42859:function(e,n){n.__esModule=!0,n.makeTransportErrorResult=function(e,n,t){return{data:void 0,error:n,extensions:void 0,hasNext:!1,operation:e,stale:!1}}},97144:function(e,n){n.__esModule=!0,n.default=void 0
var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"initialUpdatedAt"},{defaultValue:null,kind:"LocalArgument",name:"key"},{defaultValue:null,kind:"LocalArgument",name:"name"},{defaultValue:null,kind:"LocalArgument",name:"parameters"}],n=[{kind:"Variable",name:"id",variableName:"id"},{kind:"Variable",name:"initialUpdatedAt",variableName:"initialUpdatedAt"},{kind:"Variable",name:"key",variableName:"key"},{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"parameters",variableName:"parameters"}],t={kind:"ScalarField",name:"__typename"},r={kind:"ScalarField",name:"_id"},i={kind:"ScalarField",name:"updatedAt"},a={kind:"InlineFragment",selections:[r,{concreteType:"NrtsBillboardHiddenItemStateValue",kind:"LinkedField",name:"value",plural:!1,selections:[t,{kind:"ScalarField",name:"priority"},i,{kind:"ScalarField",name:"visible"}]}],type:"NrtsBillboardHiddenItemState"},o={kind:"InlineFragment",selections:[r,{concreteType:"NrtsEventWindowStateValue",kind:"LinkedField",name:"value",plural:!1,selections:[t,{kind:"ScalarField",name:"currentState"},i]}],type:"NrtsEventWindowState"}
return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"nrtsSubscribeSubscription",selections:[{kind:"ClientExtension",selections:[{args:n,kind:"LinkedField",name:"nrtsState",plural:!1,selections:[t,a,o]}]}],type:"Subscription"},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"nrtsSubscribeSubscription",selections:[{kind:"ClientExtension",selections:[{args:n,kind:"LinkedField",name:"nrtsState",plural:!1,selections:[t,a,o,{abstractKey:"__isNode",kind:"InlineFragment",selections:[r],type:"Node"}]}]}]},params:{cacheID:"edb2a8cdf4d19be90489f2c9b1bc3675",id:null,metadata:{},name:"nrtsSubscribeSubscription",operationKind:"subscription",text:null}}}()
t.hash="e4df906b6c1c961b989d53c9d517ff3f",n.default=t},84439:function(e,n,t){var r,i,a,o,u,l
function s(e){var n=e.id,a=e.initialValue,s=e.key,c=e.name,d=e.parameters
if(!(0,(i||(i=t(44643))).hasSubscription)(n)){var f=(0,(o||(o=t(18755))).getGlobalUrqlClient)()
if(f){(i||(i=t(44643))).subscriptionsCache[n]={handle:void 0,key:s,name:c,parameters:d,pending:!0}
var v=f.subscription((0,(u||(u=t(73049))).formatDocument)(void 0!==l?l:l=t(97144)),{id:n,initialUpdatedAt:a.updatedAt,key:s,name:c,parameters:d},{isNrtsSubscription:!0}).subscribe((function(){})).unsubscribe;(0,(r||(r=t(3604))).createNrtsKeyChannel)(s,["unsubscribe"]).take(v)}}}n.__esModule=!0,n.nrtsSubscribe=function(e,n){var r=(0,(a||(a=t(11324))).getSubscriptionConfig)(e,n)
r&&(0,(i||(i=t(44643))).shouldSubscribe)(e)&&s(r)},t(24139)},3865:function(e,n,t){var r,i
n.__esModule=!0,n.SUBSCRIPTION_CHECK_INTERVAL=void 0,n.clearAllSubscriptions=function(){o.forEach((function(e,n){(0,(r||(r=t(44643))).unsubscribe)(n)})),o.clear(),u&&(clearTimeout(u),u=null)},n.nrtsUpdates=void 0
var a=n.SUBSCRIPTION_CHECK_INTERVAL=3e5,o=new Map,u=null
function l(e,n,t){try{var r=e.keyOfEntity({__typename:n,_id:t})
return!r||!!e.data.records.base.get(r)}catch(e){return!0}}function s(e){u=setTimeout((function(){u=null,o.size&&(o.forEach((function(n,a){try{var u=!1;(0,(i||(i=t(11324))).getSubscribedNodes)(n,a).forEach((function(r){l(e,n,r)||(0,(i||(i=t(11324))).unsubscribeNode)(n,a,r)}))}finally{u||(u=!0,(0,(i||(i=t(11324))).hasSubscribedNodes)(n,a)||(o.delete(a),(0,(r||(r=t(44643))).unsubscribe)(a)))}})),o.size&&s(e))}),a)}n.nrtsUpdates={nrtsState:function(e,n,r){if((0,(i||(i=t(11324))).isGraphQlNrtsEvent)(n.key)){var a=0===o.size
o.set(n.id,n.key),a&&s(r)}}}},3846:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.getPaginationStateKey=function(e){var n,t
return[u(e.parentVars),null!=(n=e.forwardCursor)?n:"",e.forwardHasMore+"",null!=(t=e.backwardCursor)?t:"",e.backwardHasMore+"",e.edgeCount+""].join("|")},n.getParentVarsFromFragmentRef=function(e){var n
return null!=(n=null==e?void 0:e.parentVars)?n:{}},n.stampParentVarsOnResultTree=function(e,n){null!=n&&c(n,e)}
var i=r(t(80875)),a=r(t(93090))
function o(e,n){if(e===n)return!0
if(null==e)return!1
for(var t=Object.keys((0,a.default)({},e,n)),r=0;r<t.length;r++){var i=t[r]
if(e[i]!==n[i])return!1}return!0}function u(e){if(null==e)return""
for(var n=Object.keys(e).sort(),t="",r=0;r<n.length;r++){var i=n[r]
t+=i+":"+e[i]+";"}return t}function l(e){return e.constructor===Object||Object.getPrototypeOf(e)===Object.prototype}function s(e,n){o(e.parentVars,n)||Object.defineProperty(e,"parentVars",{configurable:!0,enumerable:!1,value:n})}function c(e,n){if(null!=e)if(Array.isArray(e))for(var t=0;t<e.length;t++)c(e[t],n)
else if("object"===(0,i.default)(e)&&l(e)){s(e,n)
for(var r=e,a=Object.keys(r),o=0;o<a.length;o++){var u=a[o]
"parentVars"!==u&&c(r[u],n)}}}},90313:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.recycleNodesInto=function e(n,t){if(n===t||"object"!==(0,i.default)(n)||!n||n.constructor!==Object&&!Array.isArray(n)||"object"!==(0,i.default)(t)||!t||t.constructor!==Object&&!Array.isArray(t))return t
var r=!1,a=Array.isArray(n)?n:null,o=Array.isArray(t)?t:null
if(a&&o)r=o.reduce((function(n,t,r){var i=a[r],u=e(i,t)
return u!==o[r]&&(o[r]=u),n&&u===a[r]}),!0)&&a.length===o.length
else if(!a&&!o){var u=n,l=t,s=Object.keys(u),c=Object.keys(l)
r=c.reduce((function(n,t){var r=u[t],i=e(r,l[t])
return i!==l[t]&&(l[t]=i),n&&i===u[t]}),!0)&&s.length===c.length}return r?n:t}
var i=r(t(80875))},74914:function(e,n,t){var r
n.__esModule=!0,n.registerAppendEdgeUpdatesOptimized=function(e){for(var n=Object.create(null),i=0;i<e.length;i++){var a=e[i],o=n[a.mutationFieldName]
o?o.push(a):n[a.mutationFieldName]=[a]}for(var u=Object.keys(n),l=0;l<u.length;l++){var s=u[l];(r||(r=t(91744))).mutationUpdates[s]=(0,(r||(r=t(91744))).makeConnectionEdgeSpliceUpdater)(n[s])}}},4278:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.getConnectionState=function(e,n,r,a){return u(e,n,(0,(i||(i=t(94640))).getValueAtPath)(r,a))},n.getStateFromConnection=u
var i,a=r(t(80875)),o={get:function(){return{CURSOR:"cursor",EDGES:"edges",END_CURSOR:"endCursor",HAS_NEXT_PAGE:"hasNextPage",HAS_PREV_PAGE:"hasPreviousPage",NODE:"node",PAGE_INFO:"pageInfo",PAGE_INFO_TYPE:"PageInfo",START_CURSOR:"startCursor"}}}
function u(e,n,t){var r,i
if(null==t)return{cursor:null,hasMore:!1}
var u=o.get(),l=u.EDGES,s=u.END_CURSOR,c=u.HAS_NEXT_PAGE,d=u.HAS_PREV_PAGE,f=u.PAGE_INFO,v=u.START_CURSOR
if("object"!==(0,a.default)(t))throw new Error("Relay: Expected connection in fragment "+n.name+" to have been null, or a plain object with "+l+" and "+f+" properties. Instead got "+t+".")
var p=t[l],h=t[f]
if(null==p||null==h)return{cursor:null,hasMore:!1}
if(!Array.isArray(p))throw new Error("Relay: Expected connection in fragment "+n.name+" to have a plural "+l+" field. Instead got "+p+".")
if("object"!==(0,a.default)(h))throw new Error("Relay: Expected connection in fragment "+n.name+" to have a "+f+" field. Instead got "+h+".")
var m="forward"===e?null!=(r=h[s])?r:null:null!=(i=h[v])?i:null
if(null!==m&&"string"!=typeof m)throw new Error("Relay: Expected page info for connection in fragment "+n.name+" to have a valid "+v+". Instead got "+m+".")
return{cursor:m,hasMore:"forward"===e?null!=m&&!0===h[c]:null!=m&&!0===h[d]}}},79610:function(e,n,t){var r
n.__esModule=!0,n.getPaginationMetadata=function(e,n){var i,a,o=(0,(r||(r=t(42521))).getRefetchMetadata)(e,n),u=o.refetchMetadata,l=o.refetchableRequest,s=u.connection
if(null==s)throw new Error("Relay: getPaginationMetadata(): Expected fragment `"+n+"` to include a connection when using `"+e.name+"`. Did you forget to add a @connection directive to the connection field in the fragment?")
var c=s.path
if(null==(null!=(i=null==(a=e.metadata)?void 0:a.connection)?i:[])[0])throw new Error("Relay: getPaginationMetadata(): Expected fragment `"+n+"` to include a connection when using `"+e.name+"`. Did you forget to add a @connection directive to the connection field in the fragment?")
var d=u.identifierInfo
return{connectionPathInFragmentData:c,identifierField:null==d?void 0:d.identifierField,paginationMetadata:s,paginationRequest:l}}},21098:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.getPaginationVariables=function(e,n,t,r,a,o){var u,l=o.backward,s=o.forward
if("backward"===e){var c
if(null==l||null==l.count||null==l.cursor)throw new Error("Relay: Expected backward pagination metadata to be available. If you're seeing this, this is likely a bug in Relay.")
var d=(0,i.default)({},r,a,((c={})[l.cursor]=t,c[l.count]=n,c))
return null!=s&&s.cursor&&(d[s.cursor]=null),null!=s&&s.count&&(d[s.count]=null),d}if(null==s||null==s.count||null==s.cursor)throw new Error("Relay: Expected forward pagination metadata to be available. If you're seeing this, this is likely a bug in Relay.")
var f=(0,i.default)({},r,a,((u={})[s.cursor]=t,u[s.count]=n,u))
return null!=l&&l.cursor&&(f[l.cursor]=null),null!=l&&l.count&&(f[l.count]=null),f}
var i=r(t(93090))},42521:function(e,n){n.__esModule=!0,n.getRefetchMetadata=function(e,n){var t,r,i=null==(t=e.metadata)?void 0:t.refetch
if(null==i)throw new Error("Relay: getRefetchMetadata(): Expected fragment `"+n+"` to be refetchable when using `"+e.name+"`. Did you forget to add a @refetchable directive to the fragment?")
var a=null!=(r=i.operation)&&r.default?i.operation.default:i.operation
return{fragmentRefPathInResponse:i.fragmentPathInResult,identifierInfo:i.identifierInfo,refetchableRequest:a,refetchMetadata:i}}},94640:function(e,n){n.__esModule=!0,n.getValueAtPath=function(e,n){for(var t=e,r=0;r<n.length;r++){if(null==t)return null
var i=n[r]
if("number"!=typeof i&&"string"!=typeof i)return null
t=t[i]}return t}},94404:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.getFragment=function(e){var n=s(e)
if(!c(n))throw new Error("GraphQLTag: Expected a fragment, got `"+JSON.stringify(n)+"`.")
return n},n.getRelayArtifactNode=function(e){return null==e||"object"!==(0,i.default)(e)?null:s(e)},n.getRequest=function(e){var n=s(e)
if("object"!==(0,i.default)(n)||null===n)throw new Error("GraphQLTag: Expected a request, got `"+JSON.stringify(n)+"`.")
if(n.kind===l)throw new Error("GraphQLTag: getRequest() was called on a GraphQL Web document. Use formatDocument() (or read .name / .params) instead of getRequest() after formatDocument() runs.")
if(n.kind!==u)throw new Error("GraphQLTag: Expected a request, got `"+JSON.stringify(n)+"`.")
return n},n.isFragment=c,n.isUrqlDocumentNode=function(e){var n=s(e)
return"object"===(0,i.default)(n)&&null!==n&&n.kind===l&&Array.isArray(n.definitions)},n.replaceRelayDocumentWithUrqlDocument=function(e,n){var t=s(e)
if("object"===(0,i.default)(t)&&null!==t){for(var r=0,o=Object.keys(t);r<o.length;r++)delete t[o[r]];(0,a.assign)(t,n)}}
var i=r(t(80875)),a=t(11072),o="Fragment",u="Request",l="Document"
function s(e){var n=e
return"function"==typeof n?n=n():n.default&&(n=n.default),n}function c(e){var n=s(e)
return"object"===(0,i.default)(n)&&null!==n&&n.kind===o}},21631:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.replaceRelayDocumentWithUrqlDocumentOptimized=function(e,n){var t=o(e)
if("object"===(0,i.default)(t)&&null!==t){var r=[]
for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&r.push(u)
for(var l=0;l<r.length;l++)delete t[r[l]];(0,a.assign)(t,n)}}
var i=r(t(80875)),a=t(11072)
function o(e){var n=e
return"function"==typeof n?n=n():n.default&&(n=n.default),n}},87352:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.relayPagination=function(e){var n=e.connectionKey
return function(e,r,d,v){var p=v.fieldName,h=v.parentKey
if(h){var m=f(r)
if(null===d.resolve(h,p,m))return null
var y=(0,(i||(i=t(10550))).getConnectionStorageKey)(h,n,m),g=d.resolve(y,"__typename")
if(g){var k=d.resolve(y,l.EDGES)||[],b=d.resolve(y,"nodes")||[],E=d.resolve(y,"totalCount"),_=k.length
"number"==typeof E&&E<_&&k.length>0&&new u.default({data:{connectionKey:n,edgeCount:k.length},message:"Server totalCount is "+E+" but "+_+" merged edges already exist (connectionKey: "+n+", fieldName: "+p+", entityKey: "+h+")",source:"relayPagination",type:(a||(a=t(95669))).GraphqlErrorType.GraphqlInvalidPaginationDataError}).logAsHandledException()
var S,x,N=d.resolve(y,l.PAGE_INFO),A=(0,o.default)({},s)
return"string"==typeof N&&(A={__typename:d.resolve(N,"__typename")||l.PAGE_INFO_TYPE,endCursor:c(d.resolve(N,l.END_CURSOR)),hasNextPage:null!=(S=d.resolve(N,l.HAS_NEXT_PAGE))&&S,hasPreviousPage:null!=(x=d.resolve(N,l.HAS_PREV_PAGE))&&x,startCursor:c(d.resolve(N,l.START_CURSOR))}),{__typename:g,edges:k,nodes:b,pageInfo:A,totalCount:E}}}}}
var i,a,o=r(t(93090)),u=r(t(20244)),l={EDGES:"edges",END_CURSOR:"endCursor",HAS_NEXT_PAGE:"hasNextPage",HAS_PREV_PAGE:"hasPreviousPage",PAGE_INFO:"pageInfo",PAGE_INFO_TYPE:"PageInfo",START_CURSOR:"startCursor"},s={__typename:l.PAGE_INFO_TYPE,endCursor:null,hasNextPage:!1,hasPreviousPage:!1,startCursor:null},c=function(e){return"string"==typeof e?e:null},d=new Set(["first","last","before","after","afterCursor","count","cursor"])
function f(e){if(!e)return{}
var n={}
for(var t in e)d.has(t)||(n[t]=e[t])
return n}},38778:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.simpleFetchExchange=function(e){var n=void 0===e?{}:e,r=n.fetch,i=n.logRequestPerfTrace,a=n.onNetworkError,o=n.preventDataRequests
return function(e){return e.dispatchDebug,function(e){var n=(0,(d||(d=t(50206))).pipe)(e,(d||(d=t(50206))).share)
return(0,(d||(d=t(50206))).pipe)(n,(0,(d||(d=t(50206))).filter)((function(e){return"teardown"!==e.kind&&("subscription"!==e.kind||!!e.context.fetchSubscriptions)})),(0,(d||(d=t(50206))).mergeMap)((function(e){var n,u=(0,(h||(h=t(80814))).makeFetchBody)(e),l=u.operationName,s=e.context
if(null!=s&&s.dataOverride){var c=O(s.dataOverride),v=(0,(m||(m=t(61206))).makeResult)(e,c,{headers:new Map,status:200,url:e.context.url})
n=(0,(d||(d=t(50206))).pipe)((0,(d||(d=t(50206))).fromValue)(v),(0,(d||(d=t(50206))).map)((function(e){var n
if(null!=(n=e.error)&&null!=(n=n.graphQLErrors)&&n.length){var r=null==e.data?(f||(f=t(95669))).GraphqlErrorType.GraphqlDataError:(f||(f=t(95669))).GraphqlErrorType.GraphqlPartialDataError
new S.default({data:{errors:e.error.graphQLErrors,operationName:u.operationName},innerError:e.error.graphQLErrors,source:u.operationName||"unknown",type:r}).logAsHandledException()}return e})))}else if(o){var p="urql network request '"+l+"' rejected"
null==a||a({message:p}),n=(0,(d||(d=t(50206))).fromValue)((0,(y||(y=t(42859))).makeTransportErrorResult)(e,new Error(p),null))}else{var k=C(e,u,{logRequestPerfTrace:i})
if(r){var b=function(n){var i,a
return(0,g.default)().async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,g.default)().awrap(w(e,k,r))
case 2:return i=o.sent,null!=(n=i.error)&&null!=(n=n.graphQLErrors)&&n.length&&(a=null==i.data?(f||(f=t(95669))).GraphqlErrorType.GraphqlDataError:(f||(f=t(95669))).GraphqlErrorType.GraphqlPartialDataError,new S.default({data:{errors:i.error.graphQLErrors,operationName:u.operationName},innerError:i.error.graphQLErrors,source:u.operationName||"unknown",type:a}).logAsHandledException()),o.abrupt("return",i)
case 5:case"end":return o.stop()}}),null,null,null,Promise)}()
n=(0,(d||(d=t(50206))).fromPromise)(b)}else n=(0,(d||(d=t(50206))).pipe)(T(e,k,{logRequestPerfTrace:i,operationName:u.operationName}),(d||(d=t(50206))).share)}return n})))}}}
var i,a,o,u,l,s,c,d,f,v,p,h,m,y,g=r(t(35972)),k=r(t(2509)),b=r(t(93090)),E=r(t(30780)),_=r(t(80875)),S=r(t(20244)),x=t(11072),N=t(45872),A=["headers"]
function O(e){return null!==e&&"object"===(0,_.default)(e)&&("data"in e||"errors"in e)?e:{data:e}}function C(e,n,r){for(var c=r.logRequestPerfTrace,d={},f=0,h=Object.entries((l||(l=t(55118))).DEFAULT_HEADERS);f<h.length;f++){var m=(0,E.default)(h[f],2),y=m[0],g=m[1]
d[y]=g+""}var _=n.operationName||"unknown",S=e.context,O=S.appVersion,C=S.locales,w=S.uiFlavor,T=(0,b.default)({},d,{Accept:"application/json","Content-Type":"application/json"},{"x-Netflix.context.app-version":O,"x-Netflix.context.cloud-games-enabled":(0,(o||(o=t(80192))).getFeature)("cloudGamesEnabled")+"","x-Netflix.context.dt":(0,(a||(a=t(59127))).getDeviceTierHeaderValue)(),"x-Netflix.context.locales":null==C?void 0:C.join(","),"X-Netflix.context.operation-name":_,"X-Netflix.context.ui-flavor":w}),I=e.context,R=I.fetchOptions,P=I.headerOverrides,L=("function"==typeof R?R():R)||{},D=L.headers,F=(0,k.default)(L,A)
D&&(0,x.assign)(T,D),P&&(0,x.assign)(T,P)
var q=e.context.url
if(!q||"string"!=typeof q)throw new Error("Operation context must have a valid URL string")
var M=(0,b.default)({body:n,format:"string",headers:T,json:!0,kind:"graphql",method:"POST",queryParams:{o:_},timeout:(p||(p=t(68024))).GRAPHQL_TIMEOUTS,url:q},F)
if((c||(0,(i||(i=t(87410))).getCachedFeature)("requestBackendTracing"))&&(M=(0,(s||(s=t(30641))).transformRequestOptions)(M)),(0,(o||(o=t(80192))).getFeature)("cachingImprovementsWithETag")){var K=(0,(v||(v=t(62273))).hashAndEncode)((0,N.stringify)(n))
M.headers=(0,b.default)({},M.headers,{"X-Gibbon-Cache-Control":"key="+K+",server","X-Netflix.context.etags-enabled":"true"})}var V=e.context,G=V.action,j=V.appView,U=V.feature
return M.headers=(0,b.default)({},M.headers,(0,(u||(u=t(76079))).getDeviceRequestEnrichmentHeaders)({action:G,appView:j,feature:U})),M}function w(e,n,r){var i,a,o
return(0,g.default)().async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,g.default)().awrap(r(n.url,{body:n.body,headers:n.headers,method:n.method}))
case 3:return i=u.sent,u.next=6,(0,g.default)().awrap(i.json())
case 6:return a=u.sent,o={headers:i.headers,status:i.status,url:n.url},u.abrupt("return",(0,(m||(m=t(61206))).makeResult)(e,a,o))
case 11:return u.prev=11,u.t0=u.catch(0),u.abrupt("return",(0,(y||(y=t(42859))).makeTransportErrorResult)(e,u.t0,null))
case 14:case"end":return u.stop()}}),null,null,[[0,11]],Promise)}function T(e,n,r){var i=r.logRequestPerfTrace,a=r.operationName
return(0,(d||(d=t(50206))).make)((function(r){var o=!1,u=!1,v=function(){u||(u=!0)}
return function(){var u=(0,(c||(c=t(76203))).request)(n)
if(!u)return r.next((0,(y||(y=t(42859))).makeTransportErrorResult)(e,new Error("Request failed: request function returned undefined"),null)),null==r.complete||r.complete(),v(),function(){o=!0,v()}
i&&a&&(0,(s||(s=t(30641))).logRequestPerformanceTrace)(u,"graphql",a),u.on((c||(c=t(76203))).eventNames.ONCOMPLETED,(function(i){var a=i.body,o=i.response,u={headers:o.headers?new Map(Object.entries(o.headers)):new Map,status:o.statusCode,url:n.url}
try{var l="string"==typeof a?JSON.parse(a):a
r.next((0,(m||(m=t(61206))).makeResult)(e,l,u)),null==r.complete||r.complete(),v()}catch(n){r.next((0,(y||(y=t(42859))).makeTransportErrorResult)(e,n,null)),null==r.complete||r.complete(),v()}})),u.on((c||(c=t(76203))).eventNames.ONERROR,(0,(l||(l=t(55118))).onErrorHandler)((function(n){new S.default({data:a?{error:n,operationName:a}:{error:n},innerError:n,source:a||"unknown",type:(f||(f=t(95669))).GraphqlErrorType.GraphqlRequestError}).logAsHandledException(),r.next((0,(y||(y=t(42859))).makeTransportErrorResult)(e,n,null)),null==r.complete||r.complete(),v()}),"GraphQL"))
var p=function(){o?v():u.open()},h=!0===e.context.startRequestImmediately
h&&p()
var g=h?{unsubscribe:function(){}}:(0,(d||(d=t(50206))).pipe)((0,(d||(d=t(50206))).fromPromise)(Promise.resolve()),(0,(d||(d=t(50206))).subscribe)(p))
return function(){o=!0,g.unsubscribe(),v()}}()}))}},27327:function(e,n,t){var r=t(50113).default
n.__esModule=!0,n.commitMutation=function(e,n){var t=(0,E.formatDocument)(null==n?void 0:n.mutation)
if(!e)throw new Error("Urql client undefined")
var r=e.mutation(t,null==n?void 0:n.variables,null==n?void 0:n.context).subscribe((function(e){var r,i=e.error,a=!(null==i||null==(r=i.graphQLErrors)||!r.length)
if(!i||!i.networkError&&a)try{var o,u;(null==n?void 0:n.onCompleted)&&(null==n||n.onCompleted(null!=(o=e.data)?o:{},a?null==(u=e.error)?void 0:u.graphQLErrors:null))}catch(e){new k.default({data:t,innerError:e,message:"onCompleted callback threw an error in commitMutation",source:"commitMutation",type:"UrqlCallbackError"}).logAsHandledException()}else try{(null==n?void 0:n.onError)&&(null==n||n.onError(i))}catch(e){new k.default({data:{error:e},innerError:e,message:"onError callback threw an error in commitMutation",source:"commitMutation",type:"UrqlCallbackError"}).logAsHandledException()}}))
return{dispose:function(){null==r.unsubscribe||r.unsubscribe()}}},n.getExplorerRequestPolicy=function(e){return globalThis.urqlPreventDataRequests?"cache-only":null!=e?e:"cache-first"},n.readInlineData=function(e,n){return n},n.subscription=function(e,n,r){if(!e)throw new Error("Urql client undefined")
var i=n.unsubscribeDelayMs,a=(0,E.formatDocument)(null==n?void 0:n.subscription),o=e.subscription(a,n.variables,r),u=function(e,t){if(e.error){if(null==t||null==t.onError||t.onError(),null!=t&&null!=t.isSuppressed&&t.isSuppressed())return
try{null==n.onError||n.onError(e.error)}catch(e){O("onError",e)}}else{if(null!=t&&null!=t.isSuppressed&&t.isSuppressed())return
try{null==n.onNext||n.onNext(e.data)}catch(e){O("onNext",e)}}}
if(i){var s=(0,(l||(l=t(50206))).makeSubject)(),c=(0,(l||(l=t(50206))).makeSubject)(),d=!1,f={isSuppressed:function(){return d},onError:function(){return c.next()}}
return(0,(l||(l=t(50206))).pipe)(o,(0,(l||(l=t(50206))).takeUntil)((0,(l||(l=t(50206))).merge)([(0,(l||(l=t(50206))).pipe)(s.source,(0,(l||(l=t(50206))).delay)(i)),c.source])),(0,(l||(l=t(50206))).subscribe)((function(e){return u(e,f)}))),{dispose:function(){d||(d=!0,s.next())}}}var v=(0,(l||(l=t(50206))).pipe)(o,(0,(l||(l=t(50206))).subscribe)(u))
return{dispose:function(){return null==v.unsubscribe?void 0:v.unsubscribe()}}},n.useFragment=function(e,n){return n},n.useMutation=function(e,n){var r,i=(0,E.formatDocument)(e),a=(0,(u||(u=t(26950))).useMutation)(i),l=(0,m.default)(a,2)[1],s=(0,b.useRef)(!1),c=(0,(o||(o=t(71593))).useMounted)(),d=(0,b.useRef)(null),f=(0,b.useState)({data:null!=(r=null==n?void 0:n.optimisticResponse)?r:null,error:null,loading:!1}),v=(0,m.default)(f,2),p=v[0],h=v[1]
return(0,b.useEffect)((function(){return function(){d.current&&(null==d.current.unsubscribe||d.current.unsubscribe(),d.current=null)}}),[]),[(0,b.useCallback)((function(e){var t
d.current&&(null==d.current.unsubscribe||d.current.unsubscribe(),d.current=null),c()&&h({data:null!=(t=null==n?void 0:n.optimisticResponse)?t:null,error:null,loading:!0})
var r=l((0,y.default)({},null==e?void 0:e.variables)).then((function(n){var t,r
if(n.error||null===n.data||void 0===n.data)throw null!=(r=n.error)?r:new Error("Mutation returned no data")
var i=null!=(t=n.data)?t:{}
try{(null==e?void 0:e.onCompleted)&&(null==e||e.onCompleted(i))}catch(e){new k.default({data:{error:e},innerError:e,message:"onCompleted callback threw an error in useMutation",source:"useMutation",type:"UrqlCallbackError"}).logAsHandledException()}return s.current=!1,c()&&h({data:i,error:null,loading:!1}),d.current=null,i})).catch((function(n){if(c()&&h({data:null,error:n,loading:!1}),d.current=null,null!=e&&e.onError){try{e.onError(n)}catch(e){new k.default({data:{error:e},innerError:e,message:"onError callback threw an error in useMutation",source:"useMutation",type:"UrqlCallbackError"}).logAsHandledException()}return null}throw n}))
return d.current=r,r}),[l,c,null==n?void 0:n.optimisticResponse]),{data:p.data,error:p.error,loading:p.loading}]},n.usePagination=function(e,n,r){var o,h,m,_,S=!(null!=r&&r.reexecute),N=(0,b.useRef)({isLoadingNext:!1,isLoadingPrevious:!1,lastRequestedCursorBackward:null,lastRequestedCursorForward:null,lastSeenParentVars:null}),A=(0,b.useCallback)((function(){N.current.lastRequestedCursorBackward=null,N.current.lastRequestedCursorForward=null,N.current.isLoadingNext=!1,N.current.isLoadingPrevious=!1,null==r||null==r.reexecute||r.reexecute({requestPolicy:"cache-only"})}),[r]),O=(0,b.useRef)(A)
O.current=A
var C=(0,(d||(d=t(79610))).getPaginationMetadata)(e.default,null==e||null==(o=e.default)?void 0:o.name),w=C.connectionPathInFragmentData,T=C.identifierField,I=C.paginationMetadata,R=C.paginationRequest,P=(0,b.useRef)({errorNext:null,errorPrevious:null}),L=(0,(v||(v=t(42521))).getRefetchMetadata)(e.default,null==e||null==(h=e.default)?void 0:h.name).identifierInfo,D=(0,(p||(p=t(94640))).getValueAtPath)(n,w),F=(0,(c||(c=t(4278))).getStateFromConnection)("forward",e,D),q=(0,(c||(c=t(4278))).getStateFromConnection)("backward",e,D),M=(0,b.useMemo)((function(){var e,r
return(0,(s||(s=t(3846))).getPaginationStateKey)({backwardCursor:q.cursor,backwardHasMore:q.hasMore,edgeCount:null!=(e=null==D||null==(r=D.edges)?void 0:r.length)?e:0,forwardCursor:F.cursor,forwardHasMore:F.hasMore,parentVars:null==n?void 0:n.parentVars})}),[q.cursor,q.hasMore,D,F.cursor,F.hasMore,null==n?void 0:n.parentVars])
if(null==L)throw new Error("Relay: Pagination Fragment "+e.default.name+" is not refetchable. Please ensure that the fragment is defined with @refetchable.")
var K=null!=T&&null!=n&&"object"===(0,g.default)(n)?n[T]:null,V=(0,(u||(u=t(26950))).useClient)(),G=(0,b.useRef)(!1),j=(0,b.useRef)(null),U=(0,b.useRef)(n)
U.current=n,(0,b.useEffect)((function(){return G.current=!0,function(){G.current=!1,j.current&&(null==j.current.unsubscribe||j.current.unsubscribe(),j.current=null)}}),[]),(0,b.useEffect)((function(){N.current.lastRequestedCursorBackward=null,N.current.lastRequestedCursorForward=null,null==j.current&&(N.current.isLoadingNext||N.current.isLoadingPrevious)&&(N.current.isLoadingNext=!1,N.current.isLoadingPrevious=!1)}),[M])
var B=(0,b.useCallback)((function(e,t){var r
if(!n)return{dispose:function(){}}
var i=null!=(r=null==n?void 0:n.parentVars)?r:{},a=i.afterCursor,o=i.first,u=(0,y.default)({},null==n?void 0:n.parentVars,e,{afterCursor:a,first:o})
return null!=L&&L.identifierQueryVariableName&&!Object.prototype.hasOwnProperty.call(null!=e?e:{},L.identifierQueryVariableName)&&"string"==typeof K&&(u[L.identifierQueryVariableName]=K),V.query((0,E.formatDocument)(R),u,{notifyOnWrite:S,requestPolicy:null!=t&&t.requestPolicy?x(t.requestPolicy):"network-only",subscribe:!1}).toPromise().then((function(){try{null==O.current||O.current(),(null==t?void 0:t.onComplete)&&t.onComplete(null)}catch(e){new k.default({innerError:e,message:"onComplete callback threw an error in usePagination refetch",source:"usePagination",type:"UrqlCallbackError"}).logAsHandledException()}})).catch((function(e){try{(null==t?void 0:t.onError)&&t.onError(e)}catch(e){new k.default({data:{error:e},innerError:e,message:"onError callback threw an error in usePagination refetch",source:"usePagination",type:"UrqlCallbackError"}).logAsHandledException()}})),{dispose:function(){}}}),[n,L,K,R,S,V]),Q=(0,(a||(a=t(71533))).useEvent)((function(n,a){void 0===a&&(a="forward")
var o=U.current,u=(0,(c||(c=t(4278))).getConnectionState)(a,e,o,w),d=u.cursor,v=u.hasMore,p=(0,(s||(s=t(3846))).getParentVarsFromFragmentRef)(o),h=null==o?void 0:o.parentVars
h!==N.current.lastSeenParentVars&&(N.current.lastRequestedCursorBackward=null,N.current.lastRequestedCursorForward=null,N.current.lastSeenParentVars=h)
var m="forward"===a?"lastRequestedCursorForward":"lastRequestedCursorBackward",y=null!=d&&d===N.current[m]
if(!v||N.current.isLoadingNext||N.current.isLoadingPrevious||!G.current||y)return{dispose:function(){}}
"forward"===a?N.current.isLoadingNext=!0:N.current.isLoadingPrevious=!0,N.current[m]=d
var k={},b=null!=T&&null!=o&&"object"===(0,g.default)(o)?o[T]:null
k[L.identifierQueryVariableName]=b
var _=(0,(f||(f=t(21098))).getPaginationVariables)(a,n,d,p,k,I)
j.current&&(null==j.current.unsubscribe||j.current.unsubscribe(),j.current=null)
var x=V.query((0,E.formatDocument)(R),_,{isPaginationRequest:!0,notifyOnWrite:S,requestPolicy:"network-only",subscribe:!1,treatNullDataAsError:(0,(i||(i=t(80192))).getFeature)("treatPaginationNullDataAsError")}),A=(0,(l||(l=t(50206))).pipe)(x,(0,(l||(l=t(50206))).take)(1),(0,(l||(l=t(50206))).subscribe)((function(e){if(G.current){var n,t,i,o,u=null!=(t=(null!=(n=e.extensions)?n:{}).suppressedErrors)?t:null
e.error||u?"forward"===a?(P.current.errorNext=null!=(i=e.error)?i:u,N.current.isLoadingNext=!1,N.current.lastRequestedCursorForward=null):(P.current.errorPrevious=null!=(o=e.error)?o:u,N.current.isLoadingPrevious=!1,N.current.lastRequestedCursorBackward=null):null!=r&&r.reexecute?(O.current(),"forward"===a?P.current.errorNext=null:P.current.errorPrevious=null):"forward"===a?(P.current.errorNext=null,N.current.isLoadingNext=!1):(P.current.errorPrevious=null,N.current.isLoadingPrevious=!1)}j.current===A&&(j.current=null)})))
return j.current=A,{dispose:function(){null==A.unsubscribe||A.unsubscribe(),j.current===A&&(j.current=null)}}}))
return{data:n,error:(null==P?void 0:P.current.errorNext)||(null==P?void 0:P.current.errorPrevious),errorNext:null!=(m=null==P?void 0:P.current.errorNext)?m:null,errorPrevious:null!=(_=null==P?void 0:P.current.errorPrevious)?_:null,hasNext:F.hasMore,hasPrevious:q.hasMore,isLoading:N.current.isLoadingNext||N.current.isLoadingPrevious,isLoadingNext:N.current.isLoadingNext,isLoadingPrevious:N.current.isLoadingPrevious,loadNext:function(e){return Q(e)},loadPrevious:function(e){return Q(e,"backward")},refetch:B}},n.useQuery=void 0,n.useRefetchable=function(e,n){var r=A(e,n),i=r.identifierInfo,a=r.refetchableRequest,s=(0,(u||(u=t(26950))).useClient)(),c=(0,b.useRef)(!1),d=(0,(o||(o=t(71593))).useMounted)(),f=(0,b.useRef)(null),v=(0,b.useRef)(null);(0,b.useEffect)((function(){return function(){v.current&&(null==v.current.unsubscribe||v.current.unsubscribe(),v.current=null)}}),[])
var p=(0,b.useCallback)((function(e,r){if(!n)return{dispose:function(){}}
v.current&&(null==v.current.unsubscribe||v.current.unsubscribe(),v.current=null),c.current=!0
var o=(0,y.default)({},null==n?void 0:n.parentVars,e)
if(null!=i&&i.identifierQueryVariableName&&!Object.prototype.hasOwnProperty.call(null!=e?e:{},i.identifierQueryVariableName)){var u=null!=(null==i?void 0:i.identifierField)&&null!=n&&"object"===(0,g.default)(n)?n[i.identifierField]:null
"string"==typeof u&&(o[i.identifierQueryVariableName]=u)}var p=s.query((0,E.formatDocument)(a),o,{notifyOnWrite:!0,requestPolicy:null!=r&&r.requestPolicy?x(r.requestPolicy):"network-only",subscribe:!1}),h=(0,(l||(l=t(50206))).pipe)(p,(0,(l||(l=t(50206))).take)(1),(0,(l||(l=t(50206))).subscribe)((function(e){if(d())if(c.current=!1,e.error){f.current=e.error
try{(null==r?void 0:r.onError)&&r.onError(e.error)}catch(e){new k.default({data:{error:e},innerError:e,message:"onError callback threw an error in useRefetchable",source:"graphql-client/urql/useRefetchable",type:"UrqlCallbackError"}).logAsHandledException()}}else{f.current=null
try{(null==r?void 0:r.onComplete)&&r.onComplete(null)}catch(e){new k.default({data:{error:e},innerError:e,message:"onComplete callback threw an error in useRefetchable",source:"graphql-client/urql/useRefetchable",type:"UrqlCallbackError"}).logAsHandledException()}}v.current=null})))
return v.current=h,{dispose:function(){null==h.unsubscribe||h.unsubscribe(),v.current===h&&(v.current=null)}}}),[n,i,d,a,s])
return{data:n,error:f.current,isLoading:c.current,refetch:p}}
var i,a,o,u,l,s,c,d,f,v,p,h,m=r(t(30780)),y=r(t(93090)),g=r(t(80875)),k=r(t(20244)),b=t(38159),E=t(73049)
n.formatDocument=E.formatDocument
var _={}
function S(e,n){if(e===n)return!0
if(null==e||null==n)return e===n
if("object"!==(0,g.default)(e)||"object"!==(0,g.default)(n))return!1
var t=Object.keys(e),r=Object.keys(n)
if(t.length!==r.length)return!1
for(var i=0;i<t.length;i++){var a=t[i]
if(void 0===a||!(a in n))return!1
if(!S(e[a],n[a]))return!1}return!0}function x(e){return null!=e?e:"cache-first"}function N(e,n){var t=null==n?void 0:n.requestPolicy
return void 0!==t?{requestPolicy:x(t)}:null!=e&&e.force?{requestPolicy:"network-only"}:void 0}function A(e,n){var r,i=(0,(v||(v=t(42521))).getRefetchMetadata)(e.default,null==e||null==(r=e.default)?void 0:r.name),a=i.identifierInfo,o=i.refetchableRequest,u=null==a?void 0:a.identifierField
return{identifierField:u,identifierInfo:a,identifierValue:null!=u&&null!=n&&"object"===(0,g.default)(n)?n[u]:null,refetchableRequest:o}}function O(e,n){new k.default({data:{error:n},innerError:n,message:e+" callback threw an error in subscription",source:"subscription",type:"UrqlCallbackError"}).logAsHandledException()}n.useQuery=function(e,n,r){var i,a,o,u,l,s,c=(0,b.useMemo)((function(){return(0,E.formatDocument)(e)}),[e]),d=(0,b.useRef)(void 0),f=(0,b.useMemo)((function(){var e,t=null!=n?n:_
return S(d.current,t)?null!=(e=d.current)?e:t:(d.current=t,t)}),[n]),v=(0,b.useMemo)((function(){var e,n=!1!==(null==r?void 0:r.subscribe),t=null==r?void 0:r.requestPolicy,i=!0===(null==r?void 0:r.notifyOnWrite)||"cache-and-network"===t||"network-only"===t,a=!0===(null==r?void 0:r.startRequestImmediately),o=null==r?void 0:r.dataOverride,u=null==r||null==(e=r.networkCacheConfig)||null==(e=e.metadata)?void 0:e.feature,l=null==r?void 0:r.headerOverrides
return(0,y.default)({},void 0!==o?{dataOverride:o}:{},u?{feature:u}:{},l?{headerOverrides:l}:{},null!=r&&r.skipCache?{skipCache:!0}:{},{notifyOnWrite:i,partialPolicy:"partial"===(null==r?void 0:r.UNSTABLE_renderPolicy),startRequestImmediately:a,subscribe:n})}),[null==r?void 0:r.dataOverride,null==r?void 0:r.headerOverrides,null==r||null==(i=r.networkCacheConfig)||null==(i=i.metadata)?void 0:i.feature,null==r?void 0:r.notifyOnWrite,null==r?void 0:r.requestPolicy,null==r?void 0:r.skipCache,null==r?void 0:r.startRequestImmediately,null==r?void 0:r.subscribe,null==r?void 0:r.UNSTABLE_renderPolicy]),p=(0,(h||(h=t(42388))).useQuery)({context:v,fetchKey:null==r?void 0:r.fetchKey,pause:null!=(a=null==r?void 0:r.skip)&&a,query:c,requestPolicy:x(null==r?void 0:r.requestPolicy),variables:f}),g=(0,m.default)(p,3),k=g[0],A=void 0===k?{data:null,error:null,extensions:void 0,fetching:!1,stale:!1}:k,O=g[1],C=g[2],w=(0,b.useCallback)((function(e,n){return O(N(e,n))}),[O]),T=null!=(o=null==A?void 0:A.data)?o:{},I=null!=(null==A?void 0:A.data),R=I?null:null!=(u=null==A?void 0:A.error)?u:null,P=(null!=(l=null==A?void 0:A.extensions)?l:{}).suppressedErrors,L=I&&null!=(s=P)?s:null,D=(null==v?void 0:v.partialPolicy)&&A.stale
return{data:null!=r&&r.skip||null==A||!A.data||A.fetching?null:T,error:null!=R?R:null,isLoading:(null==r||!r.skip)&&(A.fetching||D),reexecute:C,retry:w,suppressedErrors:L}}},10133:function(e,n,t){var r,i,a,o
function u(e){return{data:e.data||null,error:e.error?e.error:null,isLoading:!1,retry:function(){}}}n.__esModule=!0,n.internalLoadQuery=s,n.loadLazyQuery=function(){return s(!0)},n.loadQuery=function(e){return void 0===e&&(e=!0),s(e)}
var l=function(){}
function s(e){var n
void 0===e&&(e=!1)
var s,c,d,f,v=l
return{dispose:function(){v=l,n=void 0,f&&"function"==typeof f.unsubscribe&&(f.unsubscribe(),f=void 0),s=void 0,c=void 0,d=void 0},getValue:function(){return n||{data:null,error:null,isLoading:!0,retry:function(){return null}}},next:function(i,o,l,f){var v
if(void 0===l&&(l={}),void 0===f&&(f={}),s=i,c=(0,(r||(r=t(26950))).createRequest)((0,(a||(a=t(73049))).formatDocument)(o),l),d=null!=(v=f.requestPolicy)?v:"cache-first",!s||!s.executeQuery)throw new Error("urql client not defined")
return e?(s.executeQuery(c,{notifyOnWrite:!1,requestPolicy:d,subscribe:!1}).toPromise().catch((function(){})),Promise.resolve()):s.executeQuery(c,{notifyOnWrite:!1,requestPolicy:d,subscribe:!1}).toPromise().then((function(e){n=u(e)})).catch((function(e){n={data:null,error:e,isLoading:!1,retry:function(){return null}}}))},subscribe:function(e){if(v=e,!s||!s.executeQuery)throw new Error("urql client not defined")
if(c&&!f){var r=s.executeQuery(c,{requestPolicy:d}),a=!1
f=(0,(i||(i=t(50206))).pipe)(r,(0,(i||(i=t(50206))).subscribe)((function(e){var r,i,l,s=u(e)
null!=(null==(r=n)?void 0:r.data)&&null!=s.data&&(s.data=(0,(o||(o=t(90313))).recycleNodesInto)(n.data,s.data)),(null==(i=n)?void 0:i.data)===s.data&&(null==(l=n)?void 0:l.error)===s.error||(n=s,a=!0,v())}))),a||n||(n={data:null,error:null,isLoading:!0,retry:function(){return null}},v())}else n&&v()
return function(){v===e&&(v=l),f&&"function"==typeof f.unsubscribe&&(f.unsubscribe(),f=void 0),n=void 0}}}}},42388:function(e,n,t){var r=t(6268).default,i=t(50113).default
n.__esModule=!0,n.useQuery=function(e){var n,r=(0,(o||(o=t(26950))).useClient)(),i=v(e.query,e.variables),s=f.useState(0),h=(0,c.default)(s,2)[1],g=f.useRef(e.context)
y(g.current,e.context)||(g.current=e.context)
var k=g.current,b=f.useRef(null)
null===b.current&&(b.current={client:null,context:void 0,fetchKey:void 0,pause:void 0,request:null,requestPolicy:void 0,result:p,source:null,subscription:null})
var E=f.useRef(!1),_=f.useCallback((function(){E.current&&h((function(e){return e+1}))}),[]),S=f.useCallback((function(e,n){var r,i,a=b.current,o=m(a.result,e),u=null==(r=a.request)?void 0:r.query,s=null==(i=a.request)?void 0:i.variables
null!=u&&u.needsParentVarsAttachment&&null!=s&&null!=o.data&&(0,(l||(l=t(3846))).stampParentVarsOnResultTree)(s,o.data),o!==a.result&&(a.result=o,n&&_())}),[]),x=b.current,N=e.fetchKey,A=!!e.pause,O=e.requestPolicy
if(x.client!==r||(null==(n=x.request)?void 0:n.key)!==i.key||x.requestPolicy!==O||x.context!==k||x.fetchKey!==N||x.pause!==A)if(x.subscription&&(null==x.subscription.unsubscribe||x.subscription.unsubscribe(),x.subscription=null),x.client=r,x.request=i,x.requestPolicy=O,x.context=k,x.fetchKey=N,x.pause=A,A)x.source=null,S({fetching:!1,stale:!1},!1)
else{var C=(0,d.default)({requestPolicy:O},k),w=r.executeQuery(i,C)
x.source=w
var T=!1,I=!0
x.subscription=(0,(u||(u=t(50206))).pipe)(w,(0,(u||(u=t(50206))).subscribe)((function(e){T=!0,S(e,!I)}))),I=!1,T||S({fetching:!0},!1)}f.useEffect((function(){E.current=!0}),[]),f.useEffect((function(){return function(){var e=b.current
null!=e&&e.subscription&&(null==e.subscription.unsubscribe||e.subscription.unsubscribe(),e.subscription=null),e&&(e.source=null)}}),[])
var R=f.useCallback((function(e){var n=b.current
n.subscription&&(null==n.subscription.unsubscribe||n.subscription.unsubscribe(),n.subscription=null)
var r=(0,d.default)({requestPolicy:n.requestPolicy},n.context,e),i=n.client.executeQuery(n.request,r)
n.source=i
var a=!1
n.subscription=(0,(u||(u=t(50206))).pipe)(i,(0,(u||(u=t(50206))).subscribe)((function(e){a=!0,S(e,!0)}))),a||S({fetching:!0},!0)}),[]),P=f.useCallback((function(e){var n,r=b.current,i=null==(n=r.result)?void 0:n.operation
i&&r.client&&r.subscription&&r.client.reexecuteOperation((0,(a||(a=t(47618))).makeOperation)(i.kind,i,(0,d.default)({requestPolicy:"cache-first"},e)))}),[])
return[x.result,R,P]}
var a,o,u,l,s,c=i(t(30780)),d=i(t(93090)),f=r(t(38159))
function v(e,n){var r=f.useRef(void 0)
return f.useMemo((function(){var i=(0,(a||(a=t(47618))).createRequest)(e,n)
return void 0!==r.current&&r.current.key===i.key?r.current:(r.current=i,i)}),[e,n])}var p={data:void 0,error:void 0,extensions:void 0,fetching:!1,hasNext:!1,operation:void 0,stale:!1}
function h(e,n){return e===n||!(!e||!n||e.key!==n.key)}function m(e,n){var r=n.operation,i=e.operation,a=null!=r&&h(r,i),o=n.data
null==n.data&&a&&(o=e.data)
var u=void 0!==e.data?(0,(s||(s=t(90313))).recycleNodesInto)(e.data,o):o,l=(0,d.default)({},e,n,{data:u,fetching:!!n.fetching,stale:!!n.stale})
return l.data===e.data&&l.fetching===e.fetching&&l.stale===e.stale&&l.error===e.error&&l.hasNext===e.hasNext&&h(l.operation,e.operation)?e:l}function y(e,n){if(e===n)return!0
if(!e||!n)return e===n
var t=Object.keys(e),r=Object.keys(n)
if(t.length!==r.length)return!1
for(var i=0;i<t.length;i++){var a=t[i]
if(void 0===a||!Object.prototype.hasOwnProperty.call(n,a))return!1
if(e[a]!==n[a])return!1}return!0}}}])


//# sourceMappingURL=urql.25282fe1df621bf020c1.js.map