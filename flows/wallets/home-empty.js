const util = require('../../util');

module.exports = {
    name: 'home-empty',
    reload: true,
    environment: async page => (
        page.evaluate(() => {
            localStorage.setItem('homeTip', 'accepted');
            localStorage.setItem('agreeDisclaimer', true);
            localStorage.setItem('profile', '{"version":"1.0.0","createdOn":1520148752353,"credentials":[],"disclaimerAccepted":true,"onboardingCompleted":true,"checked":{}}');
        })
    ),
    stage: async page => {}
};
