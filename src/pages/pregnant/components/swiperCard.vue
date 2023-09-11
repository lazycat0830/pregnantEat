<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in images" :key="index">
        <div>
          <q-card class="my-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis" style="color: #000">
                  {{ item.title }}
                </div>
              </div>
              <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1" style="color: #000">
                ${{ item.price }}
              </div>
              <div class="text-caption text-grey">
                <q-chip
                  v-for="Food in item.food"
                  :key="Food"
                  color="amber-8"
                  text-color="white"
                  icon="restaurant"
                >
                  {{ Food }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- 添加前进和后退按钮 -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "/node_modules/swiper/dist/css/swiper.min.css"; // 导入 Swiper 样式
import accountimg from "/public/images/Account/accountimg.png";

export default {
  data() {
    return {
      images: [
        { title: "食譜1", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜2", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜3", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜4", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜5", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜6", food: ["食材1", "食材2", "食材3"], price: 200 },
        { title: "食譜7", food: ["食材1", "食材2", "食材3"], price: 200 },
      ],
    };
  },

  mounted() {
    // 初始化 Swiper
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflowEffect: {
        rotate: 0, // 旋转角度
        stretch: 0, // 图片间距
        depth: 100, // 深度
        modifier: 1, // 3D 切换效果
        slideShadows: false, // 不显示阴影
      },
      spaceBetween: 1, // 图片之间的距离
    });
  },
};
</script>

<style lang="scss">
/* 样式可以根据需要进行调整，如背景颜色等 */
.swiper-container {
  z-index: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 40%; /* 可根据需要调整宽度 */
  margin: 0 auto; /* 居中显示 */
  margin-top: 10px;
}

.q-card.my-card {
  /* 自定义 q-card 样式以适应手机屏幕 */
  max-width: 90%; /* 控制卡片最大宽度 */
  margin: 0 auto; /* 居中显示 */
}
</style>
