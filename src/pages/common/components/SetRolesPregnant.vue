<template>
  <div style="padding: 5px 0px">
    <div class="text-h6" style="font-weight: bolder">1.設定孕期：</div>
    <q-select v-model="pregnancy" :options="pregnancyOptions" />
  </div>
  <div style="padding: 5px 0px">
    <div class="text-h6" style="font-weight: bolder">2.不能吃的食物：</div>
    <q-input
      bottom-slots
      v-model="NotEatFood"
      label="食物"
      :dense="dense"
      @keyup.enter="addNotEatFoodObj()"
    >
      <template v-slot:append>
        <q-btn round dense flat icon="add" @click="addNotEatFoodObj()" />
      </template>
    </q-input>
    <div>
      <q-chip
        v-for="Food in NotEatFoodobj"
        :key="Food"
        removable
        v-model="Food.val"
        color="amber-8"
        text-color="white"
        icon="restaurant"
      >
        {{ Food.name }}
      </q-chip>
    </div>
    <div
      style="
        padding: 5px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
      "
    >
      <div class="text-h6" style="font-weight: bolder">3.檢測免疫力體質：</div>
      <q-btn rounded color="teal-14" style="font-size: 16px">開始檢測</q-btn>
    </div>
    <div class="text-h6" style="font-weight: bolder">體質：</div>
  </div>
  <div style="display: flex; justify-content: center">
    <q-btn
      rounded
      color="orange-13"
      style="width: 80%; margin-top: 50px; font-size: 20px"
      >開始使用</q-btn
    >
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const pregnancy = ref();
const pregnancyOptions = reactive(["孕期<12週", "孕期12-24週", "孕期>=25週"]);
const NotEatFood = ref("");
const NotEatFoodobj = ref([]);

const addNotEatFoodObj = () => {
  if (!NotEatFood.value) {
    return;
  }
  NotEatFoodobj.value.push({ name: NotEatFood.value, val: true });
  NotEatFood.value = "";
};
</script>
