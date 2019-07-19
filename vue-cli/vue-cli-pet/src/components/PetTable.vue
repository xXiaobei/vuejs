<template>
	<div>
		<h1>{{ species }}</h1>
		<b-table striped hover :items="pets">
			<template v-slot:default="items">
				<router-link :to="`/pets/${species}/${items.index}`">
					{{ items.value }}
				</router-link>
			</template>
		</b-table>
	</div>
</template>

<script>
/**
 *定义props用于接收父组件传过来的值
 */
export default {
	props: {
		species: String,
		pets: Array
	}
};
</script>
