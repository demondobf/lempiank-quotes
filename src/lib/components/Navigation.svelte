<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import ChevronLeft from './icons/ChevronLeft.svelte';
	import ChevronRight from './icons/ChevronRight.svelte';

	export let quotesCount: number;
	export let currentQuoteIndex: number;

	const dispatch = createEventDispatcher();
</script>

<Button on:click={() => dispatch('previous')} disabled={currentQuoteIndex === 0}>
	<ChevronLeft class="md:hidden" aria-hidden="true" size={20} />
	<span class="sr-only md:not-sr-only">Poprzedni</span>
	<span class="sr-only">cytat</span>
</Button>

<span class="min-w-[12ch] whitespace-nowrap text-center">
	{currentQuoteIndex + 1} / {quotesCount}
</span>

<Button on:click={() => dispatch('next')} disabled={currentQuoteIndex === quotesCount - 1}>
	<ChevronRight class="md:hidden" aria-hidden="true" size={20} />
	<span class="sr-only md:not-sr-only">Następny</span>
	<span class="sr-only">cytat</span>
</Button>
