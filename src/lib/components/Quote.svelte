<script lang="ts">
	import { fade } from 'svelte/transition';
	import Heading from './Heading.svelte';

	export let text: string;
	export let date: string;

	$: formattedDate = new Date(date).toLocaleDateString();
</script>

{#key text}
	<div class="flex flex-col justify-center lg:flex-1" in:fade>
		<Heading>{text}</Heading>
		<time class="text-2xl font-light" datetime={date}>{formattedDate}</time>
	</div>
{/key}
