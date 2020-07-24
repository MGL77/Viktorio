<template>
  <div class="list">
    <img src="../assets/B_01.jpg" alt />
    <van-search placeholder="请输入搜索关键词" input-align="center" @click="ToInput" />
    <ul>
      <router-link to="/boss/one">
        <li>主页</li>
      </router-link>
      <router-link to="/nv">
        <li>杂货铺</li>
      </router-link>
      <router-link to="/nan">
        <li>日用</li>
      </router-link>
      <router-link to="/tong">
        <li>生活</li>
      </router-link>
      <router-link to="/ying">
        <li>电脑</li>
      </router-link>
      <router-link to="/yun">
        <li>运动</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    ToInput() {
      this.$router.push({
        path: "/inputs",
      });
    },
  },
};
</script>
<style lang="less">
.list {
  img {
    width: 4rem;
  }
  ul {
    width: 4rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.04rem solid #f5f5f5;
    li {
      color: rgb(99, 97, 97);
      padding: 0.04rem 0.04rem;
    }
    li:hover {
      z-index: 1000;
      font-weight: bold;
      background-color: steelblue;
      border-radius: 0.02rem;
      color: #ffff;
      border-bottom: 0.02rem solid rgb(16, 14, 90);
    }
  }
}
</style>
