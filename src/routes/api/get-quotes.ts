import { getQuotesList } from '$lib/utils';

interface GetQuotesResponse {
	body: {
		quotes: Quote[];
	};
}

interface Quote {
	date: string;
	text: string;
}

export async function get(): Promise<GetQuotesResponse> {
	const res = await fetch(import.meta.env.VITE_QUOTES_URL).then((res) => res.text());

	return {
		body: {
			quotes: getQuotesList(res)
		}
	};
}
