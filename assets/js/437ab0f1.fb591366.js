"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[23022],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,k=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63772:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return h},default:function(){return b}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&m(e,n,t[n]);return e};const u={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},s=void 0,k={unversionedId:"datepickerios",id:"version-0.61/datepickerios",title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.61/datepickerios.md",sourceDirName:".",slug:"/datepickerios",permalink:"/docs/0.61/datepickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/datepickerios.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 CheckBox",permalink:"/docs/0.61/checkbox"},next:{title:"DrawerLayoutAndroid",permalink:"/docs/0.61/drawerlayoutandroid"}},h=[{value:"Example",id:"example",children:[],level:3},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[],level:3},{value:"<code>onChange</code>",id:"onchange",children:[],level:3},{value:"<code>onDateChange</code>",id:"ondatechange",children:[],level:3},{value:"<code>maximumDate</code>",id:"maximumdate",children:[],level:3},{value:"<code>minimumDate</code>",id:"minimumdate",children:[],level:3},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[],level:3},{value:"<code>mode</code>",id:"mode",children:[],level:3},{value:"<code>locale</code>",id:"locale",children:[],level:3},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[],level:3},{value:"<code>initialDate</code>",id:"initialdate",children:[],level:3}],level:2}],N={toc:h};function b(e){var t,r=e,{components:m}=r,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},N),u),l(t,i({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerIOS")," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onDateChange")," callback and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",(0,a.kt)("inlineCode",{parentName:"p"},"props.date")," as the source of truth."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerIOS")," has been merged with ",(0,a.kt)("inlineCode",{parentName:"p"},"TimePickerAndroid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid")," into a single component called ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker"}),"DateTimePicker")," and will be removed in a future release.")),(0,a.kt)("h3",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport { DatePickerIOS, View, StyleSheet } from 'react-native';\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({ chosenDate: newDate });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  }\n});\n")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/docs/assets/DatePickerIOS/example.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h1",c({},{id:"reference"}),"Reference"),(0,a.kt)("h2",c({},{id:"props"}),"Props"),(0,a.kt)("p",null,"Inherits ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),(0,a.kt)("h3",c({},{id:"date"}),(0,a.kt)("inlineCode",{parentName:"h3"},"date")),(0,a.kt)("p",null,"The currently selected date."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"Date change handler."),(0,a.kt)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"ondatechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDateChange")),(0,a.kt)("p",null,"Date change handler."),(0,a.kt)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"maximumdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"maximumDate")),(0,a.kt)("p",null,"Maximum date."),(0,a.kt)("p",null,"Restricts the range of possible date/time values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"minimumdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minimumDate")),(0,a.kt)("p",null,"Minimum date."),(0,a.kt)("p",null,"Restricts the range of possible date/time values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/0.61/datepickerios#maximumdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"minuteinterval"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minuteInterval")),(0,a.kt)("p",null,"The interval at which minutes can be selected."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),":"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"mode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,"The date picker mode."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"enum('date', 'time', 'datetime', 'countdown')"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"time"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime"),": ",(0,a.kt)("img",{src:n(72293).Z})),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"locale"}),(0,a.kt)("inlineCode",{parentName:"h3"},"locale")),(0,a.kt)("p",null,"The locale for the date picker. Value needs to be a ",(0,a.kt)("a",c({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"}),"Locale ID"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"timezoneoffsetinminutes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),(0,a.kt)("p",null,"Timezone offset in minutes."),(0,a.kt)("p",null,"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 ","*"," 60."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"initialdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"initialDate")),(0,a.kt)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"No")))))}b.isMDXComponent=!0},72293:function(e,t,n){t.Z=n.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);