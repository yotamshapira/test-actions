module.exports = {
  launch: {
    headless: process.env.HEADLESS !== "false", // defaults to true
    slowMo: 100,
    args: ["--no-sandbox", "--disable-setuid-sandbox"] // Required for running on Debian (Jenkins), see: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
  },
  server: {
    command: "npm run server",
    port: 8080
  }
};
