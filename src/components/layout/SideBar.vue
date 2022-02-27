<template>
	<div id="mySidenav" class="sidenav">
		<a class="closebtn" @click="closeNav">&times;</a>
		<ul class="manuWrap">
			<a href="/">Home</a>
			<!--1depth-->
			<li :key="i" v-for="(d, i) in $store.state.menuList" class="menu">
				<a :href="d.src" v-if="!d.child">{{ d.name }}</a>

				<!--2depth-->
				<a v-if="d.child" @click="onOpenMenu">{{ d.name }}</a>
				<ul v-if="d.child" class="dep2 hide">
					<li :key="i2" v-for="(d2, i2) in d.child" class="menu">
						<a :href="d2.src" v-if="!d2.child">{{ d2.name }}</a>

						<!--3depth-->
						<a v-if="d2.child" @click="onOpenMenu">
							{{ d2.name }}
						</a>
						<ul v-if="d2.child" class="dep3 hide">
							<li :key="i3" v-for="(d3, i3) in d2.child" class="menu">
								<a :href="d2.src">{{ d3.name }}</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li><a @click="onLogOut">LogOut</a></li>
		</ul>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import $ from 'jquery';
export default {
	name: 'SideBar',
	data() {
		return {};
	},
	methods: {
		movNav() {
			this.closeNav();
		},
		closeNav() {
			document.getElementById('mySidenav').style.width = '0';
			return false;
		},
		onLogOut: async function (e) {
			e.preventDefault();
			await this.logout();
		},
		...mapActions(['logout']),
		onOpenMenu(event) {
			let subMenu = $(event.target).next('ul');
			if (subMenu.is(':visible')) {
				subMenu.slideUp();
			} else {
				console.log($(event.target).closest('.dep2'));
				$('.dep2').not($(event.target).closest('.dep2')).slideUp();
				subMenu.slideDown();
			}
		},
	},
};
</script>

<style scoped>
.sidenav {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #111;
	overflow-x: hidden;
	transition: 0.2s;
	padding-top: 60px;
}

a {
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 25px;
	display: block;
	transition: 0.3s;
	cursor: pointer;
}

a:hover {
	color: #f1f1f1;
}

.sidenav .closebtn {
	position: absolute;
	top: 0;
	right: 25px;
	font-size: 36px;
	margin-left: 50px;
}

@media screen and (max-height: 450px) {
	.sidenav {
		padding-top: 15px;
	}
	.sidenav a {
		font-size: 18px;
	}
}

.manuWrap {
	padding-left: 0px;
}
ul {
	color: #ffffff;
	list-style: none;
}
.menu a {
	cursor: pointer;
}
.menu .hide {
	display: none;
}
</style>
