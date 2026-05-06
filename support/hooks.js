const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: true
  });

  this.page = await this.browser.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === "FAILED" && this.page) {
    const screenshotName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, "_");

    await this.page.screenshot({
      path: `screenshots/${screenshotName}.png`,
      fullPage: true
    });
  }

  if (this.browser) {
    await this.browser.close();
  }
});