<template>
	<div class="spinner-wrap" v-if="loading">
		<div class="spinner-border" role="status">
			<span class="sr-only"></span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true,
		},
	},
};
</script>

<style>
.spinner-wrap {
	display: inline-block;
	position: absolute;
	width: 64px;
	height: 64px;
	top: 47%;
	left: 47%;
}
@keyframes lds-facebook {
	0% {
		top: 6px;
		height: 51px;
	}
	50%,
	100% {
		top: 19px;
		height: 26px;
	}
}
</style>
