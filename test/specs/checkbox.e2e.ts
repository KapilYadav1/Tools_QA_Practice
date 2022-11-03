import { isAssertClause } from "typescript";
import checkboxesPage from "../pageobjects/checkboxes.page";

describe("My Second demo script", async function () {

    it("Test Case 1", async function () {
        //mocha --> it is used as a test runner
        //chai--> it is basically used  for assertion purpose. It is a assertion library. ways expect, assert, should


        let result = 10 / 2;
        expect(result).toEqual(5);






    })
    it("Test Case 2", async function () {
        //mocha --> it is used as a test runner
        //chai--> it is basically used  for assertion purpose. It is a assertion library. ways expect, assert, should


        let result = 2 * 2;
        expect(result).toEqual(4);






    })

    it("Array", async function () {

        const arr = [1, 2, 3, 4];
        expect(arr).toBeElementsArrayOfSize(4);

    })

    it("String Contains ", async function () {

        const str = "HelloWorlds";
        expect(str).toContain("Hello");
    })
    it("Bollean True", async function () {

        const result = 2 > 5; // return false
        expect(result).toBe(false);

    })





    it("CheckBox Test Case", async function () {
        await checkboxesPage.open();
        await browser.pause(5000);




    })
})