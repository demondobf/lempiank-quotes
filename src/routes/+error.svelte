<script>
	import { page } from '$app/stores';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
</script>

<main class="grid min-h-screen place-items-center p-4 text-center">
	<div>
		<h1 class="mb-8 text-5xl font-bold">Something is not yes ಥ_ಥ</h1>
		<p>
			{#if $page.error?.message}
				<b>{$page.error.message} ({$page.status})</b>.
			{/if}

			Międzyczasie możesz sprawdzić czy jest
			<ExternalLink class="text-purple-500" href="http://twitch.tv/lempiank">stream</ExternalLink>
			albo coś...
		</p>
	</div>
</main>
