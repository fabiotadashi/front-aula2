import Vue from 'vue'
import store from '@/config/store'
import GameService from '@/services/game.service'

const state = {
    gameList: {
        data: [],
        error: null
    }
}

const actions = {
    async fetchGameList({commit}){
        try {
            const games = await GameService.getGames()
            commit('updateGameList', games)
        } catch(error) {
            commit('errorGameList', error)
        }
    }
}

const getters = {}

const mutations = {
    updateGameList(state, gameList) {
        const updateData = { data: gameList, error: null }
        Vue.set(state, 'gameList', updateData)
    },
    errorGameList(state, error){
        const updateError = { data: [], error: error }
        Vue.set(state, 'gameList', updateError)
    }
}

const module = {
    namespaced: true,
    state, 
    getters,
    actions,
    mutations
}

store.registerModule('games', module)

export default module