<script lang="ts">
	import MaxWidthWrapper from '$lib/components/MaxWidthWrapper.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import '@fontsource-variable/inter';
	import '@fontsource-variable/roboto-mono';

	let { children } = $props();
	let resizeTimer: any;

	$effect(() => {
		window.addEventListener('resize', () => {
			document.body.classList.add('resize-animation-stopper');
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				document.body.classList.remove('resize-animation-stopper');
			}, 400);
		});
	});
</script>

<Navbar />

<div class="content-wrapper">
	<MaxWidthWrapper>
		{@render children()}
	</MaxWidthWrapper>
</div>

<style>
	:root {
		--app-width-wrapper: 1280px;
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
		overflow-x: hidden;
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

	.resize-animation-stopper * {
		animation: none !important;
		transition: none !important;
	}

	.content-wrapper {
		background-color: var(--bg-rose-50);
		padding-top: 4rem;
		min-height: 100vh;
		padding-bottom: 10rem;
	}

	.navigation-wrapper {
		/* padding-top: 10rem; */
		height: 4rem;
		border-bottom: 0.13rem solid var(--bg-stone-900);
		background-color: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(1rem);
		/* background-color: black; */
	}
</style>
