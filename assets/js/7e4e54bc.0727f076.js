"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83339],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12914:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},u),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Note for Mac M1 users"),(0,r.kt)("p",null,"Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo arch -x86_64 gem install ffi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"))),(0,r.kt)("p",null,"These commands install the ",(0,r.kt)("inlineCode",{parentName:"p"},"ffi")," package, to load dynamically-linked libraries and let you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," properly, and runs ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," with the proper architecture.")))}m.isMDXComponent=!0},75410:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},u),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"This documentation is still ",(0,r.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,r.kt)("p",{parentName:"div"},"Moreover, it contains several ",(0,r.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."))))}m.isMDXComponent=!0},25307:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return f},metadata:function(){return y},toc:function(){return v},default:function(){return g}});var r=n(35318),o=n(12914),a=n(75410),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&u(e,n,t[n]);return e};const h={id:"new-architecture-library-ios",title:"Enabling in iOS Library"},f=void 0,y={unversionedId:"new-architecture-library-ios",id:"new-architecture-library-ios",title:"Enabling in iOS Library",description:"You have defined the JavaScript specs for your native modules as part of the prerequisites and you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this.",source:"@site/../docs/new-architecture-library-ios.md",sourceDirName:".",slug:"/new-architecture-library-ios",permalink:"/docs/next/new-architecture-library-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/new-architecture-library-ios.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"new-architecture-library-ios",title:"Enabling in iOS Library"}},v=[{value:"1. Updating your Podspec for the new architecture",id:"1-updating-your-podspec-for-the-new-architecture",children:[{value:"Add Folly and Other Dependencies",id:"add-folly-and-other-dependencies",children:[],level:3},{value:"Enable codegen in your <code>package.json</code>",id:"enable-codegen-in-your-packagejson",children:[],level:3}],level:2},{value:"2. Extend or implement the code-generated native interfaces",id:"2-extend-or-implement-the-code-generated-native-interfaces",children:[{value:"Conform to the protocols provided by the native interface code",id:"conform-to-the-protocols-provided-by-the-native-interface-code",children:[],level:3}],level:2}],b={toc:v};function g(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),u),l(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"You have defined the JavaScript specs for your native modules as part of the ",(0,r.kt)("a",m({parentName:"p"},{href:"new-architecture-library-intro"}),"prerequisites")," and you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this."),(0,r.kt)("h2",m({},{id:"1-updating-your-podspec-for-the-new-architecture"}),"1. Updating your Podspec for the new architecture"),(0,r.kt)("p",null,"The new architecture makes use of CocoaPods."),(0,r.kt)("h3",m({},{id:"add-folly-and-other-dependencies"}),"Add Folly and Other Dependencies"),(0,r.kt)("p",null,"We'll need to ensure Folly is configured properly in any projects that consume your library. With CocoaPods, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler_flags")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency")," properties to set it up."),(0,r.kt)("p",null,"Add these to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod::Spec.new")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ruby"}),'# folly_version must match the version used in React Native\n# See folly_version in react-native/React/FBReactNativeSpec/FBReactNativeSpec.podspec\nfolly_version = \'2021.06.28.00-v2\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # ...\n  s.compiler_flags  = folly_compiler_flags\n\n  s.pod_target_xcconfig    = {\n    "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\""\n  }\n\n  s.dependency "React-Core"\n  s.dependency "React-RCTFabric" # This is for fabric component\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\n  # ...\nend\n')),(0,r.kt)("div",m({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Currently, the Folly version used here must match the Folly version used by React Native. A version mismatch here may lead to errors when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install"),". If CocoaPods flags an issue with your Folly version, then you may have a version mismatch. Check which version is used by the core modules Podspecs (e.g. FBReactNativeSpec.podspec), and try running ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," again after editing your podspec with the correct Folly version."),(0,r.kt)(o.ZP,{mdxType:"M1Cocoapods"}))),(0,r.kt)("h3",m({},{id:"enable-codegen-in-your-packagejson"}),"Enable codegen in your ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,r.kt)("p",null,"At this point, you are now ready to enable code-gen support in your library. In your library\u2019s package.json add the following:"),(0,r.kt)("div",m({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Please note that this format is subject to change."))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'"codegenConfig": {\n  "libraries": [\n    {\n      "name": "YourTurboModuleSpec",\n      "type": "modules",\n      "jsSrcsDir": "Libraries"\n    },\n    {\n      "name": "YourComponentName",\n      "type": "components",\n      "jsSrcsDir": "Libraries"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"There's three arguments that are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": A name of your library. This will be used to determine import path for your library."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsSrcsDir"),": Path to the directory that contains the JavaScript specs for this library.")),(0,r.kt)("p",null,"These arguments are optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": Optional. A string that determines which types of artifacts will be generated for your library: \u201cmodules\u201d or \u201ccomponents\u201d. If left unspecified, both modules and components artifacts will be generated.")),(0,r.kt)("h2",m({},{id:"2-extend-or-implement-the-code-generated-native-interfaces"}),"2. Extend or implement the code-generated native interfaces"),(0,r.kt)("p",null,"The JavaScript spec for your native module or component will be used to generate native interface code for each supported platform (i.e. Android and iOS). These native interface files will be generated when a React Native application that depends on your library is built."),(0,r.kt)("p",null,"While this generated native interface code will not ship as part of your library, you do need to make sure your Objective-C or Java code conforms to the protocols provided by these native interface files. You can use the code-gen script to generate your library\u2019s native interface code in order to use as reference. The files that are output by the script should not be committed, but you\u2019ll need to refer to them to determine what changes you need to make to your native modules in order for them to provide an implementation for each generated @protocol / native interface."),(0,r.kt)("h3",m({},{id:"conform-to-the-protocols-provided-by-the-native-interface-code"}),"Conform to the protocols provided by the native interface code"),(0,r.kt)("p",null,"Update your native module or component to ensure it implements/extends the native interface that has been code-generated from your JavaScript specs."),(0,r.kt)("p",null,"Following the example set forth in the previous section, your library might import MyAwesomeSpecs.h, extend the relevant native interface, and implement the necessary methods for this interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"#import <MyAwesomeSpecs/MyAwesomeSpecs.h>\n\n@interface MyAwesomeModule () <StringGetterSpec>\n@end\n\nRCT_EXPORT_METHOD(getString:(NSString *)string\n                   callback:(RCTResponseSenderBlock)callback)\n{\n  // ...\n}\n\n- (std::shared_ptr<TurboModule>)getTurboModule:(const ObjCTurboModule::InitParams &)params\n{\n  return std::make_shared<StringGetterSpecJSI>(params);\n}\n")),(0,r.kt)("p",null,"For an existing native module, you will likely already have one or more instances of ",(0,r.kt)("a",m({parentName:"p"},{href:"native-modules-ios#export-a-native-method-to-javascript"}),(0,r.kt)("inlineCode",{parentName:"a"},"RCT_EXPORT_METHOD")),". To migrate to the new architecture, you\u2019ll need to make sure the method signature makes use of the structs provided by the codegen output."))}g.isMDXComponent=!0}}]);