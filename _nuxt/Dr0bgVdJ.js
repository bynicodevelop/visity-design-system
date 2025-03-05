import{_ as n,a}from"./Dec9h5Mx.js";import"./Bd7YHVWS.js";const u={title:"DesignSysteme/GroupRadio",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Le composant GroupRadio est utilisé pour afficher des radios au sein du système de design."}}},render:l=>({components:{GroupRadio:a,Radio:n},setup(){return{args:l}},template:`
        <GroupRadio v-model="args.defaultValue">
            <Radio 
                v-for="radio in args.radios"
                v-bind="radio"
                :key="radio.value"
                :checked="args.defaultValue === radio.value"
            >
                {{ radio.label }}
            </Radio>
        </GroupRadio>
        <p class="pt-3">Selected value: {{ args.defaultValue }}</p>
    `}),argTypes:{radios:{control:{type:"object"}},defaultValue:{control:{type:"text"}}}},e={args:{radios:[{value:"monthly",name:"frequency",label:"Monthly"},{value:"yearly",name:"frequency",label:"Yearly"}],defaultValue:"monthly"}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    radios: [{
      value: 'monthly',
      name: 'frequency',
      label: 'Monthly'
    }, {
      value: 'yearly',
      name: 'frequency',
      label: 'Yearly'
    }],
    defaultValue: 'monthly'
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,u as default};
