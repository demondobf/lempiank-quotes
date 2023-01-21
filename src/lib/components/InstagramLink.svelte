<script lang="ts">
	import ExternalLink from './ExternalLink.svelte';
</script>

<ExternalLink
	class="shrink-0 ring-current transition-all hover:drop-shadow-2xl focus-visible:outline-none focus-visible:ring-8"
	href="https://www.instagram.com/lempiank/"
	rel="noopener noreferrer"
	target="_blank"
>
	<picture>
		<source srcset="images/lempiank.webp" type="image/webp" />
		<img src="images/lempiank.png" alt="Lempiank" width="500" height="500" />
	</picture>
</ExternalLink>
