"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[85620],{35318:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,c=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96825:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return c},toc:function(){return N},default:function(){return b}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))i.call(e,a)&&s(t,a,e[a]);if(p)for(var a of p(e))u.call(e,a)&&s(t,a,e[a]);return t};const m={id:"alertios",title:"\ud83d\udea7 AlertIOS"},k=void 0,c={unversionedId:"alertios",id:"version-0.65/alertios",title:"\ud83d\udea7 AlertIOS",description:"Deprecated. Use Alert instead.",source:"@site/versioned_docs/version-0.65/alertios.md",sourceDirName:".",slug:"/alertios",permalink:"/docs/0.65/alertios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/alertios.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"alertios",title:"\ud83d\udea7 AlertIOS"}},N=[{value:"Methods",id:"methods",children:[{value:"<code>alert()</code>",id:"alert",children:[],level:3},{value:"<code>prompt()</code>",id:"prompt",children:[],level:3}],level:2},{value:"Type Definitions",id:"type-definitions",children:[{value:"AlertType",id:"alerttype",children:[],level:3},{value:"AlertButtonStyle",id:"alertbuttonstyle",children:[],level:3},{value:"ButtonsArray",id:"buttonsarray",children:[],level:3}],level:2}],g={toc:N};function b(t){var e,a=t,{components:r}=a,s=((t,e)=>{var a={};for(var n in t)i.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},g),s),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,n.kt)("a",d({parentName:"p"},{href:"alert"}),(0,n.kt)("inlineCode",{parentName:"a"},"Alert"))," instead.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AlertIOS")," provides functionality to create an iOS alert dialog with a message or create a prompt for user input."),(0,n.kt)("p",null,"Creating an iOS alert:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.alert(\n  'Sync Complete',\n  'All your data are belong to us.'\n);\n")),(0,n.kt)("p",null,"Creating an iOS prompt:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt('Enter a value', null, (text) =>\n  console.log('You entered ' + text)\n);\n")),(0,n.kt)("p",null,"We recommend using the ",(0,n.kt)("a",d({parentName:"p"},{href:"alert"}),(0,n.kt)("inlineCode",{parentName:"a"},"Alert.alert"))," method for cross-platform support if you don't need to create iOS-only prompts."),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"reference"}),"Reference"),(0,n.kt)("h2",d({},{id:"methods"}),"Methods"),(0,n.kt)("h3",d({},{id:"alert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n")),(0,n.kt)("p",null,"Create and display a popup alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The dialog's title. Passing null or '' will hide the title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"?(() => void),",(0,n.kt)("a",d({parentName:"td"},{href:"alertios#buttonsarray"}),"ButtonsArray")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,n.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,n.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," keys. ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"alertios#alerttype"}),"AlertType")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Deprecated, do not use.")))),(0,n.kt)("p",null,"Example with custom buttons:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed')\n    }\n  ]\n);\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"prompt"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n")),(0,n.kt)("p",null,"Create and display a prompt to enter some text."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"?((text: string) => void),",(0,n.kt)("a",d({parentName:"td"},{href:"alertios#buttonsarray"}),"ButtonsArray")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,n.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,n.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," keys (see example). ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"alertios#alerttype"}),"AlertType")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"defaultValue"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The default text in text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"keyboardType"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'.")))),(0,n.kt)("p",null,"Example with custom buttons:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'OK',\n      onPress: (password) =>\n        console.log('OK Pressed, password: ' + password)\n    }\n  ],\n  'secure-text'\n);\n")),(0,n.kt)("p",null,","),(0,n.kt)("p",null,"Example with the default button and a custom callback:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Update username',\n  null,\n  (text) => console.log('Your username is ' + text),\n  null,\n  'default'\n);\n")),(0,n.kt)("h2",d({},{id:"type-definitions"}),"Type Definitions"),(0,n.kt)("h3",d({},{id:"alerttype"}),"AlertType"),(0,n.kt)("p",null,"An Alert button type"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constants:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Default alert with no inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"plain-text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Plain text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"secure-text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Secure text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"login-password"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Login and password alert")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"alertbuttonstyle"}),"AlertButtonStyle"),(0,n.kt)("p",null,"An Alert button style"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constants:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Default button style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cancel"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Cancel button style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"destructive"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Destructive button style")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"buttonsarray"}),"ButtonsArray"),(0,n.kt)("p",null,"Array or buttons"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Array")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[text]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[onPress]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function when button pressed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[style]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"alertios#alertbuttonstyle"}),"AlertButtonStyle")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button style")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constants:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"onPress"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function when button pressed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"style"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button style")))))}b.isMDXComponent=!0}}]);