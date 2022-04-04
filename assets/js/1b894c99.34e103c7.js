"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9391],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,f=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41871:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return f},assets:function(){return d},toc:function(){return k},default:function(){return b}});var r=a(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&c(e,a,t[a]);return e};const h={title:"React Native - H2 2021 Recap",authors:["cortinico"],tags:["announcement"]},m="React Native - H2 2021 Recap",f={permalink:"/blog/2022/01/21/react-native-h2-2021-recap",source:"@site/blog/2022-01-21-react-native-h2-2021-recap.md",title:"React Native - H2 2021 Recap",description:"While we're all still excited for the release of React Native 0.67, we want to take a moment to celebrate what the community achieved in the last half and share what we have on the horizon for the future of React Native.",date:"2022-01-21T00:00:00.000Z",formattedDate:"January 21, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:5.445,truncated:!0,authors:[{name:"Nicola Corti",title:"Software Engineer at Meta",url:"https://twitter.com/cortinico",imageURL:"https://github.com/cortinico.png",key:"cortinico"}],prevItem:{title:"An update on the New Architecture Rollout",permalink:"/blog/2022/03/15/an-update-on-the-new-architecture-rollout"},nextItem:{title:"Announcing React Native 0.67",permalink:"/blog/2022/01/19/version-067"}},d={authorsImageUrls:[void 0]},k=[{value:"Repository Health",id:"repository-health",children:[],level:2},{value:"Community Engagement",id:"community-engagement",children:[],level:2},{value:"The New Architecture Rollout and Releases",id:"the-new-architecture-rollout-and-releases",children:[],level:2},{value:"To Mobile and beyond",id:"to-mobile-and-beyond",children:[],level:2}],g={toc:k};function b(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"While we're all still excited for the ",(0,r.kt)("a",u({parentName:"p"},{href:"/blog/2022/01/19/version-067"}),"release of React Native 0.67"),", we want to take a moment to ",(0,r.kt)("strong",{parentName:"p"},"celebrate")," what the community achieved in the last half and share what we have on the ",(0,r.kt)("strong",{parentName:"p"},"horizon")," for the future of React Native."),(0,r.kt)("p",null,"Specifically, H2 2021 was an ",(0,r.kt)("a",u({parentName:"p"},{href:"/blog/2021/08/19/h2-2021#pushing-the-technology-forward"}),"exciting half for both us and the community")," where we had the opportunity to invest more in our open-source ecosystem. We revamped some of our processes and created new ones from scratch that will help you, us, and the community to enjoy a ",(0,r.kt)("strong",{parentName:"p"},"better")," React Native experience."),(0,r.kt)("h2",u({},{id:"repository-health"}),"Repository Health"),(0,r.kt)("p",null,"In H2 2021, we invested in tackling some of the ",(0,r.kt)("em",{parentName:"p"},"OSS debt")," that our repository built up over the years. Specifically, most of our focus was around ",(0,r.kt)("strong",{parentName:"p"},"pull requests"),". We built an internal process to make sure all the new pull requests are addressed in a timely manner."),(0,r.kt)("p",null,"Although this is not a complete list, we would like to highlight some ",(0,r.kt)("strong",{parentName:"p"},"impactful")," PRs we received from our contributors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accessibility"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31630"}),"#31630")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Added Support for Entrance/exit from collection by Flatlist")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/anaskhraza"}),"@anaskhraza")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Crash"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/29452"}),"#29452")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fix - TextInput Drawable to avoid Null Pointer Exception RuntimeError")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31777"}),"#31777")," ",(0,r.kt)("inlineCode",{parentName:"li"},"fix: TouchableNativeFeedback ripple starts on previous touch location")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/intergalacticspacehighway"}),"@intergalacticspacehighway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31789"}),"#31789")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fix support for blobs larger than 64 KB on Android")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tomekzaw"}),"@tomekzaw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31007"}),"#31007")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fix selectionColor doesn't style Android TextInput selection handles")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/32398"}),"#32398")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fix Android border positioning regression")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/oblador"}),"@oblador")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/29099"}),"#29099")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[Android] Allows to set individual (left,top,right,bottom) dotted/dashed")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/29117"}),"#29117")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[Android] Fix font weight numeric values")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/28995"}),"#28995")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[Android] Fix TextInput Cursor jumping to the right when placeholder null")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/28952"}),"#28952")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[Android] Fix non selectable Text in FlatList")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/29046"}),"#29046")," ",(0,r.kt)("inlineCode",{parentName:"li"},"[Android] onKeyPress event not fired with numeric keys")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/fabriziobertoglio1987"}),"@fabriziobertoglio1987")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31500"}),"#31500")," ",(0,r.kt)("inlineCode",{parentName:"li"},"fix#29319 - ios dismiss modal")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/intergalacticspacehighway"}),"@intergalacticspacehighway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/32179"}),"#32179")," ",(0,r.kt)("inlineCode",{parentName:"li"},'Fix: multiline textinput start "jerking" when trying to move cursor.')," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/xiankuncheng"}),"@xiankuncheng")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/29039"}),"#29039")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Fix to make taps on views outside parent bounds work on Android")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/hsource"}),"@hsource")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31764"}),"#31764")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Optimize font handling on iOS")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/Adlai-Holler"}),"@Adlai-Holler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/32536"}),"#32536")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Don't reconstruct app component on split-screen")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/Somena1"}),"@Somena1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/31401"}),"#31401")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Add unit tests for VirtualizedList render quirks")," by ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/NickGerleman"}),"@NickGerleman"))))),(0,r.kt)("p",null,"Some of those PRs addressed issues that were impacting both Meta and the overall OSS community, given the number of reactions on the corresponding issue they closed."),(0,r.kt)("p",null,"There are so many more PRs we would like to call out, and we want to ",(0,r.kt)("strong",{parentName:"p"},"thank")," again all the people that are spending their time to help us address bugs and improve React Native."),(0,r.kt)("h2",u({},{id:"community-engagement"}),"Community Engagement"),(0,r.kt)("p",null,"At the beginning of the half we set a goal to ",(0,r.kt)("strong",{parentName:"p"},"communicate")," with our community more and set process for the behavior to continue. Here were some of our engagements in H2 2021:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We had the opportunity to participate in ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.react-native.eu/"}),"React Native EU")," with a talk from ",(0,r.kt)("a",u({parentName:"li"},{href:"https://twitter.com/joshuaisgross"}),"Joshua Gross")," - ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.youtube.com/watch?v=xKOkILSLs0Q&t=3987s"}),"Bringing the Fabric renderer to the \u201cFacebook\u201d app")),(0,r.kt)("li",{parentName:"ul"},"We hosted an ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.reddit.com/r/reactnative/comments/pzdo1r/react_native_team_aua_thursday_oct_14_9am_pt/"}),"\u201cAsk Us Anything\u201c (AUA) on Reddit")," and received over 100 questions! AUAs are a great opportunity for both us, to get a sense of the community engagement, and you all, to ask any kind of questions. If you haven\u2019t yet, make sure you check the answers as some of them are extremely insightful"),(0,r.kt)("li",{parentName:"ul"},"We shared our ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision"}),"Many Platform Vision"),", a guide for gotchas for ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/blog/2021/09/01/preparing-your-app-for-iOS-15-and-android-12"}),"Android 12 and iOS 15"),", and the progress and ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/blog/2021/10/26/toward-hermes-being-the-default"}),"vision for Hermes to become the default JS engine")," for React Native!"),(0,r.kt)("li",{parentName:"ul"},"Our own ",(0,r.kt)("a",u({parentName:"li"},{href:"https://twitter.com/fkgozali"}),"Kevin Gozali")," appeared on ",(0,r.kt)("a",u({parentName:"li"},{href:"https://reactnativeradio.com/episodes/rnr-222-the-new-architecture-with-kevin-gozali-from-the-rn-core-team"}),"an episode of React Native Radio podcast")," to talk about the new architecture."),(0,r.kt)("li",{parentName:"ul"},"At ",(0,r.kt)("a",u({parentName:"li"},{href:"https://conf.reactjs.org/"}),"ReactConf 2021"),", ReactConf ",(0,r.kt)("a",u({parentName:"li"},{href:"https://twitter.com/rickhanlonii"}),"Rick Hanlon")," shared the unified many-platform vision for React and React Native. Moreover, ",(0,r.kt)("a",u({parentName:"li"},{href:"https://twitter.com/EricRozell"}),"Eric Rozell")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"https://twitter.com/moyessa"}),"Steven Moyes")," got to share the amazing progress React Native Desktop has made in supporting both Meta and Microsoft apps and showcasing the Many Platform Vision in practice.")),(0,r.kt)("p",null,"Beyond sharing more updates in H2 2021, we also ",(0,r.kt)("strong",{parentName:"p"},"leaned")," on our community more than ever. We relied on critical feedback from contributors as they dogfooded early drafts of the New Architecture material. As well, we were heavily supported by the expertise of our community in debugging critical release issues and improvements."),(0,r.kt)("p",null,"There is a wealth of knowledge that our community brings into React Native, and we need to continue to nurture it."),(0,r.kt)("h2",u({},{id:"the-new-architecture-rollout-and-releases"}),"The New Architecture Rollout and Releases"),(0,r.kt)("p",null,"2022 is going to be the year of the ",(0,r.kt)("strong",{parentName:"p"},"New Architecture in open source"),"."),(0,r.kt)("p",null,"We\u2019ve been working hard to deliver the infrastructure needed to rollout the New Architecture to apps and libraries. We involved some of our partners and core contributors/library maintainers to refine our support for the new architecture to get early stage feedback."),(0,r.kt)("p",null,"We are now preparing to release a new guide on our website: ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native-website/pull/2879"}),"Getting Started with the New Architecture"),". That will be the entry point to a collection of material that we\u2019re going to release in 2022 and will help you migrate/start your project with the new architecture."),(0,r.kt)("p",null,"Moreover, we would like to stress the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native-website/pull/2879"}),"importance of ",(0,r.kt)("strong",{parentName:"a"},"giving feedback"))," on the New Architecture material. We\u2019re still in the process of finalizing the last details and your input will help everyone adopt the new architecture more seamlessly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Releases")," play a critical role in the New Architecture rollout. Our goal last half was to ensure any release blocking issues did not stagnate. We approached the problem by ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/wiki/Releases"}),"clarifying and improving process and responsibilities")," for better accountability. Our release coordination now occurs in a ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-releases/discussions"}),"dedicated discussions repository")," with ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2CType%3A+Upgrade+Issue&template=upgrade-regression-form.yml"}),"clearer release issue reporting"),"."),(0,r.kt)("p",null,"In H1 2022, we will continue to iterate on release responsibilities to support new architecture rollout. If you\u2019d like to help out testing release candidates or ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/projects/18"}),"working on improvements"),", feel free to ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-releases/discussions/categories/improvements"}),"join the discussion"),"!"),(0,r.kt)("h2",u({},{id:"to-mobile-and-beyond"}),"To Mobile and beyond"),(0,r.kt)("p",null,"As you can see from ",(0,r.kt)("a",u({parentName:"p"},{href:"https://conf.reactjs.org/"}),"the ReactConf talk lineup"),", React Native is not only Android & iOS."),(0,r.kt)("p",null,"Earlier in 2021, we shared our ",(0,r.kt)("a",u({parentName:"p"},{href:"https://reactnative.dev/blog/2021/08/26/many-platform-vision"}),"Many Platform Vision"),", and we had a successful time rolling out React Native on both Desktop and VR."),(0,r.kt)("p",null,"We\u2019re looking forward to ",(0,r.kt)("strong",{parentName:"p"},"converging patterns")," that are platform-specific into the React Native experience."),(0,r.kt)("p",null,"Finally, we want to thank again the community for the enormous support in H2 2021. It\u2019s always amazing to see how contributors come together and support each other on Github, fixing bugs, sharing their and helping us deliver React Native to millions of users."),(0,r.kt)("p",null,"Stay tuned and looking forward to an ",(0,r.kt)("strong",{parentName:"p"},"even more amazing 2022")," \ud83c\udf89!"))}b.isMDXComponent=!0}}]);