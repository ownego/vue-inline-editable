import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, withModifiers, renderSlot, createCommentVNode, withDirectives, createElementVNode, vShow, inject, onMounted, onBeforeUnmount, watch, nextTick, toDisplayString, isRef, withKeys, vModelDynamic, createVNode, withCtx, vModelText, normalizeStyle, createBlock, resolveDynamicComponent, mergeProps } from "vue";
var PromiseButton_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border,.promise-button-spinner{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion: reduce){.spinner-border,.promise-button-spinner,.spinner-grow{animation-duration:1.5s}}.promise-button{display:inline-flex;align-items:center;justify-content:center}.promise-button-spinner{width:1em;height:1em;border-width:.15em;margin-left:.5em}.promise-button--notext .promise-button-spinner{margin-left:0}.promise-button-visually-hidden{width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.promise-button-visually-hidden:not(caption){position:absolute!important}\n")();
const _hoisted_1$6 = ["onClick", "disabled"];
const _hoisted_2$6 = { key: 0 };
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("span", { class: "promise-button-text" }, null, -1);
const _hoisted_4$4 = {
  class: "promise-button-spinner",
  role: "status"
};
const _hoisted_5$3 = /* @__PURE__ */ createElementVNode("span", { class: "promise-button-visually-hidden" }, "Loading...", -1);
const _hoisted_6$3 = [
  _hoisted_5$3
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PromiseButton",
  props: {
    promise: null,
    autoHide: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    forceProcessing: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const isProcessing = ref(false);
    const isShowText = computed(() => {
      if (isProcessing.value || props.forceProcessing) {
        return !props.autoHide;
      }
      return true;
    });
    const handle = () => {
      if (!isProcessing.value) {
        isProcessing.value = true;
        props.promise().catch((e) => {
          isProcessing.value = false;
          throw e;
        }).finally(() => {
          isProcessing.value = false;
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["promise-button", { "promise-button--notext": !unref(isShowText) }]),
        type: "button",
        onClick: withModifiers(handle, ["stop"]),
        disabled: __props.disabled
      }, [
        unref(isShowText) ? (openBlock(), createElementBlock("span", _hoisted_2$6, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_3$6
          ])
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "spinner", {}, () => [
          withDirectives(createElementVNode("span", _hoisted_4$4, _hoisted_6$3, 512), [
            [vShow, isProcessing.value || __props.forceProcessing]
          ])
        ])
      ], 10, _hoisted_1$6);
    };
  }
});
const POPUP_EVENT_NAME = "open_inline_editable";
function useInput(props, emits) {
  const inlineEditableOptions = inject("$inlineEditable", {
    handle: null
  });
  const localValue = ref(props.modelValue);
  const handle = props.handleFn ? props.handleFn : inlineEditableOptions.handle;
  const initialValue = props.modelValue;
  const isEdit = ref(false);
  const isProcessing = ref(false);
  const input = ref(null);
  const previewValue = computed(() => props.modelValue);
  const isInline = computed(() => props.placement === "inline");
  const isPopup = computed(() => props.placement === "popup");
  const classes = computed(() => {
    return [
      `vinput-${props.type}`
    ];
  });
  const formClasses = computed(() => {
    return [
      `vinput-form-${props.placement}`
    ];
  });
  const handleBodyClick = () => {
    cancel();
  };
  const stopClick = () => null;
  const cancel = () => {
    close();
    localValue.value = initialValue;
  };
  const close = () => {
    isEdit.value = false;
  };
  const edit = () => {
    document.dispatchEvent(new Event(POPUP_EVENT_NAME));
    nextTick(() => {
      isEdit.value = true;
      setTimeout(() => {
        focus();
      }, 200);
    });
  };
  const focus = () => {
    const inputEl = input.value;
    if (inputEl) {
      inputEl.focus();
    }
  };
  const saveToApi = (e) => {
    const value = e ? e.target.value : localValue.value;
    isProcessing.value = true;
    return handle(value, props.resource, props.pk, props.field).then(() => {
      saveAndEmit(e);
    }).finally(() => {
      isProcessing.value = false;
    });
  };
  const saveAndEmit = (e) => {
    const value = e ? e.target.value : localValue.value;
    emits(`update:modelValue`, value);
    close();
    return Promise.resolve(value);
  };
  const save = (e) => {
    if (props.resource) {
      return saveToApi(e);
    } else {
      return saveAndEmit(e);
    }
  };
  onMounted(() => {
    document.addEventListener("click", handleBodyClick);
    document.addEventListener(POPUP_EVENT_NAME, close);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", handleBodyClick);
    document.removeEventListener(POPUP_EVENT_NAME, close);
  });
  watch(() => props.modelValue, (newVal) => {
    localValue.value = newVal;
  });
  return {
    localValue,
    handle,
    initialValue,
    isEdit,
    isProcessing,
    input,
    previewValue,
    isInline,
    isPopup,
    classes,
    formClasses,
    stopClick,
    cancel,
    close,
    edit,
    focus,
    saveToApi,
    saveAndEmit,
    save
  };
}
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  style: { "enable-background": "new 0 0 512 512" },
  "xml:space": "preserve"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var Tick = { render: render$1 };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.001 512.001",
  style: { "enable-background": "new 0 0 512.001 512.001" },
  "xml:space": "preserve"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var Close = { render };
