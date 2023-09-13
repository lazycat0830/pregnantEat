<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 上方導覽列 -->

    <!-- 左側導覽列 -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 180px);
          margin-top: 180px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            v-for="item in navItem"
            :key="item"
            clickable
            v-ripple
            :to="item.url"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" :color="item.color" />
            </q-item-section>
            <q-item-section> {{ item.title }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="\public\images\layoutsgb\bg2.jpg"
        style="height: 180px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="\public\images\Account\S__33284101_0.jpg" />
          </q-avatar>
          <div class="text-weight-bold" style="color: #000">{{ Account }}</div>
          <div style="color: #000">{{ Role }}</div>
        </div>
      </q-img>
    </q-drawer>

    <!-- 中間主畫面 -->
    <q-page-container>
      <!-- 主要顯示的components -->
      <router-view
        :leftDrawerOpen="leftDrawerOpen"
        :toggleLeftDrawer="toggleLeftDrawer"
      />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import PregnantNav from "./PregnantNavCollection";
import MakerNav from "./MakerNavCollection";
import AdminNav from "./AdminCollection";

const Account = ref("中央廚房");
const Role = ref("製作者");

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const navItem = ref(MakerNav);

const $q = useQuasar();
$q.addressbarColor.set("#a2e3fa");
</script>
