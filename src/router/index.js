import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import TodoList from "../views/TodoList.vue";
import ContactManager from "../views/ContactManager.vue";
import NotFoundComponent from "../views/404Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue"),
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
