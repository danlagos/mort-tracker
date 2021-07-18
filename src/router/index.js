import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import TodoList from "../views/TodoList.vue";
import ContactManager from "../views/ContactManager.vue";
import NotFoundComponent from "../views/404Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/TodoList",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/ContactManager",
    name: "ContactManager",
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
