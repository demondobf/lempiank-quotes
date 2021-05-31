<script lang="ts">
	export let quote: IQuote;
	import { fade } from 'svelte/transition';
</script>

<template>
	{#each [quote] as quote (quote)}
		<div class="wrapper" in:fade>
			<h1 class="text">{quote.text}</h1>
			<time class="date" datetime={quote.date}>{quote.date}</time>
		</div>
	{/each}
</template>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 50vh;
	}

	.text {
		font-size: clamp(2.5rem, 3vw, 4rem);
		margin-bottom: 0.25em;
	}

	.date {
		font-size: 1.5rem;
	}
</style>
