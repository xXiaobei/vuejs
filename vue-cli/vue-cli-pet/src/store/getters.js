/**
 * getter的返回值会根据依赖被缓存
 * getter接受state作为其第一个参数
 * getter在通过属性访问时，是作为Vue响应式系统的一部分被缓存起来的
 * getter在通过方法访问的时候，不存在缓存（通常方法用来做数组操作）
 */
export default {
	animalsCount: state => {
		return state.cats.length + state.dogs.length;
	},
	getAllCats: state => {
		return state.pets.filter(pet => {
			return pet.species === "cat";
		});
	}
};
