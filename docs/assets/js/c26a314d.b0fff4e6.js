"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[26171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"proptestconfig",title:"Configuration",slug:"property-test-config.html"},s=void 0,a={unversionedId:"proptest/proptestconfig",id:"version-5.8/proptest/proptestconfig",title:"Configuration",description:"Kotest provides for the  ability to specify some configuration options when running a property test. We do this by passing",source:"@site/versioned_docs/version-5.8/proptest/config.md",sourceDirName:"proptest",slug:"/proptest/property-test-config.html",permalink:"/docs/5.8/proptest/property-test-config.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/proptest/config.md",tags:[],version:"5.8",frontMatter:{id:"proptestconfig",title:"Configuration",slug:"property-test-config.html"},sidebar:"proptest",previous:{title:"Seeds",permalink:"/docs/5.8/proptest/property-test-seeds.html"},next:{title:"Custom Generators",permalink:"/docs/5.8/proptest/custom-generators.html"}},p={},l=[{value:"Seed",id:"seed",level:3},{value:"Min Failure",id:"min-failure",level:3},{value:"PropTestListener",id:"proptestlistener",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest provides for the  ability to specify some configuration options when running a property test. We do this by passing\nin an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"PropTestConfig")," to the test methods."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "String size" {\n      forAll<String, String>(PropTestConfig(options here...)) { a,b ->\n         (a + b).length == a.length + b.length\n      }\n   }\n})\n')),(0,o.kt)("h3",{id:"seed"},"Seed"),(0,o.kt)("p",null,"A commonly used configuration option is specifying the seed used by the random source. This is used when you want to\nrepeat the same values each time the test is run. You might want to do this if you find a test failure,\nand you want to ensure that that particular set of values continues to be executed in the future as a regression\ntest."),(0,o.kt)("p",null,"For full details on how the seed is used ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.8/proptest/property-test-seeds.html"},"click here"),"."),(0,o.kt)("h3",{id:"min-failure"},"Min Failure"),(0,o.kt)("p",null,"By default, Kotest tolerates no failure. Perhaps you want to run some non-deterministic test a bunch of times, and you're happy\nto accept some small number of failures. You can specify that in config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "some flakey test" {\n      forAll<String, String>(PropTestConfig(maxFailure = 3)) { a,b ->\n         // max of 3 inputs can fail\n      }\n   }\n})\n')),(0,o.kt)("h3",{id:"proptestlistener"},"PropTestListener"),(0,o.kt)("p",null,"Sometimes in property test it is required to perform some setup and tear down in each iteration of test.\nFor this purpose you can register a ",(0,o.kt)("inlineCode",{parentName:"p"},"PropTestListener")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"PropTestConfig"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample: StringSpec({\n   "some property test which require setup and tear down in each iteration" {\n      forAll<String, String>(PropTestConfig(listeners = listOf(MyPropTestListener))) { a,b ->\n         // some assertion\n      }\n   }\n})\n')))}u.isMDXComponent=!0}}]);