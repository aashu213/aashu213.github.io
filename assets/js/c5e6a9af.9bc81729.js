"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6700],{35318:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return m}});var r=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return i?r.createElement(h,o(o({ref:t},c),{},{components:i})):r.createElement(h,o({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},62968:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return b}});var r=i(35318),a=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&c(e,i,t[i]);if(l)for(var i of l(t))p.call(t,i)&&c(e,i,t[i]);return e};const u={id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},m=void 0,h={unversionedId:"libraries",id:"version-0.60/libraries",title:"Using Libraries",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.60/libraries.md",sourceDirName:".",slug:"/libraries",permalink:"/docs/0.60/libraries",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/libraries.md",tags:[],version:"0.60",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."}},f=[{value:"Selecting a Package Manager",id:"selecting-a-package-manager",children:[],level:2},{value:"Installing a Library",id:"installing-a-library",children:[],level:2},{value:"Linking Native Code on iOS",id:"linking-native-code-on-ios",children:[],level:2},{value:"Linking Native Code on Android",id:"linking-native-code-on-android",children:[],level:2},{value:"Finding Libraries",id:"finding-libraries",children:[],level:2},{value:"Determining Library Compatibility",id:"determining-library-compatibility",children:[{value:"Does it work with React Native?",id:"does-it-work-with-react-native",children:[],level:3},{value:"Does it work for the platforms that my app supports?",id:"does-it-work-for-the-platforms-that-my-app-supports",children:[],level:3},{value:"Does it work with my app version of React Native?",id:"does-it-work-with-my-app-version-of-react-native",children:[],level:3}],level:2}],y={toc:f};function b(e){var t,i=e,{components:a}=i,c=((e,t)=>{var i={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(i[r]=e[r]);return i})(i,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),c),n(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"React Native provides a set of built-in ",(0,r.kt)("a",d({parentName:"p"},{href:"./components-and-apis"}),"Core Components and APIs")," ready to use in your app. You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If the Core Components and APIs don't have what you are looking for, you may be able to find and install a library from the community to add the functionality to your app."),(0,r.kt)("h2",d({},{id:"selecting-a-package-manager"}),"Selecting a Package Manager"),(0,r.kt)("p",null,"React Native libraries are typically installed from the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm registry")," using a Node.js package manager such as ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.npmjs.com/cli/npm"}),"npm CLI")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"https://classic.yarnpkg.com/en/"}),"Yarn Classic"),"."),(0,r.kt)("p",null,"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\ud83d\udca1 The terms "library" and "package" are used interchangably in the JavaScript community.')),(0,r.kt)("h2",d({},{id:"installing-a-library"}),"Installing a Library"),(0,r.kt)("p",null,"To install a library in your project, navigate to your project directory in your terminal and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install <name-of-the-library>"),". Let's try this with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-webview"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm install react-native-webview\n")),(0,r.kt)("p",null,"The library that we installed includes native code, and we need to link to our app before we use it."),(0,r.kt)("h2",d({},{id:"linking-native-code-on-ios"}),"Linking Native Code on iOS"),(0,r.kt)("p",null,"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in our ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx pod-install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx pod-install\n")),(0,r.kt)("p",null,"Once this is complete, re-build the app binary to start using your new library:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx react-native run-ios\n")),(0,r.kt)("h2",d({},{id:"linking-native-code-on-android"}),"Linking Native Code on Android"),(0,r.kt)("p",null,"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx react-native run-android\n")),(0,r.kt)("h2",d({},{id:"finding-libraries"}),"Finding Libraries"),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"https://reactnative.directory"}),"React Native Directory")," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."),(0,r.kt)("p",null,"Many of the libraries you will find on the directory are from ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/"}),"React Native Community")," or ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.expo.io/versions/latest/"}),"Expo"),"."),(0,r.kt)("p",null,"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."),(0,r.kt)("p",null,"Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules"}),"react-native-unimodules")," in order to use in your React Native app."),(0,r.kt)("p",null,"After React Native Directory, the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm registry")," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."),(0,r.kt)("h2",d({},{id:"determining-library-compatibility"}),"Determining Library Compatibility"),(0,r.kt)("h3",d({},{id:"does-it-work-with-react-native"}),"Does it work with React Native?"),(0,r.kt)("p",null,"Usually libraries built ",(0,r.kt)("em",{parentName:"p"},"specifically for other platforms")," will not work with React Native. Examples include ",(0,r.kt)("inlineCode",{parentName:"p"},"react-select")," which is built for the web and specifically targets ",(0,r.kt)("inlineCode",{parentName:"p"},"react-dom"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"rimraf")," which is built for Node.js and interacts with your computer file system. Other libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," use only JavaScript language features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm uninstall")," if it turns out that it does not work in React Native."),(0,r.kt)("h3",d({},{id:"does-it-work-for-the-platforms-that-my-app-supports"}),"Does it work for the platforms that my app supports?"),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"https://reactnative.directory"}),"React Native Directory")," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."),(0,r.kt)("h3",d({},{id:"does-it-work-with-my-app-version-of-react-native"}),"Does it work with my app version of React Native?"),(0,r.kt)("p",null,"The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install <library-name>@<version-number>"),", for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install @react-native-community/netinfo@^2.0.0"),"."))}b.isMDXComponent=!0}}]);