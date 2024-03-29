import type { PageServerLoad } from './$types';
import { QUOTES_COLLECTION_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { transformToQuotes } from '$lib/helpers/transform-to-quotes';

export const load = (async () => {
	const response = await fetch(QUOTES_COLLECTION_URL);

	if (!response.ok) {
		throw error(500, 'Bad fetch response');
	}

	const quotesTsvString = await response.text();

	return {
		quotes: transformToQuotes(quotesTsvString)
	};
}) satisfies PageServerLoad;
