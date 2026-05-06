class LoginPage {

  constructor(page) {

    this.page = page;

    this.usernameInput =
      'input[name="username"]';

    this.passwordInput =
      'input[name="password"]';

    this.loginButton =
      'button[type="submit"]';

  }

 async navigate() {

  await this.page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    {
      waitUntil: "domcontentloaded",
      timeout: 60000
    }
  );

}
  async login(username, password) {

    await this.page.fill(
      this.usernameInput,
      username
    );

    await this.page.fill(
      this.passwordInput,
      password
    );

    await this.page.click(
      this.loginButton
    );

  }

  async verifyInvalidLogin() {

    await this.page.waitForSelector(
      ".oxd-alert-content-text"
    );

  }

  async verifyDashboard() {

    await this.page.waitForURL(/dashboard/, {
      timeout: 60000
    });

  }

  async logout() {

    // Click on the user profile dropdown (top right)
    await this.page.click('.oxd-userdropdown-tab');
    
    // Click logout option
    await this.page.click('a:has-text("Logout")');

  }

}

module.exports = { LoginPage };