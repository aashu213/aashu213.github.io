"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3385],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42176:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return y},default:function(){return b}});var o=n(35318),i=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"Model-Deployment",title:"Model Deployment"},m=void 0,f={unversionedId:"Model-Deployment",id:"version-3.0/Model-Deployment",title:"Model Deployment",description:"Model deployment is the process of putting machine learning models into production. This makes the model\u2019s predictions available to users, developers or systems, so they can make business decisions based on data, interact with their application (like recognize a face in an image) and so on.",source:"@site/versioned_docs/version-3.0/Model-Deployment.md",sourceDirName:".",slug:"/Model-Deployment",permalink:"/Model-Deployment",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Model-Deployment.md",tags:[],version:"3.0",frontMatter:{id:"Model-Deployment",title:"Model Deployment"},sidebar:"User Guide",previous:{title:"Katonic Studio",permalink:"/Katonic-Studio"},next:{title:"Model Monitoring",permalink:"/Model-Monitoring"}},y=[],g={toc:y};function b(e){var t,i=e,{components:p}=i,u=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(i,["components"]);return(0,o.kt)("wrapper",(t=d(d({},g),u),r(t,a({components:p,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Model deployment is the process of putting machine learning models into production. This makes the model\u2019s predictions available to users, developers or systems, so they can make business decisions based on data, interact with their application (like recognize a face in an image) and so on.\nIf you want your model to serve another application, you will want to serve it in the form of an API endpoint. Katonic Model APIs are scalable REST APIs that can create an endpoint from any function in Python. The Katonic Model APIs are commonly used when you need an API to query your model in near real-time.\nModel APIs are built as docker images and deployed on Katonic. You can export the model images to your external container registry and deploy them in any other hosting environment outside of Katonic using your custom CI/CD pipeline. Katonic supports REST APIs that enable you to programmatically build new model images on Katonic and export them to your external container registry."),(0,o.kt)("p",null,"To deploy your model with Katonic Model API deployment -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to deploy section from sidebar on the platform.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(99910).Z})),(0,o.kt)("ol",d({},{start:2}),(0,o.kt)("li",{parentName:"ol"},"Click on \u2018Create Deployment\u2019.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(62435).Z})),(0,o.kt)("ol",d({},{start:3}),(0,o.kt)("li",{parentName:"ol"},"Select \u2018Model API\u2019 from the dropdown.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(71517).Z})),(0,o.kt)("ol",d({},{start:4}),(0,o.kt)("li",{parentName:"ol"},"Fill in your model details in the dialog box. ")),(0,o.kt)("p",null,"i)\tGive a name to your deployment and proceed to the next field."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(59028).Z})),(0,o.kt)("p",null,"ii)\tSelect a model from the dropdown list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(55408).Z})),(0,o.kt)("p",null,"iii)\tSelect a model version from the dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(21235).Z})),(0,o.kt)("p",null,"iv)\tSelect the appropriate model type."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(82982).Z})),(0,o.kt)("p",null,"v)\tSelect cluster size of the resources required for your model deployment from the dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(21778).Z})),(0,o.kt)("p",null,"vi)\tDefine the maximum and minimum number of pods required for deployment and proceed to click on Deploy."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(2624).Z})),(0,o.kt)("p",null,"vii)\tOnce your Model API is deployed you will be able to view it in the Deploy section where it will be in \u2018Processing\u2019 state. Click on refresh to update the status."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(15602).Z})),(0,o.kt)("p",null,"viii)\tOnce your Model API is in \u2018Running\u2019 state you can access the API Token by clicking on API."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(51213).Z})),(0,o.kt)("p",null,"ix)\tSet the expiry time and generate your API Token from the pop-up dialog box"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(36557).Z})),(0,o.kt)("p",null,"x)\tCopy the generated API Token."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(25663).Z})),(0,o.kt)("p",null,"xi)\tYou can also modify the resources for your Model API by clicking \u2018Update\u2019 on the deployment panel and updating the resources to your requirement."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(75186).Z})),(0,o.kt)("p",null,"xii)\tClick on \u2018Monitor\u2019 to monitor the effectiveness and efficiency of your deployed model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(23008).Z})),(0,o.kt)("p",null,"xiii)\tIn \u2018Katonic Model Monitoring\u2019 that opens up in a new tab, you can get real-time insights and alerts on model performance and data characteristics. You can also debug anomalies and initiate trigger to execute ML production pipelines to retrain the models with new data, depending on your use case."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(17974).Z})),(0,o.kt)("p",null,"xiv)\tTo delete an existing model deployment, click on the bin icon in your deployment panel and proceed to click on delete."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(90491).Z})))}b.isMDXComponent=!0},99910:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT1-44e66c3b3eebc0dd7306e35a35a8af78.jpg"},15602:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT10-02be92cd15478d8c9cb8dba75c495e86.jpg"},51213:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT11-ed0c2b9d6e5d07e36ba1efcf04277adc.jpg"},36557:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT12-c7e8e398de1e68024078277f87171594.jpg"},25663:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT13-e019afb86a1ee5136b713f3221059267.jpg"},75186:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT14-096fdaeeab9f923d8aee4fbd2444140e.png"},23008:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT15-9ba408a2d87ad02c8f6494af24e97fb3.jpg"},17974:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT16-7bae4d71bcfed1972a0ab34a551d2974.png"},90491:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT17-676c6c81facabbaf755cc4852d092993.jpg"},62435:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT2-8f2ebd6868796a9d242bd74f07570876.jpg"},71517:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT3-8eed76f10015014d6fc98137a6ab1076.jpg"},59028:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT4-c4c3fb0aec2943a712f50a9c89a9cefb.jpg"},55408:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT5-df6cb248cf491efc550a0970038a5b8c.jpg"},21235:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT6-8a7afe280a67c86bd9bf87b2f32c19d5.jpg"},82982:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT7-028e9bc2154d05665a0ef337256fc8ea.jpg"},21778:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT8-6a5a115113963f24d3443721be6309a8.jpg"},2624:function(e,t,n){t.Z=n.p+"assets/images/MODELDEPLOYMENT9-d7b367790ec87e8bfdf0ce071ba11fa4.jpg"}}]);