<script lang="ts">
	import wallpaper from '$lib/assets/wallpapers/chae.webp';

	const challenges = [
		{ name: 'Basics', path: '/begginers/basics' },
		{ name: 'Error Page', path: '/begginers/error-page' }
	];
</script>

<h1>Fronted Challenges</h1>

<p class="">
	A collection of some fronted challenges I solved on <a
		href="https://icodethis.com/"
		target="_blank">iCodeThis</a
	>
</p>

Begginers problem:

<ul>
	{#each challenges as challenge}
		<li>
			<a href={challenge['path']}>{challenge['name']}</a>
		</li>
	{/each}
</ul>

<img
	src={wallpaper}
	alt="Chaeyoung from TWICE making a silence gesture to show she is the queen"
	width="600px"
/>

<style>
	ul {
		list-style: none;
	}
</style>
