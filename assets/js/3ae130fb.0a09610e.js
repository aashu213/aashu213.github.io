"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75471],{35318:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(27378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(i),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},83986:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return f},default:function(){return y}});var n=i(35318),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&p(e,i,t[i]);if(l)for(var i of l(t))u.call(t,i)&&p(e,i,t[i]);return e};const d={id:"pixelratio",title:"PixelRatio"},h=void 0,m={unversionedId:"pixelratio",id:"version-0.61/pixelratio",title:"PixelRatio",description:"PixelRatio class gives access to the device pixel density.",source:"@site/versioned_docs/version-0.61/pixelratio.md",sourceDirName:".",slug:"/pixelratio",permalink:"/docs/0.61/pixelratio",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/pixelratio.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"pixelratio",title:"PixelRatio"},sidebar:"version-0.61/api",previous:{title:"PermissionsAndroid",permalink:"/docs/0.61/permissionsandroid"},next:{title:"\ud83d\udea7 PushNotificationIOS",permalink:"/docs/0.61/pushnotificationios"}},f=[{value:"Fetching a correctly sized image",id:"fetching-a-correctly-sized-image",children:[],level:2},{value:"Pixel grid snapping",id:"pixel-grid-snapping",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>getFontScale()</code>",id:"getfontscale",children:[],level:3},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",children:[],level:3},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",children:[],level:3}],level:2}],g={toc:f};function y(e){var t,i=e,{components:r}=i,p=((e,t)=>{var i={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),p),a(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"PixelRatio class gives access to the device pixel density."),(0,n.kt)("h2",c({},{id:"fetching-a-correctly-sized-image"}),"Fetching a correctly sized image"),(0,n.kt)("p",null,"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"var image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100)\n});\n<Image source={image} style={{ width: 200, height: 100 }} />;\n")),(0,n.kt)("h2",c({},{id:"pixel-grid-snapping"}),"Pixel grid snapping"),(0,n.kt)("p",null,"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd7960 for iPhone 4 or 750\xd71334 for iPhone 6. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."),(0,n.kt)("p",null,"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."),(0,n.kt)("p",null,"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."),(0,n.kt)("p",null,"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."),(0,n.kt)("hr",null),(0,n.kt)("h1",c({},{id:"reference"}),"Reference"),(0,n.kt)("h2",c({},{id:"methods"}),"Methods"),(0,n.kt)("h3",c({},{id:"get"}),(0,n.kt)("inlineCode",{parentName:"h3"},"get()")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static get()\n")),(0,n.kt)("p",null,"Returns the device pixel density. Some examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PixelRatio.get() === 1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"mdpi Android devices")))),(0,n.kt)("li",{parentName:"ul"},"PixelRatio.get() === 1.5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"hdpi Android devices")))),(0,n.kt)("li",{parentName:"ul"},"PixelRatio.get() === 2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iPhone 4, 4S"),(0,n.kt)("li",{parentName:"ul"},"iPhone 5, 5C, 5S"),(0,n.kt)("li",{parentName:"ul"},"iPhone 6, 7, 8"),(0,n.kt)("li",{parentName:"ul"},"iPhone XR"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xhdpi Android devices")))),(0,n.kt)("li",{parentName:"ul"},"PixelRatio.get() === 3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"iPhone 6 Plus, 7 Plus, 8 Plus"),(0,n.kt)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),(0,n.kt)("li",{parentName:"ul"},"Pixel, Pixel 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxhdpi Android devices")))),(0,n.kt)("li",{parentName:"ul"},"PixelRatio.get() === 3.5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Nexus 6"),(0,n.kt)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxxhdpi Android devices"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"getfontscale"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getFontScale()")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static getFontScale()\n")),(0,n.kt)("p",null,"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."),(0,n.kt)("p",null,"If a font scale is not set, this returns the device pixel ratio."),(0,n.kt)("p",null,"Currently this is only implemented on Android and reflects the user preference set in Settings > Display > Font size, on iOS it will always return the default pixel ratio. @platform android"),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"getpixelsizeforlayoutsize"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static getPixelSizeForLayoutSize(layoutSize)\n")),(0,n.kt)("p",null,"Converts a layout size (dp) to pixel size (px)."),(0,n.kt)("p",null,"Guaranteed to return an integer number."),(0,n.kt)("hr",null),(0,n.kt)("h3",c({},{id:"roundtonearestpixel"}),(0,n.kt)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static roundToNearestPixel(layoutSize)\n")),(0,n.kt)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",(0,n.kt)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."))}y.isMDXComponent=!0}}]);