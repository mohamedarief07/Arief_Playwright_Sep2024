import { test, expect } from '@playwright/test';

test('LeafGround Checkbox Assignment', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://leafground.com/checkbox.xhtml");

    //2. Click on the "Basic Checkbox.” 
    await page.locator("//span[text()='Basic']/preceding-sibling::div[1]").click();
    await page.waitForTimeout(2000);

    //3. Click on the "Notification Checkbox." 4. Verify that the expected message is displayed.
    await page.locator("//span[text()='Ajax']/preceding-sibling::div[1]").click();

    const notificationMessage = await page.locator("//span[text()='Checked']").textContent();
    console.log(`notificationMessage is ${notificationMessage}`);

    expect(notificationMessage).toContain('Checked');

    //Click on your favorite language (assuming it's related to checkboxes).
    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[2]").click();
    await page.waitForTimeout(2000);
    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[3]").click();
    await page.waitForTimeout(2000);
    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[1]").click();

    //6. Click on the "Tri-State Checkbox." 7. Verify which tri-state option has been chosen.
    await page.locator("//h5[text()='Tri State Checkbox']/following::div[@data-iconstates='[\"\",\"ui-icon ui-icon-check\",\"ui-icon ui-icon-closethick\"]']").click();
    const notificationMessageState1 = await page.locator("//p[text()='State = 1']").textContent();
    console.log(`notificationMessage is ${notificationMessageState1}`);

    await page.locator("//h5[text()='Tri State Checkbox']/following::div[@data-iconstates='[\"\",\"ui-icon ui-icon-check\",\"ui-icon ui-icon-closethick\"]']").click();
    const notificationMessageState2 = await page.locator("//p[text()='State = 2']").textContent();
    console.log(`notificationMessage is ${notificationMessageState2}`);

    await page.locator("//h5[text()='Tri State Checkbox']/following::div[@data-iconstates='[\"\",\"ui-icon ui-icon-check\",\"ui-icon ui-icon-closethick\"]']").click();
    const notificationMessageState0 = await page.locator("//p[text()='State = 0']").textContent();
    console.log(`notificationMessage is ${notificationMessageState0}`);
    await page.waitForTimeout(2000);

    //8. Click on the "Toggle Switch." 9. Verify that the expected message is displayed.
    await page.locator("(//h5[text()='Toggle Switch']/following::div)[3]").click();

    const notificationMessageToggle = await page.locator("//span[text()='Checked']").textContent();
    console.log(`notificationMessage is ${notificationMessageToggle}`);

    expect(notificationMessageToggle).toContain('Checked');

    //10. Verify if the Checkbox is disabled.
    await expect(page.locator("(//h5[text()='Verify if check box is disabled']/following::input[@type='checkbox' and @disabled])[1]")).toBeDisabled();

    // Select multiple options on the page
    const checkboxes = page.locator('.card').filter({ hasText: "Select Multiple" }).getByRole('combobox');
    await checkboxes.click();

    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[12]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[11]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[10]").click();

    await page.waitForTimeout(4000);
    await page.close();

})