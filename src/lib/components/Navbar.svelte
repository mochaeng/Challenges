<script lang="ts">
	import MaxWidthWrapper from './MaxWidthWrapper.svelte';
	import '@fontsource-variable/grandstander';
</script>

<header>
	<MaxWidthWrapper>
		<div class="main">
			<a class="logo" href="/">Challenges</a>
			<nav>
				<ul>
					<li>
						<a href="/">Easy</a>
					</li>
					<li>
						<a href="/">Medium</a>
					</li>
					<li>
						<a href="/">Hard</a>
					</li>
				</ul>
			</nav>
		</div>
	</MaxWidthWrapper>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 999;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 0.13rem solid var(--bg-stone-900);
		background-color: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(1rem);
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-weight: bold;
		font-family: 'Grandstander Variable';
		font-size: 2em;
		color: var(--bg-rose-600);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: end;
		position: sticky;
		left: 0px;
		right: 0px;
		z-index: 100;
		height: 4rem;
		width: 100%;
	}

	a {
		text-decoration: inherit;
	}

	li {
		a {
			padding: 0.5rem;
			border-radius: 1rem;
			font-size: 18px;
			position: relative;
		}

		a::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			transform: scaleX(0);
			bottom: 0;
			left: 0;
			background-color: var(--bg-stone-900);
			transform-origin: left;
			transition: transform 0.3s ease-out;
		}

		a:hover::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}

	ul {
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 500px) {
		ul {
			gap: 0.1rem;
		}
	}
</style>
