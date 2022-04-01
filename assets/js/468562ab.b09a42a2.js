"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[65742],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,w=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(w,i(i({ref:t},c),{},{components:n})):a.createElement(w,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return w},toc:function(){return m},default:function(){return k}});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const p={id:"listviewdatasource",title:"ListViewDataSource"},h=void 0,w={unversionedId:"listviewdatasource",id:"version-0.61/listviewdatasource",title:"ListViewDataSource",description:"Provides efficient data processing and access to the ListView component. A ListViewDataSource is created with functions for extracting data from the input blob, and comparing elements (with default implementations for convenience). The input blob can be as flat as an array of strings, or an object with rows nested inside section objects.",source:"@site/versioned_docs/version-0.61/listviewdatasource.md",sourceDirName:".",slug:"/listviewdatasource",permalink:"/docs/0.61/listviewdatasource",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/listviewdatasource.md",tags:[],version:"0.61",lastUpdatedAt:1648760516,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"listviewdatasource",title:"ListViewDataSource"}},m=[{value:"Methods",id:"methods",children:[],level:3},{value:"Methods",id:"methods-1",children:[{value:"<code>constructor()</code>",id:"constructor",children:[],level:3},{value:"<code>cloneWithRows()</code>",id:"clonewithrows",children:[],level:3},{value:"<code>cloneWithRowsAndSections()</code>",id:"clonewithrowsandsections",children:[],level:3},{value:"<code>getRowCount()</code>",id:"getrowcount",children:[],level:3},{value:"<code>getRowAndSectionCount()</code>",id:"getrowandsectioncount",children:[],level:3},{value:"<code>rowShouldUpdate()</code>",id:"rowshouldupdate",children:[],level:3},{value:"<code>getRowData()</code>",id:"getrowdata",children:[],level:3},{value:"<code>getRowIDForFlatIndex()</code>",id:"getrowidforflatindex",children:[],level:3},{value:"<code>getSectionIDForFlatIndex()</code>",id:"getsectionidforflatindex",children:[],level:3},{value:"<code>getSectionLengths()</code>",id:"getsectionlengths",children:[],level:3},{value:"<code>sectionHeaderShouldUpdate()</code>",id:"sectionheadershouldupdate",children:[],level:3},{value:"<code>getSectionHeaderData()</code>",id:"getsectionheaderdata",children:[],level:3}],level:2}],f={toc:m};function k(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},f),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Provides efficient data processing and access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListView")," component. A ",(0,a.kt)("inlineCode",{parentName:"p"},"ListViewDataSource")," is created with functions for extracting data from the input blob, and comparing elements (with default implementations for convenience). The input blob can be as flat as an array of strings, or an object with rows nested inside section objects."),(0,a.kt)("p",null,"To update the data in the datasource, use ",(0,a.kt)("inlineCode",{parentName:"p"},"cloneWithRows")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"cloneWithRowsAndSections")," if you care about sections). The data in the data source is immutable, so you can't modify it directly. The clone methods take in the new data and compute a diff for each row so ListView knows whether to re-render it or not."),(0,a.kt)("p",null,"In this example, a component receives data in chunks, handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"_onDataArrived"),", which concats the new data onto the old data and updates the data source. We use ",(0,a.kt)("inlineCode",{parentName:"p"},"concat")," to create a new array - mutating ",(0,a.kt)("inlineCode",{parentName:"p"},"this._data"),", e.g. with ",(0,a.kt)("inlineCode",{parentName:"p"},"this._data.push(newRowData)"),", would be an error. ",(0,a.kt)("inlineCode",{parentName:"p"},"_rowHasChanged")," understands the shape of the row data and knows how to efficiently compare it."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getInitialState: function() {\n  var ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});\n  return {ds};\n},\n_onDataArrived(newData) {\n  this._data = this._data.concat(newData);\n  this.setState({\n    ds: this.state.ds.cloneWithRows(this._data)\n  });\n}\n")),(0,a.kt)("h3",u({},{id:"methods"}),"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#constructor"}),(0,a.kt)("inlineCode",{parentName:"a"},"constructor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#clonewithrows"}),(0,a.kt)("inlineCode",{parentName:"a"},"cloneWithRows"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#clonewithrowsandsections"}),(0,a.kt)("inlineCode",{parentName:"a"},"cloneWithRowsAndSections"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowcount"}),(0,a.kt)("inlineCode",{parentName:"a"},"getRowCount"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowandsectioncount"}),(0,a.kt)("inlineCode",{parentName:"a"},"getRowAndSectionCount"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#rowshouldupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"rowShouldUpdate"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowdata"}),(0,a.kt)("inlineCode",{parentName:"a"},"getRowData"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getrowidforflatindex"}),(0,a.kt)("inlineCode",{parentName:"a"},"getRowIDForFlatIndex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionidforflatindex"}),(0,a.kt)("inlineCode",{parentName:"a"},"getSectionIDForFlatIndex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionlengths"}),(0,a.kt)("inlineCode",{parentName:"a"},"getSectionLengths"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#sectionheadershouldupdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"sectionHeaderShouldUpdate"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/0.61/listviewdatasource#getsectionheaderdata"}),(0,a.kt)("inlineCode",{parentName:"a"},"getSectionHeaderData")))),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"reference"}),"Reference"),(0,a.kt)("h2",u({},{id:"methods-1"}),"Methods"),(0,a.kt)("h3",u({},{id:"constructor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"constructor(params);\n")),(0,a.kt)("p",null,"You can provide custom extraction and ",(0,a.kt)("inlineCode",{parentName:"p"},"hasChanged")," functions for section headers and rows. If absent, data will be extracted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultGetRowData")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultGetSectionHeaderData")," functions."),(0,a.kt)("p",null,"The default extractor expects data of one of the following forms:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{})," { sectionID_1: { rowID_1: <rowData1>, ... }, ... }\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{})," { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{})," [ [ <rowData1>, <rowData2>, ... ], ... ]\n")),(0,a.kt)("p",null,"The constructor takes in a params argument that can contain any of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"getRowData(dataBlob, sectionID, rowID);"),(0,a.kt)("li",{parentName:"ul"},"getSectionHeaderData(dataBlob, sectionID);"),(0,a.kt)("li",{parentName:"ul"},"rowHasChanged(prevRowData, nextRowData);"),(0,a.kt)("li",{parentName:"ul"},"sectionHeaderHasChanged(prevSectionData, nextSectionData);")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"clonewithrows"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cloneWithRows()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"cloneWithRows(dataBlob, rowIdentities);\n")),(0,a.kt)("p",null,"Clones this ",(0,a.kt)("inlineCode",{parentName:"p"},"ListViewDataSource")," with the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"dataBlob")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rowIdentities"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"dataBlob")," an arbitrary blob of data. At construction an extractor to get the interesting information was defined (or the default was used)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rowIdentities")," is a 2D array of identifiers for rows. ie. [","['a1', 'a2']",", ","['b1', 'b2', 'b3']",", ...]. If not provided, it's assumed that the keys of the section data are the row identities."),(0,a.kt)("p",null,"Note: This function does NOT clone the data in this data source. It only passes the functions defined at construction to a new data source with the data specified. If you wish to maintain the existing data you must handle merging of old and new data separately and then pass that into this function as the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataBlob"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"clonewithrowsandsections"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cloneWithRowsAndSections()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"cloneWithRowsAndSections(\n  dataBlob,\n  sectionIdentities,\n  rowIdentities\n);\n")),(0,a.kt)("p",null,"This performs the same function as the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloneWithRows")," function but here you also specify what your ",(0,a.kt)("inlineCode",{parentName:"p"},"sectionIdentities")," are. If you don't care about sections you should safely be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"cloneWithRows"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sectionIdentities")," is an array of identifiers for sections. ie. ","['s1', 's2', ...]",". The identifiers should correspond to the keys or array indexes of the data you wish to include. If not provided, it's assumed that the keys of dataBlob are the section identities."),(0,a.kt)("p",null,"Note: this returns a new object!"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"const dataSource = ds.cloneWithRowsAndSections({\n  addresses: ['row 1', 'row 2'],\n  phone_numbers: ['data 1', 'data 2'],\n}, ['phone_numbers']);\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getrowcount"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRowCount()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getRowCount();\n")),(0,a.kt)("p",null,"Returns the total number of rows in the data source."),(0,a.kt)("p",null,"If you are specifying the rowIdentities or sectionIdentities, then ",(0,a.kt)("inlineCode",{parentName:"p"},"getRowCount")," will return the number of rows in the filtered data source."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getrowandsectioncount"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRowAndSectionCount()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getRowAndSectionCount();\n")),(0,a.kt)("p",null,"Returns the total number of rows in the data source (see ",(0,a.kt)("inlineCode",{parentName:"p"},"getRowCount")," for how this is calculated) plus the number of sections in the data."),(0,a.kt)("p",null,"If you are specifying the rowIdentities or sectionIdentities, then ",(0,a.kt)("inlineCode",{parentName:"p"},"getRowAndSectionCount")," will return the number of rows & sections in the filtered data source."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"rowshouldupdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"rowShouldUpdate()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"rowShouldUpdate(sectionIndex, rowIndex);\n")),(0,a.kt)("p",null,"Returns if the row is dirtied and needs to be rerendered"),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getrowdata"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRowData()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getRowData(sectionIndex, rowIndex);\n")),(0,a.kt)("p",null,"Gets the data required to render the row."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getrowidforflatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getRowIDForFlatIndex()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getRowIDForFlatIndex(index);\n")),(0,a.kt)("p",null,"Gets the rowID at index provided if the dataSource arrays were flattened, or null of out of range indexes."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getsectionidforflatindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getSectionIDForFlatIndex()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getSectionIDForFlatIndex(index);\n")),(0,a.kt)("p",null,"Gets the sectionID at index provided if the dataSource arrays were flattened, or null for out of range indexes."),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getsectionlengths"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getSectionLengths()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getSectionLengths();\n")),(0,a.kt)("p",null,"Returns an array containing the number of rows in each section"),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"sectionheadershouldupdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"sectionHeaderShouldUpdate()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"sectionHeaderShouldUpdate(sectionIndex);\n")),(0,a.kt)("p",null,"Returns if the section header is dirtied and needs to be rerendered"),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"getsectionheaderdata"}),(0,a.kt)("inlineCode",{parentName:"h3"},"getSectionHeaderData()")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"getSectionHeaderData(sectionIndex);\n")),(0,a.kt)("p",null,"Gets the data required to render the section header"))}k.isMDXComponent=!0}}]);