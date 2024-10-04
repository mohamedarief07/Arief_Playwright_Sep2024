import { chromium, test } from "@playwright/test";
test('To launch chromerowser', async () => {

    const browser = await chromium.launch();

    const browserconstext = await browser.newContext();

    const page = await browserconstext.newPage();

    await page.goto("https://login.salesforce.com/");

    await page.waitForTimeout(10000);

        //Get the url of the page
        const url = page.url();
        console.log(`The url of the page is ${url}`);
        
        //Get the title of the page
        const title = await page.title();
        console.log(`The title of the page is ${title}`);

        await page.close();
        await browserconstext.close();
        await browser.close();

})