const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "reports",

  reportPath: "reports/html-report",

  reportName: "OrangeHRM Automation Report",

  pageTitle: "OrangeHRM Test Report",

  metadata: {
    browser: {
      name: "chromium",
      version: "latest"
    },

    device: "Local machine",

    platform: {
      name: "Windows",
      version: "10"
    }
  }
});