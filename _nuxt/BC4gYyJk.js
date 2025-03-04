const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BjPkg8PJ.js","./XcgaeAQ5.js","./BPGpSvqo.js","./DlAUqK2U.js","./DiPDwOVr.js","./ComponentResolver.DoB1YiBk.css","./B9HIKEVe.js","./gCRVBLQd.js","./BnyKHv2r.js","./CqeeoRjH.js","./BcerW91s.js","./D90GB2Iz.js","./CqkleIqs.js","./useFormValidator.jl9ECbbX.css","./B8h_tzLc.js","./BHaseYLp.js","./Primary.BqmH1Ikp.css","./Btol4_m8.js","./index.C-YWaDcJ.css","./CcYpwBbB.js","./register.CbQv0E6Y.css","./DOfmSM3X.js","./Ce70UemG.js","./CSNi29nk.js","./Avatar.2LgtPqbx.css","./pQcAQwse.js","./index.HqApbJ8u.css","./Bt1u0SkW.js","./BpjHcesV.js","./C18leCue.js","./BPcfVPFF.js","./Modal.Bara9nm_.css","./ug01hfsv.js","./J-iBSLV9.js","./PublicProfile.B5DyOwmb.css","./ClrQct_2.js","./CwEeM1f1.js","./DRLgmnwa.js","./amplF8EH.js","./Alert.De2aXbL1.css","./Dashboard.DdwSmHjB.css","./CdaPJIZx.js","./BrCvnF0a.js","./Footer.B6qGZbv1.css","./BaHHJq0B.js","./profile.CE-iJVgb.css"])))=>i.map(i=>d[i]);
var Ql=Object.defineProperty;var Zl=(t,e,n)=>e in t?Ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Pe=(t,e,n)=>Zl(t,typeof e!="symbol"?e+"":e,n);import{e as eu,s as tu}from"./BnyKHv2r.js";import{a8 as Xe,a5 as at,a9 as ks,M as la,aa as Ss,J as nu,n as As,ab as ru,u as Qe,f as de,I as su,H as Wt,d as ua,g as se,h as Rs,p as cr,r as vt,w as fa,T as iu,ac as da,G as Rn,ad as ha,ae as ou,L as au,af as cu,ag as lu,N as lr}from"./BPGpSvqo.js";import{_ as ne}from"./DiPDwOVr.js";const{global:uu}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:jw,setProjectAnnotations:Bw,composeStory:Ww,composeStories:Vw}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:_n}=uu;_n.STORYBOOK_ENV="vue3";_n.PLUGINS_SETUP_FUNCTIONS||(_n.PLUGINS_SETUP_FUNCTIONS=new Set);({...eu});try{(!1).decline&&(!1).decline()}catch{}function Nr(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Nr(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const fu={run:t=>t()},du=()=>fu,pa=typeof console.createTask<"u"?console.createTask:du;function hu(t,e){const n=e.shift(),r=pa(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function pu(t,e){const n=e.shift(),r=pa(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ur(t,e){for(const n of[...t])n(e)}class mu{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Nr(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Nr(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(hu,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(pu,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ur(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ur(this._after,s)}):(this._after&&s&&ur(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ma(){return new mu}function gu(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},l=()=>e===o?c:void 0;xr.add(l);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{xr.delete(l)}}}}function yu(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=gu({...t,...r})),e[n]}}}const Pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},pi="__unctx__",_u=Pn[pi]||(Pn[pi]=yu()),Lr=(t,e={})=>_u.get(t,e),mi="__unctx_async_handlers__",xr=Pn[mi]||(Pn[mi]=new Set);function Ze(t){const e=[];for(const s of xr){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const zw=!1,vu=!1,Gw={value:null,errorValue:null,deep:!0},bu=null,ga="nuxt-app",gi=36e5,wu="vite:preloadError";function ya(t=ga){return Lr(t,{asyncContext:!1})}const Eu="__nuxt_plugin";function Iu(t){var s;let e=0;const n={_id:t.id||ga||"nuxt-app",_scope:ks(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return n.vueApp.version}},payload:Xe({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Xe({}),state:at({}),once:new Set,_errors:Xe({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!la()?n._scope.run(()=>yi(n,i)):yi(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Xe({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=ma(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ln(n,a,o),ln(n.vueApp.config.globalProperties,a,o)},ln(n.vueApp,"$nuxt",n),ln(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(wu,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||j;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function Tu(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function ku(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function Su(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var u;const l=((u=c.dependsOn)==null?void 0:u.filter(d=>e.some(f=>f._name===d)&&!n.includes(d)))??[];if(l.length>0)r.push([new Set(l),c]);else{const d=ku(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([f,h])=>{f.has(c._name)&&(f.delete(c._name),f.size===0&&(o++,await a(h)))})))});c.parallel?s.push(d.catch(f=>i.push(f))):await d}}for(const c of e)Tu(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function J(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Eu]:!0,_name:e})}const Au=J;function yi(t,e,n){const r=()=>e();return ya(t._id).set(t),t.vueApp.runWithContext(r)}function Ru(t){var n;let e;return Ss()&&(e=(n=nu())==null?void 0:n.appContext.app.$nuxt),e=e||ya(t).tryUse(),e||null}function j(t){const e=Ru(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Vn(t){return j().$config}function ln(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const Pu=new Set(["title","titleTemplate","script","style","noscript"]),vn=new Set(["base","meta","link","style","script","noscript"]),Cu=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Ou=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),_a=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Nu=typeof window<"u";function Cn(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Dr(t){if(t._h)return t._h;if(t._d)return Cn(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Cn(e)}function Lu(t,e){return t instanceof Promise?t.then(e):e(t)}function Mr(t,e,n,r){const s=r||ba(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Mr(t,e,n,o));const i={tag:t,props:s};for(const o of _a){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Pu.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function xu(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function va(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=xu(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,va(t,e,n,s)));if(!e&&!_a.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function ba(t,e=!1){const n=va(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const Du=10;function wa(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,wa(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function Mu(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!Cu.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Mr(s,o,t));continue}e.push(Mr(s,i,t))}}if(e.length===0)return[];const r=[];return Lu(wa(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<Du)+i,s)))}const _i=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),vi={base:-10,title:10},bi={critical:-80,high:-10,low:20};function On(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in vi&&(n=vi[t.tag]),e&&e in bi?n+bi[e]:n}const Uu=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Fu=["name","property","http-equiv"];function Ea(t){const{props:e,tag:n}=t;if(Ou.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of Fu)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Le="%separator";function Hu(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const $u=new RegExp(`${Le}(?:\\s*${Le})*`,"g");function un(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Le);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Le||!i.includes(a))return a;const c=Hu(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Le)&&(t=t.slice(0,-Le.length)),t.startsWith(Le)&&(t=t.slice(Le.length)),t=t.replace($u,n).trim()),t}function wi(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Ia(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(f=>({tag:f,id:vn.has(f.tag)?Dr(f):f.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const h of["body","head"]){const m=(d=n[h])==null?void 0:d.children;for(const w of m){const _=w.tagName.toLowerCase();if(!vn.has(_))continue;const v={tag:_,props:await ba(w.getAttributeNames().reduce((k,O)=>({...k,[O]:w.getAttribute(O)}),{})),innerHTML:w.innerHTML},b=Ea(v);let y=b,S=1;for(;y&&f.has(y);)y=`${b}:${S++}`;y&&(v._d=y,f.add(y)),o.elMap[w.getAttribute("data-hid")||Dr(v)]=w}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(f,h,m){const w=`${f}:${h}`;o.sideEffects[w]=m,delete o.pendingSideEffects[w]}function c({id:f,$el:h,tag:m}){const w=m.tag.endsWith("Attrs");if(o.elMap[f]=h,w||(m.textContent&&m.textContent!==h.textContent&&(h.textContent=m.textContent),m.innerHTML&&m.innerHTML!==h.innerHTML&&(h.innerHTML=m.innerHTML),a(f,"el",()=>{var _;(_=o.elMap[f])==null||_.remove(),delete o.elMap[f]})),m._eventHandlers)for(const _ in m._eventHandlers)Object.prototype.hasOwnProperty.call(m._eventHandlers,_)&&h.getAttribute(`data-${_}`)!==""&&((m.tag==="bodyAttrs"?n.defaultView:h).addEventListener(_.substring(2),m._eventHandlers[_].bind(h)),h.setAttribute(`data-${_}`,""));for(const _ in m.props){if(!Object.prototype.hasOwnProperty.call(m.props,_))continue;const v=m.props[_],b=`attr:${_}`;if(_==="class"){if(!v)continue;for(const y of v.split(" "))w&&a(f,`${b}:${y}`,()=>h.classList.remove(y)),!h.classList.contains(y)&&h.classList.add(y)}else if(_==="style"){if(!v)continue;for(const y of v.split(";")){const S=y.indexOf(":"),k=y.substring(0,S).trim(),O=y.substring(S+1).trim();a(f,`${b}:${k}`,()=>{h.style.removeProperty(k)}),h.style.setProperty(k,O)}}else h.getAttribute(_)!==v&&h.setAttribute(_,v===!0?"":String(v)),w&&a(f,b,()=>h.removeAttribute(_))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of i){const{tag:h,shouldRender:m,id:w}=f;if(m){if(h.tag==="title"){n.title=h.textContent;continue}f.$el=f.$el||o.elMap[w],f.$el?c(f):vn.has(h.tag)&&l.push(f)}}for(const f of l){const h=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),c(f),u[h]=u[h]||n.createDocumentFragment(),u[h].appendChild(f.$el)}for(const f of i)await t.hooks.callHook("dom:renderTag",f,n,a);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in o.pendingSideEffects)o.pendingSideEffects[f]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function ju(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>Ia(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function Bu(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{ju(i,t)}}}}}const Wu=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Vu={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=Ea(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Dr(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Wu.has(r.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(On(r)>On(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&vn.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},zu=new Set(["script","link","bodyAttrs"]),Gu=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!zu.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&_i.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Cn(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);_i.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),qu=new Set(["link","style","script","noscript"]),Ku={hooks:{"tag:normalise":({tag:t})=>{t.key&&qu.has(t.tag)&&(t.props["data-hid"]=t._h=Cn(t.key))}}},Yu={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Xu={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of Uu){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=On(n),i=On(r);return s<i?-1:s>i?1:n._p-r._p})}}},Ju={meta:"content",link:"href",htmlAttrs:"lang"},Qu=["innerHTML","textContent"],Zu=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=un(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=Ju[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=un(a.props[c],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const l of Qu)typeof a[l]=="string"&&(a[l]=un(a[l],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=un(n.textContent,t._templateParams,t._separator))}}}),ef={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=wi(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=wi(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},tf={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Ta;function nf(t={}){const e=rf(t);return e.use(Bu()),Ta=e}function Ei(t,e){return!t||t==="server"&&e||t==="client"&&!e}function rf(t={}){const e=ma();e.addHooks(t.hooks||{}),t.document=t.document||(Nu?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),Ei(l.mode,n)&&e.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:s++,input:c,...l};return Ei(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(d=>d._i!==u._i),r()},patch(d){for(const f of i)f._i===u._i&&(f.input=u.input=d);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const d of await Mu(l)){const f={tag:d,entry:l,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[Vu,Yu,Gu,Ku,Xu,Zu,ef,tf,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function sf(){return Ta}const of=ru[0]==="3";function af(t){return typeof t=="function"?t():Qe(t)}function Ur(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=af(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Ur(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Qe(e[r]);continue}n[r]=Ur(e[r])}return n}return e}const cf={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Ur(e.input)}}},ka="usehead";function lf(t){return{install(n){of&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(ka,t))}}.install}function uf(t={}){t.domDelayFn=t.domDelayFn||(n=>As(()=>setTimeout(()=>n(),0)));const e=nf(t);return e.use(cf),e.install=lf(e),e}const Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hr="__unhead_injection_handler__";function ff(t){Fr[Hr]=t}function qw(){return Hr in Fr?Fr[Hr]():de(ka)||sf()}const Sa=/#/g,Aa=/&/g,Ra=/\//g,df=/=/g,hf=/\?/g,zn=/\+/g,pf=/%5e/gi,mf=/%60/gi,gf=/%7c/gi,yf=/%20/gi,_f=/%252f/gi;function Pa(t){return encodeURI(""+t).replace(gf,"|")}function $r(t){return Pa(typeof t=="string"?t:JSON.stringify(t)).replace(zn,"%2B").replace(yf,"+").replace(Sa,"%23").replace(Aa,"%26").replace(mf,"`").replace(pf,"^").replace(Ra,"%2F")}function fr(t){return $r(t).replace(df,"%3D")}function vf(t){return Pa(t).replace(Sa,"%23").replace(hf,"%3F").replace(_f,"%2F").replace(Aa,"%26").replace(zn,"%2B")}function Kw(t){return vf(t).replace(Ra,"%2F")}function Nn(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function bf(t){return Nn(t.replace(zn," "))}function wf(t){return Nn(t.replace(zn," "))}function Ef(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=bf(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=wf(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function If(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${fr(t)}=${$r(n)}`).join("&"):`${fr(t)}=${$r(e)}`:fr(t)}function Tf(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>If(e,t[e])).filter(Boolean).join("&")}const kf=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,Sf=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,Af=/^([/\\]\s*){2,}[^/\\]/,Rf=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Pf=/\/$|\/\?|\/#/,Cf=/^\.?\//;function ct(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?kf.test(t):Sf.test(t)||(e.acceptRelative?Af.test(t):!1)}function Of(t){return!!t&&Rf.test(t)}function jr(t="",e){return e?Pf.test(t):t.endsWith("/")}function Ps(t="",e){if(!e)return(jr(t)?t.slice(0,-1):t)||"/";if(!jr(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Br(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(jr(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function Nf(t=""){return t.startsWith("/")}function Ii(t=""){return Nf(t)?t:"/"+t}function Lf(t,e){if(Oa(e)||ct(t))return t;const n=Ps(e);return t.startsWith(n)?t:Cs(n,t)}function Ti(t,e){if(Oa(e))return t;const n=Ps(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function Ca(t,e){const n=Mf(t),r={...Ef(n.search),...e};return n.search=Tf(r),Uf(n)}function Oa(t){return!t||t==="/"}function xf(t){return t&&t!=="/"}function Cs(t,...e){let n=t||"";for(const r of e.filter(s=>xf(s)))if(n){const s=r.replace(Cf,"");n=Br(n)+s}else n=r;return n}function Na(...t){var o,a,c,l;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[d,f]of u.split(e).entries())if(!(!f||f===".")){if(f===".."){if(r.length===1&&ct(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+f;continue}r.push(f),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(l=n[n.length-1])!=null&&l.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function Df(t,e,n={}){return n.trailingSlash||(t=Br(t),e=Br(e)),n.leadingSlash||(t=Ii(t),e=Ii(e)),n.encoding||(t=Nn(t),e=Nn(e)),t===e}const La=Symbol.for("ufo:protocolRelative");function Mf(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,f=""]=n;return{protocol:d.toLowerCase(),pathname:f,href:d+f,auth:"",host:"",search:"",hash:""}}if(!ct(t,{acceptRelative:!0}))return ki(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:l,hash:u}=ki(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:l,hash:u,[La]:!r}}function ki(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function Uf(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[La]?(t.protocol||"")+"//":"")+s+i+e+n+r}function Ff(t,e){return{ctx:{table:t},matchAll:n=>Da(n,t)}}function xa(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,xa(s)])):new Map(Object.entries(t[n]));return e}function Hf(t){return Ff(xa(t))}function Da(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Si(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Si(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Da(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Si(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}const $f=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,jf=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Bf=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Wf(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Vf(t);return}return e}function Vf(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ln(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Bf.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($f.test(t)||jf.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Wf)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}function dr(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Wr(t,e,n=".",r){if(!dr(e))return Wr(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:dr(o)&&dr(s[i])?s[i]=Wr(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Ma(t){return(...e)=>e.reduce((n,r)=>Wr(n,r,"",t),{})}const zf=Ma(),Gf=Ma((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function qf(t,e){try{return e in t}catch{return!1}}class Vr extends Error{constructor(n,r={}){super(n,r);Pe(this,"statusCode",500);Pe(this,"fatal",!1);Pe(this,"unhandled",!1);Pe(this,"statusMessage");Pe(this,"data");Pe(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Gr(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=Ua(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Pe(Vr,"__h3_error__",!0);function zr(t){if(typeof t=="string")return new Vr(t);if(Kf(t))return t;const e=new Vr(t.message??t.statusMessage??"",{cause:t.cause||t});if(qf(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Gr(t.statusCode,e.statusCode):t.status&&(e.statusCode=Gr(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Ua(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Kf(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Yf=/[^\u0009\u0020-\u007E]/g;function Ua(t=""){return t.replace(Yf,"")}function Gr(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Yw=Symbol("layout-meta"),Xf=Symbol("route"),be=()=>{var t;return(t=j())==null?void 0:t.$router},Jf=()=>Ss()?de(Xf,j()._route):j()._route;const Qf=()=>{try{if(j()._processingMiddleware)return!0}catch{return!1}return!1},Ai=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Zf(t):be().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:l={}}=e.open,u=Object.entries(l).filter(([d,f])=>f!==void 0).map(([d,f])=>`${d.toLowerCase()}=${f}`).join(", ");return open(n,c,u),Promise.resolve()}const r=ct(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Of(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=Qf();if(!s&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=be(),a=j();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Zf(t){return Ca(t.path||"",t.query||{})+(t.hash||"")}const ed="__nuxt_error",Os=()=>su(j().payload,"error"),Ot=t=>{const e=Ns(t);try{const n=j(),r=Os();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},td=async(t={})=>{const e=j(),n=Os();e.callHook("app:error:cleared",t),t.redirect&&await be().replace(t.redirect),n.value=bu},Ns=t=>{const e=zr(t);return Object.defineProperty(e,ed,{value:!0,configurable:!1,writable:!1}),e},Ri=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Ls=t=>{const e=j();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Ri(()=>t())}):Ri(()=>t())};function Pi(t){const e=rd(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const nd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function rd(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=nd.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const sd=-1,id=-2,od=-3,ad=-4,cd=-5,ld=-6;function ud(t,e){return fd(JSON.parse(t),e)}function fd(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===sd)return;if(i===od)return NaN;if(i===ad)return 1/0;if(i===cd)return-1/0;if(i===ld)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=e==null?void 0:e[c];if(l)return r[i]=l(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let h=1;h<a.length;h+=1)u.add(s(a[h]));break;case"Map":const d=new Map;r[i]=d;for(let h=1;h<a.length;h+=2)d.set(s(a[h]),s(a[h+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const f=Object.create(null);r[i]=f;for(let h=1;h<a.length;h+=2)f[a[h]]=s(a[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=a[1],w=Pi(m),_=new h(w);r[i]=_;break}case"ArrayBuffer":{const h=a[1],m=Pi(h);r[i]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let l=0;l<a.length;l+=1){const u=a[l];u!==id&&(c[l]=s(u))}}else{const c={};r[i]=c;for(const l in a){const u=a[l];c[l]=s(u)}}return r[i]}return s(0)}const dd=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},qr=dd().app,hd=()=>qr.buildAssetsDir,xs=(...t)=>Na(Fa(),hd(),...t),Fa=(...t)=>{const e=qr.cdnURL||qr.baseURL;return t.length?Na(e,...t):e};globalThis.__buildAssetsURL=xs,globalThis.__publicAssetsURL=Fa;let bn,wn;function pd(){return bn=$fetch(xs(`builds/meta/${Vn().app.buildId}.json`),{responseType:"json"}),bn.then(t=>{wn=Hf(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),bn}function Gn(){return bn||pd()}async function Ds(t){const e=typeof t=="string"?t:t.path;if(await Gn(),!wn)return console.error("[nuxt] Error creating app manifest matcher.",wn),{};try{return zf({},...wn.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Ci(t,e={}){const n=await gd(t,e),r=j(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=$a(t).then(i=>i?Ha(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const md="_payload.json";async function gd(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ct(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Vn(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await $a(t)?i:r.app.baseURL;return Cs(o,n.pathname,md+(s?`?${s}`:""))}async function Ha(t){const e=fetch(t).then(n=>n.text().then(ja));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function $a(t=Jf().path){const e=j();return t=Ps(t),(await Gn()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Ds({path:t});return!!r.prerender&&!r.redirect})}let Ke=null;async function yd(){var r;if(Ke)return Ke;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ja(t.textContent||""),n=t.dataset.src?await Ha(t.dataset.src):void 0;return Ke={...e,...n,...window.__NUXT__},(r=Ke.config)!=null&&r.public&&(Ke.config.public=at(Ke.config.public)),Ke}async function ja(t){return await ud(t,j()._payloadRevivers)}function Ba(t,e){j()._payloadRevivers[t]=e}function _d(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ln(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:j().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dt=typeof document<"u";function Wa(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Wa(t.default)}const D=Object.assign;function hr(t,e){const n={};for(const r in e){const s=e[r];n[r]=ie(s)?s.map(t):t(s)}return n}const Dt=()=>{},ie=Array.isArray,Va=/#/g,bd=/&/g,wd=/\//g,Ed=/=/g,Id=/\?/g,za=/\+/g,Td=/%5B/g,kd=/%5D/g,Ga=/%5E/g,Sd=/%60/g,qa=/%7B/g,Ad=/%7C/g,Ka=/%7D/g,Rd=/%20/g;function Ms(t){return encodeURI(""+t).replace(Ad,"|").replace(Td,"[").replace(kd,"]")}function Pd(t){return Ms(t).replace(qa,"{").replace(Ka,"}").replace(Ga,"^")}function Kr(t){return Ms(t).replace(za,"%2B").replace(Rd,"+").replace(Va,"%23").replace(bd,"%26").replace(Sd,"`").replace(qa,"{").replace(Ka,"}").replace(Ga,"^")}function Cd(t){return Kr(t).replace(Ed,"%3D")}function Od(t){return Ms(t).replace(Va,"%23").replace(Id,"%3F")}function Nd(t){return t==null?"":Od(t).replace(wd,"%2F")}function Vt(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ld=/\/$/,xd=t=>t.replace(Ld,"");function pr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Fd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vt(o)}}function Dd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Md(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bt(e.matched[r],n.matched[s])&&Ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ud(t[n],e[n]))return!1;return!0}function Ud(t,e){return ie(t)?Ni(t,e):ie(e)?Ni(e,t):t===e}function Ni(t,e){return ie(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Fd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const re={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zt;(function(t){t.pop="pop",t.push="push"})(zt||(zt={}));var Mt;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mt||(Mt={}));function Hd(t){if(!t)if(dt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xd(t)}const $d=/^[^#]+#/;function jd(t,e){return t.replace($d,"#")+e}function Bd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qn=()=>({left:window.scrollX,top:window.scrollY});function Wd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Bd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Li(t,e){return(history.state?history.state.position-e:-1)+t}const Yr=new Map;function Vd(t,e){Yr.set(t,e)}function zd(t){const e=Yr.get(t);return Yr.delete(t),e}let Gd=()=>location.protocol+"//"+location.host;function Xa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Oi(c,"")}return Oi(n,t)+r+s}function qd(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const h=Xa(t,location),m=n.value,w=e.value;let _=0;if(f){if(n.value=h,e.value=f,o&&o===m){o=null;return}_=w?f.position-w.position:0}else r(h);s.forEach(v=>{v(n.value,m,{delta:_,type:zt.pop,direction:_?_>0?Mt.forward:Mt.back:Mt.unknown})})};function c(){o=n.value}function l(f){s.push(f);const h=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(D({},f.state,{scroll:qn()}),"")}function d(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function xi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qn():null}}function Kd(t){const{history:e,location:n}=window,r={value:Xa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Gd()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(c,l){const u=D({},e.state,xi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=D({},s.value,e.state,{forward:c,scroll:qn()});i(u.current,u,!0);const d=D({},xi(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Yd(t){t=Hd(t);const e=Kd(t),n=qd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=D({location:"",base:t,go:r,createHref:jd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xd(t){return typeof t=="string"||t&&typeof t=="object"}function Ja(t){return typeof t=="string"||typeof t=="symbol"}const Qa=Symbol("");var Di;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Di||(Di={}));function wt(t,e){return D(new Error,{type:t,[Qa]:!0},e)}function me(t,e){return t instanceof Error&&Qa in t&&(e==null||!!(t.type&e))}const Mi="[^/]+?",Jd={sensitive:!1,strict:!1,start:!0,end:!0},Qd=/[.+*?^${}()[\]/\\]/g;function Zd(t,e){const n=D({},Jd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const f=l[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Qd,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:w,optional:_,regexp:v}=f;i.push({name:m,repeatable:w,optional:_});const b=v||Mi;if(b!==Mi){h+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+S.message)}}let y=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(y=_&&l.length<2?`(?:/${y})`:"/"+y),_&&(y+="?"),s+=y,h+=20,_&&(h+=-8),w&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=i[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function c(l){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:w,optional:_}=h,v=m in l?l[m]:"";if(ie(v)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=ie(v)?v.join("/"):v;if(!b)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function eh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Za(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ui(r))return 1;if(Ui(s))return-1}return s.length-r.length}function Ui(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const th={type:0,value:""},nh=/[a-zA-Z0-9_]/;function rh(t){if(!t)return[[]];if(t==="/")return[[th]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${l}": ${h}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:nh.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function sh(t,e,n){const r=Zd(rh(t.path),n),s=D(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ih(t,e){const n=[],r=new Map;e=ji({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,f,h){const m=!h,w=Hi(d);w.aliasOf=h&&h.record;const _=ji(e,d),v=[w];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of S)v.push(Hi(D({},w,{components:h?h.record.components:w.components,path:k,aliasOf:h?h.record:w})))}let b,y;for(const S of v){const{path:k}=S;if(f&&k[0]!=="/"){const O=f.record.path,N=O[O.length-1]==="/"?"":"/";S.path=f.record.path+(k&&N+k)}if(b=sh(S,f,_),h?h.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),m&&d.name&&!$i(b)&&o(d.name)),ec(b)&&c(b),w.children){const O=w.children;for(let N=0;N<O.length;N++)i(O[N],b,h&&h.children[N])}h=h||b}return y?()=>{o(y)}:Dt}function o(d){if(Ja(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const f=ch(d,n);n.splice(f,0,d),d.record.name&&!$i(d)&&r.set(d.record.name,d)}function l(d,f){let h,m={},w,_;if("name"in d&&d.name){if(h=r.get(d.name),!h)throw wt(1,{location:d});_=h.record.name,m=D(Fi(f.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Fi(d.params,h.keys.map(y=>y.name))),w=h.stringify(m)}else if(d.path!=null)w=d.path,h=n.find(y=>y.re.test(w)),h&&(m=h.parse(w),_=h.record.name);else{if(h=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!h)throw wt(1,{location:d,currentLocation:f});_=h.record.name,m=D({},f.params,d.params),w=h.stringify(m)}const v=[];let b=h;for(;b;)v.unshift(b.record),b=b.parent;return{name:_,path:w,params:m,matched:v,meta:ah(v)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Fi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hi(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $i(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ah(t){return t.reduce((e,n)=>D(e,n.meta),{})}function ji(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ch(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Za(t,e[i])<0?r=i:n=i+1}const s=lh(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function lh(t){let e=t;for(;e=e.parent;)if(ec(e)&&Za(t,e)===0)return e}function ec({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(za," "),o=i.indexOf("="),a=Vt(o<0?i:i.slice(0,o)),c=o<0?null:Vt(i.slice(o+1));if(a in e){let l=e[a];ie(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bi(t){let e="";for(let n in t){const r=t[n];if(n=Cd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ie(r)?r.map(i=>i&&Kr(i)):[r&&Kr(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ie(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const dh=Symbol(""),Wi=Symbol(""),Kn=Symbol(""),Us=Symbol(""),Xr=Symbol("");function Pt(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xe(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(wt(4,{from:n,to:e})):f instanceof Error?c(f):Xd(f)?c(wt(2,{from:e,to:f})):(o&&r.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(f=>c(f))})}function mr(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Wa(c)){const u=(c.__vccOpts||c)[e];u&&i.push(xe(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=vd(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&xe(h,n,r,o,a,s)()}))}}return i}function Vi(t){const e=de(Kn),n=de(Us),r=se(()=>{const c=Qe(t.to);return e.resolve(c)}),s=se(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(bt.bind(null,u));if(f>-1)return f;const h=zi(c[l-2]);return l>1&&zi(u)===h&&d[d.length-1].path!==h?d.findIndex(bt.bind(null,c[l-2])):f}),i=se(()=>s.value>-1&&yh(n.params,r.value.params)),o=se(()=>s.value>-1&&s.value===n.matched.length-1&&Ya(n.params,r.value.params));function a(c={}){if(gh(c)){const l=e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(Dt);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function hh(t){return t.length===1?t[0]:t}const ph=ua({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(t,{slots:e}){const n=at(Vi(t)),{options:r}=de(Kn),s=se(()=>({[Gi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&hh(e.default(n));return t.custom?i:Rs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mh=ph;function gh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ie(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function zi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gi=(t,e,n)=>t??e??n,_h=ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=de(Xr),s=se(()=>t.route||r.value),i=de(Wi,0),o=se(()=>{let l=Qe(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=se(()=>s.value.matched[o.value]);cr(Wi,se(()=>o.value+1)),cr(dh,a),cr(Xr,s);const c=vt();return fa(()=>[c.value,a.value,t.name],([l,u,d],[f,h,m])=>{u&&(u.instances[d]=l,h&&h!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),l&&u&&(!h||!bt(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return qi(n.default,{Component:f,route:l});const h=d.props[u],m=h?h===!0?l.params:typeof h=="function"?h(l):h:null,_=Rs(f,D({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return qi(n.default,{Component:_,route:l})||_}}});function qi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vh=_h;function bh(t){const e=ih(t.routes,t),n=t.parseQuery||uh,r=t.stringifyQuery||Bi,s=t.history,i=Pt(),o=Pt(),a=Pt(),c=Wt(re);let l=re;dt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hr.bind(null,p=>""+p),d=hr.bind(null,Nd),f=hr.bind(null,Vt);function h(p,I){let E,A;return Ja(p)?(E=e.getRecordMatcher(p),A=I):A=p,e.addRoute(A,E)}function m(p){const I=e.getRecordMatcher(p);I&&e.removeRoute(I)}function w(){return e.getRoutes().map(p=>p.record)}function _(p){return!!e.getRecordMatcher(p)}function v(p,I){if(I=D({},I||c.value),typeof p=="string"){const C=pr(n,p,I.path),W=e.resolve({path:C.path},I),Rt=s.createHref(C.fullPath);return D(C,W,{params:f(W.params),hash:Vt(C.hash),redirectedFrom:void 0,href:Rt})}let E;if(p.path!=null)E=D({},p,{path:pr(n,p.path,I.path).path});else{const C=D({},p.params);for(const W in C)C[W]==null&&delete C[W];E=D({},p,{params:d(C)}),I.params=d(I.params)}const A=e.resolve(E,I),U=p.hash||"";A.params=u(f(A.params));const B=Dd(r,D({},p,{hash:Pd(U),path:A.path})),x=s.createHref(B);return D({fullPath:B,hash:U,query:r===Bi?fh(p.query):p.query||{}},A,{redirectedFrom:void 0,href:x})}function b(p){return typeof p=="string"?pr(n,p,c.value.path):D({},p)}function y(p,I){if(l!==p)return wt(8,{from:I,to:p})}function S(p){return N(p)}function k(p){return S(D(b(p),{replace:!0}))}function O(p){const I=p.matched[p.matched.length-1];if(I&&I.redirect){const{redirect:E}=I;let A=typeof E=="function"?E(p):E;return typeof A=="string"&&(A=A.includes("?")||A.includes("#")?A=b(A):{path:A},A.params={}),D({query:p.query,hash:p.hash,params:A.path!=null?{}:p.params},A)}}function N(p,I){const E=l=v(p),A=c.value,U=p.state,B=p.force,x=p.replace===!0,C=O(E);if(C)return N(D(b(C),{state:typeof C=="object"?D({},U,C.state):U,force:B,replace:x}),I||E);const W=E;W.redirectedFrom=I;let Rt;return!B&&Md(r,A,E)&&(Rt=wt(16,{to:W,from:A}),di(A,A,!0,!1)),(Rt?Promise.resolve(Rt):V(W,A)).catch(Y=>me(Y)?me(Y,2)?Y:ir(Y):sr(Y,W,A)).then(Y=>{if(Y){if(me(Y,2))return N(D({replace:x},b(Y.to),{state:typeof Y.to=="object"?D({},U,Y.to.state):U,force:B}),I||W)}else Y=Ae(W,A,!0,x,U);return he(W,A,Y),Y})}function P(p,I){const E=y(p,I);return E?Promise.reject(E):Promise.resolve()}function L(p){const I=cn.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(p):p()}function V(p,I){let E;const[A,U,B]=wh(p,I);E=mr(A.reverse(),"beforeRouteLeave",p,I);for(const C of A)C.leaveGuards.forEach(W=>{E.push(xe(W,p,I))});const x=P.bind(null,p,I);return E.push(x),ut(E).then(()=>{E=[];for(const C of i.list())E.push(xe(C,p,I));return E.push(x),ut(E)}).then(()=>{E=mr(U,"beforeRouteUpdate",p,I);for(const C of U)C.updateGuards.forEach(W=>{E.push(xe(W,p,I))});return E.push(x),ut(E)}).then(()=>{E=[];for(const C of B)if(C.beforeEnter)if(ie(C.beforeEnter))for(const W of C.beforeEnter)E.push(xe(W,p,I));else E.push(xe(C.beforeEnter,p,I));return E.push(x),ut(E)}).then(()=>(p.matched.forEach(C=>C.enterCallbacks={}),E=mr(B,"beforeRouteEnter",p,I,L),E.push(x),ut(E))).then(()=>{E=[];for(const C of o.list())E.push(xe(C,p,I));return E.push(x),ut(E)}).catch(C=>me(C,8)?C:Promise.reject(C))}function he(p,I,E){a.list().forEach(A=>L(()=>A(p,I,E)))}function Ae(p,I,E,A,U){const B=y(p,I);if(B)return B;const x=I===re,C=dt?history.state:{};E&&(A||x?s.replace(p.fullPath,D({scroll:x&&C&&C.scroll},U)):s.push(p.fullPath,U)),c.value=p,di(p,I,E,x),ir()}let pe;function rr(){pe||(pe=s.listen((p,I,E)=>{if(!hi.listening)return;const A=v(p),U=O(A);if(U){N(D(U,{replace:!0,force:!0}),A).catch(Dt);return}l=A;const B=c.value;dt&&Vd(Li(B.fullPath,E.delta),qn()),V(A,B).catch(x=>me(x,12)?x:me(x,2)?(N(D(b(x.to),{force:!0}),A).then(C=>{me(C,20)&&!E.delta&&E.type===zt.pop&&s.go(-1,!1)}).catch(Dt),Promise.reject()):(E.delta&&s.go(-E.delta,!1),sr(x,A,B))).then(x=>{x=x||Ae(A,B,!1),x&&(E.delta&&!me(x,8)?s.go(-E.delta,!1):E.type===zt.pop&&me(x,20)&&s.go(-1,!1)),he(A,B,x)}).catch(Dt)}))}let At=Pt(),Re=Pt(),z;function sr(p,I,E){ir(p);const A=Re.list();return A.length?A.forEach(U=>U(p,I,E)):console.error(p),Promise.reject(p)}function Jl(){return z&&c.value!==re?Promise.resolve():new Promise((p,I)=>{At.add([p,I])})}function ir(p){return z||(z=!p,rr(),At.list().forEach(([I,E])=>p?E(p):I()),At.reset()),p}function di(p,I,E,A){const{scrollBehavior:U}=t;if(!dt||!U)return Promise.resolve();const B=!E&&zd(Li(p.fullPath,0))||(A||!E)&&history.state&&history.state.scroll||null;return As().then(()=>U(p,I,B)).then(x=>x&&Wd(x)).catch(x=>sr(x,p,I))}const or=p=>s.go(p);let ar;const cn=new Set,hi={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:w,resolve:v,options:t,push:S,replace:k,go:or,back:()=>or(-1),forward:()=>or(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Re.add,isReady:Jl,install(p){const I=this;p.component("RouterLink",mh),p.component("RouterView",vh),p.config.globalProperties.$router=I,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(c)}),dt&&!ar&&c.value===re&&(ar=!0,S(s.location).catch(U=>{}));const E={};for(const U in re)Object.defineProperty(E,U,{get:()=>c.value[U],enumerable:!0});p.provide(Kn,I),p.provide(Us,Xe(E)),p.provide(Xr,c);const A=p.unmount;cn.add(p),p.unmount=function(){cn.delete(p),cn.size<1&&(l=re,pe&&pe(),pe=null,c.value=re,ar=!1,z=!1),A()}}};function ut(p){return p.reduce((I,E)=>I.then(()=>L(E)),Promise.resolve())}return hi}function wh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>bt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>bt(l,c))||s.push(c))}return[n,r,s]}function Xw(){return de(Kn)}function Jw(t){return de(Us)}const Qw=(t,e)=>({default:()=>{var n;return t?Rs(iu,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),Eh=/(:\w+)\([^)]+\)/g,Ih=/(:\w+)[?+*]/g,Th=/:\w+/g;function Ki(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(Eh,"$1").replace(Ih,"$1").replace(Th,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function kh(t,e){return t===e||e===re?!1:Ki(t)!==Ki(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const Sh={scrollBehavior(t,e,n){var l;const r=j(),s=((l=be().options)==null?void 0:l.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&kh(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Yi(t.hash),behavior:s}:!1;const a=u=>!!(u.meta.pageTransition??vu),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(c,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Yi(t.hash),behavior:s}),u(i)})})}};function Yi(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const Ah={hashMode:!1,scrollBehaviorType:"auto"},ee={...Ah,...Sh},Rh={nuxt:{}},Ph=Gf(Rh);function Ch(){const t=j();return t._appConfig||(t._appConfig=at(Ph)),t._appConfig}class Oh extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Nh(t){var c,l,u,d,f;const e=((c=t.error)==null?void 0:c.message)||((l=t.error)==null?void 0:l.toString())||"",n=((u=t.request)==null?void 0:u.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((f=t.request)==null?void 0:f.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new Oh(o,t.error?{cause:t.error}:void 0);for(const h of["request","options","response"])Object.defineProperty(a,h,{get(){return t[h]}});for(const[h,m]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,h,{get(){return t.response&&t.response[m]}});return a}const Lh=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Xi(t="GET"){return Lh.has(t.toUpperCase())}function xh(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Dh=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Mh=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Uh(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Mh.test(e)?"json":Dh.has(e)||e.startsWith("text/")?"text":"blob"}function Fh(t,e,n,r){const s=Hh((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function Hh(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function fn(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const $h=new Set([408,409,425,429,500,502,503,504]),jh=new Set([101,204,205,304]);function tc(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Xi(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):$h.has(d))){const f=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return f>0&&await new Promise(h=>setTimeout(h,f)),i(a.request,{...a.options,retry:u-1})}}const l=Nh(a);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(c,l={}){const u={request:c,options:Fh(c,l,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await fn(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=Lf(u.request,u.options.baseURL)),u.options.query&&(u.request=Ca(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&Xi(u.options.method)&&(xh(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const h=new r;d=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,h.abort(m)},u.options.timeout),u.options.signal=h.signal}try{u.response=await e(u.request,u.options)}catch(h){return u.error=h,u.options.onRequestError&&await fn(u,u.options.onRequestError),await s(u)}finally{d&&clearTimeout(d)}if((u.response.body||u.response._bodyInit)&&!jh.has(u.response.status)&&u.options.method!=="HEAD"){const h=(u.options.parseResponse?"json":u.options.responseType)||Uh(u.response.headers.get("content-type")||"");switch(h){case"json":{const m=await u.response.text(),w=u.options.parseResponse||Ln;u.response._data=w(m);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[h]()}}return u.options.onResponse&&await fn(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await fn(u,u.options.onResponseError),await s(u)):u.response},o=async function(c,l){return(await i(c,l))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>tc({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const xn=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Bh=xn.fetch?(...t)=>xn.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Wh=xn.Headers,Vh=xn.AbortController,zh=tc({fetch:Bh,Headers:Wh,AbortController:Vh}),Gh=zh,qh={public:{siteName:"Visity.me",domain:"visity.me",copyRightDate:"2024"},app:{buildId:"storybook",baseURL:"/",buildAssetsDir:"/_nuxt/",cdnURL:""},nitro:{envPrefix:"NUXT_"}};/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nc;const Qt=t=>nc=t,rc=Symbol();function Jr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ut;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ut||(Ut={}));function Kh(){const t=ks(!0),e=t.run(()=>vt({}));let n=[],r=[];const s=da({install(i){Qt(s),s._a=i,i.provide(rc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const sc=()=>{};function Ji(t,e,n,r=sc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&la()&&au(s),s}function ft(t,...e){t.slice().forEach(n=>{n(...e)})}const Yh=t=>t(),Qi=Symbol(),gr=Symbol();function Qr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Jr(s)&&Jr(r)&&t.hasOwnProperty(n)&&!Rn(r)&&!ha(r)?t[n]=Qr(s,r):t[n]=r}return t}const Xh=Symbol();function Jh(t){return!Jr(t)||!t.hasOwnProperty(Xh)}const{assign:Ne}=Object;function Qh(t){return!!(Rn(t)&&t.effect)}function Zh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=cu(n.state.value[t]);return Ne(u,i,Object.keys(o||{}).reduce((d,f)=>(d[f]=da(se(()=>{Qt(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return c=ic(t,l,e,n,r,!0),c}function ic(t,e,n={},r,s,i){let o;const a=Ne({actions:{}},n),c={deep:!0};let l,u,d=[],f=[],h;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),vt({});let w;function _(P){let L;l=u=!1,typeof P=="function"?(P(r.state.value[t]),L={type:Ut.patchFunction,storeId:t,events:h}):(Qr(r.state.value[t],P),L={type:Ut.patchObject,payload:P,storeId:t,events:h});const V=w=Symbol();As().then(()=>{w===V&&(l=!0)}),u=!0,ft(d,L,r.state.value[t])}const v=i?function(){const{state:L}=n,V=L?L():{};this.$patch(he=>{Ne(he,V)})}:sc;function b(){o.stop(),d=[],f=[],r._s.delete(t)}const y=(P,L="")=>{if(Qi in P)return P[gr]=L,P;const V=function(){Qt(r);const he=Array.from(arguments),Ae=[],pe=[];function rr(z){Ae.push(z)}function At(z){pe.push(z)}ft(f,{args:he,name:V[gr],store:k,after:rr,onError:At});let Re;try{Re=P.apply(this&&this.$id===t?this:k,he)}catch(z){throw ft(pe,z),z}return Re instanceof Promise?Re.then(z=>(ft(Ae,z),z)).catch(z=>(ft(pe,z),Promise.reject(z))):(ft(Ae,Re),Re)};return V[Qi]=!0,V[gr]=L,V},S={_p:r,$id:t,$onAction:Ji.bind(null,f),$patch:_,$reset:v,$subscribe(P,L={}){const V=Ji(d,P,L.detached,()=>he()),he=o.run(()=>fa(()=>r.state.value[t],Ae=>{(L.flush==="sync"?u:l)&&P({storeId:t,type:Ut.direct,events:h},Ae)},Ne({},c,L)));return V},$dispose:b},k=at(S);r._s.set(t,k);const N=(r._a&&r._a.runWithContext||Yh)(()=>r._e.run(()=>(o=ks()).run(()=>e({action:y}))));for(const P in N){const L=N[P];if(Rn(L)&&!Qh(L)||ha(L))i||(m&&Jh(L)&&(Rn(L)?L.value=m[P]:Qr(L,m[P])),r.state.value[t][P]=L);else if(typeof L=="function"){const V=y(L,P);N[P]=V,a.actions[P]=L}}return Ne(k,N),Ne(ou(k),N),Object.defineProperty(k,"$state",{get:()=>r.state.value[t],set:P=>{_(L=>{Ne(L,P)})}}),r._p.forEach(P=>{Ne(k,o.run(()=>P({store:k,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(k.$state,m),l=!0,u=!0,k}/*! #__NO_SIDE_EFFECTS__ */function ep(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=Ss();return o=o||(c?de(rc,null):null),o&&Qt(o),o=nc,o._s.has(t)||(s?ic(t,e,r,o):Zh(t,r,o)),o._s.get(t)}return i.$id=t,i}const tp=Au(()=>{Ba("skipHydrate",t=>{})}),np=[["NuxtError",t=>Ns(t)],["EmptyShallowRef",t=>Wt(t==="_"?void 0:t==="0n"?BigInt(0):Ln(t))],["EmptyRef",t=>vt(t==="_"?void 0:t==="0n"?BigInt(0):Ln(t))],["ShallowRef",t=>Wt(t)],["ShallowReactive",t=>Xe(t)],["Ref",t=>vt(t)],["Reactive",t=>at(t)]],rp=J({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of np)Ba(r,s);Object.assign(t.payload,([e,n]=Ze(()=>t.runWithContext(yd)),e=await e,n(),e)),window.__NUXT__=t.payload}}),sp=[],ip=J({name:"nuxt:head",enforce:"pre",setup(t){const e=uf({plugins:sp});ff(()=>j().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Ia(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});function oc(t){return Array.isArray(t)?t:[t]}const yr=[{name:"username",path:"/:username()",component:()=>ne(()=>import("./BjPkg8PJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)},{name:"auth",path:"/auth",component:()=>ne(()=>import("./CqeeoRjH.js"),__vite__mapDeps([9,10,11,2,3,12,13,14,15,16,17,6,8,4,18]),import.meta.url)},{name:"auth-register",path:"/auth/register",component:()=>ne(()=>import("./CcYpwBbB.js"),__vite__mapDeps([19,10,11,2,3,12,13,14,15,16,17,6,8,4,20]),import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>ne(()=>import("./DOfmSM3X.js"),__vite__mapDeps([21,17,2,22,3,23,24,6,25,7,8,4,26]),import.meta.url)},{name:"dashboard-profile",path:"/dashboard/profile",component:()=>ne(()=>import("./Bt1u0SkW.js"),__vite__mapDeps([27,15,2,3,16,6,8,4]),import.meta.url)},{name:"dashboard-profiles-username",path:"/dashboard/profiles/:username()",component:()=>ne(()=>import("./BpjHcesV.js"),__vite__mapDeps([28,1,2,3,4,5,29,15,16,30,31,11,12,13,23,24,17,32,7,25,33,34,6,8]),import.meta.url)},{name:"dashboard-profiles-create",path:"/dashboard/profiles/create",component:()=>ne(()=>import("./ClrQct_2.js"),__vite__mapDeps([35,1,2,3,4,5,29,15,16,30,31,11,12,13,23,24,17,32,7,25,33,34,6,8]),import.meta.url)},{name:"index",path:"/",component:()=>ne(()=>import("./CwEeM1f1.js"),__vite__mapDeps([36,6,2,8,4]),import.meta.url)},{path:"/iframe.html",name:"storybook-iframe"}],op=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=j(),s=be(),i=([e,n]=Ze(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Ns({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(l=>{if(a(),l===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>Ot(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})};var Zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ap=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,h=l&63;c||(h=64,o||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ac(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ap(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new cp;const f=i<<2|a>>4;if(r.push(f),l!==64){const h=a<<4&240|l>>2;if(r.push(h),d!==64){const m=l<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lp=function(t){const e=ac(t);return cc.encodeByteArray(e,!0)},Dn=function(t){return lp(t).replace(/\./g,"")},lc=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=()=>up().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof Zi>"u")return;const t=Zi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lc(t[1]);return e&&JSON.parse(e)},Fs=()=>{try{return fp()||dp()||hp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uc=t=>{var e,n;return(n=(e=Fs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pp=t=>{const e=uc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fc=()=>{var t;return(t=Fs())===null||t===void 0?void 0:t.config},dc=t=>{var e;return(e=Fs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Dn(JSON.stringify(n)),Dn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function _p(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wp(){const t=K();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ep(){try{return typeof indexedDB=="object"}catch{return!1}}function Ip(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class ke extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tp,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ke(s,a,r)}}function kp(t,e){return t.replace(Sp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sp=/\{\$([^}]+)}/g;function Ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eo(i)&&eo(o)){if(!Mn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Lt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rp(t,e){const n=new Pp(t,e);return n.subscribe.bind(n)}class Pp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_r),s.error===void 0&&(s.error=_r),s.complete===void 0&&(s.complete=_r);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _r(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lp(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ye){return this.instances.has(e)}getOptions(e=Ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Np(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ye){return this.component?this.component.multipleInstances?e:Ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(t){return t===Ye?void 0:t}function Lp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Op(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const Dp={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Mp=M.INFO,Up={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Fp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Up[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Mp,this._logHandler=Fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Hp=(t,e)=>e.some(n=>t instanceof n);let to,no;function $p(){return to||(to=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jp(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pc=new WeakMap,Zr=new WeakMap,mc=new WeakMap,vr=new WeakMap,Hs=new WeakMap;function Bp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($e(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pc.set(n,t)}).catch(()=>{}),Hs.set(e,t),e}function Wp(t){if(Zr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zr.set(t,e)}let es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vp(t){es=t(es)}function zp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(br(this),e,...n);return mc.set(r,e.sort?e.sort():[e]),$e(r)}:jp().includes(t)?function(...e){return t.apply(br(this),e),$e(pc.get(this))}:function(...e){return $e(t.apply(br(this),e))}}function Gp(t){return typeof t=="function"?zp(t):(t instanceof IDBTransaction&&Wp(t),Hp(t,$p())?new Proxy(t,es):t)}function $e(t){if(t instanceof IDBRequest)return Bp(t);if(vr.has(t))return vr.get(t);const e=Gp(t);return e!==t&&(vr.set(t,e),Hs.set(e,t)),e}const br=t=>Hs.get(t);function qp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$e(o);return r&&o.addEventListener("upgradeneeded",c=>{r($e(o.result),c.oldVersion,c.newVersion,$e(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kp=["get","getKey","getAll","getAllKeys","count"],Yp=["put","add","delete","clear"],wr=new Map;function ro(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wr.get(e))return wr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wr.set(e,i),i}Vp(t=>({...t,get:(e,n,r)=>ro(e,n)||t.get(e,n,r),has:(e,n)=>!!ro(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ts="@firebase/app",so="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new hc("@firebase/app"),Qp="@firebase/app-compat",Zp="@firebase/analytics-compat",em="@firebase/analytics",tm="@firebase/app-check-compat",nm="@firebase/app-check",rm="@firebase/auth",sm="@firebase/auth-compat",im="@firebase/database",om="@firebase/data-connect",am="@firebase/database-compat",cm="@firebase/functions",lm="@firebase/functions-compat",um="@firebase/installations",fm="@firebase/installations-compat",dm="@firebase/messaging",hm="@firebase/messaging-compat",pm="@firebase/performance",mm="@firebase/performance-compat",gm="@firebase/remote-config",ym="@firebase/remote-config-compat",_m="@firebase/storage",vm="@firebase/storage-compat",bm="@firebase/firestore",wm="@firebase/vertexai",Em="@firebase/firestore-compat",Im="firebase",Tm="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]",km={[ts]:"fire-core",[Qp]:"fire-core-compat",[em]:"fire-analytics",[Zp]:"fire-analytics-compat",[nm]:"fire-app-check",[tm]:"fire-app-check-compat",[rm]:"fire-auth",[sm]:"fire-auth-compat",[im]:"fire-rtdb",[om]:"fire-data-connect",[am]:"fire-rtdb-compat",[cm]:"fire-fn",[lm]:"fire-fn-compat",[um]:"fire-iid",[fm]:"fire-iid-compat",[dm]:"fire-fcm",[hm]:"fire-fcm-compat",[pm]:"fire-perf",[mm]:"fire-perf-compat",[gm]:"fire-rc",[ym]:"fire-rc-compat",[_m]:"fire-gcs",[vm]:"fire-gcs-compat",[bm]:"fire-fst",[Em]:"fire-fst-compat",[wm]:"fire-vertex","fire-js":"fire-js",[Im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Map,Sm=new Map,rs=new Map;function io(t,e){try{t.container.addComponent(e)}catch(n){we.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(rs.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;rs.set(e,t);for(const n of Gt.values())io(n,t);for(const n of Sm.values())io(n,t);return!0}function $s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function te(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new Zt("app","Firebase",Am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=Tm;function gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ns,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(n||(n=fc()),!n)throw je.create("no-options");const i=Gt.get(s);if(i){if(Mn(n,i.options)&&Mn(r,i.config))return i;throw je.create("duplicate-app",{appName:s})}const o=new xp(s);for(const c of rs.values())o.addComponent(c);const a=new Rm(n,r,o);return Gt.set(s,a),a}function yc(t=ns){const e=Gt.get(t);if(!e&&t===ns&&fc())return gc();if(!e)throw je.create("no-app",{appName:t});return e}function oo(){return Array.from(Gt.values())}function Be(t,e,n){var r;let s=(r=km[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(a.join(" "));return}Et(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebase-heartbeat-database",Cm=1,qt="firebase-heartbeat-store";let Er=null;function _c(){return Er||(Er=qp(Pm,Cm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qt)}catch(n){console.warn(n)}}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),Er}async function Om(t){try{const n=(await _c()).transaction(qt),r=await n.objectStore(qt).get(vc(t));return await n.done,r}catch(e){if(e instanceof ke)we.warn(e.message);else{const n=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(n.message)}}}async function ao(t,e){try{const r=(await _c()).transaction(qt,"readwrite");await r.objectStore(qt).put(e,vc(t)),await r.done}catch(n){if(n instanceof ke)we.warn(n.message);else{const r=je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});we.warn(r.message)}}}function vc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=1024,Lm=30;class xm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=co();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Lm){const o=Um(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){we.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=co(),{heartbeatsToSend:r,unsentEntries:s}=Dm(this._heartbeatsCache.heartbeats),i=Dn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return we.warn(n),""}}}function co(){return new Date().toISOString().substring(0,10)}function Dm(t,e=Nm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ep()?Ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Om(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lo(t){return Dn(JSON.stringify({version:2,heartbeats:t})).length}function Um(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){Et(new tt("platform-logger",e=>new Xp(e),"PRIVATE")),Et(new tt("heartbeat",e=>new xm(e),"PRIVATE")),Be(ts,so,t),Be(ts,so,"esm2017"),Be("fire-js","")}Fm("");function js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hm=bc,wc=new Zt("auth","Firebase",bc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new hc("@firebase/auth");function $m(t,...e){Un.logLevel<=M.WARN&&Un.warn(`Auth (${Tt}): ${t}`,...e)}function En(t,...e){Un.logLevel<=M.ERROR&&Un.error(`Auth (${Tt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,...e){throw Bs(t,...e)}function ue(t,...e){return Bs(t,...e)}function Ec(t,e,n){const r=Object.assign(Object.assign({},Hm()),{[e]:n});return new Zt("auth","Firebase",r).create(e,{appName:t.name})}function ve(t){return Ec(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wc.create(t,...e)}function R(t,e,...n){if(!t)throw Bs(e,...n)}function ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw En(e),new Error(e)}function Ee(t,e){t||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jm(){return uo()==="http:"||uo()==="https:"}function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||vp()||"connection"in navigator)?navigator.onLine:!0}function Wm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ee(n>e,"Short delay should be less than long delay!"),this.isMobile=yp()||bp()}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){Ee(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new tn(3e4,6e4);function Ge(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,s={}){return Tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=en(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return _p()||(l.referrerPolicy="no-referrer"),Ic.fetch()(kc(t,t.config.apiHost,n,a),l)})}async function Tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vm),e);try{const s=new qm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw dn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw dn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw dn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw dn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ec(t,u,l);oe(t,u)}}catch(s){if(s instanceof ke)throw s;oe(t,"network-request-failed",{message:String(s)})}}async function nn(t,e,n,r,s={}){const i=await qe(t,e,n,r,s);return"mfaPendingCredential"in i&&oe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ws(t.config,s):`${t.config.apiScheme}://${s}`}function Gm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),zm.get())})}}function dn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ue(t,e,r);return s.customData._tokenResponse=n,s}function fo(t){return t!==void 0&&t.enterprise!==void 0}class Km{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ym(t,e){return qe(t,"GET","/v2/recaptchaConfig",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function Sc(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jm(t,e=!1){const n=Q(t),r=await n.getIdToken(e),s=Vs(r);R(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ft(Ir(s.auth_time)),issuedAtTime:Ft(Ir(s.iat)),expirationTime:Ft(Ir(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ir(t){return Number(t)*1e3}function Vs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return En("JWT malformed, contained fewer than 3 sections"),null;try{const s=lc(n);return s?JSON.parse(s):(En("Failed to decode base64 JWT payload"),null)}catch(s){return En("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ho(t){const e=Vs(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ke&&Qm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Kt(t,Sc(n,{idToken:r}));R(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ac(i.providerUserInfo):[],a=tg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new is(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function eg(t){const e=Q(t);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ac(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){const n=await Tc(t,{},async()=>{const r=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ic.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rg(t,e){return qe(t,"POST","/v2/accounts:revokeToken",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=ho(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ng(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mt;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new is(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jm(this,e)}reload(){return eg(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(ve(this.auth));const e=await this.getIdToken();return await Kt(this,Xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,h=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:S,isAnonymous:k,providerData:O,stsTokenManager:N}=n;R(y&&N,e,"internal-error");const P=mt.fromJSON(this.name,N);R(typeof y=="string",e,"internal-error"),Ce(d,e.name),Ce(f,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof k=="boolean",e,"internal-error"),Ce(h,e.name),Ce(m,e.name),Ce(w,e.name),Ce(_,e.name),Ce(v,e.name),Ce(b,e.name);const L=new ye({uid:y,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:k,photoURL:m,phoneNumber:h,tenantId:w,stsTokenManager:P,createdAt:v,lastLoginAt:b});return O&&Array.isArray(O)&&(L.providerData=O.map(V=>Object.assign({},V))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new mt;s.updateFromServerResponse(n);const i=new ye({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fn(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];R(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ac(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new mt;a.updateFromIdToken(r);const c=new ye({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new is(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map;function _e(t){Ee(t instanceof Function,"Expected a class definition");let e=po.get(t);return e?(Ee(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,po.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rc.type="NONE";const mo=Rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=In(this.userKey,s.apiKey,i),this.fullPersistenceKey=In("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gt(_e(mo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||_e(mo);const o=In(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=ye._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xc(e))return"Blackberry";if(Dc(e))return"Webos";if(Cc(e))return"Safari";if((e.includes("chrome/")||Oc(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pc(t=K()){return/firefox\//i.test(t)}function Cc(t=K()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oc(t=K()){return/crios\//i.test(t)}function Nc(t=K()){return/iemobile/i.test(t)}function Lc(t=K()){return/android/i.test(t)}function xc(t=K()){return/blackberry/i.test(t)}function Dc(t=K()){return/webos/i.test(t)}function zs(t=K()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sg(t=K()){var e;return zs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ig(){return wp()&&document.documentMode===10}function Mc(t=K()){return zs(t)||Lc(t)||Dc(t)||xc(t)||/windows phone/i.test(t)||Nc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e=[]){let n;switch(t){case"Browser":n=go(K());break;case"Worker":n=`${go(K())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e={}){return qe(t,"GET","/v2/passwordPolicy",Ge(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=6;class lg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_e(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sc(this,{idToken:e}),r=await ye._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(ve(this));const n=e?Q(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ag(this),n=new lg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_e(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[_e(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$m(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lt(t){return Q(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rp(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fg(t){Yn=t}function Fc(t){return Yn.loadJS(t)}function dg(){return Yn.recaptchaEnterpriseScript}function hg(){return Yn.gapiScript}function pg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mg{constructor(){this.enterprise=new gg}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gg{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yg="recaptcha-enterprise",Hc="NO_RECAPTCHA";class _g{constructor(e){this.type=yg,this.auth=lt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ym(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Km(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;fo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Hc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&fo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=dg();c.length!==0&&(c+=a),Fc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _o(t,e,n,r=!1,s=!1){const i=new _g(t);let o;if(s)o=Hc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function os(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _o(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _o(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e){const n=$s(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mn(i,e??{}))return s;oe(s,"already-initialized")}return n.initialize({options:e})}function bg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_e);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wg(t,e,n){const r=lt(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$c(e),{host:o,port:a}=Eg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ig()}function $c(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eg(t){const e=$c(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vo(o)}}}function vo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ig(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,n){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function Tg(t,e){return qe(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){return nn(t,"POST","/v1/accounts:signInWithPassword",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e){return nn(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}async function Ag(t,e){return nn(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Gs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return os(e,n,"signInWithPassword",kg);case"emailLink":return Sg(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return os(e,r,"signUpPassword",Tg);case"emailLink":return Ag(e,{idToken:n,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e){return nn(t,"POST","/v1/accounts:signInWithIdp",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="http://localhost";class nt extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yt(e,n)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=en(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cg(t){const e=Nt(Lt(t)).link,n=e?Nt(Lt(e)).deep_link_id:null,r=Nt(Lt(t)).deep_link_id;return(r?Nt(Lt(r)).link:null)||r||n||e||t}class qs{constructor(e){var n,r,s,i,o,a;const c=Nt(Lt(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Pg((s=c.mode)!==null&&s!==void 0?s:null);R(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Cg(e);try{return new qs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.providerId=kt.PROVIDER_ID}static credential(e,n){return Yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qs.parseLink(n);return R(r,"argument-error"),Yt._fromEmailAndCode(e,r.code,r.tenantId)}}kt.PROVIDER_ID="password";kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends rn{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Me.credential(n,r)}catch{return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends rn{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends rn{constructor(){super("twitter.com")}static credential(e,n){return nt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fe.credential(n,r)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){return nn(t,"POST","/v1/accounts:signUp",Ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ye._fromIdTokenResponse(e,r,s),o=bo(r);return new rt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bo(r);return new rt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ke{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hn(e,n,r,s)}}function Bc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hn._fromErrorAndOperation(t,i,e,r):i})}async function Ng(t,e,n=!1){const r=await Kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(t,e,n=!1){const{auth:r}=t;if(te(r.app))return Promise.reject(ve(r));const s="reauthenticate";try{const i=await Kt(t,Bc(r,s,e,t),n);R(i.idToken,r,"internal-error");const o=Vs(i.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),rt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&oe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t,e,n=!1){if(te(t.app))return Promise.reject(ve(t));const r="signIn",s=await Bc(t,r,e),i=await rt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xg(t,e){return Wc(lt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t){const e=lt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dg(t,e,n){if(te(t.app))return Promise.reject(ve(t));const r=lt(t),o=await os(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Og).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Vc(t),c}),a=await rt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Mg(t,e,n){return te(t.app)?Promise.reject(ve(t)):xg(Q(t),kt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vc(t),r})}function Ug(t,e,n,r){return Q(t).onIdTokenChanged(e,n,r)}function Fg(t,e,n){return Q(t).beforeAuthStateChanged(e,n)}function wo(t,e,n,r){return Q(t).onAuthStateChanged(e,n,r)}function Hg(t){return Q(t).signOut()}const $n="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($n,"1"),this.storage.removeItem($n),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=1e3,jg=10;class Gc extends zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ig()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const Bg=Gc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qc.type="SESSION";const Kc=qc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Wg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ks("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return window}function zg(t){fe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function Gg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kg(){return Yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="firebaseLocalStorageDb",Yg=1,jn="firebaseLocalStorage",Jc="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jn(t,e){return t.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function Xg(){const t=indexedDB.deleteDatabase(Xc);return new sn(t).toPromise()}function as(){const t=indexedDB.open(Xc,Yg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jn,{keyPath:Jc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jn)?e(r):(r.close(),await Xg(),e(await as()))})})}async function Eo(t,e,n){const r=Jn(t,!0).put({[Jc]:e,value:n});return new sn(r).toPromise()}async function Jg(t,e){const n=Jn(t,!1).get(e),r=await new sn(n).toPromise();return r===void 0?null:r.value}function Io(t,e){const n=Jn(t,!0).delete(e);return new sn(n).toPromise()}const Qg=800,Zg=3;class Qc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await as(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xn._getInstance(Kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gg(),!this.activeServiceWorker)return;this.sender=new Vg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await as();return await Eo(e,$n,"1"),await Io(e,$n),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Io(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jn(s,!1).getAll();return new sn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qc.type="LOCAL";const ey=Qc;new tn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){return e?_e(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ny(t){return Wc(t.auth,new Ys(t),t.bypassAuthState)}function ry(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Lg(n,new Ys(t),t.bypassAuthState)}async function sy(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Ng(n,new Ys(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ny;case"linkViaPopup":case"linkViaRedirect":return sy;case"reauthViaPopup":case"reauthViaRedirect":return ry;default:oe(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new tn(2e3,1e4);class ht extends Zc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iy.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="pendingRedirect",Tn=new Map;class ay extends Zc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tn.get(this.auth._key());if(!e){try{const r=await cy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tn.set(this.auth._key(),e)}return this.bypassAuthState||Tn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cy(t,e){const n=fy(e),r=uy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ly(t,e){Tn.set(t._key(),e)}function uy(t){return _e(t._redirectPersistence)}function fy(t){return In(oy,t.config.apiKey,t.name)}async function dy(t,e,n=!1){if(te(t.app))return Promise.reject(ve(t));const r=lt(t),s=ty(r,e),o=await new ay(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=10*60*1e3;class py{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!my(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!el(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(e))}saveEventToCache(e){this.cachedEventUids.add(To(e)),this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function el({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function my(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return el(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_y=/^https?/;async function vy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gy(t);for(const n of e)try{if(by(n))return}catch{}oe(t,"unauthorized-domain")}function by(t){const e=ss(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_y.test(n))return!1;if(yy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new tn(3e4,6e4);function ko(){const t=fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ey(t){return new Promise((e,n)=>{var r,s,i;function o(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(ue(t,"network-request-failed"))},timeout:wy.get()})}if(!((s=(r=fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=fe().gapi)===null||i===void 0)&&i.load)o();else{const a=pg("iframefcb");return fe()[a]=()=>{gapi.load?o():n(ue(t,"network-request-failed"))},Fc(`${hg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kn=null,e})}let kn=null;function Iy(t){return kn=kn||Ey(t),kn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new tn(5e3,15e3),ky="__/auth/iframe",Sy="emulator/auth/iframe",Ay={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Py(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ws(e,Sy):`https://${t.config.authDomain}/${ky}`,r={apiKey:e.apiKey,appName:t.name,v:Tt},s=Ry.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${en(r).slice(1)}`}async function Cy(t){const e=await Iy(t),n=fe().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:Py(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ay,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ue(t,"network-request-failed"),a=fe().setTimeout(()=>{i(o)},Ty.get());function c(){fe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ny=500,Ly=600,xy="_blank",Dy="http://localhost";class So{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function My(t,e,n,r=Ny,s=Ly){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Oy),{width:r.toString(),height:s.toString(),top:i,left:o}),l=K().toLowerCase();n&&(a=Oc(l)?xy:n),Pc(l)&&(e=e||Dy,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(sg(l)&&a!=="_self")return Uy(e||"",a),new So(null);const d=window.open(e||"",a,u);R(d,t,"popup-blocked");try{d.focus()}catch{}return new So(d)}function Uy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="__/auth/handler",Hy="emulator/auth/handler",$y=encodeURIComponent("fac");async function Ao(t,e,n,r,s,i){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tt,eventId:s};if(e instanceof jc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ap(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof rn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$y}=${encodeURIComponent(c)}`:"";return`${jy(t)}?${en(a).slice(1)}${l}`}function jy({config:t}){return t.emulator?Ws(t,Hy):`https://${t.authDomain}/${Fy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="webStorageSupport";class By{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=dy,this._overrideRedirectResult=ly}async _openPopup(e,n,r,s){var i;Ee((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ao(e,n,r,ss(),s);return My(e,o,Ks())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ao(e,n,r,ss(),s);return zg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ee(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cy(e),r=new py(e);return n.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tr,{type:Tr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tr];o!==void 0&&n(!!o),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mc()||Cc()||zs()}}const Wy=By;var Ro="@firebase/auth",Po="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gy(t){Et(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(t)},l=new ug(r,s,i,c);return bg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Et(new tt("auth-internal",e=>{const n=lt(e.getProvider("auth").getImmediate());return(r=>new Vy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Ro,Po,zy(t)),Be(Ro,Po,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=5*60,Ky=dc("authIdTokenMaxAge")||qy;let Co=null;const Yy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ky)return;const s=n==null?void 0:n.token;Co!==s&&(Co=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xy(t=yc()){const e=$s(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vg(t,{popupRedirectResolver:Wy,persistence:[ey,Bg,Kc]}),r=dc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Yy(i.toString());Fg(n,o,()=>o(n.currentUser)),Ug(n,a=>o(a))}}const s=uc("auth");return s&&wg(n,`http://${s}`),n}function Jy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gy("Browser");const Zw={"auth/user-not-found":"Identifiants incorrect","auth/wrong-password":"Identifiants incorrect","auth/invalid-email":"E-mail invalide","auth/too-many-requests":"Trop de tentatives de connexion"},Qy=ep("userFirebase",()=>{const{$auth:t}=j(),e=vt(null),n=async()=>new Promise(a=>{const c=wo(t,l=>{c(),e.value=l?{id:l.uid,email:l.email}:null,a(!!l)})}),r=async(a,c)=>{if(!(await Mg(t,a,c)).user)throw new Error("Invalid credentials");await o()},s=async(a,c)=>{if(!(await Dg(t,a,c)).user)throw new Error("Invalid credentials");await o()},i=async()=>{await Hg(t),e.value=null},o=async()=>new Promise(a=>{const c=wo(t,async l=>{if(c(),l){const u=await l.getIdToken(!0);e.value={id:l.uid,email:l.email,token:u}}else e.value=null;a()})});return{isAuthenticating:n,connectAccount:r,createAccount:s,logout:i,fetchUser:o,user:e}}),Zy=async t=>{let e,n;const r=Qy(),s=([e,n]=Ze(()=>r.isAuthenticating()),e=await e,n(),e);if((t.name==="auth-register"||t.name==="auth")&&s)return Ai({name:"dashboard"});if(t.name==="dashboard"&&!s)return Ai({name:"auth"})},e_=async t=>{let e,n;const r=([e,n]=Ze(()=>Ds({path:t.path})),e=await e,n(),e);if(r.redirect)return ct(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},t_=[op,Zy,e_],Ht={};function n_(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const l=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(l);return u[0]!=="/"&&(u="/"+u),Ti(u,"")}const a=Ti(r,t),c=!n||Df(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const r_=J({name:"nuxt:router",enforce:"pre",async setup(t){var _;let e,n,r=Vn().app.baseURL;const s=((_=ee.history)==null?void 0:_.call(ee,r))??Yd(r),i=ee.routes?([e,n]=Ze(()=>ee.routes(yr)),e=await e,n(),e??yr):yr;let o;const a=bh({...ee,scrollBehavior:(v,b,y)=>{if(b===re){o=y;return}if(ee.scrollBehavior){if(a.options.scrollBehavior=ee.scrollBehavior,"scrollRestoration"in window.history){const S=a.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return ee.scrollBehavior(v,re,o||y)}},history:s,routes:i});ee.routes&&ee.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Wt(a.currentRoute.value);a.afterEach((v,b)=>{c.value=b}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=n_(r,window.location,t.payload.path),u=Wt(a.currentRoute.value),d=()=>{u.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((v,b)=>{var y,S,k,O;((S=(y=v.matched[0])==null?void 0:y.components)==null?void 0:S.default)===((O=(k=b.matched[0])==null?void 0:k.components)==null?void 0:O.default)&&d()});const f={};for(const v in u.value)Object.defineProperty(f,v,{get:()=>u.value[v],enumerable:!0});t._route=Xe(f),t._middleware=t._middleware||{global:[],named:{}};const h=Os();a.afterEach(async(v,b,y)=>{delete t._processingMiddleware,!t.isHydrating&&h.value&&await t.runWithContext(td),y&&await t.callHook("page:loading:end")});try{[e,n]=Ze(()=>a.isReady()),await e,n()}catch(v){[e,n]=Ze(()=>t.runWithContext(()=>Ot(v))),await e,n()}const m=l!==a.currentRoute.value.fullPath?a.resolve(l):a.currentRoute.value;d();const w=t.payload.state._layout;return a.beforeEach(async(v,b)=>{var y;await t.callHook("page:loading:start"),v.meta=at(v.meta),t.isHydrating&&w&&!lu(v.meta.layout)&&(v.meta.layout=w),t._processingMiddleware=!0;{const S=new Set([...t_,...t._middleware.global]);for(const k of v.matched){const O=k.meta.middleware;if(O)for(const N of oc(O))S.add(N)}{const k=await t.runWithContext(()=>Ds({path:v.path}));if(k.appMiddleware)for(const O in k.appMiddleware)k.appMiddleware[O]?S.add(O):S.delete(O)}for(const k of S){const O=typeof k=="string"?t._middleware.named[k]||await((y=Ht[k])==null?void 0:y.call(Ht).then(P=>P.default||P)):k;if(!O)throw new Error(`Unknown route middleware: '${k}'.`);const N=await t.runWithContext(()=>O(v,b));if(!t.payload.serverRendered&&t.isHydrating&&(N===!1||N instanceof Error)){const P=N||zr({statusCode:404,statusMessage:`Page Not Found: ${l}`});return await t.runWithContext(()=>Ot(P)),!1}if(N!==!0&&(N||N===!1))return N}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(v,b)=>{v.matched.length===0&&await t.runWithContext(()=>Ot(zr({statusCode:404,fatal:!1,statusMessage:`Page not found: ${v.fullPath}`,data:{path:v.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in m&&(m.name=void 0),await a.replace({...m,force:!0}),a.options.scrollBehavior=ee.scrollBehavior}catch(v){await t.runWithContext(()=>Ot(v))}}),{provide:{router:a}}}}),s_=J({name:"nuxt:payload",setup(t){be().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Ci(e.path);r&&Object.assign(t.static.data,r.data)}),Ls(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Ci(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Gn,1e3)})}}),i_=J(()=>{const t=be();Ls(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),o_=J(t=>{let e;async function n(){const r=await Gn();e&&clearTimeout(e),e=setTimeout(n,gi);try{const s=await $fetch(xs("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Ls(()=>{e=setTimeout(n,gi)})}),a_=J({name:"nuxt:chunk-reload",setup(t){const e=be(),n=Vn(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Cs(n.app.baseURL,i.fullPath);_d({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),c_=J({name:"pinia",setup(t){const e=Kh();return t.vueApp.use(e),Qt(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),l_=J({name:"nuxt:global-components"}),hn={dashboard:lr(()=>ne(()=>import("./DRLgmnwa.js"),__vite__mapDeps([37,38,2,3,39,33,17,8,4,40]),import.meta.url).then(t=>t.default||t)),default:lr(()=>ne(()=>import("./CdaPJIZx.js"),__vite__mapDeps([41,42,2,3,43,8,4]),import.meta.url).then(t=>t.default||t)),profile:lr(()=>ne(()=>import("./BaHHJq0B.js"),__vite__mapDeps([44,42,2,3,43,8,4,45]),import.meta.url).then(t=>t.default||t))},u_=J({name:"nuxt:prefetch",setup(t){const e=be();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof hn[r]=="function"&&await hn[r]()})}),t.hooks.hook("link:prefetch",n=>{if(ct(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=oc(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ht[o]=="function"&&Ht[o]();s&&typeof hn[s]=="function"&&hn[s]()})}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function f_(t,e,n){return(e=h_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Oo(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oo(Object(n),!0).forEach(function(r){f_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function d_(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function h_(t){var e=d_(t,"string");return typeof e=="symbol"?e:e+""}const No=()=>{};let Xs={},tl={},nl=null,rl={mark:No,measure:No};try{typeof window<"u"&&(Xs=window),typeof document<"u"&&(tl=document),typeof MutationObserver<"u"&&(nl=MutationObserver),typeof performance<"u"&&(rl=performance)}catch{}const{userAgent:Lo=""}=Xs.navigator||{},We=Xs,F=tl,xo=nl,pn=rl;We.document;const Se=!!F.documentElement&&!!F.head&&typeof F.addEventListener=="function"&&typeof F.createElement=="function",sl=~Lo.indexOf("MSIE")||~Lo.indexOf("Trident/");var p_=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,m_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,il={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},g_={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ol=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],G="classic",Qn="duotone",y_="sharp",__="sharp-duotone",al=[G,Qn,y_,__],v_={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},b_={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},w_=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),E_={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},I_=["fak","fa-kit","fakd","fa-kit-duotone"],Do={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},T_=["kit"],k_={kit:{"fa-kit":"fak"}},S_=["fak","fakd"],A_={kit:{fak:"fa-kit"}},Mo={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R_=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P_=["fak","fa-kit","fakd","fa-kit-duotone"],C_={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},O_={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},N_={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},cs={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},L_=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ls=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...R_,...L_],x_=["solid","regular","light","thin","duotone","brands"],cl=[1,2,3,4,5,6,7,8,9,10],D_=cl.concat([11,12,13,14,15,16,17,18,19,20]),M_=[...Object.keys(N_),...x_,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mn.GROUP,mn.SWAP_OPACITY,mn.PRIMARY,mn.SECONDARY].concat(cl.map(t=>"".concat(t,"x"))).concat(D_.map(t=>"w-".concat(t))),U_={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ie="___FONT_AWESOME___",us=16,ll="fa",ul="svg-inline--fa",st="data-fa-i2svg",fs="data-fa-pseudo-element",F_="data-fa-pseudo-element-pending",Js="data-prefix",Qs="data-icon",Uo="fontawesome-i2svg",H_="async",$_=["HTML","HEAD","STYLE","SCRIPT"],fl=(()=>{try{return!0}catch{return!1}})();function on(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[G]}})}const dl=g({},il);dl[G]=g(g(g(g({},{"fa-duotone":"duotone"}),il[G]),Do.kit),Do["kit-duotone"]);const j_=on(dl),ds=g({},E_);ds[G]=g(g(g(g({},{duotone:"fad"}),ds[G]),Mo.kit),Mo["kit-duotone"]);const Fo=on(ds),hs=g({},cs);hs[G]=g(g({},hs[G]),A_.kit);const Zs=on(hs),ps=g({},O_);ps[G]=g(g({},ps[G]),k_.kit);on(ps);const B_=p_,hl="fa-layers-text",W_=m_,V_=g({},v_);on(V_);const z_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kr=g_,G_=[...T_,...M_],$t=We.FontAwesomeConfig||{};function q_(t){var e=F.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function K_(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}F&&typeof F.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=K_(q_(n));s!=null&&($t[r]=s)});const pl={styleDefault:"solid",familyDefault:G,cssPrefix:ll,replacementClass:ul,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$t.familyPrefix&&($t.cssPrefix=$t.familyPrefix);const It=g(g({},pl),$t);It.autoReplaceSvg||(It.observeMutations=!1);const T={};Object.keys(pl).forEach(t=>{Object.defineProperty(T,t,{enumerable:!0,set:function(e){It[t]=e,jt.forEach(n=>n(T))},get:function(){return It[t]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,jt.forEach(e=>e(T))},get:function(){return It.cssPrefix}});We.FontAwesomeConfig=T;const jt=[];function Y_(t){return jt.push(t),()=>{jt.splice(jt.indexOf(t),1)}}const Oe=us,ae={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X_(t){if(!t||!Se)return;const e=F.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=F.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return F.head.insertBefore(e,r),t}const J_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){let t=12,e="";for(;t-- >0;)e+=J_[Math.random()*62|0];return e}function St(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ei(t){return t.classList?St(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ml(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q_(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ml(t[n]),'" '),"").trim()}function Zn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ti(t){return t.size!==ae.size||t.x!==ae.x||t.y!==ae.y||t.rotate!==ae.rotate||t.flipX||t.flipY}function Z_(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function ev(t){let{transform:e,width:n=us,height:r=us,startCentered:s=!1}=t,i="";return s&&sl?i+="translate(".concat(e.x/Oe-n/2,"em, ").concat(e.y/Oe-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/Oe,"em), calc(-50% + ").concat(e.y/Oe,"em)) "):i+="translate(".concat(e.x/Oe,"em, ").concat(e.y/Oe,"em) "),i+="scale(".concat(e.size/Oe*(e.flipX?-1:1),", ").concat(e.size/Oe*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var tv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function gl(){const t=ll,e=ul,n=T.cssPrefix,r=T.replacementClass;let s=tv;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Ho=!1;function Sr(){T.autoAddCss&&!Ho&&(X_(gl()),Ho=!0)}var nv={mixout(){return{dom:{css:gl,insertCss:Sr}}},hooks(){return{beforeDOMElementCreation(){Sr()},beforeI2svg(){Sr()}}}};const Te=We||{};Te[Ie]||(Te[Ie]={});Te[Ie].styles||(Te[Ie].styles={});Te[Ie].hooks||(Te[Ie].hooks={});Te[Ie].shims||(Te[Ie].shims=[]);var ce=Te[Ie];const yl=[],_l=function(){F.removeEventListener("DOMContentLoaded",_l),Bn=1,yl.map(t=>t())};let Bn=!1;Se&&(Bn=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),Bn||F.addEventListener("DOMContentLoaded",_l));function rv(t){Se&&(Bn?setTimeout(t,0):yl.push(t))}function an(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?ml(t):"<".concat(e," ").concat(Q_(n),">").concat(r.map(an).join(""),"</").concat(e,">")}function $o(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ar=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,e[l],l,e);return u};function sv(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ms(t){const e=sv(t);return e.length===1?e[0].toString(16):null}function iv(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function jo(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function gs(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=jo(e);typeof ce.hooks.addPack=="function"&&!r?ce.hooks.addPack(t,jo(e)):ce.styles[t]=g(g({},ce.styles[t]||{}),s),t==="fas"&&gs("fa",e)}const{styles:Jt,shims:ov}=ce,vl=Object.keys(Zs),av=vl.reduce((t,e)=>(t[e]=Object.keys(Zs[e]),t),{});let ni=null,bl={},wl={},El={},Il={},Tl={};function cv(t){return~G_.indexOf(t)}function lv(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!cv(s)?s:null}const kl=()=>{const t=r=>Ar(Jt,(s,i,o)=>(s[o]=Ar(i,r,{}),s),{});bl=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),wl=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Tl=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in Jt||T.autoFetchSvg,n=Ar(ov,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});El=n.names,Il=n.unicodes,ni=er(T.styleDefault,{family:T.familyDefault})};Y_(t=>{ni=er(t.styleDefault,{family:T.familyDefault})});kl();function ri(t,e){return(bl[t]||{})[e]}function uv(t,e){return(wl[t]||{})[e]}function Je(t,e){return(Tl[t]||{})[e]}function Sl(t){return El[t]||{prefix:null,iconName:null}}function fv(t){const e=Il[t],n=ri("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return ni}const Al=()=>({prefix:null,iconName:null,rest:[]});function dv(t){let e=G;const n=vl.reduce((r,s)=>(r[s]="".concat(T.cssPrefix,"-").concat(s),r),{});return al.forEach(r=>{(t.includes(n[r])||t.some(s=>av[r].includes(s)))&&(e=r)}),e}function er(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=G}=e,r=j_[n][t];if(n===Qn&&!t)return"fad";const s=Fo[n][t]||Fo[n][r],i=t in ce.styles?t:null;return s||i||null}function hv(t){let e=[],n=null;return t.forEach(r=>{const s=lv(T.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Bo(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function tr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=ls.concat(P_),i=Bo(t.filter(d=>s.includes(d))),o=Bo(t.filter(d=>!ls.includes(d))),a=i.filter(d=>(r=d,!ol.includes(d))),[c=null]=a,l=dv(i),u=g(g({},hv(o)),{},{prefix:er(c,{family:l})});return g(g(g({},u),yv({values:t,family:l,styles:Jt,config:T,canonical:u,givenPrefix:r})),pv(n,r,u))}function pv(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Sl(s):{},o=Je(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Jt.far&&Jt.fas&&!T.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const mv=al.filter(t=>t!==G||t!==Qn),gv=Object.keys(cs).filter(t=>t!==G).map(t=>Object.keys(cs[t])).flat();function yv(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Qn,c=e.includes("fa-duotone")||e.includes("fad"),l=o.familyDefault==="duotone",u=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||l||u)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&mv.includes(n)&&(Object.keys(i).find(f=>gv.includes(f))||o.autoFetchSvg)){const f=w_.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=Je(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Ve()||"fas"),r}class _v{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),s[i]),gs(i,s[i]);const o=Zs[G][i];o&&gs(o,s[i]),kl()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];e[i]||(e[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[i][l]=a)}),e[i][o]=a}),e}}let Wo=[],pt={};const _t={},vv=Object.keys(_t);function bv(t,e){let{mixoutsTo:n}=e;return Wo=t,pt={},Object.keys(_t).forEach(r=>{vv.indexOf(r)===-1&&delete _t[r]}),Wo.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{pt[o]||(pt[o]=[]),pt[o].push(i[o])})}r.provides&&r.provides(_t)}),n}function ys(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(pt[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function it(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(pt[t]||[]).forEach(i=>{i.apply(null,n)})}function ze(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _t[t]?_t[t].apply(null,e):void 0}function _s(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ve();if(e)return e=Je(n,e)||e,$o(Rl.definitions,n,e)||$o(ce.styles,n,e)}const Rl=new _v,wv=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,it("noAuto")},Ev={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Se?(it("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,rv(()=>{Tv({autoReplaceSvgRoot:e}),it("watch",t)})}},Iv={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Je(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=er(t[0]);return{prefix:n,iconName:Je(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(B_))){const e=tr(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ve(),iconName:Je(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ve();return{prefix:e,iconName:Je(e,t)||t}}}},Z={noAuto:wv,config:T,dom:Ev,parse:Iv,library:Rl,findIconDefinition:_s,toHtml:an},Tv=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=F}=t;(Object.keys(ce.styles).length>0||T.autoFetchSvg)&&Se&&T.autoReplaceSvg&&Z.dom.i2svg({node:e})};function nr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>an(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Se)return;const n=F.createElement("div");return n.innerHTML=t.html,n.children}}),t}function kv(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(ti(o)&&n.found&&!r.found){const{width:a,height:c}=n,l={x:a/c/2,y:.5};s.style=Zn(g(g({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Sv(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},s),{},{id:o}),children:r}]}]}function si(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:l,extra:u,watchable:d=!1}=t,{width:f,height:h}=n.found?n:e,m=S_.includes(r),w=[T.replacementClass,s?"".concat(T.cssPrefix,"-").concat(s):""].filter(k=>u.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(u.classes).join(" ");let _={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(h)})};const v=m&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/h*16*.0625,"em")}:{};d&&(_.attributes[st]=""),a&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(l||Xt())},children:[a]}),delete _.attributes.title);const b=g(g({},_),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:g(g({},v),u.styles)}),{children:y,attributes:S}=n.found&&e.found?ze("generateAbstractMask",b)||{children:[],attributes:{}}:ze("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=y,b.attributes=S,o?Sv(b):kv(b)}function Vo(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,c=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[st]="");const l=g({},o.styles);ti(s)&&(l.transform=ev({transform:s,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=Zn(l);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Av(t){const{content:e,title:n,extra:r}=t,s=g(g(g({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Zn(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Rr}=ce;function vs(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(kr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(kr.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(kr.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const Rv={found:!1,width:512,height:512};function Pv(t,e){!fl&&!T.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function bs(t,e){let n=e;return e==="fa"&&T.styleDefault!==null&&(e=Ve()),new Promise((r,s)=>{if(n==="fa"){const i=Sl(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Rr[e]&&Rr[e][t]){const i=Rr[e][t];return r(vs(i))}Pv(t,e),r(g(g({},Rv),{},{icon:T.showMissingIcons&&t?ze("missingIconAbstract")||{}:{}}))})}const zo=()=>{},ws=T.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:zo,measure:zo},xt='FA "6.7.2"',Cv=t=>(ws.mark("".concat(xt," ").concat(t," begins")),()=>Pl(t)),Pl=t=>{ws.mark("".concat(xt," ").concat(t," ends")),ws.measure("".concat(xt," ").concat(t),"".concat(xt," ").concat(t," begins"),"".concat(xt," ").concat(t," ends"))};var ii={begin:Cv,end:Pl};const Sn=()=>{};function Go(t){return typeof(t.getAttribute?t.getAttribute(st):null)=="string"}function Ov(t){const e=t.getAttribute?t.getAttribute(Js):null,n=t.getAttribute?t.getAttribute(Qs):null;return e&&n}function Nv(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(T.replacementClass)}function Lv(){return T.autoReplaceSvg===!0?An.replace:An[T.autoReplaceSvg]||An.replace}function xv(t){return F.createElementNS("http://www.w3.org/2000/svg",t)}function Dv(t){return F.createElement(t)}function Cl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?xv:Dv}=e;if(typeof t=="string")return F.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(Cl(i,{ceFn:n}))}),r}function Mv(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const An={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Cl(n),e)}),e.getAttribute(st)===null&&T.keepOriginalSource){let n=F.createComment(Mv(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ei(e).indexOf(T.replacementClass))return An.replace(t);const r=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===T.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>an(i)).join(`
`);e.setAttribute(st,""),e.innerHTML=s}};function qo(t){t()}function Ol(t,e){const n=typeof e=="function"?e:Sn;if(t.length===0)n();else{let r=qo;T.mutateApproach===H_&&(r=We.requestAnimationFrame||qo),r(()=>{const s=Lv(),i=ii.begin("mutate");t.map(s),i(),n()})}}let oi=!1;function Nl(){oi=!0}function Es(){oi=!1}let Wn=null;function Ko(t){if(!xo||!T.observeMutations)return;const{treeCallback:e=Sn,nodeCallback:n=Sn,pseudoElementsCallback:r=Sn,observeMutationsRoot:s=F}=t;Wn=new xo(i=>{if(oi)return;const o=Ve();St(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Go(a.addedNodes[0])&&(T.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&T.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Go(a.target)&&~z_.indexOf(a.attributeName))if(a.attributeName==="class"&&Ov(a.target)){const{prefix:c,iconName:l}=tr(ei(a.target));a.target.setAttribute(Js,c||o),l&&a.target.setAttribute(Qs,l)}else Nv(a.target)&&n(a.target)})}),Se&&Wn.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Uv(){Wn&&Wn.disconnect()}function Fv(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Hv(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=tr(ei(t));return s.prefix||(s.prefix=Ve()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=uv(s.prefix,t.innerText)||ri(s.prefix,ms(t.innerText))),!s.iconName&&T.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function $v(t){const e=St(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return T.autoA11y&&(n?e["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Xt()):(e["aria-hidden"]="true",e.focusable="false")),e}function jv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ae,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Hv(t),i=$v(t),o=ys("parseNodeAttributes",{},t);let a=e.styleParser?Fv(t):[];return g({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ae,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:Bv}=ce;function Ll(t){const e=T.autoReplaceSvg==="nest"?Yo(t,{styleParser:!1}):Yo(t);return~e.extra.classes.indexOf(hl)?ze("generateLayersText",t,e):ze("generateSvgReplacementMutation",t,e)}function Wv(){return[...I_,...ls]}function Xo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Se)return Promise.resolve();const n=F.documentElement.classList,r=u=>n.add("".concat(Uo,"-").concat(u)),s=u=>n.remove("".concat(Uo,"-").concat(u)),i=T.autoFetchSvg?Wv():ol.concat(Object.keys(Bv));i.includes("fa")||i.push("fa");const o=[".".concat(hl,":not([").concat(st,"])")].concat(i.map(u=>".".concat(u,":not([").concat(st,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=St(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=ii.begin("onTree"),l=a.reduce((u,d)=>{try{const f=Ll(d);f&&u.push(f)}catch(f){fl||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(f=>{Ol(f,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(f=>{c(),d(f)})})}function Vv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ll(t).then(n=>{n&&Ol([n],e)})}function zv(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:_s(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:_s(s||{})),t(r,g(g({},n),{},{mask:s}))}}const Gv=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ae,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:h}=t;return nr(g({type:"icon"},t),()=>(it("beforeDOMElementCreation",{iconDefinition:t,params:e}),T.autoA11y&&(o?l["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(a||Xt()):(l["aria-hidden"]="true",l.focusable="false")),si({icons:{main:vs(h),mask:s?vs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:g(g({},ae),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:l,styles:u,classes:c}})))};var qv={mixout(){return{icon:zv(Gv)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Xo,t.nodeCallback=Vv,t}}},provides(t){t.i2svg=function(e){const{node:n=F,callback:r=()=>{}}=e;return Xo(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:l,maskId:u,extra:d}=n;return new Promise((f,h)=>{Promise.all([bs(r,o),l.iconName?bs(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(m=>{let[w,_]=m;f([e,si({icons:{main:w,mask:_},prefix:o,iconName:r,transform:a,symbol:c,maskId:u,title:s,titleId:i,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Zn(o);a.length>0&&(r.style=a);let c;return ti(i)&&(c=ze("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},Kv={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return nr({type:"layer"},()=>{it("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Yv={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return nr({type:"counter",content:t},()=>(it("beforeDOMElementCreation",{content:t,params:e}),Av({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(T.cssPrefix,"-layers-counter"),...r]}})))}}}},Xv={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ae,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return nr({type:"text",content:t},()=>(it("beforeDOMElementCreation",{content:t,params:e}),Vo({content:t,transform:g(g({},ae),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(T.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(sl){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/c,a=l.height/c}return T.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Vo({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const Jv=new RegExp('"',"ug"),Jo=[1105920,1112319],Qo=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),b_),U_),C_),Is=Object.keys(Qo).reduce((t,e)=>(t[e.toLowerCase()]=Qo[e],t),{}),Qv=Object.keys(Is).reduce((t,e)=>{const n=Is[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Zv(t){const e=t.replace(Jv,""),n=iv(e,0),r=n>=Jo[0]&&n<=Jo[1],s=e.length===2?e[0]===e[1]:!1;return{value:ms(s?e[0]:e),isSecondary:r||s}}function eb(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Is[n]||{})[s]||Qv[n]}function Zo(t,e){const n="".concat(F_).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=St(t.children).filter(f=>f.getAttribute(fs)===e)[0],a=We.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),l=c.match(W_),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let h=eb(c,u);const{value:m,isSecondary:w}=Zv(f),_=l[0].startsWith("FontAwesome");let v=ri(h,m),b=v;if(_){const y=fv(m);y.iconName&&y.prefix&&(v=y.iconName,h=y.prefix)}if(v&&!w&&(!o||o.getAttribute(Js)!==h||o.getAttribute(Qs)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const y=jv(),{extra:S}=y;S.attributes[fs]=e,bs(v,h).then(k=>{const O=si(g(g({},y),{},{icons:{main:k,mask:Al()},prefix:h,iconName:b,extra:S,watchable:!0})),N=F.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=O.map(P=>an(P)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function tb(t){return Promise.all([Zo(t,"::before"),Zo(t,"::after")])}function nb(t){return t.parentNode!==document.head&&!~$_.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fs)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ea(t){if(Se)return new Promise((e,n)=>{const r=St(t.querySelectorAll("*")).filter(nb).map(tb),s=ii.begin("searchPseudoElements");Nl(),Promise.all(r).then(()=>{s(),Es(),e()}).catch(()=>{s(),Es(),n()})})}var rb={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ea,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=F}=e;T.searchPseudoElements&&ea(n)}}};let ta=!1;var sb={mixout(){return{dom:{unwatch(){Nl(),ta=!0}}}},hooks(){return{bootstrap(){Ko(ys("mutationObserverCallbacks",{}))},noAuto(){Uv()},watch(t){const{observeMutationsRoot:e}=t;ta?Es():Ko(ys("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const na=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ib={mixout(){return{parse:{transform:t=>na(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=na(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(c," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:u,path:d};return{tag:"g",attributes:g({},f.outer),children:[{tag:"g",attributes:g({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),f.path)}]}]}}}};const Pr={x:0,y:0,width:"100%",height:"100%"};function ra(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ob(t){return t.tag==="g"?t.children:[t]}var ab={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?tr(n.split(" ").map(s=>s.trim())):Al();return r.prefix||(r.prefix=Ve()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:c,icon:l}=s,{width:u,icon:d}=i,f=Z_({transform:a,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:g(g({},Pr),{},{fill:"white"})},m=l.children?{children:l.children.map(ra)}:{},w={tag:"g",attributes:g({},f.inner),children:[ra(g({tag:l.tag,attributes:g(g({},l.attributes),f.path)},m))]},_={tag:"g",attributes:g({},f.outer),children:[w]},v="mask-".concat(o||Xt()),b="clip-".concat(o||Xt()),y={tag:"mask",attributes:g(g({},Pr),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,_]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:ob(d)},y]};return n.push(S,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},Pr)}),{children:n,attributes:r}}}},cb={provides(t){let e=!1;We.matchMedia&&(e=We.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:g(g({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ub=[nv,qv,Kv,Yv,Xv,rb,sb,ib,ab,cb,lb];bv(ub,{mixoutsTo:Z});Z.noAuto;const fb=Z.config,db=Z.library;Z.dom;const e0=Z.parse;Z.findIconDefinition;Z.toHtml;const t0=Z.icon;Z.layer;Z.text;Z.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const hb={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},pb={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},mb={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},gb={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},yb={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},_b={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},vb={freeFabFaXTwitter:hb,freeFabFaFacebook:gb,freeFabFaInstagram:mb,freeFabFaYoutube:yb,freeFabFaTiktok:pb,freeFabFaTelegram:_b};fb.autoAddCss=!1;const bb=J(()=>{db.add(vb)});var wb="firebase",Eb="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(wb,Eb,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="firebasestorage.googleapis.com",Dl="storageBucket",Ib=2*60*1e3,Tb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $ extends ke{constructor(e,n,r=0){super(Cr(e),`Firebase Storage: ${n} (${Cr(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var H;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(H||(H={}));function Cr(t){return"storage/"+t}function ai(){const t="An unknown error occurred, please check the error payload for server response.";return new $(H.UNKNOWN,t)}function kb(t){return new $(H.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Sb(t){return new $(H.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ab(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $(H.UNAUTHENTICATED,t)}function Rb(){return new $(H.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pb(t){return new $(H.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Cb(){return new $(H.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ob(){return new $(H.CANCELED,"User canceled the upload/download.")}function Nb(t){return new $(H.INVALID_URL,"Invalid URL '"+t+"'.")}function Lb(t){return new $(H.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xb(){return new $(H.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Dl+"' property when initializing the app?")}function Db(){return new $(H.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mb(){return new $(H.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ub(t){return new $(H.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ts(t){return new $(H.INVALID_ARGUMENT,t)}function Ml(){return new $(H.APP_DELETED,"The Firebase app was deleted.")}function Fb(t){return new $(H.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bt(t,e){return new $(H.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ct(t){throw new $(H.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=X.makeFromUrl(e,n)}catch{return new X(e,"")}if(r.path==="")return r;throw Lb(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp(`^https?://${d}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},w=n===xl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",v=new RegExp(`^https?://${w}/${s}/${_}`,"i"),y=[{regex:a,indices:c,postModify:i},{regex:h,indices:m,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<y.length;S++){const k=y[S],O=k.regex.exec(e);if(O){const N=O[k.indices.bucket];let P=O[k.indices.path];P||(P=""),r=new X(N,P),k.postModify(r);break}}if(r==null)throw Nb(e);return r}}class Hb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function d(_){s=setTimeout(()=>{s=null,t(h,c())},_)}function f(){i&&clearTimeout(i)}function h(_,...v){if(l){f();return}if(_){f(),u.call(null,_,...v);return}if(c()||o){f(),u.call(null,_,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let m=!1;function w(_){m||(m=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),d(0)):_||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function jb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){return t!==void 0}function Wb(t){return typeof t=="object"&&!Array.isArray(t)}function ci(t){return typeof t=="string"||t instanceof String}function sa(t){return li()&&t instanceof Blob}function li(){return typeof Blob<"u"}function ia(t,e,n,r){if(r<e)throw Ts(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ts(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ul(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var et;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(et||(et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,r,s,i,o,a,c,l,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,m)=>{this.resolve_=h,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new gn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===et.NO_ERROR,c=i.getStatus();if(!a||Vb(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===et.ABORT;r(!1,new gn(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new gn(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Bb(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ai();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ml():Ob();o(c)}else{const c=Cb();o(c)}};this.canceled_?n(!1,new gn(!1,null,!0)):this.backoffId_=$b(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gn{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Gb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Yb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Xb(t,e,n,r,s,i,o=!0){const a=Ul(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Kb(l,e),Gb(l,n),qb(l,i),Yb(l,r),new zb(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qb(...t){const e=Jb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(li())return new Blob(t);throw new $(H.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){if(typeof atob>"u")throw Ub("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Or{constructor(e,n){this.data=e,this.contentType=n||null}}function tw(t,e){switch(t){case le.RAW:return new Or(Fl(e));case le.BASE64:case le.BASE64URL:return new Or(Hl(t,e));case le.DATA_URL:return new Or(rw(e),sw(e))}throw ai()}function Fl(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nw(t){let e;try{e=decodeURIComponent(t)}catch{throw Bt(le.DATA_URL,"Malformed data URL.")}return Fl(e)}function Hl(t,e){switch(t){case le.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Bt(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case le.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Bt(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ew(e)}catch(s){throw s.message.includes("polyfill")?s:Bt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $l{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bt(le.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iw(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rw(t){const e=new $l(t);return e.base64?Hl(le.BASE64,e.rest):nw(e.rest)}function sw(t){return new $l(t).contentType}function iw(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){let r=0,s="";sa(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sa(this.data_)){const r=this.data_,s=Zb(r,e,n);return s===null?null:new He(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new He(r,!0)}}static getBlob(...e){if(li()){const n=e.map(r=>r instanceof He?r.data_:r);return new He(Qb.apply(null,n))}else{const n=e.map(o=>ci(o)?tw(le.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new He(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){let e;try{e=JSON.parse(t)}catch{return null}return Wb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aw(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Bl(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e){return e}class q{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||cw}}let yn=null;function lw(t){return!ci(t)||t.length<2?t:Bl(t)}function Wl(){if(yn)return yn;const t=[];t.push(new q("bucket")),t.push(new q("generation")),t.push(new q("metageneration")),t.push(new q("name","fullPath",!0));function e(i,o){return lw(o)}const n=new q("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new q("size");return s.xform=r,t.push(s),t.push(new q("timeCreated")),t.push(new q("updated")),t.push(new q("md5Hash",null,!0)),t.push(new q("cacheControl",null,!0)),t.push(new q("contentDisposition",null,!0)),t.push(new q("contentEncoding",null,!0)),t.push(new q("contentLanguage",null,!0)),t.push(new q("contentType",null,!0)),t.push(new q("metadata","customMetadata",!0)),yn=t,yn}function uw(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new X(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fw(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return uw(r,t),r}function Vl(t,e,n){const r=jl(e);return r===null?null:fw(t,r,n)}function dw(t,e,n,r){const s=jl(e);if(s===null||!ci(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),h=ui(f,n,r),m=Ul({alt:"media",token:l});return h+m})[0]}function hw(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zl{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){if(!t)throw ai()}function pw(t,e){function n(r,s){const i=Vl(t,s,e);return Gl(i!==null),i}return n}function mw(t,e){function n(r,s){const i=Vl(t,s,e);return Gl(i!==null),dw(i,s,t.host,t._protocol)}return n}function ql(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Rb():s=Ab():n.getStatus()===402?s=Sb(t.bucket):n.getStatus()===403?s=Pb(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gw(t){const e=ql(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=kb(t.path)),i.serverResponse=s.serverResponse,i}return n}function yw(t,e,n){const r=e.fullServerUrl(),s=ui(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zl(s,i,mw(t,n),o);return a.errorHandler=gw(e),a}function _w(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vw(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_w(null,e)),r}function bw(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let S=0;S<2;S++)y=y+Math.random().toString().slice(2);return y}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=vw(e,r,s),u=hw(l,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",h=He.getBlob(d,r,f);if(h===null)throw Db();const m={name:l.fullPath},w=ui(i,t.host,t._protocol),_="POST",v=t.maxUploadRetryTime,b=new zl(w,_,pw(t,n),v);return b.urlParams=m,b.headers=o,b.body=h.uploadData(),b.errorHandler=ql(e),b}class ww{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=et.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=et.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=et.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ct("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ct("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ct("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ct("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ct("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ew extends ww{initXhr(){this.xhr_.responseType="text"}}function Kl(){return new Ew}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this._service=e,n instanceof X?this._location=n:this._location=X.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ot(e,n)}get root(){const e=new X(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bl(this._location.path)}get storage(){return this._service}get parent(){const e=ow(this._location.path);if(e===null)return null;const n=new X(this._location.bucket,e);return new ot(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Fb(e)}}function Iw(t,e,n){t._throwIfRoot("uploadBytes");const r=bw(t.storage,t._location,Wl(),new He(e,!0),n);return t.storage.makeRequestWithTokens(r,Kl).then(s=>({metadata:s,ref:t}))}function Tw(t){t._throwIfRoot("getDownloadURL");const e=yw(t.storage,t._location,Wl());return t.storage.makeRequestWithTokens(e,Kl).then(n=>{if(n===null)throw Mb();return n})}function kw(t,e){const n=aw(t._location.path,e),r=new X(t._location.bucket,n);return new ot(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){return/^[A-Za-z]+:\/\//.test(t)}function Aw(t,e){return new ot(t,e)}function Yl(t,e){if(t instanceof fi){const n=t;if(n._bucket==null)throw xb();const r=new ot(n,n._bucket);return e!=null?Yl(r,e):r}else return e!==void 0?kw(t,e):t}function Rw(t,e){if(e&&Sw(e)){if(t instanceof fi)return Aw(t,e);throw Ts("To use ref(service, url), the first argument must be a Storage instance.")}else return Yl(t,e)}function oa(t,e){const n=e==null?void 0:e[Dl];return n==null?null:X.makeFromBucketSpec(n,t)}function Pw(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:gp(s,t.app.options.projectId))}class fi{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=xl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ib,this._maxUploadRetryTime=Tb,this._requests=new Set,s!=null?this._bucket=X.makeFromBucketSpec(s,this._host):this._bucket=oa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=X.makeFromBucketSpec(this._url,e):this._bucket=oa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ia("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ia("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ot(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Hb(Ml());{const o=Xb(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const aa="@firebase/storage",ca="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="storage";function n0(t,e,n){return t=Q(t),Iw(t,e,n)}function r0(t){return t=Q(t),Tw(t)}function s0(t,e){return t=Q(t),Rw(t,e)}function Cw(t=yc(),e){t=Q(t);const r=$s(t,Xl).getImmediate({identifier:e}),s=pp("storage");return s&&Ow(r,...s),r}function Ow(t,e,n,r={}){Pw(t,e,n,r)}function Nw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new fi(n,r,s,e,Tt)}function Lw(){Et(new tt(Xl,Nw,"PUBLIC").setMultipleInstances(!0)),Be(aa,ca,""),Be(aa,ca,"esm2017")}Lw();const xw=J(t=>{const{API_KEY:e,AUTH_DOMAIN:n,PROJECT_ID:r,STORAGE_BUCKET:s,MESSAGING_SENDER_ID:i,APP_ID:o,MEASUREMENT_ID:a}=Ch();let c;oo().length===0?c=gc({apiKey:e,authDomain:n,projectId:r,storageBucket:s,messagingSenderId:i,appId:o,measurementId:a}):c=oo()[0];const l=Xy(c),u=Cw(c);t.vueApp.provide("auth",l),t.provide("auth",l),t.vueApp.provide("storage",u),t.provide("storage",u)}),Dw=[tp,rp,ip,r_,s_,i_,o_,a_,c_,l_,u_,bb,xw],Mw=Dw;tu(async(t,e)=>{const n=e==null?void 0:e.canvasElement.id;if(!n)throw new Error("StoryContext is not provided");const r=`nuxt-app-${n}`,s=Lr(r);window.__NUXT__={serverRendered:!1,config:{public:{},app:{baseURL:"/"},...qh},data:{},state:{}},globalThis.$fetch||(globalThis.$fetch=Gh.create({baseURL:"/"}));const i=Iu({id:r,vueApp:t});s.set(i,!0),Lr("nuxt-app").set(i,!0),await Su(i,Mw),await i.hooks.callHook("app:created",t),await i.hooks.callHook("app:beforeMount",t)});const i0=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Ln as A,zf as B,Ii as C,Cs as D,Kw as E,ke as F,vf as G,s0 as H,n0 as I,r0 as J,i0 as K,Yw as L,Xf as P,Qw as _,Jf as a,Jw as b,be as c,zw as d,ep as e,Qy as f,Xw as g,ct as h,Ef as i,Ps as j,Vn as k,hn as l,Zw as m,Ai as n,Ls as o,Mf as p,Gw as q,Ns as r,Ot as s,e0 as t,j as u,t0 as v,Br as w,fb as x,qw as y,Ur as z};
