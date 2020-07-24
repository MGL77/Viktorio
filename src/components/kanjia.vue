<template>
  <div class="jia">
    <div class="boss">
      <b>全民砍价</b>
      <van-icon name="arrow" />
    </div>
    <ul>
      <li v-for="item in kan" :key="item.id">
        <img :src="item.pic" alt />
        <div class="right">
          <p class="p1">{{ item.name }}</p>
          <p class="p2">{{ item.characteristic }}</p>
          <div class="one">
            <p>￥{{ item.maxCoupons }}</p>
            <p>￥{{ item.originalPrice }}</p>
            <p>{{ item.kanjiaPrice }}件</p>
          </div>
          <div class="two">
            <p>低价</p>
            <p>原价</p>
            <p>限量</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kan: [],
    };
  },
  async created() {
    let data = await this.axios.get(
      "https://api.it120.cc/small4/shop/goods/kanjia/list"
    );
    this.kan = data.data.data.goodsMap;
    console.log(this.kan);
  },
};
</script>
<style lang="less">
.jia {
  .boss {
    width: 4rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    justify-content: center;
    color: slategrey;
  }
  ul {
    margin-bottom: 1rem;
    li {
      width: 4rem;
      height: 1.2rem;
      border-top: 0.01rem solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 0.04rem;
      }
      .right {
        width: 2.1rem;
        height: 1.2rem;
        // background-color: tomato;
        .p1 {
          font-size: 0.16rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0.08rem 0rem 0.06rem 0rem;
        }
        .p2 {
          font-size: 0.12rem;
          color: #a7a7a7;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .one {
          display: flex;
          justify-content: space-between;
          margin: 0.19rem 0rem 0.06rem 0rem;
          p:nth-of-type(1) {
            color: red;
          }
          p:nth-of-type(2) {
            color: #a7a7a7;
          }
          p:nth-of-type(3) {
            color: #a7a7a7;
          }
        }
        .two {
          display: flex;
          justify-content: space-between;
          p:nth-of-type(2) {
            color: #a7a7a7;
          }
          p:nth-of-type(3) {
            color: #a7a7a7;
          }
        }
      }
    }
  }
}
</style>