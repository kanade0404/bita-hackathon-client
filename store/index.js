export const state = () => ({
  userData: {},
})

export const mutations = {
  setUser(state, payload) {
    state.userData = payload
  },
}

export const action = {
  setUserActions: function ({ commit }, payload) {
    commit('setUser', payload)
  },
}
