// This is the index module. No namespaces are used.
// Each module is a separate file.
// A module requires all objects (State, Getters, Mutations, Actions) to be valid
import { GetterTree, ActionContext, MutationTree } from 'vuex'

export type State = ReturnType<typeof state>

// state

// State is used to regulate the data in the store. Think of it as a 'stupid' database.
// It is stored in RAM
export const state = () => ({
  recipeFormDialog: false,
  editRecipeFormDialog: false,
  alert: false,
  alertMessage: '',
})

// getters

// Getters are used to retrieve data from the store.
// Typically used to retrieve complex data which requires some 'calculation'
export const getters: GetterTree<State, State> = {
  getRecipeFormDialogState: (state) => {
    return state.recipeFormDialog
  },
}

// actions

// Actions are used to update the state of the store.
// These are ASYNCHRONOUS tasks -- meaning they do NOT block the application thread.
// Especially for interacting with an API
// Can also be used to dispatch other actions and/or mutations.
export const actions = {
  openRecipeFormDialog(context: ActionContext<State, State>): void {
    context.commit('OPEN')
  },
  closeRecipeFormDialog(context: ActionContext<State, State>): void {
    context.commit('CLOSE')
  },
  openEditRecipeFormDialog(context: ActionContext<State, State>): void {
    context.commit('OPEN_EDIT')
  },
  showAlert(context: ActionContext<State, State>, message: string): void {
    context.commit('SHOW_ALERT', message)
  },
}

// mutations

// Mutations are used to update the state of the store.
// These are SYNCHRONOUS tasks -- meaning they block the application thread.
// Should only be used for simple tasks or 'mutations'.
export const mutations: MutationTree<State> = {
  OPEN(state: State): void {
    state.recipeFormDialog = true
  },
  CLOSE(state: State): void {
    state.recipeFormDialog = false
  },
  OPEN_EDIT(state: State): void {
    state.editRecipeFormDialog = true
  },
  CLOSE_EDIT(state: State): void {
    state.editRecipeFormDialog = false
  },
  SHOW_ALERT(state: State, message: string): void {
    state.alert = true
    state.alertMessage = message
  },
  HIDE_ALERT(state: State): void {
    state.alert = false
  },
}
// mutation is the ONLY way to modify state
// mutation doesn't care about business logic, it just cares about "state"
// action is business logic
// action can commit more than 1 mutation at a time, it just implements the business logic,
// it doesn't care about data changing (which is managed by mutation)
