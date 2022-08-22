exports.BooksPage = class BooksPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.bookStorePageLocator = page.locator('//div[@class="main-header"]');
      this.inputSearchBox = page.locator('//input[@id="searchBox"]');
      this.foundBooks = page.locator('//div[@class="rt-tr-group"]//a');
      this.nextButton = page.locator('//button[contains(text(), "Next")]');
    }
  
    async getPageName() {
        return this.bookStorePageLocator.innerText();
    }

    async searchBook(bookName) {
        await this.inputSearchBox.fill(bookName);
    }
  
    async getFoundBookName() {
        return this.foundBooks.innerText();
    }

    async isElementPresent(elementLocator) {
        return this.page.locator(`${elementLocator}`).count() > 0;
        
        //return element.length > 0;
    }
    
  }