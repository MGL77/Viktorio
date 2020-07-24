<template>
  <div>
    <Banner />
    <Kanjia />
    <Boss />
  </div>
</template>
<script>
import Boss from "@/pages/boss.vue";
import Banner from "@/components/banner.vue";
import Kanjia from "@/components/kanjia.vue";
export default {
  components: {
    Boss,
    Banner,
    Kanjia,
  },
};
</script>
<style lang="less">
</style>