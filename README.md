# paxpar webcomp

We use `nuxt-custom-elements@beta` to generate our web components.

## TODO

* [ ] enable nuxt UI
* [ ] private gitlab proj
* [ ] deploy static build on gitlab pages
* [ ] local serve with npx serve dist

## local dev

```
npx bun run dev
```

Browse `http://localhost:3000`

## local static serve

```shell
npx bun run generate
python3 -m http.server -d dist 3000
# `npx serve dist` will not work : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default
```

Browse `http://localhost:3000`

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
