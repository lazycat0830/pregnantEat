<template>
  <HeaderLayout :Title="'食在好孕'"></HeaderLayout>
  <div class="absolute" style="top: 150px; width: 100%; padding: 0px 10%">
    <div style="display: flex; justify-content: center; flex-direction: column">
      <div
        style="
          text-align: center;
          font-size: 18px;
          font-weight: bolder;
          margin: 0px 10%;
        "
      >
        登入
      </div>
      <table class="LoginTable">
        <tr>
          <td><q-input label="帳號："></q-input></td>
        </tr>
        <tr>
          <td><q-input label="密碼："></q-input></td>
        </tr>
        <tr>
          <td>
            <div
              style="
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <q-btn
                rounded
                dense
                color="orange-14"
                style="width: 60%; margin: 5px 0px; padding: 5px 0px"
                >登入</q-btn
              >
              <q-btn
                to="Register"
                rounded
                dense
                color="teal-14"
                style="width: 60%; margin: 5px 0px; padding: 5px 0px"
                >註冊</q-btn
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style="width: 100%; text-align: end; text-decoration: underline"
            >
              <span style="cursor: pointer">忘記密碼</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
</script>
<style>
.LoginTable tr td {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
}
</style>
