import { defineConfig } from "vitepress";
import javaSidebar from "./sidebar/java";
import footnote_plugin from "markdown-it-footnote";
import mathjax3 from 'markdown-it-mathjax3';
import mark from 'markdown-it-mark'

export default defineConfig({
  title: "Pemrograman Dasar",
  description: "Materi Pemrograman Dasar Teknik Informatika",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Java", link: "/courses/java" },
    ],

    sidebar: {
      "/courses/java": javaSidebar,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/yogarn/pemdas" }],
  },
  markdown: {
    config: (md) => {
      md.use(footnote_plugin);
      md.use(mathjax3);
      md.use(mark);
    },
  },
});
