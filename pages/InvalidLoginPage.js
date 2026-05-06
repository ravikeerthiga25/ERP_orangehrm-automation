class InvalidLoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.errorMessage = '.oxd-alert-content-text';
    this.requiredMessage = 'span:has-text("Required")';
  }

  async navigate() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async invalidLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyInvalidLoginMessage() {
    await this.page.waitForSelector(this.errorMessage);
  }

  async verifyRequiredMessage() {
    await this.page.waitForSelector(this.requiredMessage);
  }
}

module.exports = { InvalidLoginPage };