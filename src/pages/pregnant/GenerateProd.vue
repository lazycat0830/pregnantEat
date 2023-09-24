<template>
  <div style="position: relative">
    <HeaderLayout></HeaderLayout>
    <div
      class="absolute"
      style="
        display: flex;
        justify-content: left;
        width: 100%;
        margin: 5px;
        padding: 10px;
        top: 10px;
        left: 0px;
      "
    >
      <q-icon
        style="font-size: 40px; color: #fff"
        class="cursor-pointer"
        @click="toggleNav"
        name="menu"
      >
      </q-icon>
    </div>

    <div style="position: absolute; top: 100px; background-color: #fff">
      <div class="column justify-center items-center">
        <div style="width: 300px; padding: 10px 0px">
          <q-img :src="'https://picsum.photos/500/300?t=' + Math.random()">
            <q-icon
              @click="lookfood()"
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; right: 8px"
            >
              <q-tooltip> 食譜與流程 </q-tooltip>
            </q-icon>
          </q-img>
        </div>
        <div class="row justify-start" style="max-width: 300px">
          <div
            v-for="food in foodDataList"
            :key="food"
            class="column justify-center items-center"
          >
            <div style="font-size: 16px">{{ food.Title }}</div>
            <div style="width: 80px; margin: 10px">
              <q-img :src="'https://picsum.photos/500/300?t=' + Math.random()">
              </q-img>
            </div>
          </div>
        </div>
        <q-btn>生成</q-btn>
      </div>
      <div
        style="
          width: 100%;
          border: 1px #000 solid;
          max-height: 300px;
          margin: 10px 0px;
          overflow: hidden;
          overflow-y: scroll;
        "
      >
        <div>
          <div class="row justify-center" style="padding: 10px">水果</div>
          <div class="row justify-start">
            <div v-for="n in 10" :key="n" style="width: 80px; margin: 10px">
              <q-img :src="'https://picsum.photos/500/300?t=' + Math.random()">
                <div class="absolute-top text-center">Caption</div>
              </q-img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="q-pa-md q-gutter-md">生成</div> -->

  <q-dialog v-model="dialog" position="bottom">
    <q-card
      style="
        width: 100%;
        border: 1px #000 solid;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      "
      class="my-card"
      flat
      bordered
    >
      <q-card-section>
        <div class="row justify-center">
          <q-img
            style="max-height: 50%"
            :src="'https://picsum.photos/500/300?t=' + Math.random()"
          />
          <div style="width: 60%; height: 100%; background-color: #000"></div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" style="color: #000">Title</div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

const dialog = ref(false);

const foodDataList = ref([
  { Title: "水果", src: `https://picsum.photos/500/300?t=${Math.random()}` },
  { Title: "蔬菜", src: `https://picsum.photos/500/300?t=${Math.random()}` },
  {
    Title: "全榖雜糧",
    src: `https://picsum.photos/500/300?t=${Math.random()}`,
  },
  {
    Title: "豆魚蛋肉",
    src: `https://picsum.photos/500/300?t=${Math.random()}`,
  },
  { Title: "乳品", src: `https://picsum.photos/500/300?t=${Math.random()}` },
  {
    Title: "油脂與堅果",
    src: `https://picsum.photos/500/300?t=${Math.random()}`,
  },
]);

const lookfood = () => {
  console.log(dialog.value);
  dialog.value = !dialog.value;
};

const { leftDrawerOpen, toggleLeftDrawer } = defineProps([
  "leftDrawerOpen",
  "toggleLeftDrawer",
]);
const router = useRouter();
const toggleNav = () => {
  toggleLeftDrawer();
  router.push({
    name: "generateProd",
    query: { navOpen: leftDrawerOpen.value },
  });
};
</script>
<style></style>
