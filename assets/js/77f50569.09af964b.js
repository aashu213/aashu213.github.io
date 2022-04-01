"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27094],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(r,".").concat(m)]||u[m]||p[m]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return b},default:function(){return y}});var i=n(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={id:"accessibility",title:"Accessibility",description:"Create mobile apps accessible to assistive technology with React Native's suite of APIs designed to work with Android and iOS."},m=void 0,h={unversionedId:"accessibility",id:"version-0.68/accessibility",title:"Accessibility",description:"Create mobile apps accessible to assistive technology with React Native's suite of APIs designed to work with Android and iOS.",source:"@site/versioned_docs/version-0.68/accessibility.md",sourceDirName:".",slug:"/accessibility",permalink:"/docs/accessibility",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/accessibility.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"accessibility",title:"Accessibility",description:"Create mobile apps accessible to assistive technology with React Native's suite of APIs designed to work with Android and iOS."},sidebar:"docs",previous:{title:"Gesture Responder System",permalink:"/docs/gesture-responder-system"},next:{title:"Performance Overview",permalink:"/docs/performance"}},b=[{value:"Accessibility properties",id:"accessibility-properties",children:[{value:"<code>accessible</code>",id:"accessible",children:[],level:3},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[],level:3},{value:"<code>accessibilityHint</code>",id:"accessibilityhint",children:[],level:3},{value:'<code>accessibilityIgnoresInvertColors</code> <div class="label ios">iOS</div>',id:"accessibilityignoresinvertcolors-ios",children:[],level:3},{value:'<code>accessibilityLiveRegion</code> <div class="label android">Android</div>',id:"accessibilityliveregion-android",children:[],level:3},{value:"<code>accessibilityRole</code>",id:"accessibilityrole",children:[],level:3},{value:"<code>accessibilityState</code>",id:"accessibilitystate",children:[],level:3},{value:"<code>accessibilityValue</code>",id:"accessibilityvalue",children:[],level:3},{value:'<code>accessibilityViewIsModal</code> <div class="label ios">iOS</div>',id:"accessibilityviewismodal-ios",children:[],level:3},{value:'<code>accessibilityElementsHidden</code> <div class="label ios">iOS</div>',id:"accessibilityelementshidden-ios",children:[],level:3},{value:'<code>importantForAccessibility</code> <div class="label android">Android</div>',id:"importantforaccessibility-android",children:[],level:3},{value:'<code>onAccessibilityEscape</code> <div class="label ios">iOS</div>',id:"onaccessibilityescape-ios",children:[],level:3},{value:"<code>onAccessibilityTap</code>",id:"onaccessibilitytap",children:[],level:3},{value:'<code>onMagicTap</code> <div class="label ios">iOS</div>',id:"onmagictap-ios",children:[],level:3}],level:2},{value:"Accessibility Actions",id:"accessibility-actions",children:[],level:2},{value:"Checking if a Screen Reader is Enabled",id:"checking-if-a-screen-reader-is-enabled",children:[],level:2},{value:'Sending Accessibility Events <div class="label android">Android</div>',id:"sending-accessibility-events-android",children:[],level:2},{value:'Testing TalkBack Support <div class="label android">Android</div>',id:"testing-talkback-support-android",children:[],level:2},{value:'Testing VoiceOver Support <div class="label ios">iOS</div>',id:"testing-voiceover-support-ios",children:[],level:2},{value:"Additional Resources",id:"additional-resources",children:[],level:2}],k={toc:b};function y(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var i in e)r.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=p(p({},k),d),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Both Android and iOS provide APIs for integrating apps with assistive technologies like the bundled screen readers VoiceOver (iOS) and TalkBack (Android). React Native has complementary APIs that let your app accommodate all users."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Android and iOS differ slightly in their approaches, and thus the React Native implementations may vary by platform.")),(0,i.kt)("h2",p({},{id:"accessibility-properties"}),"Accessibility properties"),(0,i.kt)("h3",p({},{id:"accessible"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessible")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component. By default, all touchable elements are accessible."),(0,i.kt)("p",null,"On Android, ",(0,i.kt)("inlineCode",{parentName:"p"},"accessible={true}")," property for a react-native View will be translated into native ",(0,i.kt)("inlineCode",{parentName:"p"},"focusable={true}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<View accessible={true}>\n  <Text>text one</Text>\n  <Text>text two</Text>\n</View>\n")),(0,i.kt)("p",null,"In the above example, we can't get accessibility focus separately on 'text one' and 'text two'. Instead we get focus on a parent view with 'accessible' property."),(0,i.kt)("h3",p({},{id:"accessibilitylabel"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityLabel")),(0,i.kt)("p",null,"When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected. VoiceOver will read this string when a user selects the associated element."),(0,i.kt)("p",null,"To use, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityLabel")," property to a custom string on your View, Text or Touchable:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Tap me!"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Press me!</Text>\n  </View>\n</TouchableOpacity>\n')),(0,i.kt)("p",null,"In the above example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityLabel"),' on the TouchableOpacity element would default to "Press me!". The label is constructed by concatenating all Text node children separated by spaces.'),(0,i.kt)("h3",p({},{id:"accessibilityhint"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityHint")),(0,i.kt)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label."),(0,i.kt)("p",null,"To use, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityHint")," property to a custom string on your View, Text or Touchable:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Go back"\n  accessibilityHint="Navigates to the previous screen"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Back</Text>\n  </View>\n</TouchableOpacity>\n')),(0,i.kt)("p",null,"iOS In the above example, VoiceOver will read the hint after the label, if the user has hints enabled in the device's VoiceOver settings. Read more about guidelines for accessibilityHint in the ",(0,i.kt)("a",p({parentName:"p"},{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint"}),"iOS Developer Docs")),(0,i.kt)("p",null,"Android In the above example, TalkBack will read the hint after the label. At this time, hints cannot be turned off on Android."),(0,i.kt)("h3",p({},{id:"accessibilityignoresinvertcolors-ios"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityIgnoresInvertColors")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,"Inverting screen colors is an Accessibility feature that makes the iPhone and iPad easier on the eyes for some people with a sensitivity to brightness, easier to distinguish for some people with color blindness, and easier to make out for some people with low vision. However, sometimes you have views such as photos that you don't want to be inverted. In this case, you can set this property to be false so that these specific views won't have their colors inverted."),(0,i.kt)("h3",p({},{id:"accessibilityliveregion-android"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityLiveRegion")," ",(0,i.kt)("div",{class:"label android"},"Android")),(0,i.kt)("p",null,"When components dynamically change, we want TalkBack to alert the end user. This is made possible by the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityLiveRegion")," property. It can be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"polite")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"assertive"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"none")," Accessibility services should not announce changes to this view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"polite")," Accessibility services should announce changes to this view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"assertive")," Accessibility services should interrupt ongoing speech to immediately announce changes to this view.")),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),'<TouchableWithoutFeedback onPress={addOne}>\n  <View style={styles.embedded}>\n    <Text>Click me</Text>\n  </View>\n</TouchableWithoutFeedback>\n<Text accessibilityLiveRegion="polite">\n  Clicked {count} times\n</Text>\n')),(0,i.kt)("p",null,"In the above example method ",(0,i.kt)("inlineCode",{parentName:"p"},"addOne")," changes the state variable ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),". As soon as an end user clicks the TouchableWithoutFeedback, TalkBack reads text in the Text view because of its ",(0,i.kt)("inlineCode",{parentName:"p"},'accessibilityLiveRegion="polite"')," property."),(0,i.kt)("h3",p({},{id:"accessibilityrole"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityRole")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityRole")," communicates the purpose of a component to the user of an assistive technology."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityRole")," can be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"adjustable"),' Used when an element can be "adjusted" (e.g. a slider).'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alert")," Used when an element contains important text to be presented to the user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"button")," Used when the element should be treated as a button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"checkbox")," Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"combobox")," Used when an element represents a combo box, which allows the user to select among several choices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"header")," Used when an element acts as a header for a content section (e.g. the title of a navigation bar)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"image")," Used when the element should be treated as an image. Can be combined with button or link, for example."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"imagebutton")," Used when the element should be treated as a button and is also an image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"keyboardkey")," Used when the element acts as a keyboard key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"link")," Used when the element should be treated as a link."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"menu")," Used when the component is a menu of choices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"menubar")," Used when a component is a container of multiple menus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"menuitem")," Used to represent an item within a menu."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"none")," Used when the element has no role."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"progressbar")," Used to represent a component which indicates progress of a task."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"radio")," Used to represent a radio button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"radiogroup")," Used to represent a group of radio buttons."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scrollbar")," Used to represent a scroll bar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"search")," Used when the text field element should also be treated as a search field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"spinbutton")," Used to represent a button which opens a list of choices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"summary")," Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"switch")," Used to represent a switch which can be turned on and off."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tab")," Used to represent a tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tablist")," Used to represent a list of tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"text")," Used when the element should be treated as static text that cannot change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timer")," Used to represent a timer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"togglebutton")," Used to represent a toggle button. Should be used with accessibilityState checked to indicate if the button is toggled on or off."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"toolbar")," Used to represent a tool bar (a container of action buttons or components).")),(0,i.kt)("h3",p({},{id:"accessibilitystate"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityState")),(0,i.kt)("p",null,"Describes the current state of a component to the user of an assistive technology."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityState")," is an object. It contains the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Indicates whether the element is disabled or not."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"selected"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Indicates whether a selectable element is currently selected or not."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),'Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.'),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"boolean or 'mixed'"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"busy"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Indicates whether an element is currently busy or not."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"expanded"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Indicates whether an expandable element is currently expanded or collapsed."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,i.kt)("p",null,"To use, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityState")," to an object with a specific definition."),(0,i.kt)("h3",p({},{id:"accessibilityvalue"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityValue")),(0,i.kt)("p",null,"Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityValue")," is an object. It contains the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"min"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"The minimum value of this component's range."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Required if ",(0,i.kt)("inlineCode",{parentName:"td"},"now")," is set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"max"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"The maximum value of this component's range."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Required if ",(0,i.kt)("inlineCode",{parentName:"td"},"now")," is set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"now"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"The current value of this component's range."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"text"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"A textual description of this component's value. Will override ",(0,i.kt)("inlineCode",{parentName:"td"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"now"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"max")," if set."),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,i.kt)("h3",p({},{id:"accessibilityviewismodal-ios"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityViewIsModal")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,"A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver."),(0,i.kt)("p",null,"For example, in a window that contains sibling views ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", setting ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on view ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". On the other hand, if view ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," contains a child view ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and you set ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on view ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", VoiceOver does not ignore the elements in view ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("h3",p({},{id:"accessibilityelementshidden-ios"}),(0,i.kt)("inlineCode",{parentName:"h3"},"accessibilityElementsHidden")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,"A Boolean value indicating whether the accessibility elements contained within this accessibility element are hidden."),(0,i.kt)("p",null,"For example, in a window that contains sibling views ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", setting ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityElementsHidden")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on view ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". This is similar to the Android property ",(0,i.kt)("inlineCode",{parentName:"p"},'importantForAccessibility="no-hide-descendants"'),"."),(0,i.kt)("h3",p({},{id:"importantforaccessibility-android"}),(0,i.kt)("inlineCode",{parentName:"h3"},"importantForAccessibility")," ",(0,i.kt)("div",{class:"label android"},"Android")),(0,i.kt)("p",null,"In the case of two overlapping UI components with the same parent, default accessibility focus can have unpredictable behavior. The ",(0,i.kt)("inlineCode",{parentName:"p"},"importantForAccessibility")," property will resolve this by controlling if a view fires accessibility events and if it is reported to accessibility services. It can be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"no")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"no-hide-descendants")," (the last value will force accessibility services to ignore the component and all of its children)."),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<View style={styles.container}>\n  <View\n    style={[styles.layout, { backgroundColor: 'green' }]}\n    importantForAccessibility=\"yes\">\n    <Text>First layout</Text>\n  </View>\n  <View\n    style={[styles.layout, { backgroundColor: 'yellow' }]}\n    importantForAccessibility=\"no-hide-descendants\">\n    <Text>Second layout</Text>\n  </View>\n</View>\n")),(0,i.kt)("p",null,"In the above example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"yellow")," layout and its descendants are completely invisible to TalkBack and all other accessibility services. So we can use overlapping views with the same parent without confusing TalkBack."),(0,i.kt)("h3",p({},{id:"onaccessibilityescape-ios"}),(0,i.kt)("inlineCode",{parentName:"h3"},"onAccessibilityEscape")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,'Assign this property to a custom function which will be called when someone performs the "escape" gesture, which is a two finger Z shaped gesture. An escape function should move back hierarchically in the user interface. This can mean moving up or back in a navigation hierarchy or dismissing a modal user interface. If the selected element does not have an ',(0,i.kt)("inlineCode",{parentName:"p"},"onAccessibilityEscape")," function, the system will attempt to traverse up the view hierarchy until it finds a view that does or bonk to indicate it was unable to find one."),(0,i.kt)("h3",p({},{id:"onaccessibilitytap"}),(0,i.kt)("inlineCode",{parentName:"h3"},"onAccessibilityTap")),(0,i.kt)("p",null,"Use this property to assign a custom function to be called when someone activates an accessible element by double tapping on it while it's selected."),(0,i.kt)("h3",p({},{id:"onmagictap-ios"}),(0,i.kt)("inlineCode",{parentName:"h3"},"onMagicTap")," ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,'Assign this property to a custom function which will be called when someone performs the "magic tap" gesture, which is a double-tap with two fingers. A magic tap function should perform the most relevant action a user could take on a component. In the Phone app on iPhone, a magic tap answers a phone call, or ends the current one. If the selected element does not have an ',(0,i.kt)("inlineCode",{parentName:"p"},"onMagicTap")," function, the system will traverse up the view hierarchy until it finds a view that does."),(0,i.kt)("h2",p({},{id:"accessibility-actions"}),"Accessibility Actions"),(0,i.kt)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. In order to support accessibility actions, a component must do two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define the list of actions it supports via the ",(0,i.kt)("inlineCode",{parentName:"li"},"accessibilityActions")," property."),(0,i.kt)("li",{parentName:"ul"},"Implement an ",(0,i.kt)("inlineCode",{parentName:"li"},"onAccessibilityAction")," function to handle action requests.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,i.kt)("th",p({parentName:"tr"},{align:null}),"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",p({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,i.kt)("td",p({parentName:"tr"},{align:null}),"No")))),(0,i.kt)("p",null,"Actions either represent standard actions, such as clicking a button or adjusting a slider, or custom actions specific to a given component such as deleting an email message. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field is required for both standard and custom actions, but ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," is optional for standard actions."),(0,i.kt)("p",null,"When adding support for standard actions, ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'magicTap'")," - iOS only - While VoiceOver focus is on or inside the component, the user double tapped with two fingers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'escape'")," - iOS only - While VoiceOver focus is on or inside the component, the user performed a two finger scrub gesture (left, right, left)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'activate'")," - Activate the component. Typically this should perform the same action as when the user touches or clicks the component when not using an assistive technology. This is generated when a screen reader user double taps the component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'increment'")," - Increment an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",(0,i.kt)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes upward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume up button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'decrement'")," - Decrement an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",(0,i.kt)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes downward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume down button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'longpress'")," - Android only - This action is generated when the user places accessibility focus on the component and double tap and holds one finger on the screen. Typically, this should perform the same action as when the user holds down one finger on the component while not using an assistive technology.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," field is optional for standard actions, and is often unused by assistive technologies. For custom actions, it is a localized string containing a description of the action to be presented to the user."),(0,i.kt)("p",null,"To handle action requests, a component must implement an ",(0,i.kt)("inlineCode",{parentName:"p"},"onAccessibilityAction")," function. The only argument to this function is an event containing the name of the action to perform. The below example from RNTester shows how to create a component which defines and handles several custom actions."),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<View\n  accessible={true}\n  accessibilityActions={[\n    { name: 'cut', label: 'cut' },\n    { name: 'copy', label: 'copy' },\n    { name: 'paste', label: 'paste' }\n  ]}\n  onAccessibilityAction={(event) => {\n    switch (event.nativeEvent.actionName) {\n      case 'cut':\n        Alert.alert('Alert', 'cut action success');\n        break;\n      case 'copy':\n        Alert.alert('Alert', 'copy action success');\n        break;\n      case 'paste':\n        Alert.alert('Alert', 'paste action success');\n        break;\n    }\n  }}\n/>\n")),(0,i.kt)("h2",p({},{id:"checking-if-a-screen-reader-is-enabled"}),"Checking if a Screen Reader is Enabled"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API allows you to determine whether or not a screen reader is currently active. See the ",(0,i.kt)("a",p({parentName:"p"},{href:"accessibilityinfo"}),"AccessibilityInfo documentation")," for details."),(0,i.kt)("h2",p({},{id:"sending-accessibility-events-android"}),"Sending Accessibility Events ",(0,i.kt)("div",{class:"label android"},"Android")),(0,i.kt)("p",null,"Sometimes it is useful to trigger an accessibility event on a UI component (i.e. when a custom view appears on a screen or set accessibility focus to a view). Native UIManager module exposes a method \u2018sendAccessibilityEvent\u2019 for this purpose. It takes two arguments: view tag and a type of an event. The supported event types are ",(0,i.kt)("inlineCode",{parentName:"p"},"typeWindowStateChanged"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"typeViewFocused")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"typeViewClicked"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"import {\n  Platform,\n  UIManager,\n  findNodeHandle\n} from 'react-native';\n\nif (Platform.OS === 'android') {\n  UIManager.sendAccessibilityEvent(\n    findNodeHandle(this),\n    UIManager.AccessibilityEventTypes.typeViewFocused\n  );\n}\n")),(0,i.kt)("h2",p({},{id:"testing-talkback-support-android"}),"Testing TalkBack Support ",(0,i.kt)("div",{class:"label android"},"Android")),(0,i.kt)("p",null,'To enable TalkBack, go to the Settings app on your Android device or emulator. Tap Accessibility, then TalkBack. Toggle the "Use service" switch to enable or disable it.'),(0,i.kt)("p",null,"Android emulators don't have TalkBack installed by default. You can install TalkBack on your emulator via the Google Play Store. Make sure to choose an emulator with the Google Play store installed. These are available in Android Studio."),(0,i.kt)("p",null,"You can use the volume key shortcut to toggle TalkBack. To turn on the volume key shortcut, go to the Settings app, then Accessibility. At the top, turn on Volume key shortcut."),(0,i.kt)("p",null,"To use the volume key shortcut, press both volume keys for 3 seconds to start an accessibility tool."),(0,i.kt)("p",null,"Additionally, if you prefer, you can toggle TalkBack via command line with:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-shell"}),"# disable\nadb shell settings put secure enabled_accessibility_services com.android.talkback/com.google.android.marvin.talkback.TalkBackService\n\n# enable\nadb shell settings put secure enabled_accessibility_services com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService\n")),(0,i.kt)("h2",p({},{id:"testing-voiceover-support-ios"}),"Testing VoiceOver Support ",(0,i.kt)("div",{class:"label ios"},"iOS")),(0,i.kt)("p",null,"To enable VoiceOver, go to the Settings app on your iOS device (it's not available for simulator). Tap General, then Accessibility. There you will find many tools that people use to make their devices more usable, such as bolder text, increased contrast, and VoiceOver."),(0,i.kt)("p",null,'To enable VoiceOver, tap on VoiceOver under "Vision" and toggle the switch that appears at the top.'),(0,i.kt)("p",null,'At the very bottom of the Accessibility settings, there is an "Accessibility Shortcut". You can use this to toggle VoiceOver by triple clicking the Home button.'),(0,i.kt)("h2",p({},{id:"additional-resources"}),"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",p({parentName:"li"},{href:"https://engineering.fb.com/ios/making-react-native-apps-accessible/"}),"Making React Native Apps Accessible"))))}y.isMDXComponent=!0}}]);