const _hoisted_1$3 = { class: "vinput-value" };
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$3 = {
  key: 0,
  class: "vinput-label"
};
const _hoisted_4$3 = { class: "vinput-group" };
const _hoisted_5$2 = { class: "vinput-input" };
const _hoisted_6$2 = ["type", "placeholder"];
const _hoisted_7$2 = { class: "vinput-action" };
const _hoisted_8$2 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Save", -1);
const _hoisted_9$2 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Cancel", -1);
const _hoisted_10$2 = {
  key: 0,
  class: "vinput-arrow"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  props: {
    modelValue: null,
    type: { default: "text" },
    placeholder: { default: "" },
    emptyValue: { default: "" },
    placement: { default: "inline" },
    label: null,
    resource: null,
    field: null,
    pk: null,
    handleFn: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const {
      localValue,
      handle,
      initialValue,
      isEdit,
      isProcessing,
      input,
      previewValue,
      isInline,
      isPopup,
      classes,
      formClasses,
      stopClick,
      save,
      cancel,
      close,
      edit,
      focus,
      saveToApi,
      saveAndEmit
    } = useInput(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vinput", unref(classes)]),
        onClick: _cache[4] || (_cache[4] = withModifiers((...args) => unref(stopClick) && unref(stopClick)(...args), ["stop"]))
      }, [
        withDirectives(createElementVNode("div", _hoisted_1$3, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("a", {
              href: "javascript:;",
              innerHTML: unref(previewValue),
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(edit) && unref(edit)(...args), ["stop"]))
            }, null, 8, _hoisted_2$3)
          ])
        ], 512), [
          [vShow, !unref(isEdit) || unref(isPopup)]
        ]),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["vinput-form", unref(formClasses)])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            __props.label ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_4$3, [
              createElementVNode("div", _hoisted_5$2, [
                renderSlot(_ctx.$slots, "input", {}, () => [
                  withDirectives(createElementVNode("input", {
                    class: "vinput-form-control",
                    ref_key: "input",
                    ref: input,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localValue) ? localValue.value = $event : null),
                    type: __props.type,
                    placeholder: __props.placeholder,
                    onKeyup: _cache[2] || (_cache[2] = withKeys((...args) => unref(save) && unref(save)(...args), ["enter"]))
                  }, null, 40, _hoisted_6$2), [
                    [vModelDynamic, unref(localValue)]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_7$2, [
                createVNode(_sfc_main$5, {
                  class: "vinput-btn vinput-btn-primary",
                  href: "javascript:;",
                  "auto-hide": true,
                  promise: unref(save),
                  "force-processing": unref(isProcessing)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Tick)),
                    _hoisted_8$2
                  ]),
                  _: 1
                }, 8, ["promise", "force-processing"]),
                createElementVNode("a", {
                  class: "vinput-btn",
                  href: "javascript:;",
                  onClick: _cache[3] || (_cache[3] = withModifiers((...args) => unref(cancel) && unref(cancel)(...args), ["stop"]))
                }, [
                  createVNode(unref(Close)),
                  _hoisted_9$2
                ])
              ])
            ])
          ]),
          unref(isPopup) ? (openBlock(), createElementBlock("div", _hoisted_10$2)) : createCommentVNode("", true)
        ], 2), [
          [vShow, unref(isEdit)]
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "vinput-value" };
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$2 = {
  key: 0,
  class: "vinput-label"
};
const _hoisted_4$2 = { class: "vinput-group" };
const _hoisted_5$1 = { class: "vinput-input" };
const _hoisted_6$1 = ["placeholder"];
const _hoisted_7$1 = { class: "vinput-action" };
const _hoisted_8$1 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Save", -1);
const _hoisted_9$1 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Cancel", -1);
const _hoisted_10$1 = {
  key: 0,
  class: "vinput-arrow"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TextField",
  props: {
    modelValue: null,
    type: { default: "text" },
    placeholder: { default: "" },
    emptyValue: { default: "" },
    placement: { default: "inline" },
    label: null,
    resource: null,
    field: null,
    pk: null,
    handleFn: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const {
      localValue,
      handle,
      initialValue,
      isEdit,
      isProcessing,
      input,
      previewValue,
      isInline,
      isPopup,
      classes,
      formClasses,
      stopClick,
      save,
      cancel,
      close,
      edit,
      focus,
      saveToApi,
      saveAndEmit
    } = useInput(props, emits);
    expose({
      edit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vinput", unref(classes)]),
        onClick: _cache[4] || (_cache[4] = withModifiers((...args) => unref(stopClick) && unref(stopClick)(...args), ["stop"]))
      }, [
        withDirectives(createElementVNode("div", _hoisted_1$2, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("a", {
              href: "javascript:;",
              innerHTML: unref(previewValue),
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(edit) && unref(edit)(...args), ["stop"]))
            }, null, 8, _hoisted_2$2)
          ])
        ], 512), [
          [vShow, !unref(isEdit) || unref(isPopup)]
        ]),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["vinput-form", unref(formClasses)])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            __props.label ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_4$2, [
              createElementVNode("div", _hoisted_5$1, [
                renderSlot(_ctx.$slots, "input", {}, () => [
                  withDirectives(createElementVNode("input", {
                    class: "vinput-form-control",
                    ref_key: "input",
                    ref: input,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localValue) ? localValue.value = $event : null),
                    type: "text",
                    placeholder: __props.placeholder,
                    onKeyup: _cache[2] || (_cache[2] = withKeys((...args) => unref(save) && unref(save)(...args), ["enter"]))
                  }, null, 40, _hoisted_6$1), [
                    [vModelText, unref(localValue)]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_7$1, [
                createVNode(_sfc_main$5, {
                  class: "vinput-btn vinput-btn-primary",
                  href: "javascript:;",
                  "auto-hide": true,
                  promise: unref(save),
                  "force-processing": unref(isProcessing)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Tick)),
                    _hoisted_8$1
                  ]),
                  _: 1
                }, 8, ["promise", "force-processing"]),
                createElementVNode("a", {
                  class: "vinput-btn",
                  href: "javascript:;",
                  onClick: _cache[3] || (_cache[3] = withModifiers((...args) => unref(cancel) && unref(cancel)(...args), ["stop"]))
                }, [
                  createVNode(unref(Close)),
                  _hoisted_9$1
                ])
              ])
            ])
          ]),
          unref(isPopup) ? (openBlock(), createElementBlock("div", _hoisted_10$1)) : createCommentVNode("", true)
        ], 2), [
          [vShow, unref(isEdit)]
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "vinput-value" };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = {
  key: 0,
  class: "vinput-label"
};
const _hoisted_4$1 = { class: "vinput-group" };
const _hoisted_5 = { class: "vinput-input" };
const _hoisted_6 = ["rows", "placeholder"];
const _hoisted_7 = { class: "vinput-action" };
const _hoisted_8 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Save", -1);
const _hoisted_9 = /* @__PURE__ */ createElementVNode("span", { class: "vinput-visually-hidden" }, "Cancel", -1);
const _hoisted_10 = {
  key: 0,
  class: "vinput-arrow"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  props: {
    modelValue: null,
    type: { default: "textarea" },
    rows: { default: 3 },
    placeholder: { default: "" },
    emptyValue: { default: "" },
    placement: { default: "inline" },
    label: null,
    resource: null,
    field: null,
    pk: null,
    handleFn: null
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const {
      localValue,
      handle,
      initialValue,
      isEdit,
      isProcessing,
      input,
      previewValue,
      isInline,
      isPopup,
      classes,
      formClasses,
      stopClick,
      save,
      cancel,
      close,
      edit,
      focus,
      saveToApi,
      saveAndEmit
    } = useInput(props, emits);
    expose({
      edit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vinput", unref(classes)]),
        onClick: _cache[3] || (_cache[3] = withModifiers((...args) => unref(stopClick) && unref(stopClick)(...args), ["stop"]))
      }, [
        withDirectives(createElementVNode("div", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("a", {
              href: "javascript:;",
              innerHTML: unref(previewValue),
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => unref(edit) && unref(edit)(...args), ["stop"]))
            }, null, 8, _hoisted_2$1)
          ])
        ], 512), [
          [vShow, !unref(isEdit) || unref(isPopup)]
        ]),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["vinput-form", unref(formClasses)])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            __props.label ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_4$1, [
              createElementVNode("div", _hoisted_5, [
                renderSlot(_ctx.$slots, "input", {}, () => [
                  withDirectives(createElementVNode("textarea", {
                    class: "vinput-form-control",
                    ref_key: "input",
                    ref: input,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localValue) ? localValue.value = $event : null),
                    rows: __props.rows,
                    placeholder: __props.placeholder
                  }, null, 8, _hoisted_6), [
                    [vModelText, unref(localValue)]
                  ])
                ])
              ]),
              createElementVNode("div", _hoisted_7, [
                createVNode(_sfc_main$5, {
                  class: "vinput-btn vinput-btn-primary",
                  href: "javascript:;",
                  "auto-hide": true,
                  promise: unref(save),
                  "force-processing": unref(isProcessing)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Tick)),
                    _hoisted_8
                  ]),
                  _: 1
                }, 8, ["promise", "force-processing"]),
                createElementVNode("a", {
                  class: "vinput-btn",
                  href: "javascript:;",
                  onClick: _cache[2] || (_cache[2] = withModifiers((...args) => unref(cancel) && unref(cancel)(...args), ["stop"]))
                }, [
                  createVNode(unref(Close)),
                  _hoisted_9
                ])
              ])
            ])
          ]),
          unref(isPopup) ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true)
        ], 2), [
          [vShow, unref(isEdit)]
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = { class: "vinput-value" };
const _hoisted_2 = ["value", "placeholder"];
const _hoisted_3 = ["placeholder", "onKeypress"];
const _hoisted_4 = {
  key: 0,
  class: "vinput-arrow"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExcelCol",
  props: {
    modelValue: null,
    type: { default: "text" },
    placeholder: { default: "" },
    emptyValue: { default: "" },
    placement: { default: "inline" },
    label: null,
    resource: null,
    field: null,
    pk: null,
    handleFn: null,
    lineHeight: { default: 15 },
    verticalSpace: { default: 10 }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const {
      localValue,
      handle,
      initialValue,
      isEdit,
      isProcessing,
      input,
      previewValue,
      isInline,
      isPopup,
      classes,
      formClasses,
      stopClick,
      save,
      cancel,
      close,
      edit,
      focus,
      saveToApi,
      saveAndEmit
    } = useInput(props, emits);
    const lineCount = computed(() => {
      if (localValue.value) {
        return localValue.value.split(/\r*\n/).length;
      }
      return 1;
    });
    const styles = computed(() => {
      const height = props.verticalSpace + props.lineHeight * lineCount.value;
      return {
        border: "1px solid red !important",
        height: `${height}px`
      };
    });
    const saveExcel = (e) => {
      if (e && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        return save(e);
      }
    };
    expose({
      edit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vinput", unref(classes)]),
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => unref(stopClick) && unref(stopClick)(...args), ["stop"]))
      }, [
        withDirectives(createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("textarea", {
              class: "vinput-excelcol-value",
              value: unref(previewValue),
              readonly: "",
              placeholder: __props.placeholder,
              style: normalizeStyle(unref(styles)),
              onDblclick: _cache[0] || (_cache[0] = (...args) => unref(edit) && unref(edit)(...args))
            }, null, 44, _hoisted_2)
          ])
        ], 512), [
          [vShow, !unref(isEdit) || unref(isPopup)]
        ]),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(["vinput-form", unref(formClasses)])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            withDirectives(createElementVNode("textarea", {
              class: "vinput-excelcol-input",
              ref_key: "input",
              ref: input,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localValue) ? localValue.value = $event : null),
              placeholder: __props.placeholder,
              style: normalizeStyle(unref(styles)),
              onKeypress: withKeys(saveExcel, ["enter"])
            }, null, 44, _hoisted_3), [
              [vModelText, unref(localValue)]
            ])
          ]),
          unref(isPopup) ? (openBlock(), createElementBlock("div", _hoisted_4)) : createCommentVNode("", true)
        ], 2), [
          [vShow, unref(isEdit)]
        ])
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueInlineEditable",
  props: {
    type: null
  },
  setup(__props, { expose }) {
    const props = __props;
    const component = ref(null);
    const generateFieldByType = (ftype) => {
      let inputEl = _sfc_main$4;
      switch (ftype) {
        case "text":
          inputEl = _sfc_main$3;
          break;
        case "textarea":
          inputEl = _sfc_main$2;
          break;
        case "excelcol":
          inputEl = _sfc_main$1;
          break;
      }
      return inputEl;
    };
    expose({
      edit: () => {
        var _a, _b;
        if ((_b = (_a = component == null ? void 0 : component.value) == null ? void 0 : _a.edit) == null ? void 0 : _b.call(_a)) {
          component.value.edit();
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(generateFieldByType(__props.type)), mergeProps({
        ref_key: "component",
        ref: component
      }, props), null, 16);
    };
  }
});
var _index = /* @__PURE__ */ (() => `.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::-webkit-file-upload-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.2rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.3rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")}.form-check-input:checked[type=radio]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch .form-check-input:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translate(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.vinput{position:relative;display:inline-flex;flex-direction:row;align-items:flex-start;justify-content:flex-start}.vinput,.vinput *,.vinput:before,.vinput:after,.vinput *:before,.vinput *:after{box-sizing:border-box}.vinput-value{display:inline-flex}.vinput-value a{display:inline-flex;min-width:1rem;min-height:1rem;color:#428bca;line-height:1.2;text-decoration:none;border-bottom:1px dashed #428bca}.vinput-value a:hover{text-decoration:none}.vinput-group{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.vinput-input{position:relative}.vinput-action{justify-content:flex-start;display:inline-flex;margin-left:.35rem}.vinput-action svg{width:10px;height:auto;fill:currentColor}.vinput-action .vinput-btn+.vinput-btn{margin-left:.35rem}.vinput-action .vinput-btn-primary svg{width:12px}.vinput-clear{position:absolute;width:25px;height:25px;top:50%;right:1px;transform:translateY(-50%);color:inherit;text-decoration:none;opacity:.7;font-size:1em;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center}.vinput-clear:hover{text-decoration:none;opacity:1}.vinput-form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-family:inherit;font-size:1rem;font-weight:400;line-height:1.2;color:#333;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.vinput-form-control{transition:none}}.vinput-form-control::-ms-expand{background-color:transparent;border:0}.vinput-form-control::placeholder{color:#6c757d;opacity:1}.vinput-form-control:disabled,.vinput-form-control[readonly]{background-color:#e9ecef;opacity:1}textarea.vinput-form-control{height:auto}.vinput-text .vinput-form-control{max-width:160px}.vinput-excelcol-input{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid #dee2e6;white-space:nowrap}.vinput-excelcol-input:focus{outline:none}.vinput-excelcol-value{display:block;width:100%;height:100%;appearance:none;resize:none;border-radius:0;padding:2px 4px;border:1px solid transparent}.vinput-excelcol-value:focus{border-color:#dee2e6;outline:none}.vinput-form-inline{display:inline-flex;flex-direction:row;align-items:center}.vinput-form-inline .vinput-label{margin-right:.5rem}.vinput-form-inline .vinput-label:after{content:":"}.vinput-form-popup{position:absolute;z-index:10;bottom:calc(100% + 20px);top:auto;left:50%;right:auto;transform:translate(-50%);border:1px solid #dee2e6;border-radius:.25rem;background-color:#fff;box-shadow:0 5px 10px rgba(0,0,0,.2);display:flex;flex-direction:column}.vinput-form-popup .vinput-label{padding:.5rem 1rem;margin:0;font-size:inherit;font-weight:400;background-color:#f7f7f7;border-bottom:1px solid #dee2e6}.vinput-form-popup .vinput-group{padding:.5rem 1rem}.vinput-form-popup .vinput-form-control{width:auto}.vinput-arrow{display:block;position:absolute;bottom:-11px;left:50%;width:0;height:0;margin-left:-11px;border-color:transparent;border-style:solid;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.vinput-arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:10px;bottom:1px;margin-left:-10px;border-top-color:#fff;border-bottom-width:0;content:" "}.vinput-label{font-weight:inherit;color:#333;text-align:left}.vinput-textarea .vinput-group{flex-direction:column;align-items:flex-end}.vinput-textarea .vinput-action{margin-top:.35rem;margin-left:0}.vinput-vertical .vinput-group{flex-direction:column}.vinput-vertical .vinput-input{margin-bottom:.35rem}.vinput-vertical .vinput-action{width:100%}.vinput-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.vinput-btn{display:inline-flex;align-items:center;justify-content:center;padding:.375rem .6rem;height:calc(1.5em + .75rem + 2px);color:inherit;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid #dee2e6;border-radius:.25rem;text-decoration:none;font-size:14px;line-height:1;cursor:pointer}.vinput-btn:hover,.vinput-btn:active{text-decoration:none}.vinput-btn:focus,.vinput-btn.focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.vinput-btn.disabled,.vinput-btn:disabled{opacity:.65}.vinput-btn-primary{background-color:#428bca;color:color-yiq(#428bca)}
`)();
const Plugin = {
  install(Vue, options = {}) {
    Vue.component("VueInlineEditable", _sfc_main);
    const pluginOptions = {
      handle: options.handle || null
    };
    Vue.provide("$inlineEditable", pluginOptions);
  }
};
export { _sfc_main$4 as BasicField, _sfc_main$1 as ExcelColField, _sfc_main$3 as TextField, _sfc_main$2 as TextareaField, _sfc_main as VueInlineEditable, Plugin as default };
