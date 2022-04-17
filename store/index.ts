import { GetterTree, ActionContext, MutationTree } from 'vuex'


export type State = ReturnType<typeof state>

// state
export const state = () => ({
  recipeFormDialog: false,
})

// getters
export const getters: GetterTree<State, State> = {
  recipeFormDialog: (state: State) => {state.recipeFormDialog},
}

// mutations
export const mutations = {
  open(state: State): void {
    state.recipeFormDialog = true
  },
  close(state: State): void {
    state.recipeFormDialog = false
  },
}

// actions
export const actions = {
  openRecipeFormDialog(context: ActionContext<State, State>): void {
    context.commit('open')
  },
  closeRecipeFormDialog(context: ActionContext<State, State>): void {
    context.commit('close')
  },
}
