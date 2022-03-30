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
      </v-row>
      <v-row>
        <v-col>
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-col align="center">
    <v-main class="grey lighten-2" style="height: 100%;">
      <v-container>
        <v-row class="d-flex justify-center">
          <p
            class="text-h5 black--text pa-md-2 ma-lg-5"
          >Welcome to weekly shopper</p>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" sm="8" align="center">
            <v-sheet rounded="lg" class="flex flex-center justify-center">
              <v-img src="https://picsum.photos/1900/1080"> </v-img>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-bottom-sheet v-model="sheet" inset>
              <template v-slot:activator="{ on, attrs }">
                <v-col align="center">
                  <v-btn
                    color="deep-orange darken-1"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                  <v-icon>
                    mdi-calculator
                  </v-icon>
                  </v-btn>
                </v-col>

              </template>
              <v-sheet class="text-center" height="auto" persistent>
                <v-btn
                  color="grey darken-1"
                  fab
                  large
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-calculator </v-icon>
                </v-btn>
              </v-col>
            </template>
            <v-sheet class="text-center" height="auto" persistent>
              <v-btn
                class="mt-6"
                fab
                dark
                large
                color="error"
                @click="sheet = !sheet"
              >
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
</template>
<style>
#pic-container {
  align-content: center;
  display: flex;
}
</style>

<script lang="ts">
import { response } from 'express'
import axios from 'axios'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component({})
export default class IndexPage extends Vue {
  mounted() {
    producePrice()
  }
}

//  outside of class
// still waiting on new api-key
async function producePrice() {
  try {
    const res = await axios.get('https://grocerybear.com/getitems', {
      data: { city: 'Portland', product: 'meat', num_days: 7 },
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': '123ABC',
      },
    })
  } catch (Error) {
    console.log(Error)
  }
  sheet: boolean = false;
}
</script>
