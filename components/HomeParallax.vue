<template>
  <v-main style="padding-top: 0%;">
    <v-row style="padding-top: 0%;">
      <v-col class="col" style="padding-top: 0%;">
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


<!-- Tried out Sparkline component
 <v-row>
  <v-col>
    <v-card
    class="mx-auto text-center"
    color="secondary"
    dark
    max-width="600"
    style="padding-top: 0%; margin-top: 0%;"
  >
    <v-card-text>
      <v-sheet color="grey darken-3">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            {{ item.recs }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin grey--text">
        Total Recipes
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center grey--text">
      <v-btn
        block
        text
        to="/recipes"
        class="grey--text"
      >
        check them out
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row> -->

    <v-col>
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-col>
            <v-sheet
              class="light text-center"
              color="transparent"
              backround="translucent"
              height="auto"
              style="padding-top: 0%;"
            >
              <v-btn color="secondary" fab large v-bind="attrs" v-on="on">
                <v-icon class="grey--text" style="backround: grey darken-3;"> mdi-calculator </v-icon>
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
  </v-main>
</template>

<script lan="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios';
@Component({
  components: {},
  mounted(){

  }
})
export default class HomeParallax extends Vue {
  value =
   [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
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
  padding-top: 0%
}
.text {
  z-index: 1;
  padding-top: 28px;
  font-size: 30px;
}
</style>
