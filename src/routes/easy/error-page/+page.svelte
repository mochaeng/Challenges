<div class="wrapper">
	<div class="container">
		<p class="company-name">UIDesignDaily</p>
		<p class="error-name"><span class="text-404">404</span></p>
		<p>The link you clicked may be broken or the page my have been removed.</p>
		<p class="contact">Visit the <a href="/">home page</a> or <a href="/">contact</a> me</p>
	</div>
	<div class="circles">
		<div class="circle"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
</div>

<style>
	:root {
		--grad1: #be95c4;
		--grad2: #e0b1cb;
		--text-color: #ffd6ff;
		--circle-bg: #ffd6ff;
		--container-bg: #5e548e;
	}

	p {
		font-size: 1.8rem;
		color: var(--container-bg);
		/* color: var(white); */
		font-weight: bold;
	}

	a {
		color: inherit;
		text-decoration: underline;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.circles {
		margin: 0;
		padding: 0;
		/* background-color: #eee1ff; */
		background-image: linear-gradient(in lch, var(--grad1), var(--grad2));
		--w: 16;
		--h: 9;
		--width: 100dvw;
		--height: 100dvh;
		width: var(--width);
		height: var(--height);
		position: absolute;
		overflow: hidden;
	}

	.circle {
		margin: 0;
		padding: 0;

		--cr: calc(var(--circle-diameter) / 2);

		position: absolute;
		left: calc((((var(--cx) - var(--cr)) / var(--w)) * 160vmin));
		top: calc((((var(--cy) - var(--cr)) / var(--w)) * 160vmin));

		border-radius: 50%;
		background: #f4ecfe;
	}

	.circle:nth-child(1) {
		--circle-diameter: 6;
		width: calc((var(--circle-diameter) / var(--w)) * 160vmin);
		height: calc((var(--circle-diameter) / var(--w)) * 160vmin);

		--cx: 10; /* distance of center from the left */
		--cy: 4; /* distance of center from the top */
		z-index: 1;
	}

	.circle:nth-child(2) {
		--cx: 13.7;
		--cy: 3.3;
		z-index: 1;
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 100;
		color: white;
		padding: 1em;
		border-radius: 2rem;
		max-width: 65ch;
		background-color: white;
	}

	.text-404 {
		font-size: 12rem;
		font-weight: bold;
		margin-top: 10px;
	}

	.contact {
		margin-top: 1rem;
		font-size: 1.5rem;
		color: white;
	}
</style>
