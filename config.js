module.exports = {
    appUrl: 'http://localhost:8100',
    outputPath: './output',
    devices: [
        'iPhone 4',
        'iPhone 5',
        'iPhone 6',
        'iPhone 6 Plus',
        'iPhone X',
        'iPad',
        'iPad landscape',
        'iPad Mini',
        'iPad Mini landscape',
        'Microsoft Lumia 950',
        'Nokia N9',
        'Nexus 10',
        'Nexus 4',
        'Nexus 5',
        'Nexus 5X',
        'Nexus 6',
        'Nexus 7',
    ],
    flows: {
        'wallets':    require('./flows/wallets'),
    }
};
