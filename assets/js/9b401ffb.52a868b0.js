"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4314],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22825:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return k},toc:function(){return h},default:function(){return g}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e};const m={id:"animatedvaluexy",title:"Animated.ValueXY"},c=void 0,k={unversionedId:"animatedvaluexy",id:"version-0.68/animatedvaluexy",title:"Animated.ValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/versioned_docs/version-0.68/animatedvaluexy.md",sourceDirName:".",slug:"/animatedvaluexy",permalink:"/docs/animatedvaluexy",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/animatedvaluexy.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"animatedvaluexy",title:"Animated.ValueXY"}},h=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[],level:3},{value:"<code>setOffset()</code>",id:"setoffset",children:[],level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[],level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[],level:3},{value:"<code>addListener()</code>",id:"addlistener",children:[],level:3},{value:"<code>removeListener()</code>",id:"removelistener",children:[],level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[],level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[],level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[],level:3},{value:"<code>getLayout()</code>",id:"getlayout",children:[],level:3},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",children:[],level:3}],level:2}],f={toc:h};function g(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},f),p),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",(0,n.kt)("a",d({parentName:"p"},{href:"animatedvalue"}),(0,n.kt)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),(0,n.kt)("h2",d({},{id:"example"}),"Example"),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"Animated.ValueXY","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20PanResponder%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20DraggableView%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onStartShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20dx%3A%20pan.x%2C%20%2F%2F%20x%2Cy%20are%20Animated.Value%0A%20%20%20%20%20%20%20%20dy%3A%20pan.y%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Animated.spring(%0A%20%20%20%20%20%20%20%20pan%2C%20%2F%2F%20Auto-multiplexed%0A%20%20%20%20%20%20%20%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D%20%2F%2F%20Back%20to%20zero%0A%20%20%20%20%20%20).start()%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bpan.getLayout()%2C%20styles.box%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20width%3A%2080%2C%0A%20%20%20%20height%3A%2080%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DraggableView%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"reference"}),"Reference"),(0,n.kt)("h2",d({},{id:"methods"}),"Methods"),(0,n.kt)("h3",d({},{id:"setvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setValue()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),(0,n.kt)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Value")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"setoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),(0,n.kt)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",(0,n.kt)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"offset"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Offset value")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"flattenoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flattenOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),(0,n.kt)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"extractoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"extractOffset()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),(0,n.kt)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"addlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),(0,n.kt)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),(0,n.kt)("p",null,"Returns a string that serves as an identifier for the listener."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",(0,n.kt)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removelistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),(0,n.kt)("p",null,"Unregister a listener. The ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"addListener()"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"removealllisteners"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),(0,n.kt)("p",null,"Remove all registered listeners."),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"stopanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"stopAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any running animation or tracking. ",(0,n.kt)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"resetanimation"}),(0,n.kt)("inlineCode",{parentName:"h3"},"resetAnimation()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),(0,n.kt)("p",null,"Stops any animation and resets the value to its original."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"getlayout"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getLayout()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"getLayout();\n")),(0,n.kt)("p",null,"Converts ",(0,n.kt)("inlineCode",{parentName:"p"},"{x, y}")," into ",(0,n.kt)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"style={this.state.anim.getLayout()}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"gettranslatetransform"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"getTranslateTransform();\n")),(0,n.kt)("p",null,"Converts ",(0,n.kt)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")))}g.isMDXComponent=!0}}]);