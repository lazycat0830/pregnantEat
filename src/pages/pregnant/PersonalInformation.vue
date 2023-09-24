<template>
  <q-card>
    <div class="row justify-center">
      <q-img :src="imgSrc"></q-img>
    </div>
    <q-card-section>
      <div>{{ Data.title }}</div>
      <div>
        <table>
          <tr>
            <td>食材1</td>
            <td>食材2</td>
            <td>食材3</td>
          </tr>
          <tr>
            <td>食材4</td>
            <td>食材5</td>
            <td>食材6</td>
          </tr>
        </table>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref } from "vue";
const imgSrc = ref("");
const Data = ref({
  title: "",
});
</script>
