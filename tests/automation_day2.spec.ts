import { expect, test } from "@playwright/test";


test(`day2_1` , async({page})=>{
    test.setTimeout(120000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: "networkidle" } );
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{name:'Login'}).click();
    await expect (page).toHaveTitle(`OrangeHRM`);
    await page.getByRole('link',{name:'Admin'}).click();
    await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    await page.getByText("Job ").click();
    await page.getByRole('menuitem' ,{name:'Job Titles'}).click();
    await page.getByRole('button',{name:'Add'}).click();
    await page.locator('.oxd-input.oxd-input--active').nth(1).fill("Trainee");
    await page.getByPlaceholder('Type description here').fill("This is for freshers");
    await page.getByRole('button', {name:'Save'}).click();
    await page.getByText('Qualifications ').click();
    await page.getByRole('menuitem' ,{name:'Skills'}).click();
    await page.getByRole('button',{name:'Add'}).click();
    await expect (page.locator('.oxd-input.oxd-input--active').nth(1)).toBeEditable();
    await page.locator('.oxd-input.oxd-input--active').nth(1).fill("SQL");
    await page.getByPlaceholder('Type description here').fill("sql hand-on");
    await page.getByRole('button', {name:'Save'}).click();
    await page.locator('.oxd-userdropdown-img').click();
    await page.getByRole('menuitem' ,{name:'Logout'}).click();
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


});



