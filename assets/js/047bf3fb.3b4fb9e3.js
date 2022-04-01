"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76651],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),r=a(14185),l=a(40488);var i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(18870),s=a(38944),d="tabItem_c0e5",u=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&y(e,a,t[a]);if(m)for(var a of m(t))k.call(t,a)&&y(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:l,block:u,defaultValue:m,values:b,groupId:k,className:y}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),A=(0,o.lx)(h,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:null!=(r=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=i(),[D,C]=(0,n.useState)(g),B=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=k){const e=N[k];null!=e&&e!==D&&h.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,a=B.indexOf(t),n=h[a].value;n!==D&&(x(t),C(n),null!=k&&w(k,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=B.indexOf(e.currentTarget)+1;t=B[a]||B[0];break}case"ArrowLeft":{const a=B.indexOf(e.currentTarget)-1;t=B[a]||B[B.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},y)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=v({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>B.push(e),onKeyDown:E,onFocus:O,onClick:O},a),l={className:(0,s.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":D===e})},c(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(f.filter((e=>e.props.value===D))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function h(e){const t=(0,r.Z)();return n.createElement(f,v({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},19416:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return y},metadata:function(){return v},toc:function(){return f},default:function(){return A}});var n=a(35318),r=a(65941),l=a(37785),i=a(11674),o=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e};const k={id:"keyboard",title:"Keyboard"},y=void 0,v={unversionedId:"keyboard",id:"version-0.67/keyboard",title:"Keyboard",description:"Keyboard module to control keyboard events.",source:"@site/versioned_docs/version-0.67/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/0.67/keyboard",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/keyboard.md",tags:[],version:"0.67",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/0.67/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/0.67/layoutanimation"}},f=[{value:"Usage",id:"usage",children:[],level:3},{value:"Methods",id:"methods",children:[{value:"<code>addListener()</code>",id:"addlistener",children:[],level:3},{value:"<code>removeListener()</code>",id:"removelistener",children:[],level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[],level:3},{value:"<code>dismiss()</code>",id:"dismiss",children:[],level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",children:[],level:3}],level:2}],h={toc:f};function A(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},h),m),s(t,d({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Keyboard")," module to control keyboard events."),(0,n.kt)("h3",b({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BkeyboardStatus%2C%20setKeyboardStatus%5D%20%3D%20useState(undefined)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20showSubscription%20%3D%20Keyboard.addListener(%22keyboardDidShow%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20setKeyboardStatus(%22Keyboard%20Shown%22)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20hideSubscription%20%3D%20Keyboard.addListener(%22keyboardDidHide%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20setKeyboardStatus(%22Keyboard%20Hidden%22)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20showSubscription.remove()%3B%0A%20%20%20%20%20%20hideSubscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%0A%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%0A%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%7BkeyboardStatus%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2036%0A%20%20%7D%2C%0A%20%20input%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Keyboard%2C%20Text%2C%20TextInput%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aclass%20Example%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20keyboardStatus%3A%20undefined%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.keyboardDidShowSubscription%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidShow'%2C%0A%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Shown'%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20)%3B%0A%20%20%20%20this.keyboardDidHideSubscription%20%3D%20Keyboard.addListener(%0A%20%20%20%20%20%20'keyboardDidHide'%2C%0A%20%20%20%20%20%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.setState(%7B%20keyboardStatus%3A%20'Keyboard%20Hidden'%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.keyboardDidShowSubscription.remove()%3B%0A%20%20%20%20this.keyboardDidHideSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyle.input%7D%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D'Click%20here%E2%80%A6'%0A%20%20%20%20%20%20%20%20%20%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyle.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.keyboardStatus%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2036%0A%20%20%7D%2C%0A%20%20input%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderRadius%3A%204%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Example%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",b({},{id:"reference"}),"Reference"),(0,n.kt)("h2",b({},{id:"methods"}),"Methods"),(0,n.kt)("h3",b({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static addListener(eventName, callback)\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener")," function connects a JavaScript function to an identified native keyboard notification event."),(0,n.kt)("p",null,"This function then returns the reference to the listener."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"eventName ",(0,n.kt)("div",{className:"label basic two-lines required"},"Required")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The string that identifies the event you're listening for. See the list below.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"callback ",(0,n.kt)("div",{className:"label basic two-lines required"},"Required")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The function to be called when the event fires")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"eventName"))),(0,n.kt)("p",null,"This can be any of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillShow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidShow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillHide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidHide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that if you set ",(0,n.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"adjustResize")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"adjustPan"),", only ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardDidShow")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardDidHide")," events will be available on Android. If you set ",(0,n.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"adjustNothing"),", no events will be available on Android. ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event.")),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeListener(eventName, callback)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",(0,n.kt)("a",b({parentName:"p"},{href:"#addlistener"}),(0,n.kt)("inlineCode",{parentName:"a"},"addListener()")),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"eventName"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"nativeEvent")," is the string that identifies the event you're listening for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The function to be called when the event fires")))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeAllListeners(eventName)\n")),(0,n.kt)("p",null,"Removes all listeners for a specific event type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"eventType"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"The native event string listeners are watching which will be removed")))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"dismiss"}),(0,n.kt)("inlineCode",{parentName:"h3"},"dismiss()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static dismiss()\n")),(0,n.kt)("p",null,"Dismisses the active keyboard and removes focus."),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"schedulelayoutanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static scheduleLayoutAnimation(event)\n")),(0,n.kt)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."))}A.isMDXComponent=!0}}]);