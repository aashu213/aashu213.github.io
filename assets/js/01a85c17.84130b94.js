"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4013],{48868:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(27378),l=a(38944),n=a(41957),c=a(13067),s="sidebar_3-2F",i="sidebarItemTitle_10M-",m="sidebarItemList_3L1d",o="sidebarItem_3stU",u="sidebarItemLink_3hZO",p="sidebarItemLinkActive_1XEC";function b({sidebar:e}){if(0===e.items.length)return null;let t=null;return r.createElement("div",{className:s},r.createElement("h3",{className:i},e.title),r.createElement("ul",{className:m},e.items.map((e=>{const a=e.permalink.split("/")[2],l=t!==a?r.createElement("h4",{className:i},a):null;return t=a,r.createElement("div",{key:e.permalink},l,r.createElement("li",{className:o},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:p},e.title)))}))))}var f=Object.defineProperty,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var h=function(e){const t=e,{sidebar:a,toc:c,children:s}=t,i=((e,t)=>{var a={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&E.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))g.call(t,a)&&v(e,a,t[a]);if(d)for(var a of d(t))E.call(t,a)&&v(e,a,t[a]);return e})({},i),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(b,{sidebar:a})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),c&&r.createElement("div",{className:"col col--2"},c))))}},10780:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(27378),l=a(48868),n=a(24039),c=a(18870),s="tag_2SZ4",i=Object.defineProperty,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function b({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:s},r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&p(e,a,t[a]);if(m)for(var a of m(t))u.call(t,a)&&p(e,a,t[a]);return e})({},e)))))),r.createElement("hr",null))}var f=function({tags:e}){const t=(0,c.PZ)(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(b,{key:e.letter,letterEntry:e}))))};var d=function(e){const{tags:t,sidebar:a}=e,n=(0,c.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(f,{tags:Object.values(t)}))}},24039:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(27378),l=a(38944),n=a(13067),c="tag__u1m",s="tagRegular_Kusr",i="tagWithCount_2eub";var m=function(e){const{permalink:t,name:a,count:m}=e;return r.createElement(n.Z,{href:t,className:(0,l.Z)(c,{[s]:!m,[i]:m})},a,m&&r.createElement("span",null,m))}}}]);