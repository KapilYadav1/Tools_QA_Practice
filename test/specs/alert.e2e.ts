import alertPage from "../pageobjects/alert.page"
import * as EC from 'wdio-wait-for';


describe("Alert Example Test Suit", async function () {
it("JS Alert", async function () {

    await browser.setTimeout({pageLoad:5000 , implicit:5000});
    await alertPage.open();
    await alertPage.VerifyHeading();
    await alertPage.clickJSAlertButton();
   // await browser.waitUntil(EC.alertIsPresent(),{timeout : 5000});
    await browser.acceptAlert();
    
await alertPage.verifyResult("You successfully clicked an alert");

})

it("JS Confirm--ok Alert", async function () {

    await browser.setTimeout({pageLoad:5000 , implicit:5000});
    await alertPage.open();
    await alertPage.VerifyHeading();
    await alertPage.clickJSConfirmButton();
    await browser.acceptAlert();
    
await alertPage.verifyResult("You clicked: Ok");

})

it("JS Confirm--Cancel Alert", async function () {

    await browser.setTimeout({pageLoad:5000 , implicit:5000});
    await alertPage.open();
    await alertPage.VerifyHeading();
    await alertPage.clickJSConfirmButton();
    await browser.dismissAlert();
    
await alertPage.verifyResult("You clicked: Cancel");

})

it("JS Prompt Alert", async function () {


    const test = "3";
    await browser.setTimeout({pageLoad:5000 , implicit:5000});
    await alertPage.open();
    await alertPage.VerifyHeading();
    await alertPage.clickjsPromptButton();
    await browser.sendAlertText(test);
    await browser.acceptAlert();
    
await alertPage.verifyResult("You entered: "+test);

})

it("Button displaying on the Screen", async function () {
    await alertPage.open();
    await alertPage.VerifyHeading();
    await alertPage.verifyThreeButtonCount();
})
    
})