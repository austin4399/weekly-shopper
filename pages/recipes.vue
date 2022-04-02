<template>
  <v-main style="height: 100%" class="grey lighten-2">
    <v-row class="d-flex align-end">
      <v-col class="col-4"> </v-col>
      <v-col>
        <v-autocomplete
          id="search"
          dense
          filled
          rounded
          class="white ma-md-10 text--black"
        ></v-autocomplete>
      </v-col>
    </v-row>

    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="recipe in recipes"
        :key="recipe"
        class="grey lighten-1"
      >
        <v-expansion-panel-header>
          {{ recipe.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            dense
            :headers="headers"
            :items="recipe"
            item-key="title"
            class="grey"
          >
            <template v-slot:item.ingredients="{ item }">
              <v-card
                v-for="(props, index) in item.ingredients"
                :key="index"
                class="ma-md-2 elevation-0 grey"
              >
                <div v-for="prop in props" :key="prop">
                  {{ prop }}
                </div>
              </v-card>
            </template>
          </v-data-table>
          {{ recipe }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class RecipesPage extends Vue {
  mounted() {
    this.getRecipe()
  }

  recipes: any = []

  async getRecipe(): Promise<void> {
    try {
      const endpoint = '/api/v1/random'
      const response = await axios.get(endpoint)
      this.recipes.push(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  headers = [
    { text: 'description', value: 'description' },
    // { text: 'ID', value: '_id' },
    { text: 'Created at', value: 'createdAt' },
    { text: 'updated At', value: 'updatedAt' },
    { text: 'Ingredients', value: 'ingredients' },
    // { text: 'title', value: 'title' },
  ]
}
</script>

<style lang="css">
#search {
  resize: both;
}
</style>
