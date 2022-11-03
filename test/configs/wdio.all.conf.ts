import { config as sharedConfig } from './wdio.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['selenium-standalone'], 
        capabilities: [{

            maxInstances: 1,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true


        },
        {

            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true


        },
        {

            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true


        }],

    }
}