"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[91830],{35318:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41405:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return k},default:function(){return h}});var i=t(35318),a=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&d(e,t,n[t]);return e};const u={id:"netinfo",title:"\ud83d\udea7 NetInfo"},m=void 0,f={unversionedId:"netinfo",id:"version-0.61/netinfo",title:"\ud83d\udea7 NetInfo",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.61/netinfo.md",sourceDirName:".",slug:"/netinfo",permalink:"/docs/0.61/netinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/netinfo.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"netinfo",title:"\ud83d\udea7 NetInfo"}},k=[{value:"ConnectionType enum",id:"connectiontype-enum",children:[],level:3},{value:"EffectiveConnectionType enum",id:"effectiveconnectiontype-enum",children:[],level:3},{value:"Android",id:"android",children:[],level:3},{value:"Methods",id:"methods",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Methods",id:"methods-1",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>getConnectionInfo()</code>",id:"getconnectioninfo",children:[],level:3},{value:"<code>isConnectionExpensive()</code>",id:"isconnectionexpensive",children:[],level:3}],level:2},{value:"Properties",id:"properties-1",children:[{value:"<code>isConnected</code>",id:"isconnected",children:[],level:3}],level:2}],v={toc:k};function h(e){var n,t=e,{components:a}=t,d=((e,n)=>{var t={};for(var i in e)c.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&l)for(var i of l(e))n.indexOf(i)<0&&p.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=s(s({},v),d),o(n,r({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Removed.")," Use one of the ",(0,i.kt)("a",s({parentName:"p"},{href:"https://reactnative.directory/?search=network"}),"community packages")," instead.")),(0,i.kt)("p",null,"NetInfo exposes info about online/offline status"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"NetInfo.getConnectionInfo().then((connectionInfo) => {\n  console.log(\n    'Initial, type: ' +\n      connectionInfo.type +\n      ', effectiveType: ' +\n      connectionInfo.effectiveType\n  );\n});\nfunction handleFirstConnectivityChange(connectionInfo) {\n  console.log(\n    'First change, type: ' +\n      connectionInfo.type +\n      ', effectiveType: ' +\n      connectionInfo.effectiveType\n  );\n  NetInfo.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")),(0,i.kt)("h3",s({},{id:"connectiontype-enum"}),"ConnectionType enum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionType")," describes the type of connection the device is using to communicate with the network."),(0,i.kt)("p",null,"Cross platform values for ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionType"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none")," - device is offline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wifi")," - device is online and connected via wifi, or is the iOS simulator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cellular")," - device is connected via Edge, 3G, WiMax, or LTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unknown")," - error case and the network status is unknown")),(0,i.kt)("p",null,"Android-only values for ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionType"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bluetooth")," - device is connected via Bluetooth"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ethernet")," - device is connected via Ethernet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wimax")," - device is connected via WiMAX")),(0,i.kt)("h3",s({},{id:"effectiveconnectiontype-enum"}),"EffectiveConnectionType enum"),(0,i.kt)("p",null,"Cross platform values for ",(0,i.kt)("inlineCode",{parentName:"p"},"EffectiveConnectionType"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unknown"))),(0,i.kt)("h3",s({},{id:"android"}),"Android"),(0,i.kt)("p",null,"To request network info, you need to add the following line to your app's ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />')),(0,i.kt)("h3",s({},{id:"methods"}),"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",s({parentName:"li"},{href:"/docs/0.61/netinfo#addeventlistener"}),(0,i.kt)("inlineCode",{parentName:"a"},"addEventListener"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",s({parentName:"li"},{href:"/docs/0.61/netinfo#removeeventlistener"}),(0,i.kt)("inlineCode",{parentName:"a"},"removeEventListener"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",s({parentName:"li"},{href:"/docs/0.61/netinfo#getconnectioninfo"}),(0,i.kt)("inlineCode",{parentName:"a"},"getConnectionInfo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",s({parentName:"li"},{href:"/docs/0.61/netinfo#isconnectionexpensive"}),(0,i.kt)("inlineCode",{parentName:"a"},"isConnectionExpensive")))),(0,i.kt)("h3",s({},{id:"properties"}),"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",s({parentName:"li"},{href:"/docs/0.61/netinfo#isconnected"}),(0,i.kt)("inlineCode",{parentName:"a"},"isConnected")))),(0,i.kt)("hr",null),(0,i.kt)("h1",s({},{id:"reference"}),"Reference"),(0,i.kt)("h2",s({},{id:"methods-1"}),"Methods"),(0,i.kt)("h3",s({},{id:"addeventlistener"}),(0,i.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"NetInfo.addEventListener(eventName, handler);\n")),(0,i.kt)("p",null,"Adds an event handler."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Required"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",s({parentName:"tr"},{align:null}),"eventName"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"The change event name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",s({parentName:"tr"},{align:null}),"handler"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"function"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Listener function.")))),(0,i.kt)("p",null,"Supported events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectionChange"),": Fires when the network status changes. The argument to the event handler is an object with keys:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"ConnectionType")," (listed above)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"effectiveType"),": An ",(0,i.kt)("inlineCode",{parentName:"li"},"EffectiveConnectionType")," (listed above)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change"),": This event is deprecated. Listen to ",(0,i.kt)("inlineCode",{parentName:"li"},"connectionChange")," instead. Fires when the network status changes. The argument to the event handler is one of the deprecated connectivity types listed above.")),(0,i.kt)("hr",null),(0,i.kt)("h3",s({},{id:"removeeventlistener"}),(0,i.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"NetInfo.removeEventListener(eventName, handler);\n")),(0,i.kt)("p",null,"Removes the listener for network status changes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Required"),(0,i.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",s({parentName:"tr"},{align:null}),"eventName"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"enum(connectionChange, change)"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"The change event name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",s({parentName:"tr"},{align:null}),"handler"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"function"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,i.kt)("td",s({parentName:"tr"},{align:null}),"Listener function.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",s({},{id:"getconnectioninfo"}),(0,i.kt)("inlineCode",{parentName:"h3"},"getConnectionInfo()")),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"NetInfo.getConnectionInfo();\n")),(0,i.kt)("p",null,"Returns a promise that resolves to an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"effectiveType")," keys whose values are a ",(0,i.kt)("a",s({parentName:"p"},{href:"/docs/0.61/netinfo#connectiontype-enum"}),(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionType"))," and an ",(0,i.kt)("a",s({parentName:"p"},{href:"/docs/0.61/netinfo#effectiveconnectiontype-enum"}),(0,i.kt)("inlineCode",{parentName:"a"},"EffectiveConnectionType")),"), respectively."),(0,i.kt)("hr",null),(0,i.kt)("h3",s({},{id:"isconnectionexpensive"}),(0,i.kt)("inlineCode",{parentName:"h3"},"isConnectionExpensive()")),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"NetInfo.isConnectionExpensive();\n")),(0,i.kt)("p",null,"Available on Android. Detect if the current active connection is metered or not. A network is classified as metered when the user is sensitive to heavy data usage on that connection due to monetary costs, data limitations or battery/performance issues."),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{}),"NetInfo.isConnectionExpensive()\n.then(isConnectionExpensive => {\n  console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\n})\n.catch(error => {\n  console.error(error);\n});\n")),(0,i.kt)("h2",s({},{id:"properties-1"}),"Properties"),(0,i.kt)("h3",s({},{id:"isconnected"}),(0,i.kt)("inlineCode",{parentName:"h3"},"isConnected")),(0,i.kt)("p",null,"Available on all platforms. Asynchronously fetch a boolean to determine internet connectivity."),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{}),"NetInfo.isConnected.fetch().then(isConnected => {\n  console.log('First, is ' + (isConnected ? 'online' : 'offline'));\n});\nfunction handleFirstConnectivityChange(isConnected) {\n  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\n  NetInfo.isConnected.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.isConnected.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n")))}h.isMDXComponent=!0}}]);