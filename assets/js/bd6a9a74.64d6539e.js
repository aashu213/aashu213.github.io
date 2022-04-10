"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4433],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=g(t),c=a,u=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return t?r.createElement(u,l(l({ref:n},p),{},{components:t})):r.createElement(u,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var g=2;g<i;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3881:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return _}});var r=t(5318),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))g.call(n,t)&&p(e,t,n[t]);return e};const d={id:"Experiment-Operations",title:"Experiment Operations"},c="Experiment Operations",u={unversionedId:"Experiment-Operations",id:"Experiment-Operations",title:"Experiment Operations",description:"Create a New Experiment",source:"@site/../docs/Experiment-Operations.md",sourceDirName:".",slug:"/Experiment-Operations",permalink:"/next/Experiment-Operations",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Experiment-Operations.md",tags:[],version:"current",lastUpdatedAt:1649545892,formattedLastUpdatedAt:"4/10/2022",frontMatter:{id:"Experiment-Operations",title:"Experiment Operations"},sidebar:"sdk",previous:{title:"Intoduction",permalink:"/next/readmesdk"},next:{title:"Registry Operation",permalink:"/next/Registry-Operation"}},f=[{value:"Create a New Experiment",id:"create-a-new-experiment",children:[],level:2},{value:"Continue Existing Experiment",id:"continue-existing-experiment",children:[],level:2},{value:"Get info of an Existing Experiment",id:"get-info-of-an-existing-experiment",children:[],level:2},{value:"Delete Experiment",id:"delete-experiment",children:[],level:2},{value:"Training &amp; Log a LogisticRegression Model",id:"training--log-a-logisticregression-model",children:[],level:2},{value:"Training &amp; Log a RandomForestClassifier Model",id:"training--log-a-randomforestclassifier-model",children:[],level:2},{value:"Training &amp; Log a AdaBoostClassifier Model",id:"training--log-a-adaboostclassifier-model",children:[],level:2},{value:"Training &amp; Log a GradientBoostingClassifier Model",id:"training--log-a-gradientboostingclassifier-model",children:[],level:2},{value:"Training &amp; Log a CatBoostClassifier Model",id:"training--log-a-catboostclassifier-model",children:[],level:2},{value:"Training &amp; Log a LGBMClassifier Model",id:"training--log-a-lgbmclassifier-model",children:[],level:2},{value:"Training &amp; Log a XGBClassifier Model",id:"training--log-a-xgbclassifier-model",children:[],level:2},{value:"Training &amp; Log a DecisionTreeClassifier Model",id:"training--log-a-decisiontreeclassifier-model",children:[],level:2},{value:"Training &amp; Log a SupportVectorClassifier Model",id:"training--log-a-supportvectorclassifier-model",children:[],level:2},{value:"Training &amp; Log a RidgeClassifier Model",id:"training--log-a-ridgeclassifier-model",children:[],level:2},{value:"Training &amp; Log a KNeighborsClassifier Model",id:"training--log-a-kneighborsclassifier-model",children:[],level:2},{value:"Training &amp; Log a GaussianNB Model",id:"training--log-a-gaussiannb-model",children:[],level:2},{value:"Training &amp; Log a LinearRegression Model",id:"training--log-a-linearregression-model",children:[],level:2},{value:"Training &amp; Log a RidgeRegression Model",id:"training--log-a-ridgeregression-model",children:[],level:2},{value:"Training &amp; Log a LassoRegression Model",id:"training--log-a-lassoregression-model",children:[],level:2},{value:"Training &amp; Log a ElasticNet Model",id:"training--log-a-elasticnet-model",children:[],level:2},{value:"Training &amp; Log a SupportVectorRegressor Model",id:"training--log-a-supportvectorregressor-model",children:[],level:2},{value:"Training &amp; Log a KNNRegressor Model",id:"training--log-a-knnregressor-model",children:[],level:2},{value:"Training &amp; Log a RandomForestRegressor Model",id:"training--log-a-randomforestregressor-model",children:[],level:2},{value:"Training &amp; Log a XGBRegressor Model",id:"training--log-a-xgbregressor-model",children:[],level:2},{value:"Training &amp; Log a CatBoostRegressor Model",id:"training--log-a-catboostregressor-model",children:[],level:2},{value:"Training &amp; Log a LGBMRegressor Model",id:"training--log-a-lgbmregressor-model",children:[],level:2},{value:"Training &amp; Log a GradientBoostingRegressor Model",id:"training--log-a-gradientboostingregressor-model",children:[],level:2},{value:"Training &amp; Log a AdaBoostRegressor Model",id:"training--log-a-adaboostregressor-model",children:[],level:2},{value:"Training &amp; Log a DecisionTreeRegressor Model",id:"training--log-a-decisiontreeregressor-model",children:[],level:2},{value:"Training &amp; Log a ExtraTreeRegressor Model",id:"training--log-a-extratreeregressor-model",children:[],level:2},{value:"log a Classification Model with Hyperparameter Tuning",id:"log-a-classification-model-with-hyperparameter-tuning",children:[],level:2},{value:"log a Regression Model with Hyperparameter Tuning",id:"log-a-regression-model-with-hyperparameter-tuning",children:[],level:2},{value:"log a Custom Model",id:"log-a-custom-model",children:[],level:2},{value:"View Experiment Runs",id:"view-experiment-runs",children:[],level:2},{value:"Delete Experiment Runs",id:"delete-experiment-runs",children:[],level:2}],k={toc:f};function _(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},k),p),i(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"experiment-operations"}),"Experiment Operations"),(0,r.kt)("h2",m({},{id:"create-a-new-experiment"}),"Create a New Experiment"),(0,r.kt)("p",null,"If experiment does not exist, create an experiment with provided name."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.client import set_exp\n\nset_exp(exp_name='exp-name')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"> INFO: 'exp-name' does not exist. Creating a new experiment\n")),(0,r.kt)("h2",m({},{id:"continue-existing-experiment"}),"Continue Existing Experiment"),(0,r.kt)("p",null,"Set given experiment as active experiment."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.client import set_exp\n\nset_exp(exp_name='previous-exp-name')\n")),(0,r.kt)("h2",m({},{id:"get-info-of-an-existing-experiment"}),"Get info of an Existing Experiment"),(0,r.kt)("p",null,"Retrieve an experiment by experiment name from the backend store."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import get_exp\n\nget_exp(exp_name='exp-name')\n")),(0,r.kt)("div",null,(0,r.kt)("table",{border:"1",class:"dataframe"},(0,r.kt)("thead",null,(0,r.kt)("tr",{style:{marginRight:"2em"}},(0,r.kt)("th",null),(0,r.kt)("th",null,"parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_name"),(0,r.kt)("td",null,"exp-name")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"location"),(0,r.kt)("td",null,"s3://models/18")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_id"),(0,r.kt)("td",null,"18")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_stage"),(0,r.kt)("td",null,"active")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"tags"),(0,r.kt)("td",null))))),(0,r.kt)("h2",m({},{id:"delete-experiment"}),"Delete Experiment"),(0,r.kt)("p",null,"To delete any experiment first get the experiment id of that experiment name from get_exp"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.util import get_exp, delete_exp\n\nget_exp(exp_name='previous-exp-name')\n")),(0,r.kt)("div",null,(0,r.kt)("table",{border:"1",class:"dataframe"},(0,r.kt)("thead",null,(0,r.kt)("tr",{style:{marginRight:"2em"}},(0,r.kt)("th",null),(0,r.kt)("th",null,"parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_name"),(0,r.kt)("td",null,"previous-exp-name")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"location"),(0,r.kt)("td",null,"s3://models/17")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_id"),(0,r.kt)("td",null,"17")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"experiment_stage"),(0,r.kt)("td",null,"active")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"tags"),(0,r.kt)("td",null))))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"delete_exp(experiment_id=17)\n")),(0,r.kt)("h2",m({},{id:"training--log-a-logisticregression-model"}),"Training & Log a LogisticRegression Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"LogisticRegression")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.LogisticRegression()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-randomforestclassifier-model"}),"Training & Log a RandomForestClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomForestClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.RandomForestClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-adaboostclassifier-model"}),"Training & Log a AdaBoostClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"AdaBoostClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.AdaBoostClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-gradientboostingclassifier-model"}),"Training & Log a GradientBoostingClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"GradientBoostingClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.GradientBoostingClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-catboostclassifier-model"}),"Training & Log a CatBoostClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"CatBoostClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.CatBoostClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-lgbmclassifier-model"}),"Training & Log a LGBMClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"LGBMClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.LGBMClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-xgbclassifier-model"}),"Training & Log a XGBClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"XGBClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.XGBClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-decisiontreeclassifier-model"}),"Training & Log a DecisionTreeClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionTreeClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.DecisionTreeClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-supportvectorclassifier-model"}),"Training & Log a SupportVectorClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"SupportVectorClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.SupportVectorClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-ridgeclassifier-model"}),"Training & Log a RidgeClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"RidgeClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.RidgeClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-kneighborsclassifier-model"}),"Training & Log a KNeighborsClassifier Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"KNeighborsClassifier")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.KNeighborsClassifier()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-gaussiannb-model"}),"Training & Log a GaussianNB Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"GaussianNB")," classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.GaussianNB()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-linearregression-model"}),"Training & Log a LinearRegression Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"LinearRegression")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.LinearRegression()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-ridgeregression-model"}),"Training & Log a RidgeRegression Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"RidgeRegression")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.RidgeRegression()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-lassoregression-model"}),"Training & Log a LassoRegression Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"LassoRegression")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.LassoRegression()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-elasticnet-model"}),"Training & Log a ElasticNet Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"ElasticNet")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.ElasticNet()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-supportvectorregressor-model"}),"Training & Log a SupportVectorRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"SupportVectorRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.SupportVectorRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-knnregressor-model"}),"Training & Log a KNNRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"KNNRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.KNNRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-randomforestregressor-model"}),"Training & Log a RandomForestRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"RandomForestRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.RandomForestRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-xgbregressor-model"}),"Training & Log a XGBRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"XGBRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.XGBRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-catboostregressor-model"}),"Training & Log a CatBoostRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"CatBoostRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.CatBoostRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-lgbmregressor-model"}),"Training & Log a LGBMRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"LGBMRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.LGBMRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-gradientboostingregressor-model"}),"Training & Log a GradientBoostingRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"GradientBoostingRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.GradientBoostingRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-adaboostregressor-model"}),"Training & Log a AdaBoostRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"AdaBoostRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.AdaBoostRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-decisiontreeregressor-model"}),"Training & Log a DecisionTreeRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"DecisionTreeRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.DecisionTreeRegressor()\n")),(0,r.kt)("h2",m({},{id:"training--log-a-extratreeregressor-model"}),"Training & Log a ExtraTreeRegressor Model"),(0,r.kt)("p",null,"Train & Log a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtraTreeRegressor")," regression model."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.regression import Regressor\n\nreg = Regressor(X_train, X_test, y_train, y_test, exp_name)\nreg.ExtraTreeRegressor()\n")),(0,r.kt)("h2",m({},{id:"log-a-classification-model-with-hyperparameter-tuning"}),"log a Classification Model with Hyperparameter Tuning"),(0,r.kt)("p",null,"Log classification model with Hyperparameter tuning with provided parameter constraints."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"params = {\n  'n_estimators': {\n      'low': 80,\n      'high': 120,\n      'step': 10,\n      'type': 'int'\n      },\n  'criterion':{\n      'values': ['gini', 'entropy'],\n      'type': 'categorical'\n      },\n  'min_samples_split': {\n      'low': 2,\n      'high': 5,\n      'type': 'int'\n      },\n  'min_samples_leaf':{\n      'low': 1,\n      'high': 5,\n      'type': 'int'\n      }\n}\n\nclf.RandomForestClassifier(is_tune=True, n_trials=5, params=params)\n")),(0,r.kt)("h2",m({},{id:"log-a-regression-model-with-hyperparameter-tuning"}),"log a Regression Model with Hyperparameter Tuning"),(0,r.kt)("p",null,"Log regression model with Hyperparameter tuning with provided parameter constraints"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"\nparams = {\n  'n_estimators': {\n      'low': 80,\n      'high': 120,\n      'step': 10,\n      'type': 'int'\n      },\n  'criterion':{\n      'values': ['mse', 'mae'],\n      'type': 'categorical'\n      },\n  'min_samples_split': {\n      'low': 2,\n      'high': 5,\n      'type': 'int'\n      },\n  'min_samples_leaf':{\n      'low': 1,\n      'high': 5,\n      'type': 'int'\n      }\n}\n\nreg.RandomForestRegressor(is_tune=True, params=params)\n")),(0,r.kt)("h2",m({},{id:"log-a-custom-model"}),"log a Custom Model"),(0,r.kt)("p",null,"This function helps to log custom user model.  "),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"import os\nimport mlflow.pyfunc\nfrom katonic.ml.miscellaneous import LogModel\n\nlm = LogModel(experiment_name='custom-model-name')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"> INFO: 'custom-model-name' does not exist. Creating a new experiment\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),'working_dir = os.getcwd() + \'/experiment-docs.ipynb\'\n\nclass AddN(mlflow.pyfunc.PythonModel):\n\n    def __init__(self, n):\n        self.n = n\n\n    def predict(self, context, model_input):\n        return model_input.apply(lambda column: column + self.n)\n\nlm.model_logging(\n    model_name= "add_n",\n    model_type="custom-model",\n    model=AddN(n=5),\n    artifact_path="custom-model-log",\n    current_working_dir=working_dir,\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"> Model artifact logged to: s3://models/19/c31db94b700a4cb79c15e77d77a7f5d5/artifacts/custom-model-name_19_custom-model-log_add_n\n")),(0,r.kt)("h2",m({},{id:"view-experiment-runs"}),"View Experiment Runs"),(0,r.kt)("p",null,"This function search runs and return dataframe of runs. It takes exp_id as input and returns the list of experiment ids."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"import pandas as pd\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/diabetes.csv')\n\nx = df.drop(columns=['Outcome'], axis=1)\ny = df['Outcome']\n\nX_train, X_test, y_train, y_test = train_test_split(x, y, test_size=.20,random_state=98)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, 'my-ne2-exp')\n\ndf_runs = clf.search_runs(exp_id='21')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"df_runs\n")),(0,r.kt)("div",{style:{overflowX:"scroll"}},(0,r.kt)("table",{border:"1",class:"dataframe"},(0,r.kt)("thead",null,(0,r.kt)("tr",{style:{marginRight:"2 + 'em'"}},(0,r.kt)("th",null),(0,r.kt)("th",null,"artifact_uri"),(0,r.kt)("th",null,"end_time"),(0,r.kt)("th",null,"experiment_id"),(0,r.kt)("th",null,"metrics.accuracy_score"),(0,r.kt)("th",null,"metrics.f1_score"),(0,r.kt)("th",null,"metrics.log_loss"),(0,r.kt)("th",null,"metrics.precision_score"),(0,r.kt)("th",null,"metrics.recall"),(0,r.kt)("th",null,"metrics.roc_auc_score"),(0,r.kt)("th",null,"run_id"),(0,r.kt)("th",null,"run_name"),(0,r.kt)("th",null,"start_time"),(0,r.kt)("th",null,"status"),(0,r.kt)("th",null,"tags.mlflow.log-model.history"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"0"),(0,r.kt)("td",null,"s3://models/21/fef2e0533fec42b586251fbe07294ed..."),(0,r.kt)("td",null,"2022-03-29 11:44:24.213000+00:00"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"0.727273"),(0,r.kt)("td",null,"0.562500"),(0,r.kt)("td",null,"9.419765"),(0,r.kt)("td",null,"0.586957"),(0,r.kt)("td",null,"0.54"),(0,r.kt)("td",null,"0.678654"),(0,r.kt)("td",null,"fef2e0533fec42b586251fbe07294ed1"),(0,r.kt)("td",null,"my-ne2-exp_21_decision_tree_classifier"),(0,r.kt)("td",null,"2022-03-29 11:44:22.013000+00:00"),(0,r.kt)("td",null,"FINISHED"),(0,r.kt)("td",null,'["run_id": "fef2e0533fec42b586251fbe07294ed1"...')),(0,r.kt)("tr",null,(0,r.kt)("th",null,"1"),(0,r.kt)("td",null,"s3://models/21/fd7ab366582e4a2b85358bfa24ff62c..."),(0,r.kt)("td",null,"2022-03-29 11:44:20.341000+00:00"),(0,r.kt)("td",null,"21"),(0,r.kt)("td",null,"0.792208"),(0,r.kt)("td",null,"0.636364"),(0,r.kt)("td",null,"7.176941"),(0,r.kt)("td",null,"0.736842"),(0,r.kt)("td",null,"0.56"),(0,r.kt)("td",null,"0.731923"),(0,r.kt)("td",null,"fd7ab366582e4a2b85358bfa24ff62c5"),(0,r.kt)("td",null,"my-ne2-exp_21_logistic_regression"),(0,r.kt)("td",null,"2022-03-29 11:44:18.234000+00:00"),(0,r.kt)("td",null,"FINISHED"),(0,r.kt)("td",null,'["run_id": "fd7ab366582e4a2b85358bfa24ff62c5"...'))))),(0,r.kt)("h2",m({},{id:"delete-experiment-runs"}),"Delete Experiment Runs"),(0,r.kt)("p",null,"Delete experiment runs with the specific run_ids."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"from katonic.ml.classification import Classifier\n\nclf = Classifier(X_train, X_test, y_train, y_test, 'my-ne2-exp')\n\nrun_list = clf.search_runs(exp_id='21')['run_id'].tolist()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"run_list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"> ['fef2e0533fec42b586251fbe07294ed1', 'fd7ab366582e4a2b85358bfa24ff62c5']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"clf.delete_run_by_id(run_ids=['fef2e0533fec42b586251fbe07294ed1'])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-python"}),"> \"['fef2e0533fec42b586251fbe07294ed1'] runids successfully deleted\"\n")))}_.isMDXComponent=!0}}]);