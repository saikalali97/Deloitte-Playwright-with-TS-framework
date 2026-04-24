import { test, expect } from '../fixtures/base.js' //@playwright/test';

test.describe("OrangeHRM login UI test",()=>{

test('Verify OrangeHRM login', async({page})=>{

  //await page.goto('/')
  await expect.soft(page).toHaveTitle("OrangeHRM")
})

test('Verfiy header in OrangeHRM', async({page})=>{

  //await page.goto('/')
  await expect.soft(page.locator("//h5[text()='Login']")).toContainText("Login")
})

test('Verfiy placeholder in OrangeHRM', async({page})=>{

  //await page.goto('/')
  await expect.soft(page.locator("//input[@name='username']")).toHaveAttribute("placeholder","Username")
  await expect.soft(page.locator("//input[@name='password']")).toHaveAttribute("placeholder","Password")
})
})

