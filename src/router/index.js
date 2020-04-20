import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/* Layout */
import Layout from "@/views/layout/Layout";

// 公共路由
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/register",
    component: () => import("@/views/login/register"),
    hidden: true
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/bind",
    component: () => import("@/views/login/bind"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/errorPage/401"),
    hidden: true
  },
  {
    path: "",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        component: () => import("../views/queryEntity/SearchEntity"),

        name: "实体查询",
        meta: {
          title: "实体查询",
          icon: "iconfont iconziyuan1",
          noCache: true,
          affix: true
        }
      },
      {
        path: "/info",
        name: "实体详情",
        component: () => import("../views/queryEntity/EntityInfo"),
        // component: () => import("@/views/dashboard/index"),
        hidden: true
      }
    ]
  },
  {
    path: "/identifyEntity",
    component: Layout,
    children: [
      {
        path: "index",
        name: "实体识别",
        component: () => import("../views/identifyEntity/IdentifyEntity"),
        // component: () => import("@/views/form/index"),
        meta: { title: "实体识别", icon: "iconfont iconziyuan2" }
      }
    ]
  },
  {
    path: "/form2",
    component: Layout,
    children: [
      {
        path: "index2",
        name: "知识概览",
        component: () => import("../views/knowledgeOverview/KnowledgeSearch"),
        meta: { title: "知识概览", icon: "iconfont iconziyuan4" }
      },
      {
        path: "overview",
        name: "实体详情",
        component: () => import("../views/knowledgeOverview/Overview"),
        // component: () => import("@/views/dashboard/index"),
        hidden: true
      }
    ]
  },
  {
    path: "/form3",
    component: Layout,
    children: [
      {
        path: "index3",
        name: "知识问答",
        component: () => import("@/views/index/index"),
        meta: { title: "知识问答", icon: "iconfont iconziyuan5" }
      }
    ]
  }
];

export default new Router({
  mode: "history", // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});
