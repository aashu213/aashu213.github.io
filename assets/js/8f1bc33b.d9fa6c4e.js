"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71510],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"troubleshooting",title:"Troubleshooting"},h=void 0,m={unversionedId:"troubleshooting",id:"version-0.61/troubleshooting",title:"Troubleshooting",description:"These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try searching for the issue in GitHub.",source:"@site/versioned_docs/version-0.61/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/0.61/troubleshooting",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/troubleshooting.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-0.61/docs",previous:{title:"Upgrading to new React Native versions",permalink:"/docs/0.61/upgrading"},next:{title:"Native Modules Setup",permalink:"/docs/0.61/native-modules-setup"}},f=[{value:"Port already in use",id:"port-already-in-use",children:[{value:"Terminating a process on port 8081",id:"terminating-a-process-on-port-8081",children:[],level:4},{value:"Using a port other than 8081",id:"using-a-port-other-than-8081",children:[],level:4}],level:3},{value:"NPM locking error",id:"npm-locking-error",children:[],level:3},{value:"Missing libraries for React",id:"missing-libraries-for-react",children:[{value:"React Native does not compile when being used as a CocoaPod",id:"react-native-does-not-compile-when-being-used-as-a-cocoapod",children:[],level:4},{value:"Argument list too long: recursive header expansion failed",id:"argument-list-too-long-recursive-header-expansion-failed",children:[],level:4}],level:3},{value:"No transports available",id:"no-transports-available",children:[],level:3},{value:"Shell Command Unresponsive Exception",id:"shell-command-unresponsive-exception",children:[],level:2},{value:"react-native init hangs",id:"react-native-init-hangs",children:[],level:2},{value:"Unable to start react-native package manager (on Linux)",id:"unable-to-start-react-native-package-manager-on-linux",children:[{value:"Case 1: Error &quot;code&quot;:&quot;ENOSPC&quot;,&quot;errno&quot;:&quot;ENOSPC&quot;",id:"case-1-error-codeenospcerrnoenospc",children:[],level:3}],level:2}],g={toc:f};function b(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/"}),"searching for the issue in GitHub"),"."),(0,r.kt)("h3",u({},{id:"port-already-in-use"}),"Port already in use"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",u({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"Metro bundler")," runs on port 8081. If another process is already using that port, you can either terminate that process, or change the port that the bundler uses."),(0,r.kt)("h4",u({},{id:"terminating-a-process-on-port-8081"}),"Terminating a process on port 8081"),(0,r.kt)("p",null,"Run the following command to find the id for the process that is listening on port 8081:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"$ sudo lsof -i :8081\n")),(0,r.kt)("p",null,"Then run the following to terminate the process:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"$ kill -9 <PID>\n")),(0,r.kt)("p",null,"On Windows you can find the process using port 8081 using ",(0,r.kt)("a",u({parentName:"p"},{href:"https://stackoverflow.com/questions/48198/how-can-you-find-out-which-process-is-listening-on-a-port-on-windows"}),"Resource Monitor")," and stop it using Task Manager."),(0,r.kt)("h4",u({},{id:"using-a-port-other-than-8081"}),"Using a port other than 8081"),(0,r.kt)("p",null,"You can configure the bundler to use a port other than 8081 by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"$ react-native start --port=8088\n")),(0,r.kt)("p",null,"You will also need to update your applications to load the JavaScript bundle from the new port. If running on device from Xcode, you can do this by updating occurrences of ",(0,r.kt)("inlineCode",{parentName:"p"},"8081")," to your chosen port in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/react-native/React/React.xcodeproj/project.pbxproj")," file."),(0,r.kt)("h3",u({},{id:"npm-locking-error"}),"NPM locking error"),(0,r.kt)("p",null,"If you encounter an error such as ",(0,r.kt)("inlineCode",{parentName:"p"},"npm WARN locking Error: EACCES")," while using the React Native CLI, try running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"sudo chown -R $USER ~/.npm\nsudo chown -R $USER /usr/local/lib/node_modules\n")),(0,r.kt)("h3",u({},{id:"missing-libraries-for-react"}),"Missing libraries for React"),(0,r.kt)("p",null,"If you added React Native manually to your project, make sure you have included all the relevant dependencies that you are using, like ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTText.xcodeproj"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTImage.xcodeproj"),". Next, the binaries built by these dependencies have to be linked to your app binary. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Linked Frameworks and Binaries")," section in the Xcode project settings. More detailed steps are here: ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/linking-libraries-ios#content"}),"Linking Libraries"),"."),(0,r.kt)("p",null,"If you are using CocoaPods, verify that you have added React along with the subspecs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),". For example, if you were using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<Image />")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," APIs, you would need to add these in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"pod 'React', :path => '../node_modules/react-native', :subspecs => [\n  'RCTText',\n  'RCTImage',\n  'RCTNetwork',\n  'RCTWebSocket',\n]\n")),(0,r.kt)("p",null,"Next, make sure you have run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," and that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pods/")," directory has been created in your project with React installed. CocoaPods will instruct you to use the generated ",(0,r.kt)("inlineCode",{parentName:"p"},".xcworkspace")," file henceforth to be able to use these installed dependencies."),(0,r.kt)("h4",u({},{id:"react-native-does-not-compile-when-being-used-as-a-cocoapod"}),"React Native does not compile when being used as a CocoaPod"),(0,r.kt)("p",null,"There is a CocoaPods plugin called ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/orta/cocoapods-fix-react-native"}),"cocoapods-fix-react-native")," which handles any potential post-fixing of the source code due to differences when using a dependency manager."),(0,r.kt)("h4",u({},{id:"argument-list-too-long-recursive-header-expansion-failed"}),"Argument list too long: recursive header expansion failed"),(0,r.kt)("p",null,"In the project's build settings, ",(0,r.kt)("inlineCode",{parentName:"p"},"User Search Header Paths")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Header Search Paths")," are two configs that specify where Xcode should look for ",(0,r.kt)("inlineCode",{parentName:"p"},"#import")," header files specified in the code. For Pods, CocoaPods uses a default array of specific folders to look in. Verify that this particular config is not overwritten, and that none of the folders configured are too large. If one of the folders is a large folder, Xcode will attempt to recursively search the entire directory and throw above error at some point."),(0,r.kt)("p",null,"To revert the ",(0,r.kt)("inlineCode",{parentName:"p"},"User Search Header Paths")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Header Search Paths")," build settings to their defaults set by CocoaPods - select the entry in the Build Settings panel, and hit delete. It will remove the custom override and return to the CocoaPod defaults."),(0,r.kt)("h3",u({},{id:"no-transports-available"}),"No transports available"),(0,r.kt)("p",null,"React Native implements a polyfill for WebSockets. These ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Core/InitializeCore.js"}),"polyfills")," are initialized as part of the react-native module that you include in your application through ",(0,r.kt)("inlineCode",{parentName:"p"},"import React from 'react'"),". If you load another module that requires WebSockets, such as ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/3645"}),"Firebase"),", be sure to load/require it after react-native:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"import React from 'react';\nimport Firebase from 'firebase';\n")),(0,r.kt)("h2",u({},{id:"shell-command-unresponsive-exception"}),"Shell Command Unresponsive Exception"),(0,r.kt)("p",null,"If you encounter a ShellCommandUnresponsiveException exception such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"Execution failed for task ':app:installDebug'.\n  com.android.builder.testing.api.DeviceException: com.android.ddmlib.ShellCommandUnresponsiveException\n")),(0,r.kt)("p",null,"Try ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2720"}),"downgrading your Gradle version to 1.2.3")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),"."),(0,r.kt)("h2",u({},{id:"react-native-init-hangs"}),"react-native init hangs"),(0,r.kt)("p",null,"If you run into issues where running ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native init")," hangs in your system, try running it again in verbose mode and referring to ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2797"}),"#2797")," for common causes:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"react-native init --verbose\n")),(0,r.kt)("h2",u({},{id:"unable-to-start-react-native-package-manager-on-linux"}),"Unable to start react-native package manager (on Linux)"),(0,r.kt)("h3",u({},{id:"case-1-error-codeenospcerrnoenospc"}),'Case 1: Error "code":"ENOSPC","errno":"ENOSPC"'),(0,r.kt)("p",null,"Issue caused by the number of directories ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers"}),"inotify")," (used by watchman on Linux) can monitor. To solve it, run this command in your terminal window"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")))}b.isMDXComponent=!0}}]);