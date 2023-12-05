# pp-webcomp-demo

Experiments with [nuxt UI](https://ui.nuxt.com/) and [web components](https://www.webcomponents.org/).

Based on Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

We use `nuxt-custom-elements` to generate our web components.

Look at the [nuxt-custom-elements documentation](https://nuxt-custom-elements.grabarzundpartner.dev/) to learn more.


## local dev

Start the development server on `http://localhost:3000`:

```bash
# bun
npx bun run dev
```

## local static serve

```shell
npx bun run generate
python3 -m http.server -d .output/public 3000
# `npx serve dist` will not work : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default
```

Browse `http://localhost:3000`


## Setup

Make sure to install the dependencies:

```bash
# bun
npx bun install
```

## TODO

* [x] working web component
* [x] static HTML page using a web component
* [x] basic CSS styling
* [x] generate
* [ ] enable nuxt UI
* [ ] enable nuxt UI pro
* [x] deploy static build on github pages
* [x] local serve for dev
