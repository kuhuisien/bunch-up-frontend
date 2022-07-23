<script lang="ts">
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import BunchItem from '$lib/bunch/BunchItem.svelte';
	import type { PersonalBunch } from '$lib/store/bunch-store';
	import Empty from '$lib/layout/Empty.svelte';

	export let bunchList: PersonalBunch[];
</script>

{#if bunchList.length === 0}
	<Empty />
{/if}
<section>
	{#each bunchList as bunchItem (bunchItem.id)}
		<div transition:scale animate:flip={{ duration: 300 }}>
			<BunchItem {...bunchItem} on:toggleFav />
		</div>
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
