exports.config = {
    specs: [
        './specs/**/*.spec.js',
       './captcha/**/app.js'
    ],

    maxInstances: 1,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.colorstreet.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,

    services: ['devtools'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
