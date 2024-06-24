<script lang="ts">
	import MaxWidthWrapper from '$lib/components/MaxWidthWrapper.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import '@fontsource-variable/inter';
	import '@fontsource-variable/roboto-mono';

	let { children } = $props();
</script>

<Navbar />

<div>
	<MaxWidthWrapper>
		{@render children()}
	</MaxWidthWrapper>
</div>

<style>
	:root {
		--bg-fuchsia: rgb(253 244 255);
		--bg-slate-50: rgb(248 250 252);
		--bg-rose-50: rgb(255 241 242);
		--bg-rose-600: rgb(225 29 72);
		--bg-rose-800: rgb(159 18 57);
		--bg-stone-900: rgb(28 25 23);
		--bg-fuchsia-950: rgb(74 4 78);
	}

	:global(body) {
		font-family: 'Roboto Mono Variable', monospace;
		min-height: 100vh;
	}

	:global(ul) {
		list-style: none;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	div {
		background-color: var(--bg-rose-50);
		padding-top: 4rem;
		min-height: 100vh;
	}
</style>
