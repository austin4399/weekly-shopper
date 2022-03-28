<template>
    <v-main class="grey lighten-3" style="height: 100%;">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" align="center">
            <v-sheet rounded="lg" class="flex flex-center justify-center">
              <v-img src="https://picsum.photos/1900/1080"> </v-img>
            </v-sheet>
          </v-col>
          <v-col>
            <v-bottom-sheet v-model="sheet" inset>
              <template v-slot:activator="{ on, attrs }">
                <v-col align="center">
                  <v-btn 
                    color="grey darken-1" 
                    dark 
                    v-bind="attrs" 
                    v-on="on"
                  >
                    Open Calculator
                  </v-btn>
                </v-col>
                
              </template>
              <v-sheet class="text-center" height="auto" persistent>
                <v-btn 
                  class="mt-6" 
                  text 
                  color="error" 
                  @click="sheet = !sheet">
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

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class IndexPage extends Vue {
}
</script>
