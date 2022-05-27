<template>
  <v-main style="padding-top: 0%">
    <v-row style="padding-top: 0%">
      <v-col class="col" style="padding-top: 0%">
        <v-container
          fluid
          elevation="20"
          class="video-container"
          align="center"
        >
          <iframe
            class="video"
            src="https://giphy.com/embed/giXLnhxp60zEEIkq8K"
            frameBorder="0"
          >
          </iframe>
          <v-text
            elevation="20"
            class="font-weight-light text d-flex justify-center black--text"
            align="center"
          >
            Weekly shopper
            <v-icon size="29px"> mdi-cart-outline </v-icon>
          </v-text>
        </v-container>
      </v-col>
    </v-row>
    <v-col>
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-col>
            <v-sheet
              class="light text-center"
              color="transparent"
              backround="translucent"
              height="auto"
              style="padding-top: 0%"
            >
              <v-btn color="secondary" fab large v-bind="attrs" v-on="on">
                <v-icon class="grey--text" style="backround: grey darken-3">
                  mdi-calculator
                </v-icon>
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
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-btn
            round
            color="secondary"
            class="secondary"
            @click="activator = true"
          >
            <v-icon class="grey--text" style="backround: grey darken-3">
              mdi-help-circle
            </v-icon>
          </v-btn>
          <v-btn
            class="secondary"
            color="secondary"
            v-show="activator == true"
            @click="activator = false"
          >
            <v-icon class="grey--text" style="backround: grey darken-3"> mdi-cancel </v-icon>
          </v-btn>
          <v-card
            class="secondary black--text font-weight-light"
            v-show="activator == true"
            v-for="objects in recipeData"
            :key="objects"
            style="height: 90%"
            id="card"
          >
            <v-card-title class="subheading font-weight-light pa-md-8">
              <v-row>
                title:
                {{ objects.title }}
              </v-row>
            </v-card-title>

            <v-divider></v-divider>

            <v-list dense class="white black--text">
              <v-list-item class="black--text">
                <v-col>
                  <v-list-item-content class="black--text font-weight-thin">
                    Recipe description:
                    {{ objects.description }}
                  </v-list-item-content>
                </v-col>
              </v-list-item>

              <v-list-item class="black--text">
                <v-col class="align-center">
                  <v-list-item-content class="font-weight-thin">
                    Ingredients:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end black--text"
                    v-for="(ingredient, index) in objects.ingredients"
                    :key="index"
                  >
                    <v-list-item-title>
                      <v-icon> mdi-circle-small </v-icon>
                      name:
                      {{ ingredient.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="pl-md-5">
                      description:
                      {{ ingredient.description }}
                    </v-list-item-subtitle>
                    <v-list-subtitle>
                      type:
                      {{ ingredient.type }}
                    </v-list-subtitle>
                    <v-list-subtitle>
                      cost:
                      {{ ingredient.cost }}
                    </v-list-subtitle>
                  </v-list-item-content>
                </v-col>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component({
  components: {},
})
export default class HomeParallax extends Vue {
  recipeData: Array<any> = []
  activator: boolean = false
  sheet: boolean = false
  mounted() {
    this.randomRecipe()
  }

  async randomRecipe(): Promise<void> {
    try {
      const response = await axios.get('api/v1/random')
      const randomHolder = response.data
      this.recipeData.push(randomHolder[0])
      if (response.status == 200) {
        console.log('sucess!')
      }
      console.log(this.recipeData)
    } catch (error) {}
  }
}
</script>

<style>
.video-container {
  position: relative;
  height: 50vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-right: 3%;
}
.video {
  position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  align-items: start;
  padding-top: 0%;
}
.text {
  z-index: 1;
  padding-top: 28px;
  font-size: 30px;
}
</style>
