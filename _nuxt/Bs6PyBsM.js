import{_ as z}from"./Bksg9kKx.js";import{h as L,_ as B}from"./VnNK9LVT.js";import{d as y,e as _,k as n,o as t,R as f,Q as h,U as A,v as F,u as l,z as x,a as o,b as d,c as g,a3 as E,t as v,l as P,f as U,w as p,C as w}from"./6VV17LS1.js";import{_ as k}from"./DlAUqK2U.js";import{_ as V}from"./ByZg6SHC.js";import{_ as M}from"./BJtlxc-z.js";import{u as j}from"./BHaF486D.js";import{u as D}from"./ByRaIkWe.js";import"./XbrZPR0v.js";import"./D1uslvqJ.js";import"./CJWNgz2L.js";import"../sb-preview/runtime.js";const Q={role:"status","aria-label":"Chargement du contenu"},N=y({__name:"Text",props:{lines:{},width:{},height:{},spacing:{},variant:{}},setup(a){const s=a,i=L(s.height),u=_(()=>{if(s.width==="full")return{width:"100%"};const[e,r]=s.width.split("/").map(Number);return!isNaN(e)&&!isNaN(r)&&r!==0?{width:`${e/r*100}%`}:{width:"100%"}});return(e,r)=>(t(),n("div",Q,[(t(!0),n(f,null,h(e.lines,m=>(t(),n("div",{key:m,class:F(["animate-pulse rounded",[e.variant==="title"?"bg-gray-200":"bg-gray-100",e.spacing||"",m===e.lines?"":e.spacing||"",l(i)]]),style:A(l(u))},null,6))),128))]))}});N.__docgenInfo={exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"lines",required:!0,type:{name:"number"}},{name:"width",required:!0,type:{name:"TailwindFraction"}},{name:"height",required:!0,type:{name:"SizeType"}},{name:"spacing",required:!1,type:{name:"string"}},{name:"variant",required:!0,type:{name:"union",elements:[{name:'"title"'},{name:'"text"'}]}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/ui/skeleton/Text.vue"]};const R={class:"item",role:"status","aria-label":"Chargement du contenu"},Z={key:0,class:"shrink-0"},G={class:"text"},$=y({__name:"ItemList",props:{showAvatar:{type:Boolean},showTitle:{type:Boolean},lines:{}},setup(a){const s=a,i=_(()=>parseInt(`${s.lines}`)||3);return(u,e)=>{const r=B,m=N;return t(),n("div",R,[s.showAvatar?(t(),n("div",Z,[d(r,{size:"sm"})])):x("",!0),o("div",G,[s.showTitle?(t(),g(m,{key:0,lines:1,width:"1/3",height:"sm",variant:"title"})):x("",!0),(t(!0),n(f,null,h(l(i),b=>(t(),g(m,{key:b,lines:1,width:"2/3",height:"sm",variant:"text"}))),128))])])}}}),H=k($,[["__scopeId","data-v-033e8cba"]]);$.__docgenInfo={exportName:"default",displayName:"ItemList",description:"",tags:{},props:[{name:"showAvatar",required:!1,type:{name:"boolean"}},{name:"showTitle",required:!1,type:{name:"boolean"}},{name:"lines",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/ui/skeleton/ItemList.vue"]};const J={key:0,class:"mt-4"},C=y({__name:"Empty",props:{title:{},description:{}},setup(a){const s=E();return(i,u)=>(t(),n("section",null,[o("h3",null,v(i.title),1),o("p",null,v(i.description),1),l(s).default?(t(),n("div",J,[P(i.$slots,"default",{},void 0,!0)])):x("",!0)]))}}),K=k(C,[["__scopeId","data-v-582766a1"]]);C.__docgenInfo={exportName:"default",displayName:"Empty",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/template/Empty.vue"]};const O=()=>{const a=j(),s=D(),i=_(()=>a.profiles),u=_(()=>a.loading);return U(()=>{a.fetchProfiles(),s.clearComponents()}),{profiles:i,loading:u}},W={class:"mb-6 border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between"},X={class:"mt-3 sm:ml-4 sm:mt-0"},Y={key:0,class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},ee={key:1,class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},te={class:"shrink-0"},se={class:"min-w-0 flex-1"},oe={class:"text-sm font-medium text-gray-900"},ne={class:"truncate text-sm text-gray-500"},ie=y({__name:"index",setup(a){const{profiles:s,loading:i}=O();return(u,e)=>{const r=z,m=H,b=V,S=K,I=M;return t(),g(I,{name:"dashboard"},{default:p(()=>[o("section",W,[e[1]||(e[1]=o("h3",{class:"text-base font-semibold text-gray-900"}," Profiles ",-1)),o("div",X,[d(r,{to:"/dashboard/profiles/create",class:"inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>e[0]||(e[0]=[w(" Nouveau profil ")])),_:1})])]),l(i)?(t(),n("section",Y,[(t(),n(f,null,h(4,c=>d(m,{key:c,"show-avatar":!0,"show-title":!0,lines:"1"})),64))])):l(s)&&l(s).length>0?(t(),n("section",ee,[(t(!0),n(f,null,h(l(s),({username:c,bio:T,image:q})=>(t(),n("div",{key:c,class:"relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"},[o("div",te,[d(b,{src:q,size:"sm"},null,8,["src"])]),o("div",se,[d(r,{to:`/dashboard/profiles/${c}`},{default:p(()=>[e[2]||(e[2]=o("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),o("p",oe,v(c),1),o("p",ne,v(T),1)]),_:2},1032,["to"])])]))),128))])):(t(),g(S,{key:2,title:"Aucun profil",description:"Créez un nouveau profil pour commencer."},{default:p(()=>[d(r,{to:"/dashboard/profiles/create",class:"inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>e[3]||(e[3]=[o("svg",{class:"-ml-0.5 mr-1.5 size-5",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})],-1),w(" Nouveau profil ")])),_:1})]),_:1}))]),_:1})}}});ie.__docgenInfo={exportName:"default",displayName:"dashboard",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/pages/dashboard/index.vue"]};export{ie as default};
