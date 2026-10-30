import { test, expect } from "../fixtures/loginFixture";

test.describe("Playwright Methods Demo", () => {
     test.setTimeout(200000);

    test.beforeEach(async ({ page }) => {

        await page.goto(
            "https://demowebshop.tricentis.com"
        );
    });

    // -----------------------------
    // CLICK
    // -----------------------------
    test("click()", async ({ page }) => {

        await page.getByRole('link', { name: 'Books' }).first().click();
    });

    // -----------------------------
    // DOUBLE CLICK
    // -----------------------------
    test("dblclick()", async ({ page }) => {

        const books = page.getByRole('link', { name: 'Books' }).first()

        await books.dblclick();
    });

    // -----------------------------
    // FILL
    // -----------------------------
    test("fill()", async ({ page }) => {

        await page.locator("#small-searchterms")
            .fill("Laptop");
    });

    // -----------------------------
    // CLEAR
    // -----------------------------
    test("clear()", async ({ page }) => {

        const searchBox =
            page.locator("#small-searchterms");

        await searchBox.fill("Mobile");

        await searchBox.clear();
    });

    // -----------------------------
    // PRESS
    // -----------------------------
    test("press()", async ({ page }) => {

        await page.locator("#small-searchterms")
            .fill("book");

        await page.locator("#small-searchterms")
            .press("Enter");
    });

    // -----------------------------
    // CHECK RADIO BUTTON
    // -----------------------------
    test("check()", async ({ page }) => {

        await page.goto(
            "https://demowebshop.tricentis.com/register"
        );
        const male = page.locator("//div[@class='gender']//input[@id='gender-male']");
        await male.check();
    });

    // -----------------------------
    // HOVER
    // -----------------------------
    test("hover()", async ({ page }) => {

        await page.getByRole('link', { name: 'Books' }).first()
            .hover();
    });

    // -----------------------------
    // SELECT DROPDOWN
    // -----------------------------
    test("selectOption()", async ({ page }) => {

        await page.goto(
            "https://demowebshop.tricentis.com/books"
        );

        await page.locator("#products-orderby")
            .selectOption("Name: Z to A");
    });

    // -----------------------------
    // GET BY ROLE
    // -----------------------------
    test("getByRole()", async ({ page }) => {

        await page.getByRole('link', { name: 'Books' }).first().click();
    });

    // -----------------------------
    // GET BY TEXT
    // -----------------------------
    test("getByText()", async ({ page }) => {

        await page.getByText('BOOKS').first().click();
    });

    // -----------------------------
    // TEXT CONTENT
    // -----------------------------
    test("textContent()", async ({ page }) => {

        const text =
            await page.locator(".header-logo")
                .textContent();

        console.log(text);
    });

    // -----------------------------
    // INNER TEXT
    // -----------------------------
    test("innerText()", async ({ page }) => {

        const text =
            await page.locator(".header-logo")
                .innerText();

        console.log(text);
    });

    // -----------------------------
    // COUNT
    // -----------------------------
    test("count()", async ({ page }) => {

        const totalLinks =
            await page.locator("a").count();

        console.log(totalLinks);
    });

    // -----------------------------
    // FIRST
    // -----------------------------
    test("first()", async ({ page }) => {

        console.log(
            await page.locator("a")
                .first()
                .textContent()
        );
    });

    // -----------------------------
    // LAST
    // -----------------------------
    test("last()", async ({ page }) => {

        console.log(
            await page.locator("a")
                .last()
                .textContent()
        );
    });

    // -----------------------------
    // IS VISIBLE
    // -----------------------------
    test("isVisible()", async ({ page }) => {

        const visible =
            await page.getByRole('link', { name: 'Books' }).first()
                .isVisible();

        console.log(visible);
    });

    // -----------------------------
    // GET ATTRIBUTE
    // -----------------------------
    test("getAttribute()", async ({ page }) => {

        const value =
            await page.locator("#small-searchterms")
                .getAttribute("id");

        console.log(value);
    });

    // -----------------------------
    // SCREENSHOT
    // -----------------------------
    test("screenshot()", async ({ page }) => {

        await page.screenshot({
            path: "screenshots/homepage.png",
            fullPage: true
        });
    });

    // -----------------------------
    // WAIT FOR SELECTOR
    // -----------------------------
    test("waitForSelector()", async ({ page }) => {

        await page.waitForSelector(
            ".top-menu"
        );
    });

    // -----------------------------
    // ASSERTIONS
    // -----------------------------
    test("Assertions", async ({ page }) => {

        await expect(page)
            .toHaveTitle(/Demo Web Shop/);

        await expect(
            page.getByRole('link', { name: 'Books' }).first()
        ).toBeVisible();
    });

    // -----------------------------
    // KEYBOARD
    // -----------------------------
    test("keyboard()", async ({ page }) => {

        await page.keyboard.press("Tab");

        await page.keyboard.press("Enter");
    });

    // -----------------------------
    // MOUSE
    // -----------------------------
    test("mouse()", async ({ page }) => {

        await page.mouse.move(100, 100);

        await page.mouse.down();

        await page.mouse.up();
    });

    // -----------------------------
    // EVALUATE
    // -----------------------------
    test("evaluate()", async ({ page }) => {

        const title = await page.evaluate(() => {

            return document.title;
        });

        console.log(title);
    });

    // -----------------------------
    // URL VALIDATION
    // -----------------------------
    test("toHaveURL()", async ({ page }) => {

        await page.getByRole('link', { name: 'Books' }).first().click();

        await expect(page)
            .toHaveURL(/books/);
    });

    // -----------------------------
    // CUSTOM FIXTURE USAGE
    // -----------------------------
    test(
        "Using Custom Login Fixture",
        async ({ loggedInPage }) => {

            await loggedInPage
                .getByRole('link', { name: 'Books' }).first()
                .click();

            await expect(loggedInPage)
                .toHaveURL(/books/);
        }
    );
    test("File Upload", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/upload"
    );

    await page.locator("//input[@id='file-upload']")
        .setInputFiles("C:\\Users\\jjohnken\\Downloads\\700714569_GW_DB_AK_071_Issuance_Terr_Rental.pdf");

    await page.locator("//input[@id='file-submit']")
        .click();
    });

    test("File Download", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/download"
    );

    const downloadPromise =
        page.waitForEvent("download");

    await page.locator("//a[text()='Images.txt']").click();

    const download = await downloadPromise;

    await download.saveAs( `downloads/${download.suggestedFilename()}`);  
    });

    test("Drag And Drop", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/drag_and_drop"
    );

    await page.locator("//div[@id='column-a']")
        .dragTo(
            page.locator("//div[@id='column-b']")
        );
    }); 


    test("Drag And Drop Using Mouse", async ({ page }) => {

    await page.goto(
     "https://the-internet.herokuapp.com/drag_and_drop"
    );

    const source =
        page.locator("//div[@id='column-a']");

    const target =
        page.locator("//div[@id='column-b']");

    await source.hover();

    await page.mouse.down();

    await target.hover();

    await page.mouse.up();
    });



    test("Popup Window", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/windows"
    );

    const pagePromise =
        page.waitForEvent("popup");

    await page.locator(
        "//a[text()='Click Here']"
    ).click();

    const popup = await pagePromise;

    console.log(await popup.title());
});

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


