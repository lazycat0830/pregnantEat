<template>
  <div
    class="relative"
    style="
      width: 100%;
      height: 200px;
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
          padding-top: 40px;
          padding-bottom: 20px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bolder;
          text-shadow: 0px 3px 3px #8d8d8d;
        "
      >
        食在好孕
      </div>
      <div style="width: 80%">
        <q-input bg-color="grey-1" outlined dense rounded placeholder="搜尋">
          <template v-slot:append>
            <q-icon class="cursor-pointer" name="search" />
          </template>
        </q-input>
      </div>
      <div
        class="absolute"
        style="top: 165px; display: flex; justify-content: center; width: 100%"
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
          >推薦餐點</span
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
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        components
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
        height: 100px;
      "
    >
      <div
        style="
          width: 80%;
          height: 60px;
          background-color: #60d996;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0px 20px;
          padding: 0px 30px;
          font-size: 30px;
        "
      >
        <div style="border-radius: 100%; background-color: #ffffff">
          <q-icon style="padding: 0px 8px; color: #60d996" name="home"></q-icon>
        </div>
        <div
          style="
            height: 60%;
            display: flex;
            align-items: center;
            border-radius: 10px;
            background-color: #ffffff;
          "
        >
          <q-icon
            style="padding: 0px 4px; color: #60d996; font-weight: bolder"
            name="add"
          ></q-icon>
        </div>
        <div style="border-radius: 100%; background-color: #ffffff">
          <q-icon
            style="padding: 0px 8px; color: #60d996"
            name="history"
          ></q-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
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
</script>
