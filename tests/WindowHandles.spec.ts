import {test} from "@playwright/test";

test('Window Handles', async ({ page,context }) => {
    await page.goto("https://www.flipkart.com/");
    await page.locator('.b3wTlE').click();
    const searchtxtbox = page.getByPlaceholder('Search for Products, Brands and More').nth(0);
    await searchtxtbox.fill("phones");
    await searchtxtbox.press('Enter');
    await page.locator('.RG5Slk').nth(1).click();
    await page.waitForTimeout(4000);

    const newpage = context.waitForEvent('page');
    await page.locator('.RG5Slk').nth(1).click();
    const childpage = await newpage;
    console.log(await page.title());
    console.log(await childpage.title());

});
