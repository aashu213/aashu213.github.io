"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8310],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),s=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(r,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return f},default:function(){return g}});var i=n(35318),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"Katonic-Automated-Pipeline-Deplyment",title:"Katonic Automated Pipeline Deplyment"},d=void 0,h={unversionedId:"Katonic-Automated-Pipeline-Deplyment",id:"Katonic-Automated-Pipeline-Deplyment",title:"Katonic Automated Pipeline Deplyment",description:"The Katonic Automated Pipeline Deployment component gives the data scientists the tools they need to orchestrate end-to-end ML workflows. Katonic Automated Pipeline Deployment provides a GUI in the form of a JupyterLab extension.",source:"@site/../docs/Katonic-Automated-Pipeline-Deplyment.md",sourceDirName:".",slug:"/Katonic-Automated-Pipeline-Deplyment",permalink:"/next/Katonic-Automated-Pipeline-Deplyment",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Katonic-Automated-Pipeline-Deplyment.md",tags:[],version:"current",lastUpdatedAt:1649613078,formattedLastUpdatedAt:"4/10/2022",frontMatter:{id:"Katonic-Automated-Pipeline-Deplyment",title:"Katonic Automated Pipeline Deplyment"},sidebar:"User Guide",previous:{title:"Pipelines",permalink:"/next/Pipelines"},next:{title:"Katonic Studio",permalink:"/next/Katonic-Studio"}},f=[{value:"JupyterLab Extension",id:"jupyterlab-extension",children:[],level:2}],y={toc:f};function g(e){var t,o=e,{components:c}=o,m=((e,t)=>{var n={};for(var i in e)r.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&p)for(var i of p(e))t.indexOf(i)<0&&s.call(e,i)&&(n[i]=e[i]);return n})(o,["components"]);return(0,i.kt)("wrapper",(t=u(u({},y),m),a(t,l({components:c,mdxType:"MDXLayout"}))),(0,i.kt)("h1",u({},{id:"katonic-automated-pipeline-deployment"}),"Katonic Automated Pipeline Deployment"),(0,i.kt)("p",null,"The Katonic Automated Pipeline Deployment component gives the data scientists the tools they need to orchestrate end-to-end ML workflows. Katonic Automated Pipeline Deployment provides a GUI in the form of a JupyterLab extension.\nThe Katonic Automated Pipeline Deployment can be used to orchestrate workflows from any repository of Python code. The aim of the Katonic Automated Pipeline Deployment is to allow you to write plain Python code and then be able to convert it into fully reproducible pipelines without making any changes to the original source code.\nThe JupyterLab extension provides a convenient GUI for workflow orchestration from within Jupyter Notebooks.\nKatonic Automated Pipeline Deployment enables you to run hyperparameter tuning jobs serve models by spawning InferenceServices, and execute AutoML configurations using AutoSklearn. Finally, Katonic Automated Pipeline Deployment allows you to explore the lineage of the trained models by logging MLMD Artifacts and make the whole process reproducible."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Overview"),"\n\u2022\tJupyterLab Extension "),(0,i.kt)("h2",u({},{id:"jupyterlab-extension"}),"JupyterLab Extension"),(0,i.kt)("p",null,"The Katonic Automated Pipeline Deployment component allows you to operationalize your machine learning workflows as pipeline runs on Kubernetes deployments. Katonic Automated Pipeline Deployment is provided as both a Python SDK and a JupyterLab extension.\nIn this section, we will describe how to use the Katonic Automated Pipeline Deployment user interface (UI) from a Jupyter Notebook. The Katonic UI enables you to annotate cells in a Notebook to define the steps of a machine learning pipeline. Using these annotations, Katonic Automated Pipeline Deployment adapts your Python code so that the steps of your pipeline can be containerized and run on Kubernetes clusters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Overview"),"\n\u2022\tAnnotate Cells\n\u2022\tKatonic Automated Pipeline Deployment Notebook Cell Types\n\u2022\tRun a Pipeline "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Annotate Cells")),(0,i.kt)("p",null,"In this section, we describe the basics for annotating notebook cells to define a pipeline using Katonic.\nAnnotate One Cell"),(0,i.kt)("p",null,"To annotate a cell:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure the Katonic Pipeline Deployment Panel is enabled.\n",(0,i.kt)("img",{alt:"Untitled",src:n(12191).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the pencil icon.\n",(0,i.kt)("img",{alt:"Untitled",src:n(83521).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the preferred cell type from the pull-down menu.\n",(0,i.kt)("img",{alt:"Untitled",src:n(86215).Z})))),(0,i.kt)("p",null,"NOTE\nSome cell types support multiple parameters.\n",(0,i.kt)("img",{alt:"Untitled",src:n(1416).Z})),(0,i.kt)("p",null,"Annotate Multiple Cells"),(0,i.kt)("p",null,"You may annotate multiple cells with the same cell type.\nKatonic Automated Pipeline Deployment will group consecutive cells together using the annotation applied to the first cell in the sequence. For example, in the figure below, Katonic Automated Pipeline Deployment has grouped three cells together as a single pipeline step and indicated this with a vertical line matching the color of the step name.\nIf you need to annotate multiple cells in different sections of your notebook with the same cell type, annotate each cell separately following the annotation instructions for that cell type.\n",(0,i.kt)("img",{alt:"Untitled",src:n(312).Z})," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Katonic Automated Pipeline Deployment Notebook Cell Types")),(0,i.kt)("p",null,"To create a Pipeline from a Jupyter Notebook using Katonic Automated Pipeline Deployment, annotate the cells of your notebook selecting from six Katonic Automated Pipeline Deployment cell types. Some of the cell types require a small number of parameters.\nKatonic Automated Pipeline Deployment uses the annotations you supply to define a pipeline. Each step of the pipeline will run in its own container in a Kubernetes deployment. The annotations you apply to cells in your notebook enable Katonic Automated Pipeline Deployment to manage dependencies for each step and marshal data correctly as inputs and outputs for each step of a pipeline. See below for the list of cell types and a brief summary of each."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",u({parentName:"tr"},{align:null}),"Cell type"),(0,i.kt)("th",u({parentName:"tr"},{align:null}),"Cell should contain"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Imports"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Blocks of code that import other modules your machine learning pipeline requires and may be needed by more than one step.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"-----------"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"----------------------------------------------------------------------------------------------------------------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Functions"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Functions used later in your machine learning pipeline; global variable definitions (other than pipeline parameters); and code that initializes lists,")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null})),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"dictionaries, objects, and other values used throughout your pipeline.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"---------"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"------------------------------------------------------------------------------------------------------------------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Pipeline Parameters"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Definitions for global variables used to parameterize your machine learning workflow. These are often training hyperparameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"---------"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"------------------------------------------------------------------------------------------------------------------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Pipeline Metrics"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Lines of code that log or print values used to measure the success of your model.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"---------"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"------------------------------------------------------------------------------------------------------------------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Pipeline Step"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Code that implements the core logic of a discrete step in your workflow.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"---------"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"------------------------------------------------------------------------------------------------------------------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Skip Cell"),(0,i.kt)("td",u({parentName:"tr"},{align:null}),"Any code that you want to ignore.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Imports")," "),(0,i.kt)("p",null,"Annotate notebook cells with the label Imports to identify blocks of code that import other modules your machine learning pipeline requires.\nPurpose"),(0,i.kt)("p",null,"Imports cells help Katonic Automated Pipeline Deployment identify all dependencies for pipeline steps. Katonic Automated Pipeline Deployment prepends the code in Imports cells to the code specific to a pipeline step in the execution environment it creates for that step."),(0,i.kt)("p",null,"Annotate Imports Cells\nTo annotate imports, edit the first cell containing import statements by clicking the pencil icon in the upper right corner and select ",(0,i.kt)("strong",{parentName:"p"},"Cell type > Imports."),"\n",(0,i.kt)("img",{alt:"Untitled",src:n(15021).Z})," "),(0,i.kt)("p",null,"NOTE\nIf you don\u2019t see the pencil icon, please enable Katonic Automated Pipeline Deployment from the ",(0,i.kt)("strong",{parentName:"p"},"Katonic Automated Pipeline Deployment Panel.")),(0,i.kt)("p",null,"Functions Cells"),(0,i.kt)("p",null,"Annotate notebook cells with the label Functions to identify blocks of code containing:\n\u2022\tFunctions used later in your machine learning pipeline.\n\u2022\tGlobal variable definitions (other than pipeline parameters) and code that initializes lists, dictionaries, objects, and other values used throughout your pipeline."),(0,i.kt)("p",null,"NOTE\nThough pipeline parameters are often written as global variables, you should annotate pipeline parameters using the Pipeline Parameters label. This will enable Katonic Automated Pipeline Deployment to configure the pipeline it defines with the appropriate input parameters."),(0,i.kt)("p",null,"Purpose"),(0,i.kt)("p",null,"Functions cells help Katonic Automated Pipeline Deployment identify all dependencies for pipeline steps. Katonic Automated Pipeline Deployment creates pipeline steps by prepending Imports cells followed by Functions cells to the code specific to a pipeline step in the execution environment it creates for that step. See How Katonic Automated Pipeline Deployment Creates a Pipeline Step for more detail."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Annotate Functions Cells")),(0,i.kt)("p",null,"To identify functions, global variable declarations, and initialization code, edit the first cell in a block containing this code by clicking the pencil icon in the upper right corner and select Cell type > Functions."),(0,i.kt)("p",null,"NOTE\nIf you don\u2019t see the pencil icon, please enable Katonic Automated Pipeline Deployment from the Katonic Automated Pipeline Deployment Panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(88547).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pipeline Parameters Cells")),(0,i.kt)("p",null,"Annotate notebook cells as Pipeline Parameters to identify blocks of code that define global variables used as inputs to specify some controls on the operation of a machine learning pipeline. These should be values that you might experiment with as you evaluate the relative performance of a pipeline run with different settings.\nPurpose\nKatonic Automated Pipeline Deployment uses the values in Pipeline Parameters cells to define Pipeline PipelineParam objects and initializes the Pipeline with these parameters.  includes pipeline parameters values in the artifacts it creates for pipeline runs to facilitate review of results from experiments comparing multiple runs of a pipeline.\nAnnotate Pipeline Parameters Cells\nTo annotate pipeline parameters, edit the first cell containing pipeline parameters by clicking the pencil icon in the upper right corner and select Cell type > Pipeline Parameters."),(0,i.kt)("p",null,"NOTE\nIf you don\u2019t see the pencil icon, please enable Katonic Automated Pipeline Deployment from the Katonic Automated Pipeline Deployment Panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(18943).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pipeline Step Cells")),(0,i.kt)("p",null,"Annotate notebook cells with the label Pipeline Step to identify code that implements one of the main components or tasks of a machine learning workflow. A pipeline step typically represents a milestone in data preparation, training, evaluation, tuning, prediction or other phases of a workflow.\nKatonic Automated Pipeline Deployment creates pipeline steps by prepending Imports cells followed by Functions cells to cells annotated for a particular Pipeline Step. These cells together comprise the code Katonic Automated Pipeline Deployment uses in the execution environment it creates for a pipeline step. See How Katonic Automated Pipeline Deployment Creates a Pipeline Step for more detail.\nAnnotate Pipeline Step Cells"),(0,i.kt)("p",null,"To identify code that implements a step in a machine learning workflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit the first cell containing this code by clicking the pencil icon in the upper right corner and select Cell type > Pipeline Step.")),(0,i.kt)("p",null,"NOTE\nIf you don\u2019t see the pencil icon, please enable Katonic Automated Pipeline Deployment from the Katonic Automated Pipeline Deployment Panel.\n2.\tSpecify a unique step name.\n3.\t(Optional) Select one or more steps that the step depends on.\n4.\t(Optional) Specify that this step should run on a GPU node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(61742).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step name Parameter")),(0,i.kt)("p",null,"Step name is the label by which you reference a step in a pipeline. As the step name, create a label that is unique and descriptive. You will use this name as a reference as you define dependency relationships between steps in your pipeline.\nNOTE\nThe step name must consist of only lowercase alphanumeric characters or '_'. The first character must be a lowercase letter.\n",(0,i.kt)("img",{alt:"Untitled",src:n(9510).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Depends on Parameter")),(0,i.kt)("p",null,"The values you select for Depends on list the other steps that must execute before the step you are annotating.\n",(0,i.kt)("img",{alt:"Untitled",src:n(22240).Z})),(0,i.kt)("p",null,"To add dependencies, use the Depends on pull-down menu to select each step whose output will serve as input for the step you are annotating.\nIn the example below, since the step movie_overviews evaluates the model created in the step genres_list, we select that step from the Depends on pull-down menu.\n",(0,i.kt)("img",{alt:"Untitled",src:n(49528).Z})),(0,i.kt)("p",null,"When selecting steps using the Depends on pull-down menu, identify only steps that are immediate dependencies. Do not include all dependencies back through the machine learning pipeline.\nTogether, the dependencies for all steps in a pipeline, define the execution graph for that pipeline. This helps Katonic Automated Pipeline Deployment determine, for example, whether there are branches of your pipeline that can run in parallel.\n",(0,i.kt)("img",{alt:"Untitled",src:n(97855).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Specify Multiple Dependencies:")," A given step may depend on the outputs from more than one other step. The Depends on pull-down menu enables you to select as many other steps as necessary. Select each dependency one at a time.\nRemove Dependencies: To remove a dependency already selected, select the name of that step again from the Depends on pull-down menu. The items in this menu function as toggles for specifying other steps as dependencies.\nGPU parameter\nClick the GPU button when annotating a step, to require that step to run on a GPU. In the modal that appears, enable this requirement using the toggle and specify a number of GPUs and the type of GPU requested.\n",(0,i.kt)("img",{alt:"Untitled",src:n(57972).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parallel Pipeline Steps")),(0,i.kt)("p",null,"Pipeline steps that are independent of one another can run in parallel. For example, the two steps represented below each depend on a step named process_data, but are otherwise independent. Katonic Automated Pipeline Deployment uses the dependency graph reflected in the way you define pipeline steps to orchestrate pipeline runs, taking advantage of your Kubernetes infrastructure to run a pipeline as efficiently as possible.\n",(0,i.kt)("img",{alt:"Untitled",src:n(32667).Z})),(0,i.kt)("p",null,"The step  movie_overviews  can run in parallel with the step  preprocessing.\n",(0,i.kt)("img",{alt:"Untitled",src:n(51184).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Skip Cells"),"\nUse Skip to annotate notebook cells that you want Katonic Automated Pipeline Deployment to ignore as it defines a pipeline.\nPurpose\nCommon uses of the Skip annotation include identifying console logging and other diagnostic code useful in developing a step of pipeline, but which is not part of your machine learning workflow."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Annotate Skip Cells"),"\nTo annotate skip cells, edit the first cell containing code you want Katonic Automated Pipeline Deployment to ignore by clicking the pencil icon in the upper right corner and select Cell type > Skip Cell.\n",(0,i.kt)("img",{alt:"Untitled",src:n(79453).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pipeline Metrics Cells"),"\nAnnotate a notebook cell with the label Pipeline Metrics to identify code that outputs the results you want to evaluate for a pipeline run.\nPurpose\nBased on the variables referenced in a Pipeline Metrics cell, Katonic Automated Pipeline Deployment will define pipeline metrics that the Pipelines system will produce for every pipeline run. In addition, Katonic Automated Pipeline Deployment will associate each one of these metrics to the steps that produced them. Tracking pipeline metrics is essential to evaluating performance across multiple runs of a pipeline that have been parameterized differently or modified while still in the experimental phase of developing a model.\nPipeline metrics are also key to the AutoML capabilities of Katonic Automated Pipeline Deployment. For example, you will need to choose a single pipeline metric as the search objective metric for hyperparameter tuning experiments.\nAnnotate Pipeline Metrics Cell"),(0,i.kt)("p",null,"NOTE\nPipeline metrics should be considered the result of pipeline execution, not the result of an individual step. You should only annotate one cell with Pipeline Metrics and that cell should be the last cell in your notebook."),(0,i.kt)("p",null,"To identify pipeline metrics, edit the cell containing pipeline metrics statements by clicking the pencil icon in the upper right corner and select Cell type > Pipeline Metrics."),(0,i.kt)("p",null,"NOTE\nIf you don\u2019t see the pencil icon, please enable Katonic Automated Pipeline Deployment from the Katonic Automated Pipeline Deployment Panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(94420).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run a Pipeline")),(0,i.kt)("p",null,"In this section, we describe how to run a pipeline you created using the Katonic Automated Pipeline Deployment JupyterLab extension and summarize how Katonic Automated Pipeline Deployment organizes and executes pipeline steps.\nHow to Run a Pipeline\nTo run an annotated notebook as a pipeline using Katonic Automated Pipeline Deployment:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter a name in the Select experiment field under the Pipeline Metadata heading or select an existing name from the pull-down menu. Katonic Automated Pipeline Deployment enables you to group multiple pipeline runs together under the same experiment name. This simplifies comparisons across pipeline runs."),(0,i.kt)("li",{parentName:"ol"},"Enter a name in the Pipeline Name field. Katonic Automated Pipeline Deployment will use this name to identify your pipeline when producing output from a pipeline run, when creating snapshots."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Enter a description in the Pipeline Description field."),(0,i.kt)("li",{parentName:"ol"},"Click the COMPILE AND RUN button at the bottom of the Katonic Automated Pipeline Deployment Panel.\n",(0,i.kt)("img",{alt:"Untitled",src:n(5489).Z}))),(0,i.kt)("p",null,"When you click COMPILE AND RUN Katonic Automated Pipeline Deployment will do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validate your notebook to ensure Katonic Automated Pipeline Deployment can create a pipeline based on the annotations you have applied."),(0,i.kt)("li",{parentName:"ol"},"Take a snapshot of your notebook environment workspace and data volumes."),(0,i.kt)("li",{parentName:"ol"},"Compile your notebook into a pipeline represented as a YAML file."),(0,i.kt)("li",{parentName:"ol"},"Upload your pipeline to the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ol"},"Run the pipeline.\nKatonic Automated Pipeline Deployment produces output in the Katonic Automated Pipeline Deployment Panel as each of these tasks progresses. The links following the status message for each task enable you to explore the outcome of each task.\nHow Katonic Automated Pipeline Deployment Creates a Pipeline Step\nKatonic Automated Pipeline Deployment containerizes pipeline steps for execution on your Kubernetes cluster. Therefore, each pipeline step runs in a separate execution environment.\nTo organize the code for a pipeline step, Katonic Automated Pipeline Deployment creates a new notebook with cells containing the code that the step needs in order to run. The cells Katonic Automated Pipeline Deployment creates are as follows, in order:"),(0,i.kt)("li",{parentName:"ol"},"(Optional) A cell to set the Pipeline Parameters if such a cell was annotated in your notebook."),(0,i.kt)("li",{parentName:"ol"},"A cell with the code necessary to unmarshal the data values the step depends on."),(0,i.kt)("li",{parentName:"ol"},"One or more cells for all code annotated as Imports in the order specified in your notebook."),(0,i.kt)("li",{parentName:"ol"},"One or more cells for all code annotated as Functions in the order specified in your notebook."),(0,i.kt)("li",{parentName:"ol"},"One or more cells for the code annotated as Pipeline Step for the specific step Katonic Automated Pipeline Deployment is creating."),(0,i.kt)("li",{parentName:"ol"},"A cell to marshal the data values that other steps depend on."),(0,i.kt)("li",{parentName:"ol"},"(Optional) A Pipeline Metrics cell if such a cell was annotated in your notebook.\nKatonic Automated Pipeline Deployment configures each pipeline step to execute in an iPython environment. This simulates the way your code would execute if you were simply running your Jupyter notebook.\nHow Katonic Automated Pipeline Deployment Marshals Data\nKatonic Automated Pipeline Deployment will marshal values assigned in Imports and Functions cells so that the data is available in the execution environment for each step of a machine learning pipeline. Changes made to these values are marshalled from step to step as inputs and outputs throughout a pipeline run.\nKatonic Automated Pipeline Deployment implements backends so that it can marshal objects that cannot be easily stringified. For example, Katonic Automated Pipeline Deployment implements specialized backends for PyTorch and scikit-learn objects. Katonic Automated Pipeline Deployment\u2019s marshalling backend framework is expandable to accommodate new object types as they are needed.")))}g.isMDXComponent=!0},12191:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment1-fcf418a7c44423b69b910886ac40aea5.png"},9510:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment10-472fde8a812157beb759d62518a75d25.png"},22240:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment11-d7e41f5a4a7856dfcfa094752fe194ba.png"},49528:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment12-26328c0ebaf3fc74b082a7ae0a6a0617.png"},97855:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment13-6bc3e068cf1650aff5c87bbc2c7ef368.png"},57972:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment14-aaa488ecdd0c249a03dfe27e9dda3c4a.png"},32667:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment15-05870d836f2337ec8f840769b1fd1e82.png"},51184:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment16-cd293be58205e979c2da07c5867b6401.png"},79453:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment17-d3a16f745666707ad002832a51629691.png"},94420:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment18-386634a2684453cda9429b7b1c5ea710.png"},5489:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment19-841f7870bfb3e80e08c9c6678f4e276d.png"},83521:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment2-bc8116533bcd4a0951cb6e3630eda2ae.png"},86215:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment3-561dd022be7680fd0062df74ceff05ea.png"},1416:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment4-7642461593a38d99e30d11e3182fde51.png"},312:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment5-d6f9492fdb8acbf73a6ca890abbc1428.png"},15021:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment6-afda5c0a32ae16d17089b9e628aac670.png"},88547:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment7-bde916a6e02a76c9456e18108b2a4032.png"},18943:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment8-4f11ca16698972a3cc221809edb487f0.png"},61742:function(e,t,n){t.Z=n.p+"assets/images/PipelineDeployment9-9f2e9842f6ef7346e9cb65cd69b535dd.png"}}]);