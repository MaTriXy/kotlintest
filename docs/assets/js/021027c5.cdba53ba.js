"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=r,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const s={id:"continually",title:"Continually",slug:"continually.html"},a=void 0,l={unversionedId:"assertions/continually",id:"version-5.8/assertions/continually",title:"Continually",description:"As the dual of eventually, continually allows you to assert that a block of code succeeds, and continues to succeed, for a period of time.",source:"@site/versioned_docs/version-5.8/assertions/continually.md",sourceDirName:"assertions",slug:"/assertions/continually.html",permalink:"/docs/5.8/assertions/continually.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/assertions/continually.md",tags:[],version:"5.8",frontMatter:{id:"continually",title:"Continually",slug:"continually.html"},sidebar:"framework",previous:{title:"Eventually",permalink:"/docs/5.8/assertions/eventually.html"},next:{title:"Until",permalink:"/docs/5.8/assertions/until.html"}},c={},i=[],u={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As the dual of eventually, ",(0,r.kt)("inlineCode",{parentName:"p"},"continually")," allows you to assert that a block of code succeeds, and continues to succeed, for a period of time.\nFor example you may want to check that a http connection is kept alive for 60 seconds after the last packet has been received.\nYou could sleep for 60 seconds, and then check, but if the connection was terminated after 5 seconds, your test will sit idle for a further 55 seconds before then failing.\nBetter to fail fast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("pass for 60 seconds") {\n      continually(60.seconds) {\n        // code here that should succeed and continue to succeed for 60 seconds\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The function passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"continually")," block is executed every 10 milliseconds. We can specify the poll interval if we prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests: ShouldSpec() {\n  init {\n    should("pass for 60 seconds") {\n      continually(60.seconds, 5.seconds) {\n        // code here that should succeed and continue to succeed for 60 seconds\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);