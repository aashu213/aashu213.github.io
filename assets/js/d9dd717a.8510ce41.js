"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25795],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},s),{},{components:a})):r.createElement(h,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34374:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return h},assets:function(){return f},toc:function(){return v},default:function(){return k}});var r=a(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&s(e,a,t[a]);return e};const m={title:"Announcing React Native 0.62 with Flipper",author:"Rick Hanlon",authorTitle:"React Native Core at Facebook",authorURL:"https://twitter.com/rickhanlonii",authorImageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4",authorTwitter:"rickhanlonii",tags:["announcement","release"]},d=void 0,h={permalink:"/blog/2020/03/26/version-0.62",source:"@site/blog/2020-03-26-version-0.62.md",title:"Announcing React Native 0.62 with Flipper",description:"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default.",date:"2020-03-26T00:00:00.000Z",formattedDate:"March 26, 2020",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.27,truncated:!1,authors:[{name:"Rick Hanlon",title:"React Native Core at Facebook",url:"https://twitter.com/rickhanlonii",imageURL:"https://avatars3.githubusercontent.com/u/2440089?s=460&v=4"}],prevItem:{title:"Announcing React Native 0.63 with LogBox",permalink:"/blog/2020/07/06/version-0.63"},nextItem:{title:"Meet Doctor, a new React Native command",permalink:"/blog/2019/11/18/react-native-doctor"}},f={authorsImageUrls:[void 0]},v=[{value:"Flipper by default",id:"flipper-by-default",children:[],level:2},{value:"New dark mode features",id:"new-dark-mode-features",children:[],level:2},{value:"Moving Apple TV to react-native-tvos",id:"moving-apple-tv-to-react-native-tvos",children:[],level:2},{value:"More upgrade support",id:"more-upgrade-support",children:[],level:2},{value:"Other improvements",id:"other-improvements",children:[],level:2},{value:"Breaking changes",id:"breaking-changes",children:[],level:2},{value:"Deprecations",id:"deprecations",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],g={toc:v};function k(e){var t,n=e,{components:s}=n,m=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),m),o(t,i({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Today we\u2019re releasing React Native version 0.62 which includes support for Flipper by default."),(0,r.kt)("p",null,"This release comes in the midst of a global pandemic. We\u2019re releasing this version today to respect the work of hundreds of contributors who made this release possible and to prevent the release from falling too far behind master. Please be mindful of the reduced capacity of contributors to help with issues and prepare to delay upgrading if necessary."),(0,r.kt)("h2",u({},{id:"flipper-by-default"}),"Flipper by default"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://fbflipper.com/"}),"Flipper")," is a developer tool for debugging mobile apps. It\u2019s popular in the Android and iOS communities, and in this release we\u2019ve enabled support by default for new and existing React Native apps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Flipper for React Native",src:a(29908).Z})),(0,r.kt)("p",null,"Flipper provides the following features out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metro Actions"),": Reload the app and trigger the Dev Menu right from the toolbar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Crash Reporter"),": View crash reports from Android and iOS devices."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React DevTools"),": Use the newest version of React DevTools right alongside all your other tools."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Inspector"),": View all of the network requests made by device applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metro and Device Logs"),": View, search, and filter all logs from both Metro and the Device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native Layout Inspector"),": View and edit the native layout output by the React Native renderer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database and Preference Inspectors"),": View and edit the device databases and preferences.")),(0,r.kt)("p",null,"Additionally, since Flipper is an extensible platform, it provides a marketplace that pulls plugins from NPM so you can publish and install custom plugins specific to your workflows. See the available plugins ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.npmjs.com/search?q=flipper-plugin"}),"here"),"."),(0,r.kt)("p",null,"For more information, check out the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://fbflipper.com/docs/features/react-native"}),"Flipper documentation"),"."),(0,r.kt)("h2",u({},{id:"new-dark-mode-features"}),"New dark mode features"),(0,r.kt)("p",null,"We\u2019ve added a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," module to provide access to the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n")),(0,r.kt)("p",null,"We\u2019ve also added a hook to subscribe to state updates to the users preferences:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { Text, useColorScheme } from 'react-native';\n\nconst MyComponent = () => {\n  const colorScheme = useColorScheme();\n  return <Text>useColorScheme(): {colorScheme}</Text>;\n};\n")),(0,r.kt)("p",null,"See the docs for ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/appearance"}),"Appearance")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/usecolorscheme"}),"useColorScheme")," for more information."),(0,r.kt)("h2",u({},{id:"moving-apple-tv-to-react-native-tvos"}),"Moving Apple TV to react-native-tvos"),(0,r.kt)("p",null,"As part of our ",(0,r.kt)("a",u({parentName:"p"},{href:"/blog/#lean-core"}),"Lean Core effort")," and to bring Apple TV in line with other platforms like React Native Windows and React Native macOS, we\u2019ve started to remove Apple TV specific code from core."),(0,r.kt)("p",null,"Going forward, Apple TV support for React Native will be maintained in ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-community/react-native-tvos")," along with the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-tvos")," NPM package. This is a full fork of the main repository, with only the changes needed to support Apple TV."),(0,r.kt)("p",null,"Releases of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-tvos")," will be based on the public release of React Native. For this 0.62 release of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," please upgrade Apple TV projects to use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-tvos")," 0.62."),(0,r.kt)("h2",u({},{id:"more-upgrade-support"}),"More upgrade support"),(0,r.kt)("p",null,"When 0.61 was released, the community introduced a new ",(0,r.kt)("a",u({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/"}),"upgrade helper")," tool to support developers upgrading to new versions of React Native. The upgrade helper provides a diff of changes from the version you're on to the version you're targeting, allowing you to see the changes that need to be made for your specific upgrade."),(0,r.kt)("p",null,"Even with this tool, issues come up when upgrading. Today we're introducing more dedicated upgrading support by announcing ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/upgrade-support"}),"Upgrade-Support"),". Upgrade Support is a GitHub issue tracker where users can submit issues specific to upgrading their projects to receive help from the community."),(0,r.kt)("p",null,"We're always working to improve the upgrade experience, and we hope that these tools give users the support they need in the edge cases we haven't covered yet."),(0,r.kt)("h2",u({},{id:"other-improvements"}),"Other improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LogBox"),": We\u2019re adding the new LogBox error and warning experience as an opt-in; to enable it, add ",(0,r.kt)("inlineCode",{parentName:"li"},"require('react-native').unstable_enableLogBox()")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"React DevTools v4"),": This change includes an upgrade to the ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactjs.org/blog/2019/08/15/new-react-devtools.html"}),"latest React DevTools")," which offers significant performance gains, an improved navigation experience, and full support for React Hooks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accessibility improvements"),": We\u2019ve made improvements to accessibility including adding ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/docs/accessibility#accessibilityvalue-ios-android"}),"accessibilityValue"),", missing props on ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/8c0c860e38f57e18296f689e47dfb4a54088c260"}),"Touchables"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"onSlidingComplete")," ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/c7aa6dc8270c0eabc913fe6c617c8131e3f4b3c5"}),"accessibility events"),", and changing the default role of Switch component from ",(0,r.kt)("inlineCode",{parentName:"li"},'"button"')," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"switch"'),".")),(0,r.kt)("h2",u({},{id:"breaking-changes"}),"Breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove PropTypes"),": We're removing ",(0,r.kt)("inlineCode",{parentName:"li"},"propTypes")," from core components in order to reduce the app size impact of React Native core and to favor static type systems which check at compile time instead of runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remove accessibilityStates"),": We\u2019ve ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/7b35f427fd66cb0f36921b992095fe5b3c14d8b9"}),"removed")," the deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"accessibilityStates")," property in favor of the new ",(0,r.kt)("inlineCode",{parentName:"li"},"accessibilityState")," prop which is a more semantically rich way for components to describe information about their state to accessibility services."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TextInput changes"),": We removed ",(0,r.kt)("inlineCode",{parentName:"li"},"onTextInput")," ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/3f7e0a2c9601fc186f25bfd794cd0008ac3983ab"}),"from TextInput")," as it\u2019s uncommon, not W3C compliant, and difficult to implement in ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/4"}),"Fabric"),". We also removed the undocumented ",(0,r.kt)("inlineCode",{parentName:"li"},"inputView")," prop, and ",(0,r.kt)("inlineCode",{parentName:"li"},"selectionState"),".")),(0,r.kt)("h2",u({},{id:"deprecations"}),"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccessibilityInfo.fetch")," was already deprecated, but in this release we ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/523ab8333800afbfb169c6fd70ab6611fe07cc2a"}),"added a warning"),"."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"useNativeDriver")," is ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/5876052615f4858ed5fc32fa3da9b64695974238"}),"now required")," to support switching the default in the future."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," of an ",(0,r.kt)("inlineCode",{parentName:"li"},"Animated")," component is now the internal component and ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/66e72bb4e00aafbcb9f450ed5db261d98f99f82a"}),"deprecated")," ",(0,r.kt)("inlineCode",{parentName:"li"},"getNode"),".")),(0,r.kt)("h2",u({},{id:"thanks"}),"Thanks"),(0,r.kt)("p",null,"Thank you to the hundreds of contributors that helped make 0.62 possible!"),(0,r.kt)("p",null,"To see all the updates, take a look at the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/CHANGELOG.md#v0620"}),"0.62 changelog"),"."))}k.isMDXComponent=!0},29908:function(e,t,a){t.Z=a.p+"assets/images/0.62-flipper-dc5a5cb54cc6033750c56f3c147c6ce3.png"}}]);