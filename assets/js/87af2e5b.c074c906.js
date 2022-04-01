"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27857],{35318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||n;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68748:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return d},metadata:function(){return u},assets:function(){return f},toc:function(){return g},default:function(){return v}});var r=a(35318),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&m(e,a,t[a]);return e};const h={title:"Toward Hermes being the Default",authors:["huxpro"],tags:["announcement"]},d=void 0,u={permalink:"/blog/2021/10/26/toward-hermes-being-the-default",source:"@site/blog/2021-10-26-toward-hermes-being-the-default.md",title:"Toward Hermes being the Default",description:"Since we announced Hermes in 2019, it has been increasingly gaining adoption in the community. The team at Expo, who maintain a popular meta-framework for React Native apps, recently announced experimental support for Hermes after being one of the most requested features of Expo. The team at Realm, a popular mobile database, also recently shipped its alpha support for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being the best JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms.",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:11.1,truncated:!0,authors:[{name:"Xuan Huang",title:"Software Engineer at Meta",url:"https://twitter.com/huxpro",imageURL:"https://github.com/huxpro.png",key:"huxpro"}],prevItem:{title:"Announcing React Native 0.67",permalink:"/blog/2022/01/19/version-067"},nextItem:{title:"Announcing React Native 0.66",permalink:"/blog/2021/10/01/version-066"}},f={authorsImageUrls:[void 0]},g=[{value:"Optimizing for React Native",id:"optimizing-for-react-native",children:[{value:"Building a New Garbage Collector for Fabric",id:"building-a-new-garbage-collector-for-fabric",children:[],level:3},{value:"Striking on Performance Pain Points",id:"striking-on-performance-pain-points",children:[],level:3},{value:"Pioneering at Vertical Integrations",id:"pioneering-at-vertical-integrations",children:[],level:3}],level:2},{value:"Bringing Along the Whole Community",id:"bringing-along-the-whole-community",children:[{value:"Expanding to New Platforms",id:"expanding-to-new-platforms",children:[],level:3},{value:"Supporting our Community",id:"supporting-our-community",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],b={toc:g};function v(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),m),n(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Since ",(0,r.kt)("a",c({parentName:"p"},{href:"https://engineering.fb.com/2019/07/12/android/hermes/"}),"we announced Hermes in 2019"),", it has been increasingly gaining adoption in the community. The team at ",(0,r.kt)("a",c({parentName:"p"},{href:"https://expo.dev/"}),"Expo"),", who maintain a popular meta-framework for React Native apps, recently ",(0,r.kt)("a",c({parentName:"p"},{href:"https://blog.expo.dev/expo-sdk-42-579aee2348b6"}),"announced experimental")," ",(0,r.kt)("a",c({parentName:"p"},{href:"https://blog.expo.dev/expo-sdk-43-beta-is-now-available-47dc54a8d29f"}),"support")," for Hermes after being ",(0,r.kt)("a",c({parentName:"p"},{href:"https://expo.canny.io/feature-requests/p/enabling-hermes"}),"one of the most requested features of Expo"),". The team at ",(0,r.kt)("a",c({parentName:"p"},{href:"https://realm.io/"}),"Realm"),", a popular mobile database, also recently shipped its ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/realm/realm-js/issues/3940"}),"alpha support")," for Hermes. In this post, we want to highlight some of the most exciting progress we've made over the past two years to push Hermes towards being ",(0,r.kt)("em",{parentName:"p"},"the best")," JavaScript engine for React Native. Looking forward, we are confident that with these improvements and more to come, we can make Hermes the default JavaScript engine for React Native across all platforms."),(0,r.kt)("h2",c({},{id:"optimizing-for-react-native"}),"Optimizing for React Native"),(0,r.kt)("p",null,"Hermes\u2019s defining feature is how it performs compilation work ahead-of-time, meaning that React Native apps with Hermes enabled ship with precompiled optimized bytecode instead of plain JavaScript source. This drastically reduces the amount of work needed to start up your product for users. Measurements from both Facebook and community apps have suggested that enabling Hermes often cut a product\u2019s TTI (or ",(0,r.kt)("a",c({parentName:"p"},{href:"https://web.dev/interactive/"}),"Time-To-Interactive"),") metric by nearly half."),(0,r.kt)("p",null,"That being said, we\u2019ve been working on improving Hermes in many other aspects to make it even better as a JavaScript engine specialized for React Native."),(0,r.kt)("h3",c({},{id:"building-a-new-garbage-collector-for-fabric"}),"Building a New Garbage Collector for Fabric"),(0,r.kt)("p",null,"With the upcoming ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/4"}),"Fabric")," renderer in the new React Native architecture, it will be possible to synchronously call JavaScript on the UI thread. However, this means if the JavaScript thread takes too long to execute, it can cause noticeable UI frame drops and block user inputs. The ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html"}),"concurrent rendering")," enabled by React ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactjs.org/docs/faq-internals.html#what-is-react-fiber"}),"Fiber")," will avoid scheduling long JavaScript tasks by splitting rendering work into chunks. However, there is another common source of latency from the JavaScript thread \u2014 when the JavaScript engine has to \u201cstop the world\u201d to perform a garbage collection (GC)."),(0,r.kt)("p",null,"The previous default garbage collector in Hermes, ",(0,r.kt)("a",c({parentName:"p"},{href:"https://hermesengine.dev/docs/gengc/"}),"GenGC"),", was a single-threaded generational garbage collector. The new generations uses a typical semi-space copying strategy, and the old generations uses a mark-compact strategy to make it really good at aggressively returning memory to the operating system. Due to its single-thread, GenGC has the downside of causing long GC pauses. On apps that are as complicated as Facebook for Android, we observed an average pause of 200ms, or 1.4s at p99. We have even seen it be as long as 7 seconds, considering the large and diverse user base of Facebook for Android."),(0,r.kt)("p",null,"In order to mitigate this, we implemented a brand new ",(0,r.kt)("em",{parentName:"p"},"mostly concurrent")," GC named ",(0,r.kt)("a",c({parentName:"p"},{href:"https://hermesengine.dev/docs/hades"}),"Hades"),". Hades collects its young generation exactly the same as GenGC, but it manages its old generation with a snapshot-at-the-beginning style mark-sweep collector. which can significantly reduce GC pause time by performing most of its work in a background thread without blocking the engine\u2019s main thread from executing JavaScript code. ",(0,r.kt)("strong",{parentName:"p"},"Our statistics show that Hades only pauses for 48ms at p99.9 on 64-bit devices (34x faster than GenGC!)")," and around 88ms at p99.9 on 32-bit devices (where it operates as a single-threaded ",(0,r.kt)("em",{parentName:"p"},"incremental")," GC). These pause time improvements can come at the cost of overall throughput, due to the need for more expensive write barriers, slower freelist based allocation (as opposed to a bump pointer allocator), and increased heap fragmentation. We think those are the right trade-offs, and we were able to achieve overall lower memory consumption via coalescing and additional memory optimizations that we\u2019ll talk about."),(0,r.kt)("h3",c({},{id:"striking-on-performance-pain-points"}),"Striking on Performance Pain Points"),(0,r.kt)("p",null,"Startup time of applications is critical to the success of many apps, and we are continuously pushing the boundary for React Native. For any new JavaScript feature we implement in Hermes, we carefully monitor their impact on production performance and ensure that they don\u2019t regress metrics. At Facebook, we are currently experimenting with a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/metro/blob/c9a6fd75937c56645ab9e4d88fa820e63e057cd6/packages/metro-react-native-babel-preset/src/configs/main.js#L42"}),"dedicated Babel transform profile for Hermes in Metro")," to replace a dozen Babel transforms with Hermes\u2019s native ESNext implementations. We were able to observe ",(0,r.kt)("strong",{parentName:"p"},"18-25% TTI improvements")," on many surfaces and ",(0,r.kt)("strong",{parentName:"p"},"overall bytecode size decreases")," and we expect to see similar results for OSS."),(0,r.kt)("p",null,"In addition to startup performance, we identified memory footprint as an opportunity for improvement in React Native apps especially for ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision#expanding-to-new-platforms"}),"virtual reality.")," Thanks to the low-level control we have as a JavaScript engine, we were able to deliver rounds of memory optimizations by squeezing bits and bytes out:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Previously, all JavaScript values were represented as 64-bit NaN-boxing encoded tagged values to represent floating point doubles and pointers on 64-bit architecture. However, this is wasteful in practice because most numbers are small integers (SMI) and JavaScript heap of client-side applications is not expected to be larger than 4GiB generally. To address this, we introduced a new 32-bit encoding in which SMI and pointers are encoded in 29 bits (because pointers are 8-byte aligned, we can assume the bottom 3 bits are always zero), and the rest of JS numbers are boxed onto the heap. ",(0,r.kt)("strong",{parentName:"li"},"This reduced the JavaScript heap size by ~30%.")),(0,r.kt)("li",{parentName:"ol"},"Different kinds of JavaScript objects are represented as different kinds of GC-managed cells in the JavaScript heap. By aggressively optimizing the memory layout of headers for those cells, ",(0,r.kt)("strong",{parentName:"li"},"we are able to reduce memory usage by another ~15%"),".")),(0,r.kt)("p",null,"One of our key decisions with Hermes was to not implement a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Just-in-time_compilation"}),"just-in-time (JIT) compiler")," because we believe that for most React Native apps, the additional warm-up costs and extra footprints on binary and memory would not actually be worthwhile. For years, we invested a lot of effort in optimizing interpreter performance and compiler optimizations to make Hermes\u2019s throughput competitive with other engines for React Native workloads. We are continuing to focus on improving throughput by identifying performance bottlenecks from everywhere (interpreter dispatch loop, stack layout, object model, GC, etc.). Expect some more numbers in upcoming releases!"),(0,r.kt)("h3",c({},{id:"pioneering-at-vertical-integrations"}),"Pioneering at Vertical Integrations"),(0,r.kt)("p",null,"At Facebook, we prefer to colocate projects within a large ",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Monorepo"}),"monorepo"),". By having the engine (Hermes) and the host (React Native) closely iterating together, we opened a lot of room for vertical integrations. To name a few:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hermes supports ",(0,r.kt)("a",c({parentName:"li"},{href:"https://reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools"}),"on-device JavaScript debugging with the Chrome debugger")," by speaking the ",(0,r.kt)("a",c({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"Chrome DevTools Protocol"),". It\u2019s better than the legacy \u201c",(0,r.kt)("a",c({parentName:"li"},{href:"https://reactnative.dev/docs/debugging#chrome-developer-tools"}),"Remote JS Debugging"),"\u201d (which uses an in-app proxy to run JS in desktop Chrome) because it supports debugging synchronous native calls and guaranteed a consistent runtime environment. Together with React DevTools, Metro, Inspector, and so on, Hermes debugger is now part of ",(0,r.kt)("a",c({parentName:"li"},{href:"https://reactnative.dev/blog/2020/03/26/version-0.62"}),"Flipper")," to provide a one-stop developer experience."),(0,r.kt)("li",{parentName:"ul"},"Objects allocated during the initialization path of React Native apps are often long-lived and don\u2019t follow the ",(0,r.kt)("em",{parentName:"li"},"generational")," ",(0,r.kt)("em",{parentName:"li"},"hypothesis")," leveraged by generational GCs. Therefore, we ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/ReactAndroid/src/main/java/com/facebook/hermes/reactexecutor/OnLoad.cpp#L37-L42"}),"configured Hermes in React Native")," to allocate the first 32MiB directly into old generations (known as ",(0,r.kt)("em",{parentName:"li"},"pre-tenuring"),") to avoid triggering GC pauses and delaying TTI."),(0,r.kt)("li",{parentName:"ul"},"The new React Native architecture is heavily based on ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/91"}),"JSI (or JavaScript Interface)"),", a lightweight, general-purposed API for embedding a JavaScript engine into a C++ program. By having the team maintaining the JS engine also maintains the JSI API implementation, we are confident in providing the best possible integration that is reliable, performant and battle-tested at the Facebook\u2019s scale."),(0,r.kt)("li",{parentName:"ul"},"Getting JavaScript concurrency primitives (e.g. ",(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"}),"promises"),") and platform concurrency primitives (e.g. ",(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide"}),"microtasks"),") both semantically correct and performant are critical to React concurrent rendering and the future of React Native apps. Historically, promises in React Native were ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/main/Libraries/Core/polyfillPromise.js#L37"}),"polyfilled")," using non-standardized ",(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate"}),(0,r.kt)("inlineCode",{parentName:"a"},"setImmediate"))," APIs. We are working on making native promises and microtasks from JS engines available via JSI, and introducing ",(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask"}),(0,r.kt)("inlineCode",{parentName:"a"},"queueMicrotask")),", a recent addition to the web standard, to the platform, to better support modern asynchronous JavaScript code.")),(0,r.kt)("h2",c({},{id:"bringing-along-the-whole-community"}),"Bringing Along the Whole Community"),(0,r.kt)("p",null,"Hermes has been really great for us at Facebook. But our work is not done until our community can use Hermes to power experiences throughout the ecosystem, so that everyone leverage all of its features and to embrace its full potential."),(0,r.kt)("h3",c({},{id:"expanding-to-new-platforms"}),"Expanding to New Platforms"),(0,r.kt)("p",null,"Hermes was initially open sourced only for React Native on Android. Since then, we have been thrilled to see our members of the community expanding Hermes support into ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision"}),"many other platforms that React Native\u2019s ecosystem has expanded"),"."),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://callstack.com/"}),"Callstack")," led the effort of bringing ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactnative.dev/blog/2021/03/12/version-0.64"}),"Hermes to iOS in React Native 0.64"),". They wrote a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://callstack.com/blog/bringing-hermes-to-ios-in-react-native/"}),"series of articles")," and hosted a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://callstack.com/podcasts/react-native-0-64-with-hermes-for-ios-ep-5"}),"podcast")," on how they achieved it. According to their benchmarks, Hermes was able to ",(0,r.kt)("strong",{parentName:"p"},"consistently deliver ~40% improvement to startup and ~18% reduced memory on iOS")," compared to JSC for the Mattermost app, with only 2.4 MiB of app size overhead. I encourage you to ",(0,r.kt)("a",c({parentName:"p"},{href:"https://callstack.com/blog/hermes-performance-on-ios/"}),"see it live with your own eyes"),"."),(0,r.kt)("p",null,"Microsoft has been bringing ",(0,r.kt)("a",c({parentName:"p"},{href:"https://microsoft.github.io/react-native-windows/docs/hermes"}),"Hermes to React Native for Windows and macOS"),". ",(0,r.kt)("a",c({parentName:"p"},{href:"https://youtu.be/QMFbrHZnvvw?t=389"}),"At Microsoft Build 2020"),", Microsoft shared that Hermes\u2019s memory impact (",(0,r.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Working_set"}),"working set"),") is 13% lower than the Chakra engine on React Native for Windows. Recently, on some synthetic benchmarks, they\u2019ve found Hermes 0.8 (shipped with Hades and aforementioned SMI and pointer compression optimization) ",(0,r.kt)("strong",{parentName:"p"},"uses 30%-40% less memory than other engines"),". Not surprisingly, the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.messenger.com/desktop"}),"desktop Messenger")," video calling experience built on React Native, is also powered by Hermes."),(0,r.kt)("p",null,"Last but not least, Hermes has also been powering all virtual reality experiences built with the React family of technologies on Oculus, including Oculus Home."),(0,r.kt)("h3",c({},{id:"supporting-our-community"}),"Supporting our Community"),(0,r.kt)("p",null,"We acknowledge there are still blockers that prevent parts of the community from adopting Hermes and we are committed to building support for these missing features. Our goal is to be fully featured so that Hermes is the right choice for most React Native apps. Here is how the community has already shaped the Hermes roadmap:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming"}),(0,r.kt)("inlineCode",{parentName:"a"},"Proxy")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"Reflect"))," were originally excluded from Hermes because Facebook does not use them. We were also concerned that adding Proxy would hurt property lookup performance even when Proxy is not used. But Proxy quickly become ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/33"}),"the most requested feature")," of Hermes due to popular libraries such as ",(0,r.kt)("a",c({parentName:"li"},{href:"https://mobx.js.org/README.html"}),"MobX")," and ",(0,r.kt)("a",c({parentName:"li"},{href:"https://immerjs.github.io/immer/"}),"Immer"),". We carefully evaluated and decided to build it just for the community, and we managed to implement it with very low cost. Since this is a feature we don\u2019t use, we relied on our community to prove its stability. We started by testing Proxy behind a flag and created opt-in npm packages for ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/33#issuecomment-668374607"}),"release v0.4")," and ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/33#issuecomment-668374607"}),"v0.5"),", and it\u2019s ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/releases/tag/v0.7.0"}),"enabled by default starting from v0.7"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://hermesengine.dev/docs/intl"}),"ECMAScript Internationalization API Specification (ECMA-402, or ",(0,r.kt)("inlineCode",{parentName:"a"},"Intl"),")")," was ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/23"}),"the second most requested feature"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"Intl")," is a huge set of APIs and often requires the implementation to include ",(0,r.kt)("strong",{parentName:"li"},"6MB worth")," of ",(0,r.kt)("a",c({parentName:"li"},{href:"https://cldr.unicode.org/index"}),"Unicode CLDR")," data. This is why polyfills like ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/formatjs/formatjs"}),"FormatJS (a.k.a. ",(0,r.kt)("inlineCode",{parentName:"a"},"react-intl"),")")," and JS engines like the ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant"}),"international variant build of community JSC")," are so huge. To avoid substantially increasing the binary size of Hermes, we decided to implement it with another strategy by consuming and mapping the ICU facilities provided by the libraries included in the operating systems, at the cost of some (often minor) variance in behaviors across platforms.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Microsoft collaborated to build support on Android. It covers almost everything from ECMA-402 up to ES2020, ",(0,r.kt)("strong",{parentName:"li"},"with only a size impact as small as 3% (57-62K per ABI)"),". We ran ",(0,r.kt)("a",c({parentName:"li"},{href:"https://twitter.com/tmikov/status/1336442786694893568"}),"a poll on Twitter")," and the results were strongly in favor of including ",(0,r.kt)("inlineCode",{parentName:"li"},"Intl")," by default, so that\u2019s what we did and it\u2019s available starting from ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/releases/tag/v0.8.0"}),"release v0.8"),"."),(0,r.kt)("li",{parentName:"ul"},"Facebook has sponsored ",(0,r.kt)("a",c({parentName:"li"},{href:"https://mlh.io/"}),"Major League Hacking")," to launch a ",(0,r.kt)("a",c({parentName:"li"},{href:"https://news.mlh.io/welcoming-facebook-back-as-a-sponsor-of-the-2020-2021-mlh-fellowship-08-12-2020"}),"remote open source fellowship program"),". Last year, we launched the ",(0,r.kt)("a",c({parentName:"li"},{href:"https://reactnative.dev/docs/profile-hermes"}),"Hermes sampling profiler"),". This year, our fellows will be working with members from Hermes, React Native, and Callstack, to add support for Hermes ",(0,r.kt)("inlineCode",{parentName:"li"},"Intl")," on iOS. Stayed tuned!"))),(0,r.kt)("li",{parentName:"ul"},"We appreciate that people have been working with us to discover issues affecting the community.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"People have helped us identify critical spec divergence such as ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/212"}),"stability of ",(0,r.kt)("inlineCode",{parentName:"a"},"Array.prototype.sort"))," amended in ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/tc39/ecma262/pull/1340"}),"ES2019"),". This has been fixed and will be available in the next release."),(0,r.kt)("li",{parentName:"ul"},"People found out that our default heap size limit was too small and caused ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/295"}),"unnecessary GC pressure")," and ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/511"}),"OOM crashes")," for many users who are not familiar with customizing Hermes\u2019s GC configs. So we increased it from 512MiB to 3GiB to be more than sufficient for most users by default."),(0,r.kt)("li",{parentName:"ul"},"People also reported that our specialized ",(0,r.kt)("inlineCode",{parentName:"li"},"Function.prototype.toString")," implementation ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/471#issuecomment-820123463"}),"caused performance to drop in libraries doing improper feature detection")," and ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/hermes/issues/114#issuecomment-887106990"}),"blocked users from doing source code injecting"),". This helped us strengthen our stance that Hermes, whenever possible, should not get in the way of developers and to respect de-facto practices.")))),(0,r.kt)("h2",c({},{id:"summary"}),"Summary"),(0,r.kt)("p",null,"In summary, our vision is to make Hermes ready to be the default JavaScript engine across all React Native platforms. We\u2019ve already started working towards it, and we want to hear from all of you about this direction."),(0,r.kt)("p",null,"It\u2019s extremely important for us to prepare the ecosystem for a smooth adoption. We encourage you to try out Hermes, and file issues on our ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/hermes"}),"GitHub repository")," for any feedbacks, questions, feature requests and incompatibilities."),(0,r.kt)("h2",c({},{id:"thanks"}),"Thanks"),(0,r.kt)("p",null,"We\u2019d love to thank the Hermes team, the React Native team, and the many contributors from the React Native community for their work to improve Hermes."),(0,r.kt)("p",null,"I\u2019d also love to personally thank (in alphabetic order) Eli White, Luna Wei, Neil Dhar, Tim Yung, Tzvetan Mikov, and many others for their help during the writing."))}v.isMDXComponent=!0}}]);