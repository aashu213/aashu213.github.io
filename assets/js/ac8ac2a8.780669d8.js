"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14646],{35318:function(t,e,a){a.d(e,{Zo:function(){return f},kt:function(){return d}});var l=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=l.createContext({}),n=function(t){var e=l.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},f=function(t){var e=n(t.components);return l.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,f=p(t,["components","mdxType","originalType","parentName"]),k=n(a),d=r,s=k["".concat(c,".").concat(d)]||k[d]||m[d]||i;return a?l.createElement(s,o(o({ref:e},f),{},{components:a})):l.createElement(s,o({ref:e},f))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var n=2;n<i;n++)o[n]=a[n];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},44182:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return k},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return h},default:function(){return N}});var l=a(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,f=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&f(t,a,e[a]);if(p)for(var a of p(e))n.call(e,a)&&f(t,a,e[a]);return t};const k={id:"colors",title:"Color Reference"},d=void 0,s={unversionedId:"colors",id:"version-0.61/colors",title:"Color Reference",description:"Components in React Native are styled using JavaScript. Color properties usually match how CSS works on the web.",source:"@site/versioned_docs/version-0.61/colors.md",sourceDirName:".",slug:"/colors",permalink:"/docs/0.61/colors",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/colors.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"colors",title:"Color Reference"},sidebar:"version-0.61/docs",previous:{title:"Direct Manipulation",permalink:"/docs/0.61/direct-manipulation"},next:{title:"Integration with Existing Apps",permalink:"/docs/0.61/integration-with-existing-apps"}},h=[{value:"Red-green-blue",id:"red-green-blue",children:[],level:3},{value:"Hue-saturation-lightness",id:"hue-saturation-lightness",children:[],level:3},{value:"<code>transparent</code>",id:"transparent",children:[],level:3},{value:"Named colors",id:"named-colors",children:[],level:3}],u={toc:h};function N(t){var e,a=t,{components:r}=a,f=((t,e)=>{var a={};for(var l in t)c.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&p)for(var l of p(t))e.indexOf(l)<0&&n.call(t,l)&&(a[l]=t[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(e=m(m({},u),f),i(e,o({components:r,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,"Components in React Native are ",(0,l.kt)("a",m({parentName:"p"},{href:"/docs/0.61/style"}),"styled using JavaScript"),". Color properties usually match how ",(0,l.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}),"CSS works on the web"),"."),(0,l.kt)("h3",m({},{id:"red-green-blue"}),"Red-green-blue"),(0,l.kt)("p",null,"React Native supports ",(0,l.kt)("inlineCode",{parentName:"p"},"rgb()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"rgba()")," in both hexadecimal and functional notation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'#f0f'")," (#rgb)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'#ff00ff'")," (#rrggbb)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'rgb(255, 0, 255)'"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'rgba(255, 255, 255, 1.0)'"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'#f0ff'")," (#rgba)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'#ff00ff00'")," (#rrggbbaa)"))),(0,l.kt)("h3",m({},{id:"hue-saturation-lightness"}),"Hue-saturation-lightness"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hsl()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hsla()")," is supported in functional notation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'hsl(360, 100%, 100%)'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'hsla(360, 100%, 100%, 1.0)'"))),(0,l.kt)("h3",m({},{id:"transparent"}),(0,l.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,l.kt)("p",null,"This is a shortcut for ",(0,l.kt)("inlineCode",{parentName:"p"},"rgba(0,0,0,0)"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'transparent'"))),(0,l.kt)("h3",m({},{id:"named-colors"}),"Named colors"),(0,l.kt)("p",null,"You can also use color names as values. React Native follows the ",(0,l.kt)("a",m({parentName:"p"},{href:"http://www.w3.org/TR/css3-color/#svg-color"}),"CSS3 specification"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f0f8ff/000000?text=+",alt:"#f0f8ff"}))," ",(0,l.kt)("color",{aliceblue:!0})," aliceblue (#f0f8ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/faebd7/000000?text=+",alt:"#faebd7"}))," ",(0,l.kt)("color",{antiquewhite:!0})," antiquewhite (#faebd7)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00ffff/000000?text=+",alt:"#00ffff"}))," ",(0,l.kt)("color",{aqua:!0})," aqua (#00ffff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/7fffd4/000000?text=+",alt:"#7fffd4"}))," ",(0,l.kt)("color",{aquamarine:!0})," aquamarine (#7fffd4)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f0ffff/000000?text=+",alt:"#f0ffff"}))," ",(0,l.kt)("color",{azure:!0})," azure (#f0ffff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f5f5dc/000000?text=+",alt:"#f5f5dc"}))," ",(0,l.kt)("color",{beige:!0})," beige (#f5f5dc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffe4c4/000000?text=+",alt:"#ffe4c4"}))," ",(0,l.kt)("color",{bisque:!0})," bisque (#ffe4c4)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/000000/000000?text=+",alt:"#000000"}))," ",(0,l.kt)("color",{black:!0})," black (#000000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffebcd/000000?text=+",alt:"#ffebcd"}))," ",(0,l.kt)("color",{blanchedalmond:!0})," blanchedalmond (#ffebcd)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/0000ff/000000?text=+",alt:"#0000ff"}))," ",(0,l.kt)("color",{blue:!0})," blue (#0000ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/8a2be2/000000?text=+",alt:"#8a2be2"}))," ",(0,l.kt)("color",{blueviolet:!0})," blueviolet (#8a2be2)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/a52a2a/000000?text=+",alt:"#a52a2a"}))," ",(0,l.kt)("color",{brown:!0})," brown (#a52a2a)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/deb887/000000?text=+",alt:"#deb887"}))," ",(0,l.kt)("color",{burlywood:!0})," burlywood (#deb887)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/5f9ea0/000000?text=+",alt:"#5f9ea0"}))," ",(0,l.kt)("color",{cadetblue:!0})," cadetblue (#5f9ea0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/7fff00/000000?text=+",alt:"#7fff00"}))," ",(0,l.kt)("color",{chartreuse:!0})," chartreuse (#7fff00)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/d2691e/000000?text=+",alt:"#d2691e"}))," ",(0,l.kt)("color",{chocolate:!0})," chocolate (#d2691e)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff7f50/000000?text=+",alt:"#ff7f50"}))," ",(0,l.kt)("color",{coral:!0})," coral (#ff7f50)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/6495ed/000000?text=+",alt:"#6495ed"}))," ",(0,l.kt)("color",{cornflowerblue:!0})," cornflowerblue (#6495ed)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fff8dc/000000?text=+",alt:"#fff8dc"}))," ",(0,l.kt)("color",{cornsilk:!0})," cornsilk (#fff8dc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/dc143c/000000?text=+",alt:"#dc143c"}))," ",(0,l.kt)("color",{crimson:!0})," crimson (#dc143c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00ffff/000000?text=+",alt:"#00ffff"}))," ",(0,l.kt)("color",{cyan:!0})," cyan (#00ffff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00008b/000000?text=+",alt:"#00008b"}))," ",(0,l.kt)("color",{darkblue:!0})," darkblue (#00008b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/008b8b/000000?text=+",alt:"#008b8b"}))," ",(0,l.kt)("color",{darkcyan:!0})," darkcyan (#008b8b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/b8860b/000000?text=+",alt:"#b8860b"}))," ",(0,l.kt)("color",{darkgoldenrod:!0})," darkgoldenrod (#b8860b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/a9a9a9/000000?text=+",alt:"#a9a9a9"}))," ",(0,l.kt)("color",{darkgray:!0})," darkgray (#a9a9a9)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/006400/000000?text=+",alt:"#006400"}))," ",(0,l.kt)("color",{darkgreen:!0})," darkgreen (#006400)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/a9a9a9/000000?text=+",alt:"#a9a9a9"}))," ",(0,l.kt)("color",{darkgrey:!0})," darkgrey (#a9a9a9)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/bdb76b/000000?text=+",alt:"#bdb76b"}))," ",(0,l.kt)("color",{darkkhaki:!0})," darkkhaki (#bdb76b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/8b008b/000000?text=+",alt:"#8b008b"}))," ",(0,l.kt)("color",{darkmagenta:!0})," darkmagenta (#8b008b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/556b2f/000000?text=+",alt:"#556b2f"}))," ",(0,l.kt)("color",{darkolivegreen:!0})," darkolivegreen (#556b2f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff8c00/000000?text=+",alt:"#ff8c00"}))," ",(0,l.kt)("color",{darkorange:!0})," darkorange (#ff8c00)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/9932cc/000000?text=+",alt:"#9932cc"}))," ",(0,l.kt)("color",{darkorchid:!0})," darkorchid (#9932cc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/8b0000/000000?text=+",alt:"#8b0000"}))," ",(0,l.kt)("color",{darkred:!0})," darkred (#8b0000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/e9967a/000000?text=+",alt:"#e9967a"}))," ",(0,l.kt)("color",{darksalmon:!0})," darksalmon (#e9967a)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/8fbc8f/000000?text=+",alt:"#8fbc8f"}))," ",(0,l.kt)("color",{darkseagreen:!0})," darkseagreen (#8fbc8f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/483d8b/000000?text=+",alt:"#483d8b"}))," ",(0,l.kt)("color",{darkslateblue:!0})," darkslateblue (#483d8b)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/2f4f4f/000000?text=+",alt:"#2f4f4f"}))," ",(0,l.kt)("color",{darkslategrey:!0})," darkslategrey (#2f4f4f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00ced1/000000?text=+",alt:"#00ced1"}))," ",(0,l.kt)("color",{darkturquoise:!0})," darkturquoise (#00ced1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/9400d3/000000?text=+",alt:"#9400d3"}))," ",(0,l.kt)("color",{darkviolet:!0})," darkviolet (#9400d3)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff1493/000000?text=+",alt:"#ff1493"}))," ",(0,l.kt)("color",{deeppink:!0})," deeppink (#ff1493)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00bfff/000000?text=+",alt:"#00bfff"}))," ",(0,l.kt)("color",{deepskyblue:!0})," deepskyblue (#00bfff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/696969/000000?text=+",alt:"#696969"}))," ",(0,l.kt)("color",{dimgray:!0})," dimgray (#696969)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/696969/000000?text=+",alt:"#696969"}))," ",(0,l.kt)("color",{dimgrey:!0})," dimgrey (#696969)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/1e90ff/000000?text=+",alt:"#1e90ff"}))," ",(0,l.kt)("color",{dodgerblue:!0})," dodgerblue (#1e90ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/b22222/000000?text=+",alt:"#b22222"}))," ",(0,l.kt)("color",{firebrick:!0})," firebrick (#b22222)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fffaf0/000000?text=+",alt:"#fffaf0"}))," ",(0,l.kt)("color",{floralwhite:!0})," floralwhite (#fffaf0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/228b22/000000?text=+",alt:"#228b22"}))," ",(0,l.kt)("color",{forestgreen:!0})," forestgreen (#228b22)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff00ff/000000?text=+",alt:"#ff00ff"}))," ",(0,l.kt)("color",{fuchsia:!0})," fuchsia (#ff00ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/dcdcdc/000000?text=+",alt:"#dcdcdc"}))," ",(0,l.kt)("color",{gainsboro:!0})," gainsboro (#dcdcdc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f8f8ff/000000?text=+",alt:"#f8f8ff"}))," ",(0,l.kt)("color",{ghostwhite:!0})," ghostwhite (#f8f8ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffd700/000000?text=+",alt:"#ffd700"}))," ",(0,l.kt)("color",{gold:!0})," gold (#ffd700)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/daa520/000000?text=+",alt:"#daa520"}))," ",(0,l.kt)("color",{goldenrod:!0})," goldenrod (#daa520)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/808080/000000?text=+",alt:"#808080"}))," ",(0,l.kt)("color",{gray:!0})," gray (#808080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/008000/000000?text=+",alt:"#008000"}))," ",(0,l.kt)("color",{green:!0})," green (#008000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/adff2f/000000?text=+",alt:"#adff2f"}))," ",(0,l.kt)("color",{greenyellow:!0})," greenyellow (#adff2f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/808080/000000?text=+",alt:"#808080"}))," ",(0,l.kt)("color",{grey:!0})," grey (#808080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f0fff0/000000?text=+",alt:"#f0fff0"}))," ",(0,l.kt)("color",{honeydew:!0})," honeydew (#f0fff0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff69b4/000000?text=+",alt:"#ff69b4"}))," ",(0,l.kt)("color",{hotpink:!0})," hotpink (#ff69b4)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/cd5c5c/000000?text=+",alt:"#cd5c5c"}))," ",(0,l.kt)("color",{indianred:!0})," indianred (#cd5c5c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/4b0082/000000?text=+",alt:"#4b0082"}))," ",(0,l.kt)("color",{indigo:!0})," indigo (#4b0082)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fffff0/000000?text=+",alt:"#fffff0"}))," ",(0,l.kt)("color",{ivory:!0})," ivory (#fffff0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f0e68c/000000?text=+",alt:"#f0e68c"}))," ",(0,l.kt)("color",{khaki:!0})," khaki (#f0e68c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/e6e6fa/000000?text=+",alt:"#e6e6fa"}))," ",(0,l.kt)("color",{lavender:!0})," lavender (#e6e6fa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fff0f5/000000?text=+",alt:"#fff0f5"}))," ",(0,l.kt)("color",{lavenderblush:!0})," lavenderblush (#fff0f5)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/7cfc00/000000?text=+",alt:"#7cfc00"}))," ",(0,l.kt)("color",{lawngreen:!0})," lawngreen (#7cfc00)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fffacd/000000?text=+",alt:"#fffacd"}))," ",(0,l.kt)("color",{lemonchiffon:!0})," lemonchiffon (#fffacd)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/add8e6/000000?text=+",alt:"#add8e6"}))," ",(0,l.kt)("color",{lightblue:!0})," lightblue (#add8e6)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f08080/000000?text=+",alt:"#f08080"}))," ",(0,l.kt)("color",{lightcoral:!0})," lightcoral (#f08080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/e0ffff/000000?text=+",alt:"#e0ffff"}))," ",(0,l.kt)("color",{lightcyan:!0})," lightcyan (#e0ffff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fafad2/000000?text=+",alt:"#fafad2"}))," ",(0,l.kt)("color",{lightgoldenrodyellow:!0})," lightgoldenrodyellow (#fafad2)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/d3d3d3/000000?text=+",alt:"#d3d3d3"}))," ",(0,l.kt)("color",{lightgray:!0})," lightgray (#d3d3d3)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/90ee90/000000?text=+",alt:"#90ee90"}))," ",(0,l.kt)("color",{lightgreen:!0})," lightgreen (#90ee90)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/d3d3d3/000000?text=+",alt:"#d3d3d3"}))," ",(0,l.kt)("color",{lightgrey:!0})," lightgrey (#d3d3d3)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffb6c1/000000?text=+",alt:"#ffb6c1"}))," ",(0,l.kt)("color",{lightpink:!0})," lightpink (#ffb6c1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffa07a/000000?text=+",alt:"#ffa07a"}))," ",(0,l.kt)("color",{lightsalmon:!0})," lightsalmon (#ffa07a)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/20b2aa/000000?text=+",alt:"#20b2aa"}))," ",(0,l.kt)("color",{lightseagreen:!0})," lightseagreen (#20b2aa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/87cefa/000000?text=+",alt:"#87cefa"}))," ",(0,l.kt)("color",{lightskyblue:!0})," lightskyblue (#87cefa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/778899/000000?text=+",alt:"#778899"}))," ",(0,l.kt)("color",{lightslategrey:!0})," lightslategrey (#778899)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/b0c4de/000000?text=+",alt:"#b0c4de"}))," ",(0,l.kt)("color",{lightsteelblue:!0})," lightsteelblue (#b0c4de)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffffe0/000000?text=+",alt:"#ffffe0"}))," ",(0,l.kt)("color",{lightyellow:!0})," lightyellow (#ffffe0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00ff00/000000?text=+",alt:"#00ff00"}))," ",(0,l.kt)("color",{lime:!0})," lime (#00ff00)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/32cd32/000000?text=+",alt:"#32cd32"}))," ",(0,l.kt)("color",{limegreen:!0})," limegreen (#32cd32)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/faf0e6/000000?text=+",alt:"#faf0e6"}))," ",(0,l.kt)("color",{linen:!0})," linen (#faf0e6)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff00ff/000000?text=+",alt:"#ff00ff"}))," ",(0,l.kt)("color",{magenta:!0})," magenta (#ff00ff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/800000/000000?text=+",alt:"#800000"}))," ",(0,l.kt)("color",{maroon:!0})," maroon (#800000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/66cdaa/000000?text=+",alt:"#66cdaa"}))," ",(0,l.kt)("color",{mediumaquamarine:!0})," mediumaquamarine (#66cdaa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/0000cd/000000?text=+",alt:"#0000cd"}))," ",(0,l.kt)("color",{mediumblue:!0})," mediumblue (#0000cd)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ba55d3/000000?text=+",alt:"#ba55d3"}))," ",(0,l.kt)("color",{mediumorchid:!0})," mediumorchid (#ba55d3)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/9370db/000000?text=+",alt:"#9370db"}))," ",(0,l.kt)("color",{mediumpurple:!0})," mediumpurple (#9370db)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/3cb371/000000?text=+",alt:"#3cb371"}))," ",(0,l.kt)("color",{mediumseagreen:!0})," mediumseagreen (#3cb371)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/7b68ee/000000?text=+",alt:"#7b68ee"}))," ",(0,l.kt)("color",{mediumslateblue:!0})," mediumslateblue (#7b68ee)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00fa9a/000000?text=+",alt:"#00fa9a"}))," ",(0,l.kt)("color",{mediumspringgreen:!0})," mediumspringgreen (#00fa9a)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/48d1cc/000000?text=+",alt:"#48d1cc"}))," ",(0,l.kt)("color",{mediumturquoise:!0})," mediumturquoise (#48d1cc)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/c71585/000000?text=+",alt:"#c71585"}))," ",(0,l.kt)("color",{mediumvioletred:!0})," mediumvioletred (#c71585)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/191970/000000?text=+",alt:"#191970"}))," ",(0,l.kt)("color",{midnightblue:!0})," midnightblue (#191970)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f5fffa/000000?text=+",alt:"#f5fffa"}))," ",(0,l.kt)("color",{mintcream:!0})," mintcream (#f5fffa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffe4e1/000000?text=+",alt:"#ffe4e1"}))," ",(0,l.kt)("color",{mistyrose:!0})," mistyrose (#ffe4e1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffe4b5/000000?text=+",alt:"#ffe4b5"}))," ",(0,l.kt)("color",{moccasin:!0})," moccasin (#ffe4b5)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffdead/000000?text=+",alt:"#ffdead"}))," ",(0,l.kt)("color",{navajowhite:!0})," navajowhite (#ffdead)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/000080/000000?text=+",alt:"#000080"}))," ",(0,l.kt)("color",{navy:!0})," navy (#000080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fdf5e6/000000?text=+",alt:"#fdf5e6"}))," ",(0,l.kt)("color",{oldlace:!0})," oldlace (#fdf5e6)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/808000/000000?text=+",alt:"#808000"}))," ",(0,l.kt)("color",{olive:!0})," olive (#808000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/6b8e23/000000?text=+",alt:"#6b8e23"}))," ",(0,l.kt)("color",{olivedrab:!0})," olivedrab (#6b8e23)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffa500/000000?text=+",alt:"#ffa500"}))," ",(0,l.kt)("color",{orange:!0})," orange (#ffa500)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff4500/000000?text=+",alt:"#ff4500"}))," ",(0,l.kt)("color",{orangered:!0})," orangered (#ff4500)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/da70d6/000000?text=+",alt:"#da70d6"}))," ",(0,l.kt)("color",{orchid:!0})," orchid (#da70d6)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/eee8aa/000000?text=+",alt:"#eee8aa"}))," ",(0,l.kt)("color",{palegoldenrod:!0})," palegoldenrod (#eee8aa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/98fb98/000000?text=+",alt:"#98fb98"}))," ",(0,l.kt)("color",{palegreen:!0})," palegreen (#98fb98)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/afeeee/000000?text=+",alt:"#afeeee"}))," ",(0,l.kt)("color",{paleturquoise:!0})," paleturquoise (#afeeee)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/db7093/000000?text=+",alt:"#db7093"}))," ",(0,l.kt)("color",{palevioletred:!0})," palevioletred (#db7093)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffefd5/000000?text=+",alt:"#ffefd5"}))," ",(0,l.kt)("color",{papayawhip:!0})," papayawhip (#ffefd5)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffdab9/000000?text=+",alt:"#ffdab9"}))," ",(0,l.kt)("color",{peachpuff:!0})," peachpuff (#ffdab9)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/cd853f/000000?text=+",alt:"#cd853f"}))," ",(0,l.kt)("color",{peru:!0})," peru (#cd853f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffc0cb/000000?text=+",alt:"#ffc0cb"}))," ",(0,l.kt)("color",{pink:!0})," pink (#ffc0cb)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/dda0dd/000000?text=+",alt:"#dda0dd"}))," ",(0,l.kt)("color",{plum:!0})," plum (#dda0dd)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/b0e0e6/000000?text=+",alt:"#b0e0e6"}))," ",(0,l.kt)("color",{powderblue:!0})," powderblue (#b0e0e6)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/800080/000000?text=+",alt:"#800080"}))," ",(0,l.kt)("color",{purple:!0})," purple (#800080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/663399/000000?text=+",alt:"#663399"}))," ",(0,l.kt)("color",{rebeccapurple:!0})," rebeccapurple (#663399)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff0000/000000?text=+",alt:"#ff0000"}))," ",(0,l.kt)("color",{red:!0})," red (#ff0000)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/bc8f8f/000000?text=+",alt:"#bc8f8f"}))," ",(0,l.kt)("color",{rosybrown:!0})," rosybrown (#bc8f8f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/4169e1/000000?text=+",alt:"#4169e1"}))," ",(0,l.kt)("color",{royalblue:!0})," royalblue (#4169e1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/8b4513/000000?text=+",alt:"#8b4513"}))," ",(0,l.kt)("color",{saddlebrown:!0})," saddlebrown (#8b4513)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fa8072/000000?text=+",alt:"#fa8072"}))," ",(0,l.kt)("color",{salmon:!0})," salmon (#fa8072)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f4a460/000000?text=+",alt:"#f4a460"}))," ",(0,l.kt)("color",{sandybrown:!0})," sandybrown (#f4a460)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/2e8b57/000000?text=+",alt:"#2e8b57"}))," ",(0,l.kt)("color",{seagreen:!0})," seagreen (#2e8b57)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fff5ee/000000?text=+",alt:"#fff5ee"}))," ",(0,l.kt)("color",{seashell:!0})," seashell (#fff5ee)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/a0522d/000000?text=+",alt:"#a0522d"}))," ",(0,l.kt)("color",{sienna:!0})," sienna (#a0522d)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/c0c0c0/000000?text=+",alt:"#c0c0c0"}))," ",(0,l.kt)("color",{silver:!0})," silver (#c0c0c0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/87ceeb/000000?text=+",alt:"#87ceeb"}))," ",(0,l.kt)("color",{skyblue:!0})," skyblue (#87ceeb)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/6a5acd/000000?text=+",alt:"#6a5acd"}))," ",(0,l.kt)("color",{slateblue:!0})," slateblue (#6a5acd)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/708090/000000?text=+",alt:"#708090"}))," ",(0,l.kt)("color",{slategray:!0})," slategray (#708090)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/fffafa/000000?text=+",alt:"#fffafa"}))," ",(0,l.kt)("color",{snow:!0})," snow (#fffafa)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/00ff7f/000000?text=+",alt:"#00ff7f"}))," ",(0,l.kt)("color",{springgreen:!0})," springgreen (#00ff7f)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/4682b4/000000?text=+",alt:"#4682b4"}))," ",(0,l.kt)("color",{steelblue:!0})," steelblue (#4682b4)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/d2b48c/000000?text=+",alt:"#d2b48c"}))," ",(0,l.kt)("color",{tan:!0})," tan (#d2b48c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/008080/000000?text=+",alt:"#008080"}))," ",(0,l.kt)("color",{teal:!0})," teal (#008080)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/d8bfd8/000000?text=+",alt:"#d8bfd8"}))," ",(0,l.kt)("color",{thistle:!0})," thistle (#d8bfd8)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ff6347/000000?text=+",alt:"#ff6347"}))," ",(0,l.kt)("color",{tomato:!0})," tomato (#ff6347)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/40e0d0/000000?text=+",alt:"#40e0d0"}))," ",(0,l.kt)("color",{turquoise:!0})," turquoise (#40e0d0)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ee82ee/000000?text=+",alt:"#ee82ee"}))," ",(0,l.kt)("color",{violet:!0})," violet (#ee82ee)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f5deb3/000000?text=+",alt:"#f5deb3"}))," ",(0,l.kt)("color",{wheat:!0})," wheat (#f5deb3)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffffff/000000?text=+",alt:"#ffffff"}))," ",(0,l.kt)("color",{white:!0})," white (#ffffff)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/f5f5f5/000000?text=+",alt:"#f5f5f5"}))," ",(0,l.kt)("color",{whitesmoke:!0})," whitesmoke (#f5f5f5)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/ffff00/000000?text=+",alt:"#ffff00"}))," ",(0,l.kt)("color",{yellow:!0})," yellow (#ffff00)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",m({parentName:"li"},{src:"https://placehold.it/15/9acd32/000000?text=+",alt:"#9acd32"}))," ",(0,l.kt)("color",{yellowgreen:!0})," yellowgreen (#9acd32)")))}N.isMDXComponent=!0}}]);