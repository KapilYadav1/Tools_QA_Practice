import { validateLocaleAndSetLanguage } from "typescript";
import logs from "../utils/logs";
import Page from "./page";

class shadow extends Page {
    private get getHeading() { return $('h3=Simple template') }
    private get FirstText() { return $("span=Let's have some different text!") }

    private get firstHeadingText() { return $("span[slot='my-text']") }

    private get SecondHeadingText_Shadow() { return $("#content").shadow$$('li') }

    private get secondHeadingTextSecond() { return $$(">>>li") }


    public open() {


        return super.open("/shadowdom");
        logs.addLog("Navigate to URL: /shadowdom ");


    }
    public async verifyHeading() {

        expect(await (await this.getHeading).isDisplayed());
        logs.addLog("Heading Verified");
    }

    public async verifyFirstTextIsDisplayed() {
        expect(await (await this.FirstText).isDisplayed()).toBe(true);



    }

    public async verifyFirstHeadingText() {
        console.log("Test");
        logs.addLog("Verified Header text");

        expect(await (await this.firstHeadingText).getText()).toEqual("Let's have some different text!");

    }

    public async verifySecondHeadingText_Shadow() {

        expect(await this.SecondHeadingText_Shadow[0].getText()).toEqual("Let's have some different text!");
        expect(await this.SecondHeadingText_Shadow[1].getText()).toEqual("In a list!");

    }

    public async verifySecondHeadingText_Deep() {

        expect(await this.secondHeadingTextSecond[0].getText()).toEqual("Let's have some different text!");
        expect(await this.secondHeadingTextSecond[1].getText()).toEqual("In a list!");

    }



}
export default new shadow();