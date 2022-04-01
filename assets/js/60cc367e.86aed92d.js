"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54877],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(b,s(s({ref:t},u),{},{components:n})):o.createElement(b,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return m},default:function(){return y}});var o=n(35318),a=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"handling-touches",title:"Handling Touches"},h=void 0,b={unversionedId:"handling-touches",id:"version-0.65/handling-touches",title:"Handling Touches",description:"Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button.",source:"@site/versioned_docs/version-0.65/handling-touches.md",sourceDirName:".",slug:"/handling-touches",permalink:"/docs/0.65/handling-touches",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/handling-touches.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"handling-touches",title:"Handling Touches"},sidebar:"version-0.65/docs",previous:{title:"Color Reference",permalink:"/docs/0.65/colors"},next:{title:"Navigating Between Screens",permalink:"/docs/0.65/navigation"}},m=[{value:"Displaying a basic button",id:"displaying-a-basic-button",children:[],level:2},{value:"Touchables",id:"touchables",children:[],level:2},{value:"Scrolling and swiping",id:"scrolling-and-swiping",children:[],level:2},{value:"Known issues",id:"known-issues",children:[],level:2}],g={toc:m};function y(e){var t,a=e,{components:u}=a,d=((e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(a,["components"]);return(0,o.kt)("wrapper",(t=p(p({},g),d),r(t,s({components:u,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/gesture-responder-system"}),"gesture responder system")," to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button."),(0,o.kt)("h2",p({},{id:"displaying-a-basic-button"}),"Displaying a basic button"),(0,o.kt)("p",null,(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/button"}),"Button")," provides a basic button component that is rendered nicely on all platforms. The minimal example to display a button looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<Button\n  onPress={() => {\n    alert('You tapped the button!');\n  }}\n  title=\"Press Me\"\n/>\n")),(0,o.kt)("p",null,'This will render a blue label on iOS, and a blue rounded rectangle with light text on Android. Pressing the button will call the "onPress" function, which in this case displays an alert popup. If you like, you can specify a "color" prop to change the color of your button.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90341).Z})),(0,o.kt)("p",null,"Go ahead and play around with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Button"),' component using the example below. You can select which platform your app is previewed in by clicking on the toggle in the bottom right and then clicking on "Tap to Play" to preview the app.'),(0,o.kt)("div",p({},{className:"snack-player","data-snack-name":"Button Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20ButtonBasics%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.alternativeLayoutButtonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22This%20looks%20great!%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22OK!%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%0A%20%20%7D%2C%0A%20%20alternativeLayoutButtonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,o.kt)("h2",p({},{id:"touchables"}),"Touchables"),(0,o.kt)("p",null,'If the basic button doesn\'t look right for your app, you can build your own button using any of the "Touchable" components provided by React Native. The "Touchable" components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized. These components do not provide any default styling, however, so you will need to do a bit of work to get them looking nicely in your app.'),(0,o.kt)("p",null,'Which "Touchable" component you use will depend on what kind of feedback you want to provide:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generally, you can use ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/touchablehighlight"}),(0,o.kt)("strong",{parentName:"a"},"TouchableHighlight"))," anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may consider using ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/touchablenativefeedback"}),(0,o.kt)("strong",{parentName:"a"},"TouchableNativeFeedback"))," on Android to display ink surface reaction ripples that respond to the user's touch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/touchableopacity"}),(0,o.kt)("strong",{parentName:"a"},"TouchableOpacity"))," can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you need to handle a tap gesture but you don't want any feedback to be displayed, use ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/touchablewithoutfeedback"}),(0,o.kt)("strong",{parentName:"a"},"TouchableWithoutFeedback")),"."))),(0,o.kt)("p",null,"In some cases, you may want to detect when a user presses and holds a view for a set amount of time. These long presses can be handled by passing a function to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onLongPress"),' props of any of the "Touchable" components.'),(0,o.kt)("p",null,"Let's see all of these in action:"),(0,o.kt)("div",p({},{className:"snack-player","data-snack-name":"Touchables","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20TouchableOpacity%2C%20TouchableNativeFeedback%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20Touchables%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20_onLongPressButton()%20%7B%0A%20%20%20%20alert('You%20long-pressed%20the%20button!')%0A%20%20%7D%0A%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableHighlight%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPressButton%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableOpacity%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20TouchableNativeFeedback.SelectableBackground()%20%3A%20''%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableNativeFeedback%20%7BPlatform.OS%20!%3D%3D%20'android'%20%3F%20'(Android%20only)'%20%3A%20''%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableWithoutFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20onLongPress%3D%7Bthis._onLongPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchable%20with%20Long%20Press%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20paddingTop%3A%2060%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20width%3A%20260%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%232196F3'%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20color%3A%20'white'%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,o.kt)("h2",p({},{id:"scrolling-and-swiping"}),"Scrolling and swiping"),(0,o.kt)("p",null,"Gestures commonly used on devices with touchable screens include swipes and pans. These allow the user to scroll through a list of items, or swipe through pages of content. For these, check out the ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/0.65/scrollview"}),"ScrollView")," Core Component."),(0,o.kt)("h2",p({},{id:"known-issues"}),"Known issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",p({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/29308#issuecomment-792864162"}),"react-native#29308"),": The touch area never extends past the parent view bounds and on Android negative margin is not supported.")))}y.isMDXComponent=!0},90341:function(e,t,n){t.Z=n.p+"assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png"}}]);