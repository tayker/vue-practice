import Vue from 'vue';
import Vuex from 'vuex';

import common from './common';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        users
    }
})