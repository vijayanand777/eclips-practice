import {expect, test} from "@playwright/test";
import { count } from "console";

test('pactice page for order', async  ({page}) =>
{
await page.goto("https://rahulshettyacademy.com/client");
const products=page.locator(".card-body");
const nameOfProduct="adidas original";
console.log(await page.title());
console.log(await page.locator(".blink_me").textContent());
await page.locator("#userEmail").fill("anshika@gmail.com");
await page.locator("#userPassword").fill("Iamking@000");
await page.locator("#login").click();
console.log(await page.locator("#toast-container").textContent());
console.log(await page.locator("//label[contains(text(),'User can only see maximum')]").textContent());
await expect(await page.locator("//label[contains(text(),'User can only see maximum')]")).toBeTruthy();
const listOfProducts = await products.allTextContents();
console.log(listOfProducts);
await listOfProducts.indexOf("adidas original");
const number=await products.count();
await console.log(number);
for (let i=0;i<number;++i)
{
if (await products.nth(i).locator("b").textContent() === nameOfProduct)
{
await products.nth(i).locator("text= Add To Cart").click();
break;
}
}
console.log(await page.locator("#toast-container").textContent());

await page.locator("[routerlink*=cart]").click();
await page.locator("div li").last().waitFor();
const bool=await page.locator("h3:has-text('adidas original')").isVisible();
await expect(bool).toBeTruthy();


await page.locator("text=Checkout").click();
await page.locator("[placeholder*='Select']").type("ind",{delay:100});
const dropdowwn=await page.locator(".ta-results");
await dropdowwn.waitFor();
const count=await dropdowwn.locator("button").count();
console.log(count);
for(let i=0;i<count;++i)
{
    const text=await dropdowwn.locator("button").nth(i).textContent();
if( text=== " India")
{
    await dropdowwn.locator("button").nth(i).click();
    break;
}
}

await page.locator("input[type='text']").nth(1).fill("123");
await page.locator("input[type='text']").nth(3).fill("rahulshettyacademy");
await page.locator("input[name='coupon']").click();
await page.locator("button[type='submit']").click();
console.log(await page.getByText('* Coupon Applied').textContent());
const placed=page.locator("div[class='actions'] a");
await placed.waitFor();
await placed.click();
// const orderplaced=await page.getByText('#toast-container');
// console.log(orderplaced.textContent());
// await orderplaced.waitFor();
// await page.locator("div[class='actions'] a").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderID);
await page.locator("button[routerlink='/dashboard/myorders']").click();







await page.pause();
});