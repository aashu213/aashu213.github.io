"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9695],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return h},assets:function(){return v},toc:function(){return f},default:function(){return k}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={title:"Using Native Driver for Animated",author:"Janic Duplessis",authorTitle:"Software Engineer at App & Flow",authorURL:"https://twitter.com/janicduplessis",authorImageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128",authorTwitter:"janicduplessis",tags:["engineering"]},m=void 0,h={permalink:"/blog/2017/02/14/using-native-driver-for-animated",source:"@site/blog/2017-02-14-using-native-driver-for-animated.md",title:"Using Native Driver for Animated",description:"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag.",date:"2017-02-14T00:00:00.000Z",formattedDate:"February 14, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:6.09,truncated:!1,authors:[{name:"Janic Duplessis",title:"Software Engineer at App & Flow",url:"https://twitter.com/janicduplessis",imageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128"}],prevItem:{title:"Introducing Create React Native App",permalink:"/blog/2017/03/13/introducing-create-react-native-app"},nextItem:{title:"A Monthly Release Cadence: Releasing December and January RC",permalink:"/blog/2017/01/07/monthly-release-cadence"}},v={authorsImageUrls:[void 0]},f=[{value:"What is this?",id:"what-is-this",children:[],level:2},{value:"A bit of history...",id:"a-bit-of-history",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"How do I use this in my app?",id:"how-do-i-use-this-in-my-app",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],w={toc:f};function k(e){var t,i=e,{components:u}=i,c=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(i,["components"]);return(0,a.kt)("wrapper",(t=d(d({},w),c),r(t,o({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag."),(0,a.kt)("h2",d({},{id:"what-is-this"}),"What is this?"),(0,a.kt)("p",null,"The Animated API was designed with a very important constraint in mind, it is serializable. This means we can send everything about the animation to native before it has even started and allows native code to perform the animation on the UI thread without having to go through the bridge on every frame. It is very useful because once the animation has started, the JS thread can be blocked and the animation will still run smoothly. In practice this can happen a lot because user code runs on the JS thread and React renders can also lock JS for a long time."),(0,a.kt)("h2",d({},{id:"a-bit-of-history"}),"A bit of history..."),(0,a.kt)("p",null,"This project started about a year ago, when Expo built the li.st app on Android. ",(0,a.kt)("a",d({parentName:"p"},{href:"https://twitter.com/kzzzf"}),"Krzysztof Magiera")," was contracted to build the initial implementation on Android. It ended up working well and li.st was the first app to ship with native driven animations using Animated. A few months later, ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/buba447"}),"Brandon Withrow")," built the initial implementation on iOS. After that, ",(0,a.kt)("a",d({parentName:"p"},{href:"https://twitter.com/ryangomba"}),"Ryan Gomba")," and myself worked on adding missing features like support for ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event")," as well as squash bugs we found when using it in production apps. This was truly a community effort and I would like to thanks everyone that was involved as well as Expo for sponsoring a large part of the development. It is now used by ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," components in React Native as well as for navigation animations in the newly released ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/react-community/react-navigation"}),"React Navigation")," library."),(0,a.kt)("h2",d({},{id:"how-does-it-work"}),"How does it work?"),(0,a.kt)("p",null,"First, let's check out how animations currently work using Animated with the JS driver. When using Animated, you declare a graph of nodes that represent the animations that you want to perform, and then use a driver to update an Animated value using a predefined curve. You may also update an Animated value by connecting it to an event of a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76640).Z})),(0,a.kt)("p",null,"Here's a breakdown of the steps for an animation and where it happens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JS: The animation driver uses ",(0,a.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."),(0,a.kt)("li",{parentName:"ul"},"JS: Intermediate values are calculated and passed to a props node that is attached to a ",(0,a.kt)("inlineCode",{parentName:"li"},"View"),"."),(0,a.kt)("li",{parentName:"ul"},"JS: The ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," is updated using ",(0,a.kt)("inlineCode",{parentName:"li"},"setNativeProps"),"."),(0,a.kt)("li",{parentName:"ul"},"JS to Native bridge."),(0,a.kt)("li",{parentName:"ul"},"Native: The ",(0,a.kt)("inlineCode",{parentName:"li"},"UIView")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"android.View")," is updated.")),(0,a.kt)("p",null,"As you can see, most of the work happens on the JS thread. If it is blocked the animation will skip frames. It also needs to go through the JS to Native bridge on every frame to update native views."),(0,a.kt)("p",null,"What the native driver does is move all of these steps to native. Since Animated produces a graph of animated nodes, it can be serialized and sent to native only once when the animation starts, eliminating the need to callback into the JS thread; the native code can take care of updating the views directly on the UI thread on every frame."),(0,a.kt)("p",null,"Here's an example of how we can serialize an animated value and an interpolation node (not the exact implementation, just an example)."),(0,a.kt)("p",null,"Create the native value node, this is the value that will be animated:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 1,\n  type: 'value',\n  initialValue: 0,\n});\n")),(0,a.kt)("p",null,"Create the native interpolation node, this tells the native driver how to interpolate a value:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 2,\n  type: 'interpolation',\n  inputRange: [0, 10],\n  outputRange: [10, 0],\n  extrapolate: 'clamp',\n});\n")),(0,a.kt)("p",null,"Create the native props node, this tells the native driver which prop on the view it is attached to:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 3,\n  type: 'props',\n  properties: ['style.opacity'],\n});\n")),(0,a.kt)("p",null,"Connect nodes together:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.connectNodes(1, 2);\nNativeAnimatedModule.connectNodes(2, 3);\n")),(0,a.kt)("p",null,"Connect the props node to a view:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.connectToView(3, ReactNative.findNodeHandle(viewRef));\n")),(0,a.kt)("p",null,"With that, the native animated module has all the info it needs to update the native views directly without having to go to JS to calculate any value."),(0,a.kt)("p",null,"All there is left to do is actually start the animation by specifying what type of animation curve we want and what animated value to update. Timing animations can also be simplified by calculating every frame of the animation in advance in JS to make the native implementation smaller."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"NativeAnimatedModule.startAnimation({\n  type: 'timing',\n  frames: [0, 0.1, 0.2, 0.4, 0.65, ...],\n  animatedValueId: 1,\n});\n")),(0,a.kt)("p",null,"And now here's the breakdown of what happens when the animation runs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Native: The native animation driver uses ",(0,a.kt)("inlineCode",{parentName:"li"},"CADisplayLink")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"android.view.Choreographer")," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."),(0,a.kt)("li",{parentName:"ul"},"Native: Intermediate values are calculated and passed to a props node that is attached to a native view."),(0,a.kt)("li",{parentName:"ul"},"Native: The ",(0,a.kt)("inlineCode",{parentName:"li"},"UIView")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"android.View")," is updated.")),(0,a.kt)("p",null,"As you can see, no more JS thread and no more bridge which means faster animations! \ud83c\udf89\ud83c\udf89"),(0,a.kt)("h2",d({},{id:"how-do-i-use-this-in-my-app"}),"How do I use this in my app?"),(0,a.kt)("p",null,"For normal animations the answer is simple, just add ",(0,a.kt)("inlineCode",{parentName:"p"},"useNativeDriver: true")," to the animation config when starting it."),(0,a.kt)("p",null,"Before:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n}).start();\n")),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true, // <-- Add this\n}).start();\n")),(0,a.kt)("p",null,"Animated values are only compatible with one driver so if you use native driver when starting an animation on a value, make sure every animation on that value also uses the native driver."),(0,a.kt)("p",null,"It also works with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event"),", this is very useful if you have an animation that must follow the scroll position because without the native driver it will always run a frame behind of the gesture because of the async nature of React Native."),(0,a.kt)("p",null,"Before:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"<ScrollView\n  scrollEventThrottle={16}\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }]\n  )}\n>\n  {content}\n</ScrollView>\n")),(0,a.kt)("p",null,"After:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"<Animated.ScrollView // <-- Use the Animated ScrollView wrapper\n  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],\n    { useNativeDriver: true } // <-- Add this\n  )}\n>\n  {content}\n</Animated.ScrollView>\n")),(0,a.kt)("h2",d({},{id:"caveats"}),"Caveats"),(0,a.kt)("p",null,"Not everything you can do with Animated is currently supported in Native Animated. The main limitation is that you can only animate non-layout properties, things like ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"opacity")," will work but Flexbox and position properties won't. Another one is with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event"),", it will only work with direct events and not bubbling events. This means it does not work with ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," but does work with things like ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView#onScroll"),"."),(0,a.kt)("p",null,"Native Animated has also been part of React Native for quite a while but has never been documented because it was considered experimental. Because of that make sure you are using a recent version (0.40+) of React Native if you want to use this feature."),(0,a.kt)("h2",d({},{id:"resources"}),"Resources"),(0,a.kt)("p",null,"For more information about animated I recommend watching ",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.youtube.com/watch?v=xtqUJVqpKNo"}),"this talk")," by ",(0,a.kt)("a",d({parentName:"p"},{href:"https://twitter.com/Vjeux"}),"Christopher Chedeau"),"."),(0,a.kt)("p",null,"If you want a deep dive into animations and how offloading them to native can improve user experience there is also ",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.youtube.com/watch?v=qgSMjYWqBk4"}),"this talk")," by ",(0,a.kt)("a",d({parentName:"p"},{href:"https://twitter.com/kzzzf"}),"Krzysztof Magiera"),"."))}k.isMDXComponent=!0},76640:function(e,t,n){t.Z=n.p+"assets/images/animated-diagram-127161e299f43a8c0e677715d6be7881.png"}}]);