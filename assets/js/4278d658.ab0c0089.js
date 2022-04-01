"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[26484],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),i=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),i=n(14185),r=n(40488);var o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(18870),s=n(38944),d="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))v.call(t,n)&&f(e,n,t[n]);return e};function w(e){var t,n,i;const{lazy:r,block:c,defaultValue:m,values:h,groupId:v,className:f}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=h?h:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,l.lx)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(i=null!=m?m:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(n=w[0])?void 0:n.props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:A}=o(),[C,N]=(0,a.useState)(y),B=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=v){const e=D[v];null!=e&&e!==C&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=B.indexOf(t),a=g[n].value;a!==C&&(x(t),N(a),null!=v&&A(v,a))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=B.indexOf(e.currentTarget)+1;t=B[n]||B[0];break}case"ArrowLeft":{const n=B.indexOf(e.currentTarget)-1;t=B[n]||B[B.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=b({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>B.push(e),onKeyDown:O,onFocus:E,onClick:E},n),r={className:(0,s.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":C===e})},u(i,p(r))),null!=t?t:e);var i,r}))),r?(0,a.cloneElement)(w.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function g(e){const t=(0,i.Z)();return a.createElement(w,b({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",l=i?"macos":r?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},52567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return f},metadata:function(){return b},toc:function(){return w},default:function(){return k}});var a=n(35318),i=n(65941),r=n(37785),o=n(11674),l=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const v={id:"dimensions",title:"Dimensions"},f=void 0,b={unversionedId:"dimensions",id:"version-0.62/dimensions",title:"Dimensions",description:"useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm.",source:"@site/versioned_docs/version-0.62/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/0.62/dimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/dimensions.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"version-0.62/api",previous:{title:"DevSettings",permalink:"/docs/0.62/devsettings"},next:{title:"Easing",permalink:"/docs/0.62/easing"}},w=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>set()</code>",id:"set",children:[],level:3}],level:2}],g={toc:w};function k(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},g),m),s(t,d({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",h({parentName:"p"},{href:"usewindowdimensions"}),(0,a.kt)("inlineCode",{parentName:"a"},"useWindowDimensions"))," is the preferred API for React components. Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"Dimensions"),", it updates as the window's dimensions update. This works nicely with the React paradigm.")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"import { Dimensions } from 'react-native';\n")),(0,a.kt)("p",null,"You can get the application window's width and height using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet"),").")),(0,a.kt)("p",null,"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."),(0,a.kt)("h2",h({},{id:"example"}),"Example"),(0,a.kt)(i.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",h({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",h({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("h1",h({},{id:"reference"}),"Reference"),(0,a.kt)("h2",h({},{id:"methods"}),"Methods"),(0,a.kt)("h3",h({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(type, handler)\n")),(0,a.kt)("p",null,"Add an event handler. Supported events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window")," - Size of the visible Application window"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screen")," - Size of the device's screen")))),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static get(dim)\n")),(0,a.kt)("p",null,"Initial dimensions are set before ",(0,a.kt)("inlineCode",{parentName:"p"},"runApplication")," is called so they should be available before any other require's are run, but may be updated later."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"dim"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Name of dimension as defined when calling ",(0,a.kt)("inlineCode",{parentName:"td"},"set"),". @returns {Object?} Value for the dimension.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For Android the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom navigation bar"))),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(type, handler)\n")),(0,a.kt)("p",null,"Remove an event handler."),(0,a.kt)("hr",null),(0,a.kt)("h3",h({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static set(dims)\n")),(0,a.kt)("p",null,"This should only be called from native code by sending the didUpdateDimensions event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"dims"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"string-keyed object of dimensions to set")))))}k.isMDXComponent=!0}}]);