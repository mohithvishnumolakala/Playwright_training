import { test, expect } from "@playwright/test";

test('drop-down practice', async ({ page }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.locator('#username').fill('Demosalesmanager');
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();

  await page.locator('div a').nth(1).click();
  await page.locator("//a[text()='Leads']").click();
  await page.locator("//a[text()='Create Lead']").click();

  // Select by value
//   #createLeadForm_dataSourceId this is the id of that dropdown
  await page.selectOption('#createLeadForm_dataSourceId', {
    value: 'LEAD_DIRECTMAIL'
  });
  await page.waitForTimeout(5000);

  // Select by visible label
  await page.selectOption('#createLeadForm_dataSourceId', {
    label: 'Conference'
  });
  await page.waitForTimeout(5000);

  // Select by index
  await page.selectOption('#createLeadForm_dataSourceId', {
    index: 5
  });
  await page.waitForTimeout(5000);

});
