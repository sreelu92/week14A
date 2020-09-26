import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes:""

  },
  mutations: {
    toStore: function(state,newjoke){
      state.jokes=newjoke;
    },
  },
  getters: {
    loud:function(state) {
      return state.jokes.toUpperCase();
    },
    snake:function(state){
      return state.jokes.split(" ").join("_");
    }

  },
  actions: {},
  modules: {}
});
