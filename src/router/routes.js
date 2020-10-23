import Gitbook from "../views/Gitbook.vue";
import Software from "../views/Software.vue";
import Opensourcelib from "../views/Opensoucelib.vue";

export default [
  {
    path: "/software",
    name: "Software",
    component: Software
  },
  {
    path: "/gitbook",
    name: "Gitbook",
    component: Gitbook
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/opensourcelib",
    name: "Opensourcelib",
    component: Opensourcelib
  }
];
