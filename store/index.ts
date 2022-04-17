import { GetterTree, ActionContext, MutationTree } from 'vuex'


export type State = ReturnType<typeof state>

// state
export const state = () => ({
  recipeFormDialog: false,
})

// mutations
export const mutations: MutationTree<State> = {
  OPEN (state: State): void {
    state.recipeFormDialog = true
  },
  CLOSE (state: State): void {
    state.recipeFormDialog = false
  },
}

// getters
export const getters: GetterTree<State, State> = {
  getRecipeFormDialogState: (state) => {
      return state.recipeFormDialog
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
