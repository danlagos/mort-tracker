import Vue from "vue";
import VueRouter from "vue-router";

import NotFoundComponent from "../views/404Error.vue";
import ContactManager from "../views/ContactManager.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import TodoList from "../views/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/todoList",
    name: "todoList",
    component: TodoList,
  },
  {
    path: "/contactManager",
    name: "contactManager",
    component: ContactManager,
  },
  {
    path: "*",
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
