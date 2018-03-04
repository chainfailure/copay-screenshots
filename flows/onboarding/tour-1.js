const util = require('../../util');

module.exports = {
    name: 'tour-1',
    reload: false,
    environment: async page => {},
    stage: async page => {
        await page.evaluate(() => {
            // trigger navigation to next page.
            ng.probe(document.querySelector('page-onboarding'))
                .componentInstance.getStarted()
        })

        await util.delay(1000);
    }
};
