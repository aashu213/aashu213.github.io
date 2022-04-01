"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76034],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return b},assets:function(){return h},toc:function(){return f},default:function(){return v}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={title:"Introducing new iOS WebViews",author:"Ramanpreet Nara",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/rsnara",tags:["engineering"]},d=void 0,b={permalink:"/blog/2018/08/27/wkwebview",source:"@site/blog/2018-08-27-wkwebview.md",title:"Introducing new iOS WebViews",description:"For a long time now, Apple has discouraged using UIWebViews in favor of WKWebView. In iOS 12, which will be released in the upcoming months, UIWebViews will be formally deprecated. React Native's iOS WebView implementation relies heavily on the UIWebView class. Therefore, in light of these developments, we've built a new native iOS backend to the WebView React Native component that uses WKWebView.",date:"2018-08-27T00:00:00.000Z",formattedDate:"August 27, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:1.795,truncated:!1,authors:[{name:"Ramanpreet Nara",title:"Software Engineer at Facebook",url:"https://github.com/rsnara"}],prevItem:{title:"Open Source Roadmap",permalink:"/blog/2018/11/01/oss-roadmap"},nextItem:{title:"Accessibility API Updates",permalink:"/blog/2018/08/13/react-native-accessibility-updates"}},h={authorsImageUrls:[void 0]},f=[{value:"Improvements",id:"improvements",children:[],level:2},{value:"Caveats",id:"caveats",children:[],level:2}],w={toc:f};function v(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},w),s),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"For a long time now, Apple has discouraged using UIWebViews in favor of WKWebView. In iOS 12, which will be released in the upcoming months, ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2018/234/?time=104"}),"UIWebViews will be formally deprecated"),". React Native's iOS WebView implementation relies heavily on the UIWebView class. Therefore, in light of these developments, we've built a new native iOS backend to the WebView React Native component that uses WKWebView."),(0,a.kt)("p",null,"The tail end of these changes were landed in ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/33b353c97c31190439a22febbd3d2a9ead49d3c9"}),"this commit"),", and will become available in the 0.57 release."),(0,a.kt)("p",null,"To opt into this new implementation, please use the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://reactnative.dev/docs/0.63/webview#usewebkit"}),(0,a.kt)("inlineCode",{parentName:"a"},"useWebKit"))," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"<WebView\n  useWebKit={true}\n  source={{ url: 'https://www.google.com' }}\n/>\n")),(0,a.kt)("h2",u({},{id:"improvements"}),"Improvements"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UIWebView")," had no legitimate way to facilitate communication between the JavaScript running in the WebView, and React Native. When messages were sent from the WebView, we relied on a hack to deliver them to React Native. Succinctly, we encoded the message data into a url with a special scheme, and navigated the WebView to it. On the native side, we intercepted and cancelled this navigation, parsed the data from the url, and finally called into React Native. This implementation was error prone and insecure. I'm glad to announce that we've leveraged ",(0,a.kt)("inlineCode",{parentName:"p"},"WKWebView")," features to completely replace it."),(0,a.kt)("p",null,"Other benefits of WKWebView over UIWebView include faster JavaScript execution, and a multi-process architecture. Please see this ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2014/206"}),"2014 WWDC")," for more details."),(0,a.kt)("h2",u({},{id:"caveats"}),"Caveats"),(0,a.kt)("p",null,"If your components use the following props, then you may experience problems when switching to WKWebView. For the time being, we suggest that you avoid using these props:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inconsistent behavior:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"automaticallyAdjustContentInsets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"contentInsets")," (",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/bacfd9297657569006bab2b1f024ad1f289b1b27"}),"commit"),")"),(0,a.kt)("p",null,"When you add contentInsets to a ",(0,a.kt)("inlineCode",{parentName:"p"},"WKWebView"),", it doesn't change the ",(0,a.kt)("inlineCode",{parentName:"p"},"WKWebView"),"'s viewport. The viewport remains the same size as the frame. With ",(0,a.kt)("inlineCode",{parentName:"p"},"UIWebView"),", the viewport size actually changes (gets smaller, if the content insets are positive)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," (",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/215fa14efc2a817c7e038075163491c8d21526fd"}),"commit"),")"),(0,a.kt)("p",null,"With the new iOS implementation of WebView, there's a chance that your background color will flicker into view if you use this property. Furthermore, ",(0,a.kt)("inlineCode",{parentName:"p"},"WKWebView")," renders transparent backgrounds differently from ",(0,a.kt)("inlineCode",{parentName:"p"},"UIWebview"),". Please look at the commit description for more details."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Not supported:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scalesPageToFit")," (",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/commit/b18fddadfeae5512690a0a059a4fa80c864f43a3"}),"commit"),")"),(0,a.kt)("p",null,"WKWebView didn't support the scalesPageToFit prop, so we couldn't implement this on the WebView React Native component."))}v.isMDXComponent=!0}}]);