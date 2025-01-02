"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["30992"],{83119:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>l});var a=JSON.parse('{"type":"mdx","permalink":"/tests/pages/diagrams","source":"@site/_dogfooding/_pages tests/diagrams.mdx","title":"Diagram Examples","description":"Invalid Diagrams","frontMatter":{},"lastUpdatedBy":"Lehoczky Zolt\xe1n","lastUpdatedAt":1735575746000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/diagrams.mdx","unlisted":false}'),i=t("85893"),r=t("80980"),s=t("46291"),o=t("67860");let l={},c="Diagram Examples",d={},u=[{value:"Invalid Diagrams",id:"invalid-diagrams",level:2},{value:"Invalid type",id:"invalid-type",level:3},{value:"Invalid content",id:"invalid-content",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Sequence Diagram (forest theme directive)",id:"sequence-diagram-forest-theme-directive",level:2},{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Flow Chart",id:"flow-chart",level:2},{value:"With Markdown:",id:"with-markdown",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"State Diagram",id:"state-diagram",level:2},{value:"Entity Relationship Diagram",id:"entity-relationship-diagram",level:2},{value:"User Journey",id:"user-journey",level:2},{value:"Pie Chart",id:"pie-chart",level:2},{value:"Requirement Diagram",id:"requirement-diagram",level:2},{value:"Gitgraph (Git) Diagram",id:"gitgraph-git-diagram",level:2},{value:"Mermaid in tabs",id:"mermaid-in-tabs",level:2},{value:"Mindmap",id:"mindmap",level:2},{value:"Quadrant Chart",id:"quadrant-chart",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"diagram-examples",children:"Diagram Examples"})}),"\n",(0,i.jsx)(n.h2,{id:"invalid-diagrams",children:"Invalid Diagrams"}),"\n",(0,i.jsx)(n.p,{children:"Those errors should not crash the whole page"}),"\n",(0,i.jsx)(n.h3,{id:"invalid-type",children:"Invalid type"}),"\n",(0,i.jsx)(n.mermaid,{value:"badType\n    participant Alice\n    participant Bob"}),"\n",(0,i.jsx)(n.h3,{id:"invalid-content",children:"Invalid content"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    badInstruction Alice\n    participant Bob"}),"\n",(0,i.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!"}),"\n",(0,i.jsx)(n.h2,{id:"sequence-diagram-forest-theme-directive",children:"Sequence Diagram (forest theme directive)"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to override default config locally with Mermaid text directives such as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'%%{init: { "theme": "forest" } }%%\n'})}),"\n",(0,i.jsx)(n.mermaid,{value:'%%{init: { "theme": "forest" } }%%\n\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John--\x3e>Alice: Great!\n    John->>Bob: How about you?\n    Bob--\x3e>John: Jolly good!'}),"\n",(0,i.jsx)(n.h2,{id:"gantt-chart",children:"Gantt Chart"}),"\n",(0,i.jsx)(n.mermaid,{value:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d"}),"\n",(0,i.jsx)(n.h2,{id:"flow-chart",children:"Flow Chart"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[Start] --\x3e B{Is it?}\n    B --\x3e|Yes| C[OK]\n    C --\x3e D[Rethink]\n    D --\x3e B\n    B ----\x3e|No| E[End]"}),"\n",(0,i.jsx)(n.h3,{id:"with-markdown",children:"With Markdown:"}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart LR\n    markdown["`This **is** _Markdown_`"]\n    newLines["`Line1\n    Line 2\n    Line 3`"]\n    markdown --\x3e newLines'}),"\n",(0,i.jsx)(n.h2,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:" classDiagram\n      Animal <|-- Duck\n      Animal <|-- Fish\n      Animal <|-- Zebra\n      Animal : +int age\n      Animal : +String gender\n      Animal: +isMammal()\n      Animal: +mate()\n      class Duck{\n          +String beakColor\n          +swim()\n          +quack()\n      }\n      class Fish{\n          -int sizeInFeet\n          -canEat()\n      }\n      class Zebra{\n          +bool is_wild\n          +run()\n      }"}),"\n",(0,i.jsx)(n.h2,{id:"state-diagram",children:"State Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"stateDiagram-v2\n    [*] --\x3e Active\n\n    state Active {\n        [*] --\x3e NumLockOff\n        NumLockOff --\x3e NumLockOn : EvNumLockPressed\n        NumLockOn --\x3e NumLockOff : EvNumLockPressed\n        --\n        [*] --\x3e CapsLockOff\n        CapsLockOff --\x3e CapsLockOn : EvCapsLockPressed\n        CapsLockOn --\x3e CapsLockOff : EvCapsLockPressed\n        --\n        [*] --\x3e ScrollLockOff\n        ScrollLockOff --\x3e ScrollLockOn : EvScrollLockPressed\n        ScrollLockOn --\x3e ScrollLockOff : EvScrollLockPressed\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"entity-relationship-diagram",children:"Entity Relationship Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"erDiagram\n    CAR ||--o{ NAMED-DRIVER : allows\n    CAR {\n        string registrationNumber\n        string make\n        string model\n    }\n    PERSON ||--o{ NAMED-DRIVER : is\n    PERSON {\n        string firstName\n        string lastName\n        int age\n    }"}),"\n",(0,i.jsx)(n.h2,{id:"user-journey",children:"User Journey"}),"\n",(0,i.jsx)(n.mermaid,{value:"journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If there's too much space above it's due to a ",(0,i.jsx)(n.a,{href:"https://github.com/mermaid-js/mermaid/issues/3501",children:"Mermaid bug"})]})}),"\n",(0,i.jsx)(n.h2,{id:"pie-chart",children:"Pie Chart"}),"\n",(0,i.jsx)(n.mermaid,{value:'pie showData\n    title Key elements in Product X\n    "Calcium" : 42.96\n    "Potassium" : 50.05\n    "Magnesium" : 10.01\n    "Iron" :  5'}),"\n",(0,i.jsx)(n.h2,{id:"requirement-diagram",children:"Requirement Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:'    requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    functionalRequirement test_req2 {\n    id: 1.1\n    text: the second test text.\n    risk: low\n    verifymethod: inspection\n    }\n\n    performanceRequirement test_req3 {\n    id: 1.2\n    text: the third test text.\n    risk: medium\n    verifymethod: demonstration\n    }\n\n    interfaceRequirement test_req4 {\n    id: 1.2.1\n    text: the fourth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    physicalRequirement test_req5 {\n    id: 1.2.2\n    text: the fifth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    designConstraint test_req6 {\n    id: 1.2.3\n    text: the sixth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    element test_entity2 {\n    type: word doc\n    docRef: reqs/test_entity\n    }\n\n    element test_entity3 {\n    type: "test suite"\n    docRef: github.com/all_the_tests\n    }\n\n\n    test_entity - satisfies -> test_req2\n    test_req - traces -> test_req2\n    test_req - contains -> test_req3\n    test_req3 - contains -> test_req4\n    test_req4 - derives -> test_req5\n    test_req5 - refines -> test_req6\n    test_entity3 - verifies -> test_req5\n    test_req <- copies - test_entity2'}),"\n",(0,i.jsx)(n.h2,{id:"gitgraph-git-diagram",children:"Gitgraph (Git) Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%\n      gitGraph\n        commit\n        branch hotfix\n        checkout hotfix\n        commit\n        branch develop\n        checkout develop\n        commit id:\"ash\" tag:\"abc\"\n        branch featureB\n        checkout featureB\n        commit type:HIGHLIGHT\n        checkout main\n        checkout hotfix\n        commit type:NORMAL\n        checkout develop\n        commit type:REVERSE\n        checkout featureB\n        commit\n        checkout main\n        merge hotfix\n        checkout featureB\n        commit\n        checkout develop\n        branch featureA\n        commit\n        checkout develop\n        merge hotfix\n        checkout featureA\n        commit\n        checkout featureB\n        commit\n        checkout develop\n        merge featureA\n        branch release\n        checkout release\n        commit\n        checkout main\n        commit\n        checkout release\n        merge main\n        checkout develop\n        merge release"}),"\n",(0,i.jsx)(n.h2,{id:"mermaid-in-tabs",children:"Mermaid in tabs"}),"\n","\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(o.Z,{value:"tab-a",children:[(0,i.jsx)(n.p,{children:"The following mermaid diagram is shown:"}),(0,i.jsx)(n.mermaid,{value:"graph LR\n  a ---\x3e c(10)\n  b ---\x3e c(10)"})]}),(0,i.jsxs)(o.Z,{value:"tab-b",children:[(0,i.jsx)(n.p,{children:"This mermaid diagram is not displayed:"}),(0,i.jsx)(n.mermaid,{value:"graph LR\n  d ---\x3e z(42)\n  e ---\x3e z(42)"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"mindmap",children:"Mindmap"}),"\n",(0,i.jsx)(n.mermaid,{value:"mindmap\n  root((conda-forge))\n    (Repos)\n        (Package building)\n            [*-feedstock]\n            [staged-recipes]\n            [cdt-builds]\n            [msys2-recipes]\n        (Maintenance)\n            [admin-requests]\n            [repodata-patches]\n        (Configuration)\n            [.github]\n            [.cirun]\n            [conda-forge-pinning]\n            [conda-forge-ci-setup]\n            [docker-images]\n            [conda-smithy]\n        (Automations)\n            [admin-migrations]\n            [artifact-validation]\n            [regro/cf-scripts]\n            [conda-forge-webservices]\n            [regro/cf-graph-countyfair]\n            [regro/libcfgraph + regro/libcflib]\n            [feedstock-outputs]\n        (Communications)\n            [conda-forge.github.io]\n            [blog]\n            [status]\n            [by-the-numbers]\n            [conda-forge-status-monitor]\n            [feedstocks]\n    (Bots & apps)\n        [conda-forge-admin]\n        [conda-forge-bot]\n        [conda-forge-coordinator]\n        [conda-forge-daemon]\n        [conda-forge-linter]\n        [conda-forge-manager]\n        [conda-forge-status]\n        [regro-cf-autotick-bot]\n        [conda-forge-curator]\n        [conda-forge-webservices]\n    (Delivery)\n        [anaconda.org]\n        [ghcr.io]\n        [quay.io]\n    (Installers)\n        Miniforge\n        Mambaforge\n    (CI for builds)\n        Azure Pipelines\n        Travis CI\n        cirun.io\n    (Infra)\n        Heroku\n        Github Actions\n        Circle CI"}),"\n",(0,i.jsx)(n.h2,{id:"quadrant-chart",children:"Quadrant Chart"}),"\n",(0,i.jsx)(n.mermaid,{value:"quadrantChart\n    title Reach and engagement of campaigns\n    x-axis Low Reach --\x3e High Reach\n    y-axis Low Engagement --\x3e High Engagement\n    quadrant-1 We should expand\n    quadrant-2 Need to promote\n    quadrant-3 Re-evaluate\n    quadrant-4 May be improved\n    Campaign A: [0.3, 0.6]\n    Campaign B: [0.45, 0.23]\n    Campaign C: [0.57, 0.69]\n    Campaign D: [0.78, 0.34]\n    Campaign E: [0.40, 0.34]\n    Campaign F: [0.35, 0.78]"}),"\n",(0,i.jsx)(n.h2,{id:"architecture-diagram",children:"Architecture Diagram"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"https://mermaid.js.org/syntax/architecture",children:"https://mermaid.js.org/syntax/architecture"})]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/10508",children:"https://github.com/facebook/docusaurus/discussions/10508"})]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"architecture-beta\n    group api(cloud)[API]\n\n    service db(database)[Database] in api\n    service disk1(disk)[Storage] in api\n    service disk2(disk)[Storage] in api\n    service server(server)[Server] in api\n\n    db:L -- R:server\n    disk1:T -- B:server\n    disk2:T -- B:db"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},67860:function(e,n,t){t.d(n,{Z:()=>s});var a=t("85893");t("67294");var i=t("90496");let r="tabItem_pnkT";function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:t,children:n})}},46291:function(e,n,t){t.d(n,{Z:()=>k});var a=t("85893"),i=t("67294"),r=t("90496"),s=t("12451"),o=t("3620"),l=t("89637"),c=t("74417"),d=t("46918"),u=t("58247");function m(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var g=t("8903");let p="tabList_Qoir",f="tabItem_AQgk";function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{let n=e.currentTarget,t=l[c.indexOf(n)].value;t!==i&&(d(n),o(t))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1]}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{c.push(e)},onKeyDown:m,onClick:u,...s,className:(0,r.Z)("tabs__item",f,s?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:s}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=o.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,r=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??m(t).map(e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[s,g]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:r})),[p,f]=function(e){let{queryString:n=!1,groupId:t}=e,a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),s=(0,c._X)(r);return[s,(0,i.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})},[r,a])]}({queryString:t,groupId:a}),[v,b]=function(e){var n;let{groupId:t}=e;let a=(n=t)?`docusaurus.tab.${n}`:null,[r,s]=(0,u.Nk)(a);return[r,(0,i.useCallback)(e=>{if(!!a)s.set(e)},[a,s])]}({groupId:a}),x=(()=>{let e=p??v;return h({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{x&&g(x)},[x]),{selectedValue:s,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),b(e)},[f,b,r]),tabValues:r}}(e);return(0,a.jsxs)("div",{className:(0,r.Z)("tabs-container",p),children:[(0,a.jsx)(v,{...n,...e}),(0,a.jsx)(b,{...n,...e})]})}function k(e){let n=(0,g.Z)();return(0,a.jsx)(x,{...e,children:m(e.children)},String(n))}},80980:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);