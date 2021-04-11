import Vuex from 'vuex'

export const appStore = () => {
  return new Vuex.Store({
    state: {
      userData: {},
    },
    mutations: {
      setUser(state, payload) {
        state.userData = payload
      },
    },
    actions: {
      setUserActions: ({ commit }, payload) => {
        commit('setUser', payload)
      },
    },
  })
}

export default appStore
