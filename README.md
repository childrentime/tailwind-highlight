# tailwind-highlight

This is a plugin that adds code highlighting to `@tailwindcss/typography`.

## Install

```bash
npm install -D tailwind-highlight
```

Then add the plugin to your tailwind.config.js file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlight')
    // ...
  ],
}
```

