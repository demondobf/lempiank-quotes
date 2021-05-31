export const getQuotesList = (tsvString: string): IQuote[] => {
	const entries = tsvString.split('\n').map((entry) => {
		const [date, text] = entry.split('\t');

		return {
			date,
			text: text.replace('\r', '')
		};
	});

	return entries.slice(1).reverse();
};
