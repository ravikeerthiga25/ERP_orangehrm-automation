module.exports = {
  default: {
    require: [
      "support/hooks.js",
      "features/step-definitions/*.js"
    ],

    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],

    publishQuiet: true
  }
};