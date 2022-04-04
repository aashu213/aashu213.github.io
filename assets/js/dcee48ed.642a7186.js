"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2409],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),r=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(27378),r=n(14185),i=n(40488);var l=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(18870),s=n(38944),p="tabItem_c0e5",c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&y(e,n,t[n]);return e};function f(e){var t,n,r;const{lazy:i,block:c,defaultValue:m,values:g,groupId:h,className:y}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=g?g:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=f[0])?void 0:n.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=l(),[A,T]=(0,a.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=h){const e=N[h];null!=e&&e!==A&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==A&&(j(t),T(a),null!=h&&x(h,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]||S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]||S[S.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},y)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:e=>S.push(e),onKeyDown:C,onFocus:O,onClick:O},n),i={className:(0,s.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":A===e})},u(r,d(i))),null!=t?t:e);var r,i}))),i?(0,a.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function b(e){const t=(0,r.Z)();return a.createElement(f,v({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},15416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return y},metadata:function(){return v},toc:function(){return f},default:function(){return k}});var a=n(35318),r=n(65941),i=n(37785),l=n(11674),o=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&m(e,n,t[n]);return e};const h={id:"typescript",title:"Using TypeScript"},y=void 0,v={unversionedId:"typescript",id:"typescript",title:"Using TypeScript",description:"TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",source:"@site/../docs/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/next/typescript",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/typescript.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"typescript",title:"Using TypeScript"},sidebar:"Getting Started",previous:{title:"Using Libraries",permalink:"/docs/next/libraries"},next:{title:"Upgrading to new versions",permalink:"/docs/next/upgrading"}},f=[{value:"Getting Started with TypeScript",id:"getting-started-with-typescript",children:[],level:2},{value:"Adding TypeScript to an Existing Project",id:"adding-typescript-to-an-existing-project",children:[],level:2},{value:"How TypeScript and React Native works",id:"how-typescript-and-react-native-works",children:[],level:2},{value:"What does React Native + TypeScript look like",id:"what-does-react-native--typescript-look-like",children:[],level:2},{value:"Where to Find Useful Advice",id:"where-to-find-useful-advice",children:[],level:2},{value:"Using Custom Path Aliases with TypeScript",id:"using-custom-path-aliases-with-typescript",children:[],level:2}],b={toc:f};function k(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},b),m),s(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",g({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a language which extends JavaScript by adding type definitions, much like ",(0,a.kt)("a",g({parentName:"p"},{href:"https://flow.org"}),"Flow"),". While React Native is built in Flow, it supports both TypeScript ",(0,a.kt)("em",{parentName:"p"},"and")," Flow by default."),(0,a.kt)("h2",g({},{id:"getting-started-with-typescript"}),"Getting Started with TypeScript"),(0,a.kt)("p",null,"If you're starting a new project, there are a few different ways to get started."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/react-native-community/react-native-template-typescript"}),"TypeScript template"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npx react-native init MyApp --template react-native-template-typescript\n")),(0,a.kt)("div",g({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",g({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",g({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",g({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",g({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"If the above command is failing, you may have an old version of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-cli")," installed globally on your system. To fix the issue try uninstalling the CLI:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm uninstall -g react-native-cli")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn global remove react-native-cli"))),(0,a.kt)("p",{parentName:"div"},"and then run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," command again.\nOptionally, you can also use the command given below to get started with your template."),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx react-native --ignore-existing init MyApp --template react-native-template-typescript"))))),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",g({parentName:"p"},{href:"https://expo.io"}),"Expo")," which has two TypeScript templates:"),(0,a.kt)(r.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npm install -g expo-cli\nexpo init MyTSProject\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"yarn global add expo-cli\nexpo init MyTSProject\n")))),(0,a.kt)("p",null,"Or you could use ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/infinitered/ignite"}),"Ignite"),", which also has a TypeScript template:"),(0,a.kt)(r.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npm install -g ignite-cli\nignite new MyTSProject\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"yarn global add ignite-cli\nignite new MyTSProject\n")))),(0,a.kt)("h2",g({},{id:"adding-typescript-to-an-existing-project"}),"Adding TypeScript to an Existing Project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add TypeScript and the types for React Native and Jest to your project.")),(0,a.kt)(r.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n")))),(0,a.kt)("ol",g({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Add a TypeScript config file. Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in the root of your project:")),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "isolatedModules": true,\n    "jsx": "react-native",\n    "lib": ["es2017"],\n    "moduleResolution": "node",\n    "noEmit": true,\n    "strict": true,\n    "target": "esnext"\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n')),(0,a.kt)("ol",g({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.config.js")," file to configure Jest to use TypeScript")),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n")),(0,a.kt)("ol",g({},{start:4}),(0,a.kt)("li",{parentName:"ol"},"Rename a JavaScript file to be ",(0,a.kt)("inlineCode",{parentName:"li"},"*.tsx"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You should leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"./index.js")," entrypoint file as it is otherwise you may run into an issue when it comes to bundling a production build.")),(0,a.kt)("ol",g({},{start:5}),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn tsc")," to type-check your new TypeScript files.")),(0,a.kt)("h2",g({},{id:"how-typescript-and-react-native-works"}),"How TypeScript and React Native works"),(0,a.kt)("p",null,"Out of the box, transforming your files to JavaScript works via the same ",(0,a.kt)("a",g({parentName:"p"},{href:"/docs/javascript-environment#javascript-syntax-transformers"}),"Babel infrastructure")," as a non-TypeScript React Native project. We recommend that you use the TypeScript compiler only for type checking. If you have existing TypeScript code being ported to React Native, there are ",(0,a.kt)("a",g({parentName:"p"},{href:"https://babeljs.io/docs/en/next/babel-plugin-transform-typescript"}),"one or two caveats")," to using Babel instead of TypeScript."),(0,a.kt)("h2",g({},{id:"what-does-react-native--typescript-look-like"}),"What does React Native + TypeScript look like"),(0,a.kt)("p",null,"You can provide an interface for a React Component's ",(0,a.kt)("a",g({parentName:"p"},{href:"props"}),"Props")," and ",(0,a.kt)("a",g({parentName:"p"},{href:"state"}),"State")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Component<Props, State>")," which will provide type-checking and editor auto-completing when working with that component in JSX."),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-tsx",metastring:'title="components/Hello.tsx"',title:'"components/Hello.tsx"'}),"import React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport type Props = {\n  name: string;\n  baseEnthusiasmLevel?: number;\n};\n\nconst Hello: React.FC<Props> = ({\n  name,\n  baseEnthusiasmLevel = 0\n}) => {\n  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(\n    baseEnthusiasmLevel\n  );\n\n  const onIncrement = () =>\n    setEnthusiasmLevel(enthusiasmLevel + 1);\n  const onDecrement = () =>\n    setEnthusiasmLevel(\n      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0\n    );\n\n  const getExclamationMarks = (numChars: number) =>\n    numChars > 0 ? Array(numChars + 1).join('!') : '';\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.greeting}>\n        Hello {name}\n        {getExclamationMarks(enthusiasmLevel)}\n      </Text>\n      <View>\n        <Button\n          title=\"Increase enthusiasm\"\n          accessibilityLabel=\"increment\"\n          onPress={onIncrement}\n          color=\"blue\"\n        />\n        <Button\n          title=\"Decrease enthusiasm\"\n          accessibilityLabel=\"decrement\"\n          onPress={onDecrement}\n          color=\"red\"\n        />\n      </View>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  greeting: {\n    fontSize: 20,\n    fontWeight: 'bold',\n    margin: 16\n  }\n});\n\nexport default Hello;\n")),(0,a.kt)("p",null,"You can explore the syntax more in the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://www.typescriptlang.org/play?strictNullChecks=false&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteILBI4ABRxgAznAC8DKnBwpiBIAFxwnjBQwBwA5hSUgQBGKJ5IAKIcMGLMnsCpIAAySFZCAPzhHMwgSUhQCZq2lGickXAAEkhCQhDhyIYAdABiAMIAPO4QXgB8vnAAFPRBKCE8KWmZ2bn5nkUlXXMADHCaAJS+s-QBcC0cbQDaSFk5eQXFpTxpMJsvO3ulAF05v0MANcqIYGYkPN1hlnts3vshKcEtdbm1OABJDhoIghLJzebnHyzL4-BG7d5deZPLavSlIuAAajgAEYUWjWvBOAARJC4pD4+B+IkXCJScn0-7U2m-RGlOCzY5lOCyinSoRwIxsuDhQ4cyicu7wWIS+RoIQrMzATgAWRQUAA1t4RVUQCMxA7PJVqrUoMTZm6PV7FXBlXAAIJQKAoATzIOeqDeFnsgYAKwgMXm+AAhPhzuF8DZDYk4EQYMwoBwFtdAmNVBoIoIRD56JFhEhPANbpCYnVNNNa4E4GM5Iomx3W+2RF3YkQpDFYgOh8OOl0evR8ARGqXV4F6MEkDu98P6KbvubLSBrXaHc6afCpVTkce92MAPRjmCD3fD+tqdQfxPOsWDYTgVz3cwYBbAAibEBVSFw1SlGCINXdA0E7PIkmAIRgEEQoUFqIQfBgmIBSFVDfxPTh3Cw1ssRxPFaVfYCbggHooFIpIhGYJAqLY98gOAsZQPYDg0OHKDYL5BC0lVR8-gEti4AwrDgBwvCCKIrpSIAE35ZismUtjaKITxPAYjhZKMmBWOAlpONIog9JMvchIgj8G0AocvIA4SDU0VFmi5CcZzmfgO3ESQYG7AwYGhK5Sx7FA+ygcIktXTARHkcJWS4IcUDw2IOExBKQG9OAYMwrI6hggrfzTXJzEwAQRk4BKsnCaraTq65NAawI5xixcMqHTAOt4YAAC8wjgAAmQ5BuHCasgAdSQYBYjEGBCySDi9PwZbAmvKBYhiPKADZloGqgzmC+xoHgAzMBQZghHgTpuggBIgA"}),"TypeScript playground"),"."),(0,a.kt)("h2",g({},{id:"where-to-find-useful-advice"}),"Where to Find Useful Advice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/intro.html"}),"TypeScript Handbook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"https://reactjs.org/docs/static-type-checking.html#typescript"}),"React's documentation on TypeScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),(0,a.kt)("h2",g({},{id:"using-custom-path-aliases-with-typescript"}),"Using Custom Path Aliases with TypeScript"),(0,a.kt)("p",null,"To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Edit your ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," to have your ",(0,a.kt)("a",g({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"}),"custom path mappings"),". Set anything in the root of ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," to be available with no preceding path reference, and allow any test file to be accessed by using ",(0,a.kt)("inlineCode",{parentName:"li"},"tests/File.tsx"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-diff",metastring:"{2-7}","{2-7}":!0}),'    "target": "esnext",\n+     "baseUrl": ".",\n+     "paths": {\n+       "*": ["src/*"],\n+       "tests": ["tests/*"],\n+       "@components/*": ["src/components/*"],\n+     },\n    }\n')),(0,a.kt)("ol",g({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("a",g({parentName:"li"},{href:"https://github.com/tleunen/babel-plugin-module-resolver"}),(0,a.kt)("inlineCode",{parentName:"a"},"babel-plugin-module-resolver"))," as a development package to your project:")),(0,a.kt)(r.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev babel-plugin-module-resolver\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-shell"}),"yarn add --dev babel-plugin-module-resolver\n")))),(0,a.kt)("ol",g({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Finally, configure your ",(0,a.kt)("inlineCode",{parentName:"li"},"babel.config.js")," (note that the syntax for your ",(0,a.kt)("inlineCode",{parentName:"li"},"babel.config.js")," is different from your ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-diff",metastring:"{3-13}","{3-13}":!0}),"{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           tests: ['./tests/'],\n+           \"@components\": \"./src/components\",\n+         }\n+       }\n+    ]\n  ]\n}\n")))}k.isMDXComponent=!0}}]);