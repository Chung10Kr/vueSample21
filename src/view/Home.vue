<template>
	<div>
		<h2>Hellow {{ name }}</h2>
		<h2>Hellow {{ $store.getters.getUserName }}</h2>
		<h2>Hellow {{ name2 }}</h2>
		<h2>Hellow {{ $store.state.username }}</h2>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			name: '',
			name2: '',
		};
	},
	watch: {},
	methods: {},
	async beforeCreate() {
		this.name = await this.$store.getters.getUserName;
		this.name2 = await this.$store.state.username;
		this.$store.dispatch('getUserNm', 'Bye');
	},
};
</script>
