import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes:"",
    choice:""


  },
  mutations: {
    toStore: function(state,newjoke){
      state.jokes=newjoke;
    },
    changeLoud:function(state,display){
      state.choice=display;
    },
    changeSnake:function(state,display){
      state.choice=display;
    },
    changeNormal:function(state,display){
      state.choice=display;
    }
   
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
