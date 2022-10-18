<script lang="ts">
  import { fade } from 'svelte/transition';
  import { LEMPIANK_INSTAGRAM } from '$lib/constants';
</script>

<svelte:head>
	<link rel="preload" as="image" href="images/lempiank.webp">
	<link rel="preload" as="image" href="images/lempiank.png">
</svelte:head>

<a href={LEMPIANK_INSTAGRAM} rel="noopener noreferrer" target="_blank" in:fade>
  <picture>
    <source srcset="images/lempiank.webp" type="image/webp" />
    <img src="images/lempiank.png" alt="Lempiank" width="500" height="500" />
  </picture>
</a>
