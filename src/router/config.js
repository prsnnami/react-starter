import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Forum from "../pages/Forum";
import Login from "../pages/Login";
import Open from "../pages/Open";

export default [
  {
    path: "/open",
    component: Open,
    isPublic: true,
    authCheck: false
  },
  {
    path: "",
    component: MainLayout,
    isPublic: false,
    authCheck: true,
    children: [
      {
        path: "/",
        component: Home,
        isPublic: false,
        exact: true
      },
      {
        path: "/forum",
        component: Forum,
        isPublic: false
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    isPublic: true,
    authCheck: true
  }
];
