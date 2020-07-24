<template>
  <div>
    <!-- loading开始 -->
    <div class="loading" v-if="loading">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <!-- loading结束 -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-else>
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [],
      loading: true,
    };
  },
  async created() {
    let data = await this.axios.get("https://api.it120.cc/small4/banner/list");
    this.banner = data.data.data;
    console.log(this.banner);
    this.loading = false;
  },
};
</script>
<style lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  .van-loading__spinner--spinner i {
    color: #fff;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    width: 4rem;
  }
}
</style>