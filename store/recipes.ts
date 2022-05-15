import {Recipe} from '@/types';
import { GetterTree, ActionContext, MutationTree } from 'vuex'

import axios from 'axios';
export type State = ReturnType<typeof state>


export const state = () => ({
    recipes: []
})

export const getters: GetterTree<State, State> = {

}

export const mutations = {
    GET_RECIPES(state, recipes) {
        state.recipes = recipes;
    }
}

export const actions = {
    async getRecipes(context: ActionContext<State, State>) {
        const response = await axios.get('api/v1/recipe');
        console.log(response.data);
        context.commit('GET_RECIPES', response.data);
    }
}