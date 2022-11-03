import { config as sharedConfig } from './wdio.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['selenium-standalone'], 
        capabilities: [{

            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true


        }],

    }
}