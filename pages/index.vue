<template>
  <v-main id="main-container" shrink class="overflow-hidden">
    <div class="bg-transparent col" align="center">
      <!-- will add pictures to parallax when i figure out how to load static files  -->

      <v-parallax
        dark
        class="overflow-hidden"
        src="https://picsum.photos/1900/1080?random"
        align="center"
        id="parallax"
        shrink
      >
        <v-row align="center" class="d-flex flex-center text-black">
          <v-col align="inherit" id="wheel-txt">
            <v-title> Weekly Recipes Made Easy </v-title>
            <h3>Click below to find a recipe for you</h3>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <!-- food calculator -->
    <v-spacer></v-spacer>
    <div
      class="flex-row d-flex d-inline-flex flex-center overflow-hidden"
      color="primary"
      justify="space-around"
      align="center"
      id="card-container"
    >
      <v-card
        class="blue-grey lighten-5 flex-colum d-flex justify-start black--text overflow-hidden"
        justify="start"
        id="first-card"
        width="400"
      >
        <span class="text-h5">
          <!-- generated list of recipes  -->
          <v-icon large color="black">
            mdi-format-list-bulleted
          </v-icon>
        </span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon class="black--text">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title> recipes </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
      <v-card class="flex-column d-flex overflow-hidden" shrink="auto">
        <v-col>
          <script
            async
            src="https://spendsmart.wpengine.com/calculator/init.js"
          ></script>
          <div
            id="sses-calculator"
            class="d-flex d-flex-centered"
            data-calculatordata
          ></div>
        </v-col>
      </v-card>
      <v-card
        class="blue-grey lighten-5 flex-colum d-flex justify-start overflow-hidden"
        justify="start"
        id="first-card"
        width="400"
      >
        <span class="text-h5 black--text" align="center">
          <!-- random list of recipes -->
          <v-icon large color="black"> mdi-all-inclusive </v-icon>
        </span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon class="black--text">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title> recipes </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
    </div>
    <!-- <v-card v-for="cards in recipeCards"
  :key="cards"
  height = "500"
  width="500"
  class="d-flex text-white"
  >
  <v-title>
    {{recipeCards.title}}
  </v-title>
    <v-subtitle>
      {{ recipeCards.decription}} @{{ recipeCards.title}}
    </v-subtitle>
    <v-card-actions>
      {{recipeCards.description}}
    </v-card-actions>
</v-card> -->
  </v-main>
</template>
<style>
#wheel-txt {
  color: black;
}
#first-card {
  padding: 0.5em;
  margin: 0.5em;
  justify-content: left;
}
@media screen and (max-width: 400px){
    #main-container{
      display: flex;
      size: auto;
      overflow: hidden;
    }
    #parallax{
      display: flex;
      size: auto;
      overflow: hidden;
    }
    #card-container{
      display: flex;
      size: auto;
      overflow: hidden;
    }
}
</style>

<script>
import { mdiAllInclusiveBox } from '@mdi/js';
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
  return {
      recipeCards: [
      {
        title: 'Random Recipes',
        id: 'Random',
        description: 'Pick and choose a random recipe from our list of recipes',
      },
      {
        title: 'Pick from our selection of recipes',
        id: 'List',
        description:
          'Choose a recipe from our list of recipes, we hope you enjoy!',
      },
    ],
  }
}
}
</script>
