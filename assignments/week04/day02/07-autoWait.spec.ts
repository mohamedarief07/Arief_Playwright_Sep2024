import { test, expect } from '@playwright/test';

test('LeafGround Checkbox Assignment', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://leafground.com/waits.xhtml");

    //Wait for an element to become visible before interacting with it.
    await page.locator('.card').filter({ hasText: "Wait for Visibility" }).getByRole('button').filter({ hasText: "Click" }).click();
    await expect(page.locator('.card').filter({ hasText: "Wait for Visibility" }).getByRole('button').filter({ hasText: "I am here" })).toBeVisible({ timeout: 10000 });

    //Wait for an element to disappear from the page.
    await page.locator('.card').filter({ hasText: "Wait for Invisibility" }).getByRole('button').filter({ hasText: "Click" }).click();
    await expect(page.locator('.card').filter({ hasText: "Wait for Invisibility" }).getByRole('button').filter({ hasText: "I am about to hide" })).not.toBeVisible({ timeout: 10000 });

    //Wait for an element to become clickable.
    await page.locator('.card').filter({ hasText: "Wait for Clickability" }).getByRole('button').filter({ hasText: "Click First Button" }).click();
    await expect(page.locator('.card').filter({ hasText: "Wait for Clickability" }).getByRole('button').filter({ hasText: "Click Second" })).toBeVisible();

    //Check for text changes within an element and respond accordingly.
    await page.locator('.card').filter({ hasText: "Wait for Text Change" }).getByRole('button').filter({ hasText: "Click" }).click();
    await expect(page.locator('.card').filter({ hasText: "Wait for Text Change" }).getByRole('button').filter({ hasText: "Did you notice?" })).toBeVisible();

    await page.waitForTimeout(4000);
    await page.close();
})

