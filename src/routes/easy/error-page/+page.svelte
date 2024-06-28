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
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-image: linear-gradient(in lch, var(--grad1), var(--grad2));
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 100;
		color: white;
		padding: 4em;
		border-radius: 10px;
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
