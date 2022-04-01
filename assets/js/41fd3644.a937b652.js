"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[94173],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return A},default:function(){return C}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"using-a-listview",title:"Using List Views"},u=void 0,f={unversionedId:"using-a-listview",id:"version-0.62/using-a-listview",title:"Using List Views",description:"React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either FlatList or SectionList.",source:"@site/versioned_docs/version-0.62/using-a-listview.md",sourceDirName:".",slug:"/using-a-listview",permalink:"/docs/0.62/using-a-listview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/using-a-listview.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"using-a-listview",title:"Using List Views"},sidebar:"version-0.62/docs",previous:{title:"Using a ScrollView",permalink:"/docs/0.62/using-a-scrollview"},next:{title:"Troubleshooting",permalink:"/docs/0.62/troubleshooting"}},A=[],y={toc:A};function C(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),p),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/flatlist"}),"FlatList")," or ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/sectionlist"}),"SectionList"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," component displays a scrolling list of changing, but similarly structured, data. ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," works well for long lists of data, where the number of items might change over time. Unlike the more generic ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/using-a-scrollview"}),(0,a.kt)("inlineCode",{parentName:"a"},"ScrollView")),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," only renders elements that are currently showing on the screen, not all the elements at once."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," component requires two props: ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," is the source of information for the list. ",(0,a.kt)("inlineCode",{parentName:"p"},"renderItem")," takes one item from the source and returns a formatted component to render."),(0,a.kt)("p",null,"This example creates a basic ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," of hardcoded data. Each item in the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," props is rendered as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component. The ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatListBasics")," component then renders the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," and all ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," components."),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"FlatList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20FlatListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Devin'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dan'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dominic'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jackson'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'James'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Joel'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'John'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jillian'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jimmy'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Julie'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem.key%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"If you want to render a set of data broken into logical sections, maybe with section headers, similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"UITableView"),"s on iOS, then a ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/sectionlist"}),"SectionList")," is the way to go."),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"SectionList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SectionList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20SectionListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CSectionList%0A%20%20%20%20%20%20%20%20%20%20sections%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'D'%2C%20data%3A%20%5B'Devin'%2C%20'Dan'%2C%20'Dominic'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'J'%2C%20data%3A%20%5B'Jackson'%2C%20'James'%2C%20'Jillian'%2C%20'Jimmy'%2C%20'Joel'%2C%20'John'%2C%20'Julie'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.sectionHeader%7D%3E%7Bsection.title%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20index)%20%3D%3E%20index%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20sectionHeader%3A%20%7B%0A%20%20%20%20paddingTop%3A%202%2C%0A%20%20%20%20paddingLeft%3A%2010%2C%0A%20%20%20%20paddingRight%3A%2010%2C%0A%20%20%20%20paddingBottom%3A%202%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20backgroundColor%3A%20'rgba(247%2C247%2C247%2C1.0)'%2C%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,"One of the most common uses for a list view is displaying data that you fetch from a server. To do that, you will need to ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.62/network"}),"learn about networking in React Native"),"."))}C.isMDXComponent=!0}}]);