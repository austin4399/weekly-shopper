<template>
    <div>
         <v-card
    class="blue-grey lighten-5 flex-colum overflow-hidden"
    justify="start"
    id="first-card"
    width="400"
  >
    <v-row
      class="text-h5 black--text justify-space-between pa-md-10"
      align="top"
    >
      <!-- random list of recipes -->
      <v-icon large color="black"> mdi-all-inclusive </v-icon>
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
    </v-row>
    <!-- <v-spacer></v-spacer> -->
   <RandomRecipe></RandomRecipe>
  </v-card>
    </div>
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
export default class WeeklyCartPage extends Vue {}
</script>
