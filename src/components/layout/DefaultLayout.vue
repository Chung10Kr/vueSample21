<template>
	<div class="wrapper">
		<Header v-if="sMenuType == 'Header'" />
		<SideBar v-if="sMenuType == 'SideBar'" />

		<div id="content" class="content px-1 py-0">
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
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SideBar from '@/components/layout/sideBar';

export default {
	name: 'App',
	components: {
		Header,
		SideBar,
		Footer,
	},
	data() {
		return {
			sMenuType: 'Header',
		};
	},
	methods: {
		openNav() {
			document.getElementById('mySidenav').style.width = '250px';
		},
	},
	beforeMount() {
		const setMeneType = localStorage.getItem('setMeneType');
		if (setMeneType) this.sMenuType = setMeneType;
	},
};
</script>

<style scoped>
.wrapper {
	height: 100%;
	width: 100%;
	min-height: 100%;
	position: relative;
	padding-bottom: 19px; /* footer height */
}
.content {
	width: 100%;
}
</style>
