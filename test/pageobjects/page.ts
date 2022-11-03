//import wdio from '../configs/wdio.conf';


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
       return browser.url(`https://the-internet.herokuapp.com/${path}`)
     //   browser.url(browser.config.baseUrl + path);
       // console.log("44444444444444" +browser.config.baseUrl + path);
        
    }
}
