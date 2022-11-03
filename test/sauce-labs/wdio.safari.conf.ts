import { config as sharedConfig } from '../sauce-labs/wdio.sauce.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{


        capabilities: [{

            browserName: 'safari',
            browserVersion: '14',
            platformName: 'macOS 11.00',
            'sauce:options': {
                build: 'ACA-${new Date().getTime()}',
            }


        }],




    }
}