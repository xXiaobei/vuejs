/**
 *全局的状态仓库 state store
 *Vuex和单纯的全局对象有以下两点区别
 *1：Vuex的state是响应式的，state改变，则引用了state的组件也会改变
 *2：state不能在组件中显示的被更改，只能显示的提交(commit)mutation
 */

import cats from "../data/cats";
import dogs from "../data/dogs";

/**
 * pets运用es6的扩展运算符将cats,dogs数组合并
 * 另：es6的扩展运算符（...）还有结构赋的功能
 * 或者替换apply()，将数组作为参数传递
 * es5：Math.max.apply(null,[1,2,3])
 * es6：Math.max(...[1,2,3])
 */
export default {
	cats: cats,
	dogs: dogs,
	pets: [...cats, ...dogs]
};
