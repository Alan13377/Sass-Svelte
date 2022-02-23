import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
i;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: "@import './static/estilos.scss';"
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;
