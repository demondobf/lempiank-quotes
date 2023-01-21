<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes;
</script>

<button
	on:click
	class="px-4 py-1 font-semibold ring-current transition-all focus-visible:outline-none focus-visible:ring-2 enabled:hover:bg-neutral-100 enabled:hover:text-neutral-900 disabled:text-neutral-400"
	{...$$restProps}
>
	<slot />
</button>
