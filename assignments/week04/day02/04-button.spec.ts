import { test, expect } from '@playwright/test';

test('LeafGround Button Assignment- Title Check', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://leafground.com/button.xhtml");

    // 2. Write a script to click the button and confirm a title change or any visible response.
    await page.locator('.card').filter({ hasText: "Click and Confirm title." }).getByRole('button').click();
    const title = await page.title();
    expect(title).toBe("Dashboard");

    await page.waitForTimeout(4000);
    await page.close();

})

test('LeafGround Button Assignments', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://leafground.com/button.xhtml");


    // 3. Assert the disabled state of a button.
    await expect(page.locator('.card').filter({ hasText: "Confirm if the button is disabled." }).getByRole('button')).toBeDisabled();

    // 4. Click the Image button and click on any hidden button
    await page.locator('.card').filter({ hasText: "Click Image Button and Click on any hidden button" }).getByRole('button').click();
    let secondarybtn = page.locator("//span[text()='Secondary']");

    await expect(secondarybtn).toBeVisible({ timeout: 5000 })

    await secondarybtn.click();

    // 5. Check how many rounded buttons are present
    const roundedButtons = page.locator('.card').filter({ hasText: "How many rounded buttons are there?" }).getByRole('button')
    const count = await roundedButtons.count();
    console.log(`Number of rounded buttons:  ${count}`);

    await page.waitForTimeout(4000);
    await page.close();

})



