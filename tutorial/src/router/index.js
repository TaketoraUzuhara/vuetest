import Vue from "vue";
import VueRouter from "vue-router";
import MileStone from "../views/MileStone.vue";
import Circle from "../views/Circle.vue";
import WaseInfo from "../views/WaseInfo.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "milestone",
    component: MileStone
  },
  {
    path: "/circle",
    name: "circle",
    component: Circle
  },
  {
    path: "/waseinfo",
    name: "waseinfo",
    component: WaseInfo
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
