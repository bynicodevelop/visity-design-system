import{d as p}from"./BMoLVCV3.js";const i=p({name:"ExampleButton",template:`
    <button 
      class="px-4 py-2 rounded text-white" 
      :class="{ 
        'bg-blue-500 hover:bg-blue-700': variant === 'primary',
        'bg-gray-500 hover:bg-gray-700': variant === 'secondary'
      }"
    >
      {{ label }}
    </button>
  `,props:{label:{type:String,default:"Button"},variant:{type:String,default:"primary"}}}),m={title:"Example/Button",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"]}}},a={args:{label:"Primary Button",variant:"primary"}},r={args:{label:"Secondary Button",variant:"secondary"}};var e,t,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const d=["Primary","Secondary"];export{a as Primary,r as Secondary,d as __namedExportsOrder,m as default};
