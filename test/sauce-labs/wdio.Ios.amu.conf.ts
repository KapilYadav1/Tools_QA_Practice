import { config as sharedConfig } from './wdio.sauce.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            platformName: 'ios',
            browserName: 'Safari',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '16.0',
            'appium:automationName': 'XCUITest',


            'sauce:options': {
                build: 'Emulator-${new Date().getTime()}',
            }


        }],




    }
}