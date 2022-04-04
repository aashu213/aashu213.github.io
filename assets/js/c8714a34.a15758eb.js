"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5541],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30498:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return b},default:function(){return f}});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&c(e,a,t[a]);return e};const u={id:"button",title:"Button"},h=void 0,m={unversionedId:"button",id:"button",title:"Button",description:"A basic button component that should render nicely on any platform. Supports a minimal level of customization.",source:"@site/../docs/button.md",sourceDirName:".",slug:"/button",permalink:"/docs/next/button",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/button.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"button",title:"Button"}},b=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:'<div class="label required basic">Required</div><strong><code>onPress</code></strong>',id:"requiredonpress",children:[],level:3},{value:'<div class="label required basic">Required</div><strong><code>title</code></strong>',id:"requiredtitle",children:[],level:3},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[],level:3},{value:'<code>accessibilityLanguage</code> <div class="label ios">iOS</div>',id:"accessibilitylanguage-ios",children:[],level:3},{value:"<code>accessibilityActions</code>",id:"accessibilityactions",children:[],level:3},{value:"<code>onAccessibilityAction</code>",id:"onaccessibilityaction",children:[],level:3},{value:"<code>color</code>",id:"color",children:[],level:3},{value:"<code>disabled</code>",id:"disabled",children:[],level:3},{value:'<code>hasTVPreferredFocus</code> <div class="label tv">TV</div>',id:"hastvpreferredfocus-tv",children:[],level:3},{value:'<code>nextFocusDown</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusdown-androidtv",children:[],level:3},{value:'<code>nextFocusForward</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusforward-androidtv",children:[],level:3},{value:'<code>nextFocusLeft</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusleft-androidtv",children:[],level:3},{value:'<code>nextFocusRight</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusright-androidtv",children:[],level:3},{value:'<code>nextFocusUp</code> <div class="label android">Android</div><div class="label tv">TV</div>',id:"nextfocusup-androidtv",children:[],level:3},{value:"<code>testID</code>",id:"testid",children:[],level:3},{value:'<code>touchSoundDisabled</code> <div class="label android">Android</div>',id:"touchsounddisabled-android",children:[],level:3}],level:2}],k={toc:b};function f(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},k),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A basic button component that should render nicely on any platform. Supports a minimal level of customization."),(0,n.kt)("p",null,"If this button doesn't look right for your app, you can build your own button using ",(0,n.kt)("a",p({parentName:"p"},{href:"touchableopacity"}),"TouchableOpacity")," or ",(0,n.kt)("a",p({parentName:"p"},{href:"touchablewithoutfeedback"}),"TouchableWithoutFeedback"),". For inspiration, look at the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js"}),"source code for this button component"),". Or, take a look at the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button"}),"wide variety of button components built by the community"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>\n')),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("div",p({},{className:"snack-player","data-snack-name":"Button Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Button%2C%20View%2C%20SafeAreaView%2C%20Text%2C%20Alert%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Separator%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%0A)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20The%20title%20and%20onPress%20handler%20are%20required.%20It%20is%20recommended%20to%20set%20accessibilityLabel%20to%20help%20make%20your%20app%20usable%20by%20everyone.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Simple%20Button%20pressed')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20Adjust%20the%20color%20in%20a%20way%20that%20looks%20standard%20on%20each%20platform.%20On%20%20iOS%2C%20the%20color%20prop%20controls%20the%20color%20of%20the%20text.%20On%20Android%2C%20the%20color%20adjusts%20the%20background%20color%20of%20the%20button.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20color%3D%22%23f194ff%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Button%20with%20adjusted%20color%20pressed')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20All%20interaction%20for%20the%20component%20are%20disabled.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Press%20me%22%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Cannot%20press%20this%20one')%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20This%20layout%20strategy%20lets%20the%20title%20define%20the%20width%20of%20the%20button.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.fixToText%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20button%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Left%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20button%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Right%20button%20pressed')%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FSafeAreaView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20marginHorizontal%3A%2016%2C%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%7D%2C%0A%20%20fixToText%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",p({},{id:"reference"}),"Reference"),(0,n.kt)("h2",p({},{id:"props"}),"Props"),(0,n.kt)("h3",p({},{id:"requiredonpress"}),(0,n.kt)("div",{class:"label required basic"},"Required"),(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"onPress"))),(0,n.kt)("p",null,"Handler to be called when the user taps the button."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"({ nativeEvent: ",(0,n.kt)("a",p({parentName:"td"},{href:"pressevent"}),"PressEvent")," })")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"requiredtitle"}),(0,n.kt)("div",{class:"label required basic"},"Required"),(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"title"))),(0,n.kt)("p",null,"Text to display inside the button. On Android the given title will be converted to the uppercased form."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"accessibilitylabel"}),(0,n.kt)("inlineCode",{parentName:"h3"},"accessibilityLabel")),(0,n.kt)("p",null,"Text to display for blindness accessibility features."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"accessibilitylanguage-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"accessibilityLanguage")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"A value indicating which language should be used by the screen reader when the user interacts with the element. It should follow the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.rfc-editor.org/info/bcp47"}),"BCP 47 specification"),"."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage"}),"iOS ",(0,n.kt)("inlineCode",{parentName:"a"},"accessibilityLanguage")," doc")," for more information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"accessibilityactions"}),(0,n.kt)("inlineCode",{parentName:"h3"},"accessibilityActions")),(0,n.kt)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The ",(0,n.kt)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the field name and label."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/accessibility#accessibility-actions"}),"Accessibility guide")," for more information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"array"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"onaccessibilityaction"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onAccessibilityAction")),(0,n.kt)("p",null,"Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/accessibility#accessibility-actions"}),"Accessibility guide")," for more information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"Color of the text (iOS), or background color of the button (Android)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"colors"}),"color")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("ins",{style:{background:"#2196F3"},className:"color-box"})," `'#2196F3'` ",(0,n.kt)("div",{className:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("ins",{style:{background:"#007AFF"},className:"color-box"})," ",(0,n.kt)("inlineCode",{parentName:"td"},"'#007AFF'")," ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"disabled"}),(0,n.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", disable all interactions for this component."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"hastvpreferredfocus-tv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")," ",(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"TV preferred focus."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"nextfocusdown-androidtv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"Designates the next view to receive focus when the user navigates down. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown"}),"Android documentation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"nextfocusforward-androidtv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"Designates the next view to receive focus when the user navigates forward. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward"}),"Android documentation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"nextfocusleft-androidtv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"Designates the next view to receive focus when the user navigates left. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft"}),"Android documentation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"nextfocusright-androidtv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"Designates the next view to receive focus when the user navigates right. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight"}),"Android documentation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"nextfocusup-androidtv"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")," ",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("div",{class:"label tv"},"TV")),(0,n.kt)("p",null,"Designates the next view to receive focus when the user navigates up. See the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp"}),"Android documentation"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"testid"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testID")),(0,n.kt)("p",null,"Used to locate this view in end-to-end tests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"touchsounddisabled-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"touchSoundDisabled")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", doesn't play system sound on touch."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"false"))))))}f.isMDXComponent=!0}}]);