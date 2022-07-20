<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 4rem;
		width: 100%;
		max-width: 1024px;
		margin: 0rem auto;
		box-sizing: border-box;
	}
</style>
