"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44189],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37785:function(e,t,r){var a=r(27378),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;t.Z=function({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},65941:function(e,t,r){r.d(t,{Z:function(){return k}});var a=r(27378),n=r(14185),l=r(40488);var o=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(18870),s=r(38944),c="tabItem_c0e5",u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&v(e,r,t[r]);return e};function g(e){var t,r,n;const{lazy:l,block:u,defaultValue:m,values:h,groupId:f,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=h?h:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),y=(0,i.lx)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:N}=o(),[C,x]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=f){const e=O[f];null!=e&&e!==C&&k.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,r=j.indexOf(t),a=k[r].value;a!==C&&(T(t),x(a),null!=f&&N(f,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break}case"ArrowLeft":{const r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},k.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=b({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:S,onClick:S},r),l={className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===e})},p(n,d(l))),null!=t?t:e);var n,l}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,n.Z)();return a.createElement(g,b({key:String(t)},e))}},11674:function(e,t,r){var a=r(63445);const n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",i=n?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},42887:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return b},toc:function(){return g},default:function(){return y}});var a=r(35318),n=r(65941),l=r(37785),o=r(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&m(e,r,t[r]);return e};const f={id:"appearance",title:"Appearance"},v=void 0,b={unversionedId:"appearance",id:"version-0.64/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.64/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.64/appearance",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appearance.md",tags:[],version:"0.64",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"version-0.64/api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.64/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.64/appregistry"}},g=[{value:"Developer notes",id:"developer-notes",children:[],level:4},{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[],level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[],level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[],level:3}],level:2}],k={toc:g};function y(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},k),m),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"import { Appearance } from 'react-native';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,a.kt)("h4",h({},{id:"developer-notes"}),"Developer notes"),(0,a.kt)(n.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),(0,a.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,a.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,a.kt)("a",h({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,a.kt)("h2",h({},{id:"example"}),"Example"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Appearance")," module to determine if the user prefers a dark color scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n")),(0,a.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,a.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,a.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",h({},{id:"reference"}),"Reference"),(0,a.kt)("h2",h({},{id:"methods"}),"Methods"),(0,a.kt)("h3",h({},{id:"getcolorscheme"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),(0,a.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,a.kt)("p",null,"Supported color schemes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"light"),": The user prefers a light color theme."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dark"),": The user prefers a dark color theme."),(0,a.kt)("li",{parentName:"ul"},"null: The user has not indicated a preferred color theme.")),(0,a.kt)("p",null,"See also: ",(0,a.kt)("inlineCode",{parentName:"p"},"useColorScheme")," hook."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"getColorScheme()")," will always return ",(0,a.kt)("inlineCode",{parentName:"p"},"light")," when debugging with Chrome.")),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"addchangelistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),(0,a.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"removechangelistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),(0,a.kt)("p",null,"Remove an event handler."))}y.isMDXComponent=!0}}]);