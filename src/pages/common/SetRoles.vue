<template>
  <HeaderLayout :Title="'身分設定'"></HeaderLayout>
  <div class="absolute" style="top: 100px; width: 100%">
    <q-tabs
      v-model="tab"
      align="justify"
      style="background-color: #00ea8c"
      :breakpoint="0"
    >
      <q-tab name="Pregnant" label="孕婦" />
      <q-tab name="Maker" label="食譜製作者" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Pregnant"
        ><SetRolesPregnant></SetRolesPregnant>
      </q-tab-panel>
      <q-tab-panel name="Maker">
        <SetRolesMaker></SetRolesMaker>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import SetRolesMaker from "./components/SetRolesMaker.vue";
import SetRolesPregnant from "./components/SetRolesPregnant.vue";
import { ref } from "vue";

const tab = ref("Pregnant");
</script>
