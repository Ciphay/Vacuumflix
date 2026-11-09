(this.webpackJsonp=this.webpackJsonp||[]).push([[96],{"+0Sm":function(e,t,n){var r,i,o=n("TqRt").default
t.__esModule=!0,t.reloadNetflixAction=function(){(0,(r||(r=n("/Y/f"))).logFocusAndSelect)("playerReloadButton"),delete nrdp.storage.transientData.loginCount,(0,(void 0===i?i=o(n("KgRW")):i).default)({origin:"customerServiceReload"})}},"/Mc2":function(e,t,n){t.__esModule=!0,t.MisdetectionView=function(e){var t=e.enableTimer,m=e.misdetectionErrorCode,g=e.misdetectionShowChallenge,v=e.strings,S=(0,(s||(s=n("GQsr"))).useTheme)(),T=(0,p.useRef)()
return(0,p.useEffect)((function(){if(t&&!m){clearTimeout(T.current)
var e=setTimeout((function(){g()}),5e3)
return T.current=e,function(){clearTimeout(e)}}}),[t,m,g]),v?t?(0,d.j)((o||(o=n("XZre"))).ViewRoot,{children:[(0,d.j)((i||(i=n("i5bM"))).ViewItem,{text:v.misdetectionChallenge,title:v.misdetectionChallengeLabel},null,null),(0,d.j)((l||(l=n("djiD"))).HStack,{children:[(0,d.j)((r||(r=n("UY25"))).ResultIcon,{layoutSpacing:6,type:m?"error":"running"},null,null),(0,d.j)((c||(c=n("AHGZ"))).Text,{children:m?v.qrError:v.qrLoading,languageTextStyleOverrides:h,layoutSpacing:6,textColor:S.ForegroundSubtle,type:(u||(u=n("BKc6"))).TextType.Subtitle,wrap:!0},null,null)],layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,padding:f,width:661},null,null)]},null,null):(0,d.j)((o||(o=n("XZre"))).ViewRoot,{children:(0,d.j)((i||(i=n("i5bM"))).ViewItem,{text:v.misdetectionChallenge,title:v.misdetectionChallengeLabel},null,null)},null,null):null}
var r,i,o,a,u,s,l,c,d=n("igsZ"),p=n("/P98"),f={top:10},h={ja:{padding:{vertical:5}},zh:{padding:{vertical:5}}}},"0ajp":function(e,t,n){t.__esModule=!0,t.CheckNetworkViewResultItem=function(e){var t,f,h,m=e.index,g=e.name,v=e.result,S=e.strings,T=(0,(a||(a=n("GQsr"))).useTheme)(),w="error"===v.status&&v.errorText,b=v.status
switch(v.type){case"netflix":t=(0,(r||(r=n("m5dK"))).nfformat)(S.netflixServer||"",{number:m+1})
break
case"internet":t=S.internetConnection||""
break
case"speed":"success"===v.status?(b="notStarted",t=(0,(r||(r=n("m5dK"))).nfformat)(S.speedResult||"",{speed:(f=v.speedInBytesPerSecond||0,h=f>p?2:3,isNaN(f)||f<.001?"0":(f/p).toFixed(h))})):t=S.speed||""}return(0,(o||(o=n("8rh/"))).useSpeech)({speakOnChange:t,text:t}),(0,(o||(o=n("8rh/"))).useSpeech)({speakOnChange:w,text:w||null}),t?(0,d.j)((u||(u=n("djiD"))).HStack,{children:[(0,d.j)((l||(l=n("UY25"))).ResultIcon,{layoutSpacing:12,type:b},null,null),w?(0,d.j)((u||(u=n("djiD"))).VStack,{children:[(0,d.j)((s||(s=n("AHGZ"))).Text,{children:t,type:(i||(i=n("BKc6"))).TextType.BodyStandard,width:(c||(c=n("sYZz"))).MAX_TEXT_WIDTH},null,null),(0,d.j)((s||(s=n("AHGZ"))).Text,{children:w,layoutSpacing:4,textColor:T.ForegroundSystemError,type:(i||(i=n("BKc6"))).TextType.BodyStandard,width:(c||(c=n("sYZz"))).MAX_TEXT_WIDTH},null,null)],layoutSpacing:12},null,null):(0,d.j)((s||(s=n("AHGZ"))).Text,{children:t,layoutSpacing:12,type:(i||(i=n("BKc6"))).TextType.BodyStandard,width:(c||(c=n("sYZz"))).MAX_TEXT_WIDTH,wrap:!0},null,null)],layoutSpacing:12,name:g},null,null):null}
var r,i,o,a,u,s,l,c,d=n("igsZ"),p=1048576},"2/k/":function(e,t,n){t.__esModule=!0,t.MemberView=function(e){var t=e.strings
if(!t)return null
var u=t.profileEmail&&t.profileEmail!==t.primaryEmail
return(0,a.j)((i||(i=n("XZre"))).ViewRoot,{children:[(0,a.j)((r||(r=n("i5bM"))).ViewItem,{text:t.profile,textName:"profile",title:t.profileLabel},null,null),(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,secure:!0,text:(null==t?void 0:t.primaryEmail)||"",textName:"email",title:t.emailLabel},null,null),!!u&&(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,secure:!0,text:t.profileEmail||"",title:t.profileEmailLabel},null,null),(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:t.locale,textName:"locale",title:t.localeLabel},null,null)]},null,null)}
var r,i,o,a=n("igsZ")},"2d2e":function(e,t){var n,r={getXHR:function(){var e=["Msxml2.XMLHTTP.6.0","Msxml3.XMLHTTP","Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.3.0"],t=!1
try{var n=!1
t=new XMLHttpRequest}catch(n){for(var r=0;r<e.length;r++)try{t=new ActiveXObject(e[r])
break}catch(e){}}finally{if(!n)return n=!0,t}},time:function(){return(new Date).getTime()}}
r.uniqueId=(n=0,function(){var e=n
return n+=1,e}),r.dummy=function(){},e.exports=r},"3IUJ":function(e,t,n){var r
t.__esModule=!0,t.CustomerService=void 0
var i,o=n("xNxB"),a=n("pcYd"),u=n("7WB8"),s=(0,o.compose)(u.withTransitionAnimation,(function(e){return(0,(i||(i=n("DS29"))).withDepthTransitionAsWrapper)(e,{id:"customerService",templateKey:(r||(r=n("KBg7"))).TemplateKey.BrowseForeground})}))
t.CustomerService=s(a.CustomerService)},"3s2M":function(e,t){t.__esModule=!0,t.SCALE_ANIMATION_MULTIPLIER=void 0,t.SCALE_ANIMATION_MULTIPLIER=1.05},"7WB8":function(e,t,n){t.__esModule=!0,t.withTransitionAnimation=void 0
var r=n("9IR/")
t.withTransitionAnimation=(0,r.getFeatures)().enableDepthTransition?n("EI9K").withDepthTransitionRoot:n("vNte").default},A60g:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.reloadMisdetectionTask=t.customerServiceTask=void 0
var i,o,a,u,s,l=r(n("fsL8")),c=n("jNLS"),d=n("Q6G7"),p=(0,l.default)().mark(M),f=(0,l.default)().mark(R),h=(0,l.default)().mark(k),m=(0,l.default)().mark(A),g=(0,l.default)().mark(N),v=(0,l.default)().mark(j),S=(0,l.default)().mark(D),T=(0,l.default)().mark(V),w=(0,l.default)().mark(O),b=(0,l.default)().mark(L),y=(0,l.default)().mark(H),x=(0,l.default)().mark(F),I={action:"mhuFetchCustomerServiceStatusAction",fieldType:"Action",flow:d.FLOWS.TENFOOT_MEMBER,mode:d.MODES.ACTION},E={action:"misdetectionResolutionTrustedTvPushAction",fieldType:"Action",flow:d.FLOWS.TENFOOT_MEMBER,mode:d.MODES.ACTION},_={fields:{errorCode:{fieldType:"String",value:"unknown_error"}},flow:d.FLOWS.TENFOOT_MEMBER,mode:d.MODES.WARN_USER}
function C(e){return e.mode===d.MODES.WARN_USER}function M(e,t){var r
return(0,l.default)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,c.put)((0,(o||(o=n("Sugk"))).sendMoneyballRequest)(e,t))
case 2:return i.next=4,(0,c.take)((o||(o=n("Sugk"))).MONEYBALL_RESPONSE)
case 4:return i.next=6,(0,c.select)((0,(u||(u=n("/J75"))).getMoneyballResponse)())
case 6:return r=i.sent,i.abrupt("return",r)
case 8:case"end":return i.stop()}}),p)}function R(e){var t
return(0,l.default)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(e,_)
case 2:return t=n.sent,n.abrupt("return",t)
case 4:case"end":return n.stop()}}),f)}function k(){var e
return(0,l.default)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(I,_)
case 2:return e=t.sent,t.abrupt("return",e)
case 4:case"end":return t.stop()}}),h)}function A(){var e,t
return(0,l.default)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,k()
case 2:if(!C(t=r.sent)){r.next=7
break}return r.next=6,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!1,isNetflixHouseholdAvailable:!1}))
case 6:return r.abrupt("return",void 0)
case 7:if(!(null==t||null==(e=t.fields)||null==(e=e.isISTB)?void 0:e.value)){r.next=13
break}return r.next=11,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isNetflixHouseholdAvailable:!1}))
case 11:r.next=15
break
case 13:return r.next=15,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isNetflixHouseholdAvailable:!0}))
case 15:return r.abrupt("return",t)
case 16:case"end":return r.stop()}}),m)}function N(e){var t,r,i,o
return(0,l.default)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingMisdetectionResponse)(void 0))
case 2:return a.next=4,R(e)
case 4:if(!C(t=a.sent)){a.next=9
break}return a.next=8,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!1}))
case 8:case 20:return a.abrupt("return",void 0)
case 9:return a.next=11,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingMisdetectionResponse)(t))
case 11:return a.next=13,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!0}))
case 13:if(r=t.fields,i=r.errorCode,o=r.trustedDeviceBeacons,!i){a.next=16
break}return a.abrupt("return",void 0)
case 16:if(!o||0!==o.value.length){a.next=21
break}return a.next=20,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!1}))
case 21:return a.abrupt("return",t)
case 22:case"end":return a.stop()}}),g)}function j(){var e,t,r,i,o
return(0,l.default)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,A()
case 2:if(e=u.sent){u.next=5
break}return u.abrupt("return",void 0)
case 5:return u.next=7,(0,c.select)((s||(s=n("vnQa"))).getAccountSharing)
case 7:if(t=u.sent,r=t.isNetflixHouseholdAvailable,i=(0,(a||(a=n("Cuu1"))).getMoneyballActions)(d.FLOWS.TENFOOT_MEMBER,d.MODES.ACTION,e.fields),o=i.misdetectionResolutionTrustedTvPushAction,r&&o){u.next=14
break}return u.next=13,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!1}))
case 13:return u.abrupt("return",void 0)
case 14:return u.next=16,N(o)
case 16:case"end":return u.stop()}}),v)}function D(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(E)
case 2:case"end":return e.stop()}}),S)}function V(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("pending"))
case 2:return e.next=4,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isActiveMisdetectionSession:!1,isNetflixHouseholdAvailable:!1}))
case 4:return e.next=6,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("ready"))
case 6:case"end":return e.stop()}}),T)}function O(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("pending"))
case 2:return e.next=4,(0,c.select)((s||(s=n("vnQa"))).getEnterCount)
case 4:if(1!==e.sent){e.next=11
break}return e.next=8,(0,c.call)(j)
case 8:return e.next=10,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("ready"))
case 10:return e.abrupt("return",void 0)
case 11:return e.next=13,(0,c.select)((s||(s=n("vnQa"))).getAccountSharing)
case 13:if(!e.sent.isNetflixHouseholdAvailable){e.next=18
break}return e.next=18,(0,c.call)(D)
case 18:return e.next=20,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("ready"))
case 20:case"end":return e.stop()}}),w)}function L(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("pending"))
case 2:return e.next=4,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingFlags)({isNetflixHouseholdAvailable:!0}))
case 4:return e.next=6,(0,c.call)(D)
case 6:return e.next=8,(0,c.put)((0,(s||(s=n("vnQa"))).setAccountSharingStatus)("ready"))
case 8:case"end":return e.stop()}}),b)}function H(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,(i||(i=n("9IR/"))).getFeature)("mhuEnabled")){e.next=4
break}return e.next=3,(0,c.call)(V)
case 3:case 7:return e.abrupt("return",void 0)
case 4:if((0,(i||(i=n("9IR/"))).getFeature)("mhuIstbEnforcement")){e.next=8
break}return e.next=7,(0,c.call)(L)
case 8:return e.next=10,(0,c.call)(O)
case 10:case"end":return e.stop()}}),y)}function F(){return(0,l.default)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.call)(D)
case 2:case"end":return e.stop()}}),x)}t.customerServiceTask=(0,c.createTask)(H),t.reloadMisdetectionTask=(0,c.createTask)(F)},"BEF+":function(e,t,n){var r,i,o,a=n("TqRt").default
t.__esModule=!0,t.default=void 0
var u,s,l=n("3IUJ"),c=a(n("Lk1/")),d=n("HYX5")
t.default=new c.default({initialFocusPath:d.CUSTOMER_SERVICE,payload:{CustomerService:l.CustomerService},routeWillEnter:function(e,t,a){var l,c=a.previous
return(0,(i||(i=n("NEM1"))).matchesPath)(null!=(l=null==c?void 0:c.pathname)?l:"",(o||(o=n("ve0B"))).patterns.MISDETECTION_RESOLUTION_SESSION_START,!0)?[(r||(r=n("agVJ"))).actions.initializeFocus({path:"/customerservice/menu/contact"}),(0,(s||(s=n("vnQa"))).enterCountIncrement)(),(0,(u||(u=n("A60g"))).customerServiceTask)()]:[(0,(s||(s=n("vnQa"))).enterCountIncrement)(),(0,(u||(u=n("A60g"))).customerServiceTask)()]},routeWillRemove:function(){return(0,(s||(s=n("vnQa"))).resetCustomerService)()}})},BezR:function(e,t,n){e.exports=function(){var e,t,r,i=n("R/0C")
return r=[],processingOverhead=0,{start:function(n,o,a,u,s){!function(e,t,n){if(!e)throw new i.RequesterArgumentError("url arguments is mandatory to perform speed test")
if(!t)throw new i.RequesterArgumentError("onProgressCallback is mandatory")
if(!n)throw new i.RequesterArgumentError("onCompleteCallback is mandatory")}(n,o,a),function(n,i,o,a,u){var s,l,c,d,p=0,f={headers:{"X-Gibbon-Cache-Control":"no-cache"},requestMethod:"GET",url:n,connectTimeout:5e3,timeout:15e3,secure:!0}
if(a||((d=nrdp.device.SDKVersion.components.nrdapp)&&d.substring(0,4)>"2015"?f.format="none":f.format="arraybuffer"),nrdp.gibbon.garbageCollect(),u&&r.length<5){var h={headers:{"X-Gibbon-Cache-Control":"no-cache"},requestMethod:"GET",url:u.replace("/range/","/range/0-0"),connectTimeout:5e3,timeout:15e3}
t=nrdp.gibbon.load(h,(function(e){200===e.statusCode&&r.push(e.transactionTime||e.duration)}))}if(r.length>3){for(c=r.length-1;c>=r.length-5&&c>=1;--c)p+=r[c]
processingOverhead=p/(r.length-1)}l=nrdp.mono(),e=nrdp.gibbon.load(f,(function(e){var t=nrdp.mono(),n=e.transactionTime||e.duration||t-l
n=Math.max(1,n-processingOverhead),200===e.statusCode?(s={success:!0,bytes:e.size,time:n,end:t,start:t-n},a&&(s.response=e.data),i(s),o(s)):(a||(e.data=null),o({success:!1,response:e}))}))}(n,o,a,u,s)},supportsProgress:function(){return!1},stop:function(){e&&nrdp.gibbon.stopLoad(e),t&&nrdp.gibbon.stopLoad(t)}}}},BnNj:function(e,t,n){t.__esModule=!0,t.DeviceView=function(e){var t=e.getDeviceInfo,l=void 0===t?(u||(u=n("3+6b"))).getDeviceInfo:t,c=e.strings
if(!c)return null
var d=l(c),p=(0,(r||(r=n("m5dK"))).nfformat)(c.netflixVersion||"",d.netflixVersion)
return globalThis.Halti&&(p+=" / halti "+globalThis.Halti.version),(0,s.j)((o||(o=n("XZre"))).ViewRoot,{children:[(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:d.esn,title:c.ESNLabel},null,null),(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:d.softwareVersion,title:c.softwareVersionLabel},null,null),(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:p,title:c.netflixVersionLabel},null,null),(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,maxLines:5,text:d.platformVersion,title:c.platformVersionLabel},null,null),(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:d.deviceModel,title:c.deviceModelLabel},null,null),(0,s.j)((i||(i=n("i5bM"))).ViewItem,{layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:d.uiBuild,title:c.uiBuildLabel},null,null)]},null,null)}
var r,i,o,a,u,s=n("igsZ")},CI9i:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.NetworkDiagnostics=void 0,t.getFinalResult=v
var i,o,a=n("ZpGL"),u=n("rcEX"),s=r(n("siCl")),l=r(n("RIqP")),c=(r(n("oMp5")),r(n("w1pw"))),d=n("FCIR"),p=n("BHy0"),f=(r(n("XDpb")),g({errorcode:5,errorgroup:8}))
function h(e){"string"!=typeof e.URL||e.url||(e.url=e.URL),this.diagnosisResults.push(e)
var t=g(e)
if(e.errorgroup===nrdp.network.ERRORGROUP.NO_IP_ADDRESS)return this.updateStatus({finalResult:"noInternet",results:this.status.results.map((function(e){return"speed"===e.type?e:(0,s.default)({},e,{errorText:t,status:"error"})}))}),void this.stop()
var n=(0,u.h)(this.status.results,(function(t){return("netflix"===t.type||"internet"===t.type)&&t.url===e.url})),r=n>=0?this.status.results[n]:null
if(r&&"speed"!==r.type){e.success?this.updateResult(n,{status:"success",type:r.type,url:r.url}):this.updateResult(n,{errorText:t,status:"error",type:r.type,url:r.url})
var i=n+1,o=this.status.results.length>i?this.status.results[i]:null
o&&"speed"!==o.type&&"notStarted"===o.status&&this.updateResult(i,{status:"running",type:o.type,url:o.url})}}function m(e){var t=this,r=this.status.results.some((function(e){return"internet"===e.type&&"success"===e.status})),i=this.status.results.some((function(e){return"netflix"===e.type&&"success"===e.status}))
if(!r||!i){var l,c=null!=(l=e.resultArray)&&l.length?e.resultArray:this.diagnosisResults,d=g((0,a.h)(c,(function(e){return!e.success}))||e)
return this.updateStatus({finalResult:"noInternet",results:this.status.results.map((function(e){return"speed"===e.type?e:(0,s.default)({},e,{errorText:d,status:"error"})}))}),void this.stop()}var p=(0,u.h)(this.status.results,(function(e){return"speed"===e.type}))
this.updateResult(p,{speedInBytesPerSecond:0,status:"running",type:"speed"}),this.stopSpeedTest&&this.stopSpeedTest(),this.stopSpeedTest=(0,(o||(o=n("L1G3"))).startSpeedTest)(this.config,(function(e){t.updateResult(p,{speedInBytesPerSecond:e.speed,status:"running",type:"speed"})}),(function(e){t.updateResult(p,e.success?{speedInBytesPerSecond:e.speed,status:"success",type:"speed"}:{errorText:g(e),status:"error",type:"speed"}),t.stop()}))}function g(e){return"nw-"+e.errorgroup+"-"+e.errorcode}function v(e){return e.some((function(e){return"running"===e.status||"notStarted"===e.status}))?"runningCheck":e.every((function(e){return"speed"===e.type||"error"===e.status}))?"noInternet":e.every((function(e){return"netflix"===e.type&&"error"===e.status}))?"noNetflix":"noProblem"}function S(e){var t,r=(i||(i=n("L0Ih"))).deviceStorage.getItem(e)
if("string"==typeof r)try{t=JSON.parse(r)}catch(t){d.logger.warn('JSON parse error for "'+e+'" storage data',r)}return t}t.NetworkDiagnostics=function(){function e(){this.running=void 0,this.status=void 0,this.config=void 0,this.onStatus=void 0,this.onComplete=void 0,this.timeoutID=void 0,this.intervalID=void 0,this.stopSpeedTest=void 0,this.diagnosisResults=void 0,this.forceNetworkDiagnosticsResult=void 0,this.forcedNetworkDiagnosticsResultCount=void 0,this.networkDiagnosticKeyListener=void 0,this.handleDiagnosisStatus=h.bind(this),this.handleDiagnosisComplete=m.bind(this),this.running=!1,this.diagnosisResults=[],this.forceNetworkDiagnosticsResult=!1,this.forcedNetworkDiagnosticsResultCount=0}var t=e.prototype
return t.start=function(e,t,n){var r=this
this.running&&(d.logger.warn("networkDiagnostics error: called start() when a diagnostic was already running, stopping previous diagnostic"),this.stop()),this.running=!0,this.config=e,this.onStatus=t,this.onComplete=n,this.diagnosisResults=[]
var i=S("diagInternetUrls")||["http://www.google.com","http://www.yahoo.com"],o=S("diagNflxUrls")||["https://secure.netflix.com","https://api-global.netflix.com"]
this.updateStatus({finalResult:"runningCheck",results:[].concat((0,l.default)(i.map((function(e,t){return{status:0===t?"running":"notStarted",type:"internet",url:e}}))),(0,l.default)(o.map((function(e){return{status:"notStarted",type:"netflix",url:e}}))),(0,l.default)(e.disableSpeedTest?[]:[{status:"notStarted",type:"speed"}]))}),nrdp.network.addEventListener("diagnosisStatus",this.handleDiagnosisStatus),nrdp.network.addEventListener("diagnosisResult",this.handleDiagnosisComplete),nrdp.network.diagnose(i.concat(o)),this.timeoutID=setTimeout((function(){r.updateStatus({finalResult:"noInternet",results:r.status.results.map((function(e){return"speed"===e.type||"success"===e.status?e:(0,s.default)({},e,{errorText:f,status:"error"})}))}),r.stop()}),6e4)},t.updateStatus=function(e){var t
this.status=e,null==(t=this.onStatus)||t.call(this,e)},t.updateResult=function(e,t){var n=this.status.results.map((function(n,r){return r===e?t:n}))
this.updateStatus({finalResult:v(n),results:n})},t.stop=function(){var e
if(this.running){this.running=!1,this.timeoutID&&clearTimeout(this.timeoutID),this.intervalID&&clearInterval(this.intervalID),this.stopSpeedTest&&(this.stopSpeedTest(),this.stopSpeedTest=void 0),nrdp.network.abortDiagnosis(p.noop),nrdp.network.removeEventListener("diagnosisStatus",this.handleDiagnosisStatus),nrdp.network.removeEventListener("diagnosisResult",this.handleDiagnosisComplete)
var t=new c.default({message:JSON.stringify(this.status),source:"NetworkDiagnostics",type:"networkerror"})
d.logger.warn(t),nrdp.log.flush(),null==(e=this.onComplete)||e.call(this),this.onStatus=void 0,this.onComplete=void 0,this.diagnosisResults=[],this.forceNetworkDiagnosticsResult=!1}},e}()},DS29:function(e,t,n){t.__esModule=!0,t.withCustomDepthTransitionProps=function(e,t){return function(r){var i=(0,(o||(o=n("kCWc"))).useDepthTransitionProps)(t)
return(0,a.j)(e,{__proto__:r,effectParams:i.effectParams,unstable_effect:i.unstable_effect},null,null)}},t.withDepthTransitionAsWrapper=function(e,t){var s=(0,(i||(i=n("9IR/"))).getFeature)("enableDepthTransition")?(0,(r||(r=n("eNcy"))).s)("Widget",void 0,{},!1):u.Fragment
return function(r){var i=(0,(o||(o=n("kCWc"))).useDepthTransitionProps)(t)
return(0,a.j)(s,{children:(0,a.j)(e,r,null,null),effectParams:i.effectParams,unstable_effect:i.unstable_effect},null,null)}},t.withDepthTransitionProps=function(e){return function(t){var r=(0,(o||(o=n("kCWc"))).useDepthTransitionProps)(t.depthTransitionParams)
return(0,a.j)(e,{__proto__:t,effectParams:r.effectParams,unstable_effect:r.unstable_effect},null,null)}}
var r,i,o,a=n("igsZ"),u=n("/P98")},E1ir:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.NetworkView=function(e){var t=e.getNetworkInfo,r=void 0===t?(l||(l=n("d6Ma"))).getNetworkInfo:t,f=e.strings
if(!f)return null
var h,m=r(),g=[(0,p.j)((a||(a=n("i5bM"))).ViewItem,{text:m.env,title:f.envLabel},"env",null)],v=(0,d.default)(m.networkInterfaces)
try{var S=!1
for(v.s();!(h=v.n()).done;){var T,w=h.value
if(w.type){var b=[w.ip].concat((0,c.default)(null!=(T=w.ipv6)?T:[])).filter(Boolean).join(" "),y=(0,(i||(i=n("m5dK"))).nfformat)(f.name||"",{name:w.name||""}),x=(0,(i||(i=n("m5dK"))).nfformat)(f.ipAddress||"",{ips:b}),I=void 0,E=void 0
I=w.ssid?(0,(i||(i=n("m5dK"))).nfformat)(w.isConnected?f.wifiConnectedYes||"":f.wifiConnectedNo||"",{ssid:w.ssid}):w.isConnected?f.connectedYes:f.connectedNo,w.isDefault&&(E=f.default)
var _=[y,I,E].filter(Boolean).join(" | ")
g.push((0,p.j)((o||(o=n("djiD"))).VStack,{children:[(0,p.j)((a||(a=n("i5bM"))).ViewItem,{title:"wired"===w.type?f.wiredLabel:f.wirelessLabel},null,null),(0,p.j)((a||(a=n("i5bM"))).ViewItem,{text:_},null,null),(0,p.j)((a||(a=n("i5bM"))).ViewItem,{text:x},null,null)],layoutSpacing:(s||(s=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING},null,null))}}}catch(e){v.e(e)}finally{S||(S=!0,v.f())}return m.dnsServers.length&&g.push((0,p.j)((o||(o=n("djiD"))).VStack,{children:[(0,p.j)((a||(a=n("i5bM"))).ViewItem,{title:f.dnsServersLabel},null,null),m.dnsServers.map((function(e,t){return(0,p.j)((a||(a=n("i5bM"))).ViewItem,{text:e},"dns-"+t,null)}))],layoutSpacing:(s||(s=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING},null,null)),(0,p.j)((u||(u=n("XZre"))).ViewRoot,{children:g},null,null)}
var i,o,a,u,s,l,c=r(n("RIqP")),d=r(n("Y3SK")),p=n("igsZ")},EBy4:function(e,t){e.exports=function(){var e,t,n
function r(){e=[],t={},n={}}return r(),{reset:function(){r()},compute:function(r){var i=function(e){var r,i,o,a,u,s,l,c,d
for(r in i=[],c={},e)if(e.hasOwnProperty(r)){if(a=(o=e[r]).length,s=t[r]||0,d=n[r]||[],!(s<a||d.length>0))return
n[r]=[],i.push({workerId:r,measurements:[].concat(d,o.slice(s,a))}),u=o[a-1],(!l||u.end<l)&&(l=u.end),c[r]=a}return t=c,{measurements:i,end:l}}(r)
if(i){var o=function(e,t){var r,i,o,a,u,s,l
for(s=0;s<e.length;++s){for(r=(l=e[s]).measurements,i=l.workerId,a=r.length-1;a>=0&&(o=r[a]).start>=t;--a)n[i]||(n[i]=[]),n[i].push(o)
l.measurements=r.slice(0,a+1),a>=0&&o&&o.end>t&&((u={start:t,end:o.end}).bytes=o.bytes*(o.end-t)/(o.end-o.start),o.bytes-=u.bytes,o.end=t,n[i]||(n[i]=[]),n[i].push(u))}return e}(i.measurements,i.end),a=function(e){var t,n,r,i,o,a
function u(t){var n,r={workerId:null,measurement:{},snapshotInd:null}
for(n=0;n<e.length;++n){var i=e[n].workerId,o=e[n].measurements[t[i]||0]
o&&(void 0===r.measurement.start||o.start<r.measurement.start)&&(r.workerId=i,r.measurement=o,r.snaphotInd=n)}return r}for(r={bytes:0,time:0},i={},o=0;o<e.length;){var s=u(i)
null!==s.workerId?(i[s.workerId]=(i[s.workerId]||0)+1,i[s.workerId]>=e[s.snaphotInd].measurements.length&&(o+=1),void 0===t&&(a=t=s.measurement.start),a=Math.max(a,s.measurement.start),s.measurement.end>a&&(r.time+=s.measurement.end-a,a=s.measurement.end),r.bytes+=s.measurement.bytes):o+=1}if(void 0!==(n=a)&&void 0!==t)return r.start=t,r.end=n,r}(o)
return a&&e.push(a),a}},length:function(){return e.length},all:function(){return e}}}()},EI9K:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.withDepthTransitionRoot=void 0
var i=r(n("N9EI")),o=n("yf0s"),a=n("HYX5")
t.withDepthTransitionRoot=(0,i.default)({name:a.CUSTOMER_SERVICE,onRootEntering:o.onActivationChange,onRootExiting:o.onActivationChange})},FrPE:function(e,t,n){t.__esModule=!0,t.ContactView=function(e){var t=e.strings
if(!t)return null
var u=[t.customerService,t.or,t.phoneNumber]
return(0,a.j)((i||(i=n("XZre"))).ViewRoot,{children:[(0,a.j)((r||(r=n("i5bM"))).ViewItem,{title:t.customerServiceLabel},null,null),u.map((function(e){return(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:e},e,null)})),t.adChoices&&(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:t.adChoices,title:t.adChoicesLabel},null,null)]},null,null)}
var r,i,o,a=n("igsZ")},GdGH:function(e,t,n){var r=n("TqRt").default,i=n("284h").default
t.__esModule=!0,t.default=void 0
var o=i(n("J2l9")),a=r(n("YIFJ")),u=r(n("OuJL")),s={numDiagnoseUrls:(0,a.default)(o),sslForSpeedTest:(0,u.default)(o)}
t.default=s},Jbtd:function(e,t,n){t.__esModule=!0,t.PrimaryLocationView=function(e){var t=e.strings
return t?(0,a.j)((i||(i=n("XZre"))).ViewRoot,{children:[(0,a.j)((r||(r=n("i5bM"))).ViewItem,{text:t.description,textName:"primaryLocationTitle",title:t.title},null,null),(0,a.j)((r||(r=n("i5bM"))).ViewItem,{layoutSpacing:(o||(o=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,text:t.definitionDetail,textName:"primaryLocationDefinition",title:t.definitionTitle},null,null)]},null,null):null}
var r,i,o,a=n("igsZ")},L1G3:function(e,t,n){var r,i=n("TqRt").default
t.__esModule=!0,t.startSpeedTest=function(e,t,a){var u=(void 0===r?r=i(n("zmvw")):r).default.aggregator.movingAverage(8),s=(void 0===r?r=i(n("zmvw")):r).default.stopper.stableMeasurementsStopper({maxDuration:30,minDuration:3,minStableMeasurements:5,stabilityDelta:10,timer:nrdp.mono}),l={aggregator:u,getTestOcasParams:{endpoint:"api-global.netflix.com/nrdp/speedtest",https:o.default.sslForSpeedTest||!1,token:"F7B71934FEA29AB397EE3887B1B3D"},maxBytesInFlight:e.maxBytesInFlight||26214400,maxThreads:e.maxSpeedTestThreads||3,reportFreq:1e3,startRequestTimeMs:e.startRequestTimeMs||0,stopper:s,timer:nrdp.mono};(void 0===r?r=i(n("zmvw")):r).default.tester.start((void 0===r?r=i(n("zmvw")):r).default.requester.nrdp,l,(function(e){t({running:!0,speed:e.speed})}),(function(e){if(e.success)d({speed:e.speed||0,success:!0})
else{var t=0,n=0
if(e.error)if(e.error.response){var r=e.error.response
t=r.errorgroup,n=r.errorcode}else t=0,n=e.error.name
else n=e.reason||""
d({errorcode:n,errorgroup:t,success:!1})}}))
var c=!0
function d(e){c=!1,a(e)}return function(){c&&(c=!1,(void 0===r?r=i(n("zmvw")):r).default.tester.stop())}}
var o=i(n("GdGH"))},LegA:function(e,t,n){t.__esModule=!0,t.useMenuItems=function(e){var t=e.isDeviceSupportEnabled,c=e.misdetectionAvailable,d=e.netflixHouseholdAvailable,p=e.strings,f=(0,(i||(i=n("9IR/"))).getFeature)("isExitAllowed")
return(0,l.useMemo)((function(){if(p){var e=function(e){var t,r=e.isDeviceSupportEnabled,a=e.isExitAllowed,l=e.misdetectionAvailable,c=e.netflixHouseholdAvailable,d=e.strings,p=(0,(i||(i=n("9IR/"))).getFeature)("mhuEnabled")&&l,f=(0,(i||(i=n("9IR/"))).getFeature)("mhuEnabled")&&!(0,(i||(i=n("9IR/"))).getFeature)("hideManagePrimaryLocation")&&c&&!p,h=!(null==d||null==(t=d.privacy)||null==(t=t.view)||!t.dnsspiPrivacy),m=[(0,(i||(i=n("9IR/"))).getFeature)("isUIBackButtonAllowed")&&{hasBreakBelow:!0,iconType:(o||(o=n("S2RX"))).IconType.Back,id:"back",label:d.back.menu},{id:"member",label:d.member.menu},{id:"device",label:d.device.menu},{id:"network",label:d.network.menu},(0,(u||(u=n("lUUO"))).supportsHDRToggle)()&&{id:"videoSettings",label:d.videoSettings.menu},r&&{id:"deviceSupport",label:d.deviceSupport.menu},h&&{id:"privacy",label:d.privacy.menu},{id:"contact",label:d.contact.menu},{id:"checkNetwork",label:d.checkNetwork.menu},p&&{focusKey:"mhuExclusiveAction",id:"misdetectionChallenge",label:d.misdetectionChallenge.menu},f&&{focusKey:"mhuExclusiveAction",id:"primaryLocation",label:d.primaryLocation.menu},{id:"reloadNetflix",label:d.reloadNetflix.menu},a&&{id:"exitNetflix",label:d.exitNetflix.menu},{id:"signOut",label:d.signOut.menu}]
return(0,s.h)(m,(function(e){return e&&e.label?e:[]}))}({isDeviceSupportEnabled:t,isExitAllowed:f,misdetectionAvailable:c,netflixHouseholdAvailable:d,strings:p}),l=(h=e.length)>10?10:10===h?30:50
return e.map((function(e){var t
return{focusKey:null!=(t=e.focusKey)?t:e.id,item:e,itemSize:e.hasBreakBelow?{height:(a||(a=n("oO4j"))).MENU_ITEM_DEFAULT_SIZE.height+l,width:(r||(r=n("ut8D"))).MENU_WIDTH}:{height:(a||(a=n("oO4j"))).MENU_ITEM_DEFAULT_SIZE.height,width:(r||(r=n("ut8D"))).MENU_WIDTH},name:e.id}}))}var h}),[t,f,c,d,p])}
var r,i,o,a,u,s=n("xC7v"),l=n("/P98")},MyWH:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.DeviceSupportView=function(e){var t=e.canSignupAds,r=e.canSignupButton,a=e.strings,u=(0,(o||(o=n("GQsr"))).useTheme)()
if(!a)return null
var g=t?(0,p.j)(m,{supported:!0,text:a.allPlansSupported},null,null):(0,p.j)(d.default.Fragment,{children:[(0,p.j)(m,{supported:!0,text:a.adFreePlanSupported},null,null),(0,p.j)(m,{supported:!1,text:a.adPlanUnsupported},null,null)]},null,null),v=t?a.allPlansSupportedDisclaimer:a.adPlanUnsupportedDisclaimer
return(0,p.j)((c||(c=n("XZre"))).ViewRoot,{children:(0,p.j)((s||(s=n("djiD"))).VStack,{children:[(0,p.j)(h,{children:[g,r&&(0,p.j)((s||(s=n("djiD"))).HStack,{children:(0,p.j)((l||(l=n("AHGZ"))).Text,{backgroundColor:u.SurfaceHighlight,children:a.signupLabel,padding:f.button,textColor:u.ForegroundHighlight,type:(i||(i=n("BKc6"))).TextType.BodyStandardHeavy},null,null),layoutSpacing:26},null,null)]},null,null),(0,p.j)((l||(l=n("AHGZ"))).Text,{children:v,name:"Disclaimer",padding:f.disclaimer,textColor:u.ForegroundSubtle,type:(i||(i=n("BKc6"))).TextType.BodySmall,wrap:!0},null,null)],name:"DeviceSupport",width:700},null,null)},null,null)}
var i,o,a,u,s,l,c,d=r(n("/P98")),p=n("igsZ"),f={button:{bottom:6,left:20,right:20,top:6},content:{bottom:20,left:30,right:12,top:12},disclaimer:{left:32,top:20},item:{top:10}}
function h(e){var t=e.children,r=(0,(o||(o=n("GQsr"))).useTheme)()
return(0,p.j)((a||(a=n("yjEy"))).DynamicBorderImage,{children:(0,p.j)((s||(s=n("djiD"))).VStack,{children:t,padding:f.content},null,null),cornerRadius:10,fill:r.SurfaceLow,hAlign:"start",name:"ContentWrapper",width:700},null,null)}function m(e){var t=e.supported,r=e.text
return(0,p.j)((s||(s=n("djiD"))).HStack,{children:[(0,p.j)("Widget",{children:(0,p.j)((u||(u=n("S2RX"))).Icon,{color:t?(u||(u=n("S2RX"))).IconColor.ForegroundSubtle:(u||(u=n("S2RX"))).IconColor.ForegroundProductBrand,size:(u||(u=n("S2RX"))).IconSize.Standard,type:t?(u||(u=n("S2RX"))).IconType.Checkmark:(u||(u=n("S2RX"))).IconType.CircleX},null,null)},null,null),(0,p.j)((l||(l=n("AHGZ"))).Text,{children:r,layoutSpacing:6,maxWidth:615,type:(i||(i=n("BKc6"))).TextType.BodyStandardHeavy,wrap:!0},null,null)],name:"SupportItem",padding:f.item},null,null)}},OT2Q:function(e,t,n){var r
t.__esModule=!0,t.useAccountSharing=function(){var e,t=(0,(o||(o=n("e9tE"))).useDispatch)(),l=(0,s.useMemo)((function(){return(0,(r||(r=n("G4qV"))).createSelector)([(a||(a=n("vnQa"))).getEnterCount,(a||(a=n("vnQa"))).getAccountSharing],(function(e,t){return{_customerServiceViewedTimes:e,_getAccountSharing:t}}))}),[]),c=(0,(o||(o=n("e9tE"))).useSelector)(l),d=c._customerServiceViewedTimes,p=c._getAccountSharing,f=p.isActiveMisdetectionSession,h=p.isNetflixHouseholdAvailable,m=p.misdetectionResponse,g=p.status,v=null==m||null==(e=m.fields)||null==(e=e.errorCode)?void 0:e.value,S=(0,s.useCallback)((function(){t((0,(u||(u=n("A60g"))).reloadMisdetectionTask)())}),[t]),T=(0,s.useCallback)((function(){f&&t((0,(i||(i=n("Sugk"))).sendMoneyballAction)({action:"cached",cached:m,fieldType:"Action",flow:"",mode:"",withHistory:!0}))}),[t,f,m]),w=!1,b=!1
return"ready"===g&&(w=null!=f&&f,b=null!=h&&h),{accountSharingStatus:g,customerServiceViewedTimes:d,misdetectionAvailable:w,misdetectionErrorCode:v,misdetectionReload:S,misdetectionShowChallenge:T,netflixHouseholdAvailable:b}}
var i,o,a,u,s=n("/P98")},OuJL:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e){return!e||!e.isLessThan||e.isLessThan("13.3")}},QTJK:function(e,t,n){t.__esModule=!0,t.PrivacyView=function(e){var t=e.strings,o=(0,(u||(u=n("GQsr"))).useTheme)()
return t?(0,f.j)((d||(d=n("djiD"))).VStack,{children:(0,f.j)((i||(i=n("XZre"))).ViewRoot,{children:[(0,f.j)((r||(r=n("i5bM"))).ViewItem,{text:t.adsChoicePrivacy,title:t.adsChoicePrivacyLabel},null,null),t.dnsspiPrivacy&&(0,f.j)((d||(d=n("djiD"))).HStack,{children:[(0,f.j)((r||(r=n("i5bM"))).ViewItem,{text:t.dnsspiPrivacy,title:t.dnsspiPrivacyLabel,width:470},null,null),(0,f.j)((d||(d=n("djiD"))).VStack,{children:[(0,f.j)("Widget",{children:[(0,f.j)((s||(s=n("6jZX"))).BorderBox,{cornerRadius:16,fill:o.Foreground,height:v+2*S,width:v+2*S},null,null),(0,f.j)((c||(c=n("qsaZ"))).QRCode,{cache:!0,errorCorrection:"H",size:v,text:"https://netflix.com/dnsspi",x:S,y:S},null,null),(0,f.j)((d||(d=n("djiD"))).HStack,{children:(0,f.j)(h.NetflixLogo,{height:h.NETFLIX_LOGO_SIZE.small.height,size:"small",width:h.NETFLIX_LOGO_SIZE.small.width},null,null),color:o.Foreground,halign:"center",height:g,valign:"center",width:m,x:T,y:w},null,null)]},null,null),(0,f.j)(y,{text:t.qrcodeScanLabel||""},null,null)],layoutSpacing:32,width:166},null,null)],layoutSpacing:24},null,null)]},null,null),name:"PrivacyView"},null,null):null}
var r,i,o,a,u,s,l,c,d,p,f=n("igsZ"),h=n("MZ+u"),m=h.NETFLIX_LOGO_SIZE.small.width+10,g=h.NETFLIX_LOGO_SIZE.small.height+10,v=134,S=16,T=(v-m)/2+S,w=(v-g)/2+S,b=["center-vertical","left"]
function y(e){var t=e.text
return(0,(a||(a=n("8rh/"))).useSpeech)({speakOnChange:t,text:t}),(0,f.j)((d||(d=n("djiD"))).HStack,{children:[(0,f.j)((l||(l=n("S2RX"))).Icon,{color:(l||(l=n("S2RX"))).IconColor.ForegroundSubtle,size:(l||(l=n("S2RX"))).IconSize.Standard,type:(l||(l=n("S2RX"))).IconType.Phone},null,null),(0,f.j)((p||(p=n("AHGZ"))).Text,{children:t,layoutSpacing:6,textAlign:b,type:(o||(o=n("BKc6"))).TextType.Caption,wrap:!0},null,null)],layoutSpacing:16},null,null)}},"R/0C":function(e,t){var n={}
function r(){var e=Error.apply(this,arguments)
e.name=this.name="TesterArgumentError",this.stack=e.stack,this.message=e.message}function i(){var e=Error.apply(this,arguments)
e.name=this.name="RequesterArgumentError",this.stack=e.stack,this.message=e.message}function o(){var e=Error.apply(this,arguments)
e.name=this.name="GetOcaUrlError",this.stack=e.stack,this.message=e.message}function a(){var e=Error.apply(this,arguments)
e.name=this.name="NoOcaUrlsError",this.stack=e.stack,this.message=e.message}function u(){var e=Error.apply(this,arguments)
e.name=this.name="DownloadOcaDataError",this.stack=e.stack,this.message=e.message}r.prototype=Error.prototype,n.TesterArgumentError=r,i.prototype=Error.prototype,n.RequesterArgumentError=i,o.prototype=Error.prototype,n.GetOcaUrlError=o,a.prototype=Error.prototype,n.NoOcaUrlsError=a,u.prototype=Error.prototype,n.DownloadOcaDataError=u,e.exports=n},UY25:function(e,t,n){t.__esModule=!0,t.ResultIcon=void 0
var r,i=n("eNcy"),o=n("oM/y")
t.ResultIcon=(0,i.s)("Widget","ResultIcon",{height:35,image:function(e){switch(e.type){case"error":return(0,o.i)("OvV+embed=webp","cs")
case"running":return(r||(r=n("S4TX"))).supportsSng?(0,o.i)("iMY","sng"):(0,o.i)("BKB","mng")
case"success":return(0,o.i)("A6q+embed=webp","cs")
default:return null}},layoutSpacing:function(e){return e.layoutSpacing},width:42},!1)},XZre:function(e,t,n){t.__esModule=!0,t.ViewRoot=function(e){var t=e.children,u=e.name
return(0,(r||(r=n("8rh/"))).useSpeech)({text:(0,o.j)("speak",{children:(0,o.j)("break",{time:1e3},null,null)},null,null)}),(0,o.j)((i||(i=n("djiD"))).VStack,{children:a.Children.toArray(t),name:u},null,null)}
var r,i,o=n("igsZ"),a=n("/P98")},YIFJ:function(e,t){t.__esModule=!0,t.default=void 0,t.default=function(e){if(e&&e.isLessThan)return e.isLessThan("2013.3")?2:1}},Zby3:function(e,t,n){e.exports=function(e){var t,r,i,o,a,u
return t=e.minDuration||5,r=e.maxDuration||60,i=e.stabilityDelta||5,o=e.minStableMeasurements||5,a=e.timer||n("2d2e").time,u=a(),function(e){var n=void 0!==e.testTime?e.testTime:a()-u,s=e.progressMeasurements,l=e.afterCompleteDuration,c=s.length
if(void 0===l){if(n>=r)return!0
if(c<o)return!1
var d=function(e,t){var n,r=0,i=0,o=0,a=e.length,u=Math.max(0,a-t)
for(o=a-1;o>=u;--o)(n=e[o]).speed>=r&&(r=n.speed,i=o)
return i}(s,o)
return!(c-d<o)&&!(function(e,t){var n,r,i=0
for(n=0;n<t.length;++n)(r=100*Math.abs(t[n].speed-e)/e)>i&&(i=r)
return r}(s[d].speed,s.slice(c-o,c))>i)&&n>=t}return n>=l}}},"c6/s":function(e,t,n){var r=function(){var e,t,r,i,o,a
function u(){t=[],e=0,a=void 0}return o=n("R/0C"),dummy=n("2d2e").dummy,r={},i={},u(),r.get=function(n,i,a,u,s){0===t.length||s?r.refresh(n,i,(function(t){return a(t[e])}),u):t.length>0?a(t[e]):u(new o.NoOcaUrlsError("No urls returned from the endpoint "+n))},r.getNext=function(n,i,a,u){t.length<=1?r.get(n,i,a,u,!0):(e=(e+1)%t.length,t.length>0?a(t[e]):u(new o.NoOcaUrlsError("No urls returned from the endpoint "+n)))},r.reportBadUrl=function(e){var n,r=[]
for(n=0;n<t.length;++n)t[n]!==e&&r.push(t[n])
return i[e]=!0,t=r},r.refresh=function(e,n,r,s){a=n(),e=e||"https://api-global.netflix.com/oca/speedtest?https=true&token=YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5",a.start(e,dummy,(function(n){a=void 0,n.success?(u(),t=function(e){var n,r
for(n=JSON.parse(e),r=0;r<n.length;++r)i[void 0]||t.push(n[r].url)
return t}(n.response),r(t)):(error=new o.GetOcaUrlError("Could not send request to "+e),error.response=n.response,s(error))}),!0)},r.stop=function(){a&&a.stop()},r}()
e.exports=r},f2C8:function(e,t,n){var r,i
t.__esModule=!0,t.useAllStrings=function(){var e=(0,o.useFalcor)([["csStrings"]]).data
return(0,a.useMemo)((function(){if(null!=e&&e.csStrings)return e.csStrings.primaryLocation.view.definitionDetail=(0,(i||(i=n("m5dK"))).nfformat)(e.csStrings.primaryLocation.view.definitionDetail,{householdUrl:(0,(r||(r=n("9IR/"))).getConfig)("mhuGlobalNetflixHouseholdHelpCenterUrl")}),e.csStrings}),[null==e?void 0:e.csStrings])}
var o=n("pbgz"),a=n("/P98")},g9pZ:function(e,t,n){t.__esModule=!0,t.ViewContainer=void 0
var r=n("eNcy")
t.ViewContainer=(0,r.s)("Widget","ViewContainer",{x:500,y:74},!1)},hRyT:function(e,t,n){t.__esModule=!0,t.GenericView=function(e){var t=e.text,a=e.title
return(0,o.j)((i||(i=n("XZre"))).ViewRoot,{children:(0,o.j)((r||(r=n("i5bM"))).ViewItem,{text:t,title:a},null,null)},null,null)}
var r,i,o=n("igsZ")},i5bM:function(e,t,n){t.__esModule=!0,t.ViewItem=function(e){var t=e.layoutSpacing,d=e.maxLines,p=e.secure,f=e.text,h=e.textName,m=e.title,g=e.titleIcon,v=e.width,S=void 0===v?(l||(l=n("sYZz"))).MAX_TEXT_WIDTH:v,T=(0,(o||(o=n("GQsr"))).useTheme)()
return(0,(i||(i=n("8rh/"))).useSpeech)({speakOnChange:m,text:m}),(0,(i||(i=n("8rh/"))).useSpeech)({secure:p,speakOnChange:f,text:f}),(0,c.j)((a||(a=n("djiD"))).VStack,{children:[!!m&&(0,c.j)((s||(s=n("lQKr"))).ViewItemTitle,{title:m,titleIcon:g,width:S},null,null),!!f&&(0,c.j)((u||(u=n("AHGZ"))).Text,{children:f,layoutSpacing:6,maxLines:d,name:h,richText:!0,textColor:T.ForegroundSubtle,type:(r||(r=n("BKc6"))).TextType.BodySmall,width:S,wrap:!0},null,null)],layoutSpacing:t},null,null)}
var r,i,o,a,u,s,l,c=n("igsZ")},jCSS:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.VideoSettingsView=function(e){var t=e.speechStrings,r=e.strings,f=(0,g.useState)((function(){return nrdjs.capability.hasHDRProfile()||nrdjs.capability.hasDVProfile()})),v=(0,m.default)(f,2),w=v[0],b=v[1],y=(0,g.useCallback)((function(e){var t=e.item.id
if(!("hdrOn"===t&&w||"hdrOff"===t&&!w)){var r=!w
b(r),(0,(p||(p=n("3hQH"))).syncHDRState)(r,"videoSettings",!0).then((function(e){(u||(u=n("Mmf2"))).consolidatedLogger.logEvent("HDRToggleChange",{isSuccess:!e,optionSelected:t,view:"videoSettings"})}))}}),[w]),x=(0,g.useMemo)((function(){var e=function(e){var t=e.hdrState,r=e.strings,i=e.speechStrings||{},o=i.isSelected,a=i.selectInstruction,u=null==r?void 0:r.hdrToggleOn,l=null==r?void 0:r.hdrToggleOff
return o&&a&&u&&l&&(t?(u=(0,h.j)("p",{children:[(0,h.j)("s",{children:u},null,null),(0,h.j)("s",{children:o},null,null)]},null,null),l=(0,(s||(s=n("m5dK"))).nfformat)(a,{menuItem:l})):(u=(0,(s||(s=n("m5dK"))).nfformat)(a,{menuItem:u}),l=(0,h.j)("p",{children:[(0,h.j)("s",{children:l},null,null),(0,h.j)("s",{children:o},null,null)]},null,null))),{hdrOffAccessibilityLabel:l,hdrOnAccessibilityLabel:u}}({hdrState:w,speechStrings:t,strings:r}),i=e.hdrOffAccessibilityLabel
return[{accessibilityLabel:e.hdrOnAccessibilityLabel,focusKey:"hdrOn",item:{iconType:w?(l||(l=n("S2RX"))).IconType.Checkmark:void 0,id:"hdrOn",label:(null==r?void 0:r.hdrToggleOn)||"",width:S},itemSize:{height:(d||(d=n("oO4j"))).MENU_ITEM_DEFAULT_SIZE.height,width:S},name:"hdrOn"},{accessibilityLabel:i,focusKey:"hdrOff",item:{iconType:w?void 0:(l||(l=n("S2RX"))).IconType.Checkmark,id:"hdrOff",label:(null==r?void 0:r.hdrToggleOff)||"",width:S},itemSize:{height:(d||(d=n("oO4j"))).MENU_ITEM_DEFAULT_SIZE.height,width:S},name:"hdrOff"}]}),[w,t,r])
return r?(0,h.j)((o||(o=n("XZre"))).ViewRoot,{children:[(0,h.j)((i||(i=n("i5bM"))).ViewItem,{text:r.hdrDescription,title:r.hdrTitle},null,null),(0,h.j)((c||(c=n("Vv2a"))).List,{children:T,focusKey:"hdrToggle",gap:4,height:2*(d||(d=n("oO4j"))).MENU_ITEM_DEFAULT_SIZE.height+4,initialIndex:w?0:1,items:x,layout:"stack",layoutSpacing:(a||(a=n("sYZz"))).CUSTOMER_SERVICE_VERTICAL_SPACING,onSubmit:y,selectedIndex:w?0:1,width:300},null,null)]},null,null):null}
var i,o,a,u,s,l,c,d,p,f=r(n("6gFf")),h=n("igsZ"),m=r(n("J4zp")),g=(r(n("oMp5")),n("/P98")),v=["isSelected","item"],S=300
function T(e){e.isSelected
var t=e.item,r=(0,f.default)(e,v)
return(0,h.j)((d||(d=n("oO4j"))).MenuItem,{__proto__:r,isNearViewportEdge:!1,item:t},null,null)}},"k+Am":function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.useNetworkStatus=function(e,t){var r=(0,l.useState)(e),c=(0,s.default)(r,2),d=c[0],p=c[1],f=(0,l.useRef)(!1),h=(0,(o||(o=n("e9tE"))).useSelector)((i||(i=n("B1ka"))).isSuspended),m=(0,l.useCallback)((function(){f.current||!t||h||(f.current=!0,(void 0===a?a=new(n("CI9i").NetworkDiagnostics):a).start(t,p,(function(){f.current=!1})))}),[t,h]),g=(0,l.useCallback)((function(e){f.current&&((void 0===a?a=new(n("CI9i").NetworkDiagnostics):a).stop(),f.current=!1),p(e?function(t){var n
return(0,u.default)({},t,{finalResult:e,results:null!=(n=null==t?void 0:t.results)?n:[]})}:void 0)}),[])
return(0,l.useEffect)((function(){return h&&g(),g}),[h,g]),{networkStatus:d,startDiagnostic:m,stopDiagnostic:g}}
var i,o,a,u=r(n("siCl")),s=r(n("J4zp")),l=n("/P98")},lQKr:function(e,t,n){t.__esModule=!0,t.ViewItemTitle=function(e){var t=e.title,l=e.titleIcon,c=e.width,d=void 0===c?(u||(u=n("sYZz"))).MAX_TEXT_WIDTH:c
return t?l?(0,s.j)((o||(o=n("djiD"))).HStack,{children:[(0,s.j)((i||(i=n("S2RX"))).Icon,{size:(i||(i=n("S2RX"))).IconSize.Standard,type:l},null,null),(0,s.j)((a||(a=n("AHGZ"))).Text,{children:t,layoutSpacing:10,type:(r||(r=n("BKc6"))).TextType.BodyStandardHeavy,wrap:!0},null,null)],width:d},null,null):(0,s.j)((a||(a=n("AHGZ"))).Text,{children:t,type:(r||(r=n("BKc6"))).TextType.BodyStandardHeavy,width:d,wrap:!0},null,null):null}
var r,i,o,a,u,s=n("igsZ")},m3bO:function(e,t,n){var r=function(){var e,t,r,i,o,a,u,s,l,c,d,p,f,h=n("2d2e").time,m=26214400,g=n("pqVV")(10),v=n("Zby3")({minDuration:5,maxDuration:30,stabilityDelta:3,minStableMeasurements:10,timer:h}),S=1,T=5,w=!1,b=!1,y=3,x=5,I=30,E=20480,_=52428800,C=2048,M=h,R=200,k=g,A=v,N=300,j=1e3,D=100,V=!1,O=null,L={},H={},F=[]
function P(t){var n
for(n in a.stop(),d&&clearTimeout(d),H)H.hasOwnProperty(n)&&H[n].stop()
w=!1,b=!1,e=void 0,f=0,t&&i({success:!1,start:O,reason:"stopped"})}function B(t){function n(){return(M()-O)/1e3}var a,u,s,l,p,h,m;(w||b)&&((a=c.compute(L))&&o&&(l=1e3*a.bytes*8/a.time,o({speed:l})),h=c.all(),m=n(),s=A({testTime:m,snapshots:h,progressMeasurements:F,afterCompleteDuration:e}),u={speed:p=k(h),attempts:S,start:O,afterComplete:b,stable:!0},s&&(w||b)?(b||m>I&&(u.stable=!1),u.success=!0,i(u),w=!1,!b&&V?(b=!0,e=1.5*n(),d=setTimeout((function(){B(t)}),t)):b=!1):(a&&(F.push(u),r(u)),d=setTimeout((function(){B(t)}),t)),f<y&&(p>5e5&&f<2||p>1e6)&&G())}function Z(e){U(S+1,e)}function G(){f+=1,a.getNext(t,u,(function(e){var t=u(),n=l()
H[n]=t,function(e,t,n,r){var o=C
function a(t){var r=n.replace("/range/","/range/0-"+t)
M(),M(),e.start(r,l,c,!1,n)}function u(){return void 0!==L[t]}function l(n){u()&&(w||b)?n.success&&L[t].push({bytes:n.bytes,time:n.duration||n.end-n.start,type:"progress",start:n.start,end:n.end}):e.stop()}function c(t){var l
if(u()&&(w||b)){if(!t.success){var c=new s.DownloadOcaDataError("Could not download oca data")
return c.url=n,c.response=t.response,void(b?i({success:!1,start:O,error:c,afterComplete:!0}):U(r+1,c))}l=t.duration||t.end-t.start,e.supportsProgress()?o=m:(o=Math.min(Math.floor(p*o/l),5*o,m,Math.round(_/y)),p=Math.min(p+200,j),o=Math.max(o,1024)),a(o)}else e.stop()}L[t]=[],a(o)}(t,n,e=e.replace(/speedtest/,"speedtest/range/"),S)}),Z)}function U(e,n){P(),O=null,S=1,L={},H={},F=[],p=N,c.reset(),(S=e||1)>T?i({success:!1,start:O,attempts:S,error:n}):(n&&n.url&&a.reportBadUrl(n.url),a.refresh(t,u,(function(){O=M(),w=!0,G(),B(R)}),Z))}return a=n("c6/s"),s=n("R/0C"),l=n("2d2e").uniqueId,c=n("EBy4"),{start:function(e,n,a,l,c){var d
!function(e,t,n,r){if(!e)throw new s.TesterArgumentError("requester argument is mandatory to perform speed test")
if(!n)throw new s.TesterArgumentError("onProgressCallback is mandatory")
if(!r)throw new s.TesterArgumentError("onCompleteCallback is mandatory")}(e,0,a,l),y=(d=n).maxThreads||y,x=d.duration&&d.duration.min||x,I=d.duration&&d.duration.max||I,E=d.minBytes||E,C=d.firstRequestBytes||C,M=d.timer||M,R=d.reportFreq||R,T=d.attempts||T,V=d.collectAfterComplete||V,k=d.aggregator||k,A=d.stopper||A,_=d.maxBytesInFlight||_,N=d.startRequestTimeMs||N,j=d.maxRequestTimeMs||j,D=d.requestTimeAddMs||D,t=d.getTestOcasUrl,r=a,i=l,o=c,u=e,U()},stop:function(){P(!0)}}}()
e.exports=r},n3PO:function(e,t,n){t.__esModule=!0,t.useCheckNetworkConfig=function(){var e=(0,r.useFalcor)([["csConfig"]]).data
return null==e?void 0:e.csConfig}
var r=n("pbgz")},nFEI:function(e,t,n){t.__esModule=!0,t.CustomerServiceRoot=void 0
var r=n("eNcy")
t.CustomerServiceRoot=(0,r.s)("Focusable","customerService",{name:"customerService"},!1)},oO4j:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.MENU_ITEM_DEFAULT_SIZE=t.MENU_ITEM_CHILDREN_X_OFFSET=t.BaseMenuItem=t.BUTTON_CONTAINER_HEIGHT=void 0,t.MenuItem=function(e){var t=e.children,r=e.data,i=e.focused,m=e.iconColorOverride,g=e.iconHighlightColorOverride,y=e.isAlternateHighlightColor,R=e.isHighlighted,k=e.isNearViewportEdge,A=e.isSelected,N=e.opacity,j=e.testAttributes,D=e.textColorOverride,V=e.textHighlightColorOverride,O=(e.textPadding,(0,h.default)(e,S)),L=(0,(u||(u=n("GQsr"))).useTheme)(),H="item"in O&&O.item||O,F=H.alwaysReserveSpaceForIcon,P=H.center,B=H.enableLanguageAdjustment,Z=void 0===B||B,G=H.icon,U=H.iconType,X=H.label,q=H.labelWidth,z=H.languageOverride,Q=H.marqueeOnFocus,Y=H.name,K=H.width,W=void 0===K?T:K,J=function(e,t,r,i){var o=(0,(u||(u=n("GQsr"))).useTheme)(),a=r?o.SurfaceProductBrand:o.MenuSurfaceFocused,s=e?a:o.MenuSurface
return!i&&t&&(s=o.MenuSurfaceSelected),s}(R,A,y,i),$=(0,(o||(o=n("JVY8"))).useLanguage)(),ee=z
!z&&Z&&(ee=$)
var te={left:L.MenuSpaceBetweenIconText},ne={left:L.MenuSpaceBetweenIconText+w},re=L.MenuSpaceHorizontal,ie=m||v.IconColor.ForegroundSubtle,oe=g||v.IconColor.ForegroundHighlight,ae=D||L.MenuForeground,ue=V||(A&&!i?L.MenuForegroundSelected:L.MenuForegroundFocused),se=I(G)?G:void 0,le=!!se||!!U,ce=le?b+w:b,de=P?null!=q?q:W:(null!=q?q:W)-re-(U?w:0),pe=le?te:0
return pe=!U&&F?ne:pe,(0,f.j)(C,{children:[U&&!se&&(0,f.j)(v.Icon,{color:R?oe:ie,height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,type:U,width:w,x:b},null,null),se&&(0,f.j)(se,{data:r,focused:R,height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,width:w,x:b},null,null),Q&&R?(0,f.j)((l||(l=n("jT++"))).Marquee,(0,p.default)({delay:400,height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,once:!0===Q,padding:pe,textAlign:P?E:_,textColor:L.MenuForegroundFocused,type:(a||(a=n("BKc6"))).TextType.MenuText,width:de,x:P?0:ce},{__proto__:M[ee||""],children:X}),null,null):(0,f.j)((d||(d=n("AHGZ"))).Text,(0,p.default)({height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,padding:pe,textAlign:P?E:_,textColor:R?ue:ae,type:(a||(a=n("BKc6"))).TextType.MenuText,width:de,x:P?0:ce},{__proto__:M[ee||""],children:X}),null,null),!!t&&(0,f.j)((c||(c=n("djiD"))).HStack,{children:t,halign:"end",height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,width:W,x:x},null,null)],cornerRadius:L.MenuBorderRadius,fill:J,height:(s||(s=n("4+IH"))).STANDARD_BUTTON_HEIGHT,isHighlighted:R,isNearViewportEdge:k,name:Y,opacity:N,testAttributes:j,width:W},null,null)},t.TEXT_PROP_OVERRIDE_BY_LANGUAGE=void 0,t.isCustomMenuIcon=I
var i,o,a,u,s,l,c,d,p=r(n("siCl")),f=n("igsZ"),h=r(n("6gFf")),m=n("eNcy"),g=n("6jZX"),v=n("S2RX"),S=["children","data","focused","iconColorOverride","iconHighlightColorOverride","isAlternateHighlightColor","isHighlighted","isNearViewportEdge","isSelected","opacity","testAttributes","textColorOverride","textHighlightColorOverride","textPadding"],T=453,w=(0,v.getIconSize)(v.IconSize.Standard),b=20,y=t.BUTTON_CONTAINER_HEIGHT=47,x=(t.MENU_ITEM_DEFAULT_SIZE={height:y,width:T},t.MENU_ITEM_CHILDREN_X_OFFSET=18)
function I(e){return"function"==typeof e}var E=["center-horizontal","center-vertical"],_="center-vertical",C=t.BaseMenuItem=(0,m.s)(g.BorderBox,"BaseMenuItem",{image:function(e){return e.image},name:function(e){var t=e.name
return void 0===t?"MenuItem":t},opacity:function(e){var t=e.isHighlighted,n=e.isNearViewportEdge,r=e.opacity
return void 0!==r?Math.min(n&&!t?.5:1,r):n&&!t?.5:1},opacityTransition:function(e){return e.isFx2?void 0:{duration:(i||(i=n("ClEx"))).Duration.Duration250,easing:(i||(i=n("ClEx"))).Easing.EasingQuadraticInOut}},padding:function(e){return e.padding}},!1),M=t.TEXT_PROP_OVERRIDE_BY_LANGUAGE={hi:{height:46,textSizeOverride:19}}},pcYd:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.CustomerService=function(e){var t,ee,te,ne,re,ie,oe,ae=e.animation,ue=e.focusKey,se=e.getDeviceInfo,le=e.getNetworkInfo,ce=e.initialItemId,de=e.onTransitionCompleted,pe=(0,(M||(M=n("e9tE"))).useDispatch)(),fe=(0,W.useRef)(),he=(0,(i||(i=n("JVY8"))).useIsTextToSpeechEnabled)(),me=(0,(I||(I=n("agVJ"))).useFocused)(ue),ge=!(!he||!(0,(y||(y=n("9IR/"))).getFeature)("ttsEnabled")),ve=(0,(y||(y=n("9IR/"))).getFeature)("canSignupAds"),Se=(0,(y||(y=n("9IR/"))).getFeature)("mhuManageHouseholdMigrationGetHelpMenu"),Te=(0,(U||(U=n("f2C8"))).useAllStrings)(),we=(0,(X||(X=n("n3PO"))).useCheckNetworkConfig)(),be=(0,(w||(w=n("k+Am"))).useNetworkStatus)(void 0,we),ye=be.networkStatus,xe=be.startDiagnostic,Ie=(0,(A||(A=n("rtf0"))).useSpeechStrings)(),Ee=(0,(a||(a=n("vX06"))).useClcsHook)({flowName:"mhuEbiTvuiGetHelpMenu",navigateToClcs:(O||(O=n("vPm9"))).replaceWithClcsInterstitialGate,parameters:{},prefetchQuery:(E||(E=n("RmPE"))).prefetchQuery,supportedVideoFormat:(0,(D||(D=n("w+cU"))).getVideoResolutionParam)()}),_e=(0,(G||(G=n("OT2Q"))).useAccountSharing)(),Ce=_e.accountSharingStatus,Me=_e.customerServiceViewedTimes,Re=_e.misdetectionAvailable,ke=_e.misdetectionErrorCode,Ae=_e.misdetectionReload,Ne=_e.misdetectionShowChallenge,je=_e.netflixHouseholdAvailable,De=(0,W.useRef)(1===Me),Ve=(0,W.useRef)(1===Me),Oe=(0,W.useRef)(1),Le=(0,(y||(y=n("9IR/"))).getFeature)("showDeviceSupportMenu"),He=(0,(q||(q=n("LegA"))).useMenuItems)({isDeviceSupportEnabled:Le,misdetectionAvailable:Re,netflixHouseholdAvailable:je,strings:Te})
ke&&(Ve.current=!1)
var Fe=(0,W.useState)((function(){var e
return ce||(null==He||null==(e=(0,Y.h)(He,(function(e){return"back"!==e.name})))?void 0:e.name)||$})),Pe=(0,K.default)(Fe,2),Be=Pe[0],Ze=Pe[1],Ge=(0,W.useCallback)((function(e){"misdetectionChallenge"!==e&&(Ve.current=!1,De.current=!1),1===Me&&1===Oe.current&&"misdetectionChallenge"===e&&(Oe.current++,Ve.current=!0,De.current=!0),"deviceSupport"===e&&(0,(o||(o=n("/Y/f"))).logFocusAndSelect)("getHelpPlanCompatibility",{isAdSupportedPlanCompatible:ve?1:0}),Ze(e)}),[ve,Me,Ze]);(0,W.useEffect)((function(){nrdp.log.flush()}),[]),(0,W.useEffect)((function(){var e
Re&&"pending"!==Ce&&0!==Me&&(null==(e=fe.current)||e.requestScroll({focusKey:"mhuExclusiveAction"}))}),[Ce,Me,Ge,Re])
var Ue,Xe=(0,W.useCallback)((function(e){var t
return(0,Q.default)().async((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e,i.next="back"===i.t0?3:"checkNetwork"===i.t0?5:"reloadNetflix"===i.t0?7:"exitNetflix"===i.t0?9:"primaryLocation"===i.t0?11:"signOut"===i.t0?21:"misdetectionChallenge"===i.t0?24:30
break
case 3:return(0,(g||(g=n("trGk"))).backAction)(pe),i.abrupt("break",31)
case 5:return(0,(v||(v=n("xsRQ"))).checkNetworkAction)(xe),i.abrupt("break",31)
case 7:return(0,(T||(T=n("+0Sm"))).reloadNetflixAction)(),i.abrupt("break",31)
case 9:return(0,(S||(S=n("taMk"))).exitNetflixAction)(ge,(function(){return pe((0,(V||(V=n("ve0B"))).onExitRequested)((void 0===j?j=r(n("J4vm")):j).default.customerService))})),i.abrupt("break",31)
case 11:if((x||(x=n("Mmf2"))).consolidatedLogger.logEvent("Submitted",{command:"UpdateHouseholdCommand",view:"customerService"}),!Se){i.next=19
break}return t=Ee(),pe((R||(R=n("NEM1"))).actions.historyPush({modal:!0,pathname:"/waiting"})),i.next=17,(0,Q.default)().awrap(t)
case 17:i.next=20
break
case 19:pe((0,(C||(C=n("Sugk"))).sendMoneyballAction)({action:"mhuGetHelpManageHouseholdAction",fieldType:"Action",flow:(_||(_=n("Q6G7"))).FLOWS.TENFOOT_MEMBER,mode:(_||(_=n("Q6G7"))).MODES.ACTION,withHistory:!0}))
case 20:return i.abrupt("break",31)
case 21:return(0,(o||(o=n("/Y/f"))).logFocusAndSelect)("logout"),pe((0,(L||(L=n("UDQE"))).pushLogoutDialog)()),i.abrupt("break",31)
case 24:if(!Ve.current){i.next=26
break}return i.abrupt("break",31)
case 26:return Ve.current=!0,De.current=!0,Ae(),i.abrupt("break",31)
case 30:return i.abrupt("break",31)
case 31:case"end":return i.stop()}}),null,null,null,Promise)}),[Ee,pe,ge,Ae,Se,xe])
if(ge&&!Ie||!Te||!He)return null
switch(Be){case"checkNetwork":Ue=(0,z.j)((u||(u=n("pn49"))).CheckNetworkView,{networkStatus:ye,strings:Te.checkNetwork.view},null,null)
break
case"contact":Ue=(0,z.j)((s||(s=n("FrPE"))).ContactView,{strings:Te.contact.view},null,null)
break
case"device":Ue=(0,z.j)((d||(d=n("BnNj"))).DeviceView,{getDeviceInfo:se,strings:Te.device.view},null,null)
break
case"network":Ue=(0,z.j)((f||(f=n("E1ir"))).NetworkView,{getNetworkInfo:le,strings:Te.network.view},null,null)
break
case"reloadNetflix":Ue=(0,z.j)((p||(p=n("hRyT"))).GenericView,{text:(null==(t=Te.reloadNetflix)||null==(t=t.view)?void 0:t.reloadNetflix)||"",title:(null==(ee=Te.reloadNetflix)||null==(ee=ee.view)?void 0:ee.reloadNetflixLabel)||""},null,null)
break
case"exitNetflix":Ue=(0,z.j)((p||(p=n("hRyT"))).GenericView,{text:(null==(te=Te.exitNetflix)||null==(te=te.view)?void 0:te.exitNetflix)||"",title:(null==(ne=Te.exitNetflix)||null==(ne=ne.view)?void 0:ne.exitNetflixLabel)||""},null,null)
break
case"deviceSupport":Ue=(0,z.j)((c||(c=n("MyWH"))).DeviceSupportView,{canSignupAds:ve,canSignupButton:!1,strings:null==(re=Te.deviceSupport)?void 0:re.view},null,null)
break
case"primaryLocation":Ue=(0,z.j)((P||(P=n("Jbtd"))).PrimaryLocationView,{strings:Te.primaryLocation.view},null,null)
break
case"privacy":Ue=(0,z.j)((B||(B=n("QTJK"))).PrivacyView,{strings:Te.privacy.view},null,null)
break
case"member":Ue=(0,z.j)((H||(H=n("2/k/"))).MemberView,{strings:Te.member.view},null,null)
break
case"signOut":Ue=(0,z.j)((p||(p=n("hRyT"))).GenericView,{text:(null==(ie=Te.signOut.view)?void 0:ie.signOut)||"",title:(null==(oe=Te.signOut.view)?void 0:oe.signOutLabel)||""},null,null)
break
case"misdetectionChallenge":Ue=(0,z.j)((F||(F=n("/Mc2"))).MisdetectionView,{enableTimer:De.current,misdetectionErrorCode:ke,misdetectionShowChallenge:Ne,strings:Te.misdetectionChallenge.view},null,null)
break
case"videoSettings":Ue=(0,z.j)((Z||(Z=n("jCSS"))).VideoSettingsView,{speechStrings:Ie,strings:Te.videoSettings.view},null,null)}return(0,z.j)((b||(b=n("Iid7"))).DialogBackgroundCurtain,{children:(0,z.j)((l||(l=n("nFEI"))).CustomerServiceRoot,{__update_handlers__:J,animation:ae,children:[(0,z.j)((N||(N=n("AHGZ"))).Text,{children:Te.getHelp,type:(k||(k=n("BKc6"))).TextType.TitleHeavy,x:126,y:52},null,null),(0,z.j)((h||(h=n("ut8D"))).SideMenu,{focused:me,menuItems:He,onFocusItem:Ge,onSubmit:Xe,selectedItemId:Be},null,fe),(0,z.j)((m||(m=n("g9pZ"))).ViewContainer,{children:Ue},null,null)],focused:me,focusKey:ue,onAnimationCompleted:de},null,null)},null,null)}
var i,o,a,u,s,l,c,d,p,f,h,m,g,v,S,T,w,b,y,x,I,E,_,C,M,R,k,A,N,j,D,V,O,L,H,F,P,B,Z,G,U,X,q,z=n("igsZ"),Q=r(n("fsL8")),Y=n("ZpGL"),K=r(n("J4zp")),W=n("/P98"),J=["onAnimationCompleted"],$="member"},pn49:function(e,t,n){t.__esModule=!0,t.CheckNetworkView=function(e){var t=e.networkStatus,f=e.strings,h=t&&(null==f?void 0:f[t.finalResult])
if((0,(i||(i=n("8rh/"))).useSpeech)({condition:!!t,interrupt:!0,speakOnChange:h,text:h}),!f)return null
if(!t)return(0,p.j)((l||(l=n("XZre"))).ViewRoot,{children:(0,p.j)((s||(s=n("i5bM"))).ViewItem,{text:f.checkNetwork,title:f.checkNetworkLabel},null,null),name:"CheckNetworkView"},null,null)
var m=function(e){var t=e.reduce((function(e,t){return e[t.type].push(t),e}),{internet:[],netflix:[],speed:[]})
if(!t.internet.length)return t
var r=(0,(u||(u=n("CI9i"))).getFinalResult)(t.internet),i={errorText:"",status:"success",type:"internet",url:""}
if("runningCheck"===r)i.status="running"
else if("noInternet"===r){var o
i.status="error",i.errorText=null==(o=(0,d.h)(t.internet,(function(e){return"error"===e.status})))?void 0:o.errorText}return t.internet=[i],t}(t.results)
return(0,p.j)((l||(l=n("XZre"))).ViewRoot,{children:[(0,p.j)((s||(s=n("i5bM"))).ViewItem,{title:f.checkNetworkLabel},null,null),["internet","netflix","speed"].map((function(e){return m[e].map((function(t,r){return(0,p.j)((a||(a=n("0ajp"))).CheckNetworkViewResultItem,{index:r,name:"checkNetwork-result",result:t,strings:f},e+"-"+r,null)}))})),(0,p.j)((o||(o=n("AHGZ"))).Text,{children:f[t.finalResult],layoutSpacing:24,type:(r||(r=n("BKc6"))).TextType.BodyStandard,width:(c||(c=n("sYZz"))).MAX_TEXT_WIDTH,wrap:!0},null,null)],name:"CheckNetworkView"},null,null)}
var r,i,o,a,u,s,l,c,d=n("ZpGL"),p=n("igsZ")},pqVV:function(e,t){e.exports=function(e){return function(t){var n,r=0,i=0,o=t.length-1,a=Math.max(0,t.length-e)
for(n=o;n>=a;--n)snapshot=t[n],r+=snapshot.bytes,i+=snapshot.time
return i>0?1e3*r*8/i:0}}},sYZz:function(e,t){t.__esModule=!0,t.MAX_TEXT_WIDTH=t.CUSTOMER_SERVICE_VERTICAL_SPACING=void 0,t.MAX_TEXT_WIDTH=700,t.CUSTOMER_SERVICE_VERTICAL_SPACING=12},taMk:function(e,t,n){var r
t.__esModule=!0,t.exitNetflixAction=function(e,t){e?(0,(r||(r=n("vSZY"))).exitWithSpeech)((function(){t()})):t()}},trGk:function(e,t,n){var r,i
t.__esModule=!0,t.backAction=function(e){(0,(r||(r=n("/Y/f"))).logFocusAndSelect)("backButton"),e((i||(i=n("NEM1"))).actions.historyPop())}},ut8D:function(e,t,n){t.__esModule=!0,t.SideMenu=t.MENU_WIDTH=void 0
var r,i=n("rcEX"),o=n("igsZ"),a=n("/P98"),u=t.MENU_WIDTH=300
t.SideMenu=(0,a.forwardRef)((function(e,t){var s=e.focused,l=e.menuItems,c=e.onFocusItem,d=e.onSubmit,p=e.selectedItemId,f=e.useListSpeechStrings,h=(0,a.useCallback)((function(e){var t=e.item
return c(t.id)}),[c]),m=(0,a.useCallback)((function(e){var t=e.item
return d(t.id)}),[d])
return(0,o.j)((r||(r=n("x4cV"))).Menu,{accessibilityLabel:"Help Menu",clip:!1,focused:s,focusKey:"menu",height:590,initialIndex:(0,i.h)(l,(function(e){return e.item.id===p})),items:l,marqueeOnFocus:!0,onItemFocus:h,onSubmit:m,selectedIndex:(0,i.h)(l,(function(e){return e.item.id===p})),useListSpeechStrings:f,width:u,x:106,y:92},null,t)}))},vX06:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.useClcsHook=function(e){(0,(i||(i=n("9IR/"))).getAppConfig)().locales
var t=e.flowName,r=e.navigateToClcs,f=e.parameters,h=e.prefetchQuery,m=e.supportedVideoFormat,g=(0,(a||(a=n("e9tE"))).useDispatch)(),v=(0,(i||(i=n("9IR/"))).getFeature)("interstitialsWithRelay"),S={fetchPolicy:"network-only"},T={flowName:t,hasGooglePlayService:(0,(i||(i=n("9IR/"))).getFeature)("hasGooglePlayService"),imageFormat:"PNG",localeOverride:void 0,parameters:f?Object.entries(f).map((function(e){var t=(0,p.default)(e,2)
return{name:t[0],value:t[1]}})):null,resolutionMode:(0,(s||(s=n("W/eT"))).getResolutionMode)(),supportedVideoFormat:m}
return function(){var e,t,i,a,s,p,f
return(0,c.default)().async((function(m){for(;;)switch(m.prev=m.next){case 0:if(m.prev=0,(o||(o=n("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:{queryVariables:T},message:"FetchCLCSHookStart"}),!v){m.next=12
break}return m.next=5,(0,c.default)().awrap(n.e(159).then(n.t.bind(null,"tx0t",7)))
case 5:return i=m.sent,a=i.clcsHookQueryRelay,m.next=9,(0,c.default)().awrap(h(a,T,S))
case 9:t=m.sent,m.next=15
break
case 12:return m.next=14,(0,c.default)().awrap((0,(l||(l=n("M7qM"))).makeDGSRequest)({bucket:"high",data:T,operationId:"clcsHookQuery",operationName:"clcsHook",query:(u||(u=n("WicR"))).clcsHookQuery}))
case 14:t=m.sent
case 15:if(s=null==(e=t)?void 0:e[(l||(l=n("M7qM"))).QueryType.Hook]){m.next=18
break}return m.abrupt("return",void 0)
case 18:p=(0,d.default)({},s,{componentName:"clcsInterstitialGate",componentTree:s.componentTree}),g(r(p)),m.next=26
break
case 22:m.prev=22,m.t0=m.catch(0),f={clcsQueryType:"clcsHook",interstitialsWithRelay:v,nativeError:m.t0},(o||(o=n("Mmf2"))).consolidatedLogger.logEvent("DebugEvent",{data:f,message:"FetchCLCSHookError"})
case 26:case"end":return m.stop()}}),null,null,[[0,22]],Promise)}}
var i,o,a,u,s,l,c=r(n("fsL8")),d=r(n("siCl")),p=r(n("J4zp"))},x4cV:function(e,t,n){var r=n("TqRt").default
t.__esModule=!0,t.Menu=void 0
var i,o,a=n("igsZ"),u=r(n("siCl")),s=r(n("6gFf")),l=n("/P98"),c=n("oO4j")
t.MenuItem=c.MenuItem
var d=["center","clip","height","items","marqueeOnFocus","width","x","y"]
t.Menu=(0,l.memo)((0,l.forwardRef)((function(e,t){var r,p=e.center,f=e.clip,h=e.height,m=e.items,g=e.marqueeOnFocus,v=e.width,S=e.x,T=e.y,w=(0,s.default)(e,d),b=(0,l.useMemo)((function(){var e=Math.floor(v/(o||(o=n("3s2M"))).SCALE_ANIMATION_MULTIPLIER)
return m.map((function(t){return"item"in t?(0,u.default)({accessibilityLabel:t.item.label},t,{item:(0,u.default)({center:p,marqueeOnFocus:g,width:e},t.item)}):{accessibilityLabel:t.label,item:(0,u.default)({center:p,marqueeOnFocus:g,width:e},t)}}))}),[p,m,g,v])
return(0,a.j)((i||(i=n("Vv2a"))).ListContainer,{children:[(0,a.j)((i||(i=n("Vv2a"))).List,{__proto__:w,accessibilityRole:null!=(r=w.accessibilityRole)?r:"Menu",children:c.MenuItem,clip:f,enableListTtsV2:w.enableListTtsV2,height:h,items:b,itemSize:c.MENU_ITEM_DEFAULT_SIZE,width:v},null,t),(0,a.j)((i||(i=n("Vv2a"))).ListPointerControl,{direction:"up",scrollBy:-3,width:v,y:0},null,null),(0,a.j)((i||(i=n("Vv2a"))).ListPointerControl,{direction:"down",scrollBy:3,width:v,y:h-(i||(i=n("Vv2a"))).DEFAULT_LIST_POINTER_HEIGHT},null,null)],clip:f,height:h,width:v,x:S,y:T},null,null)})))},xsRQ:function(e,t){t.__esModule=!0,t.checkNetworkAction=function(e){e()}},zmvw:function(e,t,n){e.exports={tester:n("m3bO"),requester:{nrdp:n("BezR")},errors:n("R/0C"),aggregator:{movingAverage:n("pqVV")},stopper:{stableMeasurementsStopper:n("Zby3")}}}}])


//# sourceMappingURL=route.customerService.2b9c5874e147ffe9da6e.js.map