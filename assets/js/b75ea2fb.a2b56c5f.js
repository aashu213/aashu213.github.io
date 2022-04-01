"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79906],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return k},default:function(){return h}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"settings",title:"Settings"},m=void 0,f={unversionedId:"settings",id:"settings",title:"Settings",description:"Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.",source:"@site/../docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/next/settings",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/settings.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"settings",title:"Settings"},sidebar:"api",previous:{title:"DynamicColorIOS",permalink:"/docs/next/dynamiccolorios"}},k=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>clearWatch()</code>",id:"clearwatch",children:[],level:3},{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>set()</code>",id:"set",children:[],level:3},{value:"<code>watchKeys()</code>",id:"watchkeys",children:[],level:3}],level:2}],y={toc:k};function h(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),p),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," serves as a wrapper for ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/documentation/foundation/nsuserdefaults"}),(0,a.kt)("inlineCode",{parentName:"a"},"NSUserDefaults")),", a persistent key-value store available only on iOS."),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"Settings Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Settings%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(Settings.get(%22data%22))%3B%0A%0A%20%20const%20storeData%20%3D%20data%20%3D%3E%20%7B%0A%20%20%20%20Settings.set(data)%3B%0A%20%20%20%20setData(Settings.get(%22data%22))%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EStored%20value%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bdata%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%22React%22%20%7D)%7D%0A%20%20%20%20%20%20%20%20title%3D%22Store%20'React'%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%22Native%22%20%7D)%7D%0A%20%20%20%20%20%20%20%20title%3D%22Store%20'Native'%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20marginVertical%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"reference"}),"Reference"),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("h3",u({},{id:"clearwatch"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clearWatch()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static clearWatch(watchId: number)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"watchId")," is the number returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"watchKeys()")," when the subscription was originally configured."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static get(key: string): mixed\n")),(0,a.kt)("p",null,"Get the current value for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static set(settings: object)\n")),(0,a.kt)("p",null,"Set one or more values in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"watchkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"watchKeys()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static watchKeys(keys: string | array<string>, callback: function): number\n")),(0,a.kt)("p",null,"Subscribe to be notified when the value for any of the keys specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," parameter has been changed in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),". Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"watchId")," number that may be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"clearWatch()")," to unsubscribe."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"watchKeys()")," by design ignores internal ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," calls and fires callback only on changes preformed outside of React Native code.")))}h.isMDXComponent=!0}}]);