test("All IFrame Operations", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/iframe"
    );

    // Total frames on page
    const frames = page.frames();

    console.log("Total Frames:", frames.length);

    // Access iframe using frameLocator
    const editorFrame =
        page.frameLocator("//iframe[@id='mce_0_ifr']");

    // Clear existing content
    await editorFrame
        .locator("//body[@id='tinymce']")
        .clear();

    // Enter text in iframe
    await editorFrame
        .locator("//body[@id='tinymce']")
        .fill("Playwright Iframe Automation");

    // Read text from iframe
    const text = await editorFrame
        .locator("//body[@id='tinymce']")
        .textContent();

    console.log("Iframe Text:", text);

    // Assertion
    await expect(
        editorFrame.locator("//body[@id='tinymce']")
    ).toContainText(
        "Playwright Iframe Automation"
    );

    // Click inside iframe
    await editorFrame
        .locator("//body[@id='tinymce']")
        .click();

    // Frame by name/id
    const frameById =
        page.frame("mce_0_ifr");

    if (frameById) {

        const frameText =
            await frameById.locator("body")
                .textContent();

        console.log(
            "Frame By Id Text:",
            frameText
        );
    }
});


test("Multiple Tabs", async ({ page }) => {

    await page.goto(
        "https://the-internet.herokuapp.com/windows"
    );

    const newTabPromise =
        page.context().waitForEvent("page");

    await page.locator(
        "//a[text()='Click Here']"
    ).click();

    const newTab =
        await newTabPromise;

    await newTab.waitForLoadState();

    console.log(await newTab.title());
});
});