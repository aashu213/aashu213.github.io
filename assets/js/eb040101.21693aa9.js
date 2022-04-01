"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[99681],{35318:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17135:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return h},default:function(){return N}});var a=n(35318),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&c(t,n,e[n]);return t};const s={id:"toolbarandroid",title:"ToolbarAndroid"},m=void 0,k={unversionedId:"toolbarandroid",id:"version-0.63/toolbarandroid",title:"ToolbarAndroid",description:"NOTE: Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use @react-native-community/toolbar-android instead.",source:"@site/versioned_docs/version-0.63/toolbarandroid.md",sourceDirName:".",slug:"/toolbarandroid",permalink:"/docs/0.63/toolbarandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/toolbarandroid.md",tags:[],version:"0.63",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"toolbarandroid",title:"ToolbarAndroid"}},h=[{value:"Props",id:"props",children:[{value:"<code>actions</code>",id:"actions",children:[],level:3},{value:"<code>contentInsetStart</code>",id:"contentinsetstart",children:[],level:3},{value:"<code>contentInsetEnd</code>",id:"contentinsetend",children:[],level:3},{value:"<code>logo</code>",id:"logo",children:[],level:3},{value:"<code>navIcon</code>",id:"navicon",children:[],level:3},{value:"<code>onActionSelected</code>",id:"onactionselected",children:[],level:3},{value:"<code>onIconClicked</code>",id:"oniconclicked",children:[],level:3},{value:"<code>overflowIcon</code>",id:"overflowicon",children:[],level:3},{value:"<code>rtl</code>",id:"rtl",children:[],level:3},{value:"<code>subtitle</code>",id:"subtitle",children:[],level:3},{value:"<code>subtitleColor</code>",id:"subtitlecolor",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3},{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>titleColor</code>",id:"titlecolor",children:[],level:3}],level:2}],b={toc:h};function N(t){var e,n=t,{components:l}=n,c=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},b),c),r(e,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/toolbar-android"}),"@react-native-community/toolbar-android")," instead.")),(0,a.kt)("p",null,"React component that wraps the Android-only ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/reference/android/support/v7/widget/Toolbar.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"Toolbar")," widget"),". A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and subtitle are expanded so the logo and navigation icons are displayed on the left, title and subtitle in the middle and the actions on the right."),(0,a.kt)("p",null,"If the toolbar has an only child, it will be displayed between the title and actions."),(0,a.kt)("p",null,"Although the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where ",(0,a.kt)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," translates into a bundler URL. In release mode you should always use a drawable resource for these icons. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," will do this automatically for you, so as long as you don't explicitly use e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"{uri: 'http://...'}"),", you will be good."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"render: function() {\n  return (\n    <ToolbarAndroid\n      logo={require('./app_logo.png')}\n      title=\"AwesomeApp\"\n      actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}\n      onActionSelected={this.onActionSelected} />\n  )\n},\nonActionSelected: function(position) {\n  if (position === 0) { // index of 'Settings'\n    showSettings();\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"reference"}),"Reference"),(0,a.kt)("h2",u({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/0.63/view#props"}),"View Props"),"."),(0,a.kt)("h3",u({},{id:"actions"}),(0,a.kt)("inlineCode",{parentName:"h3"},"actions")),(0,a.kt)("p",null,"Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don't fit they are placed in an 'overflow' menu."),(0,a.kt)("p",null,"This property takes an array of objects, where each object has the following keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title"),": ",(0,a.kt)("strong",{parentName:"li"},"required"),", the title of this action"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"icon"),": the icon for this action, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"require('./some_icon.png')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"show"),": when to show this action as an icon or hide it in the overflow menu: ",(0,a.kt)("inlineCode",{parentName:"li"},"always"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ifRoom")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"never")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showWithText"),": boolean, whether to show text alongside the icon or not")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"array of object: {title: string,icon: optionalImageSource,show: enum('always', 'ifRoom', 'never'),showWithText: bool}"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"contentinsetstart"}),(0,a.kt)("inlineCode",{parentName:"h3"},"contentInsetStart")),(0,a.kt)("p",null,"Sets the content inset for the toolbar starting edge."),(0,a.kt)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"contentinsetend"}),(0,a.kt)("inlineCode",{parentName:"h3"},"contentInsetEnd")),(0,a.kt)("p",null,"Sets the content inset for the toolbar ending edge."),(0,a.kt)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"logo"}),(0,a.kt)("inlineCode",{parentName:"h3"},"logo")),(0,a.kt)("p",null,"Sets the toolbar logo."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"optionalImageSource"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"navicon"}),(0,a.kt)("inlineCode",{parentName:"h3"},"navIcon")),(0,a.kt)("p",null,"Sets the navigation icon."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"optionalImageSource"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"onactionselected"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onActionSelected")),(0,a.kt)("p",null,"Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"oniconclicked"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onIconClicked")),(0,a.kt)("p",null,"Callback called when the icon is selected."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"overflowicon"}),(0,a.kt)("inlineCode",{parentName:"h3"},"overflowIcon")),(0,a.kt)("p",null,"Sets the overflow icon."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"optionalImageSource"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"rtl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rtl")),(0,a.kt)("p",null,"Used to set the toolbar direction to RTL. In addition to this property you need to add"),(0,a.kt)("p",null,'android:supportsRtl="true"'),(0,a.kt)("p",null,"to your application AndroidManifest.xml and then call ",(0,a.kt)("inlineCode",{parentName:"p"},"setLayoutDirection(LayoutDirection.RTL)")," in your MainActivity ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreate")," method."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"subtitle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"subtitle")),(0,a.kt)("p",null,"Sets the toolbar subtitle."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"subtitlecolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"subtitleColor")),(0,a.kt)("p",null,"Sets the toolbar subtitle color."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/docs/0.63/colors"}),"color")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"testid"}),(0,a.kt)("inlineCode",{parentName:"h3"},"testID")),(0,a.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"title"}),(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"Sets the toolbar title."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"titlecolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"titleColor")),(0,a.kt)("p",null,"Sets the toolbar title color."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("a",u({parentName:"td"},{href:"/docs/0.63/colors"}),"color")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))))}N.isMDXComponent=!0}}]);