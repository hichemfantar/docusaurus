"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["17663"],{22083:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>u,contentTitle:()=>c});var r=JSON.parse('{"id":"advanced/index","title":"Advanced Tutorials","description":"This section is not going to be very structured, but we will cover the following topics:","source":"@site/docs/advanced/index.mdx","sourceDirName":"advanced","slug":"/advanced/","permalink":"/docs/advanced/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1737060821000,"frontMatter":{},"sidebar":"docs","previous":{"title":"What\'s next?","permalink":"/docs/guides/whats-next"},"next":{"title":"Architecture","permalink":"/docs/advanced/architecture"}}'),i=n("85893"),o=n("80980"),s=n("78042");let a={},c="Advanced Tutorials",l={},u=[];function d(e){let t={a:"a",h1:"h1",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"})}),"\n",(0,i.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n",(0,i.jsx)(s.Z,{}),"\n",(0,i.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,i.jsx)(t.a,{href:"/docs/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\uD83D\uDE09"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},78042:function(e,t,n){n.d(t,{Z:()=>w});var r=n("85893");n("67294");var i=n("90496"),o=n("85921"),s=n("35363"),a=n("11660"),c=n("82095"),l=n("77827"),u=n("57922");let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:s}=e;return(0,r.jsxs)(h,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,o.LM)(t),i=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function m(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(m,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,o.Ok)();return(0,r.jsx)(w,{items:n,className:t})}function w(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,o.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},11660:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(67294),i=n(8156);let o=["zero","one","two","few","many","other"];function s(e){return o.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},80980:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);