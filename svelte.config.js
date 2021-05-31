import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte'
	}
};

export default config;
