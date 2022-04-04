"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[986],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,y=p["".concat(s,".").concat(u)]||p[u]||A[u]||l;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},70627:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return y},toc:function(){return h},default:function(){return b}});var n=a(35318),o=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e};const p={id:"stylesheet",title:"StyleSheet"},u=void 0,y={unversionedId:"stylesheet",id:"stylesheet",title:"StyleSheet",description:"A StyleSheet is an abstraction similar to CSS StyleSheets",source:"@site/../docs/stylesheet.md",sourceDirName:".",slug:"/stylesheet",permalink:"/docs/next/stylesheet",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/stylesheet.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"stylesheet",title:"StyleSheet"}},h=[{value:"Methods",id:"methods",children:[{value:"<code>compose()</code>",id:"compose",children:[],level:3},{value:"<code>create()</code>",id:"create",children:[],level:3},{value:"<code>flatten()</code>",id:"flatten",children:[],level:3},{value:"<code>setStyleAttributePreprocessor()</code>",id:"setstyleattributepreprocessor",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"<code>absoluteFill</code>",id:"absolutefill",children:[],level:3},{value:"<code>absoluteFillObject</code>",id:"absolutefillobject",children:[],level:3},{value:"<code>hairlineWidth</code>",id:"hairlinewidth",children:[],level:3}],level:2},{value:"<code>absoluteFill</code> vs. <code>absoluteFillObject</code>",id:"absolutefill-vs-absolutefillobject",children:[],level:2}],m={toc:h};function b(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=A(A({},m),d),l(t,r({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A StyleSheet is an abstraction similar to CSS StyleSheets"),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"StyleSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20marginTop%3A%2016%2C%0A%20%20%20%20paddingVertical%3A%208%2C%0A%20%20%20%20borderWidth%3A%204%2C%0A%20%20%20%20borderColor%3A%20%22%2320232a%22%2C%0A%20%20%20%20borderRadius%3A%206%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20color%3A%20%22%2320232a%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"Code quality tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By moving styles away from the render function, you're making the code easier to understand."),(0,n.kt)("li",{parentName:"ul"},"Naming the styles is a good way to add meaning to the low level components in the render function.")),(0,n.kt)("hr",null),(0,n.kt)("h1",A({},{id:"reference"}),"Reference"),(0,n.kt)("h2",A({},{id:"methods"}),"Methods"),(0,n.kt)("h3",A({},{id:"compose"}),(0,n.kt)("inlineCode",{parentName:"h3"},"compose()")),(0,n.kt)("pre",null,(0,n.kt)("code",A({parentName:"pre"},{className:"language-jsx"}),"static compose(style1: object, style2: object): object | array<object>\n")),(0,n.kt)("p",null,"Combines two styles such that ",(0,n.kt)("inlineCode",{parentName:"p"},"style2")," will override any styles in ",(0,n.kt)("inlineCode",{parentName:"p"},"style1"),". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"Compose","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bcontainer%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Btext%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20color%3A%20'%23000'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20lists%20%3D%20StyleSheet.create(%7B%0A%20%20listContainer%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%0A%20%20%7D%2C%0A%20%20listItem%3A%20%7B%0A%20%20%20%20fontStyle%3A%20'italic'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20container%20%3D%20StyleSheet.compose(page.container%2C%20lists.listContainer)%3B%0Aconst%20text%20%3D%20StyleSheet.compose(page.text%2C%20lists.listItem)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"create"}),(0,n.kt)("inlineCode",{parentName:"h3"},"create()")),(0,n.kt)("pre",null,(0,n.kt)("code",A({parentName:"pre"},{className:"language-jsx"}),"static create(obj: object): object\n")),(0,n.kt)("p",null,"Creates a StyleSheet style reference from the given object."),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"flatten"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flatten()")),(0,n.kt)("pre",null,(0,n.kt)("code",A({parentName:"pre"},{className:"language-jsx"}),"static flatten(style: array<object>): object\n")),(0,n.kt)("p",null,"Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"StyleSheet.register"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Referring to style objects directly will deprive you of these optimizations.")),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"Flatten","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bpage.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7BflattenStyle%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%20%20%3CText%3EFlatten%20Style%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bpage.code%7D%3E%0A%20%20%20%20%20%20%7BJSON.stringify(flattenStyle%2C%20null%2C%202)%7D%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20code%3A%20%7B%0A%20%20%20%20marginTop%3A%2012%2C%0A%20%20%20%20padding%3A%2012%2C%0A%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20color%3A%20%22%23666%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20typography%20%3D%20StyleSheet.create(%7B%0A%20%20header%3A%20%7B%0A%20%20%20%20color%3A%20%22%2361dafb%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20marginBottom%3A%2036%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20flattenStyle%20%3D%20StyleSheet.flatten(%5B%0A%20%20page.text%2C%0A%20%20typography.header%0A%5D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"This method internally uses ",(0,n.kt)("inlineCode",{parentName:"p"},"StyleSheetRegistry.getStyleByID(style)")," to resolve style objects represented by IDs. Thus, an array of style objects (instances of ",(0,n.kt)("inlineCode",{parentName:"p"},"StyleSheet.create()"),"), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"setstyleattributepreprocessor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setStyleAttributePreprocessor()")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING: EXPERIMENTAL.")," Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk.")),(0,n.kt)("pre",null,(0,n.kt)("code",A({parentName:"pre"},{className:"language-jsx"}),"static setStyleAttributePreprocessor(property: string, process: (propValue: any) => any)\n")),(0,n.kt)("p",null,"Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."),(0,n.kt)("h2",A({},{id:"properties"}),"Properties"),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"absolutefill"}),(0,n.kt)("inlineCode",{parentName:"h3"},"absoluteFill")),(0,n.kt)("p",null,"A very common pattern is to create overlays with position absolute and zero positioning (",(0,n.kt)("inlineCode",{parentName:"p"},"position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"),"), so ",(0,n.kt)("inlineCode",{parentName:"p"},"absoluteFill")," can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"absoluteFill","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"absolutefillobject"}),(0,n.kt)("inlineCode",{parentName:"h3"},"absoluteFillObject")),(0,n.kt)("p",null,"Sometimes you may want ",(0,n.kt)("inlineCode",{parentName:"p"},"absoluteFill")," but with a couple tweaks - ",(0,n.kt)("inlineCode",{parentName:"p"},"absoluteFillObject")," can be used to create a customized entry in a ",(0,n.kt)("inlineCode",{parentName:"p"},"StyleSheet"),", e.g.:"),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"absoluteFillObject","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%2050%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFillObject%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h3",A({},{id:"hairlinewidth"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hairlineWidth")),(0,n.kt)("p",null,"This is defined as the width of a thin line on the platform. It can be used as the thickness of a border or division between two elements. Example:"),(0,n.kt)("div",A({},{className:"snack-player","data-snack-name":"hairlineWidth","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3EReact%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3ENative%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%0A%20%20%7D%2C%0A%20%20row%3A%20%7B%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20borderBottomColor%3A%20%22red%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"This constant will always be a round number of pixels (so a line defined by it can look crisp) and will try to match the standard width of a thin line on the underlying platform. However, you should not rely on it being a constant size, because on different platforms and screen densities its value may be calculated differently."),(0,n.kt)("p",null,"A line with hairline width may not be visible if your simulator is downscaled."),(0,n.kt)("hr",null),(0,n.kt)("h2",A({},{id:"absolutefill-vs-absolutefillobject"}),(0,n.kt)("inlineCode",{parentName:"h2"},"absoluteFill")," vs. ",(0,n.kt)("inlineCode",{parentName:"h2"},"absoluteFillObject")),(0,n.kt)("p",null,"Currently, there is no difference between using ",(0,n.kt)("inlineCode",{parentName:"p"},"absoluteFill")," vs. ",(0,n.kt)("inlineCode",{parentName:"p"},"absoluteFillObject"),"."))}b.isMDXComponent=!0}}]);