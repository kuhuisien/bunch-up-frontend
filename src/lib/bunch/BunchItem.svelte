<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Button from '$lib/ui/Button.svelte';
	import Badge from '$lib/ui/Badge.svelte';
	import { goto } from '$app/navigation';

	export let id: string;
	export let title: string | null;
	export let subtitle: string | null;
	export let imageUrl: string | null;
	export let description: string | null;
	export let email: string | null;
	export let isFavourite: boolean;

	const dispatch = createEventDispatcher();

	const onToggleFav = () => {
		dispatch('toggleFav', id);
	};

	const onShowDetailButtonClick = () => {
		goto(`/bunch/${id}`);
	};
</script>

<article>
	<header>
		<h1>
			{title}
			{#if isFavourite} <Badge>FAVOURITE</Badge>{/if}
		</h1>
		<h2>{subtitle}</h2>
	</header>
	<div class="image">
		<img src={imageUrl} alt={title} />
	</div>
	<div class="content">
		<p>{description}</p>
	</div>
	<footer>
		<Button href="mailto:{email}">Contact</Button>

		<Button mode="outline" color={isFavourite ? '' : 'success'} on:click={onToggleFav}
			>{isFavourite ? 'Unfavorite' : 'Favorite'}</Button
		>

		<Button on:click={onShowDetailButtonClick}>Show Details</Button>
	</footer>
</article>

<style>
	article {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 5px;
		background: white;
		margin: 1rem;
	}

	header,
	.content,
	footer {
		padding: 1rem;
	}

	.image {
		width: 100%;
		height: 12.2rem;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		margin: 0.5rem 0;
	}

	p {
		font-size: 1.25rem;
		margin: 0;
	}

	div {
		text-align: right;
	}

	.content {
		height: 6rem;
		overflow: auto;
	}

	header h2 {
		height: 1.2rem;
	}
</style>
