import { createStore } from "vuex";
import api from "./api/api";
export default createStore({
  state: {
    apiData: [],
  },
  mutations: {
    setApiData(state, data) {
      state.apiData = data;
    },
  },
  actions: {
    async fetchApiData({ commit }, query) {
      const res = await api.get(`/api/json/v1/1/search.php?s=${query}`);
      commit("setApiData", res.data);
    },
  },
});
