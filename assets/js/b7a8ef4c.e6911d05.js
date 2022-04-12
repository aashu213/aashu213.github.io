"use strict";(self.webpackChunkkatonic_dev=self.webpackChunkkatonic_dev||[]).push([[7769],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=d(n),u=i,p=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return n?o.createElement(p,l(l({ref:t},c),{},{components:n})):o.createElement(p,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32136:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return f},default:function(){return y}});var o=n(35318),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))d.call(t,n)&&c(e,n,t[n]);return e};const g={id:"Model-Registry",title:"Model Registry"},u="Model Registry",p={unversionedId:"Model-Registry",id:"version-3.1/Model-Registry",title:"Model Registry",description:"In this section, we will briefly discuss the model registry. Katonic provides built-in model registry functionality so that users can define what stage a particular model is in. The Katonic Model Registry allows for greater collaboration between various teams, letting them all develop and maintain models at various stages in the model life cycle and manage them all in a centralized, organized region. The Katonic Model Registry component is a centralized model store, set of APIs, and UI, to collaboratively manage the full lifecycle of a Model. It provides model lineage (which Katonic experiment and run produced the model), model versioning, stage transitions (for example from staging to production), and annotations.",source:"@site/versioned_docs/version-3.1/Model-Registry.md",sourceDirName:".",slug:"/Model-Registry",permalink:"/Model-Registry",tags:[],version:"3.1",frontMatter:{id:"Model-Registry",title:"Model Registry"},sidebar:"User Guide",previous:{title:"Experiments",permalink:"/Experiments"},next:{title:"Pipelines",permalink:"/Pipelines"}},f=[{value:"SDK Workflow",id:"sdk-workflow",children:[],level:2},{value:"Train and log Model to the Model Registry",id:"train-and-log-model-to-the-model-registry",children:[],level:2},{value:"Fetching an Model from the Model Registry",id:"fetching-an-model-from-the-model-registry",children:[],level:2},{value:"Transitioning an Model\u2019s Stage",id:"transitioning-an-models-stage",children:[],level:2},{value:"Listing and Searching MLflow Models",id:"listing-and-searching-mlflow-models",children:[],level:2},{value:"Archiving an Model",id:"archiving-an-model",children:[],level:2},{value:"Deleting Models",id:"deleting-models",children:[],level:2},{value:"Registering a Custom Model",id:"registering-a-custom-model",children:[],level:2}],h={toc:f};function y(e){var t,i=e,{components:c}=i,g=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(i,["components"]);return(0,o.kt)("wrapper",(t=m(m({},h),g),r(t,l({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("h1",m({},{id:"model-registry"}),"Model Registry"),(0,o.kt)("p",null,"In this section, we will briefly discuss the model registry. Katonic provides built-in model registry functionality so that users can define what stage a particular model is in. The Katonic Model Registry allows for greater collaboration between various teams, letting them all develop and maintain models at various stages in the model life cycle and manage them all in a centralized, organized region. The Katonic Model Registry component is a centralized model store, set of APIs, and UI, to collaboratively manage the full lifecycle of a Model. It provides model lineage (which Katonic experiment and run produced the model), model versioning, stage transitions (for example from staging to production), and annotations."),(0,o.kt)("p",null,"The user is in control of the lifecycle stage changes (experimentation, testing, production) of the models with options between automatic and manual control. The Katonic Model Registry tracks the history of the model and allows for governance in managing who is able to approve changes.\nSome features include\n\u2022\tCentral repository: Register Katonic models to a centralized location.\n\u2022\tModel versioning: Keep track of the version history of models. Now, a model built for a specific task can have several versions.\n\u2022\tModel stage: Model versions have stages to represent the cycle as a whole. Together with model versioning, older model versions can gradually become phased out while the newest versions are sent to staging first, for example.\n\u2022\tCI/CD workflow integration: Monitor changes to the CI/CD pipelines as new versions are registered and have their deployment stages changed. This allows for better governance over the deployment process.\nWith that, let\u2019s look at how you can register your model in Katonic."),(0,o.kt)("p",null,"Concepts:\nThe Model Registry introduces a few concepts that describe and facilitate the full lifecycle of a Model."),(0,o.kt)("p",null,"\u2022\tModel: A Model is created from an experiment or run that is logged with one of the model flavours modeltype<model_flavor> methods. Once logged, this model can then be registered with the Model Registry."),(0,o.kt)("p",null,"\u2022\tRegistered model: Once registered in the Katonic Model Registry, it has a unique name, version, stage, and more."),(0,o.kt)("p",null,"\u2022\tModel Version: A Model is created from an experiment or run that is logged with one of the model flavours modeltype<model_flavor> methods. Once logged, this model can then be registered with the Model Registry."),(0,o.kt)("p",null,"\u2022\tStage: Over the course of the model\u2019s lifecycle, a model evolves\u2014from development to staging to production. They can transition a registered model to one of the stages: Staging, Production or Archived."),(0,o.kt)("p",null,"\u2022\tModel stage transitions: Respond to new changes and events with automation. Training scripts can be automated to train new models automatically and assign them to staging, for example."),(0,o.kt)("p",null,"\u2022\tDescription: The user can annotate the model for the team."),(0,o.kt)("p",null,"\u2022\tActivities: Katonic records a registered model\u2019s activities, providing a history of the model\u2019s stages. "),(0,o.kt)("h1",m({},{id:"table-of-contents"}),"Table of Contents"),(0,o.kt)("p",null,"\u25cf\tConcepts"),(0,o.kt)("p",null,"\u25cf\tModel Registry Workflows"),(0,o.kt)("p",null,"\u25cf\tUI Workflow"),(0,o.kt)("p",null,"\u25cf\tRegistering a Model"),(0,o.kt)("p",null,"\u25cf\tUsing the Model Registry"),(0,o.kt)("p",null,"   o\t API Workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"\u25cf   Train and log Model to the Model Registry\n\n\u25cf   Fetching an MLflow Model from the Model Registry\n\n\u25cf   Transitioning a Model\u2019s Stage\n\n\u25cf   Listing and Searching Models\n\n\u25cf   Archiving an MLflow \n\n\u25cf   Deleting MLflow Models\n\n\u25cf   Registering a Custom Model\n")),(0,o.kt)("p",null,"Before you can add a model to the Model Registry, you must log it using the <model_class>.<model_name>  methods of the corresponding model flavours. Once a model has been logged, you can add, modify, update, transition, or delete model in the Model Registry through the UI or the API.\nUI Workflow"),(0,o.kt)("p",null,"Registering a Model"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Katonic Platform page, select your experiment in the Experiments section.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once Click the any of your experiment, you will see the runs details on the right side."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(44396).Z})," "),(0,o.kt)("ol",m({},{start:3}),(0,o.kt)("li",{parentName:"ol"},"Now click on the any of runs, you want to register, it will take you to new page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(91078).Z})),(0,o.kt)("ol",m({},{start:4}),(0,o.kt)("li",{parentName:"ol"},"Click on the Register model button, on the right bottom side of page. You will see a pop-up window; from there you can register the model into new version or create your register model.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(81619).Z})," "),(0,o.kt)("ol",m({},{start:5}),(0,o.kt)("li",{parentName:"ol"},"Create new version of the model, select the model's name from the drop-down menu. then click on the register button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(99063).Z})," "),(0,o.kt)("ol",m({},{start:6}),(0,o.kt)("li",{parentName:"ol"},"Now you can see the description of new version of the model in the place of Register model button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(74453).Z})," "),(0,o.kt)("p",null,"Using the Model Registry\n\u25cf\tNavigate to the Model Registry page from the Katonic platform. here you can see all your registered models."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(79129).Z})),(0,o.kt)("p",null,"\u25cf\tNow click on your registered model, you will be taken to new page, where you can see all versions of your registered models and their stages."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(69954).Z})),(0,o.kt)("p",null,"\u25cf\tClick any of the version, you can see version details regarding that model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(11107).Z})),(0,o.kt)("p",null,"\u25cf\tOn the version detail page, you can see model version details and the current stage of the model version. Click the Stage drop-down at the top right, to transition the model version to one of the other valid stages."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Untitled",src:n(74070).Z})),(0,o.kt)("p",null,"\u25cf\tYou can further investigate the version, by clicking on the Source Run link, it will take you the run page, where you can find details like metrics,params, model location path etc."),(0,o.kt)("h2",m({},{id:"sdk-workflow"}),"SDK Workflow"),(0,o.kt)("p",null,"An alternative way to interact with Model Registry is using the Katonic SDK. In particular, you can register a model during an experiment run or after all your experiment runs."),(0,o.kt)("h2",m({},{id:"train-and-log-model-to-the-model-registry"}),"Train and log Model to the Model Registry"),(0,o.kt)("p",null,"You can Train and Log your machine learning model, by initiating the model class with your training/test set and experiment name, after that you can call different models to train and log in model registry."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"from katonic.ml.client import set_exp\nfrom katonic.ml.classification import Classifier\nset_exp(exp_name='exp-name')\n\n\n\nclf = Classifier(X_train, X_test, y_train, y_test, exp_name)\nclf.LogisticRegression()\n")),(0,o.kt)("p",null,"In the above code snippet, if a registered model with the name doesn\u2019t exist, the method registers a new model and creates Version 1. If a registered model with the name exists, the method creates a new model version."),(0,o.kt)("h2",m({},{id:"fetching-an-model-from-the-model-registry"}),"Fetching an Model from the Model Registry"),(0,o.kt)("p",null,"After you have registered a model, you can fetch that model using <model_class>.load_model(), or more generally, load_model()."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"model = clf.load_model(registry_path)\nwhere registry_path is the path for model in model registry.\nexample registry path: s3://models/11/328fcc895ec745178524c4d32fb0bca1/artifacts\n")),(0,o.kt)("h2",m({},{id:"transitioning-an-models-stage"}),"Transitioning an Model\u2019s Stage"),(0,o.kt)("p",null,"Over the course of the model\u2019s lifecycle, a model evolves\u2014from development to staging to production. You can transition a registered model to one of the stages: Staging, Production or Archived."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"result = clf.stagging(  run_id='91ebd975b96f40348523ce924976de0b',  model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',  stage=\"Production\")\n")),(0,o.kt)("p",null,"The accepted values for ","<","stage> are: Staging|Archived|Production|None."),(0,o.kt)("h2",m({},{id:"listing-and-searching-mlflow-models"}),"Listing and Searching MLflow Models"),(0,o.kt)("p",null,"You can fetch a list of all registered models in the registry with a simple method."),(0,o.kt)("p",null,"from katonic.ml.util import model_versions"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"model_versions(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\nf runs done : \", len(df_runs))\ndf_runs\n")),(0,o.kt)("p",null,"Output:\nWith hundreds of models, it can be cumbersome to peruse the results returned from this call. A more efficient approach would be to search for a specific model name and list its version details using model_versions() method and provide a filter string such as \"name='sk-learn-random-forest-reg-model'\"\nfrom katonic.ml.util import model_versions"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"model_versions(model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned')\nOutput:\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=1\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=2\n> name=my-ne2-exp_21_gradient_boosting_classifier_tuned; run_id=91ebd975b96f40348523ce924976de0b; version=3\n")),(0,o.kt)("h2",m({},{id:"archiving-an-model"}),"Archiving an Model"),(0,o.kt)("p",null,"You can move models' versions out of a Production stage into an Archived stage. At a later point, if that archived model is not needed, you can delete it."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"# Archive models version 3 from Production into Archived\nresult = clf.stagging(\n    run_id='91ebd975b96f40348523ce924976de0b',\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    stage=\"Archived\"\n)\n")),(0,o.kt)("h2",m({},{id:"deleting-models"}),"Deleting Models"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"Deleting registered models or model versions is irrevocable, so use it judiciously.\n")),(0,o.kt)("p",null,"You can either delete specific versions of a registered model or you can delete a registered model and all its versions."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"# Delete versions 1,2, and 3 of the model\nfrom katonic.ml.util import model_versions, delete_model_version\n\ndelete_model_version(\n    model_name='my-ne2-exp_21_gradient_boosting_classifier_tuned',\n    ver_list=['1',\u20192\u2019,\u20193\u2019]\n)\n# Delete a registered model along with all its versions\nclient.delete_reg_model(name=\"my-ne2-exp_21_gradient_boosting_classifier_tuned\")\n")),(0,o.kt)("p",null,"While the above workflow API demonstrates interactions with the Model Registry, two exceptional cases require attention. One is when you have existing ML models saved from training without the use of Katonic SDK. Serialized and persisted on disk in sklearn\u2019s pickled format, you want to register this model with the Model Registry. The second is when you use an ML framework without a built-in model flavour support, for instance, vaderSentiment, and want to register the model."),(0,o.kt)("h2",m({},{id:"registering-a-custom-model"}),"Registering a Custom Model"),(0,o.kt)("p",null,"Not everyone will start their model training with Katonic SDK. So, you may have some models trained before the use of SDK. Instead of retraining the models, all you want to do is register your saved models with the Model Registry.\nThis code snippet creates a keras model, which we assume that you had created and saved in native pickle format."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"Example:\n## import necessary libraries\nimport tensorflow as tf\nfrom keras import metrics\nfrom katonic.ml.client import MLClient\nfrom katonic.ml.miscellaneous import LogModel\nimport os\n## define experiment and create LogModel instance \nexperiment_name= \"test_user_model_logging\"\nlm = LogModel(experiment_name)\nexp_id = lm.id\n## load the dataset\nmnist = tf.keras.datasets.mnist\n(X_train_full, y_train_full), (X_test, y_test) = mnist.load_data()\n\nX_valid, X_train = X_train_full[:5000] / 255, X_train_full[5000:] / 255\ny_valid, y_train = y_train_full[:5000], y_train_full[5000:]\n\n\nX_test = X_test / 255\n## define the model\nLAYERS = [\n            tf.keras.layers.Flatten(input_shape=(28, 28), name='inputLayer'),\n            tf.keras.layers.Dense(300, activation='relu', name='hiddenLayer1'),\n            tf.keras.layers.Dense(100, activation='relu', name='hiddenLayer2'),\n            tf.keras.layers.Dense(10, activation='softmax', name='outputLayer')\n]\n\nloss_function = 'sparse_categorical_crossentropy'\noptimizers = 'SGD'\nmetric = ['accuracy']\n\nmodel_clf = tf.keras.models.Sequential(LAYERS)\n\n\nmodel_clf.compile(loss=loss_function,\n                optimizer=optimizers,\n                metrics=metric)\n## train the model\nEPOCHS = 2\nVALIDATION = (X_valid, y_valid)\n\nhistory = model_clf.fit(X_train, y_train,\n            epochs=EPOCHS,\n            validation_data=VALIDATION,)\n## Save the model in h5 format\nmodel_clf.save('keras.h5')\n## Load the model from h5format\nlike you can see, we can load the h5 format directly to evaluate and log model into registry\nmodel_from_h5_format = tf.keras.models.load_model('keras.h5')\n## log model into registry.\ncurrent_working_dir = os.getcwd()  \nartifact_path = \"mnist-keras-model\"\nmodel_mertics = {model_from_h5_format.metrics_names[0]:res[0],\nmodel_from_h5_format.metrics_names[1]:res[1]}\nlm.model_logging(\"mnistkeras\",\"keras\",model_clf,artifact_path,current_working_dir,\nmodel_mertics)\n## Print the runs to see details of log model.\ndf_runs = lm.search_runs(exp_id)\nprint(\"Number of runs done : \", len(df_runs))\ndf_runs.head()\n")))}y.isMDXComponent=!0},44396:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry1-2d06d48d7ccd135d58493771ab745fff.png"},91078:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry2-7ced8d4d5ed10ff3b8797722ab304185.png"},81619:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry3-8f1456706f8c07fd36da70c758350543.png"},99063:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry4-50187bf05449e5b452bc78f3c885414a.png"},74453:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry5-15e07b6a4bbb8f0b3f98ccacf7851211.png"},79129:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry6-6843e0daafcf6ab4552f8dc71c04765d.png"},69954:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry7-365796e392fbb93cd200a99174ed2a31.png"},11107:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry8-f00124b71bc535d09f48ad39d05892e9.png"},74070:function(e,t,n){t.Z=n.p+"assets/images/ModelRegistry9-659bb15ee1035c8ac1ecd8d4a3721a80.png"}}]);