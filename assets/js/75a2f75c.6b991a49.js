"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[11460],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=a,m=s["".concat(d,".").concat(b)]||s[b]||u[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},99106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return b},metadata:function(){return m},toc:function(){return h},default:function(){return y}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const s={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},b=void 0,m={unversionedId:"keyboardavoidingview",id:"version-0.61/keyboardavoidingview",title:"KeyboardAvoidingView",description:"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the position of the keyboard.",source:"@site/versioned_docs/version-0.61/keyboardavoidingview.md",sourceDirName:".",slug:"/keyboardavoidingview",permalink:"/docs/0.61/keyboardavoidingview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/keyboardavoidingview.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"keyboardavoidingview",title:"KeyboardAvoidingView"},sidebar:"version-0.61/components",previous:{title:"InputAccessoryView",permalink:"/docs/0.61/inputaccessoryview"},next:{title:"\ud83d\udea7 MaskedViewIOS",permalink:"/docs/0.61/maskedviewios"}},h=[{value:"Example",id:"example",children:[],level:3},{value:"Props",id:"props",children:[{value:"<code>behavior</code>",id:"behavior",children:[],level:3},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",children:[],level:3},{value:"<code>enabled</code>",id:"enabled",children:[],level:3},{value:"<code>keyboardVerticalOffset</code>",id:"keyboardverticaloffset",children:[],level:3}],level:2}],v={toc:h};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the position of the keyboard."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { KeyboardAvoidingView } from 'react-native';\n\n<KeyboardAvoidingView\n  style={styles.container}\n  behavior=\"padding\"\n  enabled>\n  ... your UI ...\n</KeyboardAvoidingView>;\n")),(0,r.kt)("h3",u({},{id:"example"}),"Example"),(0,r.kt)("video",{src:"/img/keyboardavoidingview.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"448"}),(0,r.kt)("hr",null),(0,r.kt)("h1",u({},{id:"reference"}),"Reference"),(0,r.kt)("h2",u({},{id:"props"}),"Props"),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),(0,r.kt)("h3",u({},{id:"behavior"}),(0,r.kt)("inlineCode",{parentName:"h3"},"behavior")),(0,r.kt)("p",null,"Specify how to react to the presence of the keyboard."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Android and iOS both interact with this prop differently.")," ",(0,r.kt)("em",{parentName:"p"},"Android may behave better when given no behavior prop at all, whereas iOS is the opposite.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"enum('height', 'position', 'padding')"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"contentcontainerstyle"}),(0,r.kt)("inlineCode",{parentName:"h3"},"contentContainerStyle")),(0,r.kt)("p",null,"The style of the content container(View) when behavior is 'position'."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"View.style"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"enabled"}),(0,r.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,r.kt)("p",null,"Enabled or disabled KeyboardAvoidingView. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"keyboardverticaloffset"}),(0,r.kt)("inlineCode",{parentName:"h3"},"keyboardVerticalOffset")),(0,r.kt)("p",null,"This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases. Defaults to 0."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"No")))))}y.isMDXComponent=!0}}]);