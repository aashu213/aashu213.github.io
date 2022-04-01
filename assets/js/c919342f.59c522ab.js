"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[78744],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),r=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(27378),r=a(14185),l=a(40488);var i=function(){const e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(18870),d=a(38944),u="tabItem_c0e5",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&b(e,a,t[a]);if(m)for(var a of m(t))h.call(t,a)&&b(e,a,t[a]);return e};function v(e){var t,a,r;const{lazy:l,block:s,defaultValue:m,values:k,groupId:h,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.lx)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(r=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=v[0])?void 0:a.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:w}=i(),[O,C]=(0,n.useState)(N),A=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=h){const e=D[h];null!=e&&e!==O&&g.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=A.indexOf(t),n=g[a].value;n!==O&&(x(t),C(n),null!=h&&w(h,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]||A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]||A[A.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":s},b)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>A.push(e),onKeyDown:P,onFocus:T,onClick:T},a),l={className:(0,d.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":O===e})},c(r,p(l))),null!=t?t:e);var r,l}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,r.Z)();return n.createElement(v,f({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},46126:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return b},metadata:function(){return f},toc:function(){return v},default:function(){return y}});var n=a(35318),r=a(65941),l=a(37785),i=a(11674),o=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},b=void 0,f={unversionedId:"datepickerios",id:"version-0.62/datepickerios",title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.62/datepickerios.md",sourceDirName:".",slug:"/datepickerios",permalink:"/docs/0.62/datepickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/datepickerios.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"}},v=[{value:"Example",id:"example",children:[],level:3},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[],level:3},{value:"<code>onChange</code>",id:"onchange",children:[],level:3},{value:"<code>onDateChange</code>",id:"ondatechange",children:[],level:3},{value:"<code>maximumDate</code>",id:"maximumdate",children:[],level:3},{value:"<code>minimumDate</code>",id:"minimumdate",children:[],level:3},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[],level:3},{value:"<code>mode</code>",id:"mode",children:[],level:3},{value:"<code>locale</code>",id:"locale",children:[],level:3},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[],level:3},{value:"<code>initialDate</code>",id:"initialdate",children:[],level:3}],level:2}],g={toc:v};function y(e){var t,o=e,{components:m}=o,h=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(o,["components"]);return(0,n.kt)("wrapper",(t=k(k({},g),h),d(t,u({components:m,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"DatePickerIOS")," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",(0,n.kt)("inlineCode",{parentName:"p"},"onDateChange")," callback and update the ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",(0,n.kt)("inlineCode",{parentName:"p"},"props.date")," as the source of truth."),(0,n.kt)("h3",k({},{id:"example"}),"Example"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20App%20()%20%7B%0A%0A%20%20const%20%5BchosenDate%2C%20setChosenDate%5D%20%3D%20useState(new%20Date())%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20date%3D%7BchosenDate%7D%0A%20%20%20%20%20%20%20%20onDateChange%3D%7BsetChosenDate%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7BchosenDate%3A%20new%20Date()%7D%3B%0A%0A%20%20%20%20this.setDate%20%3D%20this.setDate.bind(this)%3B%0A%20%20%7D%0A%0A%20%20setDate(newDate)%20%7B%0A%20%20%20%20this.setState(%7BchosenDate%3A%20newDate%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.chosenDate%7D%0A%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7Bthis.setDate%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"reference"}),"Reference"),(0,n.kt)("h2",k({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.62/view#props"}),"View Props"),"."),(0,n.kt)("h3",k({},{id:"date"}),(0,n.kt)("inlineCode",{parentName:"h3"},"date")),(0,n.kt)("p",null,"The currently selected date."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"onchange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,n.kt)("p",null,"Date change handler."),(0,n.kt)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"ondatechange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onDateChange")),(0,n.kt)("p",null,"Date change handler."),(0,n.kt)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"maximumdate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maximumDate")),(0,n.kt)("p",null,"Maximum date."),(0,n.kt)("p",null,"Restricts the range of possible date/time values."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("p",null,"Example with ",(0,n.kt)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"minimumdate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minimumDate")),(0,n.kt)("p",null,"Minimum date."),(0,n.kt)("p",null,"Restricts the range of possible date/time values."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("p",null,"See ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.62/datepickerios#maximumdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"minuteinterval"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minuteInterval")),(0,n.kt)("p",null,"The interval at which minutes can be selected."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("p",null,"Example with ",(0,n.kt)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",(0,n.kt)("inlineCode",{parentName:"p"},"10"),":"),(0,n.kt)("center",null,(0,n.kt)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"mode"}),(0,n.kt)("inlineCode",{parentName:"h3"},"mode")),(0,n.kt)("p",null,"The date picker mode."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum('date', 'time', 'datetime', 'countdown')"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("p",null,"Example with ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," set to ",(0,n.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"time"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"datetime"),": ",(0,n.kt)("img",{src:a(72293).Z})),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"locale"}),(0,n.kt)("inlineCode",{parentName:"h3"},"locale")),(0,n.kt)("p",null,"The locale for the date picker. Value needs to be a ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"}),"Locale ID"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"timezoneoffsetinminutes"}),(0,n.kt)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),(0,n.kt)("p",null,"Timezone offset in minutes."),(0,n.kt)("p",null,"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 ","*"," 60."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"initialdate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"initialDate")),(0,n.kt)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No")))))}y.isMDXComponent=!0},72293:function(e,t,a){t.Z=a.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);