//const axios = require("axios");

const detailsRoutes = require("./generate/details");
export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "school",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[contenthash].js"),
      chunk: (options) => {
        let { isDev } = options;
        return isDev ? "[name].js" : "[chunkhash].js";
      },
      css: ({ isDev }) => (isDev ? "[name].css" : "[contenthash].css"),
    },
  },
  publicPath: "",
  generate: {
    subFolders: false,
    concurrency: 10000,
    routes(callback) {
      let result = detailsRoutes;
      // axios
      // .get("https://my-api/users")
      //.then((res) => {
      const routes = result.map((user) => {
        return "/details/" + user;
      });
      callback(null, routes);
      //  })
      //.catch(callback);
      // },
    },
  },
};
