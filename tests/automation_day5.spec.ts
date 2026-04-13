import { expect, test } from "@playwright/test";

test("element", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle" });
  await page.locator("#userName").fill("Mohith");
  await page.locator("#userEmail").fill("mohith@cognizant.com");
  await page.locator("#currentAddress").fill("Cognizant Practice, Chennai");
  await page.locator("#permanentAddress").fill("Cognizant Practice, Chennai");
  await page.locator("#submit").click();
  await expect(page.locator("#name")).toContainText("Mohith");
  await expect(page.locator("#email")).toContainText("mohith@cognizant.com");

  await page.goto("https://demoqa.com/radio-button", { waitUntil: "networkidle" });
  await page.locator('label[for="yesRadio"]').click();
  await expect(page.locator(".mt-3")).toContainText("Yes");
  await page.locator('label[for="impressiveRadio"]').click();
  await expect(page.locator(".mt-3")).toContainText("Impressive");

  await page.goto("https://demoqa.com/webtables", { waitUntil: "networkidle" });
  await page.locator("#addNewRecordButton").click();
  await page.locator("#firstName").fill("Mohith");
  await page.locator("#lastName").fill("Cognizant");
  await page.locator("#userEmail").fill("mohith@cognizant.com");
  await page.locator("#age").fill("23");
  await page.locator("#salary").fill("9703026233");
  await page.locator("#department").fill("Cognizant Practice");
  await page.locator("#submit").click();
  await page.waitForTimeout(1000);

});

test("forms", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://demoqa.com/automation-practice-form", { waitUntil: "networkidle" });
  await page.locator("#firstName").fill("Mohith");
  await page.locator("#lastName").fill("Cognizant");
  await page.locator("#userEmail").fill("mohith@cognizant.com");
  await page.locator('label[for="gender-radio-1"]').click();
  await page.locator("#userNumber").fill("9703026233");
  await page.locator("#dateOfBirthInput").click();
  await page.locator("#dateOfBirthInput").fill("15 Jan 2000");
  await page.keyboard.press("Enter");

  await page.locator("#subjectsInput").fill("Maths");
  await page.locator(".subjects-auto-complete__option").first().click();
  await page.locator('label[for="hobbies-checkbox-1"]').click();
  await page.locator('label[for="hobbies-checkbox-2"]').click();
  await page.locator("#currentAddress").fill("Cognizant Practice, Chennai, TN");
  await page.locator("#state").click();
  await page.locator("#react-select-3-option-0").click();
  await page.locator("#city").click();
  await page.locator("#react-select-4-option-0").click();
  await page.locator("#submit").click();

  await expect(page.locator(".modal-dialog")).toBeVisible();
  await expect(page.locator("#example-modal-sizes-title-lg")).toContainText("Thanks for submitting the form");
  await expect(page.locator(".table-responsive")).toContainText("Mohith Cognizant");
  await page.locator("#closeLargeModal").click();
});

test("alerts", async ({ page, context }) => {
  test.setTimeout(120000);
  await page.goto("https://demoqa.com/alerts", { waitUntil: "networkidle" });
  page.once("dialog", async (dialog) => { await dialog.accept(); });
  await page.locator("#alertButton").click();
  await page.waitForTimeout(500);
  page.once("dialog", async (dialog) => { await dialog.accept(); });
  await page.locator("#timerAlertButton").click();
  await page.waitForTimeout(6000);

  page.once("dialog", async (dialog) => { await dialog.accept(); });
  await page.locator("#confirmButton").click();
  await expect(page.locator("#confirmResult")).toContainText("Ok");
  page.once("dialog", async (dialog) => { await dialog.accept("Mohith"); });
  await page.locator("#promtButton").click();
  await expect(page.locator("#promptResult")).toContainText("Mohith");

  await page.goto("https://demoqa.com/browser-windows", { waitUntil: "networkidle" });
  const [newTab] = await Promise.all([context.waitForEvent("page"), page.locator("#tabButton").click()]);
  await newTab.waitForLoadState("networkidle");
  await expect(newTab.locator("#sampleHeading")).toContainText("This is a sample page");
  await newTab.close();
  
  const [newWindow] = await Promise.all([context.waitForEvent("page"), page.locator("#windowButton").click()]);
  await newWindow.waitForLoadState("networkidle");
  await expect(newWindow.locator("#sampleHeading")).toBeVisible();
  await newWindow.close();

  await page.goto("https://demoqa.com/frames", { waitUntil: "networkidle" });
  await expect(page.frameLocator("#frame1").locator("#sampleHeading")).toContainText("This is a sample page");
  await expect(page.frameLocator("#frame2").locator("#sampleHeading")).toContainText("This is a sample page");
  await page.goto("https://demoqa.com/nestedframes", { waitUntil: "networkidle" });
  await expect(page.frameLocator("#frame1").frameLocator("iframe").locator("p")).toContainText("Child Iframe");
});

test("drag_drop", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://demoqa.com/droppable", { waitUntil: "networkidle" });
  const simpleTab = page.getByRole("tabpanel", { name: "Simple" });
  await simpleTab.locator("#draggable").dragTo(simpleTab.locator("#droppable"));
  await expect(simpleTab.locator("#droppable")).toContainText("Dropped!");

  await page.goto("https://demoqa.com/slider", { waitUntil: "networkidle" });
  await page.locator(".range-slider").fill("75");
  await expect(page.locator("#sliderValue")).toHaveValue("75");

  await page.goto("https://demoqa.com/progress-bar", { waitUntil: "networkidle" });
  await page.locator("#startStopButton").click();
  await page.waitForTimeout(3000);
  await page.locator("#startStopButton").click();
});

test("tooltip", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto("https://demoqa.com/tool-tips", { waitUntil: "networkidle" });
  await page.locator("#toolTipButton").hover();
  await expect(page.locator(".tooltip-inner").first()).toContainText("You hovered over the Button");

  await page.locator("#toolTipTextField").hover();
  await page.waitForTimeout(500);
  await expect(page.locator(".tooltip-inner").last()).toContainText("You hovered over the text field");

  await page.goto("https://demoqa.com/menu#", { waitUntil: "networkidle" });
  await page.locator("text=Main Item 2").hover();
  await page.locator("text=SUB SUB LIST »").hover();
  await expect(page.locator("text=Sub Sub Item 1")).toBeVisible();
  await page.locator("text=Sub Sub Item 2").click();
});