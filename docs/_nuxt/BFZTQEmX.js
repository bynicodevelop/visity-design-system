import{r as g,P as I,w as N,k as A,Q as L,R as $,F as w,e as p,q as u,o as i,N as z,L as E,b as v,d as c,g as M,c as m,A as l,a as _,z as j,t as f,u as y}from"./ynGhil90.js";import{x as C,y as F}from"./FdjDsa7y.js";import{_ as P}from"./BJpTlgDl.js";import{_ as T}from"./Bk6UVDys.js";import{_ as h}from"./DlAUqK2U.js";import{s as S}from"./ug01hfsv.js";import"./LLlQFAyC.js";import"./Dw9M0k2F.js";import"../sb-preview/runtime.js";function U(r,t={}){const o=t.head||C();if(o)return o.ssr?o.push(r,t):O(o,r,t)}function O(r,t,o={}){const e=g(!1),n=g({});I(()=>{n.value=e.value?{}:F(t)});const a=r.push(n.value,o);return N(n,d=>{a.patch(d)}),w()&&(A(()=>{a.dispose()}),L(()=>{e.value=!0}),$(()=>{e.value=!1})),a}const V=r=>{const t=Object.create(null);for(const o in r){const e=r[o];e!==void 0&&(t[o]=e)}return t},b=(r,t)=>(o,e)=>(U(()=>r({...V(o),...e.attrs},e)),()=>{var n,a;return t?(a=(n=e.slots).default)==null?void 0:a.call(n):null}),D={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:[String,Object,Array],tabindex:String,title:String,translate:String},R=p({name:"Title",inheritAttrs:!1,setup:b((r,{slots:t})=>{var o,e,n;return{title:((n=(e=(o=t.default)==null?void 0:o.call(t))==null?void 0:e[0])==null?void 0:n.children)||null}})}),Q=p({name:"Meta",inheritAttrs:!1,props:{...D,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:b(r=>{const t={...r};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),G=p({name:"Head",inheritAttrs:!1,setup:(r,t)=>()=>{var o,e;return(e=(o=t.slots).default)==null?void 0:e.call(o)}}),J=["href","aria-label","title"],k=p({__name:"SocialList",props:{socials:{},fontSizeIcon:{}},setup(r){return(t,o)=>{const e=T;return i(),u("ul",null,[(i(!0),u(z,null,E(t.socials,({name:n,url:a,icon:s})=>(i(),u("li",{key:n},[v("a",{href:a,"aria-label":`Lien vers ${n}`,title:`Lien vers ${n}`,target:"_blank",rel:"noopener noreferrer"},[c(e,{icon:s,name:n,"font-size-icon":t.fontSizeIcon,color:`var(--color-${n.toLowerCase()})`},null,8,["icon","name","font-size-icon","color"])],8,J)]))),128))])}}}),K={},W={$style:K},X=h(k,[["__cssModules",W]]);k.__docgenInfo={exportName:"default",displayName:"SocialList",description:"",tags:{},props:[{name:"socials",required:!0,type:{name:"Array",elements:[{name:"Socials"}]}},{name:"fontSizeIcon",required:!1,type:{name:"number"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/SocialList.vue"]};const Y={key:1,class:"lead"},B=p({__name:"HeadingBio",props:{image:{},username:{},bio:{},socials:{}},setup(r){const t=r,o=M(()=>t.socials?Object.keys(t.socials).reduce((e,n)=>{var a;return(a=t.socials)!=null&&a[n]?[...e,n]:e},[]).map(e=>{var n;return{...S[e],url:`${S[e].url}${(n=t.socials)==null?void 0:n[e]}`}}):[]);return(e,n)=>{const a=R,s=Q,d=G,q=P,H=X;return i(),u("div",null,[c(d,null,{default:_(()=>[c(a,null,{default:_(()=>[j("@"+f(e.username),1)]),_:1}),e.bio?(i(),m(s,{key:0,name:"description",content:e.bio},null,8,["content"])):l("",!0),c(s,{property:"og:title",content:e.username},null,8,["content"]),e.image?(i(),m(s,{key:1,name:"og:image",content:e.image},null,8,["content"])):l("",!0),e.bio?(i(),m(s,{key:2,property:"og:description",content:e.bio},null,8,["content"])):l("",!0)]),_:1}),c(q,{src:e.image},null,8,["src"]),v("h1",null,"@"+f(e.username),1),y(o).length?(i(),m(H,{key:0,socials:y(o)},null,8,["socials"])):l("",!0),e.bio?(i(),u("p",Y,f(e.bio),1)):l("",!0)])}}}),se=h(B,[["__scopeId","data-v-5463b069"]]);B.__docgenInfo={exportName:"default",displayName:"HeadingBio",description:"",tags:{},props:[{name:"image",required:!0,type:{name:"string"}},{name:"username",required:!0,type:{name:"string"}},{name:"bio",required:!0,type:{name:"string"}},{name:"socials",required:!1,type:{name:"Record",elements:[{name:"SocialType"},{name:"string"}]}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/components/HeadingBio.vue"]};export{se as default};
