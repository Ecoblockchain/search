import Vue from 'vue'
import VueResource from 'vue-resource'

import Search from './Search.vue'

Vue.use(VueResource)
Vue.config.debug = true

new Vue({
  el: 'body',
  components: { Search }
})
