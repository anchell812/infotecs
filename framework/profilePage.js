exports.ProfilePage = class ProfilePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.locatorOfUsername = page.locator("//label[@id='userName-value']");
      this.goToBookStoreButton = page.locator('//button[@id="gotoStore"]');
    }
  
    async getUsername() {
        return this.locatorOfUsername.innerText();
    }

    async goToBookStore() {
      await this.goToBookStoreButton.click();
    }

  }