<template lang="pug">
extends Basic.pug
block value
  textarea.vinput-excelcol-value(
    :value="previewValue",
    readonly,
    :placeholder="placeholder",
    :style="styles",
    @dblclick="edit",
  )
block content
  textarea.vinput-excelcol-input(
    ref="input",
    v-model="localValue",
    :placeholder="placeholder",
    :style="styles",
    @keypress.enter="saveExcel",
  )
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import PromiseButton from 'vue-promise-button/src/components/PromiseButton.vue'
import useInput from './useInput';

import Tick from '../../assets/tick.svg'
import Close from '../../assets/close.svg'

interface Props {
  modelValue?: any;
  type?: string;
  placeholder?: string;
  emptyValue?: string;
  placement?: string;
  label?: string;
  resource?: string;
  field?: string;
  pk?: string;
  handleFn?: any;

  lineHeight?: number;
  verticalSpace?: number;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  emptyValue: '',
  placement: 'inline',
  lineHeight: 15,
  verticalSpace: 10,
});
const emits = defineEmits<Emits>();

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
  saveAndEmit,
} = useInput(props, emits)

const lineCount = computed(() => {
  if (localValue.value) {
    return localValue.value.split(/\r*\n/).length
  }

  return 1
})

const styles = computed(() => {
  const height = props.verticalSpace + props.lineHeight * lineCount.value

  return {
    border: '1px solid red !important',
    height: `${height}px`
  }
})

/**
 * cannot save when blur beause of handleBodyClick
 */
const saveExcel = (e: any) => {
  if (e && !e.shiftKey) {
    e.preventDefault()
    e.stopPropagation()

    return save(e)
  }
}

defineExpose({
  edit,
})
</script>
