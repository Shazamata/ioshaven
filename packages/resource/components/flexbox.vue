<template>
<div class="col-md-4 box2">
  <div class="inside">
    <h4 class="center color-black">{{title}}</h4>
    <img :src='image' class="center-block" />
    <br>
    <p class="center color-black">{{version}}</p>
    <p class="desc center color-black">{{desc}}</p>
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

.center {
  text-align: center;
  height: 60px;
  margin-bottom: 10px;
}

.desc {
  height: 200px;
  overflow-y: auto;
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
  color: white;
  padding: 30px 50px;
}

.box2 {
  padding: 5px 0px;

}
.inside {
  border: 1px black solid;
  padding: 30px;
  position: relative;
  margin: 10px;
  background-color: white;
  padding-bottom: 115px;
}
.color-black {
  color: black;
  text-transform: none !important;
}
</style>
