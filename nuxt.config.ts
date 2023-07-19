// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  hooks: {
    "pages:extend"(pages) {
      // add a route
      pages.push({
        name: "Home",
        path: "/",
        file: "~/pages/Home.vue",
      });

      // remove routes
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove = [];
        for (const page of pages) {
          if (pattern.test(page.file)) {
            pagesToRemove.push(page);
          } else {
            removePagesMatching(pattern, page.children);
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1);
        }
      }
      removePagesMatching(/\.ts$/, pages);
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxt/content"],
  content: {
    // Configuring code highlighting        // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      // Define languages you expect to use
      preload: ["java", "javascript"],
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          "rehype-external-links",
          { target: "_blank", rel: "noopener noreferer" },
        ],
      ],
    },
  },
});
