<template>
  <div class="IN">
    <div class="ss">
      <van-icon name="arrow-left" />
      <b @click="fan">搜索</b>
    </div>

    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="ji">
      <b>历史记录</b>
      <van-icon name="delete" />
    </div>

    <b class="b">热门搜索</b>
    <div class="suo">
      <ul>
        <li>飞行员夹克</li>
        <li>牛仔短裤</li>
        <li>印花长裙</li>
        <li>衬衫</li>
        <li>新品上架</li>
        <li>卫衣系列</li>
        <li>登山运动鞋</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    fan() {
      this.$router.push({
        path: "/nv",
      });
    },
  },
};
</script>
<style lang="less">
.IN {
  width: 4rem;
  height: 7rem;
  background-color: #fff;
  position: fixed;
  top: 0.6rem;
  .ss {
    width: 4rem;
    height: 0.3rem;
    display: flex;
    align-items: center;
    .van-icon-arrow-left::before {
      content: "\F008";
      margin: 0rem 0.07rem 0rem 0.11rem;
    }
  }
  .ji {
    width: 4rem;
    height: 0.3rem;
    display: flex;
    align-items: center;
    border-bottom: 0.06rem solid #f5f5f5;
    b {
      margin: 0rem 3.12rem 0rem 0.13rem;
      color: #ccc;
    }
    .van-icon-delete::before {
      content: "\F044";
      color: #ccc;
    }
  }
  .b {
    margin: 0rem 3.12rem 0rem 0.13rem;
    color: #ccc;
    height: 0.4rem;
    display: block;
    line-height: 0.4rem;
  }
  .suo {
    width: 3.6rem;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0.07rem 0.14rem;
        background-color: #f5f5f5;
        color: #ccc;
        display: block;
        margin: 0rem 0.1rem 0.1rem 0rem;
        border-radius: 0.03rem;
      }
    }
  }
}
</style>