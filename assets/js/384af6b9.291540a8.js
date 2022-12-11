"use strict";(self.webpackChunkthalo_docs=self.webpackChunkthalo_docs||[]).push([[167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Create a Component",l={unversionedId:"tutorial-basics/create-a-component",id:"tutorial-basics/create-a-component",title:"Create a Component",description:"Components in Thalo are the core business logic of your app and are used to handle commands and generate events.",source:"@site/docs/tutorial-basics/create-a-component.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-component",permalink:"/docs/tutorial-basics/create-a-component",draft:!1,editUrl:"https://github.com/thalo-rs/thalo-docs/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-component.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Compiling to WASM Component",permalink:"/docs/tutorial-basics/compiling-a-component"}},s={},m=[{value:"Schema",id:"schema",level:2},{value:"Schema Syntax",id:"schema-syntax",level:3},{value:"Module",id:"module",level:2},{value:"Creating the Counter crate",id:"creating-the-counter-crate",level:3},{value:"Defining Aggregate State",id:"defining-aggregate-state",level:3},{value:"Implementing Aggregate Logic",id:"implementing-aggregate-logic",level:3},{value:"Exporting Aggregate",id:"exporting-aggregate",level:3}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-component"},"Create a Component"),(0,r.kt)("p",null,"Components in Thalo are the core business logic of your app and are used to ",(0,r.kt)("strong",{parentName:"p"},"handle commands")," and ",(0,r.kt)("strong",{parentName:"p"},"generate events"),"."),(0,r.kt)("p",null,"A component consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#schema"},"schema"),", written in the Event-Sourcing Schema Definition Language (ESDL)"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#module"},"module"),", containing the business logic and is compiled to a WASM component")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Thalo uses a schema definition language called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thalo-rs/esdl"},"ESDL")," (",(0,r.kt)("strong",{parentName:"p"},"E"),"vent-sourcing ",(0,r.kt)("strong",{parentName:"p"},"S"),"chema ",(0,r.kt)("strong",{parentName:"p"},"D"),"efinition ",(0,r.kt)("strong",{parentName:"p"},"L"),"anguage) to define components."),(0,r.kt)("p",null,"ESDL schemas are written in .esdl files alongside your modules, and are used for code generation, detecting breaking\nchanges, and generating documentation."),(0,r.kt)("h3",{id:"schema-syntax"},"Schema Syntax"),(0,r.kt)("p",null,"Let's create a schema for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," component in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.esdl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="counter.esdl"',title:'"counter.esdl"'},'version = "0.1.0"\n\naggregate Counter {\n  increment(amount: Int) -> Incremented\n  decrement(amount: Int) -> Decremented\n}\n\nevent Incremented {\n  amount: Int\n}\n\nevent Decremented {\n  amount: Int\n}\n')),(0,r.kt)("p",null,"Here's a breakdown of the schema:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'version = "0.1.0"'),": Defines a version for our schema. This must follow the ",(0,r.kt)("a",{parentName:"li",href:"https://semver.org/"},"SemVer")," specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aggregate Counter { ... }"),": Defines our ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter")," aggregate, which has two commands: ",(0,r.kt)("inlineCode",{parentName:"li"},"increment")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"decrement"),".\nBoth commands take an ",(0,r.kt)("inlineCode",{parentName:"li"},"amount")," parameter and return an event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event Incremented { ... }"),": Defines an ",(0,r.kt)("inlineCode",{parentName:"li"},"Incremented")," event with one field, ",(0,r.kt)("inlineCode",{parentName:"li"},"amount"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event Decremented { ... }"),": Defines an ",(0,r.kt)("inlineCode",{parentName:"li"},"Decremented")," event with one field, ",(0,r.kt)("inlineCode",{parentName:"li"},"amount"),".")),(0,r.kt)("p",null,"For more information on the syntax, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thalo-rs/esdl#esdl"},"ESDL repository README"),"."),(0,r.kt)("h2",{id:"module"},"Module"),(0,r.kt)("p",null,"A module contains your business logic and is compiled to a WASM component."),(0,r.kt)("h3",{id:"creating-the-counter-crate"},"Creating the Counter crate"),(0,r.kt)("p",null,"First, create a new library crate with Cargo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new counter --lib\ncd counter\n")),(0,r.kt)("p",null,"Then add ",(0,r.kt)("inlineCode",{parentName:"p"},"thalo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serde")," as dependencies in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[dependencies]\nserde = { version = "*", features = ["derive"] }\nthalo = "*"\n')),(0,r.kt)("h3",{id:"defining-aggregate-state"},"Defining Aggregate State"),(0,r.kt)("p",null,"Next, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," file, define a struct called ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"thalo::Aggregate")," through the derive macro:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},'use serde::{Deserialize, Serialize};\nuse thalo::Aggregate;\n\n#[derive(Aggregate, Serialize, Deserialize)]\n#[aggregate(schema = "counter.esdl")]\npub struct Counter {\n    id: String,\n    count: i64,\n    sequence: i64,\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(Aggregate)]")," macro generates types for events and commands using the ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.esdl")," schema,\nalong with a trait called ",(0,r.kt)("inlineCode",{parentName:"p"},"CounterAggregate"),". This generated trait contains the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method for creating a new instance of our aggregate."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn new(id: String) -> Result<Self, Error>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Event handler methods, for applying events to update state."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn apply_incremented(&mut self, ctx: Context, event: Incremented)\nfn apply_decremented(&mut self, ctx: Context, event: Decremented)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Command handler methods, for handling commands and returning events."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn handle_increment(&self, ctx: &mut Context, amount: i32) -> Result<Incremented, Error>\nfn handle_decrement(&self, ctx: &mut Context, amount: i32) -> Result<Decremented, Error>\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'#[aggregate(schema = "counter.esdl")]')," must be set to the path of your schema file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#schema-syntax"},"Schema Syntax")," for writing the counter schema."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that we also derive ",(0,r.kt)("inlineCode",{parentName:"em"},"Serialize")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"Deserialize")," from serde."),"\n",(0,r.kt)("em",{parentName:"p"},"This is because Thalo runtime saves our aggregate state in memory when applying events and handling commands.")),(0,r.kt)("h3",{id:"implementing-aggregate-logic"},"Implementing Aggregate Logic"),(0,r.kt)("p",null,"Now we can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CounterAggregate")," trait to define the business logic for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," aggregate."),(0,r.kt)("p",null,"First, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"CounterAggregate")," implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},"impl CounterAggregate for Counter {\n    ...\n}\n")),(0,r.kt)("p",null,"Then, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," method to initialize our ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},"impl CounterAggregate for Counter {\n    fn new(id: String) -> Result<Self, Error> {\n        Ok(Counter {\n            id,\n            count: 0,\n            sequence: -1,\n        })\n    }\n    ...\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," stores the position of the last executed command in the message store, and can be used to ensure our\naggregate is idempotent."),(0,r.kt)("p",null,"Next, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," methods to update state when events are applied:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},"impl CounterAggregate for Counter {\n    ...\n\n    fn apply_incremented(&mut self, ctx: Context, event: Incremented) {\n        self.count += event.amount as i64;\n        self.sequence = ctx.position;\n    }\n\n    fn apply_decremented(&mut self, ctx: Context, event: Decremented) {\n        self.count -= event.amount as i64;\n        self.sequence = ctx.position;\n    }\n}\n")),(0,r.kt)("p",null,"Lastly, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," methods to valiate business rules and return events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},"impl CounterAggregate for Counter {\n    ...\n\n    fn handle_increment(&self, ctx: &mut Context, amount: i32) -> Result<Incremented, Error> {\n        if ctx.processed(self.sequence) {\n            return Err(Error::ignore());\n        }\n\n        Ok(Incremented { amount })\n    }\n\n    fn handle_decrement(&self, ctx: &mut Context, amount: i32) -> Result<Decremented, Error> {\n        if ctx.processed(self.sequence) {\n            return Err(Error::ignore());\n        }\n\n        Ok(Decremented { amount })\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.processed(self.sequence)")," is used to ensure our command handlers are idempotent,\nand do not return new events from already handled commands."),(0,r.kt)("h3",{id:"exporting-aggregate"},"Exporting Aggregate"),(0,r.kt)("p",null,"Once we have our aggregate impemented, the last step in our code is to export the aggregate using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"thalo::export_aggregate!")," macro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="lib.rs"',title:'"lib.rs"'},"use thalo::export_aggregate;\n\nexport_aggregate!(Counter);\n")),(0,r.kt)("p",null,"This exports some core functions in the compiled module for the Thalo runtime to call."))}c.isMDXComponent=!0}}]);