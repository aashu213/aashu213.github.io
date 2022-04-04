"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1792],{35318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),k=l,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},60008:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return k},metadata:function(){return c},toc:function(){return N},default:function(){return g}});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e};const s={id:"animatedvalue",title:"Animated.Value"},k=void 0,c={unversionedId:"animatedvalue",id:"animatedvalue",title:"Animated.Value",description:"Standard value for driving animations. One Animated.Value can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling setValue) will stop any previous ones.",source:"@site/../docs/animatedvalue.md",sourceDirName:".",slug:"/animatedvalue",permalink:"/docs/next/animatedvalue",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/animatedvalue.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"animatedvalue",title:"Animated.Value"}},N=[{value:"Methods",id:"methods",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[],level:3},{value:"<code>setOffset()</code>",id:"setoffset",children:[],level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[],level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[],level:3},{value:"<code>addListener()</code>",id:"addlistener",children:[],level:3},{value:"<code>removeListener()</code>",id:"removelistener",children:[],level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[],level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[],level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[],level:3},{value:"<code>interpolate()</code>",id:"interpolate",children:[],level:3},{value:"<code>animate()</code>",id:"animate",children:[],level:3},{value:"<code>stopTracking()</code>",id:"stoptracking",children:[],level:3},{value:"<code>track()</code>",id:"track",children:[],level:3}],level:2}],h={toc:N};function g(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},h),m),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Standard value for driving animations. One ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.Value")," can drive multiple properties in a synchronized fashion, but can only be driven by one mechanism at a time. Using a new mechanism (e.g. starting a new animation, or calling ",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),") will stop any previous ones."),(0,n.kt)("p",null,"Typically initialized with ",(0,n.kt)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"reference"}),"Reference"),(0,n.kt)("h2",d({},{id:"methods"}),"Methods"),(0,n.kt)("h3",d({},{id:"setvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setValue()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),(0,n.kt)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Value")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"setoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),(0,n.kt)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"offset"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Offset value")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"flattenoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flattenOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),(0,n.kt)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"extractoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"extractOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),(0,n.kt)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),(0,n.kt)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),(0,n.kt)("p",null,"Returns a string that serves as an identifier for the listener."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",(0,n.kt)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),(0,n.kt)("p",null,"Unregister a listener. The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),(0,n.kt)("p",null,"Remove all registered listeners."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stopanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any running animation or tracking. ",(0,n.kt)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"resetanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"resetAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any animation and resets the value to its original."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"interpolate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"interpolate()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"interpolate(config);\n")),(0,n.kt)("p",null,"Interpolates the value before updating the property, e.g. mapping 0-1 to 0-10."),(0,n.kt)("p",null,"See ",(0,n.kt)("inlineCode",{parentName:"p"},"AnimatedInterpolation.js")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"See below.")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," object is composed of the following keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"inputRange"),": an array of numbers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"outputRange"),": an array of numbers or strings"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," (optional): a function that returns a number, given an input number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolate")," (optional): a string such as 'extend', 'identity', or 'clamp'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolateLeft")," (optional): a string such as 'extend', 'identity', or 'clamp'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extrapolateRight")," (optional): a string such as 'extend', 'identity', or 'clamp'")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"animate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animate()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"animate(animation, callback);\n")),(0,n.kt)("p",null,"Typically only used internally, but could be used by a custom Animation class."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"animation"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Animation"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"See ",(0,n.kt)("inlineCode",{parentName:"td"},"Animation.js"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stoptracking"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopTracking()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopTracking();\n")),(0,n.kt)("p",null,"Typically only used internally."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"track"}),(0,n.kt)("inlineCode",{parentName:"h3"},"track()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"track(tracking);\n")),(0,n.kt)("p",null,"Typically only used internally."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"tracking"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"AnimatedNode"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"See ",(0,n.kt)("inlineCode",{parentName:"td"},"AnimatedNode.js"))))))}g.isMDXComponent=!0}}]);