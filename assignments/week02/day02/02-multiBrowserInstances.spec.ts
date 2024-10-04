import { chromium, firefox, test } from "@playwright/test";
test('Verify Multi Browser Tresting', async () => {

    const browser1 = await chromium.launch({ channel: "msedge" });

    const browserconstext1 = await browser1.newContext();

    const pageA1 = await browserconstext1.newPage();

    await pageA1.goto("https://www.redbus.in/");

    await pageA1.waitForTimeout(3000);

    //Get the url of the page
    const urlA1 = pageA1.url();
    console.log(`The url of the pageA1 is ${urlA1}`);

    //Get the title of the page
    const titleA1 = await pageA1.title();
    console.log(`The title of the pageA1 is ${titleA1}`);

    const browser2 = await firefox.launch();

    const browserconstext2 = await browser2.newContext();

    const pageB1 = await browserconstext2.newPage();

    await pageB1.goto("https://www.flipkart.com/");

    await pageB1.waitForTimeout(3000);

    //Get the url of the page
    const urlB1 = pageB1.url();
    console.log(`The url of the pageB1 is ${urlB1}`);

    //Get the title of the page
    const titleB1 = await pageB1.title();
    console.log(`The title of the pageB1 is ${titleB1}`);

})