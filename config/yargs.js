

const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'string',
                        demandOption: true,
                        description: 'esta es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        description: 'Muestra la tabla en la consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: 'true',
                        default: 10,
                        description: 'Este es el numero hasta donde quieres la tabla'
                    })
                    .check((argv, options)=> {
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;
