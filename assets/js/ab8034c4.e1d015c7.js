"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70782],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return v},default:function(){return b}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={id:"devsettings",title:"DevSettings"},m=void 0,f={unversionedId:"devsettings",id:"version-0.62/devsettings",title:"DevSettings",description:"The DevSettings module exposes methods for customizing settings for developers in development.",source:"@site/versioned_docs/version-0.62/devsettings.md",sourceDirName:".",slug:"/devsettings",permalink:"/docs/0.62/devsettings",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/devsettings.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"devsettings",title:"DevSettings"},sidebar:"version-0.62/api",previous:{title:"AppState",permalink:"/docs/0.62/appstate"},next:{title:"Dimensions",permalink:"/docs/0.62/dimensions"}},v=[{value:"Methods",id:"methods",children:[{value:"<code>addMenuItem()</code>",id:"addmenuitem",children:[],level:3},{value:"<code>reload()</code>",id:"reload",children:[],level:3}],level:2}],g={toc:v};function b(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),d),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DevSettings")," module exposes methods for customizing settings for developers in development."),(0,r.kt)("hr",null),(0,r.kt)("h1",p({},{id:"reference"}),"Reference"),(0,r.kt)("h2",p({},{id:"methods"}),"Methods"),(0,r.kt)("h3",p({},{id:"addmenuitem"}),(0,r.kt)("inlineCode",{parentName:"h3"},"addMenuItem()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static addMenuItem(title, handler)\n")),(0,r.kt)("p",null,"Add a custom menu item to the developer menu."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"title ",(0,r.kt)("div",{className:"label basic required"},"Required")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"handler ",(0,r.kt)("div",{className:"label basic required"},"Required")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"DevSettings.addMenuItem('Show Secret Dev Screen', () => {\n  Alert.alert('Showing secret dev screen!');\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",p({},{id:"reload"}),(0,r.kt)("inlineCode",{parentName:"h3"},"reload()")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"static reload()\n")),(0,r.kt)("p",null,"Reload the application. Can be invoked directly or on user interaction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Button title="Reload" onPress={() => DevSettings.reload()} />\n')))}b.isMDXComponent=!0}}]);