const puppeteer         = require('puppeteer');
const deviceDescriptors = require('puppeteer/DeviceDescriptors');
const config            = require('./config.js');
const fs                = require('fs');
const flows             = config.flows;

config.devices.forEach(async deviceId => {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page    = await browser.newPage();
    const device  = deviceDescriptors[deviceId];

    // check if device shots directory exists and create it otherwise.
    const devicePath = `${config.outputPath}/${deviceId}`;
    if (!fs.existsSync(devicePath))
        fs.mkdirSync(devicePath)

    page.emulate(device);

    await page.goto(config.appUrl, {"waitUntil": "networkidle0"});

    flows.forEach(async flow => {
        flow.steps.forEach(async step => {
            console.log('setting environment', deviceId, flow.name, item.name);
            step.environment(page);

            if (item.step.reload)
                await page.reload({"waitUntil": "networkidle0"});

            console.log('staging page', deviceId, flow.name, item.name);
            await step.stage(page);

            await page.screenshot({
                path: `${devicePath}/${flow.name}-${step.name}.png`
            });
        });
    });
});
