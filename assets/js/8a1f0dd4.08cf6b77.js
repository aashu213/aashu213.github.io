"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44568],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return d},assets:function(){return f},toc:function(){return b},default:function(){return v}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Announcing React Native 0.64 with Hermes on iOS",author:"Mike Grabowski",authorTitle:"CTO and Co-Founder at Callstack",authorURL:"https://twitter.com/grabbou",authorImageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4",authorTwitter:"grabbou",tags:["announcement","release"]},h=void 0,d={permalink:"/blog/2021/03/12/version-0.64",source:"@site/blog/2021-03-12-version-0.64.md",title:"Announcing React Native 0.64 with Hermes on iOS",description:"Today we\u2019re releasing React Native 0.64 that ships with support for Hermes on iOS.",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:3.15,truncated:!1,authors:[{name:"Mike Grabowski",title:"CTO and Co-Founder at Callstack",url:"https://twitter.com/grabbou",imageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4"}],prevItem:{title:"The GAAD Pledge - March Accessibility Issues Update",permalink:"/blog/2021/04/08/GAAD-March-Accessibility-Issue-Update"},nextItem:{title:"The GAAD Pledge - Improving React Native Accessibility",permalink:"/blog/2021/03/08/GAAD-React-Native-Accessibility"}},f={authorsImageUrls:[void 0]},b=[{value:"Hermes opt-in on iOS",id:"hermes-opt-in-on-ios",children:[],level:2},{value:"Inline Requires enabled by default",id:"inline-requires-enabled-by-default",children:[],level:2},{value:"View Hermes traces with Chrome",id:"view-hermes-traces-with-chrome",children:[],level:2},{value:"Hermes with Proxy Support",id:"hermes-with-proxy-support",children:[],level:2},{value:"React 17",id:"react-17",children:[],level:2},{value:"Major Dependency Version Changes",id:"major-dependency-version-changes",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],g={toc:b};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Today we\u2019re releasing React Native 0.64 that ships with support for Hermes on iOS."),(0,r.kt)("h2",c({},{id:"hermes-opt-in-on-ios"}),"Hermes opt-in on iOS"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes")," is an open source JavaScript engine optimized for running React Native. It improves performance by decreasing memory utilization, reducing download size and decreasing the time it takes for the app to become usable or \u201ctime to interactive\u201d (TTI)."),(0,r.kt)("p",null,"With this release, we are happy to announce that you can now use Hermes to build on iOS as well. To enable Hermes on iOS, set ",(0,r.kt)("inlineCode",{parentName:"p"},"hermes_enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ruby"}),"use_react_native!(\n   :path => config[:reactNativePath],\n   # to enable hermes on iOS, change `false` to `true` and then install pods\n   :hermes_enabled => true\n)\n")),(0,r.kt)("p",null,"Please keep in mind that Hermes support on iOS is still early stage. We are keeping it as an opt-in as we are running further benchmarking. We encourage you to try it on your own applications and let us know how it is working out for you!"),(0,r.kt)("h2",c({},{id:"inline-requires-enabled-by-default"}),"Inline Requires enabled by default"),(0,r.kt)("p",null,"Inline Requires is a Metro configuration option that improves startup time by delaying execution of JavaScript modules until they are used, instead of at startup."),(0,r.kt)("p",null,"This feature has existed and been recommended for a few years as an opt-in configuration option, listed in the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/performance"}),"Performance section of our documentation"),". We are now enabling this option by default for new applications to help people have fast React Native applications without extra configuration."),(0,r.kt)("p",null,"Inline Requires is a Babel transform that takes module imports and converts them to be inline. As an example, Inline Requires transforms this module import call from being at the top of the file to where it is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before:")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"import { MyFunction } from 'my-module';\n\nconst MyComponent = (props) => {\n  const result = MyFunction();\n\n  return <Text>{result}</Text>;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After:")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"const MyComponent = (props) => {\n  const result = require('my-module').MyFunction();\n\n  return <Text>{result}</Text>;\n};\n")),(0,r.kt)("p",null,"More information about Inline Requires is available in the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/ram-bundles-inline-requires#inline-requires"}),"Performance documentation"),"."),(0,r.kt)("h2",c({},{id:"view-hermes-traces-with-chrome"}),"View Hermes traces with Chrome"),(0,r.kt)("p",null,"Over the last year Facebook has sponsored the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://fellowship.mlh.io/"}),"Major League Hacking fellowship"),", supporting contributions to React Native. ",(0,r.kt)("a",c({parentName:"p"},{href:"https://twitter.com/jessie_anh_ng"}),"Jessie Nguyen")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"https://twitter.com/saphalinsaan"}),"Saphal Patro")," added the ability to use the Performance tab on Chrome DevTools to visualize the execution of your application when it is using Hermes."),(0,r.kt)("p",null,"For more information, check out the ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/profile-hermes#record-a-hermes-sampling-profile"}),"new documentation page"),"."),(0,r.kt)("h2",c({},{id:"hermes-with-proxy-support"}),"Hermes with Proxy Support"),(0,r.kt)("p",null,"We have added Proxy support to Hermes, enabling compatibility with popular community projects like react-native-firebase and mobx. If you have been using these packages you can now migrate to Hermes for your project."),(0,r.kt)("p",null,"We plan to make Hermes the default JavaScript engine for Android in a coming release so we are working to resolve the remaining issues people have when using Hermes. Please open an issue on the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/hermes"}),"Hermes GitHub repo")," if there are remaining issues holding back your app from adopting Hermes."),(0,r.kt)("h2",c({},{id:"react-17"}),"React 17"),(0,r.kt)("p",null,"React 17 does not include new developer-facing features or major breaking changes. For React Native applications, the main change is a ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"}),"new JSX transform")," enabling files to no longer need to import React to be able to use JSX."),(0,r.kt)("p",null,"More information about React 17 is available ",(0,r.kt)("a",c({parentName:"p"},{href:"https://reactjs.org/blog/2020/10/20/react-v17.html"}),"on the React blog"),"."),(0,r.kt)("h2",c({},{id:"major-dependency-version-changes"}),"Major Dependency Version Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dropped Android API levels 16-20. The Facebook app consistently drops support for Android versions with sufficiently low usage. As the Facebook app no longer supports these versions and is React Native\u2019s main testing surface, React Native is dropping support as well."),(0,r.kt)("li",{parentName:"ul"},"Xcode 12 and CocoaPods 1.10 are required"),(0,r.kt)("li",{parentName:"ul"},"Minimum Node support bumped from 10 to Node 12"),(0,r.kt)("li",{parentName:"ul"},"Flipper bumped to 0.75.1")),(0,r.kt)("h2",c({},{id:"thanks"}),"Thanks"),(0,r.kt)("p",null,"Thank you to the hundreds of contributors that helped make 0.64 possible! The ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0640"}),"0.64 changelog")," includes all of the changes included in this release."))}v.isMDXComponent=!0}}]);