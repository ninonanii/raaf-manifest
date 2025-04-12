import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex({ extension: '.md' })],
	extensions: ['.svelte', '.svx', '.md'],
};

export default config;
