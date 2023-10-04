import { expect, test } from '@playwright/test';

test ('test with rahulshetty web', async ({ page })=>{
await page.goto("https://rahulshettyacademy.com/client/");
 console.log(await page.title());
await page.locator("#userEmail").fill("anshika@gmail.com");
await page.locator("#userPassword").fill("Iamking@000");
await page.locator("#login").click();
console.log(await page.locator("#toast-container").textContent());
await page.waitForLoadState("networkidle");
const list = await page.locator(".card-body b").allTextContents();
console.log(list);

});


test('dropdown testing', async ({page}) =>{
    const blinkingText=page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator(".form-check-inline label").last().click();
    //Dropdown selection
    const dropdown=page.locator("select.form-control");
    dropdown.selectOption("teach");//Need to pass the value from the HTML 
    

    await page.locator("#okayBtn").click();
    //
// check box selection
    await page.locator("#terms").click();
    console.log(await page.locator("#terms").isChecked());// its returns booean value
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await expect(page.locator("#terms").isChecked()).toBeFalsy;
    console.log(await page.locator("#terms").isChecked());
    // submitting the button
    await page.locator("#signInBtn").click();

    await expect(blinkingText).toHaveAttribute('class','blinkingText');
    await blinkingText.click();
    // const text=await page.locator("[class='im-para red']").getByText();
    // console.log(text);
 

    // await page.pause();

});

test ('new window opening', async ({browser}) =>
{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingText=page.locator("[href*='documents-request']");

    //new window opening
    
    const [newPage]= await Promise.all
    ([
    context.waitForEvent('page'),
    blinkingText.click(),
    ])
    const text = await newPage.locator(".red").textContent();
    console.log(text);

})