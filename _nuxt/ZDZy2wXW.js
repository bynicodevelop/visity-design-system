import{d as f,f as _,x as v,c as y,b as o,w as a,T as n,y as x,o as l,k as w,z as h,a as e,A as b,l as r}from"./6VV17LS1.js";import{_ as g}from"./DlAUqK2U.js";const k={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},B={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},C={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},M={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},N={class:"sm:flex sm:items-start"},E={class:"flex justify-end space-x-2 bg-gray-50 px-4 py-3 sm:px-6"},m=f({__name:"Modal",props:{isOpen:{type:Boolean}},emits:["close"],setup(c,{emit:p}){const u=c,i=p,d=t=>{t.key==="Escape"&&u.isOpen&&i("close")};return _(()=>{document.addEventListener("keydown",d)}),v(()=>{document.removeEventListener("keydown",d)}),(t,s)=>(l(),y(x,{to:"body"},[o(n,{appear:"",name:"modal-fade"},{default:a(()=>[t.isOpen?(l(),w("div",k,[o(n,{name:"modal-overlay",appear:""},{default:a(()=>[e("div",{class:"fixed inset-0 bg-gray-500/75 transition-opacity","aria-hidden":"true",onClick:s[0]||(s[0]=O=>i("close"))})]),_:1}),e("div",B,[e("div",C,[o(n,{name:"modal-content",appear:""},{default:a(()=>[e("div",{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",onClick:s[1]||(s[1]=b(()=>{},["stop"]))},[e("div",M,[e("div",N,[r(t.$slots,"content",{},void 0,!0)])]),e("div",E,[r(t.$slots,"actions",{},void 0,!0)])])]),_:3})])])])):h("",!0)]),_:3})]))}}),V=g(m,[["__scopeId","data-v-a0ba30e3"]]);m.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"isOpen",required:!0,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/ui/Modal.vue"]};export{V as _};
