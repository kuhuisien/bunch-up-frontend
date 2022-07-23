<script context="module" lang="ts">
	import { MOCK_BUNCHES } from '$lib/mock';

	export function load({ params }: { params: { id: string } }) {
		const id = params.id;
		return {
			props: { fetchedBunch: MOCK_BUNCHES.find((i) => i.id === id) }
		};
	}
</script>

<script lang="ts">
	import type { PersonalBunch } from '$lib/store/bunch-store';

	import { goto } from '$app/navigation';

	import Button from '$lib/ui/Button.svelte';
	import Empty from '$lib/layout/Empty.svelte';

	export let fetchedBunch: PersonalBunch | undefined;

	const onBackButtonClick = () => {
		goto('/');
	};
</script>

<svelte:head>
	<title>Bunch detail</title>
</svelte:head>

<section>
	{#if fetchedBunch}
		<div class="image">
			<img src={fetchedBunch.imageUrl} alt={fetchedBunch.title} />
		</div>

		<div class="content">
			<h1>{fetchedBunch.title}</h1>
			<h3>{fetchedBunch.subtitle}</h3>

			<h3>{fetchedBunch.description}</h3>

			<h4>Address: {fetchedBunch.address}</h4>

			<Button href="mailto:{fetchedBunch.email}">Contact</Button>
			<Button mode="outline" on:click={onBackButtonClick}>Back</Button>
		</div>
	{:else}
		<Empty />
	{/if}
</section>

<style>
	section {
		margin: 0 auto;
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
