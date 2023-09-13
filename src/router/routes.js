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
const GenerateProd = () => import("src/pages/pregnant/GenerateProd.vue");
const EditPassword = () => import("src/pages/common/EditPassword.vue");
const SetUp = () => import("src/pages/pregnant/SetUp.vue");
const HelpPage = () => import("src/pages/pregnant/HelpPage.vue");
const MakerLayout = () => import("src/layouts/MakerLayout.vue");
const MakerHeaderPageOrderPage = () => import("src/pages/Maker/HeaderPage.vue");
const MakerOrderPage = () => import("src/pages/Maker/OrderPage.vue");
const MakerPersonalInformation = () =>
  import("src/pages/Maker/PersonalInformation.vue");
const MakerDataAnalysis = () => import("src/pages/Maker/DataAnalysis.vue");
const MakerHistoricalRecord = () =>
  import("src/pages/Maker/HistoricalRecord.vue");
const MakerSetUp = () => import("src/pages/Maker/SetUp.vue");
const AdminLayout = () => import("src/layouts/AdminLayout.vue");
const AdminHeaderPage = () => import("src/pages/Admin/HeaderPage.vue");
const AdminPersonalInformation = () =>
  import("src/pages/Admin/PersonalInformation.vue");
const AdminAccountManagement = () =>
  import("src/pages/Admin/AccountManagement.vue");
const AdminDataManagement = () => import("src/pages/Admin/DataManagement.vue");

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
      {
        path: "/Page/GenerateProd",
        name: "generateProd",
        component: GenerateProd,
      },
    ],
  },
  {
    path: "/Maker",
    name: "Maker",
    component: MakerLayout,
    children: [
      {
        path: "/Maker/HeaderPage",
        name: "MakerheaderPage",
        component: MakerHeaderPageOrderPage,
      },
      {
        path: "/Maker/OrderPage",
        name: "MakerorderPage",
        component: MakerOrderPage,
      },
      {
        path: "/Maker/PersonalInformation",
        name: "MakerpersonalInformation",
        component: MakerPersonalInformation,
      },
      {
        path: "/Maker/DataAnalysis",
        name: "MakerdataAnalysis",
        component: MakerDataAnalysis,
      },
      {
        path: "/Maker/HistoricalRecord",
        name: "MakerhistoricalRecord",
        component: MakerHistoricalRecord,
      },
      {
        path: "/Maker/EditPassword",
        name: "MakereditPassword",
        component: EditPassword,
      },
      {
        path: "/Maker/SetUp",
        name: "MakersetUp",
        component: MakerSetUp,
      },
    ],
  },
  {
    path: "/Admin",
    name: "Admin",
    component: AdminLayout,
    children: [
      {
        path: "/Admin/HeaderPage",
        name: "AdminheaderPage",
        component: AdminHeaderPage,
      },
      {
        path: "/Admin/PersonalInformation",
        name: "AdminPersonalInformation",
        component: AdminPersonalInformation,
      },
      {
        path: "/Admin/AccountManagement",
        name: "AdminAccountManagement",
        component: AdminAccountManagement,
      },
      {
        path: "/Admin/DataAnalysis",
        name: "AdmindataAnalysis",
        component: AdminDataManagement,
      },
      {
        path: "/Admin/EditPassword",
        name: "AdmineditPassword",
        component: EditPassword,
      },
      {
        path: "/Admin/SetUp",
        name: "AdminsetUp",
        component: MakerSetUp,
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
