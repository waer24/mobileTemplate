import Vue from "vue";
import Vuex from "vuex";
import states from "./states";
import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production"; // 开发环境下使用debug，调试，上线时关闭

export default new Vuex.Store({
  states,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
