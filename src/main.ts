import './assets/main.css'
import { createApp, defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'
import { i18n } from './i18n'
import router from './router'

const Root = defineComponent({ render: () => h(RouterView) })

createApp(Root).use(i18n).use(router).mount('#app')
