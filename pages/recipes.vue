<template>
  <div>
    <div v-if="pageLoading == false">
      <v-card class="grey lighten-2">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-iterator
          class="mb-lg-10"
          :items="recipes"
          :search="search"
          disable-pagination
          disable-items-per-page
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row class="px-md-1 mx-md-1">
              <v-col
                v-for="recipe in props.items"
                :key="recipe.title"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card class="grey lighten-3 black--text">
                  <v-card-title class="subheading font-weight-bold pa-md-8">
                    <v-row>
                      {{ recipe.title }}
                      <v-spacer></v-spacer>
                      <v-btn small rounded fab elevation="1" color="primary">
                        <v-icon> mdi-pencil </v-icon>
                      </v-btn>
                    </v-row>
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list dense class="white black--text">
                    <v-list-item class="black--text">
                      <v-col>
                        <v-list-item-content
                          class="black--text font-weight-thin"
                        >
                          {{ recipe.description }}
                        </v-list-item-content>
                      </v-col>
                    </v-list-item>

                    <v-list-item class="black--text">
                      <v-col class="align-center">
                        <v-list-item-content class="font-weight-thin">
                          Ingredients
                        </v-list-item-content>
                        <v-list-item-content
                          class="align-end black--text"
                          v-for="ingredient in recipe.ingredients"
                          :key="ingredient"
                        >
                          <v-list-item-title>
                            <v-icon> mdi-circle-small </v-icon>
                            {{ ingredient.name }}
                          </v-list-item-title>
                          <v-list-item-subtitle class="pl-md-5">
                            {{ ingredient.description }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-col>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
        <v-dialog class="ma-sm-2 pa-md-2" v-model="dialogState">
          <v-card class="pa-md-2">
            <v-card-title class="align-center" align="center">
              Add a recipe
            </v-card-title>
            <v-form @submit.prevent="createRecipe()">
              <v-card-text>
                <v-container>
                  <v-col>
                    <v-text-field
                      type="text"
                      placeholder="Title"
                      v-model="createRecipeForm.title"
                      hint="Please give your recipe a title"
                      required
                    />
                    <v-textarea
                      type="text"
                      placeholder="Description"
                      v-model="createRecipeForm.description"
                      hint="Please give your recipe a description"
                      required
                    />
                    <v-text-field
                      type="text"
                      placeholder="Ingredients"
                      v-model="createRecipeForm.ingredients"
                      hint="Ingredients for your recipe"
                      required
                    />
                  </v-col>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-row class="ma-sm-2 pa-sm-2 justify-space-between">
                  <v-btn type="submit"> Submit </v-btn>
                  <v-btn @click="dialogState = !dialogState">Cancel</v-btn>
                </v-row>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-card>
      <v-btn
        id="floating-action-button"
        fab
        bottom
        right
        fixed
        @click="dialogState = true"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
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
    this.pageLoading = false
  }
  pageLoading = true
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
#floating-action-button {
  bottom: 80px;
}
</style>
