"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9905],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return h},default:function(){return k}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&l(e,n,t[n]);return e};const m={id:"props",title:"Props"},u=void 0,f={unversionedId:"props",id:"version-0.68/props",title:"Props",description:"Most components can be customized when they are created, with different parameters. These created parameters are called props, short for properties.",source:"@site/versioned_docs/version-0.68/props.md",sourceDirName:".",slug:"/props",permalink:"/docs/props",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/props.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"props",title:"Props"},sidebar:"User Guide",previous:{title:"PressEvent Object Type",permalink:"/docs/pressevent"},next:{title:"Rect Object Type",permalink:"/docs/rect"}},h=[],y={toc:h};function k(e){var t,n=e,{components:a}=n,l=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),l),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Most components can be customized when they are created, with different parameters. These created parameters are called ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", short for properties."),(0,r.kt)("p",null,"For example, one basic React Native component is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),". When you create an image, you can use a prop named ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," to control what image it shows."),(0,r.kt)("div",d({},{className:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Bananas%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20let%20pic%20%3D%20%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FBananavarieties.jpg'%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CImage%20source%3D%7Bpic%7D%20style%3D%7B%7Bwidth%3A%20193%2C%20height%3A%20110%2C%20marginTop%3A50%7D%7D%2F%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20Bananas%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("p",null,"Notice the braces surrounding ",(0,r.kt)("inlineCode",{parentName:"p"},"{pic}")," - these embed the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"pic")," into JSX. You can put any JavaScript expression inside braces in JSX."),(0,r.kt)("p",null,"Your own components can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),". This lets you make a single component that is used in many different places in your app, with slightly different properties in each place by referring to ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," function. Here's an example:"),(0,r.kt)("div",d({},{className:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Greeting%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%20%7Bprops.name%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20LotsOfGreetings%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7BalignItems%3A%20'center'%2C%20top%3A%2050%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Rexxar'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Jaina'%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CGreeting%20name%3D'Valeera'%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," as a prop lets us customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeting")," component, so we can reuse that component for each of our greetings. This example also uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Greeting")," component in JSX, similar to the ",(0,r.kt)("a",d({parentName:"p"},{href:"intro-react-native-components"}),"Core Components"),". The power to do this is what makes React so cool - if you find yourself wishing that you had a different set of UI primitives to work with, you can invent new ones."),(0,r.kt)("p",null,"The other new thing going on here is the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/view"}),(0,r.kt)("inlineCode",{parentName:"a"},"View"))," component. A ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/view"}),(0,r.kt)("inlineCode",{parentName:"a"},"View"))," is useful as a container for other components, to help control style and layout."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," and the basic ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/text"}),(0,r.kt)("inlineCode",{parentName:"a"},"Text")),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/image"}),(0,r.kt)("inlineCode",{parentName:"a"},"Image")),", and ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/view"}),(0,r.kt)("inlineCode",{parentName:"a"},"View"))," components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/state"}),"learn about State"),"."))}k.isMDXComponent=!0}}]);