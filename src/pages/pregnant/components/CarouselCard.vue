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
            style="width: 300px; border: 1px #000 solid; border-radius: 20px"
            class="my-card"
            flat
            bordered
          >
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

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
      style="width: 300px; border: 1px #000 solid; border-radius: 20px"
      class="my-card"
      flat
      bordered
    >
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" style="color: #000">
            {{ lookData.title }}
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
            v-for="Food in lookData.food"
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
    title: "食譜1",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜2",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜3",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜4",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜5",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜6",
    food: ["食材1", "食材2", "食材3", "食材4", "食材5", "食材6"],
    price: 200,
  },
  {
    title: "食譜7",
    food: ["食材1", "食材2", "食材3", "食材2", "食材3", "食材3"],
    price: 200,
  },
]);

const slide = ref(lorem.value[0].title);
</script>
