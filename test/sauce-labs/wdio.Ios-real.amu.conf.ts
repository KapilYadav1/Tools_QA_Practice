import { config as sharedConfig } from './wdio.sauce.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            platformName: 'ios',
            browserName: 'Safari',
            'appium:deviceName': 'iPhone.*',
            'appium:platformVersion': '15',
            'appium:automationName': 'XCUITest',


            'sauce:options': {
                build: 'Emulator-${new Date().getTime()}',
            }


        }],




    }
}