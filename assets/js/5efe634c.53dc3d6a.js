"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81180],{35318:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var a=i(27378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return i?a.createElement(h,l(l({ref:t},u),{},{components:i})):a.createElement(h,l({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},10661:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return g},default:function(){return y}});var a=i(35318),n=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,c=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&u(e,i,t[i]);if(o)for(var i of o(t))p.call(t,i)&&u(e,i,t[i]);return e};const d={id:"pixelratio",title:"PixelRatio"},m=void 0,h={unversionedId:"pixelratio",id:"version-0.65/pixelratio",title:"PixelRatio",description:"PixelRatio gives you access to the device's pixel density and font scale.",source:"@site/versioned_docs/version-0.65/pixelratio.md",sourceDirName:".",slug:"/pixelratio",permalink:"/docs/0.65/pixelratio",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/pixelratio.md",tags:[],version:"0.65",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"pixelratio",title:"PixelRatio"},sidebar:"version-0.65/api",previous:{title:"PanResponder",permalink:"/docs/0.65/panresponder"},next:{title:"Platform",permalink:"/docs/0.65/platform"}},g=[{value:"Fetching a correctly sized image",id:"fetching-a-correctly-sized-image",children:[],level:2},{value:"Pixel grid snapping",id:"pixel-grid-snapping",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>getFontScale()</code>",id:"getfontscale",children:[],level:3},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",children:[],level:3},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",children:[],level:3}],level:2}],x={toc:g};function y(e){var t,i=e,{components:n}=i,u=((e,t)=>{var i={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(i[a]=e[a]);return i})(i,["components"]);return(0,a.kt)("wrapper",(t=c(c({},x),u),r(t,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PixelRatio")," gives you access to the device's pixel density and font scale."),(0,a.kt)("h2",c({},{id:"fetching-a-correctly-sized-image"}),"Fetching a correctly sized image"),(0,a.kt)("p",null,"You should get a higher resolution image if you are on a high pixel density device. A good rule of thumb is to multiply the size of the image you display by the pixel ratio."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"var image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100)\n});\n<Image source={image} style={{ width: 200, height: 100 }} />;\n")),(0,a.kt)("h2",c({},{id:"pixel-grid-snapping"}),"Pixel grid snapping"),(0,a.kt)("p",null,"In iOS, you can specify positions and dimensions for elements with arbitrary precision, for example 29.674825. But, ultimately the physical display only have a fixed number of pixels, for example 640\xd71136 for iPhone SE (1st generation) or 828\xd71792 for iPhone 11. iOS tries to be as faithful as possible to the user value by spreading one original pixel into multiple ones to trick the eye. The downside of this technique is that it makes the resulting element look blurry."),(0,a.kt)("p",null,"In practice, we found out that developers do not want this feature and they have to work around it by doing manual rounding in order to avoid having blurry elements. In React Native, we are rounding all the pixels automatically."),(0,a.kt)("p",null,"We have to be careful when to do this rounding. You never want to work with rounded and unrounded values at the same time as you're going to accumulate rounding errors. Having even one rounding error is deadly because a one pixel border may vanish or be twice as big."),(0,a.kt)("p",null,"In React Native, everything in JavaScript and within the layout engine works with arbitrary precision numbers. It's only when we set the position and dimensions of the native element on the main thread that we round. Also, rounding is done relative to the root rather than the parent, again to avoid accumulating rounding errors."),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("div",c({},{className:"snack-player","data-snack-name":"PixelRatio Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Image%2C%20PixelRatio%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20TextInput%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20size%20%3D%2050%3B%0Aconst%20cat%20%3D%20%7B%0A%20%20uri%3A%20%22https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png%22%2C%0A%20%20width%3A%20size%2C%0A%20%20height%3A%20size%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CScrollView%20style%3D%7Bstyles.scrollContainer%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Pixel%20Ratio%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.get()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20Font%20Scale%20is%3A%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.getFontScale()%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOn%20this%20device%20images%20with%20a%20layout%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bsize%7D%20px%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%20source%3D%7Bcat%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3Erequire%20images%20with%20a%20pixel%20width%20of%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BPixelRatio.getPixelSizeForLayoutSize(size)%7D%20px%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7Bcat%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FScrollView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20scrollContainer%3A%20%7B%0A%20%20%20%20flext%3A%201%2C%0A%20%20%20%20marginTop%3A%20%222em%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontSize%3A%2024%2C%0A%20%20%20%20marginBottom%3A%2012%2C%0A%20%20%20%20marginTop%3A%204%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",c({},{id:"reference"}),"Reference"),(0,a.kt)("h2",c({},{id:"methods"}),"Methods"),(0,a.kt)("h3",c({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static get()\n")),(0,a.kt)("p",null,"Returns the device pixel density. Some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"mdpi Android devices")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PixelRatio.get() === 1.5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"hdpi Android devices")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PixelRatio.get() === 2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"iPhone SE, 6S, 7, 8"),(0,a.kt)("li",{parentName:"ul"},"iPhone XR"),(0,a.kt)("li",{parentName:"ul"},"iPhone 11"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xhdpi Android devices")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"iPhone 6S Plus, 7 Plus, 8 Plus"),(0,a.kt)("li",{parentName:"ul"},"iPhone X, XS, XS Max"),(0,a.kt)("li",{parentName:"ul"},"iPhone 11 Pro, 11 Pro Max"),(0,a.kt)("li",{parentName:"ul"},"Pixel, Pixel 2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxhdpi Android devices")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PixelRatio.get() === 3.5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nexus 6"),(0,a.kt)("li",{parentName:"ul"},"Pixel XL, Pixel 2 XL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://material.io/tools/devices/"}),"xxxhdpi Android devices"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"getfontscale"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getFontScale()")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static getFontScale(): number\n")),(0,a.kt)("p",null,"Returns the scaling factor for font sizes. This is the ratio that is used to calculate the absolute font size, so any elements that heavily depend on that should use this to do calculations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on Android value reflects the user preference set in ",(0,a.kt)("strong",{parentName:"li"},"Settings > Display > Font size")),(0,a.kt)("li",{parentName:"ul"},"on iOS value reflects the user preference set in ",(0,a.kt)("strong",{parentName:"li"},"Settings > Display & Brightness > Text Size"),", value can also be updated in ",(0,a.kt)("strong",{parentName:"li"},"Settings > Accessibility > Display & Text Size > Larger Text"))),(0,a.kt)("p",null,"If a font scale is not set, this returns the device pixel ratio."),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"getpixelsizeforlayoutsize"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getPixelSizeForLayoutSize()")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static getPixelSizeForLayoutSize(layoutSize: number): number\n")),(0,a.kt)("p",null,"Converts a layout size (dp) to pixel size (px)."),(0,a.kt)("p",null,"Guaranteed to return an integer number."),(0,a.kt)("hr",null),(0,a.kt)("h3",c({},{id:"roundtonearestpixel"}),(0,a.kt)("inlineCode",{parentName:"h3"},"roundToNearestPixel()")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"static roundToNearestPixel(layoutSize: number): number\n")),(0,a.kt)("p",null,"Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",(0,a.kt)("inlineCode",{parentName:"p"},"PixelRatio.roundToNearestPixel(8.4) = 8.33"),", which corresponds to exactly (8.33 ","*"," 3) = 25 pixels."))}y.isMDXComponent=!0}}]);