<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Textfield from '$lib/ui/Textfield.svelte';
	import Button from '$lib/ui/Button.svelte';

	import Modal from '$lib/ui/Modal.svelte';
	import type { Bunch } from '$lib/store/bunch-store';

	let title = '';
	let subtitle = '';
	let address = '';
	let imageUrl = '';
	let email = '';
	let description = '';

	const dispatch = createEventDispatcher();

	function onTitleChange(event: Event): void {
		title = (event.target as HTMLInputElement).value;
	}

	function onSubtitleChange(event: Event): void {
		subtitle = (event.target as HTMLInputElement).value;
	}

	function onAddressChange(event: Event): void {
		address = (event.target as HTMLInputElement).value;
	}

	function onImageUrlChange(event: Event): void {
		imageUrl = (event.target as HTMLInputElement).value;
	}

	function onEmailChange(event: Event): void {
		email = (event.target as HTMLInputElement).value;
	}

	const onSubmit = () => {
		const formData: Bunch = {
			title,
			subtitle,
			imageUrl,
			address,
			email,
			description
		};

		dispatch('add', formData);
	};

	const onCancel = () => {
		dispatch('cancel');
	};
</script>

<main>
	<Modal title="Add New Bunch" on:closemodal showDefaultFooter={false}>
		<form on:submit|preventDefault={onSubmit}>
			<Textfield id="title" label="Title" value={title} on:input={onTitleChange} required />

			<Textfield id="subtitle" label="Subtitle" value={subtitle} on:input={onSubtitleChange} />

			<Textfield id="address" label="Address" value={address} on:input={onAddressChange} />

			<Textfield id="imageUrl" label="Image URL" value={imageUrl} on:input={onImageUrlChange} />

			<Textfield id="email" label="Email" type="email" value={email} on:input={onEmailChange} />

			<Textfield
				controlType="textarea"
				id="description"
				label="Description"
				bind:value={description}
			/>

			<div class="footer-button">
				<Button mode="outline" on:click={onCancel}>Cancel</Button>
				<Button type="submit">Save</Button>
			</div>
		</form>
	</Modal>
</main>

<style>
	form {
		width: 100%;
	}

	.footer-button {
		padding-top: 2rem;
	}
</style>
