import{_ as N}from"./CO91RXXs.js";import{u as A,_ as E}from"./J9BRdPqP.js";import{_ as L}from"./Dh3BC7OL.js";import{a as B}from"./D-sVmGqw.js";import{r as I,w as f,e as M,l as S,o as _,d as i,c as v,q as C,m as x,u as e,j as g,H as P,a as w,b as d,k as $}from"./Bd7YHVWS.js";import{FirebaseError as q}from"firebase/app";import{c as U,f as j,m as z}from"./DH32QOTT.js";import{_ as R}from"./DB1AZkfp.js";import{_ as H}from"./Bnm7RYFo.js";import{_ as T}from"./DlAUqK2U.js";import"./CqkleIqs.js";import"./B0rRNQfO.js";import"./BvkebAGL.js";import"../sb-preview/runtime.js";import"firebase/auth";import"firebase/storage";const D=()=>{const c=U(),s=j(),{fields:o,fieldsAttrs:r,errors:t,meta:a}=A(),u=I(null),p=async()=>{try{await s.connectAccount(o.email.value,o.password.value),c.push({name:"dashboard"})}catch(n){n instanceof q&&(console.log(n.code),u.value=z[n.code]||n.message)}};return f(o.email,()=>a.value.touched=!1),f(o.password,()=>a.value.touched=!1),{errorMessage:u,meta:a,errors:t,fields:o,fieldsAttrs:r,submitForm:p}},y=M({__name:"Login",setup(c){const{errorMessage:s,meta:o,errors:r,fields:{email:t,password:a},fieldsAttrs:{emailAttrs:u,passwordAttrs:p},submitForm:n}=D();return(O,m)=>{const b=N,F=E,V=L,k=B;return _(),S("form",{action:"post",onSubmit:m[2]||(m[2]=P((...l)=>e(n)&&e(n)(...l),["prevent"]))},[i(b,x({id:"email",modelValue:e(t),"onUpdate:modelValue":m[0]||(m[0]=l=>g(t)?t.value=l:null),label:"Email address",placeholder:"Enter your email address",name:"email"},e(u),{required:!0,errors:e(o).touched&&e(r).email?[e(r).email]:[]}),null,16,["modelValue","errors"]),i(F,x({id:"password",modelValue:e(a),"onUpdate:modelValue":m[1]||(m[1]=l=>g(a)?a.value=l:null),label:"Password",placeholder:"Enter your password",name:"password"},e(p),{required:!0,errors:e(o).touched&&e(r).password?[e(r).password]:[]}),null,16,["modelValue","errors"]),i(V,{type:"submit",label:"Sign in","read-only":!e(o).valid},null,8,["read-only"]),e(s)?(_(),v(k,{key:0,errors:e(s)?[e(s)]:[]},null,8,["errors"])):C("",!0)],32)}}});y.__docgenInfo={exportName:"default",displayName:"Login",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/components/app/form/Login.vue"]};const h={},G={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},J={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"};function K(c,s){const o=y,r=R,t=H;return _(),v(t,null,{default:w(()=>[d("div",G,[s[1]||(s[1]=d("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[d("h2",{class:"mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"},"Se connecter")],-1)),d("div",J,[i(o),i(r,{to:{name:"auth-register"}},{default:w(()=>s[0]||(s[0]=[$(" Vous n'avez pas de compte ? Créez-en un ")])),_:1})])])]),_:1})}const de=T(h,[["render",K],["__scopeId","data-v-615f0bf7"]]);h.__docgenInfo={displayName:"auth",description:"",tags:{},sourceFiles:["/home/runner/work/visity.me/visity.me/pages/auth/index.vue"]};export{de as default};
