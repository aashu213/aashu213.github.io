"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[91396],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&o(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(27378),r=n(14185),l=n(40488);var i=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(18870),o=n(38944),d="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&k(e,n,t[n]);if(b)for(var n of b(t))h.call(t,n)&&k(e,n,t[n]);return e};function f(e){var t,n,r;const{lazy:l,block:c,defaultValue:b,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),A=(0,s.lx)(y,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===b?b:null!=(r=null!=b?b:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=i(),[w,E]=(0,a.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:B}=(0,s.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=D.indexOf(t),a=y[n].value;a!==w&&(B(t),E(a),null!=h&&C(h,a))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]||D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]||D[D.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:x,onFocus:T,onClick:T},n),l={className:(0,o.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":w===e})},u(r,p(l))),null!=t?t:e);var r,l}))),l?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,r.Z)();return a.createElement(f,v({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",s=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return k},metadata:function(){return v},toc:function(){return f},default:function(){return A}});var a=n(35318),r=n(65941),l=n(37785),i=n(11674),s=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&b(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&b(e,n,t[n]);return e};const h={id:"accessibilityinfo",title:"AccessibilityInfo"},k=void 0,v={unversionedId:"accessibilityinfo",id:"version-0.66/accessibilityinfo",title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/versioned_docs/version-0.66/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/0.66/accessibilityinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/accessibilityinfo.md",tags:[],version:"0.66",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo"},sidebar:"version-0.66/api",next:{title:"Alert",permalink:"/docs/0.66/alert"}},f=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[],level:3},{value:'<code>getRecommendedTimeoutMillis()</code> <div class="label android">Android</div>',id:"getrecommendedtimeoutmillis-android",children:[],level:3},{value:'<code>isBoldTextEnabled()</code> <div class="label ios">iOS</div>',id:"isboldtextenabled-ios",children:[],level:3},{value:'<code>isGrayscaleEnabled()</code> <div class="label ios">iOS</div>',id:"isgrayscaleenabled-ios",children:[],level:3},{value:'<code>isInvertColorsEnabled()</code> <div class="label ios">iOS</div>',id:"isinvertcolorsenabled-ios",children:[],level:3},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[],level:3},{value:'<code>isReduceTransparencyEnabled()</code> <div class="label ios">iOS</div>',id:"isreducetransparencyenabled-ios",children:[],level:3},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[],level:3}],level:2}],y={toc:f};function A(e){var t,n=e,{components:s}=n,b=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},y),b),o(t,d({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."),(0,a.kt)("h2",m({},{id:"example"}),"Example"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20const%20screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20reduceMotionChangedSubscription.remove()%3B%0A%20%20%20%20%20%20screenReaderChangedSubscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.reduceMotionChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20this.screenReaderChangedSubscription%20%3D%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.reduceMotionChangedSubscription.remove()%3B%0A%20%20%20%20this.screenReaderChangedSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"reference"}),"Reference"),(0,a.kt)("h2",m({},{id:"methods"}),"Methods"),(0,a.kt)("h3",m({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),(0,a.kt)("p",null,"Add an event handler. Supported events:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Event name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"announcementFinished"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"label two-lines ios"},"iOS")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"announcement"),": The string announced by the screen reader."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"success"),": A boolean indicating whether the announcement was successfully made.")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boldTextChanged"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"label two-lines ios"},"iOS")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," when bold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"grayscaleChanged"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"label two-lines ios"},"iOS")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," when a gray scale is enabled and ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"invertColorsChanged"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"label two-lines ios"},"iOS")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," when invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reduceMotionChanged")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"reduceTransparencyChanged"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"label two-lines ios"},"iOS")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," when reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"screenReaderChanged")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," when a screen reader is enabled and ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"announceforaccessibility"}),(0,a.kt)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static announceForAccessibility(announcement)\n")),(0,a.kt)("p",null,"Post a string to be announced by the screen reader."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"getrecommendedtimeoutmillis-android"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRecommendedTimeoutMillis()")," ",(0,a.kt)("div",{class:"label android"},"Android")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static getRecommendedTimeoutMillis(originalTimeout)\n")),(0,a.kt)("p",null,"Gets the timeout in millisecond that the user needs.",(0,a.kt)("br",{parentName:"p"}),"\n",'This value is set in "Time to take action (Accessibility timeout)" of "Accessibility" settings.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"originalTimeout ",(0,a.kt)("div",{class:"label basic required"},"Required")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),'The timeout to return if "Accessibility timeout" is not set. Specify in milliseconds.')))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isboldtextenabled-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isBoldTextEnabled()\n")),(0,a.kt)("p",null,"Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isgrayscaleenabled-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isGrayscaleEnabled()\n")),(0,a.kt)("p",null,"Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isinvertcolorsenabled-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isInvertColorsEnabled()\n")),(0,a.kt)("p",null,"Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isreducemotionenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isReduceMotionEnabled()\n")),(0,a.kt)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isreducetransparencyenabled-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isReduceTransparencyEnabled()\n")),(0,a.kt)("p",null,"Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"isscreenreaderenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static isScreenReaderEnabled()\n")),(0,a.kt)("p",null,"Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when a screen reader is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",(0,a.kt)("a",m({parentName:"p"},{href:"#addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"a"},"addEventListener()")),".")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"setaccessibilityfocus"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static setAccessibilityFocus(reactTag)\n")),(0,a.kt)("p",null,"Set accessibility focus to a React component."),(0,a.kt)("p",null,"On Android, this calls ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent")," method with passed ",(0,a.kt)("inlineCode",{parentName:"p"},"reactTag")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.AccessibilityEventTypes.typeViewFocused")," arguments."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Make sure that any ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",(0,a.kt)("inlineCode",{parentName:"p"},"accessible={true}"),".")))}A.isMDXComponent=!0}}]);