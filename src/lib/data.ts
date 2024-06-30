export const projectPhotos = Object.values(
	import.meta.glob('$lib/assets/projects/*', { eager: true, as: 'url' })
);

import type { ProjectCardItem } from '../app';

const path = '/src/lib/assets/projects/';
const image = { src: '', alt: 'A print from the project' };

let items: ProjectCardItem[] = [
	{
		title: 'Basics',
		description: 'Tipography and Colors',
		url: '/easy/basics',
		image
	},
	{
		title: 'Error Page',
		description: 'A custom 404 page',
		url: '/easy/error-page',
		image
	},
	{
		title: 'Blog Post',
		description: 'A blog post card',
		url: '/easy/blog-post',
		image
	},
	{
		title: 'Cart Item',
		description: 'A cart item card',
		url: '/easy/cart-item',
		image
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
