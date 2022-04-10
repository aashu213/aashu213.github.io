"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4452],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return g},default:function(){return y}});var r=n(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))u.call(t,n)&&l(e,n,t[n]);return e};const f={id:"Git-Integration",title:"Git Integration"},m="Git Integration",d={unversionedId:"Git-Integration",id:"version-0.68/Git-Integration",title:"Git Integration",description:"You may commit any changes you make in a workspace back to GitHub. We recommend using the JupyterLab Git extension, which comes preinstalled in Katonic workspaces by default.",source:"@site/versioned_docs/version-0.68/Git-Integration.md",sourceDirName:".",slug:"/Git-Integration",permalink:"/Git-Integration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Git-Integration.md",tags:[],version:"0.68",lastUpdatedAt:1649545892,formattedLastUpdatedAt:"4/10/2022",frontMatter:{id:"Git-Integration",title:"Git Integration"},sidebar:"User Guide",previous:{title:"Workspaces",permalink:"/Workspaces"},next:{title:"File Manager",permalink:"/File-Manager"}},g=[],b={toc:g};function y(e){var t,o=e,{components:l}=o,f=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),f),i(t,a({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"git-integration"}),"Git Integration"),(0,r.kt)("p",null,"You may commit any changes you make in a workspace back to GitHub. We recommend using the JupyterLab Git extension, which comes preinstalled in Katonic workspaces by default."),(0,r.kt)("p",null,"To begin, click on the Git icon in the menu bar on the far left. This will open the Git panel:\n",(0,r.kt)("img",{alt:"Untitled",src:n(81667).Z})),(0,r.kt)("p",null,'Stage the changes you wish to push and create a commit for them. Then click on the "Push committed changes" button on the top right to push your changes. The first time you do so in a new workspace session, you will be prompted to provide your GitHub username and Email:\n',(0,r.kt)("img",{alt:"Untitled",src:n(82042).Z})),(0,r.kt)("p",null,"Provide valid credentials and will push your changes to the repository. This flow works for both public and private repositories. Note that you must use a personal access token, as GitHub no longer supports commits authenticated using your user password."),(0,r.kt)("p",null,"This flow can can also be performed using the git add, git commit, and git push command-line instructions."))}y.isMDXComponent=!0},81667:function(e,t,n){t.Z=n.p+"assets/images/git-integration1-de46950afdf2e5d62d203ee86451f111.png"},82042:function(e,t,n){t.Z=n.p+"assets/images/git-integration2-1b86f7bae573cfcd2c96dd4ecfca89db.png"}}]);