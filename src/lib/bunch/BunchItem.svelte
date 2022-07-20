<script lang="ts">
	export let title: string | null;
	export let subtitle: string | null;
	export let imageUrl: string | null;
	export let description: string | null;
	export let email: string | null;
</script>

<article>
	<header>
		<h1>{title}</h1>
		<h2>{subtitle}</h2>
	</header>
	<div class="image">
		<img src={imageUrl} alt={title} />
	</div>
	<div class="content">
		<p>{description}</p>
	</div>
	<footer>
		<a href="mailto:{email}">Contact</a>
		<button>Show Details</button>
		<button>Favorite</button>
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

	h1.is-favorite {
		background: #01a129;
		color: white;
		padding: 0 0.5rem;
		border-radius: 5px;
	}

	p {
		font-size: 1.25rem;
		margin: 0;
	}

	div {
		text-align: right;
	}
</style>
