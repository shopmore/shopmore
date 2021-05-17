<script lang="ts">
	import { onMount } from 'svelte'
	let name = "World";
	let message = "";
	function update() {
		fetch("/api/samples/hello?name="+name)
		.then(r => r.text())
		.then(m => { message = m})
	}
	onMount(update)
</script>

<main>
	<h1>{message}</h1>
	<p>What is your name?</p>
	<input type="text" bind:value={name} on:input={update}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>