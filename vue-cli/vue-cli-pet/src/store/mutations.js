/**
 *模块话vuex中的mutation
 *mutaion用于在组件中通过commit()函数调用，来更改state
 *所有的mutation都是同步操作，异步操作可以用actions实现
 */
export default {
	/**
	 *添加宠物，改变state的状态
	 *注意参数细节，运用了参数解构
	 */
	appendPet: (state, { species, pet }) => {
		state[species].push(pet);
	}
};
