const osModule = require('./osModule');
const networkModule = require('./networkModule');

const osInfo = osModule.getOsInfo();
const networkInfo = networkModule.getNetworkInfo();

console.log('Información del sistema operativo:');
for (const [key, value] of Object.entries(osInfo)) {
    console.log(`  ${key}: ${value}`);
};

console.log('----------------------------------');
console.log('Información de la red:');
for (const [interfaceName, details] of Object.entries(networkInfo)) {
    console.log(`  Interfaz ${interfaceName}:`);
    details.forEach(info => {
        console.log(`    Familia: ${info.Family}`);
        console.log(`    Dirección: ${info.Address}`);
        console.log(`    Interno: ${info.Internal}`);
        console.log('                             ');
    });
};
