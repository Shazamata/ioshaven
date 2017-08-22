<template>
  <div class="search-bar">
    <input type="text" class="search-field" placeholder="Search..." v-model="$parent.store" @keyup="search">
  </div>

</template>

<script>
export default {
  methods: {
    search: function(e){
      this.$emit("result", e)
    }
  }
}
</script>

<style lang="scss" scoped>

$search-color: #000;
$placeholder-color: lighten($search-color, 30%);

.search-bar {
  margin: 10px;
}

::-webkit-input-placeholder {
  color: $placeholder-color !important;
  opacity: 1.0;
}

:-moz-placeholder {
  color: $placeholder-color !important;
  opacity: 1.0;
}

:-ms-input-placeholder {
  color: $placeholder-color !important;
  opacity: 1.0;
}

.search-field {
  color: $search-color;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  border: 1px black solid;
}
.search-field:focus {
  box-shadow: 0 0 0 2px #121212;
}
.search-bar {
  width: 100%;
  padding: 0px;
}
</style>
