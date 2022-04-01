"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[62814],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return m},default:function(){return T}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&c(e,n,t[n]);return e};const u={id:"toastandroid",title:"ToastAndroid"},h=void 0,f={unversionedId:"toastandroid",id:"version-0.61/toastandroid",title:"ToastAndroid",description:"This exposes the native ToastAndroid module as a JS module. This has a function 'show' which takes the following parameters:",source:"@site/versioned_docs/version-0.61/toastandroid.md",sourceDirName:".",slug:"/toastandroid",permalink:"/docs/0.61/toastandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/toastandroid.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"toastandroid",title:"ToastAndroid"},sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 TimePickerAndroid",permalink:"/docs/0.61/timepickerandroid"},next:{title:"Transforms",permalink:"/docs/0.61/transforms"}},m=[{value:"Advanced usage:",id:"advanced-usage",children:[],level:3},{value:"Methods",id:"methods",children:[{value:"<code>show()</code>",id:"show",children:[],level:3},{value:"<code>showWithGravity()</code>",id:"showwithgravity",children:[],level:3},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"<code>SHORT</code>",id:"short",children:[],level:3},{value:"<code>LONG</code>",id:"long",children:[],level:3},{value:"<code>TOP</code>",id:"top",children:[],level:3},{value:"<code>BOTTOM</code>",id:"bottom",children:[],level:3},{value:"<code>CENTER</code>",id:"center",children:[],level:3}],level:2}],v={toc:m};function T(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),c),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This exposes the native ToastAndroid module as a JS module. This has a function 'show' which takes the following parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"String message: A string with the text to toast"),(0,r.kt)("li",{parentName:"ol"},"int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG")),(0,r.kt)("p",null,"There is also a function ",(0,r.kt)("inlineCode",{parentName:"p"},"showWithGravity")," to specify the layout gravity. May be ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER."),(0,r.kt)("p",null,"The 'showWithGravityAndOffset' function adds on the ability to specify offset These offset values will translate to pixels."),(0,r.kt)("p",null,"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"import { ToastAndroid } from 'react-native';\n\nToastAndroid.show(\n  'A pikachu appeared nearby !',\n  ToastAndroid.SHORT\n);\nToastAndroid.showWithGravity(\n  'All Your Base Are Belong To Us',\n  ToastAndroid.SHORT,\n  ToastAndroid.CENTER\n);\nToastAndroid.showWithGravityAndOffset(\n  'A wild toast appeared!',\n  ToastAndroid.LONG,\n  ToastAndroid.BOTTOM,\n  25,\n  50\n);\n")),(0,r.kt)("h3",p({},{id:"advanced-usage"}),"Advanced usage:"),(0,r.kt)("p",null,"The ToastAndroid API is imperative and this might present itself as an issue, but there is actually a way(hack) to expose a declarative component from it. See an example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport { View, Button, ToastAndroid } from 'react-native';\n\n// a component that calls the imperative ToastAndroid API\nconst Toast = (props) => {\n  if (props.visible) {\n    ToastAndroid.showWithGravityAndOffset(\n      props.message,\n      ToastAndroid.LONG,\n      ToastAndroid.BOTTOM,\n      25,\n      50\n    );\n    return null;\n  }\n  return null;\n};\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false\n    };\n  }\n\n  handleButtonPress = () => {\n    this.setState(\n      {\n        visible: true\n      },\n      () => {\n        this.hideToast();\n      }\n    );\n  };\n\n  hideToast = () => {\n    this.setState({\n      visible: false\n    });\n  };\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Toast visible={this.state.visible} message=\"Example\" />\n        <Button\n          title=\"Toggle Modal\"\n          onPress={this.handleButtonPress}\n        />\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h1",p({},{id:"reference"}),"Reference"),(0,r.kt)("h2",p({},{id:"methods"}),"Methods"),(0,r.kt)("h3",p({},{id:"show"}),(0,r.kt)("inlineCode",{parentName:"h3"},"show()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static show(message, duration)\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"showwithgravity"}),(0,r.kt)("inlineCode",{parentName:"h3"},"showWithGravity()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static showWithGravity(message, duration, gravity)\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"showwithgravityandoffset"}),(0,r.kt)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),(0,r.kt)("h2",p({},{id:"properties"}),"Properties"),(0,r.kt)("h3",p({},{id:"short"}),(0,r.kt)("inlineCode",{parentName:"h3"},"SHORT")),(0,r.kt)("p",null,"Indicates the duration on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.SHORT;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"long"}),(0,r.kt)("inlineCode",{parentName:"h3"},"LONG")),(0,r.kt)("p",null,"Indicates the duration on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.LONG;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"top"}),(0,r.kt)("inlineCode",{parentName:"h3"},"TOP")),(0,r.kt)("p",null,"Indicates the position on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.TOP;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"bottom"}),(0,r.kt)("inlineCode",{parentName:"h3"},"BOTTOM")),(0,r.kt)("p",null,"Indicates the position on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.BOTTOM;\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"center"}),(0,r.kt)("inlineCode",{parentName:"h3"},"CENTER")),(0,r.kt)("p",null,"Indicates the position on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.CENTER;\n")))}T.isMDXComponent=!0}}]);