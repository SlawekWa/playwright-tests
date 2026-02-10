import { test, expect } from '@playwright/test';

test.describe('grupa testow', () => {

  // test.only('login page with failing assertion', async ({ page }) => { - run only this test -> test.only

  test('login page with failing assertion', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    // await page.locator('[data-test="username"]').click(); not needed - fill already provide focus
    await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
    // await expect(page.locator('[data-test="login-button"]')).toHaveText("Dupa"); //expected to fail dum
  });

})
