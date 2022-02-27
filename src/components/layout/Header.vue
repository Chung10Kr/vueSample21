<template>
	<div>
		<b-navbar
			toggleable="lg"
			type="dark"
			variant="dark"
			class="PdL10 PdR10 PdT5 PdB5"
		>
			<b-navbar-brand href="/">HOME</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse">
				<template #default="{ expanded }">
					<b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
					<b-icon v-else icon="chevron-bar-down"></b-icon>
				</template>
			</b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<ul class="manuWrap">
					<!--1depth-->
					<li
						:key="i"
						v-for="(d, i) in $store.state.menuList"
						class="menu float-lg-start pe-2"
					>
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
					<li class="float-lg-end">
						<a @click="onLogOut">LogOut</a>
					</li>
				</ul>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
import $ from 'jquery';
export default {
	name: 'Header',
	data() {
		return {};
	},
	methods: {
		onLogOut: async function () {
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
.manuWrap {
	padding-left: 0px;
	width: 100%;
	margin: 0px;
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
