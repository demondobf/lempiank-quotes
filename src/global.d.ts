/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
	VITE_QUOTES_URL: string;
}

interface IQuote {
	text: string;
	date: string;
}
