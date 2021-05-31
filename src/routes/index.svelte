<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import Photo from '$lib/components/Photo.svelte';
	import Preloader from '$lib/components/Preloader.svelte';
	import Button from '$lib/components/Button.svelte';

	let isError = false;
	let quotes: IQuote[] = [];
	let currentQuote = 0;

	fetch('/api/get-quotes')
		.then((res) => res.json())
		.then((data) => (quotes = data.quotes))
		.catch((error) => (isError = error));

	const changeQuote = () => {
		const hasMoreQuotes = currentQuote < quotes.length - 1;
		const nextQuote = () => currentQuote++;
		const resetQuote = () => (currentQuote = 0);

		hasMoreQuotes ? nextQuote() : resetQuote();
	};
</script>

<template>
	<main class="wrapper">
		{#if !isError && quotes.length}
			<Quote quote={quotes[currentQuote]} />
			<Photo />
			<Button onClick={changeQuote} />
		{/if}

		{#if !isError && !quotes.length}
			<Preloader />
		{/if}

		{#if isError}
			<h1>Something is not yes ಥ_ಥ</h1>
		{/if}
	</main>
</template>

<style lang="scss">
	.wrapper {
		min-height: 100vh;
		padding: 1em;

		display: grid;
		align-items: center;
		justify-items: center;
		grid-template-columns: 1fr 1fr;
		gap: 1em;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
</style>
