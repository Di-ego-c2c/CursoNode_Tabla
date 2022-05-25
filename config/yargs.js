const argv = require('yargs')
                        
    .options( {
        'b': {
            alias: 'base',
            type: 'number', 
            demandOption: true,
            decription: 'toma la base de la tabla de multiplicar' 
        },
        'h': {
            alias: 'hasta',
            type: 'number', 
            demandOption: true,
            decription: 'limite de valores a multiplicar' 
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe:  'Imprime la tabla de multiplicar en la tabla'
        }   
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        if(isNaN(argv.h)){
            throw 'Hasta donde quieres multiplicar??'

        }
        return true;
    })    
    .argv;

    module.exports = argv;