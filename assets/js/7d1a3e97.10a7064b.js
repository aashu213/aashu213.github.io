"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2529],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return k},toc:function(){return f},default:function(){return b}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},u=void 0,k={unversionedId:"datepickerandroid",id:"version-0.65/datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.65/datepickerandroid.md",sourceDirName:".",slug:"/datepickerandroid",permalink:"/docs/0.65/datepickerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/datepickerandroid.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"}},f=[{value:"Example",id:"example",children:[],level:3},{value:"Methods",id:"methods",children:[{value:"<code>open()</code>",id:"open",children:[],level:3},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[],level:3},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[],level:3}],level:2}],h={toc:f};function b(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},h),p),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://reactnative.directory/?search=datepicker"}),"community packages")," instead.")),(0,a.kt)("p",null,"Opens the standard Android date picker dialog."),(0,a.kt)("h3",s({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"try {\n  const { action, year, month, day } =\n    await DatePickerAndroid.open({\n      // Use `new Date()` for current date.\n      // May 25 2020. Month 0 is January.\n      date: new Date(2020, 4, 25)\n    });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // Selected year, month (0-11), day\n  }\n} catch ({ code, message }) {\n  console.warn('Cannot open date picker', message);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",s({},{id:"reference"}),"Reference"),(0,a.kt)("h2",s({},{id:"methods"}),"Methods"),(0,a.kt)("h3",s({},{id:"open"}),(0,a.kt)("inlineCode",{parentName:"h3"},"open()")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static open(options)\n")),(0,a.kt)("p",null,"Opens the standard Android date picker dialog."),(0,a.kt)("p",null,"The available keys for the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - date to show by default"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minDate")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," or timestamp in milliseconds) - minimum date that can be selected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxDate")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," object or timestamp in milliseconds) - maximum date that can be selected"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode")," (",(0,a.kt)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - To set the date-picker mode to calendar/spinner/default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),(0,a.kt)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),(0,a.kt)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),(0,a.kt)("p",null,"Returns a Promise which will be invoked an object containing ",(0,a.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"month")," (0-11), ",(0,a.kt)("inlineCode",{parentName:"p"},"day")," if the user picked a date. If the user dismissed the dialog, the Promise will still be resolved with action being ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction")," and all the other keys being undefined. ",(0,a.kt)("strong",{parentName:"p"},"Always")," check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction")," before reading the values."),(0,a.kt)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"minDate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"maxDate")," options."),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"datesetaction"}),(0,a.kt)("inlineCode",{parentName:"h3"},"dateSetAction()")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static dateSetAction()\n")),(0,a.kt)("p",null,"A date has been selected."),(0,a.kt)("hr",null),(0,a.kt)("h3",s({},{id:"dismissedaction"}),(0,a.kt)("inlineCode",{parentName:"h3"},"dismissedAction()")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"static dismissedAction()\n")),(0,a.kt)("p",null,"The dialog has been dismissed."))}b.isMDXComponent=!0}}]);