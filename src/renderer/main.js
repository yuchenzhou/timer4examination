import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import store from './store'
import messages from './glossary'
import language from '../config'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: language, // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  i18n
}).$mount('#app')
