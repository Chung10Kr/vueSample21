<template>
	<div>
		<b-navbar
			toggleable="lg"
			type="dark"
			variant="dark"
			class="PdL10 PdR10 PdT5 PdB5"
		>
			<b-navbar-brand href="/">HOME</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item
						:href="d.src"
						:key="i"
						v-for="(d, i) in $store.state.menuList"
					>
						{{ d.name }}
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data() {
		return {};
	},
};
</script>
