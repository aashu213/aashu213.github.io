"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4762],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),r=n(14185),i=n(40488);var o=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(18870),s=n(38944),p="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&b(e,n,t[n]);return e};function k(e){var t,n,r;const{lazy:i,block:c,defaultValue:m,values:v,groupId:h,className:b}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=v?v:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.lx)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===m?m:null!=(r=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=k[0])?void 0:n.props.value;if(null!==T&&!g.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=o(),[V,O]=(0,a.useState)(T),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=h){const e=y[h];null!=e&&e!==V&&g.some((t=>t.value===e))&&O(e)}const A=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==V&&(E(t),O(a),null!=h&&w(h,a))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=f({role:"tab",tabIndex:V===e?0:-1,"aria-selected":V===e,key:e,ref:e=>C.push(e),onKeyDown:j,onFocus:A,onClick:A},n),i={className:(0,s.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":V===e})},u(r,d(i))),null!=t?t:e);var r,i}))),i?(0,a.cloneElement)(k.filter((e=>e.props.value===V))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==V})))))}function g(e){const t=(0,r.Z)();return a.createElement(k,f({key:String(t)},e))}},53727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return v},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return f},default:function(){return g}});var a=n(35318),r=n(65941),i=n(37785),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&d(e,n,t[n]);return e};const v={id:"building-for-tv",title:"Building For TV Devices",hide_table_of_contents:!0},h=void 0,b={unversionedId:"building-for-tv",id:"version-0.68/building-for-tv",title:"Building For TV Devices",description:"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications.",source:"@site/versioned_docs/version-0.68/building-for-tv.md",sourceDirName:".",slug:"/building-for-tv",permalink:"/docs/building-for-tv",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/building-for-tv.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"building-for-tv",title:"Building For TV Devices",hide_table_of_contents:!0}},f=[{value:"Build changes",id:"build-changes",children:[],level:2},{value:"Code changes",id:"code-changes",children:[],level:2},{value:"Build changes",id:"build-changes-1",children:[],level:2},{value:"Code changes",id:"code-changes-1",children:[],level:2}],k={toc:f};function g(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),d),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications."),(0,a.kt)(r.Z,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"androidtv",mdxType:"TabItem"},(0,a.kt)("h2",m({},{id:"build-changes"}),"Build changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Native layer"),": To run React Native project on Android TV make sure to make the following changes to ",(0,a.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-xml"}),'  \x3c!-- Add custom banner image to display as Android TV launcher icon --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"JavaScript layer"),": Support for Android TV has been added to ",(0,a.kt)("inlineCode",{parentName:"li"},"Platform.android.js"),". You can check whether code is running on Android TV by doing")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"var Platform = require('Platform');\nvar running_on_android_tv = Platform.isTV;\n")),(0,a.kt)("h2",m({},{id:"code-changes"}),"Code changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Access to touchable controls"),": When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," will work as expected. In particular:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),", sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function (cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dev Menu support"),": On the emulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Known issues"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextInput")," components do not work for now (i.e. they cannot receive focus automatically, see ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"}),"this comment"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is however possible to use a ref to manually trigger ",(0,a.kt)("inlineCode",{parentName:"li"},"inputRef.current.focus()"),"."),(0,a.kt)("li",{parentName:"ul"},"You can wrap your input inside a ",(0,a.kt)("inlineCode",{parentName:"li"},"TouchableWithoutFeedback")," component and trigger focus in the ",(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," event of that touchable. This enables opening the keyboard via the arrow keys."),(0,a.kt)("li",{parentName:"ul"},"The keyboard might reset its state after each keypress (this might only happen inside the Android TV emulator)."))),(0,a.kt)("li",{parentName:"ul"},"The content of ",(0,a.kt)("inlineCode",{parentName:"li"},"Modal")," components cannot receive focus, see ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/24448"}),"this issue")," for details."))))),(0,a.kt)(i.Z,{value:"tvos",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-tvos")," instead. For the details please check the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://reactnative.dev/blog/#moving-apple-tv-to-react-native-tvos"}),"0.62 release blog post"),".")),(0,a.kt)("h2",m({},{id:"build-changes-1"}),"Build changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Native layer"),": React Native Xcode projects all now have Apple TV build targets, with names ending in the string '-tvOS'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"react-native init"),": New React Native projects created with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native init")," will have Apple TV target automatically created in their XCode projects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"JavaScript layer"),": Support for Apple TV has been added to ",(0,a.kt)("inlineCode",{parentName:"p"},"Platform.ios.js"),". You can check whether code is running on AppleTV by doing"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"var Platform = require('Platform');\nvar running_on_tv = Platform.isTV;\n\n// If you want to be more specific and only detect devices running tvOS\n// (but no Android TV devices) you can use:\nvar running_on_apple_tv = Platform.isTVOS;\n")),(0,a.kt)("h2",m({},{id:"code-changes-1"}),"Code changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Access to touchable controls"),": When running on Apple TV, the native view class is ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function (cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote animations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TabBarIOS behavior"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"TabBarIOS")," component wraps the native ",(0,a.kt)("inlineCode",{parentName:"p"},"UITabBar")," API, which works differently on Apple TV. To avoid jittery re-rendering of the tab bar in tvOS (see ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/15081"}),"this issue"),"), the selected tab bar item can only be set from JavaScript on initial render, and is controlled after that by the user through native code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Known issues"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/12793"}),"ListView scrolling"),". The issue can be worked around by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"removeClippedSubviews")," to false in ListView and similar components. For more discussion of this issue, see ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/12944"}),"this PR"),".")))))))}g.isMDXComponent=!0}}]);