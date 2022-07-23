<script lang="ts">
	import { dev } from '$app/env';

	export let error: Error;
</script>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<style>
	pre {
		margin-top: 3rem;
		text-align: left;
	}
</style>
