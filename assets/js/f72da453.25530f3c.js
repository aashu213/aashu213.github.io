"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45571],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return k}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const d={id:"improvingux",title:"Improving User Experience"},m=void 0,h={unversionedId:"improvingux",id:"version-0.61/improvingux",title:"Improving User Experience",description:"Configure text inputs",source:"@site/versioned_docs/version-0.61/improvingux.md",sourceDirName:".",slug:"/improvingux",permalink:"/docs/0.61/improvingux",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/improvingux.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"improvingux",title:"Improving User Experience"},sidebar:"version-0.61/docs",previous:{title:"Accessibility",permalink:"/docs/0.61/accessibility"},next:{title:"Optimizing Flatlist Configuration",permalink:"/docs/0.61/optimizing-flatlist-configuration"}},f=[{value:"Configure text inputs",id:"configure-text-inputs",children:[],level:2},{value:"Manage layout when keyboard is visible",id:"manage-layout-when-keyboard-is-visible",children:[],level:2},{value:"Make tappable areas larger",id:"make-tappable-areas-larger",children:[],level:2},{value:"Use Android Ripple",id:"use-android-ripple",children:[],level:2},{value:"Screen orientation lock",id:"screen-orientation-lock",children:[],level:2}],y={toc:f};function k(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",u({},{id:"configure-text-inputs"}),"Configure text inputs"),(0,r.kt)("p",null,"Entering text on touch phone is a challenge - small screen, software keyboard. But based on what kind of data you need, you can make it easier by properly configuring the text inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Focus the first field automatically"),(0,r.kt)("li",{parentName:"ul"},"Use placeholder text as an example of expected data format"),(0,r.kt)("li",{parentName:"ul"},"Enable or disable autocapitalization and autocorrect"),(0,r.kt)("li",{parentName:"ul"},"Choose keyboard type (e.g. email, numeric)"),(0,r.kt)("li",{parentName:"ul"},"Make sure the return button focuses the next field or submits the form")),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/textinput"}),(0,r.kt)("inlineCode",{parentName:"a"},"TextInput")," docs")," for more configuration options."),(0,r.kt)("video",{src:"/img/textinput.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"430"}),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://snack.expo.io/H1iGt2vSW"}),"Try it on your phone")),(0,r.kt)("h2",u({},{id:"manage-layout-when-keyboard-is-visible"}),"Manage layout when keyboard is visible"),(0,r.kt)("p",null,"Software keyboard takes almost half of the screen. If you have interactive elements that can get covered by the keyboard, make sure they are still accessible by using the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/keyboardavoidingview"}),(0,r.kt)("inlineCode",{parentName:"a"},"KeyboardAvoidingView")," component"),"."),(0,r.kt)("video",{src:"/img/keyboardavoidingview.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"448"}),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://snack.expo.io/ryxRkwnrW"}),"Try it on your phone")),(0,r.kt)("h2",u({},{id:"make-tappable-areas-larger"}),"Make tappable areas larger"),(0,r.kt)("p",null,"On mobile phones it's hard to be very precise when pressing buttons. Make sure all interactive elements are 44x44 or larger. One way to do this is to leave enough space for the element, ",(0,r.kt)("inlineCode",{parentName:"p"},"padding"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"minWidth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minHeight")," style values can be useful for that. Alternatively, you can use ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/touchablewithoutfeedback#hitslop"}),(0,r.kt)("inlineCode",{parentName:"a"},"hitSlop")," prop")," to increase interactive area without affecting the layout. Here's a demo:"),(0,r.kt)("video",{src:"/img/hitslop.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"120"}),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://snack.expo.io/rJPwCt4HZ"}),"Try it on your phone")),(0,r.kt)("h2",u({},{id:"use-android-ripple"}),"Use Android Ripple"),(0,r.kt)("p",null,"Android API 21+ uses the material design ripple to provide user with feedback when they touch an interactable area on the screen. React Native exposes this through the ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/touchablenativefeedback"}),(0,r.kt)("inlineCode",{parentName:"a"},"TouchableNativeFeedback")," component"),". Using this touchable effect instead of opacity or highlight will often make your app feel much more fitting on the platform. That said, you need to be careful when using it because it doesn't work on iOS or on Android API < 21, so you will need to fallback to using one of the other Touchable components on iOS. You can use a library like ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/react-community/react-native-platform-touchable"}),"react-native-platform-touchable")," to handle the platform differences for you."),(0,r.kt)("video",{src:"/img/ripple.mp4",muted:!0,autoplay:!0,loop:!0,width:"320"}),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://snack.expo.io/SJywqe3rZ"}),"Try it on your phone")),(0,r.kt)("h2",u({},{id:"screen-orientation-lock"}),"Screen orientation lock"),(0,r.kt)("p",null,"Multiple screen orientations should work fine by default unless you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"Dimensions")," API and don't handle orientation changes. If you don't want to support multiple screen orientations, you can lock the screen orientation to either portrait or landscape."),(0,r.kt)("p",null,"On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add ",(0,r.kt)("inlineCode",{parentName:"p"},"'android:screenOrientation=\"portrait\"'")," to lock to portrait or ",(0,r.kt)("inlineCode",{parentName:"p"},"'android:screenOrientation=\"landscape\"'")," to lock to landscape."),(0,r.kt)("h1",u({},{id:"learn-more"}),"Learn more"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://material.io/"}),"Material Design")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/"}),"Human Interface Guidelines")," are great resources for learning more about designing for mobile platforms."))}k.isMDXComponent=!0}}]);