import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue")
  },
  {
    path: "/knowledge",
    name: "knowledge",
    children: [
      {
        path: "/knowledge/css",
        name: "/knowledge",
        component: () => import("../views/knowledge/css/index.vue")
      },
      {
        path: "/knowledge/js",
        name: "knowledge",
        component: () => import("../views/knowledge/js/index.vue")
      }
    ]
  }

  // {
  //   path: "/:pathMatch(.*)",
  //   name: "Not Found",
  //   component: () => import("@/views/Notice/NotFound.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
