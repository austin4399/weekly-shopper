<template>
  <v-main align="center" class="grey lighten-3" style="height: 100%">
    <v-container>
      <v-row
        align-content-lg="center"
        class="flex flex-center"
        id="pic-container"
      >
        <v-col class="align-content-lg" cols="12" sm="8" align="center">
          <v-sheet rounded="lg" class="flex flex-center justify-center">
            <v-img src="https://picsum.photos/1900/1080"> </v-img>
          </v-sheet>
        </v-col>
        <v-col>
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">

              <v-col>
                <v-sheet
                  class="light text-center"
                  color="transparent"
                  backround="translucent"
                  height="auto"
                >
                  <v-btn
                    color="grey darken-1"
                    fab
                    large
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon> mdi-calculator </v-icon>
                  </v-btn>
                </v-sheet>
              </v-col>
            </template>
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
          </v-bottom-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style>
#pic-container {
  align-content: center;
  display: flex;
}
@media screen and (max-width: 399) {
  #pic-container {
    font-size: medium;
  }
}
</style>

<script lang="ts">
import { response } from 'express'
import axios from 'axios'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component({})
export default class IndexPage extends Vue {
  sheet: boolean = false;
  mounted() {
    produceCalories()
  }
}

//  outside of class
// still waiting on new api-key
async function produceCalories() {
  try {
    const res = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
      params: {
        app_id : 'a477c607',
        app_key :'b3d03a0454201b92de94a5a6165da6bc',
        ingr : 'bacon',
        nutritiontype : 'logging',
        category: 'generic-foods',
        calories: '0-700'
    },
      data: {
      },
      headers: {
        'Accept': 'application/json',
        'Access-Control': 'Allow-Origin',
        'status':200
      },
    }).then(data => {
      console.log(data);
    })
  } catch (Error) {
    console.log(Error)
  }
  // sheet: boolean = false;
}
</script>
