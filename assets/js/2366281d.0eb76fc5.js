"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3082],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64948:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return h},default:function(){return k}});var o=t(35318),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&c(e,t,n[t]);return e};const u={id:"platform-specific-code",title:"Platform Specific Code"},m=void 0,f={unversionedId:"platform-specific-code",id:"platform-specific-code",title:"Platform Specific Code",description:"When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for Android and iOS.",source:"@site/../docs/platform-specific-code.md",sourceDirName:".",slug:"/platform-specific-code",permalink:"/docs/next/platform-specific-code",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/platform-specific-code.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"platform-specific-code",title:"Platform Specific Code"}},h=[{value:"Platform module",id:"platform-module",children:[{value:"Detecting the Android version",id:"detecting-the-android-version",children:[],level:3},{value:"Detecting the iOS version",id:"detecting-the-ios-version",children:[],level:3}],level:2},{value:"Platform-specific extensions",id:"platform-specific-extensions",children:[],level:2},{value:"Native-specific extensions (i.e. sharing code with NodeJS and Web)",id:"native-specific-extensions-ie-sharing-code-with-nodejs-and-web",children:[],level:2}],g={toc:h};function k(e){var n,t=e,{components:r}=t,c=((e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=d(d({},g),c),a(n,i({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"When building a cross-platform app, you'll want to re-use as much code as possible. Scenarios may arise where it makes sense for the code to be different, for example you may want to implement separate visual components for Android and iOS."),(0,o.kt)("p",null,"React Native provides two ways to organize your code and separate it by platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("a",d({parentName:"li"},{href:"/docs/next/platform-specific-code#platform-module"}),(0,o.kt)("inlineCode",{parentName:"a"},"Platform")," module"),"."),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",d({parentName:"li"},{href:"/docs/next/platform-specific-code#platform-specific-extensions"}),"platform-specific file extensions"),".")),(0,o.kt)("p",null,"Certain components may have properties that work on one platform only. All of these props are annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@platform")," and have a small badge next to them on the website."),(0,o.kt)("h2",d({},{id:"platform-module"}),"Platform module"),(0,o.kt)("p",null,"React Native provides a module that detects the platform in which the app is running. You can use the detection logic to implement platform-specific code. Use this option when only small parts of a component are platform-specific."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  height: Platform.OS === 'ios' ? 200 : 100\n});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Platform.OS")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," when running on iOS and ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," when running on Android."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.select")," method available, that given an object where keys can be one of ",(0,o.kt)("inlineCode",{parentName:"p"},"'ios' | 'android' | 'native' | 'default'"),", returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," keys will take preference. If those are not specified, ",(0,o.kt)("inlineCode",{parentName:"p"},"native")," key will be used and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," key."),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      ios: {\n        backgroundColor: 'red'\n      },\n      android: {\n        backgroundColor: 'green'\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue'\n      }\n    })\n  }\n});\n")),(0,o.kt)("p",null,"This will result in a container having ",(0,o.kt)("inlineCode",{parentName:"p"},"flex: 1")," on all platforms, a red background color on iOS, a green background color on Android, and a blue background color on other platforms."),(0,o.kt)("p",null,"Since it accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," value, you can also use it to return platform-specific components, like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid')\n})();\n\n<Component />;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb')\n})();\n\n<Component />;\n")),(0,o.kt)("h3",d({},{id:"detecting-the-android-version"}),"Detecting the Android version"),(0,o.kt)("p",null,"On Android, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform")," module can also be used to detect the version of the Android Platform in which the app is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\n\nif (Platform.Version === 25) {\n  console.log('Running on Nougat!');\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Version")," is set to the Android API version not the Android OS version. To find a mapping please refer to ",(0,o.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Android_version_history#Overview"}),"Android Version History"),"."),(0,o.kt)("h3",d({},{id:"detecting-the-ios-version"}),"Detecting the iOS version"),(0,o.kt)("p",null,"On iOS, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Version")," is a result of ",(0,o.kt)("inlineCode",{parentName:"p"},"-[UIDevice systemVersion]"),', which is a string with the current version of the operating system. An example of the system version is "10.3". For example, to detect the major version number on iOS:'),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\n\nconst majorVersionIOS = parseInt(Platform.Version, 10);\nif (majorVersionIOS <= 9) {\n  console.log('Work around a change in behavior');\n}\n")),(0,o.kt)("h2",d({},{id:"platform-specific-extensions"}),"Platform-specific extensions"),(0,o.kt)("p",null,"When your platform-specific code is more complex, you should consider splitting the code out into separate files. React Native will detect when a file has a ",(0,o.kt)("inlineCode",{parentName:"p"},".ios.")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".android.")," extension and load the relevant platform file when required from other components."),(0,o.kt)("p",null,"For example, say you have the following files in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"BigButton.ios.js\nBigButton.android.js\n")),(0,o.kt)("p",null,"You can then require the component as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import BigButton from './BigButton';\n")),(0,o.kt)("p",null,"React Native will automatically pick up the right file based on the running platform."),(0,o.kt)("h2",d({},{id:"native-specific-extensions-ie-sharing-code-with-nodejs-and-web"}),"Native-specific extensions (i.e. sharing code with NodeJS and Web)"),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},".native.js")," extension when a module needs to be shared between NodeJS/Web and React Native but it has no Android/iOS differences. This is especially useful for projects that have common code shared among React Native and ReactJS."),(0,o.kt)("p",null,"For example, say you have the following files in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"Container.js # picked up by Webpack, Rollup or any other Web bundler\nContainer.native.js # picked up by the React Native bundler for both Android and iOS (Metro)\n")),(0,o.kt)("p",null,"You can still require it without the ",(0,o.kt)("inlineCode",{parentName:"p"},".native")," extension, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import Container from './Container';\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pro tip:")," Configure your Web bundler to ignore ",(0,o.kt)("inlineCode",{parentName:"p"},".native.js")," extensions in order to avoid having unused code in your production bundle, thus reducing the final bundle size."))}k.isMDXComponent=!0}}]);