"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4274],{27894:function(e,t,a){a.r(t);var n=a(27378),l=a(41957),s=a(51448),r=a(92676);const i=(e,t)=>n.createElement("div",{className:"showcase",key:t},n.createElement("div",null,n.createElement("a",{href:e.infoLink},c(e)),n.createElement("h3",null,e.name),m(e),o(e.infoTitle,e.infoLink))),c=e=>{let t=e.icon;return e.icon.startsWith("http")||(t=(0,s.Z)("img/showcase/"+e.icon)),n.createElement("img",{src:t,alt:e.name})},o=(e,t)=>t?n.createElement("p",{className:"info"},n.createElement("a",{href:t,target:"_blank"},e)):null,m=e=>{if(!e.linkAppStore&&!e.linkPlayStore)return;const t=e.linkAppStore?n.createElement("a",{href:e.linkAppStore,target:"_blank"},"iOS"):null,a=e.linkPlayStore?n.createElement("a",{href:e.linkPlayStore,target:"_blank"},"Android"):null;return n.createElement("p",null,a,a&&t?" \u2022 ":"",t)};t.default=()=>{const{siteConfig:e}=(0,r.Z)(),t=e.customFields.users,a=t.filter((e=>e.pinned)),s=t.filter((e=>!e.pinned)).sort(((e,t)=>e.name.localeCompare(t.name))),c=a.concat(s);return n.createElement(l.Z,{title:"Who's using React Native?",description:"Thousands of apps are using React Native, check out these apps!"},n.createElement("div",{className:"showcaseSection"},n.createElement("div",{className:"prose"},n.createElement("h1",null,"Who's using React Native?"),n.createElement("p",null,"Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups. If you're curious to see what can be accomplished with React Native, check out these apps!")),n.createElement("div",{className:"logos"},c.map(i)),n.createElement("a",{className:"form-button",href:"https://forms.gle/BdNf3v5hemV9D5c86",target:"_blank"},"Fill out this form to apply to the customer spotlight."),n.createElement("p",null,"A curated list of"," ",n.createElement("span",null,n.createElement("a",{key:"demo-apps",href:"https://github.com/ReactNativeNews/React-Native-Apps"},"open source React Native apps"))," ","is also being kept by ",n.createElement("a",{href:"https://infinite.red"},"Infinite Red"),".")))}}}]);