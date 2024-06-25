export const projectPhotos = Object.values(
	import.meta.glob('$lib/assets/projects/*', { eager: true, as: 'url' })
);

import type { ProjectCardItem } from '../app';

const path = '/src/lib/assets/projects/';

let items: ProjectCardItem[] = [
	{
		title: 'Basics',
		description: 'Tipography and Colors',
		url: '/easy/basics',
		image: { src: path + '1.webp', alt: 'A print from the project' }
	},
	{
		title: 'Error Page',
		description: 'A custom 404 page',
		url: '/easy/error-page',
		image: { src: path + '2.webp', alt: 'A print from the project' }
	},
	{
		title: 'Error Page',
		description: 'A custom 404 page',
		url: '/easy/error-page',
		image: { src: path + '2.webp', alt: 'A print from the project' }
	}
];

items = items.map((item, idx) => {
	if (projectPhotos[idx]) {
		return {
			...item,
			image: {
				...item.image,
				src: projectPhotos[idx]
			}
		};
	}
	return item;
});

export const Challenges = {
	getItems() {
		return items;
	}
};
