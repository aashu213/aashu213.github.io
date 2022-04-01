"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5289],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return v},default:function(){return w}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"native-components-android",title:"Android Native UI Components"},u=void 0,h={unversionedId:"native-components-android",id:"version-0.63/native-components-android",title:"Android Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/versioned_docs/version-0.63/native-components-android.md",sourceDirName:".",slug:"/native-components-android",permalink:"/docs/0.63/native-components-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/native-components-android.md",tags:[],version:"0.63",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"native-components-android",title:"Android Native UI Components"},sidebar:"version-0.63/docs",previous:{title:"Native Modules NPM Package Setup",permalink:"/docs/0.63/native-modules-setup"},next:{title:"iOS Native UI Components",permalink:"/docs/0.63/native-components-ios"}},v=[{value:"ImageView example",id:"imageview-example",children:[],level:2},{value:"1. Create the <code>ViewManager</code> subclass",id:"1-create-the-viewmanager-subclass",children:[],level:2},{value:"2. Implement method <code>createViewInstance</code>",id:"2-implement-method-createviewinstance",children:[],level:2},{value:"3. Expose view property setters using <code>@ReactProp</code> (or <code>@ReactPropGroup</code>) annotation",id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation",children:[],level:2},{value:"4. Register the <code>ViewManager</code>",id:"4-register-the-viewmanager",children:[],level:2},{value:"5. Implement the JavaScript module",id:"5-implement-the-javascript-module",children:[],level:2}],g={toc:v};function w(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."),(0,a.kt)("p",null,"Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with Android SDK programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageView")," component available in the core React Native library."),(0,a.kt)("h2",d({},{id:"imageview-example"}),"ImageView example"),(0,a.kt)("p",null,"For this example we are going to walk through the implementation requirements to allow the use of ImageViews in JavaScript."),(0,a.kt)("p",null,"Native views are created and manipulated by extending ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager")," or more commonly ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," . A ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," is convenient in this case because it applies common properties such as background color, opacity, and Flexbox layout."),(0,a.kt)("p",null,"These subclasses are essentially singletons - only one instance of each is created by the bridge. They vend native views to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeViewHierarchyManager"),", which delegates back to them to set and update the properties of the views as necessary. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManagers")," are also typically the delegates for the views, sending events back to JavaScript via the bridge."),(0,a.kt)("p",null,"To vend a view:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the ViewManager subclass."),(0,a.kt)("li",{parentName:"ol"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"createViewInstance")," method"),(0,a.kt)("li",{parentName:"ol"},"Expose view property setters using ",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactPropGroup"),") annotation"),(0,a.kt)("li",{parentName:"ol"},"Register the manager in ",(0,a.kt)("inlineCode",{parentName:"li"},"createViewManagers")," of the applications package."),(0,a.kt)("li",{parentName:"ol"},"Implement the JavaScript module")),(0,a.kt)("h2",d({},{id:"1-create-the-viewmanager-subclass"}),"1. Create the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager")," subclass"),(0,a.kt)("p",null,"In this example we create view manager class ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageManager")," that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageView"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageView")," is the type of object managed by the manager, this will be the custom native view. Name returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"getName")," is used to reference the native view type from JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'...\n\npublic class ReactImageManager extends SimpleViewManager<ReactImageView> {\n\n  public static final String REACT_CLASS = "RCTImageView";\n  ReactApplicationContext mCallerContext;\n\n  public ReactImageManager(ReactApplicationContext reactContext) {\n    mCallerContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n')),(0,a.kt)("h2",d({},{id:"2-implement-method-createviewinstance"}),"2. Implement method ",(0,a.kt)("inlineCode",{parentName:"h2"},"createViewInstance")),(0,a.kt)("p",null,"Views are created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createViewInstance")," method, the view should initialize itself in its default state, any properties will be set via a follow up call to ",(0,a.kt)("inlineCode",{parentName:"p"},"updateView.")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),"  @Override\n  public ReactImageView createViewInstance(ThemedReactContext context) {\n    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);\n  }\n")),(0,a.kt)("h2",d({},{id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"3. Expose view property setters using ",(0,a.kt)("inlineCode",{parentName:"h2"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"h2"},"@ReactPropGroup"),") annotation"),(0,a.kt)("p",null,"Properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"). Setter method should take view to be updated (of the current view type) as a first argument and property value as a second argument. Setter should be declared as a ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," method and should be ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),". Property type sent to JS is determined automatically based on the type of value argument of the setter. The following type of values are currently supported: ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableArray"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableMap"),"."),(0,a.kt)("p",null,"Annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," has one obligatory argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),". Name assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation linked to the setter method is used to reference the property on JS side."),(0,a.kt)("p",null,"Except from ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation may take following optional arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultInt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),". Those arguments should be of the corresponding type (accordingly ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),') and the value provided will be passed to the setter method in case when the property that the setter is referencing has been removed from the component. Note that "default" values are only provided for primitive types, in case when setter is of some complex type, ',(0,a.kt)("inlineCode",{parentName:"p"},"null")," will be provided as a default value in case when corresponding property gets removed."),(0,a.kt)("p",null,"Setter declaration requirements for methods annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup")," are different than for ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),", please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup")," annotation class docs for more information about it. ",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT!"),' in ReactJS updating the property value will result in setter method call. Note that one of the ways we can update component is by removing properties that have been set before. In that case setter method will be called as well to notify view manager that property has changed. In that case "default" value will be provided (for primitive types "default" can value can be specified using ',(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),", etc. arguments of ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation, for complex types setter will be called with value set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'  @ReactProp(name = "src")\n  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {\n    view.setSource(sources);\n  }\n\n  @ReactProp(name = "borderRadius", defaultFloat = 0f)\n  public void setBorderRadius(ReactImageView view, float borderRadius) {\n    view.setBorderRadius(borderRadius);\n  }\n\n  @ReactProp(name = ViewProps.RESIZE_MODE)\n  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {\n    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));\n  }\n')),(0,a.kt)("h2",d({},{id:"4-register-the-viewmanager"}),"4. Register the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager")),(0,a.kt)("p",null,"The final Java step is to register the ViewManager to the application, this happens in a similar way to ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.63/native-modules-android"}),"Native Modules"),", via the applications package member function ",(0,a.kt)("inlineCode",{parentName:"p"},"createViewManagers.")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),"  @Override\n  public List<ViewManager> createViewManagers(\n                            ReactApplicationContext reactContext) {\n    return Arrays.<ViewManager>asList(\n      new ReactImageManager(reactContext)\n    );\n  }\n")),(0,a.kt)("h2",d({},{id:"5-implement-the-javascript-module"}),"5. Implement the JavaScript module"),(0,a.kt)("p",null,"The very final step is to create the JavaScript module that defines the interface layer between Java and JavaScript for the users of your new view. It is recommended for you to document the component interface in this module (e.g. using Flow, TypeScript, or plain old comments)."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// ImageView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n/**\n * Composes `View`.\n *\n * - src: string\n * - borderRadius: number\n * - resizeMode: 'cover' | 'contain' | 'stretch'\n */\nmodule.exports = requireNativeComponent('RCTImageView');\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent")," function takes the name of the native view. Note that if your component needs to do anything more sophisticated (e.g. custom event handling), you should wrap the native component in another React component. This is illustrated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomView")," example below."),(0,a.kt)("h1",d({},{id:"events"}),"Events"),(0,a.kt)("p",null,"So now we know how to expose native view components that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning? When a native event occurs the native code should issue an event to the JavaScript representation of the View, and the two views are linked with the value returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"getId()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'class MyCustomView extends View {\n   ...\n   public void onReceiveNativeEvent() {\n      WritableMap event = Arguments.createMap();\n      event.putString("message", "MyMessage");\n      ReactContext reactContext = (ReactContext)getContext();\n      reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(\n          getId(),\n          "topChange",\n          event);\n    }\n}\n')),(0,a.kt)("p",null,"To map the ",(0,a.kt)("inlineCode",{parentName:"p"},"topChange")," event name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," callback prop in JavaScript, register it by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"getExportedCustomBubblingEventTypeConstants")," method in your ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-java"}),'public class ReactImageManager extends SimpleViewManager<MyCustomView> {\n    ...\n    public Map getExportedCustomBubblingEventTypeConstants() {\n        return MapBuilder.builder()\n            .put(\n                "topChange",\n                MapBuilder.of(\n                    "phasedRegistrationNames",\n                    MapBuilder.of("bubbled", "onChange")))\n                    .build();\n    }\n}\n')),(0,a.kt)("p",null,"This callback is invoked with the raw event, which we typically process in the wrapper component to make a simpler API:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"// MyCustomView.js\n\nclass MyCustomView extends React.Component {\n  constructor(props) {\n    super(props);\n    this._onChange = this._onChange.bind(this);\n  }\n  _onChange(event: Event) {\n    if (!this.props.onChangeMessage) {\n      return;\n    }\n    this.props.onChangeMessage(event.nativeEvent.message);\n  }\n  render() {\n    return <RCTMyCustomView {...this.props} onChange={this._onChange} />;\n  }\n}\nMyCustomView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onChangeMessage: PropTypes.func,\n  ...\n};\n\nvar RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`);\n")))}w.isMDXComponent=!0}}]);