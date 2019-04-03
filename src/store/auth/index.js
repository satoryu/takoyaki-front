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

const actions = {
    async currentUser({commit, getters}) {
        if (getters['check'])
            return

        try {
            const res = await axios.get('/.auth/me', { withCredentials: true })
            const user = res.data[0]
            if (user) {
                console.log(user)
                commit('setUser', user)
            }
        } catch(error) {
            console.error(error);
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