"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1262],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},assets:function(){return f},toc:function(){return b},default:function(){return k}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={title:"Announcing React Native 0.65",authors:["lunaleaps"],tags:["announcement","release"]},m=void 0,h={permalink:"/blog/2021/08/17/version-065",source:"@site/blog/2021-08-17-version-065.md",title:"Announcing React Native 0.65",description:"Today we\u2019re releasing React Native version 0.65 with a new version of Hermes, improvements to accessibility, package upgrades, and more.",date:"2021-08-17T00:00:00.000Z",formattedDate:"August 17, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:2.31,truncated:!1,authors:[{name:"Luna Wei",title:"Software Engineer at Meta",url:"https://twitter.com/lunaleaps",imageURL:"https://github.com/lunaleaps.png",key:"lunaleaps"}],prevItem:{title:"React Native in H2 2021",permalink:"/blog/2021/08/19/h2-2021"},nextItem:{title:"The GAAD Pledge - One Year Later",permalink:"/blog/2021/05/20/GAAD-One-Year-Later"}},f={authorsImageUrls:[void 0]},b=[{value:"What&#39;s new in Hermes 0.8?",id:"whats-new-in-hermes-08",children:[],level:2},{value:"Accessibility Fixes and Additions",id:"accessibility-fixes-and-additions",children:[],level:2},{value:"Notable Dependency Version Updates and Gotchas",id:"notable-dependency-version-updates-and-gotchas",children:[],level:2},{value:"Thank You!",id:"thank-you",children:[],level:2}],g={toc:b};function k(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Today we\u2019re releasing React Native version 0.65 with a new version of Hermes, improvements to accessibility, package upgrades, and more."),(0,a.kt)("h2",u({},{id:"whats-new-in-hermes-08"}),"What's new in Hermes 0.8?"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes"),", Facebook\u2019s open source JavaScript VM optimized for React Native, has been upgraded to version 0.8.1. Some of the stand-out features in this release are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new concurrent garbage collector titled \u201cHades\u201d which delivers up to 30 times shorter pause times on 64 bit devices. At Facebook, we saw this improve some CPU-intensive workloads by 20%-50%. You can ",(0,a.kt)("a",u({parentName:"li"},{href:"https://hermesengine.dev/docs/hades/"}),"learn more about Hades here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://hermesengine.dev/docs/intl"}),"ECMAScript Internationalization API (ECMA-402, or ",(0,a.kt)("inlineCode",{parentName:"a"},"Intl"),")")," is now built into Hermes on Android and enabled by default, with only 57-62K per API size overhead (compared to ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/react-native-community/jsc-android-buildscripts"}),"JSC's 6MiB"),"). With this change, Hermes users no longer require locale polyfills. A big thank you to ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/mganandraj"}),"@mganandraj")," and other partners at Microsoft for driving the implementation to make this happen!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/blog/2021/03/12/version-0.64"}),"Hermes on iOS")," now ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/hermes/pull/546"}),"supports Apple M1 Macs and Mac Catalyst"),"!"),(0,a.kt)("li",{parentName:"ul"},"Memory improvements including SMI (Small Integers) and pointer compression that ",(0,a.kt)("a",u({parentName:"li"},{href:"https://twitter.com/tmikov/status/1385629737121243140"}),"shrank JS heap by 30%"),"."),(0,a.kt)("li",{parentName:"ul"},"Changes to ",(0,a.kt)("inlineCode",{parentName:"li"},"Function.prototype.toString")," that ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/471#issuecomment-820123463"}),"fixed a performance drop due to improper feature detection")," and ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/114"}),"supports the source code injecting use case"),".")),(0,a.kt)("p",null,"You can find the full ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/hermes/releases"}),"Hermes changelog here"),"."),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/docs/hermes#enabling-hermes"}),"Follow steps here")," to opt-in your app to Hermes if you haven\u2019t already to leverage these new features and gains!"),(0,a.kt)("h2",u({},{id:"accessibility-fixes-and-additions"}),"Accessibility Fixes and Additions"),(0,a.kt)("p",null,"Last year ",(0,a.kt)("a",u({parentName:"p"},{href:"https://reactnative.dev/blog/2021/05/20/GAAD-One-Year-Later"}),"Facebook took the GAAD pledge")," to improve accessibility within React Native. 0.65 shares the results of this pledge and other accessibility wins! Some notable changes include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allow specification of high contrast light and dark values for iOS. See ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/dynamiccolorios"}),"documentation")," for more details."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/accessibilityinfo#getrecommendedtimeoutmillis-android"}),(0,a.kt)("inlineCode",{parentName:"a"},"getRecommendedTimeoutMillis"))," API on Android. This exposes a user\u2019s preferred default timeout value as set in Android\u2019s accessibility options and is for users who may need extra time to review or reach controls, etc."),(0,a.kt)("li",{parentName:"ul"},"General fixes to ensure TalkBack/VoiceOver properly announce UI states such as ",(0,a.kt)("inlineCode",{parentName:"li"},"disabled")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"unselected")," on components.")),(0,a.kt)("p",null,"You can follow along or contribute to our ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/projects/15"}),"outstanding accessibility issues")," here!"),(0,a.kt)("h2",u({},{id:"notable-dependency-version-updates-and-gotchas"}),"Notable Dependency Version Updates and Gotchas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-native-codegen")," version ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0.7")," is now needed as a ",(0,a.kt)("inlineCode",{parentName:"li"},"devDependency")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ul"},"JCenter has been sunsetted and read-only now. We have removed JCenter as a maven repository and updated dependencies to use MavenCentral and Jitpack."),(0,a.kt)("li",{parentName:"ul"},"Upgraded OkHttp from v3 to v4.9.1. See ",(0,a.kt)("a",u({parentName:"li"},{href:"https://square.github.io/okhttp/upgrading_to_okhttp_4/"}),"Upgrading to OkHttp 4")," for more details on changes."),(0,a.kt)("li",{parentName:"ul"},"Upgraded to Flipper 0.93 to support Xcode 12.5. See ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/flipper/blob/master/desktop/static/CHANGELOG.md"}),"Flipper changelog here"),"."),(0,a.kt)("li",{parentName:"ul"},"Android Gradle Plugin 7 support"),(0,a.kt)("li",{parentName:"ul"},"Apple Silicon requires a linker workaround. See ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/react-native-community/releases/issues/238#issuecomment-890367992"}),"@mikehardy\u2019s note")," about this.")),(0,a.kt)("h2",u({},{id:"thank-you"}),"Thank You!"),(0,a.kt)("p",null,"This release includes over ",(0,a.kt)("strong",{parentName:"p"},"1100 commits")," from ",(0,a.kt)("strong",{parentName:"p"},"61 contributors"),". Thank you to everyone who has contributed and supported this release! You can find the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0650"}),"full changelog here"),"."))}k.isMDXComponent=!0}}]);