"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24385],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37785:function(e,t,n){var o=n(27378),a=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return o.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return k}});var o=n(27378),a=n(14185),r=n(40488);var l=function(){const e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(18870),s=n(38944),u="tabItem_c0e5",c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&b(e,n,t[n]);return e};function f(e){var t,n,a;const{lazy:r,block:c,defaultValue:h,values:g,groupId:m,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=g?g:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.lx)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:null!=(a=null!=h?h:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=l(),[x,D]=(0,o.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=m){const e=N[m];null!=e&&e!==x&&k.some((t=>t.value===e))&&D(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),o=k[n].value;o!==x&&(O(t),D(o),null!=m&&C(m,o))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]||T[T.length-1];break}}null==t||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},k.map((({value:e,label:t,attributes:n})=>{return o.createElement("li",(a=v({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:I,onFocus:S,onClick:S},n),r={className:(0,s.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":x===e})},p(a,d(r))),null!=t?t:e);var a,r}))),r?(0,o.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,a.Z)();return o.createElement(f,v({key:String(t)},e))}},11674:function(e,t,n){var o=n(63445);const a=!!o.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!o.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=a?"ios":"android",i=a?"macos":r?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},37989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return b},metadata:function(){return v},toc:function(){return f},default:function(){return y}});var o=n(35318),a=n(65941),r=n(37785),l=n(11674),i=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&h(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&h(e,n,t[n]);return e};const m={id:"debugging",title:"Debugging"},b=void 0,v={unversionedId:"debugging",id:"version-0.64/debugging",title:"Debugging",description:"Accessing the In-App Developer Menu",source:"@site/versioned_docs/version-0.64/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/0.64/debugging",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/debugging.md",tags:[],version:"0.64",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"debugging",title:"Debugging"},sidebar:"version-0.64/docs",previous:{title:"Fast Refresh",permalink:"/docs/0.64/fast-refresh"},next:{title:"Symbolicating a stack trace",permalink:"/docs/0.64/symbolication"}},f=[{value:"Accessing the In-App Developer Menu",id:"accessing-the-in-app-developer-menu",children:[],level:2},{value:"Enabling Fast Refresh",id:"enabling-fast-refresh",children:[],level:2},{value:"Enabling Keyboard Shortcuts",id:"enabling-keyboard-shortcuts",children:[],level:2},{value:"LogBox",id:"logbox",children:[{value:"Console Errors and Warnings",id:"console-errors-and-warnings",children:[],level:3},{value:"Unhandled Errors",id:"unhandled-errors",children:[],level:3},{value:"Syntax Errors",id:"syntax-errors",children:[],level:3}],level:2},{value:"Chrome Developer Tools",id:"chrome-developer-tools",children:[{value:"Debugging using a custom JavaScript debugger",id:"debugging-using-a-custom-javascript-debugger",children:[],level:3}],level:2},{value:"Safari Developer Tools",id:"safari-developer-tools",children:[],level:2},{value:"React Developer Tools",id:"react-developer-tools",children:[{value:"Integration with React Native Inspector",id:"integration-with-react-native-inspector",children:[],level:3},{value:"Inspecting Component Instances",id:"inspecting-component-instances",children:[],level:3}],level:2},{value:"Performance Monitor",id:"performance-monitor",children:[],level:2},{value:"Debugging Application State",id:"debugging-application-state",children:[],level:2},{value:"Accessing console logs",id:"accessing-console-logs",children:[],level:2},{value:"Debugging on a device with Chrome Developer Tools",id:"debugging-on-a-device-with-chrome-developer-tools",children:[],level:2},{value:"Debugging native code",id:"debugging-native-code",children:[],level:2}],k={toc:f};function y(e){var t,i=e,{components:h}=i,m=((e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(i,["components"]);return(0,o.kt)("wrapper",(t=g(g({},k),m),s(t,u({components:h,mdxType:"MDXLayout"}))),(0,o.kt)("h2",g({},{id:"accessing-the-in-app-developer-menu"}),"Accessing the In-App Developer Menu"),(0,o.kt)("p",null,'You can access the developer menu by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ',(0,o.kt)("inlineCode",{parentName:"p"},"\u2318D")," keyboard shortcut when your app is running in the iOS Simulator, or ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318M")," when running in an Android emulator on Mac OS and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+M")," on Windows and Linux. Alternatively for Android, you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"adb shell input keyevent 82")," to open the dev menu (82 being the Menu key code)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24622).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Developer Menu is disabled in release (production) builds.")),(0,o.kt)("h2",g({},{id:"enabling-fast-refresh"}),"Enabling Fast Refresh"),(0,o.kt)("p",null,"Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. While debugging, it can help to have ",(0,o.kt)("a",g({parentName:"p"},{href:"/docs/0.64/fast-refresh"}),"Fast Refresh"),' enabled. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. When enabled, most of your edits should be visible within a second or two.'),(0,o.kt)("h2",g({},{id:"enabling-keyboard-shortcuts"}),"Enabling Keyboard Shortcuts"),(0,o.kt)("p",null,'React Native supports a few keyboard shortcuts in the iOS Simulator. They are described below. To enable them, open the Hardware menu, select Keyboard, and make sure that "Connect Hardware Keyboard" is checked.'),(0,o.kt)("h2",g({},{id:"logbox"}),"LogBox"),(0,o.kt)("p",null,"Errors and warnings in development builds are displayed in LogBox inside your app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LogBox is automatically disabled in release (production) builds.")),(0,o.kt)("h3",g({},{id:"console-errors-and-warnings"}),"Console Errors and Warnings"),(0,o.kt)("p",null,"Console errors and warnings are displayed as on-screen notifications with a red or yellow badge, and the number of errors or warning in the console respectively. To view a console error or warnings, tap the notification to view the full screen information about the log and to paginate through all of the logs in the console."),(0,o.kt)("p",null,"These notifications can be hidden using ",(0,o.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreAllLogs()"),". This is useful when giving product demos, for example. Additionally, notifications can be hidden on a per-log basis via ",(0,o.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreLogs()"),". This is useful when there's a noisy warning that cannot be fixed, like those in a third-party dependency."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ignore logs as a last resort and create a task to fix any logs that are ignored.")),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-jsx"}),"import { LogBox } from 'react-native';\n\n// Ignore log notification by message:\nLogBox.ignoreLogs(['Warning: ...']);\n\n// Ignore all log notifications:\nLogBox.ignoreAllLogs();\n")),(0,o.kt)("h3",g({},{id:"unhandled-errors"}),"Unhandled Errors"),(0,o.kt)("p",null,"Unhandled JavaScript errors such as ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined is not a function")," will automatically open a full screen LogBox error with the source of the error. These errors are dismissable and minimizable so that you can see the state of your app when these errors occur, but should always be addressed."),(0,o.kt)("h3",g({},{id:"syntax-errors"}),"Syntax Errors"),(0,o.kt)("p",null,"When syntax error occurs the full screen LogBox error will automatically open with the stack trace and location of the syntax error. This error is not dismissable because it represents invalid JavaScript execution that must be fixed before continuing with your app. To dismiss these errors, fix the syntax error and either save to automatically dismiss (with Fast Refresh enabled) or cmd+r to reload (with Fast Refresh disabled)."),(0,o.kt)("h2",g({},{id:"chrome-developer-tools"}),"Chrome Developer Tools"),(0,o.kt)("p",null,'To debug the JavaScript code in Chrome, select "Debug JS Remotely" from the Developer Menu. This will open a new tab at ',(0,o.kt)("a",g({parentName:"p"},{href:"http://localhost:8081/debugger-ui"}),"http://localhost:8081/debugger-ui"),"."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools \u2192 Developer Tools")," from the Chrome Menu to open the ",(0,o.kt)("a",g({parentName:"p"},{href:"https://developer.chrome.com/devtools"}),"Developer Tools"),". You may also access the DevTools using keyboard shortcuts (",(0,o.kt)("inlineCode",{parentName:"p"},"\u2318\u2325I")," on macOS, ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," on Windows). You may also want to enable ",(0,o.kt)("a",g({parentName:"p"},{href:"http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511"}),"Pause On Caught Exceptions")," for a better debugging experience."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: on Android, if the times between the debugger and device have drifted; things such as animation, event behavior, etc., might not work properly or the results may not be accurate. Please correct this by running ",(0,o.kt)("inlineCode",{parentName:"p"},'adb shell "date `date +%m%d%H%M%Y.%S%3N`"')," on your debugger machine. Root access is required for the use in real device.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: the React Developer Tools Chrome extension does not work with React Native, but you can use its standalone version instead. Read ",(0,o.kt)("a",g({parentName:"p"},{href:"/docs/0.64/debugging#react-developer-tools"}),"this section")," to learn how.")),(0,o.kt)("h3",g({},{id:"debugging-using-a-custom-javascript-debugger"}),"Debugging using a custom JavaScript debugger"),(0,o.kt)("p",null,"To use a custom JavaScript debugger in place of Chrome Developer Tools, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_DEBUGGER"),' environment variable to a command that will start your custom debugger. You can then select "Debug JS Remotely" from the Developer Menu to start debugging.'),(0,o.kt)("p",null,"The debugger will receive a list of all project roots, separated by a space. For example, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative"'),", then the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node /path/to/launchDebugger.js --port 2345 --type ReactNative /path/to/reactNative/app")," will be used to start your debugger."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Custom debugger commands executed this way should be short-lived processes, and they shouldn't produce more than 200 kilobytes of output.")),(0,o.kt)("h2",g({},{id:"safari-developer-tools"}),"Safari Developer Tools"),(0,o.kt)("p",null,'You can use Safari to debug the iOS version of your app without having to enable "Debug JS Remotely".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable Develop menu in Safari: ",(0,o.kt)("inlineCode",{parentName:"li"},'Preferences \u2192 Advanced \u2192 Select "Show Develop menu in menu bar"')),(0,o.kt)("li",{parentName:"ul"},"Select your app's JSContext: ",(0,o.kt)("inlineCode",{parentName:"li"},"Develop \u2192 Simulator \u2192 JSContext")),(0,o.kt)("li",{parentName:"ul"},"Safari's Web Inspector should open which has a Console and a Debugger")),(0,o.kt)("p",null,"While sourcemaps may not be enabled by default, you can follow ",(0,o.kt)("a",g({parentName:"p"},{href:"http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html"}),"this guide")," or ",(0,o.kt)("a",g({parentName:"p"},{href:"https://www.youtube.com/watch?v=GrGqIIz51k4"}),"video")," to enable them and set break points at the right places in the source code."),(0,o.kt)("p",null,'However, every time the app is reloaded (using live reload, or by manually reloading), a new JSContext is created. Choosing "Automatically Show Web Inspectors for JSContexts" saves you from having to select the latest JSContext manually.'),(0,o.kt)("h2",g({},{id:"react-developer-tools"}),"React Developer Tools"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",g({parentName:"p"},{href:"https://github.com/facebook/react/tree/master/packages/react-devtools"}),"the standalone version of React Developer Tools")," to debug the React component hierarchy. To use it, install the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," package globally:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Version 4 of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," requires ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," version 0.62 or higher to work properly.")),(0,o.kt)(a.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npm install -g react-devtools\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"yarn global add react-devtools\n")))),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," from the terminal to launch the standalone DevTools app:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"react-devtools\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools",src:n(69886).Z})),(0,o.kt)("p",null,"It should connect to your simulator within a few seconds."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: if you prefer to avoid global installations, you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," as a project dependency. Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," package to your project using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --save-dev react-devtools"),", then add ",(0,o.kt)("inlineCode",{parentName:"p"},'"react-devtools": "react-devtools"')," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," section in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run react-devtools")," from your project folder to open the DevTools.")),(0,o.kt)("h3",g({},{id:"integration-with-react-native-inspector"}),"Integration with React Native Inspector"),(0,o.kt)("p",null,'Open the in-app developer menu and choose "Toggle Inspector". It will bring up an overlay that lets you tap on any UI element and see information about it:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React Native Inspector",src:n(64383).Z})),(0,o.kt)("p",null,"However, when ",(0,o.kt)("inlineCode",{parentName:"p"},"react-devtools")," is running, Inspector will enter a collapsed mode, and instead use the DevTools as primary UI. In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools Inspector Integration",src:n(95757).Z})),(0,o.kt)("p",null,'You can choose "Toggle Inspector" in the same menu to exit this mode.'),(0,o.kt)("h3",g({},{id:"inspecting-component-instances"}),"Inspecting Component Instances"),(0,o.kt)("p",null,"When debugging JavaScript in Chrome, you can inspect the props and state of the React components in the browser console."),(0,o.kt)("p",null,"First, follow the instructions for debugging in Chrome to open the Chrome console."),(0,o.kt)("p",null,"Make sure that the dropdown in the top left corner of the Chrome console says ",(0,o.kt)("inlineCode",{parentName:"p"},"debuggerWorker.js"),". ",(0,o.kt)("strong",{parentName:"p"},"This step is essential.")),(0,o.kt)("p",null,"Then select a React component in React DevTools. There is a search box at the top that helps you find one by name. As soon as you select it, it will be available as ",(0,o.kt)("inlineCode",{parentName:"p"},"$r")," in the Chrome console, letting you inspect its props, state, and instance properties."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React DevTools Chrome Console Integration",src:n(66979).Z})),(0,o.kt)("h2",g({},{id:"performance-monitor"}),"Performance Monitor"),(0,o.kt)("p",null,'You can enable a performance overlay to help you debug performance problems by selecting "Perf Monitor" in the Developer Menu.'),(0,o.kt)("hr",{style:{marginTop:25,marginBottom:25}}),(0,o.kt)("h2",g({},{id:"debugging-application-state"}),"Debugging Application State"),(0,o.kt)("p",null,(0,o.kt)("a",g({parentName:"p"},{href:"https://github.com/infinitered/reactotron"}),"Reactotron")," is an open-source desktop app that allows you to inspect Redux or MobX-State-Tree application state as well as view custom logs, run custom commands such as resetting state, store and restore state snapshots, and other helpful debugging features for React Native apps."),(0,o.kt)("p",null,"You can view installation instructions ",(0,o.kt)("a",g({parentName:"p"},{href:"https://github.com/infinitered/reactotron"}),"in the README"),". If you're using Expo, here is an article detailing ",(0,o.kt)("a",g({parentName:"p"},{href:"https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a"}),"how to install on Expo"),"."),(0,o.kt)("h1",g({},{id:"native-debugging"}),"Native Debugging"),(0,o.kt)("div",{className:"banner-native-code-required"},(0,o.kt)("h3",null,"Projects with Native Code Only"),(0,o.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,o.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,o.kt)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"ejecting")," to use this API.")),(0,o.kt)("h2",g({},{id:"accessing-console-logs"}),"Accessing console logs"),(0,o.kt)("p",null,"You can display the console logs for an iOS or Android app by using the following commands in a terminal while the app is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npx react-native log-ios\nnpx react-native log-android\n")),(0,o.kt)("p",null,"You may also access these through ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug \u2192 Open System Log...")," in the iOS Simulator or by running ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat *:S ReactNative:V ReactNativeJS:V")," in a terminal while an Android app is running on a device or emulator."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, console logs already appear in the same terminal output as the bundler.")),(0,o.kt)("h2",g({},{id:"debugging-on-a-device-with-chrome-developer-tools"}),"Debugging on a device with Chrome Developer Tools"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, this is configured for you already.")),(0,o.kt)("p",null,"On iOS devices, open the file ",(0,o.kt)("a",g({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/CoreModules/RCTWebSocketExecutor.mm"}),(0,o.kt)("inlineCode",{parentName:"a"},"RCTWebSocketExecutor.mm")),' and change "localhost" to the IP address of your computer, then select "Debug JS Remotely" from the Developer Menu.'),(0,o.kt)("p",null,"On Android 5.0+ devices connected via USB, you can use the ",(0,o.kt)("a",g({parentName:"p"},{href:"http://developer.android.com/tools/help/adb.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"adb")," command line tool")," to setup port forwarding from the device to your computer:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"adb reverse tcp:8081 tcp:8081")),(0,o.kt)("p",null,'Alternatively, select "Dev Settings" from the Developer Menu, then update the "Debug server host for device" setting to match the IP address of your computer.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run into any issues, it may be possible that one of your Chrome extensions is interacting in unexpected ways with the debugger. Try disabling all of your extensions and re-enabling them one-by-one until you find the problematic extension.")),(0,o.kt)("h2",g({},{id:"debugging-native-code"}),"Debugging native code"),(0,o.kt)("p",null,"When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."))}y.isMDXComponent=!0},24622:function(e,t,n){t.Z=n.p+"assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png"},64383:function(e,t,n){t.Z=n.p+"assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif"},69886:function(e,t,n){t.Z=n.p+"assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png"},66979:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif"},95757:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif"}}]);