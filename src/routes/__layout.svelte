<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
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
		padding: 4rem 0;
		width: 100%;
		max-width: 1024px;
		margin: 2rem auto;
		box-sizing: border-box;
	}
</style>
