"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88091],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return A}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),A=r,m=p["".concat(s,".").concat(A)]||p[A]||d[A]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(27378),r=a(14185),i=a(40488);var o=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(18870),s=a(38944),u="tabItem_c0e5",c=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&f(e,a,t[a]);if(A)for(var a of A(t))b.call(t,a)&&f(e,a,t[a]);return e};function C(e){var t,a,r;const{lazy:i,block:c,defaultValue:A,values:m,groupId:b,className:f}=e,C=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),D=null!=m?m:C.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.lx)(D,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===A?A:null!=(r=null!=A?A:null==(t=C.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=C[0])?void 0:a.props.value;if(null!==y&&!D.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${D.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=o(),[E,N]=(0,n.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&D.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),n=D[a].value;n!==E&&(O(t),N(n),null!=b&&g(b,n))},B=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]||w[w.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},D.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>w.push(e),onKeyDown:B,onFocus:S,onClick:S},a),i={className:(0,s.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":E===e})},d(r,p(i))),null!=t?t:e);var r,i}))),i?(0,n.cloneElement)(C.filter((e=>e.props.value===E))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},C.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function D(e){const t=(0,r.Z)();return n.createElement(C,v({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},41558:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return b},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return C},default:function(){return h}});var n=a(35318),r=a(65941),i=a(37785),o=a(11674),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&A(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&A(e,a,t[a]);return e};const b={id:"vibration",title:"Vibration"},f=void 0,v={unversionedId:"vibration",id:"version-0.62/vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.62/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/0.62/vibration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/vibration.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"version-0.62/api",previous:{title:"Transforms",permalink:"/docs/0.62/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.62/usecolorscheme"}},C=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>vibrate()</code>",id:"vibrate",children:[],level:3},{value:"<code>cancel()</code>",id:"cancel",children:[],level:3}],level:2}],D={toc:C};function h(e){var t,a=e,{components:l}=a,A=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},D),A),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Vibrates the device."),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Afunction%20Separator()%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20App%20%3D%20%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%5D%3B%0A%0A%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Afunction%20Separator()%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20class%20App%20extends%20React.Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Android apps should request the ",(0,n.kt)("inlineCode",{parentName:"p"},"android.permission.VIBRATE")," permission by adding ",(0,n.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",(0,n.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Vibration API is implemented as a ",(0,n.kt)("inlineCode",{parentName:"p"},"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)")," call on iOS.")),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"reference"}),"Reference"),(0,n.kt)("h2",m({},{id:"methods"}),"Methods"),(0,n.kt)("h3",m({},{id:"vibrate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"vibrate()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Vibration.vibrate(?pattern: number | Array<number>, ?repeat: boolean)\n")),(0,n.kt)("p",null,"Triggers a vibration with a fixed duration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Android,")," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," argument. ",(0,n.kt)("strong",{parentName:"p"},"On iOS,")," the vibration duration is fixed at roughly 400 milliseconds."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"vibrate()")," method can take a ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," argument with an array of numbers that represent time in milliseconds. You may set ",(0,n.kt)("inlineCode",{parentName:"p"},"repeat")," to true to run through the vibration pattern in a loop until ",(0,n.kt)("inlineCode",{parentName:"p"},"cancel()")," is called."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Android,")," the odd indices of the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the vibration duration, while the even ones represent the separation time. ",(0,n.kt)("strong",{parentName:"p"},"On iOS,")," the numbers in the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the separation time, as the vibration duration is fixed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pattern"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Vibration duration in milliseconds. Defaults to 400 ms."),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pattern"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Array of numbers"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Vibration pattern as an array of numbers in milliseconds."),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android, iOS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"repeat"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Repeat vibration pattern until cancel(), default to false."),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android, iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"cancel"}),(0,n.kt)("inlineCode",{parentName:"h3"},"cancel()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Vibration.cancel();\n")),(0,n.kt)("p",null,"Call this to stop vibrating after having invoked ",(0,n.kt)("inlineCode",{parentName:"p"},"vibrate()")," with repetition enabled."))}h.isMDXComponent=!0}}]);