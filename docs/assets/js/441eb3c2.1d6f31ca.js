"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[88804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=l,h=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const i={id:"test_explorer",title:"Test Explorer",slug:"intellij-test-explorer.html"},o=void 0,s={unversionedId:"intellij/test_explorer",id:"version-5.7/intellij/test_explorer",title:"Test Explorer",description:"The plugin provides a tool window view which displays the structure of your tests.",source:"@site/versioned_docs/version-5.7/intellij/text_explorer.md",sourceDirName:"intellij",slug:"/intellij/intellij-test-explorer.html",permalink:"/docs/5.7/intellij/intellij-test-explorer.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/intellij/text_explorer.md",tags:[],version:"5.7",frontMatter:{id:"test_explorer",title:"Test Explorer",slug:"intellij-test-explorer.html"},sidebar:"intellij",previous:{title:"Introduction",permalink:"/docs/5.7/intellij/intellij-plugin.html"},next:{title:"Properties",permalink:"/docs/5.7/intellij/intellij-properties.html"}},a={},c=[],p={toc:c};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The plugin provides a tool window view which displays the structure of your tests.\nThe window describes the currently selected test file, which includes any specs defined in that file and tests\ncontained inside those specs. The tree layout will mirror the structure of your tests for easy navigation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test_explorer_tests",src:r(73886).Z,width:"746",height:"434"})),(0,l.kt)("p",null,"The tool window will include lifecycle callback methods (such as before / after test) if defined,\nas well as included test factories."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test_explorer_callbacks_picture",src:r(18567).Z,width:"536",height:"165"})),(0,l.kt)("p",null,"Clicking on a spec, test, include or callback will navigate directly to that element in the source editor."),(0,l.kt)("p",null,"Any tests that have been disabled using the bang prefix will have a different icon."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test_window_disabled_tests",src:r(1946).Z,width:"745",height:"256"})),(0,l.kt)("p",null,"You can execute (run/debug/run with coverage) a test or spec directly from this window. In addition, the window shows all test modules and allows you to run all tests in that module."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:r(86155).Z,width:"604",height:"254"})),(0,l.kt)("p",null,"Modules, callbacks, and includes can be filtered out if you don't wish to see them. They are included by default."))}d.isMDXComponent=!0},18567:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test_explorer_callbacks-9f19730cddc497d27cf6fa3373e44026.png"},86155:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test_explorer_run-efe7f78a8d22d570bf3bcb0fcb92133b.png"},73886:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test_explorer_tests-1da24265be478f4b9ca821cbf6157d17.png"},1946:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test_window_disabled_tests-36e1d3f4e019ea85eff144ec3a2c5aa6.png"}}]);