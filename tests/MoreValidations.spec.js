import {test,expect} from "@playwright/test";
import { DiffieHellmanGroup } from "crypto";

test('validations in playwright',async ({ page }) =>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();
    // await page.goBack();
    
    //check whether text is visible
    await page.locator("#displayed-text").isVisible();
    // Hide the Text field
    await page.locator("#hide-textbox").click();
// check whether text is hided
    await page.locator("#displayed-text").isHidden();

    //close the dialogs by using js
    await page.on("dialog",dialog=> dialog.accept());
    await page.locator("#confirmbtn").click();
    
    // mouse hover actions
    await page.locator("#mousehover").hover();
    //Frames
    const framePage=await page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    //grab the text
    const subcriber=await framePage.locator(".text h2").textContent();
    // split only required text
    console.log(subcriber.split(" ")[1]);



});