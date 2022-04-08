"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7602],{5318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?i.createElement(f,p(p({ref:n},s),{},{components:t})):i.createElement(f,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var c=2;c<l;c++)p[c]=t[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1928:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return k},default:function(){return v}});var i=t(5318),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&s(e,t,n[t]);if(a)for(var t of a(n))c.call(n,t)&&s(e,t,n[t]);return e};const d={id:"pipeline-operations",title:"Pipelines = KFP Pipeline SDK = Pipeline Operations +  create pipeline"},m=void 0,f={unversionedId:"pipeline-operations",id:"pipeline-operations",title:"Pipelines = KFP Pipeline SDK = Pipeline Operations +  create pipeline",description:"Initiate kfp client",source:"@site/../docs/pipeline-operations.md",sourceDirName:".",slug:"/pipeline-operations",permalink:"/docs/next/pipeline-operations",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/pipeline-operations.md",tags:[],version:"current",lastUpdatedAt:1649276774,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"pipeline-operations",title:"Pipelines = KFP Pipeline SDK = Pipeline Operations +  create pipeline"},sidebar:"sdk",previous:{title:"Feature Store",permalink:"/docs/next/Feature-Store"},next:{title:"Drift",permalink:"/docs/next/Drift"}},k=[{value:"Initiate kfp client",id:"initiate-kfp-client",children:[],level:2},{value:"Start new Experiment",id:"start-new-experiment",children:[],level:2},{value:"Create pipeline component",id:"create-pipeline-component",children:[],level:2},{value:"Create a pipeline function",id:"create-a-pipeline-function",children:[],level:2},{value:"Create a pipeline run",id:"create-a-pipeline-run",children:[],level:2},{value:"List pipelines experimentstry_testing_file",id:"list-pipelines-experimentstry_testing_file",children:[],level:2},{value:"Delete Experiment",id:"delete-experiment",children:[],level:2},{value:"List all pipelines runs",id:"list-all-pipelines-runs",children:[],level:2},{value:"Delete Run",id:"delete-run",children:[],level:2},{value:"Archive Run",id:"archive-run",children:[],level:2},{value:"Terminate active Run",id:"terminate-active-run",children:[],level:2},{value:"List Recurring runs job",id:"list-recurring-runs-job",children:[],level:2},{value:"Delete recurring run job",id:"delete-recurring-run-job",children:[],level:2},{value:"List Pipelines",id:"list-pipelines",children:[],level:2},{value:"Delete pipeline",id:"delete-pipeline",children:[],level:2},{value:"Display DataFrame Artifacts",id:"display-dataframe-artifacts",children:[],level:2},{value:"Display Artifacts (str, tuple, dictionary)",id:"display-artifacts-str-tuple-dictionary",children:[],level:2},{value:"Display plots",id:"display-plots",children:[],level:2}],y={toc:k};function v(e){var n,t=e,{components:r}=t,s=((e,n)=>{var t={};for(var i in e)o.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&a)for(var i of a(e))n.indexOf(i)<0&&c.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=u(u({},y),s),l(n,p({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("h2",u({},{id:"initiate-kfp-client"}),"Initiate kfp client"),(0,i.kt)("p",null,"Create instance of kfp client"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\n")),(0,i.kt)("h2",u({},{id:"start-new-experiment"}),"Start new Experiment"),(0,i.kt)("p",null,"start new experiemnt using kfp client instance"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.create_experiment('your experiment name')\n")),(0,i.kt)("h2",u({},{id:"create-pipeline-component"}),"Create pipeline component"),(0,i.kt)("p",null,"convert your functions into pipeline components"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp, component\n\n\n@component\ndef your_function(variable:type)->type:\n    .\n    .write your function\n    .\n    return yourfunction output\n")),(0,i.kt)("h2",u({},{id:"create-a-pipeline-function"}),"Create a pipeline function"),(0,i.kt)("p",null,"create a pipeline by defining task inside a pipeline function"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp, dsl\n\n@dsl.pipeline(\n  name='your pipeline name',\n  description='your pipeline description',\n)\ndef pipeline_function(variable:type)->type:\n  task = your_function(variable)\n")),(0,i.kt)("h2",u({},{id:"create-a-pipeline-run"}),"Create a pipeline run"),(0,i.kt)("p",null,"create a run of your pipeline"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp,dsl\nclient = kfp.Client()\nclient.create_run_from_pipeline_func(\n    pipeline_function,\n    arguments=dictionary of arguments,\n    mode=dsl.PipelineExecutionMode.V2_COMPATIBLE,\n    experiment_name = 'experiment name'\n)\n")),(0,i.kt)("h2",u({},{id:"list-pipelines-experimentstry_testing_file"}),"List pipelines experimentstry_testing_file"),(0,i.kt)("p",null,"List all experiment"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.list_experiments()\n")),(0,i.kt)("h2",u({},{id:"delete-experiment"}),"Delete Experiment"),(0,i.kt)("p",null,"Delete the pipeline experiment "),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.delete_experiment(experiment_id)\n\n")),(0,i.kt)("h2",u({},{id:"list-all-pipelines-runs"}),"List all pipelines runs"),(0,i.kt)("p",null,"List all pipeline runs"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.list_runs(sort_by='created_at desc',page_size=100000).runs\n")),(0,i.kt)("h2",u({},{id:"delete-run"}),"Delete Run"),(0,i.kt)("p",null,"Delete the pipeline run "),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.runs.delete_run(run_id)\n\n")),(0,i.kt)("h2",u({},{id:"archive-run"}),"Archive Run"),(0,i.kt)("p",null,"Delete the pipeline run "),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.runs.archive_run(run_id)\n\n")),(0,i.kt)("h2",u({},{id:"terminate-active-run"}),"Terminate active Run"),(0,i.kt)("p",null,"Delete the pipeline run "),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.runs.terminate_run(run_id)\n")),(0,i.kt)("h2",u({},{id:"list-recurring-runs-job"}),"List Recurring runs job"),(0,i.kt)("p",null,"list all recurring jobs of pipeline run."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.list_recurring_runs().jobs\n")),(0,i.kt)("h2",u({},{id:"delete-recurring-run-job"}),"Delete recurring run job"),(0,i.kt)("p",null,"Delete recurring run job by given job id."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.jobs.delete_job(job_id)\n")),(0,i.kt)("h2",u({},{id:"list-pipelines"}),"List Pipelines"),(0,i.kt)("p",null,"list all pipelines."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.list_pipelines().pipelines\n")),(0,i.kt)("h2",u({},{id:"delete-pipeline"}),"Delete pipeline"),(0,i.kt)("p",null,"Delete pipeline by given pipeline id."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline import kfp\nclient = kfp.Client()\nclient.delete_pipeline(pipeline_id)\n")),(0,i.kt)("h2",u({},{id:"display-dataframe-artifacts"}),"Display DataFrame Artifacts"),(0,i.kt)("p",null,"Display dataframe artifact in pipeline ui."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline.display import Display\nshow = Display() \n\nshow.dataframe_display(data=artifact_object, desc='artifact name') \nshow.save_metadata()\n\n")),(0,i.kt)("h2",u({},{id:"display-artifacts-str-tuple-dictionary"}),"Display Artifacts (str, tuple, dictionary)"),(0,i.kt)("p",null,"Display any type artifact in pipeline ui."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline.display import Display\nshow = Display() \n\nshow.basic_display(artifact, 'Missing value count')\nshow.save_metadata()\n")),(0,i.kt)("h2",u({},{id:"display-plots"}),"Display plots"),(0,i.kt)("p",null,"Display plots in pipeline ui"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-python"}),"from katonic.pipeline.display import Display\nimport seaborn as sns\nshow = Display() \n\nsns.histplot(list_values)\nshow.plot_display(title='plot_name')\nshow.save_metadata()\n\n")))}v.isMDXComponent=!0}}]);