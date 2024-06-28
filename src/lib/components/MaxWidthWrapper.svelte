<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="wrapper">
	{@render children()}
</div>

<style>
	.wrapper {
		margin-left: auto;
		margin-right: auto;
		/* height: 100%; */
		height: 100dvh;
		/* width: 100dvw; */
		max-width: var(--app-width-wrapper);

		padding-left: 1rem;
		padding-right: 1rem;
	}

	/* @media (max-width: 768px) {
		.wrapper {
			padding-left: 1em;
			padding-right: 1em;
		}
	} */
</style>
