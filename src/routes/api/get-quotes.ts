import { getQuotesList } from '$lib/utils';

interface GetQuotesResponse {
  body: {
    quotes: IQuote[];
  };
}

export const get = async (): Promise<GetQuotesResponse> => {
  const res = await fetch(import.meta.env.VITE_QUOTES_URL);
  const text = await res.text();

  return {
    body: {
      quotes: getQuotesList(text),
    },
  };
};
