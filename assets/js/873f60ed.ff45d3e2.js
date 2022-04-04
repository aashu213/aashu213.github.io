"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4565],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,k=u["".concat(d,".").concat(h)]||u[h]||p[h]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return h},metadata:function(){return k},toc:function(){return f},default:function(){return b}});var n=r(35318),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const u={id:"refreshcontrol",title:"RefreshControl"},h=void 0,k={unversionedId:"refreshcontrol",id:"refreshcontrol",title:"RefreshControl",description:"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.",source:"@site/../docs/refreshcontrol.md",sourceDirName:".",slug:"/refreshcontrol",permalink:"/docs/next/refreshcontrol",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/refreshcontrol.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"refreshcontrol",title:"RefreshControl"}},f=[{value:"Example",id:"example",children:[],level:2},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[],level:3},{value:'<div class="label required basic">Required</div><strong><code>refreshing</code></strong>',id:"requiredrefreshing",children:[],level:3},{value:'<code>colors</code> <div class="label android">Android</div>',id:"colors-android",children:[],level:3},{value:'<code>enabled</code> <div class="label android">Android</div>',id:"enabled-android",children:[],level:3},{value:"<code>onRefresh</code>",id:"onrefresh",children:[],level:3},{value:'<code>progressBackgroundColor</code> <div class="label android">Android</div>',id:"progressbackgroundcolor-android",children:[],level:3},{value:"<code>progressViewOffset</code>",id:"progressviewoffset",children:[],level:3},{value:'<code>size</code> <div class="label android">Android</div>',id:"size-android",children:[],level:3},{value:'<code>tintColor</code> <div class="label ios">iOS</div>',id:"tintcolor-ios",children:[],level:3},{value:'<code>title</code> <div class="label ios">iOS</div>',id:"title-ios",children:[],level:3},{value:'<code>titleColor</code> <div class="label ios">iOS</div>',id:"titlecolor-ios",children:[],level:3}],level:2}],m={toc:f};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},m),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at ",(0,n.kt)("inlineCode",{parentName:"p"},"scrollY: 0"),", swiping down triggers an ",(0,n.kt)("inlineCode",{parentName:"p"},"onRefresh")," event."),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("div",p({},{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20RefreshControl%2C%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20timeout))%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%0A%20%20%20%20%20%20%20%20%20%20%20%20refreshing%3D%7Brefreshing%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onRefresh%3D%7BonRefresh%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"refreshing")," is a controlled prop, this is why it needs to be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"onRefresh")," function otherwise the refresh indicator will stop immediately.")),(0,n.kt)("hr",null),(0,n.kt)("h1",p({},{id:"reference"}),"Reference"),(0,n.kt)("h2",p({},{id:"props"}),"Props"),(0,n.kt)("h3",p({},{id:"view-props"}),(0,n.kt)("a",p({parentName:"h3"},{href:"/docs/next/view#props"}),"View Props")),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"requiredrefreshing"}),(0,n.kt)("div",{class:"label required basic"},"Required"),(0,n.kt)("strong",{parentName:"h3"},(0,n.kt)("inlineCode",{parentName:"strong"},"refreshing"))),(0,n.kt)("p",null,"Whether the view should be indicating an active refresh."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"colors-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"colors")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"The colors (at least one) that will be used to draw the refresh indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"array of ",(0,n.kt)("a",p({parentName:"td"},{href:"/docs/next/colors"}),"colors"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"enabled-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"enabled")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"Whether the pull to refresh functionality is enabled."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"onrefresh"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onRefresh")),(0,n.kt)("p",null,"Called when the view starts refreshing."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"progressbackgroundcolor-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressBackgroundColor")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"The background color of the refresh indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"progressviewoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"progressViewOffset")),(0,n.kt)("p",null,"Progress view top offset."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"0"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"size-android"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("p",null,"Size of the refresh indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'default'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'large'"),")"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"tintcolor-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tintColor")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"The color of the refresh indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"/docs/next/colors"}),"color"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"title-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"title")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"The title displayed under the refresh indicator."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",p({},{id:"titlecolor-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"titleColor")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"The color of the refresh indicator title."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"/docs/next/colors"}),"color"))))))}b.isMDXComponent=!0}}]);