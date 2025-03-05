import{_ as t}from"./gQkJSR-i.js";import"./Bd7YHVWS.js";const c={title:"DesignSysteme/Pricing/ItemPrice",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Le composant ItemPrice est utilisé pour afficher des informations de prix au sein du système de design."}}},render:n=>({components:{ItemPrice:t},setup(){return{args:n}},template:`
      <div>
      <ItemPrice
        v-bind="args"
      />
      </div>
    `}),argTypes:{title:{control:{type:"text"}},description:{control:{type:"text"}},price:{control:{type:"number"}},currency:{control:{type:"text"}},interval:{control:{type:"text"}},isPopular:{control:{type:"boolean"}},features:{control:{type:"array"}}}},e={args:{title:"Starter",description:"Description du prix pour le starter.",price:29,currency:"EUR",interval:"month",isPopular:!1,features:["1 User","1 Website","1 GB Storage","24/7 Support"]}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Starter',
    description: 'Description du prix pour le starter.',
    price: 29,
    currency: 'EUR',
    interval: 'month',
    isPopular: false,
    features: ['1 User', '1 Website', '1 GB Storage', '24/7 Support']
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
