<script lang="ts">
	import { fade } from 'svelte/transition';

	export let text: string;
	export let date: string;

	$: formattedDate = new Date(date).toLocaleDateString();
</script>

{#key text}
	<div class="flex flex-col justify-center lg:flex-1" in:fade>
		<h1 class="text-quote mb-3 font-bold">{text}</h1>
		<time class="text-2xl font-light" datetime={date}>{formattedDate}</time>
	</div>
{/key}

<style lang="postcss">
	.text-quote {
		font-size: clamp(1.5rem, 3vw, 3rem);
	}
</style>
