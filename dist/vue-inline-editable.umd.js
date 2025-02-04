(function(h,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(h=typeof globalThis!="undefined"?globalThis:h||self,e(h.VueGrid={},h.Vue))})(this,function(h,e){"use strict";var Te=(()=>`@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border,.promise-button-spinner{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion: reduce){.spinner-border,.promise-button-spinner,.spinner-grow{animation-duration:1.5s}}.promise-button{display:inline-flex;align-items:center;justify-content:center}.promise-button-spinner{width:1em;height:1em;border-width:.15em;margin-left:.5em}.promise-button--notext .promise-button-spinner{margin-left:0}.promise-button-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
`)();const I=["onClick","disabled"],K={key:0},U=e.createElementVNode("span",{class:"promise-button-text"},null,-1),O={class:"promise-button-spinner",role:"status"},R=[e.createElementVNode("span",{class:"promise-button-visually-hidden"},"Loading...",-1)],S=e.defineComponent({__name:"PromiseButton",props:{promise:null,autoHide:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},forceProcessing:{type:Boolean,default:!1}},setup(o,{expose:d}){const s=o,n=e.ref(!1),i=e.computed(()=>n.value||s.forceProcessing?!s.autoHide:!0),c=()=>{n.value||(n.value=!0,s.promise().catch(l=>{throw n.value=!1,l}).finally(()=>{n.value=!1}))};return d({handle:c,isShowText:i}),(l,m)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["promise-button",{"promise-button--notext":!e.unref(i)}]),type:"button",onClick:e.withModifiers(c,["stop"]),disabled:o.disabled},[e.unref(i)?(e.openBlock(),e.createElementBlock("span",K,[e.renderSlot(l.$slots,"default",{},()=>[U])])):e.createCommentVNode("",!0),e.renderSlot(l.$slots,"spinner",{},()=>[e.withDirectives(e.createElementVNode("span",O,R,512),[[e.vShow,n.value||o.forceProcessing]])])],10,I))}}),T="open_inline_editable";function M(o,d){const s=e.inject("$inlineEditable",{handle:null}),n=e.ref(o.modelValue),i=o.handleFn?o.handleFn:s.handle,c=o.modelValue,l=e.ref(!1),m=e.ref(!1),v=e.ref(null),x=e.computed(()=>o.modelValue),V=e.computed(()=>o.placement==="inline"),_=e.computed(()=>o.placement==="popup"),b=e.computed(()=>[`vinput-${o.type}`]),y=e.computed(()=>[`vinput-form-${o.placement}`]),w=()=>{u()},f=()=>null,u=()=>{g(),n.value=c},g=()=>{l.value=!1},z=()=>{document.dispatchEvent(new Event(T)),e.nextTick(()=>{l.value=!0,setTimeout(()=>{p()},200)})},p=()=>{const r=v.value;r&&r.focus()},C=r=>{const t=r?r.target.value:n.value;return m.value=!0,i(t,o.resource,o.pk,o.field).then(()=>{$(r)}).finally(()=>{m.value=!1})},$=r=>{const t=r?r.target.value:n.value;return d("update:modelValue",t),g(),Promise.resolve(t)},E=r=>o.resource?C(r):$(r);return e.onMounted(()=>{document.addEventListener("click",w),document.addEventListener(T,g)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",w),document.removeEventListener(T,g)}),e.watch(()=>o.modelValue,r=>{n.value=r}),{localValue:n,handle:i,initialValue:c,isEdit:l,isProcessing:m,input:v,previewValue:x,isInline:V,isPopup:_,classes:b,formClasses:y,stopClick:f,cancel:u,close:g,edit:z,focus:p,saveToApi:C,saveAndEmit:$,save:E}}const Y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},q=[e.createElementVNode("path",{d:"M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z"},null,-1)];function G(o,d){return e.openBlock(),e.createElementBlock("svg",Y,q)}var j={render:G};const J={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},Q=[e.createElementVNode("path",{d:"M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"},null,-1)];function W(o,d){return e.openBlock(),e.createElementBlock("svg",J,Q)}var P={render:W};const X={class:"vinput-value"},Z=["innerHTML"],ee={key:0,class:"vinput-label"},oe={class:"vinput-group"},te={class:"vinput-input"},re=["type","placeholder"],ne={class:"vinput-action"},ie=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),le=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),ae={key:0,class:"vinput-arrow"},L=e.defineComponent({__name:"Basic",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(o,{emit:d}){const s=o,{localValue:n,handle:i,initialValue:c,isEdit:l,isProcessing:m,input:v,previewValue:x,isInline:V,isPopup:_,classes:b,formClasses:y,stopClick:w,save:f,cancel:u,close:g,edit:z,focus:p,saveToApi:C,saveAndEmit:$}=M(s,d);return(E,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(b)]),onClick:r[4]||(r[4]=e.withModifiers((...t)=>e.unref(w)&&e.unref(w)(...t),["stop"]))},[e.withDirectives(e.createElementVNode("div",X,[e.renderSlot(E.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(x),onClick:r[0]||(r[0]=e.withModifiers((...t)=>e.unref(z)&&e.unref(z)(...t),["stop"]))},null,8,Z)])],512),[[e.vShow,!e.unref(l)||e.unref(_)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(y)])},[e.renderSlot(E.$slots,"default",{},()=>[o.label?(e.openBlock(),e.createElementBlock("div",ee,e.toDisplayString(o.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",oe,[e.createElementVNode("div",te,[e.renderSlot(E.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("input",{class:"vinput-form-control",ref_key:"input",ref:v,"onUpdate:modelValue":r[1]||(r[1]=t=>e.isRef(n)?n.value=t:null),type:o.type,placeholder:o.placeholder,onKeyup:r[2]||(r[2]=e.withKeys((...t)=>e.unref(f)&&e.unref(f)(...t),["enter"]))},null,40,re),[[e.vModelDynamic,e.unref(n)]])])]),e.createElementVNode("div",ne,[e.createVNode(S,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(f),"force-processing":e.unref(m)},{default:e.withCtx(()=>[e.createVNode(e.unref(j)),ie]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:r[3]||(r[3]=e.withModifiers((...t)=>e.unref(u)&&e.unref(u)(...t),["stop"]))},[e.createVNode(e.unref(P)),le])])])]),e.unref(_)?(e.openBlock(),e.createElementBlock("div",ae)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(l)]])],2))}}),de={class:"vinput-value"},se=["innerHTML"],ce={key:0,class:"vinput-label"},me={class:"vinput-group"},pe={class:"vinput-input"},fe=["placeholder"],ue={class:"vinput-action"},ge=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),he=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),be={key:0,class:"vinput-arrow"},D=e.defineComponent({__name:"TextField",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(o,{expose:d,emit:s}){const n=o,{localValue:i,handle:c,initialValue:l,isEdit:m,isProcessing:v,input:x,previewValue:V,isInline:_,isPopup:b,classes:y,formClasses:w,stopClick:f,save:u,cancel:g,close:z,edit:p,focus:C,saveToApi:$,saveAndEmit:E}=M(n,s);return d({edit:p}),(r,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(y)]),onClick:t[4]||(t[4]=e.withModifiers((...a)=>e.unref(f)&&e.unref(f)(...a),["stop"]))},[e.withDirectives(e.createElementVNode("div",de,[e.renderSlot(r.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(V),onClick:t[0]||(t[0]=e.withModifiers((...a)=>e.unref(p)&&e.unref(p)(...a),["stop"]))},null,8,se)])],512),[[e.vShow,!e.unref(m)||e.unref(b)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(w)])},[e.renderSlot(r.$slots,"default",{},()=>[o.label?(e.openBlock(),e.createElementBlock("div",ce,e.toDisplayString(o.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",me,[e.createElementVNode("div",pe,[e.renderSlot(r.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("input",{class:"vinput-form-control",ref_key:"input",ref:x,"onUpdate:modelValue":t[1]||(t[1]=a=>e.isRef(i)?i.value=a:null),type:"text",placeholder:o.placeholder,onKeyup:t[2]||(t[2]=e.withKeys((...a)=>e.unref(u)&&e.unref(u)(...a),["enter"]))},null,40,fe),[[e.vModelText,e.unref(i)]])])]),e.createElementVNode("div",ue,[e.createVNode(S,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(u),"force-processing":e.unref(v)},{default:e.withCtx(()=>[e.createVNode(e.unref(j)),ge]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:t[3]||(t[3]=e.withModifiers((...a)=>e.unref(g)&&e.unref(g)(...a),["stop"]))},[e.createVNode(e.unref(P)),he])])])]),e.unref(b)?(e.openBlock(),e.createElementBlock("div",be)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(m)]])],2))}}),we={class:"vinput-value"},ke=["innerHTML"],ve={key:0,class:"vinput-label"},xe={class:"vinput-group"},ye={class:"vinput-input"},Ve=["rows","placeholder"],Ee={class:"vinput-action"},_e=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Save",-1),ze=e.createElementVNode("span",{class:"vinput-visually-hidden"},"Cancel",-1),$e={key:0,class:"vinput-arrow"},F=e.defineComponent({__name:"Textarea",props:{modelValue:null,type:{default:"textarea"},rows:{default:3},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null},emits:["update:modelValue"],setup(o,{expose:d,emit:s}){const n=o,{localValue:i,handle:c,initialValue:l,isEdit:m,isProcessing:v,input:x,previewValue:V,isInline:_,isPopup:b,classes:y,formClasses:w,stopClick:f,save:u,cancel:g,close:z,edit:p,focus:C,saveToApi:$,saveAndEmit:E}=M(n,s);return d({edit:p}),(r,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(y)]),onClick:t[3]||(t[3]=e.withModifiers((...a)=>e.unref(f)&&e.unref(f)(...a),["stop"]))},[e.withDirectives(e.createElementVNode("div",we,[e.renderSlot(r.$slots,"default",{},()=>[e.createElementVNode("a",{href:"javascript:;",innerHTML:e.unref(V),onClick:t[0]||(t[0]=e.withModifiers((...a)=>e.unref(p)&&e.unref(p)(...a),["stop"]))},null,8,ke)])],512),[[e.vShow,!e.unref(m)||e.unref(b)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(w)])},[e.renderSlot(r.$slots,"default",{},()=>[o.label?(e.openBlock(),e.createElementBlock("div",ve,e.toDisplayString(o.label),1)):e.createCommentVNode("",!0),e.createElementVNode("div",xe,[e.createElementVNode("div",ye,[e.renderSlot(r.$slots,"input",{},()=>[e.withDirectives(e.createElementVNode("textarea",{class:"vinput-form-control",ref_key:"input",ref:x,"onUpdate:modelValue":t[1]||(t[1]=a=>e.isRef(i)?i.value=a:null),rows:o.rows,placeholder:o.placeholder},null,8,Ve),[[e.vModelText,e.unref(i)]])])]),e.createElementVNode("div",Ee,[e.createVNode(S,{class:"vinput-btn vinput-btn-primary",href:"javascript:;","auto-hide":!0,promise:e.unref(u),"force-processing":e.unref(v)},{default:e.withCtx(()=>[e.createVNode(e.unref(j)),_e]),_:1},8,["promise","force-processing"]),e.createElementVNode("a",{class:"vinput-btn",href:"javascript:;",onClick:t[2]||(t[2]=e.withModifiers((...a)=>e.unref(g)&&e.unref(g)(...a),["stop"]))},[e.createVNode(e.unref(P)),ze])])])]),e.unref(b)?(e.openBlock(),e.createElementBlock("div",$e)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(m)]])],2))}}),Ce={class:"vinput-value"},Ne=["value","placeholder"],Be=["placeholder","onKeypress"],Me={key:0,class:"vinput-arrow"},A=e.defineComponent({__name:"ExcelCol",props:{modelValue:null,type:{default:"text"},placeholder:{default:""},emptyValue:{default:""},placement:{default:"inline"},label:null,resource:null,field:null,pk:null,handleFn:null,lineHeight:{default:15},verticalSpace:{default:10}},emits:["update:modelValue"],setup(o,{expose:d,emit:s}){const n=o,{localValue:i,handle:c,initialValue:l,isEdit:m,isProcessing:v,input:x,previewValue:V,isInline:_,isPopup:b,classes:y,formClasses:w,stopClick:f,save:u,cancel:g,close:z,edit:p,focus:C,saveToApi:$,saveAndEmit:E}=M(n,s),r=e.computed(()=>i.value?i.value.split(/\r*\n/).length:1),t=e.computed(()=>{const k=n.verticalSpace+n.lineHeight*r.value;return{border:"1px solid red !important",height:`${k}px`}}),a=k=>{if(k&&!k.shiftKey)return k.preventDefault(),k.stopPropagation(),u(k)};return d({edit:p}),(k,N)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vinput",e.unref(y)]),onClick:N[2]||(N[2]=e.withModifiers((...B)=>e.unref(f)&&e.unref(f)(...B),["stop"]))},[e.withDirectives(e.createElementVNode("div",Ce,[e.renderSlot(k.$slots,"default",{},()=>[e.createElementVNode("textarea",{class:"vinput-excelcol-value",value:e.unref(V),readonly:"",placeholder:o.placeholder,style:e.normalizeStyle(e.unref(t)),onDblclick:N[0]||(N[0]=(...B)=>e.unref(p)&&e.unref(p)(...B))},null,44,Ne)])],512),[[e.vShow,!e.unref(m)||e.unref(b)]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vinput-form",e.unref(w)])},[e.renderSlot(k.$slots,"default",{},()=>[e.withDirectives(e.createElementVNode("textarea",{class:"vinput-excelcol-input",ref_key:"input",ref:x,"onUpdate:modelValue":N[1]||(N[1]=B=>e.isRef(i)?i.value=B:null),placeholder:o.placeholder,style:e.normalizeStyle(e.unref(t)),onKeypress:e.withKeys(a,["enter"])},null,44,Be),[[e.vModelText,e.unref(i)]])]),e.unref(b)?(e.openBlock(),e.createElementBlock("div",Me)):e.createCommentVNode("",!0)],2),[[e.vShow,e.unref(m)]])],2))}}),H=e.defineComponent({__name:"VueInlineEditable",props:{type:null},setup(o,{expose:d}){const s=o,n=e.ref(null),i=c=>{let l=L;switch(c){case"text":l=D;break;case"textarea":l=F;break;case"excelcol":l=A;break}return l};return d({edit:()=>{var c,l;(l=(c=n==null?void 0:n.value)==null?void 0:c.edit)!=null&&l.call(c)&&n.value.edit()}}),(c,l)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(i(o.type)),e.mergeProps({ref_key:"component",ref:n},s),null,16))}});var De=(()=>`.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::-webkit-file-upload-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.2rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.3rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.vinput{position:relative;display:inline-flex;flex-direction:row;align-items:flex-start;justify-content:flex-start}.vinput,.vinput *,.vinput:before,.vinput:after,.vinput *:before,.vinput *:after{box-sizing:border-box}.vinput-value{display:inline-flex}.vinput-value a{display:inline-flex;min-width:1rem;min-height:1rem;color:#428bca;line-height:1.2;text-decoration:none;border-bottom:1px dashed #428bca}.vinput-value a:hover{text-decoration:none}.vinput-group{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.vinput-input{position:relative}.vinput-action{justify-content:flex-start;display:inline-flex;margin-left:.35rem}.vinput-action svg{width:10px;height:auto;fill:currentColor}.vinput-action .vinput-btn+.vinput-btn{margin-left:.35rem}.vinput-action .vinput-btn-primary svg{width:12px}.vinput-clear{position:absolute;width:25px;height:25px;top:50%;right:1px;transform:translateY(-50%);color:inherit;text-decoration:none;opacity:.7;font-size:1em;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center}.vinput-clear:hover{text-decoration:none;opacity:1}.vinput-form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-family:inherit;font-size:1rem;font-weight:400;line-height:1.2;color:#333;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.vinput-form-control{transition:none}}.vinput-form-control::-ms-expand{background-color:transparent;border:0}.vinput-form-control::placeholder{color:#6c757d;opacity:1}.vinput-form-control:disabled,.vinput-form-control[readonly]{background-color:#e9ecef;opacity:1}textarea.vinput-form-control{height:auto}.vinput-text .vinput-form-control{max-width:160px}.vinput-excelcol-input{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid #dee2e6;white-space:nowrap}.vinput-excelcol-input:focus{outline:none}.vinput-excelcol-value{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid transparent}.vinput-excelcol-value:focus{border-color:#dee2e6;outline:none}.vinput-form-inline{display:inline-flex;flex-direction:row;align-items:center}.vinput-form-inline .vinput-label{margin-right:.5rem}.vinput-form-inline .vinput-label:after{content:":"}.vinput-form-popup{position:absolute;z-index:10;bottom:calc(100% + 20px);top:auto;left:50%;right:auto;transform:translate(-50%);border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;box-shadow:0 5px 10px rgba(0,0,0,.2);display:flex;flex-direction:column}.vinput-form-popup .vinput-label{padding:.5rem 1rem;margin:0;font-size:inherit;font-weight:400;background-color:#f7f7f7;border-bottom:1px solid #dee2e6}.vinput-form-popup .vinput-group{padding:.5rem 1rem}.vinput-form-popup .vinput-form-control{width:auto}.vinput-arrow{display:block;position:absolute;bottom:-11px;left:50%;width:0;height:0;margin-left:-11px;border-color:transparent;border-style:solid;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.vinput-arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:10px;bottom:1px;margin-left:-10px;border-top-color:#fff;border-bottom-width:0;content:" "}.vinput-label{font-weight:inherit;color:#333;text-align:left}.vinput-textarea .vinput-group{flex-direction:column;align-items:flex-end}.vinput-textarea .vinput-action{margin-top:.35rem;margin-left:0}.vinput-vertical .vinput-group{flex-direction:column}.vinput-vertical .vinput-input{margin-bottom:.35rem}.vinput-vertical .vinput-action{width:100%}.vinput-btn{display:inline-flex;align-items:center;justify-content:center;padding:.375rem .6rem;height:calc(1.5em + .75rem + 2px);color:inherit;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid #dee2e6;border-radius:.25rem;text-decoration:none;font-size:14px;line-height:1;cursor:pointer}.vinput-btn:hover,.vinput-btn:active{text-decoration:none}.vinput-btn:focus,.vinput-btn.focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.vinput-btn.disabled,.vinput-btn:disabled{opacity:.65}.vinput-btn-primary{background-color:#428bca;color:color-yiq(#428bca)}
`)();const Se={install(o,d={}){o.component("VueInlineEditable",H);const s={handle:d.handle||null};o.provide("$inlineEditable",s)}};h.BasicField=L,h.ExcelColField=A,h.TextField=D,h.TextareaField=F,h.VueInlineEditable=H,h.default=Se,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
