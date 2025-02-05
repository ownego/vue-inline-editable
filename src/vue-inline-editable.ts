import type { App, Component } from 'vue'

import VueInlineEditable from './components/VueInlineEditable.vue'
import BasicField from './components/input-types/Basic.vue'
import TextField from './components/input-types/TextField.vue'
import TextareaField from './components/input-types/Textarea.vue'
import ExcelColField from './components/input-types/ExcelCol.vue'

import './assets/scss/_index.scss'

const Plugin = {
  install(Vue: App, options: any = {}) {
    if (options.compatConfig) {
      VueInlineEditable.compatConfig = options.compatConfig;
    }

    Vue.component('VueInlineEditable', VueInlineEditable)

    const pluginOptions = {
      handle: options.handle || null
    }

    Vue.provide('$inlineEditable', pluginOptions)
  }
}

export {
  VueInlineEditable,
  BasicField,
  TextField,
  TextareaField,
  ExcelColField
}

export default Plugin
