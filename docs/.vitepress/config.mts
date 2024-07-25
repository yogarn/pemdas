import { defineConfig } from "vitepress";
import javaSidebar from "./sidebar/java";
import footnote_plugin from "markdown-it-footnote";

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
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Yoga Raditya",
    },
  },
  markdown: {
    config: (md) => {
      md.use(footnote_plugin);
    },
  },
});
