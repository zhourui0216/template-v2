import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mixin from "./utils/mixin.js"
Vue.mixin(mixin)

Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
