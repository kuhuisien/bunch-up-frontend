<script lang="ts">
	import BunchItem from '$lib/bunch/BunchItem.svelte';
	import type { Bunch } from 'src/routes/index.svelte';

	export let bunchList: Bunch[];
</script>

<section>
	{#each bunchList as bunchItem}
		<BunchItem
			title={bunchItem.title}
			subtitle={bunchItem.subtitle}
			imageUrl={bunchItem.imageUrl}
			description={bunchItem.description}
			email={bunchItem.email}
		/>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	@media (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
