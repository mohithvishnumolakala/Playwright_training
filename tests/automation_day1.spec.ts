import {chromium, test} from "@playwright/test";
import { setTimeout } from "node:timers/promises";

test('automation day_1', async({page})=>{
  await page.goto('https://www.amazon.in');

  await page.locator('#twotabsearchtextbox').fill('oneplus');
  await page.keyboard.press('Enter');
  await page.locator('#a-autoid-3-announce').click();
  // await page.locator('ul[aria-labelledby="p_123-title"]').getByRole('checkbox', { name: 'OnePlus' }).check();
  await page.locator('#a-autoid-6-announce').click();
  await page.locator('#twotabsearchtextbox').clear;
  await page.locator('#twotabsearchtextbox').fill('shirt for man');
  await page.keyboard.press('Enter');
  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('button',{name:'Add to cart'}).click();
  await page.locator('#nav-cart').click();
  await page.locator('a[href="/gp/cart/view.html?ref_=nav_cart"]').click();
  await page.waitForTimeout(2000);
  await page.screenshot({path: 'screenshots/cartpage_amazon_screenshot.png'});
  await page.getByRole('button',{name:"Proceed to Buy Buy Amazon items"}).click();
  await page.locator('#ap_email_login').fill('done');
  await page.waitForTimeout(2000);
  
});


// test('automation day_1', async({page})=>{
 
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', {name:' Signup / Login'}).click();
//   await page.locator('input[data-qa="login-email"]').fill('mohithv@gmail.com');
//   await page.locator('input[data-qa="login-password"]').fill('mohithvishnu');
//   await page.getByRole('button', {name:'login'}).click();
//   await page.locator("a[href='/product_details/1']").click();
//   await page.getByRole('button', {name: " Add to cart"}).click();
//   await page.getByRole('button', {name: "Continue Shopping"}).click();
//   await page.getByRole('link', {name:'(5) H&M'}).click();
//   await page.locator("a[href='/product_details/6']").click();
//   await page.getByRole('button', {name: " Add to cart"}).click();
//   await page.getByRole('button', {name: "Continue Shopping"}).click();
//   await page.getByRole('link', {name:' Cart'}).click();
//   await page.locator('.btn.btn-default.check_out').click();
//   // await page.getByRole('link', {Contents:'Proceed To Checkout'}).click();
//   await page.locator('.form-control').fill("i am placing order");
//   await page.screenshot({path: 'screenshots/cartpage_full_screenshot.png', fullPage: true});
//   await page.getByRole('link', {name:'Place Order'}).click();
//   await page.locator('input[data-qa="name-on-card"]').fill('mohith')
//   // await page.getByRole('textbox',{name:'name_on_card'}).fill('mohith');
//   await page.locator('input[data-qa="card-number"]').fill('9890785634');
//   await page.getByRole('textbox',{name:'ex. 311'}).fill('311');
//   await page.getByRole('textbox',{name:'MM'}).fill('11');
//   await page.getByRole('textbox',{name:'YYYY'}).fill('2222');
//   await page.getByRole('button',{name:'Pay and Confirm Order'}).click();
//   await page.getByRole('link', {name:'Continue'}).click();
//   await page.getByRole('link', {name:' Logout'}).click();
//   await page.waitForTimeout(2000);
// });