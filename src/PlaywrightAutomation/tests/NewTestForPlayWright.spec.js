// const {test,expect} = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('with new context playwright' , async function({browser})
{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://bustlespot.gamzinn.com/report");
// console.log(page.title());

});

test ('without context and newPage test', async ({page})=>
{
    await page.goto("https://d1jlzexpz1obek.cloudfront.net/blog-single2.html");
    
    
 });

// import { test } from '@playwright/test';

test ('has title', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await console.log(await page.title());
    // await page.locator("[maxlength='10']").fill("8179746307");
    await page.locator("[role='button']").nth(2).click();
    await page.locator("[name='q']").fill("shoe");
    await page.locator("[fill='none']").nth(0).click();
    // console.log(await page.locator(".IRpwTa").nth(0).textContent());
    // console.log(await page.locator(".IRpwTa").first().textContent());
    const listOfShoes=await page.locator(".IRpwTa").allTextContents();
    console.log(listOfShoes);
    // console. log("Browser JavaScript engine:", await navigator.userAgent());
    
    

    // await userName.fill("rahulshettyacademy");
    // await page.locator("[type='password']").fill("learning");
    // await page.locator("#visitUsTwo").click();
    // console.log(await page.locator("[class='error']").textContent());
    // await expect(page.locator("[class='error']")).toContainText('* Incorrect');
    // userName.clear(force=true);
    
    // await this.clickOnElement(userName);
    // await this.page.keyboard.press("Meta+A");
    // await this.page.keyboard.press('Backspace');
    // await userName.fill("aaaaaaaaaaaaaaaaa");
    // await submit.click();
  
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
  })
