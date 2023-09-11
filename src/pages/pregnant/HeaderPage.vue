<template>
  <div class="relative header-bg">
    <div class="absolute header-absolute-style">
      <q-btn
        flat
        @click="toggleNav"
        round
        dense
        icon="menu"
        style="font-size: 20px"
      />
    </div>
    <div class="column justify-center items-center">
      <div class="header-Title-Text">食在好孕</div>
      <div style="width: 80%">
        <q-input bg-color="grey-1" outlined dense rounded placeholder="搜尋">
          <template v-slot:append>
            <div class="header-Search-icon">
              <q-icon class="cursor-pointer" name="search" />
            </div>
          </template>
        </q-input>
        <div class="header-change-Search-Keywork">
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
      <div class="absolute row justify-center" style="top: 175px; width: 100%">
        <span v-if="changeShow === 'home'" class="body-header-text"
          >推薦食譜</span
        >
        <span v-else class="body-header-text">歷史紀錄</span>
      </div>
    </div>
    <div class="absolute body-bg">
      <div
        v-if="changeShow === 'history'"
        style="
          margin-top: 20px;
          max-height: 380px;
          overflow: hidden;
          overflow-y: scroll;
        "
      >
        <historicalPage></historicalPage>
      </div>
      <div v-else class="CarouselCard-Swiper">
        <CarouselCard></CarouselCard>
      </div>
    </div>
    <div class="absolute footer-conetent">
      <div class="footer-body">
        <div class="footer-body-btn-click">
          <q-icon
            class="btn-icon"
            name="home"
            @click="showComponent('home')"
          ></q-icon>
        </div>
        <div class="footer-body-addbtn">
          <q-icon class="btn-icon" name="add"></q-icon>
        </div>
        <div class="footer-body-btn">
          <q-icon
            class="btn-icon"
            name="history"
            @click="showComponent('history')"
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
import historicalPage from "./components/historicalPage.vue";

const stars = ref(4);
// const historyValue = reactive(history.state);

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

const changeShow = ref("");
const showComponent = (show) => {
  changeShow.value = show;
};
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
