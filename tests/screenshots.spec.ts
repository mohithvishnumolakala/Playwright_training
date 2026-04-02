import { test} from "@playwright/test";

test(`screenshots`, async({page})=>{
     
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const username = await page.locator('#username');
    await username.fill("mohith@11");
    await page.waitForTimeout(2000);
    
    await username.screenshot({path: 'screenshots/userbox_screenshot.png'});
    // screenshot for that particualar element

    await page.screenshot({path: 'screenshots/userpage_screenshot.png'}); 
    //screenshot for visible page 

    await page.screenshot({path: 'screenshots/userpage_full_screenshot.png', fullPage: true});
    // screenshot for full page
    
});
