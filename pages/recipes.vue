<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
       v-for="recipe in recipes"
      :key="recipe"
      :headers="headers"
      :items="recipe"
      :search="search"
    >
     <template v-slot:expanded-item="{ header, items }">
      <td :colspan="item.length">
        More info about {{ recipe.ingredients }}
      </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'
import { data } from 'browserslist'
@Component({})
export default class RecipesPage extends Vue {
  mounted() {
    this.getRecipe()
  }
  data(){
    return {
      search: ''
    }
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
  expanded = []
  singleExpand = false
  search = ''
  headers = [
    { text: 'description', value: 'description' },
    // { text: 'ID', value: '_id' },
    { text: 'Created at', value: 'createdAt' },
    { text: 'updated At', value: 'updatedAt' },
    { text: 'Ingredients', value: 'ingredients' },
    { text: '', value: 'data-table-expand '}
    // { text: 'title', value: 'title' },
  ]
  // data (){
  //   return {
  //     dialog: false,
  //     dialogDelete: false,
  //     newItem: {
  //       title: '',
  //       description: '',
  //       ingredients: ''
  //     }
  //   }
  // },
  // computed: {
  //   formTitle () {
  //     return this.editedIndex === -1? 'New Recipe'
  //   },
  // },
  // editedIndex: number = -1,
  //     save () {
  //       if (this.editedIndex > -1) {
  //         Object.assign(this.recipes[this.editedIndex], this.newItem)
  //       } else {
  //         this.recipes.push(this.newItem)
  //       }
  //       this.close()
  //     },
  //     watch: {
  //     dialog (val) {
  //       val || this.close()
  //     },
  //     dialogDelete (val) {
  //       val || this.closeDelete()
  //     },
  //   },
};
</script>

<style lang="css">
#search {
  resize: both;
}
</style>
