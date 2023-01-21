interface Quote {
	text: string;
	date: string;
}

export const transformToQuotes = (tsvString: string): Quote[] => {
	const entries = tsvString.split('\n').map((entry) => {
		const [date, text] = entry.split('\t');

		return {
			date,
			text: text.replace('\r', '')
		};
	});

	// Remove the header and change order because we have most recent quotes at the end.
	return entries.slice(1).reverse();
};
