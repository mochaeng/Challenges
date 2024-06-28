<script lang="ts">
	import '@fontsource-variable/grandstander';
	import '../../global.css';
	import { Menu, X } from 'lucide-svelte';

	let primaryNavigation: HTMLUListElement;
	let isDataVisible = $state(false);

	function toggleHamburguer() {
		console.log('called');
		isDataVisible = !isDataVisible;
	}

	$effect(() => {
		console.log(isDataVisible);
	});
</script>

<header>
	<div class="container">
		<a class="logo" href="/">Challenges</a>
		<button
			onclick={toggleHamburguer}
			aria-controls="primary-navigation"
			aria-expanded={isDataVisible}
		>
			<span class="sr-only">Menu</span>
			<Menu class="menu-icon" />
		</button>
		<nav>
			<ul bind:this={primaryNavigation} data-visible={isDataVisible} id="primary-navigation">
				<li>
					<a href="/"> Easy</a>
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
</header>

<style>
	header {
		position: fixed;
		top: 0;
		z-index: 999;
		height: 4rem;
		width: 100%;

		display: flex;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.95);
		border-bottom: 0.13rem solid var(--bg-stone-900);
	}

	.container {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--app-width-wrapper);
		padding-left: 1rem;
		padding-right: 1rem;

		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;

		button {
			display: none;
		}
	}

	.logo {
		font-weight: bold;
		font-family: 'Grandstander Variable';
		font-size: 2em;
		color: var(--bg-rose-600);
	}

	nav {
		display: flex;
		justify-content: end;
		align-items: center;
		width: 100%;
		height: 100%;

		ul {
			display: flex;
			gap: 2rem;
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
	}

	@media (max-width: 500px) {
		.container {
			button {
				display: block;
				position: absolute;
				z-index: 9999;
				background-color: transparent;
				background-color: gainsboro;
				width: 2rem;
				aspect-ratio: 1;
				top: 1rem;
				right: 2rem;
				border: none;
				cursor: pointer;
			}
		}

		nav {
			ul {
				position: fixed;
				inset: 0 0 0 30%;
				padding: min(20vh, 6rem) 2rem;
				flex-direction: column;
				align-items: center;
				gap: 4rem;
				color: white;
				background: hsl(0 0% 0% / 0.8);
				backdrop-filter: blur(2rem);

				transform: translateX(100%);
				transition: transform 350ms ease-in;
			}

			ul[data-visible='true'] {
				transform: translateX(0%);
				transition: transform 350ms ease-out;
			}

			li {
				a::after {
					background-color: white;
				}
			}
		}
	}
</style>
