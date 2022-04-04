"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71653],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return k}});var i=n(35318),r=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"usewindowdimensions",title:"useWindowDimensions"},m=void 0,h={unversionedId:"usewindowdimensions",id:"usewindowdimensions",title:"useWindowDimensions",description:"useWindowDimensions automatically updates width and height values when screen size changes. You can get your application window's width and height like so:",source:"@site/../docs/usewindowdimensions.md",sourceDirName:".",slug:"/usewindowdimensions",permalink:"/docs/next/usewindowdimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/usewindowdimensions.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"usewindowdimensions",title:"useWindowDimensions"}},f=[{value:"Example",id:"example",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>fontScale</code>",id:"fontscale",children:[],level:3},{value:"<code>height</code>",id:"height",children:[],level:3},{value:"<code>scale</code>",id:"scale",children:[],level:3},{value:"<code>width</code>",id:"width",children:[],level:3}],level:2}],w={toc:f};function k(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=d(d({},w),p),o(t,a({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { useWindowDimensions } from 'react-native';\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useWindowDimensions")," automatically updates ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," values when screen size changes. You can get your application window's width and height like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const { height, width } = useWindowDimensions();\n")),(0,i.kt)("h2",d({},{id:"example"}),"Example"),(0,i.kt)("div",d({},{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks#usedimensions"}),"useDimensions")," hook from the community ",(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/react-native-community/react-native-hooks"}),"React native hooks")," library aims to make handling screen/window size changes easier to work with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"https://github.com/DaniAkash/react-native-responsive-dimensions"}),"React Native Responsive Dimensions")," also comes with responsive hooks.")),(0,i.kt)("h2",d({},{id:"properties"}),"Properties"),(0,i.kt)("h3",d({},{id:"fontscale"}),(0,i.kt)("inlineCode",{parentName:"h3"},"fontScale")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().fontScale;\n")),(0,i.kt)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),(0,i.kt)("hr",null),(0,i.kt)("h3",d({},{id:"height"}),(0,i.kt)("inlineCode",{parentName:"h3"},"height")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().height;\n")),(0,i.kt)("p",null,"The height in pixels of the window or screen your app occupies."),(0,i.kt)("hr",null),(0,i.kt)("h3",d({},{id:"scale"}),(0,i.kt)("inlineCode",{parentName:"h3"},"scale")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().scale;\n")),(0,i.kt)("p",null,"The pixel ratio of the device your app is running on."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),(0,i.kt)("hr",null),(0,i.kt)("h3",d({},{id:"width"}),(0,i.kt)("inlineCode",{parentName:"h3"},"width")),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"useWindowDimensions().width;\n")),(0,i.kt)("p",null,"The width in pixels of the window or screen your app occupies."))}k.isMDXComponent=!0}}]);