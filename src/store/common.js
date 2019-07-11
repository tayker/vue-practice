export default {
    state: {
        loading: false,
        error: null
    },
    actions: {
        setLoading({commit}, payload) {
            commit('setLoading', payload);
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        }
    },
    getters: {
        loading(state) {
            return state.loading;
        }
    }
}