<script lang="ts">
	import type { PageData } from './$types';
	import InstagramLink from '$lib/components/InstagramLink.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let data: PageData;

	$: quotesCount = data.quotes.length;
	$: currentQuoteIndex = 0;
	$: hasQuotes = quotesCount !== 0;

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
	<div class="lg:gap-12' mb-auto flex flex-col gap-8 lg:mt-auto lg:flex-row-reverse lg:items-center lg:justify-center">
		<InstagramLink />
		{#if hasQuotes}
			<Quote {...data.quotes[currentQuoteIndex]} />
		{:else}
			<Heading>Dzisiaj nie mam nic do powiedzenia</Heading>
		{/if}
	</div>

	{#if hasQuotes}
		<div class="flex items-center justify-between gap-4 lg:justify-start">
			<Navigation {quotesCount} {currentQuoteIndex} on:previous={goToPreviousQuote} on:next={goToNextQuote} />
		</div>
	{/if}
</main>
