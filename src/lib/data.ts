export const projectPhotos = Object.values(
	import.meta.glob('$lib/assets/projects/*', { eager: true, as: 'url' })
);

import type { ProjectCardItem } from '../app';

// const path = '/src/lib/assets/projects/';
// const image = { src: '', alt: 'A print from the project' };

const drivePath = 'https://drive.google.com/thumbnail?id=';
const driveSize = '&sz=w1000';

let items: ProjectCardItem[] = [
	{
		title: 'Basics',
		description: 'Tipography and Colors',
		url: '/easy/basics',
		image: {
			src: drivePath + '1x40FQ73jrUj99IbenNaQUuvRlf00Mbp3' + driveSize,
			alt: 'example from icodethis'
		}
	},
	{
		title: 'Error Page',
		description: 'A custom 404 page',
		url: '/easy/error-page',
		image: {
			src: drivePath + '14dyw6POShUYdSvO5aODrGMeMBMT3rA89' + driveSize,
			alt: 'example from icodethis'
		}
	},
	{
		title: 'Blog Post',
		description: 'A blog post card',
		url: '/easy/blog-post',
		image: {
			src: drivePath + '1xqvLqbTsFC2VWHvsK3Ekea1Obo5Tqo6G' + driveSize,
			alt: 'example from icodethis'
		}
	},
	{
		title: 'Cart Item',
		description: 'A cart item card',
		url: '/easy/cart-item',
		image: {
			src: drivePath + '' + driveSize,
			alt: 'example from icodethis'
		}
	},
	{
		title: 'Mobile App',
		description: 'A blog in mobile view',
		url: '/easy/mobile-blogging-app',
		image: {
			src: drivePath + '1i68pvex4lga2xKts2_tu_3SVqFLJyC8S' + driveSize,
			alt: 'example from icodethis'
		}
	}
];

// items = items.map((item, idx) => {
// 	if (projectPhotos[idx]) {
// 		return {
// 			...item,
// 			image: {
// 				...item.image,
// 				src: projectPhotos[idx]
// 			}
// 		};
// 	}
// 	return item;
// });

export const Challenges = {
	getItems() {
		return items;
	}
};
