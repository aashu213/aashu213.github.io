"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35402],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),m=i,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},37785:function(e,t,a){var n=a(27378),i=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;t.Z=function({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},65941:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),i=a(14185),o=a(40488);var r=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(18870),d=a(38944),c="tabItem_c0e5",p=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&f(e,a,t[a]);if(m)for(var a of m(t))v.call(t,a)&&f(e,a,t[a]);return e};function k(e){var t,a,i;const{lazy:o,block:p,defaultValue:m,values:g,groupId:v,className:f}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=g?g:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(i=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(a=k[0])?void 0:a.props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:A}=r(),[R,T]=(0,n.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=v){const e=w[v];null!=e&&e!==R&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==R&&(C(t),T(n),null!=v&&A(v,n))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":p},f)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=y({role:"tab",tabIndex:R===e?0:-1,"aria-selected":R===e,key:e,ref:e=>O.push(e),onKeyDown:j,onFocus:x,onClick:x},a),o={className:(0,d.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":R===e})},u(i,s(o))),null!=t?t:e);var i,o}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===R))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function h(e){const t=(0,i.Z)();return n.createElement(k,y({key:String(t)},e))}},11674:function(e,t,a){var n=a(63445);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",defaultAndroidLanguage:"java",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},77297:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return v},contentTitle:function(){return f},metadata:function(){return y},toc:function(){return k},default:function(){return b}});var n=a(35318),i=a(65941),o=a(37785),r=a(11674),l=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&m(e,a,t[a]);return e};const v={id:"integration-with-android-fragment",title:"Integration with an Android Fragment"},f=void 0,y={unversionedId:"integration-with-android-fragment",id:"version-0.67/integration-with-android-fragment",title:"Integration with an Android Fragment",description:"The guide for Integration with Existing Apps details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity.",source:"@site/versioned_docs/version-0.67/integration-with-android-fragment.md",sourceDirName:".",slug:"/integration-with-android-fragment",permalink:"/docs/0.67/integration-with-android-fragment",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/integration-with-android-fragment.md",tags:[],version:"0.67",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"integration-with-android-fragment",title:"Integration with an Android Fragment"},sidebar:"docs",previous:{title:"Integration with Existing Apps",permalink:"/docs/0.67/integration-with-existing-apps"},next:{title:"Building For TV Devices",permalink:"/docs/0.67/building-for-tv"}},k=[{value:"1. Add React Native to your app",id:"1-add-react-native-to-your-app",children:[],level:3},{value:"2. Integrating your App with a React Native Fragment",id:"2-integrating-your-app-with-a-react-native-fragment",children:[],level:3},{value:"Step 3. Add a FrameLayout for the React Native Fragment",id:"step-3-add-a-framelayout-for-the-react-native-fragment",children:[],level:3},{value:"Step 4. Add a React Native Fragment to the FrameLayout",id:"step-4-add-a-react-native-fragment-to-the-framelayout",children:[],level:3},{value:"Step 5. Test your integration",id:"step-5-test-your-integration",children:[],level:3},{value:"Step 6. Additional setup - Native modules",id:"step-6-additional-setup---native-modules",children:[],level:3}],h={toc:k};function b(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=g(g({},h),m),d(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The guide for ",(0,n.kt)("a",g({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"Integration with Existing Apps")," details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity."),(0,n.kt)("h3",g({},{id:"1-add-react-native-to-your-app"}),"1. Add React Native to your app"),(0,n.kt)("p",null,"Follow the guide for ",(0,n.kt)("a",g({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"Integration with Existing Apps")," until the Code integration section. Continue to follow Step 1. Create an ",(0,n.kt)("inlineCode",{parentName:"p"},"index.android.js")," file and Step 2. Add your React Native code from this section."),(0,n.kt)("h3",g({},{id:"2-integrating-your-app-with-a-react-native-fragment"}),"2. Integrating your App with a React Native Fragment"),(0,n.kt)("p",null,'You can render your React Native component into a Fragment instead of a full screen React Native Activity. The component may be termed a "screen" or "fragment" and it will function in the same manner as an Android fragment, likely containing child components. These components can be placed in a ',(0,n.kt)("inlineCode",{parentName:"p"},"/fragments")," folder and the child components used to compose the fragment can be placed in a ",(0,n.kt)("inlineCode",{parentName:"p"},"/components")," folder."),(0,n.kt)("p",null,"You will need to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"ReactApplication")," interface in your main Application Java/Kotlin class. If you have created a new project from Android Studio with a default activity, you will need to create a new class (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"MyReactApplication.java")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"MyReactApplication.kt"),"). If it is an existing class you can find this main class in your ",(0,n.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. Under the ",(0,n.kt)("inlineCode",{parentName:"p"},"<application />")," tag you should see a property ",(0,n.kt)("inlineCode",{parentName:"p"},"android:name")," e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},'android:name=".MyReactApplication"'),". This value is the class you want to implement and provide the required methods to."),(0,n.kt)("p",null,"Ensure your main Application class implements ReactApplication:"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),"class MyReactApplication: Application(), ReactApplication {...}\n"))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {...}\n")))),(0,n.kt)("p",null,"Override the required methods ",(0,n.kt)("inlineCode",{parentName:"p"},"getUseDeveloperSupport"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"getPackages")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"getReactNativeHost"),":"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),"class MyReactApplication : Application(), ReactApplication {\n    override fun onCreate() {\n        super.onCreate()\n        SoLoader.init(this, false)\n    }\n    private val reactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport() = BuildConfig.DEBUG\n            override fun getPackages(): List<ReactPackage> {\n                val packages = PackageList(this).getPackages().toMutableList()\n                // Packages that cannot be autolinked yet can be added manually here\n                return packages\n            }\n        }\n    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost\n}\n"))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n")))),(0,n.kt)("p",null,"If you are using Android Studio, use Alt + Enter to add all missing imports in your class. Alternatively these are the required imports to include manually:"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),"import android.app.Application\n\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.soloader.SoLoader\n"))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n")))),(0,n.kt)("p",null,'Perform a "Sync Project files with Gradle" operation.'),(0,n.kt)("h3",g({},{id:"step-3-add-a-framelayout-for-the-react-native-fragment"}),"Step 3. Add a FrameLayout for the React Native Fragment"),(0,n.kt)("p",null,"You will now add your React Native Fragment to an Activity. For a new project this Activity will be ",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity")," but it could be any Activity and more fragments can be added to additional Activities as you integrate more React Native components into your app."),(0,n.kt)("p",null,"First add the React Native Fragment to your Activity's layout. For example ",(0,n.kt)("inlineCode",{parentName:"p"},"main_activity.xml")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"res/layouts")," folder."),(0,n.kt)("p",null,"Add a ",(0,n.kt)("inlineCode",{parentName:"p"},"<FrameLayout>")," with an id, width and height. This is the layout you will find and render your React Native Fragment into."),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-xml"}),'<FrameLayout\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n')),(0,n.kt)("h3",g({},{id:"step-4-add-a-react-native-fragment-to-the-framelayout"}),"Step 4. Add a React Native Fragment to the FrameLayout"),(0,n.kt)("p",null,"To add your React Native Fragment to your layout you need to have an Activity. As mentioned in a new project this will be ",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity"),". In this Activity add a button and an event listener. On button click you will render your React Native Fragment."),(0,n.kt)("p",null,"Modify your Activity layout to add the button:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-xml"}),'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n')),(0,n.kt)("p",null,"Now in your Activity class (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity.kt"),") you need to add an ",(0,n.kt)("inlineCode",{parentName:"p"},"OnClickListener")," for the button, instantiate your ",(0,n.kt)("inlineCode",{parentName:"p"},"ReactFragment")," and add it to the frame layout."),(0,n.kt)("p",null,"Add the button field to the top of your Activity:"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),"private lateinit var button: Button\n"))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),"private Button mButton;\n")))),(0,n.kt)("p",null,"Update your Activity's ",(0,n.kt)("inlineCode",{parentName:"p"},"onCreate")," method as follows:"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),'override fun onCreate(savedInstanceState: Bundle) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.main_activity)\n\n    button = findViewById<Button>(R.id.button)\n    button.setOnClickListener {\n        val reactNativeFragment =\n            ReactFragment.Builder()\n                .setComponentName("HelloWorld")\n                .setLaunchOptions(getLaunchOptions("test message"))\n                .build()\n        getSupportFragmentManager()\n            .beginTransaction()\n            .add(R.id.reactNativeFragment, reactNativeFragment)\n            .commit()\n    }\n}\n'))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n')))),(0,n.kt)("p",null,"In the code above ",(0,n.kt)("inlineCode",{parentName:"p"},"Fragment reactNativeFragment = new ReactFragment.Builder()")," creates the ReactFragment and ",(0,n.kt)("inlineCode",{parentName:"p"},"getSupportFragmentManager().beginTransaction().add()")," adds the Fragment to the Frame Layout."),(0,n.kt)("p",null,'If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your ',(0,n.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"index.android.js")," file (it\u2019s the first argument to the AppRegistry.registerComponent() method)."),(0,n.kt)("p",null,"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"getLaunchOptions")," method which will allow you to pass props through to your component. This is optional and you can remove ",(0,n.kt)("inlineCode",{parentName:"p"},"setLaunchOptions")," if you don't need to pass any props."),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),'private fun getLaunchOptions(message: String) = Bundle().apply {\n    putString("message", message)\n}\n\n'))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n')))),(0,n.kt)("p",null,"Add all missing imports in your Activity class. Be careful to use your package\u2019s BuildConfig and not the one from the facebook package! Alternatively these are the required imports to include manually:"),(0,n.kt)(i.Z,{groupId:"android-language",defaultValue:r.Z.defaultAndroidLanguage,values:r.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-kotlin"}),"import android.app.Application\n\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.shell.MainReactPackage\nimport com.facebook.soloader.SoLoader\n\n"))),(0,n.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n")))),(0,n.kt)("p",null,'Perform a "Sync Project files with Gradle" operation.'),(0,n.kt)("h3",g({},{id:"step-5-test-your-integration"}),"Step 5. Test your integration"),(0,n.kt)("p",null,"Make sure you run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," to install your react-native dependencies and run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn native")," to start the metro bundler. Run your android app in Android Studio and it should load the JavaScript code from the development server and display it in your React Native Fragment in the Activity."),(0,n.kt)("h3",g({},{id:"step-6-additional-setup---native-modules"}),"Step 6. Additional setup - Native modules"),(0,n.kt)("p",null,"You may need to call out to existing Java/Kotlin code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here ",(0,n.kt)("a",g({parentName:"p"},{href:"/docs/native-modules-android"}),"native-modules-android")))}b.isMDXComponent=!0}}]);