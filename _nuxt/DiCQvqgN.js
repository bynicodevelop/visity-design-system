const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DyMnSlty.js","./B0J-TkYQ.js","./DYHvSiQ9.js","./DlAUqK2U.js","./D3W5e_e3.js","./ComponentResolver.DoB1YiBk.css","./xO4j9-UN.js","./BHL2hDPj.js","./CCQmQBiC.js","./BosuxZz1.js","./DU0vITjN.js","./BtTNHg8u.js","./C5vXxZTL.js","./useFormValidator.jl9ECbbX.css","./1sk248pn.js","./CDmHbHRT.js","./Primary.CylS6xUB.css","./Dc_D_zz3.js","./index.C-YWaDcJ.css","./CzyQN33c.js","./register.CbQv0E6Y.css","./DTwFqufV.js","./CJM9Zjkw.js","./CsBYUTqQ.js","./Avatar.2LgtPqbx.css","./Dx0aZMvU.js","./index.HqApbJ8u.css","./CTooiZfH.js","./ULnIqwsX.js","./UnsPp-CP.js","./BKj0MSMw.js","./Modal.Bara9nm_.css","./ug01hfsv.js","./e6xaAFY2.js","./PublicProfile.CqkBxaLh.css","./ByvpPExq.js","./Bp9lV89C.js","./DPn3BKJ3.js","./BYevT2vT.js","./CmV_MKK0.js","./FFonaAHJ.js","./Alert.De2aXbL1.css","./Dashboard.DZwQkeID.css","./CKYwKROE.js","./CG5B_qcz.js","./Footer.B6qGZbv1.css","./C4foexxC.js","./profile.CE-iJVgb.css"])))=>i.map(i=>d[i]);
var qh=Object.defineProperty;var Gh=(e,t,r)=>t in e?qh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var bn=(e,t,r)=>Gh(e,typeof t!="symbol"?t+"":t,r);import{e as Kh,s as Yh}from"./CCQmQBiC.js";import{ab as jn,K as zn,ac as Vo,V as Sl,ad as $o,Q as Xh,n as Wo,ae as Jh,u as Vn,f as Zt,P as Qh,O as Pr,e as Rl,g as Ft,h as Bo,p as ks,r as tr,w as Pl,T as Zh,af as kl,j as pi,L as Cl,ag as ep,U as tp,ah as np,ai as rp,W as Cs}from"./DYHvSiQ9.js";import{_ as Ut}from"./D3W5e_e3.js";import{c as ec,a as Ol}from"./BosuxZz1.js";const{global:ip}=__STORYBOOK_MODULE_GLOBAL__,{setDefaultProjectAnnotations:oE,setProjectAnnotations:aE,composeStory:cE,composeStories:lE}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:ai}=ip;ai.STORYBOOK_ENV="vue3";ai.PLUGINS_SETUP_FUNCTIONS||(ai.PLUGINS_SETUP_FUNCTIONS=new Set);({...Kh});try{(!1).decline&&(!1).decline()}catch{}function Zs(e,t={},r){for(const i in e){const a=e[i],c=r?`${r}:${i}`:i;typeof a=="object"&&a!==null?Zs(a,t,c):typeof a=="function"&&(t[c]=a)}return t}const sp={run:e=>e()},op=()=>sp,Nl=typeof console.createTask<"u"?console.createTask:op;function ap(e,t){const r=t.shift(),i=Nl(r);return e.reduce((a,c)=>a.then(()=>i.run(()=>c(...t))),Promise.resolve())}function cp(e,t){const r=t.shift(),i=Nl(r);return Promise.all(e.map(a=>i.run(()=>a(...t))))}function Os(e,t){for(const r of[...e])r(t)}class lp{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,r,i={}){if(!t||typeof r!="function")return()=>{};const a=t;let c;for(;this._deprecatedHooks[t];)c=this._deprecatedHooks[t],t=c.to;if(c&&!i.allowDeprecated){let u=c.message;u||(u=`${a} hook has been deprecated`+(c.to?`, please use ${c.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(u)||(console.warn(u),this._deprecatedMessages.add(u))}if(!r.name)try{Object.defineProperty(r,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(r),()=>{r&&(this.removeHook(t,r),r=void 0)}}hookOnce(t,r){let i,a=(...c)=>(typeof i=="function"&&i(),i=void 0,a=void 0,r(...c));return i=this.hook(t,a),i}removeHook(t,r){if(this._hooks[t]){const i=this._hooks[t].indexOf(r);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,r){this._deprecatedHooks[t]=typeof r=="string"?{to:r}:r;const i=this._hooks[t]||[];delete this._hooks[t];for(const a of i)this.hook(t,a)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const r in t)this.deprecateHook(r,t[r])}addHooks(t){const r=Zs(t),i=Object.keys(r).map(a=>this.hook(a,r[a]));return()=>{for(const a of i.splice(0,i.length))a()}}removeHooks(t){const r=Zs(t);for(const i in r)this.removeHook(i,r[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...r){return r.unshift(t),this.callHookWith(ap,t,...r)}callHookParallel(t,...r){return r.unshift(t),this.callHookWith(cp,t,...r)}callHookWith(t,r,...i){const a=this._before||this._after?{name:r,args:i,context:{}}:void 0;this._before&&Os(this._before,a);const c=t(r in this._hooks?[...this._hooks[r]]:[],i);return c instanceof Promise?c.finally(()=>{this._after&&a&&Os(this._after,a)}):(this._after&&a&&Os(this._after,a),c)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const r=this._before.indexOf(t);r!==-1&&this._before.splice(r,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const r=this._after.indexOf(t);r!==-1&&this._after.splice(r,1)}}}}function Ll(){return new lp}function up(e={}){let t,r=!1;const i=u=>{if(t&&t!==u)throw new Error("Context conflict")};let a;if(e.asyncContext){const u=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;u?a=new u:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const c=()=>{if(a){const u=a.getStore();if(u!==void 0)return u}return t};return{use:()=>{const u=c();if(u===void 0)throw new Error("Context is not available");return u},tryUse:()=>c(),set:(u,p)=>{p||i(u),t=u,r=!0},unset:()=>{t=void 0,r=!1},call:(u,p)=>{i(u),t=u;try{return a?a.run(u,p):p()}finally{r||(t=void 0)}},async callAsync(u,p){t=u;const g=()=>{t=u},m=()=>t===u?g:void 0;to.add(m);try{const _=a?a.run(u,p):p();return r||(t=void 0),await _}finally{to.delete(m)}}}}function dp(e={}){const t={};return{get(r,i={}){return t[r]||(t[r]=up({...e,...i})),t[r]}}}const mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},tc="__unctx__",fp=mi[tc]||(mi[tc]=dp()),eo=(e,t={})=>fp.get(e,t),nc="__unctx_async_handlers__",to=mi[nc]||(mi[nc]=new Set);function $n(e){const t=[];for(const a of to){const c=a();c&&t.push(c)}const r=()=>{for(const a of t)a()};let i=e();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(a=>{throw r(),a})),[i,r]}const uE=!1,hp=!1,dE={value:null,errorValue:null,deep:!0},pp=null,Dl="nuxt-app",rc=36e5,mp="vite:preloadError";function Ml(e=Dl){return eo(e,{asyncContext:!1})}const gp="__nuxt_plugin";function _p(e){var a;let t=0;const r={_id:e.id||Dl||"nuxt-app",_scope:Vo(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return r.vueApp.version}},payload:jn({...((a=e.ssrContext)==null?void 0:a.payload)||{},data:jn({}),state:zn({}),once:new Set,_errors:jn({})}),static:{data:{}},runWithContext(c){return r._scope.active&&!Sl()?r._scope.run(()=>ic(r,c)):ic(r,c)},isHydrating:!0,deferHydration(){if(!r.isHydrating)return()=>{};t++;let c=!1;return()=>{if(!c&&(c=!0,t--,t===0))return r.isHydrating=!1,r.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:jn({}),_payloadRevivers:{},...e};{const c=window.__NUXT__;if(c)for(const u in c)switch(u){case"data":case"state":case"_errors":Object.assign(r.payload[u],c[u]);break;default:r.payload[u]=c[u]}}r.hooks=Ll(),r.hook=r.hooks.hook,r.callHook=r.hooks.callHook,r.provide=(c,u)=>{const p="$"+c;ti(r,p,u),ti(r.vueApp.config.globalProperties,p,u)},ti(r.vueApp,"$nuxt",r),ti(r.vueApp.config.globalProperties,"$nuxt",r);{window.addEventListener(mp,u=>{r.callHook("app:chunkError",{error:u.payload}),(r.isHydrating||u.payload.message.includes("Unable to preload CSS"))&&u.preventDefault()}),window.useNuxtApp=window.useNuxtApp||We;const c=r.hook("app:error",(...u)=>{console.error("[nuxt] error caught during app initialization",...u)});r.hook("app:mounted",c)}const i=r.payload.config;return r.provide("config",i),r}function yp(e,t){t.hooks&&e.hooks.addHooks(t.hooks)}async function vp(e,t){if(typeof t=="function"){const{provide:r}=await e.runWithContext(()=>t(e))||{};if(r&&typeof r=="object")for(const i in r)e.provide(i,r[i])}}async function bp(e,t){const r=[],i=[],a=[],c=[];let u=0;async function p(g){var _;const m=((_=g.dependsOn)==null?void 0:_.filter(A=>t.some(I=>I._name===A)&&!r.includes(A)))??[];if(m.length>0)i.push([new Set(m),g]);else{const A=vp(e,g).then(async()=>{g._name&&(r.push(g._name),await Promise.all(i.map(async([I,S])=>{I.has(g._name)&&(I.delete(g._name),I.size===0&&(u++,await p(S)))})))});g.parallel?a.push(A.catch(I=>c.push(I))):await A}}for(const g of t)yp(e,g);for(const g of t)await p(g);if(await Promise.all(a),u)for(let g=0;g<u;g++)await Promise.all(a);if(c.length)throw c[0]}function ut(e){if(typeof e=="function")return e;const t=e._name||e.name;return delete e.name,Object.assign(e.setup||(()=>{}),e,{[gp]:!0,_name:t})}const Ep=ut;function ic(e,t,r){const i=()=>t();return Ml(e._id).set(e),e.vueApp.runWithContext(i)}function Ip(e){var r;let t;return $o()&&(t=(r=Xh())==null?void 0:r.appContext.app.$nuxt),t=t||Ml(e).tryUse(),t||null}function We(e){const t=Ip(e);if(!t)throw new Error("[nuxt] instance unavailable");return t}function Ai(e){return We().$config}function ti(e,t,r){Object.defineProperty(e,t,{get:()=>r})}const wp=new Set(["title","titleTemplate","script","style","noscript"]),ci=new Set(["base","meta","link","style","script","noscript"]),Tp=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Ap=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Ul=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Sp=typeof window<"u";function gi(e){let t=9;for(let r=0;r<e.length;)t=Math.imul(t^e.charCodeAt(r++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function no(e){if(e._h)return e._h;if(e._d)return gi(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const r in e.props)t+=`${r}:${String(e.props[r])},`;return gi(t)}function Rp(e,t){return e instanceof Promise?e.then(t):t(e)}function ro(e,t,r,i){const a=i||Fl(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(a instanceof Promise)return a.then(u=>ro(e,t,r,u));const c={tag:e,props:a};for(const u of Ul){const p=c.props[u]!==void 0?c.props[u]:r[u];p!==void 0&&((!(u==="innerHTML"||u==="textContent"||u==="children")||wp.has(c.tag))&&(c[u==="children"?"innerHTML":u]=p),delete c.props[u])}return c.props.body&&(c.tagPosition="bodyClose",delete c.props.body),c.tag==="script"&&typeof c.innerHTML=="object"&&(c.innerHTML=JSON.stringify(c.innerHTML),c.props.type=c.props.type||"application/json"),Array.isArray(c.props.content)?c.props.content.map(u=>({...c,props:{...c.props,content:u}})):c}function Pp(e,t){var i;const r=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,a])=>a).map(([a,c])=>e==="style"?`${a}:${c}`:a)),(i=String(Array.isArray(t)?t.join(r):t))==null?void 0:i.split(r).filter(a=>!!a.trim()).join(r)}function xl(e,t,r,i){for(let a=i;a<r.length;a+=1){const c=r[a];if(c==="class"||c==="style"){e[c]=Pp(c,e[c]);continue}if(e[c]instanceof Promise)return e[c].then(u=>(e[c]=u,xl(e,t,r,a)));if(!t&&!Ul.has(c)){const u=String(e[c]),p=c.startsWith("data-");u==="true"||u===""?e[c]=p?"true":!0:e[c]||(p&&u==="false"?e[c]="false":delete e[c])}}}function Fl(e,t=!1){const r=xl(e,t,Object.keys(e),0);return r instanceof Promise?r.then(()=>e):e}const kp=10;function jl(e,t,r){for(let i=r;i<t.length;i+=1){const a=t[i];if(a instanceof Promise)return a.then(c=>(t[i]=c,jl(e,t,i)));Array.isArray(a)?e.push(...a):e.push(a)}}function Cp(e){const t=[],r=e.resolvedInput;for(const a in r){if(!Object.prototype.hasOwnProperty.call(r,a))continue;const c=r[a];if(!(c===void 0||!Tp.has(a))){if(Array.isArray(c)){for(const u of c)t.push(ro(a,u,e));continue}t.push(ro(a,c,e))}}if(t.length===0)return[];const i=[];return Rp(jl(i,t,0),()=>i.map((a,c)=>(a._e=e._i,e.mode&&(a._m=e.mode),a._p=(e._i<<kp)+c,a)))}const sc=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),oc={base:-10,title:10},ac={critical:-80,high:-10,low:20};function _i(e){const t=e.tagPriority;if(typeof t=="number")return t;let r=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?r=-30:e.props.charset?r=-20:e.props.name==="viewport"&&(r=-15):e.tag==="link"&&e.props.rel==="preconnect"?r=20:e.tag in oc&&(r=oc[e.tag]),t&&t in ac?r+ac[t]:r}const Op=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Np=["name","property","http-equiv"];function Hl(e){const{props:t,tag:r}=e;if(Ap.has(r))return r;if(r==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${r}:id:${t.id}`;for(const i of Np)if(t[i]!==void 0)return`${r}:${i}:${t[i]}`;return!1}const wn="%separator";function Lp(e,t,r=!1){var a;let i;if(t==="s"||t==="pageTitle")i=e.pageTitle;else if(t.includes(".")){const c=t.indexOf(".");i=(a=e[t.substring(0,c)])==null?void 0:a[t.substring(c+1)]}else i=e[t];if(i!==void 0)return r?(i||"").replace(/"/g,'\\"'):i||""}const Dp=new RegExp(`${wn}(?:\\s*${wn})*`,"g");function ni(e,t,r,i=!1){if(typeof e!="string"||!e.includes("%"))return e;let a=e;try{a=decodeURI(e)}catch{}const c=a.match(/%\w+(?:\.\w+)?/g);if(!c)return e;const u=e.includes(wn);return e=e.replace(/%\w+(?:\.\w+)?/g,p=>{if(p===wn||!c.includes(p))return p;const g=Lp(t,p.slice(1),i);return g!==void 0?g:p}).trim(),u&&(e.endsWith(wn)&&(e=e.slice(0,-wn.length)),e.startsWith(wn)&&(e=e.slice(wn.length)),e=e.replace(Dp,r).trim()),e}function cc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Vl(e,t={}){const r=t.document||e.resolvedOptions.document;if(!r||!e.dirty)return;const i={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async a=>{var A;const c=(await e.resolveTags()).map(I=>({tag:I,id:ci.has(I.tag)?no(I):I.tag,shouldRender:!0}));let u=e._dom;if(!u){u={elMap:{htmlAttrs:r.documentElement,bodyAttrs:r.body}};const I=new Set;for(const S of["body","head"]){const U=(A=r[S])==null?void 0:A.children;for(const G of U){const W=G.tagName.toLowerCase();if(!ci.has(W))continue;const j={tag:W,props:await Fl(G.getAttributeNames().reduce((se,oe)=>({...se,[oe]:G.getAttribute(oe)}),{})),innerHTML:G.innerHTML},Y=Hl(j);let $=Y,re=1;for(;$&&I.has($);)$=`${Y}:${re++}`;$&&(j._d=$,I.add($)),u.elMap[G.getAttribute("data-hid")||no(j)]=G}}}u.pendingSideEffects={...u.sideEffects},u.sideEffects={};function p(I,S,U){const G=`${I}:${S}`;u.sideEffects[G]=U,delete u.pendingSideEffects[G]}function g({id:I,$el:S,tag:U}){const G=U.tag.endsWith("Attrs");if(u.elMap[I]=S,G||(U.textContent&&U.textContent!==S.textContent&&(S.textContent=U.textContent),U.innerHTML&&U.innerHTML!==S.innerHTML&&(S.innerHTML=U.innerHTML),p(I,"el",()=>{var W;(W=u.elMap[I])==null||W.remove(),delete u.elMap[I]})),U._eventHandlers)for(const W in U._eventHandlers)Object.prototype.hasOwnProperty.call(U._eventHandlers,W)&&S.getAttribute(`data-${W}`)!==""&&((U.tag==="bodyAttrs"?r.defaultView:S).addEventListener(W.substring(2),U._eventHandlers[W].bind(S)),S.setAttribute(`data-${W}`,""));for(const W in U.props){if(!Object.prototype.hasOwnProperty.call(U.props,W))continue;const j=U.props[W],Y=`attr:${W}`;if(W==="class"){if(!j)continue;for(const $ of j.split(" "))G&&p(I,`${Y}:${$}`,()=>S.classList.remove($)),!S.classList.contains($)&&S.classList.add($)}else if(W==="style"){if(!j)continue;for(const $ of j.split(";")){const re=$.indexOf(":"),se=$.substring(0,re).trim(),oe=$.substring(re+1).trim();p(I,`${Y}:${se}`,()=>{S.style.removeProperty(se)}),S.style.setProperty(se,oe)}}else S.getAttribute(W)!==j&&S.setAttribute(W,j===!0?"":String(j)),G&&p(I,Y,()=>S.removeAttribute(W))}}const m=[],_={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const I of c){const{tag:S,shouldRender:U,id:G}=I;if(U){if(S.tag==="title"){r.title=S.textContent;continue}I.$el=I.$el||u.elMap[G],I.$el?g(I):ci.has(S.tag)&&m.push(I)}}for(const I of m){const S=I.tag.tagPosition||"head";I.$el=r.createElement(I.tag.tag),g(I),_[S]=_[S]||r.createDocumentFragment(),_[S].appendChild(I.$el)}for(const I of c)await e.hooks.callHook("dom:renderTag",I,r,p);_.head&&r.head.appendChild(_.head),_.bodyOpen&&r.body.insertBefore(_.bodyOpen,r.body.firstChild),_.bodyClose&&r.body.appendChild(_.bodyClose);for(const I in u.pendingSideEffects)u.pendingSideEffects[I]();e._dom=u,await e.hooks.callHook("dom:rendered",{renders:c}),a()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Mp(e,t={}){const r=t.delayFn||(i=>setTimeout(i,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(i=>r(()=>Vl(e,t).then(()=>{delete e._domDebouncedUpdatePromise,i()})))}function Up(e){return t=>{var i,a;const r=((a=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:a.innerHTML)||!1;return r&&t.push(JSON.parse(r)),{mode:"client",hooks:{"entries:updated":c=>{Mp(c,e)}}}}}const xp=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Fp={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=Hl(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const r=t||(e.key?`${e.tag}:${e.key}`:!1);r&&(e._d=r)},"tags:resolve":e=>{const t=Object.create(null);for(const i of e.tags){const a=(i.key?`${i.tag}:${i.key}`:i._d)||no(i),c=t[a];if(c){let p=i==null?void 0:i.tagDuplicateStrategy;if(!p&&xp.has(i.tag)&&(p="merge"),p==="merge"){const g=c.props;g.style&&i.props.style&&(g.style[g.style.length-1]!==";"&&(g.style+=";"),i.props.style=`${g.style} ${i.props.style}`),g.class&&i.props.class?i.props.class=`${g.class} ${i.props.class}`:g.class&&(i.props.class=g.class),t[a].props={...g,...i.props};continue}else if(i._e===c._e){c._duped=c._duped||[],i._d=`${c._d}:${c._duped.length+1}`,c._duped.push(i);continue}else if(_i(i)>_i(c))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&ci.has(i.tag)){delete t[a];continue}t[a]=i}const r=[];for(const i in t){const a=t[i],c=a._duped;r.push(a),c&&(delete a._duped,r.push(...c))}e.tags=r,e.tags=e.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},jp=new Set(["script","link","bodyAttrs"]),Hp=e=>({hooks:{"tags:resolve":t=>{for(const r of t.tags){if(!jp.has(r.tag))continue;const i=r.props;for(const a in i){if(a[0]!=="o"||a[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,a))continue;const c=i[a];typeof c=="function"&&(e.ssr&&sc.has(a)?i[a]=`this.dataset.${a}fired = true`:delete i[a],r._eventHandlers=r._eventHandlers||{},r._eventHandlers[a]=c)}e.ssr&&r._eventHandlers&&(r.props.src||r.props.href)&&(r.key=r.key||gi(r.props.src||r.props.href))}},"dom:renderTag":({$el:t,tag:r})=>{var a,c;const i=t==null?void 0:t.dataset;if(i)for(const u in i){if(!u.endsWith("fired"))continue;const p=u.slice(0,-5);sc.has(p)&&((c=(a=r._eventHandlers)==null?void 0:a[p])==null||c.call(t,new Event(p.substring(2))))}}}}),Vp=new Set(["link","style","script","noscript"]),$p={hooks:{"tag:normalise":({tag:e})=>{e.key&&Vp.has(e.tag)&&(e.props["data-hid"]=e._h=gi(e.key))}}},Wp={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let r=!1;for(const i of e.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(t[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,r=!0);r&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Bp={hooks:{"tags:resolve":e=>{var t;for(const r of e.tags)if(typeof r.tagPriority=="string")for(const{prefix:i,offset:a}of Op){if(!r.tagPriority.startsWith(i))continue;const c=r.tagPriority.substring(i.length),u=(t=e.tags.find(p=>p._d===c))==null?void 0:t._p;if(u!==void 0){r._p=u+a;break}}e.tags.sort((r,i)=>{const a=_i(r),c=_i(i);return a<c?-1:a>c?1:r._p-i._p})}}},zp={meta:"content",link:"href",htmlAttrs:"lang"},qp=["innerHTML","textContent"],Gp=e=>({hooks:{"tags:resolve":t=>{var u;const{tags:r}=t;let i;for(let p=0;p<r.length;p+=1)r[p].tag==="templateParams"&&(i=t.tags.splice(p,1)[0].props,p-=1);const a=i||{},c=a.separator||"|";delete a.separator,a.pageTitle=ni(a.pageTitle||((u=r.find(p=>p.tag==="title"))==null?void 0:u.textContent)||"",a,c);for(const p of r){if(p.processTemplateParams===!1)continue;const g=zp[p.tag];if(g&&typeof p.props[g]=="string")p.props[g]=ni(p.props[g],a,c);else if(p.processTemplateParams||p.tag==="titleTemplate"||p.tag==="title")for(const m of qp)typeof p[m]=="string"&&(p[m]=ni(p[m],a,c,p.tag==="script"&&p.props.type.endsWith("json")))}e._templateParams=a,e._separator=c},"tags:afterResolve":({tags:t})=>{let r;for(let i=0;i<t.length;i+=1){const a=t[i];a.tag==="title"&&a.processTemplateParams!==!1&&(r=a)}r!=null&&r.textContent&&(r.textContent=ni(r.textContent,e._templateParams,e._separator))}}}),Kp={hooks:{"tags:resolve":e=>{const{tags:t}=e;let r,i;for(let a=0;a<t.length;a+=1){const c=t[a];c.tag==="title"?r=c:c.tag==="titleTemplate"&&(i=c)}if(i&&r){const a=cc(i.textContent,r.textContent);a!==null?r.textContent=a||r.textContent:e.tags.splice(e.tags.indexOf(r),1)}else if(i){const a=cc(i.textContent);a!==null&&(i.textContent=a,i.tag="title",i=void 0)}i&&e.tags.splice(e.tags.indexOf(i),1)}}},Yp={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let $l;function Xp(e={}){const t=Jp(e);return t.use(Up()),$l=t}function lc(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Jp(e={}){const t=Ll();t.addHooks(e.hooks||{}),e.document=e.document||(Sp?document:void 0);const r=!e.document,i=()=>{p.dirty=!0,t.callHook("entries:updated",p)};let a=0,c=[];const u=[],p={plugins:u,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return c},use(g){const m=typeof g=="function"?g(p):g;(!m.key||!u.some(_=>_.key===m.key))&&(u.push(m),lc(m.mode,r)&&t.addHooks(m.hooks||{}))},push(g,m){m==null||delete m.head;const _={_i:a++,input:g,...m};return lc(_.mode,r)&&(c.push(_),i()),{dispose(){c=c.filter(A=>A._i!==_._i),i()},patch(A){for(const I of c)I._i===_._i&&(I.input=_.input=A);i()}}},async resolveTags(){const g={tags:[],entries:[...c]};await t.callHook("entries:resolve",g);for(const m of g.entries){const _=m.resolvedInput||m.input;if(m.resolvedInput=await(m.transform?m.transform(_):_),m.resolvedInput)for(const A of await Cp(m)){const I={tag:A,entry:m,resolvedOptions:p.resolvedOptions};await t.callHook("tag:normalise",I),g.tags.push(I.tag)}}return await t.callHook("tags:beforeResolve",g),await t.callHook("tags:resolve",g),await t.callHook("tags:afterResolve",g),g.tags},ssr:r};return[Fp,Wp,Hp,$p,Bp,Gp,Kp,Yp,...(e==null?void 0:e.plugins)||[]].forEach(g=>p.use(g)),p.hooks.callHook("init",p),p}function Qp(){return $l}const Zp=Jh[0]==="3";function em(e){return typeof e=="function"?e():Vn(e)}function io(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=em(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(r=>io(r));if(typeof t=="object"){const r={};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){r[i]=Vn(t[i]);continue}r[i]=io(t[i])}return r}return t}const tm={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=io(t.input)}}},Wl="usehead";function nm(e){return{install(r){Zp&&(r.config.globalProperties.$unhead=e,r.config.globalProperties.$head=e,r.provide(Wl,e))}}.install}function rm(e={}){e.domDelayFn=e.domDelayFn||(r=>Wo(()=>setTimeout(()=>r(),0)));const t=Xp(e);return t.use(tm),t.install=nm(t),t}const so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oo="__unhead_injection_handler__";function im(e){so[oo]=e}function fE(){return oo in so?so[oo]():Zt(Wl)||Qp()}const Bl=/#/g,zl=/&/g,ql=/\//g,sm=/=/g,om=/\?/g,Si=/\+/g,am=/%5e/gi,cm=/%60/gi,lm=/%7c/gi,um=/%20/gi,dm=/%252f/gi;function Gl(e){return encodeURI(""+e).replace(lm,"|")}function ao(e){return Gl(typeof e=="string"?e:JSON.stringify(e)).replace(Si,"%2B").replace(um,"+").replace(Bl,"%23").replace(zl,"%26").replace(cm,"`").replace(am,"^").replace(ql,"%2F")}function Ns(e){return ao(e).replace(sm,"%3D")}function fm(e){return Gl(e).replace(Bl,"%23").replace(om,"%3F").replace(dm,"%2F").replace(zl,"%26").replace(Si,"%2B")}function hE(e){return fm(e).replace(ql,"%2F")}function yi(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function hm(e){return yi(e.replace(Si," "))}function pm(e){return yi(e.replace(Si," "))}function mm(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const r of e.split("&")){const i=r.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const a=hm(i[1]);if(a==="__proto__"||a==="constructor")continue;const c=pm(i[2]||"");t[a]===void 0?t[a]=c:Array.isArray(t[a])?t[a].push(c):t[a]=[t[a],c]}return t}function gm(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(r=>`${Ns(e)}=${ao(r)}`).join("&"):`${Ns(e)}=${ao(t)}`:Ns(e)}function _m(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>gm(t,e[t])).filter(Boolean).join("&")}const ym=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,vm=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,bm=/^([/\\]\s*){2,}[^/\\]/,Em=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Im=/\/$|\/\?|\/#/,wm=/^\.?\//;function qn(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?ym.test(e):vm.test(e)||(t.acceptRelative?bm.test(e):!1)}function Tm(e){return!!e&&Em.test(e)}function co(e="",t){return t?Im.test(e):e.endsWith("/")}function zo(e="",t){if(!t)return(co(e)?e.slice(0,-1):e)||"/";if(!co(e,!0))return e||"/";let r=e,i="";const a=e.indexOf("#");a>=0&&(r=e.slice(0,a),i=e.slice(a));const[c,...u]=r.split("?");return((c.endsWith("/")?c.slice(0,-1):c)||"/")+(u.length>0?`?${u.join("?")}`:"")+i}function lo(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(co(e,!0))return e||"/";let r=e,i="";const a=e.indexOf("#");if(a>=0&&(r=e.slice(0,a),i=e.slice(a),!r))return i;const[c,...u]=r.split("?");return c+"/"+(u.length>0?`?${u.join("?")}`:"")+i}function Am(e=""){return e.startsWith("/")}function uc(e=""){return Am(e)?e:"/"+e}function Sm(e,t){if(Yl(t)||qn(e))return e;const r=zo(t);return e.startsWith(r)?e:qo(r,e)}function dc(e,t){if(Yl(t))return e;const r=zo(t);if(!e.startsWith(r))return e;const i=e.slice(r.length);return i[0]==="/"?i:"/"+i}function Kl(e,t){const r=km(e),i={...mm(r.search),...t};return r.search=_m(i),Cm(r)}function Yl(e){return!e||e==="/"}function Rm(e){return e&&e!=="/"}function qo(e,...t){let r=e||"";for(const i of t.filter(a=>Rm(a)))if(r){const a=i.replace(wm,"");r=lo(r)+a}else r=i;return r}function Xl(...e){var u,p,g,m;const t=/\/(?!\/)/,r=e.filter(Boolean),i=[];let a=0;for(const _ of r)if(!(!_||_==="/")){for(const[A,I]of _.split(t).entries())if(!(!I||I===".")){if(I===".."){if(i.length===1&&qn(i[0]))continue;i.pop(),a--;continue}if(A===1&&((u=i[i.length-1])!=null&&u.endsWith(":/"))){i[i.length-1]+="/"+I;continue}i.push(I),a++}}let c=i.join("/");return a>=0?(p=r[0])!=null&&p.startsWith("/")&&!c.startsWith("/")?c="/"+c:(g=r[0])!=null&&g.startsWith("./")&&!c.startsWith("./")&&(c="./"+c):c="../".repeat(-1*a)+c,(m=r[r.length-1])!=null&&m.endsWith("/")&&!c.endsWith("/")&&(c+="/"),c}function Pm(e,t,r={}){return r.trailingSlash||(e=lo(e),t=lo(t)),r.leadingSlash||(e=uc(e),t=uc(t)),r.encoding||(e=yi(e),t=yi(t)),e===t}const Jl=Symbol.for("ufo:protocolRelative");function km(e="",t){const r=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(r){const[,A,I=""]=r;return{protocol:A.toLowerCase(),pathname:I,href:A+I,auth:"",host:"",search:"",hash:""}}if(!qn(e,{acceptRelative:!0}))return fc(e);const[,i="",a,c=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,u="",p=""]=c.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(p=p.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:g,search:m,hash:_}=fc(p);return{protocol:i.toLowerCase(),auth:a?a.slice(0,Math.max(0,a.length-1)):"",host:u,pathname:g,search:m,hash:_,[Jl]:!i}}function fc(e=""){const[t="",r="",i=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:r,hash:i}}function Cm(e){const t=e.pathname||"",r=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",i=e.hash||"",a=e.auth?e.auth+"@":"",c=e.host||"";return(e.protocol||e[Jl]?(e.protocol||"")+"//":"")+a+c+t+r+i}function Om(e,t){return{ctx:{table:e},matchAll:r=>Zl(r,e)}}function Ql(e){const t={};for(const r in e)t[r]=r==="dynamic"?new Map(Object.entries(e[r]).map(([i,a])=>[i,Ql(a)])):new Map(Object.entries(e[r]));return t}function Nm(e){return Om(Ql(e))}function Zl(e,t,r){e.endsWith("/")&&(e=e.slice(0,-1)||"/");const i=[];for(const[c,u]of hc(t.wildcard))(e===c||e.startsWith(c+"/"))&&i.push(u);for(const[c,u]of hc(t.dynamic))if(e.startsWith(c+"/")){const p="/"+e.slice(c.length).split("/").splice(2).join("/");i.push(...Zl(p,u))}const a=t.static.get(e);return a&&i.push(a),i.filter(Boolean)}function hc(e){return[...e.entries()].sort((t,r)=>t[0].length-r[0].length)}const Lm=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Dm=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Mm=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Um(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){xm(e);return}return t}function xm(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function vi(e,t={}){if(typeof e!="string")return e;const r=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return r.slice(1,-1);if(r.length<=9){const i=r.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!Mm.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Lm.test(e)||Dm.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Um)}return JSON.parse(e)}catch(i){if(t.strict)throw i;return e}}function Ls(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function uo(e,t,r=".",i){if(!Ls(t))return uo(e,{},r,i);const a=Object.assign({},t);for(const c in e){if(c==="__proto__"||c==="constructor")continue;const u=e[c];u!=null&&(i&&i(a,c,u,r)||(Array.isArray(u)&&Array.isArray(a[c])?a[c]=[...u,...a[c]]:Ls(u)&&Ls(a[c])?a[c]=uo(u,a[c],(r?`${r}.`:"")+c.toString(),i):a[c]=u))}return a}function eu(e){return(...t)=>t.reduce((r,i)=>uo(r,i,"",e),{})}const Fm=eu(),jm=eu((e,t,r)=>{if(e[t]!==void 0&&typeof r=="function")return e[t]=r(e[t]),!0});function Hm(e,t){try{return t in e}catch{return!1}}class fo extends Error{constructor(r,i={}){super(r,i);bn(this,"statusCode",500);bn(this,"fatal",!1);bn(this,"unhandled",!1);bn(this,"statusMessage");bn(this,"data");bn(this,"cause");i.cause&&!this.cause&&(this.cause=i.cause)}toJSON(){const r={message:this.message,statusCode:po(this.statusCode,500)};return this.statusMessage&&(r.statusMessage=tu(this.statusMessage)),this.data!==void 0&&(r.data=this.data),r}}bn(fo,"__h3_error__",!0);function ho(e){if(typeof e=="string")return new fo(e);if(Vm(e))return e;const t=new fo(e.message??e.statusMessage??"",{cause:e.cause||e});if(Hm(e,"stack"))try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=po(e.statusCode,t.statusCode):e.status&&(t.statusCode=po(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const r=t.statusMessage;tu(t.statusMessage)!==r&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function Vm(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const $m=/[^\u0009\u0020-\u007E]/g;function tu(e=""){return e.replace($m,"")}function po(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const pE=Symbol("layout-meta"),Wm=Symbol("route"),an=()=>{var e;return(e=We())==null?void 0:e.$router},Bm=()=>$o()?Zt(Wm,We()._route):We()._route;const zm=()=>{try{if(We()._processingMiddleware)return!0}catch{return!1}return!1},pc=(e,t)=>{e||(e="/");const r=typeof e=="string"?e:"path"in e?qm(e):an().resolve(e).href;if(t!=null&&t.open){const{target:g="_blank",windowFeatures:m={}}=t.open,_=Object.entries(m).filter(([A,I])=>I!==void 0).map(([A,I])=>`${A.toLowerCase()}=${I}`).join(", ");return open(r,g,_),Promise.resolve()}const i=qn(r,{acceptRelative:!0}),a=(t==null?void 0:t.external)||i;if(a){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:g}=new URL(r,window.location.href);if(g&&Tm(g))throw new Error(`Cannot navigate to a URL with '${g}' protocol.`)}const c=zm();if(!a&&c)return t!=null&&t.replace?typeof e=="string"?{path:e,replace:!0}:{...e,replace:!0}:e;const u=an(),p=We();return a?(p._scope.stop(),t!=null&&t.replace?location.replace(r):location.href=r,c?p.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?u.replace(e):u.push(e)};function qm(e){return Kl(e.path||"",e.query||{})+(e.hash||"")}const Gm="__nuxt_error",Go=()=>Qh(We().payload,"error"),br=e=>{const t=Ko(e);try{const r=We(),i=Go();r.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},Km=async(e={})=>{const t=We(),r=Go();t.callHook("app:error:cleared",e),e.redirect&&await an().replace(e.redirect),r.value=pp},Ko=e=>{const t=ho(e);return Object.defineProperty(t,Gm,{value:!0,configurable:!1,writable:!1}),t},mc=globalThis.requestIdleCallback||(e=>{const t=Date.now(),r={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(r)},1)}),Yo=e=>{const t=We();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{mc(()=>e())}):mc(()=>e())};function gc(e){const t=Xm(e),r=new ArrayBuffer(t.length),i=new DataView(r);for(let a=0;a<r.byteLength;a++)i.setUint8(a,t.charCodeAt(a));return r}const Ym="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Xm(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",r=0,i=0;for(let a=0;a<e.length;a++)r<<=6,r|=Ym.indexOf(e[a]),i+=6,i===24&&(t+=String.fromCharCode((r&16711680)>>16),t+=String.fromCharCode((r&65280)>>8),t+=String.fromCharCode(r&255),r=i=0);return i===12?(r>>=4,t+=String.fromCharCode(r)):i===18&&(r>>=2,t+=String.fromCharCode((r&65280)>>8),t+=String.fromCharCode(r&255)),t}const Jm=-1,Qm=-2,Zm=-3,eg=-4,tg=-5,ng=-6;function rg(e,t){return ig(JSON.parse(e),t)}function ig(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const r=e,i=Array(r.length);function a(c,u=!1){if(c===Jm)return;if(c===Zm)return NaN;if(c===eg)return 1/0;if(c===tg)return-1/0;if(c===ng)return-0;if(u)throw new Error("Invalid input");if(c in i)return i[c];const p=r[c];if(!p||typeof p!="object")i[c]=p;else if(Array.isArray(p))if(typeof p[0]=="string"){const g=p[0],m=t==null?void 0:t[g];if(m)return i[c]=m(a(p[1]));switch(g){case"Date":i[c]=new Date(p[1]);break;case"Set":const _=new Set;i[c]=_;for(let S=1;S<p.length;S+=1)_.add(a(p[S]));break;case"Map":const A=new Map;i[c]=A;for(let S=1;S<p.length;S+=2)A.set(a(p[S]),a(p[S+1]));break;case"RegExp":i[c]=new RegExp(p[1],p[2]);break;case"Object":i[c]=Object(p[1]);break;case"BigInt":i[c]=BigInt(p[1]);break;case"null":const I=Object.create(null);i[c]=I;for(let S=1;S<p.length;S+=2)I[p[S]]=a(p[S+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const S=globalThis[g],U=p[1],G=gc(U),W=new S(G);i[c]=W;break}case"ArrayBuffer":{const S=p[1],U=gc(S);i[c]=U;break}default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(p.length);i[c]=g;for(let m=0;m<p.length;m+=1){const _=p[m];_!==Qm&&(g[m]=a(_))}}else{const g={};i[c]=g;for(const m in p){const _=p[m];g[m]=a(_)}}return i[c]}return a(0)}const sg=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},mo=sg().app,og=()=>mo.buildAssetsDir,Xo=(...e)=>Xl(nu(),og(),...e),nu=(...e)=>{const t=mo.cdnURL||mo.baseURL;return e.length?Xl(t,...e):t};globalThis.__buildAssetsURL=Xo,globalThis.__publicAssetsURL=nu;let li,ui;function ag(){return li=$fetch(Xo(`builds/meta/${Ai().app.buildId}.json`),{responseType:"json"}),li.then(e=>{ui=Nm(e.matcher)}).catch(e=>{console.error("[nuxt] Error fetching app manifest.",e)}),li}function Ri(){return li||ag()}async function Jo(e){const t=typeof e=="string"?e:e.path;if(await Ri(),!ui)return console.error("[nuxt] Error creating app manifest matcher.",ui),{};try{return Fm({},...ui.matchAll(t).reverse())}catch(r){return console.error("[nuxt] Error matching route rules.",r),{}}}async function _c(e,t={}){const r=await lg(e,t),i=We(),a=i._payloadCache=i._payloadCache||{};return r in a?a[r]||null:(a[r]=iu(e).then(c=>c?ru(r).then(u=>u||(delete a[r],null)):(a[r]=null,null)),a[r])}const cg="_payload.json";async function lg(e,t={}){const r=new URL(e,"http://localhost");if(r.host!=="localhost"||qn(r.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const i=Ai(),a=t.hash||(t.fresh?Date.now():i.app.buildId),c=i.app.cdnURL,u=c&&await iu(e)?c:i.app.baseURL;return qo(u,r.pathname,cg+(a?`?${a}`:""))}async function ru(e){const t=fetch(e).then(r=>r.text().then(su));try{return await t}catch(r){console.warn("[nuxt] Cannot load payload ",e,r)}return null}async function iu(e=Bm().path){const t=We();return e=zo(e),(await Ri()).prerendered.includes(e)?!0:t.runWithContext(async()=>{const i=await Jo({path:e});return!!i.prerender&&!i.redirect})}let Fn=null;async function ug(){var i;if(Fn)return Fn;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=await su(e.textContent||""),r=e.dataset.src?await ru(e.dataset.src):void 0;return Fn={...t,...r,...window.__NUXT__},(i=Fn.config)!=null&&i.public&&(Fn.config.public=zn(Fn.config.public)),Fn}async function su(e){return await rg(e,We()._payloadRevivers)}function ou(e,t){We()._payloadRevivers[e]=t}function dg(e={}){const t=e.path||window.location.pathname;let r={};try{r=vi(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(r==null?void 0:r.path)!==t||(r==null?void 0:r.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:We().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jn=typeof document<"u";function au(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&au(e.default)}const Te=Object.assign;function Ds(e,t){const r={};for(const i in t){const a=t[i];r[i]=jt(a)?a.map(e):e(a)}return r}const Ir=()=>{},jt=Array.isArray,cu=/#/g,hg=/&/g,pg=/\//g,mg=/=/g,gg=/\?/g,lu=/\+/g,_g=/%5B/g,yg=/%5D/g,uu=/%5E/g,vg=/%60/g,du=/%7B/g,bg=/%7C/g,fu=/%7D/g,Eg=/%20/g;function Qo(e){return encodeURI(""+e).replace(bg,"|").replace(_g,"[").replace(yg,"]")}function Ig(e){return Qo(e).replace(du,"{").replace(fu,"}").replace(uu,"^")}function go(e){return Qo(e).replace(lu,"%2B").replace(Eg,"+").replace(cu,"%23").replace(hg,"%26").replace(vg,"`").replace(du,"{").replace(fu,"}").replace(uu,"^")}function wg(e){return go(e).replace(mg,"%3D")}function Tg(e){return Qo(e).replace(cu,"%23").replace(gg,"%3F")}function Ag(e){return e==null?"":Tg(e).replace(pg,"%2F")}function kr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Sg=/\/$/,Rg=e=>e.replace(Sg,"");function Ms(e,t,r="/"){let i,a={},c="",u="";const p=t.indexOf("#");let g=t.indexOf("?");return p<g&&p>=0&&(g=-1),g>-1&&(i=t.slice(0,g),c=t.slice(g+1,p>-1?p:t.length),a=e(c)),p>-1&&(i=i||t.slice(0,p),u=t.slice(p,t.length)),i=Og(i??t,r),{fullPath:i+(c&&"?")+c+u,path:i,query:a,hash:kr(u)}}function Pg(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function yc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kg(e,t,r){const i=t.matched.length-1,a=r.matched.length-1;return i>-1&&i===a&&nr(t.matched[i],r.matched[a])&&hu(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function hu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!Cg(e[r],t[r]))return!1;return!0}function Cg(e,t){return jt(e)?vc(e,t):jt(t)?vc(t,e):e===t}function vc(e,t){return jt(t)?e.length===t.length&&e.every((r,i)=>r===t[i]):e.length===1&&e[0]===t}function Og(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),i=e.split("/"),a=i[i.length-1];(a===".."||a===".")&&i.push("");let c=r.length-1,u,p;for(u=0;u<i.length;u++)if(p=i[u],p!==".")if(p==="..")c>1&&c--;else break;return r.slice(0,c).join("/")+"/"+i.slice(u).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Cr;(function(e){e.pop="pop",e.push="push"})(Cr||(Cr={}));var wr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wr||(wr={}));function Ng(e){if(!e)if(Jn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Rg(e)}const Lg=/^[^#]+#/;function Dg(e,t){return e.replace(Lg,"#")+t}function Mg(e,t){const r=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-r.left-(t.left||0),top:i.top-r.top-(t.top||0)}}const Pi=()=>({left:window.scrollX,top:window.scrollY});function Ug(e){let t;if("el"in e){const r=e.el,i=typeof r=="string"&&r.startsWith("#"),a=typeof r=="string"?i?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!a)return;t=Mg(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function bc(e,t){return(history.state?history.state.position-t:-1)+e}const _o=new Map;function xg(e,t){_o.set(e,t)}function Fg(e){const t=_o.get(e);return _o.delete(e),t}let jg=()=>location.protocol+"//"+location.host;function pu(e,t){const{pathname:r,search:i,hash:a}=t,c=e.indexOf("#");if(c>-1){let p=a.includes(e.slice(c))?e.slice(c).length:1,g=a.slice(p);return g[0]!=="/"&&(g="/"+g),yc(g,"")}return yc(r,e)+i+a}function Hg(e,t,r,i){let a=[],c=[],u=null;const p=({state:I})=>{const S=pu(e,location),U=r.value,G=t.value;let W=0;if(I){if(r.value=S,t.value=I,u&&u===U){u=null;return}W=G?I.position-G.position:0}else i(S);a.forEach(j=>{j(r.value,U,{delta:W,type:Cr.pop,direction:W?W>0?wr.forward:wr.back:wr.unknown})})};function g(){u=r.value}function m(I){a.push(I);const S=()=>{const U=a.indexOf(I);U>-1&&a.splice(U,1)};return c.push(S),S}function _(){const{history:I}=window;I.state&&I.replaceState(Te({},I.state,{scroll:Pi()}),"")}function A(){for(const I of c)I();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",_)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",_,{passive:!0}),{pauseListeners:g,listen:m,destroy:A}}function Ec(e,t,r,i=!1,a=!1){return{back:e,current:t,forward:r,replaced:i,position:window.history.length,scroll:a?Pi():null}}function Vg(e){const{history:t,location:r}=window,i={value:pu(e,r)},a={value:t.state};a.value||c(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(g,m,_){const A=e.indexOf("#"),I=A>-1?(r.host&&document.querySelector("base")?e:e.slice(A))+g:jg()+e+g;try{t[_?"replaceState":"pushState"](m,"",I),a.value=m}catch(S){console.error(S),r[_?"replace":"assign"](I)}}function u(g,m){const _=Te({},t.state,Ec(a.value.back,g,a.value.forward,!0),m,{position:a.value.position});c(g,_,!0),i.value=g}function p(g,m){const _=Te({},a.value,t.state,{forward:g,scroll:Pi()});c(_.current,_,!0);const A=Te({},Ec(i.value,g,null),{position:_.position+1},m);c(g,A,!1),i.value=g}return{location:i,state:a,push:p,replace:u}}function $g(e){e=Ng(e);const t=Vg(e),r=Hg(e,t.state,t.location,t.replace);function i(c,u=!0){u||r.pauseListeners(),history.go(c)}const a=Te({location:"",base:e,go:i,createHref:Dg.bind(null,e)},t,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Wg(e){return typeof e=="string"||e&&typeof e=="object"}function mu(e){return typeof e=="string"||typeof e=="symbol"}const gu=Symbol("");var Ic;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ic||(Ic={}));function rr(e,t){return Te(new Error,{type:e,[gu]:!0},t)}function on(e,t){return e instanceof Error&&gu in e&&(t==null||!!(e.type&t))}const wc="[^/]+?",Bg={sensitive:!1,strict:!1,start:!0,end:!0},zg=/[.+*?^${}()[\]/\\]/g;function qg(e,t){const r=Te({},Bg,t),i=[];let a=r.start?"^":"";const c=[];for(const m of e){const _=m.length?[]:[90];r.strict&&!m.length&&(a+="/");for(let A=0;A<m.length;A++){const I=m[A];let S=40+(r.sensitive?.25:0);if(I.type===0)A||(a+="/"),a+=I.value.replace(zg,"\\$&"),S+=40;else if(I.type===1){const{value:U,repeatable:G,optional:W,regexp:j}=I;c.push({name:U,repeatable:G,optional:W});const Y=j||wc;if(Y!==wc){S+=10;try{new RegExp(`(${Y})`)}catch(re){throw new Error(`Invalid custom RegExp for param "${U}" (${Y}): `+re.message)}}let $=G?`((?:${Y})(?:/(?:${Y}))*)`:`(${Y})`;A||($=W&&m.length<2?`(?:/${$})`:"/"+$),W&&($+="?"),a+=$,S+=20,W&&(S+=-8),G&&(S+=-20),Y===".*"&&(S+=-50)}_.push(S)}i.push(_)}if(r.strict&&r.end){const m=i.length-1;i[m][i[m].length-1]+=.7000000000000001}r.strict||(a+="/?"),r.end?a+="$":r.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const u=new RegExp(a,r.sensitive?"":"i");function p(m){const _=m.match(u),A={};if(!_)return null;for(let I=1;I<_.length;I++){const S=_[I]||"",U=c[I-1];A[U.name]=S&&U.repeatable?S.split("/"):S}return A}function g(m){let _="",A=!1;for(const I of e){(!A||!_.endsWith("/"))&&(_+="/"),A=!1;for(const S of I)if(S.type===0)_+=S.value;else if(S.type===1){const{value:U,repeatable:G,optional:W}=S,j=U in m?m[U]:"";if(jt(j)&&!G)throw new Error(`Provided param "${U}" is an array but it is not repeatable (* or + modifiers)`);const Y=jt(j)?j.join("/"):j;if(!Y)if(W)I.length<2&&(_.endsWith("/")?_=_.slice(0,-1):A=!0);else throw new Error(`Missing required param "${U}"`);_+=Y}}return _||"/"}return{re:u,score:i,keys:c,parse:p,stringify:g}}function Gg(e,t){let r=0;for(;r<e.length&&r<t.length;){const i=t[r]-e[r];if(i)return i;r++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function _u(e,t){let r=0;const i=e.score,a=t.score;for(;r<i.length&&r<a.length;){const c=Gg(i[r],a[r]);if(c)return c;r++}if(Math.abs(a.length-i.length)===1){if(Tc(i))return 1;if(Tc(a))return-1}return a.length-i.length}function Tc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kg={type:0,value:""},Yg=/[a-zA-Z0-9_]/;function Xg(e){if(!e)return[[]];if(e==="/")return[[Kg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(S){throw new Error(`ERR (${r})/"${m}": ${S}`)}let r=0,i=r;const a=[];let c;function u(){c&&a.push(c),c=[]}let p=0,g,m="",_="";function A(){m&&(r===0?c.push({type:0,value:m}):r===1||r===2||r===3?(c.length>1&&(g==="*"||g==="+")&&t(`A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:m,regexp:_,repeatable:g==="*"||g==="+",optional:g==="*"||g==="?"})):t("Invalid state to consume buffer"),m="")}function I(){m+=g}for(;p<e.length;){if(g=e[p++],g==="\\"&&r!==2){i=r,r=4;continue}switch(r){case 0:g==="/"?(m&&A(),u()):g===":"?(A(),r=1):I();break;case 4:I(),r=i;break;case 1:g==="("?r=2:Yg.test(g)?I():(A(),r=0,g!=="*"&&g!=="?"&&g!=="+"&&p--);break;case 2:g===")"?_[_.length-1]=="\\"?_=_.slice(0,-1)+g:r=3:_+=g;break;case 3:A(),r=0,g!=="*"&&g!=="?"&&g!=="+"&&p--,_="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${m}"`),A(),u(),a}function Jg(e,t,r){const i=qg(Xg(e.path),r),a=Te(i,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Qg(e,t){const r=[],i=new Map;t=Pc({strict:!1,end:!0,sensitive:!1},t);function a(A){return i.get(A)}function c(A,I,S){const U=!S,G=Sc(A);G.aliasOf=S&&S.record;const W=Pc(t,A),j=[G];if("alias"in A){const re=typeof A.alias=="string"?[A.alias]:A.alias;for(const se of re)j.push(Sc(Te({},G,{components:S?S.record.components:G.components,path:se,aliasOf:S?S.record:G})))}let Y,$;for(const re of j){const{path:se}=re;if(I&&se[0]!=="/"){const oe=I.record.path,le=oe[oe.length-1]==="/"?"":"/";re.path=I.record.path+(se&&le+se)}if(Y=Jg(re,I,W),S?S.alias.push(Y):($=$||Y,$!==Y&&$.alias.push(Y),U&&A.name&&!Rc(Y)&&u(A.name)),yu(Y)&&g(Y),G.children){const oe=G.children;for(let le=0;le<oe.length;le++)c(oe[le],Y,S&&S.children[le])}S=S||Y}return $?()=>{u($)}:Ir}function u(A){if(mu(A)){const I=i.get(A);I&&(i.delete(A),r.splice(r.indexOf(I),1),I.children.forEach(u),I.alias.forEach(u))}else{const I=r.indexOf(A);I>-1&&(r.splice(I,1),A.record.name&&i.delete(A.record.name),A.children.forEach(u),A.alias.forEach(u))}}function p(){return r}function g(A){const I=t_(A,r);r.splice(I,0,A),A.record.name&&!Rc(A)&&i.set(A.record.name,A)}function m(A,I){let S,U={},G,W;if("name"in A&&A.name){if(S=i.get(A.name),!S)throw rr(1,{location:A});W=S.record.name,U=Te(Ac(I.params,S.keys.filter($=>!$.optional).concat(S.parent?S.parent.keys.filter($=>$.optional):[]).map($=>$.name)),A.params&&Ac(A.params,S.keys.map($=>$.name))),G=S.stringify(U)}else if(A.path!=null)G=A.path,S=r.find($=>$.re.test(G)),S&&(U=S.parse(G),W=S.record.name);else{if(S=I.name?i.get(I.name):r.find($=>$.re.test(I.path)),!S)throw rr(1,{location:A,currentLocation:I});W=S.record.name,U=Te({},I.params,A.params),G=S.stringify(U)}const j=[];let Y=S;for(;Y;)j.unshift(Y.record),Y=Y.parent;return{name:W,path:G,params:U,matched:j,meta:e_(j)}}e.forEach(A=>c(A));function _(){r.length=0,i.clear()}return{addRoute:c,resolve:m,removeRoute:u,clearRoutes:_,getRoutes:p,getRecordMatcher:a}}function Ac(e,t){const r={};for(const i of t)i in e&&(r[i]=e[i]);return r}function Sc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Zg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Zg(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const i in e.components)t[i]=typeof r=="object"?r[i]:r;return t}function Rc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function e_(e){return e.reduce((t,r)=>Te(t,r.meta),{})}function Pc(e,t){const r={};for(const i in e)r[i]=i in t?t[i]:e[i];return r}function t_(e,t){let r=0,i=t.length;for(;r!==i;){const c=r+i>>1;_u(e,t[c])<0?i=c:r=c+1}const a=n_(e);return a&&(i=t.lastIndexOf(a,i-1)),i}function n_(e){let t=e;for(;t=t.parent;)if(yu(t)&&_u(e,t)===0)return t}function yu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function r_(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<i.length;++a){const c=i[a].replace(lu," "),u=c.indexOf("="),p=kr(u<0?c:c.slice(0,u)),g=u<0?null:kr(c.slice(u+1));if(p in t){let m=t[p];jt(m)||(m=t[p]=[m]),m.push(g)}else t[p]=g}return t}function kc(e){let t="";for(let r in e){const i=e[r];if(r=wg(r),i==null){i!==void 0&&(t+=(t.length?"&":"")+r);continue}(jt(i)?i.map(c=>c&&go(c)):[i&&go(i)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+r,c!=null&&(t+="="+c))})}return t}function i_(e){const t={};for(const r in e){const i=e[r];i!==void 0&&(t[r]=jt(i)?i.map(a=>a==null?null:""+a):i==null?i:""+i)}return t}const s_=Symbol(""),Cc=Symbol(""),ki=Symbol(""),Zo=Symbol(""),yo=Symbol("");function vr(){let e=[];function t(i){return e.push(i),()=>{const a=e.indexOf(i);a>-1&&e.splice(a,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function Tn(e,t,r,i,a,c=u=>u()){const u=i&&(i.enterCallbacks[a]=i.enterCallbacks[a]||[]);return()=>new Promise((p,g)=>{const m=I=>{I===!1?g(rr(4,{from:r,to:t})):I instanceof Error?g(I):Wg(I)?g(rr(2,{from:t,to:I})):(u&&i.enterCallbacks[a]===u&&typeof I=="function"&&u.push(I),p())},_=c(()=>e.call(i&&i.instances[a],t,r,m));let A=Promise.resolve(_);e.length<3&&(A=A.then(m)),A.catch(I=>g(I))})}function Us(e,t,r,i,a=c=>c()){const c=[];for(const u of e)for(const p in u.components){let g=u.components[p];if(!(t!=="beforeRouteEnter"&&!u.instances[p]))if(au(g)){const _=(g.__vccOpts||g)[t];_&&c.push(Tn(_,r,i,u,p,a))}else{let m=g();c.push(()=>m.then(_=>{if(!_)throw new Error(`Couldn't resolve component "${p}" at "${u.path}"`);const A=fg(_)?_.default:_;u.mods[p]=_,u.components[p]=A;const S=(A.__vccOpts||A)[t];return S&&Tn(S,r,i,u,p,a)()}))}}return c}function Oc(e){const t=Zt(ki),r=Zt(Zo),i=Ft(()=>{const g=Vn(e.to);return t.resolve(g)}),a=Ft(()=>{const{matched:g}=i.value,{length:m}=g,_=g[m-1],A=r.matched;if(!_||!A.length)return-1;const I=A.findIndex(nr.bind(null,_));if(I>-1)return I;const S=Nc(g[m-2]);return m>1&&Nc(_)===S&&A[A.length-1].path!==S?A.findIndex(nr.bind(null,g[m-2])):I}),c=Ft(()=>a.value>-1&&u_(r.params,i.value.params)),u=Ft(()=>a.value>-1&&a.value===r.matched.length-1&&hu(r.params,i.value.params));function p(g={}){if(l_(g)){const m=t[Vn(e.replace)?"replace":"push"](Vn(e.to)).catch(Ir);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>m),m}return Promise.resolve()}return{route:i,href:Ft(()=>i.value.href),isActive:c,isExactActive:u,navigate:p}}function o_(e){return e.length===1?e[0]:e}const a_=Rl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oc,setup(e,{slots:t}){const r=zn(Oc(e)),{options:i}=Zt(ki),a=Ft(()=>({[Lc(e.activeClass,i.linkActiveClass,"router-link-active")]:r.isActive,[Lc(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const c=t.default&&o_(t.default(r));return e.custom?c:Bo("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},c)}}}),c_=a_;function l_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function u_(e,t){for(const r in t){const i=t[r],a=e[r];if(typeof i=="string"){if(i!==a)return!1}else if(!jt(a)||a.length!==i.length||i.some((c,u)=>c!==a[u]))return!1}return!0}function Nc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lc=(e,t,r)=>e??t??r,d_=Rl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const i=Zt(yo),a=Ft(()=>e.route||i.value),c=Zt(Cc,0),u=Ft(()=>{let m=Vn(c);const{matched:_}=a.value;let A;for(;(A=_[m])&&!A.components;)m++;return m}),p=Ft(()=>a.value.matched[u.value]);ks(Cc,Ft(()=>u.value+1)),ks(s_,p),ks(yo,a);const g=tr();return Pl(()=>[g.value,p.value,e.name],([m,_,A],[I,S,U])=>{_&&(_.instances[A]=m,S&&S!==_&&m&&m===I&&(_.leaveGuards.size||(_.leaveGuards=S.leaveGuards),_.updateGuards.size||(_.updateGuards=S.updateGuards))),m&&_&&(!S||!nr(_,S)||!I)&&(_.enterCallbacks[A]||[]).forEach(G=>G(m))},{flush:"post"}),()=>{const m=a.value,_=e.name,A=p.value,I=A&&A.components[_];if(!I)return Dc(r.default,{Component:I,route:m});const S=A.props[_],U=S?S===!0?m.params:typeof S=="function"?S(m):S:null,W=Bo(I,Te({},U,t,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(A.instances[_]=null)},ref:g}));return Dc(r.default,{Component:W,route:m})||W}}});function Dc(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const f_=d_;function h_(e){const t=Qg(e.routes,e),r=e.parseQuery||r_,i=e.stringifyQuery||kc,a=e.history,c=vr(),u=vr(),p=vr(),g=Pr(xt);let m=xt;Jn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=Ds.bind(null,M=>""+M),A=Ds.bind(null,Ag),I=Ds.bind(null,kr);function S(M,X){let K,te;return mu(M)?(K=t.getRecordMatcher(M),te=X):te=M,t.addRoute(te,K)}function U(M){const X=t.getRecordMatcher(M);X&&t.removeRoute(X)}function G(){return t.getRoutes().map(M=>M.record)}function W(M){return!!t.getRecordMatcher(M)}function j(M,X){if(X=Te({},X||g.value),typeof M=="string"){const ce=Ms(r,M,X.path),_e=t.resolve({path:ce.path},X),ct=a.createHref(ce.fullPath);return Te(ce,_e,{params:I(_e.params),hash:kr(ce.hash),redirectedFrom:void 0,href:ct})}let K;if(M.path!=null)K=Te({},M,{path:Ms(r,M.path,X.path).path});else{const ce=Te({},M.params);for(const _e in ce)ce[_e]==null&&delete ce[_e];K=Te({},M,{params:A(ce)}),X.params=A(X.params)}const te=t.resolve(K,X),me=M.hash||"";te.params=_(I(te.params));const Ee=Pg(i,Te({},M,{hash:Ig(me),path:te.path})),pe=a.createHref(Ee);return Te({fullPath:Ee,hash:me,query:i===kc?i_(M.query):M.query||{}},te,{redirectedFrom:void 0,href:pe})}function Y(M){return typeof M=="string"?Ms(r,M,g.value.path):Te({},M)}function $(M,X){if(m!==M)return rr(8,{from:X,to:M})}function re(M){return le(M)}function se(M){return re(Te(Y(M),{replace:!0}))}function oe(M){const X=M.matched[M.matched.length-1];if(X&&X.redirect){const{redirect:K}=X;let te=typeof K=="function"?K(M):K;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=Y(te):{path:te},te.params={}),Te({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function le(M,X){const K=m=j(M),te=g.value,me=M.state,Ee=M.force,pe=M.replace===!0,ce=oe(K);if(ce)return le(Te(Y(ce),{state:typeof ce=="object"?Te({},me,ce.state):me,force:Ee,replace:pe}),X||K);const _e=K;_e.redirectedFrom=X;let ct;return!Ee&&kg(i,te,K)&&(ct=rr(16,{to:_e,from:te}),at(te,te,!0,!1)),(ct?Promise.resolve(ct):ye(_e,te)).catch(De=>on(De)?on(De,2)?De:St(De):dt(De,_e,te)).then(De=>{if(De){if(on(De,2))return le(Te({replace:pe},Y(De.to),{state:typeof De.to=="object"?Te({},me,De.to.state):me,force:Ee}),X||_e)}else De=He(_e,te,!0,pe,me);return Se(_e,te,De),De})}function de(M,X){const K=$(M,X);return K?Promise.reject(K):Promise.resolve()}function L(M){const X=Be.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function ye(M,X){let K;const[te,me,Ee]=p_(M,X);K=Us(te.reverse(),"beforeRouteLeave",M,X);for(const ce of te)ce.leaveGuards.forEach(_e=>{K.push(Tn(_e,M,X))});const pe=de.bind(null,M,X);return K.push(pe),Pe(K).then(()=>{K=[];for(const ce of c.list())K.push(Tn(ce,M,X));return K.push(pe),Pe(K)}).then(()=>{K=Us(me,"beforeRouteUpdate",M,X);for(const ce of me)ce.updateGuards.forEach(_e=>{K.push(Tn(_e,M,X))});return K.push(pe),Pe(K)}).then(()=>{K=[];for(const ce of Ee)if(ce.beforeEnter)if(jt(ce.beforeEnter))for(const _e of ce.beforeEnter)K.push(Tn(_e,M,X));else K.push(Tn(ce.beforeEnter,M,X));return K.push(pe),Pe(K)}).then(()=>(M.matched.forEach(ce=>ce.enterCallbacks={}),K=Us(Ee,"beforeRouteEnter",M,X,L),K.push(pe),Pe(K))).then(()=>{K=[];for(const ce of u.list())K.push(Tn(ce,M,X));return K.push(pe),Pe(K)}).catch(ce=>on(ce,8)?ce:Promise.reject(ce))}function Se(M,X,K){p.list().forEach(te=>L(()=>te(M,X,K)))}function He(M,X,K,te,me){const Ee=$(M,X);if(Ee)return Ee;const pe=X===xt,ce=Jn?history.state:{};K&&(te||pe?a.replace(M.fullPath,Te({scroll:pe&&ce&&ce.scroll},me)):a.push(M.fullPath,me)),g.value=M,at(M,X,K,pe),St()}let Le;function Ze(){Le||(Le=a.listen((M,X,K)=>{if(!Ce.listening)return;const te=j(M),me=oe(te);if(me){le(Te(me,{replace:!0,force:!0}),te).catch(Ir);return}m=te;const Ee=g.value;Jn&&xg(bc(Ee.fullPath,K.delta),Pi()),ye(te,Ee).catch(pe=>on(pe,12)?pe:on(pe,2)?(le(Te(Y(pe.to),{force:!0}),te).then(ce=>{on(ce,20)&&!K.delta&&K.type===Cr.pop&&a.go(-1,!1)}).catch(Ir),Promise.reject()):(K.delta&&a.go(-K.delta,!1),dt(pe,te,Ee))).then(pe=>{pe=pe||He(te,Ee,!1),pe&&(K.delta&&!on(pe,8)?a.go(-K.delta,!1):K.type===Cr.pop&&on(pe,20)&&a.go(-1,!1)),Se(te,Ee,pe)}).catch(Ir)}))}let Re=vr(),et=vr(),Ae;function dt(M,X,K){St(M);const te=et.list();return te.length?te.forEach(me=>me(M,X,K)):console.error(M),Promise.reject(M)}function At(){return Ae&&g.value!==xt?Promise.resolve():new Promise((M,X)=>{Re.add([M,X])})}function St(M){return Ae||(Ae=!M,Ze(),Re.list().forEach(([X,K])=>M?K(M):X()),Re.reset()),M}function at(M,X,K,te){const{scrollBehavior:me}=e;if(!Jn||!me)return Promise.resolve();const Ee=!K&&Fg(bc(M.fullPath,0))||(te||!K)&&history.state&&history.state.scroll||null;return Wo().then(()=>me(M,X,Ee)).then(pe=>pe&&Ug(pe)).catch(pe=>dt(pe,M,X))}const ge=M=>a.go(M);let fe;const Be=new Set,Ce={currentRoute:g,listening:!0,addRoute:S,removeRoute:U,clearRoutes:t.clearRoutes,hasRoute:W,getRoutes:G,resolve:j,options:e,push:re,replace:se,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:c.add,beforeResolve:u.add,afterEach:p.add,onError:et.add,isReady:At,install(M){const X=this;M.component("RouterLink",c_),M.component("RouterView",f_),M.config.globalProperties.$router=X,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Vn(g)}),Jn&&!fe&&g.value===xt&&(fe=!0,re(a.location).catch(me=>{}));const K={};for(const me in xt)Object.defineProperty(K,me,{get:()=>g.value[me],enumerable:!0});M.provide(ki,X),M.provide(Zo,jn(K)),M.provide(yo,g);const te=M.unmount;Be.add(M),M.unmount=function(){Be.delete(M),Be.size<1&&(m=xt,Le&&Le(),Le=null,g.value=xt,fe=!1,Ae=!1),te()}}};function Pe(M){return M.reduce((X,K)=>X.then(()=>L(K)),Promise.resolve())}return Ce}function p_(e,t){const r=[],i=[],a=[],c=Math.max(t.matched.length,e.matched.length);for(let u=0;u<c;u++){const p=t.matched[u];p&&(e.matched.find(m=>nr(m,p))?i.push(p):r.push(p));const g=e.matched[u];g&&(t.matched.find(m=>nr(m,g))||a.push(g))}return[r,i,a]}function mE(){return Zt(ki)}function gE(e){return Zt(Zo)}const _E=(e,t)=>({default:()=>{var r;return e?Bo(Zh,e===!0?{}:e,t):(r=t.default)==null?void 0:r.call(t)}}),m_=/(:\w+)\([^)]+\)/g,g_=/(:\w+)[?+*]/g,__=/:\w+/g;function Mc(e){const t=(e==null?void 0:e.meta.key)??e.path.replace(m_,"$1").replace(g_,"$1").replace(__,r=>{var i;return((i=e.params[r.slice(1)])==null?void 0:i.toString())||""});return typeof t=="function"?t(e):t}function y_(e,t){return e===t||t===xt?!1:Mc(e)!==Mc(t)?!0:!e.matched.every((i,a)=>{var c,u;return i.components&&i.components.default===((u=(c=t.matched[a])==null?void 0:c.components)==null?void 0:u.default)})}const v_={scrollBehavior(e,t,r){var m;const i=We(),a=((m=an().options)==null?void 0:m.scrollBehaviorType)??"auto";let c=r||void 0;const u=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,t):e.meta.scrollToTop;if(!c&&t&&e&&u!==!1&&y_(e,t)&&(c={left:0,top:0}),e.path===t.path)return t.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:Uc(e.hash),behavior:a}:!1;const p=_=>!!(_.meta.pageTransition??hp),g=p(t)&&p(e)?"page:transition:finish":"page:finish";return new Promise(_=>{i.hooks.hookOnce(g,async()=>{await new Promise(A=>setTimeout(A,0)),e.hash&&(c={el:e.hash,top:Uc(e.hash),behavior:a}),_(c)})})}};function Uc(e){try{const t=document.querySelector(e);if(t)return(Number.parseFloat(getComputedStyle(t).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const b_={hashMode:!1,scrollBehaviorType:"auto"},Tt={...b_,...v_},E_={nuxt:{}},I_=jm(E_);function w_(){const e=We();return e._appConfig||(e._appConfig=zn(I_)),e._appConfig}class T_ extends Error{constructor(t,r){super(t,r),this.name="FetchError",r!=null&&r.cause&&!this.cause&&(this.cause=r.cause)}}function A_(e){var g,m,_,A,I;const t=((g=e.error)==null?void 0:g.message)||((m=e.error)==null?void 0:m.toString())||"",r=((_=e.request)==null?void 0:_.method)||((A=e.options)==null?void 0:A.method)||"GET",i=((I=e.request)==null?void 0:I.url)||String(e.request)||"/",a=`[${r}] ${JSON.stringify(i)}`,c=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",u=`${a}: ${c}${t?` ${t}`:""}`,p=new T_(u,e.error?{cause:e.error}:void 0);for(const S of["request","options","response"])Object.defineProperty(p,S,{get(){return e[S]}});for(const[S,U]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(p,S,{get(){return e.response&&e.response[U]}});return p}const S_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function xc(e="GET"){return S_.has(e.toUpperCase())}function R_(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const P_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),k_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function C_(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return k_.test(t)?"json":P_.has(t)||t.startsWith("text/")?"text":"blob"}function O_(e,t,r,i){const a=N_((t==null?void 0:t.headers)??(e==null?void 0:e.headers),r==null?void 0:r.headers,i);let c;return(r!=null&&r.query||r!=null&&r.params||t!=null&&t.params||t!=null&&t.query)&&(c={...r==null?void 0:r.params,...r==null?void 0:r.query,...t==null?void 0:t.params,...t==null?void 0:t.query}),{...r,...t,query:c,params:c,headers:a}}function N_(e,t,r){if(!t)return new r(e);const i=new r(t);if(e)for(const[a,c]of Symbol.iterator in e||Array.isArray(e)?e:new r(e))i.set(a,c);return i}async function ri(e,t){if(t)if(Array.isArray(t))for(const r of t)await r(e);else await t(e)}const L_=new Set([408,409,425,429,500,502,503,504]),D_=new Set([101,204,205,304]);function vu(e={}){const{fetch:t=globalThis.fetch,Headers:r=globalThis.Headers,AbortController:i=globalThis.AbortController}=e;async function a(p){const g=p.error&&p.error.name==="AbortError"&&!p.options.timeout||!1;if(p.options.retry!==!1&&!g){let _;typeof p.options.retry=="number"?_=p.options.retry:_=xc(p.options.method)?0:1;const A=p.response&&p.response.status||500;if(_>0&&(Array.isArray(p.options.retryStatusCodes)?p.options.retryStatusCodes.includes(A):L_.has(A))){const I=typeof p.options.retryDelay=="function"?p.options.retryDelay(p):p.options.retryDelay||0;return I>0&&await new Promise(S=>setTimeout(S,I)),c(p.request,{...p.options,retry:_-1})}}const m=A_(p);throw Error.captureStackTrace&&Error.captureStackTrace(m,c),m}const c=async function(g,m={}){const _={request:g,options:O_(g,m,e.defaults,r),response:void 0,error:void 0};_.options.method&&(_.options.method=_.options.method.toUpperCase()),_.options.onRequest&&await ri(_,_.options.onRequest),typeof _.request=="string"&&(_.options.baseURL&&(_.request=Sm(_.request,_.options.baseURL)),_.options.query&&(_.request=Kl(_.request,_.options.query),delete _.options.query),"query"in _.options&&delete _.options.query,"params"in _.options&&delete _.options.params),_.options.body&&xc(_.options.method)&&(R_(_.options.body)?(_.options.body=typeof _.options.body=="string"?_.options.body:JSON.stringify(_.options.body),_.options.headers=new r(_.options.headers||{}),_.options.headers.has("content-type")||_.options.headers.set("content-type","application/json"),_.options.headers.has("accept")||_.options.headers.set("accept","application/json")):("pipeTo"in _.options.body&&typeof _.options.body.pipeTo=="function"||typeof _.options.body.pipe=="function")&&("duplex"in _.options||(_.options.duplex="half")));let A;if(!_.options.signal&&_.options.timeout){const S=new i;A=setTimeout(()=>{const U=new Error("[TimeoutError]: The operation was aborted due to timeout");U.name="TimeoutError",U.code=23,S.abort(U)},_.options.timeout),_.options.signal=S.signal}try{_.response=await t(_.request,_.options)}catch(S){return _.error=S,_.options.onRequestError&&await ri(_,_.options.onRequestError),await a(_)}finally{A&&clearTimeout(A)}if((_.response.body||_.response._bodyInit)&&!D_.has(_.response.status)&&_.options.method!=="HEAD"){const S=(_.options.parseResponse?"json":_.options.responseType)||C_(_.response.headers.get("content-type")||"");switch(S){case"json":{const U=await _.response.text(),G=_.options.parseResponse||vi;_.response._data=G(U);break}case"stream":{_.response._data=_.response.body||_.response._bodyInit;break}default:_.response._data=await _.response[S]()}}return _.options.onResponse&&await ri(_,_.options.onResponse),!_.options.ignoreResponseError&&_.response.status>=400&&_.response.status<600?(_.options.onResponseError&&await ri(_,_.options.onResponseError),await a(_)):_.response},u=async function(g,m){return(await c(g,m))._data};return u.raw=c,u.native=(...p)=>t(...p),u.create=(p={},g={})=>vu({...e,...g,defaults:{...e.defaults,...g.defaults,...p}}),u}const bi=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),M_=bi.fetch?(...e)=>bi.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),U_=bi.Headers,x_=bi.AbortController,F_=vu({fetch:M_,Headers:U_,AbortController:x_}),j_=F_,H_={public:{siteName:"Visity.me",domain:"visity.me",copyRightDate:"2024"},app:{buildId:"storybook",baseURL:"/",buildAssetsDir:"/_nuxt/",cdnURL:""},nitro:{envPrefix:"NUXT_"}};/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bu;const Lr=e=>bu=e,Eu=Symbol();function vo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Tr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Tr||(Tr={}));function V_(){const e=Vo(!0),t=e.run(()=>tr({}));let r=[],i=[];const a=kl({install(c){Lr(a),a._a=c,c.provide(Eu,a),c.config.globalProperties.$pinia=a,i.forEach(u=>r.push(u)),i=[]},use(c){return this._a?r.push(c):i.push(c),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return a}const Iu=()=>{};function Fc(e,t,r,i=Iu){e.push(t);const a=()=>{const c=e.indexOf(t);c>-1&&(e.splice(c,1),i())};return!r&&Sl()&&tp(a),a}function Yn(e,...t){e.slice().forEach(r=>{r(...t)})}const $_=e=>e(),jc=Symbol(),xs=Symbol();function bo(e,t){e instanceof Map&&t instanceof Map?t.forEach((r,i)=>e.set(i,r)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const i=t[r],a=e[r];vo(a)&&vo(i)&&e.hasOwnProperty(r)&&!pi(i)&&!Cl(i)?e[r]=bo(a,i):e[r]=i}return e}const W_=Symbol();function B_(e){return!vo(e)||!e.hasOwnProperty(W_)}const{assign:In}=Object;function z_(e){return!!(pi(e)&&e.effect)}function q_(e,t,r,i){const{state:a,actions:c,getters:u}=t,p=r.state.value[e];let g;function m(){p||(r.state.value[e]=a?a():{});const _=np(r.state.value[e]);return In(_,c,Object.keys(u||{}).reduce((A,I)=>(A[I]=kl(Ft(()=>{Lr(r);const S=r._s.get(e);return u[I].call(S,S)})),A),{}))}return g=wu(e,m,t,r,i,!0),g}function wu(e,t,r={},i,a,c){let u;const p=In({actions:{}},r),g={deep:!0};let m,_,A=[],I=[],S;const U=i.state.value[e];!c&&!U&&(i.state.value[e]={}),tr({});let G;function W(de){let L;m=_=!1,typeof de=="function"?(de(i.state.value[e]),L={type:Tr.patchFunction,storeId:e,events:S}):(bo(i.state.value[e],de),L={type:Tr.patchObject,payload:de,storeId:e,events:S});const ye=G=Symbol();Wo().then(()=>{G===ye&&(m=!0)}),_=!0,Yn(A,L,i.state.value[e])}const j=c?function(){const{state:L}=r,ye=L?L():{};this.$patch(Se=>{In(Se,ye)})}:Iu;function Y(){u.stop(),A=[],I=[],i._s.delete(e)}const $=(de,L="")=>{if(jc in de)return de[xs]=L,de;const ye=function(){Lr(i);const Se=Array.from(arguments),He=[],Le=[];function Ze(Ae){He.push(Ae)}function Re(Ae){Le.push(Ae)}Yn(I,{args:Se,name:ye[xs],store:se,after:Ze,onError:Re});let et;try{et=de.apply(this&&this.$id===e?this:se,Se)}catch(Ae){throw Yn(Le,Ae),Ae}return et instanceof Promise?et.then(Ae=>(Yn(He,Ae),Ae)).catch(Ae=>(Yn(Le,Ae),Promise.reject(Ae))):(Yn(He,et),et)};return ye[jc]=!0,ye[xs]=L,ye},re={_p:i,$id:e,$onAction:Fc.bind(null,I),$patch:W,$reset:j,$subscribe(de,L={}){const ye=Fc(A,de,L.detached,()=>Se()),Se=u.run(()=>Pl(()=>i.state.value[e],He=>{(L.flush==="sync"?_:m)&&de({storeId:e,type:Tr.direct,events:S},He)},In({},g,L)));return ye},$dispose:Y},se=zn(re);i._s.set(e,se);const le=(i._a&&i._a.runWithContext||$_)(()=>i._e.run(()=>(u=Vo()).run(()=>t({action:$}))));for(const de in le){const L=le[de];if(pi(L)&&!z_(L)||Cl(L))c||(U&&B_(L)&&(pi(L)?L.value=U[de]:bo(L,U[de])),i.state.value[e][de]=L);else if(typeof L=="function"){const ye=$(L,de);le[de]=ye,p.actions[de]=L}}return In(se,le),In(ep(se),le),Object.defineProperty(se,"$state",{get:()=>i.state.value[e],set:de=>{W(L=>{In(L,de)})}}),i._p.forEach(de=>{In(se,u.run(()=>de({store:se,app:i._a,pinia:i,options:p})))}),U&&c&&r.hydrate&&r.hydrate(se.$state,U),m=!0,_=!0,se}/*! #__NO_SIDE_EFFECTS__ */function G_(e,t,r){let i;const a=typeof t=="function";i=a?r:t;function c(u,p){const g=$o();return u=u||(g?Zt(Eu,null):null),u&&Lr(u),u=bu,u._s.has(e)||(a?wu(e,t,i,u):q_(e,i,u)),u._s.get(e)}return c.$id=e,c}const K_=Ep(()=>{ou("skipHydrate",e=>{})}),Y_=[["NuxtError",e=>Ko(e)],["EmptyShallowRef",e=>Pr(e==="_"?void 0:e==="0n"?BigInt(0):vi(e))],["EmptyRef",e=>tr(e==="_"?void 0:e==="0n"?BigInt(0):vi(e))],["ShallowRef",e=>Pr(e)],["ShallowReactive",e=>jn(e)],["Ref",e=>tr(e)],["Reactive",e=>zn(e)]],X_=ut({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,r;for(const[i,a]of Y_)ou(i,a);Object.assign(e.payload,([t,r]=$n(()=>e.runWithContext(ug)),t=await t,r(),t)),window.__NUXT__=e.payload}}),J_=[],Q_=ut({name:"nuxt:head",enforce:"pre",setup(e){const t=rm({plugins:J_});im(()=>We().vueApp._context.provides.usehead),e.vueApp.use(t);{let r=!0;const i=async()=>{r=!1,await Vl(t)};t.hooks.hook("dom:beforeRender",a=>{a.shouldRender=!r}),e.hooks.hook("page:start",()=>{r=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||i()}),e.hooks.hook("app:error",i),e.hooks.hook("app:suspense:resolve",i)}}});function Tu(e){return Array.isArray(e)?e:[e]}const Fs=[{name:"username",path:"/:username()",component:()=>Ut(()=>import("./DyMnSlty.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)},{name:"auth",path:"/auth",component:()=>Ut(()=>import("./DU0vITjN.js"),__vite__mapDeps([10,11,12,2,3,9,13,14,15,16,17,6,8,4,18]),import.meta.url)},{name:"auth-register",path:"/auth/register",component:()=>Ut(()=>import("./CzyQN33c.js"),__vite__mapDeps([19,11,12,2,3,9,13,14,15,16,17,6,8,4,20]),import.meta.url)},{name:"dashboard",path:"/dashboard",component:()=>Ut(()=>import("./DTwFqufV.js"),__vite__mapDeps([21,17,2,22,3,23,24,6,25,7,8,4,9,26]),import.meta.url)},{name:"dashboard-profile",path:"/dashboard/profile",component:()=>Ut(()=>import("./CTooiZfH.js"),__vite__mapDeps([27,15,2,3,16,6,8,4,9]),import.meta.url)},{name:"dashboard-profiles-username",path:"/dashboard/profiles/:username()",component:()=>Ut(()=>import("./ULnIqwsX.js"),__vite__mapDeps([28,1,2,3,4,5,29,15,16,30,31,12,9,13,23,24,17,32,7,25,33,34,6,8]),import.meta.url)},{name:"dashboard-profiles-create",path:"/dashboard/profiles/create",component:()=>Ut(()=>import("./ByvpPExq.js"),__vite__mapDeps([35,1,2,3,4,5,29,15,16,30,31,12,9,13,23,24,17,32,7,25,33,34,6,8]),import.meta.url)},{name:"index",path:"/",component:()=>Ut(()=>import("./Bp9lV89C.js"),__vite__mapDeps([36,6,2,37,38,8,4,9]),import.meta.url)},{path:"/iframe.html",name:"storybook-iframe"}],Z_=async e=>{var g;let t,r;if(!((g=e.meta)!=null&&g.validate))return;const i=We(),a=an(),c=([t,r]=$n(()=>Promise.resolve(e.meta.validate(e))),t=await t,r(),t);if(c===!0)return;const u=Ko({statusCode:c&&c.statusCode||404,statusMessage:c&&c.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),p=a.beforeResolve(m=>{if(p(),m===e){const _=a.afterEach(async()=>{_(),await i.runWithContext(()=>br(u)),window==null||window.history.pushState({},"",e.fullPath)});return!1}})};var js={},q={},F={},Hs={},Xn={},Q={},Hc;function Dr(){if(Hc)return Q;Hc=1;var e={};Object.defineProperty(Q,"__esModule",{value:!0});/**
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
 */const t={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const r=function(b,v){if(!b)throw i(v)},i=function(b){return new Error("Firebase Database ("+t.SDK_VERSION+") INTERNAL ASSERT FAILED: "+b)};/**
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
 */const a=function(b){const v=[];let T=0;for(let C=0;C<b.length;C++){let k=b.charCodeAt(C);k<128?v[T++]=k:k<2048?(v[T++]=k>>6|192,v[T++]=k&63|128):(k&64512)===55296&&C+1<b.length&&(b.charCodeAt(C+1)&64512)===56320?(k=65536+((k&1023)<<10)+(b.charCodeAt(++C)&1023),v[T++]=k>>18|240,v[T++]=k>>12&63|128,v[T++]=k>>6&63|128,v[T++]=k&63|128):(v[T++]=k>>12|224,v[T++]=k>>6&63|128,v[T++]=k&63|128)}return v},c=function(b){const v=[];let T=0,C=0;for(;T<b.length;){const k=b[T++];if(k<128)v[C++]=String.fromCharCode(k);else if(k>191&&k<224){const Z=b[T++];v[C++]=String.fromCharCode((k&31)<<6|Z&63)}else if(k>239&&k<365){const Z=b[T++],ue=b[T++],we=b[T++],Me=((k&7)<<18|(Z&63)<<12|(ue&63)<<6|we&63)-65536;v[C++]=String.fromCharCode(55296+(Me>>10)),v[C++]=String.fromCharCode(56320+(Me&1023))}else{const Z=b[T++],ue=b[T++];v[C++]=String.fromCharCode((k&15)<<12|(Z&63)<<6|ue&63)}}return v.join("")},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(b,v){if(!Array.isArray(b))throw Error("encodeByteArray takes an array as a parameter");this.init_();const T=v?this.byteToCharMapWebSafe_:this.byteToCharMap_,C=[];for(let k=0;k<b.length;k+=3){const Z=b[k],ue=k+1<b.length,we=ue?b[k+1]:0,Me=k+2<b.length,Xe=Me?b[k+2]:0,vt=Z>>2,Ie=(Z&3)<<4|we>>4;let pt=(we&15)<<2|Xe>>6,nn=Xe&63;Me||(nn=64,ue||(pt=64)),C.push(T[vt],T[Ie],T[pt],T[nn])}return C.join("")},encodeString(b,v){return this.HAS_NATIVE_SUPPORT&&!v?btoa(b):this.encodeByteArray(a(b),v)},decodeString(b,v){return this.HAS_NATIVE_SUPPORT&&!v?atob(b):c(this.decodeStringToByteArray(b,v))},decodeStringToByteArray(b,v){this.init_();const T=v?this.charToByteMapWebSafe_:this.charToByteMap_,C=[];for(let k=0;k<b.length;){const Z=T[b.charAt(k++)],we=k<b.length?T[b.charAt(k)]:0;++k;const Xe=k<b.length?T[b.charAt(k)]:64;++k;const Ie=k<b.length?T[b.charAt(k)]:64;if(++k,Z==null||we==null||Xe==null||Ie==null)throw new p;const pt=Z<<2|we>>4;if(C.push(pt),Xe!==64){const nn=we<<4&240|Xe>>2;if(C.push(nn),Ie!==64){const ke=Xe<<6&192|Ie;C.push(ke)}}}return C},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let b=0;b<this.ENCODED_VALS.length;b++)this.byteToCharMap_[b]=this.ENCODED_VALS.charAt(b),this.charToByteMap_[this.byteToCharMap_[b]]=b,this.byteToCharMapWebSafe_[b]=this.ENCODED_VALS_WEBSAFE.charAt(b),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[b]]=b,b>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(b)]=b,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(b)]=b)}}};class p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g=function(b){const v=a(b);return u.encodeByteArray(v,!0)},m=function(b){return g(b).replace(/\./g,"")},_=function(b){try{return u.decodeString(b,!0)}catch(v){console.error("base64Decode failed: ",v)}return null};/**
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
 */function A(b){return I(void 0,b)}function I(b,v){if(!(v instanceof Object))return v;switch(v.constructor){case Date:const T=v;return new Date(T.getTime());case Object:b===void 0&&(b={});break;case Array:b=[];break;default:return v}for(const T in v)!v.hasOwnProperty(T)||!S(T)||(b[T]=I(b[T],v[T]));return b}function S(b){return b!=="__proto__"}/**
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
 */function U(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof ec<"u")return ec;throw new Error("Unable to locate global object.")}/**
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
 */const G=()=>U().__FIREBASE_DEFAULTS__,W=()=>{if(typeof process>"u"||typeof e>"u")return;const b=e.__FIREBASE_DEFAULTS__;if(b)return JSON.parse(b)},j=()=>{if(typeof document>"u")return;let b;try{b=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const v=b&&_(b[1]);return v&&JSON.parse(v)},Y=()=>{try{return G()||W()||j()}catch(b){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${b}`);return}},$=b=>{var v,T;return(T=(v=Y())===null||v===void 0?void 0:v.emulatorHosts)===null||T===void 0?void 0:T[b]},re=b=>{const v=$(b);if(!v)return;const T=v.lastIndexOf(":");if(T<=0||T+1===v.length)throw new Error(`Invalid host ${v} with no separate hostname and port!`);const C=parseInt(v.substring(T+1),10);return v[0]==="["?[v.substring(1,T-1),C]:[v.substring(0,T),C]},se=()=>{var b;return(b=Y())===null||b===void 0?void 0:b.config},oe=b=>{var v;return(v=Y())===null||v===void 0?void 0:v[`_${b}`]};/**
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
 */class le{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((v,T)=>{this.resolve=v,this.reject=T})}wrapCallback(v){return(T,C)=>{T?this.reject(T):this.resolve(C),typeof v=="function"&&(this.promise.catch(()=>{}),v.length===1?v(T):v(T,C))}}}/**
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
 */function de(b,v){if(b.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const T={alg:"none",type:"JWT"},C=v||"demo-project",k=b.iat||0,Z=b.sub||b.user_id;if(!Z)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const ue=Object.assign({iss:`https://securetoken.google.com/${C}`,aud:C,iat:k,exp:k+3600,auth_time:k,sub:Z,user_id:Z,firebase:{sign_in_provider:"custom",identities:{}}},b);return[m(JSON.stringify(T)),m(JSON.stringify(ue)),""].join(".")}/**
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
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ye(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function Se(){var b;const v=(b=Y())===null||b===void 0?void 0:b.forceEnvironment;if(v==="node")return!0;if(v==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function He(){return typeof window<"u"||Le()}function Le(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Ze(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Re(){const b=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof b=="object"&&b.id!==void 0}function et(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ae(){return L().indexOf("Electron/")>=0}function dt(){const b=L();return b.indexOf("MSIE ")>=0||b.indexOf("Trident/")>=0}function At(){return L().indexOf("MSAppHost/")>=0}function St(){return t.NODE_CLIENT===!0||t.NODE_ADMIN===!0}function at(){return!Se()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ge(){try{return typeof indexedDB=="object"}catch{return!1}}function fe(){return new Promise((b,v)=>{try{let T=!0;const C="validate-browser-context-for-indexeddb-analytics-module",k=self.indexedDB.open(C);k.onsuccess=()=>{k.result.close(),T||self.indexedDB.deleteDatabase(C),b(!0)},k.onupgradeneeded=()=>{T=!1},k.onerror=()=>{var Z;v(((Z=k.error)===null||Z===void 0?void 0:Z.message)||"")}}catch(T){v(T)}})}function Be(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ce="FirebaseError";class Pe extends Error{constructor(v,T,C){super(T),this.code=v,this.customData=C,this.name=Ce,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(v,T,C){this.service=v,this.serviceName=T,this.errors=C}create(v,...T){const C=T[0]||{},k=`${this.service}/${v}`,Z=this.errors[v],ue=Z?X(Z,C):"Error",we=`${this.serviceName}: ${ue} (${k}).`;return new Pe(k,we,C)}}function X(b,v){return b.replace(K,(T,C)=>{const k=v[C];return k!=null?String(k):`<${C}?>`})}const K=/\{\$([^}]+)}/g;/**
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
 */function te(b){return JSON.parse(b)}function me(b){return JSON.stringify(b)}/**
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
 */const Ee=function(b){let v={},T={},C={},k="";try{const Z=b.split(".");v=te(_(Z[0])||""),T=te(_(Z[1])||""),k=Z[2],C=T.d||{},delete T.d}catch{}return{header:v,claims:T,data:C,signature:k}},pe=function(b){const v=Ee(b).claims,T=Math.floor(new Date().getTime()/1e3);let C=0,k=0;return typeof v=="object"&&(v.hasOwnProperty("nbf")?C=v.nbf:v.hasOwnProperty("iat")&&(C=v.iat),v.hasOwnProperty("exp")?k=v.exp:k=C+86400),!!T&&!!C&&!!k&&T>=C&&T<=k},ce=function(b){const v=Ee(b).claims;return typeof v=="object"&&v.hasOwnProperty("iat")?v.iat:null},_e=function(b){const v=Ee(b),T=v.claims;return!!T&&typeof T=="object"&&T.hasOwnProperty("iat")},ct=function(b){const v=Ee(b).claims;return typeof v=="object"&&v.admin===!0};/**
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
 */function De(b,v){return Object.prototype.hasOwnProperty.call(b,v)}function Rt(b,v){if(Object.prototype.hasOwnProperty.call(b,v))return b[v]}function Pn(b){for(const v in b)if(Object.prototype.hasOwnProperty.call(b,v))return!1;return!0}function en(b,v,T){const C={};for(const k in b)Object.prototype.hasOwnProperty.call(b,k)&&(C[k]=v.call(T,b[k],k,b));return C}function Ve(b,v){if(b===v)return!0;const T=Object.keys(b),C=Object.keys(v);for(const k of T){if(!C.includes(k))return!1;const Z=b[k],ue=v[k];if(ft(Z)&&ft(ue)){if(!Ve(Z,ue))return!1}else if(Z!==ue)return!1}for(const k of C)if(!T.includes(k))return!1;return!0}function ft(b){return b!==null&&typeof b=="object"}/**
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
 */function Ht(b,v=2e3){const T=new le;return setTimeout(()=>T.reject("timeout!"),v),b.then(T.resolve,T.reject),T.promise}/**
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
 */function Qe(b){const v=[];for(const[T,C]of Object.entries(b))Array.isArray(C)?C.forEach(k=>{v.push(encodeURIComponent(T)+"="+encodeURIComponent(k))}):v.push(encodeURIComponent(T)+"="+encodeURIComponent(C));return v.length?"&"+v.join("&"):""}function Pt(b){const v={};return b.replace(/^\?/,"").split("&").forEach(C=>{if(C){const[k,Z]=C.split("=");v[decodeURIComponent(k)]=decodeURIComponent(Z)}}),v}function dn(b){const v=b.indexOf("?");if(!v)return"";const T=b.indexOf("#",v);return b.substring(v,T>0?T:void 0)}/**
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
 */class Vt{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let v=1;v<this.blockSize;++v)this.pad_[v]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(v,T){T||(T=0);const C=this.W_;if(typeof v=="string")for(let Ie=0;Ie<16;Ie++)C[Ie]=v.charCodeAt(T)<<24|v.charCodeAt(T+1)<<16|v.charCodeAt(T+2)<<8|v.charCodeAt(T+3),T+=4;else for(let Ie=0;Ie<16;Ie++)C[Ie]=v[T]<<24|v[T+1]<<16|v[T+2]<<8|v[T+3],T+=4;for(let Ie=16;Ie<80;Ie++){const pt=C[Ie-3]^C[Ie-8]^C[Ie-14]^C[Ie-16];C[Ie]=(pt<<1|pt>>>31)&4294967295}let k=this.chain_[0],Z=this.chain_[1],ue=this.chain_[2],we=this.chain_[3],Me=this.chain_[4],Xe,vt;for(let Ie=0;Ie<80;Ie++){Ie<40?Ie<20?(Xe=we^Z&(ue^we),vt=1518500249):(Xe=Z^ue^we,vt=1859775393):Ie<60?(Xe=Z&ue|we&(Z|ue),vt=2400959708):(Xe=Z^ue^we,vt=3395469782);const pt=(k<<5|k>>>27)+Xe+Me+vt+C[Ie]&4294967295;Me=we,we=ue,ue=(Z<<30|Z>>>2)&4294967295,Z=k,k=pt}this.chain_[0]=this.chain_[0]+k&4294967295,this.chain_[1]=this.chain_[1]+Z&4294967295,this.chain_[2]=this.chain_[2]+ue&4294967295,this.chain_[3]=this.chain_[3]+we&4294967295,this.chain_[4]=this.chain_[4]+Me&4294967295}update(v,T){if(v==null)return;T===void 0&&(T=v.length);const C=T-this.blockSize;let k=0;const Z=this.buf_;let ue=this.inbuf_;for(;k<T;){if(ue===0)for(;k<=C;)this.compress_(v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<T;)if(Z[ue]=v.charCodeAt(k),++ue,++k,ue===this.blockSize){this.compress_(Z),ue=0;break}}else for(;k<T;)if(Z[ue]=v[k],++ue,++k,ue===this.blockSize){this.compress_(Z),ue=0;break}}this.inbuf_=ue,this.total_+=T}digest(){const v=[];let T=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let k=this.blockSize-1;k>=56;k--)this.buf_[k]=T&255,T/=256;this.compress_(this.buf_);let C=0;for(let k=0;k<5;k++)for(let Z=24;Z>=0;Z-=8)v[C]=this.chain_[k]>>Z&255,++C;return v}}function kt(b,v){const T=new fn(b,v);return T.subscribe.bind(T)}class fn{constructor(v,T){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=T,this.task.then(()=>{v(this)}).catch(C=>{this.error(C)})}next(v){this.forEachObserver(T=>{T.next(v)})}error(v){this.forEachObserver(T=>{T.error(v)}),this.close(v)}complete(){this.forEachObserver(v=>{v.complete()}),this.close()}subscribe(v,T,C){let k;if(v===void 0&&T===void 0&&C===void 0)throw new Error("Missing Observer.");Ge(v,["next","error","complete"])?k=v:k={next:v,error:T,complete:C},k.next===void 0&&(k.next=yt),k.error===void 0&&(k.error=yt),k.complete===void 0&&(k.complete=yt);const Z=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?k.error(this.finalError):k.complete()}catch{}}),this.observers.push(k),Z}unsubscribeOne(v){this.observers===void 0||this.observers[v]===void 0||(delete this.observers[v],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(v){if(!this.finalized)for(let T=0;T<this.observers.length;T++)this.sendOne(T,v)}sendOne(v,T){this.task.then(()=>{if(this.observers!==void 0&&this.observers[v]!==void 0)try{T(this.observers[v])}catch(C){typeof console<"u"&&console.error&&console.error(C)}})}close(v){this.finalized||(this.finalized=!0,v!==void 0&&(this.finalError=v),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ct(b,v){return(...T)=>{Promise.resolve(!0).then(()=>{b(...T)}).catch(C=>{v&&v(C)})}}function Ge(b,v){if(typeof b!="object"||b===null)return!1;for(const T of v)if(T in b&&typeof b[T]=="function")return!0;return!1}function yt(){}/**
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
 */const kn=function(b,v,T,C){let k;if(C<v?k="at least "+v:C>T&&(k=T===0?"none":"no more than "+T),k){const Z=b+" failed: Was called with "+C+(C===1?" argument.":" arguments.")+" Expects "+k+".";throw new Error(Z)}};function tt(b,v){return`${b} failed: ${v} argument `}function nt(b,v,T){if(!(T&&!v)&&typeof v!="string")throw new Error(tt(b,"namespace")+"must be a valid firebase namespace.")}function rt(b,v,T,C){if(!(C&&!T)&&typeof T!="function")throw new Error(tt(b,v)+"must be a valid function.")}function Fe(b,v,T,C){if(!(C&&!T)&&(typeof T!="object"||T===null))throw new Error(tt(b,v)+"must be a valid context object.")}/**
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
 */const Ke=function(b){const v=[];let T=0;for(let C=0;C<b.length;C++){let k=b.charCodeAt(C);if(k>=55296&&k<=56319){const Z=k-55296;C++,r(C<b.length,"Surrogate pair missing trail surrogate.");const ue=b.charCodeAt(C)-56320;k=65536+(Z<<10)+ue}k<128?v[T++]=k:k<2048?(v[T++]=k>>6|192,v[T++]=k&63|128):k<65536?(v[T++]=k>>12|224,v[T++]=k>>6&63|128,v[T++]=k&63|128):(v[T++]=k>>18|240,v[T++]=k>>12&63|128,v[T++]=k>>6&63|128,v[T++]=k&63|128)}return v},tn=function(b){let v=0;for(let T=0;T<b.length;T++){const C=b.charCodeAt(T);C<128?v++:C<2048?v+=2:C>=55296&&C<=56319?(v+=4,T++):v+=3}return v};/**
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
 */const ht=1e3,Ot=2,lt=4*60*60*1e3,$t=.5;function hn(b,v=ht,T=Ot){const C=v*Math.pow(T,b),k=Math.round($t*C*(Math.random()-.5)*2);return Math.min(lt,C+k)}/**
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
 */function B(b){return Number.isFinite(b)?b+x(b):`${b}`}function x(b){b=Math.abs(b);const v=b%100;if(v>=10&&v<=20)return"th";const T=b%10;return T===1?"st":T===2?"nd":T===3?"rd":"th"}/**
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
 */function H(b){return b&&b._delegate?b._delegate:b}return Q.CONSTANTS=t,Q.DecodeBase64StringError=p,Q.Deferred=le,Q.ErrorFactory=M,Q.FirebaseError=Pe,Q.MAX_VALUE_MILLIS=lt,Q.RANDOM_FACTOR=$t,Q.Sha1=Vt,Q.areCookiesEnabled=Be,Q.assert=r,Q.assertionError=i,Q.async=Ct,Q.base64=u,Q.base64Decode=_,Q.base64Encode=g,Q.base64urlEncodeWithoutPadding=m,Q.calculateBackoffMillis=hn,Q.contains=De,Q.createMockUserToken=de,Q.createSubscribe=kt,Q.decode=Ee,Q.deepCopy=A,Q.deepEqual=Ve,Q.deepExtend=I,Q.errorPrefix=tt,Q.extractQuerystring=dn,Q.getDefaultAppConfig=se,Q.getDefaultEmulatorHost=$,Q.getDefaultEmulatorHostnameAndPort=re,Q.getDefaults=Y,Q.getExperimentalSetting=oe,Q.getGlobal=U,Q.getModularInstance=H,Q.getUA=L,Q.isAdmin=ct,Q.isBrowser=He,Q.isBrowserExtension=Re,Q.isCloudflareWorker=Ze,Q.isElectron=Ae,Q.isEmpty=Pn,Q.isIE=dt,Q.isIndexedDBAvailable=ge,Q.isMobileCordova=ye,Q.isNode=Se,Q.isNodeSdk=St,Q.isReactNative=et,Q.isSafari=at,Q.isUWP=At,Q.isValidFormat=_e,Q.isValidTimestamp=pe,Q.isWebWorker=Le,Q.issuedAtTime=ce,Q.jsonEval=te,Q.map=en,Q.ordinal=B,Q.promiseWithTimeout=Ht,Q.querystring=Qe,Q.querystringDecode=Pt,Q.safeGet=Rt,Q.stringLength=tn,Q.stringToByteArray=Ke,Q.stringify=me,Q.validateArgCount=kn,Q.validateCallback=rt,Q.validateContextObject=Fe,Q.validateIndexedDBOpenable=fe,Q.validateNamespace=nt,Q}var Vc;function Ci(){if(Vc)return Xn;Vc=1,Object.defineProperty(Xn,"__esModule",{value:!0});var e=Dr();class t{constructor(g,m,_){this.name=g,this.instanceFactory=m,this.type=_,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(g){return this.instantiationMode=g,this}setMultipleInstances(g){return this.multipleInstances=g,this}setServiceProps(g){return this.serviceProps=g,this}setInstanceCreatedCallback(g){return this.onInstanceCreated=g,this}}/**
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
 */const r="[DEFAULT]";/**
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
 */class i{constructor(g,m){this.name=g,this.container=m,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(g){const m=this.normalizeInstanceIdentifier(g);if(!this.instancesDeferred.has(m)){const _=new e.Deferred;if(this.instancesDeferred.set(m,_),this.isInitialized(m)||this.shouldAutoInitialize())try{const A=this.getOrInitializeService({instanceIdentifier:m});A&&_.resolve(A)}catch{}}return this.instancesDeferred.get(m).promise}getImmediate(g){var m;const _=this.normalizeInstanceIdentifier(g==null?void 0:g.identifier),A=(m=g==null?void 0:g.optional)!==null&&m!==void 0?m:!1;if(this.isInitialized(_)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:_})}catch(I){if(A)return null;throw I}else{if(A)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(g){if(g.name!==this.name)throw Error(`Mismatching Component ${g.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=g,!!this.shouldAutoInitialize()){if(c(g))try{this.getOrInitializeService({instanceIdentifier:r})}catch{}for(const[m,_]of this.instancesDeferred.entries()){const A=this.normalizeInstanceIdentifier(m);try{const I=this.getOrInitializeService({instanceIdentifier:A});_.resolve(I)}catch{}}}}clearInstance(g=r){this.instancesDeferred.delete(g),this.instancesOptions.delete(g),this.instances.delete(g)}async delete(){const g=Array.from(this.instances.values());await Promise.all([...g.filter(m=>"INTERNAL"in m).map(m=>m.INTERNAL.delete()),...g.filter(m=>"_delete"in m).map(m=>m._delete())])}isComponentSet(){return this.component!=null}isInitialized(g=r){return this.instances.has(g)}getOptions(g=r){return this.instancesOptions.get(g)||{}}initialize(g={}){const{options:m={}}=g,_=this.normalizeInstanceIdentifier(g.instanceIdentifier);if(this.isInitialized(_))throw Error(`${this.name}(${_}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const A=this.getOrInitializeService({instanceIdentifier:_,options:m});for(const[I,S]of this.instancesDeferred.entries()){const U=this.normalizeInstanceIdentifier(I);_===U&&S.resolve(A)}return A}onInit(g,m){var _;const A=this.normalizeInstanceIdentifier(m),I=(_=this.onInitCallbacks.get(A))!==null&&_!==void 0?_:new Set;I.add(g),this.onInitCallbacks.set(A,I);const S=this.instances.get(A);return S&&g(S,A),()=>{I.delete(g)}}invokeOnInitCallbacks(g,m){const _=this.onInitCallbacks.get(m);if(_)for(const A of _)try{A(g,m)}catch{}}getOrInitializeService({instanceIdentifier:g,options:m={}}){let _=this.instances.get(g);if(!_&&this.component&&(_=this.component.instanceFactory(this.container,{instanceIdentifier:a(g),options:m}),this.instances.set(g,_),this.instancesOptions.set(g,m),this.invokeOnInitCallbacks(_,g),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,g,_)}catch{}return _||null}normalizeInstanceIdentifier(g=r){return this.component?this.component.multipleInstances?g:r:g}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a(p){return p===r?void 0:p}function c(p){return p.instantiationMode==="EAGER"}/**
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
 */class u{constructor(g){this.name=g,this.providers=new Map}addComponent(g){const m=this.getProvider(g.name);if(m.isComponentSet())throw new Error(`Component ${g.name} has already been registered with ${this.name}`);m.setComponent(g)}addOrOverwriteComponent(g){this.getProvider(g.name).isComponentSet()&&this.providers.delete(g.name),this.addComponent(g)}getProvider(g){if(this.providers.has(g))return this.providers.get(g);const m=new i(g,this);return this.providers.set(g,m),m}getProviders(){return Array.from(this.providers.values())}}return Xn.Component=t,Xn.ComponentContainer=u,Xn.Provider=i,Xn}var Vs={},$c;function ea(){return $c||($c=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});/**
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
 */const t=[];e.LogLevel=void 0,function(m){m[m.DEBUG=0]="DEBUG",m[m.VERBOSE=1]="VERBOSE",m[m.INFO=2]="INFO",m[m.WARN=3]="WARN",m[m.ERROR=4]="ERROR",m[m.SILENT=5]="SILENT"}(e.LogLevel||(e.LogLevel={}));const r={debug:e.LogLevel.DEBUG,verbose:e.LogLevel.VERBOSE,info:e.LogLevel.INFO,warn:e.LogLevel.WARN,error:e.LogLevel.ERROR,silent:e.LogLevel.SILENT},i=e.LogLevel.INFO,a={[e.LogLevel.DEBUG]:"log",[e.LogLevel.VERBOSE]:"log",[e.LogLevel.INFO]:"info",[e.LogLevel.WARN]:"warn",[e.LogLevel.ERROR]:"error"},c=(m,_,...A)=>{if(_<m.logLevel)return;const I=new Date().toISOString(),S=a[_];if(S)console[S](`[${I}]  ${m.name}:`,...A);else throw new Error(`Attempted to log a message with an invalid logType (value: ${_})`)};class u{constructor(_){this.name=_,this._logLevel=i,this._logHandler=c,this._userLogHandler=null,t.push(this)}get logLevel(){return this._logLevel}set logLevel(_){if(!(_ in e.LogLevel))throw new TypeError(`Invalid value "${_}" assigned to \`logLevel\``);this._logLevel=_}setLogLevel(_){this._logLevel=typeof _=="string"?r[_]:_}get logHandler(){return this._logHandler}set logHandler(_){if(typeof _!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=_}get userLogHandler(){return this._userLogHandler}set userLogHandler(_){this._userLogHandler=_}debug(..._){this._userLogHandler&&this._userLogHandler(this,e.LogLevel.DEBUG,..._),this._logHandler(this,e.LogLevel.DEBUG,..._)}log(..._){this._userLogHandler&&this._userLogHandler(this,e.LogLevel.VERBOSE,..._),this._logHandler(this,e.LogLevel.VERBOSE,..._)}info(..._){this._userLogHandler&&this._userLogHandler(this,e.LogLevel.INFO,..._),this._logHandler(this,e.LogLevel.INFO,..._)}warn(..._){this._userLogHandler&&this._userLogHandler(this,e.LogLevel.WARN,..._),this._logHandler(this,e.LogLevel.WARN,..._)}error(..._){this._userLogHandler&&this._userLogHandler(this,e.LogLevel.ERROR,..._),this._logHandler(this,e.LogLevel.ERROR,..._)}}function p(m){t.forEach(_=>{_.setLogLevel(m)})}function g(m,_){for(const A of t){let I=null;_&&_.level&&(I=r[_.level]),m===null?A.userLogHandler=null:A.userLogHandler=(S,U,...G)=>{const W=G.map(j=>{if(j==null)return null;if(typeof j=="string")return j;if(typeof j=="number"||typeof j=="boolean")return j.toString();if(j instanceof Error)return j.message;try{return JSON.stringify(j)}catch{return null}}).filter(j=>j).join(" ");U>=(I??S.logLevel)&&m({level:e.LogLevel[U].toLowerCase(),message:W,args:G,type:S.name})}}}e.Logger=u,e.setLogLevel=p,e.setUserLogHandler=g}(Vs)),Vs}const ey=(e,t)=>t.some(r=>e instanceof r);let Wc,Bc;function ty(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ny(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Au=new WeakMap,Eo=new WeakMap,Su=new WeakMap,$s=new WeakMap,ta=new WeakMap;function ry(e){const t=new Promise((r,i)=>{const a=()=>{e.removeEventListener("success",c),e.removeEventListener("error",u)},c=()=>{r(Qt(e.result)),a()},u=()=>{i(e.error),a()};e.addEventListener("success",c),e.addEventListener("error",u)});return t.then(r=>{r instanceof IDBCursor&&Au.set(r,e)}).catch(()=>{}),ta.set(t,e),t}function iy(e){if(Eo.has(e))return;const t=new Promise((r,i)=>{const a=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",u),e.removeEventListener("abort",u)},c=()=>{r(),a()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",c),e.addEventListener("error",u),e.addEventListener("abort",u)});Eo.set(e,t)}let Io={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Eo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Su.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Qt(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sy(e){Io=e(Io)}function oy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const i=e.call(di(this),t,...r);return Su.set(i,t.sort?t.sort():[t]),Qt(i)}:ny().includes(e)?function(...t){return e.apply(di(this),t),Qt(Au.get(this))}:function(...t){return Qt(e.apply(di(this),t))}}function ay(e){return typeof e=="function"?oy(e):(e instanceof IDBTransaction&&iy(e),ey(e,ty())?new Proxy(e,Io):e)}function Qt(e){if(e instanceof IDBRequest)return ry(e);if($s.has(e))return $s.get(e);const t=ay(e);return t!==e&&($s.set(e,t),ta.set(t,e)),t}const di=e=>ta.get(e);function cy(e,t,{blocked:r,upgrade:i,blocking:a,terminated:c}={}){const u=indexedDB.open(e,t),p=Qt(u);return i&&u.addEventListener("upgradeneeded",g=>{i(Qt(u.result),g.oldVersion,g.newVersion,Qt(u.transaction),g)}),r&&u.addEventListener("blocked",g=>r(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),a&&g.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}function ly(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",i=>t(i.oldVersion,i)),Qt(r).then(()=>{})}const uy=["get","getKey","getAll","getAllKeys","count"],dy=["put","add","delete","clear"],Ws=new Map;function zc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ws.get(t))return Ws.get(t);const r=t.replace(/FromIndex$/,""),i=t!==r,a=dy.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(a||uy.includes(r)))return;const c=async function(u,...p){const g=this.transaction(u,a?"readwrite":"readonly");let m=g.store;return i&&(m=m.index(p.shift())),(await Promise.all([m[r](...p),a&&g.done]))[0]};return Ws.set(t,c),c}sy(e=>({...e,get:(t,r,i)=>zc(t,r)||e.get(t,r,i),has:(t,r)=>!!zc(t,r)||e.has(t,r)}));const fy=Object.freeze(Object.defineProperty({__proto__:null,deleteDB:ly,openDB:cy,unwrap:di,wrap:Qt},Symbol.toStringTag,{value:"Module"})),hy=Ol(fy);var qc;function Oi(){return qc||(qc=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ci(),r=ea(),i=Dr(),a=hy;/**
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
 */class c{constructor(x){this.container=x}getPlatformInfoString(){return this.container.getProviders().map(H=>{if(u(H)){const b=H.getImmediate();return`${b.library}/${b.version}`}else return null}).filter(H=>H).join(" ")}}function u(B){const x=B.getComponent();return(x==null?void 0:x.type)==="VERSION"}const p="@firebase/app",g="0.11.1";/**
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
 */const m=new r.Logger("@firebase/app"),_="@firebase/app-compat",A="@firebase/analytics-compat",I="@firebase/analytics",S="@firebase/app-check-compat",U="@firebase/app-check",G="@firebase/auth",W="@firebase/auth-compat",j="@firebase/database",Y="@firebase/data-connect",$="@firebase/database-compat",re="@firebase/functions",se="@firebase/functions-compat",oe="@firebase/installations",le="@firebase/installations-compat",de="@firebase/messaging",L="@firebase/messaging-compat",ye="@firebase/performance",Se="@firebase/performance-compat",He="@firebase/remote-config",Le="@firebase/remote-config-compat",Ze="@firebase/storage",Re="@firebase/storage-compat",et="@firebase/firestore",Ae="@firebase/vertexai",dt="@firebase/firestore-compat",At="firebase",St="11.3.1";/**
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
 */const at="[DEFAULT]",ge={[p]:"fire-core",[_]:"fire-core-compat",[I]:"fire-analytics",[A]:"fire-analytics-compat",[U]:"fire-app-check",[S]:"fire-app-check-compat",[G]:"fire-auth",[W]:"fire-auth-compat",[j]:"fire-rtdb",[Y]:"fire-data-connect",[$]:"fire-rtdb-compat",[re]:"fire-fn",[se]:"fire-fn-compat",[oe]:"fire-iid",[le]:"fire-iid-compat",[de]:"fire-fcm",[L]:"fire-fcm-compat",[ye]:"fire-perf",[Se]:"fire-perf-compat",[He]:"fire-rc",[Le]:"fire-rc-compat",[Ze]:"fire-gcs",[Re]:"fire-gcs-compat",[et]:"fire-fst",[dt]:"fire-fst-compat",[Ae]:"fire-vertex","fire-js":"fire-js",[At]:"fire-js-all"};/**
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
 */const fe=new Map,Be=new Map,Ce=new Map;function Pe(B,x){try{B.container.addComponent(x)}catch(H){m.debug(`Component ${x.name} failed to register with FirebaseApp ${B.name}`,H)}}function M(B,x){B.container.addOrOverwriteComponent(x)}function X(B){const x=B.name;if(Ce.has(x))return m.debug(`There were multiple attempts to register component ${x}.`),!1;Ce.set(x,B);for(const H of fe.values())Pe(H,B);for(const H of Be.values())Pe(H,B);return!0}function K(B,x){const H=B.container.getProvider("heartbeat").getImmediate({optional:!0});return H&&H.triggerHeartbeat(),B.container.getProvider(x)}function te(B,x,H=at){K(B,x).clearInstance(H)}function me(B){return B.options!==void 0}function Ee(B){return B==null?!1:B.settings!==void 0}function pe(){Ce.clear()}/**
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
 */const ce={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_e=new i.ErrorFactory("app","Firebase",ce);/**
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
 */class ct{constructor(x,H,b){this._isDeleted=!1,this._options=Object.assign({},x),this._config=Object.assign({},H),this._name=H.name,this._automaticDataCollectionEnabled=H.automaticDataCollectionEnabled,this._container=b,this.container.addComponent(new t.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(x){this.checkDestroyed(),this._automaticDataCollectionEnabled=x}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(x){this._isDeleted=x}checkDestroyed(){if(this.isDeleted)throw _e.create("app-deleted",{appName:this._name})}}/**
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
 */function De(B,x){const H=i.base64Decode(B.split(".")[1]);if(H===null){console.error(`FirebaseServerApp ${x} is invalid: second part could not be parsed.`);return}if(JSON.parse(H).exp===void 0){console.error(`FirebaseServerApp ${x} is invalid: expiration claim could not be parsed`);return}const v=JSON.parse(H).exp*1e3,T=new Date().getTime();v-T<=0&&console.error(`FirebaseServerApp ${x} is invalid: the token has expired.`)}class Rt extends ct{constructor(x,H,b,v){const T=H.automaticDataCollectionEnabled!==void 0?H.automaticDataCollectionEnabled:!1,C={name:b,automaticDataCollectionEnabled:T};if(x.apiKey!==void 0)super(x,C,v);else{const k=x;super(k.options,C,v)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:T},H),this._serverConfig.authIdToken&&De(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&De(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,H.releaseOnDeref=void 0,Pt(p,g,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(x){this.isDeleted||(this._refCount++,x!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(x,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Qe(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw _e.create("server-app-deleted")}}/**
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
 */const Pn=St;function en(B,x={}){let H=B;typeof x!="object"&&(x={name:x});const b=Object.assign({name:at,automaticDataCollectionEnabled:!1},x),v=b.name;if(typeof v!="string"||!v)throw _e.create("bad-app-name",{appName:String(v)});if(H||(H=i.getDefaultAppConfig()),!H)throw _e.create("no-options");const T=fe.get(v);if(T){if(i.deepEqual(H,T.options)&&i.deepEqual(b,T.config))return T;throw _e.create("duplicate-app",{appName:v})}const C=new t.ComponentContainer(v);for(const Z of Ce.values())C.addComponent(Z);const k=new ct(H,b,C);return fe.set(v,k),k}function Ve(B,x){if(i.isBrowser()&&!i.isWebWorker())throw _e.create("invalid-server-app-environment");x.automaticDataCollectionEnabled===void 0&&(x.automaticDataCollectionEnabled=!1);let H;me(B)?H=B.options:H=B;const b=Object.assign(Object.assign({},x),H);b.releaseOnDeref!==void 0&&delete b.releaseOnDeref;const v=ue=>[...ue].reduce((we,Me)=>Math.imul(31,we)+Me.charCodeAt(0)|0,0);if(x.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw _e.create("finalization-registry-not-supported",{});const T=""+v(JSON.stringify(b)),C=Be.get(T);if(C)return C.incRefCount(x.releaseOnDeref),C;const k=new t.ComponentContainer(T);for(const ue of Ce.values())k.addComponent(ue);const Z=new Rt(H,x,T,k);return Be.set(T,Z),Z}function ft(B=at){const x=fe.get(B);if(!x&&B===at&&i.getDefaultAppConfig())return en();if(!x)throw _e.create("no-app",{appName:B});return x}function Ht(){return Array.from(fe.values())}async function Qe(B){let x=!1;const H=B.name;fe.has(H)?(x=!0,fe.delete(H)):Be.has(H)&&B.decRefCount()<=0&&(Be.delete(H),x=!0),x&&(await Promise.all(B.container.getProviders().map(b=>b.delete())),B.isDeleted=!0)}function Pt(B,x,H){var b;let v=(b=ge[B])!==null&&b!==void 0?b:B;H&&(v+=`-${H}`);const T=v.match(/\s|\//),C=x.match(/\s|\//);if(T||C){const k=[`Unable to register library "${v}" with version "${x}":`];T&&k.push(`library name "${v}" contains illegal characters (whitespace or "/")`),T&&C&&k.push("and"),C&&k.push(`version name "${x}" contains illegal characters (whitespace or "/")`),m.warn(k.join(" "));return}X(new t.Component(`${v}-version`,()=>({library:v,version:x}),"VERSION"))}function dn(B,x){if(B!==null&&typeof B!="function")throw _e.create("invalid-log-argument");r.setUserLogHandler(B,x)}function Vt(B){r.setLogLevel(B)}/**
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
 */const kt="firebase-heartbeat-database",fn=1,Ct="firebase-heartbeat-store";let Ge=null;function yt(){return Ge||(Ge=a.openDB(kt,fn,{upgrade:(B,x)=>{switch(x){case 0:try{B.createObjectStore(Ct)}catch(H){console.warn(H)}}}}).catch(B=>{throw _e.create("idb-open",{originalErrorMessage:B.message})})),Ge}async function kn(B){try{const H=(await yt()).transaction(Ct),b=await H.objectStore(Ct).get(nt(B));return await H.done,b}catch(x){if(x instanceof i.FirebaseError)m.warn(x.message);else{const H=_e.create("idb-get",{originalErrorMessage:x==null?void 0:x.message});m.warn(H.message)}}}async function tt(B,x){try{const b=(await yt()).transaction(Ct,"readwrite");await b.objectStore(Ct).put(x,nt(B)),await b.done}catch(H){if(H instanceof i.FirebaseError)m.warn(H.message);else{const b=_e.create("idb-set",{originalErrorMessage:H==null?void 0:H.message});m.warn(b.message)}}}function nt(B){return`${B.name}!${B.options.appId}`}/**
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
 */const rt=1024,Fe=30;class Ke{constructor(x){this.container=x,this._heartbeatsCache=null;const H=this.container.getProvider("app").getImmediate();this._storage=new Ot(H),this._heartbeatsCachePromise=this._storage.read().then(b=>(this._heartbeatsCache=b,b))}async triggerHeartbeat(){var x,H;try{const v=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),T=tn();if(((x=this._heartbeatsCache)===null||x===void 0?void 0:x.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((H=this._heartbeatsCache)===null||H===void 0?void 0:H.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===T||this._heartbeatsCache.heartbeats.some(C=>C.date===T))return;if(this._heartbeatsCache.heartbeats.push({date:T,agent:v}),this._heartbeatsCache.heartbeats.length>Fe){const C=$t(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(C,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(b){m.warn(b)}}async getHeartbeatsHeader(){var x;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((x=this._heartbeatsCache)===null||x===void 0?void 0:x.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const H=tn(),{heartbeatsToSend:b,unsentEntries:v}=ht(this._heartbeatsCache.heartbeats),T=i.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:b}));return this._heartbeatsCache.lastSentHeartbeatDate=H,v.length>0?(this._heartbeatsCache.heartbeats=v,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),T}catch(H){return m.warn(H),""}}}function tn(){return new Date().toISOString().substring(0,10)}function ht(B,x=rt){const H=[];let b=B.slice();for(const v of B){const T=H.find(C=>C.agent===v.agent);if(T){if(T.dates.push(v.date),lt(H)>x){T.dates.pop();break}}else if(H.push({agent:v.agent,dates:[v.date]}),lt(H)>x){H.pop();break}b=b.slice(1)}return{heartbeatsToSend:H,unsentEntries:b}}class Ot{constructor(x){this.app=x,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i.isIndexedDBAvailable()?i.validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const H=await kn(this.app);return H!=null&&H.heartbeats?H:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(x){var H;if(await this._canUseIndexedDBPromise){const v=await this.read();return tt(this.app,{lastSentHeartbeatDate:(H=x.lastSentHeartbeatDate)!==null&&H!==void 0?H:v.lastSentHeartbeatDate,heartbeats:x.heartbeats})}else return}async add(x){var H;if(await this._canUseIndexedDBPromise){const v=await this.read();return tt(this.app,{lastSentHeartbeatDate:(H=x.lastSentHeartbeatDate)!==null&&H!==void 0?H:v.lastSentHeartbeatDate,heartbeats:[...v.heartbeats,...x.heartbeats]})}else return}}function lt(B){return i.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:B})).length}function $t(B){if(B.length===0)return-1;let x=0,H=B[0].date;for(let b=1;b<B.length;b++)B[b].date<H&&(H=B[b].date,x=b);return x}/**
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
 */function hn(B){X(new t.Component("platform-logger",x=>new c(x),"PRIVATE")),X(new t.Component("heartbeat",x=>new Ke(x),"PRIVATE")),Pt(p,g,B),Pt(p,g,"cjs2017"),Pt("fire-js","")}hn("node"),Object.defineProperty(e,"FirebaseError",{enumerable:!0,get:function(){return i.FirebaseError}}),e.SDK_VERSION=Pn,e._DEFAULT_ENTRY_NAME=at,e._addComponent=Pe,e._addOrOverwriteComponent=M,e._apps=fe,e._clearComponents=pe,e._components=Ce,e._getProvider=K,e._isFirebaseApp=me,e._isFirebaseServerApp=Ee,e._registerComponent=X,e._removeServiceInstance=te,e._serverApps=Be,e.deleteApp=Qe,e.getApp=ft,e.getApps=Ht,e.initializeApp=en,e.initializeServerApp=Ve,e.onLog=dn,e.registerVersion=Pt,e.setLogLevel=Vt}(Hs)),Hs}var wo=function(e,t){return wo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},wo(e,t)};function Ru(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");wo(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Ei=function(){return Ei=Object.assign||function(t){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},Ei.apply(this,arguments)};function Pu(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]]);return r}function ku(e,t,r,i){var a=arguments.length,c=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(e,t,r,i);else for(var p=e.length-1;p>=0;p--)(u=e[p])&&(c=(a<3?u(c):a>3?u(t,r,c):u(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}function Cu(e,t){return function(r,i){t(r,i,e)}}function Ou(e,t,r,i,a,c){function u(j){if(j!==void 0&&typeof j!="function")throw new TypeError("Function expected");return j}for(var p=i.kind,g=p==="getter"?"get":p==="setter"?"set":"value",m=!t&&e?i.static?e:e.prototype:null,_=t||(m?Object.getOwnPropertyDescriptor(m,i.name):{}),A,I=!1,S=r.length-1;S>=0;S--){var U={};for(var G in i)U[G]=G==="access"?{}:i[G];for(var G in i.access)U.access[G]=i.access[G];U.addInitializer=function(j){if(I)throw new TypeError("Cannot add initializers after decoration has completed");c.push(u(j||null))};var W=(0,r[S])(p==="accessor"?{get:_.get,set:_.set}:_[g],U);if(p==="accessor"){if(W===void 0)continue;if(W===null||typeof W!="object")throw new TypeError("Object expected");(A=u(W.get))&&(_.get=A),(A=u(W.set))&&(_.set=A),(A=u(W.init))&&a.unshift(A)}else(A=u(W))&&(p==="field"?a.unshift(A):_[g]=A)}m&&Object.defineProperty(m,i.name,_),I=!0}function Nu(e,t,r){for(var i=arguments.length>2,a=0;a<t.length;a++)r=i?t[a].call(e,r):t[a].call(e);return i?r:void 0}function Lu(e){return typeof e=="symbol"?e:"".concat(e)}function Du(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function Mu(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function Uu(e,t,r,i){function a(c){return c instanceof r?c:new r(function(u){u(c)})}return new(r||(r=Promise))(function(c,u){function p(_){try{m(i.next(_))}catch(A){u(A)}}function g(_){try{m(i.throw(_))}catch(A){u(A)}}function m(_){_.done?c(_.value):a(_.value).then(p,g)}m((i=i.apply(e,t||[])).next())})}function xu(e,t){var r={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,a,c,u=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return u.next=p(0),u.throw=p(1),u.return=p(2),typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function p(m){return function(_){return g([m,_])}}function g(m){if(i)throw new TypeError("Generator is already executing.");for(;u&&(u=0,m[0]&&(r=0)),r;)try{if(i=1,a&&(c=m[0]&2?a.return:m[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,m[1])).done)return c;switch(a=0,c&&(m=[m[0]&2,c.value]),m[0]){case 0:case 1:c=m;break;case 4:return r.label++,{value:m[1],done:!1};case 5:r.label++,a=m[1],m=[0];continue;case 7:m=r.ops.pop(),r.trys.pop();continue;default:if(c=r.trys,!(c=c.length>0&&c[c.length-1])&&(m[0]===6||m[0]===2)){r=0;continue}if(m[0]===3&&(!c||m[1]>c[0]&&m[1]<c[3])){r.label=m[1];break}if(m[0]===6&&r.label<c[1]){r.label=c[1],c=m;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(m);break}c[2]&&r.ops.pop(),r.trys.pop();continue}m=t.call(e,r)}catch(_){m=[6,_],a=0}finally{i=c=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}var Ni=Object.create?function(e,t,r,i){i===void 0&&(i=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,a)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]};function Fu(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ni(t,e,r)}function Ii(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function na(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var i=r.call(e),a,c=[],u;try{for(;(t===void 0||t-- >0)&&!(a=i.next()).done;)c.push(a.value)}catch(p){u={error:p}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(u)throw u.error}}return c}function ju(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(na(arguments[t]));return e}function Hu(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var i=Array(e),a=0,t=0;t<r;t++)for(var c=arguments[t],u=0,p=c.length;u<p;u++,a++)i[a]=c[u];return i}function Vu(e,t,r){if(r||arguments.length===2)for(var i=0,a=t.length,c;i<a;i++)(c||!(i in t))&&(c||(c=Array.prototype.slice.call(t,0,i)),c[i]=t[i]);return e.concat(c||Array.prototype.slice.call(t))}function ir(e){return this instanceof ir?(this.v=e,this):new ir(e)}function $u(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=r.apply(e,t||[]),a,c=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),p("next"),p("throw"),p("return",u),a[Symbol.asyncIterator]=function(){return this},a;function u(S){return function(U){return Promise.resolve(U).then(S,A)}}function p(S,U){i[S]&&(a[S]=function(G){return new Promise(function(W,j){c.push([S,G,W,j])>1||g(S,G)})},U&&(a[S]=U(a[S])))}function g(S,U){try{m(i[S](U))}catch(G){I(c[0][3],G)}}function m(S){S.value instanceof ir?Promise.resolve(S.value.v).then(_,A):I(c[0][2],S)}function _(S){g("next",S)}function A(S){g("throw",S)}function I(S,U){S(U),c.shift(),c.length&&g(c[0][0],c[0][1])}}function Wu(e){var t,r;return t={},i("next"),i("throw",function(a){throw a}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(a,c){t[a]=e[a]?function(u){return(r=!r)?{value:ir(e[a](u)),done:!1}:c?c(u):u}:c}}function Bu(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof Ii=="function"?Ii(e):e[Symbol.iterator](),r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r);function i(c){r[c]=e[c]&&function(u){return new Promise(function(p,g){u=e[c](u),a(p,g,u.done,u.value)})}}function a(c,u,p,g){Promise.resolve(g).then(function(m){c({value:m,done:p})},u)}}function zu(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var py=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},To=function(e){return To=Object.getOwnPropertyNames||function(t){var r=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[r.length]=i);return r},To(e)};function qu(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r=To(e),i=0;i<r.length;i++)r[i]!=="default"&&Ni(t,e,r[i]);return py(t,e),t}function Gu(e){return e&&e.__esModule?e:{default:e}}function Ku(e,t,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(e):i?i.value:t.get(e)}function Yu(e,t,r,i,a){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?a.call(e,r):a?a.value=r:t.set(e,r),r}function Xu(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function Ju(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var i,a;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=t[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=t[Symbol.dispose],r&&(a=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");a&&(i=function(){try{a.call(this)}catch(c){return Promise.reject(c)}}),e.stack.push({value:t,dispose:i,async:r})}else r&&e.stack.push({async:!0});return t}var my=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var i=new Error(r);return i.name="SuppressedError",i.error=e,i.suppressed=t,i};function Qu(e){function t(c){e.error=e.hasError?new my(c,e.error,"An error was suppressed during disposal."):c,e.hasError=!0}var r,i=0;function a(){for(;r=e.stack.pop();)try{if(!r.async&&i===1)return i=0,e.stack.push(r),Promise.resolve().then(a);if(r.dispose){var c=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(c).then(a,function(u){return t(u),a()})}else i|=1}catch(u){t(u)}if(i===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return a()}function Zu(e,t){return typeof e=="string"&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(r,i,a,c,u){return i?t?".jsx":".js":a&&(!c||!u)?r:a+c+"."+u.toLowerCase()+"js"}):e}const gy={__extends:Ru,__assign:Ei,__rest:Pu,__decorate:ku,__param:Cu,__esDecorate:Ou,__runInitializers:Nu,__propKey:Lu,__setFunctionName:Du,__metadata:Mu,__awaiter:Uu,__generator:xu,__createBinding:Ni,__exportStar:Fu,__values:Ii,__read:na,__spread:ju,__spreadArrays:Hu,__spreadArray:Vu,__await:ir,__asyncGenerator:$u,__asyncDelegator:Wu,__asyncValues:Bu,__makeTemplateObject:zu,__importStar:qu,__importDefault:Gu,__classPrivateFieldGet:Ku,__classPrivateFieldSet:Yu,__classPrivateFieldIn:Xu,__addDisposableResource:Ju,__disposeResources:Qu,__rewriteRelativeImportExtension:Zu},_y=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Ju,get __assign(){return Ei},__asyncDelegator:Wu,__asyncGenerator:$u,__asyncValues:Bu,__await:ir,__awaiter:Uu,__classPrivateFieldGet:Ku,__classPrivateFieldIn:Xu,__classPrivateFieldSet:Yu,__createBinding:Ni,__decorate:ku,__disposeResources:Qu,__esDecorate:Ou,__exportStar:Fu,__extends:Ru,__generator:xu,__importDefault:Gu,__importStar:qu,__makeTemplateObject:zu,__metadata:Mu,__param:Cu,__propKey:Lu,__read:na,__rest:Pu,__rewriteRelativeImportExtension:Zu,__runInitializers:Nu,__setFunctionName:Du,__spread:ju,__spreadArray:Vu,__spreadArrays:Hu,__values:Ii,default:gy},Symbol.toStringTag,{value:"Module"})),yy=Ol(_y);var Gc;function vy(){if(Gc)return F;Gc=1;var e=Oi(),t=Dr(),r=ea(),i=yy,a=Ci();/**
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
 */const c={PHONE:"phone",TOTP:"totp"},u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},p={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},g={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},m={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function _(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function A(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I=_,S=A,U=new t.ErrorFactory("auth","Firebase",A()),G={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const W=new r.Logger("@firebase/auth");function j(o,...n){W.logLevel<=r.LogLevel.WARN&&W.warn(`Auth (${e.SDK_VERSION}): ${o}`,...n)}function Y(o,...n){W.logLevel<=r.LogLevel.ERROR&&W.error(`Auth (${e.SDK_VERSION}): ${o}`,...n)}/**
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
 */function $(o,...n){throw de(o,...n)}function re(o,...n){return de(o,...n)}function se(o,n,s){const l=Object.assign(Object.assign({},S()),{[n]:s});return new t.ErrorFactory("auth","Firebase",l).create(n,{appName:o.name})}function oe(o){return se(o,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function le(o,n,s){const l=s;if(!(n instanceof l))throw l.name!==n.constructor.name&&$(o,"argument-error"),se(o,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function de(o,...n){if(typeof o!="string"){const s=n[0],l=[...n.slice(1)];return l[0]&&(l[0].appName=o.name),o._errorFactory.create(s,...l)}return U.create(o,...n)}function L(o,n,...s){if(!o)throw de(n,...s)}function ye(o){const n="INTERNAL ASSERTION FAILED: "+o;throw Y(n),new Error(n)}function Se(o,n){o||ye(n)}/**
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
 */function He(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.href)||""}function Le(){return Ze()==="http:"||Ze()==="https:"}function Ze(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.protocol)||null}/**
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
 */function Re(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Le()||t.isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function et(){if(typeof navigator>"u")return null;const o=navigator;return o.languages&&o.languages[0]||o.language||null}/**
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
 */class Ae{constructor(n,s){this.shortDelay=n,this.longDelay=s,Se(s>n,"Short delay should be less than long delay!"),this.isMobile=t.isMobileCordova()||t.isReactNative()}get(){return Re()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dt(o,n){Se(o.emulator,"Emulator should always be set here");const{url:s}=o.emulator;return n?`${s}${n.startsWith("/")?n.slice(1):n}`:s}/**
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
 */class At{static initialize(n,s,l){this.fetchImpl=n,s&&(this.headersImpl=s),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const St={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const at=new Ae(3e4,6e4);function ge(o,n){return o.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:o.tenantId}):n}async function fe(o,n,s,l,h={}){return Be(o,h,async()=>{let y={},R={};l&&(n==="GET"?R=l:y={body:JSON.stringify(l)});const O=t.querystring(Object.assign({key:o.config.apiKey},R)).slice(1),D=await o._getAdditionalHeaders();D["Content-Type"]="application/json",o.languageCode&&(D["X-Firebase-Locale"]=o.languageCode);const J=Object.assign({method:n,headers:D},y);return t.isCloudflareWorker()||(J.referrerPolicy="no-referrer"),At.fetch()(Pe(o,o.config.apiHost,s,O),J)})}async function Be(o,n,s){o._canInitEmulator=!1;const l=Object.assign(Object.assign({},St),n);try{const h=new X(o),y=await Promise.race([s(),h.promise]);h.clearNetworkTimeout();const R=await y.json();if("needConfirmation"in R)throw K(o,"account-exists-with-different-credential",R);if(y.ok&&!("errorMessage"in R))return R;{const O=y.ok?R.errorMessage:R.error.message,[D,J]=O.split(" : ");if(D==="FEDERATED_USER_ID_ALREADY_LINKED")throw K(o,"credential-already-in-use",R);if(D==="EMAIL_EXISTS")throw K(o,"email-already-in-use",R);if(D==="USER_DISABLED")throw K(o,"user-disabled",R);const ae=l[D]||D.toLowerCase().replace(/[_\s]+/g,"-");if(J)throw se(o,ae,J);$(o,ae)}}catch(h){if(h instanceof t.FirebaseError)throw h;$(o,"network-request-failed",{message:String(h)})}}async function Ce(o,n,s,l,h={}){const y=await fe(o,n,s,l,h);return"mfaPendingCredential"in y&&$(o,"multi-factor-auth-required",{_serverResponse:y}),y}function Pe(o,n,s,l){const h=`${n}${s}?${l}`;return o.config.emulator?dt(o.config,h):`${o.config.apiScheme}://${h}`}function M(o){switch(o){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((s,l)=>{this.timer=setTimeout(()=>l(re(this.auth,"network-request-failed")),at.get())})}}function K(o,n,s){const l={appName:o.name};s.email&&(l.email=s.email),s.phoneNumber&&(l.phoneNumber=s.phoneNumber);const h=re(o,n,l);return h.customData._tokenResponse=s,h}/**
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
 */function te(o){return o!==void 0&&o.getResponse!==void 0}function me(o){return o!==void 0&&o.enterprise!==void 0}class Ee{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const s of this.recaptchaEnforcementState)if(s.provider&&s.provider===n)return M(s.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function pe(o){return(await fe(o,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ce(o,n){return fe(o,"GET","/v2/recaptchaConfig",ge(o,n))}/**
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
 */async function _e(o,n){return fe(o,"POST","/v1/accounts:delete",n)}async function ct(o,n){return fe(o,"POST","/v1/accounts:update",n)}async function De(o,n){return fe(o,"POST","/v1/accounts:lookup",n)}/**
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
 */function Rt(o){if(o)try{const n=new Date(Number(o));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}/**
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
 */function Pn(o,n=!1){return t.getModularInstance(o).getIdToken(n)}async function en(o,n=!1){const s=t.getModularInstance(o),l=await s.getIdToken(n),h=ft(l);L(h&&h.exp&&h.auth_time&&h.iat,s.auth,"internal-error");const y=typeof h.firebase=="object"?h.firebase:void 0,R=y==null?void 0:y.sign_in_provider;return{claims:h,token:l,authTime:Rt(Ve(h.auth_time)),issuedAtTime:Rt(Ve(h.iat)),expirationTime:Rt(Ve(h.exp)),signInProvider:R||null,signInSecondFactor:(y==null?void 0:y.sign_in_second_factor)||null}}function Ve(o){return Number(o)*1e3}function ft(o){const[n,s,l]=o.split(".");if(n===void 0||s===void 0||l===void 0)return Y("JWT malformed, contained fewer than 3 sections"),null;try{const h=t.base64Decode(s);return h?JSON.parse(h):(Y("Failed to decode base64 JWT payload"),null)}catch(h){return Y("Caught error parsing JWT payload as JSON",h==null?void 0:h.toString()),null}}function Ht(o){const n=ft(o);return L(n,"internal-error"),L(typeof n.exp<"u","internal-error"),L(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function Qe(o,n,s=!1){if(s)return n;try{return await n}catch(l){throw l instanceof t.FirebaseError&&Pt(l)&&o.auth.currentUser===o&&await o.auth.signOut(),l}}function Pt({code:o}){return o==="auth/user-disabled"||o==="auth/user-token-expired"}/**
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
 */class dn{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){var s;if(n){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const h=((s=this.user.stsTokenManager.expirationTime)!==null&&s!==void 0?s:0)-Date.now()-3e5;return Math.max(0,h)}}schedule(n=!1){if(!this.isRunning)return;const s=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vt{constructor(n,s){this.createdAt=n,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rt(this.lastLoginAt),this.creationTime=Rt(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kt(o){var n;const s=o.auth,l=await o.getIdToken(),h=await Qe(o,De(s,{idToken:l}));L(h==null?void 0:h.users.length,s,"internal-error");const y=h.users[0];o._notifyReloadListener(y);const R=!((n=y.providerUserInfo)===null||n===void 0)&&n.length?Ge(y.providerUserInfo):[],O=Ct(o.providerData,R),D=o.isAnonymous,J=!(o.email&&y.passwordHash)&&!(O!=null&&O.length),ae=D?J:!1,be={uid:y.localId,displayName:y.displayName||null,photoURL:y.photoUrl||null,email:y.email||null,emailVerified:y.emailVerified||!1,phoneNumber:y.phoneNumber||null,tenantId:y.tenantId||null,providerData:O,metadata:new Vt(y.createdAt,y.lastLoginAt),isAnonymous:ae};Object.assign(o,be)}async function fn(o){const n=t.getModularInstance(o);await kt(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function Ct(o,n){return[...o.filter(l=>!n.some(h=>h.providerId===l.providerId)),...n]}function Ge(o){return o.map(n=>{var{providerId:s}=n,l=i.__rest(n,["providerId"]);return{providerId:s,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
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
 */async function yt(o,n){const s=await Be(o,{},async()=>{const l=t.querystring({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:h,apiKey:y}=o.config,R=Pe(o,h,"/v1/token",`key=${y}`),O=await o._getAdditionalHeaders();return O["Content-Type"]="application/x-www-form-urlencoded",At.fetch()(R,{method:"POST",headers:O,body:l})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function kn(o,n){return fe(o,"POST","/v2/accounts:revokeToken",ge(o,n))}/**
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
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){L(n.idToken,"internal-error"),L(typeof n.idToken<"u","internal-error"),L(typeof n.refreshToken<"u","internal-error");const s="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):Ht(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,s)}updateFromIdToken(n){L(n.length!==0,"internal-error");const s=Ht(n);this.updateTokensAndExpiration(n,null,s)}async getToken(n,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,s){const{accessToken:l,refreshToken:h,expiresIn:y}=await yt(n,s);this.updateTokensAndExpiration(l,h,Number(y))}updateTokensAndExpiration(n,s,l){this.refreshToken=s||null,this.accessToken=n||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(n,s){const{refreshToken:l,accessToken:h,expirationTime:y}=s,R=new tt;return l&&(L(typeof l=="string","internal-error",{appName:n}),R.refreshToken=l),h&&(L(typeof h=="string","internal-error",{appName:n}),R.accessToken=h),y&&(L(typeof y=="number","internal-error",{appName:n}),R.expirationTime=y),R}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function nt(o,n){L(typeof o=="string"||typeof o>"u","internal-error",{appName:n})}class rt{constructor(n){var{uid:s,auth:l,stsTokenManager:h}=n,y=i.__rest(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=s,this.auth=l,this.stsTokenManager=h,this.accessToken=h.accessToken,this.displayName=y.displayName||null,this.email=y.email||null,this.emailVerified=y.emailVerified||!1,this.phoneNumber=y.phoneNumber||null,this.photoURL=y.photoURL||null,this.isAnonymous=y.isAnonymous||!1,this.tenantId=y.tenantId||null,this.providerData=y.providerData?[...y.providerData]:[],this.metadata=new Vt(y.createdAt||void 0,y.lastLoginAt||void 0)}async getIdToken(n){const s=await Qe(this,this.stsTokenManager.getToken(this.auth,n));return L(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(n){return en(this,n)}reload(){return fn(this)}_assign(n){this!==n&&(L(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(s=>Object.assign({},s)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const s=new rt(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return s.metadata._copy(this.metadata),s}_onReload(n){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,s=!1){let l=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),l=!0),s&&await kt(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(e._isFirebaseServerApp(this.auth.app))return Promise.reject(oe(this.auth));const n=await this.getIdToken();return await Qe(this,_e(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,s){var l,h,y,R,O,D,J,ae;const be=(l=s.displayName)!==null&&l!==void 0?l:void 0,ot=(h=s.email)!==null&&h!==void 0?h:void 0,Kn=(y=s.phoneNumber)!==null&&y!==void 0?y:void 0,ei=(R=s.photoURL)!==null&&R!==void 0?R:void 0,Ka=(O=s.tenantId)!==null&&O!==void 0?O:void 0,As=(D=s._redirectEventId)!==null&&D!==void 0?D:void 0,Ya=(J=s.createdAt)!==null&&J!==void 0?J:void 0,Xa=(ae=s.lastLoginAt)!==null&&ae!==void 0?ae:void 0,{uid:Ss,emailVerified:Ja,isAnonymous:Qa,providerData:Rs,stsTokenManager:Za}=s;L(Ss&&Za,n,"internal-error");const Bh=tt.fromJSON(this.name,Za);L(typeof Ss=="string",n,"internal-error"),nt(be,n.name),nt(ot,n.name),L(typeof Ja=="boolean",n,"internal-error"),L(typeof Qa=="boolean",n,"internal-error"),nt(Kn,n.name),nt(ei,n.name),nt(Ka,n.name),nt(As,n.name),nt(Ya,n.name),nt(Xa,n.name);const Ps=new rt({uid:Ss,auth:n,email:ot,emailVerified:Ja,displayName:be,isAnonymous:Qa,photoURL:ei,phoneNumber:Kn,tenantId:Ka,stsTokenManager:Bh,createdAt:Ya,lastLoginAt:Xa});return Rs&&Array.isArray(Rs)&&(Ps.providerData=Rs.map(zh=>Object.assign({},zh))),As&&(Ps._redirectEventId=As),Ps}static async _fromIdTokenResponse(n,s,l=!1){const h=new tt;h.updateFromServerResponse(s);const y=new rt({uid:s.localId,auth:n,stsTokenManager:h,isAnonymous:l});return await kt(y),y}static async _fromGetAccountInfoResponse(n,s,l){const h=s.users[0];L(h.localId!==void 0,"internal-error");const y=h.providerUserInfo!==void 0?Ge(h.providerUserInfo):[],R=!(h.email&&h.passwordHash)&&!(y!=null&&y.length),O=new tt;O.updateFromIdToken(l);const D=new rt({uid:h.localId,auth:n,stsTokenManager:O,isAnonymous:R}),J={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:y,metadata:new Vt(h.createdAt,h.lastLoginAt),isAnonymous:!(h.email&&h.passwordHash)&&!(y!=null&&y.length)};return Object.assign(D,J),D}}/**
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
 */const Fe=new Map;function Ke(o){Se(o instanceof Function,"Expected a class definition");let n=Fe.get(o);return n?(Se(n instanceof o,"Instance stored in cache mismatched with class"),n):(n=new o,Fe.set(o,n),n)}/**
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
 */class tn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,s){this.storage[n]=s}async _get(n){const s=this.storage[n];return s===void 0?null:s}async _remove(n){delete this.storage[n]}_addListener(n,s){}_removeListener(n,s){}}tn.type="NONE";const ht=tn;/**
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
 */function Ot(o,n,s){return`firebase:${o}:${n}:${s}`}class lt{constructor(n,s,l){this.persistence=n,this.auth=s,this.userKey=l;const{config:h,name:y}=this.auth;this.fullUserKey=Ot(this.userKey,h.apiKey,y),this.fullPersistenceKey=Ot("persistence",h.apiKey,y),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);return n?rt._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,s,l="authUser"){if(!s.length)return new lt(Ke(ht),n,l);const h=(await Promise.all(s.map(async J=>{if(await J._isAvailable())return J}))).filter(J=>J);let y=h[0]||Ke(ht);const R=Ot(l,n.config.apiKey,n.name);let O=null;for(const J of s)try{const ae=await J._get(R);if(ae){const be=rt._fromJSON(n,ae);J!==y&&(O=be),y=J;break}}catch{}const D=h.filter(J=>J._shouldAllowMigration);return!y._shouldAllowMigration||!D.length?new lt(y,n,l):(y=D[0],O&&await y._set(R,O.toJSON()),await Promise.all(s.map(async J=>{if(J!==y)try{await J._remove(R)}catch{}})),new lt(y,n,l))}}/**
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
 */function $t(o){const n=o.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(H(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(hn(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(v(n))return"Blackberry";if(T(n))return"Webos";if(B(n))return"Safari";if((n.includes("chrome/")||x(n))&&!n.includes("edge/"))return"Chrome";if(b(n))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=o.match(s);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function hn(o=t.getUA()){return/firefox\//i.test(o)}function B(o=t.getUA()){const n=o.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function x(o=t.getUA()){return/crios\//i.test(o)}function H(o=t.getUA()){return/iemobile/i.test(o)}function b(o=t.getUA()){return/android/i.test(o)}function v(o=t.getUA()){return/blackberry/i.test(o)}function T(o=t.getUA()){return/webos/i.test(o)}function C(o=t.getUA()){return/iphone|ipad|ipod/i.test(o)||/macintosh/i.test(o)&&/mobile/i.test(o)}function k(o=t.getUA()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(o)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(o)}function Z(o=t.getUA()){var n;return C(o)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function ue(){return t.isIE()&&document.documentMode===10}function we(o=t.getUA()){return C(o)||b(o)||T(o)||v(o)||/windows phone/i.test(o)||H(o)}/**
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
 */function Me(o,n=[]){let s;switch(o){case"Browser":s=$t(t.getUA());break;case"Worker":s=`${$t(t.getUA())}-${o}`;break;default:s=o}const l=n.length?n.join(","):"FirebaseCore-web";return`${s}/JsCore/${e.SDK_VERSION}/${l}`}/**
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
 */class Xe{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,s){const l=y=>new Promise((R,O)=>{try{const D=n(y);R(D)}catch(D){O(D)}});l.onAbort=s,this.queue.push(l);const h=this.queue.length-1;return()=>{this.queue[h]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const s=[];try{for(const l of this.queue)await l(n),l.onAbort&&s.push(l.onAbort)}catch(l){s.reverse();for(const h of s)try{h()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
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
 */async function vt(o,n={}){return fe(o,"GET","/v2/passwordPolicy",ge(o,n))}/**
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
 */const Ie=6;class pt{constructor(n){var s,l,h,y;const R=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=R.minPasswordLength)!==null&&s!==void 0?s:Ie,R.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=R.maxPasswordLength),R.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=R.containsLowercaseCharacter),R.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=R.containsUppercaseCharacter),R.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=R.containsNumericCharacter),R.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=R.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(h=(l=n.allowedNonAlphanumericCharacters)===null||l===void 0?void 0:l.join(""))!==null&&h!==void 0?h:"",this.forceUpgradeOnSignin=(y=n.forceUpgradeOnSignin)!==null&&y!==void 0?y:!1,this.schemaVersion=n.schemaVersion}validatePassword(n){var s,l,h,y,R,O;const D={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,D),this.validatePasswordCharacterOptions(n,D),D.isValid&&(D.isValid=(s=D.meetsMinPasswordLength)!==null&&s!==void 0?s:!0),D.isValid&&(D.isValid=(l=D.meetsMaxPasswordLength)!==null&&l!==void 0?l:!0),D.isValid&&(D.isValid=(h=D.containsLowercaseLetter)!==null&&h!==void 0?h:!0),D.isValid&&(D.isValid=(y=D.containsUppercaseLetter)!==null&&y!==void 0?y:!0),D.isValid&&(D.isValid=(R=D.containsNumericCharacter)!==null&&R!==void 0?R:!0),D.isValid&&(D.isValid=(O=D.containsNonAlphanumericCharacter)!==null&&O!==void 0?O:!0),D}validatePasswordLengthOptions(n,s){const l=this.customStrengthOptions.minPasswordLength,h=this.customStrengthOptions.maxPasswordLength;l&&(s.meetsMinPasswordLength=n.length>=l),h&&(s.meetsMaxPasswordLength=n.length<=h)}validatePasswordCharacterOptions(n,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let l;for(let h=0;h<n.length;h++)l=n.charAt(h),this.updatePasswordCharacterOptionsStatuses(s,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(n,s,l,h,y){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=h)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=y))}}/**
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
 */class nn{constructor(n,s,l,h){this.app=n,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=l,this.config=h,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xr(this),this.idTokenSubscription=new xr(this),this.beforeStateQueue=new Xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=h.sdkClientVersion}_initializeWithPersistence(n,s){return s&&(this._popupRedirectResolver=Ke(s)),this._initializationPromise=this.queue(async()=>{var l,h;if(!this._deleted&&(this.persistenceManager=await lt.create(this,n),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((h=this.currentUser)===null||h===void 0?void 0:h.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const s=await De(this,{idToken:n}),l=await rt._fromGetAccountInfoResponse(this,s,n);await this.directlySetCurrentUser(l)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var s;if(e._isFirebaseServerApp(this.app)){const R=this.app.settings.authIdToken;return R?new Promise(O=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(R).then(O,O))}):this.directlySetCurrentUser(null)}const l=await this.assertedPersistence.getCurrentUser();let h=l,y=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const R=(s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId,O=h==null?void 0:h._redirectEventId,D=await this.tryRedirectSignIn(n);(!R||R===O)&&(D!=null&&D.user)&&(h=D.user,y=!0)}if(!h)return this.directlySetCurrentUser(null);if(!h._redirectEventId){if(y)try{await this.beforeStateQueue.runMiddleware(h)}catch(R){h=l,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(R))}return h?this.reloadAndSetCurrentUserOrClear(h):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===h._redirectEventId?this.directlySetCurrentUser(h):this.reloadAndSetCurrentUserOrClear(h)}async tryRedirectSignIn(n){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(n){try{await kt(n)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=et()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(e._isFirebaseServerApp(this.app))return Promise.reject(oe(this));const s=n?t.getModularInstance(n):null;return s&&L(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(n,s=!1){if(!this._deleted)return n&&L(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return e._isFirebaseServerApp(this.app)?Promise.reject(oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return e._isFirebaseServerApp(this.app)?Promise.reject(oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await vt(this),s=new pt(n);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new t.ErrorFactory("auth","Firebase",n())}onAuthStateChanged(n,s,l){return this.registerStateListener(this.authStateSubscription,n,s,l)}beforeAuthStateChanged(n,s){return this.beforeStateQueue.pushCallback(n,s)}onIdTokenChanged(n,s,l){return this.registerStateListener(this.idTokenSubscription,n,s,l)}authStateReady(){return new Promise((n,s)=>{if(this.currentUser)n();else{const l=this.onAuthStateChanged(()=>{l(),n()},s)}})}async revokeAccessToken(n){if(this.currentUser){const s=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:s};this.tenantId!=null&&(l.tenantId=this.tenantId),await kn(this,l)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,s){const l=await this.getOrInitRedirectPersistenceManager(s);return n===null?l.removeCurrentUser():l.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const s=n&&Ke(n)||this._popupRedirectResolver;L(s,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[Ke(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var s,l;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)===null||s===void 0?void 0:s._redirectEventId)===n?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(s=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&s!==void 0?s:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,s,l,h){if(this._deleted)return()=>{};const y=typeof s=="function"?s:s.next.bind(s);let R=!1;const O=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(O,this,"internal-error"),O.then(()=>{R||y(this.currentUser)}),typeof s=="function"){const D=n.addObserver(s,l,h);return()=>{R=!0,D()}}else{const D=n.addObserver(s);return()=>{R=!0,D()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Me(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const s={"X-Client-Version":this.clientVersion};this.app.options.appId&&(s["X-Firebase-gmpid"]=this.app.options.appId);const l=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());l&&(s["X-Firebase-Client"]=l);const h=await this._getAppCheckToken();return h&&(s["X-Firebase-AppCheck"]=h),s}async _getAppCheckToken(){var n;if(e._isFirebaseServerApp(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const s=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getToken());return s!=null&&s.error&&j(`Error while retrieving App Check token: ${s.error}`),s==null?void 0:s.token}}function ke(o){return t.getModularInstance(o)}class xr{constructor(n){this.auth=n,this.observer=null,this.addObserver=t.createSubscribe(s=>this.observer=s)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fr(o){pn=o}function mn(o){return pn.loadJS(o)}function ar(){return pn.recaptchaV2Script}function Fi(){return pn.recaptchaEnterpriseScript}function ji(){return pn.gapiScript}function cr(o){return`__${o}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Hi=500,Vi=6e4,ze=1e12;class lr{constructor(n){this.auth=n,this.counter=ze,this._widgets=new Map}render(n,s){const l=this.counter;return this._widgets.set(l,new ur(n,this.auth.name,s||{})),this.counter++,l}reset(n){var s;const l=n||ze;(s=this._widgets.get(l))===null||s===void 0||s.delete(),this._widgets.delete(l)}getResponse(n){var s;const l=n||ze;return((s=this._widgets.get(l))===null||s===void 0?void 0:s.getResponse())||""}async execute(n){var s;const l=n||ze;return(s=this._widgets.get(l))===null||s===void 0||s.execute(),""}}class $i{constructor(){this.enterprise=new gn}ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}class gn{ready(n){n()}execute(n,s){return Promise.resolve("token")}render(n,s){return""}}class ur{constructor(n,s,l){this.params=l,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const h=typeof n=="string"?document.getElementById(n):n;L(h,"argument-error",{appName:s}),this.container=h,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Wi(50);const{callback:n,"expired-callback":s}=this.params;if(n)try{n(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,s)try{s()}catch{}this.isVisible&&this.execute()},Vi)},Hi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Wi(o){const n=[],s="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let l=0;l<o;l++)n.push(s.charAt(Math.floor(Math.random()*s.length)));return n.join("")}const mt="recaptcha-enterprise",Cn="NO_RECAPTCHA";class jr{constructor(n){this.type=mt,this.auth=ke(n)}async verify(n="verify",s=!1){async function l(y){if(!s){if(y.tenantId==null&&y._agentRecaptchaConfig!=null)return y._agentRecaptchaConfig.siteKey;if(y.tenantId!=null&&y._tenantRecaptchaConfigs[y.tenantId]!==void 0)return y._tenantRecaptchaConfigs[y.tenantId].siteKey}return new Promise(async(R,O)=>{ce(y,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(D=>{if(D.recaptchaKey===void 0)O(new Error("recaptcha Enterprise site key undefined"));else{const J=new Ee(D);return y.tenantId==null?y._agentRecaptchaConfig=J:y._tenantRecaptchaConfigs[y.tenantId]=J,R(J.siteKey)}}).catch(D=>{O(D)})})}function h(y,R,O){const D=window.grecaptcha;me(D)?D.enterprise.ready(()=>{D.enterprise.execute(y,{action:n}).then(J=>{R(J)}).catch(()=>{R(Cn)})}):O(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $i().execute("siteKey",{action:"verify"}):new Promise((y,R)=>{l(this.auth).then(O=>{if(!s&&me(window.grecaptcha))h(O,y,R);else{if(typeof window>"u"){R(new Error("RecaptchaVerifier is only supported in browser"));return}let D=Fi();D.length!==0&&(D+=O),mn(D).then(()=>{h(O,y,R)}).catch(J=>{R(J)})}}).catch(O=>{R(O)})})}}async function On(o,n,s,l=!1,h=!1){const y=new jr(o);let R;if(h)R=Cn;else try{R=await y.verify(s)}catch{R=await y.verify(s,!0)}const O=Object.assign({},n);if(s==="mfaSmsEnrollment"||s==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in O){const D=O.phoneEnrollmentInfo.phoneNumber,J=O.phoneEnrollmentInfo.recaptchaToken;Object.assign(O,{phoneEnrollmentInfo:{phoneNumber:D,recaptchaToken:J,captchaResponse:R,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in O){const D=O.phoneSignInInfo.recaptchaToken;Object.assign(O,{phoneSignInInfo:{recaptchaToken:D,captchaResponse:R,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return O}return l?Object.assign(O,{captchaResp:R}):Object.assign(O,{captchaResponse:R}),Object.assign(O,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(O,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),O}async function Wt(o,n,s,l,h){var y,R;if(h==="EMAIL_PASSWORD_PROVIDER")if(!((y=o._getRecaptchaConfig())===null||y===void 0)&&y.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const O=await On(o,n,s,s==="getOobCode");return l(o,O)}else return l(o,n).catch(async O=>{if(O.code==="auth/missing-recaptcha-token"){console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const D=await On(o,n,s,s==="getOobCode");return l(o,D)}else return Promise.reject(O)});else if(h==="PHONE_PROVIDER")if(!((R=o._getRecaptchaConfig())===null||R===void 0)&&R.isProviderEnabled("PHONE_PROVIDER")){const O=await On(o,n,s);return l(o,O).catch(async D=>{var J;if(((J=o._getRecaptchaConfig())===null||J===void 0?void 0:J.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(D.code==="auth/missing-recaptcha-token"||D.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${s} flow.`);const ae=await On(o,n,s,!1,!0);return l(o,ae)}return Promise.reject(D)})}else{const O=await On(o,n,s,!1,!0);return l(o,O)}else return Promise.reject(h+" provider is not supported.")}async function dr(o){const n=ke(o),s=await ce(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),l=new Ee(s);n.tenantId==null?n._agentRecaptchaConfig=l:n._tenantRecaptchaConfigs[n.tenantId]=l,l.isAnyProviderEnabled()&&new jr(n).verify()}/**
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
 */function Bt(o,n){const s=e._getProvider(o,"auth");if(s.isInitialized()){const h=s.getImmediate(),y=s.getOptions();if(t.deepEqual(y,n??{}))return h;$(h,"already-initialized")}return s.initialize({options:n})}function Bi(o,n){const s=(n==null?void 0:n.persistence)||[],l=(Array.isArray(s)?s:[s]).map(Ke);n!=null&&n.errorMap&&o._updateErrorMap(n.errorMap),o._initializeWithPersistence(l,n==null?void 0:n.popupRedirectResolver)}function Hr(o,n,s){const l=ke(o);L(l._canInitEmulator,l,"emulator-config-failed"),L(/^https?:\/\//.test(n),l,"invalid-emulator-scheme");const h=!!(s!=null&&s.disableWarnings),y=fr(n),{host:R,port:O}=zi(n),D=O===null?"":`:${O}`;l.config.emulator={url:`${y}//${R}${D}/`},l.settings.appVerificationDisabledForTesting=!0,l.emulatorConfig=Object.freeze({host:R,port:O,protocol:y.replace(":",""),options:Object.freeze({disableWarnings:h})}),h||qi()}function fr(o){const n=o.indexOf(":");return n<0?"":o.substr(0,n+1)}function zi(o){const n=fr(o),s=/(\/\/)?([^?#/]+)/.exec(o.substr(n.length));if(!s)return{host:"",port:null};const l=s[2].split("@").pop()||"",h=/^(\[[^\]]+\])(:|$)/.exec(l);if(h){const y=h[1];return{host:y,port:Vr(l.substr(y.length+1))}}else{const[y,R]=l.split(":");return{host:y,port:Vr(R)}}}function Vr(o){if(!o)return null;const n=Number(o);return isNaN(n)?null:n}function qi(){function o(){const n=document.createElement("p"),s=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",o):o())}/**
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
 */class rn{constructor(n,s){this.providerId=n,this.signInMethod=s}toJSON(){return ye("not implemented")}_getIdTokenResponse(n){return ye("not implemented")}_linkToIdToken(n,s){return ye("not implemented")}_getReauthenticationResolver(n){return ye("not implemented")}}/**
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
 */async function hr(o,n){return fe(o,"POST","/v1/accounts:resetPassword",ge(o,n))}async function Gi(o,n){return fe(o,"POST","/v1/accounts:update",n)}async function Ki(o,n){return fe(o,"POST","/v1/accounts:signUp",n)}async function Yi(o,n){return fe(o,"POST","/v1/accounts:update",ge(o,n))}/**
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
 */async function Xi(o,n){return Ce(o,"POST","/v1/accounts:signInWithPassword",ge(o,n))}async function Nn(o,n){return fe(o,"POST","/v1/accounts:sendOobCode",ge(o,n))}async function Ji(o,n){return Nn(o,n)}async function Qi(o,n){return Nn(o,n)}async function $r(o,n){return Nn(o,n)}async function Zi(o,n){return Nn(o,n)}/**
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
 */async function Wr(o,n){return Ce(o,"POST","/v1/accounts:signInWithEmailLink",ge(o,n))}async function es(o,n){return Ce(o,"POST","/v1/accounts:signInWithEmailLink",ge(o,n))}/**
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
 */class zt extends rn{constructor(n,s,l,h=null){super("password",l),this._email=n,this._password=s,this._tenantId=h}static _fromEmailAndPassword(n,s){return new zt(n,s,"password")}static _fromEmailAndCode(n,s,l=null){return new zt(n,s,"emailLink",l)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n;if(s!=null&&s.email&&(s!=null&&s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(n,s,"signInWithPassword",Xi,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Wr(n,{email:this._email,oobCode:this._password});default:$(n,"internal-error")}}async _linkToIdToken(n,s){switch(this.signInMethod){case"password":const l={idToken:s,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(n,l,"signUpPassword",Ki,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return es(n,{idToken:s,email:this._email,oobCode:this._password});default:$(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
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
 */async function bt(o,n){return Ce(o,"POST","/v1/accounts:signInWithIdp",ge(o,n))}/**
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
 */const Br="http://localhost";class gt extends rn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const s=new gt(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(s.idToken=n.idToken),n.accessToken&&(s.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(s.nonce=n.nonce),n.pendingToken&&(s.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(s.accessToken=n.oauthToken,s.secret=n.oauthTokenSecret):$("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n,{providerId:l,signInMethod:h}=s,y=i.__rest(s,["providerId","signInMethod"]);if(!l||!h)return null;const R=new gt(l,h);return R.idToken=y.idToken||void 0,R.accessToken=y.accessToken||void 0,R.secret=y.secret,R.nonce=y.nonce,R.pendingToken=y.pendingToken||null,R}_getIdTokenResponse(n){const s=this.buildRequest();return bt(n,s)}_linkToIdToken(n,s){const l=this.buildRequest();return l.idToken=s,bt(n,l)}_getReauthenticationResolver(n){const s=this.buildRequest();return s.autoCreate=!1,bt(n,s)}buildRequest(){const n={requestUri:Br,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),n.postBody=t.querystring(s)}return n}}/**
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
 */async function zr(o,n){return fe(o,"POST","/v1/accounts:sendVerificationCode",ge(o,n))}async function ts(o,n){return Ce(o,"POST","/v1/accounts:signInWithPhoneNumber",ge(o,n))}async function ns(o,n){const s=await Ce(o,"POST","/v1/accounts:signInWithPhoneNumber",ge(o,n));if(s.temporaryProof)throw K(o,"account-exists-with-different-credential",s);return s}const rs={USER_NOT_FOUND:"user-not-found"};async function is(o,n){const s=Object.assign(Object.assign({},n),{operation:"REAUTH"});return Ce(o,"POST","/v1/accounts:signInWithPhoneNumber",ge(o,s),rs)}/**
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
 */class qt extends rn{constructor(n){super("phone","phone"),this.params=n}static _fromVerification(n,s){return new qt({verificationId:n,verificationCode:s})}static _fromTokenResponse(n,s){return new qt({phoneNumber:n,temporaryProof:s})}_getIdTokenResponse(n){return ts(n,this._makeVerificationRequest())}_linkToIdToken(n,s){return ns(n,Object.assign({idToken:s},this._makeVerificationRequest()))}_getReauthenticationResolver(n){return is(n,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:n,phoneNumber:s,verificationId:l,verificationCode:h}=this.params;return n&&s?{temporaryProof:n,phoneNumber:s}:{sessionInfo:l,code:h}}toJSON(){const n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n}static fromJSON(n){typeof n=="string"&&(n=JSON.parse(n));const{verificationId:s,verificationCode:l,phoneNumber:h,temporaryProof:y}=n;return!l&&!s&&!h&&!y?null:new qt({verificationId:s,verificationCode:l,phoneNumber:h,temporaryProof:y})}}/**
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
 */function ss(o){switch(o){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function os(o){const n=t.querystringDecode(t.extractQuerystring(o)).link,s=n?t.querystringDecode(t.extractQuerystring(n)).deep_link_id:null,l=t.querystringDecode(t.extractQuerystring(o)).deep_link_id;return(l?t.querystringDecode(t.extractQuerystring(l)).link:null)||l||s||n||o}class _n{constructor(n){var s,l,h,y,R,O;const D=t.querystringDecode(t.extractQuerystring(n)),J=(s=D.apiKey)!==null&&s!==void 0?s:null,ae=(l=D.oobCode)!==null&&l!==void 0?l:null,be=ss((h=D.mode)!==null&&h!==void 0?h:null);L(J&&ae&&be,"argument-error"),this.apiKey=J,this.operation=be,this.code=ae,this.continueUrl=(y=D.continueUrl)!==null&&y!==void 0?y:null,this.languageCode=(R=D.languageCode)!==null&&R!==void 0?R:null,this.tenantId=(O=D.tenantId)!==null&&O!==void 0?O:null}static parseLink(n){const s=os(n);try{return new _n(s)}catch{return null}}}function as(o){return _n.parseLink(o)}/**
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
 */class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(n,s){return zt._fromEmailAndPassword(n,s)}static credentialWithLink(n,s){const l=_n.parseLink(s);return L(l,"argument-error"),zt._fromEmailAndCode(n,l.code,l.tenantId)}}Gt.PROVIDER_ID="password",Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nt{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yn extends Nt{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}class vn extends yn{static credentialFromJSON(n){const s=typeof n=="string"?JSON.parse(n):n;return L("providerId"in s&&"signInMethod"in s,"argument-error"),gt._fromParams(s)}credential(n){return this._credential(Object.assign(Object.assign({},n),{nonce:n.rawNonce}))}_credential(n){return L(n.idToken||n.accessToken,"argument-error"),gt._fromParams(Object.assign(Object.assign({},n),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(n){return vn.oauthCredentialFromTaggedObject(n)}static credentialFromError(n){return vn.oauthCredentialFromTaggedObject(n.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:s,oauthAccessToken:l,oauthTokenSecret:h,pendingToken:y,nonce:R,providerId:O}=n;if(!l&&!h&&!s&&!y||!O)return null;try{return new vn(O)._credential({idToken:s,accessToken:l,nonce:R,pendingToken:y})}catch{return null}}}/**
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
 */class Lt extends yn{constructor(){super("facebook.com")}static credential(n){return gt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Lt.credentialFromTaggedObject(n)}static credentialFromError(n){return Lt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Lt.credential(n.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Lt.PROVIDER_ID="facebook.com";/**
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
 */class Dt extends yn{constructor(){super("google.com"),this.addScope("profile")}static credential(n,s){return gt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:s})}static credentialFromResult(n){return Dt.credentialFromTaggedObject(n)}static credentialFromError(n){return Dt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:s,oauthAccessToken:l}=n;if(!s&&!l)return null;try{return Dt.credential(s,l)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com",Dt.PROVIDER_ID="google.com";/**
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
 */class Mt extends yn{constructor(){super("github.com")}static credential(n){return gt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Mt.credentialFromTaggedObject(n)}static credentialFromError(n){return Mt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Mt.credential(n.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com",Mt.PROVIDER_ID="github.com";/**
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
 */const cs="http://localhost";class f extends rn{constructor(n,s){super(n,n),this.pendingToken=s}_getIdTokenResponse(n){const s=this.buildRequest();return bt(n,s)}_linkToIdToken(n,s){const l=this.buildRequest();return l.idToken=s,bt(n,l)}_getReauthenticationResolver(n){const s=this.buildRequest();return s.autoCreate=!1,bt(n,s)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(n){const s=typeof n=="string"?JSON.parse(n):n,{providerId:l,signInMethod:h,pendingToken:y}=s;return!l||!h||!y||l!==h?null:new f(l,y)}static _create(n,s){return new f(n,s)}buildRequest(){return{requestUri:cs,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const d="saml.";class E extends Nt{constructor(n){L(n.startsWith(d),"argument-error"),super(n)}static credentialFromResult(n){return E.samlCredentialFromTaggedObject(n)}static credentialFromError(n){return E.samlCredentialFromTaggedObject(n.customData||{})}static credentialFromJSON(n){const s=f.fromJSON(n);return L(s,"argument-error"),s}static samlCredentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{pendingToken:s,providerId:l}=n;if(!s||!l)return null;try{return f._create(l,s)}catch{return null}}}/**
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
 */class w extends yn{constructor(){super("twitter.com")}static credential(n,s){return gt._fromParams({providerId:w.PROVIDER_ID,signInMethod:w.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:s})}static credentialFromResult(n){return w.credentialFromTaggedObject(n)}static credentialFromError(n){return w.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:s,oauthTokenSecret:l}=n;if(!s||!l)return null;try{return w.credential(s,l)}catch{return null}}}w.TWITTER_SIGN_IN_METHOD="twitter.com",w.PROVIDER_ID="twitter.com";/**
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
 */async function P(o,n){return Ce(o,"POST","/v1/accounts:signUp",ge(o,n))}/**
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
 */class N{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,s,l,h=!1){const y=await rt._fromIdTokenResponse(n,l,h),R=z(l);return new N({user:y,providerId:R,_tokenResponse:l,operationType:s})}static async _forOperation(n,s,l){await n._updateTokensIfNecessary(l,!0);const h=z(l);return new N({user:n,providerId:h,_tokenResponse:l,operationType:s})}}function z(o){return o.providerId?o.providerId:"phoneNumber"in o?"phone":null}/**
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
 */async function ne(o){var n;if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const s=ke(o);if(await s._initializationPromise,!((n=s.currentUser)===null||n===void 0)&&n.isAnonymous)return new N({user:s.currentUser,providerId:null,operationType:"signIn"});const l=await P(s,{returnSecureToken:!0}),h=await N._fromIdTokenResponse(s,"signIn",l,!0);return await s._updateCurrentUser(h.user),h}/**
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
 */class ee extends t.FirebaseError{constructor(n,s,l,h){var y;super(s.code,s.message),this.operationType=l,this.user=h,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:n.name,tenantId:(y=n.tenantId)!==null&&y!==void 0?y:void 0,_serverResponse:s.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(n,s,l,h){return new ee(n,s,l,h)}}function he(o,n,s,l){return(n==="reauthenticate"?s._getReauthenticationResolver(o):s._getIdTokenResponse(o)).catch(y=>{throw y.code==="auth/multi-factor-auth-required"?ee._fromErrorAndOperation(o,y,n,l):y})}/**
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
 */function ve(o){return new Set(o.map(({providerId:n})=>n).filter(n=>!!n))}/**
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
 */async function je(o,n){const s=t.getModularInstance(o);await xe(!0,s,n);const{providerUserInfo:l}=await ct(s.auth,{idToken:await s.getIdToken(),deleteProvider:[n]}),h=ve(l||[]);return s.providerData=s.providerData.filter(y=>h.has(y.providerId)),h.has("phone")||(s.phoneNumber=null),await s.auth._persistUserIfCurrent(s),s}async function Ue(o,n,s=!1){const l=await Qe(o,n._linkToIdToken(o.auth,await o.getIdToken()),s);return N._forOperation(o,"link",l)}async function xe(o,n,s){await kt(n);const l=ve(n.providerData),h=o===!1?"provider-already-linked":"no-such-provider";L(l.has(s)===o,n.auth,h)}/**
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
 */async function $e(o,n,s=!1){const{auth:l}=o;if(e._isFirebaseServerApp(l.app))return Promise.reject(oe(l));const h="reauthenticate";try{const y=await Qe(o,he(l,h,n,o),s);L(y.idToken,l,"internal-error");const R=ft(y.idToken);L(R,l,"internal-error");const{sub:O}=R;return L(o.uid===O,l,"user-mismatch"),N._forOperation(o,h,y)}catch(y){throw(y==null?void 0:y.code)==="auth/user-not-found"&&$(l,"user-mismatch"),y}}/**
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
 */async function st(o,n,s=!1){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l="signIn",h=await he(o,l,n),y=await N._fromIdTokenResponse(o,l,h);return s||await o._updateCurrentUser(y.user),y}async function Oe(o,n){return st(ke(o),n)}async function Et(o,n){const s=t.getModularInstance(o);return await xe(!1,s,n.providerId),Ue(s,n)}async function It(o,n){return $e(t.getModularInstance(o),n)}/**
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
 */async function Je(o,n){return Ce(o,"POST","/v1/accounts:signInWithCustomToken",ge(o,n))}/**
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
 */async function Ye(o,n){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const s=ke(o),l=await Je(s,{token:n,returnSecureToken:!0}),h=await N._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(h.user),h}/**
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
 */class wt{constructor(n,s){this.factorId=n,this.uid=s.mfaEnrollmentId,this.enrollmentTime=new Date(s.enrolledAt).toUTCString(),this.displayName=s.displayName}static _fromServerResponse(n,s){return"phoneInfo"in s?Kt._fromServerResponse(n,s):"totpInfo"in s?Ln._fromServerResponse(n,s):$(n,"internal-error")}}class Kt extends wt{constructor(n){super("phone",n),this.phoneNumber=n.phoneInfo}static _fromServerResponse(n,s){return new Kt(s)}}class Ln extends wt{constructor(n){super("totp",n)}static _fromServerResponse(n,s){return new Ln(s)}}/**
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
 */function Yt(o,n,s){var l;L(((l=s.url)===null||l===void 0?void 0:l.length)>0,o,"invalid-continue-uri"),L(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,o,"invalid-dynamic-link-domain"),L(typeof s.linkDomain>"u"||s.linkDomain.length>0,o,"invalid-hosting-link-domain"),n.continueUrl=s.url,n.dynamicLinkDomain=s.dynamicLinkDomain,n.linkDomain=s.linkDomain,n.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(L(s.iOS.bundleId.length>0,o,"missing-ios-bundle-id"),n.iOSBundleId=s.iOS.bundleId),s.android&&(L(s.android.packageName.length>0,o,"missing-android-pkg-name"),n.androidInstallApp=s.android.installApp,n.androidMinimumVersionCode=s.android.minimumVersion,n.androidPackageName=s.android.packageName)}/**
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
 */async function Dn(o){const n=ke(o);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function Ld(o,n,s){const l=ke(o),h={requestType:"PASSWORD_RESET",email:n,clientType:"CLIENT_TYPE_WEB"};s&&Yt(l,h,s),await Wt(l,h,"getOobCode",Qi,"EMAIL_PASSWORD_PROVIDER")}async function Dd(o,n,s){await hr(t.getModularInstance(o),{oobCode:n,newPassword:s}).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dn(o),l})}async function Md(o,n){await Yi(t.getModularInstance(o),{oobCode:n})}async function pa(o,n){const s=t.getModularInstance(o),l=await hr(s,{oobCode:n}),h=l.requestType;switch(L(h,s,"internal-error"),h){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":L(l.newEmail,s,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":L(l.mfaInfo,s,"internal-error");default:L(l.email,s,"internal-error")}let y=null;return l.mfaInfo&&(y=wt._fromServerResponse(ke(s),l.mfaInfo)),{data:{email:(l.requestType==="VERIFY_AND_CHANGE_EMAIL"?l.newEmail:l.email)||null,previousEmail:(l.requestType==="VERIFY_AND_CHANGE_EMAIL"?l.email:l.newEmail)||null,multiFactorInfo:y},operation:h}}async function Ud(o,n){const{data:s}=await pa(t.getModularInstance(o),n);return s.email}async function xd(o,n,s){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l=ke(o),R=await Wt(l,{returnSecureToken:!0,email:n,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",P,"EMAIL_PASSWORD_PROVIDER").catch(D=>{throw D.code==="auth/password-does-not-meet-requirements"&&Dn(o),D}),O=await N._fromIdTokenResponse(l,"signIn",R);return await l._updateCurrentUser(O.user),O}function Fd(o,n,s){return e._isFirebaseServerApp(o.app)?Promise.reject(oe(o)):Oe(t.getModularInstance(o),Gt.credential(n,s)).catch(async l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dn(o),l})}/**
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
 */async function jd(o,n,s){const l=ke(o),h={requestType:"EMAIL_SIGNIN",email:n,clientType:"CLIENT_TYPE_WEB"};function y(R,O){L(O.handleCodeInApp,l,"argument-error"),O&&Yt(l,R,O)}y(h,s),await Wt(l,h,"getOobCode",$r,"EMAIL_PASSWORD_PROVIDER")}function Hd(o,n){const s=_n.parseLink(n);return(s==null?void 0:s.operation)==="EMAIL_SIGNIN"}async function Vd(o,n,s){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l=t.getModularInstance(o),h=Gt.credentialWithLink(n,s||He());return L(h._tenantId===(l.tenantId||null),l,"tenant-id-mismatch"),Oe(l,h)}/**
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
 */async function $d(o,n){return fe(o,"POST","/v1/accounts:createAuthUri",ge(o,n))}/**
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
 */async function Wd(o,n){const s=Le()?He():"http://localhost",l={identifier:n,continueUri:s},{signinMethods:h}=await $d(t.getModularInstance(o),l);return h||[]}async function Bd(o,n){const s=t.getModularInstance(o),h={requestType:"VERIFY_EMAIL",idToken:await o.getIdToken()};n&&Yt(s.auth,h,n);const{email:y}=await Ji(s.auth,h);y!==o.email&&await o.reload()}async function zd(o,n,s){const l=t.getModularInstance(o),y={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await o.getIdToken(),newEmail:n};s&&Yt(l.auth,y,s);const{email:R}=await Zi(l.auth,y);R!==o.email&&await o.reload()}/**
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
 */async function qd(o,n){return fe(o,"POST","/v1/accounts:update",n)}/**
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
 */async function Gd(o,{displayName:n,photoURL:s}){if(n===void 0&&s===void 0)return;const l=t.getModularInstance(o),y={idToken:await l.getIdToken(),displayName:n,photoUrl:s,returnSecureToken:!0},R=await Qe(l,qd(l.auth,y));l.displayName=R.displayName||null,l.photoURL=R.photoUrl||null;const O=l.providerData.find(({providerId:D})=>D==="password");O&&(O.displayName=l.displayName,O.photoURL=l.photoURL),await l._updateTokensIfNecessary(R)}function Kd(o,n){const s=t.getModularInstance(o);return e._isFirebaseServerApp(s.auth.app)?Promise.reject(oe(s.auth)):ma(s,n,null)}function Yd(o,n){return ma(t.getModularInstance(o),null,n)}async function ma(o,n,s){const{auth:l}=o,y={idToken:await o.getIdToken(),returnSecureToken:!0};n&&(y.email=n),s&&(y.password=s);const R=await Qe(o,Gi(l,y));await o._updateTokensIfNecessary(R,!0)}/**
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
 */function Xd(o){var n,s;if(!o)return null;const{providerId:l}=o,h=o.rawUserInfo?JSON.parse(o.rawUserInfo):{},y=o.isNewUser||o.kind==="identitytoolkit#SignupNewUserResponse";if(!l&&(o!=null&&o.idToken)){const R=(s=(n=ft(o.idToken))===null||n===void 0?void 0:n.firebase)===null||s===void 0?void 0:s.sign_in_provider;if(R){const O=R!=="anonymous"&&R!=="custom"?R:null;return new Gn(y,O)}}if(!l)return null;switch(l){case"facebook.com":return new Jd(y,h);case"github.com":return new Qd(y,h);case"google.com":return new Zd(y,h);case"twitter.com":return new ef(y,h,o.screenName||null);case"custom":case"anonymous":return new Gn(y,null);default:return new Gn(y,l,h)}}class Gn{constructor(n,s,l={}){this.isNewUser=n,this.providerId=s,this.profile=l}}class ga extends Gn{constructor(n,s,l,h){super(n,s,l),this.username=h}}class Jd extends Gn{constructor(n,s){super(n,"facebook.com",s)}}class Qd extends ga{constructor(n,s){super(n,"github.com",s,typeof(s==null?void 0:s.login)=="string"?s==null?void 0:s.login:null)}}class Zd extends Gn{constructor(n,s){super(n,"google.com",s)}}class ef extends ga{constructor(n,s,l){super(n,"twitter.com",s,l)}}function tf(o){const{user:n,_tokenResponse:s}=o;return n.isAnonymous&&!s?{providerId:null,isNewUser:!1,profile:null}:Xd(s)}/**
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
 */function nf(o,n){return t.getModularInstance(o).setPersistence(n)}function rf(o){return dr(o)}async function sf(o,n){return ke(o).validatePassword(n)}function _a(o,n,s,l){return t.getModularInstance(o).onIdTokenChanged(n,s,l)}function ya(o,n,s){return t.getModularInstance(o).beforeAuthStateChanged(n,s)}function of(o,n,s,l){return t.getModularInstance(o).onAuthStateChanged(n,s,l)}function af(o){t.getModularInstance(o).useDeviceLanguage()}function cf(o,n){return t.getModularInstance(o).updateCurrentUser(n)}function lf(o){return t.getModularInstance(o).signOut()}function uf(o,n){return ke(o).revokeAccessToken(n)}async function df(o){return t.getModularInstance(o).delete()}/**
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
 */class Mn{constructor(n,s,l){this.type=n,this.credential=s,this.user=l}static _fromIdtoken(n,s){return new Mn("enroll",n,s)}static _fromMfaPendingCredential(n){return new Mn("signin",n)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(n){var s,l;if(n!=null&&n.multiFactorSession){if(!((s=n.multiFactorSession)===null||s===void 0)&&s.pendingCredential)return Mn._fromMfaPendingCredential(n.multiFactorSession.pendingCredential);if(!((l=n.multiFactorSession)===null||l===void 0)&&l.idToken)return Mn._fromIdtoken(n.multiFactorSession.idToken)}return null}}/**
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
 */class ls{constructor(n,s,l){this.session=n,this.hints=s,this.signInResolver=l}static _fromError(n,s){const l=ke(n),h=s.customData._serverResponse,y=(h.mfaInfo||[]).map(O=>wt._fromServerResponse(l,O));L(h.mfaPendingCredential,l,"internal-error");const R=Mn._fromMfaPendingCredential(h.mfaPendingCredential);return new ls(R,y,async O=>{const D=await O._process(l,R);delete h.mfaInfo,delete h.mfaPendingCredential;const J=Object.assign(Object.assign({},h),{idToken:D.idToken,refreshToken:D.refreshToken});switch(s.operationType){case"signIn":const ae=await N._fromIdTokenResponse(l,s.operationType,J);return await l._updateCurrentUser(ae.user),ae;case"reauthenticate":return L(s.user,l,"internal-error"),N._forOperation(s.user,s.operationType,J);default:$(l,"internal-error")}})}async resolveSignIn(n){const s=n;return this.signInResolver(s)}}function ff(o,n){var s;const l=t.getModularInstance(o),h=n;return L(n.customData.operationType,l,"argument-error"),L((s=h.customData._serverResponse)===null||s===void 0?void 0:s.mfaPendingCredential,l,"argument-error"),ls._fromError(l,h)}/**
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
 */function va(o,n){return fe(o,"POST","/v2/accounts/mfaEnrollment:start",ge(o,n))}function hf(o,n){return fe(o,"POST","/v2/accounts/mfaEnrollment:finalize",ge(o,n))}function pf(o,n){return fe(o,"POST","/v2/accounts/mfaEnrollment:start",ge(o,n))}function mf(o,n){return fe(o,"POST","/v2/accounts/mfaEnrollment:finalize",ge(o,n))}function gf(o,n){return fe(o,"POST","/v2/accounts/mfaEnrollment:withdraw",ge(o,n))}class us{constructor(n){this.user=n,this.enrolledFactors=[],n._onReload(s=>{s.mfaInfo&&(this.enrolledFactors=s.mfaInfo.map(l=>wt._fromServerResponse(n.auth,l)))})}static _fromUser(n){return new us(n)}async getSession(){return Mn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(n,s){const l=n,h=await this.getSession(),y=await Qe(this.user,l._process(this.user.auth,h,s));return await this.user._updateTokensIfNecessary(y),this.user.reload()}async unenroll(n){const s=typeof n=="string"?n:n.uid,l=await this.user.getIdToken();try{const h=await Qe(this.user,gf(this.user.auth,{idToken:l,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:y})=>y!==s),await this.user._updateTokensIfNecessary(h),await this.user.reload()}catch(h){throw h}}}const ds=new WeakMap;function _f(o){const n=t.getModularInstance(o);return ds.has(n)||ds.set(n,us._fromUser(n)),ds.get(n)}const qr="__sak";/**
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
 */class ba{constructor(n,s){this.storageRetriever=n,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(qr,"1"),this.storage.removeItem(qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,s){return this.storage.setItem(n,JSON.stringify(s)),Promise.resolve()}_get(n){const s=this.storage.getItem(n);return Promise.resolve(s?JSON.parse(s):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yf=1e3,vf=10;class Ea extends ba{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,s)=>this.onStorageEvent(n,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const s of Object.keys(this.listeners)){const l=this.storage.getItem(s),h=this.localCache[s];l!==h&&n(s,h,l)}}onStorageEvent(n,s=!1){if(!n.key){this.forAllChangedKeys((R,O,D)=>{this.notifyListeners(R,D)});return}const l=n.key;s?this.detachListener():this.stopPolling();const h=()=>{const R=this.storage.getItem(l);!s&&this.localCache[l]===R||this.notifyListeners(l,R)},y=this.storage.getItem(l);ue()&&y!==n.newValue&&n.newValue!==n.oldValue?setTimeout(h,vf):h()}notifyListeners(n,s){this.localCache[n]=s;const l=this.listeners[n];if(l)for(const h of Array.from(l))h(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,s,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:s,newValue:l}),!0)})},yf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,s){await super._set(n,s),this.localCache[n]=JSON.stringify(s)}async _get(n){const s=await super._get(n);return this.localCache[n]=JSON.stringify(s),s}async _remove(n){await super._remove(n),delete this.localCache[n]}}Ea.type="LOCAL";const Ia=Ea;/**
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
 */class wa extends ba{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,s){}_removeListener(n,s){}}wa.type="SESSION";const fs=wa;/**
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
 */function bf(o){return Promise.all(o.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
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
 */class Gr{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const s=this.receivers.find(h=>h.isListeningto(n));if(s)return s;const l=new Gr(n);return this.receivers.push(l),l}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const s=n,{eventId:l,eventType:h,data:y}=s.data,R=this.handlersMap[h];if(!(R!=null&&R.size))return;s.ports[0].postMessage({status:"ack",eventId:l,eventType:h});const O=Array.from(R).map(async J=>J(s.origin,y)),D=await bf(O);s.ports[0].postMessage({status:"done",eventId:l,eventType:h,response:D})}_subscribe(n,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(s)}_unsubscribe(n,s){this.handlersMap[n]&&s&&this.handlersMap[n].delete(s),(!s||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
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
 */function pr(o="",n=10){let s="";for(let l=0;l<n;l++)s+=Math.floor(Math.random()*10);return o+s}/**
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
 */class Ef{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,s,l=50){const h=typeof MessageChannel<"u"?new MessageChannel:null;if(!h)throw new Error("connection_unavailable");let y,R;return new Promise((O,D)=>{const J=pr("",20);h.port1.start();const ae=setTimeout(()=>{D(new Error("unsupported_event"))},l);R={messageChannel:h,onMessage(be){const ot=be;if(ot.data.eventId===J)switch(ot.data.status){case"ack":clearTimeout(ae),y=setTimeout(()=>{D(new Error("timeout"))},3e3);break;case"done":clearTimeout(y),O(ot.data.response);break;default:clearTimeout(ae),clearTimeout(y),D(new Error("invalid_response"));break}}},this.handlers.add(R),h.port1.addEventListener("message",R.onMessage),this.target.postMessage({eventType:n,eventId:J,data:s},[h.port2])}).finally(()=>{R&&this.removeMessageHandler(R)})}}/**
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
 */function qe(){return window}function If(o){qe().location.href=o}/**
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
 */function hs(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function wf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tf(){var o;return((o=navigator==null?void 0:navigator.serviceWorker)===null||o===void 0?void 0:o.controller)||null}function Af(){return hs()?self:null}/**
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
 */const Ta="firebaseLocalStorageDb",Sf=1,Kr="firebaseLocalStorage",Aa="fbase_key";class mr{constructor(n){this.request=n}toPromise(){return new Promise((n,s)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Yr(o,n){return o.transaction([Kr],n?"readwrite":"readonly").objectStore(Kr)}function Rf(){const o=indexedDB.deleteDatabase(Ta);return new mr(o).toPromise()}function ps(){const o=indexedDB.open(Ta,Sf);return new Promise((n,s)=>{o.addEventListener("error",()=>{s(o.error)}),o.addEventListener("upgradeneeded",()=>{const l=o.result;try{l.createObjectStore(Kr,{keyPath:Aa})}catch(h){s(h)}}),o.addEventListener("success",async()=>{const l=o.result;l.objectStoreNames.contains(Kr)?n(l):(l.close(),await Rf(),n(await ps()))})})}async function Sa(o,n,s){const l=Yr(o,!0).put({[Aa]:n,value:s});return new mr(l).toPromise()}async function Pf(o,n){const s=Yr(o,!1).get(n),l=await new mr(s).toPromise();return l===void 0?null:l.value}function Ra(o,n){const s=Yr(o,!0).delete(n);return new mr(s).toPromise()}const kf=800,Cf=3;class Pa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(n){let s=0;for(;;)try{const l=await this._openDb();return await n(l)}catch(l){if(s++>Cf)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(Af()),this.receiver._subscribe("keyChanged",async(n,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(n,s)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await wf(),!this.activeServiceWorker)return;this.sender=new Ef(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((n=l[0])===null||n===void 0)&&n.fulfilled&&!((s=l[0])===null||s===void 0)&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||Tf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await ps();return await Sa(n,qr,"1"),await Ra(n,qr),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,s){return this._withPendingWrite(async()=>(await this._withRetries(l=>Sa(l,n,s)),this.localCache[n]=s,this.notifyServiceWorker(n)))}async _get(n){const s=await this._withRetries(l=>Pf(l,n));return this.localCache[n]=s,s}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ra(s,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(h=>{const y=Yr(h,!1).getAll();return new mr(y).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const s=[],l=new Set;if(n.length!==0)for(const{fbase_key:h,value:y}of n)l.add(h),JSON.stringify(this.localCache[h])!==JSON.stringify(y)&&(this.notifyListeners(h,y),s.push(h));for(const h of Object.keys(this.localCache))this.localCache[h]&&!l.has(h)&&(this.notifyListeners(h,null),s.push(h));return s}notifyListeners(n,s){this.localCache[n]=s;const l=this.listeners[n];if(l)for(const h of Array.from(l))h(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(s)}_removeListener(n,s){this.listeners[n]&&(this.listeners[n].delete(s),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pa.type="LOCAL";const ka=Pa;/**
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
 */function Ca(o,n){return fe(o,"POST","/v2/accounts/mfaSignIn:start",ge(o,n))}function Of(o,n){return fe(o,"POST","/v2/accounts/mfaSignIn:finalize",ge(o,n))}function Nf(o,n){return fe(o,"POST","/v2/accounts/mfaSignIn:finalize",ge(o,n))}/**
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
 */const ms=cr("rcb"),Lf=new Ae(3e4,6e4);class Df{constructor(){var n;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((n=qe().grecaptcha)===null||n===void 0)&&n.render)}load(n,s=""){return L(Mf(s),n,"argument-error"),this.shouldResolveImmediately(s)&&te(qe().grecaptcha)?Promise.resolve(qe().grecaptcha):new Promise((l,h)=>{const y=qe().setTimeout(()=>{h(re(n,"network-request-failed"))},Lf.get());qe()[ms]=()=>{qe().clearTimeout(y),delete qe()[ms];const O=qe().grecaptcha;if(!O||!te(O)){h(re(n,"internal-error"));return}const D=O.render;O.render=(J,ae)=>{const be=D(J,ae);return this.counter++,be},this.hostLanguage=s,l(O)};const R=`${ar()}?${t.querystring({onload:ms,render:"explicit",hl:s})}`;mn(R).catch(()=>{clearTimeout(y),h(re(n,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(n){var s;return!!(!((s=qe().grecaptcha)===null||s===void 0)&&s.render)&&(n===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mf(o){return o.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(o)}class Uf{async load(n){return new lr(n)}clearedOneInstance(){}}/**
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
 */const gr="recaptcha",xf={theme:"light",type:"image"};class Ff{constructor(n,s,l=Object.assign({},xf)){this.parameters=l,this.type=gr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ke(n),this.isInvisible=this.parameters.size==="invisible",L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const h=typeof s=="string"?document.getElementById(s):s;L(h,this.auth,"argument-error"),this.container=h,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Uf:new Df,this.validateStartingState()}async verify(){this.assertNotDestroyed();const n=await this.render(),s=this.getAssertedRecaptcha(),l=s.getResponse(n);return l||new Promise(h=>{const y=R=>{R&&(this.tokenChangeListeners.delete(y),h(R))};this.tokenChangeListeners.add(y),this.isInvisible&&s.execute(n)})}render(){try{this.assertNotDestroyed()}catch(n){return Promise.reject(n)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(n=>{throw this.renderPromise=null,n}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(n=>{this.container.removeChild(n)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(n){return s=>{if(this.tokenChangeListeners.forEach(l=>l(s)),typeof n=="function")n(s);else if(typeof n=="string"){const l=qe()[n];typeof l=="function"&&l(s)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let n=this.container;if(!this.isInvisible){const s=document.createElement("div");n.appendChild(s),n=s}this.widgetId=this.getAssertedRecaptcha().render(n,this.parameters)}return this.widgetId}async init(){L(Le()&&!hs(),this.auth,"internal-error"),await jf(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const n=await pe(this.auth);L(n,this.auth,"internal-error"),this.parameters.sitekey=n}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function jf(){let o=null;return new Promise(n=>{if(document.readyState==="complete"){n();return}o=()=>n(),window.addEventListener("load",o)}).catch(n=>{throw o&&window.removeEventListener("load",o),n})}/**
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
 */class gs{constructor(n,s){this.verificationId=n,this.onConfirmation=s}confirm(n){const s=qt._fromVerification(this.verificationId,n);return this.onConfirmation(s)}}async function Hf(o,n,s){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l=ke(o),h=await Xr(l,n,t.getModularInstance(s));return new gs(h,y=>Oe(l,y))}async function Vf(o,n,s){const l=t.getModularInstance(o);await xe(!1,l,"phone");const h=await Xr(l.auth,n,t.getModularInstance(s));return new gs(h,y=>Et(l,y))}async function $f(o,n,s){const l=t.getModularInstance(o);if(e._isFirebaseServerApp(l.auth.app))return Promise.reject(oe(l.auth));const h=await Xr(l.auth,n,t.getModularInstance(s));return new gs(h,y=>It(l,y))}async function Xr(o,n,s){var l;if(!o._getRecaptchaConfig())try{await dr(o)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let h;if(typeof n=="string"?h={phoneNumber:n}:h=n,"session"in h){const y=h.session;if("phoneNumber"in h){L(y.type==="enroll",o,"internal-error");const R={idToken:y.credential,phoneEnrollmentInfo:{phoneNumber:h.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Wt(o,R,"mfaSmsEnrollment",async(ae,be)=>{if(be.phoneEnrollmentInfo.captchaResponse===Cn){L((s==null?void 0:s.type)===gr,ae,"argument-error");const ot=await _s(ae,be,s);return va(ae,ot)}return va(ae,be)},"PHONE_PROVIDER").catch(ae=>Promise.reject(ae))).phoneSessionInfo.sessionInfo}else{L(y.type==="signin",o,"internal-error");const R=((l=h.multiFactorHint)===null||l===void 0?void 0:l.uid)||h.multiFactorUid;L(R,o,"missing-multi-factor-info");const O={mfaPendingCredential:y.credential,mfaEnrollmentId:R,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Wt(o,O,"mfaSmsSignIn",async(be,ot)=>{if(ot.phoneSignInInfo.captchaResponse===Cn){L((s==null?void 0:s.type)===gr,be,"argument-error");const Kn=await _s(be,ot,s);return Ca(be,Kn)}return Ca(be,ot)},"PHONE_PROVIDER").catch(be=>Promise.reject(be))).phoneResponseInfo.sessionInfo}}else{const y={phoneNumber:h.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Wt(o,y,"sendVerificationCode",async(J,ae)=>{if(ae.captchaResponse===Cn){L((s==null?void 0:s.type)===gr,J,"argument-error");const be=await _s(J,ae,s);return zr(J,be)}return zr(J,ae)},"PHONE_PROVIDER").catch(J=>Promise.reject(J))).sessionInfo}}finally{s==null||s._reset()}}async function Wf(o,n){const s=t.getModularInstance(o);if(e._isFirebaseServerApp(s.auth.app))return Promise.reject(oe(s.auth));await Ue(s,n)}async function _s(o,n,s){L(s.type===gr,o,"argument-error");const l=await s.verify();L(typeof l=="string",o,"argument-error");const h=Object.assign({},n);if("phoneEnrollmentInfo"in h){const y=h.phoneEnrollmentInfo.phoneNumber,R=h.phoneEnrollmentInfo.captchaResponse,O=h.phoneEnrollmentInfo.clientType,D=h.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:l,captchaResponse:R,clientType:O,recaptchaVersion:D}}),h}else if("phoneSignInInfo"in h){const y=h.phoneSignInInfo.captchaResponse,R=h.phoneSignInInfo.clientType,O=h.phoneSignInInfo.recaptchaVersion;return Object.assign(h,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:y,clientType:R,recaptchaVersion:O}}),h}else return Object.assign(h,{recaptchaToken:l}),h}/**
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
 */class Un{constructor(n){this.providerId=Un.PROVIDER_ID,this.auth=ke(n)}verifyPhoneNumber(n,s){return Xr(this.auth,n,t.getModularInstance(s))}static credential(n,s){return qt._fromVerification(n,s)}static credentialFromResult(n){const s=n;return Un.credentialFromTaggedObject(s)}static credentialFromError(n){return Un.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{phoneNumber:s,temporaryProof:l}=n;return s&&l?qt._fromTokenResponse(s,l):null}}Un.PROVIDER_ID="phone",Un.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xn(o,n){return n?Ke(n):(L(o._popupRedirectResolver,o,"argument-error"),o._popupRedirectResolver)}/**
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
 */class ys extends rn{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return bt(n,this._buildIdpRequest())}_linkToIdToken(n,s){return bt(n,this._buildIdpRequest(s))}_getReauthenticationResolver(n){return bt(n,this._buildIdpRequest())}_buildIdpRequest(n){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(s.idToken=n),s}}function Bf(o){return st(o.auth,new ys(o),o.bypassAuthState)}function zf(o){const{auth:n,user:s}=o;return L(s,n,"internal-error"),$e(s,new ys(o),o.bypassAuthState)}async function qf(o){const{auth:n,user:s}=o;return L(s,n,"internal-error"),Ue(s,new ys(o),o.bypassAuthState)}/**
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
 */class Oa{constructor(n,s,l,h,y=!1){this.auth=n,this.resolver=l,this.user=h,this.bypassAuthState=y,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(n,s)=>{this.pendingPromise={resolve:n,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(n){const{urlResponse:s,sessionId:l,postBody:h,tenantId:y,error:R,type:O}=n;if(R){this.reject(R);return}const D={auth:this.auth,requestUri:s,sessionId:l,tenantId:y||void 0,postBody:h||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(O)(D))}catch(J){this.reject(J)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return Bf;case"linkViaPopup":case"linkViaRedirect":return qf;case"reauthViaPopup":case"reauthViaRedirect":return zf;default:$(this.auth,"internal-error")}}resolve(n){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gf=new Ae(2e3,1e4);async function Kf(o,n,s){if(e._isFirebaseServerApp(o.app))return Promise.reject(re(o,"operation-not-supported-in-this-environment"));const l=ke(o);le(o,n,Nt);const h=xn(l,s);return new sn(l,"signInViaPopup",n,h).executeNotNull()}async function Yf(o,n,s){const l=t.getModularInstance(o);if(e._isFirebaseServerApp(l.auth.app))return Promise.reject(re(l.auth,"operation-not-supported-in-this-environment"));le(l.auth,n,Nt);const h=xn(l.auth,s);return new sn(l.auth,"reauthViaPopup",n,h,l).executeNotNull()}async function Xf(o,n,s){const l=t.getModularInstance(o);le(l.auth,n,Nt);const h=xn(l.auth,s);return new sn(l.auth,"linkViaPopup",n,h,l).executeNotNull()}class sn extends Oa{constructor(n,s,l,h,y){super(n,s,h,y),this.provider=l,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return L(n,this.auth,"internal-error"),n}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const n=pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const n=()=>{var s,l;if(!((l=(s=this.authWindow)===null||s===void 0?void 0:s.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,Gf.get())};n()}}sn.currentPopupAction=null;/**
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
 */const Jf="pendingRedirect",_r=new Map;class Qf extends Oa{constructor(n,s,l=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,l),this.eventId=null}async execute(){let n=_r.get(this.auth._key());if(!n){try{const l=await Zf(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(l)}catch(s){n=()=>Promise.reject(s)}_r.set(this.auth._key(),n)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const s=await this.auth._redirectUserForId(n.eventId);if(s)return this.user=s,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zf(o,n){const s=Da(n),l=La(o);if(!await l._isAvailable())return!1;const h=await l._get(s)==="true";return await l._remove(s),h}async function vs(o,n){return La(o)._set(Da(n),"true")}function eh(){_r.clear()}function Na(o,n){_r.set(o._key(),n)}function La(o){return Ke(o._redirectPersistence)}function Da(o){return Ot(Jf,o.config.apiKey,o.name)}/**
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
 */function th(o,n,s){return nh(o,n,s)}async function nh(o,n,s){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l=ke(o);le(o,n,Nt),await l._initializationPromise;const h=xn(l,s);return await vs(h,l),h._openRedirect(l,n,"signInViaRedirect")}function rh(o,n,s){return ih(o,n,s)}async function ih(o,n,s){const l=t.getModularInstance(o);if(le(l.auth,n,Nt),e._isFirebaseServerApp(l.auth.app))return Promise.reject(oe(l.auth));await l.auth._initializationPromise;const h=xn(l.auth,s);await vs(h,l.auth);const y=await Ma(l);return h._openRedirect(l.auth,n,"reauthViaRedirect",y)}function sh(o,n,s){return oh(o,n,s)}async function oh(o,n,s){const l=t.getModularInstance(o);le(l.auth,n,Nt),await l.auth._initializationPromise;const h=xn(l.auth,s);await xe(!1,l,n.providerId),await vs(h,l.auth);const y=await Ma(l);return h._openRedirect(l.auth,n,"linkViaRedirect",y)}async function ah(o,n){return await ke(o)._initializationPromise,bs(o,n,!1)}async function bs(o,n,s=!1){if(e._isFirebaseServerApp(o.app))return Promise.reject(oe(o));const l=ke(o),h=xn(l,n),R=await new Qf(l,h,s).execute();return R&&!s&&(delete R.user._redirectEventId,await l._persistUserIfCurrent(R.user),await l._setRedirectUser(null,n)),R}async function Ma(o){const n=pr(`${o.uid}:::`);return o._redirectEventId=n,await o.auth._setRedirectUser(o),await o.auth._persistUserIfCurrent(o),n}/**
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
 */const ch=10*60*1e3;class Ua{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let s=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(n,l)&&(s=!0,this.sendToConsumer(n,l),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!lh(n)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=n,s=!0)),s}sendToConsumer(n,s){var l;if(n.error&&!Fa(n)){const h=((l=n.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";s.onError(re(this.auth,h))}else s.onAuthEvent(n)}isEventForConsumer(n,s){const l=s.eventId===null||!!n.eventId&&n.eventId===s.eventId;return s.filter.includes(n.type)&&l}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=ch&&this.cachedEventUids.clear(),this.cachedEventUids.has(xa(n))}saveEventToCache(n){this.cachedEventUids.add(xa(n)),this.lastProcessedEventTime=Date.now()}}function xa(o){return[o.type,o.eventId,o.sessionId,o.tenantId].filter(n=>n).join("-")}function Fa({type:o,error:n}){return o==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function lh(o){switch(o.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fa(o);default:return!1}}/**
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
 */async function ja(o,n={}){return fe(o,"GET","/v1/projects",n)}/**
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
 */const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dh=/^https?/;async function fh(o){if(o.config.emulator)return;const{authorizedDomains:n}=await ja(o);for(const s of n)try{if(hh(s))return}catch{}$(o,"unauthorized-domain")}function hh(o){const n=He(),{protocol:s,hostname:l}=new URL(n);if(o.startsWith("chrome-extension://")){const R=new URL(o);return R.hostname===""&&l===""?s==="chrome-extension:"&&o.replace("chrome-extension://","")===n.replace("chrome-extension://",""):s==="chrome-extension:"&&R.hostname===l}if(!dh.test(s))return!1;if(uh.test(o))return l===o;const h=o.replace(/\./g,"\\.");return new RegExp("^(.+\\."+h+"|"+h+")$","i").test(l)}/**
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
 */const ph=new Ae(3e4,6e4);function Ha(){const o=qe().___jsl;if(o!=null&&o.H){for(const n of Object.keys(o.H))if(o.H[n].r=o.H[n].r||[],o.H[n].L=o.H[n].L||[],o.H[n].r=[...o.H[n].L],o.CP)for(let s=0;s<o.CP.length;s++)o.CP[s]=null}}function mh(o){return new Promise((n,s)=>{var l,h,y;function R(){Ha(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Ha(),s(re(o,"network-request-failed"))},timeout:ph.get()})}if(!((h=(l=qe().gapi)===null||l===void 0?void 0:l.iframes)===null||h===void 0)&&h.Iframe)n(gapi.iframes.getContext());else if(!((y=qe().gapi)===null||y===void 0)&&y.load)R();else{const O=cr("iframefcb");return qe()[O]=()=>{gapi.load?R():s(re(o,"network-request-failed"))},mn(`${ji()}?onload=${O}`).catch(D=>s(D))}}).catch(n=>{throw Jr=null,n})}let Jr=null;function gh(o){return Jr=Jr||mh(o),Jr}/**
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
 */const _h=new Ae(5e3,15e3),yh="__/auth/iframe",vh="emulator/auth/iframe",bh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ih(o){const n=o.config;L(n.authDomain,o,"auth-domain-config-required");const s=n.emulator?dt(n,vh):`https://${o.config.authDomain}/${yh}`,l={apiKey:n.apiKey,appName:o.name,v:e.SDK_VERSION},h=Eh.get(o.config.apiHost);h&&(l.eid=h);const y=o._getFrameworks();return y.length&&(l.fw=y.join(",")),`${s}?${t.querystring(l).slice(1)}`}async function wh(o){const n=await gh(o),s=qe().gapi;return L(s,o,"internal-error"),n.open({where:document.body,url:Ih(o),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bh,dontclear:!0},l=>new Promise(async(h,y)=>{await l.restyle({setHideOnLeave:!1});const R=re(o,"network-request-failed"),O=qe().setTimeout(()=>{y(R)},_h.get());function D(){qe().clearTimeout(O),h(l)}l.ping(D).then(D,()=>{y(R)})}))}/**
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
 */const Th={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ah=500,Sh=600,Rh="_blank",Ph="http://localhost";class Es{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kh(o,n,s,l=Ah,h=Sh){const y=Math.max((window.screen.availHeight-h)/2,0).toString(),R=Math.max((window.screen.availWidth-l)/2,0).toString();let O="";const D=Object.assign(Object.assign({},Th),{width:l.toString(),height:h.toString(),top:y,left:R}),J=t.getUA().toLowerCase();s&&(O=x(J)?Rh:s),hn(J)&&(n=n||Ph,D.scrollbars="yes");const ae=Object.entries(D).reduce((ot,[Kn,ei])=>`${ot}${Kn}=${ei},`,"");if(Z(J)&&O!=="_self")return Ch(n||"",O),new Es(null);const be=window.open(n||"",O,ae);L(be,o,"popup-blocked");try{be.focus()}catch{}return new Es(be)}function Ch(o,n){const s=document.createElement("a");s.href=o,s.target=n;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(l)}/**
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
 */const Oh="__/auth/handler",Nh="emulator/auth/handler",Lh=encodeURIComponent("fac");async function Is(o,n,s,l,h,y){L(o.config.authDomain,o,"auth-domain-config-required"),L(o.config.apiKey,o,"invalid-api-key");const R={apiKey:o.config.apiKey,appName:o.name,authType:s,redirectUrl:l,v:e.SDK_VERSION,eventId:h};if(n instanceof Nt){n.setDefaultLanguage(o.languageCode),R.providerId=n.providerId||"",t.isEmpty(n.getCustomParameters())||(R.customParameters=JSON.stringify(n.getCustomParameters()));for(const[ae,be]of Object.entries(y||{}))R[ae]=be}if(n instanceof yn){const ae=n.getScopes().filter(be=>be!=="");ae.length>0&&(R.scopes=ae.join(","))}o.tenantId&&(R.tid=o.tenantId);const O=R;for(const ae of Object.keys(O))O[ae]===void 0&&delete O[ae];const D=await o._getAppCheckToken(),J=D?`#${Lh}=${encodeURIComponent(D)}`:"";return`${Dh(o)}?${t.querystring(O).slice(1)}${J}`}function Dh({config:o}){return o.emulator?dt(o,Nh):`https://${o.authDomain}/${Oh}`}/**
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
 */const ws="webStorageSupport";class Mh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=bs,this._overrideRedirectResult=Na}async _openPopup(n,s,l,h){var y;Se((y=this.eventManagers[n._key()])===null||y===void 0?void 0:y.manager,"_initialize() not called before _openPopup()");const R=await Is(n,s,l,He(),h);return kh(n,R,pr())}async _openRedirect(n,s,l,h){await this._originValidation(n);const y=await Is(n,s,l,He(),h);return If(y),new Promise(()=>{})}_initialize(n){const s=n._key();if(this.eventManagers[s]){const{manager:h,promise:y}=this.eventManagers[s];return h?Promise.resolve(h):(Se(y,"If manager is not set, promise should be"),y)}const l=this.initAndGetManager(n);return this.eventManagers[s]={promise:l},l.catch(()=>{delete this.eventManagers[s]}),l}async initAndGetManager(n){const s=await wh(n),l=new Ua(n);return s.register("authEvent",h=>(L(h==null?void 0:h.authEvent,n,"invalid-auth-event"),{status:l.onEvent(h.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:l},this.iframes[n._key()]=s,l}_isIframeWebStorageSupported(n,s){this.iframes[n._key()].send(ws,{type:ws},h=>{var y;const R=(y=h==null?void 0:h[0])===null||y===void 0?void 0:y[ws];R!==void 0&&s(!!R),$(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const s=n._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=fh(n)),this.originValidationPromises[s]}get _shouldInitProactively(){return we()||B()||C()}}const Va=Mh;class $a{constructor(n){this.factorId=n}_process(n,s,l){switch(s.type){case"enroll":return this._finalizeEnroll(n,s.credential,l);case"signin":return this._finalizeSignIn(n,s.credential);default:return ye("unexpected MultiFactorSessionType")}}}class Ts extends $a{constructor(n){super("phone"),this.credential=n}static _fromCredential(n){return new Ts(n)}_finalizeEnroll(n,s,l){return hf(n,{idToken:s,displayName:l,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(n,s){return Of(n,{mfaPendingCredential:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wa{constructor(){}static assertion(n){return Ts._fromCredential(n)}}Wa.FACTOR_ID="phone";class Ba{static assertionForEnrollment(n,s){return yr._fromSecret(n,s)}static assertionForSignIn(n,s){return yr._fromEnrollmentId(n,s)}static async generateSecret(n){var s;const l=n;L(typeof((s=l.user)===null||s===void 0?void 0:s.auth)<"u","internal-error");const h=await pf(l.user.auth,{idToken:l.credential,totpEnrollmentInfo:{}});return Qr._fromStartTotpMfaEnrollmentResponse(h,l.user.auth)}}Ba.FACTOR_ID="totp";class yr extends $a{constructor(n,s,l){super("totp"),this.otp=n,this.enrollmentId=s,this.secret=l}static _fromSecret(n,s){return new yr(s,void 0,n)}static _fromEnrollmentId(n,s){return new yr(s,n)}async _finalizeEnroll(n,s,l){return L(typeof this.secret<"u",n,"argument-error"),mf(n,{idToken:s,displayName:l,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(n,s){L(this.enrollmentId!==void 0&&this.otp!==void 0,n,"argument-error");const l={verificationCode:this.otp};return Nf(n,{mfaPendingCredential:s,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:l})}}class Qr{constructor(n,s,l,h,y,R,O){this.sessionInfo=R,this.auth=O,this.secretKey=n,this.hashingAlgorithm=s,this.codeLength=l,this.codeIntervalSeconds=h,this.enrollmentCompletionDeadline=y}static _fromStartTotpMfaEnrollmentResponse(n,s){return new Qr(n.totpSessionInfo.sharedSecretKey,n.totpSessionInfo.hashingAlgorithm,n.totpSessionInfo.verificationCodeLength,n.totpSessionInfo.periodSec,new Date(n.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),n.totpSessionInfo.sessionInfo,s)}_makeTotpVerificationInfo(n){return{sessionInfo:this.sessionInfo,verificationCode:n}}generateQrCodeUrl(n,s){var l;let h=!1;return(Zr(n)||Zr(s))&&(h=!0),h&&(Zr(n)&&(n=((l=this.auth.currentUser)===null||l===void 0?void 0:l.email)||"unknownuser"),Zr(s)&&(s=this.auth.name)),`otpauth://totp/${s}:${n}?secret=${this.secretKey}&issuer=${s}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Zr(o){return typeof o>"u"||(o==null?void 0:o.length)===0}var za="@firebase/auth",qa="1.9.0";/**
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
 */class Uh{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const s=this.auth.onIdTokenChanged(l=>{n((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,s),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const s=this.internalListeners.get(n);s&&(this.internalListeners.delete(n),s(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xh(o){switch(o){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fh(o){e._registerComponent(new a.Component("auth",(n,{options:s})=>{const l=n.getProvider("app").getImmediate(),h=n.getProvider("heartbeat"),y=n.getProvider("app-check-internal"),{apiKey:R,authDomain:O}=l.options;L(R&&!R.includes(":"),"invalid-api-key",{appName:l.name});const D={apiKey:R,authDomain:O,clientPlatform:o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Me(o)},J=new nn(l,h,y,D);return Bi(J,s),J},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,s,l)=>{n.getProvider("auth-internal").initialize()})),e._registerComponent(new a.Component("auth-internal",n=>{const s=ke(n.getProvider("auth").getImmediate());return(l=>new Uh(l))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),e.registerVersion(za,qa,xh(o)),e.registerVersion(za,qa,"cjs2017")}/**
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
 */const jh=5*60,Hh=t.getExperimentalSetting("authIdTokenMaxAge")||jh;let Ga=null;const Vh=o=>async n=>{const s=n&&await n.getIdTokenResult(),l=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(l&&l>Hh)return;const h=s==null?void 0:s.token;Ga!==h&&(Ga=h,await fetch(o,{method:h?"POST":"DELETE",headers:h?{Authorization:`Bearer ${h}`}:{}}))};function $h(o=e.getApp()){const n=e._getProvider(o,"auth");if(n.isInitialized())return n.getImmediate();const s=Bt(o,{popupRedirectResolver:Va,persistence:[ka,Ia,fs]}),l=t.getExperimentalSetting("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const y=new URL(l,location.origin);if(location.origin===y.origin){const R=Vh(y.toString());ya(s,R,()=>R(s.currentUser)),_a(s,O=>R(O))}}const h=t.getDefaultEmulatorHost("auth");return h&&Hr(s,`http://${h}`),s}function Wh(){var o,n;return(n=(o=document.getElementsByTagName("head"))===null||o===void 0?void 0:o[0])!==null&&n!==void 0?n:document}return Fr({loadJS(o){return new Promise((n,s)=>{const l=document.createElement("script");l.setAttribute("src",o),l.onload=n,l.onerror=h=>{const y=re("internal-error");y.customData=h,s(y)},l.type="text/javascript",l.charset="UTF-8",Wh().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Fh("Browser"),F.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY=G,F.ActionCodeOperation=m,F.ActionCodeURL=_n,F.AuthCredential=rn,F.AuthEventManager=Ua,F.AuthImpl=nn,F.AuthPopup=Es,F.EmailAuthCredential=zt,F.EmailAuthProvider=Gt,F.FacebookAuthProvider=Lt,F.FactorId=c,F.FetchProvider=At,F.GithubAuthProvider=Mt,F.GoogleAuthProvider=Dt,F.OAuthCredential=gt,F.OAuthProvider=vn,F.OperationType=g,F.PhoneAuthCredential=qt,F.PhoneAuthProvider=Un,F.PhoneMultiFactorGenerator=Wa,F.ProviderId=u,F.RecaptchaVerifier=Ff,F.SAMLAuthCredential=f,F.SAMLAuthProvider=E,F.SignInMethod=p,F.TotpMultiFactorGenerator=Ba,F.TotpSecret=Qr,F.TwitterAuthProvider=w,F.UserImpl=rt,F._assert=L,F._castAuth=ke,F._clearRedirectOutcomes=eh,F._createError=re,F._fail=$,F._generateEventId=pr,F._getClientVersion=Me,F._getInstance=Ke,F._getProjectConfig=ja,F._getRedirectResult=bs,F._getRedirectUrl=Is,F._isAndroid=b,F._isIOS=C,F._isIOS7Or8=k,F._overrideRedirectResult=Na,F._persistenceKeyName=Ot,F.applyActionCode=Md,F.beforeAuthStateChanged=ya,F.browserLocalPersistence=Ia,F.browserPopupRedirectResolver=Va,F.browserSessionPersistence=fs,F.checkActionCode=pa,F.confirmPasswordReset=Dd,F.connectAuthEmulator=Hr,F.createUserWithEmailAndPassword=xd,F.debugAssert=Se,F.debugErrorMap=I,F.deleteUser=df,F.fetchSignInMethodsForEmail=Wd,F.getAdditionalUserInfo=tf,F.getAuth=$h,F.getIdToken=Pn,F.getIdTokenResult=en,F.getMultiFactorResolver=ff,F.getRedirectResult=ah,F.inMemoryPersistence=ht,F.indexedDBLocalPersistence=ka,F.initializeAuth=Bt,F.initializeRecaptchaConfig=rf,F.isSignInWithEmailLink=Hd,F.linkWithCredential=Et,F.linkWithPhoneNumber=Vf,F.linkWithPopup=Xf,F.linkWithRedirect=sh,F.multiFactor=_f,F.onAuthStateChanged=of,F.onIdTokenChanged=_a,F.parseActionCodeURL=as,F.prodErrorMap=S,F.reauthenticateWithCredential=It,F.reauthenticateWithPhoneNumber=$f,F.reauthenticateWithPopup=Yf,F.reauthenticateWithRedirect=rh,F.reload=fn,F.revokeAccessToken=uf,F.sendEmailVerification=Bd,F.sendPasswordResetEmail=Ld,F.sendSignInLinkToEmail=jd,F.setPersistence=nf,F.signInAnonymously=ne,F.signInWithCredential=Oe,F.signInWithCustomToken=Ye,F.signInWithEmailAndPassword=Fd,F.signInWithEmailLink=Vd,F.signInWithPhoneNumber=Hf,F.signInWithPopup=Kf,F.signInWithRedirect=th,F.signOut=lf,F.unlink=je,F.updateCurrentUser=cf,F.updateEmail=Kd,F.updatePassword=Yd,F.updatePhoneNumber=Wf,F.updateProfile=Gd,F.useDeviceLanguage=af,F.validatePassword=sf,F.verifyBeforeUpdateEmail=zd,F.verifyPasswordResetCode=Ud,F}var Kc;function by(){if(Kc)return q;Kc=1,Object.defineProperty(q,"__esModule",{value:!0});var e=vy();return Oi(),Dr(),ea(),Ci(),q.ActionCodeOperation=e.ActionCodeOperation,q.ActionCodeURL=e.ActionCodeURL,q.AuthCredential=e.AuthCredential,q.AuthErrorCodes=e.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,q.EmailAuthCredential=e.EmailAuthCredential,q.EmailAuthProvider=e.EmailAuthProvider,q.FacebookAuthProvider=e.FacebookAuthProvider,q.FactorId=e.FactorId,q.GithubAuthProvider=e.GithubAuthProvider,q.GoogleAuthProvider=e.GoogleAuthProvider,q.OAuthCredential=e.OAuthCredential,q.OAuthProvider=e.OAuthProvider,q.OperationType=e.OperationType,q.PhoneAuthCredential=e.PhoneAuthCredential,q.PhoneAuthProvider=e.PhoneAuthProvider,q.PhoneMultiFactorGenerator=e.PhoneMultiFactorGenerator,q.ProviderId=e.ProviderId,q.RecaptchaVerifier=e.RecaptchaVerifier,q.SAMLAuthProvider=e.SAMLAuthProvider,q.SignInMethod=e.SignInMethod,q.TotpMultiFactorGenerator=e.TotpMultiFactorGenerator,q.TotpSecret=e.TotpSecret,q.TwitterAuthProvider=e.TwitterAuthProvider,q.applyActionCode=e.applyActionCode,q.beforeAuthStateChanged=e.beforeAuthStateChanged,q.browserLocalPersistence=e.browserLocalPersistence,q.browserPopupRedirectResolver=e.browserPopupRedirectResolver,q.browserSessionPersistence=e.browserSessionPersistence,q.checkActionCode=e.checkActionCode,q.confirmPasswordReset=e.confirmPasswordReset,q.connectAuthEmulator=e.connectAuthEmulator,q.createUserWithEmailAndPassword=e.createUserWithEmailAndPassword,q.debugErrorMap=e.debugErrorMap,q.deleteUser=e.deleteUser,q.fetchSignInMethodsForEmail=e.fetchSignInMethodsForEmail,q.getAdditionalUserInfo=e.getAdditionalUserInfo,q.getAuth=e.getAuth,q.getIdToken=e.getIdToken,q.getIdTokenResult=e.getIdTokenResult,q.getMultiFactorResolver=e.getMultiFactorResolver,q.getRedirectResult=e.getRedirectResult,q.inMemoryPersistence=e.inMemoryPersistence,q.indexedDBLocalPersistence=e.indexedDBLocalPersistence,q.initializeAuth=e.initializeAuth,q.initializeRecaptchaConfig=e.initializeRecaptchaConfig,q.isSignInWithEmailLink=e.isSignInWithEmailLink,q.linkWithCredential=e.linkWithCredential,q.linkWithPhoneNumber=e.linkWithPhoneNumber,q.linkWithPopup=e.linkWithPopup,q.linkWithRedirect=e.linkWithRedirect,q.multiFactor=e.multiFactor,q.onAuthStateChanged=e.onAuthStateChanged,q.onIdTokenChanged=e.onIdTokenChanged,q.parseActionCodeURL=e.parseActionCodeURL,q.prodErrorMap=e.prodErrorMap,q.reauthenticateWithCredential=e.reauthenticateWithCredential,q.reauthenticateWithPhoneNumber=e.reauthenticateWithPhoneNumber,q.reauthenticateWithPopup=e.reauthenticateWithPopup,q.reauthenticateWithRedirect=e.reauthenticateWithRedirect,q.reload=e.reload,q.revokeAccessToken=e.revokeAccessToken,q.sendEmailVerification=e.sendEmailVerification,q.sendPasswordResetEmail=e.sendPasswordResetEmail,q.sendSignInLinkToEmail=e.sendSignInLinkToEmail,q.setPersistence=e.setPersistence,q.signInAnonymously=e.signInAnonymously,q.signInWithCredential=e.signInWithCredential,q.signInWithCustomToken=e.signInWithCustomToken,q.signInWithEmailAndPassword=e.signInWithEmailAndPassword,q.signInWithEmailLink=e.signInWithEmailLink,q.signInWithPhoneNumber=e.signInWithPhoneNumber,q.signInWithPopup=e.signInWithPopup,q.signInWithRedirect=e.signInWithRedirect,q.signOut=e.signOut,q.unlink=e.unlink,q.updateCurrentUser=e.updateCurrentUser,q.updateEmail=e.updateEmail,q.updatePassword=e.updatePassword,q.updatePhoneNumber=e.updatePhoneNumber,q.updateProfile=e.updateProfile,q.useDeviceLanguage=e.useDeviceLanguage,q.validatePassword=e.validatePassword,q.verifyBeforeUpdateEmail=e.verifyBeforeUpdateEmail,q.verifyPasswordResetCode=e.verifyPasswordResetCode,q}var Yc;function Ey(){return Yc||(Yc=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=by();Object.keys(t).forEach(function(r){r!=="default"&&!e.hasOwnProperty(r)&&Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})})}(js)),js}var Qn=Ey();const yE={"auth/user-not-found":"Identifiants incorrect","auth/wrong-password":"Identifiants incorrect","auth/invalid-email":"E-mail invalide","auth/too-many-requests":"Trop de tentatives de connexion"},Iy=G_("userFirebase",()=>{const{$auth:e}=We(),t=tr(null),r=async()=>new Promise(p=>{const g=Qn.onAuthStateChanged(e,m=>{g(),t.value=m?{id:m.uid,email:m.email}:null,p(!!m)})}),i=async(p,g)=>{if(!(await Qn.signInWithEmailAndPassword(e,p,g)).user)throw new Error("Invalid credentials");await u()},a=async(p,g)=>{if(!(await Qn.createUserWithEmailAndPassword(e,p,g)).user)throw new Error("Invalid credentials");await u()},c=async()=>{await Qn.signOut(e),t.value=null},u=async()=>new Promise(p=>{const g=Qn.onAuthStateChanged(e,async m=>{if(g(),m){const _=await m.getIdToken(!0);t.value={id:m.uid,email:m.email,token:_}}else t.value=null;p()})});return{isAuthenticating:r,connectAccount:i,createAccount:a,logout:c,fetchUser:u,user:t}}),wy=async e=>{let t,r;const i=Iy(),a=([t,r]=$n(()=>i.isAuthenticating()),t=await t,r(),t);if((e.name==="auth-register"||e.name==="auth")&&a)return pc({name:"dashboard"});if(e.name==="dashboard"&&!a)return pc({name:"auth"})},Ty=async e=>{let t,r;const i=([t,r]=$n(()=>Jo({path:e.path})),t=await t,r(),t);if(i.redirect)return qn(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},Ay=[Z_,wy,Ty],Ar={};function Sy(e,t,r){const{pathname:i,search:a,hash:c}=t,u=e.indexOf("#");if(u>-1){const m=c.includes(e.slice(u))?e.slice(u).length:1;let _=c.slice(m);return _[0]!=="/"&&(_="/"+_),dc(_,"")}const p=dc(i,e),g=!r||Pm(p,r,{trailingSlash:!0})?p:r;return g+(g.includes("?")?"":a)+c}const Ry=ut({name:"nuxt:router",enforce:"pre",async setup(e){var W;let t,r,i=Ai().app.baseURL;const a=((W=Tt.history)==null?void 0:W.call(Tt,i))??$g(i),c=Tt.routes?([t,r]=$n(()=>Tt.routes(Fs)),t=await t,r(),t??Fs):Fs;let u;const p=h_({...Tt,scrollBehavior:(j,Y,$)=>{if(Y===xt){u=$;return}if(Tt.scrollBehavior){if(p.options.scrollBehavior=Tt.scrollBehavior,"scrollRestoration"in window.history){const re=p.beforeEach(()=>{re(),window.history.scrollRestoration="manual"})}return Tt.scrollBehavior(j,xt,u||$)}},history:a,routes:c});Tt.routes&&Tt.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(p);const g=Pr(p.currentRoute.value);p.afterEach((j,Y)=>{g.value=Y}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>g.value});const m=Sy(i,window.location,e.payload.path),_=Pr(p.currentRoute.value),A=()=>{_.value=p.currentRoute.value};e.hook("page:finish",A),p.afterEach((j,Y)=>{var $,re,se,oe;((re=($=j.matched[0])==null?void 0:$.components)==null?void 0:re.default)===((oe=(se=Y.matched[0])==null?void 0:se.components)==null?void 0:oe.default)&&A()});const I={};for(const j in _.value)Object.defineProperty(I,j,{get:()=>_.value[j],enumerable:!0});e._route=jn(I),e._middleware=e._middleware||{global:[],named:{}};const S=Go();p.afterEach(async(j,Y,$)=>{delete e._processingMiddleware,!e.isHydrating&&S.value&&await e.runWithContext(Km),$&&await e.callHook("page:loading:end")});try{[t,r]=$n(()=>p.isReady()),await t,r()}catch(j){[t,r]=$n(()=>e.runWithContext(()=>br(j))),await t,r()}const U=m!==p.currentRoute.value.fullPath?p.resolve(m):p.currentRoute.value;A();const G=e.payload.state._layout;return p.beforeEach(async(j,Y)=>{var $;await e.callHook("page:loading:start"),j.meta=zn(j.meta),e.isHydrating&&G&&!rp(j.meta.layout)&&(j.meta.layout=G),e._processingMiddleware=!0;{const re=new Set([...Ay,...e._middleware.global]);for(const se of j.matched){const oe=se.meta.middleware;if(oe)for(const le of Tu(oe))re.add(le)}{const se=await e.runWithContext(()=>Jo({path:j.path}));if(se.appMiddleware)for(const oe in se.appMiddleware)se.appMiddleware[oe]?re.add(oe):re.delete(oe)}for(const se of re){const oe=typeof se=="string"?e._middleware.named[se]||await(($=Ar[se])==null?void 0:$.call(Ar).then(de=>de.default||de)):se;if(!oe)throw new Error(`Unknown route middleware: '${se}'.`);const le=await e.runWithContext(()=>oe(j,Y));if(!e.payload.serverRendered&&e.isHydrating&&(le===!1||le instanceof Error)){const de=le||ho({statusCode:404,statusMessage:`Page Not Found: ${m}`});return await e.runWithContext(()=>br(de)),!1}if(le!==!0&&(le||le===!1))return le}}}),p.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),p.afterEach(async(j,Y)=>{j.matched.length===0&&await e.runWithContext(()=>br(ho({statusCode:404,fatal:!1,statusMessage:`Page not found: ${j.fullPath}`,data:{path:j.fullPath}})))}),e.hooks.hookOnce("app:created",async()=>{try{"name"in U&&(U.name=void 0),await p.replace({...U,force:!0}),p.options.scrollBehavior=Tt.scrollBehavior}catch(j){await e.runWithContext(()=>br(j))}}),{provide:{router:p}}}}),Py=ut({name:"nuxt:payload",setup(e){an().beforeResolve(async(t,r)=>{if(t.path===r.path)return;const i=await _c(t.path);i&&Object.assign(e.static.data,i.data)}),Yo(()=>{var t;e.hooks.hook("link:prefetch",async r=>{const{hostname:i}=new URL(r,window.location.href);i===window.location.hostname&&await _c(r)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(Ri,1e3)})}}),ky=ut(()=>{const e=an();Yo(()=>{e.beforeResolve(async()=>{await new Promise(t=>{setTimeout(t,100),requestAnimationFrame(()=>{setTimeout(t,0)})})})})}),Cy=ut(e=>{let t;async function r(){const i=await Ri();t&&clearTimeout(t),t=setTimeout(r,rc);try{const a=await $fetch(Xo("builds/latest.json")+`?${Date.now()}`);a.id!==i.id&&e.hooks.callHook("app:manifest:update",a)}catch{}}Yo(()=>{t=setTimeout(r,rc)})}),Oy=ut({name:"nuxt:chunk-reload",setup(e){const t=an(),r=Ai(),i=new Set;t.beforeEach(()=>{i.clear()}),e.hook("app:chunkError",({error:c})=>{i.add(c)});function a(c){const p="href"in c&&c.href[0]==="#"?r.app.baseURL+c.href:qo(r.app.baseURL,c.fullPath);dg({path:p,persistState:!0})}e.hook("app:manifest:update",()=>{t.beforeResolve(a)}),t.onError((c,u)=>{i.has(c)&&a(u)})}}),Ny=ut({name:"pinia",setup(e){const t=V_();return e.vueApp.use(t),Lr(t),e.payload&&e.payload.pinia&&(t.state.value=e.payload.pinia),{provide:{pinia:t}}}}),Ly=ut({name:"nuxt:global-components"}),ii={dashboard:Cs(()=>Ut(()=>import("./CmV_MKK0.js"),__vite__mapDeps([39,40,2,3,41,33,17,8,4,9,42]),import.meta.url).then(e=>e.default||e)),default:Cs(()=>Ut(()=>import("./CKYwKROE.js"),__vite__mapDeps([43,44,2,3,45,8,4,9]),import.meta.url).then(e=>e.default||e)),profile:Cs(()=>Ut(()=>import("./C4foexxC.js"),__vite__mapDeps([46,44,2,3,45,8,4,9,47]),import.meta.url).then(e=>e.default||e))},Dy=ut({name:"nuxt:prefetch",setup(e){const t=an();e.hooks.hook("app:mounted",()=>{t.beforeEach(async r=>{var a;const i=(a=r==null?void 0:r.meta)==null?void 0:a.layout;i&&typeof ii[i]=="function"&&await ii[i]()})}),e.hooks.hook("link:prefetch",r=>{if(qn(r))return;const i=t.resolve(r);if(!i)return;const a=i.meta.layout;let c=Tu(i.meta.middleware);c=c.filter(u=>typeof u=="string");for(const u of c)typeof Ar[u]=="function"&&Ar[u]();a&&typeof ii[a]=="function"&&ii[a]()})}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function My(e,t,r){return(t=xy(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Xc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,i)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Xc(Object(r),!0).forEach(function(i){My(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xc(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Uy(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xy(e){var t=Uy(e,"string");return typeof t=="symbol"?t:t+""}const Jc=()=>{};let ra={},ed={},td=null,nd={mark:Jc,measure:Jc};try{typeof window<"u"&&(ra=window),typeof document<"u"&&(ed=document),typeof MutationObserver<"u"&&(td=MutationObserver),typeof performance<"u"&&(nd=performance)}catch{}const{userAgent:Qc=""}=ra.navigator||{},An=ra,Ne=ed,Zc=td,si=nd;An.document;const un=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",rd=~Qc.indexOf("MSIE")||~Qc.indexOf("Trident/");var Fy=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,jy=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,id={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Hy={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sd=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],it="classic",Li="duotone",Vy="sharp",$y="sharp-duotone",od=[it,Li,Vy,$y],Wy={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},By={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},zy=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),qy={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Gy=["fak","fa-kit","fakd","fa-kit-duotone"],el={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ky=["kit"],Yy={kit:{"fa-kit":"fak"}},Xy=["fak","fakd"],Jy={kit:{fak:"fa-kit"}},tl={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Zy=["fak","fa-kit","fakd","fa-kit-duotone"],ev={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},nv={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ao={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},rv=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],So=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Qy,...rv],iv=["solid","regular","light","thin","duotone","brands"],ad=[1,2,3,4,5,6,7,8,9,10],sv=ad.concat([11,12,13,14,15,16,17,18,19,20]),ov=[...Object.keys(nv),...iv,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oi.GROUP,oi.SWAP_OPACITY,oi.PRIMARY,oi.SECONDARY].concat(ad.map(e=>"".concat(e,"x"))).concat(sv.map(e=>"w-".concat(e))),av={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cn="___FONT_AWESOME___",Ro=16,cd="fa",ld="svg-inline--fa",Wn="data-fa-i2svg",Po="data-fa-pseudo-element",cv="data-fa-pseudo-element-pending",ia="data-prefix",sa="data-icon",nl="fontawesome-i2svg",lv="async",uv=["HTML","HEAD","STYLE","SCRIPT"],ud=(()=>{try{return!0}catch{return!1}})();function Mr(e){return new Proxy(e,{get(t,r){return r in t?t[r]:t[it]}})}const dd=V({},id);dd[it]=V(V(V(V({},{"fa-duotone":"duotone"}),id[it]),el.kit),el["kit-duotone"]);const dv=Mr(dd),ko=V({},qy);ko[it]=V(V(V(V({},{duotone:"fad"}),ko[it]),tl.kit),tl["kit-duotone"]);const rl=Mr(ko),Co=V({},Ao);Co[it]=V(V({},Co[it]),Jy.kit);const oa=Mr(Co),Oo=V({},tv);Oo[it]=V(V({},Oo[it]),Yy.kit);Mr(Oo);const fv=Fy,fd="fa-layers-text",hv=jy,pv=V({},Wy);Mr(pv);const mv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bs=Hy,gv=[...Ky,...ov],Sr=An.FontAwesomeConfig||{};function _v(e){var t=Ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Ne&&typeof Ne.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[r,i]=t;const a=yv(_v(r));a!=null&&(Sr[i]=a)});const hd={styleDefault:"solid",familyDefault:it,cssPrefix:cd,replacementClass:ld,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Sr.familyPrefix&&(Sr.cssPrefix=Sr.familyPrefix);const sr=V(V({},hd),Sr);sr.autoReplaceSvg||(sr.observeMutations=!1);const ie={};Object.keys(hd).forEach(e=>{Object.defineProperty(ie,e,{enumerable:!0,set:function(t){sr[e]=t,Rr.forEach(r=>r(ie))},get:function(){return sr[e]}})});Object.defineProperty(ie,"familyPrefix",{enumerable:!0,set:function(e){sr.cssPrefix=e,Rr.forEach(t=>t(ie))},get:function(){return sr.cssPrefix}});An.FontAwesomeConfig=ie;const Rr=[];function vv(e){return Rr.push(e),()=>{Rr.splice(Rr.indexOf(e),1)}}const En=Ro,Xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bv(e){if(!e||!un)return;const t=Ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const r=Ne.head.childNodes;let i=null;for(let a=r.length-1;a>-1;a--){const c=r[a],u=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(i=c)}return Ne.head.insertBefore(t,i),e}const Ev="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Or(){let e=12,t="";for(;e-- >0;)t+=Ev[Math.random()*62|0];return t}function or(e){const t=[];for(let r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function aa(e){return e.classList?or(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function pd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Iv(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,'="').concat(pd(e[r]),'" '),"").trim()}function Di(e){return Object.keys(e||{}).reduce((t,r)=>t+"".concat(r,": ").concat(e[r].trim(),";"),"")}function ca(e){return e.size!==Xt.size||e.x!==Xt.x||e.y!==Xt.y||e.rotate!==Xt.rotate||e.flipX||e.flipY}function wv(e){let{transform:t,containerWidth:r,iconWidth:i}=e;const a={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(t.x*32,", ").concat(t.y*32,") "),u="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),p="rotate(".concat(t.rotate," 0 0)"),g={transform:"".concat(c," ").concat(u," ").concat(p)},m={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:g,path:m}}function Tv(e){let{transform:t,width:r=Ro,height:i=Ro,startCentered:a=!1}=e,c="";return a&&rd?c+="translate(".concat(t.x/En-r/2,"em, ").concat(t.y/En-i/2,"em) "):a?c+="translate(calc(-50% + ".concat(t.x/En,"em), calc(-50% + ").concat(t.y/En,"em)) "):c+="translate(".concat(t.x/En,"em, ").concat(t.y/En,"em) "),c+="scale(".concat(t.size/En*(t.flipX?-1:1),", ").concat(t.size/En*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Av=`:root, :host {
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
}`;function md(){const e=cd,t=ld,r=ie.cssPrefix,i=ie.replacementClass;let a=Av;if(r!==e||i!==t){const c=new RegExp("\\.".concat(e,"\\-"),"g"),u=new RegExp("\\--".concat(e,"\\-"),"g"),p=new RegExp("\\.".concat(t),"g");a=a.replace(c,".".concat(r,"-")).replace(u,"--".concat(r,"-")).replace(p,".".concat(i))}return a}let il=!1;function zs(){ie.autoAddCss&&!il&&(bv(md()),il=!0)}var Sv={mixout(){return{dom:{css:md,insertCss:zs}}},hooks(){return{beforeDOMElementCreation(){zs()},beforeI2svg(){zs()}}}};const ln=An||{};ln[cn]||(ln[cn]={});ln[cn].styles||(ln[cn].styles={});ln[cn].hooks||(ln[cn].hooks={});ln[cn].shims||(ln[cn].shims=[]);var Jt=ln[cn];const gd=[],_d=function(){Ne.removeEventListener("DOMContentLoaded",_d),wi=1,gd.map(e=>e())};let wi=!1;un&&(wi=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),wi||Ne.addEventListener("DOMContentLoaded",_d));function Rv(e){un&&(wi?setTimeout(e,0):gd.push(e))}function Ur(e){const{tag:t,attributes:r={},children:i=[]}=e;return typeof e=="string"?pd(e):"<".concat(t," ").concat(Iv(r),">").concat(i.map(Ur).join(""),"</").concat(t,">")}function sl(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var qs=function(t,r,i,a){var c=Object.keys(t),u=c.length,p=r,g,m,_;for(i===void 0?(g=1,_=t[c[0]]):(g=0,_=i);g<u;g++)m=c[g],_=p(_,t[m],m,t);return _};function Pv(e){const t=[];let r=0;const i=e.length;for(;r<i;){const a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<i){const c=e.charCodeAt(r++);(c&64512)==56320?t.push(((a&1023)<<10)+(c&1023)+65536):(t.push(a),r--)}else t.push(a)}return t}function No(e){const t=Pv(e);return t.length===1?t[0].toString(16):null}function kv(e,t){const r=e.length;let i=e.charCodeAt(t),a;return i>=55296&&i<=56319&&r>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}function ol(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return!!i.icon?t[i.iconName]=i.icon:t[r]=i,t},{})}function Lo(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=r,a=ol(t);typeof Jt.hooks.addPack=="function"&&!i?Jt.hooks.addPack(e,ol(t)):Jt.styles[e]=V(V({},Jt.styles[e]||{}),a),e==="fas"&&Lo("fa",t)}const{styles:Nr,shims:Cv}=Jt,yd=Object.keys(oa),Ov=yd.reduce((e,t)=>(e[t]=Object.keys(oa[t]),e),{});let la=null,vd={},bd={},Ed={},Id={},wd={};function Nv(e){return~gv.indexOf(e)}function Lv(e,t){const r=t.split("-"),i=r[0],a=r.slice(1).join("-");return i===e&&a!==""&&!Nv(a)?a:null}const Td=()=>{const e=i=>qs(Nr,(a,c,u)=>(a[u]=qs(c,i,{}),a),{});vd=e((i,a,c)=>(a[3]&&(i[a[3]]=c),a[2]&&a[2].filter(p=>typeof p=="number").forEach(p=>{i[p.toString(16)]=c}),i)),bd=e((i,a,c)=>(i[c]=c,a[2]&&a[2].filter(p=>typeof p=="string").forEach(p=>{i[p]=c}),i)),wd=e((i,a,c)=>{const u=a[2];return i[c]=c,u.forEach(p=>{i[p]=c}),i});const t="far"in Nr||ie.autoFetchSvg,r=qs(Cv,(i,a)=>{const c=a[0];let u=a[1];const p=a[2];return u==="far"&&!t&&(u="fas"),typeof c=="string"&&(i.names[c]={prefix:u,iconName:p}),typeof c=="number"&&(i.unicodes[c.toString(16)]={prefix:u,iconName:p}),i},{names:{},unicodes:{}});Ed=r.names,Id=r.unicodes,la=Mi(ie.styleDefault,{family:ie.familyDefault})};vv(e=>{la=Mi(e.styleDefault,{family:ie.familyDefault})});Td();function ua(e,t){return(vd[e]||{})[t]}function Dv(e,t){return(bd[e]||{})[t]}function Hn(e,t){return(wd[e]||{})[t]}function Ad(e){return Ed[e]||{prefix:null,iconName:null}}function Mv(e){const t=Id[e],r=ua("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Sn(){return la}const Sd=()=>({prefix:null,iconName:null,rest:[]});function Uv(e){let t=it;const r=yd.reduce((i,a)=>(i[a]="".concat(ie.cssPrefix,"-").concat(a),i),{});return od.forEach(i=>{(e.includes(r[i])||e.some(a=>Ov[i].includes(a)))&&(t=i)}),t}function Mi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:r=it}=t,i=dv[r][e];if(r===Li&&!e)return"fad";const a=rl[r][e]||rl[r][i],c=e in Jt.styles?e:null;return a||c||null}function xv(e){let t=[],r=null;return e.forEach(i=>{const a=Lv(ie.cssPrefix,i);a?r=a:i&&t.push(i)}),{iconName:r,rest:t}}function al(e){return e.sort().filter((t,r,i)=>i.indexOf(t)===r)}function Ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:r=!1}=t;let i=null;const a=So.concat(Zy),c=al(e.filter(A=>a.includes(A))),u=al(e.filter(A=>!So.includes(A))),p=c.filter(A=>(i=A,!sd.includes(A))),[g=null]=p,m=Uv(c),_=V(V({},xv(u)),{},{prefix:Mi(g,{family:m})});return V(V(V({},_),Vv({values:e,family:m,styles:Nr,config:ie,canonical:_,givenPrefix:i})),Fv(r,i,_))}function Fv(e,t,r){let{prefix:i,iconName:a}=r;if(e||!i||!a)return{prefix:i,iconName:a};const c=t==="fa"?Ad(a):{},u=Hn(i,a);return a=c.iconName||u||a,i=c.prefix||i,i==="far"&&!Nr.far&&Nr.fas&&!ie.autoFetchSvg&&(i="fas"),{prefix:i,iconName:a}}const jv=od.filter(e=>e!==it||e!==Li),Hv=Object.keys(Ao).filter(e=>e!==it).map(e=>Object.keys(Ao[e])).flat();function Vv(e){const{values:t,family:r,canonical:i,givenPrefix:a="",styles:c={},config:u={}}=e,p=r===Li,g=t.includes("fa-duotone")||t.includes("fad"),m=u.familyDefault==="duotone",_=i.prefix==="fad"||i.prefix==="fa-duotone";if(!p&&(g||m||_)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&jv.includes(r)&&(Object.keys(c).find(I=>Hv.includes(I))||u.autoFetchSvg)){const I=zy.get(r).defaultShortPrefixId;i.prefix=I,i.iconName=Hn(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||a==="fa")&&(i.prefix=Sn()||"fas"),i}class $v{constructor(){this.definitions={}}add(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];const a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(c=>{this.definitions[c]=V(V({},this.definitions[c]||{}),a[c]),Lo(c,a[c]);const u=oa[it][c];u&&Lo(u,a[c]),Td()})}reset(){this.definitions={}}_pullDefinitions(t,r){const i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(a=>{const{prefix:c,iconName:u,icon:p}=i[a],g=p[2];t[c]||(t[c]={}),g.length>0&&g.forEach(m=>{typeof m=="string"&&(t[c][m]=p)}),t[c][u]=p}),t}}let cl=[],Zn={};const er={},Wv=Object.keys(er);function Bv(e,t){let{mixoutsTo:r}=t;return cl=e,Zn={},Object.keys(er).forEach(i=>{Wv.indexOf(i)===-1&&delete er[i]}),cl.forEach(i=>{const a=i.mixout?i.mixout():{};if(Object.keys(a).forEach(c=>{typeof a[c]=="function"&&(r[c]=a[c]),typeof a[c]=="object"&&Object.keys(a[c]).forEach(u=>{r[c]||(r[c]={}),r[c][u]=a[c][u]})}),i.hooks){const c=i.hooks();Object.keys(c).forEach(u=>{Zn[u]||(Zn[u]=[]),Zn[u].push(c[u])})}i.provides&&i.provides(er)}),r}function Do(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return(Zn[e]||[]).forEach(u=>{t=u.apply(null,[t,...i])}),t}function Bn(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];(Zn[e]||[]).forEach(c=>{c.apply(null,r)})}function Rn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return er[e]?er[e].apply(null,t):void 0}function Mo(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const r=e.prefix||Sn();if(t)return t=Hn(r,t)||t,sl(Rd.definitions,r,t)||sl(Jt.styles,r,t)}const Rd=new $v,zv=()=>{ie.autoReplaceSvg=!1,ie.observeMutations=!1,Bn("noAuto")},qv={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(Bn("beforeI2svg",e),Rn("pseudoElements2svg",e),Rn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;ie.autoReplaceSvg===!1&&(ie.autoReplaceSvg=!0),ie.observeMutations=!0,Rv(()=>{Kv({autoReplaceSvgRoot:t}),Bn("watch",e)})}},Gv={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Hn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Mi(e[0]);return{prefix:r,iconName:Hn(r,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(ie.cssPrefix,"-"))>-1||e.match(fv))){const t=Ui(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Sn(),iconName:Hn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Sn();return{prefix:t,iconName:Hn(t,e)||e}}}},_t={noAuto:zv,config:ie,dom:qv,parse:Gv,library:Rd,findIconDefinition:Mo,toHtml:Ur},Kv=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Ne}=e;(Object.keys(Jt.styles).length>0||ie.autoFetchSvg)&&un&&ie.autoReplaceSvg&&_t.dom.i2svg({node:t})};function xi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(r=>Ur(r))}}),Object.defineProperty(e,"node",{get:function(){if(!un)return;const r=Ne.createElement("div");return r.innerHTML=e.html,r.children}}),e}function Yv(e){let{children:t,main:r,mask:i,attributes:a,styles:c,transform:u}=e;if(ca(u)&&r.found&&!i.found){const{width:p,height:g}=r,m={x:p/g/2,y:.5};a.style=Di(V(V({},c),{},{"transform-origin":"".concat(m.x+u.x/16,"em ").concat(m.y+u.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xv(e){let{prefix:t,iconName:r,children:i,attributes:a,symbol:c}=e;const u=c===!0?"".concat(t,"-").concat(ie.cssPrefix,"-").concat(r):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},a),{},{id:u}),children:i}]}]}function da(e){const{icons:{main:t,mask:r},prefix:i,iconName:a,transform:c,symbol:u,title:p,maskId:g,titleId:m,extra:_,watchable:A=!1}=e,{width:I,height:S}=r.found?r:t,U=Xy.includes(i),G=[ie.replacementClass,a?"".concat(ie.cssPrefix,"-").concat(a):""].filter(se=>_.classes.indexOf(se)===-1).filter(se=>se!==""||!!se).concat(_.classes).join(" ");let W={children:[],attributes:V(V({},_.attributes),{},{"data-prefix":i,"data-icon":a,class:G,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(S)})};const j=U&&!~_.classes.indexOf("fa-fw")?{width:"".concat(I/S*16*.0625,"em")}:{};A&&(W.attributes[Wn]=""),p&&(W.children.push({tag:"title",attributes:{id:W.attributes["aria-labelledby"]||"title-".concat(m||Or())},children:[p]}),delete W.attributes.title);const Y=V(V({},W),{},{prefix:i,iconName:a,main:t,mask:r,maskId:g,transform:c,symbol:u,styles:V(V({},j),_.styles)}),{children:$,attributes:re}=r.found&&t.found?Rn("generateAbstractMask",Y)||{children:[],attributes:{}}:Rn("generateAbstractIcon",Y)||{children:[],attributes:{}};return Y.children=$,Y.attributes=re,u?Xv(Y):Yv(Y)}function ll(e){const{content:t,width:r,height:i,transform:a,title:c,extra:u,watchable:p=!1}=e,g=V(V(V({},u.attributes),c?{title:c}:{}),{},{class:u.classes.join(" ")});p&&(g[Wn]="");const m=V({},u.styles);ca(a)&&(m.transform=Tv({transform:a,startCentered:!0,width:r,height:i}),m["-webkit-transform"]=m.transform);const _=Di(m);_.length>0&&(g.style=_);const A=[];return A.push({tag:"span",attributes:g,children:[t]}),c&&A.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),A}function Jv(e){const{content:t,title:r,extra:i}=e,a=V(V(V({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")}),c=Di(i.styles);c.length>0&&(a.style=c);const u=[];return u.push({tag:"span",attributes:a,children:[t]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}const{styles:Gs}=Jt;function Uo(e){const t=e[0],r=e[1],[i]=e.slice(4);let a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Bs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Bs.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(Bs.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:r,icon:a}}const Qv={found:!1,width:512,height:512};function Zv(e,t){!ud&&!ie.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xo(e,t){let r=t;return t==="fa"&&ie.styleDefault!==null&&(t=Sn()),new Promise((i,a)=>{if(r==="fa"){const c=Ad(e)||{};e=c.iconName||e,t=c.prefix||t}if(e&&t&&Gs[t]&&Gs[t][e]){const c=Gs[t][e];return i(Uo(c))}Zv(e,t),i(V(V({},Qv),{},{icon:ie.showMissingIcons&&e?Rn("missingIconAbstract")||{}:{}}))})}const ul=()=>{},Fo=ie.measurePerformance&&si&&si.mark&&si.measure?si:{mark:ul,measure:ul},Er='FA "6.7.2"',eb=e=>(Fo.mark("".concat(Er," ").concat(e," begins")),()=>Pd(e)),Pd=e=>{Fo.mark("".concat(Er," ").concat(e," ends")),Fo.measure("".concat(Er," ").concat(e),"".concat(Er," ").concat(e," begins"),"".concat(Er," ").concat(e," ends"))};var fa={begin:eb,end:Pd};const fi=()=>{};function dl(e){return typeof(e.getAttribute?e.getAttribute(Wn):null)=="string"}function tb(e){const t=e.getAttribute?e.getAttribute(ia):null,r=e.getAttribute?e.getAttribute(sa):null;return t&&r}function nb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(ie.replacementClass)}function rb(){return ie.autoReplaceSvg===!0?hi.replace:hi[ie.autoReplaceSvg]||hi.replace}function ib(e){return Ne.createElementNS("http://www.w3.org/2000/svg",e)}function sb(e){return Ne.createElement(e)}function kd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:r=e.tag==="svg"?ib:sb}=t;if(typeof e=="string")return Ne.createTextNode(e);const i=r(e.tag);return Object.keys(e.attributes||[]).forEach(function(c){i.setAttribute(c,e.attributes[c])}),(e.children||[]).forEach(function(c){i.appendChild(kd(c,{ceFn:r}))}),i}function ob(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const hi={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(r=>{t.parentNode.insertBefore(kd(r),t)}),t.getAttribute(Wn)===null&&ie.keepOriginalSource){let r=Ne.createComment(ob(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(e){const t=e[0],r=e[1];if(~aa(t).indexOf(ie.replacementClass))return hi.replace(e);const i=new RegExp("".concat(ie.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){const c=r[0].attributes.class.split(" ").reduce((u,p)=>(p===ie.replacementClass||p.match(i)?u.toSvg.push(p):u.toNode.push(p),u),{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",c.toNode.join(" "))}const a=r.map(c=>Ur(c)).join(`
`);t.setAttribute(Wn,""),t.innerHTML=a}};function fl(e){e()}function Cd(e,t){const r=typeof t=="function"?t:fi;if(e.length===0)r();else{let i=fl;ie.mutateApproach===lv&&(i=An.requestAnimationFrame||fl),i(()=>{const a=rb(),c=fa.begin("mutate");e.map(a),c(),r()})}}let ha=!1;function Od(){ha=!0}function jo(){ha=!1}let Ti=null;function hl(e){if(!Zc||!ie.observeMutations)return;const{treeCallback:t=fi,nodeCallback:r=fi,pseudoElementsCallback:i=fi,observeMutationsRoot:a=Ne}=e;Ti=new Zc(c=>{if(ha)return;const u=Sn();or(c).forEach(p=>{if(p.type==="childList"&&p.addedNodes.length>0&&!dl(p.addedNodes[0])&&(ie.searchPseudoElements&&i(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&ie.searchPseudoElements&&i(p.target.parentNode),p.type==="attributes"&&dl(p.target)&&~mv.indexOf(p.attributeName))if(p.attributeName==="class"&&tb(p.target)){const{prefix:g,iconName:m}=Ui(aa(p.target));p.target.setAttribute(ia,g||u),m&&p.target.setAttribute(sa,m)}else nb(p.target)&&r(p.target)})}),un&&Ti.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ab(){Ti&&Ti.disconnect()}function cb(e){const t=e.getAttribute("style");let r=[];return t&&(r=t.split(";").reduce((i,a)=>{const c=a.split(":"),u=c[0],p=c.slice(1);return u&&p.length>0&&(i[u]=p.join(":").trim()),i},{})),r}function lb(e){const t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"";let a=Ui(aa(e));return a.prefix||(a.prefix=Sn()),t&&r&&(a.prefix=t,a.iconName=r),a.iconName&&a.prefix||(a.prefix&&i.length>0&&(a.iconName=Dv(a.prefix,e.innerText)||ua(a.prefix,No(e.innerText))),!a.iconName&&ie.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ub(e){const t=or(e.attributes).reduce((a,c)=>(a.name!=="class"&&a.name!=="style"&&(a[c.name]=c.value),a),{}),r=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return ie.autoA11y&&(r?t["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(i||Or()):(t["aria-hidden"]="true",t.focusable="false")),t}function db(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:r,prefix:i,rest:a}=lb(e),c=ub(e),u=Do("parseNodeAttributes",{},e);let p=t.styleParser?cb(e):[];return V({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:p,attributes:c}},u)}const{styles:fb}=Jt;function Nd(e){const t=ie.autoReplaceSvg==="nest"?pl(e,{styleParser:!1}):pl(e);return~t.extra.classes.indexOf(fd)?Rn("generateLayersText",e,t):Rn("generateSvgReplacementMutation",e,t)}function hb(){return[...Gy,...So]}function ml(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();const r=Ne.documentElement.classList,i=_=>r.add("".concat(nl,"-").concat(_)),a=_=>r.remove("".concat(nl,"-").concat(_)),c=ie.autoFetchSvg?hb():sd.concat(Object.keys(fb));c.includes("fa")||c.push("fa");const u=[".".concat(fd,":not([").concat(Wn,"])")].concat(c.map(_=>".".concat(_,":not([").concat(Wn,"])"))).join(", ");if(u.length===0)return Promise.resolve();let p=[];try{p=or(e.querySelectorAll(u))}catch{}if(p.length>0)i("pending"),a("complete");else return Promise.resolve();const g=fa.begin("onTree"),m=p.reduce((_,A)=>{try{const I=Nd(A);I&&_.push(I)}catch(I){ud||I.name==="MissingIcon"&&console.error(I)}return _},[]);return new Promise((_,A)=>{Promise.all(m).then(I=>{Cd(I,()=>{i("active"),i("complete"),a("pending"),typeof t=="function"&&t(),g(),_()})}).catch(I=>{g(),A(I)})})}function pb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nd(e).then(r=>{r&&Cd([r],t)})}function mb(e){return function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(t||{}).icon?t:Mo(t||{});let{mask:a}=r;return a&&(a=(a||{}).icon?a:Mo(a||{})),e(i,V(V({},r),{},{mask:a}))}}const gb=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Xt,symbol:i=!1,mask:a=null,maskId:c=null,title:u=null,titleId:p=null,classes:g=[],attributes:m={},styles:_={}}=t;if(!e)return;const{prefix:A,iconName:I,icon:S}=e;return xi(V({type:"icon"},e),()=>(Bn("beforeDOMElementCreation",{iconDefinition:e,params:t}),ie.autoA11y&&(u?m["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(p||Or()):(m["aria-hidden"]="true",m.focusable="false")),da({icons:{main:Uo(S),mask:a?Uo(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:I,transform:V(V({},Xt),r),symbol:i,title:u,maskId:c,titleId:p,extra:{attributes:m,styles:_,classes:g}})))};var _b={mixout(){return{icon:mb(gb)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ml,e.nodeCallback=pb,e}}},provides(e){e.i2svg=function(t){const{node:r=Ne,callback:i=()=>{}}=t;return ml(r,i)},e.generateSvgReplacementMutation=function(t,r){const{iconName:i,title:a,titleId:c,prefix:u,transform:p,symbol:g,mask:m,maskId:_,extra:A}=r;return new Promise((I,S)=>{Promise.all([xo(i,u),m.iconName?xo(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(U=>{let[G,W]=U;I([t,da({icons:{main:G,mask:W},prefix:u,iconName:i,transform:p,symbol:g,maskId:_,title:a,titleId:c,extra:A,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){let{children:r,attributes:i,main:a,transform:c,styles:u}=t;const p=Di(u);p.length>0&&(i.style=p);let g;return ca(c)&&(g=Rn("generateAbstractTransformGrouping",{main:a,transform:c,containerWidth:a.width,iconWidth:a.width})),r.push(g||a.icon),{children:r,attributes:i}}}},yb={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:r=[]}=t;return xi({type:"layer"},()=>{Bn("beforeDOMElementCreation",{assembler:e,params:t});let i=[];return e(a=>{Array.isArray(a)?a.map(c=>{i=i.concat(c.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(ie.cssPrefix,"-layers"),...r].join(" ")},children:i}]})}}}},vb={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:r=null,classes:i=[],attributes:a={},styles:c={}}=t;return xi({type:"counter",content:e},()=>(Bn("beforeDOMElementCreation",{content:e,params:t}),Jv({content:e.toString(),title:r,extra:{attributes:a,styles:c,classes:["".concat(ie.cssPrefix,"-layers-counter"),...i]}})))}}}},bb={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:r=Xt,title:i=null,classes:a=[],attributes:c={},styles:u={}}=t;return xi({type:"text",content:e},()=>(Bn("beforeDOMElementCreation",{content:e,params:t}),ll({content:e,transform:V(V({},Xt),r),title:i,extra:{attributes:c,styles:u,classes:["".concat(ie.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,r){const{title:i,transform:a,extra:c}=r;let u=null,p=null;if(rd){const g=parseInt(getComputedStyle(t).fontSize,10),m=t.getBoundingClientRect();u=m.width/g,p=m.height/g}return ie.autoA11y&&!i&&(c.attributes["aria-hidden"]="true"),Promise.resolve([t,ll({content:t.innerHTML,width:u,height:p,transform:a,title:i,extra:c,watchable:!0})])}}};const Eb=new RegExp('"',"ug"),gl=[1105920,1112319],_l=V(V(V(V({},{FontAwesome:{normal:"fas",400:"fas"}}),By),av),ev),Ho=Object.keys(_l).reduce((e,t)=>(e[t.toLowerCase()]=_l[t],e),{}),Ib=Object.keys(Ho).reduce((e,t)=>{const r=Ho[t];return e[t]=r[900]||[...Object.entries(r)][0][1],e},{});function wb(e){const t=e.replace(Eb,""),r=kv(t,0),i=r>=gl[0]&&r<=gl[1],a=t.length===2?t[0]===t[1]:!1;return{value:No(a?t[0]:t),isSecondary:i||a}}function Tb(e,t){const r=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),a=isNaN(i)?"normal":i;return(Ho[r]||{})[a]||Ib[r]}function yl(e,t){const r="".concat(cv).concat(t.replace(":","-"));return new Promise((i,a)=>{if(e.getAttribute(r)!==null)return i();const u=or(e.children).filter(I=>I.getAttribute(Po)===t)[0],p=An.getComputedStyle(e,t),g=p.getPropertyValue("font-family"),m=g.match(hv),_=p.getPropertyValue("font-weight"),A=p.getPropertyValue("content");if(u&&!m)return e.removeChild(u),i();if(m&&A!=="none"&&A!==""){const I=p.getPropertyValue("content");let S=Tb(g,_);const{value:U,isSecondary:G}=wb(I),W=m[0].startsWith("FontAwesome");let j=ua(S,U),Y=j;if(W){const $=Mv(U);$.iconName&&$.prefix&&(j=$.iconName,S=$.prefix)}if(j&&!G&&(!u||u.getAttribute(ia)!==S||u.getAttribute(sa)!==Y)){e.setAttribute(r,Y),u&&e.removeChild(u);const $=db(),{extra:re}=$;re.attributes[Po]=t,xo(j,S).then(se=>{const oe=da(V(V({},$),{},{icons:{main:se,mask:Sd()},prefix:S,iconName:Y,extra:re,watchable:!0})),le=Ne.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(le,e.firstChild):e.appendChild(le),le.outerHTML=oe.map(de=>Ur(de)).join(`
`),e.removeAttribute(r),i()}).catch(a)}else i()}else i()})}function Ab(e){return Promise.all([yl(e,"::before"),yl(e,"::after")])}function Sb(e){return e.parentNode!==document.head&&!~uv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Po)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vl(e){if(un)return new Promise((t,r)=>{const i=or(e.querySelectorAll("*")).filter(Sb).map(Ab),a=fa.begin("searchPseudoElements");Od(),Promise.all(i).then(()=>{a(),jo(),t()}).catch(()=>{a(),jo(),r()})})}var Rb={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=vl,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:r=Ne}=t;ie.searchPseudoElements&&vl(r)}}};let bl=!1;var Pb={mixout(){return{dom:{unwatch(){Od(),bl=!0}}}},hooks(){return{bootstrap(){hl(Do("mutationObserverCallbacks",{}))},noAuto(){ab()},watch(e){const{observeMutationsRoot:t}=e;bl?jo():hl(Do("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const El=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((r,i)=>{const a=i.toLowerCase().split("-"),c=a[0];let u=a.slice(1).join("-");if(c&&u==="h")return r.flipX=!0,r;if(c&&u==="v")return r.flipY=!0,r;if(u=parseFloat(u),isNaN(u))return r;switch(c){case"grow":r.size=r.size+u;break;case"shrink":r.size=r.size-u;break;case"left":r.x=r.x-u;break;case"right":r.x=r.x+u;break;case"up":r.y=r.y-u;break;case"down":r.y=r.y+u;break;case"rotate":r.rotate=r.rotate+u;break}return r},t)};var kb={mixout(){return{parse:{transform:e=>El(e)}}},hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-transform");return r&&(e.transform=El(r)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:r,transform:i,containerWidth:a,iconWidth:c}=t;const u={transform:"translate(".concat(a/2," 256)")},p="translate(".concat(i.x*32,", ").concat(i.y*32,") "),g="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),m="rotate(".concat(i.rotate," 0 0)"),_={transform:"".concat(p," ").concat(g," ").concat(m)},A={transform:"translate(".concat(c/2*-1," -256)")},I={outer:u,inner:_,path:A};return{tag:"g",attributes:V({},I.outer),children:[{tag:"g",attributes:V({},I.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:V(V({},r.icon.attributes),I.path)}]}]}}}};const Ks={x:0,y:0,width:"100%",height:"100%"};function Il(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cb(e){return e.tag==="g"?e.children:[e]}var Ob={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-mask"),i=r?Ui(r.split(" ").map(a=>a.trim())):Sd();return i.prefix||(i.prefix=Sn()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:r,attributes:i,main:a,mask:c,maskId:u,transform:p}=t;const{width:g,icon:m}=a,{width:_,icon:A}=c,I=wv({transform:p,containerWidth:_,iconWidth:g}),S={tag:"rect",attributes:V(V({},Ks),{},{fill:"white"})},U=m.children?{children:m.children.map(Il)}:{},G={tag:"g",attributes:V({},I.inner),children:[Il(V({tag:m.tag,attributes:V(V({},m.attributes),I.path)},U))]},W={tag:"g",attributes:V({},I.outer),children:[G]},j="mask-".concat(u||Or()),Y="clip-".concat(u||Or()),$={tag:"mask",attributes:V(V({},Ks),{},{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,W]},re={tag:"defs",children:[{tag:"clipPath",attributes:{id:Y},children:Cb(A)},$]};return r.push(re,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(Y,")"),mask:"url(#".concat(j,")")},Ks)}),{children:r,attributes:i}}}},Nb={provides(e){let t=!1;An.matchMedia&&(t=An.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:V(V({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const c=V(V({},a),{},{attributeName:"opacity"}),u={tag:"circle",attributes:V(V({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||u.children.push({tag:"animate",attributes:V(V({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},c),{},{values:"1;0;1;1;0;1;"})}),r.push(u),r.push({tag:"path",attributes:V(V({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:V(V({},c),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:V(V({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lb={hooks(){return{parseNodeAttributes(e,t){const r=t.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Db=[Sv,_b,yb,vb,bb,Rb,Pb,kb,Ob,Nb,Lb];Bv(Db,{mixoutsTo:_t});_t.noAuto;const Mb=_t.config,Ub=_t.library;_t.dom;const vE=_t.parse;_t.findIconDefinition;_t.toHtml;const bE=_t.icon;_t.layer;_t.text;_t.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const xb={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Fb={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},jb={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Hb={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Vb={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},$b={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},Wb={freeFabFaXTwitter:xb,freeFabFaFacebook:Hb,freeFabFaInstagram:jb,freeFabFaYoutube:Vb,freeFabFaTiktok:Fb,freeFabFaTelegram:$b};Mb.autoAddCss=!1;const Bb=ut(()=>{Ub.add(Wb)}),zb={EUR:"€",USD:"$"},qb=(e,t="EUR")=>typeof e!="number"&&typeof e!="string"?null:`${e}${zb[t]||t}`,Gb=ut(()=>({provide:{currency:qb}}));var Ys={},wl;function Kb(){return wl||(wl=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Oi(),r="firebase",i="11.3.1";/**
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
 */t.registerVersion(r,i,"app"),Object.keys(t).forEach(function(a){a!=="default"&&!e.hasOwnProperty(a)&&Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[a]}})})}(Ys)),Ys}var Xs=Kb(),Js={},Qs={},Tl;function Yb(){return Tl||(Tl=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Oi(),r=Dr(),i=Ci();/**
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
 */const a="firebasestorage.googleapis.com",c="storageBucket",u=2*60*1e3,p=10*60*1e3,g=1e3;/**
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
 */class m extends r.FirebaseError{constructor(d,E,w=0){super(_(d),`Firebase Storage: ${E} (${_(d)})`),this.status_=w,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(d){this.status_=d}_codeEquals(d){return _(d)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(d){this.customData.serverResponse=d,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}e.StorageErrorCode=void 0,function(f){f.UNKNOWN="unknown",f.OBJECT_NOT_FOUND="object-not-found",f.BUCKET_NOT_FOUND="bucket-not-found",f.PROJECT_NOT_FOUND="project-not-found",f.QUOTA_EXCEEDED="quota-exceeded",f.UNAUTHENTICATED="unauthenticated",f.UNAUTHORIZED="unauthorized",f.UNAUTHORIZED_APP="unauthorized-app",f.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",f.INVALID_CHECKSUM="invalid-checksum",f.CANCELED="canceled",f.INVALID_EVENT_NAME="invalid-event-name",f.INVALID_URL="invalid-url",f.INVALID_DEFAULT_BUCKET="invalid-default-bucket",f.NO_DEFAULT_BUCKET="no-default-bucket",f.CANNOT_SLICE_BLOB="cannot-slice-blob",f.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",f.NO_DOWNLOAD_URL="no-download-url",f.INVALID_ARGUMENT="invalid-argument",f.INVALID_ARGUMENT_COUNT="invalid-argument-count",f.APP_DELETED="app-deleted",f.INVALID_ROOT_OPERATION="invalid-root-operation",f.INVALID_FORMAT="invalid-format",f.INTERNAL_ERROR="internal-error",f.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(e.StorageErrorCode||(e.StorageErrorCode={}));function _(f){return"storage/"+f}function A(){const f="An unknown error occurred, please check the error payload for server response.";return new m(e.StorageErrorCode.UNKNOWN,f)}function I(f){return new m(e.StorageErrorCode.OBJECT_NOT_FOUND,"Object '"+f+"' does not exist.")}function S(f){return new m(e.StorageErrorCode.QUOTA_EXCEEDED,"Quota for bucket '"+f+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function U(){const f="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m(e.StorageErrorCode.UNAUTHENTICATED,f)}function G(){return new m(e.StorageErrorCode.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function W(f){return new m(e.StorageErrorCode.UNAUTHORIZED,"User does not have permission to access '"+f+"'.")}function j(){return new m(e.StorageErrorCode.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Y(){return new m(e.StorageErrorCode.CANCELED,"User canceled the upload/download.")}function $(f){return new m(e.StorageErrorCode.INVALID_URL,"Invalid URL '"+f+"'.")}function re(f){return new m(e.StorageErrorCode.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+f+"'.")}function se(){return new m(e.StorageErrorCode.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function oe(){return new m(e.StorageErrorCode.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function le(){return new m(e.StorageErrorCode.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function de(){return new m(e.StorageErrorCode.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L(f){return new m(e.StorageErrorCode.UNSUPPORTED_ENVIRONMENT,`${f} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ye(f){return new m(e.StorageErrorCode.INVALID_ARGUMENT,f)}function Se(){return new m(e.StorageErrorCode.APP_DELETED,"The Firebase app was deleted.")}function He(f){return new m(e.StorageErrorCode.INVALID_ROOT_OPERATION,"The operation '"+f+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Le(f,d){return new m(e.StorageErrorCode.INVALID_FORMAT,"String does not match format '"+f+"': "+d)}function Ze(f){throw new m(e.StorageErrorCode.INTERNAL_ERROR,"Internal error: "+f)}/**
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
 */class Re{constructor(d,E){this.bucket=d,this.path_=E}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const d=encodeURIComponent;return"/b/"+d(this.bucket)+"/o/"+d(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(d,E){let w;try{w=Re.makeFromUrl(d,E)}catch{return new Re(d,"")}if(w.path==="")return w;throw re(d)}static makeFromUrl(d,E){let w=null;const P="([A-Za-z0-9.\\-_]+)";function N(Ye){Ye.path.charAt(Ye.path.length-1)==="/"&&(Ye.path_=Ye.path_.slice(0,-1))}const z="(/(.*))?$",ne=new RegExp("^gs://"+P+z,"i"),ee={bucket:1,path:3};function he(Ye){Ye.path_=decodeURIComponent(Ye.path)}const ve="v[A-Za-z0-9_]+",je=E.replace(/[.]/g,"\\."),Ue="(/([^?#]*).*)?$",xe=new RegExp(`^https?://${je}/${ve}/b/${P}/o${Ue}`,"i"),$e={bucket:1,path:3},st=E===a?"(?:storage.googleapis.com|storage.cloud.google.com)":E,Oe="([^?#]*)",Et=new RegExp(`^https?://${st}/${P}/${Oe}`,"i"),Je=[{regex:ne,indices:ee,postModify:N},{regex:xe,indices:$e,postModify:he},{regex:Et,indices:{bucket:1,path:2},postModify:he}];for(let Ye=0;Ye<Je.length;Ye++){const wt=Je[Ye],Kt=wt.regex.exec(d);if(Kt){const Ln=Kt[wt.indices.bucket];let Yt=Kt[wt.indices.path];Yt||(Yt=""),w=new Re(Ln,Yt),wt.postModify(w);break}}if(w==null)throw $(d);return w}}class et{constructor(d){this.promise_=Promise.reject(d)}getPromise(){return this.promise_}cancel(d=!1){}}/**
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
 */function Ae(f,d,E){let w=1,P=null,N=null,z=!1,ne=0;function ee(){return ne===2}let he=!1;function ve(...Oe){he||(he=!0,d.apply(null,Oe))}function je(Oe){P=setTimeout(()=>{P=null,f(xe,ee())},Oe)}function Ue(){N&&clearTimeout(N)}function xe(Oe,...Et){if(he){Ue();return}if(Oe){Ue(),ve.call(null,Oe,...Et);return}if(ee()||z){Ue(),ve.call(null,Oe,...Et);return}w<64&&(w*=2);let Je;ne===1?(ne=2,Je=0):Je=(w+Math.random())*1e3,je(Je)}let $e=!1;function st(Oe){$e||($e=!0,Ue(),!he&&(P!==null?(Oe||(ne=2),clearTimeout(P),je(0)):Oe||(ne=1)))}return je(0),N=setTimeout(()=>{z=!0,st(!0)},E),st}function dt(f){f(!1)}/**
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
 */function At(f){return f!==void 0}function St(f){return typeof f=="function"}function at(f){return typeof f=="object"&&!Array.isArray(f)}function ge(f){return typeof f=="string"||f instanceof String}function fe(f){return Be()&&f instanceof Blob}function Be(){return typeof Blob<"u"}function Ce(f,d,E,w){if(w<d)throw ye(`Invalid value for '${f}'. Expected ${d} or greater.`);if(w>E)throw ye(`Invalid value for '${f}'. Expected ${E} or less.`)}/**
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
 */function Pe(f,d,E){let w=d;return E==null&&(w=`https://${d}`),`${E}://${w}/v0${f}`}function M(f){const d=encodeURIComponent;let E="?";for(const w in f)if(f.hasOwnProperty(w)){const P=d(w)+"="+d(f[w]);E=E+P+"&"}return E=E.slice(0,-1),E}var X;(function(f){f[f.NO_ERROR=0]="NO_ERROR",f[f.NETWORK_ERROR=1]="NETWORK_ERROR",f[f.ABORT=2]="ABORT"})(X||(X={}));/**
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
 */function K(f,d){const E=f>=500&&f<600,P=[408,429].indexOf(f)!==-1,N=d.indexOf(f)!==-1;return E||P||N}/**
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
 */class te{constructor(d,E,w,P,N,z,ne,ee,he,ve,je,Ue=!0){this.url_=d,this.method_=E,this.headers_=w,this.body_=P,this.successCodes_=N,this.additionalRetryCodes_=z,this.callback_=ne,this.errorCallback_=ee,this.timeout_=he,this.progressCallback_=ve,this.connectionFactory_=je,this.retry=Ue,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((xe,$e)=>{this.resolve_=xe,this.reject_=$e,this.start_()})}start_(){const d=(w,P)=>{if(P){w(!1,new me(!1,null,!0));return}const N=this.connectionFactory_();this.pendingConnection_=N;const z=ne=>{const ee=ne.loaded,he=ne.lengthComputable?ne.total:-1;this.progressCallback_!==null&&this.progressCallback_(ee,he)};this.progressCallback_!==null&&N.addUploadProgressListener(z),N.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&N.removeUploadProgressListener(z),this.pendingConnection_=null;const ne=N.getErrorCode()===X.NO_ERROR,ee=N.getStatus();if(!ne||K(ee,this.additionalRetryCodes_)&&this.retry){const ve=N.getErrorCode()===X.ABORT;w(!1,new me(!1,null,ve));return}const he=this.successCodes_.indexOf(ee)!==-1;w(!0,new me(he,N))})},E=(w,P)=>{const N=this.resolve_,z=this.reject_,ne=P.connection;if(P.wasSuccessCode)try{const ee=this.callback_(ne,ne.getResponse());At(ee)?N(ee):N()}catch(ee){z(ee)}else if(ne!==null){const ee=A();ee.serverResponse=ne.getErrorText(),this.errorCallback_?z(this.errorCallback_(ne,ee)):z(ee)}else if(P.canceled){const ee=this.appDelete_?Se():Y();z(ee)}else{const ee=j();z(ee)}};this.canceled_?E(!1,new me(!1,null,!0)):this.backoffId_=Ae(d,E,this.timeout_)}getPromise(){return this.promise_}cancel(d){this.canceled_=!0,this.appDelete_=d||!1,this.backoffId_!==null&&dt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class me{constructor(d,E,w){this.wasSuccessCode=d,this.connection=E,this.canceled=!!w}}function Ee(f,d){d!==null&&d.length>0&&(f.Authorization="Firebase "+d)}function pe(f,d){f["X-Firebase-Storage-Version"]="webjs/"+(d??"AppManager")}function ce(f,d){d&&(f["X-Firebase-GMPID"]=d)}function _e(f,d){d!==null&&(f["X-Firebase-AppCheck"]=d)}function ct(f,d,E,w,P,N,z=!0){const ne=M(f.urlParams),ee=f.url+ne,he=Object.assign({},f.headers);return ce(he,d),Ee(he,E),pe(he,N),_e(he,w),new te(ee,f.method,he,f.body,f.successCodes,f.additionalRetryCodes,f.handler,f.errorHandler,f.timeout,f.progressCallback,P,z)}/**
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
 */function De(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Rt(...f){const d=De();if(d!==void 0){const E=new d;for(let w=0;w<f.length;w++)E.append(f[w]);return E.getBlob()}else{if(Be())return new Blob(f);throw new m(e.StorageErrorCode.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Pn(f,d,E){return f.webkitSlice?f.webkitSlice(d,E):f.mozSlice?f.mozSlice(d,E):f.slice?f.slice(d,E):null}/**
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
 */function en(f){if(typeof atob>"u")throw L("base-64");return atob(f)}/**
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
 */const Ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ft{constructor(d,E){this.data=d,this.contentType=E||null}}function Ht(f,d){switch(f){case Ve.RAW:return new ft(Qe(d));case Ve.BASE64:case Ve.BASE64URL:return new ft(dn(f,d));case Ve.DATA_URL:return new ft(kt(d),fn(d))}throw A()}function Qe(f){const d=[];for(let E=0;E<f.length;E++){let w=f.charCodeAt(E);if(w<=127)d.push(w);else if(w<=2047)d.push(192|w>>6,128|w&63);else if((w&64512)===55296)if(!(E<f.length-1&&(f.charCodeAt(E+1)&64512)===56320))d.push(239,191,189);else{const N=w,z=f.charCodeAt(++E);w=65536|(N&1023)<<10|z&1023,d.push(240|w>>18,128|w>>12&63,128|w>>6&63,128|w&63)}else(w&64512)===56320?d.push(239,191,189):d.push(224|w>>12,128|w>>6&63,128|w&63)}return new Uint8Array(d)}function Pt(f){let d;try{d=decodeURIComponent(f)}catch{throw Le(Ve.DATA_URL,"Malformed data URL.")}return Qe(d)}function dn(f,d){switch(f){case Ve.BASE64:{const P=d.indexOf("-")!==-1,N=d.indexOf("_")!==-1;if(P||N)throw Le(f,"Invalid character '"+(P?"-":"_")+"' found: is it base64url encoded?");break}case Ve.BASE64URL:{const P=d.indexOf("+")!==-1,N=d.indexOf("/")!==-1;if(P||N)throw Le(f,"Invalid character '"+(P?"+":"/")+"' found: is it base64 encoded?");d=d.replace(/-/g,"+").replace(/_/g,"/");break}}let E;try{E=en(d)}catch(P){throw P.message.includes("polyfill")?P:Le(f,"Invalid character found")}const w=new Uint8Array(E.length);for(let P=0;P<E.length;P++)w[P]=E.charCodeAt(P);return w}class Vt{constructor(d){this.base64=!1,this.contentType=null;const E=d.match(/^data:([^,]+)?,/);if(E===null)throw Le(Ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const w=E[1]||null;w!=null&&(this.base64=Ct(w,";base64"),this.contentType=this.base64?w.substring(0,w.length-7):w),this.rest=d.substring(d.indexOf(",")+1)}}function kt(f){const d=new Vt(f);return d.base64?dn(Ve.BASE64,d.rest):Pt(d.rest)}function fn(f){return new Vt(f).contentType}function Ct(f,d){return f.length>=d.length?f.substring(f.length-d.length)===d:!1}/**
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
 */class Ge{constructor(d,E){let w=0,P="";fe(d)?(this.data_=d,w=d.size,P=d.type):d instanceof ArrayBuffer?(E?this.data_=new Uint8Array(d):(this.data_=new Uint8Array(d.byteLength),this.data_.set(new Uint8Array(d))),w=this.data_.length):d instanceof Uint8Array&&(E?this.data_=d:(this.data_=new Uint8Array(d.length),this.data_.set(d)),w=d.length),this.size_=w,this.type_=P}size(){return this.size_}type(){return this.type_}slice(d,E){if(fe(this.data_)){const w=this.data_,P=Pn(w,d,E);return P===null?null:new Ge(P)}else{const w=new Uint8Array(this.data_.buffer,d,E-d);return new Ge(w,!0)}}static getBlob(...d){if(Be()){const E=d.map(w=>w instanceof Ge?w.data_:w);return new Ge(Rt.apply(null,E))}else{const E=d.map(z=>ge(z)?Ht(Ve.RAW,z).data:z.data_);let w=0;E.forEach(z=>{w+=z.byteLength});const P=new Uint8Array(w);let N=0;return E.forEach(z=>{for(let ne=0;ne<z.length;ne++)P[N++]=z[ne]}),new Ge(P,!0)}}uploadData(){return this.data_}}/**
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
 */function yt(f){let d;try{d=JSON.parse(f)}catch{return null}return at(d)?d:null}/**
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
 */function kn(f){if(f.length===0)return null;const d=f.lastIndexOf("/");return d===-1?"":f.slice(0,d)}function tt(f,d){const E=d.split("/").filter(w=>w.length>0).join("/");return f.length===0?E:f+"/"+E}function nt(f){const d=f.lastIndexOf("/",f.length-2);return d===-1?f:f.slice(d+1)}/**
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
 */function rt(f,d){return d}class Fe{constructor(d,E,w,P){this.server=d,this.local=E||d,this.writable=!!w,this.xform=P||rt}}let Ke=null;function tn(f){return!ge(f)||f.length<2?f:nt(f)}function ht(){if(Ke)return Ke;const f=[];f.push(new Fe("bucket")),f.push(new Fe("generation")),f.push(new Fe("metageneration")),f.push(new Fe("name","fullPath",!0));function d(N,z){return tn(z)}const E=new Fe("name");E.xform=d,f.push(E);function w(N,z){return z!==void 0?Number(z):z}const P=new Fe("size");return P.xform=w,f.push(P),f.push(new Fe("timeCreated")),f.push(new Fe("updated")),f.push(new Fe("md5Hash",null,!0)),f.push(new Fe("cacheControl",null,!0)),f.push(new Fe("contentDisposition",null,!0)),f.push(new Fe("contentEncoding",null,!0)),f.push(new Fe("contentLanguage",null,!0)),f.push(new Fe("contentType",null,!0)),f.push(new Fe("metadata","customMetadata",!0)),Ke=f,Ke}function Ot(f,d){function E(){const w=f.bucket,P=f.fullPath,N=new Re(w,P);return d._makeStorageReference(N)}Object.defineProperty(f,"ref",{get:E})}function lt(f,d,E){const w={};w.type="file";const P=E.length;for(let N=0;N<P;N++){const z=E[N];w[z.local]=z.xform(w,d[z.server])}return Ot(w,f),w}function $t(f,d,E){const w=yt(d);return w===null?null:lt(f,w,E)}function hn(f,d,E,w){const P=yt(d);if(P===null||!ge(P.downloadTokens))return null;const N=P.downloadTokens;if(N.length===0)return null;const z=encodeURIComponent;return N.split(",").map(he=>{const ve=f.bucket,je=f.fullPath,Ue="/b/"+z(ve)+"/o/"+z(je),xe=Pe(Ue,E,w),$e=M({alt:"media",token:he});return xe+$e})[0]}function B(f,d){const E={},w=d.length;for(let P=0;P<w;P++){const N=d[P];N.writable&&(E[N.server]=f[N.local])}return JSON.stringify(E)}/**
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
 */const x="prefixes",H="items";function b(f,d,E){const w={prefixes:[],items:[],nextPageToken:E.nextPageToken};if(E[x])for(const P of E[x]){const N=P.replace(/\/$/,""),z=f._makeStorageReference(new Re(d,N));w.prefixes.push(z)}if(E[H])for(const P of E[H]){const N=f._makeStorageReference(new Re(d,P.name));w.items.push(N)}return w}function v(f,d,E){const w=yt(E);return w===null?null:b(f,d,w)}class T{constructor(d,E,w,P){this.url=d,this.method=E,this.handler=w,this.timeout=P,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function C(f){if(!f)throw A()}function k(f,d){function E(w,P){const N=$t(f,P,d);return C(N!==null),N}return E}function Z(f,d){function E(w,P){const N=v(f,d,P);return C(N!==null),N}return E}function ue(f,d){function E(w,P){const N=$t(f,P,d);return C(N!==null),hn(N,P,f.host,f._protocol)}return E}function we(f){function d(E,w){let P;return E.getStatus()===401?E.getErrorText().includes("Firebase App Check token is invalid")?P=G():P=U():E.getStatus()===402?P=S(f.bucket):E.getStatus()===403?P=W(f.path):P=w,P.status=E.getStatus(),P.serverResponse=w.serverResponse,P}return d}function Me(f){const d=we(f);function E(w,P){let N=d(w,P);return w.getStatus()===404&&(N=I(f.path)),N.serverResponse=P.serverResponse,N}return E}function Xe(f,d,E){const w=d.fullServerUrl(),P=Pe(w,f.host,f._protocol),N="GET",z=f.maxOperationRetryTime,ne=new T(P,N,k(f,E),z);return ne.errorHandler=Me(d),ne}function vt(f,d,E,w,P){const N={};d.isRoot?N.prefix="":N.prefix=d.path+"/",E.length>0&&(N.delimiter=E),w&&(N.pageToken=w),P&&(N.maxResults=P);const z=d.bucketOnlyServerUrl(),ne=Pe(z,f.host,f._protocol),ee="GET",he=f.maxOperationRetryTime,ve=new T(ne,ee,Z(f,d.bucket),he);return ve.urlParams=N,ve.errorHandler=we(d),ve}function Ie(f,d,E){const w=d.fullServerUrl(),P=Pe(w,f.host,f._protocol)+"?alt=media",N="GET",z=f.maxOperationRetryTime,ne=new T(P,N,(ee,he)=>he,z);return ne.errorHandler=Me(d),E!==void 0&&(ne.headers.Range=`bytes=0-${E}`,ne.successCodes=[200,206]),ne}function pt(f,d,E){const w=d.fullServerUrl(),P=Pe(w,f.host,f._protocol),N="GET",z=f.maxOperationRetryTime,ne=new T(P,N,ue(f,E),z);return ne.errorHandler=Me(d),ne}function nn(f,d,E,w){const P=d.fullServerUrl(),N=Pe(P,f.host,f._protocol),z="PATCH",ne=B(E,w),ee={"Content-Type":"application/json; charset=utf-8"},he=f.maxOperationRetryTime,ve=new T(N,z,k(f,w),he);return ve.headers=ee,ve.body=ne,ve.errorHandler=Me(d),ve}function ke(f,d){const E=d.fullServerUrl(),w=Pe(E,f.host,f._protocol),P="DELETE",N=f.maxOperationRetryTime;function z(ee,he){}const ne=new T(w,P,z,N);return ne.successCodes=[200,204],ne.errorHandler=Me(d),ne}function xr(f,d){return f&&f.contentType||d&&d.type()||"application/octet-stream"}function pn(f,d,E){const w=Object.assign({},E);return w.fullPath=f.path,w.size=d.size(),w.contentType||(w.contentType=xr(null,d)),w}function Fr(f,d,E,w,P){const N=d.bucketOnlyServerUrl(),z={"X-Goog-Upload-Protocol":"multipart"};function ne(){let Je="";for(let Ye=0;Ye<2;Ye++)Je=Je+Math.random().toString().slice(2);return Je}const ee=ne();z["Content-Type"]="multipart/related; boundary="+ee;const he=pn(d,w,P),ve=B(he,E),je="--"+ee+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+ve+`\r
--`+ee+`\r
Content-Type: `+he.contentType+`\r
\r
`,Ue=`\r
--`+ee+"--",xe=Ge.getBlob(je,w,Ue);if(xe===null)throw oe();const $e={name:he.fullPath},st=Pe(N,f.host,f._protocol),Oe="POST",Et=f.maxUploadRetryTime,It=new T(st,Oe,k(f,E),Et);return It.urlParams=$e,It.headers=z,It.body=xe.uploadData(),It.errorHandler=we(d),It}class mn{constructor(d,E,w,P){this.current=d,this.total=E,this.finalized=!!w,this.metadata=P||null}}function ar(f,d){let E=null;try{E=f.getResponseHeader("X-Goog-Upload-Status")}catch{C(!1)}return C(!!E&&(d||["active"]).indexOf(E)!==-1),E}function Fi(f,d,E,w,P){const N=d.bucketOnlyServerUrl(),z=pn(d,w,P),ne={name:z.fullPath},ee=Pe(N,f.host,f._protocol),he="POST",ve={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${w.size()}`,"X-Goog-Upload-Header-Content-Type":z.contentType,"Content-Type":"application/json; charset=utf-8"},je=B(z,E),Ue=f.maxUploadRetryTime;function xe(st){ar(st);let Oe;try{Oe=st.getResponseHeader("X-Goog-Upload-URL")}catch{C(!1)}return C(ge(Oe)),Oe}const $e=new T(ee,he,xe,Ue);return $e.urlParams=ne,$e.headers=ve,$e.body=je,$e.errorHandler=we(d),$e}function ji(f,d,E,w){const P={"X-Goog-Upload-Command":"query"};function N(he){const ve=ar(he,["active","final"]);let je=null;try{je=he.getResponseHeader("X-Goog-Upload-Size-Received")}catch{C(!1)}je||C(!1);const Ue=Number(je);return C(!isNaN(Ue)),new mn(Ue,w.size(),ve==="final")}const z="POST",ne=f.maxUploadRetryTime,ee=new T(E,z,N,ne);return ee.headers=P,ee.errorHandler=we(d),ee}const cr=256*1024;function Hi(f,d,E,w,P,N,z,ne){const ee=new mn(0,0);if(z?(ee.current=z.current,ee.total=z.total):(ee.current=0,ee.total=w.size()),w.size()!==ee.total)throw le();const he=ee.total-ee.current;let ve=he;P>0&&(ve=Math.min(ve,P));const je=ee.current,Ue=je+ve;let xe="";ve===0?xe="finalize":he===ve?xe="upload, finalize":xe="upload";const $e={"X-Goog-Upload-Command":xe,"X-Goog-Upload-Offset":`${ee.current}`},st=w.slice(je,Ue);if(st===null)throw oe();function Oe(Ye,wt){const Kt=ar(Ye,["active","final"]),Ln=ee.current+ve,Yt=w.size();let Dn;return Kt==="final"?Dn=k(d,N)(Ye,wt):Dn=null,new mn(Ln,Yt,Kt==="final",Dn)}const Et="POST",It=d.maxUploadRetryTime,Je=new T(E,Et,Oe,It);return Je.headers=$e,Je.body=st.uploadData(),Je.progressCallback=ne||null,Je.errorHandler=we(f),Je}/**
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
 */const Vi={STATE_CHANGED:"state_changed"},ze={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function lr(f){switch(f){case"running":case"pausing":case"canceling":return ze.RUNNING;case"paused":return ze.PAUSED;case"success":return ze.SUCCESS;case"canceled":return ze.CANCELED;case"error":return ze.ERROR;default:return ze.ERROR}}/**
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
 */class $i{constructor(d,E,w){if(St(d)||E!=null||w!=null)this.next=d,this.error=E??void 0,this.complete=w??void 0;else{const N=d;this.next=N.next,this.error=N.error,this.complete=N.complete}}}/**
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
 */function gn(f){return(...d)=>{Promise.resolve().then(()=>f(...d))}}class ur{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=X.NO_ERROR,this.sendPromise_=new Promise(d=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=X.ABORT,d()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=X.NETWORK_ERROR,d()}),this.xhr_.addEventListener("load",()=>{d()})})}send(d,E,w,P){if(this.sent_)throw Ze("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(E,d,!0),P!==void 0)for(const N in P)P.hasOwnProperty(N)&&this.xhr_.setRequestHeader(N,P[N].toString());return w!==void 0?this.xhr_.send(w):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ze("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ze("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ze("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ze("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(d){return this.xhr_.getResponseHeader(d)}addUploadProgressListener(d){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",d)}removeUploadProgressListener(d){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",d)}}class Wi extends ur{initXhr(){this.xhr_.responseType="text"}}function mt(){return new Wi}class Cn extends ur{initXhr(){this.xhr_.responseType="arraybuffer"}}function jr(){return new Cn}class On extends ur{initXhr(){this.xhr_.responseType="blob"}}function Wt(){return new On}/**
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
 */class dr{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(d,E,w=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=d,this._blob=E,this._metadata=w,this._mappings=ht(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=P=>{if(this._request=void 0,this._chunkMultiplier=1,P._codeEquals(e.StorageErrorCode.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const N=this.isExponentialBackoffExpired();if(K(P.status,[]))if(N)P=j();else{this.sleepTime=Math.max(this.sleepTime*2,g),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=P,this._transition("error")}},this._metadataErrorHandler=P=>{this._request=void 0,P._codeEquals(e.StorageErrorCode.CANCELED)?this.completeTransitions_():(this._error=P,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((P,N)=>{this._resolve=P,this._reject=N,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const d=this._transferred;return E=>this._updateProgress(d+E)}_shouldDoResumable(d){return d.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(d){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([E,w])=>{switch(this._state){case"running":d(E,w);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((d,E)=>{const w=Fi(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),P=this._ref.storage._makeRequest(w,mt,d,E);this._request=P,P.getPromise().then(N=>{this._request=void 0,this._uploadUrl=N,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const d=this._uploadUrl;this._resolveToken((E,w)=>{const P=ji(this._ref.storage,this._ref._location,d,this._blob),N=this._ref.storage._makeRequest(P,mt,E,w);this._request=N,N.getPromise().then(z=>{z=z,this._request=void 0,this._updateProgress(z.current),this._needToFetchStatus=!1,z.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const d=cr*this._chunkMultiplier,E=new mn(this._transferred,this._blob.size()),w=this._uploadUrl;this._resolveToken((P,N)=>{let z;try{z=Hi(this._ref._location,this._ref.storage,w,this._blob,d,this._mappings,E,this._makeProgressCallback())}catch(ee){this._error=ee,this._transition("error");return}const ne=this._ref.storage._makeRequest(z,mt,P,N,!1);this._request=ne,ne.getPromise().then(ee=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(ee.current),ee.finalized?(this._metadata=ee.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cr*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((d,E)=>{const w=Xe(this._ref.storage,this._ref._location,this._mappings),P=this._ref.storage._makeRequest(w,mt,d,E);this._request=P,P.getPromise().then(N=>{this._request=void 0,this._metadata=N,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((d,E)=>{const w=Fr(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),P=this._ref.storage._makeRequest(w,mt,d,E);this._request=P,P.getPromise().then(N=>{this._request=void 0,this._metadata=N,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(d){const E=this._transferred;this._transferred=d,this._transferred!==E&&this._notifyObservers()}_transition(d){if(this._state!==d)switch(d){case"canceling":case"pausing":this._state=d,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const E=this._state==="paused";this._state=d,E&&(this._notifyObservers(),this._start());break;case"paused":this._state=d,this._notifyObservers();break;case"canceled":this._error=Y(),this._state=d,this._notifyObservers();break;case"error":this._state=d,this._notifyObservers();break;case"success":this._state=d,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const d=lr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:d,metadata:this._metadata,task:this,ref:this._ref}}on(d,E,w,P){const N=new $i(E||void 0,w||void 0,P||void 0);return this._addObserver(N),()=>{this._removeObserver(N)}}then(d,E){return this._promise.then(d,E)}catch(d){return this.then(null,d)}_addObserver(d){this._observers.push(d),this._notifyObserver(d)}_removeObserver(d){const E=this._observers.indexOf(d);E!==-1&&this._observers.splice(E,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(E=>{this._notifyObserver(E)})}_finishPromise(){if(this._resolve!==void 0){let d=!0;switch(lr(this._state)){case ze.SUCCESS:gn(this._resolve.bind(null,this.snapshot))();break;case ze.CANCELED:case ze.ERROR:const E=this._reject;gn(E.bind(null,this._error))();break;default:d=!1;break}d&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(d){switch(lr(this._state)){case ze.RUNNING:case ze.PAUSED:d.next&&gn(d.next.bind(d,this.snapshot))();break;case ze.SUCCESS:d.complete&&gn(d.complete.bind(d))();break;case ze.CANCELED:case ze.ERROR:d.error&&gn(d.error.bind(d,this._error))();break;default:d.error&&gn(d.error.bind(d,this._error))()}}resume(){const d=this._state==="paused"||this._state==="pausing";return d&&this._transition("running"),d}pause(){const d=this._state==="running";return d&&this._transition("pausing"),d}cancel(){const d=this._state==="running"||this._state==="pausing";return d&&this._transition("canceling"),d}}/**
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
 */class Bt{constructor(d,E){this._service=d,E instanceof Re?this._location=E:this._location=Re.makeFromUrl(E,d.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(d,E){return new Bt(d,E)}get root(){const d=new Re(this._location.bucket,"");return this._newRef(this._service,d)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nt(this._location.path)}get storage(){return this._service}get parent(){const d=kn(this._location.path);if(d===null)return null;const E=new Re(this._location.bucket,d);return new Bt(this._service,E)}_throwIfRoot(d){if(this._location.path==="")throw He(d)}}function Bi(f,d){f._throwIfRoot("getBytes");const E=Ie(f.storage,f._location,d);return f.storage.makeRequestWithTokens(E,jr).then(w=>d!==void 0?w.slice(0,d):w)}function Hr(f,d){f._throwIfRoot("getBlob");const E=Ie(f.storage,f._location,d);return f.storage.makeRequestWithTokens(E,Wt).then(w=>d!==void 0?w.slice(0,d):w)}function fr(f,d,E){f._throwIfRoot("uploadBytes");const w=Fr(f.storage,f._location,ht(),new Ge(d,!0),E);return f.storage.makeRequestWithTokens(w,mt).then(P=>({metadata:P,ref:f}))}function zi(f,d,E){return f._throwIfRoot("uploadBytesResumable"),new dr(f,new Ge(d),E)}function Vr(f,d,E=Ve.RAW,w){f._throwIfRoot("uploadString");const P=Ht(E,d),N=Object.assign({},w);return N.contentType==null&&P.contentType!=null&&(N.contentType=P.contentType),fr(f,P.data,N)}function qi(f){const d={prefixes:[],items:[]};return rn(f,d).then(()=>d)}async function rn(f,d,E){const P=await hr(f,{pageToken:E});d.prefixes.push(...P.prefixes),d.items.push(...P.items),P.nextPageToken!=null&&await rn(f,d,P.nextPageToken)}function hr(f,d){d!=null&&typeof d.maxResults=="number"&&Ce("options.maxResults",1,1e3,d.maxResults);const E=d||{},w=vt(f.storage,f._location,"/",E.pageToken,E.maxResults);return f.storage.makeRequestWithTokens(w,mt)}function Gi(f){f._throwIfRoot("getMetadata");const d=Xe(f.storage,f._location,ht());return f.storage.makeRequestWithTokens(d,mt)}function Ki(f,d){f._throwIfRoot("updateMetadata");const E=nn(f.storage,f._location,d,ht());return f.storage.makeRequestWithTokens(E,mt)}function Yi(f){f._throwIfRoot("getDownloadURL");const d=pt(f.storage,f._location,ht());return f.storage.makeRequestWithTokens(d,mt).then(E=>{if(E===null)throw de();return E})}function Xi(f){f._throwIfRoot("deleteObject");const d=ke(f.storage,f._location);return f.storage.makeRequestWithTokens(d,mt)}function Nn(f,d){const E=tt(f._location.path,d),w=new Re(f._location.bucket,E);return new Bt(f.storage,w)}/**
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
 */function Ji(f){return/^[A-Za-z]+:\/\//.test(f)}function Qi(f,d){return new Bt(f,d)}function $r(f,d){if(f instanceof zt){const E=f;if(E._bucket==null)throw se();const w=new Bt(E,E._bucket);return d!=null?$r(w,d):w}else return d!==void 0?Nn(f,d):f}function Zi(f,d){if(d&&Ji(d)){if(f instanceof zt)return Qi(f,d);throw ye("To use ref(service, url), the first argument must be a Storage instance.")}else return $r(f,d)}function Wr(f,d){const E=d==null?void 0:d[c];return E==null?null:Re.makeFromBucketSpec(E,f)}function es(f,d,E,w={}){f.host=`${d}:${E}`,f._protocol="http";const{mockUserToken:P}=w;P&&(f._overrideAuthToken=typeof P=="string"?P:r.createMockUserToken(P,f.app.options.projectId))}class zt{constructor(d,E,w,P,N){this.app=d,this._authProvider=E,this._appCheckProvider=w,this._url=P,this._firebaseVersion=N,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=p,this._requests=new Set,P!=null?this._bucket=Re.makeFromBucketSpec(P,this._host):this._bucket=Wr(this._host,this.app.options)}get host(){return this._host}set host(d){this._host=d,this._url!=null?this._bucket=Re.makeFromBucketSpec(this._url,d):this._bucket=Wr(d,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(d){Ce("time",0,Number.POSITIVE_INFINITY,d),this._maxUploadRetryTime=d}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(d){Ce("time",0,Number.POSITIVE_INFINITY,d),this._maxOperationRetryTime=d}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const d=this._authProvider.getImmediate({optional:!0});if(d){const E=await d.getToken();if(E!==null)return E.accessToken}return null}async _getAppCheckToken(){if(t._isFirebaseServerApp(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const d=this._appCheckProvider.getImmediate({optional:!0});return d?(await d.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(d=>d.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(d){return new Bt(this,d)}_makeRequest(d,E,w,P,N=!0){if(this._deleted)return new et(Se());{const z=ct(d,this._appId,w,P,E,this._firebaseVersion,N);return this._requests.add(z),z.getPromise().then(()=>this._requests.delete(z),()=>this._requests.delete(z)),z}}async makeRequestWithTokens(d,E){const[w,P]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(d,E,w,P).getPromise()}}const bt="@firebase/storage",Br="0.13.6";/**
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
 */const gt="storage";/**
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
 */function zr(f,d){return f=r.getModularInstance(f),Bi(f,d)}function ts(f,d,E){return f=r.getModularInstance(f),fr(f,d,E)}function ns(f,d,E,w){return f=r.getModularInstance(f),Vr(f,d,E,w)}function rs(f,d,E){return f=r.getModularInstance(f),zi(f,d,E)}function is(f){return f=r.getModularInstance(f),Gi(f)}function qt(f,d){return f=r.getModularInstance(f),Ki(f,d)}function ss(f,d){return f=r.getModularInstance(f),hr(f,d)}function os(f){return f=r.getModularInstance(f),qi(f)}function _n(f){return f=r.getModularInstance(f),Yi(f)}function as(f){return f=r.getModularInstance(f),Xi(f)}function Gt(f,d){return f=r.getModularInstance(f),Zi(f,d)}function Nt(f,d){return Nn(f,d)}function yn(f=t.getApp(),d){f=r.getModularInstance(f);const w=t._getProvider(f,gt).getImmediate({identifier:d}),P=r.getDefaultEmulatorHostnameAndPort("storage");return P&&vn(w,...P),w}function vn(f,d,E,w={}){es(f,d,E,w)}/**
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
 */function Lt(f,d){return f=r.getModularInstance(f),Hr(f,d)}function Dt(f,d){throw new Error("getStream() is only supported by NodeJS builds")}function Mt(f,{instanceIdentifier:d}){const E=f.getProvider("app").getImmediate(),w=f.getProvider("auth-internal"),P=f.getProvider("app-check-internal");return new zt(E,w,P,d,t.SDK_VERSION)}function cs(){t._registerComponent(new i.Component(gt,Mt,"PUBLIC").setMultipleInstances(!0)),t.registerVersion(bt,Br,""),t.registerVersion(bt,Br,"cjs2017")}cs(),e.StorageError=m,e.StringFormat=Ve,e._FbsBlob=Ge,e._Location=Re,e._TaskEvent=Vi,e._TaskState=ze,e._UploadTask=dr,e._dataFromString=Ht,e._getChild=Nt,e._invalidArgument=ye,e._invalidRootOperation=He,e.connectStorageEmulator=vn,e.deleteObject=as,e.getBlob=Lt,e.getBytes=zr,e.getDownloadURL=_n,e.getMetadata=is,e.getStorage=yn,e.getStream=Dt,e.list=ss,e.listAll=os,e.ref=Gt,e.updateMetadata=qt,e.uploadBytes=ts,e.uploadBytesResumable=rs,e.uploadString=ns}(Qs)),Qs}var Al;function Xb(){return Al||(Al=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Yb();Object.keys(t).forEach(function(r){r!=="default"&&!e.hasOwnProperty(r)&&Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})})}(Js)),Js}var Jb=Xb();const Qb=ut(e=>{const{API_KEY:t,AUTH_DOMAIN:r,PROJECT_ID:i,STORAGE_BUCKET:a,MESSAGING_SENDER_ID:c,APP_ID:u,MEASUREMENT_ID:p}=w_();let g;Xs.getApps().length===0?g=Xs.initializeApp({apiKey:t,authDomain:r,projectId:i,storageBucket:a,messagingSenderId:c,appId:u,measurementId:p}):g=Xs.getApps()[0];const m=Qn.getAuth(g),_=Jb.getStorage(g);e.vueApp.provide("auth",m),e.provide("auth",m),e.vueApp.provide("storage",_),e.provide("storage",_)}),Zb=[K_,X_,Q_,Ry,Py,ky,Cy,Oy,Ny,Ly,Dy,Bb,Gb,Qb],eE=Zb;Yh(async(e,t)=>{const r=t==null?void 0:t.canvasElement.id;if(!r)throw new Error("StoryContext is not provided");const i=`nuxt-app-${r}`,a=eo(i);window.__NUXT__={serverRendered:!1,config:{public:{},app:{baseURL:"/"},...H_},data:{},state:{}},globalThis.$fetch||(globalThis.$fetch=j_.create({baseURL:"/"}));const c=_p({id:i,vueApp:e});a.set(c,!0),eo("nuxt-app").set(c,!0),await bp(c,eE),await c.hooks.callHook("app:created",e),await c.hooks.callHook("app:beforeMount",e)});const EE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{io as A,vi as B,Fm as C,uc as D,qo as E,hE as F,fm as G,Jb as H,EE as I,pE as L,Wm as P,_E as _,Bm as a,gE as b,an as c,uE as d,G_ as e,Iy as f,mE as g,qn as h,mm as i,zo as j,Ai as k,ii as l,Xs as m,pc as n,Yo as o,km as p,yE as q,dE as r,br as s,Ko as t,We as u,vE as v,lo as w,bE as x,Mb as y,fE as z};
