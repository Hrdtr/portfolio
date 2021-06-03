export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    try {
      const header = await $content('header-drawer').fetch()
      commit('data/setHeader', header)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
