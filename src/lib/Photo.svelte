<script lang="ts">
	import { fade } from 'svelte/transition';

	const href = 'https://www.instagram.com/lempiank/';
</script>

<a {href} rel="noopener noreferrer" target="_blank" transition:fade>
	<picture>
		<source srcset="img/lempiank.webp" type="image/webp" />
		<img src="img/lempiank.png" alt="Lempiank" width="500" height="500" />
	</picture>
</a>
