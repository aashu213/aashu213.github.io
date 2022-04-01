"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51174],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49098:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return g},default:function(){return h}});var n=r(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},m=void 0,k={unversionedId:"progressviewios",id:"version-0.61/progressviewios",title:"\ud83d\udea7 ProgressViewIOS",description:"Deprecated. Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.61/progressviewios.md",sourceDirName:".",slug:"/progressviewios",permalink:"/docs/0.61/progressviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/progressviewios.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 ProgressBarAndroid",permalink:"/docs/0.61/progressbarandroid"},next:{title:"RefreshControl",permalink:"/docs/0.61/refreshcontrol"}},g=[{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[],level:3},{value:"<code>progressImage</code>",id:"progressimage",children:[],level:3},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[],level:3},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[],level:3},{value:"<code>trackImage</code>",id:"trackimage",children:[],level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[],level:3}],level:2}],b={toc:g};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-progress-view/progress-view"}),"@react-native-community/progress-view")," instead.")),(0,n.kt)("p",null,"Uses ",(0,n.kt)("inlineCode",{parentName:"p"},"ProgressViewIOS")," to render a UIProgressView on iOS."),(0,n.kt)("hr",null),(0,n.kt)("h1",u({},{id:"reference"}),"Reference"),(0,n.kt)("h2",u({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),(0,n.kt)("h3",u({},{id:"progress"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progress")),(0,n.kt)("p",null,"The progress value (between 0 and 1)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"progressimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressImage")),(0,n.kt)("p",null,"A stretchable image to display as the progress bar."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"progresstintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressTintColor")),(0,n.kt)("p",null,"The tint color of the progress bar itself."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"progressviewstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressViewStyle")),(0,n.kt)("p",null,"The progress bar style."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"enum('default', 'bar')"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"trackimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackImage")),(0,n.kt)("p",null,"A stretchable image to display behind the progress bar."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"tracktintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackTintColor")),(0,n.kt)("p",null,"The tint color of the progress bar track."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No")))))}h.isMDXComponent=!0}}]);