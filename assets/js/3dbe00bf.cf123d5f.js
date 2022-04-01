"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13325],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18959:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return g},default:function(){return y}});var n=a(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&c(e,a,t[a]);return e};const m={id:"images",title:"Images"},p=void 0,h={unversionedId:"images",id:"version-0.60/images",title:"Images",description:"Static Image Resources",source:"@site/versioned_docs/version-0.60/images.md",sourceDirName:".",slug:"/images",permalink:"/docs/0.60/images",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/images.md",tags:[],version:"0.60",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"images",title:"Images"},sidebar:"version-0.60/docs",previous:{title:"Navigating Between Screens",permalink:"/docs/0.60/navigation"},next:{title:"Animations",permalink:"/docs/0.60/animations"}},g=[{value:"Static Image Resources",id:"static-image-resources",children:[],level:2},{value:"Static Non-Image Resources",id:"static-non-image-resources",children:[],level:2},{value:"Images From Hybrid App&#39;s Resources",id:"images-from-hybrid-apps-resources",children:[],level:2},{value:"Network Images",id:"network-images",children:[{value:"Network Requests for Images",id:"network-requests-for-images",children:[],level:3}],level:2},{value:"Uri Data Images",id:"uri-data-images",children:[{value:"Cache Control (iOS Only)",id:"cache-control-ios-only",children:[],level:3}],level:2},{value:"Local Filesystem Images",id:"local-filesystem-images",children:[{value:"Best Camera Roll Image",id:"best-camera-roll-image",children:[],level:3}],level:2},{value:"Why Not Automatically Size Everything?",id:"why-not-automatically-size-everything",children:[],level:2},{value:"Source as an object",id:"source-as-an-object",children:[],level:2},{value:"Background Image via Nesting",id:"background-image-via-nesting",children:[],level:2},{value:"iOS Border Radius Styles",id:"ios-border-radius-styles",children:[],level:2},{value:"Off-thread Decoding",id:"off-thread-decoding",children:[],level:2}],f={toc:g};function y(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},f),c),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"static-image-resources"}),"Static Image Resources"),(0,n.kt)("p",null,"React Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image source={require('./my-icon.png')} />\n")),(0,n.kt)("p",null,"The image name is resolved the same way JS modules are resolved. In the example above, the bundler will look for ",(0,n.kt)("inlineCode",{parentName:"p"},"my-icon.png")," in the same folder as the component that requires it. Also, if you have ",(0,n.kt)("inlineCode",{parentName:"p"},"my-icon.ios.png")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"my-icon.android.png"),", the bundler will pick the correct file for the platform."),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"@2x")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@3x")," suffixes to provide images for different screen densities. If you have the following file structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),".\n\u251c\u2500\u2500 button.js\n\u2514\u2500\u2500 img\n    \u251c\u2500\u2500 check.png\n    \u251c\u2500\u2500 check@2x.png\n    \u2514\u2500\u2500 check@3x.png\n")),(0,n.kt)("p",null,"...and ",(0,n.kt)("inlineCode",{parentName:"p"},"button.js")," code contains:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image source={require('./img/check.png')} />\n")),(0,n.kt)("p",null,"...the bundler will bundle and serve the image corresponding to device's screen density. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"check@2x.png"),", will be used on an iPhone 7, while",(0,n.kt)("inlineCode",{parentName:"p"},"check@3x.png")," will be used on an iPhone 7 Plus or a Nexus 5. If there is no image matching the screen density, the closest best option will be selected."),(0,n.kt)("p",null,"On Windows, you might need to restart the bundler if you add new images to your project."),(0,n.kt)("p",null,"Here are some benefits that you get:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Same system on Android and iOS."),(0,n.kt)("li",{parentName:"ol"},"Images live in the same folder as your JavaScript code. Components are self-contained."),(0,n.kt)("li",{parentName:"ol"},"No global namespace, i.e. you don't have to worry about name collisions."),(0,n.kt)("li",{parentName:"ol"},"Only the images that are actually used will be packaged into your app."),(0,n.kt)("li",{parentName:"ol"},"Adding and changing images doesn't require app recompilation, you can refresh the simulator as you normally do."),(0,n.kt)("li",{parentName:"ol"},"The bundler knows the image dimensions, no need to duplicate it in the code."),(0,n.kt)("li",{parentName:"ol"},"Images can be distributed via ",(0,n.kt)("a",u({parentName:"li"},{href:"https://www.npmjs.com/"}),"npm")," packages.")),(0,n.kt)("p",null,"In order for this to work, the image name in ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," has to be known statically."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"// GOOD\n<Image source={require('./my-icon.png')} />;\n\n// BAD\nvar icon = this.props.active\n  ? 'my-icon-active'\n  : 'my-icon-inactive';\n<Image source={require('./' + icon + '.png')} />;\n\n// GOOD\nvar icon = this.props.active\n  ? require('./my-icon-active.png')\n  : require('./my-icon-inactive.png');\n<Image source={icon} />;\n")),(0,n.kt)("p",null,"Note that image sources required this way include size (width, height) info for the Image. If you need to scale the image dynamically (i.e. via flex), you may need to manually set ",(0,n.kt)("inlineCode",{parentName:"p"},"{ width: undefined, height: undefined }")," on the style attribute."),(0,n.kt)("h2",u({},{id:"static-non-image-resources"}),"Static Non-Image Resources"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," syntax described above can be used to statically include audio, video or document files in your project as well. Most common file types are supported including ",(0,n.kt)("inlineCode",{parentName:"p"},".mp3"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".wav"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".mp4"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".mov"),", ",(0,n.kt)("inlineCode",{parentName:"p"},".html")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".pdf"),". See ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js#L14-L44"}),"bundler defaults")," for the full list."),(0,n.kt)("p",null,"You can add support for other types by adding an ",(0,n.kt)("a",u({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration#assetexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"assetExts")," resolver option")," in your ",(0,n.kt)("a",u({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration"}),"Metro configuration"),"."),(0,n.kt)("p",null,"A caveat is that videos must use absolute positioning instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"flexGrow"),", since size info is not currently passed for non-image assets. This limitation doesn't occur for videos that are linked directly into Xcode or the Assets folder for Android."),(0,n.kt)("h2",u({},{id:"images-from-hybrid-apps-resources"}),"Images From Hybrid App's Resources"),(0,n.kt)("p",null,"If you are building a hybrid app (some UIs in React Native, some UIs in platform code) you can still use images that are already bundled into the app."),(0,n.kt)("p",null,"For images included via Xcode asset catalogs or in the Android drawable folder, use the image name without the extension:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{ uri: 'app_icon' }}\n  style={{ width: 40, height: 40 }}\n/>\n")),(0,n.kt)("p",null,"For images in the Android assets folder, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"asset:/")," scheme:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{ uri: 'asset:/app_icon.png' }}\n  style={{ width: 40, height: 40 }}\n/>\n")),(0,n.kt)("p",null,"These approaches provide no safety checks. It's up to you to guarantee that those images are available in the application. Also you have to specify image dimensions manually."),(0,n.kt)("h2",u({},{id:"network-images"}),"Network Images"),(0,n.kt)("p",null,"Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down. Unlike with static resources, ",(0,n.kt)("em",{parentName:"p"},"you will need to manually specify the dimensions of your image"),". It's highly recommended that you use https as well in order to satisfy ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.60/running-on-device#app-transport-security"}),"App Transport Security")," requirements on iOS."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"// GOOD\n<Image source={{uri: 'https://reactjs.org/logo-og.png'}}\n       style={{width: 400, height: 400}} />\n\n// BAD\n<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />\n")),(0,n.kt)("h3",u({},{id:"network-requests-for-images"}),"Network Requests for Images"),(0,n.kt)("p",null,"If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{\n    uri: 'https://reactjs.org/logo-og.png',\n    method: 'POST',\n    headers: {\n      Pragma: 'no-cache'\n    },\n    body: 'Your Body goes here'\n  }}\n  style={{ width: 400, height: 400 }}\n/>\n")),(0,n.kt)("h2",u({},{id:"uri-data-images"}),"Uri Data Images"),(0,n.kt)("p",null,"Sometimes, you might be getting encoded image data from a REST API call. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"'data:'")," uri scheme to use these images. Same as for network resources, ",(0,n.kt)("em",{parentName:"p"},"you will need to manually specify the dimensions of your image"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This is recommended for very small and dynamic images only, like icons in a list from a DB.")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"// include at least width and height!\n<Image\n  style={{\n    width: 51,\n    height: 51,\n    resizeMode: 'contain'\n  }}\n  source={{\n    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='\n  }}\n/>\n")),(0,n.kt)("h3",u({},{id:"cache-control-ios-only"}),"Cache Control (iOS Only)"),(0,n.kt)("p",null,"In some cases you might only want to display an image if it is already in the local cache, i.e. a low resolution placeholder until a higher resolution is available. In other cases you do not care if the image is outdated and are willing to display an outdated image to save bandwidth. The ",(0,n.kt)("inlineCode",{parentName:"p"},"cache")," source property gives you control over how the network layer interacts with the cache."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default"),": Use the native platforms default strategy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"reload"),": The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"force-cache"),": The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"only-if-cached"),": The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{\n    uri: 'https://reactjs.org/logo-og.png',\n    cache: 'only-if-cached'\n  }}\n  style={{ width: 400, height: 400 }}\n/>\n")),(0,n.kt)("h2",u({},{id:"local-filesystem-images"}),"Local Filesystem Images"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/react-native-cameraroll"}),"CameraRoll")," for an example of using local resources that are outside of ",(0,n.kt)("inlineCode",{parentName:"p"},"Images.xcassets"),"."),(0,n.kt)("h3",u({},{id:"best-camera-roll-image"}),"Best Camera Roll Image"),(0,n.kt)("p",null,"iOS saves multiple sizes for the same image in your Camera Roll, it is very important to pick the one that's as close as possible for performance reasons. You wouldn't want to use the full quality 3264x2448 image as source when displaying a 200x200 thumbnail. If there's an exact match, React Native will pick it, otherwise it's going to use the first one that's at least 50% bigger in order to avoid blur when resizing from a close size. All of this is done by default so you don't have to worry about writing the tedious (and error prone) code to do it yourself."),(0,n.kt)("h2",u({},{id:"why-not-automatically-size-everything"}),"Why Not Automatically Size Everything?"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In the browser")," if you don't give a size to an image, the browser is going to render a 0x0 element, download the image, and then render the image based with the correct size. The big issue with this behavior is that your UI is going to jump all around as images load, this makes for a very bad user experience."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"In React Native")," this behavior is intentionally not implemented. It is more work for the developer to know the dimensions (or aspect ratio) of the remote image in advance, but we believe that it leads to a better user experience. Static images loaded from the app bundle via the ",(0,n.kt)("inlineCode",{parentName:"p"},"require('./my-icon.png')")," syntax ",(0,n.kt)("em",{parentName:"p"},"can be automatically sized")," because their dimensions are available immediately at the time of mounting."),(0,n.kt)("p",null,"For example, the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"require('./my-icon.png')")," might be:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),'{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}\n')),(0,n.kt)("h2",u({},{id:"source-as-an-object"}),"Source as an object"),(0,n.kt)("p",null,"In React Native, one interesting decision is that the ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," attribute is named ",(0,n.kt)("inlineCode",{parentName:"p"},"source")," and doesn't take a string but an object with a ",(0,n.kt)("inlineCode",{parentName:"p"},"uri")," attribute."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Image source={{ uri: 'something.jpg' }} />\n")),(0,n.kt)("p",null,"On the infrastructure side, the reason is that it allows us to attach metadata to this object. For example if you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"require('./my-icon.png')"),", then we add information about its actual location and size (don't rely on this fact, it might change in the future!). This is also future proofing, for example we may want to support sprites at some point, instead of outputting ",(0,n.kt)("inlineCode",{parentName:"p"},"{uri: ...}"),", we can output ",(0,n.kt)("inlineCode",{parentName:"p"},"{uri: ..., crop: {left: 10, top: 50, width: 20, height: 40}}")," and transparently support spriting on all the existing call sites."),(0,n.kt)("p",null,"On the user side, this lets you annotate the object with useful attributes such as the dimension of the image in order to compute the size it's going to be displayed in. Feel free to use it as your data structure to store more information about your image."),(0,n.kt)("h2",u({},{id:"background-image-via-nesting"}),"Background Image via Nesting"),(0,n.kt)("p",null,"A common feature request from developers familiar with the web is ",(0,n.kt)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",(0,n.kt)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),(0,n.kt)("p",null,"You might not want to use ",(0,n.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is basic. Refer to ",(0,n.kt)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.60/imagebackground"}),"documentation")," for more insight, and create your own custom component when needed."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"return (\n  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);\n")),(0,n.kt)("p",null,"Note that you must specify some width and height style attributes."),(0,n.kt)("h2",u({},{id:"ios-border-radius-styles"}),"iOS Border Radius Styles"),(0,n.kt)("p",null,"Please note that the following corner specific, border radius style properties are currently ignored by iOS's image component:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"borderTopLeftRadius")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"borderTopRightRadius")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"borderBottomLeftRadius")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"borderBottomRightRadius"))),(0,n.kt)("h2",u({},{id:"off-thread-decoding"}),"Off-thread Decoding"),(0,n.kt)("p",null,"Image decoding can take more than a frame-worth of time. This is one of the major sources of frame drops on the web because decoding is done in the main thread. In React Native, image decoding is done in a different thread. In practice, you already need to handle the case when the image is not downloaded yet, so displaying the placeholder for a few more frames while it is decoding does not require any code change."))}y.isMDXComponent=!0}}]);