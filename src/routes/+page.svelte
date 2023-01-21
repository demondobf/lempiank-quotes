<script lang="ts">
	import type { PageData } from './$types';
	import InstagramLink from '$lib/components/InstagramLink.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	export let data: PageData;

	$: quotesCount = data.quotes.length;
	$: currentQuoteIndex = 0;

	const goToNextQuote = () => {
		if (currentQuoteIndex === quotesCount - 1) return;
		currentQuoteIndex += 1;
	};

	const goToPreviousQuote = () => {
		if (currentQuoteIndex === 0) return;
		currentQuoteIndex -= 1;
	};
</script>

<main class="mx-auto flex min-h-screen max-w-lg flex-col p-8 lg:max-w-screen-2xl">
	<div class="flex flex-col gap-8 lg:mt-auto lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-12">
		<InstagramLink />
		<Quote {...data.quotes[currentQuoteIndex]} />
	</div>

	<div class="mt-auto flex items-center justify-between gap-4 lg:justify-start">
		<Navigation {quotesCount} {currentQuoteIndex} on:previous={goToPreviousQuote} on:next={goToNextQuote} />
	</div>
</main>
