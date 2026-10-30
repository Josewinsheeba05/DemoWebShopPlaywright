import { test as base, expect, Page } from "@playwright/test";

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    await page.goto(
      "https://demowebshop.tricentis.com/login"
    );

    await page.locator("#Email").fill("sheeba@gmail.com");

    await page.locator("#Password").fill("123456");

    await page.locator("input[value='Log in']").click();

    await use(page);
  },
});

export { expect };
