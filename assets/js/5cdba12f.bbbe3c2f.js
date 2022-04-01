"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[89663],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return g},default:function(){return f}});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e};const u={id:"animations",title:"Animations"},c=void 0,h={unversionedId:"animations",id:"version-0.61/animations",title:"Animations",description:"Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface.",source:"@site/versioned_docs/version-0.61/animations.md",sourceDirName:".",slug:"/animations",permalink:"/docs/0.61/animations",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/animations.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"animations",title:"Animations"},sidebar:"version-0.61/docs",previous:{title:"Images",permalink:"/docs/0.61/images"},next:{title:"Accessibility",permalink:"/docs/0.61/accessibility"}},g=[{value:"<code>Animated</code> API",id:"animated-api",children:[{value:"Configuring animations",id:"configuring-animations",children:[],level:3},{value:"Composing animations",id:"composing-animations",children:[],level:3},{value:"Combining animated values",id:"combining-animated-values",children:[],level:3},{value:"Interpolation",id:"interpolation",children:[],level:3},{value:"Tracking dynamic values",id:"tracking-dynamic-values",children:[],level:3},{value:"Tracking gestures",id:"tracking-gestures",children:[],level:3},{value:"Responding to the current animation value",id:"responding-to-the-current-animation-value",children:[],level:3},{value:"Using the native driver",id:"using-the-native-driver",children:[{value:"Caveats",id:"caveats",children:[],level:4}],level:3},{value:"Bear in mind",id:"bear-in-mind",children:[],level:3},{value:"Additional examples",id:"additional-examples",children:[],level:3}],level:2},{value:"<code>LayoutAnimation</code> API",id:"layoutanimation-api",children:[],level:2},{value:"Additional notes",id:"additional-notes",children:[{value:"<code>requestAnimationFrame</code>",id:"requestanimationframe",children:[],level:3},{value:"<code>setNativeProps</code>",id:"setnativeprops",children:[],level:3}],level:2}],k={toc:g};function f(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),d),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface."),(0,a.kt)("p",null,"React Native provides two complementary animation systems: ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animations#animated-api"}),(0,a.kt)("inlineCode",{parentName:"a"},"Animated"))," for granular and interactive control of specific values, and ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animations#layoutanimation-api"}),(0,a.kt)("inlineCode",{parentName:"a"},"LayoutAnimation"))," for animated global layout transactions."),(0,a.kt)("h2",m({},{id:"animated-api"}),(0,a.kt)("inlineCode",{parentName:"h2"},"Animated")," API"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated"}),(0,a.kt)("inlineCode",{parentName:"a"},"Animated"))," API is designed to concisely express a wide variety of interesting animation and interaction patterns in a very performant way. ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and ",(0,a.kt)("inlineCode",{parentName:"p"},"start"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"stop")," methods to control time-based animation execution."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," exports six animatable component types: ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Image"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SectionList"),", but you can also create your own using ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.createAnimatedComponent()"),"."),(0,a.kt)("p",null,"For example, a container view that fades in when it is mounted may look like this:"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Animated%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FadeInView%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5BfadeAnim%5D%20%3D%20useState(new%20Animated.Value(0))%20%20%2F%2F%20Initial%20value%20for%20opacity%3A%200%0A%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Animated.timing(%0A%20%20%20%20%20%20fadeAnim%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20toValue%3A%201%2C%0A%20%20%20%20%20%20%20%20duration%3A%2010000%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20).start()%3B%0A%20%20%7D%2C%20%5B%5D)%0A%0A%20%20return%20(%0A%20%20%20%20%3CAnimated.View%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Special%20animatable%20View%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20...props.style%2C%0A%20%20%20%20%20%20%20%20opacity%3A%20fadeAnim%2C%20%20%20%20%20%20%20%20%20%2F%2F%20Bind%20opacity%20to%20animated%20value%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7Bprops.children%7D%0A%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20You%20can%20then%20use%20your%20%60FadeInView%60%20in%20place%20of%20a%20%60View%60%20in%20your%20components%3A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%0A%20%20%20%20%20%20%3CFadeInView%20style%3D%7B%7Bwidth%3A%20250%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A%2028%2C%20textAlign%3A%20'center'%2C%20margin%3A%2010%7D%7D%3EFading%20in%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FFadeInView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"Let's break down what's happening here. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"FadeInView")," constructor, a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"fadeAnim")," is initialized as part of ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". The opacity property on the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," is mapped to this animated value. Behind the scenes, the numeric value is extracted and used to set opacity."),(0,a.kt)("p",null,"When the component mounts, the opacity is set to 0. Then, an easing animation is started on the ",(0,a.kt)("inlineCode",{parentName:"p"},"fadeAnim")," animated value, which will update all of its dependent mappings (in this case, only the opacity) on each frame as the value animates to the final value of 1."),(0,a.kt)("p",null,"This is done in an optimized way that is faster than calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread."),(0,a.kt)("h3",m({},{id:"configuring-animations"}),"Configuring animations"),(0,a.kt)("p",null,"Animations are heavily configurable. Custom and predefined easing functions, delays, durations, decay factors, spring constants, and more can all be tweaked depending on the type of animation."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," provides several animation types, the most commonly used one being ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#timing"}),(0,a.kt)("inlineCode",{parentName:"a"},"Animated.timing()")),". It supports animating a value over time using one of various predefined easing functions, or you can use your own. Easing functions are typically used in animation to convey gradual acceleration and deceleration of objects."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"timing")," will use a easeInOut curve that conveys gradual acceleration to full speed and concludes by gradually decelerating to a stop. You can specify a different easing function by passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"easing")," parameter. Custom ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," or even a ",(0,a.kt)("inlineCode",{parentName:"p"},"delay")," before the animation starts is also supported."),(0,a.kt)("p",null,"For example, if we want to create a 2-second long animation of an object that slightly backs up before moving to its final position:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Animated.timing(this.state.xPosition, {\n  toValue: 100,\n  easing: Easing.back(),\n  duration: 2000\n}).start();\n")),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#configuring-animations"}),"Configuring animations")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API reference to learn more about all the config parameters supported by the built-in animations."),(0,a.kt)("h3",m({},{id:"composing-animations"}),"Composing animations"),(0,a.kt)("p",null,"Animations can be combined and played in sequence or in parallel. Sequential animations can play immediately after the previous animation has finished, or they can start after a specified delay. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API provides several methods, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"sequence()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"delay()"),", each of which take an array of animations to execute and automatically calls ",(0,a.kt)("inlineCode",{parentName:"p"},"start()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"stop()")," as needed."),(0,a.kt)("p",null,"For example, the following animation coasts to a stop, then it springs back while twirling in parallel:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Animated.sequence([\n  // decay, then spring to start and twirl\n  Animated.decay(position, {\n    // coast to a stop\n    velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release\n    deceleration: 0.997\n  }),\n  Animated.parallel([\n    // after decay, in parallel:\n    Animated.spring(position, {\n      toValue: { x: 0, y: 0 } // return to start\n    }),\n    Animated.timing(twirl, {\n      // and twirl\n      toValue: 360\n    })\n  ])\n]).start(); // start the sequence group\n")),(0,a.kt)("p",null,"If one animation is stopped or interrupted, then all other animations in the group are also stopped. ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.parallel")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"stopTogether")," option that can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to disable this."),(0,a.kt)("p",null,"You can find a full list of composition methods in the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#composing-animations"}),"Composing animations")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API reference."),(0,a.kt)("h3",m({},{id:"combining-animated-values"}),"Combining animated values"),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#combining-animated-values"}),"combine two animated values")," via addition, multiplication, division, or modulo to make a new animated value."),(0,a.kt)("p",null,"There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --\x3e 0.5x):"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const a = new Animated.Value(1);\nconst b = Animated.divide(1, a);\n\nAnimated.spring(a, {\n  toValue: 2\n}).start();\n")),(0,a.kt)("h3",m({},{id:"interpolation"}),"Interpolation"),(0,a.kt)("p",null,"Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value."),(0,a.kt)("p",null,"A mapping to convert a 0-1 range to a 0-100 range would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [0, 1],\n  outputRange: [0, 100]\n});\n")),(0,a.kt)("p",null,"For example, you may want to think about your ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," as going from 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to 1. This can be done by modifying ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," from the example above like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"  style={{\n    opacity: this.state.fadeAnim, // Binds directly\n    transform: [{\n      translateY: this.state.fadeAnim.interpolate({\n        inputRange: [0, 1],\n        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0\n      }),\n    }],\n  }}\n")),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#interpolate"}),(0,a.kt)("inlineCode",{parentName:"a"},"interpolate()"))," supports multiple range segments as well, which is handy for defining dead zones and other handy tricks. For example, to get a negation relationship at -300 that goes to 0 at -100, then back up to 1 at 0, and then back down to zero at 100 followed by a dead-zone that remains at 0 for everything beyond that, you could do:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [-300, -100, 0, 100, 101],\n  outputRange: [300, 0, 1, 0, 0]\n});\n")),(0,a.kt)("p",null,"Which would map like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"Input | Output\n------|-------\n  -400|    450\n  -300|    300\n  -200|    150\n  -100|      0\n   -50|    0.5\n     0|      1\n    50|    0.5\n   100|      0\n   101|      0\n   200|      0\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolate()")," also supports mapping to strings, allowing you to animate colors as well as values with units. For example, if you wanted to animate a rotation you could do:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [0, 360],\n  outputRange: ['0deg', '360deg']\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolate()")," also supports arbitrary easing functions, many of which are already implemented in the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/easing"}),(0,a.kt)("inlineCode",{parentName:"a"},"Easing"))," module. ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolate()")," also has configurable behavior for extrapolating the ",(0,a.kt)("inlineCode",{parentName:"p"},"outputRange"),". You can set the extrapolation by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"extrapolate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"extrapolateLeft"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"extrapolateRight")," options. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," but you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"clamp")," to prevent the output value from exceeding ",(0,a.kt)("inlineCode",{parentName:"p"},"outputRange"),"."),(0,a.kt)("h3",m({},{id:"tracking-dynamic-values"}),"Tracking dynamic values"),(0,a.kt)("p",null,"Animated values can also track other values. Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"toValue"),' of an animation to another animated value instead of a plain number. For example, a "Chat Heads" animation like the one used by Messenger on Android could be implemented with a ',(0,a.kt)("inlineCode",{parentName:"p"},"spring()")," pinned on another animated value, or with ",(0,a.kt)("inlineCode",{parentName:"p"},"timing()")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," of 0 for rigid tracking. They can also be composed with interpolations:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Animated.spring(follower, { toValue: leader }).start();\nAnimated.timing(opacity, {\n  toValue: pan.x.interpolate({\n    inputRange: [0, 300],\n    outputRange: [1, 0]\n  })\n}).start();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"leader")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"follower")," animated values would be implemented using ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.ValueXY()"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueXY")," is a handy way to deal with 2D interactions, such as panning or dragging. It is a wrapper that contains two ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," instances and some helper functions that call through to them, making ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueXY")," a drop-in replacement for ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," in many cases. It allows us to track both x and y values in the example above."),(0,a.kt)("h3",m({},{id:"tracking-gestures"}),"Tracking gestures"),(0,a.kt)("p",null,"Gestures, like panning or scrolling, and other events can map directly to animated values using ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/animated#event"}),(0,a.kt)("inlineCode",{parentName:"a"},"Animated.event")),". This is done with a structured map syntax so that values can be extracted from complex event objects. The first level is an array to allow mapping across multiple args, and that array contains nested objects."),(0,a.kt)("p",null,"For example, when working with horizontal scrolling gestures, you would do the following in order to map ",(0,a.kt)("inlineCode",{parentName:"p"},"event.nativeEvent.contentOffset.x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollX")," (an ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"})," onScroll={Animated.event(\n   // scrollX = e.nativeEvent.contentOffset.x\n   [{ nativeEvent: {\n        contentOffset: {\n          x: scrollX\n        }\n      }\n    }]\n )}\n")),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder"),", you could use the following code to extract the x and y positions from ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState.dx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState.dy"),". We use a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," in the first position of the array, as we are only interested in the second argument passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," handler, which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"onPanResponderMove={Animated.event(\n  [null, // ignore the native event\n  // extract dx and dy from gestureState\n  // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'\n  {dx: pan.x, dy: pan.y}\n])}\n")),(0,a.kt)("h3",m({},{id:"responding-to-the-current-animation-value"}),"Responding to the current animation value"),(0,a.kt)("p",null,"You may notice that there is no clear way to read the current value while animating. This is because the value may only be known in the native runtime due to optimizations. If you need to run JavaScript in response to the current value, there are two approaches:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spring.stopAnimation(callback)")," will stop the animation and invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," with the final value. This is useful when making gesture transitions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spring.addListener(callback)")," will invoke ",(0,a.kt)("inlineCode",{parentName:"li"},"callback")," asynchronously while the animation is running, providing a recent value. This is useful for triggering state changes, for example snapping a bobble to a new option as the user drags it closer, because these larger state changes are less sensitive to a few frames of lag compared to continuous gestures like panning which need to run at 60 fps.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," is designed to be fully serializable so that animations can be run in a high performance way, independent of the normal JavaScript event loop. This does influence the API, so keep that in mind when it seems a little trickier to do something compared to a fully synchronous system. Check out ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value.addListener")," as a way to work around some of these limitations, but use it sparingly since it might have performance implications in the future."),(0,a.kt)("h3",m({},{id:"using-the-native-driver"}),"Using the native driver"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API is designed to be serializable. By using the ",(0,a.kt)("a",m({parentName:"p"},{href:"/blog/2017/02/14/using-native-driver-for-animated"}),"native driver"),", we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation."),(0,a.kt)("p",null,"To use the native driver for normal animations add ",(0,a.kt)("inlineCode",{parentName:"p"},"useNativeDriver: true")," to the animation config when starting it."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true // <-- Add this\n}).start();\n")),(0,a.kt)("p",null,"Animated values are only compatible with one driver so if you use native driver when starting an animation on a value, make sure every animation on that value also uses the native driver."),(0,a.kt)("p",null,"The native driver also works with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event"),". This is especially useful for animations that follow the scroll position as without the native driver, the animation will always run a frame behind the gesture due to the async nature of React Native."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"<Animated.ScrollView // <-- Use the Animated ScrollView wrapper\n  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed\n  onScroll={Animated.event(\n    [\n      {\n        nativeEvent: {\n          contentOffset: { y: this.state.animatedValue }\n        }\n      }\n    ],\n    { useNativeDriver: true } // <-- Add this\n  )}>\n  {content}\n</Animated.ScrollView>\n")),(0,a.kt)("p",null,"You can see the native driver in action by running the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/tree/master/packages/rn-tester/"}),"RNTester app"),", then loading the Native Animated Example. You can also take a look at the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js"}),"source code")," to learn how these examples were produced."),(0,a.kt)("h4",m({},{id:"caveats"}),"Caveats"),(0,a.kt)("p",null,"Not everything you can do with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," is currently supported by the native driver. The main limitation is that you can only animate non-layout properties: things like ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"opacity")," will work, but flexbox and position properties will not. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.event"),", it will only work with direct events and not bubbling events. This means it does not work with ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," but does work with things like ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView#onScroll"),"."),(0,a.kt)("p",null,"When an animation is running, it can prevent ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualizedList")," components from rendering more rows. If you need to run a long or looping animation while the user is scrolling through a list, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"isInteraction: false")," in your animation's config to prevent this issue."),(0,a.kt)("h3",m({},{id:"bear-in-mind"}),"Bear in mind"),(0,a.kt)("p",null,"While using transform styles such as ",(0,a.kt)("inlineCode",{parentName:"p"},"rotateY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rotateX"),", and others ensure the transform style ",(0,a.kt)("inlineCode",{parentName:"p"},"perspective")," is in place. At this time some animations may not render on Android without it. Example below."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"<Animated.View\n  style={{\n    transform: [\n      { scale: this.state.scale },\n      { rotateY: this.state.rotateY },\n      { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS\n    ]\n  }}\n/>\n")),(0,a.kt)("h3",m({},{id:"additional-examples"}),"Additional examples"),(0,a.kt)("p",null,"The RNTester app has various examples of ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," in use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/tree/master/packages/rn-tester/js/examples/Animated/AnimatedGratuitousApp"}),"AnimatedGratuitousApp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js"}),"NativeAnimationsExample"))),(0,a.kt)("h2",m({},{id:"layoutanimation-api"}),(0,a.kt)("inlineCode",{parentName:"h2"},"LayoutAnimation")," API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," allows you to globally configure ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),' animations that will be used for all views in the next render/layout cycle. This is useful for doing flexbox layout updates without bothering to measure or calculate specific properties in order to animate them directly, and is especially useful when layout changes may affect ancestors, for example a "see more" expansion that also increases the size of the parent and pushes down the row below which would otherwise require explicit coordination between the components in order to animate them all in sync.'),(0,a.kt)("p",null,"Note that although ",(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," is very powerful and can be quite useful, it provides much less control than ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," and other animation libraries, so you may need to use another approach if you can't get ",(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," to do what you want."),(0,a.kt)("p",null,"Note that in order to get this to work on ",(0,a.kt)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"UIManager.setLayoutAnimationEnabledExperimental &&\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n")),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeModules%2C%0A%20%20LayoutAnimation%2C%0A%20%20Text%2C%0A%20%20TouchableOpacity%2C%0A%20%20StyleSheet%2C%0A%20%20View%2C%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20%7B%20UIManager%20%7D%20%3D%20NativeModules%3B%0A%0AUIManager.setLayoutAnimationEnabledExperimental%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%0Aexport%20default%20class%20App%20extends%20React.Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20w%3A%20100%2C%0A%20%20%20%20h%3A%20100%2C%0A%20%20%7D%3B%0A%0A%20%20_onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Animate%20the%20update%0A%20%20%20%20LayoutAnimation.spring()%3B%0A%20%20%20%20this.setState(%7Bw%3A%20this.state.w%20%2B%2015%2C%20h%3A%20this.state.h%20%2B%2015%7D)%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7Bwidth%3A%20this.state.w%2C%20height%3A%20this.state.h%7D%5D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPress%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3EPress%20me!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20backgroundColor%3A%20'red'%2C%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20'black'%2C%0A%20%20%20%20paddingHorizontal%3A%2020%2C%0A%20%20%20%20paddingVertical%3A%2015%2C%0A%20%20%20%20marginTop%3A%2015%2C%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"This example uses a preset value, you can customize the animations as you need, see ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js"}),"LayoutAnimation.js")," for more information."),(0,a.kt)("h2",m({},{id:"additional-notes"}),"Additional notes"),(0,a.kt)("h3",m({},{id:"requestanimationframe"}),(0,a.kt)("inlineCode",{parentName:"h3"},"requestAnimationFrame")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," is a polyfill from the browser that you might be familiar with. It accepts a function as its only argument and calls that function before the next repaint. It is an essential building block for animations that underlies all of the JavaScript-based animation APIs. In general, you shouldn't need to call this yourself - the animation APIs will manage frame updates for you."),(0,a.kt)("h3",m({},{id:"setnativeprops"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setNativeProps")),(0,a.kt)("p",null,"As mentioned ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/direct-manipulation"}),"in the Direct Manipulation section"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," allows us to modify properties of native-backed components (components that are actually backed by native views, unlike composite components) directly, without having to ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," and re-render the component hierarchy."),(0,a.kt)("p",null,"We could use this in the Rebound example to update the scale - this might be helpful if the component that we are updating is deeply nested and hasn't been optimized with ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"."),(0,a.kt)("p",null,"If you find your animations with dropping frames (performing below 60 frames per second), look into using ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," to optimize them. Or you could run the animations on the UI thread rather than the JavaScript thread ",(0,a.kt)("a",m({parentName:"p"},{href:"/blog/2017/02/14/using-native-driver-for-animated"}),"with the useNativeDriver option"),". You may also want to defer any computationally intensive work until after animations are complete, using the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/interactionmanager"}),"InteractionManager"),'. You can monitor the frame rate by using the In-App Developer Menu "FPS Monitor" tool.'))}f.isMDXComponent=!0}}]);