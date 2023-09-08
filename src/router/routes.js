const LoginPage = () => import("src/pages/common/LoginPage.vue");
const RegisterPage = () => import("src/pages/common/RegisterPage.vue");
const SetRoles = () => import("src/pages/common/SetRoles.vue");
const ForgetPassword = () => import("src/pages/common/ForgetPassword.vue");
const _Layouts = () => import("src/layouts/MainLayout.vue");
const HeaderPage = () => import("src/pages/pregnant/HeaderPage.vue");
const PersonalInformation = () =>
  import("src/pages/pregnant/PersonalInformation.vue");
const FavoriteRecipe = () => import("src/pages/pregnant/FavoriteRecipe.vue");
const HistoricalRecord = () =>
  import("src/pages/pregnant/HistoricalRecord.vue");
const EditPassword = () => import("src/pages/pregnant/EditPassword.vue");
const SetUp = () => import("src/pages/pregnant/SetUp.vue");
const HelpPage = () => import("src/pages/pregnant/HelpPage.vue");

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/LoginPage",
    name: "loginpage",
    component: LoginPage,
  },
  {
    path: "/RegisterPage",
    name: "registerPage",
    component: RegisterPage,
  },
  {
    path: "/SetRoles",
    name: "setRoles",
    component: SetRoles,
  },
  {
    path: "/ForgetPassword",
    name: "forgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/Page",
    name: "page",
    component: _Layouts,
    children: [
      {
        path: "/Page/HeaderPage",
        name: "headerPage",
        component: HeaderPage,
      },
      {
        path: "/Page/PersonalInformation",
        name: "personalInformation",
        component: PersonalInformation,
      },
      {
        path: "/Page/FavoriteRecipe",
        name: "favoriteRecipe",
        component: FavoriteRecipe,
      },
      {
        path: "/Page/HistoricalRecord",
        name: "historicalRecord",
        component: HistoricalRecord,
      },
      {
        path: "/Page/EditPassword",
        name: "editPassword",
        component: EditPassword,
      },
      {
        path: "/Page/SetUp",
        name: "setUp",
        component: SetUp,
      },
      {
        path: "/Page/HelpPage",
        name: "helpPage",
        component: HelpPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
];

export default routes;
