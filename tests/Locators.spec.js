import {expect,test} from "@playwright/test";

test("locators finding",async ({page})=>
{
await page.goto("https://www.flipkart.com/");
await page.locator("[role='button']").nth(2).click();
await page.locator(".Pke_EE").fill("shoes");
await page.locator("[fill='none']").nth(0).click();
await page.locator("a.IRpwTa").filter({hasText:'Combo Pack of 2 Sports Shoes Running Shoes For Men Runn...'}).first().click();



await page.pause();

})