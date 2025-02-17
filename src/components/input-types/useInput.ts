import {
  computed,
  watch,
  ref,
  inject,
  nextTick,
  onMounted,
  onBeforeUnmount
} from 'vue'

const POPUP_EVENT_NAME = 'open_inline_editable'

export default function(props, emits) {
  const inlineEditableOptions = inject('$inlineEditable', {
    handle: null
  })

  const localValue = ref(props.modelValue)
  const handle = props.handleFn ? props.handleFn : inlineEditableOptions.handle

  const initialValue = props.modelValue
  const isEdit = ref(false)
  const isProcessing = ref(false)
  const input = ref(null)

  const previewValue = computed(() => props.modelValue || props.emptyValue)
  const isInline = computed(() => props.placement === 'inline')
  const isPopup = computed(() => props.placement === 'popup')

  const classes = computed(() => {
    return [
      `vinput-${props.type}`,
    ]
  })

  const formClasses = computed(() =>  {
    return [
      `vinput-form-${props.placement}`
    ]
  })

  const handleBodyClick = () => {
    cancel()
  }
  const stopClick = () => null

  const cancel = () => {
    close()
    localValue.value = initialValue
  }

  const close = () => {
    isEdit.value = false
  }

  const edit = () => {
    // Close other editor first
    document.dispatchEvent(new Event(POPUP_EVENT_NAME))

    // Then open the current one
    nextTick(() => {
      isEdit.value = true

      setTimeout(() => {
        focus()
      }, 200)
    })
  }

  const focus = () => {
    const inputEl: any = input.value
    if (inputEl) {
      inputEl.focus()
    }
  }

  const saveToApi = (e: any) => {
    const value = e ? e.target.value : localValue.value
    isProcessing.value = true

    return handle(value, props.resource, props.pk, props.field)
      .then(() => {
        saveAndEmit(e)
      })
      .finally(() => {
        isProcessing.value = false
      })
  }

  const saveAndEmit = (e: any) => {
    const value = e ? e.target.value : localValue.value
    emits(`update:modelValue`, value);
    close()

    return Promise.resolve(value)
  }

  const save = (e: any) => {
    if (props.resource) {
      return saveToApi(e)
    } else {
      return saveAndEmit(e)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleBodyClick)
    document.addEventListener(POPUP_EVENT_NAME, close)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleBodyClick)
    document.removeEventListener(POPUP_EVENT_NAME, close)
  })

  watch(
    () => props.modelValue,
    (newVal) => {
      localValue.value = newVal
    }
  )

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
    save,
  }
}
