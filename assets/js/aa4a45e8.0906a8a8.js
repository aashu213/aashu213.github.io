"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3860],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return _}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),_=i,u=m["".concat(s,".").concat(_)]||m[_]||p[_]||a;return t?r.createElement(u,o(o({ref:n},c),{},{components:t})):r.createElement(u,o({ref:n},c))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98339:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return _},metadata:function(){return u},toc:function(){return g},default:function(){return b}});var r=t(35318),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&c(e,t,n[t]);return e};const m={id:"Registry-Operation",title:"Registry Operation"},_=void 0,u={unversionedId:"Registry-Operation",id:"version-3.1/Registry-Operation",title:"Registry Operation",description:"Register the model in model registry and transit it to given stage. Staging, Production or Archived.",source:"@site/versioned_docs/version-3.1/Registry-Operation.md",sourceDirName:".",slug:"/Registry-Operation",permalink:"/Registry-Operation",tags:[],version:"3.1",frontMatter:{id:"Registry-Operation",title:"Registry Operation"},sidebar:"sdk",previous:{title:"Experiment Operations",permalink:"/Experiment-Operations"},next:{title:"Feature Store",permalink:"/Feature-Store"}},g=[{value:"Change Stage of the Model",id:"change-stage-of-the-model",children:[],level:2},{value:"View Model Versions",id:"view-model-versions",children:[],level:2},{value:"View Previous Model Version",id:"view-previous-model-version",children:[],level:2},{value:"Delete Model Version",id:"delete-model-version",children:[],level:2},{value:"Upload Model Artifacts",id:"upload-model-artifacts",children:[],level:2},{value:"Load Model",id:"load-model",children:[],level:2},{value:"Delete Registered Model",id:"delete-registered-model",children:[],level:2}],f={toc:g};function b(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},f),c),a(n,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Register the model in model registry and transit it to given stage. Staging, Production or Archived."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result = clf.stagging(\n    run_id='91ebd975b96f40348523ce924976de0b',\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    stage=\"Production\"\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> Registered model 'my-ne2-exp_21_gradient_boosting_classifier_tuned' already exists. Creating a new version of this model...\n> 2022/03/29 12:20:01 INFO mlflow.tracking._model_registry.client: Waiting up to 300 seconds for model version to finish creation.                     Model name: my-ne2-exp_21_gradient_boosting_classifier_tuned, version 9\n> Created version '9' of model 'my-ne2-exp_21_gradient_boosting_classifier_tuned'.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),'> name: "my-ne2-exp_21_gradient_boosting_classifier_tuned"\n> version: "9"\n> creation_timestamp: 1648556401684\n> last_updated_timestamp: 1648556401701\n> user_id: ""\n> current_stage: "Production"\n> description: ""\n> source: "s3://models/21/91ebd975b96f40348523ce924976de0b/artifacts"\n> run_id: "91ebd975b96f40348523ce924976de0b"\n> status: READY\n> run_link: ""\n')),(0,r.kt)("h2",p({},{id:"change-stage-of-the-model"}),"Change Stage of the Model"),(0,r.kt)("p",null,"Register the model in model registry and transit it to given stage. Staging, Production or Archived."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result = clf.stagging(\n    run_id='91ebd975b96f40348523ce924976de0b',\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    stage=\"Staging\"\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> Registered model 'my-ne2-exp_21_gradient_boosting_classifier_tuned' already exists. Creating a new version of this model...\n> 2022/03/29 12:15:47 INFO mlflow.tracking._model_registry.client: Waiting up to 300 seconds for model version to finish creation.                     Model name: my-ne2-exp_21_gradient_boosting_classifier_tuned, version 8\n> Created version '8' of model 'my-ne2-exp_21_gradient_boosting_classifier_tuned'.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),'> name: "my-ne2-exp_21_gradient_boosting_classifier_tuned"\n> version: "8"\n> creation_timestamp: 1648556147683\n> last_updated_timestamp: 1648556147704\n> user_id: ""\n> current_stage: "Staging"\n> description: ""\n> source: "s3://models/21/91ebd975b96f40348523ce924976de0b/artifacts"\n> run_id: "91ebd975b96f40348523ce924976de0b"\n> status: READY\n> run_link: ""\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result = clf.stagging(\n    run_id='91ebd975b96f40348523ce924976de0b',\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    stage=\"Archived\"\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> Registered model 'my-ne2-exp_21_gradient_boosting_classifier_tuned' already exists. Creating a new version of this model...\n> 2022/03/29 12:13:54 INFO mlflow.tracking._model_registry.client: Waiting up to 300 seconds for model version to finish creation.                     Model name: my-ne2-exp_21_gradient_boosting_classifier_tuned, version 7\n> Created version '7' of model 'my-ne2-exp_21_gradient_boosting_classifier_tuned'.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"result\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),'> name: "my-ne2-exp_21_gradient_boosting_classifier_tuned"\n> version: "7"\n> creation_timestamp: 1648556034415\n> last_updated_timestamp: 1648556034431\n> user_id: ""\n> current_stage: "Archived"\n> description: ""\n> source: "s3://models/21/91ebd975b96f40348523ce924976de0b/artifacts"\n> run_id: "91ebd975b96f40348523ce924976de0b"\n> status: READY\n> run_link: ""\n')),(0,r.kt)("h2",p({},{id:"view-model-versions"}),"View Model Versions"),(0,r.kt)("p",null,"This function returns the model versions if match with filter string."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import model_versions\nmodel_versions(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=1\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=2\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=3\n")),(0,r.kt)("h2",p({},{id:"view-previous-model-version"}),"View Previous Model Version"),(0,r.kt)("p",null,"Return list of all previous versions of registered model."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import previous_version\nprevious_version(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> ['1', '2']\n")),(0,r.kt)("h2",p({},{id:"delete-model-version"}),"Delete Model Version"),(0,r.kt)("p",null,"Delete the model versions of given version list."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import model_versions, delete_model_version\ndelete_model_version(\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    ver_list=['1']\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"model_versions(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=2\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=3\n")),(0,r.kt)("h2",p({},{id:"upload-model-artifacts"}),"Upload Model Artifacts"),(0,r.kt)("p",null,"Store joblib objects in model artifact."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import log_data\nlog_data(\n    prun_id='91ebd975b96f40348523ce924976de0b',\n    data_obj=X_test,\n    location='csv'\n)\n")),(0,r.kt)("h2",p({},{id:"load-model"}),"Load Model"),(0,r.kt)("p",null,"Load a model from a model URI."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),'artifacts = "s3://models/21/91ebd975b96f40348523ce924976de0b/artifacts"\nmodel_name = \'my-ne2-exp_21_gradient_boosting_classifier_tuned\'\nlocation = artifacts + "/" + model_name\nmodel = clf.load_model(location)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"model\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> GradientBoostingClassifier(learning_rate=0.9, min_samples_leaf=5, n_estimators=90)\n")),(0,r.kt)("h2",p({},{id:"delete-registered-model"}),"Delete Registered Model"),(0,r.kt)("p",null,"Delete registered model versions."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import delete_model_version\ndelete_model_version(\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    ver_list=['2']\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"model_versions(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-python"}),"> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=3\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=4\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=5\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=6\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=7\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=8\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=9\n")))}b.isMDXComponent=!0}}]);