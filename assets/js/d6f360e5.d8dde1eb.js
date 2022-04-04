"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77242],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79468:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},d),s),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Note for Mac M1 users"),(0,a.kt)("p",null,"Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo arch -x86_64 gem install ffi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"))),(0,a.kt)("p",null,"These commands install the ",(0,a.kt)("inlineCode",{parentName:"p"},"ffi")," package, to load dynamically-linked libraries and let you run the ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," properly, and runs ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," with the proper architecture.")))}m.isMDXComponent=!0},42851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return v},metadata:function(){return g},toc:function(){return f},default:function(){return k}});var a=n(35318),r=n(79468),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={id:"navigation",title:"Navigating Between Screens"},v=void 0,g={unversionedId:"navigation",id:"version-0.68/navigation",title:"Navigating Between Screens",description:"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.",source:"@site/versioned_docs/version-0.68/navigation.md",sourceDirName:".",slug:"/navigation",permalink:"/docs/navigation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/navigation.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"navigation",title:"Navigating Between Screens"}},f=[{value:"React Navigation",id:"react-navigation",children:[{value:"Installation and setup",id:"installation-and-setup",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],level:2}],h={toc:f};function k(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),u),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator."),(0,a.kt)("p",null,"This guide covers the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/navigation#react-navigation"}),"React Navigation"),". React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS."),(0,a.kt)("p",null,"If you're integrating React Native into an app that already manages navigation natively, or looking for an alternative to React Navigation, the following library provides native navigation on both platforms: ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/wix/react-native-navigation"}),"react-native-navigation"),"."),(0,a.kt)("h2",d({},{id:"react-navigation"}),"React Navigation"),(0,a.kt)("p",null,"The community solution to navigation is a standalone library that allows developers to set up the screens of an app with a few lines of code."),(0,a.kt)("h3",d({},{id:"installation-and-setup"}),"Installation and setup"),(0,a.kt)("p",null,"First, you need to install them in your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"npm install @react-navigation/native @react-navigation/native-stack\n")),(0,a.kt)("p",null,"Next, install the required peer dependencies. You need to run different commands depending on whether your project is an Expo managed project or a bare React Native project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have an Expo managed project, install the dependencies with ",(0,a.kt)("inlineCode",{parentName:"p"},"expo"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"expo install react-native-screens react-native-safe-area-context\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have a bare React Native project, install the dependencies with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"npm install react-native-screens react-native-safe-area-context\n")),(0,a.kt)("p",{parentName:"li"},"For iOS with bare React Native project, make sure you have ",(0,a.kt)("a",d({parentName:"p"},{href:"https://cocoapods.org/"}),"Cocoapods")," installed. Then install the pods to complete the installation:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"cd ios\npod install\ncd ..\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),(0,a.kt)(r.ZP,{mdxType:"M1Cocoapods"}),(0,a.kt)("p",null,"Now, you need to wrap the whole app in ",(0,a.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nconst App = () => {\n  return (\n    <NavigationContainer>\n      {/* Rest of your app code */}\n    </NavigationContainer>\n  );\n};\n\nexport default App;\n")),(0,a.kt)("p",null,"Now you are ready to build and run your app on the device/simulator."),(0,a.kt)("h3",d({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"Now you can create an app with a home screen and a profile screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nconst MyStack = () => {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name=\"Home\"\n          component={HomeScreen}\n          options={{ title: 'Welcome' }}\n        />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n};\n")),(0,a.kt)("p",null,"In this example, there are 2 screens (",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Profile"),") defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack.Screen")," component. Similarly, you can define as many screens as you like."),(0,a.kt)("p",null,"You can set options such as the screen title for each screen in the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack.Screen"),"."),(0,a.kt)("p",null,"Each screen takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," prop that is a React component. Those components receive a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," which has various methods to link to other screens. For example, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," to go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Profile")," screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const HomeScreen = ({ navigation }) => {\n  return (\n    <Button\n      title=\"Go to Jane's profile\"\n      onPress={() =>\n        navigation.navigate('Profile', { name: 'Jane' })\n      }\n    />\n  );\n};\nconst ProfileScreen = ({ navigation, route }) => {\n  return <Text>This is {route.params.name}'s profile</Text>;\n};\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"native-stack")," navigator uses the native APIs: ",(0,a.kt)("inlineCode",{parentName:"p"},"UINavigationController")," on iOS and ",(0,a.kt)("inlineCode",{parentName:"p"},"Fragment")," on Android so that navigation built with ",(0,a.kt)("inlineCode",{parentName:"p"},"createNativeStackNavigator")," will behave the same and have the same performance characteristics as apps built natively on top of those APIs."),(0,a.kt)("p",null,"React Navigation also has packages for different kind of navigators such as tabs and drawer. You can use them to implement various patterns in your app."),(0,a.kt)("p",null,"For a complete intro to React Navigation, follow the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://reactnavigation.org/docs/getting-started"}),"React Navigation Getting Started Guide"),"."))}k.isMDXComponent=!0}}]);