"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9089],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81837:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return y},default:function(){return b}});var r=t(35318),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))l.call(n,t)&&s(e,t,n[t]);return e};const f={id:"running-on-simulator-ios",title:"Running On Simulator"},d=void 0,m={unversionedId:"running-on-simulator-ios",id:"version-0.65/running-on-simulator-ios",title:"Running On Simulator",description:"Starting the simulator",source:"@site/versioned_docs/version-0.65/running-on-simulator-ios.md",sourceDirName:".",slug:"/running-on-simulator-ios",permalink:"/docs/0.65/running-on-simulator-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/running-on-simulator-ios.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"running-on-simulator-ios",title:"Running On Simulator"},sidebar:"version-0.65/docs",previous:{title:"Linking Libraries",permalink:"/docs/0.65/linking-libraries-ios"},next:{title:"Communication between native and React Native",permalink:"/docs/0.65/communication-ios"}},y=[{value:"Starting the simulator",id:"starting-the-simulator",children:[],level:2},{value:"Specifying a device",id:"specifying-a-device",children:[],level:2}],v={toc:y};function b(e){var n,t=e,{components:i}=t,s=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},v),s),o(n,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h2",p({},{id:"starting-the-simulator"}),"Starting the simulator"),(0,r.kt)("p",null,"Once you have your React Native project initialized, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native run-ios")," inside the newly created project directory. If everything is set up correctly, you should see your new app running in the iOS Simulator shortly."),(0,r.kt)("h2",p({},{id:"specifying-a-device"}),"Specifying a device"),(0,r.kt)("p",null,"You can specify the device the simulator should run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--simulator")," flag, followed by the device name as a string. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"iPhone 11"'),". If you wish to run your app on an iPhone SE (1st generation), run ",(0,r.kt)("inlineCode",{parentName:"p"},'npx react-native run-ios --simulator="iPhone SE (1st generation)"'),"."),(0,r.kt)("p",null,"The device names correspond to the list of devices available in Xcode. You can check your available devices by running ",(0,r.kt)("inlineCode",{parentName:"p"},"xcrun simctl list devices")," from the console."))}b.isMDXComponent=!0}}]);