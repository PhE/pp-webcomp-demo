<template>
  <h1>Welcome to pp-webcomp</h1>

  <h2>Nuxt pages w/ native vue component - Works in `dev` and `generate`</h2>
  <UButton><NuxtLink to="/debug/comp/ex">/debug/comp/ex</NuxtLink></UButton><br />
  <UButton><NuxtLink to="/debug/comp/ex2">/debug/comp/ex2</NuxtLink></UButton><br />

  <h2>Nuxt pages w/ registered web component - Works in `dev` and `generate`</h2>
  <UButton><NuxtLink to="/debug/ce/ex">/debug/ce/ex</NuxtLink></UButton><br />
  <UButton><NuxtLink to="/debug/ce/ex2">/debug/ce/ex2</NuxtLink></UButton><br />

  <h2>Web component auto generated test page - Work only in `generate`</h2>
  <UButton><NuxtLink external to="/nuxt-custom-elements/example/index.html">&lt;custom-element-example&gt;</NuxtLink></UButton><br />
  <UButton><NuxtLink external to="/nuxt-custom-elements/example2/index.html">&lt;custom-element-example2&gt;</NuxtLink></UButton><br />
</template>