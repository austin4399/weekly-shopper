<template>
  <v-app id="inspire">
    <v-app-bar app color="flex flex-between grey darken-1" flat rounded id="inspire">
      <div
        :color="
          $vuetify.breakpoint.smAndDown ? 'light-grey darken-3' : 'transparent'
        "
        size="32"
      >
      </div>
      <v-tabs grow centered class="ml-n9" color="black darken-1">
              <!-- path to weekly cart -->
        <v-tab left class="flex flex-between" to="/weeklycart">
          <v-icon class="pa-md-sm"> mdi-cart-outline </v-icon>
        </v-tab>
        <v-tab v-for="link in links" :key="link" :to="link.to">
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" align="center" class="flex flex-center">
            <v-sheet rounded="lg" class="flex flex-center justify-center">
              <v-img src="https://picsum.photos/1900/1080"> </v-img>
              <!--  -->
            </v-sheet>
          </v-col>
          <v-col cols="12" sm="4" align="center">
            <v-sheet rounded="lg" class="flex flex-center">
              <v-card
                class="blue-grey lighten-5 flex-colum d-flex justify-start overflow-hidden pa-md"
                justify="start"
                id="first-card"
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
              <!---->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@media screen and (max-width: 400px) {
  #main-container {
    display: flex;
    size: auto;
    overflow: hidden;
  }
}
</style>

<script>
import { mdiAllInclusiveBox, mdiCartOutline } from '@mdi/js'
export default {
  name: 'IndexPage',
  layout: 'none',
  data() {
    return {
      recipeCards: [
        {
          title: 'Random Recipes',
          id: 'Random',
          description:
            'Pick and choose a random recipe from our list of recipes',
        },
        {
          title: 'Pick from our selection of recipes',
          id: 'List',
          description:
            'Choose a recipe from our list of recipes, we hope you enjoy!',
        },
      ],
      links: [{
        name: "Random Recipe List",
        to: "/weeklycart",
        id: "ran-rec"
      },
      {
        name: "Ordered Recipes",
        to: "/weeklycart",
        id: "ordered-rec"
      }]
    }
  },
}
</script>
