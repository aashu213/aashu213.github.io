"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[15461],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return h},default:function(){return f}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"hermes",title:"Using Hermes"},m=void 0,g={unversionedId:"hermes",id:"version-0.64/hermes",title:"Using Hermes",description:"Hermes is an open-source JavaScript engine optimized for React Native. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an opt-in React Native feature, and this guide explains how to enable it.",source:"@site/versioned_docs/version-0.64/hermes.md",sourceDirName:".",slug:"/hermes",permalink:"/docs/0.64/hermes",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/hermes.md",tags:[],version:"0.64",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"hermes",title:"Using Hermes"},sidebar:"version-0.64/docs",previous:{title:"Timers",permalink:"/docs/0.64/timers"},next:{title:"Networking",permalink:"/docs/0.64/network"}},h=[{value:"Enabling Hermes",id:"enabling-hermes",children:[{value:"Android",id:"android",children:[],level:3},{value:"iOS",id:"ios",children:[],level:3}],level:2},{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",children:[],level:2},{value:"Debugging JS on Hermes using Google Chrome&#39;s DevTools",id:"debugging-js-on-hermes-using-google-chromes-devtools",children:[],level:2}],b={toc:h};function f(e){var t,a=e,{components:u}=a,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),d),o(t,i({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("a",{href:"https://hermesengine.dev"},(0,r.kt)("img",{width:300,height:300,style:{float:"right",margin:"-30px 4px 0"},src:"/docs/assets/HermesLogo.svg"})),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes")," is an open-source JavaScript engine optimized for React Native. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an ",(0,r.kt)("strong",{parentName:"p"},"opt-in")," React Native feature, and this guide explains how to enable it."),(0,r.kt)("p",null,"First, ensure you're using at least version 0.60.4 of React Native."),(0,r.kt)("p",null,"If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/upgrading"}),"Upgrading to new React Native Versions")," for how to do this. Make especially sure that all changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," have been applied, as detailed by the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.59.0"}),"React Native upgrade helper"),". After upgrading the app, make sure everything works before trying to switch to Hermes."),(0,r.kt)("blockquote",null,(0,r.kt)("h2",c({parentName:"blockquote"},{id:"note-for-rn-compatibility"}),"Note for RN compatibility."),(0,r.kt)("p",{parentName:"blockquote"},"Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/facebook/hermes/releases"}),"Hermes releases")," strictly. Version mismatch can result in instant crash of your apps in the worst case scenario.")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",c({parentName:"blockquote"},{id:"note-for-windows-users"}),"Note for Windows users."),(0,r.kt)("p",{parentName:"blockquote"},"Hermes requires ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"}),"Microsoft Visual C++ 2015 Redistributable"))),(0,r.kt)("h2",c({},{id:"enabling-hermes"}),"Enabling Hermes"),(0,r.kt)("h3",c({},{id:"android"}),"Android"),(0,r.kt)("p",null,"Edit your ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file and make the change illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-diff"}),'  project.ext.react = [\n      entryFile: "index.js",\n-     enableHermes: false  // clean and rebuild if changing\n+     enableHermes: true  // clean and rebuild if changing\n  ]\n')),(0,r.kt)("p",null,"Also, if you're using ProGuard, you will need to add these rules in ",(0,r.kt)("inlineCode",{parentName:"p"},"proguard-rules.pro")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n")),(0,r.kt)("p",null,"Next, if you've already built your app at least once, clean the build:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"$ cd android && ./gradlew clean\n")),(0,r.kt)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",c({parentName:"blockquote"},{id:"note-about-android-app-bundles"}),"Note about Android App Bundles"),(0,r.kt)("p",{parentName:"blockquote"},"Android app bundles are supported from react-native 0.62.0 and up.")),(0,r.kt)("h3",c({},{id:"ios"}),"iOS"),(0,r.kt)("p",null,"Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/Podfile")," file and make the change illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"   use_react_native!(\n     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n-    :hermes_enabled => false\n+    :hermes_enabled => true\n   )\n")),(0,r.kt)("p",null,"Next, install the Hermes pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"$ cd ios && pod install\n")),(0,r.kt)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-ios\n")),(0,r.kt)("h2",c({},{id:"confirming-hermes-is-in-use"}),"Confirming Hermes is in use"),(0,r.kt)("p",null,"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Where to find JS engine status in AwesomeProject",src:n(31554).Z})),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesInternal")," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"const isHermes = () => !!global.HermesInternal;\n")),(0,r.kt)("p",null,"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android --variant release\n")),(0,r.kt)("p",null,"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."),(0,r.kt)("h2",c({},{id:"debugging-js-on-hermes-using-google-chromes-devtools"}),"Debugging JS on Hermes using Google Chrome's DevTools"),(0,r.kt)("p",null,"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the ',(0,r.kt)("a",c({parentName:"p"},{href:"debugging#debugging-using-a-custom-javascript-debugger"}),"Debugging")," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop).")),(0,r.kt)("p",null,"Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8081"),", but this is ",(0,r.kt)("a",c({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration"}),"configurable"),". When running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," the address is written to stdout on startup."),(0,r.kt)("p",null,"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," in a Chrome browser instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure...")," button to add the Metro server address (typically ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8081")," as described above)."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure button in Chrome DevTools devices page",src:n(73605).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dialog for adding Chrome DevTools network targets",src:n(28472).Z})),(0,r.kt)("ol",c({},{start:3}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',(0,r.kt)("img",{alt:"Target inspect link",src:n(48508).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",(0,r.kt)("img",{alt:"Pause button in debug tools",src:n(71180).Z})))))}f.isMDXComponent=!0},31554:function(e,t,n){t.Z=n.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},73605:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},48508:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},28472:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},71180:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"}}]);