// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //extends: ['@nuxt/ui-pro'],
  modules: [
    'nuxt-custom-elements',
    '@nuxt/ui',
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
      },{
        name: 'Example2',
        tags: [
          {
            name: 'CustomElementExample2',
            path: '@/components/Example2.ce.vue',
            slotContent: 'Slot Example2 Content'
          }
        ]
      }
    ]
  },

})
