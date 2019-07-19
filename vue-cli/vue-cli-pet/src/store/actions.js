/**
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
 * context 不是 sotre 对象本身
 * Action 与 mutation 类似，不同在于Action 提交的是mutation；mutation则是改变的state(状态)
 */
export default {
	/**
	 * {commit} 运用的是参数解构
	 */
	addPet: ({ commit }, payload) => {
		commit("appendPet", payload);
	}
};
