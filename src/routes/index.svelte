<script lang="ts">
	import Quotes from '$lib/components/Quotes.svelte';
	import Photo from '$lib/components/Photo.svelte';
</script>

<main>
	<Quotes />
	<Photo />
</main>

<style>
	main {
		min-height: 100vh;
		padding: 1em;

		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-items: center;
	}

	@media (max-width: 768px) {
		main {
			grid-template-columns: 1fr;
		}
	}
</style>
