"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50249],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(27378),r=n(14185),i=n(40488);var l=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(18870),s=n(38944),d="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&h(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&h(e,n,t[n]);return e};function f(e){var t,n,r;const{lazy:i,block:c,defaultValue:m,values:k,groupId:b,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=k?k:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,o.lx)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:A}=l(),[N,C]=(0,a.useState)(w),B=[],{blockElementScrollPositionUntilNextRender:E}=(0,o.o5)();if(null!=b){const e=D[b];null!=e&&e!==N&&y.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=B.indexOf(t),a=y[n].value;a!==N&&(E(t),C(a),null!=b&&A(b,a))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=B.indexOf(e.currentTarget)+1;t=B[n]||B[0];break}case"ArrowLeft":{const n=B.indexOf(e.currentTarget)-1;t=B[n]||B[B.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>B.push(e),onKeyDown:O,onFocus:x,onClick:x},n),i={className:(0,s.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":N===e})},u(r,p(i))),null!=t?t:e);var r,i}))),i?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,r.Z)();return a.createElement(f,v({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},48906:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return h},metadata:function(){return v},toc:function(){return f},default:function(){return g}});var a=n(35318),r=n(65941),i=n(37785),l=n(11674),o=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const b={id:"dimensions",title:"Dimensions"},h=void 0,v={unversionedId:"dimensions",id:"dimensions",title:"Dimensions",description:"useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm.",source:"@site/../docs/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/next/dimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/dimensions.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"dimensions",title:"Dimensions"}},f=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>set()</code>",id:"set",children:[],level:3}],level:2},{value:"Type Definitions",id:"type-definitions",children:[{value:"DimensionsValue",id:"dimensionsvalue",children:[],level:3},{value:"DisplayMetrics",id:"displaymetrics",children:[],level:3}],level:2}],y={toc:f};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},y),m),s(t,d({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",k({parentName:"p"},{href:"usewindowdimensions"}),(0,a.kt)("inlineCode",{parentName:"a"},"useWindowDimensions"))," is the preferred API for React components. Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"Dimensions"),", it updates as the window's dimensions update. This works nicely with the React paradigm.")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"import { Dimensions } from 'react-native';\n")),(0,a.kt)("p",null,"You can get the application window's width and height using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet"),").")),(0,a.kt)("p",null,"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."),(0,a.kt)("h2",k({},{id:"example"}),"Example"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20subscription%20%3D%20Dimensions.addEventListener(%0A%20%20%20%20%20%20%22change%22%2C%0A%20%20%20%20%20%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20return%20()%20%3D%3E%20subscription%3F.remove()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EWindow%20Dimensions%3C%2FText%3E%0A%20%20%20%20%20%20%7BObject.entries(dimensions.window).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CText%3E%7Bkey%7D%20-%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EScreen%20Dimensions%3C%2FText%3E%0A%20%20%20%20%20%20%7BObject.entries(dimensions.screen).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CText%3E%7Bkey%7D%20-%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20marginVertical%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.dimensionsSubscription%20%3D%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.dimensionsSubscription%3F.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EWindow%20Dimensions%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%7BObject.entries(window).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bkey%7D%20-%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.header%7D%3EScreen%20Dimensions%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%7BObject.entries(screen).map((%5Bkey%2C%20value%5D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bkey%7D%20-%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20marginVertical%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("h1",k({},{id:"reference"}),"Reference"),(0,a.kt)("h2",k({},{id:"methods"}),"Methods"),(0,a.kt)("h3",k({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(type, handler)\n")),(0,a.kt)("p",null,"Add an event handler. Supported events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is a ",(0,a.kt)("a",k({parentName:"li"},{href:"#dimensionsvalue"}),(0,a.kt)("inlineCode",{parentName:"a"},"DimensionsValue"))," type object.")),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static get(dim)\n")),(0,a.kt)("p",null,"Initial dimensions are set before ",(0,a.kt)("inlineCode",{parentName:"p"},"runApplication")," is called so they should be available before any other require's are run, but may be updated later."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"dim ",(0,a.kt)("div",{className:"label basic required two-lines"},"Required")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Name of dimension as defined when calling ",(0,a.kt)("inlineCode",{parentName:"td"},"set"),". Returns value for the dimension.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For Android the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom navigation bar"))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(type, handler)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",(0,a.kt)("a",k({parentName:"p"},{href:"#addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"a"},"addEventListener()")),".")),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static set(dims)\n")),(0,a.kt)("p",null,"This should only be called from native code by sending the ",(0,a.kt)("inlineCode",{parentName:"p"},"didUpdateDimensions")," event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"dims ",(0,a.kt)("div",{className:"label basic required"},"Required")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"String-keyed object of dimensions to set.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",k({},{id:"type-definitions"}),"Type Definitions"),(0,a.kt)("h3",k({},{id:"dimensionsvalue"}),"DimensionsValue"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"window"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"dimensions#displaymetrics"}),"DisplayMetrics")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Size of the visible Application window.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"screen"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"dimensions#displaymetrics"}),"DisplayMetrics")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Size of the device's screen.")))),(0,a.kt)("h3",k({},{id:"displaymetrics"}),"DisplayMetrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"scale"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"fontScale"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")))))}g.isMDXComponent=!0}}]);