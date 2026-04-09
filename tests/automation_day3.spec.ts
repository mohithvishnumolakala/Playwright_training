import {test, expect} from "@playwright/test";

test(`day3_1`, async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    await page.getByRole('button', {name: 'Computers'}).click();
    await page.getByRole('link', {name: 'Notebooks'}).nth(1).click();
    await page.getByRole('link', {name: 'Apple MacBook Pro'}).nth(1).click();
    
await page.locator('#add-to-cart-button-4').nth(0).click();

    await page.getByRole('button', {name: 'Books'}).click();
    
await page.locator('.button-2.product-box-add-to-cart-button').nth(1).click();

    await page.locator('.cart-label').click();
    await page.screenshot({path: 'screenshots/noecommerce_full_screenshot.png', fullPage: true});
    await page.locator('#open-estimate-shipping-popup').click();
    await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'India' });
    await page.getByRole('combobox', { name: 'State / province' }).selectOption({ label: 'Andhra Pradesh' });
    await page.getByRole('textbox', {name: 'Zip / postal code'}).fill('522261');  
    await page.getByText('Apply').nth(0).click();
    await page.locator('#termsofservice').click();
    await page.locator('#checkout').click();
    await page.getByRole('button', {name: 'Checkout as Guest'}).click();   //sometimes not working beacuse of ui changes, so we can use below code to click on checkout as guest button
});