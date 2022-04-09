"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[266],{5318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var a=n(5318),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&l(e,n,t[n]);return e};const d={id:"Workspaces",title:"Workspaces"},k=void 0,m={unversionedId:"Workspaces",id:"version-0.68/Workspaces",title:"Workspaces",description:"A Katonic workspace is an interactive environment for developing and running code. You can conduct research, analyze data, train models, and more. Use workspaces to work in the development environment of your choice, like Jupyter notebooks, RStudio , VS Code, and many other customizable environments. The environment is pre-configured (meaning all your dependencies are preinstalled). All the files and data in your workspace will be preserved for you, across restarts. Your workspace has automatic version control and scalable compute available, so that you can use unlimited compute resources to do your data science research.",source:"@site/versioned_docs/version-0.68/Workspaces.md",sourceDirName:".",slug:"/Workspaces",permalink:"/Workspaces",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Workspaces.md",tags:[],version:"0.68",lastUpdatedAt:1649189629,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"Workspaces",title:"Workspaces"},sidebar:"User Guide",next:{title:"Git Integration",permalink:"/Git-Integration"}},f=[],g={toc:f};function b(e){var t,o=e,{components:l}=o,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),d),r(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Katonic workspace is an interactive environment for developing and running code. You can conduct research, analyze data, train models, and more. Use workspaces to work in the development environment of your choice, like Jupyter notebooks, RStudio , VS Code, and many other customizable environments. The environment is pre-configured (meaning all your dependencies are preinstalled). All the files and data in your workspace will be preserved for you, across restarts. Your workspace has automatic version control and scalable compute available, so that you can use unlimited compute resources to do your data science research.\nKatonic has built-in support for JupyterLab, JupterLab on Spark, R Studio and Visual Studio Code."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported Workspaces")),(0,a.kt)("p",null,"There are a variety of supported workspace types that are supported in Katonic:\nJupyterLab JupyterLab on Spark Jupyter R Studio Visual Studio Code\n",(0,a.kt)("strong",{parentName:"p"},"JupyterLab"),"\nJupyterLab is a next-generation web-based user interface for Project Jupyter. JupyterLab enables you to work with documents and activities such as Jupyter notebooks, text editors, terminals, and custom components in a flexible, integrated, and extensible manner.\nLearn more about JupyterLab.\n",(0,a.kt)("strong",{parentName:"p"},"JupyterLab on Spark"),"\nJupyterLab can also be run on Spark in cnvrg. Choose this option with a compatible Spark Compute template to get started with JupyterLab backed by Spark.\n",(0,a.kt)("strong",{parentName:"p"},"R Studio"),"\nRStudio is an integrated development environment (IDE) for R. It includes a console, syntax-highlighting editor that supports direct code execution, as well as tools for plotting, history, debugging and workspace management\nLearn more about R Studio.\n",(0,a.kt)("strong",{parentName:"p"},"Visual Studio Code"),"\nVisual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).\nLearn more about Visual Studio Code"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Launch a workspace"),"\nWorkspace sessions are interactive sessions hosted by a Katonic executor where you can interact with code notebooks like Jupyter, RStudio and Visual Studio Code. The software tools and associated configurations available in your session are called Workspaces.\n",(0,a.kt)("strong",{parentName:"p"},"Launching a workspace:"),"\n",(0,a.kt)("strong",{parentName:"p"},"1. Launching a workspace with JupyterLab:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on Workspace from the left sidebar.\n",(0,a.kt)("img",{alt:"Untitled",src:n(9776).Z}))),(0,a.kt)("p",null,"1.2. Click on \u2018Create Workspace\u2019."),(0,a.kt)("p",null,"1.2.1. To proceed with the workspace, click on Create Workspace Button.\n",(0,a.kt)("img",{alt:"Untitled",src:n(3711).Z})),(0,a.kt)("p",null,"1.2.2. Enter a name for your workspace.\n",(0,a.kt)("img",{alt:"Untitled",src:n(4475).Z})),(0,a.kt)("p",null,"1.2.3. Select an environment for your workspace. An environment is the software configuration (such as language and packages) that will be used in your workspace. Select Jupyterlab for example\n",(0,a.kt)("img",{alt:"Untitled",src:n(8995).Z})),(0,a.kt)("p",null,"1.2.4. Select Image depending upon what environment you select like for JupyterLab we have Katonic Studio, Katonic Base and many more.\n",(0,a.kt)("img",{alt:"Untitled",src:n(5325).Z})),(0,a.kt)("p",null,"1.2.5. Select Resources. A resources represents the compute hardware used for your run. It can be a virtual instance in a cloud services provider, or a physical machine running in your deployment\u2019s on-premise data center.\n",(0,a.kt)("img",{alt:"Untitled",src:n(7441).Z})),(0,a.kt)("p",null,"1.2.6. Katonic provides ",(0,a.kt)("strong",{parentName:"p"},"Custom JupyterLab Image.")),(0,a.kt)("p",null,"1.2.6.1. To use custom image, you need to select JupyterLab and then in Image select Custom Image.\n",(0,a.kt)("img",{alt:"Untitled",src:n(9674).Z})),(0,a.kt)("p",null,"1.2.6.2. Add the Cutom Image you want to use, for example we are using katonic/run:1.0 as the Custom Image.\n",(0,a.kt)("img",{alt:"Untitled",src:n(7326).Z})),(0,a.kt)("p",null,"1.2.6.3. Select the Resources you want to allocate to your Workspace and Click on \u2018Create\u2019.\n",(0,a.kt)("img",{alt:"Untitled",src:n(540).Z}),"\n2. ",(0,a.kt)("strong",{parentName:"p"},"Start Workspace")),(0,a.kt)("p",null,"2.1. Once you create a workspace you can see it will be in a 'processing' state.\n",(0,a.kt)("img",{alt:"Untitled",src:n(6640).Z})),(0,a.kt)("p",null,"2.2. Once the Workspace is in a running state it will show the connect button with which you can connect to the environment server.\n",(0,a.kt)("img",{alt:"Untitled",src:n(5193).Z})),(0,a.kt)("p",null,"2.3. When you connect to a Workspace, a new session is created on a machine and your browser is automatically redirected to the selected environment (JupyterLab) UI in a new tab.\n",(0,a.kt)("img",{alt:"Untitled",src:n(2859).Z})),(0,a.kt)("p",null,"2.4. Once your workspace is up and running, you will see a fresh selected interface like JupyterLab interface."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Launching a workspace with Visual Studio Code.")),(0,a.kt)("p",null,"When using a VSCode-equipped Katonic environment you can launch VSCode from the Workspaces Dashboard just as you would launch an RStudio or Jupyter workspace."),(0,a.kt)("p",null,"3.1. Click on Workspace from the left sidebar navigation menu.\n",(0,a.kt)("img",{alt:"Untitled",src:n(6850).Z})),(0,a.kt)("p",null,"3.2. Click on \u2018Create Workspace\u2019."),(0,a.kt)("p",null,"3.2.1. To proceed with the workspace, click on Create Workspace Button.\n",(0,a.kt)("img",{alt:"Untitled",src:n(1233).Z})),(0,a.kt)("p",null,"3.2.2. Enter a name for your workspace.\n",(0,a.kt)("img",{alt:"Untitled",src:n(5862).Z})),(0,a.kt)("p",null,"3.2.3. Select an environment for your workspace. An environment is the software configuration (such as language and packages) that will be used in your workspace. Select Visual Studio Code for example.\n",(0,a.kt)("img",{alt:"Untitled",src:n(1858).Z})),(0,a.kt)("p",null,"3.2.4. Select the Additional Port you want to allocate to your workspace. For now, we are using port 8050\n",(0,a.kt)("img",{alt:"Untitled",src:n(7417).Z})),(0,a.kt)("p",null,"3.2.5. Select Resources. A resource represents the compute hardware used for your run. It can be a virtual instance in a cloud services provider, or a physical machine running in your deployment\u2019s on-premise data center.\n",(0,a.kt)("img",{alt:"Untitled",src:n(6466).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stop a Workspace"),"\nYou can stop a workspace and resume it at a later time. Frequently stopping and resuming a workspace session is a good way to manage compute costs.\nTo stop a workspace:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the Stop Button\n",(0,a.kt)("img",{alt:"Untitled",src:n(7676).Z}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resume a Workspace"),"\nTo resume a stopped workspace:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click Workspace in the left sidebar."),(0,a.kt)("li",{parentName:"ol"},"Go to the workspace in your workspace dashboard. Click Start. Your workspace will resume.\n",(0,a.kt)("img",{alt:"Untitled",src:n(8257).Z}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Delete a Workspace")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can delete a workspace if it\u2019s no longer needed. Workspaces must be stopped before they can be deleted.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Stop your workspace. You can stop a workspace by clicking Stop in the workspace's section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the workspace's section. Click the red trash bin icon.\n",(0,a.kt)("img",{alt:"Untitled",src:n(1501).Z})," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A pop-up will appear to confirm for deleting the workspace, click on \u2018Delete\u2019.\n",(0,a.kt)("img",{alt:"Untitled",src:n(5388).Z})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"View workspaces"),"\nTo view workspaces that you\u2019ve launched:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click Workspace in the navigation menu."),(0,a.kt)("li",{parentName:"ol"},"Now you can view all the workspaces in the workspace dashboard.\n",(0,a.kt)("img",{alt:"Untitled",src:n(647).Z}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Workspace Logs")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To check a Workspace log, click on the Logs icon. A Pop up will appear to show all the logs of the workspace.\nYou can view \u201cUser\u201d logs and about your workspace. User logs include information about actions you take within your workspace. Setup logs contain information about Katonic and Kubernetes. If your workspace fails, the logs are a good place to begin investigating.\n",(0,a.kt)("img",{alt:"Untitled",src:n(1379).Z}),(0,a.kt)("img",{alt:"Untitled",src:n(3862).Z}))))}b.isMDXComponent=!0},9776:function(e,t,n){t.Z=n.p+"assets/images/Workspace1-cf2f20071e9518abf132d99554ac92bc.png"},5193:function(e,t,n){t.Z=n.p+"assets/images/Workspace10-a68921b3c381881c239aa128ea25e136.png"},2859:function(e,t,n){t.Z=n.p+"assets/images/Workspace11-26e54535b3985adae561e9b66d71367c.png"},6850:function(e,t,n){t.Z=n.p+"assets/images/Workspace12-cf2f20071e9518abf132d99554ac92bc.png"},1233:function(e,t,n){t.Z=n.p+"assets/images/Workspace13-af616c76a599959d330632879d8d8e35.png"},5862:function(e,t,n){t.Z=n.p+"assets/images/Workspace14-98be1786e0888c4c61db2ea5eb39d844.png"},1858:function(e,t,n){t.Z=n.p+"assets/images/Workspace15-900dc82cdce8cbce4300acf14ee8b797.png"},7417:function(e,t,n){t.Z=n.p+"assets/images/Workspace16-7a10624c7233ac58230307428057b4b8.png"},6466:function(e,t,n){t.Z=n.p+"assets/images/Workspace17-a66b0d7882dda75905aafcab7c3e1650.png"},7676:function(e,t,n){t.Z=n.p+"assets/images/Workspace18-b77878cdc551d3a1a144c7486dc4d707.png"},8257:function(e,t,n){t.Z=n.p+"assets/images/Workspace19-fc87c47146d53c0aa03af8845e40886f.png"},3711:function(e,t,n){t.Z=n.p+"assets/images/Workspace2-af616c76a599959d330632879d8d8e35.png"},1501:function(e,t,n){t.Z=n.p+"assets/images/Workspace20-1778bb68d2db30f41ac51b0a35fe88e5.png"},5388:function(e,t,n){t.Z=n.p+"assets/images/Workspace21-8f7d0230254bc2e46fb55d842cec48ae.png"},647:function(e,t,n){t.Z=n.p+"assets/images/Workspace22-67bb46ba74bfead78121bf2bc4c3fc1d.png"},1379:function(e,t,n){t.Z=n.p+"assets/images/Workspace23-272bc10fdc7b3e71a0123ac9ad1c3669.png"},3862:function(e,t,n){t.Z=n.p+"assets/images/Workspace24-d7fc14f0dd8d93689f13f55292553026.png"},4475:function(e,t,n){t.Z=n.p+"assets/images/Workspace3-6ac94fd82cd8fcde1a006cfaffb7bb22.png"},8995:function(e,t,n){t.Z=n.p+"assets/images/Workspace4-d5b6dc3f73838377825a320b5307dc0c.png"},5325:function(e,t,n){t.Z=n.p+"assets/images/Workspace5-af549486a6914df0a16f3ce55e1e1076.png"},7441:function(e,t,n){t.Z=n.p+"assets/images/Workspace6-f9946c506192678028509dcb9f7554c4.png"},9674:function(e,t,n){t.Z=n.p+"assets/images/Workspace7-1be718355acec398b73ab0975173a550.png"},7326:function(e,t,n){t.Z=n.p+"assets/images/Workspace8.1-59d4bda5797e91418cc29f1cb269089b.png"},540:function(e,t,n){t.Z=n.p+"assets/images/Workspace8-c3dac7ebfc77a7197b289fe58b00e948.png"},6640:function(e,t,n){t.Z=n.p+"assets/images/Workspace9-f80f7dce711eee1a13f5de39e139e8c0.png"}}]);