"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88229],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89800:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return d},assets:function(){return f},toc:function(){return b},default:function(){return v}});var r=a(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&c(e,a,t[a]);return e};const m={title:"React Native Open Source Update March 2019",author:"Christoph Nakazawa",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/cpojer",authorImageURL:"https://avatars2.githubusercontent.com/u/13352?s=460&v=4",authorTwitter:"cpojer",tags:["announcement"]},h=void 0,d={permalink:"/blog/2019/03/01/react-native-open-source-update",source:"@site/blog/2019-03-01-react-native-open-source-update.md",title:"React Native Open Source Update March 2019",description:"We announced our React Native Open Source roadmap in Q4 2018 after deciding to invest more in the React Native open source community.",date:"2019-03-01T00:00:00.000Z",formattedDate:"March 1, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:4.695,truncated:!1,authors:[{name:"Christoph Nakazawa",title:"Engineer at Facebook",url:"https://twitter.com/cpojer",imageURL:"https://avatars2.githubusercontent.com/u/13352?s=460&v=4"}],prevItem:{title:"Releasing React Native 0.59",permalink:"/blog/2019/03/12/releasing-react-native-059"},nextItem:{title:"The State of the React Native Community in 2018",permalink:"/blog/2019/01/07/state-of-react-native-community"}},f={authorsImageUrls:[void 0]},b=[{value:"Pull Requests",id:"pull-requests",children:[],level:3},{value:"Lean Core",id:"lean-core",children:[],level:3},{value:"Leading User Problems",id:"leading-user-problems",children:[],level:3},{value:"0.59 Release",id:"059-release",children:[],level:3},{value:"Next Steps",id:"next-steps",children:[],level:3}],g={toc:b};function v(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),c),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"We announced our ",(0,r.kt)("a",p({parentName:"p"},{href:"/blog/2018/11/01/oss-roadmap"}),"React Native Open Source roadmap")," in Q4 2018 after deciding to invest more in the React Native open source community."),(0,r.kt)("p",null,"For our first milestone, we focused on identifying and improving the most visible aspects of our community. Our goals were to reduce outstanding pull requests, reduce the project's surface area, identify leading user problems, and establish guidelines for community management."),(0,r.kt)("p",null,"In the past two months, we made more progress than we expected. Read on for more details:"),(0,r.kt)("h3",p({},{id:"pull-requests"}),"Pull Requests"),(0,r.kt)("p",null,"In order to build a healthy community, we must respond quickly to code contributions. In past years, we de-prioritized reviewing community contributions and accumulated 280 pull requests (December 2018). In the first milestone, we reduced the number of open pull requests to ~65. Simultaneously, the average number of pull requests opened per day increased from 3.5 to 7 which means we have handled about ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?page=24&q=is%3Apr+closed%3A%3E2018-12-01&utf8=%E2%9C%93"}),"600 pull requests")," in the last three months."),(0,r.kt)("p",null,"We merged ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=is%3Apr+closed%3A%3E2018-12-01+label%3A%22Merged%22+"}),"almost two-thirds")," and closed one-third of the pull requests. They were closed without being merged if they are obsolete or low quality, or if they unnecessarily increase the project's surface area. Most of the merged pull requests fixed bugs, improved cross-platform parity, or introduced new features. Notable contributions include improving type safety and the ongoing work to support AndroidX."),(0,r.kt)("p",null,"At Facebook, we run React Native from master, so we test all changes first before they make it into a React Native Release. Out of all the merged pull requests, only six caused issues: four only affected internal development and two were caught in the release candidate state."),(0,r.kt)("p",null,"One of the more visible community contributions was ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/pull/22242"}),"the updated \u201cRedBox\u201d screen"),". It's a good example of how the community is making the developer experience friendlier."),(0,r.kt)("h3",p({},{id:"lean-core"}),"Lean Core"),(0,r.kt)("p",null,"React Native currently has a very wide surface area with many unmaintained abstractions that we do not use a lot at Facebook. We are working on reducing the surface area in order to make React Native smaller and allow the community to take better care of abstractions that are mostly unused at Facebook."),(0,r.kt)("p",null,"In the first milestone, ",(0,r.kt)("a",p({parentName:"p"},{href:"https://twitter.com/reactnative/status/1093171521114247171"}),"we asked the community for help on the Lean Core project"),". The response was overwhelming and we could barely keep up with all the progress. ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/23313"}),"Check out all the work completed in less than a month"),"!"),(0,r.kt)("p",null,"What we are most excited about is that maintainers have jumped in fixing long standing issues, adding tests, and supporting long requested features. These modules are getting more support than they ever did within React Native, showing that this is a great step for the community. Examples of such projects are ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/react-native-webview"}),"WebView")," that has ",(0,r.kt)("a",p({parentName:"p"},{href:"https://twitter.com/titozzz/status/1101283928026034176"}),"received many pull requests")," since their extraction and the CLI that is now ",(0,r.kt)("a",p({parentName:"p"},{href:"https://blog.callstack.io/the-react-native-cli-has-a-new-home-79b63838f0e6"}),"maintained by members of the community")," and received much needed improvements and fixes."),(0,r.kt)("h3",p({},{id:"leading-user-problems"}),"Leading User Problems"),(0,r.kt)("p",null,"In December, we asked the community what they ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/64"}),"disliked about React Native"),". We aggregated the responses and ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/104"}),"replied to each and every problem"),". Fortunately, many of the issues that our community faces are also problems at Facebook. In our next milestone, we plan to address some of the main problems."),(0,r.kt)("p",null,"One of the highest voted problems was the developer experience of upgrading to newer versions of React Native. Unfortunately, this is not something that we experience ourselves because we run React Native from master. Thankfully, members from the community already stepped up to address this problem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/thymikee"}),"Micha\u0142 Pierzcha\u0142a")," from Callstack ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/react-native-community/react-native-cli/pull/176/files"}),"improved react-native upgrade")," by using ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/react-native-community/rn-diff-purge"}),"rn-diff-purge")," under the hood. We also updated the website to remove outdated upgrade instructions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/23563"}),"We plan on recommending CocoaPods by default for iOS projects")," which will reduce churn in project files when upgrading React Native. This will make it easier for people to install and link third-party modules which is even more important in the context of Lean Core as we expect projects to link more modules by default.")),(0,r.kt)("h3",p({},{id:"059-release"}),"0.59 Release"),(0,r.kt)("p",null,"Without the help of the React Native community, especially ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/grabbou"}),"Mike Grabowski")," and ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/kelset"}),"Lorenzo Sciandra"),", we would not be able to ship releases. We want to improve the release management process and plan to be more involved from now on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will work with community members to create a blog post for each major release."),(0,r.kt)("li",{parentName:"ul"},"We will show breaking changes directly in the CLI when people upgrade to new versions."),(0,r.kt)("li",{parentName:"ul"},"We will reduce the time it takes to make a release. We are exploring ways to increase automated testing and also creating an improved manual test plan.")),(0,r.kt)("p",null,"Many of these plans will be incorporated in the upcoming ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.59.0-rc.3"}),"React Native 0.59 release"),". 0.59 will ship with React Hooks, a new 64-bit version of JavaScriptCore for Android, and many performance and functionality improvements. It is currently published as a release candidate and is expected to be stable within the next two weeks."),(0,r.kt)("h3",p({},{id:"next-steps"}),"Next Steps"),(0,r.kt)("p",null,"For the next two months, we will continue managing pull requests ",(0,r.kt)("a",p({parentName:"p"},{href:"https://k03lwm00zo.codesandbox.io/"}),"to stay on track")," while also starting to reduce the number of outstanding GitHub issues. We will continue reducing the surface area of React Native through the Lean Core project. We plan to address 5 of the top community problems. As we finalize the community guidelines, we will turn attention to our website and documentation."),(0,r.kt)("p",null,"We are very excited to host over ten contributors from our community at Facebook London in March to help drive several of these efforts. We are glad that you are using React Native and hope that you'll see and feel the improvements we are working on in 2019. We'll be back with another update in a few months and ",(0,r.kt)("em",{parentName:"p"},"will be merging your pull requests in the meantime!")," \u269b\ufe0f\u270c\ufe0f"))}v.isMDXComponent=!0}}]);