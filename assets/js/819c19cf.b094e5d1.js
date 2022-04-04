"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6689],{35318:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var o=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74026:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},assets:function(){return f},toc:function(){return b},default:function(){return k}});var o=a(35318),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&h(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&h(e,a,t[a]);return e};const u={title:"Releasing 0.56",author:"Lorenzo Sciandra",authorTitle:"Core Maintainer & React Native Developer at Drivetribe",authorURL:"https://github.com/kelset",authorImageURL:"https://avatars2.githubusercontent.com/u/16104054?s=460&v=4",authorTwitter:"kelset",tags:["announcement","release"]},d=void 0,m={permalink:"/blog/2018/07/04/releasing-react-native-056",source:"@site/blog/2018-07-04-releasing-react-native-056.md",title:"Releasing 0.56",description:"The long-awaited 0.56 version of React Native is now available \ud83c\udf89. This blog post highlights some of the changes introduced in this new release. We also want to take the opportunity to explain what has kept us busy since March.",date:"2018-07-04T00:00:00.000Z",formattedDate:"July 4, 2018",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.655,truncated:!1,authors:[{name:"Lorenzo Sciandra",title:"Core Maintainer & React Native Developer at Drivetribe",url:"https://github.com/kelset",imageURL:"https://avatars2.githubusercontent.com/u/16104054?s=460&v=4"}],prevItem:{title:"Accessibility API Updates",permalink:"/blog/2018/08/13/react-native-accessibility-updates"},nextItem:{title:"State of React Native 2018",permalink:"/blog/2018/06/14/state-of-react-native-2018"}},f={authorsImageUrls:[void 0]},b=[{value:"The breaking changes dilemma, or, &quot;when to release?&quot;",id:"the-breaking-changes-dilemma-or-when-to-release",children:[],level:3},{value:"The Big Changes",id:"the-big-changes",children:[{value:"Babel 7",id:"babel-7",children:[],level:3},{value:"Modernizing Android support",id:"modernizing-android-support",children:[],level:3},{value:"New Node, Xcode, React, and Flow \u2013 oh my!",id:"new-node-xcode-react-and-flow--oh-my",children:[],level:3},{value:"And a lot of other things...",id:"and-a-lot-of-other-things",children:[],level:3}],level:2}],g={toc:b};function k(e){var t,a=e,{components:n}=a,h=((e,t)=>{var a={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&c.call(e,o)&&(a[o]=e[o]);return a})(a,["components"]);return(0,o.kt)("wrapper",(t=p(p({},g),h),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The long-awaited 0.56 version of React Native is now available \ud83c\udf89. This blog post highlights some of the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md#highlights"}),"changes")," introduced in this new release. We also want to take the opportunity to explain what has kept us busy since March."),(0,o.kt)("h3",p({},{id:"the-breaking-changes-dilemma-or-when-to-release"}),'The breaking changes dilemma, or, "when to release?"'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md"}),"Contributor's Guide")," explains the integration process that all changes to React Native go through. The project has is composed by ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native-website/issues/370"}),"many different tools"),", requiring coordination and constant support to keep everything working properly. Add to this the vibrant open source community that contributes back to the project, and you will get a sense of the mind-bending scale of it all."),(0,o.kt)("p",null,"With React Native's impressive adoption, breaking changes must be made with great care, and the process is not as smooth as we'd like. A decision was made to skip the April and May releases to allow the core team to integrate and test a new set of breaking changes. ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/react-native-releases/issues/14"}),"Dedicated community communication")," channels were used along the way to ensure that the June 2018 (",(0,o.kt)("inlineCode",{parentName:"p"},"0.56.0"),") release is as hassle-free as possible to adopt by those who patiently waited for the stable release."),(0,o.kt)("p",null,"Is ",(0,o.kt)("inlineCode",{parentName:"p"},"0.56.0"),' perfect? No, as every piece of software out there: but we reached a point where the tradeoff between "waiting for more stability" versus "testing led to successful results so we can push forward" that we feel ready to release it. Moreover, we are aware ',(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19955"}),"of")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19827"}),"a")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19763"}),"few")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19859"}),"issues")," that are not solved in the final ",(0,o.kt)("inlineCode",{parentName:"p"},"0.56.0")," release. Most developers should have no issues upgrading to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.56.0"),". For those that are blocked by the aforementioned issues, we hope to see you around in our discussions and we are looking forward to working with you on a solution to these issues."),(0,o.kt)("p",null,"You might consider ",(0,o.kt)("inlineCode",{parentName:"p"},"0.56.0")," as a fundamental building block towards a more stable framework: it will take probably a week or two of widespread adoption before all the edge cases will be sanded off, but this will lead to an even better July 2018 (",(0,o.kt)("inlineCode",{parentName:"p"},"0.57.0"),") release."),(0,o.kt)("p",null,"We'd like to conclude this section by thanking ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/compare/v0.55.4...v0.56.0-rc.4"}),"all the 67 contributors who worked on a total of 818 commits")," (!) that will help make your apps even better \ud83d\udc4f."),(0,o.kt)("p",null,"And now, without further ado..."),(0,o.kt)("h2",p({},{id:"the-big-changes"}),"The Big Changes"),(0,o.kt)("h3",p({},{id:"babel-7"}),"Babel 7"),(0,o.kt)("p",null,"As you may know, the transpiler tool that allows us all to use the latest and greatest features of JavaScript, Babel, is moving to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://babeljs.io/blog/2017/12/27/nearing-the-7.0-release"}),"v7 soon"),". Since this new version brings along some important changes, we felt that now it would be a good time to upgrade, allowing ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/metro"}),"Metro")," to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/metro/issues/92"}),"leverage on its improvements"),"."),(0,o.kt)("p",null,"If you find yourself in trouble with upgrading, please refer to the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://new.babeljs.io/docs/en/next/v7-migration.html"}),"documentation section related to it"),"."),(0,o.kt)("h3",p({},{id:"modernizing-android-support"}),"Modernizing Android support"),(0,o.kt)("p",null,"On Android, much of the surrounding tooling has changed. We've updated to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/699e5eebe807d1ced660d2d2f39b5679d26925da"}),"Gradle 3.5"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/065c5b6590de18281a8c592a04240751c655c03c"}),"Android SDK 26"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/6b07602915157f54c39adbf0f9746ac056ad2d13"}),"Fresco to 1.9.0, and OkHttp to 3.10.0")," and even the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/5ae97990418db613cd67b1fb9070ece976d17dc7"}),"NDK API target to API 16"),". These changes should go without issue and result in faster builds. More importantly, it will help developers comply with the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://android-developers.googleblog.com/2017/12/improving-app-security-and-performance.html"}),"new Play Store requirements")," coming into effect next month."),(0,o.kt)("p",null,"Related to this, we'd like to particularly thank ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/dulmandakh"}),"Dulmandakh")," for the many PRs submitted in order to make it possible \ud83d\udc4f."),(0,o.kt)("p",null,"There are some more steps that need to be taken in this direction, and you can follow along with the future planning and discussion of updating the Android support in the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19297"}),"dedicated issue")," (and a side one for the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/19737"}),"JSC"),")."),(0,o.kt)("h3",p({},{id:"new-node-xcode-react-and-flow--oh-my"}),"New Node, Xcode, React, and Flow \u2013 oh my!"),(0,o.kt)("p",null,"Node 8 is now the standard for React Native. It was actually already being tested already, but we've put both feet forward as Node 6 entered maintenance mode. React was also updated to 16.4, which brings a ton of fixes with it."),(0,o.kt)("p",null,"We're dropping support for iOS 8, ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/f50df4f5eca4b4324ff18a49dcf8be3694482b51"}),"making iOS 9 the oldest iOS version that can be targeted"),". We do not foresee this being a problem, as any device that can run iOS 8, can be upgraded to iOS 9. This change allowed us to remove rarely-used code that implemented workarounds for older devices running iOS 8."),(0,o.kt)("p",null,"The continuous integration toolchain has been updated ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d"}),"to use Xcode 9.4"),", ensuring that all iOS tests are run on the latest developer tools provided by Apple."),(0,o.kt)("p",null,"We have upgraded to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/6264b6932a08e1cefd83c4536ff7839d91938730"}),"Flow 0.75")," to use the new error format ",(0,o.kt)("a",p({parentName:"p"},{href:"https://twitter.com/dan_abramov/status/998610821096857602"}),"that many devs appreciate"),". We've also created types for many more components. If you're not yet enforcing static typing in your project, please consider using Flow to identify problems as you code instead of at runtime."),(0,o.kt)("h3",p({},{id:"and-a-lot-of-other-things"}),"And a lot of other things..."),(0,o.kt)("p",null,"For instance, YellowBox was ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/d0219a0301e59e8b0ef75dbd786318d4b4619f4c"}),"replaced")," with a new implementation that makes debugging a lot better."),(0,o.kt)("p",null,"For the complete release notes, please reference the full ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md"}),"changelog here"),". And remember to keep an eye on the ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/upgrading"}),"upgrading guide")," to avoid issues moving to this new version."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A final note: starting this week, the React Native core team will resume holding monthly meetings. We'll make sure to keep everyone up-to-date with what's covered, and ensure to keep your feedback at hand for future meetings."),(0,o.kt)("p",null,"Happy coding everyone!"),(0,o.kt)("p",null,(0,o.kt)("a",p({parentName:"p"},{href:"https://twitter.com/Kelset"}),"Lorenzo"),", ",(0,o.kt)("a",p({parentName:"p"},{href:"https://github.com/turnrye"}),"Ryan"),", and the whole ",(0,o.kt)("a",p({parentName:"p"},{href:"https://twitter.com/reactnative"}),"React Native core team")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PS:")," as always, we'd like to remind everyone that React Native is still in 0.x versioning because of the many changes still undergoing - so remember when upgrading that yes, probably, something may still crash or be broken. Be helpful towards each other in the issues and when submitting PRs - and remember to follow the ",(0,o.kt)("a",p({parentName:"p"},{href:"https://code.fb.com/codeofconduct/"}),"CoC")," enforced: there's always a human on the other side of the screen."))}k.isMDXComponent=!0}}]);