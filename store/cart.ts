import {GetterTree} from 'vuex';

export type State = ReturnType<typeof state>


export const state = () => ({
    cart: [
        'item 1',
        'item 2',
        'item 3',
    ]
})

export const getters: GetterTree<State, State> = {
    getCart: (state) => {
        return state.cart;
    },
    recipeIsInCart: (state) => (recipeId) => {
        return state.cart.includes(recipeId);
    }
  }

export const mutations = {
    ADD_RECIPE(state, recipe) {
        state.cart = [{recipe}, ...state.cart]
    },
    REMOVE_RECIPE(state, recipe) {
        state.cart.splice(state.cart.indexOf(recipe), 1)
    }
}