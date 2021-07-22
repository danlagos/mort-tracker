import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        label: "Home",
        url: "/",
      },

      {
        label: "Contacts",
        url: "/contactManager",
      },
      {
        label: "To Do",
        url: "/todoList",
      },
      {
        label: "Login",
        url: "/login",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
