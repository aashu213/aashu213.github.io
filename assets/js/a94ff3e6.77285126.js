"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5015],{35318:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return i?n.createElement(m,r(r({ref:t},p),{},{components:i})):n.createElement(m,r({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3658:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return m},assets:function(){return y},toc:function(){return b},default:function(){return f}});var n=i(35318),a=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&p(e,i,t[i]);if(l)for(var i of l(t))c.call(t,i)&&p(e,i,t[i]);return e};const u={title:"Accessibility API Updates",author:"Ziqi Chen",authorTitle:"Student at UC Berkeley",authorURL:"https://ziqichen.com/",authorImageURL:"https://avatars2.githubusercontent.com/u/13990087?s=400&u=5841da1b6064341d52ecab70a586b6701d9f6978&v=4",tags:["engineering"]},h=void 0,m={permalink:"/blog/2018/08/13/react-native-accessibility-updates",source:"@site/blog/2018-08-13-react-native-accessibility-updates.md",title:"Accessibility API Updates",description:"Motivation",date:"2018-08-13T00:00:00.000Z",formattedDate:"August 13, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:6.435,truncated:!1,authors:[{name:"Ziqi Chen",title:"Student at UC Berkeley",url:"https://ziqichen.com/",imageURL:"https://avatars2.githubusercontent.com/u/13990087?s=400&u=5841da1b6064341d52ecab70a586b6701d9f6978&v=4"}],prevItem:{title:"Introducing new iOS WebViews",permalink:"/blog/2018/08/27/wkwebview"},nextItem:{title:"Releasing 0.56",permalink:"/blog/2018/07/04/releasing-react-native-056"}},y={authorsImageUrls:[void 0]},b=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Problems With the Existing API",id:"problems-with-the-existing-api",children:[{value:"Problem One: Two Completely Different Yet Similar Props - accessibilityComponentType (Android) and accessibilityTraits (iOS)",id:"problem-one-two-completely-different-yet-similar-props---accessibilitycomponenttype-android-and-accessibilitytraits-ios",children:[],level:3},{value:"Problem Two: Non-existent Accessibility Hints:",id:"problem-two-non-existent-accessibility-hints",children:[],level:3},{value:"Problem Three: Ignoring Inverted Colors:",id:"problem-three-ignoring-inverted-colors",children:[],level:3}],level:2},{value:"Design of the New API",id:"design-of-the-new-api",children:[{value:"Solution One: Combining accessibilityComponentType (Android) and accessibilityTraits (iOS)",id:"solution-one-combining-accessibilitycomponenttype-android-and-accessibilitytraits-ios",children:[],level:3},{value:"Solution Two: Adding Accessibility Hints",id:"solution-two-adding-accessibility-hints",children:[],level:3},{value:"Solution to Problem Three",id:"solution-to-problem-three",children:[],level:3}],level:2},{value:"New Usage",id:"new-usage",children:[{value:"How to Upgrade",id:"how-to-upgrade",children:[{value:"1. Using jscodeshift",id:"1-using-jscodeshift",children:[],level:4},{value:"2. Using a manual codemod",id:"2-using-a-manual-codemod",children:[],level:4}],level:3}],level:2}],k={toc:b};function f(e){var t,i=e,{components:a}=i,p=((e,t)=>{var i={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),p),o(t,r({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",d({},{id:"motivation"}),"Motivation"),(0,n.kt)("p",null,"As technology advances and mobile apps become increasingly important to everyday life, the necessity of creating accessible applications has likewise grown in importance."),(0,n.kt)("p",null,"React Native's limited Accessibility API has always been a huge pain point for developers, so we've made a few updates to the Accessibility API to make it easier to create inclusive mobile applications."),(0,n.kt)("h2",d({},{id:"problems-with-the-existing-api"}),"Problems With the Existing API"),(0,n.kt)("h3",d({},{id:"problem-one-two-completely-different-yet-similar-props---accessibilitycomponenttype-android-and-accessibilitytraits-ios"}),"Problem One: Two Completely Different Yet Similar Props - accessibilityComponentType (Android) and accessibilityTraits (iOS)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits")," are two properties that are used to tell TalkBack on Android and VoiceOver on iOS what kind of UI element the user is interacting with. The two biggest problems with these properties are that:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"They are two different properties with different usage methods, yet have the same purpose.")," In the previous API, these are two separate properties (one for each platform), which was not only inconvenient, but also confusing to many developers. ",(0,n.kt)("inlineCode",{parentName:"li"},"accessibilityTraits")," on iOS allows 17 different values while ",(0,n.kt)("inlineCode",{parentName:"li"},"accessibilityComponentType")," on Android allows only 4 values. Furthermore, the values for the most part had no overlap. Even the input types for these two properties are different. ",(0,n.kt)("inlineCode",{parentName:"li"},"accessibilityTraits")," allows either an array of traits to be passed in or a single trait, while ",(0,n.kt)("inlineCode",{parentName:"li"},"accessibilityComponentType")," allows only a single value."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"There is very limited functionality on Android.")," With the old property, the only UI elements that Talkback were able to recognize were \u201cbutton,\u201d \u201cradiobutton_checked,\u201d and \u201cradiobutton_unchecked.\u201d")),(0,n.kt)("h3",d({},{id:"problem-two-non-existent-accessibility-hints"}),"Problem Two: Non-existent Accessibility Hints:"),(0,n.kt)("p",null,"Accessibility Hints help users using TalkBack or VoiceOver understand what will happen when they perform an action on an accessibility element that is not apparent by only the accessibility label. These hints can be turned on and off in the settings panel. Previously, React Native's API did not support accessibility hints at all."),(0,n.kt)("h3",d({},{id:"problem-three-ignoring-inverted-colors"}),"Problem Three: Ignoring Inverted Colors:"),(0,n.kt)("p",null,"Some users with vision loss use inverted colors on their mobile phones to have greater screen contrast. Apple provided an API for iOS which allows developers to ignore certain views. This way, images and videos aren't distorted when a user has the inverted colors setting on. This API is currently unsupported by React Native."),(0,n.kt)("h2",d({},{id:"design-of-the-new-api"}),"Design of the New API"),(0,n.kt)("h3",d({},{id:"solution-one-combining-accessibilitycomponenttype-android-and-accessibilitytraits-ios"}),"Solution One: Combining accessibilityComponentType (Android) and accessibilityTraits (iOS)"),(0,n.kt)("p",null,"In order to solve the confusion between ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits"),", we decided to merge them into a single property. This made sense because they technically had the same intended functionality and by merging them, developers no longer had to worry about platform specific intricacies when building accessibility features."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Background")),(0,n.kt)("p",null,"On iOS, ",(0,n.kt)("inlineCode",{parentName:"p"},"UIAccessibilityTraits")," is a property that can be set on any NSObject. Each of the 17 traits passed in through the javascript property to native is mapped to a ",(0,n.kt)("inlineCode",{parentName:"p"},"UIAccessibilityTraits")," element in Objective-C. Traits are each represented by a long int, and every trait that is set is ORed together."),(0,n.kt)("p",null,"On Android however, ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityComponentType")," is a concept that was made up by React Native, and doesn't directly map to any properties in Android. Accessibility is handled by an accessibility delegate. Each view has a default accessibility delegate. If you want to customize any accessibility actions, you have to create a new accessibility delegate, override specific methods you want to customize, and then set the accessibility delegate of the view you are handling to be associated with the new delegate. When a developer set ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityComponentType"),", the native code created a new delegate based off of the component that was passed in, and set the view to have that accessibility delegate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Changes Made")),(0,n.kt)("p",null,"For our new property, we wanted to create a superset of the two properties. We decided to keep the new property modeled mostly after the existing property ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits"),", since ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits")," has significantly more values. The functionality of Android for these traits would be polyfilled in by modifying the Accessibility Delegate."),(0,n.kt)("p",null,"There are 17 values of UIAccessibilityTraits that ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits")," on iOS can be set to. However, we didn't include all of them as possible values to our new property. This is because the effect of setting some of these traits is actually not very well known, and many of these values are virtually never used."),(0,n.kt)("p",null,"The values UIAccessibilityTraits were set to generally took on one of two purposes. They either described a role that UI element had, or they described the state a UI element was in. Most uses of the previous properties we observed usually used one value that represented a role and combined it with either \u201cstate selected,\u201d \u201cstate disabled,\u201d or both. Therefore, we decided to create two new accessibility properties: ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityRole")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityState"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"accessibilityRole"))),(0,n.kt)("p",null,"The new property, ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityRole"),", is used to tell Talkback or Voiceover the role of a UI Element. This new property can take on one of the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"none")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"link")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyboardkey")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"adjustable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"header")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"summary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"imagebutton"))),(0,n.kt)("p",null,"This property only allows one value to be passed in because UI elements generally don't logically take on more than one of these. The exception is image and button, so we've added a role imagebutton that is a combination of both."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"accessibilityStates"))),(0,n.kt)("p",null,"The new property, ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityStates"),", is used to tell Talkback or Voiceover the state a UI Element is in. This property takes on an Array containing one or both of the following values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selected")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"disabled"))),(0,n.kt)("h3",d({},{id:"solution-two-adding-accessibility-hints"}),"Solution Two: Adding Accessibility Hints"),(0,n.kt)("p",null,"For this, we added a new property, ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityHint"),". Setting this property will allow Talkback or Voiceover to recite the hint to users."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"accessibilityHint"))),(0,n.kt)("p",null,"This property takes in the accessibility hint to be read in the form of a String."),(0,n.kt)("p",null,"On iOS, setting this property will set the corresponding native property AccessibilityHint on the view. The hint will then be read by Voiceover if Accessibility Hints are turned on in the iPhone."),(0,n.kt)("p",null,"On Android, setting this property appends the value of the hint to the end of the accessibility label. The upside to this implementation is that it mimics the behavior of hints on iOS, but the downside to this implementation is that these hints cannot be turned off in the settings on Android the way they can be on iOS."),(0,n.kt)("p",null,"The reason we made this decision on Android is because normally, accessibility hints correspond with a specific action (e.g. click), and we wanted to keep behaviors consistent across platforms."),(0,n.kt)("h3",d({},{id:"solution-to-problem-three"}),"Solution to Problem Three"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"accessibilityIgnoresInvertColors"))),(0,n.kt)("p",null,"We exposed Apple's api AccessibilityIgnoresInvertColors to JavaScript, so now when you have a view where you don't want colors to be inverted (e.g image), you can set this property to true, and it won't be inverted."),(0,n.kt)("h2",d({},{id:"new-usage"}),"New Usage"),(0,n.kt)("p",null,"These new properties will become available in the React Native 0.57 release."),(0,n.kt)("h3",d({},{id:"how-to-upgrade"}),"How to Upgrade"),(0,n.kt)("p",null,"If you are currently using ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityTraits"),", here are the steps you can take to upgrade to the new properties."),(0,n.kt)("h4",d({},{id:"1-using-jscodeshift"}),"1. Using jscodeshift"),(0,n.kt)("p",null,"The most simple use cases can be replaced by running a jscodeshift script."),(0,n.kt)("p",null,"This ",(0,n.kt)("a",d({parentName:"p"},{href:"https://gist.github.com/ziqichen6/246e5778617224d2b4aff198dab0305d"}),"script")," replaces the following instances:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"accessibilityTraits=\u201ctrait\u201d\naccessibilityTraits={[\u201ctrait\u201d]}\n")),(0,n.kt)("p",null,"With"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"accessibilityRole= \u201ctrait\u201d\n")),(0,n.kt)("p",null,"This script also removes instances of ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityComponentType")," (assuming everywhere you set ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityComponentType"),", you would also set ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityTraits"),")."),(0,n.kt)("h4",d({},{id:"2-using-a-manual-codemod"}),"2. Using a manual codemod"),(0,n.kt)("p",null,"For the cases that used ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityTraits")," that don't have a corresponding value for ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityRole"),", and the cases where multiple traits were passed into ",(0,n.kt)("inlineCode",{parentName:"p"},"AccessibilityTraits"),", a manual codemod would have to be done."),(0,n.kt)("p",null,"In general,"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"accessibilityTraits= {[\u201cbutton\u201d, \u201cselected\u201d]}\n")),(0,n.kt)("p",null,"would be manually replaced with"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"accessibilityRole=\u201cbutton\u201d\naccessibilityStates={[\u201cselected\u201d]}\n")),(0,n.kt)("p",null,"These properties are already being used in Facebook's codebase. The codemod for Facebook was surprisingly simple. The jscodeshift script fixed about half of our instances, and the other half was fixed manually. Overall, the entire process took less than a few hours."),(0,n.kt)("p",null,"Hopefully you will find the updated API useful! And please continue making apps accessible! #inclusion"))}f.isMDXComponent=!0}}]);