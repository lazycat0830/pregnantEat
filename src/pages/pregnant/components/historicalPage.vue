<template>
  <div
    v-for="Data in DataList"
    :key="Data"
    style="width: 100%"
    class="row justify-center"
  >
    <q-card
      class="my-card"
      flat
      bordered
      style="
        width: 350px;
        border: 1px #000 solid;
        border-radius: 20px;
        margin: 10px 0px;
      "
    >
      <q-img
        no-native-menu
        style="max-height: 300px"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        ><q-btn
          class="absolute all-pointer-events"
          style="top: 10px; right: 10px; font-size: 20px"
          flat
          round
          color="red"
          icon="favorite"
        />
      </q-img>

      <q-card-section style="padding-bottom: 0px">
        <div class="text-overline text-orange-9 row justify-between">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ Data.Title }}</div>
          <div>
            <q-btn flat round color="primary" icon="share" />
          </div>
        </div>
        <div class="text-caption text-grey">製作者：{{ Data.Maker }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat color="primary" style="font-size: 18px" label="再次下單" />
        <q-btn flat color="secondary" style="font-size: 18px" label="檢舉" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

const DataList = ref([
  { Title: "食譜名1", Maker: "製作者1" },
  { Title: "食譜名2", Maker: "製作者2" },
  { Title: "食譜名3", Maker: "製作者3" },
]);
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
