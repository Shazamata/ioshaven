//require('popper')
//require('bootstrap')
window.Vue = require('vue')
window._ = require('lodash');
window.axios = require('axios');

$(document).ready(function (){
  if (location.pathname == "/") $("body").addClass("landing")
  console.log(location.pathname);
})

Vue.component('flexbox', require('./components/flexbox.vue'))
Vue.component('search', require('./components/searchbar.vue'))
Vue.component('contact', require('./components/contact.vue'))
const app = new Vue({
  el: '#app',
  data: {
    apps: require('./sideload-apps.json'),
    searchResults: require('./sideload-apps.json'),
    store: ""
  },
  methods: {
    child: function(value){

      this.searchResults = _.sortBy(this.apps, [function (o){
        return o.title.toLowerCase()
      }])


      this.searchResults = _.filter(this.searchResults, (o) =>{
       return _.startsWith(o.title.toLowerCase(), this.store.toLowerCase())
      })

      if (value.unsigned) {
        this.searchResults = _.filter(this.searchResults, (o) => {
          return o.dl != null
        })
      }

      if (value.signed) {
        this.searchResults = _.filter(this.searchResults, (o) => {
          return o.signed != null
        })
      }

      //  console.log(testing);
    },
  }
})
