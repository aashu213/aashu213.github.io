"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7429],{35318:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=r,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53772:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return g},default:function(){return y}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e};const k={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"},d=void 0,c={unversionedId:"asyncstorage",id:"version-0.68/asyncstorage",title:"\ud83d\udea7 AsyncStorage",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.68/asyncstorage.md",sourceDirName:".",slug:"/asyncstorage",permalink:"/docs/asyncstorage",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/asyncstorage.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"}},g=[{value:"Methods",id:"methods",children:[{value:"<code>getItem()</code>",id:"getitem",children:[],level:3},{value:"<code>setItem()</code>",id:"setitem",children:[],level:3},{value:"<code>removeItem()</code>",id:"removeitem",children:[],level:3},{value:"<code>mergeItem()</code>",id:"mergeitem",children:[],level:3},{value:"<code>clear()</code>",id:"clear",children:[],level:3},{value:"<code>getAllKeys()</code>",id:"getallkeys",children:[],level:3},{value:"<code>flushGetRequests()</code>",id:"flushgetrequests",children:[],level:3},{value:"<code>multiGet()</code>",id:"multiget",children:[],level:3},{value:"<code>multiSet()</code>",id:"multiset",children:[],level:3},{value:"<code>multiRemove()</code>",id:"multiremove",children:[],level:3},{value:"<code>multiMerge()</code>",id:"multimerge",children:[],level:3}],level:2}],N={toc:g};function y(e){var t,a=e,{components:r}=a,m=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},N),m),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://reactnative.directory/?search=storage"}),"community packages")," instead.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage."),(0,n.kt)("p",null,"It is recommended that you use an abstraction on top of ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," directly for anything more than light usage since it operates globally."),(0,n.kt)("p",null,"On iOS, ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," will use either ",(0,n.kt)("a",u({parentName:"p"},{href:"http://rocksdb.org/"}),"RocksDB")," or SQLite based on what is available."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," JavaScript code is a facade that provides a clear JavaScript API, real ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," objects, and non-multi functions. Each method in the API returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,"Importing the ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," library:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { AsyncStorage } from 'react-native';\n")),(0,n.kt)("p",null,"Persisting data:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"_storeData = async () => {\n  try {\n    await AsyncStorage.setItem(\n      '@MySuperStore:key',\n      'I like to save it.'\n    );\n  } catch (error) {\n    // Error saving data\n  }\n};\n")),(0,n.kt)("p",null,"Fetching data:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"_retrieveData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('TASKS');\n    if (value !== null) {\n      // We have data!!\n      console.log(value);\n    }\n  } catch (error) {\n    // Error retrieving data\n  }\n};\n")),(0,n.kt)("hr",null),(0,n.kt)("h1",u({},{id:"reference"}),"Reference"),(0,n.kt)("h2",u({},{id:"methods"}),"Methods"),(0,n.kt)("h3",u({},{id:"getitem"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getItem()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)\n")),(0,n.kt)("p",null,"Fetches an item for a ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Key of the item to fetch.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error, result: ?string) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with a result if found or any error.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"setitem"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setItem()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),(0,n.kt)("p",null,"Sets the value for a ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Key of the item to set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Value to set for the ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"removeitem"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeItem()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static removeItem(key: string, [callback]: ?(error: ?Error) => void)\n")),(0,n.kt)("p",null,"Removes an item for a ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Key of the item to remove.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"mergeitem"}),(0,n.kt)("inlineCode",{parentName:"h3"},"mergeItem()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),(0,n.kt)("p",null,"Merges an existing ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," value with an input value, assuming both values are stringified JSON. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," This is not supported by all native implementations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"key"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Key of the item to modify.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"New value to merge for the ",(0,n.kt)("inlineCode",{parentName:"td"},"key"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"let UID123_object = {\n  name: 'Chris',\n  age: 30,\n  traits: { hair: 'brown', eyes: 'brown' }\n};\n// You only need to define what will be added or updated\nlet UID123_delta = {\n  age: 31,\n  traits: { eyes: 'blue', shoe_size: 10 }\n};\n\nAsyncStorage.setItem(\n  'UID123',\n  JSON.stringify(UID123_object),\n  () => {\n    AsyncStorage.mergeItem(\n      'UID123',\n      JSON.stringify(UID123_delta),\n      () => {\n        AsyncStorage.getItem('UID123', (err, result) => {\n          console.log(result);\n        });\n      }\n    );\n  }\n);\n\n// Console log result:\n// => {'name':'Chris','age':31,'traits':\n//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"clear"}),(0,n.kt)("inlineCode",{parentName:"h3"},"clear()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static clear([callback]: ?(error: ?Error) => void)\n")),(0,n.kt)("p",null,"Erases ",(0,n.kt)("em",{parentName:"p"},"all")," ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," for all clients, libraries, etc. You probably don't want to call this; use ",(0,n.kt)("inlineCode",{parentName:"p"},"removeItem")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"multiRemove")," to clear only your app's keys. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"getallkeys"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getAllKeys()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)\n")),(0,n.kt)("p",null,"Gets ",(0,n.kt)("em",{parentName:"p"},"all")," keys known to your app; for all callers, libraries, etc. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(error: ?Error, keys: ?Array<string>) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with all keys found and any error.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"flushgetrequests"}),(0,n.kt)("inlineCode",{parentName:"h3"},"flushGetRequests()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static flushGetRequests(): [object Object]\n")),(0,n.kt)("p",null,"Flushes any pending requests using a single batch call to get the data."),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"multiget"}),(0,n.kt)("inlineCode",{parentName:"h3"},"multiGet()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void)\n")),(0,n.kt)("p",null,"This allows you to batch the fetching of items given an array of ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," inputs. Your callback will be invoked with an array of corresponding key-value pairs found:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\n")),(0,n.kt)("p",null,"The method returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"keys"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Array of key for the items to get.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with a key-value array of the results, plus an array of any key-specific errors found.")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"AsyncStorage.getAllKeys((err, keys) => {\n  AsyncStorage.multiGet(keys, (err, stores) => {\n    stores.map((result, i, store) => {\n      // get at each store's key/value so you can work with it\n      let key = store[i][0];\n      let value = store[i][1];\n    });\n  });\n});\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"multiset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"multiSet()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiSet(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,n.kt)("p",null,"Use this as a batch operation for storing multiple key-value pairs. When the operation completes you'll get a single callback with any errors:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\n")),(0,n.kt)("p",null,"The method returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"keyValuePairs"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Array<Array<string>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Array of key-value array for the items to set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with an array of any key-specific errors found.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"multiremove"}),(0,n.kt)("inlineCode",{parentName:"h3"},"multiRemove()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,n.kt)("p",null,"Call this to batch the deletion of all keys in the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," array. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"keys"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Array of key for the items to delete.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called an array of any key-specific errors found.")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"let keys = ['k1', 'k2'];\nAsyncStorage.multiRemove(keys, (err) => {\n  // keys k1 & k2 removed, if they existed\n  // do most stuff after removal (if you want)\n});\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"multimerge"}),(0,n.kt)("inlineCode",{parentName:"h3"},"multiMerge()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static multiMerge(keyValuePairs: Array<Array<string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),(0,n.kt)("p",null,"Batch operation to merge in existing and new values for a given set of keys. This assumes that the values are stringified JSON. Returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE"),": This is not supported by all native implementations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"keyValuePairs"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Array<Array<string>>")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Array of key-value array for the items to merge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Function that will be called with an array of any key-specific errors found.")))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),'// first user, initial values\nlet UID234_object = {\n  name: \'Chris\',\n  age: 30,\n  traits: { hair: \'brown\', eyes: \'brown\' }\n};\n\n// first user, delta values\nlet UID234_delta = {\n  age: 31,\n  traits: { eyes: \'blue\', shoe_size: 10 }\n};\n\n// second user, initial values\nlet UID345_object = {\n  name: \'Marge\',\n  age: 25,\n  traits: { hair: \'blonde\', eyes: \'blue\' }\n};\n\n// second user, delta values\nlet UID345_delta = {\n  age: 26,\n  traits: { eyes: \'green\', shoe_size: 6 }\n};\n\nlet multi_set_pairs = [\n  [\'UID234\', JSON.stringify(UID234_object)],\n  [\'UID345\', JSON.stringify(UID345_object)]\n];\nlet multi_merge_pairs = [\n  [\'UID234\', JSON.stringify(UID234_delta)],\n  [\'UID345\', JSON.stringify(UID345_delta)]\n];\n\nAsyncStorage.multiSet(multi_set_pairs, (err) => {\n  AsyncStorage.multiMerge(multi_merge_pairs, (err) => {\n    AsyncStorage.multiGet([\'UID234\', \'UID345\'], (err, stores) => {\n      stores.map((result, i, store) => {\n        let key = store[i][0];\n        let val = store[i][1];\n        console.log(key, val);\n      });\n    });\n  });\n});\n\n// Console log results:\n// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}\n// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}\n')))}y.isMDXComponent=!0}}]);