"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54616],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,h=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return m},default:function(){return v}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={id:"appregistry",title:"AppRegistry"},k=void 0,h={unversionedId:"appregistry",id:"version-0.60/appregistry",title:"AppRegistry",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.60/appregistry.md",sourceDirName:".",slug:"/appregistry",permalink:"/docs/0.60/appregistry",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appregistry.md",tags:[],version:"0.60",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"appregistry",title:"AppRegistry"},sidebar:"version-0.60/api",previous:{title:"Animated",permalink:"/docs/0.60/animated"},next:{title:"AppState",permalink:"/docs/0.60/appstate"}},m=[{value:"Methods",id:"methods",children:[{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",children:[],level:3},{value:"<code>registerConfig()</code>",id:"registerconfig",children:[],level:3},{value:"<code>registerComponent()</code>",id:"registercomponent",children:[],level:3},{value:"<code>registerRunnable()</code>",id:"registerrunnable",children:[],level:3},{value:"<code>registerSection()</code>",id:"registersection",children:[],level:3},{value:"<code>getAppKeys()</code>",id:"getappkeys",children:[],level:3},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",children:[],level:3},{value:"<code>getSections()</code>",id:"getsections",children:[],level:3},{value:"<code>getRunnable()</code>",id:"getrunnable",children:[],level:3},{value:"<code>getRegistry()</code>",id:"getregistry",children:[],level:3},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",children:[],level:3},{value:"<code>runApplication()</code>",id:"runapplication",children:[],level:3},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",children:[],level:3},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",children:[],level:3},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",children:[],level:3},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",children:[],level:3},{value:"<code>cancelHeadlessTask()</code>",id:"cancelheadlesstask",children:[],level:3}],level:2}],g={toc:m};function v(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("div",{class:"banner-native-code-required"},(0,a.kt)("h3",null,"Project with Native Code Required"),(0,a.kt)("p",null,"This API only works in projects made with ",(0,a.kt)("code",null,"react-native init"),"or in those made with ",(0,a.kt)("code",null,"expo init")," or Create React Native App which have since ejected. For more information about ejecting, please see the ",(0,a.kt)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"guide")," on the Expo documentation..")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AppRegistry")," is the JS entry point to running all React Native apps. App root components should register themselves with ",(0,a.kt)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),", then the native system can load the bundle for the app and then actually run the app when it's ready by invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"AppRegistry.runApplication"),"."),(0,a.kt)("p",null,'To "stop" an application when a view should be destroyed, call ',(0,a.kt)("inlineCode",{parentName:"p"},"AppRegistry.unmountApplicationComponentAtRootTag")," with the tag that was passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"runApplication"),". These should always be used as a pair."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AppRegistry")," should be required early in the ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," sequence to make sure the JS execution environment is setup before other modules are required."),(0,a.kt)("hr",null),(0,a.kt)("h1",d({},{id:"reference"}),"Reference"),(0,a.kt)("h2",d({},{id:"methods"}),"Methods"),(0,a.kt)("h3",d({},{id:"setwrappercomponentprovider"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setWrapperComponentProvider()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static setWrapperComponentProvider(provider)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registerconfig"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerConfig()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerConfig(config)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registercomponent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerComponent()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerComponent(appKey, componentProvider, section?)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registerrunnable"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerRunnable()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerRunnable(appKey, run)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registersection"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerSection()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerSection(appKey, component)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"getappkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getAppKeys()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getAppKeys()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"getsectionkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getSectionKeys()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getSectionKeys()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"getsections"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getSections()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getSections()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"getrunnable"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRunnable()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getRunnable(appKey)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"getregistry"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRegistry()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getRegistry()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"setcomponentproviderinstrumentationhook"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setComponentProviderInstrumentationHook()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static setComponentProviderInstrumentationHook(hook)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"runapplication"}),(0,a.kt)("inlineCode",{parentName:"h3"},"runApplication()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static runApplication(appKey, appParameters)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"unmountapplicationcomponentatroottag"}),(0,a.kt)("inlineCode",{parentName:"h3"},"unmountApplicationComponentAtRootTag()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static unmountApplicationComponentAtRootTag(rootTag)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registerheadlesstask"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerHeadlessTask()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerHeadlessTask(taskKey, taskProvider)\n")),(0,a.kt)("p",null,"Register a headless task. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"registercancellableheadlesstask"}),(0,a.kt)("inlineCode",{parentName:"h3"},"registerCancellableHeadlessTask()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static registerCancellableHeadlessTask(taskKey, taskProvider, taskCancelProvider)\n")),(0,a.kt)("p",null,"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. @param taskCancelProvider a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"startheadlesstask"}),(0,a.kt)("inlineCode",{parentName:"h3"},"startHeadlessTask()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static startHeadlessTask(taskId, taskKey, data)\n")),(0,a.kt)("p",null,"Only called from native code. Starts a headless task."),(0,a.kt)("p",null,"@param taskId the native id for this task instance to keep track of its execution @param taskKey the key for the task to start @param data the data to pass to the task"),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"cancelheadlesstask"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cancelHeadlessTask()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static cancelHeadlessTask(taskId, taskKey)\n")),(0,a.kt)("p",null,"Only called from native code. Cancels a headless task."),(0,a.kt)("p",null,"@param taskId the native id for this task instance that was used when startHeadlessTask was called @param taskKey the key for the task that was used when startHeadlessTask was called"))}v.isMDXComponent=!0}}]);