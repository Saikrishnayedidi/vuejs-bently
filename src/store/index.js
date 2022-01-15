import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    expectations: null,
  },
  mutations: {
    EXPECTATIONS_POST(state, payload) {
      // console.log(payload.expectations);
      for (let item in payload.expectations) {
        let array = [];
        array.push({ ...payload.expectations[item] });
        array.forEach((res) => {
          state.expectations = res.expectations;
        });
      }
    },
  },
  actions: {
    expectationsPost({ commit }, payload) {
      console.log(payload.expectations);
      console.log(commit);
      axios.post("expectatios.json", { expectations: payload });
    },

    expectationsGet({ commit }) {
      axios.get("expectatios.json").then((res) => {
        commit("EXPECTATIONS_POST", { expectations: res.data });
      });
    },
  },
  modules: {},
});
