import{_ as a}from"./BTCXS5m5.js";import"./BMoLVCV3.js";const S={title:"DesignSysteme/Skeleton/Avatar",component:a,tags:["autodocs"],render:g=>({components:{Avatar:a},setup(){return{args:g}},template:`
      <Avatar :size="args.size" />
    `}),argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Avatar skeleton size"}}},e={args:{size:"md"}},s={args:{size:"sm"}},r={args:{size:"lg"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,m,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Default","Small","Large"];export{e as Default,r as Large,s as Small,f as __namedExportsOrder,S as default};
