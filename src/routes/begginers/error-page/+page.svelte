<div class="wrapper">
	<div class="container">
		<p class="company-name">UIDesignDaily</p>
		<p class="error-name"><span class="text-404">404</span></p>
		<p>The link you clicked may be broken or the page my have been removed.</p>
		<p>Visit the <a href="/">home page</a> or <a href="/">contact</a> me</p>
	</div>
</div>

<div class="circles">
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
</div>

<style>
	:root {
		--grad1: #be95c4;
		--grad2: #e0b1cb;

		--text-color: #ffd6ff;
		--circle-bg: #ffd6ff;
		--container-bg: #5e548e;
	}

	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	p {
		font-size: 20px;
		color: var(--text-color);
	}

	a {
		color: inherit;
	}

	.circle {
		position: absolute;
		border-radius: 50%;
		width: 300px;
		height: 300px;
		background-color: var(--circle-bg);
		animation: float 6s infinite;
	}

	.circle:nth-child(1) {
		width: 400px;
		height: 400px;
		left: -50px;
		bottom: -100px;
	}

	.circle:nth-child(2) {
		width: 400px;
		height: 400px;
		top: -100px;
		right: -50px;
	}

	.circle:nth-child(3) {
		width: 200px;
		height: 200px;
		top: 10px;
		left: 10px;
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-image: linear-gradient(to right, var(--grad1), var(--grad2));
		position: relative;
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 100;
		background-color: var(--container-bg);
		padding: 4em;
		border-radius: 10px;
	}

	.text-404 {
		font-size: 12rem;
		font-weight: bold;
		margin-top: 10px;
	}

	@keyframes float {
		0% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-10px) scale(1.05);
		}
		100% {
			transform: translateY(0) scale(1);
		}
	}
</style>
