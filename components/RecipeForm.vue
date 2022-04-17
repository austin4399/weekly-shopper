<template>
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
                      v-model="createRecipeForm.ingredients.name"
                      hint="Ingredients for your recipe"
                      required
                    />
                    <v-file-input accept="img/png, image/jpeg, image/bmp">
                    </v-file-input>
                    <v-text-field
                      type="text"
                      placeholder="Ingredients"
                      v-model="createRecipeForm.ingredients.description"
                      hint="Ingredients for your recipe"
                      required
                    />
                    <v-text-field
                      type="text"
                      placeholder="Ingredients"
                      v-model="createRecipeForm.ingredients.type"
                      hint="Ingredients for your recipe"
                      required
                    />
                    <v-text-field
                      type="number"
                      placeholder="cost"
                      v-model="createRecipeForm.ingredients.cost"
                      hint="Ingredients for your recipe"
                      required
                    />
                  </v-col>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-row class="ma-sm-2 pa-sm-2 justify-space-between">
                  <v-btn type="submit"> Submit </v-btn>
                  <v-btn @click="close">Cancel</v-btn>
                </v-row>
              </v-card-actions>
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

          <v-rating v-model="createRecipeForm.cost" hover size="18">
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
          <div>
            {{rating}}
          </div>
        </div>
        </v-form>
    </v-card>
</template>

<script lang='ts'>

import {Component, Prop, Vue} from 'vue-property-decorator';
import {Recipe, Ingredients} from '@/types';
@Component
export default class RecipeForm extends Vue {
  createRecipeForm: Recipe = {
    title: '',
    description: '',
    ingredients: [
      {
        name: '',
        description: '',
        type: '',
        cost: ''
      }
    ],
  }
}