"use strict";(self.webpackChunkthalo_docs=self.webpackChunkthalo_docs||[]).push([[9],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,description:"Get started using the Thalo Runtime."},i="Using the Runtime",l={unversionedId:"runtime/using-the-runtime",id:"runtime/using-the-runtime",title:"Using the Runtime",description:"Get started using the Thalo Runtime.",source:"@site/docs/runtime/using-the-runtime.md",sourceDirName:"runtime",slug:"/runtime/using-the-runtime",permalink:"/docs/runtime/using-the-runtime",draft:!1,editUrl:"https://github.com/thalo-rs/thalo-docs/tree/main/packages/create-docusaurus/templates/shared/docs/runtime/using-the-runtime.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Get started using the Thalo Runtime."},sidebar:"tutorialSidebar",previous:{title:"Installation Docker Compose",permalink:"/docs/runtime/installation-docker-compose"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},s={},u=[{value:"Thalo CLI",id:"thalo-cli",level:2},{value:"Install",id:"install",level:3},{value:"Publish a Module",id:"publish-a-module",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-runtime"},"Using the Runtime"),(0,a.kt)("p",null,"Once ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/message-db/message-db"},"Message DB")," is configured and running, the runtime can be started by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"thalo --database-url <URL>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"\u276f thalo --database-url=postgres://thalo_runtime:password@localhost:5432/postgres\nINFO listening on [::1]:4433\n")),(0,a.kt)("h2",{id:"thalo-cli"},"Thalo CLI"),(0,a.kt)("p",null,"Thalo provides a cli for interacting with the runtime with the QUIC protocol."),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("p",null,"To install with Cargo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --git https://github.com/thalo-rs/thalo thalo_cli\n")),(0,a.kt)("h3",{id:"publish-a-module"},"Publish a Module"),(0,a.kt)("p",null,"After compiling a module to a wasm component, it can be published to the runtime using the ",(0,a.kt)("inlineCode",{parentName:"p"},"thalo-cli publish")," command."),(0,a.kt)("p",null,"The publish command takes a path to a schema, and wasm component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"thalo-cli publish <SCHEMA> <WASM>\n")),(0,a.kt)("p",null,"An example might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"thalo-cli publish ./counter.esdl ./counter.component.wasm\n")))}p.isMDXComponent=!0}}]);