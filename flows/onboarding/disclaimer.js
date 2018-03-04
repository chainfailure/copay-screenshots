const util = require('../../util');

module.exports = {
    name: 'disclaimer',
    reload: true,
    environment: async page => {
        // spoof a completed onboarding procedure.
        await page.evaluate(() => {
            localStorage.setItem('profile', '{"version":"1.0.0","createdOn":1520148752353,"credentials":[],"disclaimerAccepted":false,"onboardingCompleted":true,"checked":{}}"');
        });
    },
    stage: async page => {
        // tick the checkboxes
        await page.evaluate(() => {
            const pageElem = document.querySelector('page-disclaimer');

            let componentInstance = ng.probe(pageElem).componentInstance;

            componentInstance.accepted.first  = true;
            componentInstance.accepted.second = true;
            componentInstance.terms.accepted  = true;

            // force a view update
            ng.probe(getAllAngularRootElements()[0])
                .injector.get(ng.coreTokens.ApplicationRef).tick()

        })

        // wait for ticking animation to finish
        await util.delay(500);
    }
};
