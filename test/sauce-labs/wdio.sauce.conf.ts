import { config as sharedConfig } from '../configs/wdio.conf';
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: 'oauth-tosachiny-8f213',
        key: '7e5678b8-2803-439e-b338-a66078a420bc',
        region: 'eu', // or 'eu' or 'apac',
        services: ['sauce'],

        specs: [
            './test/specs/*.ts'


        ],



    }
} 