const os = require('node:os');

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const networkInfo = {};

    Object.keys(interfaces).forEach(interfaceName => {
        const interfaceInfo = interfaces[interfaceName];
        const interfaceInfoArray = [];

        interfaceInfo.forEach(info => {
            interfaceInfoArray.push({
                Family: info.family,
                Address: info.address,
                Internal: info.internal,
            });
        });

        networkInfo[interfaceName] = interfaceInfoArray;
    });

    return networkInfo;
};

module.exports = {getNetworkInfo};
