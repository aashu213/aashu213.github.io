"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4556],{5318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2324:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return h},default:function(){return g}});var a=n(5318),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&u(t,n,e[n]);return t};const d={id:"Publish-a-Streamlit-App",title:"Publish a Streamlit App"},m="Get started with Streamlit App",k={unversionedId:"Publish-a-Streamlit-App",id:"Publish-a-Streamlit-App",title:"Publish a Streamlit App",description:"Overview",source:"@site/../docs/Publish-a-Streamlit-App.md",sourceDirName:".",slug:"/Publish-a-Streamlit-App",permalink:"/docs/next/Publish-a-Streamlit-App",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/Publish-a-Streamlit-App.md",tags:[],version:"current",lastUpdatedAt:1649276774,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"Publish-a-Streamlit-App",title:"Publish a Streamlit App"},sidebar:"Getting Started",previous:{title:"From Notebook to Kubeflow Pipeline using Katonic SDK",permalink:"/docs/next/From-Notebook-to-Kubeflow-Pipeline-using-Katonic-SDK"},next:{title:"End to End use case with Feature Store",permalink:"/docs/next/End-to-End-use-case-with-Feature-Store"}},h=[{value:"Overview",id:"overview",children:[],level:3},{value:"Setup the Workspace",id:"setup-the-workspace",children:[],level:3},{value:"Required Git instructions and setup.",id:"required-git-instructions-and-setup",children:[],level:3},{value:"start the app development.",id:"start-the-app-development",children:[],level:3},{value:"Test your app",id:"test-your-app",children:[],level:3},{value:"Deploy your App",id:"deploy-your-app",children:[],level:3},{value:"You can share the App Url to showcase your work.",id:"you-can-share-the-app-url-to-showcase-your-work",children:[],level:3}],f={toc:h};function g(t){var e,r=t,{components:u}=r,d=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(e=c(c({},f),d),o(e,l({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"get-started-with-streamlit-app"}),"Get started with Streamlit App"),(0,a.kt)("h3",c({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This article will show you how to publish a Python App with Streamlit in Katonic Platform."),(0,a.kt)("p",null,"In this tutorial you will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"spin a workspace environment with the necessary dependencies to publish a Streamlit App"),(0,a.kt)("li",{parentName:"ul"},"setup and create sample Streamlit app"),(0,a.kt)("li",{parentName:"ul"},"publish an App to the Katonic Deploy Launchpad")),(0,a.kt)("p",null,"You\u2019ll be working with sample-streamlit app."),(0,a.kt)("p",null,"It will take approximately 5 minutes to get this example running in Katonic platform"),(0,a.kt)("h3",c({},{id:"setup-the-workspace"}),"Setup the Workspace"),(0,a.kt)("p",null,"The first step is to create a VS code Workspace capable of running your App."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the platform , click ",(0,a.kt)("strong",{parentName:"li"},"workspace"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(4507).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Workspaces Overview, click ",(0,a.kt)("strong",{parentName:"li"},"Create Workspace"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(8922).Z})),(0,a.kt)("p",null,"Fill the following details there."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Name")," : fill your workspace name"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Select Environment:")," select vs code environment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image:")," select VScode webapps image"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Webapp:")," select Streamlit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additional Port:")," 8050"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resources:")," Desired compute resource for workspace"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(8682).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You will be directed to the Workspace overview window, where you can see your workspace under processing.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(0).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It will take approximately 2-3 minutes to get this workspace ready.")),(0,a.kt)("p",null,"![Untitled]","publish-streamlit-app/Untitled4.png)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can connect to your workspace ,when the processing tab changes to running.")),(0,a.kt)("p",null,"Note: Refresh the page, if your are not seeing processing to running status change after 2-3 minutes."),(0,a.kt)("p",null,"Click on the connect to use this Workspace for App building."),(0,a.kt)("h3",c({},{id:"required-git-instructions-and-setup"}),"Required Git instructions and setup."),(0,a.kt)("p",null,"Once you connect to the your workspace , you will be taken to Vscode workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(2510).Z})),(0,a.kt)("p",null,"Before starting anything it is advised that you should connect your github repo to the VScode workspace"),(0,a.kt)("p",null,"first create an empty repo in your git account"),(0,a.kt)("p",null,"clone that repo to your VScode workspace "),(0,a.kt)("p",null,"paste below code into terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"git clone https://github.com/account-name/repo-name.git\n")),(0,a.kt)("p",null,"Cancel the pop up option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(5833).Z})),(0,a.kt)("p",null," fill your username and password/token as instructed in vscode workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(9540).Z})),(0,a.kt)("p",null,"After logging with your git account , you will see your repo folder in workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(1769).Z})),(0,a.kt)("h3",c({},{id:"start-the-app-development"}),"start the app development."),(0,a.kt)("p",null,"write your sample app.py code there or copy below sample code."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"from collections import namedtuple\nimport altair as alt\nimport math\nimport pandas as pd\nimport streamlit as st\nimport os\nroutes = os.environ[\"ROUTE\"]\n\"\"\"\n# Welcome to Streamlit!\nEdit `/streamlit_app.py` to customize this app to your heart's desire :heart:\nIf you have any questions, checkout our [documentation](https://docs.streamlit.io) and [community\nforums](https://discuss.streamlit.io).\nIn the meantime, below is an example of what you can do with just a few lines of code:\n\"\"\"\nwith st.echo(code_location='below'):\n    total_points = st.slider(\"Number of points in spiral\", 1, 5000, 2000)\n    num_turns = st.slider(\"Number of turns in spiral\", 1, 100, 9)\n    Point = namedtuple('Point', 'x y')\n    data = []\n    points_per_turn = total_points / num_turns\n    for curr_point_num in range(total_points):\n        curr_turn, i = divmod(curr_point_num, points_per_turn)\n        angle = (curr_turn + 1) * 2 * math.pi * i / points_per_turn\n        radius = curr_point_num / total_points\n        x = radius * math.cos(angle)\n        y = radius * math.sin(angle)\n        data.append(Point(x, y))\n    st.altair_chart(alt.Chart(pd.DataFrame(data), height=500, width=500)\n        .mark_circle(color='#0068c9', opacity=0.5)\n        .encode(x='x:Q', y='y:Q'))\n")),(0,a.kt)("aside",null,"\ud83d\udca1 Note: Always define the routes as given in sample code,",(0,a.kt)("p",null,"routes = os.environ",'["ROUTE"]'),(0,a.kt)("p",null,"when defining app.")),(0,a.kt)("aside",null,"\ud83d\udca1 Always keep the port = 8050"),(0,a.kt)("h3",c({},{id:"test-your-app"}),"Test your app"),(0,a.kt)("p",null,"Create the ",(0,a.kt)("strong",{parentName:"p"},"requirements.txt")," file with all required dependency."),(0,a.kt)("p",null,"Here is the requirements.txt code used in above app."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"altair\npandas\nstreamlit\n")),(0,a.kt)("p",null,"type following command in the  terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"pip install -r requirements.txt\nstreamlit run app.py --server.port=8050 --server.address=0.0.0.0 \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(3724).Z})),(0,a.kt)("aside",null,"\ud83d\udca1 Note: keep the path relative to your folder structure."),(0,a.kt)("aside",null,"\ud83d\udca1 Note: keep your app name as **app.py** and requirement file as **requirements.txt**"),(0,a.kt)("p",null,"go back to the workspace "),(0,a.kt)("p",null,"click on the ",(0,a.kt)("strong",{parentName:"p"},"Live app")," to see your app"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(7651).Z})),(0,a.kt)("p",null,"your app will open on the new browser tab"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(6107).Z})),(0,a.kt)("p",null,"Finally commit and push your code to the github."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"git config user.email 'youremail@domain.com'\ngit config user.name 'youraccount-name'\ngit add .\ngit commit -m ' your msg'\ngit push\n")),(0,a.kt)("aside",null,"\ud83d\udca1 Follow the necessary git instruction as pop up by Vscode to complete code push"),(0,a.kt)("h3",c({},{id:"deploy-your-app"}),"Deploy your App"),(0,a.kt)("p",null,"To deploy your app, go to the Deploy tab and click on the ",(0,a.kt)("strong",{parentName:"p"},"+create Deployment and select Apps")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(246).Z})),(0,a.kt)("p",null,"you will see below form window"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(5144).Z})),(0,a.kt)("p",null,"fill the details as follow:"),(0,a.kt)("p",null,"App Name: your app name"),(0,a.kt)("p",null,"Select Environment: your app environment"),(0,a.kt)("p",null,"Github Token: your github token"),(0,a.kt)("p",null,"Username: your github account"),(0,a.kt)("p",null,"Account Type: select your account personal or organisation"),(0,a.kt)("p",null,"Repository Branch: choose app repo from drop down"),(0,a.kt)("p",null,"Main file path: appfile name with extention"),(0,a.kt)("p",null,"Python Version: choose desired python version for app"),(0,a.kt)("p",null,"Resources: choose desired compute resources "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(4706).Z})),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," button , it will take you to the Deploy window again"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(2824).Z})),(0,a.kt)("p",null,"Hera you can see  your App deployment status ",(0,a.kt)("strong",{parentName:"p"},"processing"),"."),(0,a.kt)("p",null,"After few minutes status will change to ",(0,a.kt)("strong",{parentName:"p"},"running")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(8495).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"App Url")," to see the deployed app"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(5957).Z})),(0,a.kt)("h3",c({},{id:"you-can-share-the-app-url-to-showcase-your-work"}),"You can share the App Url to showcase your work."))}g.isMDXComponent=!0},4507:function(t,e,n){e.Z=n.p+"assets/images/Untitled-18e134e87a7a7d9f2499889129a2dd6a.png"},8922:function(t,e,n){e.Z=n.p+"assets/images/Untitled1-93fb6df7462d97fb4f72ed14f5c49e17.png"},7651:function(t,e,n){e.Z=n.p+"assets/images/Untitled10-1cd035d27de470d65b44a13cd69741f8.png"},6107:function(t,e,n){e.Z=n.p+"assets/images/Untitled11-7180a8e2e9259f563cea67a30923a6c9.png"},246:function(t,e,n){e.Z=n.p+"assets/images/Untitled12-5c550783819aeb88b1eec2e77a6ade8b.png"},5144:function(t,e,n){e.Z=n.p+"assets/images/Untitled13-6d24f0f14bfcaf27b52ecc7895dc073b.png"},4706:function(t,e,n){e.Z=n.p+"assets/images/Untitled14-d18c97a8dc3a5b20b354b6c107b67aa6.png"},2824:function(t,e,n){e.Z=n.p+"assets/images/Untitled15-3c1d79f3b2323e0ea93a734b3769ffa7.png"},8495:function(t,e,n){e.Z=n.p+"assets/images/Untitled16-ca6cacd29b02b4472868d96f83d9d0a9.png"},5957:function(t,e,n){e.Z=n.p+"assets/images/Untitled17-9839e96032ab2ae910b66242c352be7c.png"},8682:function(t,e,n){e.Z=n.p+"assets/images/Untitled2-f264793348daf32f9ed69f2d984dba6e.png"},0:function(t,e,n){e.Z=n.p+"assets/images/Untitled3-b8810b79fadd60f99f9b6e3fd2a563a3.png"},2510:function(t,e,n){e.Z=n.p+"assets/images/Untitled5-59a6aa0665020f9d97954b813ae650a8.png"},5833:function(t,e,n){e.Z=n.p+"assets/images/Untitled6-7e2ae4e5384f91beac648adb4f6ac53b.png"},9540:function(t,e,n){e.Z=n.p+"assets/images/Untitled7-7b5b6f943d1bedf3927f8a24024b0c0f.png"},1769:function(t,e,n){e.Z=n.p+"assets/images/Untitled8-8d2a2e990bf58c640646be2ea19cd3a6.png"},3724:function(t,e,n){e.Z=n.p+"assets/images/Untitled9-88d0981d231df07ebe6a0bcb585a12ab.png"}}]);