import{_ as F}from"./DXDbeACO.js";import{u as V,_ as N}from"./De3GSlF9.js";import{_ as k}from"./DcEpPQmT.js";import{w as c,d as A,q as R,o as v,e as l,m as _,u as e,F as f,C,c as E,a as x,b as u,E as B}from"./BMoLVCV3.js";import{c as I,f as $}from"./1pDGCnw1.js";import{_ as q}from"./G7Dugum-.js";import{_ as z}from"./DUC0tUb9.js";import{_ as P}from"./DlAUqK2U.js";import"./Dv5VpOEg.js";import"./CqkleIqs.js";import"./CIT5wXZZ.js";import"./nkCzLtzb.js";import"../sb-preview/runtime.js";const S=()=>{const p=I(),o=$(),{fields:t,fieldsAttrs:s,errors:r,meta:n}=V(),d=async()=>{try{await o.createAccount(t.email.value,t.password.value),p.push({name:"dashboard"})}catch(i){console.error(i)}};return c(t.email,()=>n.value.touched=!1),c(t.password,()=>n.value.touched=!1),{meta:n,errors:r,fields:t,fieldsAttrs:s,submitForm:d}},w=A({__name:"Register",setup(p){const{meta:o,errors:t,fields:{email:s,password:r},fieldsAttrs:{emailAttrs:n,passwordAttrs:d},submitForm:i}=S();return(M,a)=>{const y=F,h=N,b=k;return v(),R("form",{action:"post",onSubmit:a[2]||(a[2]=C((...m)=>e(i)&&e(i)(...m),["prevent"]))},[l(y,_({id:"email",modelValue:e(s),"onUpdate:modelValue":a[0]||(a[0]=m=>f(s)?s.value=m:null),label:"E-mail",placeholder:"Entrez votre adresse email",name:"email"},e(n),{required:!0,errors:e(o).touched&&e(t).email?[e(t).email]:[]}),null,16,["modelValue","errors"]),l(h,_({id:"password",modelValue:e(r),"onUpdate:modelValue":a[1]||(a[1]=m=>f(r)?r.value=m:null),label:"Mot de passe",placeholder:"Enter votre mot de passe",name:"password"},e(d),{required:!0,errors:e(o).touched&&e(t).password?[e(t).password]:[]}),null,16,["modelValue","errors"]),l(b,{type:"submit",label:"Créer un compte","read-only":!e(o).valid},null,8,["read-only"])],32)}}});w.__docgenInfo={exportName:"default",displayName:"Register",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/form/Register.vue"]};const g={},U={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},j={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"};function L(p,o){const t=w,s=q,r=z;return v(),E(r,null,{default:x(()=>[u("div",U,[o[1]||(o[1]=u("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[u("h2",{class:"mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"},"Créer un compte")],-1)),u("div",j,[l(t),l(s,{to:{name:"auth"}},{default:x(()=>o[0]||(o[0]=[B(" Vous avez déjà un compte ? Connectez-vous ")])),_:1})])])]),_:1})}const te=P(g,[["render",L],["__scopeId","data-v-e93803d8"]]);g.__docgenInfo={displayName:"register",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/pages/auth/register.vue"]};export{te as default};
