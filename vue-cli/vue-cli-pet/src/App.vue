<template>
	<div id="app" class="container">
		<img alt="Vue logo" src="./assets/dog.png" />
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/cat">Cat</router-link> |
			<router-link to="/dog">Dog</router-link> |
			<router-link to="/pet">Pet</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
img {
	width: 160px;
	height: 160px;
	margin-top: 20px;
	border-radius: 50%;
	border: #42b983 1px solid;
	box-shadow: 10px 10px 5px #888888;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
