import{g as y,e as M,a1 as V,r as $,j as L,q,s as G,o as x,m as N,u as w,U as J,p as Q,d as X,a as W,c as Y,y as I,b as j}from"./ynGhil90.js";import{A as T,B as K,h as E,C as k,p as ee,D as O,E as te,u as U,k as re}from"./FdjDsa7y.js";import{_ as ie}from"./DlAUqK2U.js";async function se(e,t){return await ne(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function ne(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function B(e){return t=>t?e[t]||t:e.missingValue}function oe({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=B(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=B(s[n]))}),(n={})=>Object.entries(n).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const d=s[a];return typeof d=="function"&&(c=d(n[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(i)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function ae(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function le(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ce(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function de(e){const t={options:e},i=(s,n={})=>D(t,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:T(n,o.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,o,a)=>r(n,o,{...e.presets[s],...a});return r.options=e,r.getImage=i,r.getMeta=(s,n)=>ue(t,s,n),r.getSizes=(s,n)=>ge(t,s,n),t.$img=r,r}async function ue(e,t,i){const r=D(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await se(e,r.url)}function D(e,t,i){var d,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=fe(e,i.provider||e.options.provider),n=me(e,i.preset);if(t=E(t)?t:K(t),!r.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const h=e.options.alias[g];h&&(t=k(h,t.slice(g.length)))}}if(r.validateDomains&&E(t)){const g=ee(t).host;if(!e.options.domains.find(h=>h===g))return{url:t}}const o=T(i,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(d=o.modifiers)!=null&&d.width&&(o.modifiers.width=v(o.modifiers.width)),(u=o.modifiers)!=null&&u.height&&(o.modifiers.height=v(o.modifiers.height));const c=r.getImage(t,o,e);return c.format=c.format||a||"",c}function fe(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function me(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ge(e,t,i){var S,z,A,l,f;const r=v((S=i.modifiers)==null?void 0:S.width),s=v((z=i.modifiers)==null?void 0:z.height),n=ce(i.sizes),o=(A=i.densities)!=null&&A.trim()?ae(i.densities.trim()):e.options.densities;le(o);const a=r&&s?s/r:0,c=[],d=[];if(Object.keys(n).length>=1){for(const m in n){const p=C(m,String(n[m]),s,a,e);if(p!==void 0){c.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const _ of o)d.push({width:p._cWidth*_,src:P(e,t,i,p,_)})}}he(c)}else for(const m of o){const p=Object.keys(n)[0];let _=p?C(p,String(n[p]),s,a,e):void 0;_===void 0&&(_={size:"",screenMaxWidth:0,_cWidth:(l=i.modifiers)==null?void 0:l.width,_cHeight:(f=i.modifiers)==null?void 0:f.height}),d.push({width:m,src:P(e,t,i,_,m)})}pe(d);const u=d[d.length-1],g=c.length?c.map(m=>`${m.media?m.media+" ":""}${m.size}`).join(", "):void 0,h=g?"w":"x",b=d.map(m=>`${m.src} ${m.width}${h}`).join(", ");return{sizes:g,srcset:b,src:u==null?void 0:u.src}}function C(e,t,i,r,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const c=r?Math.round(a*r):i;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:c}}function P(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function he(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function pe(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const ve=oe({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>O(e)+"_"+O(t)}),ye=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=ve(t)||"_";return i||(i=k(r.options.nuxt.baseURL,"/_ipx")),{url:k(i,s,te(e))}},we=!0,_e=!0,be=Object.freeze(Object.defineProperty({__proto__:null,getImage:ye,supportsAlias:_e,validateDomains:we},Symbol.toStringTag,{value:"Module"})),F={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};F.providers={ipx:{provider:be,defaults:{}}};const H=()=>{const e=re(),t=U();return t.$img||t._img||(t._img=de({...F,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function Se(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const xe={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},qe=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=H(),s=y(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},Ae={...xe,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1},custom:{type:Boolean,required:!1}},ze=["src"],R=M({__name:"NuxtImg",props:Ae,emits:["load","error"],setup(e,{emit:t}){const i=e,r=V(),s=t,n=!1,o=H(),a=qe(i),c=$(!1),d=$(),u=y(()=>o.getSizes(i.src,{...a.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...a.modifiers.value,width:v(i.width),height:v(i.height)}})),g=y(()=>{const l={...a.attrs.value,"data-nuxt-img":""};return(!i.placeholder||c.value)&&(l.sizes=u.value.sizes,l.srcset=u.value.srcset),l}),h=y(()=>{let l=i.placeholder;if(l===""&&(l=!0),!l||c.value)return!1;if(typeof l=="string")return l;const f=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return o(i.src,{...a.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},a.options.value)}),b=y(()=>i.sizes?u.value.src:o(i.src,a.modifiers.value,a.options.value)),S=y(()=>h.value?h.value:b.value),A=U().isHydrating;return L(()=>{if(h.value||i.custom){const l=new Image;b.value&&(l.src=b.value),i.sizes&&(l.sizes=u.value.sizes||"",l.srcset=u.value.srcset),l.onload=f=>{c.value=!0,s("load",f)},l.onerror=f=>{s("error",f)},Se("nuxt-image");return}d.value&&(d.value.complete&&A&&(d.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),d.value.onload=l=>{s("load",l)},d.value.onerror=l=>{s("error",l)})}),(l,f)=>l.custom?G(l.$slots,"default",J(N({key:1},{...w(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...g.value,...w(r)},isLoaded:c.value,src:S.value}))):(x(),q("img",N({key:0,ref_key:"imgEl",ref:d,class:i.placeholder&&!c.value?i.placeholderClass:void 0},{...w(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...w(r)},{src:S.value}),null,16,ze))}});R.__docgenInfo={exportName:"default",displayName:"NuxtImg",description:"",tags:{},events:[{name:"load",type:{names:["Event"]}},{name:"error",type:{names:["union"],elements:[{name:"string"},{name:"Event"}]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"imgAttrs",title:"binding"},{name:"isLoaded",title:"binding"},{name:"src",title:"binding"},{name:"v-bind",title:"binding"}]}],sourceFiles:["/home/runner/work/visity.me/visity.me/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue"]};const Ie=Symbol.for("nuxt:client-only"),$e=M({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:i}){const r=$(!1);return L(()=>{r.value=!0}),Q(Ie,!0),s=>{var c;if(r.value)return(c=t.default)==null?void 0:c.call(t);const n=t.fallback||t.placeholder;if(n)return n();const o=s.fallback||s.placeholder||"",a=s.fallbackTag||s.placeholderTag||"span";return q(a,i,o)}}}),Z=M({__name:"Avatar",props:{src:{},alt:{},size:{}},setup(e){const t=e,i=y(()=>{switch(t.size){case"sm":return"w-12 h-12";case"md":return"w-24 h-24";case"lg":return"w-52 h-52";default:return"w-52 h-52"}});return(r,s)=>{const n=R,o=$e;return x(),q("div",null,[X(o,{"fallback-tag":"span"},{fallback:W(()=>[(x(),q("svg",{class:I(["text-gray-300",w(i)]),viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},s[1]||(s[1]=[j("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"},null,-1)]),2))]),default:W(()=>[t.src?(x(),Y(n,{key:0,src:t.src,alt:t.alt||"Avatar",class:I(w(i))},null,8,["src","alt","class"])):(x(),q("svg",{key:1,class:I(["text-gray-300",w(i)]),viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},s[0]||(s[0]=[j("path",{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z","clip-rule":"evenodd"},null,-1)]),2))]),_:1})])}}}),ke={},Me={$style:ke},Ee=ie(Z,[["__cssModules",Me],["__scopeId","data-v-edb90456"]]);Z.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",required:!0,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"alt",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/Avatar.vue"]};export{Ee as _};
