import { test, expect } from "../fixtures/loginFixture";


test("Accept Confirm alerts", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/javascript_alerts"
    );

    page.on("dialog", async dialog => { // important 

        console.log("Message:", dialog.message());
        await dialog.accept();


        page.on("dialog", dialogs);
        async function dialogs(){
        console.log("Message:", dialog.message());
        await dialog.accept();
        }

    });

    await page.locator(
        "//button[text()='Click for JS Confirm']"
    ).click();
});
test("Reject Confirm Popup", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/javascript_alerts"
    );

    page.on("dialog", async a => {

        console.log("Message:", a.message());

        await a.dismiss();
    });

    await page.locator(
        "//button[text()='Click for JS Confirm']"
    ).click();
});

test("Prompt Alert With Input", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/javascript_alerts"
    );

    page.on("dialog", async dialog => {

        console.log("Message:", dialog.message());

        await dialog.accept("John");
    });

    await page.locator(
        "//button[text()='Click for JS Prompt']"
    ).click();
});
