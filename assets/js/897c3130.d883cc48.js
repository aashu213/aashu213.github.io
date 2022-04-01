"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83821],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return k},toc:function(){return h},default:function(){return b}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&s(e,n,t[n]);return e};const u={id:"modal",title:"Modal"},c=void 0,k={unversionedId:"modal",id:"version-0.61/modal",title:"Modal",description:"The Modal component is a basic way to present content above an enclosing view.",source:"@site/versioned_docs/version-0.61/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/0.61/modal",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/modal.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"modal",title:"Modal"},sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 MaskedViewIOS",permalink:"/docs/0.61/maskedviewios"},next:{title:"Picker",permalink:"/docs/0.61/picker"}},h=[{value:"Props",id:"props",children:[{value:"<code>visible</code>",id:"visible",children:[],level:3},{value:"<code>supportedOrientations</code>",id:"supportedorientations",children:[],level:3},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[],level:3},{value:"<code>onShow</code>",id:"onshow",children:[],level:3},{value:"<code>transparent</code>",id:"transparent",children:[],level:3},{value:"<code>animationType</code>",id:"animationtype",children:[],level:3},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",children:[],level:3},{value:"<code>onDismiss</code>",id:"ondismiss",children:[],level:3},{value:"<code>onOrientationChange</code>",id:"onorientationchange",children:[],level:3},{value:"<code>presentationStyle</code>",id:"presentationstyle",children:[],level:3},{value:"<code>animated</code>",id:"animated",children:[],level:3}],level:2}],N={toc:h};function b(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},N),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Modal component is a basic way to present content above an enclosing view."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport {\n  Modal,\n  Text,\n  TouchableHighlight,\n  View,\n  Alert\n} from 'react-native';\n\nclass ModalExample extends Component {\n  state = {\n    modalVisible: false\n  };\n\n  setModalVisible(visible) {\n    this.setState({ modalVisible: visible });\n  }\n\n  render() {\n    return (\n      <View style={{ marginTop: 22 }}>\n        <Modal\n          animationType=\"slide\"\n          transparent={false}\n          visible={this.state.modalVisible}\n          onRequestClose={() => {\n            Alert.alert('Modal has been closed.');\n          }}>\n          <View style={{ marginTop: 22 }}>\n            <View>\n              <Text>Hello World!</Text>\n\n              <TouchableHighlight\n                onPress={() => {\n                  this.setModalVisible(!this.state.modalVisible);\n                }}>\n                <Text>Hide Modal</Text>\n              </TouchableHighlight>\n            </View>\n          </View>\n        </Modal>\n\n        <TouchableHighlight\n          onPress={() => {\n            this.setModalVisible(true);\n          }}>\n          <Text>Show Modal</Text>\n        </TouchableHighlight>\n      </View>\n    );\n  }\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"reference"}),"Reference"),(0,a.kt)("h2",m({},{id:"props"}),"Props"),(0,a.kt)("h3",m({},{id:"visible"}),(0,a.kt)("inlineCode",{parentName:"h3"},"visible")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"visible")," prop determines whether your modal is visible."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"supportedorientations"}),(0,a.kt)("inlineCode",{parentName:"h3"},"supportedOrientations")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"supportedOrientations")," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"presentationStyle")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"pageSheet")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"formSheet"),", this property will be ignored by iOS."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onrequestclose"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onRequestClose")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequestClose")," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler")," events will not be emitted as long as the modal is open."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"(Others)")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onshow"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onShow")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow")," prop allows passing a function that will be called once the modal has been shown."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"transparent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transparent")," prop determines whether your modal will fill the entire view. Setting this to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," will render the modal over a transparent background."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"animationtype"}),(0,a.kt)("inlineCode",{parentName:"h3"},"animationType")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"animationType")," prop controls how the modal animates."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slide")," slides in from the bottom"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fade")," fades into view"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none")," appears without an animation")),(0,a.kt)("p",null,"Default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"hardwareaccelerated"}),(0,a.kt)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hardwareAccelerated")," prop controls whether to force hardware acceleration for the underlying window."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"ondismiss"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDismiss")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onDismiss")," prop allows passing a function that will be called once the modal has been dismissed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"onorientationchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onOrientationChange")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onOrientationChange")," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"presentationstyle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"presentationStyle")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"presentationStyle")," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle")," for details."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fullScreen")," covers the screen completely"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pageSheet")," covers portrait-width view centered (only on larger devices)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formSheet")," covers narrow-width view centered (only on larger devices)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"overFullScreen")," covers the screen completely, but allows transparency")),(0,a.kt)("p",null,"Default is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"overFullScreen")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fullScreen")," depending on ",(0,a.kt)("inlineCode",{parentName:"p"},"transparent")," property."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"animated"}),(0,a.kt)("inlineCode",{parentName:"h3"},"animated")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.61/modal#animationtype"}),(0,a.kt)("inlineCode",{parentName:"a"},"animationType"))," prop instead.")))}b.isMDXComponent=!0}}]);