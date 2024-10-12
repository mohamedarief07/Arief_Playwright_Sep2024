import { test } from "@playwright/test";

test('Assignment: 3 Create a new Account', async ({ page }) => {

    // 1. Navigate to the url https://login.salesforce.com/
    await page.goto("https://login.salesforce.com/");

    //  2. Enter username using getByLabel
    await page.getByLabel('Username').fill('ranjini.r@testleaf.com');

    //  3. Enter password using getByLabel
    await page.getByLabel('Password').fill('Testleaf@543');

    //  4. Click Login
    await page.click('#Login');

    //  5. Verify the title and url of the page using appropriate assertions


    //  6. Click App Launcher using the class locator
    await page.click('.slds-icon-waffle');

    //  7. Click View All using getByText
    await page.getByText('View All').click();

    //  8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Search apps or items...').fill("Service");

    //  9. Click Service using index based XPath
    await page.click('(//mark[text()="Service"])[1]');

    //  10. Click Accounts using attribute based CSS selector
    await page.click('[title="Accounts"]');

    //  11. Click New using getByRole
    await page.getByRole('button', { name: 'New' }).click();

    //  12. Enter Account name using attribute based CSS selector
    await page.fill('[name="Name"]',"Sharif Khan");

    //  13. Click Save button using XPath
    await page.click("//button[text()='Save']");
    
    //  14. Verify the toast message displayed

    await page.waitForTimeout(4000);
    await page.close();
})