"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4503],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=n,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},885:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return y},default:function(){return h}});var a=r(35318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const f={id:"Feature-Store",title:"Feature Store"},m=void 0,d={unversionedId:"Feature-Store",id:"Feature-Store",title:"Feature Store",description:"Initialize Feature Store",source:"@site/../docs/Feature-Store.md",sourceDirName:".",slug:"/Feature-Store",permalink:"/next/Feature-Store",tags:[],version:"current",frontMatter:{id:"Feature-Store",title:"Feature Store"}},y=[{value:"Initialize Feature Store",id:"initialize-feature-store",children:[],level:2},{value:"Define Entity Key",id:"define-entity-key",children:[],level:2},{value:"Define Data Source",id:"define-data-source",children:[{value:"File Source - CSV",id:"file-source---csv",children:[],level:3},{value:"File Source - Parquet",id:"file-source---parquet",children:[],level:3},{value:"DataFrame Source - Pandas",id:"dataframe-source---pandas",children:[],level:3},{value:"DataFrame Source - Spark",id:"dataframe-source---spark",children:[],level:3}],level:2},{value:"Feature View",id:"feature-view",children:[],level:2},{value:"Write Data to Offline Store",id:"write-data-to-offline-store",children:[],level:2},{value:"Historical Data Retrieval",id:"historical-data-retrieval",children:[],level:2},{value:"Publish Data to Online Store",id:"publish-data-to-online-store",children:[],level:2},{value:"Online Features Retrieval",id:"online-features-retrieval",children:[],level:2},{value:"Feature Store Registry",id:"feature-store-registry",children:[{value:"List Entities",id:"list-entities",children:[],level:3},{value:"List Feature View",id:"list-feature-view",children:[],level:3},{value:"Get Registry Info - Given User Name",id:"get-registry-info---given-user-name",children:[],level:3},{value:"Get Registry Info - Given Project Name",id:"get-registry-info---given-project-name",children:[],level:3},{value:"Get Registry Info - Given User Name, Project Name",id:"get-registry-info---given-user-name-project-name",children:[],level:3}],level:2}],v={toc:y};function h(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},v),c),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",p({},{id:"initialize-feature-store"}),"Initialize Feature Store"),(0,a.kt)("p",null,"Initialize a Feature Store."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import FeatureStore\nfeature_store = FeatureStore(\n    user_name = "your-name",\n    project_name = "new-project",\n    description = "project-description",\n)\n')),(0,a.kt)("h2",p({},{id:"define-entity-key"}),"Define Entity Key"),(0,a.kt)("p",null,"Entity keys (Unique Id) will act as Primary keys to retrieve features."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import Entity\nentity = Entity(name="id", value_type=ValueType.INT64)\n')),(0,a.kt)("h2",p({},{id:"define-data-source"}),"Define Data Source"),(0,a.kt)("h3",p({},{id:"file-source---csv"}),"File Source - CSV"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import FileSource\ndata_source = FileSource(\n    path = "path/to/your/csv/data/source/file",\n    file_format = "csv",\n    event_timestamp_column = "event-timestamp-column"\n)\n')),(0,a.kt)("h3",p({},{id:"file-source---parquet"}),"File Source - Parquet"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import FileSource\ndata_source = FileSource(\n    path = "path/to/your/parquet/data/source/file",\n    file_format = "parquet",\n    event_timestamp_column = "event-timestamp-column"\n)\n')),(0,a.kt)("h3",p({},{id:"dataframe-source---pandas"}),"DataFrame Source - Pandas"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import DataFrameSource\nbatch_source = DataFrameSource(\n        df=pandas_dataframe,\n        event_timestamp_column="event-timestamp-column",\n        created_timestamp_column="created-timestamp-column",\n    )\n')),(0,a.kt)("h3",p({},{id:"dataframe-source---spark"}),"DataFrame Source - Spark"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import DataFrameSource\nbatch_source = DataFrameSource(\n        df=spark_dataframe,\n        mode="append",\n        event_timestamp_column="event-timestamp-column",\n        created_timestamp_column="created-timestamp-column",\n    )\n')),(0,a.kt)("h2",p({},{id:"feature-view"}),"Feature View"),(0,a.kt)("p",null,"A feature view is a group of features."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import FeatureView\nfeature_view  = FeatureView(\n    name="feature-view-name",\n    entities=["entity-key"],\n    ttl="2d", # no of days/months/years/hours\n    features=features_list,\n    batch_source=batch_source,\n)\n')),(0,a.kt)("h2",p({},{id:"write-data-to-offline-store"}),"Write Data to Offline Store"),(0,a.kt)("p",null,"Store data to Offline store."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import Entity, FeatureView\nentity = Entity(name="id", value_type=ValueType.INT64)\nfeature_view  = FeatureView(\n    name="feature-view-name",\n    entities=["entity-key"],\n    ttl="2d", # no of days/months/years/hours\n    features=features_list,\n    batch_source=batch_source,\n)\nfeature_store.write_table([entity, feature_view])\n')),(0,a.kt)("h2",p({},{id:"historical-data-retrieval"}),"Historical Data Retrieval"),(0,a.kt)("p",null,"Retrieve training data from Offline store."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'training_df = feature_store.get_historical_features(\n    entity_df=entity-df,\n    feature_view=["feature-view-name"],\n    features=features_list,\n).to_df()\n')),(0,a.kt)("h2",p({},{id:"publish-data-to-online-store"}),"Publish Data to Online Store"),(0,a.kt)("p",null,"It materializes the latest features from the Offline feature store to an Online store."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),"feature_store.publish_table(\n    start_ts = start_date_as_datetime_object,\n    end_ts = end_date_as_datetime_object\n)\n")),(0,a.kt)("h2",p({},{id:"online-features-retrieval"}),"Online Features Retrieval"),(0,a.kt)("p",null,"It will used to get the latest features at low latency and also for the online serving."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'feature_store.get_online_features(\n    entity_rows=[{"entity-key": entity-value}],\n    feature_view=["feature-view-name"],\n    features=features_list,\n).to_df()\n')),(0,a.kt)("h2",p({},{id:"feature-store-registry"}),"Feature Store Registry"),(0,a.kt)("p",null,"Feature Store Registy is a tracking engine for the feature definitions and their related metadata."),(0,a.kt)("h3",p({},{id:"list-entities"}),"List Entities"),(0,a.kt)("p",null,"It will list all the entities present in the Feature Registry from all the project."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),'from katonic.fs import FeatureStore\nfeature_store = FeatureStore(\n    user_name = "your-name",\n    project_name = "new-project",\n    description = "project-description",\n)\nfeature_store.list_entities()\n')),(0,a.kt)("h3",p({},{id:"list-feature-view"}),"List Feature View"),(0,a.kt)("p",null,"It will list all the Feature Views present in the Feature Registry from all the project."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),"feature_store.list_feature_views()\n")),(0,a.kt)("h3",p({},{id:"get-registry-info---given-user-name"}),"Get Registry Info - Given User Name"),(0,a.kt)("p",null,"It will Get all the Meta present in the Feature Registry related with given user name."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),"feature_store.get_registry_info(user_name='user')\n")),(0,a.kt)("h3",p({},{id:"get-registry-info---given-project-name"}),"Get Registry Info - Given Project Name"),(0,a.kt)("p",null,"It will Get all the Meta present in the Feature Registry related with given project name."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),"feature_store.get_registry_info(project_name='housing_price')\n")),(0,a.kt)("h3",p({},{id:"get-registry-info---given-user-name-project-name"}),"Get Registry Info - Given User Name, Project Name"),(0,a.kt)("p",null,"It will Get all the Meta present in the Feature Registry related with given project name and user name."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-python"}),"feature_store.get_registry_info(user_name='user', project_name='housing_price')\n")))}h.isMDXComponent=!0}}]);