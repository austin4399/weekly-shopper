<template>
  <v-stepper style="height: 100%" class="grey lighten-1" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="orange">
        Pick your meals
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" color="orange">
        Add additional items
        <small>Optional</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">  </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
          <v-main class="grey lighten-3" style="height: 100%">
            <v-row class="d-flex justify-center">
              <p class="black--text">Create a shopping list</p>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-card
                class="blue-grey lighten-5 flex-column overflow-hidden"
                id="first-card"
                max-width="350"
                min-width="350"
                min-height="350"
                max-height="800"
              >
                <!-- <v-spacer></v-spacer> -->
                <RandomRecipe></RandomRecipe>
              </v-card>
            </v-row>
          </v-main>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text @click="e1 -= 1"> Go back </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text @click="e1 -= 1"> Go back </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RandomRecipe from '../components/RandomRecipe.vue'
import axios from 'axios'

@Component({
  components: {
    RandomRecipe,
  },
})
export default class WeeklyCartPage extends Vue {
  e1: number = 1
}
</script>
