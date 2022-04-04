"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9819],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47083:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return d},assets:function(){return f},toc:function(){return g},default:function(){return b}});var n=a(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&u(e,a,t[a]);return e};const m={title:"React Native Monthly #5",author:"Tomislav Tenodi",authorTitle:"Founder at Speck",authorURL:"https://github.com/tenodi",authorImageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg",authorTwitter:"TomislavTenodi",tags:["engineering"]},h=void 0,d={permalink:"/blog/2017/11/06/react-native-monthly-5",source:"@site/blog/2017-11-06-react-native-monthly-5.md",title:"React Native Monthly #5",description:"The React Native monthly meeting continues! Let's see what our teams are up to.",date:"2017-11-06T00:00:00.000Z",formattedDate:"November 6, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],readingTime:3.015,truncated:!1,authors:[{name:"Tomislav Tenodi",title:"Founder at Speck",url:"https://github.com/tenodi",imageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg"}],prevItem:{title:"React Native Monthly #6",permalink:"/blog/2018/01/09/react-native-monthly-6"},nextItem:{title:"React Native Monthly #4",permalink:"/blog/2017/09/21/react-native-monthly-4"}},f={authorsImageUrls:[void 0]},g=[{value:"Callstack",id:"callstack",children:[],level:3},{value:"Expo",id:"expo",children:[],level:3},{value:"Facebook",id:"facebook",children:[],level:3},{value:"Infinite Red",id:"infinite-red",children:[],level:3},{value:"Shoutem",id:"shoutem",children:[],level:3},{value:"Next session",id:"next-session",children:[],level:2}],k={toc:g};function b(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The React Native monthly meeting continues! Let's see what our teams are up to."),(0,n.kt)("h3",c({},{id:"callstack"}),"Callstack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We\u2019ve been working on React Native CI. Most importantly, we have migrated from Travis to Circle, leaving React Native with a single, unified CI pipeline."),(0,n.kt)("li",{parentName:"ul"},"We\u2019ve organised ",(0,n.kt)("a",c({parentName:"li"},{href:"https://blog.callstack.io/announcing-hacktoberfest-7313ea5ccf4f"}),"Hacktoberfest - React Native edition")," where, together with attendees, we tried to submit many pull requests to open source projects."),(0,n.kt)("li",{parentName:"ul"},"We keep working on ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/callstack/haul"}),"Haul"),". Last month, we have submitted two new releases, including Webpack 3 support. We plan to add ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/react-community/create-react-native-app"}),"CRNA")," and ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/expo/expo"}),"Expo")," support as well as work on better HMR. Our roadmap is public on the issue tracker. If you would like to suggest improvements or give feedback, let us know!")),(0,n.kt)("h3",c({},{id:"expo"}),"Expo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("a",c({parentName:"li"},{href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6"}),"Expo SDK 22")," (using React Native 0.49) and updated ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/react-community/create-react-native-app"}),"CRNA")," for it.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Includes improved splash screen API, basic ARKit support, \u201cDeviceMotion\u201d API, SFAuthenticationSession support on iOS11, and ",(0,n.kt)("a",c({parentName:"li"},{href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6"}),"more"),"."))),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",c({parentName:"li"},{href:"https://snack.expo.io"}),"snacks")," can now have multiple JavaScript files and you can upload images and other assets by just dragging them into the editor."),(0,n.kt)("li",{parentName:"ul"},"Contribute to ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/react-community/react-navigation"}),"react-navigation")," to add support for iPhone X."),(0,n.kt)("li",{parentName:"ul"},"Focus our attention on rough edges when building large applications with Expo. For example:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"First-class support for deploying to multiple environments: staging, production, and arbitrary channels. Channels will support rolling back and setting the active release for a given channel. Let us know if you want to be an early tester, ",(0,n.kt)("a",c({parentName:"li"},{href:"https://twitter.com/expo_io"}),"@expo_io"),"."),(0,n.kt)("li",{parentName:"ul"},"We are also working on improving our standalone app building infrastructure and adding support for bundling images and other non-code assets in standalone app builds while keeping the ability to update assets over the air.")))),(0,n.kt)("h3",c({},{id:"facebook"}),"Facebook"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Better RTL support:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We\u2019re introducing a number of direction-aware styles.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Position:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(left|right) \u2192 (start|end)"))),(0,n.kt)("li",{parentName:"ul"},"Margin:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"margin(Left|Right) \u2192 margin(Start|End)"))),(0,n.kt)("li",{parentName:"ul"},"Padding:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"padding(Left|Right) \u2192 padding(Start|End)"))),(0,n.kt)("li",{parentName:"ul"},"Border:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"borderTop(Left|Right)Radius \u2192 borderTop(Start|End)Radius"),(0,n.kt)("li",{parentName:"ul"},"borderBottom(Left|Right)Radius \u2192 borderBottom(Start|End)Radius"),(0,n.kt)("li",{parentName:"ul"},"border(Left|Right)Width \u2192 border(Start|End)Width"),(0,n.kt)("li",{parentName:"ul"},"border(Left|Right)Color \u2192 border(Start|End)Color"))))),(0,n.kt)("li",{parentName:"ul"},"The meaning of \u201cleft\u201d and \u201cright\u201d were swapped in RTL for position, margin, padding, and border styles. Within a few months, we\u2019re going to remove this behaviour and make \u201cleft\u201d always mean \u201cleft,\u201d and \u201cright\u201d always mean \u201cright\u201d. The breaking changes are hidden under a flag. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"I18nManager.swapLeftAndRightInRTL(false)")," in your React Native components to opt into them."))),(0,n.kt)("li",{parentName:"ul"},"Working on ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/flow"}),"Flow")," typing our internal native modules and using those to generate interfaces in Java and protocols in ObjC that the native implementations must implement. We hope this codegen becomes open source next year, at the earliest.")),(0,n.kt)("h3",c({},{id:"infinite-red"}),"Infinite Red"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New OSS tool for helping React Native and other projects. More ",(0,n.kt)("a",c({parentName:"li"},{href:"https://shift.infinite.red/solidarity-the-cli-for-developer-sanity-672fa81b98e9"}),"here"),"."),(0,n.kt)("li",{parentName:"ul"},"Revamping ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/infinitered/ignite"}),"Ignite")," for a new boilerplate release (Code name: Bowser)")),(0,n.kt)("h3",c({},{id:"shoutem"}),"Shoutem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improving the development flow on Shoutem. We want to streamline the process from creating an app to first custom screen and make it really easy, thus lowering the barrier for new React Native developers. Prepared a few workshops to test out new features. We also improved ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/shoutem/cli"}),"Shoutem CLI")," to support new flows."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/shoutem/ui"}),"Shoutem UI")," received a few component improvements and bugfixes. We also checked compatibility with latest React Native versions."),(0,n.kt)("li",{parentName:"ul"},"Shoutem platform received a few notable updates, new integrations are available as part of the ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/shoutem/extensions"}),"open-source extensions project"),". We are really excited to see active development on Shoutem extensions from other developers. We actively contact and offer advice and guidance about their extensions.")),(0,n.kt)("h2",c({},{id:"next-session"}),"Next session"),(0,n.kt)("p",null,"The next session is scheduled for Wednesday 6, December 2017. Feel free to ping me ",(0,n.kt)("a",c({parentName:"p"},{href:"https://twitter.com/TomislavTenodi"}),"on Twitter")," if you have any suggestion on how we should improve the output of the meeting."))}b.isMDXComponent=!0}}]);