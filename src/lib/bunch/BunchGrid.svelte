<script lang="ts">
	import BunchItem from '$lib/bunch/BunchItem.svelte';
	import type { PersonalBunch } from 'src/routes/index.svelte';

	export let bunchList: PersonalBunch[];
</script>

<section>
	{#each bunchList as bunchItem}
		<BunchItem {...bunchItem} />
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
