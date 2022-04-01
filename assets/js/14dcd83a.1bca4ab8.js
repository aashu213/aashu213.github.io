"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55255],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?a.createElement(d,i(i({ref:t},l),{},{components:r})):a.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18974:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return d},assets:function(){return h},toc:function(){return g},default:function(){return y}});var a=r(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&l(e,r,t[r]);return e};const f={title:"Dive into React Native Performance",author:"Pieter De Baets",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/javache",authorImageURL:"https://avatars1.githubusercontent.com/u/5676?v=3&s=460",authorTwitter:"javache",tags:["engineering"]},m=void 0,d={permalink:"/blog/2016/03/28/dive-into-react-native-performance",source:"@site/blog/2016-03-28-dive-into-react-native-performance.md",title:"Dive into React Native Performance",description:"React Native allows you to build Android and iOS apps in JavaScript using React and Relay's declarative programming model. This leads to more concise, easier-to-understand code; fast iteration without a compile cycle; and easy sharing of code across multiple platforms. You can ship faster and focus on details that really matter, making your app look and feel fantastic. Optimizing performance is a big part of this. Here is the story of how we made React Native app startup twice as fast.",date:"2016-03-28T00:00:00.000Z",formattedDate:"March 28, 2016",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:1.085,truncated:!1,authors:[{name:"Pieter De Baets",title:"Software Engineer at Facebook",url:"https://github.com/javache",imageURL:"https://avatars1.githubusercontent.com/u/5676?v=3&s=460"}],prevItem:{title:"React Native: A year in review",permalink:"/blog/2016/04/13/react-native-a-year-in-review"},nextItem:{title:"Introducing Hot Reloading",permalink:"/blog/2016/03/24/introducing-hot-reloading"}},h={authorsImageUrls:[void 0]},g=[{value:"Why the hurry?",id:"why-the-hurry",children:[],level:2}],v={toc:g};function y(e){var t,r=e,{components:n}=r,l=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),l),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"React Native allows you to build Android and iOS apps in JavaScript using React and Relay's declarative programming model. This leads to more concise, easier-to-understand code; fast iteration without a compile cycle; and easy sharing of code across multiple platforms. You can ship faster and focus on details that really matter, making your app look and feel fantastic. Optimizing performance is a big part of this. Here is the story of how we made React Native app startup twice as fast."),(0,a.kt)("h2",u({},{id:"why-the-hurry"}),"Why the hurry?"),(0,a.kt)("p",null,"With an app that runs faster, content loads quickly, which means people get more time to interact with it, and smooth animations make the app enjoyable to use. In emerging markets, where ",(0,a.kt)("a",u({parentName:"p"},{href:"https://code.facebook.com/posts/952628711437136/classes-performance-and-network-segmentation-on-android/"}),"2011 class phones")," on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://newsroom.fb.com/news/2015/10/news-feed-fyi-building-for-all-connectivity/"}),"2G networks")," are the majority, a focus on performance can make the difference between an app that is usable and one that isn't."),(0,a.kt)("p",null,"Since releasing React Native on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://reactjs.org/blog/2015/03/26/introducing-react-native.html"}),"iOS")," and on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/"}),"Android"),", we have been improving list view scrolling performance, memory efficiency, UI responsiveness, and app startup time. Startup sets the first impression of an app and stresses all parts of the framework, so it is the most rewarding and challenging problem to tackle."),(0,a.kt)("footer",null,(0,a.kt)("a",{href:"https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/",className:"btn"},"Read more")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",(0,a.kt)("a",u({parentName:"p"},{href:"https://code.facebook.com/posts/895897210527114/dive-into-react-native-performance/"}),"Facebook Code"),".")))}y.isMDXComponent=!0}}]);