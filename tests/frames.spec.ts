import{test} from '@playwright/test'

test(`frames example`, async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const framecheck = page.frames();
    console.log(framecheck);

    const framecount = framecheck.length;
    console.log(framecount);

    const framelocator = page.frameLocator('#courses-iframe');
    await framelocator.locator('li a[href="learning-path"]').nth(0).click();
    
    await page.waitForTimeout(4000);

});