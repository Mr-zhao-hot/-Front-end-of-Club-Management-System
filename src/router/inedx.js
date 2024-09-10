import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name:"login",
    component: () => import('@/components/Login/Login.vue'),
  },
  {
    path: '/page',
    name:"",
    redirect:"/page/Homepage",
    component: () => import('@/components/Page/Page.vue'),
    children: [
      {
        path: 'Homepage', // 匹配 /register
        name:"HomePage",

        component: () => import('@/view/first/fist.vue'), // 子路由组件
      },
      {
        path:"People",
        name:"People",
        component:() => import("@/view/people/people.vue")
      },
      {
        path:"list",
        name:"list",
        component:() => import("@/view/list/list.vue")
      },
      {
        path:"test",
        name:"test",
        component:() => import("@/view/test/test.vue")
      },
      {
        path:"gpt",
        name:"chatgpt",
        component:() => import("@/view/chatgpt/chatgpt.vue")
      },
      {
        path:"pro",
        name:"pro",
        component:() => import("@/view/pro/pro.vue")
      }
    ],
  },
  {
    path: '/Register',
    name:"register",
    component: () => import('@/components/Register/Register.vue'),

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
// 记得删除该token
	const isLoggedIn = sessionStorage.getItem("islogin");

	if (isLoggedIn) {
		// 已登录，可以向目标地址访问;
		next(); // 继续访问目标路由
		return;
	}
	
	// 未登录的情况
	if (to.name === "login") {
		next(); // 如果请求的页面是登录页面，允许访问
		return;
	}
	
	// 未登录，访问其他页面，重定向到登录页面
	next({ name: "login" }); // 或者 next("/login")
});

export default router;