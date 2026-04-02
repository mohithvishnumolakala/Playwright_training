import { expect, test } from "@playwright/test";

test(`assersion validate`, async({page})=>{

    await page.goto(`https://testautomationpractice.blogspot.com/p/playwrightpractice.html`);
    await expect (page).toHaveURL(`https://testautomationpractice.blogspot.com/p/playwrightpractice.html`);
    await expect (page).toHaveTitle(`Automation Testing Practice: PlaywrightPractice`);

    await page.locator(`#username`).fill("mohith1127");
    await expect (page.locator('#username')).toBeEditable();
    await expect (page.locator('#username')).toHaveValue(`mohith1127`);

    const butondiv = page.locator(`.card`).first();  //first i used because i have n no of .card elements 
    await expect(butondiv).toBeVisible();
    

});