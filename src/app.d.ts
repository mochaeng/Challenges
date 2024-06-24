export type ChallengeCardProps = {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

export type ProjectCardItem = ChallengeCardProps & {
	url: string;
};

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
