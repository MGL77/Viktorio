<template>
  <div id="app">
    <List />
    <router-view />
    <topbottom />
  </div>
</template>

<script>
import List from "@/components/list.vue";
import topbottom from "@/pages/TopBottom.vue";
export default {
  components: {
    List,
    topbottom,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.12rem;
}
img {
  display: block;
}
</style>
