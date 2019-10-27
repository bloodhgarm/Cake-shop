import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC5S4bKkHYs03zIQaqQRxorvSSlPJnIbx0',
  }
})

Vue.use(Vuetify)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
