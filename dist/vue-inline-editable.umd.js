(function(u,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(u=typeof globalThis!="undefined"?globalThis:u||self,e(u.VueGrid={},u.Vue))})(this,function(u,e){"use strict";var Se=(()=>`@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border,.promise-button-spinner{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion: reduce){.spinner-border,.promise-button-spinner,.spinner-grow{animation-duration:1.5s}}.promise-button{display:inline-flex;align-items:center;justify-content:center}.promise-button-spinner{width:1em;height:1em;border-width:.15em;margin-left:.5em}.promise-button--notext .promise-button-spinner{margin-left:0}.promise-button-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
`)();const H=["onClick","disabled"],I={key:0},K=e.createElementVNode("span",{class:"promise-button-text"},null,-1),U={class:"promise-button-spinner",role:"status"},R=[e.createElementVNode("span",{class:"promise-button-visually-hidden"},"Loading...",-1)],M=e.defineComponent({__name:"PromiseButton",props:{promise:null,autoHide:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},forceProcessing:{type:Boolean,default:!1}},setup(t,{expose:a}){const l=t,n=e.ref(!1),d=e.computed(()=>n.value||l.forceProcessing?!l.autoHide:!0),k=()=>{n.value||(n.value=!0,l.promise().catch(i=>{throw n.value=!1,i}).finally(()=>{n.value=!1}))};return a({handle:k,isShowText:d}),(i,h)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["promise-button",{"promise-button--notext":!e.unref(d)}]),type:"button",onClick:e.withModifiers(k,["stop"]),disabled:t.disabled},[e.unref(d)?(e.openBlock(),e.createElementBlock("span",I,[e.renderSlot(i.$slots,"default",{},()=>[K])])):e.createCommentVNode("",!0),e.renderSlot(i.$slots,"spinner",{},()=>[e.withDirectives(e.createElementVNode("span",U,R,512),[[e.vShow,n.value||t.forceProcessing]])])],10,H))}}),S="open_inline_editable";function B(t,a){const l=e.inject("$inlineEditable",{handle:null}),n=e.ref(t.modelValue),d=t.handleFn?t.handleFn:l.handle,k=t.modelValue,i=e.ref(!1),h=e.ref(!1),b=e.ref(null),v=e.computed(()=>t.modelValue),C=e.computed(()=>t.placement==="inline"),m=e.computed(()=>t.placement==="popup"),x=e.computed(()=>[`vinput-${t.type}`]),y=e.computed(()=>[`vinput-form-${t.placement}`]),c=()=>{g()},p=()=>null,g=()=>{V(),n.value=k},V=()=>{i.value=!1},f=()=>{document.dispatchEvent(new Event(S)),e.nextTick(()=>{i.value=!0,setTimeout(()=>{_()},200)})},_=()=>{const o=b.value;o&&o.focus()},z=o=>{const r=o?o.target.value:n.value;return h.value=!0,d(r,t.resource,t.pk,t.field).then(()=>{E(o)}).finally(()=>{h.value=!1})},E=o=>{const r=o?o.target.value:n.value;return a("update:modelValue",r),V(),Promise.resolve(r)},s=o=>t.resource?z(o):E(o);return e.onMounted(()=>{document.addEventListener("click",c),document.addEventListener(S,V)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",c),document.removeEventListener(S,V)}),e.watch(()=>t.modelValue,o=>{n.value=o}),{localValue:n,handle:d,initialValue:k,isEdit:i,isProcessing:h,input:b,previewValue:v,isInline:C,isPopup:m,classes:x,formClasses:y,stopClick:p,cancel:g,close:V,edit:f,focus:_,saveToApi:z,saveAndEmit:E,save:s}}const O={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},Y=[e.createElementVNode("path",{d:"M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"},null,-1)];function q(t,a){return e.openBlock(),e.createElementBlock("svg",O,Y)}var T={render:q};const G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},J=[e.createElementVNode("path",{d:"M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"},null,-1)];function Q(t,a){return e.openBlock(),e.createElementBlock("svg",G,J)}var j={render:Q};const W={class:"vinput-value"},X=["innerHTML"],Z={key:0,class:"vinput-label"},ee={class:"vinput-group"},oe={class:"vinput-input"},te=["type","placeholder"],re={class:"vinput-action"},ne=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),ie=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),le={key:0,class:"vinput-arrow"},P=e.defineComponent({__name:"Basic",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(t,{emit:a}){const l=t,{localValue:n,handle:d,initialValue:k,isEdit:i,isProcessing:h,input:b,previewValue:v,isInline:C,isPopup:m,classes:x,formClasses:y,stopClick:c,save:p,cancel:g,close:V,edit:f,focus:_,saveToApi:z,saveAndEmit:E}=B(l,a);return(s,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(x)]),onClick:o[4]||(o[4]=e.withModifiers((...r)=>e.unref(c)&&e.unref(c)(...r),["stop"]))},[e.withDirectives(e.createElementVNode("div",W,[e.renderSlot(s.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(v),onClick:o[0]||(o[0]=e.withModifiers((...r)=>e.unref(f)&&e.unref(f)(...r),["stop"]))},null,8,X)])],512),[[e.vShow,!e.unref(i)||e.unref(m)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(y)])},[e.renderSlot(s.$slots,"default",{},()=>[t.label?(e.openBlock(),e.createElementBlock("div",Z,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",ee,[e.createElementVNode("div",oe,[e.renderSlot(s.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("input",{class:"vinput-form-control",ref_key:"input",ref:b,"onUpdate:modelValue":o[1]||(o[1]=r=>e.isRef(n)?n.value=r:null),type:t.type,placeholder:t.placeholder,onKeyup:o[2]||(o[2]=e.withKeys((...r)=>e.unref(p)&&e.unref(p)(...r),["enter"]))},null,40,te),[[e.vModelDynamic,e.unref(n)]])])]),e.createElementVNode("div",re,[e.createVNode(M,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(p),"force-processing":e.unref(h)},{default:e.withCtx(()=>[e.createVNode(e.unref(T)),ne]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:o[3]||(o[3]=e.withModifiers((...r)=>e.unref(g)&&e.unref(g)(...r),["stop"]))},[e.createVNode(e.unref(j)),ie])])])]),e.unref(m)?(e.openBlock(),e.createElementBlock("div",le)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(i)]])],2))}}),ae={class:"vinput-value"},de=["innerHTML"],se={key:0,class:"vinput-label"},ce={class:"vinput-group"},me={class:"vinput-input"},pe=["placeholder"],fe={class:"vinput-action"},ue=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),ge=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),he={key:0,class:"vinput-arrow"},L=e.defineComponent({__name:"TextField",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(t,{emit:a}){const l=t,{localValue:n,handle:d,initialValue:k,isEdit:i,isProcessing:h,input:b,previewValue:v,isInline:C,isPopup:m,classes:x,formClasses:y,stopClick:c,save:p,cancel:g,close:V,edit:f,focus:_,saveToApi:z,saveAndEmit:E}=B(l,a);return(s,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(x)]),onClick:o[4]||(o[4]=e.withModifiers((...r)=>e.unref(c)&&e.unref(c)(...r),["stop"]))},[e.withDirectives(e.createElementVNode("div",ae,[e.renderSlot(s.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(v),onClick:o[0]||(o[0]=e.withModifiers((...r)=>e.unref(f)&&e.unref(f)(...r),["stop"]))},null,8,de)])],512),[[e.vShow,!e.unref(i)||e.unref(m)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(y)])},[e.renderSlot(s.$slots,"default",{},()=>[t.label?(e.openBlock(),e.createElementBlock("div",se,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",ce,[e.createElementVNode("div",me,[e.renderSlot(s.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("input",{class:"vinput-form-control",ref_key:"input",ref:b,"onUpdate:modelValue":o[1]||(o[1]=r=>e.isRef(n)?n.value=r:null),type:"text",placeholder:t.placeholder,onKeyup:o[2]||(o[2]=e.withKeys((...r)=>e.unref(p)&&e.unref(p)(...r),["enter"]))},null,40,pe),[[e.vModelText,e.unref(n)]])])]),e.createElementVNode("div",fe,[e.createVNode(M,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(p),"force-processing":e.unref(h)},{default:e.withCtx(()=>[e.createVNode(e.unref(T)),ue]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:o[3]||(o[3]=e.withModifiers((...r)=>e.unref(g)&&e.unref(g)(...r),["stop"]))},[e.createVNode(e.unref(j)),ge])])])]),e.unref(m)?(e.openBlock(),e.createElementBlock("div",he)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(i)]])],2))}}),be={class:"vinput-value"},we=["innerHTML"],ke={key:0,class:"vinput-label"},ve={class:"vinput-group"},xe={class:"vinput-input"},ye=["rows","placeholder"],Ve={class:"vinput-action"},Ee=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),_e=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),ze={key:0,class:"vinput-arrow"},D=e.defineComponent({__name:"Textarea",props:{modelValue:null,type:{default:"textarea"},rows:{default:3},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(t,{emit:a}){const l=t,{localValue:n,handle:d,initialValue:k,isEdit:i,isProcessing:h,input:b,previewValue:v,isInline:C,isPopup:m,classes:x,formClasses:y,stopClick:c,save:p,cancel:g,close:V,edit:f,focus:_,saveToApi:z,saveAndEmit:E}=B(l,a);return(s,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(x)]),onClick:o[3]||(o[3]=e.withModifiers((...r)=>e.unref(c)&&e.unref(c)(...r),["stop"]))},[e.withDirectives(e.createElementVNode("div",be,[e.renderSlot(s.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(v),onClick:o[0]||(o[0]=e.withModifiers((...r)=>e.unref(f)&&e.unref(f)(...r),["stop"]))},null,8,we)])],512),[[e.vShow,!e.unref(i)||e.unref(m)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(y)])},[e.renderSlot(s.$slots,"default",{},()=>[t.label?(e.openBlock(),e.createElementBlock("div",ke,e.toDisplayString(t.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",ve,[e.createElementVNode("div",xe,[e.renderSlot(s.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("textarea",{class:"vinput-form-control",ref_key:"input",ref:b,"onUpdate:modelValue":o[1]||(o[1]=r=>e.isRef(n)?n.value=r:null),rows:t.rows,placeholder:t.placeholder},null,8,ye),[[e.vModelText,e.unref(n)]])])]),e.createElementVNode("div",Ve,[e.createVNode(M,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(p),"force-processing":e.unref(h)},{default:e.withCtx(()=>[e.createVNode(e.unref(T)),Ee]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:o[2]||(o[2]=e.withModifiers((...r)=>e.unref(g)&&e.unref(g)(...r),["stop"]))},[e.createVNode(e.unref(j)),_e])])])]),e.unref(m)?(e.openBlock(),e.createElementBlock("div",ze)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(i)]])],2))}}),$e={class:"vinput-value"},Ce=["value","placeholder"],Ne=["placeholder","onKeypress"],Be={key:0,class:"vinput-arrow"},F=e.defineComponent({__name:"ExcelCol",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null,lineHeight:{default:15},verticalSpace:{default:10}},emits:["update:modelValue"],setup(t,{emit:a}){const l=t,{localValue:n,handle:d,initialValue:k,isEdit:i,isProcessing:h,input:b,previewValue:v,isInline:C,isPopup:m,classes:x,formClasses:y,stopClick:c,save:p,cancel:g,close:V,edit:f,focus:_,saveToApi:z,saveAndEmit:E}=B(l,a),s=e.computed(()=>n.value?n.value.split(/\r*\n/).length:1),o=e.computed(()=>{const w=l.verticalSpace+l.lineHeight*s.value;return{border:"1px solid red !important",height:`${w}px`}}),r=w=>{if(w&&!w.shiftKey)return w.preventDefault(),w.stopPropagation(),p(w)};return(w,$)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(x)]),onClick:$[2]||($[2]=e.withModifiers((...N)=>e.unref(c)&&e.unref(c)(...N),["stop"]))},[e.withDirectives(e.createElementVNode("div",$e,[e.renderSlot(w.$slots,"default",{},()=>[e.createElementVNode("textarea",{class:"vinput-excelcol-value",value:e.unref(v),readonly:"",placeholder:t.placeholder,style:e.normalizeStyle(e.unref(o)),onDblclick:$[0]||($[0]=(...N)=>e.unref(f)&&e.unref(f)(...N))},null,44,Ce)])],512),[[e.vShow,!e.unref(i)||e.unref(m)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(y)])},[e.renderSlot(w.$slots,"default",{},()=>[e.withDirectives(e.createElementVNode("textarea",{class:"vinput-excelcol-input",ref_key:"input",ref:b,"onUpdate:modelValue":$[1]||($[1]=N=>e.isRef(n)?n.value=N:null),placeholder:t.placeholder,style:e.normalizeStyle(e.unref(o)),onKeypress:e.withKeys(r,["enter"])},null,44,Ne),[[e.vModelText,e.unref(n)]])]),e.unref(m)?(e.openBlock(),e.createElementBlock("div",Be)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(i)]])],2))}}),A=e.defineComponent({__name:"VueInlineEditable",props:{type:null},setup(t){const a=t,l=n=>{let d=P;switch(n){case"text":d=L;break;case"textarea":d=D;break;case"excelcol":d=F;break}return d};return(n,d)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l(t.type)),e.normalizeProps(e.guardReactiveProps(a)),null,16))}});var Le=(()=>`.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::-webkit-file-upload-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.2rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.3rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.vinput{position:relative;display:inline-flex;flex-direction:row;align-items:flex-start;justify-content:flex-start}.vinput,.vinput *,.vinput:before,.vinput:after,.vinput *:before,.vinput *:after{box-sizing:border-box}.vinput-value{display:inline-flex}.vinput-value a{display:inline-flex;min-width:1rem;min-height:1rem;color:#428bca;line-height:1.2;text-decoration:none;border-bottom:1px dashed #428bca}.vinput-value a:hover{text-decoration:none}.vinput-group{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.vinput-input{position:relative}.vinput-action{justify-content:flex-start;display:inline-flex;margin-left:.35rem}.vinput-action svg{width:10px;height:auto;fill:currentColor}.vinput-action .vinput-btn+.vinput-btn{margin-left:.35rem}.vinput-action .vinput-btn-primary svg{width:12px}.vinput-clear{position:absolute;width:25px;height:25px;top:50%;right:1px;transform:translateY(-50%);color:inherit;text-decoration:none;opacity:.7;font-size:1em;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center}.vinput-clear:hover{text-decoration:none;opacity:1}.vinput-form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-family:inherit;font-size:1rem;font-weight:400;line-height:1.2;color:#333;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.vinput-form-control{transition:none}}.vinput-form-control::-ms-expand{background-color:transparent;border:0}.vinput-form-control::placeholder{color:#6c757d;opacity:1}.vinput-form-control:disabled,.vinput-form-control[readonly]{background-color:#e9ecef;opacity:1}textarea.vinput-form-control{height:auto}.vinput-text .vinput-form-control{max-width:160px}.vinput-excelcol-input{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid #dee2e6;white-space:nowrap}.vinput-excelcol-input:focus{outline:none}.vinput-excelcol-value{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid transparent}.vinput-excelcol-value:focus{border-color:#dee2e6;outline:none}.vinput-form-inline{display:inline-flex;flex-direction:row;align-items:center}.vinput-form-inline .vinput-label{margin-right:.5rem}.vinput-form-inline .vinput-label:after{content:":"}.vinput-form-popup{position:absolute;z-index:10;bottom:calc(100% + 20px);top:auto;left:50%;right:auto;transform:translate(-50%);border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;box-shadow:0 5px 10px rgba(0,0,0,.2);display:flex;flex-direction:column}.vinput-form-popup .vinput-label{padding:.5rem 1rem;margin:0;font-size:inherit;font-weight:400;background-color:#f7f7f7;border-bottom:1px solid #dee2e6}.vinput-form-popup .vinput-group{padding:.5rem 1rem}.vinput-form-popup .vinput-form-control{width:auto}.vinput-arrow{display:block;position:absolute;bottom:-11px;left:50%;width:0;height:0;margin-left:-11px;border-color:transparent;border-style:solid;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.vinput-arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:10px;bottom:1px;margin-left:-10px;border-top-color:#fff;border-bottom-width:0;content:" "}.vinput-label{font-weight:inherit;color:#333;text-align:left}.vinput-textarea .vinput-group{flex-direction:column;align-items:flex-end}.vinput-textarea .vinput-action{margin-top:.35rem;margin-left:0}.vinput-vertical .vinput-group{flex-direction:column}.vinput-vertical .vinput-input{margin-bottom:.35rem}.vinput-vertical .vinput-action{width:100%}.vinput-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.vinput-btn{display:inline-flex;align-items:center;justify-content:center;padding:.375rem .6rem;height:calc(1.5em + .75rem + 2px);color:inherit;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid #dee2e6;border-radius:.25rem;text-decoration:none;font-size:14px;line-height:1;cursor:pointer}.vinput-btn:hover,.vinput-btn:active{text-decoration:none}.vinput-btn:focus,.vinput-btn.focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.vinput-btn.disabled,.vinput-btn:disabled{opacity:.65}.vinput-btn-primary{background-color:#428bca;color:color-yiq(#428bca)}
`)();const Me={install(t,a={}){t.component("VueInlineEditable",A);const l={handle:a.handle||null};t.provide("$inlineEditable",l)}};u.BasicField=P,u.ExcelColField=F,u.TextField=L,u.TextareaField=D,u.VueInlineEditable=A,u.default=Me,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
