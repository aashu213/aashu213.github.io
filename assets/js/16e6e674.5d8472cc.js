"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5885],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},87810:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return h},contentTitle:function(){return m},metadata:function(){return d},assets:function(){return g},toc:function(){return f},default:function(){return v}});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e};const h={title:"React Native in H2 2021",authors:["lunaleaps"],tags:["announcement"]},m=void 0,d={permalink:"/blog/2021/08/19/h2-2021",source:"@site/blog/2021-08-19-h2-2021.md",title:"React Native in H2 2021",description:"Over the past year so much has changed in our world, React Native being no exception. We've welcomed new members to our team (whom we are excited to eventually meet in person!), our projects have matured and new opportunities have arisen. We're excited to share all this with you in this post and others to come!",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:5.055,truncated:!0,authors:[{name:"Luna Wei",title:"Software Engineer at Meta",url:"https://twitter.com/lunaleaps",imageURL:"https://github.com/lunaleaps.png",key:"lunaleaps"}],prevItem:{title:"React Native's Many Platform Vision",permalink:"/blog/2021/08/26/many-platform-vision"},nextItem:{title:"Announcing React Native 0.65",permalink:"/blog/2021/08/17/version-065"}},g={authorsImageUrls:[void 0]},f=[{value:"Setting up the Community for Success",id:"setting-up-the-community-for-success",children:[{value:"Community Engagement",id:"community-engagement",children:[],level:3},{value:"New Architecture Rollout and Releases",id:"new-architecture-rollout-and-releases",children:[],level:3},{value:"Repository Health",id:"repository-health",children:[],level:3}],level:2},{value:"Pushing the Technology Forward",id:"pushing-the-technology-forward",children:[{value:"New Architectural Capabilities",id:"new-architectural-capabilities",children:[],level:3},{value:"Mobile and Beyond",id:"mobile-and-beyond",children:[{value:"Messenger Desktop",id:"messenger-desktop",children:[],level:4},{value:"React Native in Virtual Reality",id:"react-native-in-virtual-reality",children:[],level:4}],level:3},{value:"Summary",id:"summary",children:[],level:3}],level:2}],w={toc:f};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},w),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Over the past year so much has changed in our world, React Native being no exception. We've welcomed new members to our team (whom we are excited to eventually meet in person!), our projects have matured and new opportunities have arisen. We're excited to share all this with you in this post and others to come!"),(0,n.kt)("p",null,"At Facebook, our team works in half-year cycles. Each half we review our strategy, set plans, and share them internally. Today, we want to share our H2 plans with you, our community."),(0,n.kt)("p",null,"H2 2021 is an exciting half for React Native. Our areas of focus include nurturing the community, beginning to roll out the new architecture to open source, and pushing the technology forward."),(0,n.kt)("h2",p({},{id:"setting-up-the-community-for-success"}),"Setting up the Community for Success"),(0,n.kt)("p",null,"React Native\u2019s open source ecosystem is one of its greatest strengths. We\u2019ve identified the following areas as the best ways to grow our partnership with the community."),(0,n.kt)("h3",p({},{id:"community-engagement"}),"Community Engagement"),(0,n.kt)("p",null,"In order for everyone to move in the same direction, we want to continually communicate our vision and status to the community. Sharing our incremental progress publicly isn\u2019t second-nature for us (yet). This half, we are committing to a more consistent content schedule that exercises the muscle and sets up processes to reduce friction. Beyond sharing our updates, we also want to use this opportunity to showcase the accomplishments of the community."),(0,n.kt)("h3",p({},{id:"new-architecture-rollout-and-releases"}),"New Architecture Rollout and Releases"),(0,n.kt)("p",null,"In H1, ",(0,n.kt)("a",p({parentName:"p"},{href:"https://twitter.com/reactnative/status/1415099806507167745"}),"we finished rolling out the new React Native architecture")," to all React Native mobile products in the Facebook app. Facebook is made up of surfaces like Marketplace Tab and Dating Profile, and we have migrated over 1000 surfaces!"),(0,n.kt)("p",null,"In H2, we are beginning to bring this new architecture to the community. We have put together a playbook that shows how to migrate libraries and applications. We have already shared drafts with early partners that maintain popular React Native libraries. We expect to get their feedback, support them in upgrading their libraries, and learn how to improve our playbook and implementations. We plan on sharing the playbook more broadly as soon as the work stabilizes."),(0,n.kt)("p",null,"We are also focused on improving React Native\u2019s release process. We will need frequent reliable releases to progressively ship the new React Native architecture. Our aim is to catch release-blockers earlier and to reduce the turn-around time. This will enable more predictable release timelines with less burden on contributors and developers."),(0,n.kt)("h3",p({},{id:"repository-health"}),"Repository Health"),(0,n.kt)("p",null,"When developers evaluate a technology, an essential signal is the health of its repository. This impression is informed by signals such as pull request throughput, stars, age of last commit, and others. The React Native repository has historically lacked a process to ensure that issues and pull requests are reviewed in a timely manner. Our work this half is two-fold: we need to resolve a large backlog of contributions, and we need to build sustainable practices for handling incoming contributions. We hope this work will also set us up for success for more engagement from the community via issues and PRs as the community starts using the new architecture. You can follow our progress on the backlog using this ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/react-native/projects/17"}),"project board.")),(0,n.kt)("h2",p({},{id:"pushing-the-technology-forward"}),"Pushing the Technology Forward"),(0,n.kt)("h3",p({},{id:"new-architectural-capabilities"}),"New Architectural Capabilities"),(0,n.kt)("p",null,"As mentioned, our new architecture recently finished rolling out to the Facebook mobile apps! We are already building new capabilities that will change the performance curve for React Native. This includes supporting Concurrent Rendering in React Native. Concurrent Rendering enables React to pause and resume work and quickly respond to high priority events like a touch gesture. Something we are also really excited about is using Concurrent Rendering to make use of idle CPU cycles for rendering offscreen product features without slowing down onscreen user interactions."),(0,n.kt)("h3",p({},{id:"mobile-and-beyond"}),"Mobile and Beyond"),(0,n.kt)("p",null,"We have had overwhelming success with powering mobile experiences using React at Facebook, and we have seen amazing mobile products from our partners. Now we want to bring that success to more platforms! We believe that targeting many platforms lets us learn new lessons and further improve our offering on mobile platforms. (We will share more about this in a later post.) The exciting news is that we\u2019ve already started taking steps towards making this a reality!"),(0,n.kt)("h4",p({},{id:"messenger-desktop"}),"Messenger Desktop"),(0,n.kt)("p",null,"Last summer, we ",(0,n.kt)("a",p({parentName:"p"},{href:"https://twitter.com/reactnative/status/1286061933293010944"}),"expanded our focus beyond mobile")," by partnering with Microsoft to accelerate React Native development on Windows and macOS. We partnered with the Messenger team at Facebook to enable user experiences that are only possible on desktop, and to deliver huge performance wins over their previous Electron implementation. Our vision is to combine high quality, delightful, ",(0,n.kt)("em",{parentName:"p"},"native")," desktop user experiences with the great developer experience of React Native."),(0,n.kt)("p",null,"The Messenger team has ambitious plans for the Messenger desktop apps, including finding new ways to further unleash the unique capabilities of desktop platforms and large screens. We are excited to continue enabling these experiences by investing more into React Native on desktop."),(0,n.kt)("h4",p({},{id:"react-native-in-virtual-reality"}),"React Native in Virtual Reality"),(0,n.kt)("p",null,"Oculus has long used React Native to power core experiences like Store, where people buy applications and games in VR. In H2, React Native and Oculus are partnering to bring new exciting experiences to VR. We are also bringing optimizations and improvements from VR to mobile, and from mobile to VR. This will include expanding React Native to support unique requirements of VR \u2014 from new input types like controllers to new memory usage optimizations. This is the start of an exciting journey to explore and influence how immersive experiences can built for VR using React Native."),(0,n.kt)("h3",p({},{id:"summary"}),"Summary"),(0,n.kt)("p",null,"We hope our H2 plans excite you as much as it does us, and we look forward to sharing more with you in the upcoming months! We will also be attending React Native EU on September 1, 2021 where teammate Joshua Gross (",(0,n.kt)("a",p({parentName:"p"},{href:"https://twitter.com/joshuaisgross"}),"@joshuaisgross"),") will share how we replaced the architecture for the world\u2019s largest React Native app. ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.react-native.eu/"}),"Register for React Native EU")," if you haven\u2019t already! In the meantime, connect with us on Twitter (",(0,n.kt)("a",p({parentName:"p"},{href:"https://twitter.com/reactnative"}),"@reactnative"),") for updates on events, our roadmap, and much more."))}v.isMDXComponent=!0}}]);