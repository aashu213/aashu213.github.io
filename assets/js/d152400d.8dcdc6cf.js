"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[12942],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return h},default:function(){return b}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"timers",title:"Timers"},d=void 0,f={unversionedId:"timers",id:"version-0.62/timers",title:"Timers",description:"Timers are an important part of an application and React Native implements the browser timers.",source:"@site/versioned_docs/version-0.62/timers.md",sourceDirName:".",slug:"/timers",permalink:"/docs/0.62/timers",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/timers.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"timers",title:"Timers"},sidebar:"version-0.62/docs",previous:{title:"JavaScript Environment",permalink:"/docs/0.62/javascript-environment"},next:{title:"Using Hermes",permalink:"/docs/0.62/hermes"}},h=[{value:"Timers",id:"timers",children:[],level:2},{value:"InteractionManager",id:"interactionmanager",children:[],level:2}],v={toc:h};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Timers are an important part of an application and React Native implements the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers"}),"browser timers"),"."),(0,r.kt)("h2",m({},{id:"timers"}),"Timers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setTimeout, clearTimeout"),(0,r.kt)("li",{parentName:"ul"},"setInterval, clearInterval"),(0,r.kt)("li",{parentName:"ul"},"setImmediate, clearImmediate"),(0,r.kt)("li",{parentName:"ul"},"requestAnimationFrame, cancelAnimationFrame")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame(fn)")," is not the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout(fn, 0)")," - the former will fire after all the frame has flushed, whereas the latter will fire as quickly as possible (over 1000x per second on a iPhone 5S)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate")," is executed at the end of the current JavaScript execution block, right before sending the batched response back to native. Note that if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate")," within a ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate")," callback, it will be executed right away, it won't yield back to native in between."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," implementation uses ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate")," as its asynchronicity implementation."),(0,r.kt)("h2",m({},{id:"interactionmanager"}),"InteractionManager"),(0,r.kt)("p",null,"One reason why well-built native apps feel so smooth is by avoiding expensive operations during interactions and animations. In React Native, we currently have a limitation that there is only a single JS execution thread, but you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractionManager")," to make sure long-running work is scheduled to start after any interactions/animations have completed."),(0,r.kt)("p",null,"Applications can schedule tasks to run after interactions with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n")),(0,r.kt)("p",null,"Compare this to other scheduling alternatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"requestAnimationFrame(): for code that animates a view over time."),(0,r.kt)("li",{parentName:"ul"},"setImmediate/setTimeout/setInterval(): run code later, note this may delay animations."),(0,r.kt)("li",{parentName:"ul"},"runAfterInteractions(): run code later, without delaying active animations.")),(0,r.kt)("p",null,"The touch handling system considers one or more active touches to be an 'interaction' and will delay ",(0,r.kt)("inlineCode",{parentName:"p"},"runAfterInteractions()")," callbacks until all touches have ended or been cancelled."),(0,r.kt)("p",null,"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"var handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n")))}b.isMDXComponent=!0}}]);