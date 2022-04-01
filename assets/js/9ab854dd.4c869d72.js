"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97535],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,h=s["".concat(c,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return m},default:function(){return f}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e};const s={id:"checkbox",title:"\ud83d\udea7 CheckBox"},k=void 0,h={unversionedId:"checkbox",id:"version-0.63/checkbox",title:"\ud83d\udea7 CheckBox",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.63/checkbox.md",sourceDirName:".",slug:"/checkbox",permalink:"/docs/0.63/checkbox",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/checkbox.md",tags:[],version:"0.63",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"checkbox",title:"\ud83d\udea7 CheckBox"}},m=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[],level:3},{value:"<code>onChange</code>",id:"onchange",children:[],level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3},{value:"<code>value</code>",id:"value",children:[],level:3}],level:2}],b={toc:m};function f(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),d),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://reactnative.directory/?search=checkbox"}),"community packages")," instead.")),(0,a.kt)("p",null,"Renders a boolean input (Android only)."),(0,a.kt)("p",null,"This is a controlled component that requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"CheckBox Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20CheckBox%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisSelected%2C%20setSelection%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.checkboxContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BisSelected%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetSelection%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.checkbox%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EDo%20you%20like%20React%20Native%3F%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%3EIs%20CheckBox%20selected%3A%20%7BisSelected%20%3F%20%22%F0%9F%91%8D%22%20%3A%20%22%F0%9F%91%8E%22%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20checkboxContainer%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%7D%2C%0A%20%20checkbox%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20label%3A%20%7B%0A%20%20%20%20margin%3A%208%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"reference"}),"Reference"),(0,a.kt)("h2",u({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",u({parentName:"p"},{href:"view#props"}),"View Props"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"disabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,a.kt)("p",null,"If true the user won't be able to toggle the checkbox. Default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"Used in case the props change removes the component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"onvaluechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,a.kt)("p",null,"Invoked with the new value when the value changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"testid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"testID")),(0,a.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"value"}),(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"The value of the checkbox. If true the checkbox will be turned on. Default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))))}f.isMDXComponent=!0}}]);