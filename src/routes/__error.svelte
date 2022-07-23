<script context="module" lang="ts">
	export function load({ error, status }: { error: Error; status: number }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script lang="ts">
	import ErrorScreen from '$lib/layout/ErrorScreen.svelte';
	import NotFoundScreen from '$lib/layout/NotFoundScreen.svelte';
	import Button from '$lib/ui/Button.svelte';

	export let error: Error;
	export let status: number;
</script>

<div>
	<h1 class="status">{status}</h1>

	{#if status === 404}
		<NotFoundScreen />
	{:else}
		<ErrorScreen {error} />
	{/if}
</div>

<style>
	div {
		margin-top: 2rem;
		text-align: center;
	}

	.status {
		font-size: 6rem;
		margin-bottom: 0;
	}
</style>
