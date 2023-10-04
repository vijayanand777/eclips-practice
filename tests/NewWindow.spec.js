import {test} from "@playwright/test";

test('new windows opening', async ({browser})=>
{
const context= await browser.newContext();
const page= await context.newPage();
const blinkingText=page.locator("[href*='documents-request']");
const userName=page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

const [newPage]= await Promise.all
    ([
    context.waitForEvent('page'),
    blinkingText.click(),
    ])
    const text = await newPage.locator(".red").textContent();
    console.log(text);
   const arrayNames= text.split("@");
   const mail=arrayNames[1].split(" ")[0];
   console.log(mail);
   await userName.fill(mail);
  


})