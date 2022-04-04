"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4697],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,h=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97837:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return h},assets:function(){return g},toc:function(){return b},default:function(){return v}});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&l(e,r,t[r]);return e};const m={title:"Toward Hermes being the Default",authors:["huxpro"],tags:["announcement"]},f=void 0,h={permalink:"/blog/2021/10/26/toward-hermes-being-the-default",source:"@site/blog/2021-10-26-toward-hermes-being-the-default.md",title:"Toward Hermes being the Default",description:"Since we announced Hermes in 2019, it has been increasingly gaining adoption in the community. The team at Expo, who maintain a popular meta-framework for React Native apps, recently announced experimental support for Hermes after being one of the most requested features of Expo. The team at Realm, a popular mobile database, also recently shipped its alpha support for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being the best JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms.",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:11.1,truncated:!0,authors:[{name:"Xuan Huang",title:"Software Engineer at Meta",url:"https://twitter.com/huxpro",imageURL:"https://github.com/huxpro.png",key:"huxpro"}],prevItem:{title:"Announcing React Native 0.67",permalink:"/blog/2022/01/19/version-067"},nextItem:{title:"Announcing React Native 0.66",permalink:"/blog/2021/10/01/version-066"}},g={authorsImageUrls:[void 0]},b=[],d={toc:b};function v(e){var t,r=e,{components:a}=r,l=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},d),l),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Since ",(0,n.kt)("a",u({parentName:"p"},{href:"https://engineering.fb.com/2019/07/12/android/hermes/"}),"we announced Hermes in 2019"),", it has been increasingly gaining adoption in the community. The team at ",(0,n.kt)("a",u({parentName:"p"},{href:"https://expo.dev/"}),"Expo"),", who maintain a popular meta-framework for React Native apps, recently ",(0,n.kt)("a",u({parentName:"p"},{href:"https://blog.expo.dev/expo-sdk-42-579aee2348b6"}),"announced experimental")," ",(0,n.kt)("a",u({parentName:"p"},{href:"https://blog.expo.dev/expo-sdk-43-beta-is-now-available-47dc54a8d29f"}),"support")," for Hermes after being ",(0,n.kt)("a",u({parentName:"p"},{href:"https://expo.canny.io/feature-requests/p/enabling-hermes"}),"one of the most requested features of Expo"),". The team at ",(0,n.kt)("a",u({parentName:"p"},{href:"https://realm.io/"}),"Realm"),", a popular mobile database, also recently shipped its ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/realm/realm-js/issues/3940"}),"alpha support")," for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being ",(0,n.kt)("em",{parentName:"p"},"the best")," JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms."))}v.isMDXComponent=!0}}]);