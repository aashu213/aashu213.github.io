"use strict";(self.webpackChunkkatonic_dev=self.webpackChunkkatonic_dev||[]).push([[1774],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return h},toc:function(){return k},default:function(){return g}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={id:"Publish-a-Dash-App",title:"Publish a Dash App"},m="Get started with Dash",h={unversionedId:"Publish-a-Dash-App",id:"Publish-a-Dash-App",title:"Publish a Dash App",description:"Overview",source:"@site/../docs/Publish-a-Dash-App.md",sourceDirName:".",slug:"/Publish-a-Dash-App",permalink:"/next/Publish-a-Dash-App",tags:[],version:"current",frontMatter:{id:"Publish-a-Dash-App",title:"Publish a Dash App"}},k=[{value:"Overview",id:"overview",children:[],level:3},{value:"Setup the Workspace",id:"setup-the-workspace",children:[],level:3},{value:"Required Git instructions and setup.",id:"required-git-instructions-and-setup",children:[],level:3},{value:"start the app development.",id:"start-the-app-development",children:[],level:3},{value:"Test your app",id:"test-your-app",children:[],level:3},{value:"Deploy your App",id:"deploy-your-app",children:[],level:3},{value:"You can share the App Url to showcase your work.",id:"you-can-share-the-app-url-to-showcase-your-work",children:[],level:3}],f={toc:k};function g(e){var t,r=e,{components:u}=r,d=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},f),d),l(t,o({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"get-started-with-dash"}),"Get started with Dash"),(0,a.kt)("h3",c({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This article will show you how to publish a Python App with Dash in Katonic Platform."),(0,a.kt)("p",null,"In this tutorial you will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"spin a workspace environment with the necessary dependencies to publish a Dash App"),(0,a.kt)("li",{parentName:"ul"},"setup and create sample dash app"),(0,a.kt)("li",{parentName:"ul"},"publish an App to the Katonic Deploy Launchpad")),(0,a.kt)("p",null,"You\u2019ll be working with sample-dash app. In this example, the application serves an interactive scatter plot of countries by GDP per capita and life expectancy."),(0,a.kt)("p",null,"It will take approximately 5 minutes to get this example running in Katonic platform"),(0,a.kt)("h3",c({},{id:"setup-the-workspace"}),"Setup the Workspace"),(0,a.kt)("p",null,"The first step is to create a VS code Workspace capable of running your App."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the platform , click ",(0,a.kt)("strong",{parentName:"li"},"workspace"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(60145).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the Workspaces Overview, click ",(0,a.kt)("strong",{parentName:"li"},"Create Workspace"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(75473).Z})),(0,a.kt)("p",null,"Fill the following details there."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Name")," : fill your workspace name"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Select Environment:")," select vs code environment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image:")," select VScode webapps image"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Webapp:")," select Dash"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additional Port:")," 8050"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resources:")," Desired compute resource for workspace"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(15921).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You will be directed to the Workspace overview window, where you can see your workspace under processing.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(11177).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It will take approximately 2-3 minutes to get this workspace ready.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(22406).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can connect to your workspace ,when the processing tab changes to running.")),(0,a.kt)("p",null,"Note: Refresh the page, if your are not seeing processing to running status change after 2-3 minutes."),(0,a.kt)("p",null,"Click on the connect to use this Workspace for App building."),(0,a.kt)("h3",c({},{id:"required-git-instructions-and-setup"}),"Required Git instructions and setup."),(0,a.kt)("p",null,"Once you connect to the your workspace , you will be taken to Vscode workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(21902).Z})),(0,a.kt)("p",null,"Before starting anything it is advised that you should connect your github repo to the VScode workspace"),(0,a.kt)("p",null,"first create an empty repo in your git account"),(0,a.kt)("p",null,"clone that repo to your VScode workspace "),(0,a.kt)("p",null,"paste below code into terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"git clone https://github.com/account-name/repo-name.git\n")),(0,a.kt)("p",null,"Cancel the pop up option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(93426).Z})),(0,a.kt)("p",null," fill your username and password/token as instructed in vscode workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(76227).Z})),(0,a.kt)("p",null,"After logging with your git account , you will see your repo folder in workspace."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(49698).Z})),(0,a.kt)("h3",c({},{id:"start-the-app-development"}),"start the app development."),(0,a.kt)("p",null,"write your sample app.py code there or copy below sample code."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"import dash\nimport dash_core_components as dcc\nimport dash_html_components as html\nimport pandas as pd\nimport plotly.graph_objs as go\nimport os\ndf = pd.read_csv(\n    'https://raw.githubusercontent.com/plotly/'\n    'datasets/master/gapminderDataFiveYear.csv')\nroutes = os.environ[\"ROUTE\"]\napp = dash.Dash(url_base_pathname=routes)\nserver = app.server\n# Set layout\napp.layout = html.Div(style={'paddingLeft': '40px', 'paddingRight': '40px'}, children=[\n    dcc.Graph(id='graph-with-slider'),\n    dcc.Slider(\n        id='year-slider',\n        min=df['year'].min(),\n        max=df['year'].max(),\n        value=df['year'].min(),\n        step=None,\n        marks={str(year): str(year) for year in df['year'].unique()}\n    )\n])\n@app.callback(\n    dash.dependencies.Output('graph-with-slider', 'figure'),\n    [dash.dependencies.Input('year-slider', 'value')])\ndef update_figure(selected_year):\n    filtered_df = df[df.year == selected_year]\n    traces = []\n    for i in filtered_df.continent.unique():\n        df_by_continent = filtered_df[filtered_df['continent'] == i]\n        traces.append(go.Scatter(\n            x=df_by_continent['gdpPercap'],\n            y=df_by_continent['lifeExp'],\n            text=df_by_continent['country'],\n            mode='markers',\n            opacity=0.7,\n            marker={\n                'size': 15,\n                'line': {'width': 0.5, 'color': 'white'}\n            },\n            name=i\n        ))\n    return {\n        'data': traces,\n        'layout': go.Layout(\n            xaxis={'type': 'log', 'title': 'GDP Per Capita'},\n            yaxis={'title': 'Life Expectancy', 'range': [20, 90]},\n            margin={'l': 40, 'b': 40, 't': 10, 'r': 10},\n            legend={'x': 0, 'y': 1},\n            hovermode='closest'\n        )\n    }\nif __name__ == '__main__':\n    app.run_server(debug=True)\n")),(0,a.kt)("aside",null,"\ud83d\udca1 Note: Always define the routes as given in sample code,",(0,a.kt)("p",null,"routes = os.environ",'["ROUTE"]',"\napp = dash.Dash(url_base_pathname=routes)\nserver = app.server"),(0,a.kt)("p",null,"when defining app.")),(0,a.kt)("aside",null,"\ud83d\udca1 Always keep the port = 8050"),(0,a.kt)("h3",c({},{id:"test-your-app"}),"Test your app"),(0,a.kt)("p",null,"Create the ",(0,a.kt)("strong",{parentName:"p"},"requirements.txt")," file with all required dependency."),(0,a.kt)("p",null,"Here is the requirements.txt code used in above app."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"dash==0.22.0\ndash-renderer==0.13.0\ndash-html-components==0.11.0\ndash-core-components==0.26.0\nplotly\npandas\ngunicorn==20.1.0\nWerkzeug==2.0.0\n")),(0,a.kt)("p",null,"type following command in the  terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"pip install -r requirements.txt\ngunicorn app:server -b 0.0.0.0:8050\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(59793).Z})),(0,a.kt)("aside",null,"\ud83d\udca1 Note: keep the path relative to your folder structure."),(0,a.kt)("aside",null,"\ud83d\udca1 Note: keep your app name as **app.py** and requirement file as **requirements.txt**"),(0,a.kt)("p",null,"go back to the workspace "),(0,a.kt)("p",null,"click on the ",(0,a.kt)("strong",{parentName:"p"},"Live app")," to see your app"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(6880).Z})),(0,a.kt)("p",null,"your app will open on the new browser tab"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(63793).Z})),(0,a.kt)("p",null,"Finally commit and push your code to the github."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-python"}),"git config user.email 'youremail@domain.com'\ngit config user.name 'youraccount-name'\ngit add .\ngit commit -m ' your msg'\ngit push\n")),(0,a.kt)("aside",null,"\ud83d\udca1 Follow the necessary git instruction as pop up by Vscode to complete code push"),(0,a.kt)("h3",c({},{id:"deploy-your-app"}),"Deploy your App"),(0,a.kt)("p",null,"To deploy your app, go to the Deploy tab and click on the ",(0,a.kt)("strong",{parentName:"p"},"+create Deployment and select Apps")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(34422).Z})),(0,a.kt)("p",null,"you will see below form window"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(81281).Z})),(0,a.kt)("p",null,"fill the details as follow:"),(0,a.kt)("p",null,"App Name: your app name"),(0,a.kt)("p",null,"Select Environment: your app environment"),(0,a.kt)("p",null,"Github Token: your github token"),(0,a.kt)("p",null,"Username: your github account"),(0,a.kt)("p",null,"Account Type: select your account personal or organisation"),(0,a.kt)("p",null,"Repository Branch: choose app repo from drop down"),(0,a.kt)("p",null,"Main file path: appfile name with extention"),(0,a.kt)("p",null,"Python Version: choose desired python version for app"),(0,a.kt)("p",null,"Resources: choose desired compute resources "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(67087).Z})),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," button , it will take you to the Deploy window again"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(44465).Z})),(0,a.kt)("p",null,"Hera you can see  your App deployment status ",(0,a.kt)("strong",{parentName:"p"},"processing"),"."),(0,a.kt)("p",null,"After few minutes status will change to ",(0,a.kt)("strong",{parentName:"p"},"running")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(95016).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"App Url")," to see the deployed app"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(72891).Z})),(0,a.kt)("h3",c({},{id:"you-can-share-the-app-url-to-showcase-your-work"}),"You can share the App Url to showcase your work."))}g.isMDXComponent=!0},60145:function(e,t,n){t.Z=n.p+"assets/images/Untitled-18e134e87a7a7d9f2499889129a2dd6a.png"},75473:function(e,t,n){t.Z=n.p+"assets/images/Untitled1-93fb6df7462d97fb4f72ed14f5c49e17.png"},6880:function(e,t,n){t.Z=n.p+"assets/images/Untitled10-5acaf593d4318f0786fb30d925479d98.png"},63793:function(e,t,n){t.Z=n.p+"assets/images/Untitled11-8fdcfb1571aee98c355e58a2af5c9b7b.png"},34422:function(e,t,n){t.Z=n.p+"assets/images/Untitled12-5c550783819aeb88b1eec2e77a6ade8b.png"},81281:function(e,t,n){t.Z=n.p+"assets/images/Untitled13-6d24f0f14bfcaf27b52ecc7895dc073b.png"},67087:function(e,t,n){t.Z=n.p+"assets/images/Untitled14-1ff4c3ecec2e52b53e6c28672730b92c.png"},44465:function(e,t,n){t.Z=n.p+"assets/images/Untitled15-7643d170c78b8fe6529249c6afb8b6f4.png"},95016:function(e,t,n){t.Z=n.p+"assets/images/Untitled16-48130d32f922add3600c2dc5e417e1d6.png"},72891:function(e,t,n){t.Z=n.p+"assets/images/Untitled17-91f9fe58c485ba51b63b1447721752f6.png"},15921:function(e,t,n){t.Z=n.p+"assets/images/Untitled2-2c1ece6d2d30a8f8aa43bd7a7cd6d26a.png"},11177:function(e,t,n){t.Z=n.p+"assets/images/Untitled3-b8810b79fadd60f99f9b6e3fd2a563a3.png"},22406:function(e,t,n){t.Z=n.p+"assets/images/Untitled4-1a26445a065c9a48080d1114f6f531b1.png"},21902:function(e,t,n){t.Z=n.p+"assets/images/Untitled5-59a6aa0665020f9d97954b813ae650a8.png"},93426:function(e,t,n){t.Z=n.p+"assets/images/Untitled6-7e2ae4e5384f91beac648adb4f6ac53b.png"},76227:function(e,t,n){t.Z=n.p+"assets/images/Untitled7-7b5b6f943d1bedf3927f8a24024b0c0f.png"},49698:function(e,t,n){t.Z=n.p+"assets/images/Untitled8-8d2a2e990bf58c640646be2ea19cd3a6.png"},59793:function(e,t,n){t.Z=n.p+"assets/images/Untitled9-5d831149430d16396dba0cb419e1b65d.png"}}]);