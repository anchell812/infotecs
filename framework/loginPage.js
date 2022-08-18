const {  username, password } = require('../testData/testData.json');

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

  async goto() {
    await this.page.goto('https://demoqa.com/login/');
  }

  async login() {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.confirmLoginButton.click();
  }
}