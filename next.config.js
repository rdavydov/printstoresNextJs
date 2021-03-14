const path = require("path");

module.exports = {
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: "http://localhost:3010/api",
    FILE_STATIC_URL: "http://localhost:3010/api/storage",
    RECAPTCHA_SITE_KEY: "6LeirWEaAAAAAGOUF9yqR3CDeMYxF2T502fjHBiM",
  },
};
