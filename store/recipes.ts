import {Recipe} from '@/types';
import { GetterTree, ActionContext, MutationTree } from 'vuex'

import axios from 'axios';
import { mdiConsoleLine } from '@mdi/js';
export type State = ReturnType<typeof state>


export const state = () => ({
    recipes: []
})

export const getters: GetterTree<State, State> = {

}

export const mutations = {
    GET_RECIPES(state, recipes) {
        state.recipes = recipes;
    },
    ADD_RECIPE(state, recipe) {
        state.recipes.push(recipe);
    },
    UPDATE_RECIPE(state, recipe){
        const index = state.recipes.findIndex(r => r._id === recipe._id);
        // state.recipes.splice(index, 1, recipe);
    }
}

export const actions = {
    async getRecipes(context: ActionContext<State, State>) {
        const response = await axios.get('api/v1/recipe');
        console.log(response.data);
        context.commit('GET_RECIPES', response.data);
    },
    async addRecipe(context: ActionContext<State, State>, recipe: Recipe) {
        try {
            const response = await axios.post('api/v1/recipe', recipe);
            if (response.status === 200) {
                context.commit('ADD_RECIPE', response.data);
            }
        } catch (error) {
            console.log(error);
        }
            
    }

}
