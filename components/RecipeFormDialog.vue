<template>
  <v-container class="d-flex flex-center" fluid>
    <v-dialog class="" v-model="recipeFormDialog">
      <v-card class="">
        <v-card-title class="pa-md-3 d-flex flex-center" align="center">
          Add a recipe
        </v-card-title>
        <v-form>
          <v-row class="ma-md-3">
            <v-text-field
              label="Recipe Name"
              class="pa-md-3"
              id="ingredients"
              v-model="createRecipeForm.title"
            />
          </v-row>

          <v-row
            v-for="(value, index) in createRecipeForm.ingredients"
            :key="index"
            class="ma-md-3"
            id="ingredient-row"
          >
            <v-btn
              v-show="index > 0"
              @click="createRecipeForm.ingredients.splice(index, 1)"
            >
              <v-icon class="mr-2">mdi-delete</v-icon>
            </v-btn>
            <v-col>
              <v-text-field
                id="ingredients"
                class="-content pa-md-3"
                label="ingredients"
                v-model="createRecipeForm.ingredients[index].name"
              >
              </v-text-field>
            </v-col>
            <v-col sm="4" md="3">
              <v-select
                :items="items"
                solo
                small-chips
                style="width: 35vw"
                label="Type"
                class="pa-md-3 mr-sm-1"
                v-model="createRecipeForm.ingredients[index].type"
                id="items"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-btn class="ma-md-3" @click="addRow()">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-row>

          <v-row
            id="description-container"
            class="d-flex flex-center flex-start"
            align="center"
          >
            <v-col>
              <v-textarea
                label="Description"
                outlined
                class="mt-3"
                v-model="createRecipeForm.description"
              />
              <v-rating hover size="18">
                <template v-slot:item="props">
                  <v-icon large @click="props.click">
                    {{
                      props.isFilled
                        ? 'mdi-bread-slice'
                        : 'mdi-bread-slice-outline'
                    }}
                  </v-icon>
                </template>
              </v-rating>
            </v-col>
          </v-row>
          <v-row
            id="btn-container"
            class="ma-sm-2 pa-sm-2 justify-space-between"
          >
            <v-col>
              <v-btn @click="addRecipe(createRecipeForm)"> Submit </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="CLOSE">Cancel</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapMutations, mapActions } from 'vuex'
import { State, namespace } from 'vuex-class'
import { Recipe } from '@/types'
import axios from 'axios'

@Component({
  methods: {
    ...mapMutations(['CLOSE']),
    ...mapActions('recipes', ['addRecipe']),
  },
})
export default class RecipeFormDialog extends Vue {
  @State recipeFormDialog!: boolean
  createRecipeForm: Recipe = {
    title: '',
    description: '',
    ingredients: [
      {
        name: '',
        description: '',
        type: '',
        cost: 0,
      },
    ],
  }
  addRow() {
    this.createRecipeForm.ingredients.push({
      name: '',
      description: '',
      type: '',
      cost: 5,
    })
  }
  items: any = ['Vegatable', 'Protein', 'Fruit', 'Dairy', 'Meat', 'Other']
}
</script>
