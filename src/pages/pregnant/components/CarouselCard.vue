<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        :navigation="false"
        padding
        arrows
        height="400px"
        class="rounded-borders"
      >
        <q-carousel-slide
          v-for="item in lorem"
          :key="item"
          :name="item.title"
          class="column no-wrap flex-center"
        >
          <q-card
            @click="open(item)"
            style="
              max-width: 350px;
              border: 1px #000 solid;
              border-radius: 20px;
            "
            class="my-card"
            flat
            bordered
          >
            <div
              style="
                max-width: 200px;
                max-height: 200px;
                width: 100%;
                margin: 0px auto;
                overflow: hidden;
              "
              class="row justify-center"
            >
              <img
                style="width: 100%; object-fit: cover; height: 100%"
                :src="item.url"
              />
            </div>

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis" style="color: #000">
                  {{ item.title }}
                </div>
              </div>
              <q-rating v-model="stars" :max="5" size="19px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <!-- <div class="text-subtitle1" style="color: #000">
                  ${{ item.price }}
                </div> -->
              <div class="text-caption text-grey">
                <q-chip
                  v-for="Food in item.food"
                  :key="Food"
                  color="amber-8"
                  text-color="white"
                  icon="restaurant"
                  style="font-size: 12px"
                >
                  {{ Food }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
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
          <q-img style="max-height: 50%" :src="lookData.url" />
          <div style="width: 60%; height: 100%; background-color: #000"></div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" style="color: #000">
            {{ lookData.title }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input filled v-model="input" mask="date" label="製作者代號">
          <template #append
            ><q-btn color="teal-14" @click="dialog = false"
              >訂購</q-btn
            ></template
          >
        </q-input>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const stars = ref(0);
const dialog = ref(false);
const lookData = ref({});

const open = (oneData) => {
  dialog.value = true;
  lookData.value = oneData;
};

const lorem = ref([
  {
    title: "番茄蛋拉麵",
    food: ["拉麵", "番茄", "鸡蛋", "高丽菜", "瘦猪肉"],
    price: 200,
    url: "/public/images/food/4/_1ec64a2f-2fe3-4c33-90f5-3ef5003b55c2.jpg",
  },
  {
    title: "青椒炒饭",
    food: ["米饭", "青椒", "鸡蛋", "葱"],
    price: 200,
    url: "/public/images/food/1/_0f88898c-301e-4cc1-8182-f0b5f877684f.jpg",
  },

  {
    title: "香菇牛肉炒麵",
    food: ["寬粉", "高麗菜", "香菇", "牛肉", "雞蛋"],
    price: 200,
    url: "/public/images/food/3/_40671623-b8c1-4126-b162-cbdc06906ff0.jpg",
  },
  {
    title: "便當",
    food: ["米飯", "花椰菜", "雞蛋", "紅蘿蔔", "瘦豬肉"],
    price: 200,
    url: "/public/images/food/2/_87c00327-1aaf-4b9a-a8b7-efb016a1a24e.jpg",
  },
  {
    title: "鹹粥",
    food: ["鹹粥", "豌豆", "紅蘿蔔", "高麗菜", "豬肉"],
    price: 200,
    url: "/public/images/food/5/_a4e8ae63-ac4e-48ae-b7d9-f7cafd60d93d.jpg",
  },
]);

const slide = ref(lorem.value[0].title);
</script>
