"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[40255],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53822:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var o=n(35318),i=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"actionsheetios",title:"ActionSheetIOS"},h=void 0,m={unversionedId:"actionsheetios",id:"version-0.66/actionsheetios",title:"ActionSheetIOS",description:"Displays native to iOS Action Sheet component.",source:"@site/versioned_docs/version-0.66/actionsheetios.md",sourceDirName:".",slug:"/actionsheetios",permalink:"/docs/0.66/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/actionsheetios.md",tags:[],version:"0.66",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"actionsheetios",title:"ActionSheetIOS"},sidebar:"version-0.66/api",previous:{title:"ToastAndroid",permalink:"/docs/0.66/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/0.66/dynamiccolorios"}},f=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[],level:3},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[],level:3}],level:2}],k={toc:f};function b(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},k),p),a(t,r({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Displays native to iOS ",(0,o.kt)("a",u({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"}),"Action Sheet")," component."),(0,o.kt)("h2",u({},{id:"example"}),"Example"),(0,o.kt)("div",u({},{className:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%22%F0%9F%94%AE%22)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%0A%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20options%3A%20%5B%22Cancel%22%2C%20%22Generate%20number%22%2C%20%22Reset%22%5D%2C%0A%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%0A%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%2C%0A%20%20%20%20%20%20%20%20userInterfaceStyle%3A%20'dark'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(%22%F0%9F%94%AE%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%22Show%20Action%20Sheet%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20result%3A%20%7B%0A%20%20%20%20fontSize%3A%2064%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,o.kt)("h1",u({},{id:"reference"}),"Reference"),(0,o.kt)("h2",u({},{id:"methods"}),"Methods"),(0,o.kt)("h3",u({},{id:"showactionsheetwithoptions"}),(0,o.kt)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static showActionSheetWithOptions(options, callback)\n")),(0,o.kt)("p",null,"Display an iOS action sheet. The ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",(0,o.kt)("inlineCode",{parentName:"li"},"options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int or array of ints) - indices of destructive buttons in ",(0,o.kt)("inlineCode",{parentName:"li"},"options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",(0,o.kt)("a",u({parentName:"li"},{href:"colors"}),"color")," used for non-destructive button titles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disabledButtonIndices")," (array of numbers) - a list of button indices which should be disabled"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userInterfaceStyle")," (string) - the interface style used for the action sheet, can be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"light")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"dark"),", otherwise the default system style will be used")),(0,o.kt)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),(0,o.kt)("p",null,"Minimal example:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0\n  },\n  (buttonIndex) => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",u({},{id:"showshareactionsheetwithoptions"}),(0,o.kt)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),(0,o.kt)("p",null,"Display the iOS share sheet. The ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc. If ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," points to a remote file or address it must conform to URL format as described in ",(0,o.kt)("a",u({parentName:"p"},{href:"https://www.ietf.org/rfc/rfc2396.txt"}),"RFC 2396"),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared.")),(0,o.kt)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"stack")," property of type ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("p",null,"The 'successCallback' function takes two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a boolean value signifying success or failure"),(0,o.kt)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}}]);