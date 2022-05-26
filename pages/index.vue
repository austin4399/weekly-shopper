<template>
  <v-main
    align="center"
    class="main-container"
    style="height: 100%; position: relative; padding-top: 0%;"
  >
  <HomeParallax> </HomeParallax>
  <v-card v-show="activator == true" id="card">
    <v-card-title>
      <h1>
        {{this.recipeData.title}}
      </h1>
    </v-card-title>
  </v-card>
  <v-btn @click="activator = true"> Get a random recipe </v-btn>
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
import RecipeCard from '@components/RecipeCard.vue';
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
  mounted() {
    this.randomRecipe()
  }

  async randomRecipe(): Promise<void>{
  try{
    const response = await axios.get('api/v1/random');
    const randomHolder = response.data
    if (response.status == 200){
      randomHolder.push(this.recipeData)
      console.log('sucess!')
      console.log(this.recipeData)
    }
  }
  catch(error){
  }
}
}


</script>
