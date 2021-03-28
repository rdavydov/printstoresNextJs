const path = require("path");
const execSync = require("child_process").execSync;
const dev = process.env.NODE_ENV.trim() !== "production";
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: dev ? "https://localhost:3010/api" : "https://printstores.ru/api",
    FILE_STATIC_URL: dev ? "https://localhost:3010/api/storage" : "https://printstores/api/storage",
    RECAPTCHA_SITE_KEY: "6LeirWEaAAAAAGOUF9yqR3CDeMYxF2T502fjHBiM",
  },
};
