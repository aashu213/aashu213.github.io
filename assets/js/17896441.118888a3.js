"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7918],{84277:function(e,t,a){a.r(t),a.d(t,{default:function(){return Se}});var n=a(27378),l=a(38944),r=a(47656),o=a(56381),i=a(13067);var s=function(e){const{navLink:t,next:a}=e;return n.createElement(i.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var c=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,{navLink:a,next:!0})))},d=a(92676),m=a(11712),u=a(18870),p=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=h[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))b.call(t,a)&&g(e,a,t[a]);if(v)for(var a of v(t))f.call(t,a)&&g(e,a,t[a]);return e})({},e))}function y({versionLabel:e,to:t,onClick:a}){return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:t,onClick:a},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function O({className:e,versionMetadata:t}){const{siteConfig:{title:a}}=(0,d.Z)(),{pluginId:r}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,u.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,m.Jo)(r),c=null!=i?i:(p=s).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(e,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(y,{versionLabel:s.label,to:c.path,onClick:()=>o(s.name)})))}function N({className:e}){const t=(0,u.E6)();return t.banner?n.createElement(O,{className:e,versionMetadata:t}):null}function k({className:e}){const t=(0,u.E6)();return t.badge?n.createElement("span",{className:(0,l.Z)(e,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",t.label):null}var w=a(56520);function _({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function L({lastUpdatedBy:e}){return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function C({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(_,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(L,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var U="iconEdit_1CBY",Z=Object.defineProperty,j=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var H=function(e){var t=e,{className:a}=t,r=((e,t)=>{var a={};for(var n in e)T.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&j)for(var n of j(e))t.indexOf(n)<0&&x.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))T.call(t,a)&&P(e,a,t[a]);if(j)for(var a of j(t))x.call(t,a)&&P(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U,a),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function A({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(H,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var M="tag__u1m",S="tagRegular_Kusr",I="tagWithCount_2eub";var B=function(e){const{permalink:t,name:a,count:r}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(M,{[S]:!r,[I]:r})},a,r&&n.createElement("span",null,r))},D="tags_1YZR",V="tag_3GNh";function F({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(D,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:V},n.createElement(B,{name:e,permalink:t}))))))}var R="lastUpdated_S150",z=Object.defineProperty,q=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,Y=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function $(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(F,((e,t)=>{for(var a in t||(t={}))J.call(t,a)&&Y(e,a,t[a]);if(q)for(var a of q(t))W.call(t,a)&&Y(e,a,t[a]);return e})({},e))))}function G({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:a,formattedLastUpdatedAt:r}){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(A,{editUrl:e})),n.createElement("div",{className:(0,l.Z)("col",R)},(t||a)&&n.createElement(C,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:a})))}function K(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:i,lastUpdatedBy:s,tags:c}=a,d=c.length>0,m=!!(r||o||s);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement($,{tags:c}),m&&n.createElement(G,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var Q=a(63445);var X=({label:e})=>{if(!Q.Z.canUseDOM)return null;const[t,a]=(0,n.useState)(!1),l=t=>{window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventLabel:e,eventValue:t}),a(!0)};return n.createElement("div",{className:"docsRating"},t?"Thanks for letting us know!":n.createElement(n.Fragment,null,"Is this page useful?",n.createElement("svg",{className:"i_thumbsup",alt:"Like",onClick:()=>l(1),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},n.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),n.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",onClick:()=>l(0),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},n.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))},ee=Object.defineProperty,te=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,le=(e,t,a)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function re(e){return n.createElement(n.Fragment,null,n.createElement(X,{label:e.content.metadata.unversionedId}),n.createElement(K,((e,t)=>{for(var a in t||(t={}))ae.call(t,a)&&le(e,a,t[a]);if(te)for(var a of te(t))ne.call(t,a)&&le(e,a,t[a]);return e})({},e)))}var oe=Object.defineProperty,ie=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,de=(e,t,a)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function me({toc:e,className:t,linkClassName:a,isChild:l}){return e.length?n.createElement("ul",{className:l?void 0:t},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(me,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}function ue(e){var t=e,{toc:a,className:l="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:s}=t,c=((e,t)=>{var a={};for(var n in e)se.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ie)for(var n of ie(e))t.indexOf(n)<0&&ce.call(e,n)&&(a[n]=e[n]);return a})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const d=(0,u.LU)(),m=null!=i?i:d.tableOfContents.minHeadingLevel,p=null!=s?s:d.tableOfContents.maxHeadingLevel,v=(0,u.DA)({toc:a,minHeadingLevel:m,maxHeadingLevel:p}),b=(0,n.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:p}}),[r,o,m,p]);return(0,u.Si)(b),n.createElement(me,((e,t)=>{for(var a in t||(t={}))se.call(t,a)&&de(e,a,t[a]);if(ie)for(var a of ie(t))ce.call(t,a)&&de(e,a,t[a]);return e})({toc:v,className:l,linkClassName:r},c))}var pe="tableOfContents_3J2a",ve=Object.defineProperty,be=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ye=(e,t,a)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Oe=function(e){var t,a=e,{className:r}=a,o=((e,t)=>{var a={};for(var n in e)he.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ge)for(var n of ge(e))t.indexOf(n)<0&&Ee.call(e,n)&&(a[n]=e[n]);return a})(a,["className"]);return n.createElement("div",{className:(0,l.Z)(pe,"thin-scrollbar",r)},n.createElement(ue,(t=((e,t)=>{for(var a in t||(t={}))he.call(t,a)&&ye(e,a,t[a]);if(ge)for(var a of ge(t))Ee.call(t,a)&&ye(e,a,t[a]);return e})({},o),be(t,fe({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))},Ne="tocCollapsible_Snzk",ke="tocCollapsibleButton_27DV",we="tocCollapsibleContent_6RV4",_e="tocCollapsibleExpanded__mI0";function Le({toc:e,className:t,minHeadingLevel:a,maxHeadingLevel:r}){const{collapsed:i,toggleCollapsed:s}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(Ne,{[_e]:!i},t)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",ke),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:we,collapsed:i},n.createElement(ue,{toc:e,minHeadingLevel:a,maxHeadingLevel:r})))}var Ce=a(61651),Ue="docItemContainer_3nUq",Ze="docItemCol_1o9i",je="tocMobile_1BQl",Te=Object.defineProperty,xe=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Ae=(e,t,a)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Me=(e,t)=>{for(var a in t||(t={}))Pe.call(t,a)&&Ae(e,a,t[a]);if(xe)for(var a of xe(t))He.call(t,a)&&Ae(e,a,t[a]);return e};function Se(e){const{content:t}=e,{metadata:a,frontMatter:o}=t,{image:i,keywords:s,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:p,toc_max_heading_level:v}=o,{description:b,title:f}=a,g=!d&&void 0===t.contentTitle,h=(0,r.Z)(),E=!m&&t.toc&&t.toc.length>0,y=E&&("desktop"===h||"ssr"===h);return n.createElement(n.Fragment,null,n.createElement(w.Z,Me({},{title:f,description:b,keywords:s,image:i})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[Ze]:!m})},n.createElement(N,null),n.createElement("div",{className:Ue},n.createElement("article",null,n.createElement(k,null),E&&n.createElement(Le,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v,className:(0,l.Z)(u.kM.docs.docTocMobile,je)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},g&&n.createElement(Ce.N,null,f),n.createElement(t,null)),n.createElement(re,Me({},e))),n.createElement(c,{previous:a.previous,next:a.next}))),y&&n.createElement("div",{className:"col col--3"},n.createElement(Oe,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v,className:u.kM.docs.docTocDesktop}))))}},61651:function(e,t,a){a.d(t,{N:function(){return E},Z:function(){return y}});var n=a(27378),l=a(38944),r=a(56381),o=a(18870),i="anchorWithStickyNavbar_23Bc",s="anchorWithHideOnScrollNavbar_3Dj-",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&b(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&b(e,a,t[a]);return e},g=(e,t)=>d(e,m(t)),h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&v.call(e,n)&&(a[n]=e[n]);return a};const E=e=>{var t=h(e,[]);return n.createElement("header",null,n.createElement("h1",g(f({},t),{id:void 0}),t.children))};var y=e=>{return"h1"===e?E:(t=e,e=>{var a=e,{id:c}=a,d=h(a,["id"]);const{navbar:{hideOnScroll:m}}=(0,o.LU)();return c?n.createElement(t,g(f({},d),{className:(0,l.Z)("anchor",{[s]:m,[i]:!m}),id:c}),d.children,n.createElement("a",{className:"hash-link",href:`#${c}`,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,f({},d))});var t}}}]);