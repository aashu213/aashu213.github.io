"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22947],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96106:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return v},default:function(){return f}});var n=a(35318),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&c(e,a,t[a]);return e};const u={id:"direct-manipulation",title:"Direct Manipulation"},h=void 0,m={unversionedId:"direct-manipulation",id:"version-0.63/direct-manipulation",title:"Direct Manipulation",description:"It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. setNativeProps is the React Native equivalent to setting properties directly on a DOM node.",source:"@site/versioned_docs/version-0.63/direct-manipulation.md",sourceDirName:".",slug:"/direct-manipulation",permalink:"/docs/0.63/direct-manipulation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/direct-manipulation.md",tags:[],version:"0.63",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"direct-manipulation",title:"Direct Manipulation"},sidebar:"version-0.63/docs",previous:{title:"iOS Native UI Components",permalink:"/docs/0.63/native-components-ios"},next:{title:"Headless JS",permalink:"/docs/0.63/headless-js-android"}},v=[{value:"setNativeProps with TouchableOpacity",id:"setnativeprops-with-touchableopacity",children:[],level:2},{value:"Composite components and setNativeProps",id:"composite-components-and-setnativeprops",children:[{value:"Forward setNativeProps to a child",id:"forward-setnativeprops-to-a-child",children:[],level:4}],level:2},{value:"setNativeProps to clear TextInput value",id:"setnativeprops-to-clear-textinput-value",children:[],level:2},{value:"Avoiding conflicts with the render function",id:"avoiding-conflicts-with-the-render-function",children:[],level:2},{value:"setNativeProps &amp; shouldComponentUpdate",id:"setnativeprops--shouldcomponentupdate",children:[],level:2},{value:"Other native methods",id:"other-native-methods",children:[{value:"measure(callback)",id:"measurecallback",children:[],level:3},{value:"measureInWindow(callback)",id:"measureinwindowcallback",children:[],level:3},{value:"measureLayout(relativeToNativeNode, onSuccess, onFail)",id:"measurelayoutrelativetonativenode-onsuccess-onfail",children:[],level:3},{value:"focus()",id:"focus",children:[],level:3},{value:"blur()",id:"blur",children:[],level:3}],level:2}],y={toc:v};function f(e){var t,a=e,{components:o}=a,c=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),c),i(t,r({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"It is sometimes necessary to make changes directly to a component without using state/props to trigger a re-render of the entire subtree. When using React in the browser for example, you sometimes need to directly modify a DOM node, and the same is true for views in mobile apps. ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is the React Native equivalent to setting properties directly on a DOM node."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Use setNativeProps when frequent re-rendering creates a performance bottleneck"),(0,n.kt)("p",{parentName:"blockquote"},"Direct manipulation will not be a tool that you reach for frequently; you will typically only be using it for creating continuous animations to avoid the overhead of rendering the component hierarchy and reconciling many views. ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is imperative and stores state in the native layer (DOM, UIView, etc.) and not within your React components, which makes your code more difficult to reason about. Before you use it, try to solve your problem with ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action"}),"shouldComponentUpdate"),".")),(0,n.kt)("h2",d({},{id:"setnativeprops-with-touchableopacity"}),"setNativeProps with TouchableOpacity"),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js"}),"TouchableOpacity")," uses ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," internally to update the opacity of its child component:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"setOpacityTo(value) {\n  // Redacted: animation related code\n  this.refs[CHILD_REF].setNativeProps({\n    opacity: value\n  });\n},\n")),(0,n.kt)("p",null,"This allows us to write the following code and know that the child will have its opacity updated in response to taps, without the child having any knowledge of that fact or requiring any changes to its implementation:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"<TouchableOpacity onPress={this._handlePress}>\n  <View style={styles.button}>\n    <Text>Press me!</Text>\n  </View>\n</TouchableOpacity>\n")),(0,n.kt)("p",null,"Let's imagine that ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," was not available. One way that we might implement it with that constraint is to store the opacity value in the state, then update that value whenever ",(0,n.kt)("inlineCode",{parentName:"p"},"onPress")," is fired:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"constructor(props) {\n  super(props);\n  this.state = { myButtonOpacity: 1, };\n}\n\nrender() {\n  return (\n    <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}\n                      onPressOut={() => this.setState({myButtonOpacity: 1})}>\n      <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>\n        <Text>Press me!</Text>\n      </View>\n    </TouchableOpacity>\n  )\n}\n")),(0,n.kt)("p",null,"This is computationally intensive compared to the original example - React needs to re-render the component hierarchy each time the opacity changes, even though other properties of the view and its children haven't changed. Usually this overhead isn't a concern but when performing continuous animations and responding to gestures, judiciously optimizing your components can improve your animations' fidelity."),(0,n.kt)("p",null,"If you look at the implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," in ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js"}),"NativeMethodsMixin")," you will notice that it is a wrapper around ",(0,n.kt)("inlineCode",{parentName:"p"},"RCTUIManager.updateView")," - this is the exact same function call that results from re-rendering - see ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/fb2ec1ea47c53c2e7b873acb1cb46192ac74274e/Libraries/Renderer/oss/ReactNativeRenderer-prod.js#L5793-L5813"}),"receiveComponent in ReactNativeBaseComponent"),"."),(0,n.kt)("h2",d({},{id:"composite-components-and-setnativeprops"}),"Composite components and setNativeProps"),(0,n.kt)("p",null,"Composite components are not backed by a native view, so you cannot call ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," on them. Consider this example:"),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"setNativeProps with Composite Components","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%7D%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%22Press%20me!%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20)%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"If you run this you will immediately see this error: ",(0,n.kt)("inlineCode",{parentName:"p"},"Touchable child must either be native or forward setNativeProps to a native component"),". This occurs because ",(0,n.kt)("inlineCode",{parentName:"p"},"MyButton")," isn't directly backed by a native view whose opacity should be set. You can think about it like this: if you define a component with ",(0,n.kt)("inlineCode",{parentName:"p"},"createReactClass")," you would not expect to be able to set a style prop on it and have that work - you would need to pass the style prop down to a child, unless you are wrapping a native component. Similarly, we are going to forward ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," to a native-backed child component."),(0,n.kt)("h4",d({},{id:"forward-setnativeprops-to-a-child"}),"Forward setNativeProps to a child"),(0,n.kt)("p",null,"All we need to do is provide a ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," method on our component that calls ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," on the appropriate child with the given arguments."),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"Forwarding setNativeProps","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20MyButton%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20setNativeProps%20%3D%20(nativeProps)%20%3D%3E%20%7B%0A%20%20%20%20_root.setNativeProps(nativeProps)%3B%0A%20%20%7D%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%20ref%3D%7Bcomponent%20%3D%3E%20_root%20%3D%20component%7D%20%7B...props%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7Bprops.label%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%7D%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CMyButton%20label%3D%22Press%20me!%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20)%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"You can now use ",(0,n.kt)("inlineCode",{parentName:"p"},"MyButton")," inside of ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"! A sidenote for clarity: we used the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element"}),"ref callback")," syntax here, rather than the traditional string-based ref."),(0,n.kt)("p",null,"You may have noticed that we passed all of the props down to the child view using ",(0,n.kt)("inlineCode",{parentName:"p"},"{...this.props}"),". The reason for this is that ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," is actually a composite component, and so in addition to depending on ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," on its child, it also requires that the child perform touch handling. To do this, it passes on ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/0.63/view#onmoveshouldsetresponder"}),"various props")," that call back to the ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," component. ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),", in contrast, is backed by a native view and only requires that we implement ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"."),(0,n.kt)("h2",d({},{id:"setnativeprops-to-clear-textinput-value"}),"setNativeProps to clear TextInput value"),(0,n.kt)("p",null,"Another very common use case of ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," is to clear the value of a TextInput. The ",(0,n.kt)("inlineCode",{parentName:"p"},"controlled")," prop of TextInput can sometimes drop characters when the ",(0,n.kt)("inlineCode",{parentName:"p"},"bufferDelay")," is low and the user types very quickly. Some developers prefer to skip this prop entirely and instead use ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," to directly manipulate the TextInput value when necessary. For example, the following code demonstrates clearing the input when you tap a button:"),(0,n.kt)("div",d({},{className:"snack-player","data-snack-name":"Clear text","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20TextInput%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20clearText%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20_textInput.setNativeProps(%7Btext%3A%20''%7D)%3B%0A%20%20%7D%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20ref%3D%7Bcomponent%20%3D%3E%20_textInput%20%3D%20component%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2050%2C%20width%3A%20200%2C%20marginHorizontal%3A%2020%2C%20borderWidth%3A%201%2C%20borderColor%3A%20'%23ccc'%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BclearText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EClear%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("h2",d({},{id:"avoiding-conflicts-with-the-render-function"}),"Avoiding conflicts with the render function"),(0,n.kt)("p",null,"If you update a property that is also managed by the render function, you might end up with some unpredictable and confusing bugs because anytime the component re-renders and that property changes, whatever value was previously set from ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps")," will be completely ignored and overridden."),(0,n.kt)("h2",d({},{id:"setnativeprops--shouldcomponentupdate"}),"setNativeProps & shouldComponentUpdate"),(0,n.kt)("p",null,"By ",(0,n.kt)("a",d({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation"}),"intelligently applying ",(0,n.kt)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," you can avoid the unnecessary overhead involved in reconciling unchanged component subtrees, to the point where it may be performant enough to use ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"."),(0,n.kt)("h2",d({},{id:"other-native-methods"}),"Other native methods"),(0,n.kt)("p",null,"The methods described here are available on most of the default components provided by React Native. Note, however, that they are ",(0,n.kt)("em",{parentName:"p"},"not")," available on composite components that aren't directly backed by a native view. This will generally include most components that you define in your own app."),(0,n.kt)("h3",d({},{id:"measurecallback"}),"measure(callback)"),(0,n.kt)("p",null,"Determines the location on screen, width, and height of the given view and returns the values via an async callback. If successful, the callback will be called with the following arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x"),(0,n.kt)("li",{parentName:"ul"},"y"),(0,n.kt)("li",{parentName:"ul"},"width"),(0,n.kt)("li",{parentName:"ul"},"height"),(0,n.kt)("li",{parentName:"ul"},"pageX"),(0,n.kt)("li",{parentName:"ul"},"pageY")),(0,n.kt)("p",null,"Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible and you don't need ",(0,n.kt)("inlineCode",{parentName:"p"},"pageX")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"pageY"),", consider using the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/0.63/view#onlayout"}),(0,n.kt)("inlineCode",{parentName:"a"},"onLayout")," prop")," instead."),(0,n.kt)("h3",d({},{id:"measureinwindowcallback"}),"measureInWindow(callback)"),(0,n.kt)("p",null,"Determines the location of the given view in the window and returns the values via an async callback. If the React root view is embedded in another native view, this will give you the absolute coordinates. If successful, the callback will be called with the following arguments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x"),(0,n.kt)("li",{parentName:"ul"},"y"),(0,n.kt)("li",{parentName:"ul"},"width"),(0,n.kt)("li",{parentName:"ul"},"height")),(0,n.kt)("h3",d({},{id:"measurelayoutrelativetonativenode-onsuccess-onfail"}),"measureLayout(relativeToNativeNode, onSuccess, onFail)"),(0,n.kt)("p",null,"Like ",(0,n.kt)("inlineCode",{parentName:"p"},"measure()"),", but measures the view relative to an ancestor, specified as ",(0,n.kt)("inlineCode",{parentName:"p"},"relativeToNativeNode"),". This means that the returned x, y are relative to the origin x, y of the ancestor view."),(0,n.kt)("p",null,"As always, to obtain a native node handle for a component, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"findNodeHandle(component)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { findNodeHandle } from 'react-native';\n")),(0,n.kt)("h3",d({},{id:"focus"}),"focus()"),(0,n.kt)("p",null,"Requests focus for the given input or view. The exact behavior triggered will depend on the platform and type of view."),(0,n.kt)("h3",d({},{id:"blur"}),"blur()"),(0,n.kt)("p",null,"Removes focus from an input or view. This is the opposite of ",(0,n.kt)("inlineCode",{parentName:"p"},"focus()"),"."))}f.isMDXComponent=!0}}]);