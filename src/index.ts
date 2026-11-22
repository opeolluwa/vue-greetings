import type { App, Plugin } from 'vue'
import VueGreetings from './VueGreetings.vue'

export { VueGreetings }
export { getGreeting } from './greeting'

const plugin: Plugin = {
  install(app: App) {
    app.component('VueGreetings', VueGreetings)
  },
}

export default plugin
