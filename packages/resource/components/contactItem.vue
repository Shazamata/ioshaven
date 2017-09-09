<template lang="html">
  <li class="list-group-item list" v-if="deleted === false">

    <div class="content">
      <div class="">
        <span class="subject">{{subject}}:</span>
        <span class="preview text">{{body}}...</span>

      </div>

    </div>
    <div class="buttons">
      <span class="time">{{occurredAt}}</span>
      <button class="btn btn-info" @click="toggle"> View</button>
      <button class="btn btn-danger" @click="drop">Delete</button>
    </div>

    <div class="modal" ref="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">{{subject}}</h2>
            <button type="button" class="close" @click="toggle" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              <span class="subject">Email:</span>
              <span class="text">{{email}}</span>
            </p>
            <hr>
            <p>
              <span class="subject">Name:</span>
              <span class="text">{{firstname}}</span>
            </p>
            <hr>
            <p>
              <span class="subject">Message:</span>
              <span class="text">{{body}}</span>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="drop">Delete</button>
            <button type="button" class="btn btn-secondary" @click="toggle">Close</button>
          </div>
        </div>
      </div>
    </div>

  </li>
</template>

<script>
const timeago = require('timeago.js')
export default {
  props: ['id', 'firstname', 'email', 'body', 'deleted', "time", "timezone", "subject", "platform"],
  data () {
    return {
      tz: new Date().getTimezoneOffset()/60,
      occurredAt: '',
      cron: ''
    }
  },
  mounted(){
    this.setup()
    this.cron = setInterval( () => {
        this.setup()
    }, 60000)
  },
  methods: {
    setup() {
      var now = new Date( Date.now() ).getTime()
      var serverTime = parseInt(this.time)
      var serverTZ = parseInt(this.timezone)
      var clientTZ = this.tz
      var difference = serverTZ + clientTZ
      var realTime = 3600 * difference
      this.occurredAt = timeago().format(serverTime + realTime)
    },
    toggle() {
      $(this.$refs.modal).modal('toggle')
    },
    drop() {
      $(this.$refs.modal).modal('hide')
      var o = {
        uid: this.id,
        firstname: this.firstname,
        email: this.email,
        body: this.body,
        deleted: this.deleted,
        time: this.time,
        timezone: this.timezone,
        subject: this.subject,
        platform: this.platform
      }
      this.$parent.contacts[this.id] = ""

      axios.post('/drop/contact', o)
    }
  }
}
</script>

<style lang="css" scoped>

.content {
    display: flex;
    justify-content: space-between;
}

.list {
    justify-content: space-between;
}
.list:hover{
  background-color: #eee;
}
span.subject {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;
}
span.preview {
    max-width: 15rem;
    display: inline-block;
    white-space: pre;
    overflow: hidden;
    flex-basis: auto;
    flex-grow: 1;
    margin-right: 2rem;
}
span.text{
  font-size: 1.3rem;
}
.content div {
    display: flex;
    align-items: center;
}
span.time {
    margin-right: 2rem;
}
</style>
