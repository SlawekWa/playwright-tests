import { test, expect } from '@playwright/test';

test.describe('grupa testow', () => {

  // test.only('login page with failing assertion', async ({ page }) => { - run only this test -> test.only
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // only beforeEach is using this const - in config baseURL
  })

  test('login page with failing assertion', async ({ page }) => {
    // Arrange

    // Act
    // await page.locator('[data-test="username"]').click(); not needed - fill already provide focus
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
    //Assert
    // await expect(page.locator('[data-test="login-button"]')).toHaveText("Dupa"); //expected to fail 
    // await expect(page.locator('[data-test="login-button"]')).toHaveText(`bjcbjdc ${url} - or another var`); //expected to fail 

  });

})
