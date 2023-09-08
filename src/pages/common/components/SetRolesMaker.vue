<template>
  <q-stepper v-model="step" vertical color="primary" animated>
    <q-step :name="1" title="1.設定用途：" icon="settings" :done="step > 1">
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

      <q-stepper-navigation>
        <q-btn @click="step = 2" color="primary" label="確認" />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="2.現有廚具："
      icon="create_new_folder"
      :done="step > 2"
    >
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
          icon="soup_kitchen"
        >
          {{ Food.name }}
        </q-chip>
      </div>

      <q-stepper-navigation>
        <q-btn @click="step = 3" color="primary" label="確認" />
        <q-btn
          flat
          @click="step = 1"
          color="primary"
          label="上一步"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="3" title="3.現有食材 ：" icon="assignment" :done="step > 3">
      <q-file style="padding: 5px 0px" color="teal" filled label="食材匯入">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
      </q-file>

      <q-stepper-navigation>
        <q-btn @click="step = 4" color="primary" label="確認" />
        <q-btn
          flat
          @click="step = 2"
          color="primary"
          label="上一題"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="4" title="設定成功" icon="add_comment">
      <q-stepper-navigation>
        <q-btn color="primary" label="開始使用" to="/Page/HeaderPage" />
        <q-btn
          flat
          @click="step = 3"
          color="primary"
          label="上一題"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>
<script setup>
import { ref, reactive } from "vue";
const step = ref(1);
const WayUse = ref("personal");
const NotEatFoodobj = ref([]);
const NotEatFood = ref("");

const addNotEatFoodObj = () => {
  if (!NotEatFood.value) {
    return;
  }
  NotEatFoodobj.value.push({ name: NotEatFood.value, val: true });
  NotEatFood.value = "";
};
</script>
