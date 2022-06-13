import { Recipe } from '@/types'
import { GetterTree, ActionContext, MutationTree } from 'vuex'

import axios from 'axios'
export type State = ReturnType<typeof state>

export const state = () => ({
  recipes: [],
  editRecipe: null as Recipe | null,
})

export const getters: GetterTree<State, State> = {}

export const mutations = {
  GET_RECIPES(state, recipes) {
    state.recipes = recipes
  },
  ADD_RECIPE(state, recipe) {
    state.recipes.push(recipe)
  },
  UPDATE_RECIPE(state, recipe) {
    const index = state.recipes.findIndex((r) => r._id === recipe._id)
    // state.recipes.splice(index, 1, recipe);
  },
  EDIT_RECIPE(state, recipe) {
    state.editRecipe = recipe
  },
}

export const actions = {
  async getRecipes(context: ActionContext<State, State>) {
    const response = await axios.get('api/v1/recipe')
    context.commit('GET_RECIPES', response.data)
  },
  async addRecipe(context: ActionContext<State, State>, recipe: Recipe) {
    try {
      const response = await axios.post('api/v1/recipe', recipe)
      if (response.status === 200) {
        context.commit('ADD_RECIPE', response.data)
        context.dispatch('showAlert', `${response.data.title} added!`, {
          root: true,
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}
