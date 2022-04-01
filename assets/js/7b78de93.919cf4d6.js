"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36963],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33575:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return f},default:function(){return b}});var r=t(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&u(e,t,n[t]);return e};const c={id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires"},m=void 0,h={unversionedId:"ram-bundles-inline-requires",id:"version-0.68/ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires",description:"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used).",source:"@site/versioned_docs/version-0.68/ram-bundles-inline-requires.md",sourceDirName:".",slug:"/ram-bundles-inline-requires",permalink:"/docs/ram-bundles-inline-requires",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/ram-bundles-inline-requires.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires"},sidebar:"docs",previous:{title:"Optimizing Flatlist Configuration",permalink:"/docs/optimizing-flatlist-configuration"},next:{title:"Profiling",permalink:"/docs/profiling"}},f=[{value:"Loading JavaScript",id:"loading-javascript",children:[],level:2},{value:"Inline Requires",id:"inline-requires",children:[{value:"VeryExpensive.js",id:"veryexpensivejs",children:[],level:3},{value:"Optimized.js",id:"optimizedjs",children:[],level:3}],level:2},{value:"Enable the RAM format",id:"enable-the-ram-format",children:[],level:2},{value:"Configure Preloading and Inline Requires",id:"configure-preloading-and-inline-requires",children:[],level:2},{value:"Investigating the Loaded Modules",id:"investigating-the-loaded-modules",children:[],level:2},{value:"Updating the metro.config.js",id:"updating-the-metroconfigjs",children:[],level:2},{value:"Test and Measure Improvements",id:"test-and-measure-improvements",children:[],level:2}],g={toc:f};function b(e){var n,t=e,{components:a}=t,u=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},g),u),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used)."),(0,r.kt)("h2",p({},{id:"loading-javascript"}),"Loading JavaScript"),(0,r.kt)("p",null,"Before react-native can execute JS code, that code must be loaded into memory and parsed. With a standard bundle if you load a 50mb bundle, all 50mb must be loaded and parsed before any of it can be executed. The optimization behind RAM bundles is that you can load only the portion of the 50mb that you actually need at startup, and progressively load more of the bundle as those sections are needed."),(0,r.kt)("h2",p({},{id:"inline-requires"}),"Inline Requires"),(0,r.kt)("p",null,"Inline requires delay the requiring of a module or file until that file is actually needed. A basic example would look like this:"),(0,r.kt)("h3",p({},{id:"veryexpensivejs"}),"VeryExpensive.js"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport { Text } from 'react-native';\n// ... import some very expensive modules\n\n// You may want to log at the file level to verify when this is happening\nconsole.log('VeryExpensive component loaded');\n\nexport default class VeryExpensive extends Component {\n  // lots and lots of code\n  render() {\n    return <Text>Very Expensive Component</Text>;\n  }\n}\n")),(0,r.kt)("h3",p({},{id:"optimizedjs"}),"Optimized.js"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport { TouchableOpacity, View, Text } from 'react-native';\n\nlet VeryExpensive = null;\n\nexport default class Optimized extends Component {\n  state = { needsExpensive: false };\n\n  didPress = () => {\n    if (VeryExpensive == null) {\n      VeryExpensive = require('./VeryExpensive').default;\n    }\n\n    this.setState(() => ({\n      needsExpensive: true\n    }));\n  };\n\n  render() {\n    return (\n      <View style={{ marginTop: 20 }}>\n        <TouchableOpacity onPress={this.didPress}>\n          <Text>Load</Text>\n        </TouchableOpacity>\n        {this.state.needsExpensive ? <VeryExpensive /> : null}\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Even without the RAM format, inline requires can lead to startup time improvements, because the code within VeryExpensive.js will only execute once it is required for the first time."),(0,r.kt)("h2",p({},{id:"enable-the-ram-format"}),"Enable the RAM format"),(0,r.kt)("p",null,"On iOS using the RAM format will create a single indexed file that react native will load one module at a time. On Android, by default it will create a set of files for each module. You can force Android to create a single file, like iOS, but using multiple files can be more performant and requires less memory."),(0,r.kt)("p",null,'Enable the RAM format in Xcode by editing the build phase "Bundle React Native code and images". Before ',(0,r.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native/scripts/react-native-xcode.sh")," add ",(0,r.kt)("inlineCode",{parentName:"p"},'export BUNDLE_COMMAND="ram-bundle"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'export BUNDLE_COMMAND="ram-bundle"\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n')),(0,r.kt)("p",null,"On Android enable the RAM format by editing your ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file. Before the line ",(0,r.kt)("inlineCode",{parentName:"p"},'apply from: "../../node_modules/react-native/react.gradle"')," add or amend the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.ext.react")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'project.ext.react = [\n  bundleCommand: "ram-bundle",\n]\n')),(0,r.kt)("p",null,"Use the following lines on Android if you want to use a single indexed file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'project.ext.react = [\n  bundleCommand: "ram-bundle",\n  extraPackagerArgs: ["--indexed-ram-bundle"]\n]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": If you are using ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/hermes"}),"Hermes JS Engine"),", you ",(0,r.kt)("strong",{parentName:"p"},"should not")," have RAM bundles feature enabled. In Hermes, when loading the bytecode, ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap")," ensures that the entire file is not loaded. Using Hermes with RAM bundles might lead to issues, because those mechanisms are not compatible with each other.")),(0,r.kt)("h2",p({},{id:"configure-preloading-and-inline-requires"}),"Configure Preloading and Inline Requires"),(0,r.kt)("p",null,"Now that we have a RAM bundle, there is overhead for calling ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," now needs to send a message over the bridge when it encounters a module it has not loaded yet. This will impact startup the most, because that is where the largest number of require calls are likely to take place while the app loads the initial module. Luckily we can configure a portion of the modules to be preloaded. In order to do this, you will need to implement some form of inline require."),(0,r.kt)("h2",p({},{id:"investigating-the-loaded-modules"}),"Investigating the Loaded Modules"),(0,r.kt)("p",null,"In your root file (index.(ios|android).js) you can add the following after the initial imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const modules = require.getModules();\nconst moduleIds = Object.keys(modules);\nconst loadedModuleNames = moduleIds\n  .filter((moduleId) => modules[moduleId].isInitialized)\n  .map((moduleId) => modules[moduleId].verboseName);\nconst waitingModuleNames = moduleIds\n  .filter((moduleId) => !modules[moduleId].isInitialized)\n  .map((moduleId) => modules[moduleId].verboseName);\n\n// make sure that the modules you expect to be waiting are actually waiting\nconsole.log(\n  'loaded:',\n  loadedModuleNames.length,\n  'waiting:',\n  waitingModuleNames.length\n);\n\n// grab this text blob, and put it in a file named packager/modulePaths.js\nconsole.log(\n  `module.exports = ${JSON.stringify(\n    loadedModuleNames.sort(),\n    null,\n    2\n  )};`\n);\n")),(0,r.kt)("p",null,"When you run your app, you can look in the console and see how many modules have been loaded, and how many are waiting. You may want to read the moduleNames and see if there are any surprises. Note that inline requires are invoked the first time the imports are referenced. You may need to investigate and refactor to ensure only the modules you want are loaded on startup. Note that you can change the Systrace object on require to help debug problematic requires."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"require.Systrace.beginEvent = (message) => {\n  if (message.includes(problematicModule)) {\n    throw new Error();\n  }\n};\n")),(0,r.kt)("p",null,"Every app is different, but it may make sense to only load the modules you need for the very first screen. When you are satisfied, put the output of the loadedModuleNames into a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"packager/modulePaths.js"),"."),(0,r.kt)("h2",p({},{id:"updating-the-metroconfigjs"}),"Updating the metro.config.js"),(0,r.kt)("p",null,"We now need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js")," in the root of the project to use our newly generated ",(0,r.kt)("inlineCode",{parentName:"p"},"modulePaths.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const modulePaths = require('./packager/modulePaths');\nconst resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '..');\n\nconst config = {\n  transformer: {\n    getTransformOptions: () => {\n      const moduleMap = {};\n      modulePaths.forEach((path) => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n      return {\n        preloadedModules: moduleMap,\n        transform: { inlineRequires: { blockList: moduleMap } }\n      };\n    }\n  },\n  projectRoot: ROOT_FOLDER\n};\n\nmodule.exports = config;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"preloadedModules")," entry in the config indicates which modules should be marked as preloaded when building a RAM bundle. When the bundle is loaded, those modules are immediately loaded, before any requires have even executed. The ",(0,r.kt)("inlineCode",{parentName:"p"},"blockList")," entry indicates that those modules should not be required inline. Because they are preloaded, there is no performance benefit from using an inline require. In fact the generated JavaScript spends extra time resolving the inline require every time the imports are referenced."),(0,r.kt)("h2",p({},{id:"test-and-measure-improvements"}),"Test and Measure Improvements"),(0,r.kt)("p",null,"You should now be ready to build your app using the RAM format and inline requires. Make sure you measure the before and after startup times."))}b.isMDXComponent=!0}}]);