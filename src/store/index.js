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
        label: "Login",
        url: "/login",
      },
      {
        label: "Contacts",
        url: "/contactManager",
      },
      {
        label: "To Do",
        url: "/todoList",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
