import { test, expect } from '@playwright/test';
import { LoginPage } from '../test-data/login.page'

test.describe('grupa testow', () => {

  // test.only('login page with failing assertion', async ({ page }) => { - run only this test -> test.only
  const someStrin = "ncenwlcelwkncw";
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // only beforeEach is using this const - in config baseURL
  })

  test.only('login page with failing assertion', async ({ page }) => {
    // Arrange

    // Act
    const loginPage = new LoginPage(page)


    // await page.locator('[data-test="username"]').click(); not needed - fill already provide focus
    await page.locator('[data-test="username"]').fill(someStrin);
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
    //Assert
    // await expect(page.locator('[data-test="login-button"]')).toHaveText("Dupa"); //expected to fail 
    // await expect(page.locator('[data-test="login-button"]')).toHaveText(`bjcbjdc ${url} - or another var`); //expected to fail 

  });

})
