"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75513],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51978:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return s},toc:function(){return h},default:function(){return b}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={id:"picker",title:"Picker"},k=void 0,s={unversionedId:"picker",id:"version-0.61/picker",title:"Picker",description:"Renders the native picker component on Android and iOS. Example:",source:"@site/versioned_docs/version-0.61/picker.md",sourceDirName:".",slug:"/picker",permalink:"/docs/0.61/picker",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/picker.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"picker",title:"Picker"},sidebar:"version-0.61/components",previous:{title:"Modal",permalink:"/docs/0.61/modal"},next:{title:"\ud83d\udea7 PickerIOS",permalink:"/docs/0.61/pickerios"}},h=[{value:"Props",id:"props",children:[{value:"<code>onValueChange</code>",id:"onvaluechange",children:[],level:3},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3},{value:"<code>enabled</code>",id:"enabled",children:[],level:3},{value:"<code>mode</code>",id:"mode",children:[],level:3},{value:"<code>prompt</code>",id:"prompt",children:[],level:3},{value:"<code>itemStyle</code>",id:"itemstyle",children:[],level:3}],level:2}],N={toc:h};function b(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},N),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Renders the native picker component on Android and iOS. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),'<Picker\n  selectedValue={this.state.language}\n  style={{ height: 50, width: 100 }}\n  onValueChange={(itemValue, itemIndex) =>\n    this.setState({ language: itemValue })\n  }>\n  <Picker.Item label="Java" value="java" />\n  <Picker.Item label="JavaScript" value="js" />\n</Picker>\n')),(0,a.kt)("hr",null),(0,a.kt)("h1",c({},{id:"reference"}),"Reference"),(0,a.kt)("h2",c({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),(0,a.kt)("h3",c({},{id:"onvaluechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,a.kt)("p",null,"Callback for when an item is selected. This is called with the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"itemValue"),": the ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," prop of the item that was selected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"itemPosition"),": the index of the selected item in this picker")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"selectedvalue"}),(0,a.kt)("inlineCode",{parentName:"h3"},"selectedValue")),(0,a.kt)("p",null,"Value matching value of one of the items. Can be a string or an integer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"any"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"style"}),(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"pickerStyleType"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"testid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"testID")),(0,a.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"enabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,a.kt)("p",null,"If set to false, the picker will be disabled, i.e. the user will not be able to make a selection."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"mode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,"On Android, specifies how to display the selection items when the user taps on the picker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'dialog': Show a modal dialog. This is the default."),(0,a.kt)("li",{parentName:"ul"},"'dropdown': Shows a dropdown anchored to the picker view")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enum('dialog', 'dropdown')"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"prompt"}),(0,a.kt)("inlineCode",{parentName:"h3"},"prompt")),(0,a.kt)("p",null,"Prompt string for this picker, used on Android in dialog mode as the title of the dialog."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"itemstyle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"itemStyle")),(0,a.kt)("p",null,"Style to apply to each of the item labels."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"/docs/0.61/text-style-props"}),"text styles")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"iOS")))))}b.isMDXComponent=!0}}]);