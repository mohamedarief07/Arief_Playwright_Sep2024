import { test } from "@playwright/test";

test('Assignment: 2 Edit a Lead', async ({ page }) => {

    // 1. Navigate to the url http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // 2. Enter the username as ‘Demosalesmanager’
    await page.fill('#username', "demosalesmanager");

    //  3. Enter the password as ‘crmsfa’
    await page.fill('#password', "crmsfa");

    //  4. Click the Login button
    await page.click("[class='decorativeSubmit']");

    //  5. Click CRM/SFA
    await page.click("//a[contains(text(),'CRM/SFA')]");

    //  6. Click Leads
    await page.click("//a[text()='Leads']");

    //  7. Click Find Leads
    await page.click("//a[text()='Find Leads']");


    //  8. Enter the first name
    await page.locator("(//input[@name='firstName'])[3]").fill("Sharif");

    //   9. Click Find Leads button
    await page.click("(//button[@class='x-btn-text' and @type='button'])[7]");

    //  10. Click the first resulting Lead ID
    await page.click("(//a[@class='linktext'])[4]");

    //11. Click Edit
    await page.click("//a[text()='Edit']");

    //  12. Edit Company name
    await page.fill('#updateLeadForm_companyName', 'Edited Sharif Khan Pvt Ltd YEs');

    //13. Edit Annual Revenue
    await page.fill('#updateLeadForm_annualRevenue', '2000000');

    //14. Edit Department
    await page.fill('#updateLeadForm_departmentName', 'Marketing');

    //15. Enter Description   
    await page.fill('#updateLeadForm_description', 'Updated description');

    //  16. Click Update
    await page.click('.smallSubmit');

    //17. Verify the edited fields using appropriate assertions
    console.log(`The Updated Company Name is ${await page.locator("#viewLead_companyName_sp").innerText()}`);
    console.log(`The Updated Annual Revenue is ${await page.locator("#viewLead_annualRevenue_sp").innerText()}`);
    console.log(`The Updated Department is ${await page.locator("#viewLead_departmentName_sp").innerText()}`);
    console.log(`The Updated Description is  ${await page.locator("#viewLead_description_sp").innerText()}`);

    await page.waitForTimeout(4000);
    await page.close();

})