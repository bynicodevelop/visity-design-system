import{_ as B}from"./BcerW91s.js";import{_ as z}from"./BHaseYLp.js";import{r as M,L as C,w as _,M as V,_ as $,n as K,d as D,v as H,x as J,q as S,o as h,C as G,e as O,t as X,m as Y,D as Q,g as F,c as A,a as Z,u as m,G as W,E as ee,$ as te,a0 as re,T as ne}from"./BPGpSvqo.js";import{c as ie,u as oe}from"./D90GB2Iz.js";import{A as ae,e as se,a as ue}from"./BC4gYyJk.js";import{a as ce}from"./XcgaeAQ5.js";import"./DlAUqK2U.js";import"./CqkleIqs.js";import"./BnyKHv2r.js";import"./DiPDwOVr.js";import"../sb-preview/runtime.js";function le(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},e=i||{},t=e.decode||pe;let a=0;for(;a<r.length;){const o=r.indexOf("=",a);if(o===-1)break;let u=r.indexOf(";",a);if(u===-1)u=r.length;else if(u<o){a=r.lastIndexOf(";",o-1)+1;continue}const c=r.slice(a,o).trim();if(e!=null&&e.filter&&!(e!=null&&e.filter(c))){a=u+1;continue}if(n[c]===void 0){let s=r.slice(o+1,u).trim();s.codePointAt(0)===34&&(s=s.slice(1,-1)),n[c]=fe(s,t)}a=u+1}return n}function pe(r){return r.includes("%")?decodeURIComponent(r):r}function fe(r,i){try{return i(r)}catch{return r}}const v=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function T(r,i,n){const e=n||{},t=e.encode||encodeURIComponent;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!v.test(r))throw new TypeError("argument name is invalid");const a=t(i);if(a&&!v.test(a))throw new TypeError("argument val is invalid");let o=r+"="+a;if(e.maxAge!==void 0&&e.maxAge!==null){const u=e.maxAge-0;if(Number.isNaN(u)||!Number.isFinite(u))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(u)}if(e.domain){if(!v.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!v.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(!de(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return e.partitioned&&(o+="; Partitioned"),o}function de(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}const N=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function x(r,i){i?i={...N,...i}:i=N;const n=U(i);return n.dispatch(r),n.toString()}const me=Object.freeze(["prototype","__proto__","constructor"]);function U(r){let i="",n=new Map;const e=t=>{i+=t};return{toString(){return i},getContext(){return n},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const u=a.length;u<10?o="unknown:["+a+"]":o=a.slice(8,u-1),o=o.toLowerCase();let c=null;if((c=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let s=Object.keys(t);r.unorderedObjects&&(s=s.sort());let l=[];r.respectType!==!1&&!P(t)&&(l=me),r.excludeKeys&&(s=s.filter(p=>!r.excludeKeys(p)),l=l.filter(p=>!r.excludeKeys(p))),e("object:"+(s.length+l.length)+":");const f=p=>{this.dispatch(p),e(":"),r.excludeValues||this.dispatch(t[p]),e(",")};for(const p of s)f(p);for(const p of l)f(p)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,u=t.map(c=>{const s=U(r);s.dispatch(c);for(const[l,f]of s.getContext())o.set(l,f);return s.toString()});return n=o,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),P(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const I="[native code] }",ye=I.length;function P(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-ye)===I}function he(r,i,n={}){return r===i||x(r,n)===x(i,n)}function d(r){if(typeof r!="object")return r;var i,n,e=Object.prototype.toString.call(r);if(e==="[object Object]"){if(r.constructor!==Object&&typeof r.constructor=="function"){n=new r.constructor;for(i in r)r.hasOwnProperty(i)&&n[i]!==r[i]&&(n[i]=d(r[i]))}else{n={};for(i in r)i==="__proto__"?Object.defineProperty(n,i,{value:d(r[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=d(r[i])}return n}if(e==="[object Array]"){for(i=r.length,n=Array(i);i--;)n[i]=d(r[i]);return n}return e==="[object Set]"?(n=new Set,r.forEach(function(t){n.add(d(t))}),n):e==="[object Map]"?(n=new Map,r.forEach(function(t,a){n.set(d(a),d(t))}),n):e==="[object Date]"?new Date(+r):e==="[object RegExp]"?(n=new RegExp(r.source,r.flags),n.lastIndex=r.lastIndex,n):e==="[object DataView]"?new r.constructor(d(r.buffer)):e==="[object ArrayBuffer]"?r.slice(0):e.slice(-6)==="Array]"?new r.constructor(r):r}const ge={path:"/",watch:!0,decode:r=>ae(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))},b=window.cookieStore;function we(r,i){var c;const n={...ge,...i};n.filter??(n.filter=s=>s===r);const e=j(n)||{};let t;n.maxAge!==void 0?t=n.maxAge*1e3:n.expires&&(t=n.expires.getTime()-Date.now());const a=t!==void 0&&t<=0,o=d(a?void 0:e[r]??((c=n.default)==null?void 0:c.call(n))),u=t&&!a?Se(o,t,n.watch&&n.watch!=="shallow"):M(o);{let s=null;try{!b&&typeof BroadcastChannel<"u"&&(s=new BroadcastChannel(`nuxt:cookies:${r}`))}catch{}const l=()=>{n.readonly||he(u.value,e[r])||(be(r,u.value,n),e[r]=d(u.value),s==null||s.postMessage({value:n.encode(u.value)}))},f=y=>{var w;const g=y.refresh?(w=j(n))==null?void 0:w[r]:n.decode(y.value);p=!0,u.value=g,e[r]=d(g),K(()=>{p=!1})};let p=!1;const E=!!V();if(E&&C(()=>{p=!0,l(),s==null||s.close()}),b){const y=g=>{const w=g.changed.find(k=>k.name===r),q=g.deleted.find(k=>k.name===r);w&&f({value:w.value}),q&&f({value:null})};b.addEventListener("change",y),E&&C(()=>b.removeEventListener("change",y))}else s&&(s.onmessage=({data:y})=>f(y));n.watch?_(u,()=>{p||l()},{deep:n.watch!=="shallow"}):l()}return u}function j(r={}){return le(document.cookie,r)}function ve(r,i,n={}){return i==null?T(r,i,{...n,maxAge:-1}):T(r,i,n)}function be(r,i,n={}){document.cookie=ve(r,i,n)}const R=2147483647;function Se(r,i,n){let e,t,a=0;const o=n?M(r):{value:r};return V()&&C(()=>{t==null||t(),clearTimeout(e)}),$((u,c)=>{n&&(t=_(o,c));function s(){a=0,clearTimeout(e);const l=i-a,f=l<R?l:R;e=setTimeout(()=>{if(a+=f,a<i)return s();o.value=void 0,c()},f)}return{get(){return u(),o.value},set(l){s(),o.value=l,c()}}})}const ke={key:0,class:"lead"},L=D({__name:"Optin",props:H({optinPhrase:{},emailAttrs:{},errors:{},meta:{},submitForm:{type:Function}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const i=J(r,"modelValue");return(n,e)=>{const t=B,a=z;return h(),S("form",{method:"post",onSubmit:e[1]||(e[1]=Q((...o)=>n.submitForm&&n.submitForm(...o),["prevent"]))},[n.optinPhrase?(h(),S("p",ke,X(n.optinPhrase),1)):G("",!0),O(t,Y({id:"email",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),name:"email",required:!0},n.emailAttrs,{errors:n.meta.touched&&n.errors.email?[n.errors.email]:[]}),null,16,["modelValue","errors"]),O(a,{label:"Accéder",type:"submit","read-only":!n.meta.valid},null,8,["read-only"])],32)}}});L.__docgenInfo={exportName:"default",displayName:"Optin",description:"",tags:{},props:[{name:"optinPhrase",required:!0,type:{name:"string"}},{name:"emailAttrs",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"meta",required:!0,type:{name:"FormMeta",elements:[{name:"{ email: string }"}]}},{name:"submitForm",required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/form/Optin.vue"]};const Ae=se("optin",()=>({addEmail:async(i,n)=>{const{status:e}=await $fetch("/api/optin",{method:"post",body:{email:i,username:n}});return e===200}})),Ce=()=>{const{params:r}=ue(),i=Ae(),n=we("__session",{default:()=>({optin:!1})}),e={email:ie().email("Email invalide").required("L'email est requis.")},{fields:t,fieldsAttrs:a,errors:o,meta:u}=oe({validationSchema:e}),c=F(()=>r.username),s=async()=>{await i.addEmail(t.email.value,c.value)&&(n.value.optin=!0)};return _(t.email,()=>u.value.touched=!1),{email:t.email,emailAttrs:a.email,errors:o,meta:u,optinCookie:F(()=>n.value.optin),submitForm:s}},_e={key:1},Ee={key:2},Oe=D({__name:"AppFormOptin",props:{optin:{},postAction:{}},setup(r){const{email:i,emailAttrs:n,errors:e,meta:t,optinCookie:a,submitForm:o}=Ce(),{resolveComponent:u}=ce();return(c,s)=>{const l=L;return h(),A(ne,{mode:"out-in","enter-active-class":"transition-opacity duration-500","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-opacity duration-500","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Z(()=>[m(a)?m(a)&&c.postAction.type!=="standard"?(h(),S("div",_e,[(h(),A(ee(m(u)(c.postAction.type)),te(re(c.postAction.props)),null,16))])):(h(),S("p",Ee," Merci pour votre inscription ! ")):(h(),A(l,{key:0,modelValue:m(i),"onUpdate:modelValue":s[0]||(s[0]=f=>W(i)?i.value=f:null),"optin-phrase":c.optin,"email-attrs":m(n),errors:m(e),meta:m(t),"submit-form":m(o)},null,8,["modelValue","optin-phrase","email-attrs","errors","meta","submit-form"]))]),_:1})}}});Oe.__docgenInfo={exportName:"default",displayName:"AppFormOptin",description:"",tags:{},props:[{name:"optin",required:!0,type:{name:"string"}},{name:"postAction",required:!0,type:{name:"Component"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/components/AppFormOptin.vue"]};export{Oe as default};
