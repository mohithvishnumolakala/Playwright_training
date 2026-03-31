import {test, expect} from "@playwright/test";

test(`locators`, async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    // await page.mouse.wheel(0, 500);  // scroll down
    // await page.getByRole(`textbox`, {name:'Username'}).fill('mohith');
    // // for getbyrole we need to use accessiblity in dom but reaming all we use dom itself
    // await page.mouse.wheel(0, 600);  // scroll down
    // await page.getByLabel('Email Address:').fill("mohith@gmail.com");

    // await page.mouse.wheel(0, 550); 
    // await page.getByText('Submit Form').click();

    //  await page.mouse.wheel(0, 650);  // scroll down
    // await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9703030303');

    // await page.mouse.wheel(0, 700); 
    // const check = await page.getByAltText('logo image');
    // await expect(check).toBeVisible(); 
    // //to verify that we need to import expect and we use this command 

    // await page.mouse.wheel(0, 800); 
    // await page.getByTitle("Home page link").click();

    // await page.mouse.wheel(0, 850);
    // await page.getByTestId('edit-profile-btn').click();

    // await page.waitForTimeout(3000);



    // css selectors
    await page.locator(`#email`).fill("mohith@gmail.com");
    await page.waitForTimeout(3000); //id

    await page.locator(`.home-link`).click();
    await page.waitForTimeout(3000); //class name
    

});
