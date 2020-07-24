<template>
  <div class="con">
    <ul>
      <li v-for="item in con" :key="item.id">
        <img :src="item.s_pic" alt />
        <p>{{ item.title }}</p>
        <div class="qian">
          <p>￥{{ item.price }}</p>
          <van-icon name="cart" is-link @click="showPopup" />
        </div>
      </li>
    </ul>

    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }" closeable>
      <Qing />
    </van-popup>
  </div>
</template>
<script>
import Qing from "@/components/qing.vue";
export default {
  data() {
    return {
      con: [],
      show: false,
    };
  },
  components: {
    Qing,
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  async created() {
    let data = await this.axios.get("static/json/ying.json");
    this.con = data.data.result;
    // console.log(this.con);
  },
};
</script>

<style lang="less">
.con {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 1.5rem;
      height: 2.1rem;
      margin: 0.2rem 0rem 0.2rem 0rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: 1.5rem;
        height: 1.7rem;
        border-radius: 0.06rem;
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: silver;
      }
      .qian {
        width: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.06rem;
        p {
          color: red;
        }
        .van-icon-cart::before {
          content: "\F027";
          color: violet;
        }
      }
    }
  }
}
</style>