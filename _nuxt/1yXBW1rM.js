import{_ as G}from"./Dh3BC7OL.js";import{_ as ne}from"./BC9FhsSB.js";import{_ as te,b as K,a as Q,d as ie,c as C,u as le}from"./D-sVmGqw.js";import{e as S,B as W,C as X,l as q,o as f,d as l,b as v,J as ue,a7 as me,m as de,r as w,g as B,u as s,H as j,q as D,t as R,A as pe,s as ce,w as L,D as fe,x as ve,c as J,a as I,j as z,F as _e,v as ge,k as be}from"./Bd7YHVWS.js";import{_ as O}from"./DlAUqK2U.js";import{_ as ye}from"./R-8Ujrov.js";import{_ as qe}from"./DB1AZkfp.js";import{s as T}from"./ug01hfsv.js";import{e as he,u as xe,a as Fe,c as Ve,f as we,k as $e}from"./DH32QOTT.js";import{u as ke}from"./DVJWKYUs.js";import{u as Ce}from"./DBMyLUsb.js";import{u as Ie}from"./B3ndmlly.js";import{ref as Se,uploadBytes as Ue,getDownloadURL as Pe}from"firebase/storage";import{u as Ae}from"./0C9IgPnq.js";const Y=S({__name:"PrefixedInput",props:W({id:{},name:{},prefix:{},required:{type:Boolean},label:{},placeholder:{},errors:{},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const r=X(n,"modelValue");return(a,o)=>{const m=te;return f(),q("div",null,[l(m,{id:a.id,modelValue:r.value,"onUpdate:modelValue":[o[0]||(o[0]=p=>r.value=p),o[1]||(o[1]=p=>r.value=p)],label:a.label||"Nom d'utilisateur",placeholder:a.placeholder||"JohnDoe",prefix:a.prefix,name:a.name,required:a.required||!1,errors:a.errors,disabled:a.disabled||!1,type:"text"},null,8,["id","modelValue","label","placeholder","prefix","name","required","errors","disabled"])])}}});Y.__docgenInfo={exportName:"default",displayName:"PrefixedInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"prefix",required:!0,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"errors",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/form/PrefixedInput.vue"]};const Ne={class:"grid"},Be={class:"mt-2"},Ee=["id","name","placeholder","disabled"],Z=S({__name:"Textarea",props:W({label:{},name:{},id:{},placeholder:{},errors:{},required:{type:Boolean},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const r=X(n,"modelValue");return(a,o)=>{const m=K,p=Q;return f(),q("div",Ne,[l(m,{label:a.label,name:a.name,required:a.required,errors:a.errors},null,8,["label","name","required","errors"]),v("div",Be,[ue(v("textarea",de({id:a.id,"onUpdate:modelValue":o[0]||(o[0]=t=>r.value=t),name:a.name,placeholder:a.placeholder,disabled:a.disabled||!1},a.required!==void 0&&a.required!==!1?{required:!0,"aria-required":"true"}:{},{rows:"3","onUpdate:modelValue":o[1]||(o[1]=t=>r.value=t)}),null,16,Ee),[[me,r.value]])]),l(p,{errors:a.errors??[]},null,8,["errors"])])}}}),Me=O(Z,[["__scopeId","data-v-668e451e"]]);Z.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"id",required:!0,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"errors",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/form/Textarea.vue"]};const je={class:"mt-2 flex items-center gap-x-3"},De=["accept"],ee=S({__name:"ImageInput",props:{label:{},name:{},preview:{},required:{type:Boolean},errors:{},accept:{},onChange:{type:Function}},setup(n){const r=n,a=w(null),o=w(null),m=B(()=>{var i;return((i=r.accept)==null?void 0:i.join(","))??"image/*"}),p=B(()=>o.value??r.preview??null),t=i=>!r.accept||r.accept.length===0?!0:r.accept.some(g=>i.type.includes(g)),_=i=>{var b;const e=(b=i.target.files)==null?void 0:b[0];e&&t(e)?(o.value=URL.createObjectURL(e),r.onChange(e)):o.value=null},h=()=>{var i;(i=a.value)==null||i.click()};return(i,g)=>{const e=K,b=ye,$=G,x=Q;return f(),q("div",null,[l(e,{label:r.label,name:r.name,required:r.required,errors:r.errors},null,8,["label","name","required","errors"]),v("div",je,[l(b,{src:s(p),alt:"Avatar Preview",size:"sm"},null,8,["src"]),l($,{label:"Change",color:"secondary",size:"sm",onClick:j(h,["prevent"])}),v("input",{ref_key:"inputFile",ref:a,type:"file",class:"hidden",accept:s(m),onChange:_},null,40,De)]),l(x,{errors:i.errors??[]},null,8,["errors"])])}}});ee.__docgenInfo={exportName:"default",displayName:"ImageInput",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"preview",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"errors",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"accept",required:!1,type:{name:"Array",elements:[{name:"ImageFileAccept"}]}},{name:"onChange",required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/form/ImageInput.vue"]};const Le={key:0},Te={key:1},re=S({__name:"Fieldset",props:{legend:{},description:{}},setup(n){return(r,a)=>(f(),q("fieldset",null,[r.legend?(f(),q("legend",Le,R(r.legend),1)):D("",!0),r.description?(f(),q("p",Te,R(r.description),1)):D("",!0),v("section",{class:ce({"pt-8 mt-4":r.description||r.legend})},[pe(r.$slots,"default",{},void 0,!0)],2)]))}}),Oe=O(re,[["__scopeId","data-v-69f870c0"]]);re.__docgenInfo={exportName:"default",displayName:"Fieldset",description:"",tags:{},props:[{name:"legend",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/form/Fieldset.vue"]};const Re=he("useSearchUsernameStore",()=>{const n=w({exists:!1,owned:!1});return{usernameExist:n,searchExistingUsername:async a=>{const o=await $fetch("/api/profile/exist",{query:{username:`@${a}`}});n.value=o}}}),Je=()=>{const{$storage:n}=xe();return{uploadFile:async(a,o)=>{const m=Se(n,o),p=await Ue(m,a);return Pe(p.ref)}}},H=(n,r)=>{const a=w(n.value);let o;return L(n,m=>{o&&clearTimeout(o),o=setTimeout(()=>{a.value=m},r)}),a},ze=async()=>{var P,k,A,N;const{params:n}=Fe(),r=Ve(),a=$e(),o=we(),m=Re(),p=ke(),t=Ce(),_=Ie(),{uploadFile:h}=Je(),i=w(null),g={uid:C().required("L'identifiant est requis."),username:C().required("Le nom d'utilisateur est requis."),bio:C().required("La bio est requise."),image:C(),socials:ie(Object.fromEntries(Object.keys(T).map(c=>[c,C().optional()]))).optional()},{fields:e,fieldsAttrs:b,errors:$,meta:x}=le({validationSchema:g}),E=B(()=>({username:e.username.value,bio:e.bio.value,image:e.image.value,socials:e.socials.value})),F=Object.fromEntries(Object.keys(T).map(c=>[c,""]));e.socials.value=F,n.username&&(await Ae("user-profile",()=>t.fetchProfile(n.username)),e.username.value=((P=t.profile)==null?void 0:P.username)??"",e.bio.value=((k=t.profile)==null?void 0:k.bio)??"",e.image.value=((A=t.profile)==null?void 0:A.image)??"",e.socials.value=((N=t.profile)==null?void 0:N.socials)??F,p.createComponentFromValues({bio:e.bio.value,image:e.image.value,username:e.username.value,socials:e.socials.value},"HeadingBio"));const U=async()=>{await o.fetchUser();const c=o.user;e.uid.value=c.id},M=async()=>{if(i.value){const c=await h(i.value,`images/${e.uid.value}/${e.username.value}/profile`);e.image.value=c}try{await t.addProfile({username:e.username.value,bio:e.bio.value,image:e.image.value,socials:JSON.parse(JSON.stringify(e.socials.value))}),_.addAlert("Enregistrement réussi","Votre profil a été enregistré avec succès.","success"),t.profile&&r.push(`/dashboard/profiles/${e.username.value}`)}catch(c){console.error(c.message)}},y=async()=>{await t.deleteProfile(e.username.value),r.push("/dashboard")},u=H(e.username,500);L(u,m.searchExistingUsername);const V=H(E,500);return L(V,c=>{p.createComponentFromValues(c,"HeadingBio")},{deep:!0}),{searchUsername:m,profileStore:t,domain:a.public.domain,fields:e,fieldsAttrs:b,errors:$,meta:x,file:i,fetchProfile:U,submitForm:M,deleteAccount:y}},ae=S({__name:"PublicProfile",async setup(n){let r,a;const{searchUsername:o,profileStore:m,meta:p,domain:t,fields:{username:_,bio:h,image:i,socials:g},errors:e,file:b,fetchProfile:$,submitForm:x,deleteAccount:E}=([r,a]=fe(()=>ze()),r=await r,a(),r),F=w(!1),U=B(()=>{const y=[];return o.usernameExist.exists&&y.push("Ce nom d'utilisateur est déjà utilisé."),e.value.username&&y.push(e.value.username),y});ve(async()=>await $());const M=y=>b.value=y;return(y,u)=>{const V=G,P=ne,k=Y,A=Me,N=ee,c=Oe,oe=qe;return f(),q("form",{action:"post",onSubmit:u[4]||(u[4]=j((...d)=>s(x)&&s(x)(...d),["prevent"]))},[l(P,{"is-open":s(F)},{content:I(()=>u[5]||(u[5]=[v("div",{class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},[v("h3",{id:"modal-title",class:"text-base font-semibold text-gray-900"}," Supprimer mon compte "),v("div",{class:"mt-2"},[v("p",{class:"text-sm text-gray-500"}," Êtes-vous sûr de vouloir continuer ? ")])],-1)])),actions:I(()=>[l(V,{type:"button",label:"Annuler",color:"secondary",onClick:u[0]||(u[0]=d=>F.value=!1)}),l(V,{type:"button",label:"Confirmer",color:"danger",onClick:s(E)},null,8,["onClick"])]),_:1},8,["is-open"]),l(c,{legend:"Informations publiques",description:"Ces informations seront visibles par tous les utilisateurs."},{default:I(()=>[l(k,{id:"username",modelValue:s(_),"onUpdate:modelValue":u[1]||(u[1]=d=>z(_)?_.value=d:null),prefix:`${s(t)}/@`,disabled:!!s(m).profile,errors:s(U).length>0?s(U):[],name:"username",label:"Nom d'utilisateur",placeholder:"JohnDoe",required:""},null,8,["modelValue","prefix","disabled","errors"]),l(A,{id:"bio",modelValue:s(h),"onUpdate:modelValue":u[2]||(u[2]=d=>z(h)?h.value=d:null),name:"bio",label:"Bio",placeholder:"Je suis un développeur web passionné par les technologies modernes.",errors:s(e).bio?[s(e).bio]:[]},null,8,["modelValue","errors"]),l(N,{id:"avatar",preview:s(i),name:"avatar",label:"Avatar",required:"",errors:s(e).avatar?[s(e).avatar]:[],onChange:M},null,8,["preview","errors"])]),_:1}),l(c,{legend:"Réseaux sociaux",description:"Ajoutez vos réseaux sociaux pour que les autres utilisateurs puissent vous suivre."},{default:I(()=>[(f(!0),q(_e,null,ge(s(T),d=>(f(),J(k,{id:d.id,key:d.id,modelValue:s(g)[d.id],"onUpdate:modelValue":se=>s(g)[d.id]=se,prefix:d.domain,name:d.id,label:d.name,placeholder:"johndoe"},null,8,["id","modelValue","onUpdate:modelValue","prefix","name","label"]))),128))]),_:1}),l(V,{type:"submit",label:"Enregistrer","read-only":s(o).usernameExist.exists||!s(p).valid},null,8,["read-only"]),l(oe,{to:`/@${s(_)}`,target:"_blank"},{default:I(()=>u[6]||(u[6]=[be(" Voir mon profil public ")])),_:1},8,["to"]),s(m).profile?(f(),J(V,{key:0,type:"button",label:"Supprimer mon compte",color:"danger",onClick:u[3]||(u[3]=j(d=>F.value=!0,["prevent"]))})):D("",!0)],32)}}}),tr=O(ae,[["__scopeId","data-v-419bee87"]]);ae.__docgenInfo={exportName:"default",displayName:"PublicProfile",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/form/PublicProfile.vue"]};export{tr as _};
