<script lang="ts">
  const messages = [
    'Szukam głupot...',
    'Ładuję cytaty...',
    'Trzeba poczekać troszkę...',
    'Sprawdzam co Lempiank mówiła...',
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
</script>

<h1>{randomMessage}</h1>
