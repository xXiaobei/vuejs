<template>
	<div class="home">
		<p>Cats Online:{{ getAllCats.length }}</p>
		<p>Total Pets with family:{{ animalsCount }}</p>
		<hr />
		<button
			@click.prevent="toggerForm"
			v-if="btnStatus === 0"
			class="btn btn-success"
		>
			Add New Pet.
		</button>
		<b-form v-if="showForm">
			<b-form-group id="input-group-1">
				<b-form-input
					id="name"
					v-model="formData.name"
					placeholder="Enter pet's name"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2">
				<b-form-input
					id="age"
					v-model="formData.age"
					placeholder="Enter pet's age"
				></b-form-input>
			</b-form-group>

			<b-form-group id="exampleInputGroup3">
				<b-form-select
					id="species"
					:options="['cats', 'dogs']"
					v-model="formData.species"
				/>
			</b-form-group>

			<b-button
				type="submit"
				variant="primary"
				@click.prevent="handleSubmit"
			>
				Submit
			</b-button>
			<b-button
				type="reset"
				variant="danger"
				@click.prevent="handleReset"
			>
				Reset
			</b-button>
		</b-form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

/**
 * v-model 多用于input的value值绑定，双向绑定
 * v-bind 多用于class的绑定，单向绑定
 */
export default {
	name: "home",
	data() {
		return {
			btnStatus: 0,
			showForm: false,
			formData: {
				age: null,
				name: "",
				species: null
			}
		};
	},
	computed: {
		...mapGetters(["animalsCount", "getAllCats"])
	},
	methods: {
		/**
		 * 映射action到本地
		 */
		...mapActions(["addPet"]),
		/**
		 * 显示/隐藏 表单
		 */
		toggerForm() {
			this.btnStatus = 1;
			this.showForm = !this.showForm;
		},
		/**
		 *重置按钮逻辑
		 */
		handleReset() {
			this.formData = { age: null, name: "", species: null };
		},
		/**
		 * 添加宠物
		 */
		handleSubmit() {
			const { species, age, name } = this.formData;
			const payload = {
				species,
				pet: { name, age }
			};
			this.addPet(payload); //mutation
			this.handleReset(); //reset
		}
	}
};
</script>

<style scoped>
form {
	margin-top: 20px;
}
body .btn {
	margin-top: 10px;
}
form .btn {
	margin-right: 10px;
}
hr {
	width: 80%;
	margin: 0 auto;
	border: 0;
	height: 1px;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(0, 0, 0, 0.75),
		rgba(0, 0, 0, 0)
	);
}
</style>
