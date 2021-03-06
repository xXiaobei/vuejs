import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cat from "./views/Cats";
import Dog from "./views/Dogs";
import Pet from "./views/Pet";

/**
 * Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
 *- 嵌套的路由/视图表
 * -模块化的、基于组件的路由配置
 * -路由参数、查询、通配符
 * -基于 Vue.js 过渡系统的视图过渡效果
 * -细粒度的导航控制
 * -带有自动激活的 CSS class 的链接
 * -HTML5 历史模式或 hash 模式，在 IE9 中自动降级
 * -自定义的滚动条行为
 */
Vue.use(Router);

/**
 * mode:history可以去掉url路径中的＃(官方的解释？)
 */
export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/cat",
			name: "cat",
			component: Cat
		},
		{
			path: "/dog",
			name: "dog",
			component: Dog
		},
		{
			path: "/pet",
			name: "pet",
			component: Pet
		}
	]
});
