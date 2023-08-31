import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server:{
		port:4001,
		cors:true,
		host:true,
	},
	plugins: [sveltekit()]
});
