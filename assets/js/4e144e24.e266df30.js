"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92800],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,s=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(s,i(i({ref:t},c),{},{components:a})):n.createElement(s,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30954:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return s},toc:function(){return h},default:function(){return b}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&c(e,a,t[a]);return e};const m={id:"picker",title:"\ud83d\udea7 Picker"},k=void 0,s={unversionedId:"picker",id:"version-0.65/picker",title:"\ud83d\udea7 Picker",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.65/picker.md",sourceDirName:".",slug:"/picker",permalink:"/docs/0.65/picker",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/picker.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"picker",title:"\ud83d\udea7 Picker"}},h=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"<code>enabled</code>",id:"enabled",children:[],level:3},{value:"<code>itemStyle</code>",id:"itemstyle",children:[],level:3},{value:"<code>mode</code>",id:"mode",children:[],level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[],level:3},{value:"<code>prompt</code>",id:"prompt",children:[],level:3},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3}],level:2}],N={toc:h};function b(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},N),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://reactnative.directory/?search=picker"}),"community packages")," instead.")),(0,n.kt)("p",null,"Renders the native picker component on Android and iOS."),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("div",u({},{className:"snack-player","data-snack-name":"picker","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Picker%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedValue%2C%20setSelectedValue%5D%20%3D%20useState(%22java%22)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CPicker%0A%20%20%20%20%20%20%20%20selectedValue%3D%7BselectedValue%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20height%3A%2050%2C%20width%3A%20150%20%7D%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%2C%20itemIndex)%20%3D%3E%20setSelectedValue(itemValue)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPicker%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20paddingTop%3A%2040%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",u({},{id:"reference"}),"Reference"),(0,n.kt)("h2",u({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.65/view#props"}),"View Props"),"."),(0,n.kt)("h3",u({},{id:"enabled"}),(0,n.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,n.kt)("p",null,"If set to false, the picker will be disabled, i.e. the user will not be able to make a selection."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"itemstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"itemStyle")),(0,n.kt)("p",null,"Style to apply to each of the item labels."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"/docs/0.65/text-style-props"}),"text styles")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"mode"}),(0,n.kt)("inlineCode",{parentName:"h3"},"mode")),(0,n.kt)("p",null,"On Android, specifies how to display the selection items when the user taps on the picker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'dialog': Show a modal dialog. This is the default."),(0,n.kt)("li",{parentName:"ul"},"'dropdown': Shows a dropdown anchored to the picker view")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"enum('dialog', 'dropdown')"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"onvaluechange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,n.kt)("p",null,"Callback for when an item is selected. This is called with the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"itemValue"),": the ",(0,n.kt)("inlineCode",{parentName:"li"},"value")," prop of the item that was selected"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"itemPosition"),": the index of the selected item in this picker")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"prompt"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt")),(0,n.kt)("p",null,"Prompt string for this picker, used on Android in dialog mode as the title of the dialog."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"selectedvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"selectedValue")),(0,n.kt)("p",null,"Value matching value of one of the items. Can be a string or an integer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"style"}),(0,n.kt)("inlineCode",{parentName:"h3"},"style")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"pickerStyleType"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"testid"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testID")),(0,n.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))))}b.isMDXComponent=!0}}]);