<script lang="ts">
	export let href: string | undefined = undefined;
	export let type = 'button';
	export let caption: string | null;
	export let mode: '' | 'success' | 'outline' = '';
</script>

{#if href}
	<a {href}>{caption}</a>
{:else}
	<button class={mode} {type}>{caption}</button>
{/if}

<style>
	button,
	a {
		border: 1px solid var(--accent-color);
		background: var(--accent-color);
		padding: 0.5rem 0.8rem;
		color: var(--pure-white);
		border-radius: 5px;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
		cursor: pointer;
		text-decoration: none;
		margin-bottom: 0.1rem;
	}

	button:focus {
		outline: none;
	}

	button:hover,
	button:active,
	a:hover,
	a:active {
		background: var(--accent-color);
		border-color: var(--accent-color);
		box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
	}

	button:disabled,
	button:disabled:hover,
	button:disabled:active {
		background: var(--light-grey);
		border-color: var(--light-grey);
		color: var(--grey);
		box-shadow: none;
		cursor: not-allowed;
	}

	.success {
		background: var(--success-color);
		border-color: var(--success-color);
	}

	.success:hover,
	.success:active {
		background: var(--success-bright-color);
		border-color: var(--success-bright-color);
	}

	.outline {
		background: transparent;
		color: var(--accent-color);
		box-shadow: none;
	}

	.outline:hover,
	.outline:active {
		background: var(--accent-light-color);
		box-shadow: none;
	}

	.outline:disabled,
	.outline:disabled:hover,
	.outline:disabled:active {
		background: transparent;
		color: var(--light-grey);
	}

	.outline.success {
		border-color: var(--success-color);
		color: var(--success-color);
	}

	.outline.success:hover,
	.outline.success:active {
		background: var(--success-light-color);
	}
</style>
