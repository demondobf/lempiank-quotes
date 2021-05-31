<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LEMPIANK_INSTAGRAM } from '$lib/constants';
</script>

<a href={LEMPIANK_INSTAGRAM} rel="noopener noreferrer" target="_blank" transition:fade>
	<picture>
		<source srcset="images/lempiank.webp" type="image/webp" />
		<img src="images/lempiank.png" alt="Lempiank" width="500" height="500" />
	</picture>
</a>

<style>
	img {
		height: auto;
		max-width: 100%;
		filter: grayscale(1);
	}
</style>
