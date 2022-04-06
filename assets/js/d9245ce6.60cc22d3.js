"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9613],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return h},default:function(){return D}});var r=n(5318),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e};const u={id:"Drift",title:"Drift"},f="Drift",m={unversionedId:"Drift",id:"Drift",title:"Drift",description:"ADWIN",source:"@site/../docs/Drift.md",sourceDirName:".",slug:"/Drift",permalink:"/docs/next/Drift",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Drift.md",tags:[],version:"current",lastUpdatedAt:1649189812,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"Drift",title:"Drift"},sidebar:"sdk",previous:{title:"Pipelines = KFP Pipeline SDK = Pipeline Operations +  create pipeline",permalink:"/docs/next/pipeline-opertaions"}},h=[{value:"ADWIN",id:"adwin",children:[],level:2},{value:"DDM",id:"ddm",children:[],level:2},{value:"EDDM",id:"eddm",children:[],level:2},{value:"HDDM_A",id:"hddm_a",children:[],level:2},{value:"HDDM_W",id:"hddm_w",children:[],level:2},{value:"KSWIN",id:"kswin",children:[],level:2},{value:"PAGE HINKLEY",id:"page-hinkley",children:[],level:2},{value:"TARGET DRIFT with pSI",id:"target-drift-with-psi",children:[],level:2},{value:"TARGET DRIFT with CSI",id:"target-drift-with-csi",children:[],level:2}],v={toc:h};function D(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),d),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"drift"}),"Drift"),(0,r.kt)("h2",p({},{id:"adwin"}),"ADWIN"),(0,r.kt)("p",null,"Calculates Drift using the Adaptive Windowing method for concept drift detection."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"\nfrom katonic.drift import ADWIN\nad = ADWIN()\nad.fit(train_set)\npredictions = ad.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value,\n       'Variance of window': float value,\n       'No of Detections': int value,\n       'Mean of widow': float value,\n       'Column name or number': column name}]]\n")),(0,r.kt)("h2",p({},{id:"ddm"}),"DDM"),(0,r.kt)("p",null,"Calculates Drift using the Drift Detection Method (DDM)."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"\nfrom katonic.drift import DDM\nddm = DDM()\nddm.fit(train_set)\npredictions = ddm.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value]]\n\n")),(0,r.kt)("h2",p({},{id:"eddm"}),"EDDM"),(0,r.kt)("p",null,"Calculates Early Drift using the Early Drift Detection Method (EDDM)."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.drift import EDDM\ned = EDDM()\ned.fit(train_set)\npredictions = ddm.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value]]\n\n\n")),(0,r.kt)("h2",p({},{id:"hddm_a"}),"HDDM_A"),(0,r.kt)("p",null,'Calculates Drift using Drift Detection Method based on Hoeffding\'s bounds with moving average-test.\n"""'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"\nfrom katonic.drift import HDDM_A\nhddm_a = HDDM_A()\nhddm_a.fit(train_seet)\npredictions = hddm_a.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value]]\n")),(0,r.kt)("h2",p({},{id:"hddm_w"}),"HDDM_W"),(0,r.kt)("p",null,"Calculates Drift using Drift Detection Method based on Hoeffding's bounds with moving weighted average-test."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.drift import HDDM_W\nhddm_w = HDDM_W()\nhddm_w.fit(train_seet)\npredictions = hddm_w.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value]]\n")),(0,r.kt)("h2",p({},{id:"kswin"}),"KSWIN"),(0,r.kt)("p",null,"Calculates Drift using Kolmogorov-Smirnov Windowing method for concept drift detection."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.drift import KSWIN\nkswin = KSWIN()\nkswin.fit(train_set)\npredictions = kswin.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Is warning': Bool value,\n       'p_value': float value,\n       'Column name or number': column name}]]\n")),(0,r.kt)("h2",p({},{id:"page-hinkley"}),"PAGE HINKLEY"),(0,r.kt)("p",null,"Calculates Drift using Page-Hinkley method for concept drift detection."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.drift import PageHinkley\nph = PageHinkley()\nph.fit(train_set)\npredictions = ph.predict(test_set.iloc[index_no])\n# predictions consist of list of dictionary per columnwise \n# for each column we have \n     [{'Is drift': Bool value,\n       'Threshold': float value,\n       'Sum': float value,\n       'Column name or number': column name}]]\n")),(0,r.kt)("h2",p({},{id:"target-drift-with-psi"}),"TARGET DRIFT with pSI"),(0,r.kt)("p",null,"Calculates the Population Stability Index (PSI) for target variables."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"\nfrom katonic.drift import PSI\npsi = PSI()\npsi.fit(X_train)\npredictions = psi.predict(test_set)\n")),(0,r.kt)("h2",p({},{id:"target-drift-with-csi"}),"TARGET DRIFT with CSI"),(0,r.kt)("p",null,"Calculates CSI score for all the columns fed to model, used when PSI score>=0.2"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"\nfrom katonic.drift import CSI\ncsi = CSI()\ncsi.fit(train_set)\npredictions = psi.predict(test_set)\n## Predictions is a dictionary of columns:psi score\n\n")))}D.isMDXComponent=!0}}]);