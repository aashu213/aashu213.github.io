"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27774],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40655:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return k},default:function(){return y}});var a=r(35318),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},m=void 0,g={unversionedId:"progressviewios",id:"version-0.62/progressviewios",title:"\ud83d\udea7 ProgressViewIOS",description:"Deprecated. Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.62/progressviewios.md",sourceDirName:".",slug:"/progressviewios",permalink:"/docs/0.62/progressviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/progressviewios.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"}},k=[{value:"Example",id:"example",children:[],level:3},{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[],level:3},{value:"<code>progressImage</code>",id:"progressimage",children:[],level:3},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[],level:3},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[],level:3},{value:"<code>trackImage</code>",id:"trackimage",children:[],level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[],level:3}],level:2}],b={toc:k};function y(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),c),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-progress-view/progress-view"}),"@react-native-community/progress-view")," instead.")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"ProgressViewIOS")," to render a UIProgressView on iOS."),(0,a.kt)("h3",d({},{id:"example"}),"Example"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressViewIOS%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%0A%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%22black%22%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20progress%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",d({},{id:"reference"}),"Reference"),(0,a.kt)("h2",d({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/view#props"}),"View Props"),"."),(0,a.kt)("h3",d({},{id:"progress"}),(0,a.kt)("inlineCode",{parentName:"h3"},"progress")),(0,a.kt)("p",null,"The progress value (between 0 and 1)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"progressimage"}),(0,a.kt)("inlineCode",{parentName:"h3"},"progressImage")),(0,a.kt)("p",null,"A stretchable image to display as the progress bar."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"progresstintcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"progressTintColor")),(0,a.kt)("p",null,"The tint color of the progress bar itself."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"progressviewstyle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"progressViewStyle")),(0,a.kt)("p",null,"The progress bar style."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"enum('default', 'bar')"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"trackimage"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trackImage")),(0,a.kt)("p",null,"A stretchable image to display behind the progress bar."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"tracktintcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,a.kt)("p",null,"The tint color of the progress bar track."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))))}y.isMDXComponent=!0}}]);