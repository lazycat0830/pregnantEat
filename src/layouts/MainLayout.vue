<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 上方導覽列 -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer()"
        />
        <q-toolbar-title><h5>食在好孕</h5></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- 左側導覽列 -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
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
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="public\images\Account\accountimg.png" />
          </q-avatar>
          <div class="text-weight-bold">{{ Account }}</div>
          <div>{{ Role }}</div>
        </div>
      </q-img>
    </q-drawer>

    <!-- 中間主畫面 -->
    <q-page-container>
      <!-- 主要顯示的components -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import nav from "./NavCollection";

const leftDrawerOpen = ref(false);
const Account = ref("名字");
const Role = ref("身分");

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const navItem = ref(nav);
</script>
