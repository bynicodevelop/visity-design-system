import{_ as m}from"./BiWUJPMl.js";import{d,q as s,s as i,k as t,o as u,b as p}from"./6VV17LS1.js";const f=d({__name:"EmailInput",props:s({id:{},name:{},required:{type:Boolean},label:{},placeholder:{},errors:{},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const r=i(o,"modelValue");return(e,a)=>{const n=m;return u(),t("div",null,[p(n,{id:e.id,modelValue:r.value,"onUpdate:modelValue":[a[0]||(a[0]=l=>r.value=l),a[1]||(a[1]=l=>r.value=l)],label:e.label||"E-mail",placeholder:e.placeholder||"E-mail",name:e.name,required:e.required||!1,errors:e.errors,disabled:e.disabled||!1,type:"text","auto-complete":"email"},null,8,["id","modelValue","label","placeholder","name","required","errors","disabled"])])}}});f.__docgenInfo={exportName:"default",displayName:"EmailInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"errors",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/form/EmailInput.vue"]};export{f as _};
