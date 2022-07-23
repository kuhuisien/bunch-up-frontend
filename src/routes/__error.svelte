<script context="module" lang="ts">
	export function load({ error, status }: { error: Error; status: number }) {
		return {
			props: {
				message: error.message,
				status
			}
		};
	}
</script>

<script lang="ts">
	import ErrorScreen from '$lib/layout/ErrorScreen.svelte';
	import NotFoundScreen from '$lib/layout/NotFoundScreen.svelte';

	export let message: string;
	export let status: number;
</script>

{#if status == 404}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<NotFoundScreen />
{:else}
	<ErrorScreen {message} {status} />
{/if}
