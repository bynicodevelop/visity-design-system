import{_ as t}from"./Ceb3i6cf.js";import{_ as n}from"./Ct7uIz9F.js";import"./bXbskgsS.js";import"./DlAUqK2U.js";const p={title:"DesignSysteme/Modal",component:t,parameters:{layout:"centered",docs:{description:{component:"Le composant Modal est utilisé pour afficher du contenu superposé sur l'interface utilisateur. Il peut être utilisé pour des confirmations, des alertes ou des formulaires."}}},render:o=>({components:{Modal:t,ButtonPrimary:n},setup(){return{args:o}},template:`
      <ButtonPrimary 
          label="Ouvrir la modal"
          @click="args.isOpen = true"
        />

      <Modal
        :is-open="args.isOpen"
        @close="args.isOpen = false"
      >
      <template #content>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3
            id="modal-title"
            class="text-base font-semibold text-gray-900"
          >Deactivate Account</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Are you sure you want to proceed?</p>
          </div>
        </div>
      </template>

      <template #actions>
        <ButtonPrimary 
          label="Deactivate"
          color="danger"
          @click="args.isOpen = false"
        />
        <ButtonPrimary 
          label="Cancel"
          color="secondary"
          @click="args.isOpen = false"
        />
      </template>
    </Modal>
    `})},e={args:{isOpen:!1}};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isOpen: false
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
