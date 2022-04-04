"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5280],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,m=y["".concat(i,".").concat(d)]||y[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},38220:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return y},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const y={id:"style",title:"Style"},d=void 0,m={unversionedId:"style",id:"style",title:"Style",description:"With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.",source:"@site/../docs/style.md",sourceDirName:".",slug:"/style",permalink:"/docs/next/style",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/style.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"style",title:"Style"}},f=[{value:"Known issues",id:"known-issues",children:[],level:2}],h={toc:f};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),p),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"With React Native, you style your application using JavaScript. All of the core components accept a prop named ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),". The style names and ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/next/colors"}),"values")," usually match how CSS works on the web, except names are written using camel casing, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"background-color"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles."),(0,r.kt)("p",null,"As a component grows in complexity, it is often cleaner to use ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet.create")," to define several styles in one place. Here's an example:"),(0,r.kt)("div",u({},{className:"snack-player","data-snack-name":"Style","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20LotsOfStyles%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.red%7D%3Ejust%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.bigBlue%7D%3Ejust%20bigBlue%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.bigBlue%2C%20styles.red%5D%7D%3EbigBlue%2C%20then%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.red%2C%20styles.bigBlue%5D%7D%3Ered%2C%20then%20bigBlue%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20marginTop%3A%2050%2C%0A%20%20%7D%2C%0A%20%20bigBlue%3A%20%7B%0A%20%20%20%20color%3A%20'blue'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%7D%2C%0A%20%20red%3A%20%7B%0A%20%20%20%20color%3A%20'red'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20LotsOfStyles%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("p",null,"One common pattern is to make your component accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),' prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.'),(0,r.kt)("p",null,"There are a lot more ways to customize the text style. Check out the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/next/text"}),"Text component reference")," for a complete list."),(0,r.kt)("p",null,"Now you can make your text beautiful. The next step in becoming a style expert is to ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/next/height-and-width"}),"learn how to control component size"),"."),(0,r.kt)("h2",u({},{id:"known-issues"}),"Known issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/29308#issuecomment-792864162"}),"react-native#29308"),": In some cases React Native does not match how CSS works on the web, for example the touch area never extends past the parent view bounds and on Android negative margin is not supported.")))}b.isMDXComponent=!0}}]);