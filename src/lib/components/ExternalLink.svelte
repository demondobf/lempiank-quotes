<script lang="ts">
	export let href: string;
</script>

<a rel="noopener noreferrer" target="_blank" {href} {...$$restProps}>
	<slot />
</a>
