<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import Button from './Button.svelte';

	const dispatch = createEventDispatcher();

	export let title: string;
	export let showDefaultFooter = true;

	const closeModal = () => {
		dispatch('closemodal');
	};
</script>

<div transition:fade class="backdrop" on:click={closeModal} />
<div transition:fly={{ y: 300 }} class="modal">
	<h1>{title}</h1>

	<div class="content"><slot /></div>

	{#if showDefaultFooter}
		<footer>
			<slot name="footer">
				<Button on:click={closeModal}>Close</Button>
			</slot>
		</footer>
	{/if}
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		position: fixed;
		top: 10vh;
		left: 10%;
		width: 80%;
		max-height: 80vh;
		background: var(--pure-white);
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		overflow: scroll;
	}

	h1 {
		padding: 1rem;
		margin: 0;
		border-bottom: 1px solid #ccc;
	}

	.content {
		padding: 1rem;
	}

	footer {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.modal {
			width: 40rem;
			left: calc(50% - 20rem);
		}
	}
</style>
