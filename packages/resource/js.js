//require('popper')
//require('bootstrap')
window.Vue = require('vue')
window._ = require('lodash');
window.axios = require('axios');

$(document).ready(function (){
  if (location.pathname == "/") $("body").addClass("landing")
  $('#paypalDonate').hide()
  $('.paypalDonateTrigger').click(function(e) {
    e.preventDefault()
    $('#paypalDonate').submit()
  })
})

Vue.component('flexbox', require('./components/flexbox.vue'))
Vue.component('search', require('./components/searchbar.vue'))
Vue.component('contact', require('./components/contact.vue'))
Vue.component('popup', require('./components/popup.vue'))
Vue.component('contactitem', require('./components/contactItem.vue'))

const app = new Vue({
  el: '#app',
  data: {
    apps: require('./sideload-apps.json'),
    searchResults: require('./sideload-apps.json'),
    contact: {},
    store: ""
  },
  methods: {
    child: function(value){

      this.searchResults = _.sortBy(this.apps, [function (o){
        return o.title.toLowerCase()
      }])
      //


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


const devops = new Vue({
  el: '#devops',
  data: {
    contacts: null,
    cron: '',
    contactsEmpty: true,
  },
  mounted() {
    this.cron = setInterval(()=> {
      axios.post('/get/contacts')
      .then((result) => {
        this.contacts = result.data
        this.contactsEmpty = true
        _.forEach(this.contacts,  (c) => {
          if (c.deleted === false) this.contactsEmpty = false
        })
      })
    }, 1000)

  }
})
