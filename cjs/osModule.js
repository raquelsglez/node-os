const os = require('node:os');

function getOsInfo() {
    const osInfo = {
        name: os.platform(),
        type: os.type(),
        version: os.version(),
        architecture: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: Math.round(os.totalmem() / (1024 * 1024)) + ' MB',
        FreeMemory: Math.round(os.freemem() / (1024 * 1024)) + ' MB',
    };
    return osInfo;
};

module.exports = {getOsInfo};
