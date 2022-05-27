<template>
  <v-main
    align="center"
    class="main-container"
    style="height: 100%; position: relative; padding-top: 0%;"
  >
  <HomeParallax/>
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
  activator: boolean = false
  recipeData: Object = {}
  computed: any = {
    randomRecipe(){
      this.recipeData[0]
      console.log(this.recipeData)
    }
  }
}
</script>
