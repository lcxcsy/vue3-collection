import { Module } from 'vuex'
import { State } from '..'

// 初始状态
const initialState = {
  pageMenu: {
    collapse: false
  }
}

export type AppState = typeof initialState

export default {
  namespaced: true,
  state: initialState,
  getters: {
    menuCollapse(state: AppState) {
      return state.pageMenu.collapse
    }
  },
  mutations: {
    TOGGLE_MENU(state: AppState) {
      state.pageMenu.collapse = !state.pageMenu.collapse
    }
  },
  actions: {
    toggleMenu({ commit }) {
      commit('TOGGLE_MENU')
    }
  }
} as Module<AppState, State>
