<script>
	import Button from '$lib/ui/Button.svelte';
</script>

<div>
	<h1 class="status">404</h1>
	<h1>Page Not Found</h1>

	<p>We are sorry, the page you requested could not be found.</p>

	<Button href="/">Back to Home</Button>
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

	p {
		margin-bottom: 2rem;
	}
</style>
