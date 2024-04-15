import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Revue de code TP2",
  description: "Revue de code du TP2 documentée de Hugo Larochelle et Jeremy Devloo",
  base: "/appweb-tp2codereview/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revue Hugo', link: '/hugo-larochelle' },
      { text: 'Revu Jérémy', link: '/jeremy-devloo' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Revue Hugo', link: '/hugo-larochelle' },
          { text: 'Revu Jérémy', link: '/jeremy-devloo' }
        ]
      }
    ]
  }
})
