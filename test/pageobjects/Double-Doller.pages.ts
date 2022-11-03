import { NewLineKind } from "typescript";
import { config } from '../configs/wdio.conf';

import Page from "./page"

class Double_Doller extends Page {

    private get elementOption() { return $('body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > aside:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > div:nth-child(1) > a:nth-child(1)') }

    private get childElements() { return $$("li[class='theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item'] li>a") }

    public async clickOption() {

        
       let net= config.baseUrl;
       console.log("55555:---"+net);//read data from config file

        await (await this.elementOption).waitForClickable({ timeout: 5000 });

        await (await this.elementOption).click();
    }

    public async childElementsText() {

       let link = new Array();
        let flag = false;


        const count = await (this.childElements).length;
        console.log("Total Element Found :-----" + count);

        await this.childElements.forEach(async (link) => {


            if (await link.getText()=== "waitForDisplayed") {
                console.log("pass--->" + await link.getText());
                flag = true;


         }   else{

            flag = false;
         }      


             } );
             console.log("6666" +flag);
            expect(true).toEqual(flag);


    }



    public async childElementsText1() {


        const count = await (this.childElements).length;
        console.log("777777:-----" + count);

        let flag = false;
        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.childElements[i].getText();
            console.log("Real value = " + elementValue);
            if (elementValue === "waitForDisplayed") {
                flag = true;
                break;
            }
        }
        expect(flag).toEqual(true);




    }

    public async childElementsText10() {
        let link = new Array();
        let flag = false;
        const count = await (this.childElements).length;
        console.log("Total Element Found :-----" + count);
        await this.childElements.forEach(async (element) => {
            if (await element.getText() === "waitForDisplayed--") {
                console.log("pass--->" + await element.getText());
                flag = true;
              
            } 
        });
        console.log("33333333"+flag);
         expect(true).toEqual(flag);
        

    }
   
}

export default new Double_Doller();