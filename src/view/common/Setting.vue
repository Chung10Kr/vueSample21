<template>
	<div class="mt-1 row">
		<div class="col-md-2 text-md-center">메뉴 Bar 위치</div>
		<div class="col-md-10">
			<select
				class="form-select"
				aria-label="Default select example"
				v-model="sMenuType"
				@change="onChg"
			>
				<option value="Header" selected>Header</option>
				<option value="SideBar">SideBar</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			sMenuType: 'Header',
		};
	},
	methods: {
		onChg: function () {
			sessionStorage.setItem('setMeneType', this.sMenuType);
		},
	},
	beforeMount() {
		const setMeneType = sessionStorage.getItem('setMeneType');
		if (setMeneType) this.sMenuType = setMeneType;
	},
};
</script>
