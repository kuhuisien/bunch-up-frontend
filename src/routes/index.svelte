<script lang="ts">
	import BunchGrid from '$lib/bunch/BunchGrid.svelte';
	import BunchForm from '$lib/bunch/BunchForm.svelte';
	import Button from '$lib/ui/Button.svelte';
	import bunchStore from '$lib/store/bunch-store';

	let formMode: '' | 'add' | 'edit' = '';

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
<BunchGrid bunchList={$bunchStore} on:toggleFav={toggleFav} />

<style>
	.addnew {
		margin: 0 1rem 0;
	}
</style>
