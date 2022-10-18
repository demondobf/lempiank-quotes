<script lang="ts">
  export let onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>

<button class="button" on:click={onClick} aria-label="Następny cytat">
  <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
</button>

<style lang="scss">
  .button {
    position: fixed;
    bottom: 2em;
    left: 50%;
    transform: translateX(-50%);

    width: 5rem;
    height: 5rem;

    border-radius: 50%;

    &::after {
      border-radius: 50%;
    }

    & > * {
      animation: spin 1s ease infinite paused;
    }

    &:hover,
    &:focus {
      & > * {
        animation-play-state: running;
      }
    }
  }

  .icon {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
</style>
