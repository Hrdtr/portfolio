export const state = () => ({
  header: null,
})

export const mutations = {
  setHeader(state, payload) {
    state.header = payload
  },
}
