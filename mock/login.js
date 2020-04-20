module.exports = [
  {
    api: "/mock/api/v3/login", // 密码登录
    method: "post",
    response: {
      code: 200,
      msg: "操作成功",
      data:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU4NjQwMzE2MiwidXNlcmlkIjo4LCJjcmVhdGVkIjoxNTg2Mzk5NTYyMTM4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5Ijoic3lzOnVzZXI6dmlldyJ9LHsiYXV0aG9yaXR5IjoiUk9MRV8xNCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnNvY2lhbDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6am9iOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkaXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptZW51OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6dmlldyJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6dmlldyJ9XX0.MfaLRObFVZny-397qvOPYFX9rFKRugCfLBasXRpFzkvLCGl8fAVlopaD193JJr74K7DhCd8EFZS4EXDcjg3b9Q",

      serviceCode: null
    },
    delay: 1000,
    error: {}
  },
  {
    api: "/mock/api/v3/userInfo", // 用户信息
    method: "get",
    response: {
      code: 200,
      msg: "操作成功",
      data: {
        roles: ["admin"],
        name: "Super Admin",
        avatar:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561394014552&di=17b6c1233048e5276f48309b306c7699&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F29%2F20180429210111_gtsnf.jpg"
      },
      serviceCode: null
    },
    delay: 1000,
    error: {}
  },
  {
    api: "/mock/api/v3/route", // 路由
    method: "get",
    response: {
      code: 200,
      msg: "操作成功",
      data: [
        // {
        //   path: "https://gitee.com/li_haodong/pre",
        //   redirect: "noredirect",
        //   component: "Layout",
        //   alwaysShow: false,
        //   children: [
        //     {
        //       path: "https://gitee.com/li_haodong/pre",
        //       meta: { title: "项目地址", icon: "blogLink" }
        //     }
        //   ]
        // }
        // { "name": "权限管理", "path": "/admin", "component": "Layout", "meta": { "title": "权限管理", "icon": "authority" }, "children": [{ "name": "用户管理", "path": "user", "component": "admin/user", "meta": { "title": "用户管理", "icon": "user" } }, { "name": "角色管理", "path": "role", "component": "admin/role", "meta": { "title": "角色管理", "icon": "peoples" } }, { "name": "部门管理", "path": "dept", "component": "admin/dept", "meta": { "title": "部门管理", "icon": "dept" } }, { "name": "菜单管理", "path": "menu", "component": "admin/menu", "meta": { "title": "菜单管理", "icon": "menu" } }, { "name": "租户管理", "path": "tenant", "component": "admin/tenant", "meta": { "title": "租户管理", "icon": "list" } }] },
        // { "name": "系统管理", "path": "/sys", "component": "Layout", "meta": { "title": "系统管理", "icon": "sys" }, "children": [{ "name": "日志管理", "path": "log", "component": "sys/log", "meta": { "title": "日志管理", "icon": "log" } }, { "name": "字典管理", "path": "dict", "component": "sys/dict", "meta": { "title": "字典管理", "icon": "tag" } }, { "name": "代码生成", "path": "codegen", "component": "sys/codegen", "meta": { "title": "代码生成", "icon": "exit-fullscreen" } }] },
      ],
      serviceCode: null
    },
    delay: 1000,
    error: {}
  }
];
