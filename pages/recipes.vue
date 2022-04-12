<template>
  <v-main class="neutral" style="height: 100%">
    <v-card class="grey lighten-1 pa-sm-2 ma-sm-4">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-iterator :items="recipes" :search="search">
        <template v-slot:header>
          <v-toolbar class="mb-2" color="primary" dark flat>
            <!-- form button -->
            <v-col class="d-flex flex-between" align="right">

         <v-btn  outlined color="white" fab small class="align-right" rounded @click="dialogState = !dialogState">
           <v-icon>
           mdi-plus
         </v-icon>
         </v-btn>
         </v-col>
            <v-toolbar-title>This is a header</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row class="pa-sm-2">
            <v-col
              v-for="recipe in props.items"
              :key="recipe.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card class="grey lighten-3 black--text">
                <v-card-title class="text-center subheading font-weight-bold">
                  {{ recipe.title }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense class="white black--text">
                  <v-list-item class="black--text">
                    <v-list-item-content>description:</v-list-item-content>
                    <v-list-item-content class="align-end black--text">
                      {{ recipe.description }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="black--text">
                    <v-list-item-content>Ingredients:</v-list-item-content>
                    <v-list-item-content
                      class="align-end black--text"
                      v-for="ingredient in recipe.ingredients"
                      :key="ingredient"
                    >
                      <span>
                        {{ ingredient.name }}
                      </span>

                      <span>
                        {{ ingredient.description }}
                      </span>
                      <span>
                        {{ ingredient.type }}
                      </span>
                      <span>
                        {{ ingredient.cost }}
                      </span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-slot:footer>
          <v-toolbar class="mt-2" color="primary" dark flat>
            <v-toolbar-title class="subheading">
              This is a footer
            </v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-iterator>
      <v-dialog class="ma-sm-2 pa-md-2" v-model="dialogState">
      <v-card class="ma-sm-2 pa-md-2">
        <v-card-title class="align-center" align="center">
          Add a recipe
        </v-card-title>
        <v-form @submit.prevent="createRecipe()">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="text"
                    placeholder="Title"
                    v-model="createRecipeForm.title"
                    hint="title for your recipe"
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="text"
                    placeholder="Description"
                    v-model="createRecipeForm.description"
                    hint="description for your recipe"
                    required
                  />
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-text-field
                    type="text"
                    placeholder="Ingredients"
                    v-model="createRecipeForm.ingredients"
                    hint="Ingredients for your recipe"
                    required
                  />
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-text-field
                  type="text"
                  placeholder="Created At"
                  >
                  </v-text-field>
                 </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn type="submit"> Submit </v-btn>
            <v-btn @click="dialogState = !dialogState">Cancel</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    </v-card>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'
import { data } from 'browserslist'

type Ingredients = {
  name: string
  description: string
  type: string
  cost: number
}

type Recipe = {
  title: string
  description: string
  ingredients: Ingredients[]
}

@Component({})
export default class RecipesPage extends Vue {
  mounted() {
    this.getRecipe()
  }
  recipes: any = []
  search: string = ''
  dialogState: boolean = false

  createRecipeForm: Recipe = {
    title: '',
    description: '',
    ingredients: [],
  }
  async getRecipe(): Promise<void> {
    try {
      const endpoint = '/api/v1/recipe'
      const response = await axios.get(endpoint)
      this.recipes = response.data
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  test() {
    console.log(this.createRecipeForm.title)
  }

  async createRecipe(): Promise<void> {
    try {
      const endpoint = '/api/v1/recipe'
      const response = await axios.post(endpoint, this.createRecipeForm)
      if (response.status == 200) {
        this.dialogState = false
        this.getRecipe()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="css">
#search {
  resize: both;
}
</style>
