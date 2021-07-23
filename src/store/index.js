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
        tpyeOfLoan: "Conv rate/term",
        notes: "He inherited the home from husband",
      },
      {
        owner: "NB",
        client: "Mike Cooper",
        preApp: "App",
        date: "7/14",
        referalSource: "CCR",
        phoneNumber: "619-421-2314",
        email: "mcooper@gmail.com",
        tpyeOfLoan: "Conv cash out",
        notes: "missed his call",
      },
      {
        owner: "DL",
        client: "Duane Mallory",
        preApp: "Pre Approval",
        date: "7/1",
        referalSource: "realtor - Tom",
        phoneNumber: "619-312-4231",
        email: "dmallory@gmail.com",
        tpyeOfLoan: "VA Purch",
        notes: "Pre Approved",
      },
      {
        owner: "AL",
        client: "Collin Premdas",
        preApp: "app",
        date: "6/22",
        referalSource: "PC",
        phoneNumber: "619-123-5623",
        email: "cpremdas@gmail.com",
        tpyeOfLoan: "VA cash out",
        notes: "sent entitlements",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
