import{e as S,g as y,r as b,x as q,y as R,h as x,z as T}from"./Bj-jG8Tx.js";import{c as C,g as k,h as A,u as _,o as w,n as N,p as B,i as E,w as L,j as I}from"./Ct6iHGiu.js";async function P(t,a=C()){const{path:o,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(o)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>P(t,a));a._routePreloaded.add(o);const i=e.map(n=>{var s;return(s=n.components)==null?void 0:s.default}).filter(n=>typeof n=="function");for(const n of i){const s=Promise.resolve(n()).catch(()=>{}).finally(()=>l.splice(l.indexOf(s)));l.push(s)}await Promise.all(l)}const j=(...t)=>t.find(a=>a!==void 0),D="noopener noreferrer",O=globalThis.requestIdleCallback||(t=>{const a=Date.now(),o={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(o)},1)}),U=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});/*! @__NO_SIDE_EFFECTS__ */function V(t){const a=t.componentName||"NuxtLink",o=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?L:I;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(n,!0)}};return S({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=C()??k(),n=y(()=>{const r=e.to||e.href||"";return o(r,i.resolve)}),s=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||A(n.value,{acceptRelative:!0})),v=b(!1),f=b(null),p=r=>{var d;f.value=e.custom?(d=r==null?void 0:r.$el)==null?void 0:d.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=_();let h,u=null;q(()=>{const g=z();w(()=>{h=O(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=g.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!s.value&&P(n.value,i).catch(()=>{})]),v.value=!0}))})})}),R(()=>{h&&U(h),u==null||u(),u=null})}return()=>{var g,m;if(!s.value){const c={ref:p,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),x(T("RouterLink"),c,l.default)}const r=typeof n.value=="object"?((g=i.resolve(n.value))==null?void 0:g.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:j(e.rel,t.externalRelAttribute,r?D:"")||null,u=()=>N(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:u,get route(){if(!r)return;const c=B(r);return{path:c.pathname,fullPath:c.pathname,get query(){return E(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:h,target:d,isExternal:s.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:f,href:r,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const H=V({componentName:"NuxtLink"});function z(){const t=_();if(t._observer)return t._observer;let a=null;const o=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(s=>{for(const v of s){const f=o.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),o.set(i,n),a.observe(i),()=>{o.delete(i),a.unobserve(i),o.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{H as _};
