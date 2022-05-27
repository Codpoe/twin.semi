# twin.semi

A tailwind color preset for Semi Design.
> Heavily inspired by [twin.arco](https://github.com/bytesfriends/twin.arco)

## Why

[Semi Design](https://semi.design) provides a set of CSS Variables, both color palette and theme.

Without this preset, we may need to write the class names like this in tailwind to use the semi css variables:

```html
<div class="text-[color:var(--semi-color-primary)] "></div>
```

It's very verbose!

But now we have this color preset, we can use semi variables like writing normal tailwind class names

```html
<div class="text-semi-color-primary"></div>
```

## Installation

```
pnpm install twin.semi -D
```

## Configuration

```js
// tailwind.config.js

const { twinSemiPreset } = require('twin.semi')

module.exports = {
  presets: [twinSemiPreset()],
}
```

## License
MIT License © 2022 [codpoe](https://github.com/codpoe)
