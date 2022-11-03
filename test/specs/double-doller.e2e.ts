import doubleDoller from "../pageobjects/Double-Doller.pages"


describe("Double Doller Text", async function () {


    it.only("List Text", async function () {

        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        await browser.url('https://webdriver.io/docs/api/');
        await browser.pause(3000);
        await doubleDoller.clickOption();
        console.log("List Text");
        
       await doubleDoller.childElementsText();
       


    })


})