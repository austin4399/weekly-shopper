<template>
  <v-container class="d-flex flex-center" fluid>
    <v-dialog class="" v-model="editRecipeFormDialog" v-if="editRecipe">
      <v-card class="">
        <v-card-title class="pa-md-3 d-flex flex-center" align="center">
          Edit a recipe
        </v-card-title>
        <v-form @submit.prevent="submitEdit(editRecipe)">
          <v-row class="ma-md-3">
            <v-text-field
              label="Recipe Name"
              class="pa-md-3"
              id="ingredients"
              :value="editRecipe.title"
            />
          </v-row>

          <v-row
            v-for="(value, index) in editRecipe.ingredients"
            :key="index"
            class="ma-md-3"
            id="ingredient-row"
          >
            <v-btn
              v-show="index > 0"
              @click="editRecipe.ingredients.splice(index, 1)"
            >
              <v-icon class="mr-2">mdi-delete</v-icon>
            </v-btn>
            <v-col>
              <v-text-field
                id="ingredients"
                class="-content pa-md-3"
                label="ingredients"
                :value="editRecipe.ingredients[index].name"
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
                :value="editRecipe.ingredients[index].type"
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
                :value="editRecipe.description"
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
              <v-btn @click="addRecipe(editRecipe)"> Submit </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="CLOSE_EDIT">Cancel</v-btn>
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
// TO DO: Add get() and set() for each form property
// for more info see the link below
// https://vuex.vuejs.org/guide/forms.html

const recipesModule = namespace('recipes')
@Component({
  methods: {
    ...mapMutations('recipes', ['CLOSE_EDIT']),
    ...mapActions('recipes', ['addRecipe', 'submitEdit']),
  },
})
export default class EditRecipeFormDialog extends Vue {
  @recipesModule.State editRecipeFormDialog!: boolean
  @recipesModule.State editRecipe!: Recipe

  // addRow() {
  //   this.editRecipe.ingredients.push({
  //     name: '',
  //     description: '',
  //     type: '',
  //     cost: 5,
  //   })
  // }
  items: any = ['Vegatable', 'Protein', 'Fruit', 'Dairy', 'Meat', 'Other']
}
</script>
