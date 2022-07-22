<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/ui/Button.svelte';
	import bunchStore, { type PersonalBunch } from '$lib/store/bunch-store';
	import { onDestroy } from 'svelte';
	import { goto, afterNavigate } from '$app/navigation';

	let bunch: PersonalBunch | undefined;

	const unsubscribe = bunchStore.subscribe((items) => {
		const id = $page.params.id;

		bunch = items.find((i) => i.id === id);
	});

	onDestroy(() => {
		unsubscribe();
	});

	const onBackButtonClick = () => {
		goto('/', { replaceState: true });
	};
</script>

<section>
	{#if bunch}
		<div class="image">
			<img src={bunch.imageUrl} alt={bunch.title} />
		</div>

		<div class="content">
			<h1>{bunch.title}</h1>
			<h3>{bunch.subtitle}</h3>

			<h3>{bunch.description}</h3>

			<h4>Address: {bunch.address}</h4>

			<Button href="mailto:{bunch.email}">Contact</Button>
			<Button mode="outline" on:click={onBackButtonClick}>Back</Button>
		</div>
	{:else}
		<div>Not found</div>
	{/if}
</section>

<style>
	section {
		margin: 4rem 0.5rem;
	}

	.image {
		width: 100%;
		height: 25rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.image {
		background: #e7e7e7;
	}

	.content {
		text-align: center;
		width: 80%;
		margin: auto;
	}

	h1 {
		margin: 0.5rem 0;
	}

	h4 {
		margin-top: 3rem;
	}
</style>
