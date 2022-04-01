"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35450],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(27378),r=a(14185),l=a(40488);var i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(18870),s=a(38944),c="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(m)for(var a of m(t))h.call(t,a)&&v(e,a,t[a]);return e};function k(e){var t,a,r;const{lazy:l,block:d,defaultValue:m,values:b,groupId:h,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,o.lx)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===m?m:null!=(r=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=k[0])?void 0:a.props.value;if(null!==A&&!y.some((e=>e.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:D}=i(),[O,N]=(0,n.useState)(A),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=h){const e=w[h];null!=e&&e!==O&&y.some((t=>t.value===e))&&N(e)}const B=e=>{const t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==O&&(x(t),N(n),null!=h&&D(h,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]||C[C.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},v)},y.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>C.push(e),onKeyDown:E,onFocus:B,onClick:B},a),l={className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":O===e})},u(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function y(e){const t=(0,r.Z)();return n.createElement(k,f({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},97233:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return v},metadata:function(){return f},toc:function(){return k},default:function(){return g}});var n=a(35318),r=a(65941),l=a(37785),i=a(11674),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={id:"share",title:"Share"},v=void 0,f={unversionedId:"share",id:"version-0.65/share",title:"Share",description:"Example",source:"@site/versioned_docs/version-0.65/share.md",sourceDirName:".",slug:"/share",permalink:"/docs/0.65/share",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/share.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"share",title:"Share"},sidebar:"version-0.65/api",previous:{title:"RootTag",permalink:"/docs/0.65/roottag"},next:{title:"StyleSheet",permalink:"/docs/0.65/stylesheet"}},k=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>share()</code>",id:"share",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"<code>sharedAction</code>",id:"sharedaction",children:[],level:3},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",children:[],level:3}],level:2}],y={toc:k};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},y),m),s(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",b({},{id:"example"}),"Example"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aclass%20ShareExample%20extends%20Component%20%7B%0A%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h1",b({},{id:"reference"}),"Reference"),(0,n.kt)("h2",b({},{id:"methods"}),"Methods"),(0,n.kt)("h3",b({},{id:"share"}),(0,n.kt)("inlineCode",{parentName:"h3"},"share()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static share(content, options)\n")),(0,n.kt)("p",null,"Open a dialog to share text content."),(0,n.kt)("p",null,"In iOS, returns a Promise which will be invoked with an object containing ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"activityType"),". If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,n.kt)("inlineCode",{parentName:"p"},"Share.dismissedAction")," and all the other keys being undefined. Note that some share options will not appear or work on the iOS simulator."),(0,n.kt)("p",null,"In Android, returns a Promise which will always be resolved with action being ",(0,n.kt)("inlineCode",{parentName:"p"},"Share.sharedAction"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"content ",(0,n.kt)("div",{className:"label basic required"},"Required")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"message")," - a message to share",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"url")," - a URL to share ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"title")," - title of the message ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),"At least one of ",(0,n.kt)("inlineCode",{parentName:"td"},"url")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"message")," is required.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"dialogTitle")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"excludedActivityTypes")," ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"subject")," - a subject to share via email ",(0,n.kt)("div",{class:"label ios"},"iOS"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"tintColor")," ",(0,n.kt)("div",{class:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",b({},{id:"properties"}),"Properties"),(0,n.kt)("h3",b({},{id:"sharedaction"}),(0,n.kt)("inlineCode",{parentName:"h3"},"sharedAction")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static sharedAction\n")),(0,n.kt)("p",null,"The content was successfully shared."),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"dismissedaction-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"dismissedAction")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction\n")),(0,n.kt)("p",null,"The dialog has been dismissed."))}g.isMDXComponent=!0}}]);