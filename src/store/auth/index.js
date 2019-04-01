import axios from 'axios'

const state = {
    user: null
}

const getters = {
    check(state) {
        return !!state.user
    },
    userId(state) {
        return state.user.user_id
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

const apiHost = API_HOST;

const actions = {
    async currentUser({commit}) {
        const res = await axios.get(`${apiHost}/.auth/me`, { withCredentials: true })
        const user = res.data[0]
        if (user) {
            console.log(user)
            commit('setUser', user)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}