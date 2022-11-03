import alertPage from "../pageobjects/alert.page"
import shadowPage from "../pageobjects/shadow.page";


describe("Shadow Example Test Suit", async function () {
    it("Verify Heading", async function () {

        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        await shadowPage.open();
        await shadowPage.verifyHeading;
        await shadowPage.verifyFirstTextIsDisplayed();
        await shadowPage.verifyFirstHeadingText();




    })

    it("Verify Using Shadow Element", async function () {
        await shadowPage.open();
        await shadowPage.verifyHeading();
        await shadowPage.verifySecondHeadingText_Shadow();
    })

    it("Verify usding Deep Element", async function () {
        await shadowPage.verifySecondHeadingText_Deep();

    })

})