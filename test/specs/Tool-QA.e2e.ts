
import tooleQA from "../pageobjects/Tool-QA.pages"


describe("Tool QA page Validation", async function () {


    it("Verify home page title is 'ToolsQA'", async function () {

        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        let url: string = browser.config.baseUrl;
        await browser.url(url);
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");

    })


    it("Verify Element Card Options'", async function () {
        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        let url: string = browser.config.baseUrl;
        await browser.url(url);
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.elementCardClick();
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.subItemsOfElementCard();

    })

    it("Verify text box data'", async function () {
        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        let url: string = browser.config.baseUrl;
        await browser.url(url);
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.elementCardClick();
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.ElementsOptionClick("Text Box");
        await tooleQA.Verify_Page_Title("ToolsQA");
        await browser.pause(5000);
        await tooleQA.enterTextBoxData("Kapil", "Kapil@gmail.com", "Test", "Test");
        await browser.pause(5000);
        await tooleQA.getEnterTextBoxData("Kapil", "Kapil@gmail.com", "Test", "Test");


    })


})