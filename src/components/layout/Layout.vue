<template>
	<div class="wrapper">
		<Header v-if="sMenuType == 'Header'" :initMenus="aMenu" />
		<SideBar v-if="sMenuType == 'SideBar'" :initMenus="aMenu" />

		<div id="content" class="content PdL10 PdR10 PdT0 PdB0">
			<span
				v-if="sMenuType == 'SideBar'"
				style="font-size: 30px; cursor: pointer"
				@click="openNav"
				>&#9776;</span
			>
			<router-view></router-view>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import SideBar from '@/components/layout/SideBar.vue';

export default {
	name: 'App',
	components: {
		Header,
		SideBar,
		Footer,
	},
	data() {
		return {
			//sMenuType : "Header",
			sMenuType: 'SideBar',
			aMenu: [],
		};
	},
	methods: {
		openNav() {
			document.getElementById('mySidenav').style.width = '250px';
		},
	},
	async beforeCreate() {
		await this.$store.dispatch('getUserNm', 'LCY');
		await this.$store.dispatch('getMenu', {});
		this.aMenu = this.$store.getters.getMenuList;
	},
};
</script>

<style scoped>
.wrapper {
	min-height: 100%;
	position: relative;
	padding-bottom: 19px; /* footer height */
}
</style>
