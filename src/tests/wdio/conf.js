exports.config = {
    runner: 'local',
    specs: ['./tests/specs/**/*.js'],
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    services: ['chromedriver'],
    mochaOpts: {
        timeout: 60000,
        ui: 'bdd',
    },
};

afterTest: async function (test, context, { error }) {
    if (error) {
        await browser.takeScreenshot();
    }
},
