"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[725],{1928:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"migration-v11",title:"Migration to 11.0"},s=void 0,c={unversionedId:"migration-v11",id:"migration-v11",title:"Migration to 11.0",description:"Migration to React Native Testing Library version 11 from version 9.x or 10.x should be a relatively easy task due small amount of breaking changes.",source:"@site/docs/MigrationV11.md",sourceDirName:".",slug:"/migration-v11",permalink:"/react-native-testing-library/docs/migration-v11",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/docs/MigrationV11.md",tags:[],version:"current",frontMatter:{id:"migration-v11",title:"Migration to 11.0"},sidebar:"docs",previous:{title:"Queries",permalink:"/react-native-testing-library/docs/api-queries"},next:{title:"Migration to 9.0",permalink:"/react-native-testing-library/docs/migration-v9"}},p={},u=[{value:"Update to Jest 28 if you use fake timers",id:"update-to-jest-28-if-you-use-fake-timers",level:2},{value:"Refactor legacy <code>waitForOptions</code> position",id:"refactor-legacy-waitforoptions-position",level:2},{value:"Triggering non-touch events on targes with <code>pointerEvents=&quot;box-none&quot;</code> prop",id:"triggering-non-touch-events-on-targes-with-pointereventsbox-none-prop",level:2}],g={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Migration to React Native Testing Library version 11 from version 9.x or 10.x should be a relatively easy task due small amount of breaking changes."),(0,i.kt)("h1",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("h2",{id:"update-to-jest-28-if-you-use-fake-timers"},"Update to Jest 28 if you use fake timers"),(0,i.kt)("p",null,"If you use fake timers in any of your tests you should update your Jest dependencies to version 28. This is due to the fact that ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/jest-object#jestusefaketimersfaketimersconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"jest.useFakeTimers()")," config structure")," has changed."),(0,i.kt)("h2",{id:"refactor-legacy-waitforoptions-position"},"Refactor legacy ",(0,i.kt)("inlineCode",{parentName:"h2"},"waitForOptions")," position"),(0,i.kt)("p",null,"In version 9 we introducted query ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameters for each query type. This affected all ",(0,i.kt)("inlineCode",{parentName:"p"},"findBy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findAllBy")," queries because their signatures changed e.g. from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function findByText(text: TextMatch, waitForOptions?: WaitForOptions)\nfunction findAllByText(text: TextMatch, waitForOptions?: WaitForOptions)\n")),(0,i.kt)("p",null,"to "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function findByText(text: TextMatch, options?: TextMatchOptions, waitForOptions?: WaitForOptions)\nfunction findAllByText(text: TextMatch, options?: TextMatchOptions, waitForOptions?: WaitForOptions)\n")),(0,i.kt)("p",null,"In order to facilitate transition, in version 9 and 10, we provided a temporary possibility to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitForOptions")," like ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"interval"),", etc inside ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," argument. From this release we require passing these as the proper third parameter."),(0,i.kt)("p",null,"This change is easy to implement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"findByText(/Text/, { timeout: 1000 })\n")),(0,i.kt)("p",null,"should become"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"findByText(/Text/, {}, { timeout: 1000 })\n")),(0,i.kt)("h2",{id:"triggering-non-touch-events-on-targes-with-pointereventsbox-none-prop"},"Triggering non-touch events on targes with ",(0,i.kt)("inlineCode",{parentName:"h2"},'pointerEvents="box-none"')," prop"),(0,i.kt)("p",null,"Up to version 10, RNTL disables all events for a target with ",(0,i.kt)("inlineCode",{parentName:"p"},'pointerEvents="box-none"'),". This behavior is counter to how React Native itself functions. "),(0,i.kt)("p",null,"From version 11, RNTL continues to disable ",(0,i.kt)("inlineCode",{parentName:"p"},"press")," event for these targets but allows triggering other events, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"layout"),"."),(0,i.kt)("h1",{id:"all-changes"},"All changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"chore(breaking): update Jest to 28 by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1008"},"https://github.com/callstack/react-native-testing-library/pull/1008")),(0,i.kt)("li",{parentName:"ul"},"refactor(breaking): remove legacy wait for options support by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1018"},"https://github.com/callstack/react-native-testing-library/pull/1018")),(0,i.kt)("li",{parentName:"ul"},"refactor(breaking): remove ",(0,i.kt)("inlineCode",{parentName:"li"},"byA11yStates")," queries by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1015"},"https://github.com/callstack/react-native-testing-library/pull/1015")),(0,i.kt)("li",{parentName:"ul"},"chore: update react-native to 0.69.1 by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1010"},"https://github.com/callstack/react-native-testing-library/pull/1010")),(0,i.kt)("li",{parentName:"ul"},"chore: update deps @types for react/react-native by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1013"},"https://github.com/callstack/react-native-testing-library/pull/1013")),(0,i.kt)("li",{parentName:"ul"},"feat: Trigger non-touch events on box-none targets by @dcalhoun in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/906"},"https://github.com/callstack/react-native-testing-library/pull/906")),(0,i.kt)("li",{parentName:"ul"},"docs: create document describing act function and related errors by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/969"},"https://github.com/callstack/react-native-testing-library/pull/969")),(0,i.kt)("li",{parentName:"ul"},"chore: Organise a11y queries by predicate by @MattAgn in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/977"},"https://github.com/callstack/react-native-testing-library/pull/977")),(0,i.kt)("li",{parentName:"ul"},"chore: reenable skipped byText tests by @mdjastrzebski in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/callstack/react-native-testing-library/pull/1017"},"https://github.com/callstack/react-native-testing-library/pull/1017"))),(0,i.kt)("h1",{id:"full-changelog"},"Full Changelog"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-testing-library/compare/v10.1.1...v11.0.0"},"https://github.com/callstack/react-native-testing-library/compare/v10.1.1...v11.0.0")))}m.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=c(n),m=r,h=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);