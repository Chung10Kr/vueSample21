<template>
	<router-view></router-view>
</template>
<script>
export default {
	name: 'App',
	async mounted() {
		if (!this.$store.getters.getAccessToken) {
			this.$router.push({ path: '/login' });
		}
	},
};
</script>
