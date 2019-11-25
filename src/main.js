import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(vueCustomElement)
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.customElement('vue-wid', App)
