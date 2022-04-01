"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79292],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69621:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return m},default:function(){return v}});var o=n(35318),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"debugging",title:"Debugging"},h=void 0,g={unversionedId:"debugging",id:"version-0.63/debugging",title:"Debugging",description:"Accessing the In-App Developer Menu",source:"@site/versioned_docs/version-0.63/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/0.63/debugging",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/debugging.md",tags:[],version:"0.63",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"debugging",title:"Debugging"},sidebar:"version-0.63/docs",previous:{title:"Fast Refresh",permalink:"/docs/0.63/fast-refresh"},next:{title:"Testing",permalink:"/docs/0.63/testing-overview"}},m=[{value:"Accessing the In-App Developer Menu",id:"accessing-the-in-app-developer-menu",children:[],level:2},{value:"Enabling Fast Refresh",id:"enabling-fast-refresh",children:[],level:2},{value:"Enabling Keyboard Shortcuts",id:"enabling-keyboard-shortcuts",children:[],level:2},{value:"LogBox",id:"logbox",children:[{value:"Console Errors and Warnings",id:"console-errors-and-warnings",children:[],level:3},{value:"Unhandled Errors",id:"unhandled-errors",children:[],level:3},{value:"Syntax Errors",id:"syntax-errors",children:[],level:3}],level:2},{value:"Chrome Developer Tools",id:"chrome-developer-tools",children:[{value:"Debugging using a custom JavaScript debugger",id:"debugging-using-a-custom-javascript-debugger",children:[],level:3}],level:2},{value:"Safari Developer Tools",id:"safari-developer-tools",children:[],level:2},{value:"React Developer Tools",id:"react-developer-tools",children:[{value:"Integration with React Native Inspector",id:"integration-with-react-native-inspector",children:[],level:3},{value:"Inspecting Component Instances",id:"inspecting-component-instances",children:[],level:3}],level:2},{value:"Performance Monitor",id:"performance-monitor",children:[],level:2},{value:"Debugging Application State",id:"debugging-application-state",children:[],level:2},{value:"Accessing console logs",id:"accessing-console-logs",children:[],level:2},{value:"Debugging on a device with Chrome Developer Tools",id:"debugging-on-a-device-with-chrome-developer-tools",children:[],level:2},{value:"Debugging native code",id:"debugging-native-code",children:[],level:2}],b={toc:m};function v(e){var t,a=e,{components:c}=a,d=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(a,["components"]);return(0,o.kt)("wrapper",(t=u(u({},b),d),r(t,i({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("h2",u({},{id:"accessing-the-in-app-developer-menu"}),"Accessing the In-App Developer Menu"),(0,o.kt)("p",null,'You can access the developer menu by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ',(0,o.kt)("inlineCode",{parentName:"p"},"\u2318D")," keyboard shortcut when your app is running in the iOS Simulator, or ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318M")," when running in an Android emulator on Mac OS and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+M")," on Windows and Linux. Alternatively for Android, you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"adb shell input keyevent 82")," to open the dev menu (82 being the Menu key code)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24622).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Developer Menu is disabled in release (production) builds.")),(0,o.kt)("h2",u({},{id:"enabling-fast-refresh"}),"Enabling Fast Refresh"),(0,o.kt)("p",null,"Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. While debugging, it can help to have ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/0.63/fast-refresh"}),"Fast Refresh"),' enabled. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. When enabled, most of your edits should be visible within a second or two.'),(0,o.kt)("h2",u({},{id:"enabling-keyboard-shortcuts"}),"Enabling Keyboard Shortcuts"),(0,o.kt)("p",null,'React Native supports a few keyboard shortcuts in the iOS Simulator. They are described below. To enable them, open the Hardware menu, select Keyboard, and make sure that "Connect Hardware Keyboard" is checked.'),(0,o.kt)("h2",u({},{id:"logbox"}),"LogBox"),(0,o.kt)("p",null,"Errors and warnings in development builds are displayed in LogBox inside your app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LogBox is automatically disabled in release (production) builds.")),(0,o.kt)("h3",u({},{id:"console-errors-and-warnings"}),"Console Errors and Warnings"),(0,o.kt)("p",null,"Console errors and warnings are displayed as on-screen notifications with a red or yellow badge, and the number of errors or warning in the console respectively. To view a console error or warnings, tap the notification to view the full screen information about the log and to paginate through all of the logs in the console."),(0,o.kt)("p",null,"These notifications can be hidden using ",(0,o.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreAllLogs()"),". This is useful when giving product demos, for example. Additionally, notifications can be hidden on a per-log basis via ",(0,o.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreLogs()"),". This is useful when there's a noisy warning that cannot be fixed, like those in a third-party dependency."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ignore logs as a last resort and create a task to fix any logs that are ignored.")),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { LogBox } from 'react-native';\n\n// Ignore log notification by message:\nLogBox.ignoreLogs(['Warning: ...']);\n\n// Ignore all log notifications:\nLogBox.ignoreAllLogs();\n")),(0,o.kt)("h3",u({},{id:"unhandled-errors"}),"Unhandled Errors"),(0,o.kt)("p",null,"Unhanded JavaScript errors such as ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined is not a function")," will automatically open a full screen LogBox error with the source of the error. These errors are dismissable and minimizable so that you can see the state of your app when these errors occur, but should always be addressed."),(0,o.kt)("h3",u({},{id:"syntax-errors"}),"Syntax Errors"),(0,o.kt)("p",null,"Syntax errors will automatically open a full screen LogBox error with the source of the syntax error. This error is not dismissable because it represents invalid JavaScript execution that must be fixed before continuing with your app. To dismiss these errors, fix the syntax error and either save to automatically dismiss (with Fast Refresh enabled) or cmd+r to reload (with Fast Refresh disabled)."),(0,o.kt)("h2",u({},{id:"chrome-developer-tools"}),"Chrome Developer Tools"),(0,o.kt)("p",null,'To debug the JavaScript code in Chrome, select "Debug JS Remotely" from the Developer Menu. This will open a new tab at ',(0,o.kt)("a",u({parentName:"p"},{href:"http://localhost:8081/debugger-ui"}),"http://localhost:8081/debugger-ui"),"."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools \u2192 Developer Tools")," from the Chrome Menu to open the ",(0,o.kt)("a",u({parentName:"p"},{href:"https://developer.chrome.com/devtools"}),"Developer Tools"),". You may also access the DevTools using keyboard shortcuts (",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318\u2325I")," on macOS, ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," on Windows). You may also want to enable ",(0,o.kt)("a",u({parentName:"p"},{href:"http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511"}),"Pause On Caught Exceptions")," for a better debugging experience."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the React Developer Tools Chrome extension does not work with React Native, but you can use its standalone version instead. Read ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/0.63/debugging#react-developer-tools"}),"this section")," to learn how.")),(0,o.kt)("h3",u({},{id:"debugging-using-a-custom-javascript-debugger"}),"Debugging using a custom JavaScript debugger"),(0,o.kt)("p",null,"To use a custom JavaScript debugger in place of Chrome Developer Tools, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_DEBUGGER"),' environment variable to a command that will start your custom debugger. You can then select "Debug JS Remotely" from the Developer Menu to start debugging.'),(0,o.kt)("p",null,"The debugger will receive a list of all project roots, separated by a space. For example, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative"'),", then the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node /path/to/launchDebugger.js --port 2345 --type ReactNative /path/to/reactNative/app")," will be used to start your debugger."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Custom debugger commands executed this way should be short-lived processes, and they shouldn't produce more than 200 kilobytes of output.")),(0,o.kt)("h2",u({},{id:"safari-developer-tools"}),"Safari Developer Tools"),(0,o.kt)("p",null,'You can use Safari to debug the iOS version of your app without having to enable "Debug JS Remotely".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable Develop menu in Safari: ",(0,o.kt)("inlineCode",{parentName:"li"},'Preferences \u2192 Advanced \u2192 Select "Show Develop menu in menu bar"')),(0,o.kt)("li",{parentName:"ul"},"Select your app's JSContext: ",(0,o.kt)("inlineCode",{parentName:"li"},"Develop \u2192 Simulator \u2192 JSContext")),(0,o.kt)("li",{parentName:"ul"},"Safari's Web Inspector should open which has a Console and a Debugger")),(0,o.kt)("p",null,"While sourcemaps may not be enabled by default, you can follow ",(0,o.kt)("a",u({parentName:"p"},{href:"http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html"}),"this guide")," or ",(0,o.kt)("a",u({parentName:"p"},{href:"https://www.youtube.com/watch?v=GrGqIIz51k4"}),"video")," to enable them and set break points at the right places in the source code."),(0,o.kt)("p",null,'However, every time the app is reloaded (using live reload, or by manually reloading), a new JSContext is created. Choosing "Automatically Show Web Inspectors for JSContexts" saves you from having to select the latest JSContext manually.'),(0,o.kt)("h2",u({},{id:"react-developer-tools"}),"React Developer Tools"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react/tree/master/packages/react-devtools"}),"the standalone version of React Developer Tools")," to debug the React component hierarchy. To use it, install the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," package globally:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Version 4 of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," requires ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," version 0.62 or higher to work properly.")),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"npm install -g react-devtools\n")),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," from the terminal to launch the standalone DevTools app:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{}),"react-devtools\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools",src:n(69886).Z})),(0,o.kt)("p",null,"It should connect to your simulator within a few seconds."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: if you prefer to avoid global installations, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," as a project dependency. Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," package to your project using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --save-dev react-devtools"),", then add ",(0,o.kt)("inlineCode",{parentName:"p"},'"react-devtools": "react-devtools"')," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," section in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run react-devtools")," from your project folder to open the DevTools.")),(0,o.kt)("h3",u({},{id:"integration-with-react-native-inspector"}),"Integration with React Native Inspector"),(0,o.kt)("p",null,'Open the in-app developer menu and choose "Toggle Inspector". It will bring up an overlay that lets you tap on any UI element and see information about it:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React Native Inspector",src:n(64383).Z})),(0,o.kt)("p",null,"However, when ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," is running, Inspector will enter a collapsed mode, and instead use the DevTools as primary UI. In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools Inspector Integration",src:n(95757).Z})),(0,o.kt)("p",null,'You can choose "Toggle Inspector" in the same menu to exit this mode.'),(0,o.kt)("h3",u({},{id:"inspecting-component-instances"}),"Inspecting Component Instances"),(0,o.kt)("p",null,"When debugging JavaScript in Chrome, you can inspect the props and state of the React components in the browser console."),(0,o.kt)("p",null,"First, follow the instructions for debugging in Chrome to open the Chrome console."),(0,o.kt)("p",null,"Make sure that the dropdown in the top left corner of the Chrome console says ",(0,o.kt)("inlineCode",{parentName:"p"},"debuggerWorker.js"),". ",(0,o.kt)("strong",{parentName:"p"},"This step is essential.")),(0,o.kt)("p",null,"Then select a React component in React DevTools. There is a search box at the top that helps you find one by name. As soon as you select it, it will be available as ",(0,o.kt)("inlineCode",{parentName:"p"},"$r")," in the Chrome console, letting you inspect its props, state, and instance properties."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools Chrome Console Integration",src:n(66979).Z})),(0,o.kt)("h2",u({},{id:"performance-monitor"}),"Performance Monitor"),(0,o.kt)("p",null,'You can enable a performance overlay to help you debug performance problems by selecting "Perf Monitor" in the Developer Menu.'),(0,o.kt)("hr",{style:{marginTop:"25px",marginBottom:"25px"}}),(0,o.kt)("h2",u({},{id:"debugging-application-state"}),"Debugging Application State"),(0,o.kt)("p",null,(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/infinitered/reactotron"}),"Reactotron")," is an open-source desktop app that allows you to inspect Redux or MobX-State-Tree application state as well as view custom logs, run custom commands such as resetting state, store and restore state snapshots, and other helpful debugging features for React Native apps."),(0,o.kt)("p",null,"You can view installation instructions ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/infinitered/reactotron"}),"in the README"),". If you're using Expo, here is an article detailing ",(0,o.kt)("a",u({parentName:"p"},{href:"https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a"}),"how to install on Expo"),"."),(0,o.kt)("h1",u({},{id:"native-debugging"}),"Native Debugging"),(0,o.kt)("div",{class:"banner-native-code-required"},(0,o.kt)("h3",null,"Projects with Native Code Only"),(0,o.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,o.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,o.kt)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"ejecting")," to use this API.")),(0,o.kt)("h2",u({},{id:"accessing-console-logs"}),"Accessing console logs"),(0,o.kt)("p",null,"You can display the console logs for an iOS or Android app by using the following commands in a terminal while the app is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"$ npx react-native log-ios\n$ npx react-native log-android\n")),(0,o.kt)("p",null,"You may also access these through ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug \u2192 Open System Log...")," in the iOS Simulator or by running ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat *:S ReactNative:V ReactNativeJS:V")," in a terminal while an Android app is running on a device or emulator."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, console logs already appear in the same terminal output as the bundler.")),(0,o.kt)("h2",u({},{id:"debugging-on-a-device-with-chrome-developer-tools"}),"Debugging on a device with Chrome Developer Tools"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, this is configured for you already.")),(0,o.kt)("p",null,"On iOS devices, open the file ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/RCTWebSocketExecutor.m"}),(0,o.kt)("inlineCode",{parentName:"a"},"RCTWebSocketExecutor.m")),' and change "localhost" to the IP address of your computer, then select "Debug JS Remotely" from the Developer Menu.'),(0,o.kt)("p",null,"On Android 5.0+ devices connected via USB, you can use the ",(0,o.kt)("a",u({parentName:"p"},{href:"http://developer.android.com/tools/help/adb.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"adb")," command line tool")," to setup port forwarding from the device to your computer:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"adb reverse tcp:8081 tcp:8081")),(0,o.kt)("p",null,'Alternatively, select "Dev Settings" from the Developer Menu, then update the "Debug server host for device" setting to match the IP address of your computer.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run into any issues, it may be possible that one of your Chrome extensions is interacting in unexpected ways with the debugger. Try disabling all of your extensions and re-enabling them one-by-one until you find the problematic extension.")),(0,o.kt)("h2",u({},{id:"debugging-native-code"}),"Debugging native code"),(0,o.kt)("p",null,"When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."))}v.isMDXComponent=!0},24622:function(e,t,n){t.Z=n.p+"assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png"},64383:function(e,t,n){t.Z=n.p+"assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif"},69886:function(e,t,n){t.Z=n.p+"assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png"},66979:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif"},95757:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif"}}]);