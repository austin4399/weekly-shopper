export const state = () => ({
    cart: []
})

export const mutations = {
    ADD_RECIPE(state, recipe) {
        state.cart = [{recipe}, ...state.cart]
    },
    REMOVE_RECIPE(state, recipe) {
        state.cart.splice(state.cart.indexOf(recipe), 1)
    }
}