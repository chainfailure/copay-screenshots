const util = require('../../util');

module.exports = {
    name: 'add',
    reload: false,
    environment: async page => {},
    stage: async page => {
        await page.evaluate(() => {
            // trigger navigation to next page.
            ng.probe(document.querySelector('page-home'))
                .componentInstance.goToAddView('via')
        })

        await util.delay(1000);
    }
};
