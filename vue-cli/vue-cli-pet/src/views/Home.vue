<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/dog.png" />
		<h1>Home</h1>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "home",
	components: {
		HelloWorld
	}
};
</script>

<style scope>
img {
	width: 120px;
	height: 120px;
}
</style>

