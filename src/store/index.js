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
    headers: [
      {
        text: " Owner",
        align: "start",
        sortable: false,
        value: "owner",
      },
      { text: "Client", value: "client" },
      { text: "Pre App", value: "preApp" },
      { text: "Date", value: "date" },
      { text: "Referal Source", value: "referalSource" },
      { text: "Phone Number", value: "phoneNumber" },
      { text: "Email", value: "email" },
      { text: "Type of Loan", value: "tpyeOfLoan" },
      { text: "Notes", value: "notes" },
    ],
    contacts: [
      {
        owner: "DL",
        client: "David Supina",
        preApp: "App",
        date: "7/11",
        referalSource: "PCR",
        phoneNumber: "619-948-2070",
        email: "davidsupina@icloud.com",
        tpyeOfLoan: "Conv Refi",
        notes: "He inherited the home from husband",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
