const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../pages/LoginPage");
const { expect } = require("@playwright/test");
const config = require("../../config/config");
let loginPage;

Given("user logs into OrangeHRM", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
await loginPage.login(
  config.username,
  config.password
);
});

When("user navigates to PIM", async function () {
  await this.page.click('span:has-text("PIM")');
});

When("user clicks add employee", async function () {
  await this.page.click('button:has-text("Add")');
});

When("user enters employee details", async function () {

  const randomNumber = Math.floor(Math.random() * 10000);

  const firstName = "John" + randomNumber;
  const lastName = "Doe" + randomNumber;

  await this.page.fill('input[name="firstName"]', firstName);
  await this.page.fill('input[name="lastName"]', lastName);

  // Wait for save button to be ready and click it
  await this.page.click('button:has-text("Save")');
  
  // Wait for navigation after save
  await this.page.waitForNavigation({ waitUntil: 'load', timeout: 60000 });
});

Then("employee should be added successfully", async function () {

  const url = this.page.url();

  console.log("Current URL:", url);

  expect(url).toContain("viewPersonalDetails");

});