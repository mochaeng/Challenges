<script lang="ts">
	import { Home, Settings, Star, Search } from 'lucide-svelte';
	import { page } from '$app/stores';

	const photo =
		'https://media.istockphoto.com/id/1629533738/photo/godafoss-waterfall-flowing-with-colorful-sunset-sky-and-male-tourist-standing-on-cliff-in.webp?b=1&s=170667a&w=0&k=20&c=rL3O8838XnyJQjXRj9EduxMIQ2hLRoq0K24nlJcy2Bg=';
	const profilePhoto = 'https://i1.sndcdn.com/artworks-89N2K5THb0gBVZZa-U6vOQg-t500x500.jpg';
</script>

<div class="container">
	<div class="phone">
		<div class="timeline">
			<div class="top">
				<p>Articles</p>
				<p>based on your interest</p>
			</div>
			<div class="cards">
				{@render timelineCard()}
				{@render timelineCard()}
				{@render timelineCard()}
				{@render timelineCard()}
				{@render timelineCard()}
			</div>
		</div>
		<header>
			<nav>
				<ul>
					<li>
						<a href={$page.url.href}>
							<Home size={33} color="white" />
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href={$page.url.href}>
							<Search size={33} color="white" />
							<span>Search</span>
						</a>
					</li>
					<li>
						<a href={$page.url.href}>
							<Star size={33} color="white" />
							<span>Bookmarks</span>
						</a>
					</li>
					<li>
						<a href={$page.url.href}>
							<Settings size={33} color="white" />
							<span>Settings</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</div>

{#snippet timelineCard()}
	<div class="card">
		<img src={photo} alt="A cool view from somewhere in Iceland" />
		<div class="card-info">
			<div class="first-line">
				<p>Harvard Study Shows How To Have Lifetime Joy</p>
				<Star />
			</div>
			<div class="second-line">
				<img src={profilePhoto} alt="Post's author" />
				<div class="author-post">
					<p class="author">Cecilia Duncan</p>
					<p class="post">3 Apr 17 min read</p>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<style>
	:root {
		--header-height: 3.5rem;
		--phone-width: 48rem;
		--phone-height: 58rem;
		--height-compesate: 0.6rem;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: inherit;
	}

	.container {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.phone {
		width: var(--phone-width);
		max-width: var(--phone-width);
		height: calc(100dvh - (calc(var(--header-height) + var(--height-compesate))));
		max-height: var(--phone-height);
		overflow: auto;
		border-radius: 0.25rem;
		box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 0.8);
		border: 0.1rem solid black;
		border-top: none;
		background-color: white;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5rem;
		.top {
			text-align: center;
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 1rem;
		}
		.cards {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	.card {
		padding: 1rem;
		max-width: 500px;
		max-height: 500px;
		overflow: hidden;
		box-shadow: 0.1rem 0.1rem 1rem rgb(0 0 0 / 0.2);
		cursor: pointer;
		img {
			max-height: 300px;
			object-fit: cover;
		}
		.card-info {
			.first-line {
				display: flex;
				gap: 1rem;
				justify-content: space-between;
				margin-top: 0.5rem;
				align-items: center;
				max-height: 6rem;
				width: 100%;
				overflow: hidden;
				p {
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					max-width: 100%;
					text-overflow: ellipsis;
					font-size: 1.1rem;
					font-weight: bold;
				}
			}
			.second-line {
				display: flex;
				margin-top: 0.5rem;
				img {
					max-height: 50px;
					max-width: 50px;
					object-fit: cover;
					border-radius: 9999px;
				}
				.author-post {
					margin-left: 0.5rem;
					background-color: white;
					max-width: 12rem;
					max-height: 6rem;
					overflow: auto;
					.author {
						font-weight: bold;
					}
					.post {
						font-size: 0.9rem;
						opacity: 90%;
					}
				}
			}
		}
	}

	header {
		position: sticky;
		bottom: 0;
		height: var(--header-height);
		max-width: var(--phone-width);
		border-top: 0.1rem solid black;

		background-color: #233aa9;
		padding: 2rem 0;

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

			li {
				a {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: white;
					font-size: 0.8rem;
				}
			}
		}
	}

	@media (width >= 500px) {
		.phone {
			margin: 1rem 0;
			height: calc(100dvh - (calc(var(--header-height) + var(--height-compesate) + 1rem)));
			border-top: 0.1rem solid black;
		}
	}
</style>
