"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13991],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),A=p(a),c=i,m=A["".concat(s,".").concat(c)]||A[c]||u[c]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),i=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(27378),i=a(14185),o=a(40488);var r=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(18870),s=a(38944),p="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,A=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&y(e,a,t[a]);if(c)for(var a of c(t))f.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a,i;const{lazy:o,block:d,defaultValue:c,values:m,groupId:f,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),D=null!=m?m:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.lx)(D,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===c?c:null!=(i=null!=c?c:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(a=g[0])?void 0:a.props.value;if(null!==C&&!D.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${D.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:B}=r(),[N,x]=(0,n.useState)(C),v=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=f){const e=b[f];null!=e&&e!==N&&D.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=v.indexOf(t),n=D[a].value;n!==N&&(w(t),x(n),null!=f&&B(f,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]||v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]||v[v.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},y)},D.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=k({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>v.push(e),onKeyDown:P,onFocus:E,onClick:E},a),o={className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":N===e})},u(i,A(o))),null!=t?t:e);var i,o}))),o?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function D(e){const t=(0,i.Z)();return n.createElement(g,k({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},87915:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return f},contentTitle:function(){return y},metadata:function(){return k},toc:function(){return g},default:function(){return h}});var n=a(35318),i=a(65941),o=a(37785),r=a(11674),l=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(d)for(var a of d(t))A.call(t,a)&&c(e,a,t[a]);return e};const f={id:"layoutanimation",title:"LayoutAnimation"},y=void 0,k={unversionedId:"layoutanimation",id:"version-0.66/layoutanimation",title:"LayoutAnimation",description:"Automatically animates views to their new positions when the next layout happens.",source:"@site/versioned_docs/version-0.66/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.66/layoutanimation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/layoutanimation.md",tags:[],version:"0.66",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"version-0.66/api",previous:{title:"Keyboard",permalink:"/docs/0.66/keyboard"},next:{title:"Linking",permalink:"/docs/0.66/linking"}},g=[{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>configureNext()</code>",id:"configurenext",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"<code>create()</code>",id:"create",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"Types",id:"types",children:[],level:3},{value:"Properties",id:"properties-1",children:[],level:3},{value:"Presets",id:"presets",children:[],level:3},{value:"<code>easeInEaseOut</code>",id:"easeineaseout",children:[],level:3},{value:"<code>linear</code>",id:"linear",children:[],level:3},{value:"<code>spring</code>",id:"spring",children:[],level:3}],level:2}],D={toc:g};function h(e){var t,a=e,{components:l}=a,c=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&A.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},D),c),s(t,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Automatically animates views to their new positions when the next layout happens."),(0,n.kt)("p",null,"A common way to use this API is to call it before updating the state hook in functional components and calling ",(0,n.kt)("inlineCode",{parentName:"p"},"setState")," in class components."),(0,n.kt)("p",null,"Note that in order to get this to work on ",(0,n.kt)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",(0,n.kt)("inlineCode",{parentName:"p"},"UIManager"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%22collapse%22%20%3A%20%22expand%22%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20tile%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22lightgrey%22%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderColor%3A%20%22%23d6d7da%22%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20overflow%3A%20%22hidden%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"reference"}),"Reference"),(0,n.kt)("h2",m({},{id:"methods"}),"Methods"),(0,n.kt)("h3",m({},{id:"configurenext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"configureNext()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),(0,n.kt)("p",null,"Schedules an animation to happen on the next layout."),(0,n.kt)("h4",m({},{id:"parameters"}),"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"See config description below.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidEnd"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called when the animation finished.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidFail"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Called when the animation failed.")))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," parameter is an object with the keys below. ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#create"}),(0,n.kt)("inlineCode",{parentName:"a"},"create"))," returns a valid object for ",(0,n.kt)("inlineCode",{parentName:"p"},"config"),", and the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#presets"}),(0,n.kt)("inlineCode",{parentName:"a"},"Presets"))," objects can also all be passed as the ",(0,n.kt)("inlineCode",{parentName:"p"},"config"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," in milliseconds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"create"),", optional config for animating in new views"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"update"),", optional config for animating views that have been updated"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delete"),", optional config for animating views as they are removed")),(0,n.kt)("p",null,"The config that's passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"update"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," has the following keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type"),", the ",(0,n.kt)("a",m({parentName:"li"},{href:"/docs/0.66/layoutanimation#types"}),"animation type")," to use"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"property"),", the ",(0,n.kt)("a",m({parentName:"li"},{href:"/docs/0.66/layoutanimation#properties"}),"layout property")," to animate (optional, but recommended for ",(0,n.kt)("inlineCode",{parentName:"li"},"create")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"delete"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springDamping")," (number, optional and only for use with ",(0,n.kt)("inlineCode",{parentName:"li"},"type: Type.spring"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"initialVelocity")," (number, optional)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (number, optional)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (number, optional)")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"create"}),(0,n.kt)("inlineCode",{parentName:"h3"},"create()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static create(duration, type, creationProp)\n")),(0,n.kt)("p",null,"Helper that creates an object (with ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"update"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," fields) to pass into ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," parameter is an ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#types"}),"animation type"),", and the ",(0,n.kt)("inlineCode",{parentName:"p"},"creationProp")," parameter is a ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#properties"}),"layout property"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20boxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",m({},{id:"properties"}),"Properties"),(0,n.kt)("h3",m({},{id:"types"}),"Types"),(0,n.kt)("p",null,"An enumeration of animation types to be used in the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#create"}),(0,n.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"spring")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"linear")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeIn")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeOut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"keyboard")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"properties-1"}),"Properties"),(0,n.kt)("p",null,"An enumeration of layout properties to be animated to be used in the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#create"}),(0,n.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Properties"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"opacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleXY")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"presets"}),"Presets"),(0,n.kt)("p",null,"A set of predefined animation configs to pass into ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.66/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Presets"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"linear"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"spring"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"easeineaseout"}),(0,n.kt)("inlineCode",{parentName:"h3"},"easeInEaseOut")),(0,n.kt)("p",null,"Calls ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"linear"}),(0,n.kt)("inlineCode",{parentName:"h3"},"linear")),(0,n.kt)("p",null,"Calls ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.linear"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"spring"}),(0,n.kt)("inlineCode",{parentName:"h3"},"spring")),(0,n.kt)("p",null,"Calls ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.spring"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20firstBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20secondBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20thirdBoxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20firstBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20secondBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20thirdBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))))}h.isMDXComponent=!0}}]);