<script lang="ts" context="module">
	export type Bunch = Record<
		'id' | 'title' | 'subtitle' | 'description' | 'imageUrl' | 'address' | 'email',
		string | null
	>;
</script>

<script lang="ts">
	import BunchGrid from '$lib/bunch/BunchGrid.svelte';
	import BunchForm from '$lib/bunch/BunchForm.svelte';

	let bunchList: Bunch[] = [
		{
			id: 'b1',
			title: 'CSS Bootcamp',
			subtitle: 'Learn CSS for the first time or brush up your CSS skills and dive in even deeper',
			description:
				'we start at the very basics and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it.',
			imageUrl:
				'https://web-dev.imgix.net/image/foR0vJZKULb5AGJExlazy1xYDgI2/N5mplhgLlq9qzABgyYKQ.png?auto=format&fit=max&w=1200&fm=auto',
			address: 'Suite 104 Block 12 Apartment Pkns Jalan Au3/1 Ampang Ulu Wilayah Persekutuan',
			email: 'webdev.outlook.com'
		},
		{
			id: 'b2',
			title: 'Drawing Workshop',
			subtitle: 'Pour Art and Ccrylic Painting',
			description:
				'With some basic guidance and material provided, you can relieve your stress by learning to draft, sketch, and paint on an empty canvas. ',
			imageUrl: 'https://i.ytimg.com/vi/dnI7lS63VRo/maxresdefault.jpg',
			address: '111 Persiaran Cempaka Sari 3 Taman Cempaka',
			email: 'yuroku.hotmail.com'
		}
	];
</script>

<BunchForm />
<BunchGrid {bunchList} />
