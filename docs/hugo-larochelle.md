# Revue du TP1 de Jérémy Devloo

Ceci est la revue de code du tp1 de Jérémy Devloo, fait par Hugo Larochelle.

## Le code

### Lisibilité et clarté

::: warning
Certaines variables sont déclarées sans leur type précisé.

*Voir code plus bas*
:::

```js{1,2,5,6,10,12,13,15,16}
let formattedCurrentTime = '00:00';
let formattedDuration = '00:00';

watch(() => props.currentTime, (newValue, oldValue) => {
  formattedCurrentTime = formatTime(newValue);
  formattedDuration = formatTime(props.duration);
})

function formatTime(time: string): string {
  const totalSeconds = parseInt(time, 10);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
```

Pour le reste, bon travail!

::: details
Le code est bien séparé en différentes parties ayant chacune leur utilité précise. L'indentation et les espacements sont réguliers et permet une bonne lisibilité.

Les noms des composantes ainsi que ceux des fonctions et des variables sont claires, simples et représentatifs de leur utilité.
:::

### Bonnes pratiques

Tout semble bon, sauf ce qui à déjà été dit.

### Normes et standards

Les normes et standards sont bien respectés. Bravo!

## Tests

***Ignoré***

## Autres

::: warning
Le code contient un nombre très élevé de fonctions qui pourraient être réduit en quelques fonctions plus longues, mais plus simple.
:::

Le reste es bon.

```js
//Exemple
```