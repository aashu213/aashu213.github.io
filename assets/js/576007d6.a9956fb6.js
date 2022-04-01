"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69953],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return v},toc:function(){return f},default:function(){return k}});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const m={id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!"},u=void 0,v={unversionedId:"intro-react-native-components",id:"version-0.60/intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!",source:"@site/versioned_docs/version-0.60/intro-react-native-components.md",sourceDirName:".",slug:"/intro-react-native-components",permalink:"/docs/0.60/intro-react-native-components",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/intro-react-native-components.md",tags:[],version:"0.60",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"intro-react-native-components",title:"Core Components and Native Components",description:"React Native lets you compose app interfaces using Native Components. Conveniently, it comes with a set of these components for you to get started with right now\u2014the Core Components!"}},f=[{value:"Views and mobile development",id:"views-and-mobile-development",children:[],level:2},{value:"Native Components",id:"native-components",children:[],level:2},{value:"Core Components",id:"core-components",children:[],level:2}],h={toc:f};function k(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"React Native is an open source framework for building Android and iOS applications using ",(0,a.kt)("a",d({parentName:"p"},{href:"https://reactjs.org/"}),"React")," and the app platform\u2019s native capabilities. With React Native, you use JavaScript to access your platform\u2019s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. You can learn more about React in the next section. But first, let\u2019s cover how components work in React Native."),(0,a.kt)("h2",d({},{id:"views-and-mobile-development"}),"Views and mobile development"),(0,a.kt)("p",null,"In Android and iOS development, a ",(0,a.kt)("strong",{parentName:"p"},"view")," is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It\u2019s views all the way down!"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/docs/assets/diagram_ios-android-views.svg",width:"1000",alt:"Diagram of Android and iOS app showing them both built on top of atomic elements called views."}),(0,a.kt)("figcaption",null,"Just a sampling of the many views used in Android and iOS apps.")),(0,a.kt)("h2",d({},{id:"native-components"}),"Native Components"),(0,a.kt)("p",null,"In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components ",(0,a.kt)("strong",{parentName:"p"},"Native Components.")),(0,a.kt)("p",null,"React Native lets you to build your own Native Components for ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.60/native-components-android"}),"Android")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.60/native-components-ios"}),"iOS")," to suit your app\u2019s unique needs. We also have a thriving ecosystem of these ",(0,a.kt)("strong",{parentName:"p"},"community-contributed components.")," Check out ",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.native.directory/"}),"Native Directory")," to find what the community has been creating."),(0,a.kt)("p",null,"React Native also includes a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's ",(0,a.kt)("strong",{parentName:"p"},"Core Components"),"."),(0,a.kt)("h2",d({},{id:"core-components"}),"Core Components"),(0,a.kt)("p",null,"React Native has many Core Components for everything from form controls to activity indicators. You can find them all ",(0,a.kt)("a",d({parentName:"p"},{href:"components-and-apis"}),"documented in the API section"),". You will mostly work with the following Core Components:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"React Native UI Component"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Android View"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"iOS View"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Web Analog"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<View>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<ViewGroup>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<UIView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A non-scrollling ",(0,a.kt)("inlineCode",{parentName:"td"},"<div>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A container that supports layout with flexbox, style, some touch handling, and accessibility controls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<Text>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<TextView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<UITextView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<p>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Displays, styles, and nests strings of text and even handles touch events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<Image>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<ImageView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<UIImageView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<img>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Displays different types of images")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<ScrollView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<UIScrollView>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<div>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A generic scrolling container that can contain multiple components and views")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<TextInput>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<EditText>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"<UITextField>")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'<input type="text">')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Allows the user to enter text")))),(0,a.kt)("p",null,"In the next section, you will start combining these Core Components to learn about how React works. Have a play with them here now!"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20Image%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%3ESome%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3ESome%20more%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat2.png'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20width%3A%20200%2C%20height%3A%20200%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'gray'%2C%0A%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20defaultValue%3D%22You%20can%20type%20in%20me%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Because React Native uses the same API structure as React components, you\u2019ll need to understand React component APIs to get started. The ",(0,a.kt)("a",d({parentName:"p"},{href:"intro-react"}),"next section")," makes for a quick introduction or refresher on the topic. However, if you\u2019re already familiar with React, feel free to ",(0,a.kt)("a",d({parentName:"p"},{href:"handling-text-input"}),"skip ahead"),"."),(0,a.kt)("img",{src:"/docs/assets/diagram_react-native-components.svg",width:"1000",alt:"A diagram showing React Native's Core Components are a subset of React Components that ship with React Native."}))}k.isMDXComponent=!0}}]);