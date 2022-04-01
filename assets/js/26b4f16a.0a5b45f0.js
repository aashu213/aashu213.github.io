"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59900],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(a),f=n,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19953:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return f},metadata:function(){return h},assets:function(){return b},toc:function(){return d},default:function(){return y}});var r=a(35318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(c)for(var a of c(t))s.call(t,a)&&u(e,a,t[a]);return e};const m={title:"The GAAD Pledge - Improving React Native Accessibility",author:"Alexandra Marlette",authorTitle:"GAAD Pledge Open Source Accessibility Community Manager for React Native",authorURL:"https://twitter.com/alexmarlette",authorImageURL:"https://avatars.githubusercontent.com/u/10052470?s=460&u=7f2304cb929d1de703856717af86324c66728f3a&v=4",authorTwitter:"alexmarlette",tags:["announcement"]},f=void 0,h={permalink:"/blog/2021/03/08/GAAD-React-Native-Accessibility",source:"@site/blog/2021-03-08-GAAD-React-Native-Accessibility.md",title:"The GAAD Pledge - Improving React Native Accessibility",description:"Hello React Native Community,",date:"2021-03-08T00:00:00.000Z",formattedDate:"March 8, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:1.695,truncated:!1,authors:[{name:"Alexandra Marlette",title:"GAAD Pledge Open Source Accessibility Community Manager for React Native",url:"https://twitter.com/alexmarlette",imageURL:"https://avatars.githubusercontent.com/u/10052470?s=460&u=7f2304cb929d1de703856717af86324c66728f3a&v=4"}],prevItem:{title:"Announcing React Native 0.64 with Hermes on iOS",permalink:"/blog/2021/03/12/version-0.64"},nextItem:{title:"React Native Documentation Update",permalink:"/blog/2020/07/23/docs-update"}},b={authorsImageUrls:[void 0]},d=[{value:"Hello React Native Community,",id:"hello-react-native-community",children:[{value:"How you can help:",id:"how-you-can-help",children:[],level:3}],level:2}],v={toc:d};function y(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),u),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h2",p({},{id:"hello-react-native-community"}),"Hello React Native Community,"),(0,r.kt)("p",null,"In May 2020 Facebook was the first company to take the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://diamond.la/GAADPledge/"}),"GAAD pledge"),", by doing so they committed to making accessibility a core part of the React Native open source project. Since May, Facebook has spent that time thoughtfully reviewing and documenting accessibility gaps within React Native. So far the gap analysis has surfaced 90 issues, all of which have been translated to ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/projects/15"}),"Github issues"),"."),(0,r.kt)("p",null,"Overall, we found that React Native APIs provide strong support for accessibility. However, we also found many core components do not yet fully utilize platform accessibility APIs and support is missing for some platform specific features."),(0,r.kt)("p",null,"The enthusiasm and diversity of contributors have always played a critical role in the development of React Native and these gaps in accessibility are great opportunities for current and new contributors. If you have been interested in contributing to React Native, we encourage you to join us in making React Native more accessible."),(0,r.kt)("p",null,"To recognize contributors for their effort, when an accessibility issue is closed and attached to a pull request, contributors will get a shout out on Twitter from our community manager. Contributors whose pull requests are accepted into the codebase will be highlighted in our monthly issues update on the React Native blog."),(0,r.kt)("p",null,"Please join us in making React Native more accessible for everyone."),(0,r.kt)("h3",p({},{id:"how-you-can-help"}),"How you can help:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New contributors should read the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md"}),"contribution guide")," and browse the list of 46 ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+first+issue%22+label%3AAccessibility"}),"good first issues")," in the React Native Github.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contributors interested in issues requiring a bit more effort should visit ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/projects/15"}),"the project page for Improved React Native Accessibility")," to see the Github issues that need their knowledge of React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Technical writers interested in updating React Native's documentation to reflect the accessibility gaps being closed should visit the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native-website#-overview"}),"React Native Docs"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Share this initiative with anyone who may be able to help!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Follow the GAAD Pledge Open Source Accessibility Community Manager for React Native on ",(0,r.kt)("a",p({parentName:"p"},{href:"https://twitter.com/alexmarlette"}),"Twitter")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.facebook.com/React-Native-Open-Source-Accessibility-Community-Manager-102732258549941"}),"Facebook")," to keep up to date on progress."))))}y.isMDXComponent=!0}}]);