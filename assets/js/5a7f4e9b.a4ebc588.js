"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[47374],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var i=n(35318),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e};const u={id:"linking-libraries-ios",title:"Linking Libraries"},h=void 0,m={unversionedId:"linking-libraries-ios",id:"version-0.65/linking-libraries-ios",title:"Linking Libraries",description:"Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.",source:"@site/versioned_docs/version-0.65/linking-libraries-ios.md",sourceDirName:".",slug:"/linking-libraries-ios",permalink:"/docs/0.65/linking-libraries-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/linking-libraries-ios.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"linking-libraries-ios",title:"Linking Libraries"},sidebar:"version-0.65/docs",previous:{title:"Publishing to Google Play Store",permalink:"/docs/0.65/signed-apk-android"},next:{title:"Running On Simulator",permalink:"/docs/0.65/running-on-simulator-ios"}},f=[{value:"Here are the few steps to link your libraries that contain native code",id:"here-are-the-few-steps-to-link-your-libraries-that-contain-native-code",children:[{value:"Automatic linking",id:"automatic-linking",children:[{value:"Step 1",id:"step-1",children:[],level:4},{value:"Step 2",id:"step-2",children:[],level:4}],level:3},{value:"Manual linking",id:"manual-linking",children:[{value:"Step 1",id:"step-1-1",children:[],level:4},{value:"Step 2",id:"step-2-1",children:[],level:4},{value:"Step 3",id:"step-3",children:[],level:4}],level:3}],level:2}],k={toc:f};function b(e){var t,r=e,{components:d}=r,u=((e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(r,["components"]);return(0,i.kt)("wrapper",(t=c(c({},k),u),a(t,o({components:d,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them."),(0,i.kt)("p",null,"With that in mind we exposed many of these features as independent static libraries."),(0,i.kt)("p",null,"For most of the libs it will be as quick as dragging two files, sometimes a third step will be necessary, but no more than that."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"All the libraries we ship with React Native live on the ",(0,i.kt)("inlineCode",{parentName:"em"},"Libraries")," folder in the root of the repository. Some of them are pure JavaScript, and you only need to ",(0,i.kt)("inlineCode",{parentName:"em"},"require")," it. Other libraries also rely on some native code, in that case you'll have to add these files to your app, otherwise the app will throw an error as soon as you try to use the library.")),(0,i.kt)("h2",c({},{id:"here-are-the-few-steps-to-link-your-libraries-that-contain-native-code"}),"Here are the few steps to link your libraries that contain native code"),(0,i.kt)("h3",c({},{id:"automatic-linking"}),"Automatic linking"),(0,i.kt)("h4",c({},{id:"step-1"}),"Step 1"),(0,i.kt)("p",null,"Install a library with native dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"npm install <library-with-native-dependencies> --save\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"--save")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--save-dev")," flag is very important for this step. React Native will link your libs based on ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file.")),(0,i.kt)("h4",c({},{id:"step-2"}),"Step 2"),(0,i.kt)("p",null,"Link your native dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"npx react-native link\n")),(0,i.kt)("p",null,"Done! All libraries with native dependencies should be successfully linked to your iOS/Android project."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," If your iOS project is using CocoaPods (contains ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),") and linked library has ",(0,i.kt)("inlineCode",{parentName:"p"},"podspec")," file, then ",(0,i.kt)("inlineCode",{parentName:"p"},"npx react-native link")," will link library using Podfile. To support non-trivial Podfiles add ",(0,i.kt)("inlineCode",{parentName:"p"},"# Add new pods below this line")," comment to places where you expect pods to be added.")),(0,i.kt)("h3",c({},{id:"manual-linking"}),"Manual linking"),(0,i.kt)("h4",c({},{id:"step-1-1"}),"Step 1"),(0,i.kt)("p",null,"If the library has native code, there must be an ",(0,i.kt)("inlineCode",{parentName:"p"},".xcodeproj")," file inside its folder. Drag this file to your project on Xcode (usually under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Libraries")," group on Xcode);"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97022).Z})),(0,i.kt)("h4",c({},{id:"step-2-1"}),"Step 2"),(0,i.kt)("p",null,"Click on your main project file (the one that represents the ",(0,i.kt)("inlineCode",{parentName:"p"},".xcodeproj"),") select ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Phases")," and drag the static library from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Products")," folder inside the Library you are importing to ",(0,i.kt)("inlineCode",{parentName:"p"},"Link Binary With Libraries")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29625).Z})),(0,i.kt)("h4",c({},{id:"step-3"}),"Step 3"),(0,i.kt)("p",null,"Not every library will need this step, what you need to consider is:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Do I need to know the contents of the library at compile time?")),(0,i.kt)("p",null,"What that means is, are you using this library on the native side or only in JavaScript? If you are only using it in JavaScript, you are good to go!"),(0,i.kt)("p",null,"If you do need to call it from native, then we need to know the library's headers. To achieve that you have to go to your project's file, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Settings")," and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"Header Search Paths"),". There you should include the path to your library. (This documentation used to recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"recursive"),", but this is no longer recommended, as it can cause subtle build failures, especially with CocoaPods.)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(72896).Z})))}b.isMDXComponent=!0},29625:function(e,t,n){t.Z=n.p+"assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png"},97022:function(e,t,n){t.Z=n.p+"assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png"},72896:function(e,t,n){t.Z=n.p+"assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png"}}]);