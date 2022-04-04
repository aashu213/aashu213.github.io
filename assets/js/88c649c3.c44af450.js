"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8437],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return A}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),A=r,m=p["".concat(s,".").concat(A)]||p[A]||u[A]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),r=a(14185),l=a(40488);var o=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(18870),s=a(38944),c="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&f(e,a,t[a]);if(A)for(var a of A(t))k.call(t,a)&&f(e,a,t[a]);return e};function b(e){var t,a,r;const{lazy:l,block:d,defaultValue:A,values:m,groupId:k,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,i.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const B=null===A?A:null!=(r=null!=A?A:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=b[0])?void 0:a.props.value;if(null!==B&&!h.some((e=>e.value===B)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${B}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:g}=o(),[D,w]=(0,n.useState)(B),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=k){const e=C[k];null!=e&&e!==D&&h.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==D&&(E(t),w(n),null!=k&&g(k,n))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>x.push(e),onKeyDown:N,onFocus:O,onClick:O},a),l={className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":D===e})},u(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===D))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function h(e){const t=(0,r.Z)();return n.createElement(b,v({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},11109:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return f},metadata:function(){return v},toc:function(){return b},default:function(){return y}});var n=a(35318),r=a(65941),l=a(37785),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&A(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&A(e,a,t[a]);return e};const k={id:"backhandler",title:"BackHandler"},f=void 0,v={unversionedId:"backhandler",id:"version-0.68/backhandler",title:"BackHandler",description:"The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only.",source:"@site/versioned_docs/version-0.68/backhandler.md",sourceDirName:".",slug:"/backhandler",permalink:"/docs/backhandler",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/backhandler.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"backhandler",title:"BackHandler"}},b=[{value:"Pattern",id:"pattern",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Usage with React Navigation",id:"usage-with-react-navigation",children:[],level:2},{value:"Backhandler hook",id:"backhandler-hook",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>exitApp()</code>",id:"exitapp",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3}],level:2}],h={toc:b};function y(e){var t,a=e,{components:i}=a,A=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),A),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only."),(0,n.kt)("p",null,"The event subscriptions are called in reverse order (i.e. the last registered subscription is called first)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"If one subscription returns true,")," then subscriptions registered earlier will not be called."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"If no subscription returns true or none are registered,")," it programmatically invokes the default back button functionality to exit the app.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning for modal users:")," If your app shows an opened ",(0,n.kt)("inlineCode",{parentName:"p"},"Modal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler")," will not publish any events (",(0,n.kt)("a",m({parentName:"p"},{href:"modal#onrequestclose"}),"see ",(0,n.kt)("inlineCode",{parentName:"a"},"Modal")," docs"),").")),(0,n.kt)("h2",m({},{id:"pattern"}),"Pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen and this.goBack are just examples,\n   * you need to use your own implementation here.\n   *\n   * Typically you would use the navigator here to go to the last state.\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * When true is returned the event will not be bubbled up\n     * & no other back action will execute\n     */\n    return true;\n  }\n  /**\n   * Returning false will let the event to bubble up & let other event listeners\n   * or the system's default back action to be executed.\n   */\n  return false;\n});\n")),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%20%20%5D)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20backAction%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20this.backAction%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.backHandler.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),(0,n.kt)("p",null,"Additionally ",(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%0A%20%20%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",m({},{id:"usage-with-react-navigation"}),"Usage with React Navigation"),(0,n.kt)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",(0,n.kt)("a",m({parentName:"p"},{href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"}),"Custom Android back button behaviour")),(0,n.kt)("h2",m({},{id:"backhandler-hook"}),"Backhandler hook"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/react-native-community/hooks#usebackhandler"}),"React Native Hooks")," has a nice ",(0,n.kt)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"reference"}),"Reference"),(0,n.kt)("h2",m({},{id:"methods"}),"Methods"),(0,n.kt)("h3",m({},{id:"addeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"exitapp"}),(0,n.kt)("inlineCode",{parentName:"h3"},"exitApp()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static exitApp()\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"removeeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")))}y.isMDXComponent=!0}}]);