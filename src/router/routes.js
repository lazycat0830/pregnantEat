const routes = [
  // {
  //   path: "/",
  //   component: () => import("src/pages/common/SetRoles.vue"),
  // },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/headerPage",
        component: () => import("pages/pregnant/HeaderPage.vue"),
      },
      {
        path: "/editPassword",
        component: () => import("pages/pregnant/EditPassword.vue"),
      },
      {
        path: "/favoriteRecipe",
        component: () => import("pages/pregnant/FavoriteRecipe.vue"),
      },
      {
        path: "/helpPage",
        component: () => import("pages/pregnant/HelpPage.vue"),
      },
      {
        path: "/historicalRecord",
        component: () => import("pages/pregnant/HistoricalRecord.vue"),
      },
      {
        path: "/personalInformation",
        component: () => import("pages/pregnant/PersonalInformation.vue"),
      },
      { path: "/setUp", component: () => import("pages/pregnant/SetUp.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
