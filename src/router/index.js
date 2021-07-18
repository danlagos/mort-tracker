import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import TodoList from "../views/TodoList.vue";
import ContactManager from "../views/ContactManager.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
