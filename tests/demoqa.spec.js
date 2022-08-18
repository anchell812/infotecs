// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../framework/loginPage');


test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://demoqa.com/books/');
  await page.locator('//button[@id="login"]').click();
  const loginPage = new LoginPage(page);
  await loginPage.login();

  
  // fill(TODO_ITEMS[0]);
  // await page.locator('.new-todo').press('Enter');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  // // create a locator
  // const getStarted = page.locator('text=Get Started');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();
  
  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
