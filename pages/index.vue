<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="flex flex-between grey darken-1"
      flat
      rounded
      id="inspire"
    >
      <div
        :color="
          $vuetify.breakpoint.smAndDown ? 'light-grey lighten-3' : 'transparent'
        "
        size="32"
      ></div>
      <v-tabs grow centered class="ml-n9" color="black darken-1" id="hover">
        <!-- path to weekly cart -->
        <v-tab left class="flex flex-between" to="/weeklycart">
          <v-icon class="pa-md-sm"> mdi-cart-outline </v-icon>
        </v-tab>
        <!-- path to other pages -->
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
          <v-col>
            <v-bottom-sheet v-model="sheet" inset>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey darken-1" dark v-bind="attrs" v-on="on">
                  Open Calculator
                </v-btn>
              </template>
              <v-sheet class="text-center" height="auto" persistent>
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                </v-btn>
                <div class="my-3">
                  <script
                    async
                    src="https://spendsmart.wpengine.com/calculator/init.js"
                  ></script>
                  <div
                    id="sses-calculator"
                    class="sses-calculator"
                    data-calculatordata
                  ></div>
                </div>
              </v-sheet>
            </v-bottom-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#hover:hover {
  background-color: grey;
}
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
      links: [
        {
          name: 'Random Recipe List',
          to: '/weeklycart',
          id: 'ran-rec',
        },
        {
          name: 'Ordered Recipes',
          to: '/weeklycart',
          id: 'ordered-rec',
        },
      ],
    }
  },
}
</script>
