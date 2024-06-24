<div class="container">
	<p><span class="topic-box bold">TYPOGRAPHY</span></p>

	<p><span class="bold">Make me bold</span></p>
	<p><span class="italic">Make me italic</span></p>

	<p>I'm from the Arial font family!</p>
	<p><span class="font-new-roman">And I'm from the Times New Roman font family!</span></p>

	<p><span class="underline">Make this text be underlined</span></p>
	<p class="line-through">And put a line through this one</p>

	<p><span class="topic-box bold">HEADINGS</span></p>

	<h1>This is a &lt;h1&gt; tag</h1>

	<h2>This is a &lt;h2&gt; tag</h2>
	<h3>This is a &lt;h3&gt; tag</h3>

	<p><span class="topic-box bold">COLORS</span></p>

	<p><span class="orange">Color me orange!</span></p>
	<div class="orange-block geometry-block"></div>

	<p><span class="purple">Color me purple!</span></p>
	<div class="purple-circle geometry-block"></div>

	<p><span class="topic-box bold">BUTTONS</span></p>

	<p><span class="bold">Default</span></p>
	<button>Button</button>

	<p><span class="bold">Hovered</span></p>
	<button class="button-hovered">Button</button>

	<p><span class="bold">Active</span></p>
	<button>Button</button>
</div>

<style>
	:root {
		--orange: #ef5327;
		--purple: #371f76;
		--purple-hover: #643b9f;
		--purple-active: #ac94f4;
	}

	.container {
		margin-top: 1em;
		margin-left: 1em;
	}

	button {
		background-color: var(--purple);
		color: white;
		border: none;
		padding: 1rem 4rem;
		cursor: pointer;
	}

	button:hover {
		opacity: 90%;
		background-color: var(--purple-hover);
	}

	button:active {
		background-color: var(--purple-active);
		color: black;
	}

	.container {
		font-family: Arial, Helvetica, sans-serif;
	}

	.topic-box {
		display: inline-block;
		background-color: #d3d3d3;
		padding: 0.4rem;
		border-radius: 5%;
		box-shadow: 0px 5px 5px rgba(0, 0, 255, 0.2);
		margin-top: 2em;
		margin-bottom: 1em;
	}

	.bold {
		font-weight: bold;
	}

	.italic {
		font-style: italic;
	}

	.line-through {
		text-decoration: line-through;
	}

	.underline {
		text-decoration-line: underline;
	}

	.font-new-roman {
		font-family: 'Times New Roman', Times, serif;
	}

	.orange {
		color: var(--orange);
	}

	.purple {
		color: var(--purple);
	}

	.geometry-block {
		display: inline-block;
	}

	.orange-block {
		padding: 2rem;
		background-color: var(--orange);
	}

	.purple-circle {
		background-color: var(--purple);
		padding: 2rem;
		border-radius: 100%;
	}
</style>
