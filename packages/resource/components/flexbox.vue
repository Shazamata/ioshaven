<template>
    <div class="container-2-box">
      <h4 class="center">{{title}}</h4>
      <img :src='image' class="center-block"/>
      <br>
      <p class="center">{{version}}</p>
      <p class="height">{{desc}}</p>
      <a :href="dl" class="btn btn-primary center-block">Download Here</a>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "version", "desc", "dl"],
  mounted(){
  }
}
</script>

<style lang="css">
img {
  cursor: default;
  pointer-events: none;
  width: 192px;
  height: 192px;
}

.center {
  text-align: center;
}

.height {
  height: 200px;
  overflow-y: auto;
}

.center-block {
  display: block;
  margin: 0 auto;
}

.container-2 {
  display: flex;
  justify-content: center;
}

.container-2-box {
  width: 20%;
  border: 1px #ffffff solid;
  padding: 20px 25px;
  margin: 40px;
}
</style>
