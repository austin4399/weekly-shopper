interface State {
    recipeDialog: boolean;
}

// state
export const state = () => ({
    recipeDialog: false
})
// getts
export const getters = {

}
// actions
export const actions = {
    
}
// mutations
export const mutations = {
    open(state: State, payload: boolean) {
        state.recipeDialog = payload
    }
}