"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88513],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return f},default:function(){return b}});var r=n(35318),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e};const u={id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"},m=void 0,k={unversionedId:"timepickerandroid",id:"version-0.66/timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.66/timepickerandroid.md",sourceDirName:".",slug:"/timepickerandroid",permalink:"/docs/0.66/timepickerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/timepickerandroid.md",tags:[],version:"0.66",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"timepickerandroid",title:"\ud83d\udea7 TimePickerAndroid"}},f=[{value:"Example",id:"example",children:[],level:3},{value:"Methods",id:"methods",children:[{value:"<code>open()</code>",id:"open",children:[],level:3},{value:"<code>timeSetAction()</code>",id:"timesetaction",children:[],level:3},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[],level:3}],level:2}],h={toc:f};function b(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),p),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Removed.")," Use one of the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://reactnative.directory/?search=timepicker"}),"community packages")," instead.")),(0,r.kt)("p",null,"Opens the standard Android time picker dialog."),(0,r.kt)("h3",s({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"try {\n  const { action, hour, minute } = await TimePickerAndroid.open({\n    hour: 14,\n    minute: 0,\n    is24Hour: false // Will display '2 PM'\n  });\n  if (action !== TimePickerAndroid.dismissedAction) {\n    // Selected hour (0-23), minute (0-59)\n  }\n} catch ({ code, message }) {\n  console.warn('Cannot open time picker', message);\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h1",s({},{id:"reference"}),"Reference"),(0,r.kt)("h2",s({},{id:"methods"}),"Methods"),(0,r.kt)("h3",s({},{id:"open"}),(0,r.kt)("inlineCode",{parentName:"h3"},"open()")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static open(options)\n")),(0,r.kt)("p",null,"Opens the standard Android time picker dialog."),(0,r.kt)("p",null,"The available keys for the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hour")," (0-23) - the hour to show, defaults to the current time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minute")," (0-59) - the minute to show, defaults to the current time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is24Hour")," (boolean) - If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the picker uses the 24-hour format. If ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the picker shows an AM/PM chooser. If undefined, the default for the current locale is used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," (",(0,r.kt)("inlineCode",{parentName:"li"},"enum('clock', 'spinner', 'default')"),") - set the time picker mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'clock': Show a time picker in clock mode."),(0,r.kt)("li",{parentName:"ul"},"'spinner': Show a time picker in spinner mode."),(0,r.kt)("li",{parentName:"ul"},"'default': Show a default time picker based on Android versions.")))),(0,r.kt)("p",null,"Returns a Promise which will be invoked an object containing ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hour")," (0-23), ",(0,r.kt)("inlineCode",{parentName:"p"},"minute")," (0-59) if the user picked a time. If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,r.kt)("inlineCode",{parentName:"p"},"TimePickerAndroid.dismissedAction")," and all the other keys being undefined. ",(0,r.kt)("strong",{parentName:"p"},"Always")," check whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," before reading the values."),(0,r.kt)("hr",null),(0,r.kt)("h3",s({},{id:"timesetaction"}),(0,r.kt)("inlineCode",{parentName:"h3"},"timeSetAction()")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static timeSetAction()\n")),(0,r.kt)("p",null,"A time has been selected."),(0,r.kt)("hr",null),(0,r.kt)("h3",s({},{id:"dismissedaction"}),(0,r.kt)("inlineCode",{parentName:"h3"},"dismissedAction()")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction()\n")),(0,r.kt)("p",null,"The dialog has been dismissed."))}b.isMDXComponent=!0}}]);