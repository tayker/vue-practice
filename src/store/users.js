import { getUsers, createUser, deleteUser, getSingleUser, editUser } from '../api/user';

export default {
    state: {
        users: [],
        singleUser: null
    },
    actions: {
        async fetchUsers({commit}) {
            commit('setLoading', true);

            try {
                const res = await getUsers();

                commit('updateUsers', res.data);
                commit('setLoading', false);
            } catch(error) {
                console.log(error)
            }
        },
        async createUser({commit}, payload) {
            commit('setLoading', true);
            
            try {
                const response = await createUser(payload);

                commit('newUser', response.data);
                commit('setLoading', false);
            } catch(error) {
                console.log(error);
            }
            
        },
        async deleteUser({commit}, payload) {
            commit('setLoading', true);

            try {
                await deleteUser(payload);
            
                commit('deletedUser', payload);
                commit('setLoading', false);
            } catch(error) {
                console.log(error)
            }
            
        },
        async getSingleUser({commit}, payload) {
            commit('setLoading', true);

            try {
                const res = await getSingleUser(payload);

                commit('updateSingleUser', res.data);
                commit('setLoading', false);
            } catch(error) {
                console.log(error);
            }
            
        },
        async editUser({commit}, payload) {
            commit('setLoading', true);

            try {
                await editUser(payload.id, payload);

                commit('editedUser', payload);
                setTimeout(() => {
                    commit('setLoading', false);
                }, 1000);
                
            } catch(error) {
                console.log(error);
            }
            
        }
    },
    mutations: {
        updateUsers(state, payload) {
            state.users = payload;
        },
        newUser(state, payload) {
            state.users.unshift(payload);
        },
        deletedUser(state, payload) {
            let newArr = state.users.filter(el => {
                return el.id !== payload;
            });
            state.users = newArr;
        },
        editedUser(state, payload) {
            state.singleUser = payload;
        },
        updateSingleUser(state, payload) {
            state.singleUser = payload;
        }
    },
    getters: {
        usersList(state) {
            return state.users;
        },
        singleUser(state) {
            return state.singleUser;
        }
    }
}