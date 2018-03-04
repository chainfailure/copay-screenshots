const util = require('../../util');

module.exports = {
    name: 'tour-2',
    reload: false,
    environment: async page => {},
    stage: async page => {
        await page.evaluate(() => {
            // trigger navigation to next page.
            ng.probe(document.querySelector('page-tour'))
                .componentInstance.slideNext()
        })

        await util.delay(500);
    }
};
