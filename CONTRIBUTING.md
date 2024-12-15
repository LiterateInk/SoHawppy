# Contributing

## Development

To start developing, clone the repository and install the dependencies.

```bash
# Clone the repository.
git clone https://github.com/LiterateInk/SoHawppy && cd SoHawppy
# Switch to the JS/TS implementation branch.
git checkout js
# Install dependencies.
pnpm install
```

> In case you don't have `pnpm` installed, you can install it by running `npm install --global pnpm`.

## Code Structure

### `definitions`

Typings for the API responses, should only be used internally.

### `core`

Helper functions and classes, should only be used internally.

### `models`

Our own models for the API responses, we use these to make the data more readable.

It's separated in the following way:

- `atoms/` - Simple models that don't have any dependencies.
- `molecules/` - Models that depend on atoms, could be a complete response for an API function.

### `decoders`

A function that decodes `any` object (could also be from `definitions` type) to a given `models` type.
Useful when a model is used at multiple places and you don't want to repeat the decoding logic.

Should only be used internally.

### `api`

The API functions, these are the functions that interact with the API.

Those functions have to be typed ONLY with `models` types for parameters and return types.
You can use whatever you want internally, but the public API should be typed with `models`.

## Testing

We use [Bun](https://bun.sh) for testing by running `bun test`.

When we test an API function, we mock the fetcher and test the function with the mocked fetcher.
Most of the time we only check if the function returns the correct type and called the fetcher with the correct parameters.

## Publishing

We use our internal tool [QuickRelease](https://github.com/LiterateInk/QuickRelease) to write a new release.

It'll bump the version, push a new tag and an action will automatically publish the package to NPM.
