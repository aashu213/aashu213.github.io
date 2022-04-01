"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45611],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=l,m=p["".concat(u,".").concat(h)]||p[h]||s[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),l=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(27378),l=a(14185),r=a(40488);var o=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(18870),u=a(38944),c="tabItem_c0e5",d=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&b(e,a,t[a]);if(h)for(var a of h(t))k.call(t,a)&&b(e,a,t[a]);return e};function y(e){var t,a,l;const{lazy:r,block:d,defaultValue:h,values:m,groupId:k,className:b}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,i.lx)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===h?h:null!=(l=null!=h?h:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=y[0])?void 0:a.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:w}=o(),[C,x]=(0,n.useState)(N),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=k){const e=A[k];null!=e&&e!==C&&g.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,a=D.indexOf(t),n=g[a].value;n!==C&&(T(t),x(n),null!=k&&w(k,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=f({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:E,onFocus:O,onClick:O},a),r={className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":C===e})},s(l,p(r))),null!=t?t:e);var l,r}))),r?(0,n.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function g(e){const t=(0,l.Z)();return n.createElement(y,f({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},29626:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return b},metadata:function(){return f},toc:function(){return y},default:function(){return v}});var n=a(35318),l=a(65941),r=a(37785),o=a(11674),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&h(e,a,t[a]);return e};const k={id:"touchablehighlight",title:"TouchableHighlight"},b=void 0,f={unversionedId:"touchablehighlight",id:"version-0.65/touchablehighlight",title:"TouchableHighlight",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.65/touchablehighlight.md",sourceDirName:".",slug:"/touchablehighlight",permalink:"/docs/0.65/touchablehighlight",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/touchablehighlight.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"touchablehighlight",title:"TouchableHighlight"},sidebar:"version-0.65/components",previous:{title:"TextInput",permalink:"/docs/0.65/textinput"},next:{title:"TouchableOpacity",permalink:"/docs/0.65/touchableopacity"}},y=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"TouchableWithoutFeedback Props",id:"touchablewithoutfeedback-props",children:[],level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",children:[],level:3},{value:"<code>onHideUnderlay</code>",id:"onhideunderlay",children:[],level:3},{value:"<code>onShowUnderlay</code>",id:"onshowunderlay",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",children:[],level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[],level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[],level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[],level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[],level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[],level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[],level:3},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",children:[],level:3}],level:2}],g={toc:y};function v(e){var t,a=e,{components:i}=a,h=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),h),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.65/pressable"}),"Pressable")," API.")),(0,n.kt)("p",null,"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view."),(0,n.kt)("p",null,"The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color."),(0,n.kt)("p",null,"TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableHighlight\n  activeOpacity={0.6}\n  underlayColor=\"#DDDDDD\"\n  onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableHighlight>;\n")),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"TouchableHighlight Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20TouchableHighlightExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(count%20%2B%201)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7BonPress%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bcount%20%3F%20count%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20TouchableHighlightExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"TouchableHighlight Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis.onPress%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.countContainer%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.countText%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bthis.state.count%20%3F%20this.state.count%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"reference"}),"Reference"),(0,n.kt)("h2",m({},{id:"props"}),"Props"),(0,n.kt)("h3",m({},{id:"touchablewithoutfeedback-props"}),(0,n.kt)("a",m({parentName:"h3"},{href:"/docs/0.65/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props")),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.65/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"activeopacity"}),(0,n.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,n.kt)("p",null,"Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires ",(0,n.kt)("inlineCode",{parentName:"p"},"underlayColor")," to be set."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"onhideunderlay"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onHideUnderlay")),(0,n.kt)("p",null,"Called immediately after the underlay is hidden."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"onshowunderlay"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onShowUnderlay")),(0,n.kt)("p",null,"Called immediately after the underlay is shown."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"style"}),(0,n.kt)("inlineCode",{parentName:"h3"},"style")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"View.style"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"underlaycolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,n.kt)("p",null,"The color of the underlay that will show through when the touch is active."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"/docs/0.65/colors"}),"color")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"hastvpreferredfocus"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"nextfocusdown"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")),(0,n.kt)("p",null,"TV next focus down (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"nextfocusforward"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")),(0,n.kt)("p",null,"TV next focus forward (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"nextfocusleft"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")),(0,n.kt)("p",null,"TV next focus left (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"nextfocusright"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")),(0,n.kt)("p",null,"TV next focus right (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"nextfocusup"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")),(0,n.kt)("p",null,"TV next focus up (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"testonly_pressed"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testOnly_pressed")),(0,n.kt)("p",null,"Handy for snapshot tests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))))}v.isMDXComponent=!0}}]);