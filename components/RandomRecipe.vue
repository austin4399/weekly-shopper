<template>
  <v-main class="ma-md">
    <v-row class="d-flex justify-center">
      <v-btn @click="getRandomRecipe">Get Random Recipe</v-btn>
    </v-row>
    <v-col v-show="this.recipe.length > 0">
      <v-card class="grey darken-1 ma-lg-auto">
        <v-list-item v-for="item in recipe" :key="item">
          <v-list-item-content>
            <v-list-item-title class="black lighten-6">
              <p class="font-weight-thin subtitle-3">
                {{ item.title }}
              </p>
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            <v-list-item-subtitle
              v-for="ingredient in item.ingredients"
              :key="ingredient"
            >
              Ingredients:
              <v-list-item-subtitle
                v-for="(val, index) in ingredient"
                :key="index"
              >
                {{ index }}: {{ val }}
              </v-list-item-subtitle>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class HomePage extends Vue {
  recipe: any = ''
  async getRandomRecipe() {
    try {
      const recipe = await axios.get('api/v1/random')
      this.recipe = recipe.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
