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
                <RecipeCard :recipe="recipe"/>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
        <v-dialog v-model="dialogState">
          <v-card class="pa-md-2">
            <v-card-title class="align-center" align="center">
              Add a recipe
            </v-card-title>
              <v-form>
                <v-card-text>
                  <v-container>
                    <v-col>
                    
                    </v-col>
                  </v-container>
                </v-card-text>
                <div>
                  <v-row>
                    <v-text-field label="Ingredient"> </v-text-field>
                    <v-select
                      :items="['Vegetable', 'Fruit', 'Dairy', 'Meat', 'Other']"
                      solo
                      small-chips
                      style="width: 35vw"
                      label="Type"
                    >
                    </v-select>
                  </v-row>
                  <v-textarea label="Description" outlined class="mt-3"> </v-textarea>

                  <v-rating hover size="18">
                    <template v-slot:item="props">
                      <v-icon
                        large
                        @click="props.click"
                      >
                        {{
                          props.isFilled ? 'mdi-bread-slice' : 'mdi-bread-slice-outline'
                        }}
                      </v-icon>
                    </template>
                  </v-rating>
                <v-row class="ma-sm-2 pa-sm-2 justify-space-between">
                  <v-btn type="submit"> Submit </v-btn>
                  <v-btn @click="dialogState = false">Cancel</v-btn>
                </v-row>
              </div>
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
import { number } from 'zod'
import {Recipe} from '@/types'
import {mapMutations, mapState} from 'vuex'
import RecipeCard from '@/components/RecipeCard.vue'

@Component({
  components: {
    RecipeCard
  },
  methods: {
    ...mapMutations(['OPEN', 'CLOSE'])
  }
})
export default class RecipesPage extends Vue {
  mounted() {
    this.getRecipe()
    this.pageLoading = false
    this.produceCalories()
  }
  pageLoading = true
  recipes: any = []
  search: string = ''
  dialogState: boolean = false
  cost = number
  createRecipeForm: Recipe = {
    title: '',
    description: '',
    ingredients: [
      {
        name: '',
        description: '',
        type: '',
        cost: null
      }
    ],
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
  async produceCalories(): Promise<void>{
  try {
    const res = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
      params: {
        app_id : 'a477c607',
        app_key :'b3d03a0454201b92de94a5a6165da6bc',
        ingr : `${this.recipes.title}`,
        nutritiontype : 'logging',
        category: 'generic-foods',
        calories: '0-700'
    },
      data: {
      },
      headers: {
        'Accept': 'application/json',
        'Access-Control': 'Allow-Origin',
        'status':200
      },
    }).then(data => {
      console.log(data);
    })
  } catch (Error) {
    console.log(Error)
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
