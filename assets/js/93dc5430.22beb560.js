"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97373],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(c,".").concat(h)]||u[h]||s[h]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return k},toc:function(){return m},default:function(){return f}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e};const u={id:"switch",title:"Switch"},h=void 0,k={unversionedId:"switch",id:"switch",title:"Switch",description:"Renders a boolean input.",source:"@site/../docs/switch.md",sourceDirName:".",slug:"/switch",permalink:"/docs/next/switch",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/switch.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"switch",title:"Switch"},sidebar:"components",previous:{title:"StatusBar",permalink:"/docs/next/statusbar"},next:{title:"Text",permalink:"/docs/next/text"}},m=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[],level:3},{value:"<code>disabled</code>",id:"disabled",children:[],level:3},{value:'<code>ios_backgroundColor</code> <div class="label ios">iOS</div>',id:"ios_backgroundcolor-ios",children:[],level:3},{value:"<code>onChange</code>",id:"onchange",children:[],level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[],level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[],level:3},{value:"<code>trackColor</code>",id:"trackcolor",children:[],level:3},{value:"<code>value</code>",id:"value",children:[],level:3}],level:2}],b={toc:m};function f(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},b),d),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Renders a boolean input."),(0,a.kt)("p",null,"This is a controlled component that requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),(0,a.kt)("h2",s({},{id:"example"}),"Example"),(0,a.kt)("div",s({},{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%22%23767577%22%2C%20true%3A%20%22%2381b0ff%22%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%22%23f5dd4b%22%20%3A%20%22%23f4f3f4%22%7D%0A%20%20%20%20%20%20%20%20ios_backgroundColor%3D%22%233e3e3e%22%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%0A%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",s({},{id:"reference"}),"Reference"),(0,a.kt)("h2",s({},{id:"props"}),"Props"),(0,a.kt)("h3",s({},{id:"view-props"}),(0,a.kt)("a",s({parentName:"h3"},{href:"/docs/next/view#props"}),"View Props")),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"disabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,a.kt)("p",null,"If true the user won't be able to toggle the switch."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"ios_backgroundcolor-ios"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ios_backgroundColor")," ",(0,a.kt)("div",{class:"label ios"},"iOS")),(0,a.kt)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," or when the switch is disabled (and the switch is translucent)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," instead."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"function")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"onvaluechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,a.kt)("p",null,"Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"function")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"thumbcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,a.kt)("p",null,"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"trackcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"trackColor")),(0,a.kt)("p",null,"Custom colors for the switch track."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS"),": When the switch value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/next/switch#ios_backgroundColor"}),(0,a.kt)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"object: { false: ",(0,a.kt)("a",s({parentName:"td"},{href:"/docs/next/colors"}),"color"),", true: ",(0,a.kt)("a",s({parentName:"td"},{href:"/docs/next/colors"}),"color")," }")))),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"value"}),(0,a.kt)("inlineCode",{parentName:"h3"},"value")),(0,a.kt)("p",null,"The value of the switch. If true the switch will be turned on. Default value is false."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"bool")))))}f.isMDXComponent=!0}}]);