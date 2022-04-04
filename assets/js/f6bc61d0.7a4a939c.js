"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6603],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(27378),r=n(14185),o=n(40488);var l=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(18870),i=n(38944),u="tabItem_c0e5",p=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&v(e,n,t[n]);return e};function b(e){var t,n,r;const{lazy:o,block:p,defaultValue:m,values:h,groupId:f,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=h?h:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,s.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(r=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=b[0])?void 0:n.props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:N}=l(),[w,x]=(0,a.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=C[f];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=D.indexOf(t),a=k[n].value;a!==w&&(S(t),x(a),null!=f&&N(f,a))},R=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]||D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]||D[D.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},k.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=A({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:R,onFocus:P,onClick:P},n),o={className:(0,i.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(r,c(o))),null!=t?t:e);var r,o}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,r.Z)();return a.createElement(b,A({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",s=r?"macos":o?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},97519:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return A},toc:function(){return b},default:function(){return g}});var a=n(35318),r=n(65941),o=n(37785),l=n(11674),s=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"panresponder",title:"PanResponder"},v=void 0,A={unversionedId:"panresponder",id:"panresponder",title:"PanResponder",description:"PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures.",source:"@site/../docs/panresponder.md",sourceDirName:".",slug:"/panresponder",permalink:"/docs/next/panresponder",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/panresponder.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"panresponder",title:"PanResponder"},sidebar:"architecture",previous:{title:"Adopting the New Architecture",permalink:"/docs/next/new-architecture-intro"},next:{title:"PixelRatio",permalink:"/docs/next/pixelratio"}},b=[{value:"Usage Pattern",id:"usage-pattern",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>create()</code>",id:"create",children:[],level:3}],level:2}],k={toc:b};function g(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},k),m),i(t,u({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize basic multi-touch gestures."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," holds an ",(0,a.kt)("inlineCode",{parentName:"p"},"InteractionManager")," handle to block long-running JS events from interrupting active gestures."),(0,a.kt)("p",null,"It provides a predictable wrapper of the responder handlers provided by the ",(0,a.kt)("a",h({parentName:"p"},{href:"/docs/next/gesture-responder-system"}),"gesture responder system"),". For each handler, it provides a new ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState")," object alongside the native event object:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"onPanResponderMove: (event, gestureState) => {}\n")),(0,a.kt)("p",null,"A native event is a synthetic touch event with form of ",(0,a.kt)("a",h({parentName:"p"},{href:"pressevent"}),"PressEvent"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState")," object has the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stateID")," - ID of the gestureState- persisted as long as there's at least one touch on screen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moveX")," - the latest screen coordinates of the recently-moved touch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moveY")," - the latest screen coordinates of the recently-moved touch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x0")," - the screen coordinates of the responder grant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y0")," - the screen coordinates of the responder grant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dx")," - accumulated distance of the gesture since the touch started"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dy")," - accumulated distance of the gesture since the touch started"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vx")," - current velocity of the gesture"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vy")," - current velocity of the gesture"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numberActiveTouches")," - Number of touches currently on screen")),(0,a.kt)("h2",h({},{id:"usage-pattern"}),"Usage Pattern"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const ExampleComponent = () => {\n  const panResponder = React.useRef(\n    PanResponder.create({\n      // Ask to be the responder:\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>\n        true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // The gesture has started. Show visual feedback so the user knows\n        // what is happening!\n        // gestureState.d{x,y} will be set to zero now\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // The most recent move distance is gestureState.move{X,Y}\n        // The accumulated gesture distance since becoming responder is\n        // gestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) =>\n        true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // The user has released all touches while this view is the\n        // responder. This typically means a gesture has succeeded\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // Another component has become the responder, so this gesture\n        // should be cancelled\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // Returns whether this component should block native components from becoming the JS\n        // responder. Returns true by default. Is currently only supported on android.\n        return true;\n      }\n    })\n  ).current;\n\n  return <View {...panResponder.panHandlers} />;\n};\n")),(0,a.kt)("h2",h({},{id:"example"}),"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," works with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API to help build complex gestures in the UI. The following example contains an animated ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," component which can be dragged freely across the screen"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",h({},{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20useRef(%0A%20%20%20%20PanResponder.create(%7B%0A%20%20%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20pan.setOffset(%7B%0A%20%20%20%20%20%20%20%20%20%20x%3A%20pan.x._value%2C%0A%20%20%20%20%20%20%20%20%20%20y%3A%20pan.y._value%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20onPanResponderMove%3A%20Animated.event(%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20dx%3A%20pan.x%2C%20dy%3A%20pan.y%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20pan.flattenOffset()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20).current%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20pan.x%20%7D%2C%20%7B%20translateY%3A%20pan.y%20%7D%5D%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20titleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20lineHeight%3A%2024%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20width%3A%20150%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%2C%0A%20%20%20%20borderRadius%3A%205%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",h({},{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20pan%20%3D%20new%20Animated.ValueXY()%3B%0A%20%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.pan.setOffset(%7B%0A%20%20%20%20%20%20%20%20x%3A%20this.pan.x._value%2C%0A%20%20%20%20%20%20%20%20y%3A%20this.pan.y._value%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%20dx%3A%20this.pan.x%2C%20dy%3A%20this.pan.y%20%7D%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.pan.flattenOffset()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20this.pan.x%20%7D%2C%20%7B%20translateY%3A%20this.pan.y%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%7B...this.panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20titleText%3A%20%7B%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20lineHeight%3A%2024%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20width%3A%20150%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%2C%0A%20%20%20%20borderRadius%3A%205%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("p",null,"Try the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js"}),"PanResponder example in RNTester"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",h({},{id:"reference"}),"Reference"),(0,a.kt)("h2",h({},{id:"methods"}),"Methods"),(0,a.kt)("h3",h({},{id:"create"}),(0,a.kt)("inlineCode",{parentName:"h3"},"create()")),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static create(config)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",h({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",h({parentName:"tr"},{align:null}),"config ",(0,a.kt)("div",{className:"label basic required"},"Required")),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",h({parentName:"tr"},{align:null}),"Refer below")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object provides enhanced versions of all of the responder callbacks that provide not only the ",(0,a.kt)("a",h({parentName:"p"},{href:"pressevent"}),(0,a.kt)("inlineCode",{parentName:"a"},"PressEvent")),", but also the ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," gesture state, by replacing the word ",(0,a.kt)("inlineCode",{parentName:"p"},"Responder")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," in each of the typical ",(0,a.kt)("inlineCode",{parentName:"p"},"onResponder*")," callbacks. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object would look like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponder: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponder: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderReject: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderGrant: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderStart: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderEnd: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderRelease: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderMove: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderTerminate: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderTerminationRequest: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onShouldBlockNativeResponder: (e, gestureState) => {...}"))),(0,a.kt)("p",null,"In general, for events that have capture equivalents, we update the gestureState once in the capture phase and can use it in the bubble phase as well."),(0,a.kt)("p",null,"Be careful with ",(0,a.kt)("inlineCode",{parentName:"p"},"onStartShould*")," callbacks. They only reflect updated ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState")," for start/end events that bubble/capture to the Node. Once the node is the responder, you can rely on every start/end event being processed by the gesture and ",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState")," being updated accordingly. (numberActiveTouches) may not be totally accurate unless you are the responder."))}g.isMDXComponent=!0}}]);