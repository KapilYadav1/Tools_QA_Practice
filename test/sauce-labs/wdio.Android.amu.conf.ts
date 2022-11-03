import { config as sharedConfig } from './wdio.sauce.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            platformName: 'Android',
            browserName: 'Chrome',
            'appium:deviceName': 'Google Pixel 6 Pro GoogleAPI Emulator',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',


            'sauce:options': {
                build: 'Emulator-${new Date().getTime()}',
            }


        }],




    }
}