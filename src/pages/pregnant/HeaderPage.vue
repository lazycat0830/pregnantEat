<template>
  <div
    class="relative"
    style="
      width: 100%;
      height: 160px;
      background-color: #ff9924c9;
      color: #fff;
      box-shadow: 0px 4px 3px #8d8d8d;
    "
  >
    <div
      class="absolute"
      style="
        display: flex;
        justify-content: left;
        width: 100%;
        margin: 5px;
        padding: 10px;
      "
    >
      <q-btn
        flat
        @click="toggleNav"
        round
        dense
        icon="menu"
        style="font-size: 20px"
      />
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        style="
          padding-top: 20px;
          padding-bottom: 15px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          font-weight: bolder;
          text-shadow: 0px 3px 3px #8d8d8d;
        "
      >
        食在好孕
      </div>
      <div style="width: 80%">
        <q-input bg-color="grey-1" outlined dense rounded placeholder="搜尋">
          <template v-slot:append>
            <div
              style="
                padding: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #ffaf52;
                border-radius: 100%;
              "
            >
              <q-icon class="cursor-pointer" name="search" />
            </div>
          </template>
        </q-input>
        <div
          style="
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
          "
        >
          <q-chip
            v-for="(val, key) in desert"
            :key="key"
            v-model:selected="val.cheacked"
            :color="val.color"
            text-color="white"
            icon="local_dining"
          >
            {{ val.label }}
          </q-chip>
        </div>
      </div>
      <div
        class="absolute"
        style="top: 175px; display: flex; justify-content: center; width: 100%"
      >
        <span
          style="
            background-color: #4d0000;
            color: #fff;
            padding: 3px 20px;
            z-index: 2;
            font-size: 18px;
            border-radius: 20px;
          "
          >推薦食譜</span
        >
      </div>
    </div>
    <div
      class="absolute"
      style="top: 180px; width: 100%; height: 70%; background-color: #ffffff"
    >
      <div
        style="
          background-color: #ffffff;
          width: 100%;
          overflow: hidden;
          height: 95%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <CarouselCard></CarouselCard>
      </div>
    </div>
    <div
      class="absolute"
      style="
        display: flex;
        justify-content: center;
        align-items: start;
        bottom: 0px;
        width: 100%;
        height: 60px;
      "
    >
      <div
        style="
          width: 80%;
          height: 45px;
          background-color: #60d996;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0px 20px;
          padding: 0px 20px;
          font-size: 30px;
        "
      >
        <div
          style="
            padding: 5px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
          "
        >
          <q-icon style="font-size: 20px; color: #60d996" name="home"></q-icon>
        </div>
        <div
          style="
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background-color: #ffffff;
          "
        >
          <q-icon
            style="font-size: 20px; color: #60d996; font-weight: bolder"
            name="add"
          ></q-icon>
        </div>
        <div
          style="
            padding: 5px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
          "
        >
          <q-icon
            style="font-size: 20px; color: #60d996"
            name="history"
          ></q-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import SwiperCard from "/src/pages/pregnant/components/swiperCard.vue";
import CarouselCard from "./components/CarouselCard.vue";

const stars = ref(4);

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();

const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    path: "/Page/HeaderPage",
    query: { navOpen: leftDrawerOpen.value },
  });
};

const desert = reactive({
  fruit: { cheacked: false, label: "水果", color: "primary" },
  vegetable: { cheacked: false, label: "蔬菜", color: "teal" },
  meat: { cheacked: false, label: "肉類", color: "orange" },
  egg: { cheacked: false, label: "蛋", color: "red" },
});

const selection = computed(() => {
  return Object.keys(desert)
    .filter((type) => desert[type] === true)
    .join(", ");
});
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
