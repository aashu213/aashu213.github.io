"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[31761],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58095:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return g},default:function(){return v}});var a=t(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&c(e,t,n[t]);return e};const m={id:"native-components-ios",title:"Native UI Components"},u=void 0,h={unversionedId:"native-components-ios",id:"version-0.61/native-components-ios",title:"Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/versioned_docs/version-0.61/native-components-ios.md",sourceDirName:".",slug:"/native-components-ios",permalink:"/docs/0.61/native-components-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/native-components-ios.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"native-components-ios",title:"Native UI Components"},sidebar:"version-0.61/docs",previous:{title:"Native Modules",permalink:"/docs/0.61/native-modules-ios"},next:{title:"Linking Libraries",permalink:"/docs/0.61/linking-libraries-ios"}},g=[{value:"iOS MapView example",id:"ios-mapview-example",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Handling multiple native views",id:"handling-multiple-native-views",children:[],level:2},{value:"Styles",id:"styles",children:[],level:2}],w={toc:g};function v(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},w),c),o(n,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."),(0,a.kt)("p",null,"Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with iOS programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"MapView")," component available in the core React Native library."),(0,a.kt)("h2",d({},{id:"ios-mapview-example"}),"iOS MapView example"),(0,a.kt)("p",null,"Let's say we want to add an interactive Map to our app - might as well use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"MKMapView")),", we only need to make it usable from JavaScript."),(0,a.kt)("p",null,"Native views are created and manipulated by subclasses of ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTViewManager"),". These subclasses are similar in function to view controllers, but are essentially singletons - only one instance of each is created by the bridge. They expose native views to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTUIManager"),", which delegates back to them to set and update the properties of the views as necessary. The ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTViewManager"),"s are also typically the delegates for the views, sending events back to JavaScript via the bridge."),(0,a.kt)("p",null,"To expose a view you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subclass ",(0,a.kt)("inlineCode",{parentName:"li"},"RCTViewManager")," to create a manager for your component."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," marker macro."),(0,a.kt)("li",{parentName:"ul"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"-(UIView *)view")," method.")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\n#import <MapKit/MapKit.h>\n\n#import <React/RCTViewManager.h>\n\n@interface RNTMapManager : RCTViewManager\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE(RNTMap)\n\n- (UIView *)view\n{\n  return [[MKMapView alloc] init];\n}\n\n@end\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Do not attempt to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"frame")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," properties on the ",(0,a.kt)("inlineCode",{parentName:"p"},"UIView")," instance that you expose through the ",(0,a.kt)("inlineCode",{parentName:"p"},"-view")," method. React Native will overwrite the values set by your custom class in order to match your JavaScript component's layout props. If you need this granularity of control it might be better to wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"UIView")," instance you want to style in another ",(0,a.kt)("inlineCode",{parentName:"p"},"UIView")," and return the wrapper ",(0,a.kt)("inlineCode",{parentName:"p"},"UIView")," instead. See ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2948"}),"Issue 2948")," for more context."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the example above, we prefixed our class name with ",(0,a.kt)("inlineCode",{parentName:"p"},"RNT"),". Prefixes are used to avoid name collisions with other frameworks. Apple frameworks use two-letter prefixes, and React Native uses ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT")," as a prefix. In order to avoid name collisions, we recommend using a three-letter prefix other than ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT")," in your own classes.")),(0,a.kt)("p",null,"Then you need a little bit of JavaScript to make this a usable React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'\nmodule.exports = requireNativeComponent('RNTMap');\n\n// MyApp.js\n\nimport MapView from './MapView.js';\n\n...\n\nrender() {\n  return <MapView style={{ flex: 1 }} />;\n}\n")),(0,a.kt)("p",null,"Make sure to use ",(0,a.kt)("inlineCode",{parentName:"p"},"RNTMap")," here. We want to require the manager here, which will expose the view of our manager for use in JavaScript."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," When rendering, don't forget to stretch the view, otherwise you'll be staring at a blank screen."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"  render() {\n    return <MapView style={{flex: 1}} />;\n  }\n")),(0,a.kt)("p",null,"This is now a fully-functioning native map view component in JavaScript, complete with pinch-zoom and other native gesture support. We can't really control it from JavaScript yet, though :("),(0,a.kt)("h2",d({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The first thing we can do to make this component more usable is to bridge over some native properties. Let's say we want to be able to disable zooming and specify the visible region. Disabling zoom is a boolean, so we add this one line:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\n")),(0,a.kt)("p",null,"Note that we explicitly specify the type as ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOL")," - React Native uses ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert"),' under the hood to convert all sorts of different data types when talking over the bridge, and bad values will show convenient "RedBox" errors to let you know there is an issue ASAP. When things are straightforward like this, the whole implementation is taken care of for you by this macro.'),(0,a.kt)("p",null,"Now to actually disable zooming, we set the property in JS:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MyApp.js\n<MapView zoomEnabled={false} style={{ flex: 1 }} />\n")),(0,a.kt)("p",null,"To document the properties (and which values they accept) of our MapView component we'll add a wrapper component and document the interface with React ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTypes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\nimport PropTypes from 'prop-types';\nimport React from 'react';\nimport { requireNativeComponent } from 'react-native';\n\nclass MapView extends React.Component {\n  render() {\n    return <RNTMap {...this.props} />;\n  }\n}\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool\n};\n\nvar RNTMap = requireNativeComponent('RNTMap');\n\nmodule.exports = MapView;\n")),(0,a.kt)("p",null,"Now we have a nicely documented wrapper component to work with."),(0,a.kt)("p",null,"Next, let's add the more complex ",(0,a.kt)("inlineCode",{parentName:"p"},"region")," prop. We start by adding the native code:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),"// RNTMapManager.m\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n")),(0,a.kt)("p",null,"Ok, this is more complicated than the ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOL")," case we had before. Now we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"MKCoordinateRegion")," type that needs a conversion function, and we have custom code so that the view will animate when we set the region from JS. Within the function body that we provide, ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," refers to the raw value that has been passed from JS. There is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," variable which gives us access to the manager's view instance, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultView")," that we use to reset the property back to the default value if JS sends us a null sentinel."),(0,a.kt)("p",null,"You could write any conversion function you want for your view - here is the implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"MKCoordinateRegion")," via a category on ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert"),". It uses an already existing category of ReactNative ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTConvert+CoreLocation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),'// RNTMapManager.m\n\n#import "RCTConvert+Mapkit.m"\n\n// RCTConvert+Mapkit.h\n\n#import <MapKit/MapKit.h>\n#import <React/RCTConvert.h>\n#import <CoreLocation/CoreLocation.h>\n#import <React/RCTConvert+CoreLocation.h>\n\n@interface RCTConvert (Mapkit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;\n\n@end\n\n@implementation RCTConvert(MapKit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json\n{\n  json = [self NSDictionary:json];\n  return (MKCoordinateSpan){\n    [self CLLocationDegrees:json[@"latitudeDelta"]],\n    [self CLLocationDegrees:json[@"longitudeDelta"]]\n  };\n}\n\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json\n{\n  return (MKCoordinateRegion){\n    [self CLLocationCoordinate2D:json],\n    [self MKCoordinateSpan:json]\n  };\n}\n\n@end\n')),(0,a.kt)("p",null,'These conversion functions are designed to safely process any JSON that the JS might throw at them by displaying "RedBox" errors and returning standard initialization values when missing keys or other developer errors are encountered.'),(0,a.kt)("p",null,"To finish up support for the ",(0,a.kt)("inlineCode",{parentName:"p"},"region")," prop, we need to document it in ",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n\n  /**\n   * The region to be displayed by the map.\n   *\n   * The region is defined by the center coordinates and the span of\n   * coordinates to display.\n   */\n  region: PropTypes.shape({\n    /**\n     * Coordinates for the center of the map.\n     */\n    latitude: PropTypes.number.isRequired,\n    longitude: PropTypes.number.isRequired,\n\n    /**\n     * Distance between the minimum and the maximum latitude/longitude\n     * to be displayed.\n     */\n    latitudeDelta: PropTypes.number.isRequired,\n    longitudeDelta: PropTypes.number.isRequired,\n  }),\n};\n\n// MyApp.js\n\nrender() {\n  var region = {\n    latitude: 37.48,\n    longitude: -122.16,\n    latitudeDelta: 0.1,\n    longitudeDelta: 0.1,\n  };\n  return (\n    <MapView\n      region={region}\n      zoomEnabled={false}\n      style={{ flex: 1 }}\n    />\n  );\n}\n")),(0,a.kt)("p",null,"Here you can see that the shape of the region is explicit in the JS documentation."),(0,a.kt)("h2",d({},{id:"events"}),"Events"),(0,a.kt)("p",null,"So now we have a native map component that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning to change the visible region?"),(0,a.kt)("p",null,"Until now we've only returned a ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," instance from our manager's ",(0,a.kt)("inlineCode",{parentName:"p"},"-(UIView *)view")," method. We can't add new properties to ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," so we have to create a new subclass from ",(0,a.kt)("inlineCode",{parentName:"p"},"MKMapView")," which we use for our View. We can then add a ",(0,a.kt)("inlineCode",{parentName:"p"},"onRegionChange")," callback on this subclass:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),'// RNTMapView.h\n\n#import <MapKit/MapKit.h>\n\n#import <React/RCTComponent.h>\n\n@interface RNTMapView: MKMapView\n\n@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;\n\n@end\n\n// RNTMapView.m\n\n#import "RNTMapView.h"\n\n@implementation RNTMapView\n\n@end\n')),(0,a.kt)("p",null,"Note that all ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTBubblingEventBlock")," must be prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on"),". Next, declare an event handler property on ",(0,a.kt)("inlineCode",{parentName:"p"},"RNTMapManager"),", make it a delegate for all the views it exposes, and forward events to JS by calling the event handler block from the native view."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec",metastring:"{9,17,31-48}","{9,17,31-48}":!0}),'// RNTMapManager.m\n\n#import <MapKit/MapKit.h>\n#import <React/RCTViewManager.h>\n\n#import "RNTMapView.h"\n#import "RCTConvert+Mapkit.m"\n\n@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE()\n\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\nRCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)\n\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n\n- (UIView *)view\n{\n  RNTMapView *map = [RNTMapView new];\n  map.delegate = self;\n  return map;\n}\n\n#pragma mark MKMapViewDelegate\n\n- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated\n{\n  if (!mapView.onRegionChange) {\n    return;\n  }\n\n  MKCoordinateRegion region = mapView.region;\n  mapView.onRegionChange(@{\n    @"region": @{\n      @"latitude": @(region.center.latitude),\n      @"longitude": @(region.center.longitude),\n      @"latitudeDelta": @(region.span.latitudeDelta),\n      @"longitudeDelta": @(region.span.longitudeDelta),\n    }\n  });\n}\n@end\n')),(0,a.kt)("p",null,"In the delegate method ",(0,a.kt)("inlineCode",{parentName:"p"},"-mapView:regionDidChangeAnimated:")," the event handler block is called on the corresponding view with the region data. Calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"onRegionChange")," event handler block results in calling the same callback prop in JavaScript. This callback is invoked with the raw event, which we typically process in the wrapper component to simplify API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MapView.js\n\nclass MapView extends React.Component {\n  _onRegionChange = (event) => {\n    if (!this.props.onRegionChange) {\n      return;\n    }\n\n    // process raw event...\n    this.props.onRegionChange(event.nativeEvent);\n  };\n  render() {\n    return (\n      <RNTMap\n        {...this.props}\n        onRegionChange={this._onRegionChange}\n      />\n    );\n  }\n}\nMapView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onRegionChange: PropTypes.func,\n  ...\n};\n\n// MyApp.js\n\nclass MyApp extends React.Component {\n  onRegionChange(event) {\n    // Do stuff with event.region.latitude, etc.\n  }\n\n  render() {\n    var region = {\n      latitude: 37.48,\n      longitude: -122.16,\n      latitudeDelta: 0.1,\n      longitudeDelta: 0.1\n    };\n    return (\n      <MapView\n        region={region}\n        zoomEnabled={false}\n        onRegionChange={this.onRegionChange}\n      />\n    );\n  }\n}\n")),(0,a.kt)("h2",d({},{id:"handling-multiple-native-views"}),"Handling multiple native views"),(0,a.kt)("p",null,"A React Native view can have more than one child view in the view tree eg."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"<View>\n  <MyNativeView />\n  <MyNativeView />\n  <Button />\n</View>\n")),(0,a.kt)("p",null,"In this example, the class ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," is a wrapper for a ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeComponent")," and exposes methods, which will be called on the iOS platform. ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," and contains proxy methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeComponent"),"."),(0,a.kt)("p",null,"When the user interacts with the component, like clicking the button, the ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," changes. In this case ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager")," would not know which ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," should be handled and which one should change ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". Below you will find a solution to this problem:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"<View>\n  <MyNativeView ref={this.myNativeReference} />\n  <MyNativeView ref={this.myNativeReference2} />\n  <Button\n    onPress={() => {\n      this.myNativeReference.callNativeMethod();\n    }}\n  />\n</View>\n")),(0,a.kt)("p",null,"Now the above component has a reference to a particular ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," which allows us to use a specific instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView"),". Now the button can control which ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView")," should change its ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),". In this example let's assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," changes ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," contains code as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"class MyNativeView extends React.Component {\n  callNativeMethod = () => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      UIManager.getViewManagerConfig('RNCMyNativeView').Commands\n        .callNativeMethod,\n      []\n    );\n  };\n\n  render() {\n    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," is our custom iOS method which for example changes the ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor")," which is exposed through ",(0,a.kt)("inlineCode",{parentName:"p"},"MyNativeView"),". This method uses ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.dispatchViewManagerCommand")," which needs 3 parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(nonnull NSNumber \\*)reactTag"),"\u200a -\u200a id of react view."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commandID:(NSInteger)commandID"),"\u200a -\u200a Id of the native method that should be called"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commandArgs:(NSArray<id> \\*)commandArgs"),"\u200a -\u200a Args of the native method that we can pass from JS to native.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),'#import <React/RCTViewManager.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTLog.h>\n\nRCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {\n    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {\n        NativeView *view = viewRegistry[reactTag];\n        if (!view || ![view isKindOfClass:[NativeView class]]) {\n            RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);\n            return;\n        }\n        [view callNativeMethod];\n    }];\n\n}\n')),(0,a.kt)("p",null,"Here the ",(0,a.kt)("inlineCode",{parentName:"p"},"callNativeMethod")," is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")," file and contains only one parameter which is ",(0,a.kt)("inlineCode",{parentName:"p"},"(nonnull NSNumber*) reactTag"),". This exported function will find a particular view using ",(0,a.kt)("inlineCode",{parentName:"p"},"addUIBlock")," which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewRegistry")," parameter and returns the component based on ",(0,a.kt)("inlineCode",{parentName:"p"},"reactTag")," allowing it to call the method on the correct component."),(0,a.kt)("h2",d({},{id:"styles"}),"Styles"),(0,a.kt)("p",null,"Since all our native react views are subclasses of ",(0,a.kt)("inlineCode",{parentName:"p"},"UIView"),", most style attributes will work like you would expect out of the box. Some components will want a default style, however, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"UIDatePicker")," which is a fixed size. This default style is important for the layout algorithm to work as expected, but we also want to be able to override the default style when using the component. ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerIOS")," does this by wrapping the native component in an extra view, which has flexible styling, and using a fixed style (which is generated with constants passed in from native) on the inner native component:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// DatePickerIOS.ios.js\n\nimport { UIManager } from 'react-native';\nvar RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;\n...\n  render: function() {\n    return (\n      <View style={this.props.style}>\n        <RCTDatePickerIOS\n          ref={DATEPICKER}\n          style={styles.rkDatePickerIOS}\n          ...\n        />\n      </View>\n    );\n  }\n});\n\nvar styles = StyleSheet.create({\n  rkDatePickerIOS: {\n    height: RCTDatePickerIOSConsts.ComponentHeight,\n    width: RCTDatePickerIOSConsts.ComponentWidth,\n  },\n});\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTDatePickerIOSConsts")," constants are exported from native by grabbing the actual frame of the native component like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-objectivec"}),'// RCTDatePickerManager.m\n\n- (NSDictionary *)constantsToExport\n{\n  UIDatePicker *dp = [[UIDatePicker alloc] init];\n  [dp layoutIfNeeded];\n\n  return @{\n    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),\n    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),\n    @"DatePickerModes": @{\n      @"time": @(UIDatePickerModeTime),\n      @"date": @(UIDatePickerModeDate),\n      @"datetime": @(UIDatePickerModeDateAndTime),\n    }\n  };\n}\n')),(0,a.kt)("p",null,"This guide covered many of the aspects of bridging over custom native components, but there is even more you might need to consider, such as custom hooks for inserting and laying out subviews. If you want to go even deeper, check out the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views"}),"source code")," of some of the implemented components."))}v.isMDXComponent=!0}}]);