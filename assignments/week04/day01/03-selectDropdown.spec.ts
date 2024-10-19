import { test } from "@playwright/test";
import { validateHeaderValue } from "http";

test('Create a Lead', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill('#username', "democsr");
    await page.fill('#password', "crmsfa");
    await page.click("[class='decorativeSubmit']");

    await page.click("//a[contains(text(),'CRM/SFA')]");

    //  6. Click Leads
    await page.click("//a[text()='Leads']");

    //  7. Click Create Lead
    await page.click("//a[text()='Create Lead']");

    //  8. Fill the Company Name
    await page.fill('#createLeadForm_companyName', "Sharif Khan Pvt Ltd");

    //  9. Fill the First Name
    await page.fill('#createLeadForm_firstName', "Sharif");

    //  10. Fill the Last Name
    await page.fill('#createLeadForm_lastName', "Khan");

    //  11. Fill the Salutation
    await page.fill('#createLeadForm_personalTitle', "Mr");

    //  12. Fill the Title
    await page.fill('#createLeadForm_generalProfTitle', "KKB");

    //dropdown- Source Locate the DropDown
    await page.selectOption("#createLeadForm_dataSourceId", { label: "Direct Mail" });

    //dropdown- Marketing Campaign Locate the DropDown
    await page.selectOption("#createLeadForm_marketingCampaignId", { value: "DEMO_MKTG_CAMP" });

    const marketingDropdown = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");

    const marketingDropdownCount = await marketingDropdown.count();
    console.log(`Marketing Campaign Dropdown count is ${marketingDropdownCount}`);

    for (let index = 0; index < marketingDropdownCount; index++) {
        console.log(await marketingDropdown.nth(index).innerText());
    }

    //dropdown- Industry the DropDown
    await page.selectOption("#createLeadForm_industryEnumId", { index: 6 });

  //dropdown- Preferred Currency Locate the DropDown
  await page.selectOption("#createLeadForm_currencyUomId", { value: 'INR'});

    //dropdown- Country  Locate the DropDown
    await page.selectOption("#createLeadForm_generalCountryGeoId", { label: "India" });


    //dropdown- State Locate the DropDown
    await page.selectOption("#createLeadForm_generalStateProvinceGeoId", { label: "GOA" });

    const stateDropdown = page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option");

    const stateDropdownCount = await stateDropdown.count();
    console.log(`State Dropdown count is ${stateDropdownCount}`);

    for (let index = 0; index < stateDropdownCount; index++) {
        console.log(await stateDropdown.nth(index).innerText());
    }

    //  16. Click Create Lead button
    await page.click("[class='smallSubmit']");

    console.log(`The Company Name is ${await page.locator("#viewLead_companyName_sp").innerText()}`);
    console.log(`The First name is ${await page.locator("#viewLead_firstName_sp").innerText()}`);
    console.log(`The Last name is ${await page.locator("#viewLead_lastName_sp").innerText()}`);
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);

    await page.waitForTimeout(4000);
    await page.close();

})