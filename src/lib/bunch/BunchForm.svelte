<script lang="ts">
	import Textfield from '$lib/ui/Textfield.svelte';
	import Button from '$lib/ui/Button.svelte';
	import type { Bunch } from 'src/routes/index.svelte';

	let title = '';
	let subtitle = '';
	let address = '';
	let imageUrl = '';
	let email = '';
	let description = '';

	function onTitleChange(event: Event): void {
		title = (event.target as HTMLInputElement).value;
	}

	function onSubtitleChange(event: Event): void {
		title = (event.target as HTMLInputElement).value;
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

	function onDescriptionChange(event: Event): void {
		description = (event.target as HTMLInputElement).value;
	}

	const submitBunch = () => {
		const formData: Bunch = {
			id: crypto.randomUUID(),
			title,
			subtitle,
			imageUrl,
			address,
			email,
			description
		};

		// TO DO: create store and dispatch action
		console.log(formData);
	};
</script>

<main>
	<form on:submit|preventDefault={submitBunch}>
		<Textfield id="title" label="Title" value={title} on:input={onTitleChange} />

		<Textfield id="subtitle" label="Subtitle" value={subtitle} on:input={onSubtitleChange} />

		<Textfield id="address" label="Address" value={address} on:input={onAddressChange} />

		<Textfield id="imageUrl" label="Image URL" value={imageUrl} on:input={onImageUrlChange} />

		<Textfield id="email" label="Email" type="email" value={email} on:input={onEmailChange} />

		<Textfield
			controlType="textarea"
			id="description"
			label="Description"
			value={description}
			on:input={onDescriptionChange}
		/>

		<Button type="submit" caption="Save" />
	</form>
</main>

<style>
	form {
		width: 30rem;
		max-width: 90%;
		margin: auto;
	}
</style>
