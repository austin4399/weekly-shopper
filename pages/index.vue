
<template>
<v-main>
<div class = "bg-transparent col" align = "center">
  <!-- will add pictures to parallax when i figure out how to load static files  -->

   <v-parallax dark class="overflow-hidden" src ="https://picsum.photos/1900/1080?random" align = "center">
    <v-row align = "center" class ="d-flex flex-center text-black" >
      <v-col align = "inherit" id = "wheel-txt">
        <v-title>
          Weekly Recipes Made Easy
        </v-title>
        <h3>
          Click below to find a recipe for you
        </h3>
      </v-col>
    </v-row>
  </v-parallax>
</div>
<!-- food calculator -->
<v-spacer></v-spacer>
<div class ="d-flex d-inline-flex flex-center" align = "center">
   <v-card class="d-flex" shrink = "auto">
  <v-col>
  <script async src="https://spendsmart.wpengine.com/calculator/init.js"></script>
  <div id="sses-calculator" class="d-flex d-flex-centered" data-calculatordata></div>
  </v-col>
  </v-card>
  <!-- <v-card class="d-flex text-white">

  <v-card v-for="cards in recipeCards"
  :key="cards"
  :id="recipeCards.id"
  height = 200
  class="text-white"
  >
  <v-title>
    {{recipeCards.title}}
  </v-title>
    <v-subtitle>
      {{recipeCards.randomRecipe}}
    </v-subtitle>
    <v-card-actions>
      {{recipeCards.description}}
    </v-card-actions>
</v-card>
  </v-card> -->


</div>
</v-main>
</template>
<style>
#wheel-txt{
  color: black
}
</style>

<script>
export default {
  name: 'IndexPage',
  layout:'default',
  data(){
    return{
    recipeCards: [{
          id: "random-rec",
          title: "Random Recipes",
          description: "randomized recipes for you to choose from",
          class: "bg-primary text-white"
        ,
    }
    ]
  }
}
};
</script>
