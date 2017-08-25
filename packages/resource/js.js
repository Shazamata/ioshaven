//require('popper')
//require('bootstrap')
window.Vue = require('vue')
window._ = require('lodash');


Vue.component('flexbox', require('./components/flexbox.vue'))
Vue.component('search', require('./components/searchbar.vue'))
const app = new Vue({
  el: '#app',
  data: {
    apps: require('./sideload-apps.json'),
    searchResults: require('./sideload-apps.json'),
    store: ""
  },
  methods: {
    child: function(value){
      this.searchResults = _.filter(this.apps, (o) =>{
       return _.startsWith(o.title.toLowerCase(), this.store.toLowerCase())
      })
      //  console.log(testing);
    }
  }
})
