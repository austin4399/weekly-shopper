<template>
  <div>
    <div v-if="pageLoading == false" class="pa-md-4 mx-lg-auto">
      <v-card class="pa-md-4 mx-lg-auto grey lighten-3" >
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
        <v-container class="d-flex flex-center" fluid>
           <v-dialog class="" v-model="dialogState">
          <v-card class="">
            <v-card-title class="pa-md-3 d-flex flex-center" align="center">
              Add a recipe
            </v-card-title>
              <v-form>
                    <v-row class="ma-md-3">
                      <v-text-field label="Recipe Name" class="pa-md-3" id="ingredients"/>
                    </v-row>



                    <v-row v-for="(value, index) in createRecipeForm.ingredients" :key="value" class="ma-md-3" id="ingredient-row">
                      <v-btn v-show="index > 0"
                        @click="createRecipeForm.ingredients.splice(index, 1)" 
                      >
                        <v-icon class="mr-2">mdi-delete</v-icon>
                      </v-btn>
                      <v-col>
                        <v-text-field id="ingredients" class="-content pa-md-3" label="ingredients">  </v-text-field>
                      </v-col>
                      <v-col sm="4" md="3">
                        <v-select
                          :items="items"
                          solo
                          small-chips
                          style="width: 35vw"
                          label="Type"
                          class="pa-md-3 mr-sm-1"
                          :v-model="colorPick()"
                          id="items"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-btn
                        class="ma-md-3"
                        @click="addRow()" 
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-row>



                  <v-row  id="description-container" class="d-flex flex-center flex-start" align="center">
                    <v-col>
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
                    </v-col>
                  </v-row>
                <v-row id="btn-container" class="ma-sm-2 pa-sm-2 justify-space-between">
                  <v-col>
                  <v-btn type="submit"> Submit </v-btn>
                  </v-col>
                  <v-col>
                  <v-btn  @click="dialogState = false">Cancel</v-btn>
                  </v-col>
                </v-row>
            </v-form>
          </v-card>
        </v-dialog>
        </v-container>
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
import {Recipe, Ingredients} from '@/types'
import {mapMutations, mapState} from 'vuex'
import RecipeCard from '@/components/RecipeCard.vue'
import { data } from 'browserslist'

@Component({
  components: {
    RecipeCard
  },
  data(){
    return{
      isMobile: false
    }
  },
  methods: {
    ...mapMutations(['OPEN', 'CLOSE']),
  }
})
export default class RecipesPage extends Vue {
  mounted() {
    this.getRecipe()
    this.pageLoading = false
    this.produceCalories()
  };
  addRow(){
    this.createRecipeForm.ingredients.push({
      name: '',
      description: '',
      type: '',
      cost: 0,
    }) 
  }
  // breakpoint method
  // beforeDestroy(){
  //   if (typeof window === "undefined") {
  //     window.removeEventListener("resize", this.onResize, {passive:  true})
  //   }
  // };

  // isMobile apart of breakpoint
     colorPick(): any {
    if (this.items == 'Vegatables'){
      this.items.style.backgroundColor = 'green'
    }
    if (this.items == 'Protein'){
      this.items.style.backgroundColor = 'red'
    }
    if (this.items == 'Fruit'){
      this.items.style.backgroundColor = 'orange'
    }
    if (this.items == 'Dairy'){
      this.items.style.backgroundColor = 'white'
    }
    if (this.items == 'Meat'){
      this.items.style.backgroundColor = 'red'
    }
    if (this.items == 'Other'){
      this.items.style.backgroundColor = 'grey'
    }
  }
  dialogState: boolean = false
  pageLoading = true
  recipes: any = []
  search: string = ''
  ingredientRows: Ingredients[] = [
    {
      name: '',
      description: '',
      type: '',
      cost: 0,
    }
  ]
  cost = number
  items: any = ['Vegatable', 'Protein', 'Fruit', 'Dairy', 'Meat', 'Other']
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
#btn-container{
  display: inline;
}
@media screen and (max-width: 700px){
    .form-card{
      height: 100%;
      width: auto;
      padding: 0.5em;
      position: relative;
      min-height: 100%;
      min-width: 100%;
      overflow: hidden;
      display: flex;
      top: 50%;
      left: 50%;

    }
    .form-card-content{
      position: absolute;

    }
    #ingredient-container{
      margin: 2%
    }
    #description-container{
      margin: 1%;
    }
    #btn-container{
      margin: 5%;
      padding: 5%;
    }
}
</style>
