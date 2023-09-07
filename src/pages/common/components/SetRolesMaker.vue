<template>
  <div style="padding: 5px 0px">
    <div class="text-h6" style="font-weight: bolder">1.使用途徑：</div>
    <q-radio label="個人用" v-model="WayUse" val="personal"></q-radio>
    <q-radio label="商業用" v-model="WayUse" val="commercial"></q-radio>
    <q-input
      style="padding: 5px 0px"
      v-if="WayUse === 'commercial'"
      label="店家地址"
      v-model="StoreAddress"
    ></q-input>
    <q-file
      v-if="WayUse === 'commercial'"
      style="padding: 5px 0px"
      color="teal"
      filled
      label="商家證明"
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" />
      </template>
    </q-file>
  </div>
  <div style="padding: 5px 0px">
    <div class="text-h6" style="font-weight: bolder">2.現有廚具：</div>
    <q-input
      bottom-slots
      v-model="NotEatFood"
      label="廚具"
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
    <div style="padding: 5px 0px">
      <div class="text-h6" style="font-weight: bolder">3.現有食材 ：</div>
      <q-file style="padding: 5px 0px" color="teal" filled label="食材匯入">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
      </q-file>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <q-btn rounded color="orange-13" style="width: 80%; font-size: 20px"
      >開始使用</q-btn
    >
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const WayUse = ref("personal");
const NotEatFoodobj = ref([]);

const addNotEatFoodObj = () => {
  if (!NotEatFood.value) {
    return;
  }
  NotEatFoodobj.value.push({ name: NotEatFood.value, val: true });
  NotEatFood.value = "";
};
</script>
