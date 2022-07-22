import { writable } from 'svelte/store';

export type Bunch = Record<
	'title' | 'subtitle' | 'description' | 'imageUrl' | 'address' | 'email',
	string | null
>;

export type PersonalBunch = Bunch & {
	isFavourite: boolean;
	id: string;
};

// For solving issue: Property 'randomUUID' does not exist on type 'Crypto'
declare global {
	interface Crypto {
		randomUUID: () => string;
	}
}

const MOCK_BUNCHES: PersonalBunch[] = [
	{
		id: 'b1',
		title: 'CSS Bootcamp',
		subtitle: 'Learn CSS for the first time or brush up your CSS skills and dive in even deeper',
		description:
			'we start at the very basics and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it.',
		imageUrl:
			'https://web-dev.imgix.net/image/foR0vJZKULb5AGJExlazy1xYDgI2/N5mplhgLlq9qzABgyYKQ.png?auto=format&fit=max&w=1200&fm=auto',
		address: 'Suite 104 Block 12 Apartment Pkns Jalan Au3/1 Ampang Ulu Wilayah Persekutuan',
		email: 'webdev.outlook.com',
		isFavourite: false
	},
	{
		id: 'b2',
		title: 'Drawing Workshop',
		subtitle: 'Pour Art and Ccrylic Painting',
		description:
			'With some basic guidance and material provided, you can relieve your stress by learning to draft, sketch, and paint on an empty canvas. ',
		imageUrl: 'https://i.ytimg.com/vi/dnI7lS63VRo/maxresdefault.jpg',
		address: '111 Persiaran Cempaka Sari 3 Taman Cempaka',
		email: 'yuroku.hotmail.com',
		isFavourite: true
	}
];

const bunchStore = writable(MOCK_BUNCHES);

const customBunchStore = {
	subscribe: bunchStore.subscribe,
	addBunch: (bunchData: Bunch) => {
		const newBunch: PersonalBunch = { ...bunchData, id: crypto.randomUUID(), isFavourite: false };
		bunchStore.update((bunches) => [newBunch, ...bunches]);
	},
	toggleFav: (id: string) => {
		bunchStore.update((items) => {
			const bunch = { ...items.find((i) => i.id === id) } as PersonalBunch;
			bunch.isFavourite = !bunch.isFavourite;

			return items.map((i) => {
				if (i.id === id) {
					return bunch;
				} else {
					return i;
				}
			});
		});
	}
};

export default customBunchStore;
