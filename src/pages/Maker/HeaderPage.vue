<template>
    <div class=column item-center justify-center>
<div v-for="data in AllData" ：key="data">
            <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
/>
        </q-card-section>
        <div>
            <div>{{data.Title}}</div>
            <div>
                <q-chip v-for="food in data.foodList" :key="food" color="primary" text-color="white" icon="event">
    {{food.value}}
      </q-chip>
      
      <q-btn>查看食譜</q-btn>
</div>
            </div>
        </div>
      </q-card-section>
    </q-card>
    </div>

</template>
<script>
    import {ref} form "vue";
    
    const AllData=ref([]);
    AllData.value=[
        {Title:"標題1",foodList:["食材1","食材2","食材3","食材4","食材5","食材6"]}
        ]
</script>
