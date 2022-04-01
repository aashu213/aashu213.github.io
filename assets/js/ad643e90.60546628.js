"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1804],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return h},default:function(){return b}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"settings",title:"Settings"},f=void 0,m={unversionedId:"settings",id:"version-0.61/settings",title:"Settings",description:"Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.",source:"@site/versioned_docs/version-0.61/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/0.61/settings",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/settings.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"settings",title:"Settings"},sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 PushNotificationIOS",permalink:"/docs/0.61/pushnotificationios"},next:{title:"Shadow Props",permalink:"/docs/0.61/shadow-props"}},h=[{value:"Methods",id:"methods",children:[{value:"<code>clearWatch()</code>",id:"clearwatch",children:[],level:3},{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>set()</code>",id:"set",children:[],level:3},{value:"<code>watchKeys()</code>",id:"watchkeys",children:[],level:3}],level:2}],y={toc:h};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," serves as a wrapper for ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/documentation/foundation/nsuserdefaults"}),(0,r.kt)("inlineCode",{parentName:"a"},"NSUserDefaults")),", a persistent key-value store available only on iOS."),(0,r.kt)("hr",null),(0,r.kt)("h1",u({},{id:"reference"}),"Reference"),(0,r.kt)("h2",u({},{id:"methods"}),"Methods"),(0,r.kt)("h3",u({},{id:"clearwatch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"clearWatch()")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static clearWatch(watchId)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"watchId")," is the number returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"watchKeys()")," when the subscription was originally configured."),(0,r.kt)("h3",u({},{id:"get"}),(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static get(key)\n")),(0,r.kt)("p",null,"Get the current value for a key in ",(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"set"}),(0,r.kt)("inlineCode",{parentName:"h3"},"set()")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static set(settings)\n")),(0,r.kt)("p",null,"Set one or more values in ",(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"watchkeys"}),(0,r.kt)("inlineCode",{parentName:"h3"},"watchKeys()")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static watchKeys(keys, callback)\n")),(0,r.kt)("p",null,"Subscribe to be notified when the value for any of the keys specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," array changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),". Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"watchId")," number that may be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"clearWatch()")," to unsubscribe."))}b.isMDXComponent=!0}}]);