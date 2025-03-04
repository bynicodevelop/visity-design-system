import{_ as o}from"./CnJiXuI5.js";import"./BMoLVCV3.js";import"./DlAUqK2U.js";const x={title:"DesignSysteme/Alert",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Le composant Alert est utilisé pour afficher des messages à l'utilisateur. Il peut être utilisé pour des alertes de succès, d'erreur, d'avertissement ou d'information."}}},render:S=>({components:{Alert:o},setup(){return{args:S}},template:`
      <div class="w-96 h-32">
      <Alert
        v-bind="args"
      />
      </div>
    `}),argTypes:{type:{control:"select",options:["info","success","warning","error"]},title:{control:{type:"text"}},message:{control:{type:"text"}}}},e={args:{type:"info",title:"Information",message:"Voici une information importante."}},r={args:{type:"success",title:"Succès",message:"Opération réussie."}},s={args:{type:"warning",title:"Attention",message:"Opération à risque."}},t={args:{type:"error",title:"Erreur",message:"Opération échouée."}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Information',
    message: 'Voici une information importante.'
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Succès',
    message: 'Opération réussie.'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,l,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Attention',
    message: 'Opération à risque.'
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,f,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Erreur',
    message: 'Opération échouée.'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const E=["Info","Success","Warning","Error"];export{t as Error,e as Info,r as Success,s as Warning,E as __namedExportsOrder,x as default};
