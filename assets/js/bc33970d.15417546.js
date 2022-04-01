"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24375],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(v,o(o({ref:t},c),{},{components:a})):r.createElement(v,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37785:function(e,t,a){var r=a(27378),n=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(27378),n=a(14185),i=a(40488);var o=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(18870),s=a(38944),u="tabItem_c0e5",c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))b.call(t,a)&&f(e,a,t[a]);return e};function y(e){var t,a,n;const{lazy:i,block:c,defaultValue:m,values:v,groupId:b,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=v?v:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,l.lx)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(n=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=o(),[j,C]=(0,r.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:R}=(0,l.o5)();if(null!=b){const e=N[b];null!=e&&e!==j&&g.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),r=g[a].value;r!==j&&(R(t),C(r),null!=b&&O(b,r))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},g.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=h({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:T,onClick:T},a),i={className:(0,s.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":j===e})},p(n,d(i))),null!=t?t:e);var n,i}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function g(e){const t=(0,n.Z)();return r.createElement(y,h({key:String(t)},e))}},11674:function(e,t,a){var r=a(63445);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",l=n?"macos":i?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},95697:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return b},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return y},default:function(){return k}});var r=a(35318),n=a(65941),i=a(37785),o=a(11674),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},f=void 0,h={unversionedId:"libraries",id:"version-0.64/libraries",title:"Using Libraries",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.64/libraries.md",sourceDirName:".",slug:"/libraries",permalink:"/docs/0.64/libraries",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/libraries.md",tags:[],version:"0.64",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},sidebar:"version-0.64/docs",previous:{title:"Testing",permalink:"/docs/0.64/testing-overview"},next:{title:"Using TypeScript",permalink:"/docs/0.64/typescript"}},y=[{value:"Selecting a Package Manager",id:"selecting-a-package-manager",children:[],level:2},{value:"Installing a Library",id:"installing-a-library",children:[],level:2},{value:"Linking Native Code on iOS",id:"linking-native-code-on-ios",children:[],level:2},{value:"Linking Native Code on Android",id:"linking-native-code-on-android",children:[],level:2},{value:"Finding Libraries",id:"finding-libraries",children:[],level:2},{value:"Determining Library Compatibility",id:"determining-library-compatibility",children:[{value:"Does it work with React Native?",id:"does-it-work-with-react-native",children:[],level:3},{value:"Does it work for the platforms that my app supports?",id:"does-it-work-for-the-platforms-that-my-app-supports",children:[],level:3},{value:"Does it work with my app version of React Native?",id:"does-it-work-with-my-app-version-of-react-native",children:[],level:3}],level:2}],g={toc:y};function k(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=v(v({},g),m),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"React Native provides a set of built-in ",(0,r.kt)("a",v({parentName:"p"},{href:"./components-and-apis"}),"Core Components and APIs")," ready to use in your app. You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If the Core Components and APIs don't have what you are looking for, you may be able to find and install a library from the community to add the functionality to your app."),(0,r.kt)("h2",v({},{id:"selecting-a-package-manager"}),"Selecting a Package Manager"),(0,r.kt)("p",null,"React Native libraries are typically installed from the ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm registry")," using a Node.js package manager such as ",(0,r.kt)("a",v({parentName:"p"},{href:"https://docs.npmjs.com/cli/npm"}),"npm CLI")," or ",(0,r.kt)("a",v({parentName:"p"},{href:"https://classic.yarnpkg.com/en/"}),"Yarn Classic"),"."),(0,r.kt)("p",null,"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\ud83d\udca1 The terms "library" and "package" are used interchangeably in the JavaScript community.')),(0,r.kt)("h2",v({},{id:"installing-a-library"}),"Installing a Library"),(0,r.kt)("p",null,"To install a library in your project, navigate to your project directory in your terminal and run the installation command. Let's try this with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-webview"),":"),(0,r.kt)(n.Z,{groupId:"package-manager",defaultValue:o.Z.defaultPackageManager,values:o.Z.packageManagers,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-shell"}),"npm install react-native-webview\n"))),(0,r.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-shell"}),"yarn add react-native-webview\n")))),(0,r.kt)("p",null,"The library that we installed includes native code, and we need to link to our app before we use it."),(0,r.kt)("h2",v({},{id:"linking-native-code-on-ios"}),"Linking Native Code on iOS"),(0,r.kt)("p",null,"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in our ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx pod-install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-bash"}),"npx pod-install\n")),(0,r.kt)("p",null,"Once this is complete, re-build the app binary to start using your new library:"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-bash"}),"npx react-native run-ios\n")),(0,r.kt)("h2",v({},{id:"linking-native-code-on-android"}),"Linking Native Code on Android"),(0,r.kt)("p",null,"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-bash"}),"npx react-native run-android\n")),(0,r.kt)("h2",v({},{id:"finding-libraries"}),"Finding Libraries"),(0,r.kt)("p",null,(0,r.kt)("a",v({parentName:"p"},{href:"https://reactnative.directory"}),"React Native Directory")," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."),(0,r.kt)("p",null,"Many of the libraries you will find on the directory are from ",(0,r.kt)("a",v({parentName:"p"},{href:"https://github.com/react-native-community/"}),"React Native Community")," or ",(0,r.kt)("a",v({parentName:"p"},{href:"https://docs.expo.io/versions/latest/"}),"Expo"),"."),(0,r.kt)("p",null,"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."),(0,r.kt)("p",null,"Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",(0,r.kt)("a",v({parentName:"p"},{href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules"}),"react-native-unimodules")," in order to use in your React Native app."),(0,r.kt)("p",null,"After React Native Directory, the ",(0,r.kt)("a",v({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm registry")," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."),(0,r.kt)("h2",v({},{id:"determining-library-compatibility"}),"Determining Library Compatibility"),(0,r.kt)("h3",v({},{id:"does-it-work-with-react-native"}),"Does it work with React Native?"),(0,r.kt)("p",null,"Usually libraries built ",(0,r.kt)("em",{parentName:"p"},"specifically for other platforms")," will not work with React Native. Examples include ",(0,r.kt)("inlineCode",{parentName:"p"},"react-select")," which is built for the web and specifically targets ",(0,r.kt)("inlineCode",{parentName:"p"},"react-dom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"rimraf")," which is built for Node.js and interacts with your computer file system. Other libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," use only JavaScript language features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm uninstall")," if it turns out that it does not work in React Native."),(0,r.kt)("h3",v({},{id:"does-it-work-for-the-platforms-that-my-app-supports"}),"Does it work for the platforms that my app supports?"),(0,r.kt)("p",null,(0,r.kt)("a",v({parentName:"p"},{href:"https://reactnative.directory"}),"React Native Directory")," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."),(0,r.kt)("h3",v({},{id:"does-it-work-with-my-app-version-of-react-native"}),"Does it work with my app version of React Native?"),(0,r.kt)("p",null,"The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install <library-name>@<version-number>"),", for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install @react-native-community/netinfo@^2.0.0"),"."))}k.isMDXComponent=!0}}]);