<template>
  <div
    class="relative"
    style="
      width: 100%;
      height: 200px;
      background-color: #fbc2b5;
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
      <!-- <q-icon
        style="font-size: 40px"
        class="cursor-pointer"
        @click="toggleNav"
        name="menu"
      >
      </q-icon> -->
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
  toggleLeftDrawer(); // 切换导航栏状态
  router.push({
    path: "/Page/HeaderPage",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>
