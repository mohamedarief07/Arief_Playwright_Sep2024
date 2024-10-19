import { test, expect } from '@playwright/test';

test('Leafground Dropdown Interactions', async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml");

    //2. Select your favorite UI automation tool using the different select options
    await page.selectOption("//select[@class='ui-selectonemenu']", 'Playwright');

    //3. Get the count and print of all the values
    const dropdown = page.locator(".card").filter({ hasText: "Choose your preferred country." }).locator('div>select>option');
    const dropdownCount = await dropdown.count();
    console.log(`No of values present ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText());
    }
    
    //4. Choose your preferred Country
    await page.click("//label[text()='Select Country']"); // Click on the dropdown to open it
    await page.click("//li[text()='India']"); // Select 'India'


    //5. Confirm Cities belongs to Country is loaded
    await page.waitForSelector("//label[text()='Select City']");
    const cityOptions = await page.$$("//label[text()='Select City']");
    console.log(`Cities loaded: ${cityOptions.length > 0}`);

    //6. Choose any three courses from the dropdown
    const chooseCourse = page.locator(".card").filter({ hasText: "Choose the Course" }).getByRole("button");
    chooseCourse.click();
    await page.click("//li[text()='RestAssured']");
    chooseCourse.click();
    await page.click("//li[text()='PostMan']");
    chooseCourse.click();
    await page.click("//li[text()='Playwright']");

    //Choose a language and print all the values from the dropdown
    await page.click("//label[text()='Select Language']");
    await page.click("//li[text()='Tamil']");

    // Get all language options
    const languages = page.locator(".card").filter({ hasText: "Choose language randomly" }).locator('div>select>option');
    const LangDropdownCount = await languages.count();
    console.log(`No of values present ${LangDropdownCount}`);

    for (let index = 0; index < LangDropdownCount; index++) {
        console.log(await languages.nth(index).innerText());
    }

    //8. Select 'Two' irrespective of the language chosen
    await page.click("//label[text()='Select Values']");
    await page.click("//li[contains(text(),'Select Values')]/parent::ul/li[2]");

    await page.waitForTimeout(4000);
    await page.close();

})