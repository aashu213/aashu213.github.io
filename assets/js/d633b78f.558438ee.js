"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4210],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return g},toc:function(){return h},default:function(){return w}});var a=n(35318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"native-components-android",title:"Android Native UI Components"},u=void 0,g={unversionedId:"native-components-android",id:"version-0.68/native-components-android",title:"Android Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/versioned_docs/version-0.68/native-components-android.md",sourceDirName:".",slug:"/native-components-android",permalink:"/docs/native-components-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/native-components-android.md",tags:[],version:"0.68",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"native-components-android",title:"Android Native UI Components"}},h=[{value:"ImageView example",id:"imageview-example",children:[{value:"1. Create the <code>ViewManager</code> subclass",id:"1-create-the-viewmanager-subclass",children:[],level:3},{value:"2. Implement method <code>createViewInstance</code>",id:"2-implement-method-createviewinstance",children:[],level:3},{value:"3. Expose view property setters using <code>@ReactProp</code> (or <code>@ReactPropGroup</code>) annotation",id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation",children:[],level:3},{value:"4. Register the <code>ViewManager</code>",id:"4-register-the-viewmanager",children:[],level:3},{value:"5. Implement the JavaScript module",id:"5-implement-the-javascript-module",children:[],level:3}],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Integration with an Android Fragment example",id:"integration-with-an-android-fragment-example",children:[{value:"1. Create an example custom view",id:"1-create-an-example-custom-view",children:[],level:3},{value:"2. Create a <code>Fragment</code>",id:"2-create-a-fragment",children:[],level:3},{value:"3. Create the <code>ViewManager</code> subclass",id:"3-create-the-viewmanager-subclass",children:[],level:3},{value:"4. Register the <code>ViewManager</code>",id:"4-register-the-viewmanager-1",children:[],level:3},{value:"5. Register the <code>Package</code>",id:"5-register-the-package",children:[],level:3},{value:"6. Implement the JavaScript module",id:"6-implement-the-javascript-module",children:[],level:3}],level:2}],v={toc:h};function w(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),c),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."),(0,a.kt)("p",null,"Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with Android SDK programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageView")," component available in the core React Native library."),(0,a.kt)("h2",m({},{id:"imageview-example"}),"ImageView example"),(0,a.kt)("p",null,"For this example we are going to walk through the implementation requirements to allow the use of ImageViews in JavaScript."),(0,a.kt)("p",null,"Native views are created and manipulated by extending ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager")," or more commonly ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," . A ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," is convenient in this case because it applies common properties such as background color, opacity, and Flexbox layout."),(0,a.kt)("p",null,"These subclasses are essentially singletons - only one instance of each is created by the bridge. They send native views to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeViewHierarchyManager"),", which delegates back to them to set and update the properties of the views as necessary. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManagers")," are also typically the delegates for the views, sending events back to JavaScript via the bridge."),(0,a.kt)("p",null,"To send a view:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the ViewManager subclass."),(0,a.kt)("li",{parentName:"ol"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"createViewInstance")," method"),(0,a.kt)("li",{parentName:"ol"},"Expose view property setters using ",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactPropGroup"),") annotation"),(0,a.kt)("li",{parentName:"ol"},"Register the manager in ",(0,a.kt)("inlineCode",{parentName:"li"},"createViewManagers")," of the applications package."),(0,a.kt)("li",{parentName:"ol"},"Implement the JavaScript module")),(0,a.kt)("h3",m({},{id:"1-create-the-viewmanager-subclass"}),"1. Create the ",(0,a.kt)("inlineCode",{parentName:"h3"},"ViewManager")," subclass"),(0,a.kt)("p",null,"In this example we create view manager class ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageManager")," that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageView"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageView")," is the type of object managed by the manager, this will be the custom native view. Name returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"getName")," is used to reference the native view type from JavaScript."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),'public class ReactImageManager extends SimpleViewManager<ReactImageView> {\n\n  public static final String REACT_CLASS = "RCTImageView";\n  ReactApplicationContext mCallerContext;\n\n  public ReactImageManager(ReactApplicationContext reactContext) {\n    mCallerContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"2-implement-method-createviewinstance"}),"2. Implement method ",(0,a.kt)("inlineCode",{parentName:"h3"},"createViewInstance")),(0,a.kt)("p",null,"Views are created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createViewInstance")," method, the view should initialize itself in its default state, any properties will be set via a follow up call to ",(0,a.kt)("inlineCode",{parentName:"p"},"updateView.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),"  @Override\n  public ReactImageView createViewInstance(ThemedReactContext context) {\n    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);\n  }\n")),(0,a.kt)("h3",m({},{id:"3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"3. Expose view property setters using ",(0,a.kt)("inlineCode",{parentName:"h3"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"h3"},"@ReactPropGroup"),") annotation"),(0,a.kt)("p",null,"Properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"). Setter method should take view to be updated (of the current view type) as a first argument and property value as a second argument. Setter should be declared as a ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," method and should be ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),". Property type sent to JS is determined automatically based on the type of value argument of the setter. The following type of values are currently supported: ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableArray"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableMap"),"."),(0,a.kt)("p",null,"Annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," has one obligatory argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),". Name assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation linked to the setter method is used to reference the property on JS side."),(0,a.kt)("p",null,"Except from ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation may take following optional arguments: ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultInt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),". Those arguments should be of the corresponding type (accordingly ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),') and the value provided will be passed to the setter method in case when the property that the setter is referencing has been removed from the component. Note that "default" values are only provided for primitive types, in case when setter is of some complex type, ',(0,a.kt)("inlineCode",{parentName:"p"},"null")," will be provided as a default value in case when corresponding property gets removed."),(0,a.kt)("p",null,"Setter declaration requirements for methods annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup")," are different than for ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),", please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup")," annotation class docs for more information about it. ",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT!"),' in ReactJS updating the property value will result in setter method call. Note that one of the ways we can update component is by removing properties that have been set before. In that case setter method will be called as well to notify view manager that property has changed. In that case "default" value will be provided (for primitive types "default" can value can be specified using ',(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),", etc. arguments of ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," annotation, for complex types setter will be called with value set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),'  @ReactProp(name = "src")\n  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {\n    view.setSource(sources);\n  }\n\n  @ReactProp(name = "borderRadius", defaultFloat = 0f)\n  public void setBorderRadius(ReactImageView view, float borderRadius) {\n    view.setBorderRadius(borderRadius);\n  }\n\n  @ReactProp(name = ViewProps.RESIZE_MODE)\n  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {\n    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));\n  }\n')),(0,a.kt)("h3",m({},{id:"4-register-the-viewmanager"}),"4. Register the ",(0,a.kt)("inlineCode",{parentName:"h3"},"ViewManager")),(0,a.kt)("p",null,"The final Java step is to register the ViewManager to the application, this happens in a similar way to ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/native-modules-android"}),"Native Modules"),", via the applications package member function ",(0,a.kt)("inlineCode",{parentName:"p"},"createViewManagers.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),"  @Override\n  public List<ViewManager> createViewManagers(\n                            ReactApplicationContext reactContext) {\n    return Arrays.<ViewManager>asList(\n      new ReactImageManager(reactContext)\n    );\n  }\n")),(0,a.kt)("h3",m({},{id:"5-implement-the-javascript-module"}),"5. Implement the JavaScript module"),(0,a.kt)("p",null,"The very final step is to create the JavaScript module that defines the interface layer between Java and JavaScript for the users of your new view. It is recommended for you to document the component interface in this module (e.g. using Flow, TypeScript, or plain old comments)."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:'title="ImageView.js"',title:'"ImageView.js"'}),"import { requireNativeComponent } from 'react-native';\n\n/**\n * Composes `View`.\n *\n * - src: string\n * - borderRadius: number\n * - resizeMode: 'cover' | 'contain' | 'stretch'\n */\nmodule.exports = requireNativeComponent('RCTImageView');\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent")," function takes the name of the native view. Note that if your component needs to do anything more sophisticated (e.g. custom event handling), you should wrap the native component in another React component. This is illustrated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomView")," example below."),(0,a.kt)("h2",m({},{id:"events"}),"Events"),(0,a.kt)("p",null,"So now we know how to expose native view components that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning? When a native event occurs the native code should issue an event to the JavaScript representation of the View, and the two views are linked with the value returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"getId()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),'class MyCustomView extends View {\n   ...\n   public void onReceiveNativeEvent() {\n      WritableMap event = Arguments.createMap();\n      event.putString("message", "MyMessage");\n      ReactContext reactContext = (ReactContext)getContext();\n      reactContext\n          .getJSModule(RCTEventEmitter.class)\n          .receiveEvent(getId(), "topChange", event);\n    }\n}\n')),(0,a.kt)("p",null,"To map the ",(0,a.kt)("inlineCode",{parentName:"p"},"topChange")," event name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," callback prop in JavaScript, register it by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"getExportedCustomBubblingEventTypeConstants")," method in your ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java"}),'public class ReactImageManager extends SimpleViewManager<MyCustomView> {\n    ...\n    public Map getExportedCustomBubblingEventTypeConstants() {\n        return MapBuilder.builder().put(\n            "topChange",\n            MapBuilder.of(\n                "phasedRegistrationNames",\n                MapBuilder.of("bubbled", "onChange")\n            )\n        ).build();\n    }\n}\n')),(0,a.kt)("p",null,"This callback is invoked with the raw event, which we typically process in the wrapper component to make a simpler API:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:'title="MyCustomView.js"',title:'"MyCustomView.js"'}),"class MyCustomView extends React.Component {\n  constructor(props) {\n    super(props);\n    this._onChange = this._onChange.bind(this);\n  }\n  _onChange(event) {\n    if (!this.props.onChangeMessage) {\n      return;\n    }\n    this.props.onChangeMessage(event.nativeEvent.message);\n  }\n  render() {\n    return <RCTMyCustomView {...this.props} onChange={this._onChange} />;\n  }\n}\nMyCustomView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onChangeMessage: PropTypes.func,\n  ...\n};\n\nconst RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`);\n")),(0,a.kt)("h2",m({},{id:"integration-with-an-android-fragment-example"}),"Integration with an Android Fragment example"),(0,a.kt)("p",null,"In order to integrate existing Native UI elements to your React Native app, you might need to use Android Fragments to give you a more granular control over your native component than returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," from your ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),". You will need this if you want to add custom logic that is tied to your view with the help of ",(0,a.kt)("a",m({parentName:"p"},{href:"https://developer.android.com/guide/fragments/lifecycle"}),"lifecycle methods"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"onViewCreated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onPause"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onResume"),". The following steps will show you how to do it:"),(0,a.kt)("h3",m({},{id:"1-create-an-example-custom-view"}),"1. Create an example custom view"),(0,a.kt)("p",null,"First, let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomView")," class which extends ",(0,a.kt)("inlineCode",{parentName:"p"},"FrameLayout")," (the content of this view can be any view that you'd like to render)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java",metastring:'title="CustomView.java"',title:'"CustomView.java"'}),'// replace with your package\npackage com.mypackage;\n\nimport android.content.Context;\nimport android.graphics.Color;\nimport android.widget.FrameLayout;\nimport android.widget.ImageView;\nimport android.widget.TextView;\n\nimport androidx.annotation.NonNull;\n\npublic class CustomView extends FrameLayout {\n  public CustomView(@NonNull Context context) {\n    super(context);\n    // set padding and background color\n    this.setPadding(16,16,16,16);\n    this.setBackgroundColor(Color.parseColor("#5FD3F3"));\n\n    // add default text view\n    TextView text = new TextView(context);\n    text.setText("Welcome to Android Fragments with React Native.");\n    this.addView(text);\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"2-create-a-fragment"}),"2. Create a ",(0,a.kt)("inlineCode",{parentName:"h3"},"Fragment")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java",metastring:'title="MyFragment.java"',title:'"MyFragment.java"'}),"// replace with your package\npackage com.mypackage;\n\nimport android.os.Bundle;\nimport android.view.LayoutInflater;\nimport android.view.View;\nimport android.view.ViewGroup;\nimport androidx.fragment.app.Fragment;\n\n// replace with your view's import\nimport com.mypackage.CustomView;\n\npublic class MyFragment extends Fragment {\n    CustomView customView;\n\n    @Override\n    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {\n        super.onCreateView(inflater, parent, savedInstanceState);\n        customView = new CustomView(this.getContext());\n        return customView; // this CustomView could be any view that you want to render\n    }\n\n    @Override\n    public void onViewCreated(View view, Bundle savedInstanceState) {\n        super.onViewCreated(view, savedInstanceState);\n        // do any logic that should happen in an `onCreate` method, e.g:\n        // customView.onCreate(savedInstanceState);\n    }\n\n    @Override\n    public void onPause() {\n        super.onPause();\n        // do any logic that should happen in an `onPause` method\n        // e.g.: customView.onPause();\n    }\n\n    @Override\n    public void onResume() {\n        super.onResume();\n       // do any logic that should happen in an `onResume` method\n       // e.g.: customView.onResume();\n    }\n\n    @Override\n    public void onDestroy() {\n        super.onDestroy();\n        // do any logic that should happen in an `onDestroy` method\n        // e.g.: customView.onDestroy();\n    }\n}\n")),(0,a.kt)("h3",m({},{id:"3-create-the-viewmanager-subclass"}),"3. Create the ",(0,a.kt)("inlineCode",{parentName:"h3"},"ViewManager")," subclass"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java",metastring:'title="MyViewManager.java"',title:'"MyViewManager.java"'}),'// replace with your package\npackage com.mypackage;\n\nimport android.view.Choreographer;\nimport android.view.View;\nimport android.widget.FrameLayout;\n\nimport androidx.annotation.NonNull;\nimport androidx.annotation.Nullable;\nimport androidx.fragment.app.FragmentActivity;\n\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReadableArray;\nimport com.facebook.react.common.MapBuilder;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.uimanager.annotations.ReactPropGroup;\nimport com.facebook.react.uimanager.ViewGroupManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\n\nimport java.util.Map;\n\npublic class MyViewManager extends ViewGroupManager<FrameLayout> {\n\n  public static final String REACT_CLASS = "MyViewManager";\n  public final int COMMAND_CREATE = 1;\n  private int propWidth;\n  private int propHeight;\n\n  ReactApplicationContext reactContext;\n\n  public MyViewManager(ReactApplicationContext reactContext) {\n    this.reactContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  /**\n   * Return a FrameLayout which will later hold the Fragment\n   */\n  @Override\n  public FrameLayout createViewInstance(ThemedReactContext reactContext) {\n    return new FrameLayout(reactContext);\n  }\n\n  /**\n   * Map the "create" command to an integer\n   */\n  @Nullable\n  @Override\n  public Map<String, Integer> getCommandsMap() {\n    return MapBuilder.of("create", COMMAND_CREATE);\n  }\n\n  /**\n   * Handle "create" command (called from JS) and call createFragment method\n   */\n  @Override\n  public void receiveCommand(\n    @NonNull FrameLayout root,\n    String commandId,\n    @Nullable ReadableArray args\n  ) {\n    super.receiveCommand(root, commandId, args);\n    int reactNativeViewId = args.getInt(0);\n    int commandIdInt = Integer.parseInt(commandId);\n\n    switch (commandIdInt) {\n      case COMMAND_CREATE:\n        createFragment(root, reactNativeViewId);\n        break;\n      default: {}\n    }\n  }\n\n  @ReactPropGroup(names = {"width", "height"}, customType = "Style")\n  public void setStyle(FrameLayout view, int index, Integer value) {\n    if (index == 0) {\n      propWidth = value;\n    }\n\n    if (index == 1) {\n      propHeight = value;\n    }\n  }\n\n  /**\n   * Replace your React Native view with a custom fragment\n   */\n  public void createFragment(FrameLayout root, int reactNativeViewId) {\n    ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId);\n    setupLayout(parentView);\n\n    final MyFragment myFragment = new MyFragment();\n    FragmentActivity activity = (FragmentActivity) reactContext.getCurrentActivity();\n    activity.getSupportFragmentManager()\n            .beginTransaction()\n            .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))\n            .commit();\n  }\n\n  public void setupLayout(View view) {\n    Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {\n      @Override\n      public void doFrame(long frameTimeNanos) {\n        manuallyLayoutChildren(view);\n        view.getViewTreeObserver().dispatchOnGlobalLayout();\n        Choreographer.getInstance().postFrameCallback(this);\n      }\n    });\n  }\n\n  /**\n   * Layout all children properly\n   */\n  public void manuallyLayoutChildren(View view) {\n      // propWidth and propHeight coming from react-native props\n      int width = propWidth;\n      int height = propHeight;\n\n      view.measure(\n              View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),\n              View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));\n\n      view.layout(0, 0, width, height);\n  }\n}\n')),(0,a.kt)("h3",m({},{id:"4-register-the-viewmanager-1"}),"4. Register the ",(0,a.kt)("inlineCode",{parentName:"h3"},"ViewManager")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java",metastring:'title="MyPackage.java"',title:'"MyPackage.java"'}),"// replace with your package\npackage com.mypackage;\n\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\n\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class MyPackage implements ReactPackage {\n\n   @Override\n   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n       return Arrays.<ViewManager>asList(\n            new MyViewManager(reactContext)\n       );\n   }\n\n}\n")),(0,a.kt)("h3",m({},{id:"5-register-the-package"}),"5. Register the ",(0,a.kt)("inlineCode",{parentName:"h3"},"Package")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-java",metastring:'title="MainApplication.java"',title:'"MainApplication.java"'}),"    @Override\n    protected List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n      ...\n      packages.add(new MyPackage());\n      return packages;\n    }\n")),(0,a.kt)("h3",m({},{id:"6-implement-the-javascript-module"}),"6. Implement the JavaScript module"),(0,a.kt)("p",null,"I. Start with custom View manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:'title="MyViewManager.jsx"',title:'"MyViewManager.jsx"'}),"import { requireNativeComponent } from 'react-native';\n\nexport const MyViewManager =\n  requireNativeComponent('MyViewManager');\n")),(0,a.kt)("p",null,"II. Then implement custom View calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:'title="MyView.jsx"',title:'"MyView.jsx"'}),"import React, { useEffect, useRef } from 'react';\nimport { UIManager, findNodeHandle } from 'react-native';\n\nimport { MyViewManager } from './my-view-manager';\n\nconst createFragment = (viewId) =>\n  UIManager.dispatchViewManagerCommand(\n    viewId,\n    // we are calling the 'create' command\n    UIManager.MyViewManager.Commands.create.toString(),\n    [viewId]\n  );\n\nexport const MyView = () => {\n  const ref = useRef(null);\n\n  useEffect(() => {\n    const viewId = findNodeHandle(ref.current);\n    createFragment(viewId);\n  }, []);\n\n  return (\n    <MyViewManager\n      style={{\n        // converts dpi to px, provide desired height\n        height: PixelRatio.getPixelSizeForLayoutSize(200),\n        // converts dpi to px, provide desired width\n        width: PixelRatio.getPixelSizeForLayoutSize(200)\n      }}\n      ref={ref}\n    />\n  );\n};\n")),(0,a.kt)("p",null,"If you want to expose property setters using ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),") annotation see the ",(0,a.kt)("a",m({parentName:"p"},{href:"#imageview-example"}),"ImageView example")," above."))}w.isMDXComponent=!0}}]);