"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2341],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return v},toc:function(){return h},default:function(){return g}});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&p(e,n,t[n]);return e};const u={id:"communication-android",title:"Communication between native and React Native"},m=void 0,v={unversionedId:"communication-android",id:"version-0.68/communication-android",title:"Communication between native and React Native",description:"In Integrating with Existing Apps guide and Native UI Components guide we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques.",source:"@site/versioned_docs/version-0.68/communication-android.md",sourceDirName:".",slug:"/communication-android",permalink:"/docs/communication-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/communication-android.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"communication-android",title:"Communication between native and React Native"}},h=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Passing properties from native to React Native",id:"passing-properties-from-native-to-react-native",children:[],level:3},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",children:[],level:3},{value:"Limits of properties",id:"limits-of-properties",children:[],level:3}],level:2},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",children:[{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",children:[],level:3},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",children:[],level:3}],level:2}],f={toc:h};function g(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},f),p),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"In ",(0,a.kt)("a",d({parentName:"p"},{href:"integration-with-existing-apps"}),"Integrating with Existing Apps guide")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"native-components-android"}),"Native UI Components guide")," we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques."),(0,a.kt)("h2",d({},{id:"introduction"}),"Introduction"),(0,a.kt)("p",null,"React Native is inspired by React, so the basic idea of the information flow is similar. The flow in React is one-directional. We maintain a hierarchy of components, in which each component depends only on its parent and its own internal state. We do this with properties: data is passed from a parent to its children in a top-down manner. If an ancestor component relies on the state of its descendant, one should pass down a callback to be used by the descendant to update the ancestor."),(0,a.kt)("p",null,"The same concept applies to React Native. As long as we are building our application purely within the framework, we can drive our app with properties and callbacks. But, when we mix React Native and native components, we need some specific, cross-language mechanisms that would allow us to pass information between them."),(0,a.kt)("h2",d({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"Properties are the most straightforward way of cross-component communication. So we need a way to pass properties both from native to React Native, and from React Native to native."),(0,a.kt)("h3",d({},{id:"passing-properties-from-native-to-react-native"}),"Passing properties from native to React Native"),(0,a.kt)("p",null,"You can pass properties down to the React Native app by providing a custom implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate")," in your main activity. This implementation should override ",(0,a.kt)("inlineCode",{parentName:"p"},"getLaunchOptions")," to return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," with the desired properties."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReactRootView")," provides a read-write property ",(0,a.kt)("inlineCode",{parentName:"p"},"appProperties"),". After ",(0,a.kt)("inlineCode",{parentName:"p"},"appProperties")," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n')),(0,a.kt)("p",null,"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."),(0,a.kt)("p",null,"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))," Currently, JS function ",(0,a.kt)("inlineCode",{parentName:"p"},"componentWillUpdateProps")," of the top level RN component will not be called after a prop update. However, you can access the new props in ",(0,a.kt)("inlineCode",{parentName:"p"},"componentDidMount")," function.")),(0,a.kt)("h3",d({},{id:"passing-properties-from-react-native-to-native"}),"Passing properties from React Native to native"),(0,a.kt)("p",null,"The problem exposing properties of native components is covered in detail in ",(0,a.kt)("a",d({parentName:"p"},{href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"this article"),". In short, properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),", then use them in React Native as if the component was an ordinary React Native component."),(0,a.kt)("h3",d({},{id:"limits-of-properties"}),"Limits of properties"),(0,a.kt)("p",null,"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."),(0,a.kt)("p",null,"Although we have a flavor of cross-language callbacks (",(0,a.kt)("a",d({parentName:"p"},{href:"native-modules-android#callbacks"}),"described here"),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."),(0,a.kt)("h2",d({},{id:"other-ways-of-cross-language-interaction-events-and-native-modules"}),"Other ways of cross-language interaction (events and native modules)"),(0,a.kt)("p",null,"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."),(0,a.kt)("p",null,"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."),(0,a.kt)("h3",d({},{id:"calling-react-native-functions-from-native-events"}),"Calling React Native functions from native (events)"),(0,a.kt)("p",null,"Events are described in detail in ",(0,a.kt)("a",d({parentName:"p"},{href:"native-components-android#events"}),"this article"),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."),(0,a.kt)("p",null,"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."),(0,a.kt)("li",{parentName:"ul"},"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."),(0,a.kt)("li",{parentName:"ul"},"If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",(0,a.kt)("inlineCode",{parentName:"li"},"reactTag")," as an identifier).")),(0,a.kt)("h3",d({},{id:"calling-native-functions-from-react-native-native-modules"}),"Calling native functions from React Native (native modules)"),(0,a.kt)("p",null,"Native modules are Java classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",(0,a.kt)("a",d({parentName:"p"},{href:"native-modules-android"}),"this article"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Warning")),": All native modules share the same namespace. Watch out for name collisions when creating new ones.")))}g.isMDXComponent=!0}}]);