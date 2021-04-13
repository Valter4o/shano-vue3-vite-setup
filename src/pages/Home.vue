<template>
	<div class="box">
		<Button text="zdr" />
	</div>
</template>

<script lang="ts">
import { inject } from "vue";
import Button from "/@/components/atoms/BaseButton.vue";

export default {
	components: { Button },
	setup() {
		const ctx = inject("context");
		return {};
	},
};
</script>

<style lang="scss" scoped>
.box {
	margin: 0 auto;
	margin-top: 200px;
	width: 500px;
	height: 300px;
	border: red solid;
	padding-top: 120px;
	box-sizing: border-box;
}
</style>
