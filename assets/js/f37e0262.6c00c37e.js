"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[73736],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37785:function(e,t,n){var r=n(27378),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(27378),a=n(14185),o=n(40488);var l=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(18870),c=n(38944),s="tabItem_c0e5",u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&v(e,n,t[n]);return e};function h(e){var t,n,a;const{lazy:o,block:u,defaultValue:m,values:f,groupId:b,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=f?f:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,i.lx)(g,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(a=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=l(),[j,D]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=b){const e=w[b];null!=e&&e!==j&&g.some((t=>t.value===e))&&D(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==j&&(N(t),D(r),null!=b&&C(b,r))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},v)},g.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:T,onFocus:S,onClick:S},n),o={className:(0,c.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":j===e})},p(a,d(o))),null!=t?t:e);var a,o}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function g(e){const t=(0,a.Z)();return r.createElement(h,y({key:String(t)},e))}},11674:function(e,t,n){var r=n(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=a?"ios":"android",i=a?"macos":o?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},90675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return y},toc:function(){return h},default:function(){return O}});var r=n(35318),a=n(65941),o=n(37785),l=n(11674),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};const b={id:"dynamiccolorios",title:"DynamicColorIOS"},v=void 0,y={unversionedId:"dynamiccolorios",id:"version-0.68/dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/versioned_docs/version-0.68/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/dynamiccolorios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/dynamiccolorios.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"api",previous:{title:"ActionSheetIOS",permalink:"/docs/actionsheetios"},next:{title:"Settings",permalink:"/docs/settings"}},h=[{value:"Developer notes",id:"developer-notes",children:[],level:4},{value:"Example",id:"example",children:[],level:2}],g={toc:h};function O(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},g),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),'DynamicColorIOS({\n  light: color,\n  dark: color,\n  highContrastLight: color, // (optional) will fallback to "light" if not provided\n  highContrastDark: color // (optional) will fallback to "dark" if not provided\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two mandatory keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"light"),", and two optional keys ",(0,r.kt)("inlineCode",{parentName:"p"},"highContrastLight")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"highContrastDark"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS, and when high contrast accessibility mode is enabled, high contrast version of them.'),(0,r.kt)("p",null,"At runtime, the system will choose which of the colors to display depending on the current system appearance and accessibility settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,r.kt)("h4",f({},{id:"developer-notes"}),"Developer notes"),(0,r.kt)(a.Z,{groupId:"guide",defaultValue:"web",values:l.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,r.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,r.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,r.kt)("a",f({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"}),(0,r.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,r.kt)("h2",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n\nconst customContrastDynamicTextColor = DynamicColorIOS({\n  dark: 'darkgray',\n  light: 'lightgray',\n  highContrastDark: 'black',\n  highContrastLight: 'white'\n});\n")))}O.isMDXComponent=!0}}]);