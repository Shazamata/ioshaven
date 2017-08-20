<template>
<div class="col-lg-4 col-xl-2 box2">
  <div class="inside">
    <h4 class="center">{{title}}</h4>
    <img :src='image' class="center-block" />
    <br>
    <p class="center">{{version}}</p>
    <p class="height">{{desc}}</p>
    <a :href="dl" class="btn btn-primary center-dl">Download Here</a>
  </div>
</div>
</template>

<script>
export default {
  props: ["title", "image", "version", "desc", "dl"],
  mounted() {}
}
</script>

<style lang="css" scoped>
img {
  cursor: default;
  pointer-events: none;
  width: 60%;
}

body {
  background-color: grey;
}

.center {
  text-align: center;
  height: 60px;
  margin-bottom: 10px;
}

.height {
  height: 200px;
}

.center-block {
  display: block;
  margin: 0 auto;
}

.center-dl {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.box2 {
  padding: 20px 25px;
}
.inside {
  border: 1px black solid;
  padding: 30px;
  position: relative;
  margin: 10px;
}
</style>
