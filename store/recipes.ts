import { Recipe } from '@/types'
import { GetterTree, ActionContext, MutationTree } from 'vuex'

import axios from 'axios'
export type State = ReturnType<typeof state>

export const state = () => ({
  recipes: [],
  editRecipeFormDialog: false,
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
  OPEN_EDIT(state) {
    state.editRecipeFormDialog = true
  },
  CLOSE_EDIT(state) {
    state.editRecipeFormDialog = false
  },
  UPDATE_RECIPE(state, recipe) {
    state.editRecipe = recipe
    // state.recipes.splice(index, 1, recipe);
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
  editRecipe(context: ActionContext<State, State>, recipe: Recipe) {
    context.commit('OPEN_EDIT')
    context.commit('UPDATE_RECIPE', recipe)
  },
  async submitEdit(context: ActionContext<State, State>, recipe: Recipe) {
    try {
      const response = await axios.put(`api/v1/recipe/${recipe['_id']}`, recipe)
      if (response.status === 200) {
        context.commit('UPDATE_RECIPE', recipe)
        context.dispatch('showAlert', `${recipe.title} updated!`, {
          root: true,
        })
      } else {
        context.dispatch('showAlert', response, {
          root: true,
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}
