const { Given, When, Then } = require("@cucumber/cucumber");

const { LoginPage } = require("../../pages/LoginPage");

let loginPage;

Given("user is on the login page", async function () {

  loginPage = new LoginPage(this.page);

  await loginPage.navigate();

});

When(
  "user enters invalid username {string} and password {string}",
  async function (username, password) {

    await loginPage.login(
      username,
      password
    );

  }
);

When("user clicks the login button", async function () {

  // handled inside login method

});

Then("error message should be displayed", async function () {

  await loginPage.verifyInvalidLogin();

});