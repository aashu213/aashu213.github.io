"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[80205],{35318:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70481:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return g},default:function(){return b}});var a=r(35318),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&d(e,r,t[r]);return e};const u={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"},m=void 0,k={unversionedId:"progressbarandroid",id:"version-0.68/progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.68/progressbarandroid.md",sourceDirName:".",slug:"/progressbarandroid",permalink:"/docs/progressbarandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/progressbarandroid.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"}},g=[{value:"Example",id:"example",children:[],level:3},{value:"Props",id:"props",children:[{value:"<code>animating</code>",id:"animating",children:[],level:3},{value:"<code>color</code>",id:"color",children:[],level:3},{value:"<code>indeterminate</code>",id:"indeterminate",children:[],level:3},{value:"<code>progress</code>",id:"progress",children:[],level:3},{value:"<code>styleAttr</code>",id:"styleattr",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3}],level:2}],h={toc:g};function b(e){var t,r=e,{components:n}=r,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},h),d),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://reactnative.directory/?search=progressbar"}),"community packages")," instead.")),(0,a.kt)("p",null,"Android-only React component used to indicate that the app is loading or there is some activity in the app."),(0,a.kt)("h3",c({},{id:"example"}),"Example"),(0,a.kt)("div",c({},{className:"snack-player","data-snack-name":"ProgressBarAndroid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressBarAndroid%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECircle%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHorizontal%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20color%3D%22%232196F3%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EFixed%20Progress%20Value%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%0A%20%20%20%20%20%20%20%20%20%20styleAttr%3D%22Horizontal%22%0A%20%20%20%20%20%20%20%20%20%20indeterminate%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2024%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",c({},{id:"reference"}),"Reference"),(0,a.kt)("h2",c({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/view#props"}),"View Props"),"."),(0,a.kt)("h3",c({},{id:"animating"}),(0,a.kt)("inlineCode",{parentName:"h3"},"animating")),(0,a.kt)("p",null,"Whether to show the ProgressBar (true, the default) or hide it (false)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"color"}),(0,a.kt)("inlineCode",{parentName:"h3"},"color")),(0,a.kt)("p",null,"Color of the progress bar."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"/docs/colors"}),"color")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"indeterminate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"indeterminate")),(0,a.kt)("p",null,"If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal, and requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," value."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"indeterminateType"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"progress"}),(0,a.kt)("inlineCode",{parentName:"h3"},"progress")),(0,a.kt)("p",null,"The progress value (between 0 and 1)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"styleattr"}),(0,a.kt)("inlineCode",{parentName:"h3"},"styleAttr")),(0,a.kt)("p",null,"Style of the ProgressBar. One of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Horizontal"),(0,a.kt)("li",{parentName:"ul"},"Normal (default)"),(0,a.kt)("li",{parentName:"ul"},"Small"),(0,a.kt)("li",{parentName:"ul"},"Large"),(0,a.kt)("li",{parentName:"ul"},"Inverse"),(0,a.kt)("li",{parentName:"ul"},"SmallInverse"),(0,a.kt)("li",{parentName:"ul"},"LargeInverse")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"testid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"testID")),(0,a.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))))}b.isMDXComponent=!0}}]);