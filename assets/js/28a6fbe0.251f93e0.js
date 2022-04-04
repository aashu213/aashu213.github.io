"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[23701],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(27378),r=a(14185),l=a(40488);var i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(18870),c=a(38944),s="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))v.call(t,a)&&b(e,a,t[a]);return e};function h(e){var t,a,r;const{lazy:l,block:d,defaultValue:m,values:f,groupId:v,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),A=(0,o.lx)(k,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:null!=(r=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=i(),[N,O]=(0,n.useState)(g),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=v){const e=w[v];null!=e&&e!==N&&k.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,a=D.indexOf(t),n=k[a].value;n!==N&&(x(t),O(n),null!=v&&C(v,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},b)},k.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>D.push(e),onKeyDown:j,onFocus:E,onClick:E},a),l={className:(0,c.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===e})},u(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,r.Z)();return n.createElement(h,y({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},44302:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return y},toc:function(){return h},default:function(){return A}});var n=a(35318),r=a(65941),l=a(37785),i=a(11674),o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&m(e,a,t[a]);return e};const v={id:"activityindicator",title:"ActivityIndicator"},b=void 0,y={unversionedId:"activityindicator",id:"activityindicator",title:"ActivityIndicator",description:"Displays a circular loading indicator.",source:"@site/../docs/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/next/activityindicator",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/activityindicator.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"activityindicator",title:"ActivityIndicator"}},h=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[],level:3},{value:"<code>animating</code>",id:"animating",children:[],level:3},{value:"<code>color</code>",id:"color",children:[],level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",children:[],level:3},{value:"<code>size</code>",id:"size",children:[],level:3}],level:2}],k={toc:h};function A(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=f(f({},k),m),c(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Displays a circular loading indicator."),(0,n.kt)("h2",f({},{id:"example"}),"Example"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",f({},{className:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",f({},{className:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h1",f({},{id:"reference"}),"Reference"),(0,n.kt)("h2",f({},{id:"props"}),"Props"),(0,n.kt)("h3",f({},{id:"view-props"}),(0,n.kt)("a",f({parentName:"h3"},{href:"view#props"}),"View Props")),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",f({parentName:"p"},{href:"view#props"}),"View Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",f({},{id:"animating"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animating")),(0,n.kt)("p",null,"Whether to show the indicator (",(0,n.kt)("inlineCode",{parentName:"p"},"true"),") or hide it (",(0,n.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",f({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"The foreground color of the spinner."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("a",f({parentName:"td"},{href:"colors"}),"color")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"null")," (system accent default color)",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("ins",{style:{background:"#999"},className:"color-box"}),(0,n.kt)("inlineCode",{parentName:"td"},"'#999999'")," ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",f({},{id:"hideswhenstopped-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"Whether the indicator should hide when not animating."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",f({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"Size of the indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'small'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'large'"),")",(0,n.kt)("hr",null),"number ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'small'"))))))}A.isMDXComponent=!0}}]);