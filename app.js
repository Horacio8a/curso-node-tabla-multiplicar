const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

const {base, listar, hasta} = argv;



// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// console.log(base);


crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));
