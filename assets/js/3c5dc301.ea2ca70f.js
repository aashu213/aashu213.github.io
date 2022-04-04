"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2815],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},assets:function(){return f},toc:function(){return g},default:function(){return k}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={title:"Introducing Button, Faster Installs with Yarn, and a Public Roadmap",author:"H\xe9ctor Ramos",authorTitle:"Developer Advocate at Facebook",authorURL:"https://twitter.com/hectorramos",authorImageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128",authorTwitter:"hectorramos",tags:["announcement"]},h=void 0,m={permalink:"/blog/2016/11/08/introducing-button-yarn-and-a-public-roadmap",source:"@site/blog/2016-11-08-introducing-button-yarn-and-a-public-roadmap.md",title:"Introducing Button, Faster Installs with Yarn, and a Public Roadmap",description:"We have heard from many people that there is so much work happening with React Native, it can be tough to keep track of what's going on. To help communicate what work is in progress, we are now publishing a roadmap for React Native. At a high level, this work can be broken down into three priorities:",date:"2016-11-08T00:00:00.000Z",formattedDate:"November 8, 2016",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:2.53,truncated:!1,authors:[{name:"H\xe9ctor Ramos",title:"Developer Advocate at Facebook",url:"https://twitter.com/hectorramos",imageURL:"https://s.gravatar.com/avatar/f2223874e66e884c99087e452501f2da?s=128"}],prevItem:{title:"Easier Upgrades Thanks to Git",permalink:"/blog/2016/12/05/easier-upgrades"},nextItem:{title:"0.36: Headless JS, the Keyboard API, & more",permalink:"/blog/2016/10/25/0.36-headless-js-the-keyboard-api-and-more"}},f={authorsImageUrls:[void 0]},g=[{value:"What&#39;s new in React Native",id:"whats-new-in-react-native",children:[],level:2},{value:"Introducing Button",id:"introducing-button",children:[],level:2},{value:"Speed up <code>react-native init</code> using Yarn",id:"speed-up-react-native-init-using-yarn",children:[],level:2},{value:"Thank you!",id:"thank-you",children:[],level:2}],b={toc:g};function k(e){var t,r=e,{components:u}=r,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},b),d),o(t,i({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"We have heard from many people that there is so much work happening with React Native, it can be tough to keep track of what's going on. To help communicate what work is in progress, we are now publishing a ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/wiki/Roadmap"}),"roadmap for React Native"),". At a high level, this work can be broken down into three priorities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Core Libraries"),". Adding more functionality to the most useful components and APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stability"),". Improve the underlying infrastructure to reduce bugs and improve code quality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Developer Experience"),". Help React Native developers move faster")),(0,a.kt)("p",null,"If you have suggestions for features that you think would be valuable on the roadmap, check out ",(0,a.kt)("a",p({parentName:"p"},{href:"https://react-native.canny.io/feature-requests"}),"Canny"),", where you can suggest new features and discuss existing proposals."),(0,a.kt)("h2",p({},{id:"whats-new-in-react-native"}),"What's new in React Native"),(0,a.kt)("p",null,(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.37.0"}),"Version 0.37 of React Native"),", released today, introduces a new core component to make it really easy to add a touchable Button to any app. We're also introducing support for the new ",(0,a.kt)("a",p({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn")," package manager, which should speed up the whole process of updating your app's dependencies."),(0,a.kt)("h2",p({},{id:"introducing-button"}),"Introducing Button"),(0,a.kt)("p",null,"Today we're introducing a basic ",(0,a.kt)("inlineCode",{parentName:"p"},"<Button />")," component that looks great on every platform. This addresses one of the most common pieces of feedback we get: React Native is one of the only mobile development toolkits without a button ready to use out of the box."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple Button on Android, iOS",src:n(49848).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),'<Button\n  onPress={onPressMe}\n  title="Press Me"\n  accessibilityLabel="Learn more about this Simple Button"\n/>\n')),(0,a.kt)("p",null,"Experienced React Native developers know how to make a button: use TouchableOpacity for the default look on iOS, TouchableNativeFeedback for the ripple effect on Android, then apply a few styles. Custom buttons aren't particularly hard to build or install, but we aim to make React Native radically easy to learn. With the addition of a basic button into core, newcomers will be able to develop something awesome in their first day, rather than spending that time formatting a Button and learning about Touchable nuances."),(0,a.kt)("p",null,"Button is meant to work great and look native on every platform, so it won't support all the bells and whistles that custom buttons do. It is a great starting point, but is not meant to replace all your existing buttons. To learn more, check out the ",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/button"}),"new Button documentation"),", complete with a runnable example!"),(0,a.kt)("h2",p({},{id:"speed-up-react-native-init-using-yarn"}),"Speed up ",(0,a.kt)("inlineCode",{parentName:"h2"},"react-native init")," using Yarn"),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("a",p({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn"),", the new package manager for JavaScript, to speed up ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native init")," significantly. To see the speedup please ",(0,a.kt)("a",p({parentName:"p"},{href:"https://yarnpkg.com/en/docs/install"}),"install yarn")," and upgrade your ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-cli")," to 1.2.0:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"$ npm install -g react-native-cli\n")),(0,a.kt)("p",null,"You should now see \u201cUsing yarn\u201d when setting up new apps:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Using yarn",src:n(47309).Z})),(0,a.kt)("p",null,"In simple local testing ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native init")," finished in ",(0,a.kt)("strong",{parentName:"p"},"about 1 minute on a good network")," (vs around 3 minutes when using npm 3.10.8). Installing yarn is optional but highly recommended."),(0,a.kt)("h2",p({},{id:"thank-you"}),"Thank you!"),(0,a.kt)("p",null,"We'd like to thank everyone who contributed to this release. The full ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.37.0"}),"release notes")," are now available on GitHub. With over two dozen bug fixes and new features, React Native just keeps getting better thanks to you."))}k.isMDXComponent=!0},49848:function(e,t,n){t.Z=n.p+"assets/images/button-android-ios-98b790d121cd61296c5a6cb9fc07b785.png"},47309:function(e,t,n){t.Z=n.p+"assets/images/yarn-rncli-d93f59d7944c402a86c49acbd5b91ad5.png"}}]);