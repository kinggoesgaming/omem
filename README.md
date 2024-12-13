# omem

Memoize values in JavaScript.

## Installation

<details>
<summary>Node.js</summary>

```bash
npm install omem
```

</details>

<details>
<summary>Browser</summary>

```html
<script type="module" src="https://unpkg.com/omem"></script>
```

</details>

## Usage

```js
import { memoize } from "omem";

const value = memoize("key", () => "value");
```

## API

### `memoize(key, getValue)`

Memoizes a value.

```js
const value = memoize("key", () => "value");
```

### `memoizeAsync(key, getValue)`

Memoizes an async value.

```js
const value = await memoizeAsync("key", () => Promise.resolve("value"));
```

### `clearMemoized(key)`

Clears a memoized value.

```js
clearMemoized("key");
```

### `clearAllMemoized()`

Clears all memoized values.

```js
clearAllMemoized();
```

## License

[MIT](LICENSE)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
