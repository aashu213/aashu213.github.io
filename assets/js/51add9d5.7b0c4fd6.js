"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8195],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return b},default:function(){return y}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&c(e,n,t[n]);return e};const s={id:"viewtoken",title:"ViewToken Object Type"},m=void 0,k={unversionedId:"viewtoken",id:"viewtoken",title:"ViewToken Object Type",description:"ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.",source:"@site/../docs/viewtoken.md",sourceDirName:".",slug:"/viewtoken",permalink:"/docs/next/viewtoken",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/viewtoken.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"viewtoken",title:"ViewToken Object Type"},sidebar:"installation",previous:{title:"View Style Props",permalink:"/docs/next/view-style-props"}},b=[{value:"Example",id:"example",children:[],level:2},{value:"Keys and values",id:"keys-and-values",children:[{value:"<code>index</code>",id:"index",children:[],level:3},{value:"<code>isViewable</code>",id:"isviewable",children:[],level:3},{value:"<code>item</code>",id:"item",children:[],level:3},{value:"<code>key</code>",id:"key",children:[],level:3},{value:"<code>section</code>",id:"section",children:[],level:3}],level:2},{value:"Used by",id:"used-by",children:[],level:2}],f={toc:b};function y(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},f),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ViewToken")," object is returned as one of properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onViewableItemsChanged")," callback, for example in ",(0,a.kt)("a",u({parentName:"p"},{href:"flatlist"}),"FlatList")," component. It is exported by ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js"}),(0,a.kt)("inlineCode",{parentName:"a"},"ViewabilityHelper.js")),"."),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'{\n  item: { key: "key-12" },\n  key: "key-12",\n  index: 11,\n  isViewable: true\n}\n')),(0,a.kt)("h2",u({},{id:"keys-and-values"}),"Keys and values"),(0,a.kt)("h3",u({},{id:"index"}),(0,a.kt)("inlineCode",{parentName:"h3"},"index")),(0,a.kt)("p",null,"Unique numeric identifier assigned to the data element."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("h3",u({},{id:"isviewable"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isViewable")),(0,a.kt)("p",null,"Specifies if at least some part of list element is visible in the viewport."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",u({},{id:"item"}),(0,a.kt)("inlineCode",{parentName:"h3"},"item")),(0,a.kt)("p",null,"Item data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"any"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",u({},{id:"key"}),(0,a.kt)("inlineCode",{parentName:"h3"},"key")),(0,a.kt)("p",null,"Key identifier assigned of the data element extracted to the top level."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",u({},{id:"section"}),(0,a.kt)("inlineCode",{parentName:"h3"},"section")),(0,a.kt)("p",null,"Item section data when used with ",(0,a.kt)("inlineCode",{parentName:"p"},"SectionList"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"any"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("h2",u({},{id:"used-by"}),"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"flatlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"FlatList"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"sectionlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"SectionList"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"virtualizedlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"VirtualizedList")))))}y.isMDXComponent=!0}}]);