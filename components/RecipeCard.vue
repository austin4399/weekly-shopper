<template>
  <div class="d-flex space-between">
    <v-card class="secondary black--text font-weight-light">
      <v-card-title class="subheading font-weight-light pa-md-8">
        <v-row>
          {{ recipe.title }}
          <v-spacer></v-spacer>
          <v-btn small rounded fab elevation="1" color="primary">
            <v-icon @click="editRecipe(recipe)"> mdi-pencil </v-icon>
          </v-btn>
        </v-row>
      </v-card-title>

      <v-divider></v-divider>

      <v-list dense class="white black--text">
        <v-list-item class="black--text">
          <v-col>
            <v-list-item-content class="black--text font-weight-thin">
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
              v-for="(ingredient, index) in recipe.ingredients"
              :key="index"
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapMutations, mapActions } from 'vuex'
import { Mutation, namespace } from 'vuex-class'
import { Recipe } from '@/types'

const recipeModule = namespace('recipes')

@Component({
  props: {
    recipe: { type: Object as () => Recipe, required: true },
  },
  methods: {
    ...mapActions('recipes', ['editRecipe']),
  },
})
export default class RecipeCard extends Vue {}
</script>
