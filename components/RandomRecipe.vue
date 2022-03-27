<template>
  <div>
      <div>
          <v-btn>Get Random Recipe</v-btn>
      </div>
    <v-col v-show="this.recipe.length > 0">
      <v-card class="red lighten-1">
        <v-list-item v-for="item in recipe" :key="item">
          <v-list-item-content>
            <v-list-item-title class="black lighten-3">{{
              item.title
            }}</v-list-item-title>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class HomePage extends Vue {
  recipe: any = ''
  async beforeCreate() {
    console.log('beforeCreate')
    const recipe = await axios.get('api/v1/random')
    this.recipe = recipe.data
    console.log(recipe)
  }
}
</script>
