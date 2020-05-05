import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hyak",
    redirect: "/",
  },
  {
    path: "/board",
    name: "board",
    component: () =>
      import(/* webpackChunkName: "board" */ "../views/Board.vue"),
  },
  {
    path: "/meeting_notes",
    name: "meeting notes",
    component: () =>
      import(
        /* webpackChunkName: "meeting_notes" */ "../views/MeetingNotes.vue"
      ),
  },
  {
    path: "/links",
    name: "links",
    component: () =>
      import(/* webpackChunkName: "links" */ "../views/Links.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/division_maps",
    name: "division maps",
    component: () =>
      import(
        /* webpackChunkName: "division_maps" */ "../views/DivisionMaps.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
