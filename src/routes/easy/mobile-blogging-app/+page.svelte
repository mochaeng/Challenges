<script>
	import { Home, Settings } from 'lucide-svelte';
</script>

<div class="container">
	<div class="phone">
		<p>wtf</p>
		<header>
			<nav>
				<ul>
					<li>
						<a href="/home">
							<Home size={33} />
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href="/config">
							<Settings size={33} />
							<span>More</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</div>

<style>
	:root {
		--header-height: 3.5rem;
		--header-width: 4rem;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: inherit;
	}

	:global(body) {
		background-color: lightpink;
		height: 100dvh;
	}

	.container {
		display: flex;
		justify-content: center;
		height: 100dvh;
	}

	.phone {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 500px;
		max-width: 500px;
		max-height: 900px;

		/* height: 60%; */
		/* width: 500px; */
		/* aspect-ratio: 9 / 16; */
		margin: 2rem 0;
		background-color: white;
	}

	header {
		position: sticky;
		bottom: 0;
		height: var(--header-height);

		nav {
			height: 100%;
			width: 100%;
		}

		ul {
			width: 100%;
			height: 100%;
			padding: 0 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: antiquewhite;

			a {
				span {
					display: none;
				}
			}
		}
	}

	@media (width >= 500px) {
	}

	/* @media (width >= 500px) {
		header {
			top: 60px;
			left: 0;
			bottom: 0;
			height: 100dvh;
			width: var(--header-width);
			padding: 0;

			ul {
				flex-direction: column;
				justify-content: start;
				padding: 1rem 0.5rem;
				gap: 1rem;
			}
		}
	} */

	/* @media (width >= 616px) {
		header {
			width: 5rem;
		}
	}

	@media (width >= 1280px) {
		header {
			width: 17.5rem;

			ul {
				align-items: start;
				padding: 2rem;

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 1rem;

					span {
						display: block;
					}
				}
			}
		}
	} */
</style>
