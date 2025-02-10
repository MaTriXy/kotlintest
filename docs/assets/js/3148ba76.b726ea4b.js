"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[47429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={},i="Release 4.3.0",r={unversionedId:"blog/release_4.3",id:"version-5.8/blog/release_4.3",title:"Release 4.3.0",description:"The Kotest team is pleased to announce the release of Kotest 4.3.0.",source:"@site/versioned_docs/version-5.8/blog/release_4.3.md",sourceDirName:"blog",slug:"/blog/release_4.3",permalink:"/docs/5.8/blog/release_4.3",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.8/blog/release_4.3.md",tags:[],version:"5.8",frontMatter:{}},l={},p=[{value:"New and improved data driven testing",id:"new-and-improved-data-driven-testing",level:3},{value:"EnabledIf annotation on specs",id:"enabledif-annotation-on-specs",level:3},{value:"TestCase severity",id:"testcase-severity",level:3},{value:"Disabling source references",id:"disabling-source-references",level:3},{value:"Make engine dependency free",id:"make-engine-dependency-free",level:3},{value:"Matchers return &#39;this&#39; for easy chaining",id:"matchers-return-this-for-easy-chaining",level:3},{value:"Property test module for kotlinx datetime",id:"property-test-module-for-kotlinx-datetime",level:3},{value:"Option to strip whitespace from test names",id:"option-to-strip-whitespace-from-test-names",level:3},{value:"Thanks",id:"thanks",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"release-430"},"Release 4.3.0"),(0,s.kt)("p",null,"The Kotest team is pleased to announce the release of Kotest 4.3.0."),(0,s.kt)("p",null,"This blog covers some of the new features added in this release.\nFor the full list, see the ",(0,s.kt)("a",{parentName:"p",href:"https://kotest.io/changelog/"},"changelog"),"."),(0,s.kt)("h3",{id:"new-and-improved-data-driven-testing"},"New and improved data driven testing"),(0,s.kt)("p",null,"Kotest has improved its data driven testing support, directly integrating into the framework.\nThis means it will now automatically generate individual test case entries."),(0,s.kt)("p",null,"As an example, lets test a function that returns true if the input values are valid ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pythagorean_triple"},"pythagorean triples"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun isPythagTriple(a: Int, b: Int, c: Int): Boolean = a * a + b * b == c * c\n")),(0,s.kt)("p",null,"We start by writing a data class that will hold each ",(0,s.kt)("em",{parentName:"p"},"row")," - a set of inputs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class PythagTriple(val a: Int, val b: Int, val c: Int)\n")),(0,s.kt)("p",null,"Next we invoke the function ",(0,s.kt)("inlineCode",{parentName:"p"},"forAll")," inside a test case, passing in one or more of these data classes, and a\nlambda that performs some test logic for a given ",(0,s.kt)("em",{parentName:"p"},"row"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n    forAll(\n       PythagTriple(3, 4, 5),\n       PythagTriple(6, 8, 10),\n       PythagTriple(8, 15, 17),\n       PythagTriple(7, 24, 25)\n    ) { (a, b, c) ->\n        isPythagTriple(a, b, c) shouldBe true\n    }\n}\n')),(0,s.kt)("p",null,"Kotest will automatically generate a test case for each input row, as if you had manually written a separate test case for each."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"data test example output",src:n(84586).Z,width:"528",height:"216"})),(0,s.kt)("h3",{id:"enabledif-annotation-on-specs"},"EnabledIf annotation on specs"),(0,s.kt)("p",null,"It can be useful to avoid instantiating a spec entirely, and often we can do that via test tags. But if you want\nto do this with some bespoke code, then the annotation ",(0,s.kt)("inlineCode",{parentName:"p"},"EnabledIf")," has been added."),(0,s.kt)("p",null,"Annotate a spec with ",(0,s.kt)("inlineCode",{parentName:"p"},"EnabledIf"),", passing in a class that extends from ",(0,s.kt)("inlineCode",{parentName:"p"},"EnabledCondition")," and that condition\nwill be invoked at runtime to determine if the spec should be instantiated. The ",(0,s.kt)("inlineCode",{parentName:"p"},"EnabledCondition")," implementation\nmust have a zero arg constructor."),(0,s.kt)("p",null,"For example, lets make a condition that only executes a test if it is midnight."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"class EnabledIfMidnight : EnabledCondition {\n   override fun enabled(specKlass: KClass<out Spec>): Boolean = LocalTime.now().hour == 0\n}\n")),(0,s.kt)("p",null,"And then attach that to a spec:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'@EnabledIf(EnabledIfMidnight::class)\nclass EnabledIfTest : FunSpec() {\n   init {\n      test("tis midnight when the witches roam free") {\n        // test here\n      }\n   }\n}\n')),(0,s.kt)("h3",{id:"testcase-severity"},"TestCase severity"),(0,s.kt)("p",null,"Test case can be conditionally executed via test tags, and now also by severity levels.\nThe levels are BLOCKER, CRITICAL, NORMAL, MINOR, and TRIVIAL."),(0,s.kt)("p",null,"We can mark each test case with a severity level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTest : FunSpec() {\n   init {\n      test("very very important").config(severity = TestCaseSeverityLevel.CRITICAL) {\n        // test here\n      }\n   }\n}\n')),(0,s.kt)("p",null,"Say we only want to execute tests that are CRITICAL or higher, we can execute with the system property ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest.framework.test.severity=CRITICAL")),(0,s.kt)("p",null,"This can be useful if we have a huge test suite and want to run some tests first in a separate test run."),(0,s.kt)("p",null,"By default, all tests are executed."),(0,s.kt)("h3",{id:"disabling-source-references"},"Disabling source references"),(0,s.kt)("p",null,"Whenever a test case is created, Kotest creates a stack trace so that it can link back to the test case.\nThe stack trace contains the filename and line number which the Intellij Plugin uses to create links in the test window.\nIt calls these the ",(0,s.kt)("em",{parentName:"p"},"sourceref"),"."),(0,s.kt)("p",null,"If you have 1000s of tests and are encountering some slowdown when executing the full suite via gradle, you can now disable\nthe generation of these sourcerefs by setting the system property ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest.framework.sourceref.disable=true")),(0,s.kt)("p",null,"Generally speaking, this is only of use if you have a huge test suite and mostly aimed at CI builds."),(0,s.kt)("h3",{id:"make-engine-dependency-free"},"Make engine dependency free"),(0,s.kt)("p",null,"A test framework is one of the lowest levels of dependences in an ecosystem. As Kotest is used by many Kotlin libraries, a clash\ncan occur if Kotest and your project are using the same dependencies but with different versions."),(0,s.kt)("p",null,"It is beneficial then if Kotest has as few dependencies as possible. To this aim, 4.3.0 has seen the dependencies\nfor the Kotest framework reduced to just Classgraph (to scan for specs), Mordant (for console output), and opentest4j."),(0,s.kt)("h3",{id:"matchers-return-this-for-easy-chaining"},"Matchers return 'this' for easy chaining"),(0,s.kt)("p",null,"In the opinion of this author, Kotest has the most comprehensive assertion support for Kotlin. Now they just became more convienient,\nby allowing you to chain assertions together if you wish."),(0,s.kt)("p",null,"So, instead of"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val employees: List<Employee> = ...\nemployees.shouldBeSorted()\nemployees.shouldHaveSize(4)\nemployees.shouldContain(Employee("Sam", "Chicago"))\n')),(0,s.kt)("p",null,"You can now do"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val employees: List<Employee> = ...\nemployees.shouldBeSorted()\n          shouldHaveSize(4)\n          shouldContain(Employee("Sam", "Chicago"))\n')),(0,s.kt)("p",null,"Of course, this is entirely optional."),(0,s.kt)("h3",{id:"property-test-module-for-kotlinx-datetime"},"Property test module for kotlinx datetime"),(0,s.kt)("p",null,"Kotest's expansive property test generators now include ones for the incubating kotlinx datetime library."),(0,s.kt)("p",null,"Add the module ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest-property-datetime")," to your build. These generators are available for JVM and JS."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"forAll(Arb.datetime(1987..1994)) { date ->\n   isValidStarTrekTngSeason(date) shouldBe true\n}\n")),(0,s.kt)("h3",{id:"option-to-strip-whitespace-from-test-names"},"Option to strip whitespace from test names"),(0,s.kt)("p",null,"If you like to define test names over multiple lines, Kotest will now strip out leading, trailing and repeated whitespace from test names."),(0,s.kt)("p",null,"For example, the following spec:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MySpec : StringSpec() {\n  init {\n   """this is a\n      test spanning multiple lines""" { }\n  }\n}\n')),(0,s.kt)("p",null,"Would normally be output as ",(0,s.kt)("inlineCode",{parentName:"p"},"this is a      test spanning multiple lines")),(0,s.kt)("p",null,"By setting the configuration object ",(0,s.kt)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," to true, this would instead by output as ",(0,s.kt)("inlineCode",{parentName:"p"},"this is a test spanning multiple lines")),(0,s.kt)("h3",{id:"thanks"},"Thanks"),(0,s.kt)("p",null,"Huge thanks to all who contributed to this release (includes commits since v4.2.0 tag):"),(0,s.kt)("p",null,"AJ Alt, Alex Facciorusso, Ashish Kumar Joy, J Phani Mahesh, Jasper de Vries, Javier Segovia C\xf3rdoba,\nJosh Graham, KeremAslan, Leonardo Colman, Micha\u0142 Sikora, Mitchell Yuwono, Neenad Ingole, Rick Busarow,\nSergKhram, Sergei Khramkov, crazyk2, sksamuel"))}u.isMDXComponent=!0},84586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datatest1-55f0023d0e24fd14ff7081a3746e32ef.png"}}]);