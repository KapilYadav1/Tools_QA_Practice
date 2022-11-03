import { flattenDiagnosticMessageText, NewLineKind } from "typescript";
import { config } from '../configs/wdio.conf';

import Page from "./page"

class Tool_QA extends Page {

    private get elementOption() { return $('body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > aside:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(1) > a:nth-child(1)') }

    private get childElements() { return $$("li[class='theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item'] li>a") }
    ///////////////////////
    private get elementCardPath() {
        return $("h5=Elements")
    }


    private get elementMenuOptions() {
        return $$("//div[@class='left-pannel']/div[1]/div[1]/div/ul/li");
    }


    public get elementExpandButton() {
        return $("(//span[contains(@class,'group-header')])[1]")
    }
    //
    public get fullNameTextBox() {
        return $("#userName")
    }

    public get emailTextBox() {
        return $("#userEmail")
    }
    public get currentAddressTextBox() {
        return $("#currentAddress")
    }
    public get permanentAddressTextBox() {
        return $("#permanentAddress")
    }
    public get submitButtonClicked() {
        return $("#submit")
    }


    public get getFullNameText() {
        return $("#name")

    }

    public get getEmailText() {
        return $("#email")

    }

    public get getCurrentAddressText() {
        return $("//p[@id='currentAddress']")

    }

    public get getPermanentAddressText() {
        return $("//p[@id='permanentAddress']")

    }



    public async Verify_Page_Title(expectedTitle: string) {
        browser.pause(5000);
        let actualTitle = await browser.getTitle();
        console.log("Expected Title---:" + expectedTitle);
        console.log("Actual Title---:" + actualTitle);
        expect(expectedTitle).toStrictEqual(actualTitle);
        console.log("Page Title Verified");

    }

    public async elementCardClick() {
        console.log("Before element Card Click");
        await this.elementCardPath.scrollIntoView();
        await this.elementCardPath.click();

    }
    public async subItemsOfElementCard() {
        await browser.pause(5000);
        await this.ElementsOptionList("Text Box");
        await this.ElementsOptionList("Check Box");
        await browser.pause(5000);
        await (await this.elementExpandButton).isFocused();
        await (await this.elementExpandButton).click();
        await browser.pause(5000);
        var TextBoxStatus: boolean = await this.ElementsOptionList("Text Box");
        var CheckBoxStatus: boolean = await this.ElementsOptionList("Check Box");
        console.log("TextBoxStatus" + TextBoxStatus);
        console.log("CheckBoxStatus" + CheckBoxStatus);
        expect(TextBoxStatus).toEqual(false);
        expect(CheckBoxStatus).toEqual(false);
    }

    public async ElementsOptionList(expectedOption: string) {


        const count = await (this.elementMenuOptions).length;
        console.log("Total element Count:-----" + count);

        let flag = false;
        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.elementMenuOptions[i].getText();
            console.log("Real value = " + elementValue);
            if (elementValue === expectedOption) {
                flag = true;
                break;
            }
        }
        console.log("Flag Status-->" + flag);
        return flag;

        //  expect(flag).toEqual(true);




    }

    //////


    public async ElementsOptionClick(expectedOption: string) {


        const count = await (this.elementMenuOptions).length;

        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.elementMenuOptions[i].getText();
            console.log("Real value = " + elementValue);
            if (elementValue === expectedOption) {

                await (await this.elementMenuOptions[i]).isFocused();
                (await this.elementMenuOptions[i]).click();
                break;
            }
        }
    }
    ////////////////////





    public async enterTextBoxData(fullName: string, email: string, currentAddress: string, permanentAddress: string) {

        await (await this.fullNameTextBox).isFocused();
        await (await this.fullNameTextBox).addValue(fullName);

        await (await this.emailTextBox).isFocused();
        await (await this.emailTextBox).addValue(email);

        await (await this.currentAddressTextBox).isFocused();
        await (await this.currentAddressTextBox).addValue(currentAddress);

        await (await this.permanentAddressTextBox).isFocused();
        await (await this.permanentAddressTextBox).addValue(permanentAddress);


        await (await this.submitButtonClicked).isFocused();
        await (await this.submitButtonClicked).click();

    }



    public async getEnterTextBoxData(fullName1: string, email1: string, currentAddress1: string, permanentAddress1: string) {

        let name = await (await this.getFullNameText).getText();
        let email = await (await this.getEmailText).getText();
        let currentAddress = await (await this.getCurrentAddressText).getText();
        let permanentAddress = await (await this.getPermanentAddressText).getText();


        let actualName: string[] = name.split(":");
        let actualEmail: string[] = email.split(":");
        let actualCurrentAddress: string[] = currentAddress.split(":");
        let actualPermanentAddress: string[] = permanentAddress.split(":");



        console.log("++++++++++----------->" + actualName[1]);
        console.log("-------------->" + actualEmail[1]);
        console.log("------------>" + actualCurrentAddress[1]);
        console.log("------------->" + actualPermanentAddress[1]);


        expect(actualName[1]).toEqual(fullName1);
        expect(actualEmail[1]).toEqual(email1);
        expect(actualCurrentAddress[1]).toEqual(currentAddress1);
        expect(actualPermanentAddress[1]).toEqual(permanentAddress1);





    }





}

export default new Tool_QA();