import Vue from "vue";
/**
 * 引入bootstrapVue插件和css文件
 *  引入的bootstrapVue插件一定要在Vue之后，其它组件之前
 */
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 *挂载bootstrapVue插件
 */
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/**
 * render 渲染函数，该函数会默认传入一个createElement函数，
 * createElement函数接受参数：一个 HTML 标签名、组件选项对象，或者resolve 了上述任何一种的一个 async 函数。必填项
 * $mount()，为挂在函数
 * 如果实例化new Vue()时，没有指定el，则可以$mount()手动挂在到一个未挂载的实例
 */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
