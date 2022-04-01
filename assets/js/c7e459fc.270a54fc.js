"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71002],{23191:function(e,t,a){var o=a(27378),r=a(5922);t.Z=({name:e,url:t,code:a})=>o.createElement("tr",null,o.createElement("td",null,t?o.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},e):e),o.createElement("td",null,o.createElement(r.Z,null,a)))},74485:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return b},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return f},default:function(){return v}});var o=a(35318),r=a(23191),n=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&m(e,a,t[a]);return e};const b={id:"javascript-environment",title:"JavaScript Environment"},u=void 0,h={unversionedId:"javascript-environment",id:"version-0.68/javascript-environment",title:"JavaScript Environment",description:"JavaScript Runtime",source:"@site/versioned_docs/version-0.68/javascript-environment.md",sourceDirName:".",slug:"/javascript-environment",permalink:"/docs/javascript-environment",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/javascript-environment.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"javascript-environment",title:"JavaScript Environment"},sidebar:"docs",previous:{title:"Profiling with Hermes",permalink:"/docs/profile-hermes"},next:{title:"Timers",permalink:"/docs/timers"}},f=[{value:"JavaScript Runtime",id:"javascript-runtime",children:[],level:2},{value:"JavaScript Syntax Transformers",id:"javascript-syntax-transformers",children:[],level:2},{value:"Polyfills",id:"polyfills",children:[{value:"Browser",id:"browser",children:[],level:4},{value:"ECMAScript 2015 (ES6)",id:"ecmascript-2015-es6",children:[],level:4},{value:"ECMAScript 2016 (ES7)",id:"ecmascript-2016-es7",children:[],level:4},{value:"ECMAScript 2017 (ES8)",id:"ecmascript-2017-es8",children:[],level:4},{value:"Specific",id:"specific",children:[],level:4}],level:2}],k={toc:f};function v(e){var t,a=e,{components:n}=a,m=((e,t)=>{var a={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&p.call(e,o)&&(a[o]=e[o]);return a})(a,["components"]);return(0,o.kt)("wrapper",(t=d(d({},k),m),l(t,s({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h2",d({},{id:"javascript-runtime"}),"JavaScript Runtime"),(0,o.kt)("p",null,"When using React Native, you're going to be running your JavaScript code in two environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In most cases, React Native will use ",(0,o.kt)("a",d({parentName:"li"},{href:"http://trac.webkit.org/wiki/JavaScriptCore"}),"JavaScriptCore"),", the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps."),(0,o.kt)("li",{parentName:"ul"},"When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses ",(0,o.kt)("a",d({parentName:"li"},{href:"https://v8.dev/"}),"V8")," as its JavaScript engine.")),(0,o.kt)("p",null,"While both environments are very similar, you may end up hitting some inconsistencies. We're likely going to experiment with other JavaScript engines in the future, so it's best to avoid relying on specifics of any runtime."),(0,o.kt)("h2",d({},{id:"javascript-syntax-transformers"}),"JavaScript Syntax Transformers"),(0,o.kt)("p",null,"Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters."),(0,o.kt)("p",null,"React Native ships with the ",(0,o.kt)("a",d({parentName:"p"},{href:"https://babeljs.io"}),"Babel JavaScript compiler"),". Check ",(0,o.kt)("a",d({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#transform-plugins"}),"Babel documentation")," on its supported transformations for more details."),(0,o.kt)("p",null,"A full list of React Native's enabled transformations can be found in ",(0,o.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset"}),"metro-react-native-babel-preset"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Transformation"),(0,o.kt)("th",null,"Code"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 5")),(0,o.kt)(r.Z,{name:"Reserved Words",code:"promise.catch(function() { ... });",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2015 (ES6)")),(0,o.kt)(r.Z,{name:"Arrow functions",code:"<C onPress={() => this.setState({ pressed: true })} />",url:"http://babeljs.io/docs/learn-es2015/#arrows",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Block scoping",code:"let greeting = 'hi';",url:"https://babeljs.io/docs/learn-es2015/#let-const",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Call spread",code:"Math.max(...array);",url:"http://babeljs.io/docs/learn-es2015/#default-rest-spread",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Classes",code:"class C extends React.Component { render() { return <View />; } }",url:"http://babeljs.io/docs/learn-es2015/#classes",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Computed Properties",code:"const key = 'abc'; const obj = { [key]: 10 };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Constants",code:"const answer = 42;",url:"https://babeljs.io/docs/learn-es2015/#let-const",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Destructuring",code:"const { isActive, style } = this.props;",url:"http://babeljs.io/docs/learn-es2015/#destructuring",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"for\u2026of",code:"for (var num of [1, 2, 3]) { ... };",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Function Name",code:"let number = x => x;",url:"https://babeljs.io/docs/en/babel-plugin-transform-function-name",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Literals",code:"const b = 0b11; const o = 0o7; const u = 'Hello\\u{000A}\\u{0009}!';",url:"https://babeljs.io/docs/en/babel-plugin-transform-literals",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Modules",code:"import React, { Component } from 'react';",url:"http://babeljs.io/docs/learn-es2015/#modules",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Object Concise Method",code:"const obj = { method() { return 10; } };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Object Short Notation",code:"const name = 'vjeux'; const obj = { name };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Parameters",code:"function test(x = 'hello', { a, b }, ...args) {}",url:"https://babeljs.io/docs/en/babel-plugin-transform-parameters",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Rest Params",code:"function(type, ...args) {};",url:"https://github.com/sebmarkbage/ecmascript-rest-spread",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Shorthand Properties",code:"const o = { a, b, c };",url:"https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Sticky Regex",code:"const a = /o+/y;",url:"https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Template Literals",code:"const who = 'world'; const str = `Hello ${who}`;",url:"https://babeljs.io/docs/learn-es2015/#template-strings",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Unicode Regex",code:"const string = 'foo\ud83d\udca9bar'; const match = string.match(/foo(.)bar/u);",url:"https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2016 (ES7)")),(0,o.kt)(r.Z,{name:"Exponentiation Operator",code:"let x = 10 ** 2;",url:"https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2017 (ES8)")),(0,o.kt)(r.Z,{name:"Async Functions",code:"async function doStuffAsync() { const foo = await doOtherStuffAsync(); };",url:"https://github.com/tc39/ecmascript-asyncawait",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Function Trailing Comma",code:"function f(a, b, c,) {};",url:"https://github.com/jeffmo/es-trailing-function-commas",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2019 (ES10)")),(0,o.kt)(r.Z,{name:"Optional Catch Binding",code:"try { throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown(); }",url:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2020 (ES11)")),(0,o.kt)(r.Z,{name:"Dynamic Imports",code:"const package = await import('package'); package.function()",url:"https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"Stage 1 Proposal")),(0,o.kt)(r.Z,{name:"Export Default From",code:"export v from 'mod';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"Stage 3 Proposal")),(0,o.kt)(r.Z,{name:"Object Spread",code:"const extended = { ...obj, a: 10 };",url:"https://github.com/tc39/proposal-object-rest-spread",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Static Class Fields",code:"class CustomDate { static epoch = new CustomDate(0); }",url:"https://github.com/tc39/proposal-static-class-features)",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"Stage 4 Proposal")),(0,o.kt)(r.Z,{name:"Nullish Coalescing Operator",code:"const foo = object.foo ?? 'default';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Optional Chaining",code:"const name = obj.user?.name;",url:"https://github.com/tc39/proposal-optional-chaining",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"Other Proposals")),(0,o.kt)(r.Z,{name:"Class Properties",code:"class Bork { static a = 'foo'; static b; x = 'bar'; y; }",url:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties",mdxType:"TableRow"}),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"table-heading",colSpan:"2"},"Miscellaneous")),(0,o.kt)(r.Z,{name:"Babel Template",code:"template(`const %%importName%% = require(%%source%%);`);",url:"https://babeljs.io/docs/en/babel-template",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Flow",code:"function foo(x: ?number): string {};",url:"https://flowtype.org/",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"ESM to CJS",code:"export default 42;",url:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"JSX",code:"<View style={{ color: 'red' }} />",url:"https://reactjs.org/docs/jsx-in-depth",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"Object Assign",code:"Object.assign(a, b);",url:"https://babeljs.io/docs/en/babel-plugin-transform-object-assign",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"React Display Name",code:"const bar = createReactClass({});",url:"https://babeljs.io/docs/en/babel-plugin-transform-react-display-name",mdxType:"TableRow"}),(0,o.kt)(r.Z,{name:"TypeScript",code:"function foo(x: { hello: true, target: 'react native!' }): string {};",url:"https://www.typescriptlang.org/",mdxType:"TableRow"}))),(0,o.kt)("h2",d({},{id:"polyfills"}),"Polyfills"),(0,o.kt)("p",null,"Many standard functions are also available on all the supported JavaScript runtimes."),(0,o.kt)("h4",d({},{id:"browser"}),"Browser"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://nodejs.org/docs/latest/api/modules.html"}),"CommonJS require")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.chrome.com/devtools/docs/console-api"}),"console.{log, warn, error, info, trace, table, group, groupEnd}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/network#content"}),"XMLHttpRequest, fetch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"/docs/timers#content"}),"{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"))),(0,o.kt)("h4",d({},{id:"ecmascript-2015-es6"}),"ECMAScript 2015 (ES6)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"}),"Array.from")),(0,o.kt)("li",{parentName:"ul"},"Array.prototype.{",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),"find"),", ",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"}),"findIndex"),"}"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"Object.assign")),(0,o.kt)("li",{parentName:"ul"},"String.prototype.{",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"}),"startsWith"),", ",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"}),"endsWith"),", ",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"}),"repeat"),", ",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"}),"includes"),"}")),(0,o.kt)("h4",d({},{id:"ecmascript-2016-es7"}),"ECMAScript 2016 (ES7)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array.prototype.",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"}),"includes"))),(0,o.kt)("h4",d({},{id:"ecmascript-2017-es8"}),"ECMAScript 2017 (ES8)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Object.{",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"}),"entries"),", ",(0,o.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"}),"values"),"}")),(0,o.kt)("h4",d({},{id:"specific"}),"Specific"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__DEV__"))))}v.isMDXComponent=!0}}]);