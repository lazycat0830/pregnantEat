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
      <div class="absolute row justify-center" style="top: 163px; width: 100%">
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
        <div class="footer-body-addbtn" @click="dialog = !dialog">
          <q-icon class="btn-icon" name="add"></q-icon>
        </div>
        <div class="footer-body-btn-click">
          <q-icon
            class="btn-icon"
            name="history"
            @click="showComponent('history')"
          ></q-icon>
        </div>
      </div>
    </div>
  </div>
  <q-dialog
    v-model="dialog"
    position="bottom"
    style="border-top-right-radius: 15px; border-top-left-radius: 15px"
  >
    <q-card>
      <div
        style="
          display: flex;
          justify-content: center;
          width: 100%;
          font-size: 18px;
        "
      >
        下訂日期：{{ nowDate }}
      </div>
      <div
        style="
          display: flex;
          justify-content: center;
          width: 100%;
          font-size: 20px;
          font-weight: bolder;
        "
      >
        請選擇主食
      </div>
      <div class="q-pa-md">
        <div
          class="row justify-center q-gutter-sm"
          style="overflow: hidden; max-height: 300px; overflow-y: scroll"
        >
          <div
            v-for="index in inView.length"
            :key="index"
            :data-id="index - 1"
            class="example-item q-pa-sm flex flex-center relative-position"
            v-intersection="onIntersection"
          >
            <transition name="q-transition--scale">
              <q-card v-if="inView[index - 1]">
                <img
                  src="/public/images/food/main/shutterstock_710865547.jpg"
                />

                <q-card-section>
                  <div style="display: flex; justify-content: space-between">
                    <div class="text-h6">主食 #{{ index }}</div>
                    <div>
                      <q-btn color="teal-14" @click="toGenerate">確定</q-btn>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </transition>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import { useRouter } from "vue-router";

import CarouselCard from "./components/CarouselCard.vue";
import historicalPage from "./components/historicalPage.vue";

const inView = ref(Array.apply(null, Array(10)).map((_) => false));
const date = new Date();
const nowDate = ref(
  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
);
const dialog = ref(false);
const stars = ref(4);
// const historyValue = reactive(history.state);

const onIntersection = (entry) => {
  const index = parseInt(entry.target.dataset.id, 10);
  setTimeout(() => {
    inView.value.splice(index, 1, entry.isIntersecting);
  }, 50);
};

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
  fruit: { cheacked: false, label: "水果", color: "indigo-5" },
  vegetable: { cheacked: false, label: "蔬菜", color: "teal-5" },
  meat: { cheacked: false, label: "肉類", color: "orange-5" },
  egg: { cheacked: false, label: "蛋", color: "red-5" },
});

const selection = computed(() => {
  return Object.keys(desert)
    .filter((type) => desert[type] === true)
    .join(", ");
});

const changeShow = ref("home");
const showComponent = (show) => {
  changeShow.value = show;
};

const toGenerate = () => {
  router.push({
    name: "generateProd",
  });
};
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}

.example-item {
  height: 290px;
  width: 290px;
}
</style>
