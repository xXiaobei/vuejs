import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

/**
 *Vue挂载Vuex插件
 */
Vue.use(Vuex);

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
});
