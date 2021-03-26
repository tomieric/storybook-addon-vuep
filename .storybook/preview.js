import Vue from 'vue'
import Button from '../stories/Button.vue'

Vue.component('my-button', Button)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}