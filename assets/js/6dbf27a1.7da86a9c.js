"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27277],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,h=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return y},default:function(){return b}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&d(e,n,t[n]);return e};const m={id:"layoutevent",title:"LayoutEvent Object Type"},k=void 0,h={unversionedId:"layoutevent",id:"version-0.68/layoutevent",title:"LayoutEvent Object Type",description:"LayoutEvent object is returned in the callback as a result of component layout change, for example onLayout in View component.",source:"@site/versioned_docs/version-0.68/layoutevent.md",sourceDirName:".",slug:"/layoutevent",permalink:"/docs/layoutevent",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/layoutevent.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"layoutevent",title:"LayoutEvent Object Type"}},y=[{value:"Example",id:"example",children:[],level:2},{value:"Keys and values",id:"keys-and-values",children:[{value:"<code>height</code>",id:"height",children:[],level:3},{value:"<code>width</code>",id:"width",children:[],level:3},{value:"<code>x</code>",id:"x",children:[],level:3},{value:"<code>y</code>",id:"y",children:[],level:3},{value:"<code>target</code>",id:"target",children:[],level:3}],level:2},{value:"Used by",id:"used-by",children:[],level:2}],s={toc:y};function b(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},s),d),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LayoutEvent")," object is returned in the callback as a result of component layout change, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"onLayout")," in ",(0,a.kt)("a",c({parentName:"p"},{href:"view"}),"View")," component."),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"{\n    layout: {\n        width: 520,\n        height: 70.5,\n        x: 0,\n        y: 42.5\n    },\n    target: 1127\n}\n")),(0,a.kt)("h2",c({},{id:"keys-and-values"}),"Keys and values"),(0,a.kt)("h3",c({},{id:"height"}),(0,a.kt)("inlineCode",{parentName:"h3"},"height")),(0,a.kt)("p",null,"Height of the component after the layout changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",c({},{id:"width"}),(0,a.kt)("inlineCode",{parentName:"h3"},"width")),(0,a.kt)("p",null,"Width of the component after the layout changes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",c({},{id:"x"}),(0,a.kt)("inlineCode",{parentName:"h3"},"x")),(0,a.kt)("p",null,"Component X coordinate inside the parent component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",c({},{id:"y"}),(0,a.kt)("inlineCode",{parentName:"h3"},"y")),(0,a.kt)("p",null,"Component Y coordinate inside the parent component."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",c({},{id:"target"}),(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"The node id of the element receiving the PressEvent."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number, ",(0,a.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h2",c({},{id:"used-by"}),"Used by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"image"}),(0,a.kt)("inlineCode",{parentName:"a"},"Image"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"pressable"}),(0,a.kt)("inlineCode",{parentName:"a"},"Pressable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"scrollview"}),(0,a.kt)("inlineCode",{parentName:"a"},"ScrollView"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"text"}),(0,a.kt)("inlineCode",{parentName:"a"},"Text"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"textinput"}),(0,a.kt)("inlineCode",{parentName:"a"},"TextInput"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"touchablewithoutfeedback"}),(0,a.kt)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"view"}),(0,a.kt)("inlineCode",{parentName:"a"},"View")))))}b.isMDXComponent=!0}}]);