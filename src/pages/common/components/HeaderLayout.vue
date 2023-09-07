<template>
  <div
    class="relative"
    style="
      width: 100%;
      height: 100px;
      background-color: #ff9924c9;
      color: #fff;
      box-shadow: 0px 4px 3px #8d8d8d;
    "
  >
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
const props = defineProps({
  Title: {
    type: String,
    default: "",
  },
});
</script>
