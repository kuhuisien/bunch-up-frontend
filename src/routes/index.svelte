<script context="module" lang="ts">
	import { MOCK_BUNCHES } from '$lib/mock';

	export function load() {
		return {
			props: { fetchedBunches: MOCK_BUNCHES }
		};
	}
</script>

<script lang="ts">
	import BunchGrid from '$lib/bunch/BunchGrid.svelte';
	import BunchForm from '$lib/bunch/BunchForm.svelte';
	import Button from '$lib/ui/Button.svelte';
	import bunchStore, { type PersonalBunch } from '$lib/store/bunch-store';
	import { onDestroy, onMount } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';

	let formMode: '' | 'add' | 'edit' = '';

	export let fetchedBunches: PersonalBunch[];
	let unsubscribe: Unsubscriber | undefined;
	let loadedBunches: PersonalBunch[] = [];

	onMount(() => {
		unsubscribe = bunchStore.subscribe((items) => {
			loadedBunches = items;
		});
		bunchStore.setBunches(fetchedBunches);
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	const resetFormMode = () => {
		formMode = '';
	};

	const addBunch = (event: CustomEvent) => {
		const bunch = event.detail;
		bunchStore.addBunch(bunch);

		resetFormMode();
	};

	const toggleFav = (event: CustomEvent) => {
		const id = event.detail;
		bunchStore.toggleFav(id);
	};
</script>

<svelte:head>
	<title>BunchUp</title>
</svelte:head>

<div class="addnew">
	<Button on:click={() => (formMode = 'add')}>Add New</Button>
</div>

{#if formMode}
	<BunchForm on:add={addBunch} on:closemodal={resetFormMode} on:cancel={resetFormMode} />
{/if}
<BunchGrid bunchList={loadedBunches} on:toggleFav={toggleFav} />

<style>
	.addnew {
		margin: 0 1rem 0;
	}
</style>
