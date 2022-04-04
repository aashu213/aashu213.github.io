"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4677],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),c=o,h=g["".concat(s,".").concat(c)]||g[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},29865:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return g},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return y},default:function(){return f}});var n=a(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&d(e,a,t[a]);return e};const g={id:"signed-apk-android",title:"Publishing to Google Play Store"},c=void 0,h={unversionedId:"signed-apk-android",id:"signed-apk-android",title:"Publishing to Google Play Store",description:"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via Google Play store it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to App Signing by Google Play functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The Signing Your Applications page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle.",source:"@site/../docs/signed-apk-android.md",sourceDirName:".",slug:"/signed-apk-android",permalink:"/docs/next/signed-apk-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/signed-apk-android.md",tags:[],version:"current",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"signed-apk-android",title:"Publishing to Google Play Store"}},y=[{value:"Generating an upload key",id:"generating-an-upload-key",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"macOS",id:"macos",children:[],level:3}],level:2},{value:"Setting up Gradle variables",id:"setting-up-gradle-variables",children:[],level:2},{value:"Adding signing config to your app&#39;s Gradle config",id:"adding-signing-config-to-your-apps-gradle-config",children:[],level:2},{value:"Generating the release AAB",id:"generating-the-release-aab",children:[],level:2},{value:"Testing the release build of your app",id:"testing-the-release-build-of-your-app",children:[],level:2},{value:"Publishing to other stores",id:"publishing-to-other-stores",children:[],level:2},{value:"Enabling Proguard to reduce the size of the APK (optional)",id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional",children:[],level:2},{value:"Migrating old Android React Native apps to use App Signing by Google Play",id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:[],level:2},{value:"Default Permissions",id:"default-permissions",children:[],level:2}],k={toc:y};function f(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),d),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Android requires that all apps be digitally signed with a certificate before they can be installed. In order to distribute your Android application via ",(0,n.kt)("a",u({parentName:"p"},{href:"https://play.google.com/store"}),"Google Play store")," it needs to be signed with a release key that then needs to be used for all future updates. Since 2017 it is possible for Google Play to manage signing releases automatically thanks to ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/studio/publish/app-signing#app-signing-google-play"}),"App Signing by Google Play")," functionality. However, before your application binary is uploaded to Google Play it needs to be signed with an upload key. The ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/tools/publishing/app-signing.html"}),"Signing Your Applications")," page on Android Developers documentation describes the topic in detail. This guide covers the process in brief, as well as lists the steps required to package the JavaScript bundle."),(0,n.kt)("h2",u({},{id:"generating-an-upload-key"}),"Generating an upload key"),(0,n.kt)("p",null,"You can generate a private signing key using ",(0,n.kt)("inlineCode",{parentName:"p"},"keytool"),"."),(0,n.kt)("h3",u({},{id:"windows"}),"Windows"),(0,n.kt)("p",null,"On Windows ",(0,n.kt)("inlineCode",{parentName:"p"},"keytool")," must be run from ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java\\jdkx.x.x_x\\bin"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n")),(0,n.kt)("p",null,"This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"my-upload-key.keystore"),"."),(0,n.kt)("p",null,"The keystore contains a single key, valid for 10000 days. The alias is a name that you will use later when signing your app, so remember to take note of the alias."),(0,n.kt)("h3",u({},{id:"macos"}),"macOS"),(0,n.kt)("p",null,"On macOS, if you're not sure where your JDK bin folder is, then perform the following command to find it:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"/usr/libexec/java_home\n")),(0,n.kt)("p",null,"It will output the directory of the JDK, which will look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home\n")),(0,n.kt)("p",null,"Navigate to that directory by using the command ",(0,n.kt)("inlineCode",{parentName:"p"},"cd /your/jdk/path")," and use the keytool command with sudo permission as shown below."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Remember to keep the keystore file private. In case you've lost upload key or it's been compromised you should ",(0,n.kt)("a",u({parentName:"p"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423#reset"}),"follow these instructions"),".")),(0,n.kt)("h2",u({},{id:"setting-up-gradle-variables"}),"Setting up Gradle variables"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Place the ",(0,n.kt)("inlineCode",{parentName:"li"},"my-upload-key.keystore")," file under the ",(0,n.kt)("inlineCode",{parentName:"li"},"android/app")," directory in your project folder."),(0,n.kt)("li",{parentName:"ol"},"Edit the file ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.gradle/gradle.properties")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"android/gradle.properties"),", and add the following (replace ",(0,n.kt)("inlineCode",{parentName:"li"},"*****")," with the correct keystore password, alias and key password),")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore\nMYAPP_UPLOAD_KEY_ALIAS=my-key-alias\nMYAPP_UPLOAD_STORE_PASSWORD=*****\nMYAPP_UPLOAD_KEY_PASSWORD=*****\n")),(0,n.kt)("p",null,"These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note about using git: Saving the above Gradle variables in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"android/gradle.properties")," prevents them from being checked in to git. You may have to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties")," file in your user's home directory before you can add the variables.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note about security: If you are not keen on storing your passwords in plaintext, and you are running macOS, you can also ",(0,n.kt)("a",u({parentName:"p"},{href:"https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/"}),"store your credentials in the Keychain Access app"),". Then you can skip the two last rows in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.gradle/gradle.properties"),".")),(0,n.kt)("h2",u({},{id:"adding-signing-config-to-your-apps-gradle-config"}),"Adding signing config to your app's Gradle config"),(0,n.kt)("p",null,"The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," in your project folder, and add the signing config,"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-gradle"}),"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n                storeFile file(MYAPP_UPLOAD_STORE_FILE)\n                storePassword MYAPP_UPLOAD_STORE_PASSWORD\n                keyAlias MYAPP_UPLOAD_KEY_ALIAS\n                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n")),(0,n.kt)("h2",u({},{id:"generating-the-release-aab"}),"Generating the release AAB"),(0,n.kt)("p",null,"Run the following in a terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"cd android\n./gradlew bundleRelease\n")),(0,n.kt)("p",null,"Gradle's ",(0,n.kt)("inlineCode",{parentName:"p"},"bundleRelease")," will bundle all the JavaScript needed to run your app into the AAB (",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/guide/app-bundle"}),"Android App Bundle"),"). If you need to change the way the JavaScript bundle and/or drawable resources are bundled (e.g. if you changed the default file/folder names or the general structure of the project), have a look at ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," to see how you can update it to reflect these changes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Make sure ",(0,n.kt)("inlineCode",{parentName:"p"},"gradle.properties")," does not include ",(0,n.kt)("inlineCode",{parentName:"p"},"org.gradle.configureondemand=true")," as that will make the release build skip bundling JS and assets into the app binary.")),(0,n.kt)("p",null,"The generated AAB can be found under ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/build/outputs/bundle/release/app-release.aab"),", and is ready to be uploaded to Google Play."),(0,n.kt)("p",null,"In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our ",(0,n.kt)("a",u({parentName:"p"},{href:"#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play"}),"migration section")," to learn how to perform that configuration change."),(0,n.kt)("h2",u({},{id:"testing-the-release-build-of-your-app"}),"Testing the release build of your app"),(0,n.kt)("p",null,"Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using the following command in the project root:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"npx react-native run-android --variant=release\n")),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"--variant release")," is only available if you've set up signing as described above."),(0,n.kt)("p",null,"You can terminate any running bundler instances, since all your framework and JavaScript code is bundled in the APK's assets."),(0,n.kt)("h2",u({},{id:"publishing-to-other-stores"}),"Publishing to other stores"),(0,n.kt)("p",null,"By default, the generated APK has the native code for both x86 and ARMv7a CPU architectures. This makes it easier to share APKs that run on almost all Android devices. However, this has the downside that there will be some unused native code on any device, leading to unnecessarily bigger APKs."),(0,n.kt)("p",null,"You can create an APK for each CPU by changing the following line in android/app/build.gradle:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'- ndk {\n-   abiFilters "armeabi-v7a", "x86"\n- }\n- def enableSeparateBuildPerCPUArchitecture = false\n+ def enableSeparateBuildPerCPUArchitecture = true\n')),(0,n.kt)("p",null,"Upload both these files to markets which support device targeting, such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/google/play/publishing/multiple-apks.html"}),"Google Play")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html"}),"Amazon AppStore"),", and the users will automatically get the appropriate APK. If you want to upload to other markets, such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://www.apkfiles.com/"}),"APKFiles"),", which do not support multiple APKs for a single app, change the following line as well to create the default universal APK with binaries for both CPUs."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"- universalApk false  // If true, also generate a universal APK\n+ universalApk true  // If true, also generate a universal APK\n")),(0,n.kt)("h2",u({},{id:"enabling-proguard-to-reduce-the-size-of-the-apk-optional"}),"Enabling Proguard to reduce the size of the APK (optional)"),(0,n.kt)("p",null,"Proguard is a tool that can slightly reduce the size of the APK. It does this by stripping parts of the React Native Java bytecode (and its dependencies) that your app is not using."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"IMPORTANT"),": Make sure to thoroughly test your app if you've enabled Proguard. Proguard often requires configuration specific to each native library you're using. See ",(0,n.kt)("inlineCode",{parentName:"p"},"app/proguard-rules.pro"),".")),(0,n.kt)("p",null,"To enable Proguard, edit ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-gradle"}),"/**\n * Run Proguard to shrink the Java bytecode in release builds.\n */\ndef enableProguardInReleaseBuilds = true\n")),(0,n.kt)("h2",u({},{id:"migrating-old-android-react-native-apps-to-use-app-signing-by-google-play"}),"Migrating old Android React Native apps to use App Signing by Google Play"),(0,n.kt)("p",null,"If you are migrating from previous version of React Native chances are your app does not use App Signing by Google Play feature. We recommend you enable that in order to take advantage from things like automatic app splitting. In order to migrate from the old way of signing you need to start by ",(0,n.kt)("a",u({parentName:"p"},{href:"#generating-an-upload-key"}),"generating new upload key")," and then replacing release signing config in ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," to use the upload key instead of the release one (see section about ",(0,n.kt)("a",u({parentName:"p"},{href:"#adding-signing-config-to-your-apps-gradle-config"}),"adding signing config to gradle"),"). Once that's done you should follow the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://support.google.com/googleplay/android-developer/answer/7384423"}),"instructions from Google Play Help website")," in order to send your original release key to Google Play."),(0,n.kt)("h2",u({},{id:"default-permissions"}),"Default Permissions"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission is added to your Android app as pretty much all apps use it. ",(0,n.kt)("inlineCode",{parentName:"p"},"SYSTEM_ALERT_WINDOW")," permission is added to your Android APK in debug mode but it will be removed in production."))}f.isMDXComponent=!0}}]);