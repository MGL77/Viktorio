<template>
  <div class="hua">
    <div class="one">
      <ul>
        <li>所有分类</li>
        <li>居家</li>
        <li>配饰装饰</li>
        <li>服装</li>
        <li>电器</li>
      </ul>
    </div>
    <div class="two">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="https://res.gucci.cn/resources//2020/7/22/15954159641821124.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://res.gucci.cn/resources//2020/6/24/15929857920505399_content_StyleNewsSingle_Standard_340x202_1588587304_StyleNewsSingle_Allegretti_001_Default.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://res.gucci.cn/resources//2020/7/20/15952136294903628_content_StyleNewsSingle_Standard_340x202_1588587304_StyleNewsSingle_Karime_001_Default.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://res.gucci.cn/resources//2020/7/22/15954154787001929_content_StyleNewsSingle_Standard_340x202_1595000703_StyleNewsSingle_S01-EPILOGUE-VIDEO-01_001_Default.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.hua {
  display: flex;
  .one {
    width: 1rem;
    height: 5rem;
    ul {
      li {
        text-align: center;
        margin-top: 0.2rem;
        color: rgb(82, 85, 87);
        height: 0.3rem;
        line-height: 0.3rem;
      }
      li:hover {
        border-bottom: 0.02rem solid steelblue;
      }
    }
  }
  .two {
    width: 3rem;
    height: 5rem;
    background-color: skyblue;
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      img{
          height: 1.4rem;
          width: 2.6rem;
          margin: 0 auto;
      }
    }
  }
}
</style>