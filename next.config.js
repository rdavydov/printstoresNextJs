const path = require("path");
// const nextBuildId = require("next-build-id");
const dev = process.env.NODE_ENV.trim() !== "production";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  // generateBuildId: () => nextBuildId({ dir: __dirname }),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    // BASE_URL: "http://localhost:3010/api",
    // FILE_STATIC_URL: "http://localhost:3010/api/storage",
    BASE_URL: dev ? "http://localhost:3010/api" : "https://printstores.ru/api",
    FILE_STATIC_URL: dev ? "http://localhost:3010/api/storage" : "https://printstores/api/storage",
    RECAPTCHA_SITE_KEY: "6LeirWEaAAAAAGOUF9yqR3CDeMYxF2T502fjHBiM",
  },
});
