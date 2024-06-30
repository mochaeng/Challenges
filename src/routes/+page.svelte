<script lang="ts">
	import { Challenges } from '$lib/data';

	import ProjectCard from '$lib/components/ChallengeCard.svelte';
	import MaxWidthWrapper from '$lib/components/MaxWidthWrapper.svelte';

	console.log(Challenges.getItems());
</script>

<MaxWidthWrapper>
	<section>
		<h1>Fronted Challenges</h1>

		<p>
			A collection of some fronted challenges I solved on <a
				href="https://icodethis.com/"
				target="_blank">iCodeThis</a
			>
		</p>

		<div class="cards">
			<ul>
				{#each Challenges.getItems() as challenge}
					<li>
						<a href={challenge.url}>
							<ProjectCard
								title={challenge.title}
								description={challenge.description}
								image={challenge.image}
							/>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</MaxWidthWrapper>

<style>
	section {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	h1 {
		font-size: 2rem;
	}

	h1 ~ p {
		max-width: 450px;
		font-size: large;
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.cards > ul {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	ul {
		list-style: none;
	}
</style>
