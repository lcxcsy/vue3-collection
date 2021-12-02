import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import app, { AppState } from './modules/app'

// useStore() 类型化
export type State = {
  user: string
  app?: AppState
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    user: 'developer'
  },
  modules: {
    app
  }
})
