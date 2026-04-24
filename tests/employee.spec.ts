import { test, expect } from '../fixtures/base.js';

test.describe("Employee management tests", () => {
  test('verify adding new employee', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('Admin')
    await page.locator("xpath=//input[@name='password']").fill('admin123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
     });
})