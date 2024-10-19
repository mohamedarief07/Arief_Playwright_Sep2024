import { test, expect } from '@playwright/test';

test('LeafGround Checkbox Assignment', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://leafground.com/radio.xhtml");

  // 2. Identify and assert the default selected radio button.
  const selected = page.locator('.card').filter({ hasText: "Find the default select radio button" }).getByRole('presentation').locator("td>div")
  const count = await selected.count();
  console.log(`count is ${count}`);

  for (let i = 0; i < count; i++) {
    const radioButton = selected.nth(i).locator('input[type="radio"]');
    const isSelected = await radioButton.isChecked();
    if (isSelected) {
      const label = await radioButton.evaluate(node => node.closest('td').innerText.trim());
      console.log(`${label} is selected`);
      break;
    }
  }

  //  3. Click your most favorite browser and assert that the browser is enabled.
  const favoriteBrowser = page.locator('.card').filter({ hasText: "Your most favorite browser" }).getByRole('presentation').locator("td>label").filter({ hasText: "Edge" });
  await favoriteBrowser.click();
  await expect(favoriteBrowser).toBeChecked();

  if (await favoriteBrowser.isChecked()) {
    console.log(`favoriteBrowser :${favoriteBrowser} is checked`);
    
  }

  //  4. Click one of the cities.
  const selectCity = page.locator('.card').filter({ hasText: "UnSelectable" }).locator("//label[text()='Bengaluru']");
  await selectCity.click();
  await expect(selectCity).toBeChecked();

  // 5. Select the age group. Assert the default selected button.
  const selectAge = page.locator('.card').filter({ hasText: "Select the age group" }).locator("div>label").filter({ hasText: "1-20 Years" });
  await selectAge.click();
  await expect(selectAge).toBeChecked();


  await page.waitForTimeout(4000);
  await page.close();
})

test.only('LeafGround Checkbox Assigment', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://leafground.com/radio.xhtml");


  //  3. Click your most favorite browser and assert that the browser is enabled.
  const favoriteBrowser = page.locator('.card').filter({ hasText: "Your most favorite browser" }).getByRole('presentation').locator("td>label").filter({ hasText: "Edge" });
  const favoriteBrowsername = await favoriteBrowser.innerText();
  await favoriteBrowser.click();
  await expect(favoriteBrowser).toBeChecked();

  if (await favoriteBrowser.isChecked()) {
    console.log(`favoriteBrowser :${favoriteBrowsername} is checked`);
    
  }

  await page.waitForTimeout(4000);
  await page.close();
})
