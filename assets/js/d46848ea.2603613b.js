"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2719],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61823:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return f},default:function(){return g}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const h={id:"height-and-width",title:"Height and Width"},m=void 0,u={unversionedId:"height-and-width",id:"height-and-width",title:"Height and Width",description:"A component's height and width determine its size on the screen.",source:"@site/../docs/height-and-width.md",sourceDirName:".",slug:"/height-and-width",permalink:"/docs/next/height-and-width",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/height-and-width.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"height-and-width",title:"Height and Width"}},f=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[],level:2},{value:"Flex Dimensions",id:"flex-dimensions",children:[],level:2},{value:"Percentage Dimensions",id:"percentage-dimensions",children:[],level:2}],A={toc:f};function g(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},A),d),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A component's height and width determine its size on the screen."),(0,a.kt)("h2",p({},{id:"fixed-dimensions"}),"Fixed Dimensions"),(0,a.kt)("p",null,"The general way to set the dimensions of a component is by adding a fixed ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," to style. All dimensions in React Native are unitless, and represent density-independent pixels."),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Height and Width","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FixedDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20width%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20width%3A%20100%2C%20height%3A%20100%2C%20backgroundColor%3A%20'skyblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20width%3A%20150%2C%20height%3A%20150%2C%20backgroundColor%3A%20'steelblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20FixedDimensionsBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"Setting dimensions this way is common for components whose size should always be fixed to a number of points and not calculated based on screen size."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There is no universal mapping from points to physical units of measurement. This means that a component with fixed dimensions might not have the same physical size, across different devices and screen sizes. However, this difference is unnoticable for most use cases.")),(0,a.kt)("h2",p({},{id:"flex-dimensions"}),"Flex Dimensions"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use ",(0,a.kt)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," given, the higher the ratio of space a component will take compared to its siblings."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A component can only expand to fill available space if its parent has dimensions greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". If a parent does not have either a fixed ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),", the parent will have dimensions of ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," children will not be visible.")),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Flex Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FlexDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%2F%2F%20Try%20removing%20the%20%60flex%3A%201%60%20on%20the%20parent%20View.%0A%20%20%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%0A%20%20%20%20%2F%2F%20What%20if%20you%20add%20%60height%3A%20300%60%20instead%20of%20%60flex%3A%201%60%3F%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20backgroundColor%3A%20'powderblue'%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%202%2C%20backgroundColor%3A%20'skyblue'%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%203%2C%20backgroundColor%3A%20'steelblue'%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20FlexDimensionsBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"After you can control a component's size, the next step is to ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/flexbox"}),"learn how to lay it out on the screen"),"."),(0,a.kt)("h2",p({},{id:"percentage-dimensions"}),"Percentage Dimensions"),(0,a.kt)("p",null,"If you want to fill a certain portion of the screen, but you ",(0,a.kt)("em",{parentName:"p"},"don't")," want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," layout, you ",(0,a.kt)("em",{parentName:"p"},"can")," use ",(0,a.kt)("strong",{parentName:"p"},"percentage values")," in the component's style. Similar to flex dimensions, percentage dimensions require parent with a defined size."),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Percentage Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20PercentageDimensionsBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%2F%2F%20Try%20removing%20the%20%60height%3A%20'100%25'%60%20on%20the%20parent%20View.%0A%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20height%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20height%3A%20'15%25'%2C%20backgroundColor%3A%20'powderblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20width%3A%20'66%25'%2C%20height%3A%20'35%25'%2C%20backgroundColor%3A%20'skyblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20width%3A%20'33%25'%2C%20height%3A%20'50%25'%2C%20backgroundColor%3A%20'steelblue'%0A%20%20%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20PercentageDimensionsBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))}g.isMDXComponent=!0}}]);