<script lang="ts">
	// const photos = Object.values(
	// 	import.meta.glob('$lib/assets/wallpapers/sana*', { eager: true, as: 'url' })
	// );
	// const photo = photos[0];
	const photo =
		'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tCZxH763PSh7gCN1_P-Aa6-kF2DPFmyVrAXsf5DPSsCnJPtXTDSR7Xl68QisvZo1r8oTMvd3yAe2KsfM7DJebL66vvnxrdAgIG8WwtYOP6_Cw5XKfLM4gSocjxZBaH3vT1ebzO=w919-h516-p-k-no-nu';
</script>

<div class="container">
	<div class="card">
		<img alt="Mina from TWICE smiling and holding a camera" src={photo} />
		<!-- <img src={photo} alt="" /> -->
		<article>
			<div class="title">
				<p class="header">Minatozaki Sana</p>
				<p class="description">Singer from twice</p>
			</div>
			<p class="content">
				Sana Minatozaki, known simply as Sana, is a pivotal member of the South Korean girl group
				TWICE. Since her debut with TWICE in 2015 under JYP Entertainment, Sana has not only
				captivated audiences with her vibrant performances and charming personality but has also
				played a crucial role in the group's success and cohesion. One of Sana's most notable
				contributions to TWICE is her ability to bring joy and positivity to her members and fans
				alike. Known for her infectious smile and cheerful demeanor, she often lifts the spirits of
				those around her, creating a harmonious and supportive environment within the group. Her
				positive attitude is contagious, helping to ease tensions and maintain a friendly and
				collaborative atmosphere, which is essential for a group that spends so much time together.
				Sana's dedication to her craft is evident in her performances. She consistently works hard
				to improve her singing, dancing, and overall stage presence. Her commitment to excellence
				inspires her fellow members to strive for their best, fostering a culture of mutual
				encouragement and growth. Sana’s ability to connect with fans through her performances has
				also helped TWICE build a loyal and passionate fanbase worldwide. Beyond her professional
				talents, Sana is known for her genuine kindness and empathy. She often goes out of her way
				to support her fellow members, whether through small acts of kindness or being a dependable
				friend during challenging times. Her willingness to listen and offer comfort has made her a
				pillar of strength within the group. This emotional support is invaluable, especially in the
				high-pressure world of K-pop, where maintaining mental health and well-being is critical.
				Sana’s multilingual abilities have also been a significant asset to TWICE. Being fluent in
				Japanese and proficient in Korean and English, she helps the group connect with a broader
				international audience. This linguistic versatility allows TWICE to engage more deeply with
				fans across different countries, further solidifying their global presence. In summary, Sana
				from TWICE exemplifies how talent, hard work, and a positive attitude can make a substantial
				impact on a group's dynamics and success. Her cheerful personality, dedication to her craft,
				and genuine kindness have helped TWICE become one of the most beloved and successful girl
				groups in the world. Sana's contributions both on and off the stage highlight her as not
				only an invaluable member of TWICE but also a truly good person who spreads positivity
				wherever she goes.
			</p>
		</article>
	</div>
</div>

<style>
	:root {
		--color1: #e9ecee;
		--color2: #876c61;
		--color3: #181313;
		--color4: #1d405d;
		--color5: #633c2b;
	}

	.container {
		height: 100%;
		width: 100%;
		padding-bottom: 2rem;
		.card {
			overflow: auto;
			padding: 0.5rem;
			margin-top: 1rem;
			img {
				border-radius: 1rem;
			}
			border-radius: 1rem;
		}

		article {
			text-wrap: balance;
			overflow: auto;
			background-color: white;
			overflow: auto;
			.title {
				margin-top: 1rem;
				.header {
					color: var(--color4);
					font-size: 2.5rem;
					margin-bottom: 1rem;
				}
				.description {
					color: var(--color3);
					opacity: 0.8;
					font-size: 1.1rem;
					margin-bottom: 1rem;
				}
			}
			.content {
				font-size: 1.25rem;
				line-height: 1.5rem;
			}
		}
	}
	@media (width > 820px) {
		.container {
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(in lch -145deg, var(--color4), var(--color1));
			height: 100dvh;
			.card {
				display: grid;
				padding: 0;
				grid-template-columns: 1fr 1fr;
				overflow: auto;
				max-width: 1280px;
				aspect-ratio: 16/9;
				background-color: white;
				box-shadow: 0 3px 10px rgb(0 0 0 / 0.6);
				img {
					grid-row-start: 1;
					height: 100%;
					object-fit: cover;
				}
			}
			article {
				max-width: 100%;
				overflow: auto;
				padding: 2rem;
			}
		}
	}
</style>
