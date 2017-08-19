//require('popper')
//require('bootstrap')
window.Vue = require('vue')


Vue.component('flexbox', require('./components/flexbox.vue'))
const app = new Vue({
  el: '#app',
  data: {
    apps: require('./sideload-apps.json')
  }
})
