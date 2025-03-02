import{j as $,l as i,B as y,H as W,o as g,v as B,n as I,M as H,b as U,N as L,x as R}from"./Dr2B6r8K.js";import{s as X,t as _,v}from"./DUbpLHlo.js";function Y(l){const e={size:16,x:0,y:0,rotate:0};return l.size!==e.size||l.x!==e.x||l.y!==e.y||l.rotate!==e.rotate||l.flipX||l.flipY}const D={key:0,style:{display:"none"}},E=["innerHTML"],G=["innerHTML"],z=$({__name:"icon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:l=>[!0,!1,"horizontal","vertical","both"].includes(l)},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:void 0},listItem:{type:Boolean,default:!1},pull:{type:String,default:void 0,validator:l=>["right","left"].includes(l)},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:void 0,validator:l=>[90,180,270].includes(Number.parseInt(l,10))},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:void 0,validator:l=>["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].includes(l)},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:void 0},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:void 0},titleId:{type:String,default:void 0},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup(l){const e=l,m=i(()=>k(e.icon)),p=i(()=>k(e.mask)),r=i(()=>{if(e.transform){const a=typeof e.transform!="object"?X.transform(e.transform):e.transform;if(a&&Y(a))return w(a)}}),s=i(()=>_(m.value,{classes:x.value,title:e.title,titleId:e.titleId})),f=i(()=>_(p.value)),b=i(()=>{var t,n,o,u,c,d;const a={"aria-hidden":!0,"data-prefix":(t=s.value)==null?void 0:t.prefix,"data-icon":(n=s.value)==null?void 0:n.iconName,class:x.value,focusable:!1,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${(o=s.value)==null?void 0:o.icon[0]} ${(u=s.value)==null?void 0:u.icon[1]}`};return e.symbol&&(a.id=[(c=s.value)==null?void 0:c.prefix,"fa",(d=s.value)==null?void 0:d.iconName].join("-")),e.title&&(a["aria-labelledby"]=S.value),a}),h=i(()=>{const a=j();if(f.value){const t=e.maskId||f.value.iconName;return`<defs>
      <clipPath id="clip-${t}">
        <path fill="currentColor" d="${f.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${t}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${a}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${t})" mask="url(#mask-${t})" x="0" y="0" width="100%" height="100%"></rect>`}return a}),x=i(()=>{const a={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==void 0,[`fa-rotate-${e.rotation}`]:e.rotation!==void 0,[`fa-pull-${e.pull}`]:e.pull!==void 0,"fa-swap-opacity":e.swapOpacity,"fa-bounce":e.bounce,"fa-shake":e.shake,"fa-beat":e.beat,"fa-fade":e.fade,"fa-beat-fade":e.beatFade,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse},t=Object.keys(a).map(n=>a[n]?n:null).filter(n=>n);return[v.replacementClass,...t]}),S=i(()=>v.replacementClass+"-title-"+(e.titleId||N()));function k(a){if(a){if(typeof a=="string"){const t={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"};let n=t[v.styleDefault]||"fas",o=a.replace(/\bfa-/g,"");if(o.includes(" ")){const u=o.split(/\s+/);u[0]in t&&(n=t[u[0]]),o=u[1]}return{prefix:n,iconName:o}}if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="object"&&"prefix"in a&&"iconName"in a)return a}}function w(a){var V;const n=((V=s.value)==null?void 0:V.icon[0])||512,o=a.x||0,u=a.y||0,c=a.size||0,d=a.rotate||0,C=a.flipX||0,O=a.flipY||0,q="translate(".concat(String(512/2)," 256)"),M="translate(".concat(String(o*32),", ").concat(String(u*32),") "),A="scale(".concat(String(c/16*(C?-1:1)),", ").concat(String(c/16*(O?-1:1)),") "),F="rotate(".concat(String(d)," 0 0)"),P="".concat(M," ").concat(A," ").concat(F),T="translate(".concat(String(n/2*-1)," -256)");return{outer:q,inner:P,path:T}}function N(){const a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let t=12,n="";for(;t-- >0;)n+=a[Math.random()*62|0];return n}function j(){const a=f.value?"black":"currentColor",t=[];let n=s.value.icon[4];return Array.isArray(n)||(n=[n]),n.forEach(o=>{t.push(`<path fill="${a}"${r.value?' transform="'+r.value.path+'"':""} d="${o}"></path>`)}),r.value&&(t.unshift(`<g transform="${r.value.outer}">`,`<g transform="${r.value.inner}">`),t.push("</g>","</g>")),e.title&&t.unshift(`<title id="${S.value}">${e.title}</title>`),t.join("")}return e.icon&&!s.value&&console.info("Could not find main icon",m.value),e.mask&&!f.value&&console.info("Could not find mask icon",p.value),(a,t)=>s.value&&l.symbol?(g(),y("svg",D,[B("symbol",I(b.value,{innerHTML:h.value}),null,16,E)])):s.value?(g(),y("svg",I({key:1},b.value,{innerHTML:h.value}),null,16,G)):W("",!0)}});z.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"border",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fixedWidth",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"flip",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"},values:[!0,"horizontal","vertical","both"]},{name:"icon",type:{name:"object|array|string"},required:!0},{name:"mask",type:{name:"object|array|string"},defaultValue:{func:!1,value:"null"}},{name:"maskId",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"listItem",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pull",type:{name:"string"},defaultValue:{func:!1,value:"undefined"},values:["right","left"]},{name:"pulse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rotation",type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"},values:[90,180,270]},{name:"swapOpacity",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"undefined"},values:["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]},{name:"spin",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"transform",type:{name:"string|object"},defaultValue:{func:!1,value:"undefined"}},{name:"symbol",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"titleId",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"inverse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bounce",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shake",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"beat",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fade",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"beatFade",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spinPulse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spinReverse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/node_modules/@vesp/nuxt-fontawesome/dist/runtime/components/icon.vue"]};const J={class:"sr-only"},K=$({__name:"Icon",props:{icon:{},name:{},fontSizeIcon:{},color:{}},setup(l){return(e,m)=>{const p=z;return g(),y(H,null,[U(p,{icon:["fab",e.icon],style:L({fontSize:`${e.fontSizeIcon||20}px`,color:e.color})},null,8,["icon","style"]),B("span",J,R(e.name||"Icon"),1)],64)}}});K.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"fontSizeIcon",required:!1,type:{name:"number"}},{name:"color",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/visity.me/visity.me/components/Icon.vue"]};export{K as _};
