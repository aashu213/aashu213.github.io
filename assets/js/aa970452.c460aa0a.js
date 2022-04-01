"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16333],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37785:function(e,t,n){var a=n(27378),i=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(27378),i=n(14185),l=n(40488);var r=function(){const e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(18870),s=n(38944),p="tabItem_c0e5",d=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&g(e,n,t[n]);return e};function v(e){var t,n,i;const{lazy:l,block:d,defaultValue:m,values:k,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=k?k:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),A=(0,o.lx)(b,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(i=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(n=v[0])?void 0:n.props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=r(),[w,D]=(0,a.useState)(y),B=[],{blockElementScrollPositionUntilNextRender:L}=(0,o.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&D(e)}const O=e=>{const t=e.currentTarget,n=B.indexOf(t),a=b[n].value;a!==w&&(L(t),D(a),null!=h&&C(h,a))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=B.indexOf(e.currentTarget)+1;t=B[n]||B[0];break}case"ArrowLeft":{const n=B.indexOf(e.currentTarget)-1;t=B[n]||B[B.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},g)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=f({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>B.push(e),onKeyDown:S,onFocus:O,onClick:O},n),l={className:(0,s.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},u(i,c(l))),null!=t?t:e);var i,l}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,i.Z)();return a.createElement(v,f({key:String(t)},e))}},11674:function(e,t,n){var a=n(63445);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",o=i?"macos":l?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},91777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return h},contentTitle:function(){return g},metadata:function(){return f},toc:function(){return v},default:function(){return A}});var a=n(35318),i=n(65941),l=n(37785),r=n(11674),o=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))c.call(t,n)&&m(e,n,t[n]);return e};const h={id:"linking",title:"Linking"},g=void 0,f={unversionedId:"linking",id:"version-0.62/linking",title:"Linking",description:"Projects with Native Code Only",source:"@site/versioned_docs/version-0.62/linking.md",sourceDirName:".",slug:"/linking",permalink:"/docs/0.62/linking",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/linking.md",tags:[],version:"0.62",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"linking",title:"Linking"},sidebar:"version-0.62/api",previous:{title:"LayoutAnimation",permalink:"/docs/0.62/layoutanimation"},next:{title:"PanResponder",permalink:"/docs/0.62/panresponder"}},v=[{value:"Built-in URL Schemes",id:"built-in-url-schemes",children:[],level:3},{value:"Enabling Deep Links",id:"enabling-deep-links",children:[],level:3},{value:"Handling Deep Links",id:"handling-deep-links",children:[{value:"1. If the app is already open, the app is foregrounded and a Linking event is fired",id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-event-is-fired",children:[],level:4},{value:"2. If the app is not already open, it is opened and the url is passed in as the initialURL",id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl",children:[],level:4}],level:3},{value:"Example",id:"example",children:[{value:"Open Links and Deep Links (Universal Links)",id:"open-links-and-deep-links-universal-links",children:[],level:3},{value:"Open Custom Settings",id:"open-custom-settings",children:[],level:3},{value:"Get the Deep Link",id:"get-the-deep-link",children:[],level:3},{value:"Send Intents (Android)",id:"send-intents-android",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>constructor()</code>",id:"constructor",children:[],level:3},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>openURL()</code>",id:"openurl",children:[],level:3},{value:"<code>canOpenURL()</code>",id:"canopenurl",children:[],level:3},{value:"<code>openSettings()</code>",id:"opensettings",children:[],level:3},{value:"<code>getInitialURL()</code>",id:"getinitialurl",children:[],level:3},{value:"<code>sendIntent()</code>",id:"sendintent",children:[],level:3}],level:2}],b={toc:v};function A(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},b),m),s(t,p({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("div",{class:"banner-native-code-required"},(0,a.kt)("h3",null,"Projects with Native Code Only"),(0,a.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,a.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,a.kt)("a",{href:"http://docs.expo.io/versions/latest/workflow/linking/"},"Linking")," in the Expo documentation for the appropriate alternative.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linking")," gives you a general interface to interact with both incoming and outgoing app links."),(0,a.kt)("p",null,"Every Link (URL) has a URL Scheme, some websites are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," is the URL Scheme. Let's call it scheme for short."),(0,a.kt)("p",null,"In addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", you're likely also familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto")," scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about ",(0,a.kt)("a",k({parentName:"p"},{href:"#built-in-url-schemes"}),"built-in URL")," schemes below."),(0,a.kt)("p",null,"Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a ",(0,a.kt)("strong",{parentName:"p"},"Magic Link")," email from Slack, the ",(0,a.kt)("strong",{parentName:"p"},"Launch Slack")," button is an anchor tag with an href that looks something like: ",(0,a.kt)("inlineCode",{parentName:"p"},"slack://secret/magic-login/other-secret"),". Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to ",(0,a.kt)("a",k({parentName:"p"},{href:"#get-the-deep-link"}),"get the deep link")," into your app."),(0,a.kt)("p",null,"Custom URL scheme isn't the only way to open your application on mobile. You don't want to use a custom URL scheme in links in the email because then the links would be broken on desktop. Instead, you want to use a regular ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," links such as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.myapp.io/records/1234546"),". and on mobile you want that link open your app. Android calls it ",(0,a.kt)("strong",{parentName:"p"},"Deep Links")," (Universal Links - iOS)."),(0,a.kt)("h3",k({},{id:"built-in-url-schemes"}),"Built-in URL Schemes"),(0,a.kt)("p",null,"As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Scheme"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"iOS"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Android"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mailto")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Open mail app, eg: mailto: ",(0,a.kt)("a",k({parentName:"td"},{href:"mailto:support@expo.io"}),"support@expo.io")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"tel")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Open phone app, eg: tel:+123456789"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"sms")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Open SMS app, eg: sms:+123456789"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https")," / ",(0,a.kt)("inlineCode",{parentName:"td"},"http")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Open web browser app, eg: ",(0,a.kt)("a",k({parentName:"td"},{href:"https://expo.io"}),"https://expo.io")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"\u2705")))),(0,a.kt)("h3",k({},{id:"enabling-deep-links"}),"Enabling Deep Links"),(0,a.kt)("p",null,"If you want to enable deep links in your app, please the below guide:"),(0,a.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultPlatform,values:r.Z.platforms,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For instructions on how to add support for deep linking on Android, refer to ",(0,a.kt)("a",k({parentName:"p"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"}),"Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links"),".")),(0,a.kt)("p",null,"If you wish to receive the intent in an existing instance of MainActivity, you may set the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchMode")," of MainActivity to ",(0,a.kt)("inlineCode",{parentName:"p"},"singleTask")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". See ",(0,a.kt)("a",k({parentName:"p"},{href:"http://developer.android.com/guide/topics/manifest/activity-element.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"<activity>"))," documentation for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-xml"}),'<activity\n  android:name=".MainActivity"\n  android:launchMode="singleTask">\n'))),(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," On iOS, you'll need to link ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTLinking")," to your project by following the steps described ",(0,a.kt)("a",k({parentName:"p"},{href:"/docs/0.62/linking-libraries-ios#manual-linking"}),"here"),". If you also want to listen to incoming app links during your app's execution, you'll need to add the following lines to your ",(0,a.kt)("inlineCode",{parentName:"p"},"*AppDelegate.m"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-objectivec"}),"// iOS 9.x or newer\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),(0,a.kt)("p",null,"If you're targeting iOS 8.x or older, you can use the following code instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-objectivec"}),"// iOS 8.x or older\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),(0,a.kt)("p",null,"If your app is using ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html"}),"Universal Links"),", you'll need to add the following code as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-objectivec"}),"- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")))),(0,a.kt)("h3",k({},{id:"handling-deep-links"}),"Handling Deep Links"),(0,a.kt)("p",null,"There are two ways to handle URLs that open your app."),(0,a.kt)("h4",k({},{id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-event-is-fired"}),"1. If the app is already open, the app is foregrounded and a Linking event is fired"),(0,a.kt)("p",null,"You can handle these events with ",(0,a.kt)("inlineCode",{parentName:"p"},"Linking.addEventListener('url', callback)"),"."),(0,a.kt)("h4",k({},{id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl"}),"2. If the app is not already open, it is opened and the url is passed in as the initialURL"),(0,a.kt)("p",null,"You can handle these events with ",(0,a.kt)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," -- it returns a Promise that resolves to the url, if there is one."),(0,a.kt)("hr",null),(0,a.kt)("h2",k({},{id:"example"}),"Example"),(0,a.kt)("h3",k({},{id:"open-links-and-deep-links-universal-links"}),"Open Links and Deep Links (Universal Links)"),(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20supportedURL%20%3D%20%22https%3A%2F%2Fgoogle.com%22%3B%0A%0Aconst%20unsupportedURL%20%3D%20%22slack%3A%2F%2Fopen%3Fteam%3D123456%22%3B%0A%0Aconst%20OpenURLButton%20%3D%20(%7B%20url%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Checking%20if%20the%20link%20is%20supported%20for%20links%20with%20custom%20URL%20scheme.%0A%20%20%20%20const%20supported%20%3D%20await%20Linking.canOpenURL(url)%3B%0A%0A%20%20%20%20if%20(supported)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Opening%20the%20link%20with%20some%20app%2C%20if%20the%20URL%20scheme%20is%20%22http%22%20the%20web%20link%20should%20be%20opened%0A%20%20%20%20%20%20%2F%2F%20by%20some%20browser%20in%20the%20mobile%0A%20%20%20%20%20%20await%20Linking.openURL(url)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20Alert.alert(%60Don't%20know%20how%20to%20open%20this%20URL%3A%20%24%7Burl%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Burl%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BsupportedURL%7D%3EOpen%20Supported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BunsupportedURL%7D%3EOpen%20Unsupported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20App%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",k({},{id:"open-custom-settings"}),"Open Custom Settings"),(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20OpenSettingsButton%20%3D%20(%7B%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Open%20the%20custom%20settings%20if%20the%20app%20has%20one%0A%20%20%20%20await%20Linking.openSettings()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenSettingsButton%3EOpen%20Settings%3C%2FOpenSettingsButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20App%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",k({},{id:"get-the-deep-link"}),"Get the Deep Link"),(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Linking%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0Aconst%20useInitialURL%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Burl%2C%20setUrl%5D%20%3D%20useState(null)%3B%0A%20%20const%20%5Bprocessing%2C%20setProcessing%5D%20%3D%20useState(true)%3B%0A%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20getUrlAsync%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20Get%20the%20deep%20link%20used%20to%20open%20the%20app%0A%20%20%20%20%20%20const%20initialUrl%20%3D%20await%20Linking.getInitialURL()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20The%20setTimeout%20is%20just%20for%20testing%20purpose%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setUrl(initialUrl)%3B%0A%20%20%20%20%20%20%20%20setProcessing(false)%3B%0A%20%20%20%20%20%20%7D%2C%201000)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20getUrlAsync()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%7B%20url%2C%20processing%20%7D%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20url%3A%20initialUrl%2C%20processing%20%7D%20%3D%20useInitialURL()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Bprocessing%0A%20%20%20%20%20%20%20%20%20%20%3F%20%60Processing%20the%20initial%20url%20from%20a%20deep%20link%60%0A%20%20%20%20%20%20%20%20%20%20%3A%20%60The%20deep%20link%20is%3A%20%24%7BinitialUrl%20%7C%7C%20%22None%22%7D%60%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20App%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",k({},{id:"send-intents-android"}),"Send Intents (Android)"),(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20SendIntentButton%20%3D%20(%7B%20action%2C%20extras%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20await%20Linking.sendIntent(action%2C%20extras)%3B%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20Alert.alert(e.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Baction%2C%20extras%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSendIntentButton%20action%3D%22android.intent.action.POWER_USAGE_SUMMARY%22%3E%0A%20%20%20%20%20%20%20%20Power%20Usage%20Summary%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%20%20%3CSendIntentButton%0A%20%20%20%20%20%20%20%20action%3D%22android.settings.APP_NOTIFICATION_SETTINGS%22%0A%20%20%20%20%20%20%20%20extras%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22android.provider.extra.APP_PACKAGE%22%3A%20%22com.facebook.katana%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20App%20Notification%20Settings%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20App%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h1",k({},{id:"reference"}),"Reference"),(0,a.kt)("h2",k({},{id:"methods"}),"Methods"),(0,a.kt)("h3",k({},{id:"constructor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"addEventListener(type, handler);\n")),(0,a.kt)("p",null,"Add a handler to Linking changes by listening to the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," event type and providing the handler."),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"removeEventListener(type, handler);\n")),(0,a.kt)("p",null,"Remove a handler by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," event type and the handler."),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"openurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"openURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"openURL(url);\n")),(0,a.kt)("p",null,"Try to open the given ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," with any of the installed apps."),(0,a.kt)("p",null,'You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android or "',(0,a.kt)("a",k({parentName:"p"},{href:"http://maps.apple.com/?ll=37.484847,-122.148386%22"}),'http://maps.apple.com/?ll=37.484847,-122.148386"')," on iOS), a contact, or any other URL that can be opened with the installed apps."),(0,a.kt)("p",null,"The method returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The URL to open.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check {@code canOpenURL} first.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For web URLs, the protocol ("http://", "https://") must be set accordingly!')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This method may behave differently in a simulator e.g. "tel:" links are not able to be handled in the iOS simulator as there\'s no access to the dialer app.')),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"canopenurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"canOpenURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"canOpenURL(url);\n")),(0,a.kt)("p",null,"Determine whether or not an installed app can handle a given URL."),(0,a.kt)("p",null,"The method returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," will reject on Android if it was impossible to check if the URL can be opened, and on iOS if you didn't add the specific scheme in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," (see bellow)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The URL to open.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For web URLs, the protocol ("http://", "https://") must be set accordingly!')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As of iOS 9, your app needs to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," or canOpenURL will always return false.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This method has limitations on iOS 9+. From ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl"}),"the official Apple documentation"),":")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return false. If the user reinstalls or upgrades the app, iOS resets the limit.")),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"opensettings"}),(0,a.kt)("inlineCode",{parentName:"h3"},"openSettings()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"openSettings();\n")),(0,a.kt)("p",null,"Open the Settings app and displays the app\u2019s custom settings, if it has any."),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"getinitialurl"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getInitialURL()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"getInitialURL();\n")),(0,a.kt)("p",null,"If the app launch was triggered by an app link, it will give the link url, otherwise it will give ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To support deep linking on Android, refer ",(0,a.kt)("a",k({parentName:"p"},{href:"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"}),"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"sendintent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sendIntent()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"sendIntent(action: string, extras?: Array<{key: string, value: string | number | boolean}>)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"@platform android")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Android-Only.")," Launch an Android intent with extras (optional)"))}A.isMDXComponent=!0}}]);