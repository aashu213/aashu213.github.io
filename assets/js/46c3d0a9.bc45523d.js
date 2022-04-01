"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25841],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return d},assets:function(){return g},toc:function(){return b},default:function(){return v}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&l(e,n,t[n]);return e};const m={title:"Meet Hermes, a new JavaScript Engine optimized for React Native",author:"Rachel Nabors",authorTitle:"Documentation Engineer at Facebook",authorURL:"https://twitter.com/rachelnabors",authorImageURL:"https://avatars0.githubusercontent.com/u/236306?s=460&v=4",authorTwitter:"rachelnabors",tags:["announcement"]},f=void 0,d={permalink:"/blog/2019/07/17/hermes",source:"@site/blog/2019-07-17-hermes.md",title:"Meet Hermes, a new JavaScript Engine optimized for React Native",description:"Last week at Chain React we announced Hermes, an open source JavaScript engine we\u2019ve been working on at Facebook. It\u2019s a small and lightweight JavaScript engine optimized for running React Native on Android. Check it out!",date:"2019-07-17T00:00:00.000Z",formattedDate:"July 17, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:1.125,truncated:!1,authors:[{name:"Rachel Nabors",title:"Documentation Engineer at Facebook",url:"https://twitter.com/rachelnabors",imageURL:"https://avatars0.githubusercontent.com/u/236306?s=460&v=4"}],prevItem:{title:"Announcing React Native 0.61 with Fast Refresh",permalink:"/blog/2019/09/18/version-0.61"},nextItem:{title:"Announcing React Native 0.60",permalink:"/blog/2019/07/03/version-60"}},g={authorsImageUrls:[void 0]},b=[],h={toc:b};function v(e){var t,a=e,{components:l}=a,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),m),o(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Last week at Chain React we announced Hermes, an open source JavaScript engine we\u2019ve been working on at Facebook. It\u2019s a small and lightweight JavaScript engine optimized for running React Native on Android. ",(0,r.kt)("a",u({parentName:"p"},{href:"https://code.fb.com/android/hermes/"}),"Check it out!")),(0,r.kt)("p",null,"Hermes improves React Native performance by decreasing memory utilization, reducing download size, and decreasing the time it takes for the app to become usable or \u201ctime to interactive\u201d (TTI)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cAs we analyzed performance data, we noticed that the JavaScript engine itself was a significant factor in startup performance and download size. With this data in hand, we knew we had to optimize JavaScript performance in the more constrained environments of a mobile phone compared with a desktop or laptop. After exploring other options, we built a new JavaScript engine we call Hermes. It is designed to improve app performance, focusing on our React Native apps, even on mass-market devices with limited memory, slow storage, and reduced computing power.\u201d \u2014",(0,r.kt)("a",u({parentName:"p"},{href:"https://code.fb.com/android/hermes/"}),"Hermes: An open source JavaScript engine optimized for mobile apps, starting with React Native"))),(0,r.kt)("p",null,"Want to get started right away? Be sure to ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/hermes/"}),"check out our new guide to enabling Hermes in your existing React Native app")," in the docs!"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://code.fb.com/android/hermes/"}),(0,r.kt)("img",{alt:"Illustration of the Hermes and React Native logos joined into a winged fury, rising in a crashing electrical storm from a lone, glowing, presumably Android phone.",src:n(74056).Z}))," ",(0,r.kt)("em",{parentName:"p"},"Illustration by Rachel Nabors")))}v.isMDXComponent=!0},74056:function(e,t,n){t.Z=n.p+"assets/images/2019_hermes-launch-illo-rachel-nabors-05aac3b583be3cc5b84b78b88d60fa09.jpg"}}]);