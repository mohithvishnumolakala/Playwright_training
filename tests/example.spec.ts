import { chromium, test } from "@playwright/test";

// test(`example code`, async()=>{
//      const browser = await chromium.launch({headless:false});
//     //we can also use firefox or webkit also we can declare as await chromium.launch({headless:true}); and add context and page
//     const context = await browser.newContext();
//     const page = await context.newPage(); 
//     // //insted of above three commands we directly enter into page by passing into the async funtion as below 
//     await page.goto('https://www.google.com');
//     await page.waitForTimeout(5000);

// });


test(`example code`, async({page})=>{
    
    await page.goto('https://www.google.com');
    await page.waitForTimeout(5000);

});