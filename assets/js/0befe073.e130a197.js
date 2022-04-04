"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[50990],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,b=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return b},toc:function(){return h},default:function(){return g}});var r=n(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={id:"publishing-to-app-store",title:"Publishing to Apple App Store"},f=void 0,b={unversionedId:"publishing-to-app-store",id:"version-0.68/publishing-to-app-store",title:"Publishing to Apple App Store",description:"The publishing process is the same as any other native iOS app, with some additional considerations to take into account.",source:"@site/versioned_docs/version-0.68/publishing-to-app-store.md",sourceDirName:".",slug:"/publishing-to-app-store",permalink:"/docs/publishing-to-app-store",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/publishing-to-app-store.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"publishing-to-app-store",title:"Publishing to Apple App Store"}},h=[{value:"1. Enable App Transport Security",id:"1-enable-app-transport-security",children:[],level:3},{value:"2. Configure release scheme",id:"2-configure-release-scheme",children:[{value:"Pro Tips",id:"pro-tips",children:[],level:4}],level:3},{value:"3. Build app for release",id:"3-build-app-for-release",children:[],level:3}],m={toc:h};function g(e){var t,o=e,{components:u}=o,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=c(c({},m),d),i(t,a({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The publishing process is the same as any other native iOS app, with some additional considerations to take into account."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using Expo then read the Expo Guide for ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.expo.io/versions/latest/distribution/building-standalone-apps/"}),"Building Standalone Apps"),".")),(0,r.kt)("h3",c({},{id:"1-enable-app-transport-security"}),"1. Enable App Transport Security"),(0,r.kt)("p",null,"App Transport Security is a security feature introduced in iOS 9 that rejects all HTTP requests that are not sent over HTTPS. This can result in HTTP traffic being blocked, including the developer React Native server. ATS is disabled for ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," by default in React Native projects in order to make development easier."),(0,r.kt)("p",null,"You should re-enable ATS prior to building your app for production by removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," entry from the ",(0,r.kt)("inlineCode",{parentName:"p"},"NSExceptionDomains")," dictionary and setting ",(0,r.kt)("inlineCode",{parentName:"p"},"NSAllowsArbitraryLoads")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder. You can also re-enable ATS from within Xcode by opening your target properties under the Info pane and editing the App Transport Security Settings entry."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your application needs to access HTTP resources on production, learn how to configure ATS on your project.")),(0,r.kt)("h3",c({},{id:"2-configure-release-scheme"}),"2. Configure release scheme"),(0,r.kt)("p",null,"Building an app for distribution in the App Store requires using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," scheme in Xcode. Apps built for ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," will automatically disable the in-app Developer menu, which will prevent your users from inadvertently accessing the menu in production. It will also bundle the JavaScript locally, so you can put the app on a device and test whilst not connected to the computer."),(0,r.kt)("p",null,"To configure your app to be built using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," scheme, go to ",(0,r.kt)("strong",{parentName:"p"},"Product")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Scheme")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Edit Scheme"),". Select the ",(0,r.kt)("strong",{parentName:"p"},"Run")," tab in the sidebar, then set the Build Configuration dropdown to ",(0,r.kt)("inlineCode",{parentName:"p"},"Release"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29319).Z})),(0,r.kt)("h4",c({},{id:"pro-tips"}),"Pro Tips"),(0,r.kt)("p",null,"As your App Bundle grows in size, you may start to see a blank screen flash between your splash screen and the display of your root application view. If this is the case, you can add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"AppDelegate.m")," in order to keep your splash screen displayed during the transition."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-objectivec"}),'  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"\n  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];\n  UIViewController *vc = [sb instantiateInitialViewController];\n  rootView.loadingView = vc.view;\n')),(0,r.kt)("p",null,"The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle React Native code and images"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-shell"}),' if [ "${CONFIGURATION}" == "Debug" ]; then\n  export SKIP_BUNDLING=true\n fi\n')),(0,r.kt)("h3",c({},{id:"3-build-app-for-release"}),"3. Build app for release"),(0,r.kt)("p",null,"You can now build your app for release by tapping ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2318B")," or selecting ",(0,r.kt)("strong",{parentName:"p"},"Product")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Build")," from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"React Native CLI")," to perform this operation using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--configuration")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native run-ios --configuration Release"),").")))}g.isMDXComponent=!0},29319:function(e,t,n){t.Z=n.p+"assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png"}}]);