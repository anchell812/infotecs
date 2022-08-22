
exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.inputUsername = page.locator('//input[@id="userName"]');
    this.inputPassword = page.locator('//input[@id="password"]');
    this.confirmLoginButton = page.locator('//button[@id="login"]');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.confirmLoginButton.click();
  }
}