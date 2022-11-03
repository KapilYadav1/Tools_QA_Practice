import { config as sharedConfig } from './wdio.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['chromedriver'], capabilities: [{

            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true


        }],

    }
}