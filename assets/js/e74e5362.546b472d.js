"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[19468],{35318:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return c}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69946:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return v},default:function(){return y}});var r=t(35318),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&l(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&l(e,t,n[t]);return e};const u={id:"removing-default-permissions",title:"Removing Default Permissions"},c=void 0,f={unversionedId:"removing-default-permissions",id:"version-0.61/removing-default-permissions",title:"Removing Default Permissions",description:"By default, some permissions are added to your Android APK.",source:"@site/versioned_docs/version-0.61/removing-default-permissions.md",sourceDirName:".",slug:"/removing-default-permissions",permalink:"/docs/0.61/removing-default-permissions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/removing-default-permissions.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"removing-default-permissions",title:"Removing Default Permissions"},sidebar:"version-0.61/docs",previous:{title:"Publishing to Google Play Store",permalink:"/docs/0.61/signed-apk-android"},next:{title:"Using Hermes",permalink:"/docs/0.61/hermes"}},v=[],b={toc:v};function y(e){var n,t=e,{components:i}=t,l=((e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},b),l),o(n,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"By default, some permissions are added to your Android APK."),(0,r.kt)("p",null,"The default permissions that get added are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"android.permission.INTERNET - Required for debug mode."),(0,r.kt)("li",{parentName:"ul"},"android.permission.SYSTEM_ALERT_WINDOW - Required for debug mode."),(0,r.kt)("li",{parentName:"ul"},"android.permission.READ_PHONE_STATE - Not required for debug or production."),(0,r.kt)("li",{parentName:"ul"},"android.permission.WRITE_EXTERNAL_STORAGE - Not required for debug or production."),(0,r.kt)("li",{parentName:"ul"},"android.permission.READ_EXTERNAL_STORAGE - Not required for debug or production.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's start by removing ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_PHONE_STATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WRITE_EXTERNAL_STORAGE"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_EXTERNAL_STORAGE")," from both production and debug APKs, as it is not required in either. These storage permissions are still not needed if ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," module is in use, so it is safe to remove from both production and debug.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Even though these three permissions are not listed in the manifest they get added in. We add the three permissions with ",(0,r.kt)("inlineCode",{parentName:"p"},'tools:node="remove"'),' attribute, to make sure it gets removed during build. Note that the package identifier will be different, for below it is "com.myapp" because the project was created with ',(0,r.kt)("inlineCode",{parentName:"p"},"react-native init myapp"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",m({parentName:"pre"},{className:"language-diff"}),'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.myappid"\n+   xmlns:tools="http://schemas.android.com/tools"\n    >\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />\n\n    <application\n      android:name=".MainApplication"\n      android:label="@string/app_name"\n      android:icon="@mipmap/ic_launcher"\n      android:allowBackup="false"\n      android:theme="@style/AppTheme">\n      <activity\n        android:name=".MainActivity"\n        android:label="@string/app_name"\n        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"\n        android:windowSoftInputMode="adjustResize">\n        <intent-filter>\n            <action android:name="android.intent.action.MAIN" />\n            <category android:name="android.intent.category.LAUNCHER" />\n        </intent-filter>\n      </activity>\n      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />\n    </application>\n\n</manifest>\n')))),(0,r.kt)("p",null,"That's it. We did not remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERNET")," permission as pretty much all apps use it. Now whenever you create a production APK, these 3 permissions will be removed. When you create a debug APK (",(0,r.kt)("inlineCode",{parentName:"p"},"react-native run-android"),") it will install the APK with these permissions added."))}y.isMDXComponent=!0}}]);