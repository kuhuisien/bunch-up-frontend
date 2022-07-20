<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<h1>BunchUp</h1>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		height: 4rem;
		background: linear-gradient(var(--pure-white) 10.45%, var(--heading-color) 41.35%);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 6px rgb((0, 0), 0, 0.26);
	}

	h1 {
		color: var(--pure-white);
	}
</style>
