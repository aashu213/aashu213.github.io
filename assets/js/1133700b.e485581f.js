"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61887],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(27378),r=a(14185),i=a(40488);var o=function(){const e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(18870),s=a(38944),p="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))h.call(t,a)&&f(e,a,t[a]);return e};function A(e){var t,a,r;const{lazy:i,block:c,defaultValue:m,values:v,groupId:h,className:f}=e,A=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=v?v:A.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,l.lx)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:null!=(r=null!=m?m:null==(t=A.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=A[0])?void 0:a.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:S}=o(),[C,D]=(0,n.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=h){const e=w[h];null!=e&&e!==C&&k.some((t=>t.value===e))&&D(e)}const O=e=>{const t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==C&&(N(t),D(n),null!=h&&S(h,n))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},k.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=b({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>E.push(e),onKeyDown:x,onFocus:O,onClick:O},a),i={className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},u(r,d(i))),null!=t?t:e);var r,i}))),i?(0,n.cloneElement)(A.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},A.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,r.Z)();return n.createElement(A,b({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},3866:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return b},toc:function(){return A},default:function(){return y}});var n=a(35318),r=a(65941),i=a(37785),o=a(11674),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};const h={id:"appstate",title:"AppState"},f=void 0,b={unversionedId:"appstate",id:"appstate",title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/../docs/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/next/appstate",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appstate.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"appstate",title:"AppState"}},A=[{value:"App States",id:"app-states",children:[],level:3},{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Events",id:"events",children:[{value:"<code>change</code>",id:"change",children:[],level:3},{value:"<code>memoryWarning</code>",id:"memorywarning",children:[],level:3},{value:'<code>focus</code> <div class="label android">Android</div>',id:"focus-android",children:[],level:3},{value:'<code>blur</code> <div class="label android">Android</div>',id:"blur-android",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"<code>currentState</code>",id:"currentstate",children:[],level:3}],level:2}],k={toc:A};function y(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},k),m),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AppState")," can tell you if the app is in the foreground or background, and notify you when the state changes."),(0,n.kt)("p",null,"AppState is frequently used to determine the intent and proper behavior when handling push notifications."),(0,n.kt)("h3",v({},{id:"app-states"}),"App States"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"active")," - The app is running in the foreground"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"background")," - The app is running in the background. The user is either:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"in another app"),(0,n.kt)("li",{parentName:"ul"},"on the home screen"),(0,n.kt)("li",{parentName:"ul"},"[Android]"," on another ",(0,n.kt)("inlineCode",{parentName:"li"},"Activity")," (even if it was launched by your app)"))),(0,n.kt)("li",{parentName:"ul"},"[iOS]"," ",(0,n.kt)("inlineCode",{parentName:"li"},"inactive")," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the multitasking view, opening the Notification Center or in the event of an incoming call.")),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"}),"Apple's documentation")),(0,n.kt)("h2",v({},{id:"basic-usage"}),"Basic Usage"),(0,n.kt)("p",null,"To see the current state, you can check ",(0,n.kt)("inlineCode",{parentName:"p"},"AppState.currentState"),", which will be kept up-to-date. However, ",(0,n.kt)("inlineCode",{parentName:"p"},"currentState")," will be null at launch while ",(0,n.kt)("inlineCode",{parentName:"p"},"AppState")," retrieves it over the bridge."),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%0A%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20subscription%20%3D%20AppState.addEventListener(%22change%22%2C%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20appState.current%20%3D%20nextAppState%3B%0A%20%20%20%20%20%20setAppStateVisible(appState.current)%3B%0A%20%20%20%20%20%20console.log(%22AppState%22%2C%20appState.current)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20subscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"If you don't want to see the AppState update from ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"appState.current")," value.")),(0,n.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20AppStateExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20appState%3A%20AppState.currentState%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.appStateSubscription%20%3D%20AppState.addEventListener(%0A%20%20%20%20%20%20%22change%22%2C%0A%20%20%20%20%20%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.appStateSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("p",null,'This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',(0,n.kt)("inlineCode",{parentName:"p"},"active")," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."),(0,n.kt)("hr",null),(0,n.kt)("h1",v({},{id:"reference"}),"Reference"),(0,n.kt)("h2",v({},{id:"events"}),"Events"),(0,n.kt)("h3",v({},{id:"change"}),(0,n.kt)("inlineCode",{parentName:"h3"},"change")),(0,n.kt)("p",null,"This event is received when the app state has changed. The listener is called with one of ",(0,n.kt)("a",v({parentName:"p"},{href:"appstate#app-states"}),"the current app state values"),"."),(0,n.kt)("h3",v({},{id:"memorywarning"}),(0,n.kt)("inlineCode",{parentName:"h3"},"memoryWarning")),(0,n.kt)("p",null,"This event is used in the need of throwing memory warning or releasing it."),(0,n.kt)("h3",v({},{id:"focus-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"focus")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"Received when the app gains focus (the user is interacting with the app)."),(0,n.kt)("h3",v({},{id:"blur-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"blur")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"}),"notification drawer"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",(0,n.kt)("inlineCode",{parentName:"p"},"blur")," event will get fired."),(0,n.kt)("h2",v({},{id:"methods"}),"Methods"),(0,n.kt)("h3",v({},{id:"addeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"addEventListener(eventType, listener);\n")),(0,n.kt)("p",null,"Sets up a function that will be called whenever the specified event type on AppState occurs. Valid values for ",(0,n.kt)("inlineCode",{parentName:"p"},"eventType")," are\n",(0,n.kt)("a",v({parentName:"p"},{href:"#events"}),"listed above"),". Returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"EventSubscription"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"removeeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"removeEventListener(eventType, listener);\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"remove()")," method on the ",(0,n.kt)("inlineCode",{parentName:"p"},"EventSubscription")," returned by ",(0,n.kt)("a",v({parentName:"p"},{href:"#addeventlistener"}),(0,n.kt)("inlineCode",{parentName:"a"},"addEventListener()")),".")),(0,n.kt)("h2",v({},{id:"properties"}),"Properties"),(0,n.kt)("h3",v({},{id:"currentstate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"currentState")),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"AppState.currentState;\n")))}y.isMDXComponent=!0}}]);