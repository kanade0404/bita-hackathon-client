import Vuex from 'vuex'

export const appStore = () => {
  return new Vuex.Store({
    state: {
      userData: {},
      description: '',
    },
    mutations: {
      setUser(state, payload) {
        state.userData = payload
      },
      setDesc(state, payload) {
        state.userData = payload
      },
    },
    actions: {
      setUserActions: ({ commit }, payload) => {
        commit('setUser', payload)
      },
      setDescAction({ commit }, payload) {
        commit('setDesc', payload)
      },
    },
  })
}

export default appStore
