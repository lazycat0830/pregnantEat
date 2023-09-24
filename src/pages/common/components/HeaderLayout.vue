<template>
  <div
    class="relative"
    style="
      width: 100%;
      height: 100px;
      background-color: #f7c5c5f1;
      color: #fff;
      box-shadow: 0px 4px 3px #8d8d8d;
    "
  >
    <div
      v-if="props.toPage"
      style="position: absolute; height: 100px; padding: 30px 20px"
    >
      <q-icon name="arrow_back_ios" size="34px" @click="toPage()"></q-icon>
    </div>
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bolder;
        text-shadow: 0px 3px 3px #8d8d8d;
      "
    >
      {{ props.Title }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  Title: {
    type: String,
    default: "",
  },
  toPage: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const toPage = () => {
  router.push({
    name: props.toPage,
  });
};
</script>
