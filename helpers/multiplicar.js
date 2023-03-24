const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {

        let resultado = base * i
        salida += (`${base} X ${i} = ${resultado}\n`);
        consola += (`${base} ${'X'.green} ${i} ${'='.green} ${resultado}\n`);

    }

    if(listar){

        console.log('===================='.green);
        console.log('    TABLA DEL: '.green, base.blue)
        console.log('===================='.green);

        console.log(salida);
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

    // console.log('Archivo txt creado')
}


module.exports = {
    crearArchivo
}