<script lang="ts">
	let { children } = $props();
</script>

<div class="app-wrapper">
	{@render children()}
</div>

<style>
	.app-wrapper {
		min-height: 100vh;
		padding: 20px;
	}
</style>
