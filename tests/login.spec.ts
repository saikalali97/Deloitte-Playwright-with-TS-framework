import { test, expect } from '../fixtures/base.js';
import { invalidLoginData } from "../utils/data-source.js"
import { JsonUtils } from '../utils/json-utils.js'
import {ExcelUtils} from '../utils/excel-utils.js'

// description for verify login function 
//create test - verify valid login
//create test - verify invalid login

// test.describe("OrangeHRM Login Function  Tests", () => {
//   test('verify invalid login', async ({ page }) => {
//     await page.locator("xpath=//input[@name='username']").fill('john')
//     await page.locator("xpath=//input[@name='password']").fill('john123')
//     await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
//     await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText('Invalid credentials')
//   });

//   test('verify valid login', async ({ page }) => {
//     await page.locator("xpath=//input[@name='username']").fill('Admin')
//     await page.locator("xpath=//input[@name='password']").fill('admin123')
//     await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
//     await expect(page.locator("xpath=//h6[text()='Dashboard']")).toHaveText('Dashboard')
//   });
// })

test.describe("OrangeHRM Login Function  Tests", () => {

  for(const{username,password, expected_error} of invalidLoginData){
  test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill(username)
    await page.locator("xpath=//input[@name='password']").fill(password)
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
    await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_error)
  })};

  for (const { username, password, expected_error } of JsonUtils.getJson('invalidLoginData')) {
    test(`verify invalid login from json: ${username} and ${password}`, async ({ page }) => {
      await page.locator("xpath=//input[@name='username']").fill(username)
      await page.locator("xpath=//input[@name='password']").fill(password)
      await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
      await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_error)
    });
  }
for (const{username,password,expected_error} of JsonUtils.getJson('validLoginData')){
  test(`verify valid login from json : ${username} and ${password}`, async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill(username)
    await page.locator("xpath=//input[@name='password']").fill(password)
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
    await expect(page.locator("xpath=//h6[text()='Dashboard']")).toHaveText('Dashboard')
  })};

    for (const { username, password, expected_value } of ExcelUtils.getdatafromexcel('invalidLoginData')) {
    test(`verify invalid login from excel: ${username} and ${password}`, async ({ page }) => {
      await page.locator("xpath=//input[@name='username']").fill(username)
      await page.locator("xpath=//input[@name='password']").fill(password)
      await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
      await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_value)
    });
  }
})