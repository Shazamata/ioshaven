<template>
<div class="col-md-4 box2">
  <div class="inside">
    <h4 class="center color-black">{{title}}</h4>
    <img :src='image' class="center-block" />
    <br>
    <p class="center color-black">{{version}}</p>
    <p class="desc center color-black">{{desc}}</p>
    <a v-if="signed" :href="signed" class="btn btn-success center-dl center-s-dl">Signed</a>
    <a v-if="dl" :href="dl" class="btn btn-primary center-dl">Unsigned</a>
  </div>
</div>
</template>

<script>
export default {
  props: ["title", "image", "version", "desc", "dl", "signed"],
  mounted() {}
}
</script>

<style lang="css" scoped>
img {
  cursor: default;
  pointer-events: none;
  width: 150px;
  height: 150px;
}

/*.center {
  text-align: center;
  height: 60px;
  margin-bottom: 10px;
}*/

.desc {
  height: 200px;
  overflow-y: auto;
}

/*.center-block {
  display: block;
  margin: 0 auto;
}*/

/*.center-dl {
  position: absolute;
  bottom: 105px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 30px 88px;
}

.center-s-dl {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 30px 101px;
}*/

h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    text-transform: none;
}
.center-dl {
    padding: 30px;
    width: 100%;
    color: white !important;
    margin: 4px 0px;
}

.box2 {
  padding: 5px;

}
.inside {
    border: 1px black solid;
    padding: 30px;
    position: relative;
    background-color: white;
    text-align: center;
    overflow-y: hidden;
}
.inside * {
  color: black;
}
/*.color-black {
  color: black;
  text-transform: none !important;
}*/
</style>
