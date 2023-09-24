<template>
  <HeaderLayout :Title="'食在好孕'" :toPage="'loginpage'"></HeaderLayout>
  <div class="absolute" style="top: 120px; width: 100%; padding: 0px 10%">
    <div style="display: flex; justify-content: center; flex-direction: column">
      <div
        style="
          text-align: center;
          font-size: 28px;
          font-weight: bolder;
          margin: 0px 10%;
        "
      >
        忘記密碼
      </div>
      <table class="LoginTable">
        <tr>
          <td>
            <q-input
              v-model="RegisterObject.account"
              dense
              outlined
              style="width: 80%"
              label="Email"
            />
          </td>
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
              <!-- to="/SetRoles" -->
              <q-btn
                rounded
                dense
                color="orange-14"
                @click="toolbar = true"
                style="
                  width: 60%;
                  margin: 5px 0px;
                  padding: 5px 0px;
                  font-size: 16px;
                "
                >驗證</q-btn
              >
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style="width: 100%; text-align: end; text-decoration: underline"
            ></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <q-dialog v-model="toolbar">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="/public/images/logo.jpeg" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">信箱驗證</span>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section>
        <a href="/SetRoles"
          >已發送連結，請到信箱點擊確認，謝謝!
        </a></q-card-section
      >
    </q-card>
  </q-dialog>
</template>
<script setup>
import HeaderLayout from "./components/HeaderLayout.vue";
import { ref } from "vue";
const isPwd = ref(true);
const toolbar = ref(false);
const RegisterObject = ref({
  name: "",
  account: "",
  password: "",
  ispassword: true,
  passwordCheck: "",
  ispasswordCheck: true,
  phone: "",
  email: "",
  birthday: "",
});
</script>
<style>
.LoginTable tr td {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
}
</style>
