<template>
	<div>
		<h2>Hellow {{ name }}</h2>
		<h2>Hellow {{ $store.state.userInfo }}</h2>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			name: '',
		};
	},
	watch: {},
	methods: {},
	async beforeCreate() {
		
		this.name = await this.$store.state.userInfo.user_name;
	},
};
</script>
