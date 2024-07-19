import { defineConfig } from 'vitepress'
import javaSidebar from './sidebar/java'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pemrograman Dasar",
  description: "Materi Pemrograman Dasar Teknik Informatika",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Java', link: '/courses/java' }
    ],

    sidebar: {
      '/courses/java': javaSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yogarn/pemdas' }
    ]
  }
})
