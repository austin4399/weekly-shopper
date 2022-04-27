<template>
  <v-main
    align="center"
    class="main-container"
    style="height: 100%; position: relative; padding-top: 0%;"
  >
  <HomeParallax> </HomeParallax>
  </v-main>
</template>
<style>
.main-container {
  position: relative;
  height: 50vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-right: 3%;
  padding-top: 0%
}
@media screen and (max-width: 399) {
  .main-container {
    font-size: medium;
  }
}
</style>

<script lang="ts">
import { response } from 'express'
import axios from 'axios'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HomeParallax from '../components/HomeParallax.vue'
@Component({
  components: {
    HomeParallax,
  },
})
export default class IndexPage extends Vue {
  sheet: boolean = false
  mounted() {
    produceCalories()
  }
}

//  outside of class
// still waiting on new api-key
async function produceCalories() {
  try {
    const res = await axios
      .get('https://api.edamam.com/api/food-database/v2/parser', {
        params: {
          app_id: 'a477c607',
          app_key: 'b3d03a0454201b92de94a5a6165da6bc',
          ingr: 'bacon',
          nutritiontype: 'logging',
          category: 'generic-foods',
          calories: '0-700',
        },
        data: {},
        headers: {
          Accept: 'application/json',
          'Access-Control': 'Allow-Origin',
          status: 200,
        },
      })
      .then((data) => {
        console.log(data)
      })
  } catch (Error) {
    console.log(Error)
  }
  // sheet: boolean = false;
}
</script>
