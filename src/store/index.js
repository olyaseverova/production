import { createStore } from 'vuex'

export default createStore({
  actions: {
    async fetchMenu(ctx) { ctx.commit('updateMenu', await (await fetch("menu.json")).json()) },
    async fetchDramatisations(ctx) { ctx.commit('updateDramatisations', await (await fetch("dramatisations.json")).json()) },
    async fetchDramatisationsStructured(ctx) { ctx.commit('updateDramatisationsStructured', await (await fetch("dramatisationsStructured.json")).json()) },
    async fetchCharacters(ctx) { ctx.commit('updateCharacters', await (await fetch("characters.json")).json()) },
  },
  mutations: {
    updateMenu(state, data) { state.menu = data },
    updateDramatisations(state, data) { state.dramatisations = data },
    updateDramatisationsStructured(state, data) { state.dramatisationsStructured = data },
    updateCharacters(state, data) { state.characters = data },
  },
  state: {
    menu: [],
    dramatisations: [],
    dramatisationsStructured: [],
    characters: []
  },
})
