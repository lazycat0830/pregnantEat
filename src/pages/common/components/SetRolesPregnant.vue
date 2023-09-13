<template>
  <q-stepper v-model="step" vertical color="primary" animated>
    <q-step :name="1" title="1.設定孕期：" icon="settings" :done="step > 1">
      <q-select v-model="pregnancy" :options="pregnancyOptions" />

      <q-stepper-navigation>
        <q-btn @click="step = 2" color="primary" label="確認" />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="2.不能吃的食物："
      icon="create_new_folder"
      :done="step > 2"
    >
      <q-input
        bottom-slots
        v-model="NotEatFood"
        label="食物"
        :dense="dense"
        @keyup.enter="addNotEatFoodObj()"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="addNotEatFoodObj()" />
        </template>
      </q-input>
      <div>
        <q-chip
          v-for="Food in NotEatFoodobj"
          :key="Food"
          removable
          v-model="Food.val"
          color="amber-8"
          text-color="white"
          icon="restaurant"
        >
          {{ Food.name }}
        </q-chip>
      </div>

      <q-stepper-navigation>
        <q-btn @click="step = 3" color="primary" label="確認" />
        <q-btn
          flat
          @click="step = 1"
          color="primary"
          label="上一步"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="3"
      title="3.檢測免疫力體質："
      icon="assignment"
      :done="step > 3"
    >
      <div
        style="
          padding: 5px 0px;
          display: flex;
          flex-direction: column;
          justify-content: left;
        "
      >
        <q-btn color="teal-14" style="font-size: 16px" @click="fixed = true"
          >開始檢測</q-btn
        >

        <div style="padding-top: 20px">結果：{{ constitution }}</div>
      </div>
      <q-stepper-navigation>
        <q-btn @click="step = 4" color="primary" label="確認" />
        <q-btn
          flat
          @click="step = 2"
          color="primary"
          label="上一題"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="4" title="設定成功" icon="add_comment">
      <q-stepper-navigation>
        <q-btn color="primary" label="開始使用" to="/Page/HeaderPage" />
        <q-btn
          flat
          @click="step = 3"
          color="primary"
          label="上一題"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>

  <q-dialog v-model="fixed">
    <q-card>
      <q-card-section>
        <div class="text-h6">免疫力體質檢測</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <table>
          <tr v-for="(question, index) in questionnaire" :key="index">
            <td>
              {{ question[0].Title }}
            </td>
            <td
              v-for="(option, optionIndex) in question[0].Opt"
              :key="optionIndex"
            >
              <q-radio
                v-model="questionAns['Ans' + (index + 1)]"
                :label="option.label"
                :val="option.value"
              ></q-radio>
            </td>
          </tr>
        </table>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn
          flat
          label="完成"
          color="primary"
          v-close-popup
          @click="CompareAsn"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive } from "vue";

const pregnancy = ref();
const pregnancyOptions = reactive(["孕期<12週", "孕期12-24週", "孕期>=25週"]);
const NotEatFood = ref("");
const NotEatFoodobj = ref([]);
const step = ref(1);
const fixed = ref();

const addNotEatFoodObj = () => {
  if (!NotEatFood.value) {
    return;
  }
  NotEatFoodobj.value.push({ name: NotEatFood.value, val: true });
  NotEatFood.value = "";
};

const questionnaire = ref([
  [
    {
      Title: "臉色",
      Opt: [
        { value: "hot", label: "通紅" },
        { value: "neutral", label: "良好" },
        { value: "cold", label: "暗淡" },
      ],
    },
  ],
  [
    {
      Title: "說話",
      Opt: [
        { value: "hot", label: "喜歡" },
        { value: "neutral", label: "還好" },
        { value: "cold", label: "不愛" },
      ],
    },
  ],
  [
    {
      Title: "語氣",
      Opt: [
        { value: "hot", label: "大聲" },
        { value: "neutral", label: "正常" },
        { value: "cold", label: "無力" },
      ],
    },
  ],
  [
    {
      Title: "飲水",
      Opt: [
        { value: "hot", label: "很常" },
        { value: "neutral", label: "正常" },
        { value: "cold", label: "很少" },
      ],
    },
  ],
  [
    {
      Title: "喜好",
      Opt: [
        { value: "hot", label: "喝冰" },
        { value: "neutral", label: "不分" },
        { value: "cold", label: "喝熱" },
      ],
    },
  ],
  [
    {
      Title: "舌頭",
      Opt: [
        { value: "hot", label: "厚,黃" },
        { value: "neutral", label: "苔少" },
        { value: "cold", label: "無血色" },
      ],
    },
  ],
  [
    {
      Title: "嘴巴",
      Opt: [
        { value: "hot", label: "臭,乾" },
        { value: "neutral", label: "正常" },
        { value: "cold", label: "淡,無味" },
      ],
    },
  ],
  [
    {
      Title: "精神",
      Opt: [
        { value: "hot", label: "不安" },
        { value: "neutral", label: "良好" },
        { value: "cold", label: "無" },
      ],
    },
  ],
  [
    {
      Title: "情緒",
      Opt: [
        { value: "hot", label: "煩躁" },
        { value: "neutral", label: "無" },
        { value: "cold", label: "疲勞" },
      ],
    },
  ],
  [
    {
      Title: "頭暈",
      Opt: [
        { value: "hot", label: "思緒亂" },
        { value: "neutral", label: "不易" },
        { value: "cold", label: "易" },
      ],
    },
  ],
  [
    {
      Title: "集中",
      Opt: [
        { value: "hot", label: "不集中" },
        { value: "neutral", label: "集中" },
        { value: "cold", label: "易忘記" },
      ],
    },
  ],
  [
    {
      Title: "脈搏",
      Opt: [
        { value: "hot", label: "快" },
        { value: "neutral", label: "中等" },
        { value: "cold", label: "微弱" },
      ],
    },
  ],
  [
    {
      Title: "手腳",
      Opt: [
        { value: "hot", label: "偏熱" },
        { value: "neutral", label: "溫暖" },
        { value: "cold", label: "冰冷" },
      ],
    },
  ],
  [
    {
      Title: "尿液",
      Opt: [
        { value: "hot", label: "偏黃" },
        { value: "neutral", label: "偏黃" },
        { value: "cold", label: "白清" },
      ],
    },
  ],
  [
    {
      Title: "排泄",
      Opt: [
        { value: "hot", label: "便秘" },
        { value: "neutral", label: "正常" },
        { value: "cold", label: "腹瀉" },
      ],
    },
  ],
]);

const questionAns = ref({
  Ans1: "",
  Ans2: "",
  Ans3: "",
  Ans4: "",
  Ans5: "",
  Ans6: "",
  Ans7: "",
  Ans8: "",
  Ans9: "",
  Ans10: "",
  Ans11: "",
  Ans12: "",
  Ans13: "",
  Ans14: "",
  Ans15: "",
});

const constitution = ref("");
const CompareAsn = () => {
  console.log(questionAns.value);
  const count = {
    hot: 0,
    neutral: 0,
    cold: 0,
  };
  Object.values(questionAns.value).forEach((item) => {
    if (item in count) {
      count[item]++;
    }
  });
  const maxLabel = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
  );
  console.log(maxLabel);
  if (maxLabel === "hot") {
    constitution.value = "熱性體質";
  } else if (maxLabel === "neutral") {
    constitution.value = "中性體質";
  } else {
    constitution.value = "寒性體質";
  }
};
</script>
