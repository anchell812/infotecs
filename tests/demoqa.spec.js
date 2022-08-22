// @ts-check
const { test } = require('@playwright/test');
const { assert } = require('chai');
const { LoginPage } = require('../framework/loginPage');
const { BooksPage } = require('../framework/booksPage');
const { ProfilePage } = require('../framework/profilePage');
const {  username, password, url, bookStorePageName, bookName, nextButton, previousButton } = require('../testData/testData.json');




test('Test of Book store page including logging in', async ({ page }) => {
  await page.goto(url);
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  const profilePage = new ProfilePage(page);
  assert.equal(await profilePage.getUsername(), username);
  await profilePage.goToBookStore();
  const booksPage = new BooksPage(page);
  assert.equal(await booksPage.getPageName(), bookStorePageName, "Books store page");
  await booksPage.searchBook(bookName);
  assert.equal(await booksPage.getFoundBookName(), bookName);
  assert.isTrue(await booksPage.isElementPresent(nextButton), "Element should be present");
  assert.isTrue(await booksPage.isElementPresent(previousButton), "Element should be present");
});
