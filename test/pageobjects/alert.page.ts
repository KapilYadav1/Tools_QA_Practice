import Page from "./page";
import * as EC from 'wdio-wait-for';

class alert extends Page {

    private get heading() { return $('h3=JavaScript Alerts') }
    private get jsAlertButton() { return $("button[onclick='jsAlert()']") }
    private get jsConfirmButton() { return $("button[onclick='jsConfirm()']") }
    private get jsPromptButton() { return $('button=Click for JS Prompt') }
  // private get jsPromptButton() { return $("button[onclick='jsPrompt()']") }

  private get button(){return $$('//button')}
    private get result() { return $('p#result') }

    public async VerifyHeading() {
        await (await this.heading).waitForDisplayed({ timeout: 5000 });

        expect(await (await this.heading).isDisplayed()).toBe(true);

    }

    public async clickJSAlertButton() {
        await (await this.jsAlertButton).waitForEnabled({ timeout: 5000 });
       
        await this.jsAlertButton.click();
        //await browser.waitUntil(EC.alertIsPresent(),{timeout : 5000});

    }

public async clickJSConfirmButton(){
await (await this.jsConfirmButton).waitForClickable({timeout: 5000}) ;
await (await this.jsConfirmButton).click();
}

public async clickjsPromptButton(){
await( await this.jsPromptButton).waitForDisplayed({timeout:5000});
await (await this.jsPromptButton).click();
//await (await this.jsPromptButton).setValue('3');
//await (await this.jsPromptButton).addValue(('3'));
//await (await this.jsPromptButton).acceptAlert();


}

public async verifyResult(expectedResult : String){
    await browser.waitUntil(async()=>await this.result.getText()===expectedResult, {timeout: 3000});
  //  await browser.pause(2000); 
expect(await (await this.result).getText()).toEqual(expectedResult);


}

public async verifyThreeButtonCount(){
await browser.waitUntil(EC.numberOfElementsToBe(this.button,3),{timeout:8000});
expect (await this.button.length).toEqual(3);

}

    public open() {


        return super.open("/javascript_alerts");

    }






}


export default new alert();
