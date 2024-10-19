import { expect, test } from "@playwright/test";

test('Assignment: 1 Create a Lead', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill('#username', "demosalesmanager");
    await page.fill('#password', "crmsfa");
    await page.click("[class='decorativeSubmit']");

    await page.click("//a[contains(text(),'CRM/SFA')]");

    //  6. Click Leads
    await page.click("//a[text()='Leads']");

    //  7. Click Create Lead
    await page.click("//a[text()='Create Lead']");

    //  8. Fill the Company Name
    const companyName = "Sharif Khan Pvt Ltd";
    await page.fill('#createLeadForm_companyName', companyName);

    //  9. Fill the First Name
    const firstName = "Sharif";
    await page.fill('#createLeadForm_firstName', firstName);

    //  10. Fill the Last Name
    const lastName = "Khan";
    await page.fill('#createLeadForm_lastName', lastName);

    //  11. Fill the Salutation
    await page.fill('#createLeadForm_personalTitle', "Mr");

    //  12. Fill the Title
    await page.fill('#createLeadForm_generalProfTitle', "KKB");

    //  13. Fill the Annual Revenue
    await page.fill('#createLeadForm_generalProfTitle', "10,000");

    //  14. Fill the Department
    await page.fill('#createLeadForm_departmentName', "IT");

    //  15. Fill the Phone number
    await page.fill('#createLeadForm_primaryPhoneNumber', "9789883880");

    //  16. Click Create Lead button
    await page.click("[class='smallSubmit']");

    //17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions

    await expect(page.locator('#viewLead_companyName_sp')).toContainText(companyName);
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(firstName);
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText(lastName);
    const statusText = await page.locator('#viewLead_statusId_sp').textContent();
    expect(statusText).toBe('Assigned');
    //await expect(page.locator('#viewLead_statusId_sp').textContent()).resolves.toBe('Assigned');


    // console.log(`The First name is ${await page.locator("#viewLead_firstName_sp").innerText()}`);
    // console.log(`The Last name is ${await page.locator("#viewLead_lastName_sp").innerText()}`);
    // console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);

    await page.waitForTimeout(4000);
    await page.close();

})