import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/examples-api/Login.vue";
import Signup from "../views/examples-api/Signup.vue";
import PasswordForgot from "../views/examples-api/PasswordForgot.vue";
import PasswordReset from "../views/examples-api/PasswordReset.vue";
import UserProfile from "../views/examples-api/profile/UserProfile.vue";
import Users from "../views/examples-api/users/UsersList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login",
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      requiresAuth:true
  }
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/password-forgot",
    name: "Password Forgot",
    component: PasswordForgot,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/password-reset",
    name: "Password Reset",
    component: PasswordReset,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: "/user-profile",
    name: "User Profile",
    component: UserProfile,
    meta:{
      requiresAuth:false
  }
  },
  {
    path: '/users',
    name: "Users",
    component: Users,
    meta:{
      requiresAuth:true
  }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to)=>{
  if(to.meta.requiresAuth && !localStorage.getItem('user_free')){
     return {name:"Login"}
  }
  if(to.meta.requiresAuth==false && localStorage.getItem('user_free')){
      return {name:"Dashboard"}
  }
  });

export default router;
