import Vue from "vue";
import VueRouter from "vue-router";

// change this into an anonymous function later.
import ContactManager from "../views/ContactManager.vue";
import Dashboard from "../views/Dashboard.vue";
import TodoList from "../views/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
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
    component: () => import("../views/404Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
