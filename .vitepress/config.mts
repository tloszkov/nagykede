import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NAGYKEDE",
  description: "Nagykede weblapja'",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Főoldal', link: '/' },
      { text: 'Nagykede Története', link: '/history' },
      { text: 'Médiatár', link: '/gallery' },
      { text: 'Események', link: '/events' },
    ],


    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/nagykede' },
      { icon: 'instagram', link: 'https://instagram.com/nagykede' }
    ]
  }
})
