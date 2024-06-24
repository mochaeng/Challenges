<script lang="ts">
	import type { ChallengeCardProps } from '../../app';

	let { title, description, image }: ChallengeCardProps = $props();
</script>

<div class="container">
	<img src={image.src} alt={image.alt} />
	<div class="info">
		<p class="title">{title}</p>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	:root {
		--description: #5d5d5d;
	}

	.container {
		display: flex;
		flex-direction: column;
		width: 400px;
		max-width: 400px;
		min-width: 50px;
		height: 400px;
		border: 0.1rem solid rgba(0, 0, 0, 0.8);
		background-color: white;
		border-radius: 0.1rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.container:hover {
		cursor: pointer;
		transform: translate(-0.2rem, -0.2rem);
		box-shadow: 0.4rem 0.4rem var(--bg-stone-900);
	}

	.container:active {
		transform: translate(0);
		box-shadow: none;
	}

	.info {
		margin-top: 0.5rem;
		border: none;
		padding: 0.5rem;
	}

	.title {
		/* margin-top: 1rem; */
		margin-bottom: 0.3rem;
		font-size: 18px;
		font-weight: bold;
	}

	.description {
		color: var(--description);
		font-size: 16px;
	}

	@media (max-width: 846px) {
		.container {
			width: 300px;
			height: 300px;
		}
	}

	@media (max-width: 450px) {
		.container {
			width: 300px;
			height: 300px;
		}
	}
</style>
