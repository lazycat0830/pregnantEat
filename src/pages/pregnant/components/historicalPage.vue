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
      <div
        style="
          max-width: 200px;
          max-height: 200px;
          width: 100%;
          margin: 0px auto;
        "
        class="row justify-center"
      >
        <img
          style="width: 100%; object-fit: cover; height: 100%"
          :src="Data.url"
        />
      </div>

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
        <!-- <q-btn flat color="primary" style="font-size: 18px" label="再次下單" /> -->
        <q-btn
          flat
          color="secondary"
          style="font-size: 18px"
          label="再次生成"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";

const DataList = ref([
  {
    Title: "番茄蛋拉麵",
    Maker: "中央廚房",
    url: "/public/images/food/4/_1ec64a2f-2fe3-4c33-90f5-3ef5003b55c2.jpg",
  },
  {
    Title: "香菇牛肉炒麵",
    Maker: "中央廚房",
    url: "/public/images/food/3/_40671623-b8c1-4126-b162-cbdc06906ff0.jpg",
  },
  {
    Title: "便當",
    Maker: "中央廚房",
    url: "/public/images/food/2/_87c00327-1aaf-4b9a-a8b7-efb016a1a24e.jpg",
  },
]);
</script>
<style>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
