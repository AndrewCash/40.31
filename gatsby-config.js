import { createProxyMiddleware } from "http-proxy-middleware"

module.exports = {
  siteMetadata: {
    title: "40.31",
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [],
};