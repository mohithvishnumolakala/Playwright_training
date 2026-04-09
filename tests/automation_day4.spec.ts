import {test, expect} from '@playwright/test';

test('Automation Day 4', async ({ page }) => {
  await page.goto("https://letcode.in/test");

  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByPlaceholder('Enter first & last name').fill('testing phase');

  await page.locator('#join').fill('john');

  const value = await page.getAttribute('#getMe', 'value');
  console.log(value);

    await page.locator('#clearMe').clear();
    expect(page.locator('#noEdit')).toBeDisabled();

    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Work-Space' }).click();
     await page.getByRole('link', { name: 'Click' }).click();
     await page.locator('#position').click();
});

