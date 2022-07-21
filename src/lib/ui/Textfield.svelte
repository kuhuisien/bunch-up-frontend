<script lang="ts">
	export let controlType: 'textarea' | 'text' = 'text';
	export let id: string;
	export let label: string;
	export let rows: number = 3;
	export let value: string | undefined;
	export let type: string = 'text';
	export let required = true;
</script>

<div class="form-control">
	<label for={id}>{label}</label>

	{#if controlType === 'textarea'}
		<textarea {rows} {id} {required} bind:value />
	{:else}
		<input {type} {id} {value} {required} on:input />
	{/if}
</div>

<style>
	input,
	textarea {
		display: block;
		width: 100%;
		border: none;
		border-bottom: 2px solid var(--light-grey);
		border-radius: 3px 3px 0 0;
		background: var(--pure-white);
		padding: 0.15rem 0.25rem;
		transition: border-color 0.1s ease-out;
	}

	input:focus,
	textarea:focus {
		outline: none;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		width: 100%;
	}

	.form-control {
		padding: 0.5rem 0;
		width: 100%;
		margin: 0.25rem 0;
	}
</style>
