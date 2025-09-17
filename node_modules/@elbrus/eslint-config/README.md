# Elbrus Bootcamp's ESLint config

Provides linting and formatting rules for a NodeJS project.

## Installation and usage

Install to your dev dependencies

```bash
npm i -D @elbrus/eslint-config
```

Add this config to your `eslint.config.js` file:

```js
import elbrusConfig from '@elbrus/eslint-config';

export default [
  // other configurations
  ...elbrusConfig,
];
```

## Other configs

React, express and typescript configs are coming soon
