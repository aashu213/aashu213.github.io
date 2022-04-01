"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[89623],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={id:"gesture-responder-system",title:"Gesture Responder System"},d=void 0,m={unversionedId:"gesture-responder-system",id:"gesture-responder-system",title:"Gesture Responder System",description:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches.",source:"@site/../docs/gesture-responder-system.md",sourceDirName:".",slug:"/gesture-responder-system",permalink:"/docs/next/gesture-responder-system",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/gesture-responder-system.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"gesture-responder-system",title:"Gesture Responder System"}},f=[{value:"Best Practices",id:"best-practices",children:[],level:3},{value:"TouchableHighlight and Touchable*",id:"touchablehighlight-and-touchable",children:[],level:3},{value:"Responder Lifecycle",id:"responder-lifecycle",children:[{value:"Capture ShouldSet Handlers",id:"capture-shouldset-handlers",children:[],level:3},{value:"PanResponder",id:"panresponder",children:[],level:3}],level:2}],g={toc:f};function b(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches."),(0,r.kt)("p",null,"The touch responder system is needed to allow components to negotiate these touch interactions without any additional knowledge about their parent or child components."),(0,r.kt)("h3",h({},{id:"best-practices"}),"Best Practices"),(0,r.kt)("p",null,"To make your app feel great, every action should have the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feedback/highlighting- show the user what is handling their touch, and what will happen when they release the gesture"),(0,r.kt)("li",{parentName:"ul"},"Cancel-ability- when making an action, the user should be able to abort it mid-touch by dragging their finger away")),(0,r.kt)("p",null,"These features make users more comfortable while using an app, because it allows people to experiment and interact without fear of making mistakes."),(0,r.kt)("h3",h({},{id:"touchablehighlight-and-touchable"}),"TouchableHighlight and Touchable","*"),(0,r.kt)("p",null,"The responder system can be complicated to use. So we have provided an abstract ",(0,r.kt)("inlineCode",{parentName:"p"},"Touchable"),' implementation for things that should be "tappable". This uses the responder system and allows you to configure tap interactions declaratively. Use ',(0,r.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," anywhere where you would use a button or link on web."),(0,r.kt)("h2",h({},{id:"responder-lifecycle"}),"Responder Lifecycle"),(0,r.kt)("p",null,"A view can become the touch responder by implementing the correct negotiation methods. There are two methods to ask the view if it wants to become responder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onStartShouldSetResponder: (evt) => true,")," - Does this view want to become responder on the start of a touch?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onMoveShouldSetResponder: (evt) => true,"),' - Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?')),(0,r.kt)("p",null,"If the View returns true and attempts to become the responder, one of the following will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderGrant: (evt) => {}")," - The View is now responding for touch events. This is the time to highlight and show the user what is happening"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderReject: (evt) => {}")," - Something else is the responder right now and will not release it")),(0,r.kt)("p",null,"If the view is responding, the following handlers can be called:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderMove: (evt) => {}")," - The user is moving their finger"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderRelease: (evt) => {}"),' - Fired at the end of the touch, ie "touchUp"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderTerminationRequest: (evt) => true")," - Something else wants to become responder. Should this view release the responder? Returning true allows release"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onResponderTerminate: (evt) => {}")," - The responder has been taken from the View. Might be taken by other views after a call to ",(0,r.kt)("inlineCode",{parentName:"li"},"onResponderTerminationRequest"),", or might be taken by the OS without asking (happens with control center/ notification center on iOS)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"evt")," is a synthetic touch event with the following form:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nativeEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"changedTouches")," - Array of all touch events that have changed since the last event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identifier")," - The ID of the touch"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locationX")," - The X position of the touch, relative to the element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locationY")," - The Y position of the touch, relative to the element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageX")," - The X position of the touch, relative to the root element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageY")," - The Y position of the touch, relative to the root element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target")," - The node id of the element receiving the touch event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - A time identifier for the touch, useful for velocity calculation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"touches")," - Array of all current touches on the screen")))),(0,r.kt)("h3",h({},{id:"capture-shouldset-handlers"}),"Capture ShouldSet Handlers"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onStartShouldSetResponder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onMoveShouldSetResponder")," are called with a bubbling pattern, where the deepest node is called first. That means that the deepest component will become responder when multiple Views return true for ",(0,r.kt)("inlineCode",{parentName:"p"},"*ShouldSetResponder")," handlers. This is desirable in most cases, because it makes sure all controls and buttons are usable."),(0,r.kt)("p",null,"However, sometimes a parent will want to make sure that it becomes responder. This can be handled by using the capture phase. Before the responder system bubbles up from the deepest component, it will do a capture phase, firing ",(0,r.kt)("inlineCode",{parentName:"p"},"on*ShouldSetResponderCapture"),". So if a parent View wants to prevent the child from becoming responder on a touch start, it should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"onStartShouldSetResponderCapture")," handler which returns true."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onStartShouldSetResponderCapture: (evt) => true,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"View.props.onMoveShouldSetResponderCapture: (evt) => true,"))),(0,r.kt)("h3",h({},{id:"panresponder"}),"PanResponder"),(0,r.kt)("p",null,"For higher-level gesture interpretation, check out ",(0,r.kt)("a",h({parentName:"p"},{href:"/docs/next/panresponder"}),"PanResponder"),"."))}b.isMDXComponent=!0}}]);