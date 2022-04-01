"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92947],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),o=Object.defineProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(27378),o=n(14185),r=n(40488);var i=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(18870),s=n(38944),c="tabItem_c0e5",u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))v.call(t,n)&&b(e,n,t[n]);return e};function y(e){var t,n,o;const{lazy:r,block:u,defaultValue:m,values:f,groupId:v,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,l.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(o=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(n=y[0])?void 0:n.props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:x}=i(),[O,C]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,l.o5)();if(null!=v){const e=A[v];null!=e&&e!==O&&k.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==O&&(N(t),C(a),null!=v&&x(v,a))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]||T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},b)},k.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=h({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:j,onFocus:E,onClick:E},n),r={className:(0,s.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":O===e})},d(o,p(r))),null!=t?t:e);var o,r}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function k(e){const t=(0,o.Z)();return a.createElement(y,h({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",l=o?"macos":r?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},19234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return b},metadata:function(){return h},toc:function(){return y},default:function(){return g}});var a=n(35318),o=n(65941),r=n(37785),i=n(11674),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const v={id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment."},b=void 0,h={unversionedId:"getting-started",id:"version-0.62/getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment.",source:"@site/versioned_docs/version-0.62/introduction.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/0.62/getting-started",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/introduction.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning React Native, using these docs, and setting up your environment."},sidebar:"version-0.62/docs",next:{title:"Core Components and Native Components",permalink:"/docs/0.62/intro-react-native-components"}},y=[{value:"How to use these docs",id:"how-to-use-these-docs",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Interactive examples",id:"interactive-examples",children:[],level:2},{value:"Function Components and Class Components",id:"function-components-and-class-components",children:[],level:2},{value:"Developer Notes",id:"developer-notes",children:[],level:2},{value:"Formatting",id:"formatting",children:[],level:2}],k={toc:y};function g(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},k),m),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("div",{class:"content-banner"},(0,a.kt)("p",null,"Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to ",(0,a.kt)("a",{href:"environment-setup"},"their own section"),". Continue reading for an introduction to the documentation, Native Components, React, and more!"),(0,a.kt)("img",{class:"content-banner-img",src:"/docs/assets/p_android-ios-devices.svg",alt:" "})),(0,a.kt)("p",null,"Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background."),(0,a.kt)("h2",f({},{id:"how-to-use-these-docs"}),"How to use these docs"),(0,a.kt)("p",null,"You can start here and read through these docs linearly like a book; or you can read the specific sections you need. Already familiar with React? You can skip ",(0,a.kt)("a",f({parentName:"p"},{href:"intro-react"}),"that section"),"\u2014or read it for a light refresher."),(0,a.kt)("h2",f({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"To work with React Native, you will need to have an understanding of JavaScript fundamentals. If you\u2019re new to JavaScript or need a refresher, you can ",(0,a.kt)("a",f({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"dive in")," or ",(0,a.kt)("a",f({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"}),"brush up")," at Mozilla Developer Network."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"While we do our best to assume no prior knowledge of React, Android, or iOS development, these are valuable topics of study for the aspiring React Native developer. Where sensible, we have linked to resources and articles that go more in depth.")),(0,a.kt)("h2",f({},{id:"interactive-examples"}),"Interactive examples"),(0,a.kt)("p",null,"This introduction lets you get started immediately in your browser with interactive examples like this one:"),(0,a.kt)("div",f({},{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20YourApp()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("p",null,'The above is a Snack Player. It\u2019s a handy tool created by Expo to embed and run React Native projects and share how they render in platforms like Android and iOS. The code is live and editable, so you can play directly with it in your browser. Go ahead and try changing the "Try editing me!" text above to "Hello, world!"'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally, if you want to setup a local development environment, ",(0,a.kt)("a",f({parentName:"p"},{href:"environment-setup"}),"you can follow our guide to setting up your environment on your local machine")," and paste the code examples into your ",(0,a.kt)("inlineCode",{parentName:"p"},"App.js")," file there. (If you are a web developer, you may already have a local environment set up for mobile browser testing!)")),(0,a.kt)("h2",f({},{id:"function-components-and-class-components"}),"Function Components and Class Components"),(0,a.kt)("p",null,"With React, you can make components using either classes or functions. Originally, class components were the only components that could have state. But since the introduction of React's Hooks API, you can add state and more to function components."),(0,a.kt)("p",null,(0,a.kt)("a",f({parentName:"p"},{href:"/blog/2019/03/12/releasing-react-native-059"}),"Hooks were introduced in React Native 0.59."),", and because Hooks are the future-facing way to write your React components, we wrote this introduction using function component examples. Where useful, we also cover class components under a toggle like so:"),(0,a.kt)(o.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",f({},{className:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20HelloWorldApp()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",f({},{className:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20HelloWorldApp%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("p",null,"You can find more examples of class components in ",(0,a.kt)("a",f({parentName:"p"},{href:"/versions"}),"previous versions of this documentation"),"."),(0,a.kt)("h2",f({},{id:"developer-notes"}),"Developer Notes"),(0,a.kt)("p",null,"People from many different development backgrounds are learning React Native. You may have experience with a range of technologies, from web to Android to iOS and more. We try to write for developers from all backgrounds. Sometimes we provide explanations specific to one platform or another like so:"),(0,a.kt)(o.Z,{groupId:"guide",defaultValue:"web",values:i.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"web",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Web developers may be familiar with this concept."))),(0,a.kt)(r.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Android developers may be familiar with this concept."))),(0,a.kt)(r.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"iOS developers may be familiar with this concept.")))),(0,a.kt)("h2",f({},{id:"formatting"}),"Formatting"),(0,a.kt)("p",null,"Menu paths are written in bold and use carets to navigate submenus. Example: ",(0,a.kt)("strong",{parentName:"p"},"Android Studio > Preferences")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that you know how this guide works, it's time to get to know the foundation of React Native: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/0.62/intro-react-native-components"}),"Native Components"),"."))}g.isMDXComponent=!0}}]);