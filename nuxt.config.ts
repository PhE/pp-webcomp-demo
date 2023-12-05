// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-custom-elements'
  ],
  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'CustomElementExample',
            path: '@/components/Example.ce.vue',
            options: {
              props: {
                title: 'Prop. Example Title'
              }
            },
            slotContent: 'Slot Example Content'
          }
        ]
      }
    ]
  },

})
