import Page from "./page"

class Tool_QA extends Page {

    private get elementCardPath() {
        return $("h5=Elements")
    }
    private get elementMenuOptions() {
        return $$("//div[@class='left-pannel']/div[1]/div[1]/div/ul/li");
    }
    public get elementExpandButton() {
        return $("(//span[contains(@class,'group-header')])[1]")
    }

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
        await this.elementExpandButton.isFocused();
        await this.elementExpandButton.click();
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

    }

    public async ElementsOptionClick(expectedOption: string) {
        const count = await (this.elementMenuOptions).length;
        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.elementMenuOptions[i].getText();
            console.log("Real value = " + elementValue);
            if (elementValue === expectedOption) {
                await this.elementMenuOptions[i].isFocused();
                await this.elementMenuOptions[i].click();
                break;
            }
        }
    }

    public async enterTextBoxData(fullName: string, email: string, currentAddress: string, permanentAddress: string) {

        await this.fullNameTextBox.isFocused();
        await this.fullNameTextBox.addValue(fullName);

        await this.emailTextBox.isFocused();
        await this.emailTextBox.addValue(email);

        await this.currentAddressTextBox.isFocused();
        await this.currentAddressTextBox.addValue(currentAddress);

        await this.permanentAddressTextBox.isFocused();
        await this.permanentAddressTextBox.addValue(permanentAddress);

        await this.submitButtonClicked.isFocused();
        await this.submitButtonClicked.click();

    }
    public async getEnterTextBoxData(fullName1: string, email1: string, currentAddress1: string, permanentAddress1: string) {

        let name = await this.getFullNameText.getText();
        let email = await this.getEmailText.getText();
        let currentAddress = await this.getCurrentAddressText.getText();
        let permanentAddress = await this.getPermanentAddressText.getText();

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