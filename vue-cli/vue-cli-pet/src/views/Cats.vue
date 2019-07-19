<template>
	<div>
		<PetTable species="cats" :pets="cats" />
	</div>
</template>

<script>
/**
 *此处使用命名导出（在vuex模块中一定存在变量mapState）
 */
import { mapState } from "vuex";
/**
 *导入组件PetTable
 *@ 代表的是src路径
 */
import PetTable from "@/components/PetTable.vue";

export default {
	components: { PetTable },
	computed: {
		/**
		 * 使用 对象展开运算符 将对象 mapState 混入到外部（子组件的computed）对象中
		 * 当映射的计算属性的名称与state的子节点名称相同时，可以给mapState传入字符串数组完成值的映射
		 * 此处 将this.cats 映射为 store.state.cats
		 */
		...mapState(["cats"])
	}
};
</script>
